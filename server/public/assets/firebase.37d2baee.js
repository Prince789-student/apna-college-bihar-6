var Ey=Object.defineProperty,Ty=Object.defineProperties;var wy=Object.getOwnPropertyDescriptors;var xs=Object.getOwnPropertySymbols,vy=Object.getPrototypeOf,Eh=Object.prototype.hasOwnProperty,Th=Object.prototype.propertyIsEnumerable,Ay=Reflect.get;var Ih=(n,e,t)=>e in n?Ey(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,X=(n,e)=>{for(var t in e||(e={}))Eh.call(e,t)&&Ih(n,t,e[t]);if(xs)for(var t of xs(e))Th.call(e,t)&&Ih(n,t,e[t]);return n},xe=(n,e)=>Ty(n,wy(e));var Ms=(n,e)=>{var t={};for(var r in n)Eh.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&xs)for(var r of xs(n))e.indexOf(r)<0&&Th.call(n,r)&&(t[r]=n[r]);return t};var Yt=(n,e,t)=>Ay(vy(n),t,e);var p=(n,e,t)=>new Promise((r,i)=>{var s=u=>{try{c(t.next(u))}catch(h){i(h)}},o=u=>{try{c(t.throw(u))}catch(h){i(h)}},c=u=>u.done?r(u.value):Promise.resolve(u.value).then(s,o);c((t=t.apply(n,e)).next())});import{o as Lo,d as Qa,r as Ry,_ as Sy,W as by}from"./dependencies.10ae7a76.js";const Py=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Cy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let y=(c&15)<<2|h>>6,b=h&63;u||(b=64,o||(y=64)),r.push(t[f],t[m],t[y],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Of(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new ky;const y=s<<2|c>>4;if(r.push(y),h!==64){const b=c<<4&240|h>>2;if(r.push(b),m!==64){const k=h<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ky extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ny=function(n){const e=Of(n);return xf.encodeByteArray(e,!0)},lo=function(n){return Ny(n).replace(/\./g,"")},Mf=function(n){try{return xf.decodeString(n,!0)}catch(e){}return null};/**
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
 */function Lf(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dy=()=>Lf().__FIREBASE_DEFAULTS__,Vy=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Oy=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&Mf(n[1]);return e&&JSON.parse(e)},Uo=()=>{try{return Py()||Dy()||Vy()||Oy()}catch(n){return}},Uf=n=>{var e,t;return(t=(e=Uo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ff=n=>{const e=Uf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Bf=()=>{var n;return(n=Uo())==null?void 0:n.config},qf=n=>{var e;return(e=Uo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function jf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=X({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[lo(JSON.stringify(t)),lo(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function My(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function $f(){var e;const n=(e=Uo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function Ly(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Uy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function By(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gf(){return!$f()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kf(){return!$f()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Qc(){try{return typeof indexedDB=="object"}catch(n){return!1}}function zf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}function qy(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="FirebaseError";class _t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=jy,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$y(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new _t(i,c,r)}}function $y(n,e){return n.replace(Gy,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gy=/\{\$([^}]+)}/g;function Ky(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(wh(s)&&wh(o)){if(!dn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function wh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function zy(n,e){const t=new Wy(n,e);return t.subscribe.bind(t)}class Wy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ya),i.error===void 0&&(i.error=Ya),i.complete===void 0&&(i.complete=Ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ya(){}/**
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
 */function W(n){return n&&n._delegate?n._delegate:n}/**
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
 */function tr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function Yc(n){return p(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}class ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var i;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jy(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return p(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var o;const r=this.normalizeInstanceIdentifier(t),i=(o=this.onInitCallbacks.get(r))!=null?o:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yy(n){return n===Sn?void 0:n}function Jy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Zy={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},eI=ee.INFO,tI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},nI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=tI[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=eI,this._logHandler=nI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function iI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gc="@firebase/app",vh="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Jc("@firebase/app"),sI="@firebase/app-compat",oI="@firebase/analytics-compat",aI="@firebase/analytics",cI="@firebase/app-check-compat",uI="@firebase/app-check",lI="@firebase/auth",hI="@firebase/auth-compat",dI="@firebase/database",fI="@firebase/data-connect",pI="@firebase/database-compat",mI="@firebase/functions",gI="@firebase/functions-compat",_I="@firebase/installations",yI="@firebase/installations-compat",II="@firebase/messaging",EI="@firebase/messaging-compat",TI="@firebase/performance",wI="@firebase/performance-compat",vI="@firebase/remote-config",AI="@firebase/remote-config-compat",RI="@firebase/storage",SI="@firebase/storage-compat",bI="@firebase/firestore",PI="@firebase/ai",CI="@firebase/firestore-compat",kI="firebase",NI="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="[DEFAULT]",DI={[gc]:"fire-core",[sI]:"fire-core-compat",[aI]:"fire-analytics",[oI]:"fire-analytics-compat",[uI]:"fire-app-check",[cI]:"fire-app-check-compat",[lI]:"fire-auth",[hI]:"fire-auth-compat",[dI]:"fire-rtdb",[fI]:"fire-data-connect",[pI]:"fire-rtdb-compat",[mI]:"fire-fn",[gI]:"fire-fn-compat",[_I]:"fire-iid",[yI]:"fire-iid-compat",[II]:"fire-fcm",[EI]:"fire-fcm-compat",[TI]:"fire-perf",[wI]:"fire-perf-compat",[vI]:"fire-rc",[AI]:"fire-rc-compat",[RI]:"fire-gcs",[SI]:"fire-gcs-compat",[bI]:"fire-fst",[CI]:"fire-fst-compat",[PI]:"fire-vertex","fire-js":"fire-js",[kI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map,VI=new Map,yc=new Map;function Ah(n,e){try{n.container.addComponent(e)}catch(t){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gt(n){const e=n.name;if(yc.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;yc.set(e,n);for(const t of ho.values())Ah(t,n);for(const t of VI.values())Ah(t,n);return!0}function nr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Te(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new er("app","Firebase",OI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t,r){this._isDeleted=!1,this._options=X({},e),this._config=X({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=NI;function MI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=X({name:_c,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(t||(t=Bf()),!t)throw an.create("no-options");const s=ho.get(i);if(s){if(dn(t,s.options)&&dn(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new Xy(i);for(const u of yc.values())o.addComponent(u);const c=new xI(t,r,o);return ho.set(i,c),c}function Fo(n=_c){const e=ho.get(n);if(!e&&n===_c&&Bf())return MI();if(!e)throw an.create("no-app",{appName:n});return e}function Je(n,e,t){var o;let r=(o=DI[n])!=null?o:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&c.push("and"),s&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}gt(new ht(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const LI="firebase-heartbeat-database",UI=1,$i="firebase-heartbeat-store";let Ja=null;function Wf(){return Ja||(Ja=Lo(LI,UI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($i)}catch(t){}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),Ja}function FI(n){return p(this,null,function*(){try{const t=(yield Wf()).transaction($i),r=yield t.objectStore($i).get(Hf(n));return yield t.done,r}catch(e){if(e instanceof _t)Ot.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(t.message)}}})}function Rh(n,e){return p(this,null,function*(){try{const r=(yield Wf()).transaction($i,"readwrite");yield r.objectStore($i).put(e,Hf(n)),yield r.done}catch(t){if(t instanceof _t)Ot.warn(t.message);else{const r=an.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(r.message)}}})}function Hf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const BI=1024,qI=30;class jI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return p(this,null,function*(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>qI){const o=KI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ot.warn(r)}})}getHeartbeatsHeader(){return p(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sh(),{heartbeatsToSend:r,unsentEntries:i}=$I(this._heartbeatsCache.heartbeats),s=lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ot.warn(t),""}})}}function Sh(){return new Date().toISOString().substring(0,10)}function $I(n,e=BI){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),bh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class GI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return p(this,null,function*(){return Qc()?zf().then(()=>!0).catch(()=>!1):!1})}read(){return p(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield FI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return p(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Rh(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return p(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Rh(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function bh(n){return lo(JSON.stringify({version:2,heartbeats:n})).length}function KI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(n){gt(new ht("platform-logger",e=>new rI(e),"PRIVATE")),gt(new ht("heartbeat",e=>new jI(e),"PRIVATE")),Je(gc,vh,n),Je(gc,vh,"esm2020"),Je("fire-js","")}zI("");function Qf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WI=Qf,Yf=new er("auth","Firebase",Qf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Jc("@firebase/auth");function HI(n,...e){fo.logLevel<=ee.WARN&&fo.warn(`Auth (${rr}): ${n}`,...e)}function Hs(n,...e){fo.logLevel<=ee.ERROR&&fo.error(`Auth (${rr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,...e){throw Zc(n,...e)}function Xe(n,...e){return Zc(n,...e)}function Xc(n,e,t){const r=xe(X({},WI()),{[e]:t});return new er("auth","Firebase",r).create(e,{appName:n.name})}function Ke(n){return Xc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&dt(n,"argument-error"),Xc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yf.create(n,...e)}function M(n,e,...t){if(!n)throw Zc(e,...t)}function Nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Hs(e),new Error(e)}function xt(n,e){n||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function eu(){return Ph()==="http:"||Ph()==="https:"}function Ph(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eu()||Uy()||"connection"in navigator)?navigator.onLine:!0}function YI(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.shortDelay=e,this.longDelay=t,xt(t>e,"Short delay should be less than long delay!"),this.isMobile=My()||Fy()}get(){return QI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n,e){xt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZI=new as(3e4,6e4);function Se(n,e){return n.tenantId&&!e.tenantId?xe(X({},e),{tenantId:n.tenantId}):e}function be(s,o,c,u){return p(this,arguments,function*(n,e,t,r,i={}){return Xf(n,i,()=>p(this,null,function*(){let h={},f={};r&&(e==="GET"?f=r:h={body:JSON.stringify(r)});const m=jr(X({key:n.config.apiKey},f)).slice(1),y=yield n._getAdditionalHeaders();y["Content-Type"]="application/json",n.languageCode&&(y["X-Firebase-Locale"]=n.languageCode);const b=X({method:e,headers:y},h);return Ly()||(b.referrerPolicy="no-referrer"),n.emulatorConfig&&tr(n.emulatorConfig.host)&&(b.credentials="include"),Jf.fetch()(yield Zf(n,n.config.apiHost,t,m),b)}))})}function Xf(n,e,t){return p(this,null,function*(){n._canInitEmulator=!1;const r=X(X({},JI),e);try{const i=new tE(n),s=yield Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=yield s.json();if("needConfirmation"in o)throw vi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vi(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw vi(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw vi(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xc(n,f,h);dt(n,f)}}catch(i){if(i instanceof _t)throw i;dt(n,"network-request-failed",{message:String(i)})}})}function Ft(s,o,c,u){return p(this,arguments,function*(n,e,t,r,i={}){const h=yield be(n,e,t,r,i);return"mfaPendingCredential"in h&&dt(n,"multi-factor-auth-required",{_serverResponse:h}),h})}function Zf(n,e,t,r){return p(this,null,function*(){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?tu(n.config,i):`${n.config.apiScheme}://${i}`;return XI.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o})}function eE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),ZI.get())})}}function vi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Xe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n){return n!==void 0&&n.getResponse!==void 0}function kh(n){return n!==void 0&&n.enterprise!==void 0}class ep{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return eE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n){return p(this,null,function*(){return(yield be(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""})}function tp(n,e){return p(this,null,function*(){return be(n,"GET","/v2/recaptchaConfig",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:delete",e)})}function iE(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:update",e)})}function po(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function sE(n,e=!1){return p(this,null,function*(){const t=W(n),r=yield t.getIdToken(e),i=qo(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ci(Xa(i.auth_time)),issuedAtTime:Ci(Xa(i.iat)),expirationTime:Ci(Xa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function Xa(n){return Number(n)*1e3}function qo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mf(t);return i?JSON.parse(i):(Hs("Failed to decode base64 JWT payload"),null)}catch(i){return Hs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nh(n){const e=qo(n);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,e,t=!1){return p(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof _t&&oE(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function oE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>p(this,null,function*(){yield this.iteration()}),t)}iteration(){return p(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n){return p(this,null,function*(){var m;const e=n.auth,t=yield n.getIdToken(),r=yield qn(n,po(e,{idToken:t}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?rp(i.providerUserInfo):[],o=cE(n.providerData,s),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ic(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)})}function np(n){return p(this,null,function*(){const e=W(n);yield Ki(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function cE(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rp(n){return n.map(r=>{var i=r,{providerId:e}=i,t=Ms(i,["providerId"]);return{providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n,e){return p(this,null,function*(){const t=yield Xf(n,{},()=>p(this,null,function*(){const r=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=yield Zf(n,i,"/v1/token",`key=${s}`),c=yield n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&tr(n.emulatorConfig.host)&&(u.credentials="include"),Jf.fetch()(o,u)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function lE(n,e){return p(this,null,function*(){return be(n,"POST","/v2/accounts:revokeToken",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Nh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Nh(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return p(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return p(this,null,function*(){const{accessToken:r,refreshToken:i,expiresIn:s}=yield uE(e,t);this.updateTokensAndExpiration(r,i,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Tr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n,e){M(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class pt{constructor(s){var o=s,{uid:e,auth:t,stsTokenManager:r}=o,i=Ms(o,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ic(i.createdAt||void 0,i.lastLoginAt||void 0)}getIdToken(e){return p(this,null,function*(){const t=yield qn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return sE(this,e)}reload(){return np(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>X({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pt(xe(X({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return p(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield Ki(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return p(this,null,function*(){if(Te(this.auth.app))return Promise.reject(Ke(this.auth));const e=yield this.getIdToken();return yield qn(this,rE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return xe(X({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>X({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var j,F,z,H,Y,T,_,E;const r=(j=t.displayName)!=null?j:void 0,i=(F=t.email)!=null?F:void 0,s=(z=t.phoneNumber)!=null?z:void 0,o=(H=t.photoURL)!=null?H:void 0,c=(Y=t.tenantId)!=null?Y:void 0,u=(T=t._redirectEventId)!=null?T:void 0,h=(_=t.createdAt)!=null?_:void 0,f=(E=t.lastLoginAt)!=null?E:void 0,{uid:m,emailVerified:y,isAnonymous:b,providerData:k,stsTokenManager:V}=t;M(m&&V,e,"internal-error");const D=Tr.fromJSON(this.name,V);M(typeof m=="string",e,"internal-error"),Jt(r,e.name),Jt(i,e.name),M(typeof y=="boolean",e,"internal-error"),M(typeof b=="boolean",e,"internal-error"),Jt(s,e.name),Jt(o,e.name),Jt(c,e.name),Jt(u,e.name),Jt(h,e.name),Jt(f,e.name);const $=new pt({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:b,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:f});return k&&Array.isArray(k)&&($.providerData=k.map(v=>X({},v))),u&&($._redirectEventId=u),$}static _fromIdTokenResponse(e,t,r=!1){return p(this,null,function*(){const i=new Tr;i.updateFromServerResponse(t);const s=new pt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return yield Ki(s),s})}static _fromGetAccountInfoResponse(e,t,r){return p(this,null,function*(){const i=t.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Tr;c.updateFromIdToken(r);const u=new pt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ic(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new Map;function Dt(n){xt(n instanceof Function,"Expected a class definition");let e=Dh.get(n);return e?(xt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return p(this,null,function*(){return!0})}_set(e,t){return p(this,null,function*(){this.storage[e]=t})}_get(e){return p(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return p(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}ip.type="NONE";const Ec=ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e,t){return`firebase:${n}:${e}:${t}`}class wr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return p(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield po(this.auth,{idToken:e}).catch(()=>{});return t?pt._fromGetAccountInfoResponse(this.auth,t,e):null}return pt._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return p(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return p(this,null,function*(){if(!t.length)return new wr(Dt(Ec),e,r);const i=(yield Promise.all(t.map(h=>p(this,null,function*(){if(yield h._isAvailable())return h})))).filter(h=>h);let s=i[0]||Dt(Ec);const o=Qs(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=yield h._get(o);if(f){let m;if(typeof f=="string"){const y=yield po(e,{idToken:f}).catch(()=>{});if(!y)break;m=yield pt._fromGetAccountInfoResponse(e,y,f)}else m=pt._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch(f){}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new wr(s,e,r):(s=u[0],c&&(yield s._set(o,c.toJSON())),yield Promise.all(t.map(h=>p(this,null,function*(){if(h!==s)try{yield h._remove(o)}catch(f){}}))),new wr(s,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lp(e))return"Blackberry";if(hp(e))return"Webos";if(op(e))return"Safari";if((e.includes("chrome/")||ap(e))&&!e.includes("edge/"))return"Chrome";if(up(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sp(n=Re()){return/firefox\//i.test(n)}function op(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ap(n=Re()){return/crios\//i.test(n)}function cp(n=Re()){return/iemobile/i.test(n)}function up(n=Re()){return/android/i.test(n)}function lp(n=Re()){return/blackberry/i.test(n)}function hp(n=Re()){return/webos/i.test(n)}function nu(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hE(n=Re()){var e;return nu(n)&&!!((e=window.navigator)!=null&&e.standalone)}function dE(){return By()&&document.documentMode===10}function dp(n=Re()){return nu(n)||up(n)||hp(n)||lp(n)||/windows phone/i.test(n)||cp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n,e=[]){let t;switch(n){case"Browser":t=Vh(Re());break;case"Worker":t=`${Vh(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rr}/${r}`}/**
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
 */class fE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return p(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
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
 */function pE(t){return p(this,arguments,function*(n,e={}){return be(n,"GET","/v2/passwordPolicy",Se(n,e))})}/**
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
 */const mE=6;class gE{constructor(e){var r,i,s,o;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=t.minPasswordLength)!=null?r:mE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))!=null?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!=null?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,i,s,o,c,u;const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=(r=t.meetsMinPasswordLength)!=null?r:!0),t.isValid&&(t.isValid=(i=t.meetsMaxPasswordLength)!=null?i:!0),t.isValid&&(t.isValid=(s=t.containsLowercaseLetter)!=null?s:!0),t.isValid&&(t.isValid=(o=t.containsUppercaseLetter)!=null?o:!0),t.isValid&&(t.isValid=(c=t.containsNumericCharacter)!=null?c:!0),t.isValid&&(t.isValid=(u=t.containsNonAlphanumericCharacter)!=null?u:!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oh(this),this.idTokenSubscription=new Oh(this),this.beforeStateQueue=new fE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue(()=>p(this,null,function*(){var r,i,s;if(!this._deleted&&(this.persistenceManager=yield wr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return p(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return p(this,null,function*(){try{const t=yield po(this,{idToken:e}),r=yield pt._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return p(this,null,function*(){var s;if(Te(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=yield this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=r==null?void 0:r._redirectEventId,u=yield this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{yield this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)})}tryRedirectSignIn(e){return p(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return p(this,null,function*(){try{yield Ki(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=YI()}_delete(){return p(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return p(this,null,function*(){if(Te(this.app))return Promise.reject(Ke(this));const t=e?W(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return p(this,null,function*(){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>p(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return p(this,null,function*(){return Te(this.app)?Promise.reject(Ke(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return Te(this.app)?Promise.reject(Ke(this)):this.queue(()=>p(this,null,function*(){yield this.assertedPersistence.setPersistence(Dt(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return p(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return p(this,null,function*(){const e=yield pE(this),t=new gE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new er("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return p(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield lE(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}_setRedirectUser(e,t){return p(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return p(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=yield wr.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return p(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>p(this,null,function*(){}))),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return p(this,null,function*(){if(e===this.currentUser)return this.queue(()=>p(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(r=(t=this.currentUser)==null?void 0:t.uid)!=null?r:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}directlySetCurrentUser(e){return p(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return p(this,null,function*(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=yield(i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=yield this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e})}_getAppCheckToken(){return p(this,null,function*(){var t;if(Te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=yield(t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken();return e!=null&&e.error&&HI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token})}}function Ne(n){return W(n)}class Oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=zy(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs={loadJS(){return p(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yE(n){cs=n}function ru(n){return cs.loadJS(n)}function IE(){return cs.recaptchaV2Script}function EE(){return cs.recaptchaEnterpriseScript}function TE(){return cs.gapiScript}function pp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=500,vE=6e4,Ls=1e12;class AE{constructor(e){this.auth=e,this.counter=Ls,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new bE(e,this.auth.name,t||{})),this.counter++,r}reset(e){var r;const t=e||Ls;(r=this._widgets.get(t))==null||r.delete(),this._widgets.delete(t)}getResponse(e){var r;const t=e||Ls;return((r=this._widgets.get(t))==null?void 0:r.getResponse())||""}execute(e){return p(this,null,function*(){var r;const t=e||Ls;return(r=this._widgets.get(t))==null||r.execute(),""})}}class RE{constructor(){this.enterprise=new SE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class SE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bE{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;M(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=PE(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(r){}this.isVisible&&this.execute()},vE)},wE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function PE(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const CE="recaptcha-enterprise",ki="NO_RECAPTCHA";class mp{constructor(e){this.type=CE,this.auth=Ne(e)}verify(e="verify",t=!1){return p(this,null,function*(){function r(s){return p(this,null,function*(){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((o,c)=>p(this,null,function*(){tp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ep(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})}))})}function i(s,o,c){const u=window.grecaptcha;kh(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(ki)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RE().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&kh(window.grecaptcha))i(c,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=EE();u.length!==0&&(u+=c),ru(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})})}}function fi(n,e,t,r=!1,i=!1){return p(this,null,function*(){const s=new mp(n);let o;if(i)o=ki;else try{o=yield s.verify(t)}catch(u){o=yield s.verify(t,!0)}const c=X({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c})}function cn(n,e,t,r,i){return p(this,null,function*(){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=yield fi(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(c=>p(this,null,function*(){if(c.code==="auth/missing-recaptcha-token"){const u=yield fi(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)}));else if(i==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const c=yield fi(n,e,t);return r(n,c).catch(u=>p(this,null,function*(){var h;if(((h=n._getRecaptchaConfig())==null?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){const f=yield fi(n,e,t,!1,!0);return r(n,f)}return Promise.reject(u)}))}else{const c=yield fi(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")})}function kE(n){return p(this,null,function*(){const e=Ne(n),t=yield tp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new ep(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new mp(e).verify()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n,e){const t=nr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(dn(s,e!=null?e:{}))return i;dt(i,"already-initialized")}return t.initialize({options:e})}function DE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tc(n,e,t){const r=Ne(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=gp(e),{host:o,port:c}=VE(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(dn(h,r.config.emulator)&&dn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,tr(o)?Yc(`${s}//${o}${u}`):i||OE()}function gp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function VE(n){const e=gp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xh(o)}}}function xh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function OE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,t){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:resetPassword",Se(n,e))})}function ME(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:update",e)})}function LE(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:signUp",e)})}function UE(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:update",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n,e){return p(this,null,function*(){return Ft(n,"POST","/v1/accounts:signInWithPassword",Se(n,e))})}function $o(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:sendOobCode",Se(n,e))})}function BE(n,e){return p(this,null,function*(){return $o(n,e)})}function qE(n,e){return p(this,null,function*(){return $o(n,e)})}function jE(n,e){return p(this,null,function*(){return $o(n,e)})}function $E(n,e){return p(this,null,function*(){return $o(n,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n,e){return p(this,null,function*(){return Ft(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,e))})}function KE(n,e){return p(this,null,function*(){return Ft(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends jo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new zi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new zi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return p(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cn(e,t,"signInWithPassword",FE,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return GE(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}})}_linkToIdToken(e,t){return p(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cn(e,r,"signUpPassword",LE,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return KE(e,{idToken:t,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n,e){return p(this,null,function*(){return Ft(n,"POST","/v1/accounts:signInWithIdp",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="http://localhost";class St extends jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=c,s=Ms(c,["providerId","signInMethod"]);if(!r||!i)return null;const o=new St(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vr(e,t)}buildRequest(){const e={requestUri:zE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:sendVerificationCode",Se(n,e))})}function WE(n,e){return p(this,null,function*(){return Ft(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,e))})}function HE(n,e){return p(this,null,function*(){const t=yield Ft(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,e));if(t.temporaryProof)throw vi(n,"account-exists-with-different-credential",t);return t})}const QE={USER_NOT_FOUND:"user-not-found"};function YE(n,e){return p(this,null,function*(){const t=xe(X({},e),{operation:"REAUTH"});return Ft(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,t),QE)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends jo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ni({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ni({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return WE(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return HE(e,X({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return YE(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Ni({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XE(n){const e=Ti(wi(n)).link,t=e?Ti(wi(e)).deep_link_id:null,r=Ti(wi(n)).deep_link_id;return(r?Ti(wi(r)).link:null)||r||t||e||n}class Go{constructor(e){var o,c,u,h,f,m;const t=Ti(wi(e)),r=(o=t.apiKey)!=null?o:null,i=(c=t.oobCode)!=null?c:null,s=JE((u=t.mode)!=null?u:null);M(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=(h=t.continueUrl)!=null?h:null,this.languageCode=(f=t.lang)!=null?f:null,this.tenantId=(m=t.tenantId)!=null?m:null}static parseLink(e){const t=XE(e);try{return new Go(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.providerId=Mt.PROVIDER_ID}static credential(e,t){return zi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Go.parseLink(t);return M(r,"argument-error"),zi._fromEmailAndCode(e,r.code,r.tenantId)}}Mt.PROVIDER_ID="password";Mt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends $r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ye extends Gr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return M("providerId"in t&&"signInMethod"in t,"argument-error"),St._fromParams(t)}credential(e){return this._credential(xe(X({},e),{nonce:e.rawNonce}))}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),St._fromParams(xe(X({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ye.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ye.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!r&&!i&&!t&&!s||!c)return null;try{return new ye(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch(u){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Gr{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch(t){return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return St._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return st.credential(t,r)}catch(i){return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Gr{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch(t){return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Gr{constructor(){super("twitter.com")}static credential(e,t){return St._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return at.credential(t,r)}catch(i){return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n,e){return p(this,null,function*(){return Ft(n,"POST","/v1/accounts:signUp",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,i=!1){return p(this,null,function*(){const s=yield pt._fromIdTokenResponse(e,r,i),o=Lh(r);return new bt({user:s,providerId:o,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return p(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const i=Lh(r);return new bt({user:e,providerId:i,_tokenResponse:r,operationType:t})})}}function Lh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(n){return p(this,null,function*(){var i;if(Te(n.app))return Promise.reject(Ke(n));const e=Ne(n);if(yield e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new bt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=yield _p(e,{returnSecureToken:!0}),r=yield bt._fromIdTokenResponse(e,"signIn",t,!0);return yield e._updateCurrentUser(r.user),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends _t{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!=null?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new mo(e,t,r,i)}}function yp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(n,e){return p(this,null,function*(){const t=W(n);yield Ko(!0,t,e);const{providerUserInfo:r}=yield iE(t.auth,{idToken:yield t.getIdToken(),deleteProvider:[e]}),i=Ip(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),yield t.auth._persistUserIfCurrent(t),t})}function Ep(n,e,t=!1){return p(this,null,function*(){const r=yield qn(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return bt._forOperation(n,"link",r)})}function Ko(n,e,t){return p(this,null,function*(){yield Ki(e);const r=Ip(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";M(r.has(t)===n,e.auth,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(n,e,t=!1){return p(this,null,function*(){const{auth:r}=n;if(Te(r.app))return Promise.reject(Ke(r));const i="reauthenticate";try{const s=yield qn(n,yp(r,i,e,n),t);M(s.idToken,r,"internal-error");const o=qo(s.idToken);M(o,r,"internal-error");const{sub:c}=o;return M(n.uid===c,r,"user-mismatch"),bt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dt(r,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e,t=!1){return p(this,null,function*(){if(Te(n.app))return Promise.reject(Ke(n));const r="signIn",i=yield yp(n,r,e),s=yield bt._fromIdTokenResponse(n,r,i);return t||(yield n._updateCurrentUser(s.user)),s})}function iu(n,e){return p(this,null,function*(){return Tp(Ne(n),e)})}function wp(n,e){return p(this,null,function*(){const t=W(n);return yield Ko(!1,t,e.providerId),Ep(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(n,e){return p(this,null,function*(){return Ft(n,"POST","/v1/accounts:signInWithCustomToken",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(n,e){return p(this,null,function*(){if(Te(n.app))return Promise.reject(Ke(n));const t=Ne(n),r=yield nT(t,{token:e,returnSecureToken:!0}),i=yield bt._fromIdTokenResponse(t,"signIn",r);return yield t._updateCurrentUser(i.user),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n,e,t){var r;M(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),M(typeof t.linkDomain=="undefined"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n){return p(this,null,function*(){const e=Ne(n);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function iT(n,e,t){return p(this,null,function*(){const r=Ne(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&zo(r,i,t),yield cn(r,i,"getOobCode",qE,"EMAIL_PASSWORD_PROVIDER")})}function sT(n,e,t){return p(this,null,function*(){yield xE(W(n),{oobCode:e,newPassword:t}).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&su(n),r}))})}function oT(n,e){return p(this,null,function*(){yield UE(W(n),{oobCode:e})})}function aT(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(Ke(n));const r=Ne(n),o=yield cn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_p,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&su(n),u}),c=yield bt._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(c.user),c})}function cT(n,e,t){return Te(n.app)?Promise.reject(Ke(n)):iu(W(n),Mt.credential(e,t)).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&su(n),r}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n,e,t){return p(this,null,function*(){const r=Ne(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){M(c.handleCodeInApp,r,"argument-error"),c&&zo(r,o,c)}s(i,t),yield cn(r,i,"getOobCode",jE,"EMAIL_PASSWORD_PROVIDER")})}function lT(n,e){const t=Go.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}function hT(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(Ke(n));const r=W(n),i=Mt.credentialWithLink(e,t||Gi());return M(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),iu(r,i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:createAuthUri",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(n,e){return p(this,null,function*(){const t=eu()?Gi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=yield dT(W(n),r);return i||[]})}function pT(n,e){return p(this,null,function*(){const t=W(n),i={requestType:"VERIFY_EMAIL",idToken:yield n.getIdToken()};e&&zo(t.auth,i,e);const{email:s}=yield BE(t.auth,i);s!==n.email&&(yield n.reload())})}function mT(n,e,t){return p(this,null,function*(){const r=W(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:yield n.getIdToken(),newEmail:e};t&&zo(r.auth,s,t);const{email:o}=yield $E(r.auth,s);o!==n.email&&(yield n.reload())})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n,e){return p(this,null,function*(){return be(n,"POST","/v1/accounts:update",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(r,i){return p(this,arguments,function*(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=W(n),c={idToken:yield s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=yield qn(s,gT(s.auth,c));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const h=s.providerData.find(({providerId:f})=>f==="password");h&&(h.displayName=s.displayName,h.photoURL=s.photoURL),yield s._updateTokensIfNecessary(u)})}function yT(n,e){const t=W(n);return Te(t.auth.app)?Promise.reject(Ke(t.auth)):vp(t,e,null)}function IT(n,e){return vp(W(n),null,e)}function vp(n,e,t){return p(this,null,function*(){const{auth:r}=n,s={idToken:yield n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=yield qn(n,ME(r,s));yield n._updateTokensIfNecessary(o,!0)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(n){var i,s;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(s=(i=qo(n.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Ar(r,c)}}if(!e)return null;switch(e){case"facebook.com":return new TT(r,t);case"github.com":return new wT(r,t);case"google.com":return new vT(r,t);case"twitter.com":return new AT(r,t,n.screenName||null);case"custom":case"anonymous":return new Ar(r,null);default:return new Ar(r,e,t)}}class Ar{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Ap extends Ar{constructor(e,t,r,i){super(e,t,r),this.username=i}}class TT extends Ar{constructor(e,t){super(e,"facebook.com",t)}}class wT extends Ap{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class vT extends Ar{constructor(e,t){super(e,"google.com",t)}}class AT extends Ap{constructor(e,t,r){super(e,"twitter.com",t,r)}}function RT(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:ET(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e){return W(n).setPersistence(e)}function ST(n,e,t,r){return W(n).onIdTokenChanged(e,t,r)}function bT(n,e,t){return W(n).beforeAuthStateChanged(e,t)}function IC(n,e,t,r){return W(n).onAuthStateChanged(e,t,r)}function EC(n){return W(n).signOut()}function PT(n,e){return Ne(n).revokeAccessToken(e)}function CT(n){return p(this,null,function*(){return W(n).delete()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n,e){return be(n,"POST","/v2/accounts/mfaEnrollment:start",Se(n,e))}const go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=1e3,NT=10;class Rr extends Rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NT):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},kT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return p(this,null,function*(){yield Yt(Rr.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return p(this,null,function*(){const t=yield Yt(Rr.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return p(this,null,function*(){yield Yt(Rr.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}Rr.type="LOCAL";const Sp=Rr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends Rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bp.type="SESSION";const ou=bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n){return Promise.all(n.map(e=>p(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Wo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return p(this,null,function*(){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(h=>p(this,null,function*(){return h(t.origin,s)})),u=yield DT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return p(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=Ho("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return window}function OT(n){Ee().location.href=n}/**
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
 */function au(){return typeof Ee().WorkerGlobalScope!="undefined"&&typeof Ee().importScripts=="function"}function xT(){return p(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function MT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function LT(){return au()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="firebaseLocalStorageDb",UT=1,_o="firebaseLocalStorage",Cp="fbase_key";class us{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qo(n,e){return n.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function FT(){const n=indexedDB.deleteDatabase(Pp);return new us(n).toPromise()}function wc(){const n=indexedDB.open(Pp,UT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_o,{keyPath:Cp})}catch(i){t(i)}}),n.addEventListener("success",()=>p(this,null,function*(){const r=n.result;r.objectStoreNames.contains(_o)?e(r):(r.close(),yield FT(),e(yield wc()))}))})}function Fh(n,e,t){return p(this,null,function*(){const r=Qo(n,!0).put({[Cp]:e,value:t});return new us(r).toPromise()})}function BT(n,e){return p(this,null,function*(){const t=Qo(n,!1).get(e),r=yield new us(t).toPromise();return r===void 0?null:r.value})}function Bh(n,e){const t=Qo(n,!0).delete(e);return new us(t).toPromise()}const qT=800,jT=3;class kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return p(this,null,function*(){return this.db?this.db:(this.db=yield wc(),this.db)})}_withRetries(e){return p(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>jT)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return p(this,null,function*(){return au()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return p(this,null,function*(){this.receiver=Wo._getInstance(LT()),this.receiver._subscribe("keyChanged",(e,t)=>p(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>p(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return p(this,null,function*(){var t,r;if(this.activeServiceWorker=yield xT(),!this.activeServiceWorker)return;this.sender=new VT(this.activeServiceWorker);const e=yield this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return p(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||MT()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return p(this,null,function*(){try{if(!indexedDB)return!1;const e=yield wc();return yield Fh(e,go,"1"),yield Bh(e,go),!0}catch(e){}return!1})}_withPendingWrite(e){return p(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(r=>Fh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return p(this,null,function*(){const t=yield this._withRetries(r=>BT(r,e));return this.localCache[e]=t,t})}_remove(e){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(t=>Bh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return p(this,null,function*(){const e=yield this._withRetries(i=>{const s=Qo(i,!1).getAll();return new us(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>p(this,null,function*(){return this._poll()}),qT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kp.type="LOCAL";const Np=kp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e){return be(n,"POST","/v2/accounts/mfaSignIn:start",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=pp("rcb"),$T=new as(3e4,6e4);class GT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ee().grecaptcha)!=null&&e.render)}load(e,t=""){return M(KT(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Ch(Ee().grecaptcha)?Promise.resolve(Ee().grecaptcha):new Promise((r,i)=>{const s=Ee().setTimeout(()=>{i(Xe(e,"network-request-failed"))},$T.get());Ee()[Za]=()=>{Ee().clearTimeout(s),delete Ee()[Za];const c=Ee().grecaptcha;if(!c||!Ch(c)){i(Xe(e,"internal-error"));return}const u=c.render;c.render=(h,f)=>{const m=u(h,f);return this.counter++,m},this.hostLanguage=t,r(c)};const o=`${IE()}?${jr({onload:Za,render:"explicit",hl:t})}`;ru(o).catch(()=>{clearTimeout(s),i(Xe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Ee().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function KT(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class zT{load(e){return p(this,null,function*(){return new AE(e)})}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="recaptcha",WT={theme:"light",type:"image"};class jh{constructor(e,t,r=X({},WT)){this.parameters=r,this.type=Di,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(e),this.isInvisible=this.parameters.size==="invisible",M(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;M(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new zT:new GT,this.validateStartingState()}verify(){return p(this,null,function*(){this.assertNotDestroyed();const e=yield this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ee()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}makeRenderPromise(){return p(this,null,function*(){if(yield this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId})}init(){return p(this,null,function*(){M(eu()&&!au(),this.auth,"internal-error"),yield HT(),this.recaptcha=yield this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=yield nE(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e})}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function HT(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ni._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}function QT(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(Ke(n));const r=Ne(n),i=yield Vp(r,e,W(t));return new Dp(i,s=>iu(r,s))})}function YT(n,e,t){return p(this,null,function*(){const r=W(n);yield Ko(!1,r,"phone");const i=yield Vp(r.auth,e,W(t));return new Dp(i,s=>wp(r,s))})}function Vp(n,e,t){return p(this,null,function*(){var r;if(!n._getRecaptchaConfig())try{yield kE(n)}catch(i){}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){M(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(yield cn(n,o,"mfaSmsEnrollment",(f,m)=>p(this,null,function*(){if(m.phoneEnrollmentInfo.captchaResponse===ki){M((t==null?void 0:t.type)===Di,f,"argument-error");const y=yield ec(f,m,t);return Uh(f,y)}return Uh(f,m)}),"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{M(s.type==="signin",n,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;M(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(yield cn(n,c,"mfaSmsSignIn",(m,y)=>p(this,null,function*(){if(y.phoneSignInInfo.captchaResponse===ki){M((t==null?void 0:t.type)===Di,m,"argument-error");const b=yield ec(m,y,t);return qh(m,b)}return qh(m,y)}),"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(yield cn(n,s,"sendVerificationCode",(h,f)=>p(this,null,function*(){if(f.captchaResponse===ki){M((t==null?void 0:t.type)===Di,h,"argument-error");const m=yield ec(h,f,t);return Mh(h,m)}return Mh(h,f)}),"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t==null||t._reset()}})}function ec(n,e,t){return p(this,null,function*(){M(t.type===Di,n,"argument-error");const r=yield t.verify();M(typeof r=="string",n,"argument-error");const i=X({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i})}/**
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
 */function ls(n,e){return e?Dt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends jo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JT(n){return Tp(n.auth,new cu(n),n.bypassAuthState)}function XT(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),tT(t,new cu(n),n.bypassAuthState)}function ZT(n){return p(this,null,function*(){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Ep(t,new cu(n),n.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>p(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return p(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(c)(u))}catch(h){this.reject(h)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JT;case"linkViaPopup":case"linkViaRedirect":return ZT;case"reauthViaPopup":case"reauthViaRedirect":return XT;default:dt(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new as(2e3,1e4);function tw(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const r=Ne(n);Bo(n,e,$r);const i=ls(r,t);return new sn(r,"signInViaPopup",e,i).executeNotNull()})}function nw(n,e,t){return p(this,null,function*(){const r=W(n);Bo(r.auth,e,$r);const i=ls(r.auth,t);return new sn(r.auth,"linkViaPopup",e,i,r).executeNotNull()})}class sn extends Op{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}executeNotNull(){return p(this,null,function*(){const e=yield this.execute();return M(e,this.auth,"internal-error"),e})}onExecution(){return p(this,null,function*(){xt(this.filter.length===1,"Popup operations only handle one event");const e=Ho();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ew.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="pendingRedirect",Ys=new Map;class Vi extends Op{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return p(this,null,function*(){let e=Ys.get(this.auth._key());if(!e){try{const r=(yield iw(this.resolver,this.auth))?yield Yt(Vi.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return p(this,null,function*(){if(e.type==="signInViaRedirect")return Yt(Vi.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,Yt(Vi.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return p(this,null,function*(){})}cleanUp(){}}function iw(n,e){return p(this,null,function*(){const t=Lp(e),r=Mp(n);if(!(yield r._isAvailable()))return!1;const i=(yield r._get(t))==="true";return yield r._remove(t),i})}function xp(n,e){return p(this,null,function*(){return Mp(n)._set(Lp(e),"true")})}function sw(n,e){Ys.set(n._key(),e)}function Mp(n){return Dt(n._redirectPersistence)}function Lp(n){return Qs(rw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(n,e,t){return aw(n,e,t)}function aw(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(Ke(n));const r=Ne(n);Bo(n,e,$r),yield r._initializationPromise;const i=ls(r,t);return yield xp(i,r),i._openRedirect(r,e,"signInViaRedirect")})}function cw(n,e,t){return uw(n,e,t)}function uw(n,e,t){return p(this,null,function*(){const r=W(n);Bo(r.auth,e,$r),yield r.auth._initializationPromise;const i=ls(r.auth,t);yield Ko(!1,r,e.providerId),yield xp(i,r.auth);const s=yield hw(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)})}function lw(n,e){return p(this,null,function*(){return yield Ne(n)._initializationPromise,Up(n,e,!1)})}function Up(n,e,t=!1){return p(this,null,function*(){if(Te(n.app))return Promise.reject(Ke(n));const r=Ne(n),i=ls(r,e),o=yield new Vi(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,e)),o})}function hw(n){return p(this,null,function*(){const e=Ho(`${n.uid}:::`);return n._redirectEventId=e,yield n.auth._setRedirectUser(n),yield n.auth._persistUserIfCurrent(n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=10*60*1e3;class fw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Fp(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dw&&this.cachedEventUids.clear(),this.cachedEventUids.has($h(e))}saveEventToCache(e){this.cachedEventUids.add($h(e)),this.lastProcessedEventTime=Date.now()}}function $h(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){return p(this,arguments,function*(n,e={}){return be(n,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_w=/^https?/;function yw(n){return p(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield mw(n);for(const t of e)try{if(Iw(t))return}catch(r){}dt(n,"unauthorized-domain")})}function Iw(n){const e=Gi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!_w.test(t))return!1;if(gw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ew=new as(3e4,6e4);function Gh(){const n=Ee().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Tw(n){return new Promise((e,t)=>{var i,s,o;function r(){Gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gh(),t(Xe(n,"network-request-failed"))},timeout:Ew.get()})}if((s=(i=Ee().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ee().gapi)!=null&&o.load)r();else{const c=pp("iframefcb");return Ee()[c]=()=>{gapi.load?r():t(Xe(n,"network-request-failed"))},ru(`${TE()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Js=null,e})}let Js=null;function ww(n){return Js=Js||Tw(n),Js}/**
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
 */const vw=new as(5e3,15e3),Aw="__/auth/iframe",Rw="emulator/auth/iframe",Sw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pw(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tu(e,Rw):`https://${n.config.authDomain}/${Aw}`,r={apiKey:e.apiKey,appName:n.name,v:rr},i=bw.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${jr(r).slice(1)}`}function Cw(n){return p(this,null,function*(){const e=yield ww(n),t=Ee().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Pw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sw,dontclear:!0},r=>new Promise((i,s)=>p(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),c=Ee().setTimeout(()=>{s(o)},vw.get());function u(){Ee().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})})))})}/**
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
 */const kw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nw=500,Dw=600,Vw="_blank",Ow="http://localhost";class Kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function xw(n,e,t,r=Nw,i=Dw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=xe(X({},kw),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Re().toLowerCase();t&&(c=ap(h)?Vw:t),sp(h)&&(e=e||Ow,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[b,k])=>`${y}${b}=${k},`,"");if(hE(h)&&c!=="_self")return Mw(e||"",c),new Kh(null);const m=window.open(e||"",c,f);M(m,n,"popup-blocked");try{m.focus()}catch(y){}return new Kh(m)}function Mw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Lw="__/auth/handler",Uw="emulator/auth/handler",Fw=encodeURIComponent("fac");function zh(n,e,t,r,i,s){return p(this,null,function*(){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:rr,eventId:i};if(e instanceof $r){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ky(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof Gr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=yield n._getAppCheckToken(),h=u?`#${Fw}=${encodeURIComponent(u)}`:"";return`${Bw(n)}?${jr(c).slice(1)}${h}`})}function Bw({config:n}){return n.emulator?tu(n,Uw):`https://${n.authDomain}/${Lw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="webStorageSupport";class qw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ou,this._completeRedirectFn=Up,this._overrideRedirectResult=sw}_openPopup(e,t,r,i){return p(this,null,function*(){var o;xt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=yield zh(e,t,r,Gi(),i);return xw(e,s,Ho())})}_openRedirect(e,t,r,i){return p(this,null,function*(){yield this._originValidation(e);const s=yield zh(e,t,r,Gi(),i);return OT(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return p(this,null,function*(){const t=yield Cw(e),r=new fw(e);return t.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tc,{type:tc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[tc];s!==void 0&&t(!!s),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dp()||op()||nu()}}const jw=qw;var Wh="@firebase/auth",Hh="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}getToken(e){return p(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kw(n){gt(new ht("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fp(n)},h=new _E(r,i,s,u);return DE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gt(new ht("auth-internal",e=>{const t=Ne(e.getProvider("auth").getImmediate());return(r=>new $w(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Wh,Hh,Gw(n)),Je(Wh,Hh,"esm2020")}/**
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
 */const zw=5*60,Ww=qf("authIdTokenMaxAge")||zw;let Qh=null;const Hw=n=>e=>p(void 0,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ww)return;const i=t==null?void 0:t.token;Qh!==i&&(Qh=i,yield fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});function Z(n=Fo()){const e=nr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NE(n,{popupRedirectResolver:jw,persistence:[Np,Sp,ou]}),r=qf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Hw(s.toString());bT(t,o,()=>o(t.currentUser)),ST(t,c=>o(c))}}const i=Uf("auth");return i&&Tc(t,`http://${i}`),t}function Qw(){var n,e;return(e=(n=document.getElementsByTagName("head"))==null?void 0:n[0])!=null?e:document}yE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Xe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Qw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kw("Browser");var Yw="firebase",Jw="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(Yw,Jw,"app");var Yh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var un,Bp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function E(){}E.prototype=_.prototype,T.F=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,S){for(var I=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)I[Qe-2]=arguments[Qe];return _.prototype[w].apply(v,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,E){E||(E=0);const v=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)v[w]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],w=T.g[2];let S=T.g[3],I;I=_+(S^E&(w^S))+v[0]+3614090360&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[1]+3905402710&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[2]+606105819&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[5]+1200080426&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[6]+2821735955&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[9]+2336552879&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[10]+4294925233&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[13]+4254626195&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[14]+2792965006&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(w^S&(E^w))+v[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[6]+3225465664&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[11]+643717713&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[10]+38016083&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[15]+3634488961&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[14]+3275163606&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[3]+4107603335&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[2]+4243563512&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[7]+1735328473&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(E^w^S)+v[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[8]+2272392833&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[11]+1839030562&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[4]+1272893353&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[7]+4139469664&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[0]+3936430074&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[3]+3572445317&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[12]+3873151461&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[15]+530742520&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(w^(E|~S))+v[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[7]+1126891415&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[14]+2878612391&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[3]+2399980690&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[10]+4293915773&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[15]+4264355552&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[6]+2734768916&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[11]+3174756917&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[2]+718787259&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const E=_-this.blockSize,v=this.C;let w=this.h,S=0;for(;S<_;){if(w==0)for(;S<=E;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(v[w++]=T.charCodeAt(S++),w==this.blockSize){i(this,v),w=0;break}}else for(;S<_;)if(v[w++]=T[S++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[_++]=this.g[E]>>>v&255;return T};function s(T,_){var E=c;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function o(T,_){this.h=_;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const S=T[w]|0;v&&S==_||(E[w]=S,v=!1)}this.g=E}var c={};function u(T){return-128<=T&&T<128?s(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return D(h(-T));const _=[];let E=1;for(let v=0;T>=E;v++)_[v]=T/E|0,E*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return D(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(_,8));let v=m;for(let S=0;S<T.length;S+=8){var w=Math.min(8,T.length-S);const I=parseInt(T.substring(S,S+w),_);w<8?(w=h(Math.pow(_,w)),v=v.j(w).add(h(I))):(v=v.j(E),v=v.add(h(I)))}return v}var m=u(0),y=u(1),b=u(16777216);n=o.prototype,n.m=function(){if(V(this))return-D(this).m();let T=0,_=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(V(this))return"-"+D(this).toString(T);const _=h(Math.pow(T,6));var E=this;let v="";for(;;){const w=z(E,_).g;E=$(E,w.j(_));let S=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,k(E))return S+v;for(;S.length<6;)S="0"+S;v=S+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=$(this,T),V(T)?-1:k(T)?0:1};function D(T){const _=T.g.length,E=[];for(let v=0;v<_;v++)E[v]=~T.g[v];return new o(E,~T.h).add(y)}n.abs=function(){return V(this)?D(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=_;w++){let S=v+(this.i(w)&65535)+(T.i(w)&65535),I=(S>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=I>>>16,S&=65535,I&=65535,E[w]=I<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function $(T,_){return T.add(D(_))}n.j=function(T){if(k(this)||k(T))return m;if(V(this))return V(T)?D(this).j(D(T)):D(D(this).j(T));if(V(T))return D(this.j(D(T)));if(this.l(b)<0&&T.l(b)<0)return h(this.m()*T.m());const _=this.g.length+T.g.length,E=[];for(var v=0;v<2*_;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const S=this.i(v)>>>16,I=this.i(v)&65535,Qe=T.i(w)>>>16,$t=T.i(w)&65535;E[2*v+2*w]+=I*$t,j(E,2*v+2*w),E[2*v+2*w+1]+=S*$t,j(E,2*v+2*w+1),E[2*v+2*w+1]+=I*Qe,j(E,2*v+2*w+1),E[2*v+2*w+2]+=S*Qe,j(E,2*v+2*w+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function j(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function F(T,_){this.g=T,this.h=_}function z(T,_){if(k(_))throw Error("division by zero");if(k(T))return new F(m,m);if(V(T))return _=z(D(T),_),new F(D(_.g),D(_.h));if(V(_))return _=z(T,D(_)),new F(D(_.g),_.h);if(T.g.length>30){if(V(T)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var E=y,v=_;v.l(T)<=0;)E=H(E),v=H(v);var w=Y(E,1),S=Y(v,1);for(v=Y(v,2),E=Y(E,2);!k(v);){var I=S.add(v);I.l(T)<=0&&(w=w.add(E),S=I),v=Y(v,1),E=Y(E,1)}return _=$(T,w.j(_)),new F(w,_)}for(w=m;T.l(_)>=0;){for(E=Math.max(1,Math.floor(T.m()/_.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),S=h(E),I=S.j(_);V(I)||I.l(T)>0;)E-=v,S=h(E),I=S.j(_);k(S)&&(S=y),w=w.add(S),T=$(T,I)}return new F(w,T)}n.B=function(T){return z(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)&T.i(v);return new o(E,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)|T.i(v);return new o(E,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)^T.i(v);return new o(E,this.h^T.h)};function H(T){const _=T.g.length+1,E=[];for(let v=0;v<_;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(E,T.h)}function Y(T,_){const E=_>>5;_%=32;const v=T.g.length-E,w=[];for(let S=0;S<v;S++)w[S]=_>0?T.i(S+E)>>>_|T.i(S+E+1)<<32-_:T.i(S+E);return new o(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Bp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,un=o}).apply(typeof Yh!="undefined"?Yh:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Fs=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qp,Ai,jp,Xs,vc,$p,Gp,Kp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fs=="object"&&Fs];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,l){if(l)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],l=l(g),l!=g&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(l){var d=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.push([g,l[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,d){return a.call.apply(a.bind,arguments)}function h(a,l,d){return h=u,h.apply(null,arguments)}function f(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,P){for(var x=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)x[Q-2]=arguments[Q];return l.prototype[A].apply(g,x)}}var y=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function b(a){const l=a.length;if(l>0){const d=Array(l);for(let g=0;g<l;g++)d[g]=a[g];return d}return[]}function k(a,l){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const P=A.length||0;a.length=d+P;for(let x=0;x<P;x++)a[d+x]=A[x]}else a.push(A)}}class V{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function D(a){o.setTimeout(()=>{throw a},0)}function $(){var a=T;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,d){const g=F.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var F=new V(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let H,Y=!1,T=new j,_=()=>{const a=Promise.resolve(void 0);H=()=>{a.then(E)}};function E(){for(var a;a=$();){try{a.h.call(a.g)}catch(d){D(d)}var l=F;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Y=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch(d){}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Qe(a,l){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}m(Qe,w),Qe.prototype.init=function(a,l){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Qe.Z.h.call(this)},Qe.prototype.h=function(){Qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(Math.random()*1e6|0),$_=0;function G_(a,l,d,g,A){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=A,this.key=++$_,this.da=this.fa=!1}function Es(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ts(a,l,d){for(const g in a)l.call(d,a[g],g,a)}function K_(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function _l(a){const l={};for(const d in a)l[d]=a[d];return l}const yl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Il(a,l){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let P=0;P<yl.length;P++)d=yl[P],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function ws(a){this.src=a,this.g={},this.h=0}ws.prototype.add=function(a,l,d,g,A){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const x=Ra(a,l,g,A);return x>-1?(l=a[x],d||(l.fa=!1)):(l=new G_(l,this.src,P,!!g,A),l.fa=d,a.push(l)),l};function Aa(a,l){const d=l.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,l,void 0),P;(P=A>=0)&&Array.prototype.splice.call(g,A,1),P&&(Es(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ra(a,l,d,g){for(let A=0;A<a.length;++A){const P=a[A];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==g)return A}return-1}var Sa="closure_lm_"+(Math.random()*1e6|0),ba={};function El(a,l,d,g,A){if(g&&g.once)return wl(a,l,d,g,A);if(Array.isArray(l)){for(let P=0;P<l.length;P++)El(a,l[P],d,g,A);return null}return d=Na(d),a&&a[$t]?a.J(l,d,c(g)?!!g.capture:!!g,A):Tl(a,l,d,!1,g,A)}function Tl(a,l,d,g,A,P){if(!l)throw Error("Invalid event type");const x=c(A)?!!A.capture:!!A;let Q=Ca(a);if(Q||(a[Sa]=Q=new ws(a)),d=Q.add(l,d,g,x,P),d.proxy)return d;if(g=z_(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(A=x),A===void 0&&(A=!1),a.addEventListener(l.toString(),g,A);else if(a.attachEvent)a.attachEvent(Al(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function z_(){function a(d){return l.call(a.src,a.listener,d)}const l=W_;return a}function wl(a,l,d,g,A){if(Array.isArray(l)){for(let P=0;P<l.length;P++)wl(a,l[P],d,g,A);return null}return d=Na(d),a&&a[$t]?a.K(l,d,c(g)?!!g.capture:!!g,A):Tl(a,l,d,!0,g,A)}function vl(a,l,d,g,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)vl(a,l[P],d,g,A);else g=c(g)?!!g.capture:!!g,d=Na(d),a&&a[$t]?(a=a.i,P=String(l).toString(),P in a.g&&(l=a.g[P],d=Ra(l,d,g,A),d>-1&&(Es(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[P],a.h--)))):a&&(a=Ca(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Ra(l,d,g,A)),(d=a>-1?l[a]:null)&&Pa(d))}function Pa(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[$t])Aa(l.i,a);else{var d=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(d,g,a.capture):l.detachEvent?l.detachEvent(Al(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=Ca(l))?(Aa(d,a),d.h==0&&(d.src=null,l[Sa]=null)):Es(a)}}}function Al(a){return a in ba?ba[a]:ba[a]="on"+a}function W_(a,l){if(a.da)a=!0;else{l=new Qe(l,this);const d=a.listener,g=a.ha||a.src;a.fa&&Pa(a),a=d.call(g,l)}return a}function Ca(a){return a=a[Sa],a instanceof ws?a:null}var ka="__closure_events_fn_"+(Math.random()*1e9>>>0);function Na(a){return typeof a=="function"?a:(a[ka]||(a[ka]=function(l){return a.handleEvent(l)}),a[ka])}function Oe(){v.call(this),this.i=new ws(this),this.M=this,this.G=null}m(Oe,v),Oe.prototype[$t]=!0,Oe.prototype.removeEventListener=function(a,l,d,g){vl(this,a,l,d,g)};function qe(a,l){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new w(l,a);else if(l instanceof w)l.target=l.target||a;else{var A=l;l=new w(g,a),Il(l,A)}A=!0;let P,x;if(d)for(x=d.length-1;x>=0;x--)P=l.g=d[x],A=vs(P,g,!0,l)&&A;if(P=l.g=a,A=vs(P,g,!0,l)&&A,A=vs(P,g,!1,l)&&A,d)for(x=0;x<d.length;x++)P=l.g=d[x],A=vs(P,g,!1,l)&&A}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let g=0;g<d.length;g++)Es(d[g]);delete a.g[l],a.h--}}this.G=null},Oe.prototype.J=function(a,l,d,g){return this.i.add(String(a),l,!1,d,g)},Oe.prototype.K=function(a,l,d,g){return this.i.add(String(a),l,!0,d,g)};function vs(a,l,d,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let P=0;P<l.length;++P){const x=l[P];if(x&&!x.da&&x.capture==d){const Q=x.listener,Ae=x.ha||x.src;x.fa&&Aa(a.i,x),A=Q.call(Ae,g)!==!1&&A}}return A&&!g.defaultPrevented}function H_(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Rl(a){a.g=H_(()=>{a.g=null,a.i&&(a.i=!1,Rl(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Q_ extends v{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Rl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(a){v.call(this),this.h=a,this.g={}}m(Jr,v);var Sl=[];function bl(a){Ts(a.g,function(l,d){this.g.hasOwnProperty(d)&&Pa(l)},a),a.g={}}Jr.prototype.N=function(){Jr.Z.N.call(this),bl(this)},Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Da=o.JSON.stringify,Y_=o.JSON.parse,J_=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Pl(){}function Cl(){}var Xr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Va(){w.call(this,"d")}m(Va,w);function Oa(){w.call(this,"c")}m(Oa,w);var En={},kl=null;function As(){return kl=kl||new Oe}En.Ia="serverreachability";function Nl(a){w.call(this,En.Ia,a)}m(Nl,w);function Zr(a){const l=As();qe(l,new Nl(l))}En.STAT_EVENT="statevent";function Dl(a,l){w.call(this,En.STAT_EVENT,a),this.stat=l}m(Dl,w);function je(a){const l=As();qe(l,new Dl(l,a))}En.Ja="timingevent";function Vl(a,l){w.call(this,En.Ja,a),this.size=l}m(Vl,w);function ei(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function ti(){this.g=!0}ti.prototype.ua=function(){this.g=!1};function X_(a,l,d,g,A,P){a.info(function(){if(a.g)if(P){var x="",Q=P.split("&");for(let ce=0;ce<Q.length;ce++){var Ae=Q[ce].split("=");if(Ae.length>1){const Ce=Ae[0];Ae=Ae[1];const It=Ce.split("_");x=It.length>=2&&It[1]=="type"?x+(Ce+"="+Ae+"&"):x+(Ce+"=redacted&")}}}else x=null;else x=P;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+l+`
`+d+`
`+x})}function Z_(a,l,d,g,A,P,x){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+l+`
`+d+`
`+P+" "+x})}function or(a,l,d,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+ty(a,d)+(g?" "+g:"")})}function ey(a,l){a.info(function(){return"TIMEOUT: "+l})}ti.prototype.info=function(){};function ty(a,l){if(!a.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let x=1;x<g.length;x++)g[x]=""}}}}return Da(P)}catch(P){return l}}var Rs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ol={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xl;function xa(){}m(xa,Pl),xa.prototype.g=function(){return new XMLHttpRequest},xl=new xa;function ni(a){return encodeURIComponent(String(a))}function ny(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function Gt(a,l,d,g){this.j=a,this.i=l,this.l=d,this.S=g||1,this.V=new Jr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ml}function Ml(){this.i=null,this.g="",this.h=!1}var Ll={},Ma={};function La(a,l,d){a.M=1,a.A=bs(yt(l)),a.u=d,a.R=!0,Ul(a,null)}function Ul(a,l){a.F=Date.now(),Ss(a),a.B=yt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Jl(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Ml,a.g=mh(a.j,d?l:null,!a.u),a.P>0&&(a.O=new Q_(h(a.Y,a,a.g),a.P)),l=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Sl[0]=A.toString()),A=Sl);for(let P=0;P<A.length;P++){const x=El(d,A[P],g||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=a.J?_l(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Zr(),X_(a.i,a.v,a.B,a.l,a.S,a.u)}Gt.prototype.ba=function(a){a=a.target;const l=this.O;l&&Wt(a)==3?l.j():this.Y(a)},Gt.prototype.Y=function(a){try{if(a==this.g)e:{const Q=Wt(this.g),Ae=this.g.ya(),ce=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||ih(this.g)))){this.K||Q!=4||Ae==7||(Ae==8||ce<=0?Zr(3):Zr(2)),Ua(this);var l=this.g.ca();this.X=l;var d=ry(this);if(this.o=l==200,Z_(this.i,this.v,this.B,this.l,this.S,Q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var P=g;break t}}P=null}if(a=P)or(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Fa(this,a);else{this.o=!1,this.m=3,je(12),Tn(this),ri(this);break e}}if(this.R){a=!0;let Ce;for(;!this.K&&this.C<d.length;)if(Ce=iy(this,d),Ce==Ma){Q==4&&(this.m=4,je(14),a=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==Ll){this.m=4,je(15),or(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else or(this.i,this.l,Ce,null),Fa(this,Ce);if(Fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,je(16),a=!1),this.o=this.o&&a,!a)or(this.i,this.l,d,"[Invalid Chunked Response]"),Tn(this),ri(this);else if(d.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Wa(x),x.P=!0,je(11))}}else or(this.i,this.l,d,null),Fa(this,d);Q==4&&Tn(this),this.o&&!this.K&&(Q==4?hh(this.j,this):(this.o=!1,Ss(this)))}else yy(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,je(12)):(this.m=0,je(13)),Tn(this),ri(this)}}}catch(Q){}finally{}};function ry(a){if(!Fl(a))return a.g.la();const l=ih(a.g);if(l==="")return"";let d="";const g=l.length,A=Wt(a.g)==4;if(!a.h.i){if(typeof TextDecoder=="undefined")return Tn(a),ri(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<g;P++)a.h.h=!0,d+=a.h.i.decode(l[P],{stream:!(A&&P==g-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function Fl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function iy(a,l){var d=a.C,g=l.indexOf(`
`,d);return g==-1?Ma:(d=Number(l.substring(d,g)),isNaN(d)?Ll:(g+=1,g+d>l.length?Ma:(l=l.slice(g,g+d),a.C=g+d,l)))}Gt.prototype.cancel=function(){this.K=!0,Tn(this)};function Ss(a){a.T=Date.now()+a.H,Bl(a,a.H)}function Bl(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ei(h(a.aa,a),l)}function Ua(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Gt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ey(this.i,this.B),this.M!=2&&(Zr(),je(17)),Tn(this),this.m=2,ri(this)):Bl(this,this.T-a)};function ri(a){a.j.I==0||a.K||hh(a.j,a)}function Tn(a){Ua(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,bl(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Fa(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||Ba(d.h,a))){if(!a.L&&Ba(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(l)}catch(ce){g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ds(d),ks(d);else break e;za(d),je(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ei(h(d.Va,d),6e3));$l(d.h)<=1&&d.ta&&(d.ta=void 0)}else vn(d,11)}else if((a.L||d.g==a)&&Ds(d),!I(l))for(A=d.Ba.g.parse(l),l=0;l<A.length;l++){let ce=A[l];const Ce=ce[0];if(!(Ce<=d.K))if(d.K=Ce,ce=ce[1],d.I==2)if(ce[0]=="c"){d.M=ce[1],d.ba=ce[2];const It=ce[3];It!=null&&(d.ka=It,d.j.info("VER="+d.ka));const An=ce[4];An!=null&&(d.za=An,d.j.info("SVER="+d.za));const Ht=ce[5];Ht!=null&&typeof Ht=="number"&&Ht>0&&(g=1.5*Ht,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Qt=a.g;if(Qt){const Os=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Os){var P=g.h;P.g||Os.indexOf("spdy")==-1&&Os.indexOf("quic")==-1&&Os.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(qa(P,P.h),P.h=null))}if(g.G){const Ha=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ha&&(g.wa=Ha,ue(g.J,g.G,Ha))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var x=a;if(g.na=ph(g,g.L?g.ba:null,g.W),x.L){Gl(g.h,x);var Q=x,Ae=g.O;Ae&&(Q.H=Ae),Q.D&&(Ua(Q),Ss(Q)),g.g=x}else uh(g);d.i.length>0&&Ns(d)}else ce[0]!="stop"&&ce[0]!="close"||vn(d,7);else d.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?vn(d,7):Ka(d):ce[0]!="noop"&&d.l&&d.l.qa(ce),d.A=0)}}Zr(4)}catch(ce){}}var sy=class{constructor(a,l){this.g=a,this.map=l}};function ql(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $l(a){return a.h?1:a.g?a.g.size:0}function Ba(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function qa(a,l){a.g?a.g.add(l):a.h=l}function Gl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}ql.prototype.cancel=function(){if(this.i=Kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Kl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return b(a.i)}var zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oy(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,P=null;g>=0?(A=a[d].substring(0,g),P=a[d].substring(g+1)):A=a[d],l(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Kt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof Kt?(this.l=a.l,ii(this,a.j),this.o=a.o,this.g=a.g,si(this,a.u),this.h=a.h,ja(this,Xl(a.i)),this.m=a.m):a&&(l=String(a).match(zl))?(this.l=!1,ii(this,l[1]||"",!0),this.o=oi(l[2]||""),this.g=oi(l[3]||"",!0),si(this,l[4]),this.h=oi(l[5]||"",!0),ja(this,l[6]||"",!0),this.m=oi(l[7]||"")):(this.l=!1,this.i=new ci(null,this.l))}Kt.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(ai(l,Wl,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(ai(l,Wl,!0),"@"),a.push(ni(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ai(d,d.charAt(0)=="/"?uy:cy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ai(d,hy)),a.join("")},Kt.prototype.resolve=function(a){const l=yt(this);let d=!!a.j;d?ii(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var g=a.h;if(d)si(l,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=l.h.lastIndexOf("/");A!=-1&&(g=l.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let x=0;x<A.length;){const Q=A[x++];Q=="."?g&&x==A.length&&P.push(""):Q==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&x==A.length&&P.push("")):(P.push(Q),g=!0)}g=P.join("/")}else g=A}return d?l.h=g:d=a.i.toString()!=="",d?ja(l,Xl(a.i)):d=!!a.m,d&&(l.m=a.m),l};function yt(a){return new Kt(a)}function ii(a,l,d){a.j=d?oi(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function si(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function ja(a,l,d){l instanceof ci?(a.i=l,dy(a.i,a.l)):(d||(l=ai(l,ly)),a.i=new ci(l,a.l))}function ue(a,l,d){a.i.set(l,d)}function bs(a){return ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function oi(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ai(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,ay),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ay(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wl=/[#\/\?@]/g,cy=/[#\?:]/g,uy=/[#\?]/g,ly=/[#\?@]/g,hy=/#/g;function ci(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function wn(a){a.g||(a.g=new Map,a.h=0,a.i&&oy(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=ci.prototype,n.add=function(a,l){wn(this),this.i=null,a=ar(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Hl(a,l){wn(a),l=ar(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Ql(a,l){return wn(a),l=ar(a,l),a.g.has(l)}n.forEach=function(a,l){wn(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(l,A,g,this)},this)},this)};function Yl(a,l){wn(a);let d=[];if(typeof l=="string")Ql(a,l)&&(d=d.concat(a.g.get(ar(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}n.set=function(a,l){return wn(this),this.i=null,a=ar(this,a),Ql(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=Yl(this,a),a.length>0?String(a[0]):l):l};function Jl(a,l,d){Hl(a,l),d.length>0&&(a.i=null,a.g.set(ar(a,l),b(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var d=l[g];const A=ni(d);d=Yl(this,d);for(let P=0;P<d.length;P++){let x=A;d[P]!==""&&(x+="="+ni(d[P])),a.push(x)}}return this.i=a.join("&")};function Xl(a){const l=new ci;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function ar(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function dy(a,l){l&&!a.j&&(wn(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(Hl(this,g),Jl(this,A,d))},a)),a.j=l}function fy(a,l){const d=new ti;if(o.Image){const g=new Image;g.onload=f(zt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=f(zt,d,"TestLoadImage: error",!1,l,g),g.onabort=f(zt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=f(zt,d,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function py(a,l){const d=new ti,g=new AbortController,A=setTimeout(()=>{g.abort(),zt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(A),P.ok?zt(d,"TestPingServer: ok",!0,l):zt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),zt(d,"TestPingServer: error",!1,l)})}function zt(a,l,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch(P){}}function my(){this.g=new J_}function $a(a){this.i=a.Sb||null,this.h=a.ab||!1}m($a,Pl),$a.prototype.g=function(){return new Ps(this.i,this.h)};function Ps(a,l){Oe.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ps,Oe),n=Ps.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,li(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?ui(this):li(this),this.readyState==3&&Zl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ui(this))},n.Na=function(a){this.g&&(this.response=a,ui(this))},n.ga=function(){this.g&&ui(this)};function ui(a){a.readyState=4,a.l=null,a.j=null,a.B=null,li(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function eh(a){let l="";return Ts(a,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function Ga(a,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=eh(d),typeof a=="string"?d!=null&&ni(d):ue(a,l,d))}function fe(a){Oe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(fe,Oe);var gy=/^https?$/i,_y=["POST","PUT"];n=fe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xl.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){th(this,P);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(_y,l,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of d)this.g.setRequestHeader(P,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){th(this,P)}};function th(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,nh(a),Cs(a)}function nh(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),Cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cs(this,!0)),fe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?rh(this):this.Xa())},n.Xa=function(){rh(this)};function rh(a){if(a.h&&typeof s!="undefined"){if(a.v&&Wt(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),Wt(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=P===0){let x=String(a.D).match(zl)[1]||null;!x&&o.self&&o.self.location&&(x=o.self.location.protocol.slice(0,-1)),g=!gy.test(x?x.toLowerCase():"")}d=g}if(d)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var A=Wt(a)>2?a.g.statusText:""}catch(x){A=""}a.l=A+" ["+a.ca()+"]",nh(a)}}finally{Cs(a)}}}}function Cs(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||qe(a,"ready");try{d.onreadystatechange=null}catch(g){}}}n.isActive=function(){return!!this.g};function Wt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Wt(this)>2?this.g.status:-1}catch(a){return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Y_(l)}};function ih(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(l){return null}}function yy(a){const l={};a=(a.g&&Wt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var d=ny(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[A]||[];l[A]=P,P.push(d)}K_(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function sh(a){this.za=0,this.i=[],this.j=new ti,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hi("baseRetryDelayMs",5e3,a),this.Za=hi("retryDelaySeedMs",1e4,a),this.Ta=hi("forwardChannelMaxRetries",2,a),this.va=hi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ql(a&&a.concurrentRequestLimit),this.Ba=new my,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=sh.prototype,n.ka=8,n.I=1,n.connect=function(a,l,d,g){je(0),this.W=a,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=ph(this,null,this.W),Ns(this)};function Ka(a){if(oh(a),a.I==3){var l=a.V++,d=yt(a.J);if(ue(d,"SID",a.M),ue(d,"RID",l),ue(d,"TYPE","terminate"),di(a,d),l=new Gt(a,a.j,l),l.M=2,l.A=bs(yt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch(g){}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=mh(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ss(l)}fh(a)}function ks(a){a.g&&(Wa(a),a.g.cancel(),a.g=null)}function oh(a){ks(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ds(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ns(a){if(!jl(a.h)&&!a.m){a.m=!0;var l=a.Ea;H||_(),Y||(H(),Y=!0),T.add(l,a),a.D=0}}function Iy(a,l){return $l(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ei(h(a.Ea,a,l),dh(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Gt(this,this.j,a);let P=this.o;if(this.U&&(P?(P=_l(P),Il(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=ch(this,A,l),d=yt(this.J),ue(d,"RID",a),ue(d,"CVER",22),this.G&&ue(d,"X-HTTP-Session-Id",this.G),di(this,d),P&&(this.R?l="headers="+ni(eh(P))+"&"+l:this.u&&Ga(d,this.u,P)),qa(this.h,A),this.Ra&&ue(d,"TYPE","init"),this.S?(ue(d,"$req",l),ue(d,"SID","null"),A.U=!0,La(A,d,null)):La(A,d,l),this.I=2}}else this.I==3&&(a?ah(this,a):this.i.length==0||jl(this.h)||ah(this))};function ah(a,l){var d;l?d=l.l:d=a.V++;const g=yt(a.J);ue(g,"SID",a.M),ue(g,"RID",d),ue(g,"AID",a.K),di(a,g),a.u&&a.o&&Ga(g,a.u,a.o),d=new Gt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=ch(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),qa(a.h,d),La(d,g,l)}function di(a,l){a.H&&Ts(a.H,function(d,g){ue(l,g,d)}),a.l&&Ts({},function(d,g){ue(l,g,d)})}function ch(a,l,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var A=a.i;let Q=-1;for(;;){const Ae=["count="+d];Q==-1?d>0?(Q=A[0].g,Ae.push("ofs="+Q)):Q=0:Ae.push("ofs="+Q);let ce=!0;for(let Ce=0;Ce<d;Ce++){var P=A[Ce].g;const It=A[Ce].map;if(P-=Q,P<0)Q=Math.max(0,A[Ce].g-100),ce=!1;else try{P="req"+P+"_"||"";try{var x=It instanceof Map?It:Object.entries(It);for(const[An,Ht]of x){let Qt=Ht;c(Ht)&&(Qt=Da(Ht)),Ae.push(P+An+"="+encodeURIComponent(Qt))}}catch(An){throw Ae.push(P+"type="+encodeURIComponent("_badmap")),An}}catch(An){g&&g(It)}}if(ce){x=Ae.join("&");break e}}x=void 0}return a=a.i.splice(0,d),l.G=a,x}function uh(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;H||_(),Y||(H(),Y=!0),T.add(l,a),a.A=0}}function za(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ei(h(a.Da,a),dh(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,lh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ei(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,je(10),ks(this),lh(this))};function Wa(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function lh(a){a.g=new Gt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=yt(a.na);ue(l,"RID","rpc"),ue(l,"SID",a.M),ue(l,"AID",a.K),ue(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&ue(l,"TO",a.ia),ue(l,"TYPE","xmlhttp"),di(a,l),a.u&&a.o&&Ga(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=bs(yt(l)),d.u=null,d.R=!0,Ul(d,a)}n.Va=function(){this.C!=null&&(this.C=null,ks(this),za(this),je(19))};function Ds(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function hh(a,l){var d=null;if(a.g==l){Ds(a),Wa(a),a.g=null;var g=2}else if(Ba(a.h,l))d=l.G,Gl(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var A=a.D;g=As(),qe(g,new Vl(g,d)),Ns(a)}else uh(a);else if(A=l.m,A==3||A==0&&l.X>0||!(g==1&&Iy(a,l)||g==2&&za(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),A){case 1:vn(a,5);break;case 4:vn(a,10);break;case 3:vn(a,6);break;default:vn(a,2)}}}function dh(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function vn(a,l){if(a.j.info("Error code "+l),l==2){var d=h(a.bb,a),g=a.Ua;const A=!g;g=new Kt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ii(g,"https"),bs(g),A?fy(g.toString(),d):py(g.toString(),d)}else je(2);a.I=0,a.l&&a.l.pa(l),fh(a),oh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function fh(a){if(a.I=0,a.ja=[],a.l){const l=Kl(a.h);(l.length!=0||a.i.length!=0)&&(k(a.ja,l),k(a.ja,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.oa()}}function ph(a,l,d){var g=d instanceof Kt?yt(d):new Kt(d);if(g.g!="")l&&(g.g=l+"."+g.g),si(g,g.u);else{var A=o.location;g=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const P=new Kt(null);g&&ii(P,g),l&&(P.g=l),A&&si(P,A),d&&(P.h=d),g=P}return d=a.G,l=a.wa,d&&l&&ue(g,d,l),ue(g,"VER",a.ka),di(a,g),g}function mh(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new fe(new $a({ab:d})):new fe(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gh(){}n=gh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Vs(){}Vs.prototype.g=function(a,l){return new Ze(a,l)};function Ze(a,l){Oe.call(this),this.g=new sh(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!I(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!I(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new cr(this)}m(Ze,Oe),Ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){Ka(this.g)},Ze.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Da(a),a=d);l.i.push(new sy(l.Ya++,a)),l.I==3&&Ns(l)},Ze.prototype.N=function(){this.g.l=null,delete this.j,Ka(this.g),delete this.g,Ze.Z.N.call(this)};function _h(a){Va.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}m(_h,Va);function yh(){Oa.call(this),this.status=1}m(yh,Oa);function cr(a){this.g=a}m(cr,gh),cr.prototype.ra=function(){qe(this.g,"a")},cr.prototype.qa=function(a){qe(this.g,new _h(a))},cr.prototype.pa=function(a){qe(this.g,new yh)},cr.prototype.oa=function(){qe(this.g,"b")},Vs.prototype.createWebChannel=Vs.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,Kp=function(){return new Vs},Gp=function(){return As()},$p=En,vc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,Xs=Rs,Ol.COMPLETE="complete",jp=Ol,Cl.EventType=Xr,Xr.OPEN="a",Xr.CLOSE="b",Xr.ERROR="c",Xr.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Ai=Cl,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa,qp=fe}).apply(typeof Fs!="undefined"?Fs:typeof self!="undefined"?self:typeof window!="undefined"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr="12.11.0";function Xw(n){Kr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jn=new Jc("@firebase/firestore");function mr(){return jn.logLevel}function N(n,...e){if(jn.logLevel<=ee.DEBUG){const t=e.map(uu);jn.debug(`Firestore (${Kr}): ${n}`,...t)}}function Ge(n,...e){if(jn.logLevel<=ee.ERROR){const t=e.map(uu);jn.error(`Firestore (${Kr}): ${n}`,...t)}}function fn(n,...e){if(jn.logLevel<=ee.WARN){const t=e.map(uu);jn.warn(`Firestore (${Kr}): ${n}`,...t)}}function uu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,zp(n,r,t)}function zp(n,e,t){let r=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(i){r+=" CONTEXT: "+t}throw Ge(r),new Error(r)}function B(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||zp(e,i,r)}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(De.UNAUTHENTICATED))}shutdown(){}}class ev{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tv{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){B(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new At;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new At,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(()=>p(this,null,function*(){yield u.promise,yield i(this.currentUser)}))},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new At)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string",31837,{l:r}),new Wp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string",2055,{h:e}),new De(e)}}class nv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class rv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new nv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Te(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){B(this.o===void 0,3512);const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(B(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Jh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=sv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function Ac(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return nc(i)===nc(s)?G(i,s):nc(i)?1:-1}return G(n.length,e.length)}const ov=55296,av=57343;function nc(n){const e=n.charCodeAt(0);return e>=ov&&e<=av}function Pr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Hp(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="__name__";class Et{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Et?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Et.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return G(e.length,t.length)}static compareSegments(e,t){const r=Et.isNumericId(e),i=Et.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Et.extractNumericId(e).compare(Et.extractNumericId(t)):Ac(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return un.fromString(e.substring(4,e.length-2))}}class ie extends Et{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const cv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends Et{construct(e,t,r){return new de(e,t,r)}static isValidIdentifier(e){return cv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xh}static keyField(){return new de([Xh])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Qp(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uv(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zh(n){if(!L.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ed(n){if(L.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yo(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function lv(n,e){if(e<=0)throw new O(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function we(n,e){const t={typeString:n};return e&&(t.value=e),t}function hs(n,e){if(!Yp(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=-62135596800,nd=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*nd);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<td)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nd}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hs(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-td;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:we("string",se._jsonSchemaVersion),seconds:we("number"),nanoseconds:we("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wi=-1;class yo{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Rc(n){return n.fields.find(e=>e.kind===2)}function bn(n){return n.fields.filter(e=>e.kind!==2)}yo.UNKNOWN_ID=-1;class Zs{constructor(e,t){this.fieldPath=e,this.kind=t}}class Hi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Hi(0,rt.min())}}function hv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new rt(i,L.empty(),e)}function Jp(n){return new rt(n.readTime,n.key,Wi)}class rt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rt(q.min(),L.empty(),Wi)}static max(){return new rt(q.max(),L.empty(),Wi)}}function hu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){return p(this,null,function*(){if(n.code!==C.FAILED_PRECONDITION||n.message!==Xp)throw n;N("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(i=>i?R.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new R((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new R((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="SimpleDb";class Jo{static open(e,t,r,i){try{return new Jo(t,e.transaction(i,r))}catch(s){throw new Oi(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new At,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Oi(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=du(r.target.error);this.S.reject(new Oi(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(N(et,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new fv(t)}}class ln{static delete(e){return N(et,"Removing database:",e),Cn(Lf().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Qc())return!1;if(ln.F())return!0;const e=Re(),t=ln.M(e),r=0<t&&t<10,i=em(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,ln.M(Re())===12.2&&Ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}L(e){return p(this,null,function*(){return this.db||(N(et,"Opening database:",this.name),this.db=yield new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Oi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new O(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Oi(e,o))},i.onupgradeneeded=s=>{N(et,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next(()=>{N(et,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db})}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}runTransaction(e,t,r,i){return p(this,null,function*(){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=yield this.L(e);const c=Jo.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.C(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return u.catch(()=>{}),yield c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(N(et,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}})}close(){this.db&&this.db.close(),this.db=void 0}}function em(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class dv{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return Cn(this.U.delete())}}class Oi extends O{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function yn(n){return n.name==="IndexedDbTransactionError"}class fv{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(N(et,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(N(et,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Cn(r)}add(e){return N(et,"ADD",this.store.name,e,e),Cn(this.store.add(e))}get(e){return Cn(this.store.get(e)).next(t=>(t===void 0&&(t=null),N(et,"GET",this.store.name,e,t),t))}delete(e){return N(et,"DELETE",this.store.name,e),Cn(this.store.delete(e))}count(){return N(et,"COUNT",this.store.name),Cn(this.store.count())}J(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new R((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.H(s,(c,u)=>{o.push(u)}).next(()=>o)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new R((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}X(e,t){N(et,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.H(i,(s,o,c)=>c.delete())}ee(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}te(e){const t=this.cursor({});return new R((r,i)=>{t.onerror=s=>{const o=du(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}H(e,t){const r=[];return new R((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new dv(c),h=t(c.primaryKey,c.value,u);if(h instanceof R){const f=h.catch(m=>(u.done(),R.reject(m)));r.push(f)}u.isDone?i():u.G===null?c.continue():c.continue(u.G)}}).next(()=>R.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Cn(n){return new R((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=du(r.target.error);t(i)}})}let rd=!1;function du(n){const e=ln.M(Re());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rd||(rd=!0,setTimeout(()=>{throw r},0)),r}}return n}const xi="IndexBackfiller";class pv{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){N(xi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,()=>p(this,null,function*(){this.task=null;try{const t=yield this.ne.ie();N(xi,`Documents written: ${t}`)}catch(t){yn(t)?N(xi,"Ignoring IndexedDB error during index backfill: ",t):yield ir(t)}yield this.re(6e4)}))}}class mv{constructor(e,t){this.localStore=e,this.persistence=t}ie(e=50){return p(this,null,function*(){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))})}se(e,t){const r=new Set;let i=t,s=!0;return R.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N(xi,`Processing collection: ${o}`),this.oe(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(i,s)).next(c=>(N(xi,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}_e(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Jp(s);hu(o,r)>0&&(r=o)}),new rt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class ut{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ut.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=-1;function Xo(n){return n==null}function Qi(n){return n===0&&1/n==-1/0}function gv(n){return typeof n=="number"&&Number.isInteger(n)&&!Qi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="";function Be(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=id(e)),e=_v(n.get(t),e);return id(e)}function _v(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Io:t+="";break;default:t+=s}}return t}function id(n){return n+Io+""}function Tt(n){const e=n.length;if(B(e>=2,64408,{path:n}),e===2)return B(n.charAt(0)===Io&&n.charAt(1)==="",56145,{path:n}),ie.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(Io,s);switch((o<0||o>t)&&U(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:U(61167,{path:n})}s=o+2}return new ie(r)}/**
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
 */const Pn="remoteDocuments",ds="owner",ur="owner",Yi="mutationQueues",yv="userId",ft="mutations",sd="batchId",Vn="userMutationsIndex",od=["userId","batchId"];/**
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
 */function eo(n,e){return[n,Be(e)]}function tm(n,e,t){return[n,Be(e),t]}const Iv={},Cr="documentMutations",Eo="remoteDocumentsV14",Ev=["prefixPath","collectionGroup","readTime","documentId"],to="documentKeyIndex",Tv=["prefixPath","collectionGroup","documentId"],nm="collectionGroupIndex",wv=["collectionGroup","readTime","prefixPath","documentId"],Ji="remoteDocumentGlobal",Sc="remoteDocumentGlobalKey",kr="targets",rm="queryTargetsIndex",vv=["canonicalId","targetId"],Nr="targetDocuments",Av=["targetId","path"],fu="documentTargetsIndex",Rv=["path","targetId"],To="targetGlobalKey",Mn="targetGlobal",Xi="collectionParents",Sv=["collectionId","parent"],Dr="clientMetadata",bv="clientId",Zo="bundles",Pv="bundleId",ea="namedQueries",Cv="name",pu="indexConfiguration",kv="indexId",bc="collectionGroupIndex",Nv="collectionGroup",Mi="indexState",Dv=["indexId","uid"],im="sequenceNumberIndex",Vv=["uid","sequenceNumber"],Li="indexEntries",Ov=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],sm="documentKeyIndex",xv=["indexId","uid","orderedDocumentKey"],ta="documentOverlays",Mv=["userId","collectionPath","documentId"],Pc="collectionPathOverlayIndex",Lv=["userId","collectionPath","largestBatchId"],om="collectionGroupOverlayIndex",Uv=["userId","collectionGroup","largestBatchId"],mu="globals",Fv="name",am=[Yi,ft,Cr,Pn,kr,ds,Mn,Nr,Dr,Ji,Xi,Zo,ea],Bv=[...am,ta],cm=[Yi,ft,Cr,Eo,kr,ds,Mn,Nr,Dr,Ji,Xi,Zo,ea,ta],um=cm,gu=[...um,pu,Mi,Li],qv=gu,lm=[...gu,mu],jv=lm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Zp{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Pe(n,e){const t=K(n);return ln.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function In(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bs(this.root,e,this.comparator,!0)}}class Bs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:Ve.RED,this.left=i!=null?i:Ve.EMPTY,this.right=s!=null?s:Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ve(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cd(this.data.getIterator())}getIteratorFrom(e){return new cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function lr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new ae(de.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class dm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new dm("Invalid base64 string: "+s):s}}(e);return new ve(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const $v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(n){if(B(!!n,39018),typeof n=="string"){let e=0;const t=$v.exec(n);if(B(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ut(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="server_timestamp",pm="__type__",mm="__previous_value__",gm="__local_write_time__";function _u(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[pm])==null?void 0:r.stringValue)===fm}function na(n){const e=n.mapValue.fields[mm];return _u(e)?na(e):e}function Zi(n){const e=Lt(n.mapValue.fields[gm].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,r,i,s,o,c,u,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const wo="(default)";class $n{constructor(e,t){this.projectId=e,this.database=t||wo}static empty(){return new $n("","")}get isDefaultDatabase(){return this.database===wo}isEqual(e){return e instanceof $n&&e.projectId===this.projectId&&e.database===this.database}}function Kv(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $n(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="__type__",_m="__max__",on={mapValue:{fields:{__type__:{stringValue:_m}}}},Iu="__vector__",Vr="value",no={nullValue:"NULL_VALUE"};function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_u(n)?4:ym(n)?9007199254740991:ra(n)?10:11:U(28295,{value:n})}function Pt(n,e){if(n===e)return!0;const t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zi(n).isEqual(Zi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lt(i.timestampValue),c=Lt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ut(i.bytesValue).isEqual(Ut(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=le(i.doubleValue),c=le(s.doubleValue);return o===c?Qi(o)===Qi(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Pr(n.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(ad(o)!==ad(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Pt(o[u],c[u])))return!1;return!0}(n,e);default:return U(52216,{left:n})}}function es(n,e){return(n.values||[]).find(t=>Pt(t,e))!==void 0}function mn(n,e){if(n===e)return 0;const t=pn(n),r=pn(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=le(s.integerValue||s.doubleValue),u=le(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return ud(n.timestampValue,e.timestampValue);case 4:return ud(Zi(n),Zi(e));case 5:return Ac(n.stringValue,e.stringValue);case 6:return function(s,o){const c=Ut(s),u=Ut(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=G(c[h],u[h]);if(f!==0)return f}return G(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=G(le(s.latitude),le(o.latitude));return c!==0?c:G(le(s.longitude),le(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ld(n.arrayValue,e.arrayValue);case 10:return function(s,o){var y,b,k,V;const c=s.fields||{},u=o.fields||{},h=(y=c[Vr])==null?void 0:y.arrayValue,f=(b=u[Vr])==null?void 0:b.arrayValue,m=G(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return m!==0?m:ld(h,f)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===on.mapValue&&o===on.mapValue)return 0;if(s===on.mapValue)return 1;if(o===on.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=Ac(u[m],f[m]);if(y!==0)return y;const b=mn(c[u[m]],h[f[m]]);if(b!==0)return b}return G(u.length,f.length)}(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function ud(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Lt(n),r=Lt(e),i=G(t.seconds,r.seconds);return i!==0?i:G(t.nanos,r.nanos)}function ld(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=mn(t[i],r[i]);if(s)return s}return G(t.length,r.length)}function Or(n){return kc(n)}function kc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Lt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ut(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=kc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kc(t.fields[o])}`;return i+"}"}(n.mapValue):U(61005,{value:n})}function ro(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=na(n);return e?16+ro(e):16;case 5:return 2*n.stringValue.length;case 6:return Ut(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ro(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return In(r.fields,(s,o)=>{i+=s.length+ro(o)}),i}(n.mapValue);default:throw U(13486,{value:n})}}function ts(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Nc(n){return!!n&&"integerValue"in n}function ns(n){return!!n&&"arrayValue"in n}function hd(n){return!!n&&"nullValue"in n}function dd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function io(n){return!!n&&"mapValue"in n}function ra(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[yu])==null?void 0:r.stringValue)===Iu}function Ui(n){if(n.geoPointValue)return{geoPointValue:X({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:X({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return In(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ui(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ui(n.arrayValue.values[t]);return e}return X({},n)}function ym(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_m}const Im={mapValue:{fields:{[yu]:{stringValue:Iu},[Vr]:{arrayValue:{}}}}};function zv(n){return"nullValue"in n?no:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ts($n.empty(),L.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?ra(n)?Im:{mapValue:{}}:U(35942,{value:n})}function Wv(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ts($n.empty(),L.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Im:"mapValue"in n?ra(n)?{mapValue:{}}:on:U(61959,{value:n})}function fd(n,e){const t=mn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function pd(n,e){const t=mn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!io(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(t)}setAll(e){let t=de.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Ui(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());io(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];io(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){In(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ue(Ui(this.value))}}function Em(n){const e=[];return In(n.fields,(t,r)=>{const i=new de([t]);if(io(r)){const s=Em(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new pe(e,0,q.min(),q.min(),q.min(),Ue.empty(),0)}static newFoundDocument(e,t,r,i){return new pe(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new pe(e,2,t,q.min(),q.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new pe(e,3,t,q.min(),q.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xr{constructor(e,t){this.position=e,this.inclusive=t}}function md(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),t.key):r=mn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Tm{}class te extends Tm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Qv(e,t,r):t==="array-contains"?new Xv(e,r):t==="in"?new bm(e,r):t==="not-in"?new Zv(e,r):t==="array-contains-any"?new eA(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yv(e,r):new Jv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mn(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends Tm{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new oe(e,t)}matches(e){return Mr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Mr(n){return n.op==="and"}function Dc(n){return n.op==="or"}function Eu(n){return wm(n)&&Mr(n)}function wm(n){for(const e of n.filters)if(e instanceof oe)return!1;return!0}function Vc(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+Or(n.value);if(Eu(n))return n.filters.map(e=>Vc(e)).join(",");{const e=n.filters.map(t=>Vc(t)).join(",");return`${n.op}(${e})`}}function vm(n,e){return n instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)}(n,e):n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&vm(o,i.filters[c]),!0):!1}(n,e):void U(19439)}function Am(n,e){const t=n.filters.concat(e);return oe.create(t,n.op)}function Rm(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${Or(t.value)}`}(n):n instanceof oe?function(t){return t.op.toString()+" {"+t.getFilters().map(Rm).join(" ,")+"}"}(n):"Filter"}class Qv extends te{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yv extends te{constructor(e,t){super(e,"in",t),this.keys=Sm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Jv extends te{constructor(e,t){super(e,"not-in",t),this.keys=Sm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Sm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Xv extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ns(t)&&es(t.arrayValue,this.value)}}class bm extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&es(this.value.arrayValue,t)}}class Zv extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!es(this.value.arrayValue,t)}}class eA extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ns(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>es(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Te=null}}function Oc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new tA(n,e,t,r,i,s,o)}function Gn(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Vc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Or(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Or(r)).join(",")),e.Te=t}return e.Te}function fs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Hv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!vm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gd(n.startAt,e.startAt)&&gd(n.endAt,e.endAt)}function vo(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ao(n,e){return n.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function _d(n,e,t){let r=no,i=!0;for(const s of Ao(n,e)){let o=no,c=!0;switch(s.op){case"<":case"<=":o=zv(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=no}fd({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];fd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function yd(n,e,t){let r=on,i=!0;for(const s of Ao(n,e)){let o=on,c=!0;switch(s.op){case">=":case">":o=Wv(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=on}pd({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];pd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function nA(n,e,t,r,i,s,o,c){return new zr(n,e,t,r,i,s,o,c)}function ps(n){return new zr(n)}function Id(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rA(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Pm(n){return n.collectionGroup!==null}function Fi(n){const e=K(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ae(de.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new rs(s,r))}),t.has(de.keyField().canonicalString())||e.Ee.push(new rs(de.keyField(),r))}return e.Ee}function lt(n){const e=K(n);return e.Ie||(e.Ie=iA(e,Fi(n))),e.Ie}function iA(n,e){if(n.limitType==="F")return Oc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rs(i.field,s)});const t=n.endAt?new xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xr(n.startAt.position,n.startAt.inclusive):null;return Oc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xc(n,e){const t=n.filters.concat([e]);return new zr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sA(n,e){const t=n.explicitOrderBy.concat([e]);return new zr(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Ro(n,e,t){return new zr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ia(n,e){return fs(lt(n),lt(e))&&n.limitType===e.limitType}function Cm(n){return`${Gn(lt(n))}|lt:${n.limitType}`}function gr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Rm(i)).join(", ")}]`),Xo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Or(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Or(i)).join(",")),`Target(${r})`}(lt(n))}; limitType=${n.limitType})`}function ms(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Fi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){const h=md(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,Fi(r),i)||r.endAt&&!function(o,c,u){const h=md(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,Fi(r),i))}(n,e)}function oA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function km(n){return(e,t)=>{let r=!1;for(const i of Fi(n)){const s=aA(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aA(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?mn(u,h):U(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){In(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new he(L.comparator);function tt(){return cA}const Nm=new he(L.comparator);function Ri(...n){let e=Nm;for(const t of n)e=e.insert(t.key,t);return e}function Dm(n){let e=Nm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function wt(){return Bi()}function Vm(){return Bi()}function Bi(){return new Bt(n=>n.toString(),(n,e)=>n.isEqual(e))}const uA=new he(L.comparator),lA=new ae(L.comparator);function J(...n){let e=lA;for(const t of n)e=e.add(t);return e}const hA=new ae(G);function dA(){return hA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qi(e)?"-0":e}}function Om(n){return{integerValue:""+n}}function xm(n,e){return gv(e)?Om(e):Tu(n,e)}/**
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
 */class sa{constructor(){this._=void 0}}function fA(n,e,t){return n instanceof Lr?function(i,s){const o={fields:{[pm]:{stringValue:fm},[gm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_u(s)&&(s=na(s)),s&&(o.fields[mm]=s),{mapValue:o}}(t,e):n instanceof Kn?Lm(n,e):n instanceof Ur?Um(n,e):function(i,s){const o=Mm(i,s),c=Ed(o)+Ed(i.Ae);return Nc(o)&&Nc(i.Ae)?Om(c):Tu(i.serializer,c)}(n,e)}function pA(n,e,t){return n instanceof Kn?Lm(n,e):n instanceof Ur?Um(n,e):t}function Mm(n,e){return n instanceof Fr?function(r){return Nc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Lr extends sa{}class Kn extends sa{constructor(e){super(),this.elements=e}}function Lm(n,e){const t=Fm(e);for(const r of n.elements)t.some(i=>Pt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ur extends sa{constructor(e){super(),this.elements=e}}function Um(n,e){let t=Fm(e);for(const r of n.elements)t=t.filter(i=>!Pt(i,r));return{arrayValue:{values:t}}}class Fr extends sa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ed(n){return le(n.integerValue||n.doubleValue)}function Fm(n){return ns(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.field=e,this.transform=t}}function mA(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Kn&&i instanceof Kn||r instanceof Ur&&i instanceof Ur?Pr(r.elements,i.elements,Pt):r instanceof Fr&&i instanceof Fr?Pt(r.Ae,i.Ae):r instanceof Lr&&i instanceof Lr}(n.transform,e.transform)}class gA{constructor(e,t){this.version=e,this.transformResults=t}}class Fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function so(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class aa{}function Bm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ca(n.key,Fe.none()):new Wr(n.key,n.data,Fe.none());{const t=n.data,r=Ue.empty();let i=new ae(de.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new qt(n.key,r,new Ye(i.toArray()),Fe.none())}}function _A(n,e,t){n instanceof Wr?function(i,s,o){const c=i.value.clone(),u=wd(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(i,s,o){if(!so(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=wd(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qm(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function qi(n,e,t,r){return n instanceof Wr?function(s,o,c,u){if(!so(s.precondition,o))return c;const h=s.value.clone(),f=vd(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof qt?function(s,o,c,u){if(!so(s.precondition,o))return c;const h=vd(s.fieldTransforms,u,o),f=o.data;return f.setAll(qm(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,c){return so(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function yA(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Mm(r.transform,i||null);s!=null&&(t===null&&(t=Ue.empty()),t.set(r.field,s))}return t||null}function Td(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pr(r,i,(s,o)=>mA(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wr extends aa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qt extends aa{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function wd(n,e,t){const r=new Map;B(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,pA(o,c,t[i]))}return r}function vd(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,fA(s,o,e))}return r}class ca extends aa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jm extends aa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_A(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Vm();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=Bm(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&Pr(this.mutations,e.mutations,(t,r)=>Td(t,r))&&Pr(this.baseMutations,e.baseMutations,(t,r)=>Td(t,r))}}class vu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){B(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return uA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vu(e,t,r,i)}}/**
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
 */class Au{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,ne;function EA(n){switch(n){case C.OK:return U(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function $m(n){if(n===void 0)return Ge("GRPC error has no .code"),C.UNKNOWN;switch(n){case Ie.OK:return C.OK;case Ie.CANCELLED:return C.CANCELLED;case Ie.UNKNOWN:return C.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return C.INTERNAL;case Ie.UNAVAILABLE:return C.UNAVAILABLE;case Ie.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ie.NOT_FOUND:return C.NOT_FOUND;case Ie.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ie.ABORTED:return C.ABORTED;case Ie.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ie.DATA_LOSS:return C.DATA_LOSS;default:return U(39323,{code:n})}}(ne=Ie||(Ie={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function TA(){return new TextEncoder}/**
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
 */const wA=new un([4294967295,4294967295],0);function Ad(n){const e=TA().encode(n),t=new Bp;return t.update(e),new Uint8Array(t.digest())}function Rd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new un([t,r],0),new un([i,s],0)]}class Ru{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Si(`Invalid padding: ${t}`);if(r<0)throw new Si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Si(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Si(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=un.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(un.fromNumber(r)));return i.compare(wA)===1&&(i=new un([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ad(e),[r,i]=Rd(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ru(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=Ad(e),[r,i]=Rd(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,gs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ua(q.min(),i,new he(G),tt(),J())}}class gs{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new gs(r,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Gm{constructor(e,t){this.targetId=e,this.Ce=t}}class Km{constructor(e,t,r=ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Sd{constructor(){this.ve=0,this.Fe=bd(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),r=J();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:U(38017,{changeType:s})}}),new gs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=bd()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,B(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class vA{constructor(e){this.Ge=e,this.ze=new Map,this.je=tt(),this.Je=qs(),this.He=qs(),this.Ze=new he(G)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:U(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(vo(s))if(r===0){const o=new L(s.path);this.et(t,o,pe.newNoDocument(o,q.min()))}else B(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=Ut(r).toUint8Array()}catch(u){if(u instanceof dm)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ru(o,i,s)}catch(u){return fn(u instanceof Si?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,o)=>{const c=this.ot(o);if(c){if(s.current&&vo(c.target)){const u=new L(c.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,pe.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let r=J();this.He.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new ua(e,t,this.Ze,this.je,r);return this.je=tt(),this.Je=qs(),this.He=qs(),this.Ze=new he(G),i}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,t)?i.Ke(t,1):i.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Sd,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ae(G),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ae(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sd),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function qs(){return new he(L.comparator)}function bd(){return new he(L.comparator)}const AA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),RA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),SA=(()=>({and:"AND",or:"OR"}))();class bA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mc(n,e){return n.useProto3Json||Xo(e)?e:{value:e}}function Br(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function PA(n,e){return Br(n,e.toTimestamp())}function We(n){return B(!!n,49232),q.fromTimestamp(function(t){const r=Lt(t);return new se(r.seconds,r.nanos)}(n))}function Su(n,e){return Lc(n,e).canonicalString()}function Lc(n,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Wm(n){const e=ie.fromString(n);return B(ng(e),10190,{key:e.toString()}),e}function So(n,e){return Su(n.databaseId,e.path)}function Ln(n,e){const t=Wm(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Ym(t))}function Hm(n,e){return Su(n.databaseId,e)}function Qm(n){const e=Wm(n);return e.length===4?ie.emptyPath():Ym(e)}function Uc(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ym(n){return B(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pd(n,e,t){return{name:So(n,e),fields:t.value.mapValue.fields}}function CA(n,e,t){const r=Ln(n,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):q.min(),o=new Ue({mapValue:{fields:e.fields}}),c=pe.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function kA(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:U(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(B(f===void 0||typeof f=="string",58123),ve.fromBase64String(f||"")):(B(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ve.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:$m(h.code);return new O(f,h.message||"")}(o);t=new Km(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ln(n,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):q.min(),c=new Ue({mapValue:{fields:r.document.fields}}),u=pe.newFoundDocument(i,s,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new oo(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ln(n,r.document),s=r.readTime?We(r.readTime):q.min(),o=pe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new oo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ln(n,r.document),s=r.removedTargetIds||[];t=new oo([],s,i,null)}else{if(!("filter"in e))return U(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IA(i,s),c=r.targetId;t=new Gm(c,o)}}return t}function bo(n,e){let t;if(e instanceof Wr)t={update:Pd(n,e.key,e.value)};else if(e instanceof ca)t={delete:So(n,e.key)};else if(e instanceof qt)t={update:Pd(n,e.key,e.data),updateMask:MA(e.fieldMask)};else{if(!(e instanceof jm))return U(16599,{dt:e.type});t={verify:So(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof Lr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Kn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ur)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw U(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U(27497)}(n,e.precondition)),t}function Fc(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Fe.updateTime(We(s.updateTime)):s.exists!==void 0?Fe.exists(s.exists):Fe.none()}(e.currentDocument):Fe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)B(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Lr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new Kn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new Ur(f)}else"increment"in c?u=new Fr(o,c.increment):U(16584,{proto:c});const h=de.fromServerFormat(c.fieldPath);return new oa(h,u)}(n,i)):[];if(e.update){e.update.name;const i=Ln(n,e.update.name),s=new Ue({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const h=u.fieldPaths||[];return new Ye(h.map(f=>de.fromServerFormat(f)))}(e.updateMask);return new qt(i,s,o,t,r)}return new Wr(i,s,t,r)}if(e.delete){const i=Ln(n,e.delete);return new ca(i,t)}if(e.verify){const i=Ln(n,e.verify);return new jm(i,t)}return U(1463,{proto:e})}function NA(n,e){return n&&n.length>0?(B(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?We(i.updateTime):We(s);return o.isEqual(q.min())&&(o=We(s)),new gA(o,i.transformResults||[])}(t,e))):[]}function Jm(n,e){return{documents:[Hm(n,e.path)]}}function Xm(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Hm(n,i);const s=function(h){if(h.length!==0)return tg(oe.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:_r(y.field),direction:VA(y.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Mc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:i}}function Zm(n){let e=Qm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){B(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const y=eg(m);return y instanceof oe&&Eu(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(y=>function(k){return new rs(yr(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(m){let y;return y=typeof m=="object"?m.value:m,Xo(y)?null:y}(t.limit));let u=null;t.startAt&&(u=function(m){const y=!!m.before,b=m.values||[];return new xr(b,y)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const y=!m.before,b=m.values||[];return new xr(b,y)}(t.endAt)),nA(e,i,o,s,c,"F",u,h)}function DA(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function eg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yr(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=yr(t.unaryFilter.field);return te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=yr(t.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(t){return te.create(yr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return oe.create(t.compositeFilter.filters.map(r=>eg(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(n):U(30097,{filter:n})}function VA(n){return AA[n]}function OA(n){return RA[n]}function xA(n){return SA[n]}function _r(n){return{fieldPath:n.canonicalString()}}function yr(n){return de.fromServerFormat(n.fieldPath)}function tg(n){return n instanceof te?function(t){if(t.op==="=="){if(dd(t.value))return{unaryFilter:{field:_r(t.field),op:"IS_NAN"}};if(hd(t.value))return{unaryFilter:{field:_r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dd(t.value))return{unaryFilter:{field:_r(t.field),op:"IS_NOT_NAN"}};if(hd(t.value))return{unaryFilter:{field:_r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(t.field),op:OA(t.op),value:t.value}}}(n):n instanceof oe?function(t){const r=t.getFilters().map(i=>tg(i));return r.length===1?r[0]:{compositeFilter:{op:xA(t.op),filters:r}}}(n):U(54877,{filter:n})}function MA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ng(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function rg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,r,i,s=q.min(),o=q.min(),c=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.yt=e}}function LA(n,e){let t;if(e.document)t=CA(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=Wn(e.noDocument.readTime);t=pe.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U(56709);{const r=L.fromSegments(e.unknownDocument.path),i=Wn(e.unknownDocument.version);t=pe.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new se(i[0],i[1]);return q.fromTimestamp(s)}(e.readTime)),t}function Cd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Po(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:So(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Br(s,o.version.toTimestamp()),createTime:Br(s,o.createTime.toTimestamp())}}(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:zn(e.version)};else{if(!e.isUnknownDocument())return U(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:zn(e.version)}}return r}function Po(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function zn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Wn(n){const e=new se(n.seconds,n.nanoseconds);return q.fromTimestamp(e)}function kn(n,e){const t=(e.baseMutations||[]).map(s=>Fc(n.yt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Fc(n.yt,s)),i=se.fromMillis(e.localWriteTimeMs);return new wu(e.batchId,i,t,r)}function bi(n){const e=Wn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Wn(n.lastLimboFreeSnapshotVersion):q.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){const o=s.documents.length;return B(o===1,1966,{count:o}),lt(ps(Qm(s.documents[0])))}(n.query):function(s){return lt(Zm(s))}(n.query),new Vt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ve.fromBase64String(n.resumeToken))}function sg(n,e){const t=zn(e.snapshotVersion),r=zn(e.lastLimboFreeSnapshotVersion);let i;i=vo(e.target)?Jm(n.yt,e.target):Xm(n.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Gn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function og(n){const e=Zm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ro(e,e.limit,"L"):e}function rc(n,e){return new Au(e.largestBatchId,Fc(n.yt,e.overlayMutation))}function kd(n,e){const t=e.path.lastSegment();return[n,Be(e.path.popLast()),t]}function Nd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:zn(r.readTime),documentKey:Be(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{getBundleMetadata(e,t){return Dd(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Wn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Dd(e).put(function(i){return{bundleId:i.id,createTime:zn(We(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Vd(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:og(s.bundledQuery),readTime:Wn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Vd(e).put(function(i){return{name:i.name,readTime:zn(We(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Dd(n){return Pe(n,Zo)}function Vd(n){return Pe(n,ea)}/**
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
 */class la{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new la(e,r)}getOverlay(e,t){return pi(e).get(kd(this.userId,t)).next(r=>r?rc(this.serializer,r):null)}getOverlays(e,t){const r=wt();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const c=new Au(t,o);i.push(this.St(e,c))}),R.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Be(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(pi(e).X(Pc,c))}),R.waitFor(s)}getOverlaysForCollection(e,t,r){const i=wt(),s=Be(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return pi(e).J(Pc,o).next(c=>{for(const u of c){const h=rc(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=wt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return pi(e).ee({index:om,range:c},(u,h,f)=>{const m=rc(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}St(e,t){return pi(e).put(function(i,s,o){const[c,u,h]=kd(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:bo(i.yt,o.mutation)}}(this.serializer,this.userId,t))}}function pi(n){return Pe(n,ta)}/**
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
 */class FA{bt(e){return Pe(e,mu)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?ve.fromUint8Array(r):ve.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Nn{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(le(e.integerValue));else if("doubleValue"in e){const r=le(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Qi(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Lt(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Ut(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?ym(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):ra(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):U(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const i of Object.keys(r))this.Ot(i,t),this.Ct(r[i],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const i=Vr,s=((c=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(le(s)),this.Ot(i,t),this.Ct(r[i],t)}Kt(e,t){const r=e.values||[];this.Ft(t,50);for(const i of r)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),L.fromName(e).path.forEach(r=>{this.Ft(t,60),this.$t(r,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Nn.Wt=new Nn;/**
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
 */const hr=255;function BA(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Od(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=BA(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class qA{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Yt(e){const t=this.en(e),r=Od(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),r=Od(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(hr),this.sn(255)}_n(){this.an(hr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===hr?(this.sn(hr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===hr?(this.an(hr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class jA{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class $A{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class mi{constructor(){this.cn=new qA,this.ascending=new jA(this.cn),this.descending=new $A(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Dn{constructor(e,t,r,i){this.hn=e,this.Pn=t,this.Tn=r,this.En=i}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.En,0),t!==e?r.set([0],this.En.length):++r[r.length-1],new Dn(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:ao(this.Tn),directionalValue:ao(this.En),orderedDocumentKey:ao(t),documentKey:r.path.toArray()}}An(e,t,r){const i=this.Rn(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Xt(n,e){let t=n.hn-e.hn;return t!==0?t:(t=xd(n.Tn,e.Tn),t!==0?t:(t=xd(n.En,e.En),t!==0?t:L.comparator(n.Pn,e.Pn)))}function xd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function ao(n){return Kf()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function Md(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}class Ld{constructor(e){this.Vn=new ae((t,r)=>de.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(B(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=Rc(e);if(t!==void 0&&!this.pn(t))return!1;const r=bn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=r[s];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++s}for(;s<r.length;++s){const c=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new ae(de.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Zs(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Zs(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Zs(r.field,r.dir==="asc"?0:1)));return new yo(yo.UNKNOWN_ID,this.collectionId,t,Hi.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function ag(n){var t,r;if(B(n instanceof te||n instanceof oe,20012),n instanceof te){if(n instanceof bm){const i=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map(s=>te.create(n.field,"==",s)))||[];return oe.create(i,"or")}return n}const e=n.filters.map(i=>ag(i));return oe.create(e,n.op)}function GA(n){if(n.getFilters().length===0)return[];const e=jc(ag(n));return B(cg(e),7391),Bc(e)||qc(e)?[e]:e.getFilters()}function Bc(n){return n instanceof te}function qc(n){return n instanceof oe&&Eu(n)}function cg(n){return Bc(n)||qc(n)||function(t){if(t instanceof oe&&Dc(t)){for(const r of t.getFilters())if(!Bc(r)&&!qc(r))return!1;return!0}return!1}(n)}function jc(n){if(B(n instanceof te||n instanceof oe,34018),n instanceof te)return n;if(n.filters.length===1)return jc(n.filters[0]);const e=n.filters.map(r=>jc(r));let t=oe.create(e,n.op);return t=Co(t),cg(t)?t:(B(t instanceof oe,64498),B(Mr(t),40251),B(t.filters.length>1,57927),t.filters.reduce((r,i)=>bu(r,i)))}function bu(n,e){let t;return B(n instanceof te||n instanceof oe,38388),B(e instanceof te||e instanceof oe,25473),t=n instanceof te?e instanceof te?function(i,s){return oe.create([i,s],"and")}(n,e):Ud(n,e):e instanceof te?Ud(e,n):function(i,s){if(B(i.filters.length>0&&s.filters.length>0,48005),Mr(i)&&Mr(s))return Am(i,s.getFilters());const o=Dc(i)?i:s,c=Dc(i)?s:i,u=o.filters.map(h=>bu(h,c));return oe.create(u,"or")}(n,e),Co(t)}function Ud(n,e){if(Mr(e))return Am(e,n.getFilters());{const t=e.filters.map(r=>bu(n,r));return oe.create(t,"or")}}function Co(n){if(B(n instanceof te||n instanceof oe,11850),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return Co(e[0]);if(wm(n))return n;const t=e.map(i=>Co(i)),r=[];return t.forEach(i=>{i instanceof te?r.push(i):i instanceof oe&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:oe.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.bn=new Pu}addToCollectionParentIndex(e,t){return this.bn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(rt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(rt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Pu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ae(ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ae(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="IndexedDbIndexManager",js=new Uint8Array(0);class zA{constructor(e,t){this.databaseId=t,this.Dn=new Pu,this.Cn=new Bt(r=>Gn(r),(r,i)=>fs(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Dn.add(t)});const s={collectionId:r,parent:Be(i)};return Bd(e).put(s)}return R.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Hp(t),""],!1,!0);return Bd(e).J(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Tt(o.parent))}return r})}addFieldIndex(e,t){const r=gi(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=fr(e);return s.next(c=>{o.put(Nd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=gi(e),i=fr(e),s=dr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=gi(e),r=dr(e),i=fr(e);return t.X().next(()=>r.X()).next(()=>i.X())}createTargetIndexes(e,t){return R.forEach(this.vn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Ld(r).Sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=dr(e);let i=!0;const s=new Map;return R.forEach(this.vn(t),o=>this.Fn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=J();const c=[];return R.forEach(s,(u,h)=>{N(Fd,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(z=>`${z.fieldPath}:${z.kind}`).join(",")}`}(u)} to execute ${Gn(t)}`);const f=function(F,z){const H=Rc(z);if(H===void 0)return null;for(const Y of Ao(F,H.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null}(h,u),m=function(F,z){const H=new Map;for(const Y of bn(z))for(const T of Ao(F,Y.fieldPath))switch(T.op){case"==":case"in":H.set(Y.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return H.set(Y.fieldPath.canonicalString(),T.value),Array.from(H.values())}return null}(h,u),y=function(F,z){const H=[];let Y=!0;for(const T of bn(z)){const _=T.kind===0?_d(F,T.fieldPath,F.startAt):yd(F,T.fieldPath,F.startAt);H.push(_.value),Y&&(Y=_.inclusive)}return new xr(H,Y)}(h,u),b=function(F,z){const H=[];let Y=!0;for(const T of bn(z)){const _=T.kind===0?yd(F,T.fieldPath,F.endAt):_d(F,T.fieldPath,F.endAt);H.push(_.value),Y&&(Y=_.inclusive)}return new xr(H,Y)}(h,u),k=this.Mn(u,h,y),V=this.Mn(u,h,b),D=this.xn(u,h,m),$=this.On(u.indexId,f,k,y.inclusive,V,b.inclusive,D);return R.forEach($,j=>r.Z(j,t.limit).next(F=>{F.forEach(z=>{const H=L.fromSegments(z.documentKey);o.has(H)||(o=o.add(H),c.push(H))})}))}).next(()=>c)}return R.resolve(null)})}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=GA(oe.create(e.filters,"and")).map(r=>Oc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}On(e,t,r,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const y=t?this.Nn(t[m/h]):js,b=this.Bn(e,y,r[m%h],i),k=this.Ln(e,y,s[m%h],o),V=c.map(D=>this.Bn(e,y,D,!0));f.push(...this.createRange(b,k,V))}return f}Bn(e,t,r,i){const s=new Dn(e,L.empty(),t,r);return i?s:s.In()}Ln(e,t,r,i){const s=new Dn(e,L.empty(),t,r);return i?s.In():s}Fn(e,t){const r=new Ld(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const i=this.vn(t);return R.forEach(i,s=>this.Fn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new ae(de.comparator),f=!1;for(const m of u.filters)for(const y of m.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:h=h.add(y.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}kn(e,t){const r=new mi;for(const i of bn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);Nn.Wt.Dt(s,o)}return r.un()}Nn(e){const t=new mi;return Nn.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const r=new mi;return Nn.Wt.Dt(ts(this.databaseId,t),r.ln(function(s){const o=bn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}xn(e,t,r){if(r===null)return[];let i=[];i.push(new mi);let s=0;for(const o of bn(e)){const c=r[s++];for(const u of i)if(this.Kn(t,o.fieldPath)&&ns(c))i=this.Un(i,o,c);else{const h=u.ln(o.kind);Nn.Wt.Dt(c,h)}}return this.$n(i)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const c of i){const u=new mi;u.seed(c.un()),Nn.Wt.Dt(o,u.ln(t.kind)),s.push(u)}return s}Kn(e,t){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=gi(e),i=fr(e);return(t?r.J(bc,IDBKeyRange.bound(t,t)):r.J()).next(s=>{const o=[];return R.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){const y=m?new Hi(m.sequenceNumber,new rt(Wn(m.readTime),new L(Tt(m.documentKey)),m.largestBatchId)):Hi.empty(),b=f.fields.map(([k,V])=>new Zs(de.fromServerFormat(k),V));return new yo(f.indexId,f.collectionGroup,b,y)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:G(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=gi(e),s=fr(e);return this.Wn(e).next(o=>i.J(bc,IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,u=>s.put(Nd(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return R.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),R.forEach(c,u=>this.Qn(e,i,u).next(h=>{const f=this.Gn(s,u);return h.isEqual(f)?R.resolve():this.zn(e,s,u,h,f)}))))})}jn(e,t,r,i){return dr(e).put(i.Rn(this.uid,this.qn(r,t.key),t.key))}Jn(e,t,r,i){return dr(e).delete(i.An(this.uid,this.qn(r,t.key),t.key))}Qn(e,t,r){const i=dr(e);let s=new ae(Xt);return i.ee({index:sm,range:IDBKeyRange.only([r.indexId,this.uid,ao(this.qn(r,t))])},(o,c)=>{s=s.add(new Dn(r.indexId,t,Md(c.arrayValue),Md(c.directionalValue)))}).next(()=>s)}Gn(e,t){let r=new ae(Xt);const i=this.kn(t,e);if(i==null)return r;const s=Rc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(ns(o))for(const c of o.arrayValue.values||[])r=r.add(new Dn(t.indexId,e.key,this.Nn(c),i))}else r=r.add(new Dn(t.indexId,e.key,js,i));return r}zn(e,t,r,i,s){N(Fd,"Updating index entries for document '%s'",t.key);const o=[];return function(u,h,f,m,y){const b=u.getIterator(),k=h.getIterator();let V=lr(b),D=lr(k);for(;V||D;){let $=!1,j=!1;if(V&&D){const F=f(V,D);F<0?j=!0:F>0&&($=!0)}else V!=null?j=!0:$=!0;$?(m(D),D=lr(k)):j?(y(V),V=lr(b)):(V=lr(b),D=lr(k))}}(i,s,Xt,c=>{o.push(this.jn(e,t,r,c))},c=>{o.push(this.Jn(e,t,r,c))}),R.waitFor(o)}Wn(e){let t=1;return fr(e).ee({index:im,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Xt(o,c)).filter((o,c,u)=>!c||Xt(o,u[c-1])!==0);const i=[];i.push(e);for(const o of r){const c=Xt(o,e),u=Xt(o,t);if(c===0)i[0]=e.In();else if(c>0&&u<0)i.push(o),i.push(o.In());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Hn(i[o],i[o+1]))return[];const c=i[o].An(this.uid,js,L.empty()),u=i[o+1].An(this.uid,js,L.empty());s.push(IDBKeyRange.bound(c,u))}return s}Hn(e,t){return Xt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(qd)}getMinOffset(e,t){return R.mapArray(this.vn(t),r=>this.Fn(e,r).next(i=>i||U(44426))).next(qd)}}function Bd(n){return Pe(n,Xi)}function dr(n){return Pe(n,Li)}function gi(n){return Pe(n,pu)}function fr(n){return Pe(n,Mi)}function qd(n){B(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;hu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new rt(e.readTime,e.documentKey,t)}/**
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
 */const jd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ug=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n,e,t){const r=n.store(ft),i=n.store(Cr),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.ee({range:o},(f,m,y)=>(c++,y.delete()));s.push(u.next(()=>{B(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const m=tm(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return R.waitFor(s).next(()=>h)}function ko(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw U(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(ug,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);class ha{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,t,r,i){B(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new ha(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zt(e).ee({index:Vn,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Ir(e),o=Zt(e);return o.add({}).next(c=>{B(typeof c=="number",49019);const u=new wu(c,t,r,i),h=function(b,k,V){const D=V.baseMutations.map(j=>bo(b.yt,j)),$=V.mutations.map(j=>bo(b.yt,j));return{userId:k,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:D,mutations:$}}(this.serializer,this.userId,u),f=[];let m=new ae((y,b)=>G(y.canonicalString(),b.canonicalString()));for(const y of i){const b=tm(this.userId,y.key.path,c);m=m.add(y.key.path.popLast()),f.push(o.put(h)),f.push(s.put(b,Iv))}return m.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),R.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return Zt(e).get(t).next(r=>r?(B(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),kn(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?R.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Zt(e).ee({index:Vn,range:i},(o,c,u)=>{c.userId===this.userId&&(B(c.batchId>=r,47524,{Yn:r}),s=kn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=xn;return Zt(e).ee({index:Vn,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,xn],[this.userId,Number.POSITIVE_INFINITY]);return Zt(e).J(Vn,t).next(r=>r.map(i=>kn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=eo(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Ir(e).ee({range:i},(o,c,u)=>{const[h,f,m]=o,y=Tt(f);if(h===this.userId&&t.path.isEqual(y))return Zt(e).get(m).next(b=>{if(!b)throw U(61480,{er:o,batchId:m});B(b.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:b.userId,batchId:m}),s.push(kn(this.serializer,b))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(G);const i=[];return t.forEach(s=>{const o=eo(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=Ir(e).ee({range:c},(h,f,m)=>{const[y,b,k]=h,V=Tt(b);y===this.userId&&s.path.isEqual(V)?r=r.add(k):m.done()});i.push(u)}),R.waitFor(i).next(()=>this.tr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=eo(this.userId,r),o=IDBKeyRange.lowerBound(s);let c=new ae(G);return Ir(e).ee({range:o},(u,h,f)=>{const[m,y,b]=u,k=Tt(y);m===this.userId&&r.isPrefixOf(k)?k.length===i&&(c=c.add(b)):f.done()}).next(()=>this.tr(e,c))}tr(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Zt(e).get(s).next(o=>{if(o===null)throw U(35274,{batchId:s});B(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(kn(this.serializer,o))}))}),R.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return lg(e.le,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.nr(t.batchId)}),R.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ir(e).ee({range:r},(s,o,c)=>{if(s[0]===this.userId){const u=Tt(s[1]);i.push(u)}else c.done()}).next(()=>{B(i.length===0,56720,{rr:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return hg(e,this.userId,t)}ir(e){return dg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:xn,lastStreamToken:""})}}function hg(n,e,t){const r=eo(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ir(n).ee({range:s,Y:!0},(c,u,h)=>{const[f,m,y]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function Zt(n){return Pe(n,ft)}function Ir(n){return Pe(n,Cr)}function dg(n){return Pe(n,Yi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Hn(0)}static ar(){return new Hn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next(t=>{const r=new Hn(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(t=>q.fromTimestamp(new se(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.ur(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.cr(e,i)))}addTargetData(e,t){return this.lr(e,t).next(()=>this.ur(e).next(r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>pr(e).delete(t.targetId)).next(()=>this.ur(e)).next(r=>(B(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return pr(e).ee((o,c)=>{const u=bi(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>R.waitFor(s)).next(()=>i)}forEachTarget(e,t){return pr(e).ee((r,i)=>{const s=bi(i);t(s)})}ur(e){return $d(e).get(To).next(t=>(B(t!==null,2888),t))}cr(e,t){return $d(e).put(To,t)}lr(e,t){return pr(e).put(sg(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Gn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return pr(e).ee({range:i,index:rm},(o,c,u)=>{const h=bi(c);fs(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=nn(e);return t.forEach(o=>{const c=Be(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),R.waitFor(i)}removeMatchingKeys(e,t,r){const i=nn(e);return R.forEach(t,s=>{const o=Be(s.path);return R.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=nn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=nn(e);let s=J();return i.ee({range:r,Y:!0},(o,c,u)=>{const h=Tt(o[1]),f=new L(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const r=Be(t.path),i=IDBKeyRange.bound([r],[Hp(r)],!1,!0);let s=0;return nn(e).ee({index:fu,Y:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}At(e,t){return pr(e).get(t).next(r=>r?bi(r):null)}}function pr(n){return Pe(n,kr)}function $d(n){return Pe(n,Mn)}function nn(n){return Pe(n,Nr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="LruGarbageCollector",HA=1048576;function Kd([n,e],[t,r]){const i=G(n,t);return i===0?G(e,r):i}class QA{constructor(e){this.Pr=e,this.buffer=new ae(Kd),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Kd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(Gd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>p(this,null,function*(){this.Rr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){yn(t)?N(Gd,"Ignoring IndexedDB error during garbage collection: ",t):yield ir(t)}yield this.Ar(3e5)}))}}class YA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(ut.ce);const r=new QA(t);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(jd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jd):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),mr()<=ee.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function pg(n,e){return new YA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,t){this.db=e,this.garbageCollector=pg(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,(r,i)=>t(i))}addReference(e,t,r){return $s(e,r)}removeReference(e,t,r){return $s(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return $s(e,t)}wr(e,t){return function(i,s){let o=!1;return dg(i).te(c=>hg(i,c,s).next(u=>(u&&(o=!0),R.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,(o,c)=>{if(c<=t){const u=this.wr(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),nn(e).delete(function(m){return[0,Be(m.path)]}(o))))});i.push(u)}}).next(()=>R.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return $s(e,t)}yr(e,t){const r=nn(e);let i,s=ut.ce;return r.ee({index:fu},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==ut.ce&&t(new L(Tt(i)),s),s=h,i=u):s=ut.ce}).next(()=>{s!==ut.ce&&t(new L(Tt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function $s(n,e){return nn(n).put(function(r,i){return{targetId:0,path:Be(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.changes=new Bt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Rn(e).put(r)}removeEntry(e,t,r){return Rn(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Po(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Sr(e,r)))}getEntry(e,t){let r=pe.newInvalidDocument(t);return Rn(e).ee({index:to,range:IDBKeyRange.only(_i(t))},(i,s)=>{r=this.br(t,s)}).next(()=>r)}Dr(e,t){let r={size:0,document:pe.newInvalidDocument(t)};return Rn(e).ee({index:to,range:IDBKeyRange.only(_i(t))},(i,s)=>{r={document:this.br(t,s),size:ko(s)}}).next(()=>r)}getEntries(e,t){let r=tt();return this.Cr(e,t,(i,s)=>{const o=this.br(i,s);r=r.insert(i,o)}).next(()=>r)}vr(e,t){let r=tt(),i=new he(L.comparator);return this.Cr(e,t,(s,o)=>{const c=this.br(s,o);r=r.insert(s,c),i=i.insert(s,ko(o))}).next(()=>({documents:r,Fr:i}))}Cr(e,t,r){if(t.isEmpty())return R.resolve();let i=new ae(Hd);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(_i(i.first()),_i(i.last())),o=i.getIterator();let c=o.getNext();return Rn(e).ee({index:to,range:s},(u,h,f)=>{const m=L.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Hd(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.j(_i(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Po(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Rn(e).J(IDBKeyRange.bound(c,u,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=tt();for(const m of h){const y=this.br(L.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);y.isFoundDocument()&&(ms(t,y)||i.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=tt();const o=Wd(t,r),c=Wd(t,rt.max());return Rn(e).ee({index:nm,range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const m=this.br(L.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new ZA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return zd(e).get(Sc).next(t=>(B(!!t,20021),t))}Sr(e,t){return zd(e).put(Sc,t)}br(e,t){if(t){const r=LA(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return pe.newInvalidDocument(e)}}function gg(n){return new XA(n)}class ZA extends mg{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new Bt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new ae((s,o)=>G(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.Or.get(s);if(t.push(this.Mr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=Cd(this.Mr.serializer,o);i=i.add(s.path.popLast());const h=ko(u);r+=h-c.size,t.push(this.Mr.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){const u=Cd(this.Mr.serializer,o.convertToNoDocument(q.min()));t.push(this.Mr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Mr.updateMetadata(e,r)),R.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next(r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Mr.vr(e,t).next(({documents:r,Fr:i})=>(i.forEach((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function zd(n){return Pe(n,Ji)}function Rn(n){return Pe(n,Eo)}function _i(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Wd(n,e){const t=e.documentKey.path.toArray();return[n,Po(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Hd(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=G(t[s],r[s]),i)return i;return i=G(t.length,r.length),i||(i=G(t[t.length-2],r[r.length-2]),i||G(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&qi(r.mutation,i,Ye.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const i=wt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ri();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=wt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=tt();const o=Bi(),c=function(){return Bi()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof qt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),qi(f.mutation,h,f.mutation.getFieldMask(),se.now())):o.set(h.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new eR(f,(m=o.get(h))!=null?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Bi();let i=new he((o,c)=>o-c),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Ye.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(i.get(c.batchId)||J()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Vm();f.forEach(y=>{if(!s.has(y)){const b=Bm(t.get(y),r.get(y));b!==null&&m.set(y,b),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return rA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):R.resolve(wt());let c=Wi,u=s;return o.next(h=>R.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,J())).next(f=>({batchId:c,changes:Dm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=Ri();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ri();return this.indexManager.getCollectionParents(e,s).next(c=>R.forEach(c,u=>{const h=function(m,y){return new zr(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,pe.newInvalidDocument(f)))});let c=Ri();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&qi(f.mutation,h,Ye.empty(),se.now()),ms(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:We(i.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(i){return{name:i.name,query:og(i.bundledQuery),readTime:We(i.readTime)}}(t)),R.resolve()}}/**
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
 */class nR{constructor(){this.overlays=new he(L.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wt();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const i=wt(),s=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new he((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=wt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=wt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return R.resolve(c)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Au(t,r));let s=this.Lr.get(t);s===void 0&&(s=J(),this.Lr.set(t,s)),this.Lr.set(t,s.add(r.key))}}/**
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
 */class rR{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.kr=new ae(ke.qr),this.Kr=new ae(ke.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new ke(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ke(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new L(new ie([])),r=new ke(t,e),i=new ke(t,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new L(new ie([])),r=new ke(t,e),i=new ke(t,e+1);let s=J();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ke(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return L.comparator(e.key,t.key)||G(e.Jr,t.Jr)}static Ur(e,t){return G(e.Jr,t.Jr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ae(ke.qr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wu(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Hr=this.Hr.add(new ke(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?xn:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ke(t,0),i=new ke(t,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const c=this.Zr(o.Jr);s.push(c)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(G);return t.forEach(i=>{const s=new ke(i,0),o=new ke(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],c=>{r=r.add(c.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new ke(new L(s),0);let c=new ae(G);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Jr)),!0)},o),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){B(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(t.mutations,i=>{const s=new ke(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new ke(t,0),i=this.Hr.firstAfterOrEqual(r);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.ti=e,this.docs=function(){return new he(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():pe.newInvalidDocument(t))}getEntries(e,t){let r=tt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pe.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=tt();const o=t.path,c=new L(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||hu(Jp(f),r)<=0||(i.has(f.key)||ms(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,t,r,i){U(9500)}ni(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new oR(this)}getSize(e){return R.resolve(this.size)}}class oR extends mg{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.persistence=e,this.ri=new Bt(t=>Gn(t),fs),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new Cu,this.targetCount=0,this.oi=Hn._r()}forEachTarget(e,t){return this.ri.forEach((r,i)=>t(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Hn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this._i={},this.overlays={},this.ai=new ut(0),this.ui=!1,this.ui=!0,this.ci=new rR,this.referenceDelegate=e(this),this.li=new aR(this),this.indexManager=new KA,this.remoteDocumentCache=function(i){return new sR(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new ig(t),this.Pi=new tR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new iR(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new cR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,t){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class cR extends Zp{constructor(e){super(),this.currentSequenceNumber=e}}class da{constructor(e){this.persistence=e,this.Ri=new Cu,this.Ai=null}static Vi(e){return new da(e)}get di(){if(this.Ai)return this.Ai;throw U(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const i=L.fromPath(r);return this.mi(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class No{constructor(e,t){this.persistence=e,this.fi=new Bt(r=>Be(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=pg(this,t)}static Vi(e,t){return new No(e,t)}Ti(){}Ei(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return R.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?R.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,t).next(c=>{c||(r++,s.removeEntry(o,q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ro(e.data.value)),t}wr(e,t,r){return R.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.serializer=e}k(e,t,r,i){const s=new Jo("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore(ds)}(e),function(u){u.createObjectStore(Yi,{keyPath:yv}),u.createObjectStore(ft,{keyPath:sd,autoIncrement:!0}).createIndex(Vn,od,{unique:!0}),u.createObjectStore(Cr)}(e),Qd(e),function(u){u.createObjectStore(Pn)}(e));let o=R.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore(Nr),u.deleteObjectStore(kr),u.deleteObjectStore(Mn)}(e),Qd(e)),o=o.next(()=>function(u){const h=u.store(Mn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return h.put(To,f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store(ft).J().next(m=>{u.deleteObjectStore(ft),u.createObjectStore(ft,{keyPath:sd,autoIncrement:!0}).createIndex(Vn,od,{unique:!0});const y=h.store(ft),b=m.map(k=>y.put(k));return R.waitFor(b)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(Dr,{keyPath:bv})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.gi(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(Ji)}(e),this.pi(s)))),r<7&&i>=7&&(o=o.next(()=>this.yi(s))),r<8&&i>=8&&(o=o.next(()=>this.wi(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Si(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Zo,{keyPath:Pv})})(e),function(u){u.createObjectStore(ea,{keyPath:Cv})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore(ta,{keyPath:Mv});h.createIndex(Pc,Lv,{unique:!1}),h.createIndex(om,Uv,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore(Eo,{keyPath:Ev});h.createIndex(to,Tv),h.createIndex(nm,wv)}(e)).next(()=>this.bi(e,s)).next(()=>e.deleteObjectStore(Pn))),r<14&&i>=14&&(o=o.next(()=>this.Di(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(pu,{keyPath:kv,autoIncrement:!0}).createIndex(bc,Nv,{unique:!1}),u.createObjectStore(Mi,{keyPath:Dv}).createIndex(im,Vv,{unique:!1}),u.createObjectStore(Li,{keyPath:Ov}).createIndex(sm,xv,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(Mi).clear()}).next(()=>{t.objectStore(Li).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(mu,{keyPath:Fv})})(e)})),r<18&&i>=18&&Kf()&&(o=o.next(()=>{t.objectStore(Mi).clear()}).next(()=>{t.objectStore(Li).clear()})),o}pi(e){let t=0;return e.store(Pn).ee((r,i)=>{t+=ko(i)}).next(()=>{const r={byteSize:t};return e.store(Ji).put(Sc,r)})}gi(e){const t=e.store(Yi),r=e.store(ft);return t.J().next(i=>R.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,xn],[s.userId,s.lastAcknowledgedBatchId]);return r.J(Vn,o).next(c=>R.forEach(c,u=>{B(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=kn(this.serializer,u);return lg(e,s.userId,h).next(()=>{})}))}))}yi(e){const t=e.store(Nr),r=e.store(Pn);return e.store(Mn).get(To).next(i=>{const s=[];return r.ee((o,c)=>{const u=new ie(o),h=function(m){return[0,Be(m)]}(u);s.push(t.get(h).next(f=>f?R.resolve():(m=>t.put({targetId:0,path:Be(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>R.waitFor(s))})}wi(e,t){e.createObjectStore(Xi,{keyPath:Sv});const r=t.store(Xi),i=new Pu,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:Be(u)})}};return t.store(Pn).ee({Y:!0},(o,c)=>{const u=new ie(o);return s(u.popLast())}).next(()=>t.store(Cr).ee({Y:!0},([o,c,u],h)=>{const f=Tt(c);return s(f.popLast())}))}Si(e){const t=e.store(kr);return t.ee((r,i)=>{const s=bi(i),o=sg(this.serializer,s);return t.put(o)})}bi(e,t){const r=t.store(Pn),i=[];return r.ee((s,o)=>{const c=t.store(Eo),u=function(m){return m.document?new L(ie.fromString(m.document.name).popFirst(5)):m.noDocument?L.fromSegments(m.noDocument.path):m.unknownDocument?L.fromSegments(m.unknownDocument.path):U(36783)}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>R.waitFor(i))}Di(e,t){const r=t.store(ft),i=gg(this.serializer),s=new ku(da.Vi,this.serializer.yt);return r.J().next(o=>{const c=new Map;return o.forEach(u=>{var f;let h=(f=c.get(u.userId))!=null?f:J();kn(this.serializer,u).keys().forEach(m=>h=h.add(m)),c.set(u.userId,h)}),R.forEach(c,(u,h)=>{const f=new De(h),m=la.wt(this.serializer,f),y=s.getIndexManager(f),b=ha.wt(f,this.serializer,y,s.referenceDelegate);return new _g(i,b,m,y).recalculateAndSaveOverlaysForDocumentKeys(new Cc(t,ut.ce),u).next()})})}}function Qd(n){n.createObjectStore(Nr,{keyPath:Av}).createIndex(fu,Rv,{unique:!0}),n.createObjectStore(kr,{keyPath:"targetId"}).createIndex(rm,vv,{unique:!0}),n.createObjectStore(Mn)}const en="IndexedDbPersistence",ic=18e5,sc=5e3,oc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",lR="main";class Nu{constructor(e,t,r,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=s,this.window=o,this.document=c,this.Fi=h,this.Mi=f,this.xi=m,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=y=>Promise.resolve(),!Nu.v())throw new O(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new JA(this,i),this.qi=t+lR,this.serializer=new ig(u),this.Ki=new ln(this.qi,this.xi,new uR(this.serializer)),this.ci=new FA,this.li=new WA(this.referenceDelegate,this.serializer),this.remoteDocumentCache=gg(this.serializer),this.Pi=new UA,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&Ge(en,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,oc);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new ut(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}zi(e){return this.ki=t=>p(this,null,function*(){if(this.started)return e(t)}),e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K(t=>p(this,null,function*(){t.newVersion===null&&(yield e())}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(()=>p(this,null,function*(){this.started&&(yield this.$i())})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Gs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(e)).next(t=>this.isPrimary&&!t?this.Hi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(yn(e))return N(en,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N(en,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return yi(e).get(ur).next(t=>R.resolve(this.Xi(t)))}Yi(e){return Gs(e).delete(this.clientId)}es(){return p(this,null,function*(){if(this.isPrimary&&!this.ts(this.Li,ic)){this.Li=Date.now();const e=yield this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Pe(t,Dr);return r.J().next(i=>{const s=this.ns(i,ic),o=i.filter(c=>s.indexOf(c)===-1);return R.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}})}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?R.resolve(!0):yi(e).get(ur).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,sc)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,oc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Gs(e).J().next(r=>this.ns(r,sc).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N(en,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}shutdown(){return p(this,null,function*(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),yield this.Ki.runTransaction("shutdown","readwrite",[ds,Dr],e=>{const t=new Cc(e,ut.ce);return this.Hi(t).next(()=>this.Yi(t))}),this.Ki.close(),this.ls()})}ns(e,t){return e.filter(r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>Gs(e).J().next(t=>this.ns(t,ic).map(r=>r.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return ha.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zA(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return la.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){N(en,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===18?jv:u===17?lm:u===16?qv:u===15?gu:u===14?um:u===13?cm:u===12?Bv:u===11?am:void U(60245)}(this.xi);let o;return this.Ki.runTransaction(e,i,s,c=>(o=new Cc(c,this.ai?this.ai.next():ut.ce),t==="readwrite-primary"?this.ji(o).next(u=>!!u||this.Ji(o)).next(u=>{if(!u)throw Ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new O(C.FAILED_PRECONDITION,Xp);return r(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ps(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ps(e){return yi(e).get(ur).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,sc)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(C.FAILED_PRECONDITION,oc)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return yi(e).put(ur,t)}static v(){return ln.v()}Hi(e){const t=yi(e);return t.get(ur).next(r=>this.Xi(r)?(N(en,"Releasing primary lease."),t.delete(ur)):R.resolve())}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ge(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;Gf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return N(en,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ge(en,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){Ge("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch(e){}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function yi(n){return Pe(n,ds)}function Gs(n){return Pe(n,Dr)}function hR(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=J(),i=J();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Du(e,t.fromCache,r,i)}}/**
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
 */class dR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Gf()?8:em(Re())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.gs(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dR;return this.ys(e,t,o).next(c=>{if(s.result=c,this.As)return this.ws(e,t,o,c.size)})}).next(()=>s.result)}ws(e,t,r,i){return r.documentReadCount<this.Vs?(mr()<=ee.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",gr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(mr()<=ee.DEBUG&&N("QueryEngine","Query:",gr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(mr()<=ee.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",gr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lt(t))):R.resolve())}gs(e,t){if(Id(t))return R.resolve(null);let r=lt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ro(t,null,"F"),r=lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(t,c);return this.bs(t,h,o,u.readTime)?this.gs(e,Ro(t,null,"F")):this.Ds(e,h,t,u)}))})))}ps(e,t,r,i){return Id(t)||i.isEqual(q.min())?R.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(t,s);return this.bs(t,o,r,i)?R.resolve(null):(mr()<=ee.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gr(t)),this.Ds(e,o,t,hv(i,Wi)).next(c=>c))})}Ss(e,t){let r=new ae(km(e));return t.forEach((i,s)=>{ms(e,s)&&(r=r.add(s))}),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,t,r){return mr()<=ee.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",gr(t)),this.fs.getDocumentsMatchingQuery(e,t,rt.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LocalStore",fR=3e8;class pR{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new he(G),this.Fs=new Bt(s=>Gn(s),fs),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _g(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Ig(n,e,t,r){return new pR(n,e,t,r)}function Eg(n,e){return p(this,null,function*(){const t=K(n);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let u=J();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:c}))})})})}function mR(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,y=m.keys();let b=R.resolve();return y.forEach(k=>{b=b.next(()=>f.getEntry(u,k)).next(V=>{const D=h.docVersions.get(k);B(D!==null,48541),V.version.compareTo(D)<0&&(m.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=J();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Tg(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function gR(n,e){const t=K(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;c.push(t.li.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.li.addMatchingKeys(s,f.addedDocuments,m)));let b=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(ve.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),i=i.insert(m,b),function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=fR?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(y,b,f)&&c.push(t.li.updateTargetData(s,b))});let u=tt(),h=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(_R(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(q.min())){const f=t.li.getLastRemoteSnapshotVersion(s).next(m=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return R.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.vs=i,s))}function _R(n,e,t){let r=J(),i=J();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=tt();return t.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):N(Vu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function yR(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=xn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function IR(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.li.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):t.li.allocateTargetId(r).next(o=>(i=new Vt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}function $c(n,e,t){return p(this,null,function*(){const r=K(n),i=r.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!yn(o))throw o;N(Vu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)})}function Yd(n,e,t){const r=K(n);let i=q.min(),s=J();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=K(u),y=m.Fs.get(f);return y!==void 0?R.resolve(m.vs.get(y)):m.li.getTargetData(h,f)}(r,o,lt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:q.min(),t?s:J())).next(c=>(ER(r,oA(e),c),{documents:c,ks:s})))}function ER(n,e,t){let r=n.Ms.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ms.set(e,r)}class Jd{constructor(){this.activeTargetIds=dA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wg{constructor(){this.vo=new Jd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Jd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="ConnectivityMonitor";class Zd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(Xd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(Xd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ks=null;function Gc(){return Ks===null?Ks=function(){return 268435456+Math.round(2147483648*Math.random())}():Ks++,"0x"+Ks.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="RestConnection",wR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class vR{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===wo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=Gc(),c=this.Qo(e,t.toUriEncodedString());N(ac,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(c),f=tr(h);return this.zo(e,c,u,r,f).then(m=>(N(ac,`Received RPC '${e}' ${o}: `,m),m),m=>{throw fn(ac,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,t){const r=wR[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection",Ii=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Sr extends vR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Sr.c_){const e=Gp();Ii(e,$p.STAT_EVENT,t=>{t.stat===vc.PROXY?N(Me,"STAT_EVENT: detected buffering proxy"):t.stat===vc.NOPROXY&&N(Me,"STAT_EVENT: detected no buffering proxy")}),Sr.c_=!0}}zo(e,t,r,i,s){const o=Gc();return new Promise((c,u)=>{const h=new qp;h.setWithCredentials(!0),h.listenOnce(jp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Xs.NO_ERROR:const m=h.getResponseJson();N(Me,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Xs.TIMEOUT:N(Me,`RPC '${e}' ${o} timed out`),u(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Xs.HTTP_ERROR:const y=h.getStatus();if(N(Me,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const k=b==null?void 0:b.error;if(k&&k.status&&k.message){const V=function($){const j=$.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN}(k.status);u(new O(V,k.message))}else u(new O(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new O(C.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{N(Me,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);N(Me,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,r,15)})}T_(e,t,r){const i=Gc(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");N(Me,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);this.E_(f);let m=!1,y=!1;const b=new AR({Jo:k=>{y?N(Me,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||(N(Me,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),N(Me,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},Ho:()=>f.close()});return Ii(f,Ai.EventType.OPEN,()=>{y||(N(Me,`RPC '${e}' stream ${i} transport opened.`),b.i_())}),Ii(f,Ai.EventType.CLOSE,()=>{y||(y=!0,N(Me,`RPC '${e}' stream ${i} transport closed`),b.o_(),this.I_(f))}),Ii(f,Ai.EventType.ERROR,k=>{y||(y=!0,fn(Me,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),b.o_(new O(C.UNAVAILABLE,"The operation could not be completed")))}),Ii(f,Ai.EventType.MESSAGE,k=>{var V;if(!y){const D=k.data[0];B(!!D,16349);const $=D,j=($==null?void 0:$.error)||((V=$[0])==null?void 0:V.error);if(j){N(Me,`RPC '${e}' stream ${i} received error:`,j);const F=j.status;let z=function(T){const _=Ie[T];if(_!==void 0)return $m(_)}(F),H=j.message;F==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&fn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),z===void 0&&(z=C.INTERNAL,H="Unknown error status: "+F+" with message "+j.message),y=!0,b.o_(new O(z,H)),f.close()}else N(Me,`RPC '${e}' stream ${i} received:`,D),b.__(D)}}),Sr.u_(),setTimeout(()=>{b.s_()},0),b}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Kp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(n){return new Sr(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(){return typeof window!="undefined"?window:null}function co(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n){return new bA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr.c_=!1;class vg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="PersistentStream";class Ag{constructor(e,t,r,i,s,o,c,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}stop(){return p(this,null,function*(){this.x_()&&(yield this.close(0))})}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}k_(){return p(this,null,function*(){if(this.O_())return this.close(0)})}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,t){return p(this,null,function*(){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ge(t.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.t_(t)})}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(()=>p(this,null,function*(){this.state=0,this.start()}))}z_(e){return N(ef,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(N(ef,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bR extends Ag{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=kA(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?We(o.readTime):q.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Uc(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=vo(u)?{documents:Jm(s,u)}:{query:Xm(s,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zm(s,o.resumeToken);const h=Mc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=Br(s,o.snapshotVersion.toTimestamp());const h=Mc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=DA(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=Uc(this.serializer),t.removeTarget=e,this.q_(t)}}class PR extends Ag{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return B(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,B(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){B(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=NA(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Uc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>bo(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{}class kR extends CR{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Lc(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(C.UNKNOWN,s.toString())})}jo(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,Lc(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function NR(n,e,t,r){return new kR(n,e,t,r)}class DR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ge(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="RemoteStore";class VR{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(()=>p(this,null,function*(){sr(this)&&(N(Qn,"Restarting streams for network reachability change."),yield function(u){return p(this,null,function*(){const h=K(u);h.Ia.add(4),yield _s(h),h.Va.set("Unknown"),h.Ia.delete(4),yield pa(h)})}(this))}))}),this.Va=new DR(r,i)}}function pa(n){return p(this,null,function*(){if(sr(n))for(const e of n.Ra)yield e(!0)})}function _s(n){return p(this,null,function*(){for(const e of n.Ra)yield e(!1)})}function Rg(n,e){const t=K(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Lu(t)?Mu(t):Hr(t).O_()&&xu(t,e))}function Ou(n,e){const t=K(n),r=Hr(t);t.Ea.delete(e),r.O_()&&Sg(t,e),t.Ea.size===0&&(r.O_()?r.L_():sr(t)&&t.Va.set("Unknown"))}function xu(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hr(n).Z_(e)}function Sg(n,e){n.da.$e(e),Hr(n).X_(e)}function Mu(n){n.da=new vA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Hr(n).start(),n.Va.ua()}function Lu(n){return sr(n)&&!Hr(n).x_()&&n.Ea.size>0}function sr(n){return K(n).Ia.size===0}function bg(n){n.da=void 0}function OR(n){return p(this,null,function*(){n.Va.set("Online")})}function xR(n){return p(this,null,function*(){n.Ea.forEach((e,t)=>{xu(n,e)})})}function MR(n,e){return p(this,null,function*(){bg(n),Lu(n)?(n.Va.ha(e),Mu(n)):n.Va.set("Unknown")})}function LR(n,e,t){return p(this,null,function*(){if(n.Va.set("Online"),e instanceof Km&&e.state===2&&e.cause)try{yield function(i,s){return p(this,null,function*(){const o=s.cause;for(const c of s.targetIds)i.Ea.has(c)&&(yield i.remoteSyncer.rejectListen(c,o),i.Ea.delete(c),i.da.removeTarget(c))})}(n,e)}catch(r){N(Qn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield Do(n,r)}else if(e instanceof oo?n.da.Xe(e):e instanceof Gm?n.da.st(e):n.da.tt(e),!t.isEqual(q.min()))try{const r=yield Tg(n.localStore);t.compareTo(r)>=0&&(yield function(s,o){const c=s.da.Tt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ea.get(h);f&&s.Ea.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=s.Ea.get(u);if(!f)return;s.Ea.set(u,f.withResumeToken(ve.EMPTY_BYTE_STRING,f.snapshotVersion)),Sg(s,u);const m=new Vt(f.target,u,h,f.sequenceNumber);xu(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t))}catch(r){N(Qn,"Failed to raise snapshot:",r),yield Do(n,r)}})}function Do(n,e,t){return p(this,null,function*(){if(!yn(e))throw e;n.Ia.add(1),yield _s(n),n.Va.set("Offline"),t||(t=()=>Tg(n.localStore)),n.asyncQueue.enqueueRetryable(()=>p(this,null,function*(){N(Qn,"Retrying IndexedDB access"),yield t(),n.Ia.delete(1),yield pa(n)}))})}function Pg(n,e){return e().catch(t=>Do(n,t,e))}function ys(n){return p(this,null,function*(){const e=K(n),t=gn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xn;for(;UR(e);)try{const i=yield yR(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,FR(e,i)}catch(i){yield Do(e,i)}Cg(e)&&kg(e)})}function UR(n){return sr(n)&&n.Ta.length<10}function FR(n,e){n.Ta.push(e);const t=gn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Cg(n){return sr(n)&&!gn(n).x_()&&n.Ta.length>0}function kg(n){gn(n).start()}function BR(n){return p(this,null,function*(){gn(n).ra()})}function qR(n){return p(this,null,function*(){const e=gn(n);for(const t of n.Ta)e.ea(t.mutations)})}function jR(n,e,t){return p(this,null,function*(){const r=n.Ta.shift(),i=vu.from(r,e,t);yield Pg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),yield ys(n)})}function $R(n,e){return p(this,null,function*(){e&&gn(n).Y_&&(yield function(r,i){return p(this,null,function*(){if(function(o){return EA(o)&&o!==C.ABORTED}(i.code)){const s=r.Ta.shift();gn(r).B_(),yield Pg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield ys(r)}})}(n,e)),Cg(n)&&kg(n)})}function tf(n,e){return p(this,null,function*(){const t=K(n);t.asyncQueue.verifyOperationInProgress(),N(Qn,"RemoteStore received new credentials");const r=sr(t);t.Ia.add(3),yield _s(t),r&&t.Va.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),yield pa(t)})}function GR(n,e){return p(this,null,function*(){const t=K(n);e?(t.Ia.delete(2),yield pa(t)):e||(t.Ia.add(2),yield _s(t),t.Va.set("Unknown"))})}function Hr(n){return n.ma||(n.ma=function(t,r,i){const s=K(t);return s.sa(),new bR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:OR.bind(null,n),Yo:xR.bind(null,n),t_:MR.bind(null,n),H_:LR.bind(null,n)}),n.Ra.push(e=>p(this,null,function*(){e?(n.ma.B_(),Lu(n)?Mu(n):n.Va.set("Unknown")):(yield n.ma.stop(),bg(n))}))),n.ma}function gn(n){return n.fa||(n.fa=function(t,r,i){const s=K(t);return s.sa(),new PR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:BR.bind(null,n),t_:$R.bind(null,n),ta:qR.bind(null,n),na:jR.bind(null,n)}),n.Ra.push(e=>p(this,null,function*(){e?(n.fa.B_(),yield ys(n)):(yield n.fa.stop(),n.Ta.length>0&&(N(Qn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new Uu(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(n,e){if(Ge("AsyncQueue",`${e}: ${n}`),yn(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{static emptySet(e){return new br(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Ri(),this.sortedSet=new he(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof br)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.ga=new he(L.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class qr{constructor(e,t,r,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new qr(e,t,br.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class zR{constructor(){this.queries=rf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=K(t),s=i.queries;i.queries=rf(),s.forEach((o,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function rf(){return new Bt(n=>Cm(n),ia)}function Bu(n,e){return p(this,null,function*(){const t=K(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new KR,r=e.Da()?0:1);try{switch(r){case 0:s.wa=yield t.onListen(i,!0);break;case 1:s.wa=yield t.onListen(i,!1);break;case 2:yield t.onFirstRemoteStoreListen(i)}}catch(o){const c=Fu(o,`Initialization of query '${gr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&ju(t)})}function qu(n,e){return p(this,null,function*(){const t=K(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function WR(n,e){const t=K(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.Sa)c.Fa(i)&&(r=!0);o.wa=i}}r&&ju(t)}function HR(n,e,t){const r=K(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function ju(n){n.Ca.forEach(e=>{e.next()})}var Kc,sf;(sf=Kc||(Kc={})).Ma="default",sf.Cache="cache";class $u{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Kc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.key=e}}class Dg{constructor(e){this.key=e}}class QR{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=J(),this.mutatedKeys=J(),this.eu=km(e),this.tu=new br(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new nf,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),b=ms(this.query,m)?m:null,k=!!y&&this.mutatedKeys.has(y.key),V=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;y&&b?y.data.isEqual(b.data)?k!==V&&(r.track({type:3,doc:b}),D=!0):this.su(y,b)||(r.track({type:2,doc:b}),D=!0,(u&&this.eu(b,u)>0||h&&this.eu(b,h)<0)&&(c=!0)):!y&&b?(r.track({type:0,doc:b}),D=!0):y&&!b&&(r.track({type:1,doc:y}),D=!0,(u||h)&&(c=!0)),D&&(b?(o=o.add(b),s=V?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:c,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(b,k){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:D})}};return V(b)-V(k)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i!=null?i:!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new qr(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new nf,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=J(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Dg(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Ng(r))}),t}cu(e){this.Za=e.ks,this.Ya=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return qr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Gu="SyncEngine";class YR{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class JR{constructor(e){this.key=e,this.hu=!1}}class XR{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Bt(c=>Cm(c),ia),this.Eu=new Map,this.Iu=new Set,this.Ru=new he(L.comparator),this.Au=new Map,this.Vu=new Cu,this.du={},this.mu=new Map,this.fu=Hn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function ZR(n,e,t=!0){return p(this,null,function*(){const r=Ug(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=yield Vg(r,e,t,!0),i})}function eS(n,e){return p(this,null,function*(){const t=Ug(n);yield Vg(t,e,!0,!1)})}function Vg(n,e,t,r){return p(this,null,function*(){const i=yield IR(n.localStore,lt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=yield tS(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Rg(n.remoteStore,i),c})}function tS(n,e,t,r,i){return p(this,null,function*(){n.pu=(m,y,b)=>function(V,D,$,j){return p(this,null,function*(){let F=D.view.ru($);F.bs&&(F=yield Yd(V.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,F)));const z=j&&j.targetChanges.get(D.targetId),H=j&&j.targetMismatches.get(D.targetId)!=null,Y=D.view.applyChanges(F,V.isPrimaryClient,z,H);return af(V,D.targetId,Y.au),Y.snapshot})}(n,m,y,b);const s=yield Yd(n.localStore,e,!0),o=new QR(e,s.ks),c=o.ru(s.documents),u=gs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,u);af(n,t,h.au);const f=new YR(e,t,o);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),h.snapshot})}function nS(n,e,t){return p(this,null,function*(){const r=K(n),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!ia(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||(yield $c(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ou(r.remoteStore,i.targetId),zc(r,i.targetId)}).catch(ir))):(zc(r,i.targetId),yield $c(r.localStore,i.targetId,!0))})}function rS(n,e){return p(this,null,function*(){const t=K(n),r=t.Tu.get(e),i=t.Eu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ou(t.remoteStore,r.targetId))})}function iS(n,e,t){return p(this,null,function*(){const r=Fg(n);try{const i=yield function(o,c){const u=K(o),h=se.now(),f=c.reduce((b,k)=>b.add(k.key),J());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=tt(),V=J();return u.xs.getEntries(b,f).next(D=>{k=D,k.forEach(($,j)=>{j.isValidDocument()||(V=V.add($))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,k)).next(D=>{m=D;const $=[];for(const j of c){const F=yA(j,m.get(j.key).overlayedDocument);F!=null&&$.push(new qt(j.key,F,Em(F.value.mapValue),Fe.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,$,c)}).next(D=>{y=D;const $=D.applyToLocalDocumentSet(m,V);return u.documentOverlayCache.saveOverlays(b,D.batchId,$)})}).then(()=>({batchId:y.batchId,changes:Dm(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.du[o.currentUser.toKey()];h||(h=new he(G)),h=h.insert(c,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,t),yield Is(r,i.changes),yield ys(r.remoteStore)}catch(i){const s=Fu(i,"Failed to persist write");t.reject(s)}})}function Og(n,e){return p(this,null,function*(){const t=K(n);try{const r=yield gR(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Au.get(s);o&&(B(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?B(o.hu,14607):i.removedDocuments.size>0&&(B(o.hu,42227),o.hu=!1))}),yield Is(t,r,e)}catch(r){yield ir(r)}})}function of(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=K(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.Sa)y.va(c)&&(h=!0)}),h&&ju(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function sS(n,e,t){return p(this,null,function*(){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new he(L.comparator);o=o.insert(s,pe.newNoDocument(s,q.min()));const c=J().add(s),u=new ua(q.min(),new Map,new he(G),o,c);yield Og(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Ku(r)}else yield $c(r.localStore,e,!1).then(()=>zc(r,e,t)).catch(ir)})}function oS(n,e){return p(this,null,function*(){const t=K(n),r=e.batch.batchId;try{const i=yield mR(t.localStore,e);Mg(t,r,null),xg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield Is(t,i)}catch(i){yield ir(i)}})}function aS(n,e,t){return p(this,null,function*(){const r=K(n);try{const i=yield function(o,c){const u=K(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(B(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Mg(r,e,t),xg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield Is(r,i)}catch(i){yield ir(i)}})}function xg(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Mg(n,e,t){const r=K(n);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function zc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||Lg(n,r)})}function Lg(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ou(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ku(n))}function af(n,e,t){for(const r of t)r instanceof Ng?(n.Vu.addReference(r.key,e),cS(n,r)):r instanceof Dg?(N(Gu,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Lg(n,r.key)):U(19791,{wu:r})}function cS(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(N(Gu,"New document in limbo: "+t),n.Iu.add(r),Ku(n))}function Ku(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new L(ie.fromString(e)),r=n.fu.next();n.Au.set(r,new JR(t)),n.Ru=n.Ru.insert(t,r),Rg(n.remoteStore,new Vt(lt(ps(t.path)),r,"TargetPurposeLimboResolution",ut.ce))}}function Is(n,e,t){return p(this,null,function*(){const r=K(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{o.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Du.Is(u.targetId,h);s.push(m)}}))}),yield Promise.all(o),r.Pu.H_(i),yield function(u,h){return p(this,null,function*(){const f=K(u);try{yield f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>R.forEach(h,y=>R.forEach(y.Ts,b=>f.persistence.referenceDelegate.addReference(m,y.targetId,b)).next(()=>R.forEach(y.Es,b=>f.persistence.referenceDelegate.removeReference(m,y.targetId,b)))))}catch(m){if(!yn(m))throw m;N(Vu,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const b=f.vs.get(y),k=b.snapshotVersion,V=b.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(y,V)}}})}(r.localStore,s))})}function uS(n,e){return p(this,null,function*(){const t=K(n);if(!t.currentUser.isEqual(e)){N(Gu,"User change. New user:",e.toKey());const r=yield Eg(t.localStore,e);t.currentUser=e,function(s,o){s.mu.forEach(c=>{c.forEach(u=>{u.reject(new O(C.CANCELLED,o))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield Is(t,r.Ns)}})}function lS(n,e){const t=K(n),r=t.Au.get(e);if(r&&r.hu)return J().add(r.key);{let i=J();const s=t.Eu.get(e);if(!s)return i;for(const o of s){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function Ug(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sS.bind(null,e),e.Pu.H_=WR.bind(null,e.eventManager),e.Pu.yu=HR.bind(null,e.eventManager),e}function Fg(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aS.bind(null,e),e}class is{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){this.serializer=fa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)})}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Ig(this.persistence,new yg,e.initialUser,this.serializer)}Cu(e){return new ku(da.Vi,this.serializer)}Du(e){return new wg}terminate(){return p(this,null,function*(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}is.provider={build:()=>new is};class hS extends is{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){B(this.persistence.referenceDelegate instanceof No,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fg(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new ku(r=>No.Vi(r,t),this.serializer)}}class zu extends is{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){yield Yt(zu.prototype,this,"initialize").call(this,e),yield this.xu.initialize(this,e),yield Fg(this.xu.syncEngine),yield ys(this.xu.remoteStore),yield this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))})}vu(e){return Ig(this.persistence,new yg,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new fg(r,e.asyncQueue,t)}Mu(e,t){const r=new mv(t,this.persistence);return new pv(e.asyncQueue,r)}Cu(e){const t=hR(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new Nu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,SR(),co(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new wg}}class Vo{initialize(e,t){return p(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>of(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uS.bind(null,this.syncEngine),yield GR(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new zR}()}createDatastore(e){const t=fa(e.databaseInfo.databaseId),r=RR(e.databaseInfo);return NR(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new VR(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>of(this.syncEngine,t,0),function(){return Zd.v()?new Zd:new TR}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){const m=new XR(i,s,o,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return p(this,null,function*(){var e,t;yield function(i){return p(this,null,function*(){const s=K(i);N(Qn,"RemoteStore shutting down."),s.Ia.add(5),yield _s(s),s.Aa.shutdown(),s.Va.set("Unknown")})}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()})}}Vo.provider={build:()=>new Vo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="FirestoreClient";class dS{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=De.UNAUTHENTICATED,this.clientId=lu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,o=>p(this,null,function*(){N(_n,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,o=>(N(_n,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>p(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function cc(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),N(_n,"Initializing OfflineComponentProvider");const t=n.configuration;yield e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(i=>p(this,null,function*(){r.isEqual(i)||(yield Eg(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e})}function cf(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const t=yield fS(n);N(_n,"Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>tf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>tf(e.remoteStore,i)),n._onlineComponents=e})}function fS(n){return p(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(_n,"Using user provided OfflineComponentProvider");try{yield cc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),yield cc(n,new is)}}else N(_n,"Using default OfflineComponentProvider"),yield cc(n,new hS(void 0));return n._offlineComponents})}function Bg(n){return p(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(_n,"Using user provided OnlineComponentProvider"),yield cf(n,n._uninitializedComponentsProvider._online)):(N(_n,"Using default OnlineComponentProvider"),yield cf(n,new Vo))),n._onlineComponents})}function pS(n){return Bg(n).then(e=>e.syncEngine)}function Oo(n){return p(this,null,function*(){const e=yield Bg(n),t=e.eventManager;return t.onListen=ZR.bind(null,e.syncEngine),t.onUnlisten=nS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rS.bind(null,e.syncEngine),t})}function mS(n,e,t,r){const i=new Wu(r),s=new $u(e,i,t);return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return Bu(yield Oo(n),s)})),()=>{i.Nu(),n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return qu(yield Oo(n),s)}))}}function gS(n,e,t={}){const r=new At;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,c,u,h){const f=new Wu({next:y=>{f.Nu(),o.enqueueAndForget(()=>qu(s,m));const b=y.docs.has(c);!b&&y.fromCache?h.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&u&&u.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new $u(ps(c.path),f,{includeMetadataChanges:!0,qa:!0});return Bu(s,m)}(yield Oo(n),n.asyncQueue,e,t,r)})),r.promise}function _S(n,e,t={}){const r=new At;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,c,u,h){const f=new Wu({next:y=>{f.Nu(),o.enqueueAndForget(()=>qu(s,m)),y.fromCache&&u.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new $u(c,f,{includeMetadataChanges:!0,qa:!0});return Bu(s,m)}(yield Oo(n),n.asyncQueue,e,t,r)})),r.promise}function yS(n,e){const t=new At;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return iS(yield pS(n),e,t)})),t.promise}/**
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
 */function qg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="ComponentProvider",uf=new Map;function ES(n,e,t,r,i){return new Gv(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,qg(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="firestore.googleapis.com",lf=!0;class hf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jg,this.ssl=lf}else this.host=e.host,this.ssl=(t=e.ssl)!=null?t:lf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ug;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HA)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qg((r=e.experimentalLongPollingOptions)!=null?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ma{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zw;switch(r.type){case"firstParty":return new rv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return p(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=uf.get(t);r&&(N(IS,"Removing Datastore"),uf.delete(t),r.terminate())}(this),Promise.resolve()}}function TS(n,e,t,r={}){var h;n=ze(n,ma);const i=tr(e),s=n._getSettings(),o=xe(X({},s),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&Yc(`https://${c}`),s.host!==jg&&s.host!==c&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=xe(X({},s),{host:c,ssl:i,emulatorOptions:r});if(!dn(u,o)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=De.MOCK_USER;else{f=jf(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new De(y)}n._authCredentials=new ev(new Wp(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jt(this.firestore,e,this._query)}}class me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(hs(t,me._jsonSchema))return new me(e,r||null,new L(ie.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:we("string",me._jsonSchemaVersion),referencePath:we("string")};class hn extends jt{constructor(e,t,r){super(e,t,ps(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new L(e))}withConverter(e){return new hn(this.firestore,e,this._path)}}function wC(n,e,...t){if(n=W(n),Qp("collection","path",e),n instanceof ma){const r=ie.fromString(e,...t);return ed(r),new hn(n,null,r)}{if(!(n instanceof me||n instanceof hn))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return ed(r),new hn(n.firestore,null,r)}}function wS(n,e,...t){if(n=W(n),arguments.length===1&&(e=lu.newId()),Qp("doc","path",e),n instanceof ma){const r=ie.fromString(e,...t);return Zh(r),new me(n,null,new L(r))}{if(!(n instanceof me||n instanceof hn))throw new O(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Zh(r),new me(n.firestore,n instanceof hn?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="AsyncQueue";class ff{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vg(this,"async_queue_retry"),this._c=()=>{const r=co();r&&N(df,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=co();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=co();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new At;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}lc(){return p(this,null,function*(){if(this.Yu.length!==0){try{yield this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!yn(e))throw e;N(df,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}})}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ge("INTERNAL UNHANDLED ERROR: ",pf(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Uu.createAndSchedule(this,e,t,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&U(47125,{Pc:pf(this.nc)})}verifyOperationInProgress(){}Tc(){return p(this,null,function*(){let e;do e=this.ac,yield e;while(e!==this.ac)})}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function pf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ct extends ma{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ff,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return p(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ff(e),this._firestoreClient=void 0,yield e}})}}function vC(n,e){const t=typeof n=="object"?n:Fo(),r=typeof n=="string"?n:e||wo,i=nr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ff("firestore");s&&TS(i,...s)}return i}function ga(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$g(n),n._firestoreClient}function $g(n){var r,i,s,o;const e=n._freezeSettings(),t=ES(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new dS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}function AC(n,e){fn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return vS(n,Vo.provider,{build:r=>new zu(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function vS(n,e,t){if((n=ze(n,Ct))._firestoreClient||n._terminated)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new O(C.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},$g(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(ve.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ct(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hs(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:we("string",ct._jsonSchemaVersion),bytes:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rt._jsonSchemaVersion}}static fromJSON(e){if(hs(e,Rt._jsonSchema))return new Rt(e.latitude,e.longitude)}}Rt._jsonSchemaVersion="firestore/geoPoint/1.0",Rt._jsonSchema={type:we("string",Rt._jsonSchemaVersion),latitude:we("number"),longitude:we("number")};/**
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
 */class mt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hs(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new mt(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:we("string",mt._jsonSchemaVersion),vectorValues:we("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=/^__.*__$/;class RS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wr(e,this.data,t,this.fieldTransforms)}}class Gg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{dataSource:n})}}class _a{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new _a(X(X({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return xo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Kg(this.dataSource)&&AS.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class SS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fa(e)}A(e,t,r,i=!1){return new _a({dataSource:e,methodName:t,targetDoc:r,path:de.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ya(n){const e=n._freezeSettings(),t=fa(n._databaseId);return new SS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zg(n,e,t,r,i,s={}){const o=n.A(s.merge||s.mergeFields?2:0,e,t,i);Xu("Data must be an object, but it was:",o,r);const c=Wg(r,o);let u,h;if(s.merge)u=new Ye(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=Yn(e,m,t);if(!o.contains(y))throw new O(C.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Yg(f,y)||f.push(y)}u=new Ye(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new RS(new Ue(c),u,h)}class Ia extends Qr{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ia}}function bS(n,e,t){return new _a({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Qu extends Qr{_toFieldTransform(e){return new oa(e.path,new Lr)}isEqual(e){return e instanceof Qu}}class Yu extends Qr{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=bS(this,e,!0),r=this.Sc.map(s=>Yr(s,t)),i=new Kn(r);return new oa(e.path,i)}isEqual(e){return e instanceof Yu&&dn(this.Sc,e.Sc)}}class Ju extends Qr{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new Fr(e.serializer,xm(e.serializer,this.bc));return new oa(e.path,t)}isEqual(e){return e instanceof Ju&&this.bc===e.bc}}function PS(n,e,t,r){const i=n.A(1,e,t);Xu("Data must be an object, but it was:",i,r);const s=[],o=Ue.empty();In(r,(u,h)=>{const f=Qg(e,u,t);h=W(h);const m=i.fc(f);if(h instanceof Ia)s.push(f);else{const y=Yr(h,m);y!=null&&(s.push(f),o.set(f,y))}});const c=new Ye(s);return new Gg(o,c,i.fieldTransforms)}function CS(n,e,t,r,i,s){const o=n.A(1,e,t),c=[Yn(e,r,t)],u=[i];if(s.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)c.push(Yn(e,s[y])),u.push(s[y+1]);const h=[],f=Ue.empty();for(let y=c.length-1;y>=0;--y)if(!Yg(h,c[y])){const b=c[y];let k=u[y];k=W(k);const V=o.fc(b);if(k instanceof Ia)h.push(b);else{const D=Yr(k,V);D!=null&&(h.push(b),f.set(b,D))}}const m=new Ye(h);return new Gg(f,m,o.fieldTransforms)}function kS(n,e,t,r=!1){return Yr(t,n.A(r?4:3,e))}function Yr(n,e){if(Hg(n=W(n)))return Xu("Unsupported field value:",e,n),Wg(n,e);if(n instanceof Qr)return function(r,i){if(!Kg(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let u=Yr(c,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=W(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=se.fromDate(r);return{timestampValue:Br(i.serializer,s)}}if(r instanceof se){const s=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Br(i.serializer,s)}}if(r instanceof Rt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ct)return{bytesValue:zm(i.serializer,r._byteString)};if(r instanceof me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Su(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mt)return function(o,c){const u=o instanceof mt?o.toArray():o;return{mapValue:{fields:{[yu]:{stringValue:Iu},[Vr]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return Tu(c.serializer,f)})}}}}}}(r,i);if(rg(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Yo(r)}`)}(n,e)}function Wg(n,e){const t={};return hm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):In(n,(r,i)=>{const s=Yr(i,e.dc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Hg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Rt||n instanceof ct||n instanceof me||n instanceof Qr||n instanceof mt||rg(n))}function Xu(n,e,t){if(!Hg(t)||!Yp(t)){const r=Yo(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function Yn(n,e,t){if((e=W(e))instanceof Hu)return e._internalPath;if(typeof e=="string")return Qg(n,e);throw xo("Field path arguments must be of type string or ",n,!1,void 0,t)}const NS=new RegExp("[~\\*/\\[\\]]");function Qg(n,e,t){if(e.search(NS)>=0)throw xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hu(...e.split("."))._internalPath}catch(r){throw xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new O(C.INVALID_ARGUMENT,c+n+u)}function Yg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return In(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[Vr].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>le(o.doubleValue));return new mt(t)}convertGeoPoint(e){return new Rt(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=na(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zi(e));default:return null}}convertTimestamp(e){const t=Lt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);B(ng(r),9688,{name:e});const i=new $n(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||Ge(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class Zu extends DS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function RC(){return new Qu("serverTimestamp")}function SC(...n){return new Yu("arrayUnion",n)}function bC(n){return new Ju("increment",n)}const mf="@firebase/firestore",gf="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e,t;return(t=(e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)!=null?t:void 0}get(e){if(this._document){const t=this._document.data.field(Yn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VS extends Jg{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class el{}class tl extends el{}function PC(n,e,...t){let r=[];e instanceof el&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof nl).length,c=s.filter(u=>u instanceof Ea).length;if(o>1||o>0&&c>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ea extends tl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ea(e,t,r)}_apply(e){const t=this._parse(e);return Zg(e._query,t),new jt(e.firestore,e.converter,xc(e._query,t))}_parse(e){const t=ya(e.firestore);return function(s,o,c,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){If(m,f);const k=[];for(const V of m)k.push(yf(u,s,V));y={arrayValue:{values:k}}}else y=yf(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||If(m,f),y=kS(c,o,m,f==="in"||f==="not-in");return te.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function CC(n,e,t){const r=e,i=Yn("where",n);return Ea._create(i,r,t)}class nl extends el{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new nl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)Zg(o,u),o=xc(o,u)}(e._query,t),new jt(e.firestore,e.converter,xc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class rl extends tl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new rl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rs(s,o)}(e._query,this._field,this._direction);return new jt(e.firestore,e.converter,sA(e._query,t))}}function kC(n,e="asc"){const t=e,r=Yn("orderBy",n);return rl._create(r,t)}class il extends tl{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new il(e,t,r)}_apply(e){return new jt(e.firestore,e.converter,Ro(e._query,this._limit,this._limitType))}}function NC(n){return lv("limit",n),il._create("limit",n,"F")}function yf(n,e,t){if(typeof(t=W(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pm(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!L.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ts(n,new L(r))}if(t instanceof me)return ts(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yo(t)}.`)}function If(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zg(n,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function e_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Pi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Un extends Jg{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Un._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Un._jsonSchemaVersion="firestore/documentSnapshot/1.0",Un._jsonSchema={type:we("string",Un._jsonSchemaVersion),bundleSource:we("string","DocumentSnapshot"),bundleName:we("string"),bundle:we("string")};class uo extends Un{data(e={}){return super.data(e)}}class Fn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Pi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new uo(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new uo(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Pi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new uo(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Pi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:OS(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */Fn._jsonSchemaVersion="firestore/querySnapshot/1.0",Fn._jsonSchema={type:we("string",Fn._jsonSchemaVersion),bundleSource:we("string","QuerySnapshot"),bundleName:we("string"),bundle:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(n){n=ze(n,me);const e=ze(n.firestore,Ct),t=ga(e);return gS(t,n._key).then(r=>t_(e,n,r))}function VC(n){n=ze(n,jt);const e=ze(n.firestore,Ct),t=ga(e),r=new Zu(e);return Xg(n._query),_S(t,n._query).then(i=>new Fn(e,r,n,i))}function OC(n,e,t){n=ze(n,me);const r=ze(n.firestore,Ct),i=e_(n.converter,e,t),s=ya(r);return Ta(r,[zg(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Fe.none())])}function xC(n,e,t,...r){n=ze(n,me);const i=ze(n.firestore,Ct),s=ya(i);let o;return o=typeof(e=W(e))=="string"||e instanceof Hu?CS(s,"updateDoc",n._key,e,t,r):PS(s,"updateDoc",n._key,e),Ta(i,[o.toMutation(n._key,Fe.exists(!0))])}function MC(n){return Ta(ze(n.firestore,Ct),[new ca(n._key,Fe.none())])}function LC(n,e){const t=ze(n.firestore,Ct),r=wS(n),i=e_(n.converter,e),s=ya(n.firestore);return Ta(t,[zg(s,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Fe.exists(!1))]).then(()=>r)}function UC(n,...e){var h,f,m;n=W(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||_f(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(_f(e[r])){const y=e[r];e[r]=(h=y.next)==null?void 0:h.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(m=y.complete)==null?void 0:m.bind(y)}let s,o,c;if(n instanceof me)o=ze(n.firestore,Ct),c=ps(n._key.path),s={next:y=>{e[r]&&e[r](t_(o,n,y))},error:e[r+1],complete:e[r+2]};else{const y=ze(n,jt);o=ze(y.firestore,Ct),c=y._query;const b=new Zu(o);s={next:k=>{e[r]&&e[r](new Fn(o,b,y,k))},error:e[r+1],complete:e[r+2]},Xg(n._query)}const u=ga(o);return mS(u,c,i,s)}function Ta(n,e){const t=ga(n);return yS(t,e)}function t_(n,e,t){const r=t.docs.get(e._key),i=new Zu(n);return new Un(n,i,e._key,r,new Pi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Xw(rr),gt(new ht("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new Ct(new tv(r.getProvider("auth-internal")),new iv(o,r.getProvider("app-check-internal")),Kv(o,i),o);return s=X({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Je(mf,gf,e),Je(mf,gf,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebasestorage.googleapis.com",r_="storageBucket",xS=2*60*1e3,MS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends _t{constructor(e,t,r=0){super(uc(e),`Firebase Storage: ${t} (${uc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function uc(n){return"storage/"+n}function sl(){const n="An unknown error occurred, please check the error payload for server response.";return new _e(ge.UNKNOWN,n)}function LS(n){return new _e(ge.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function US(n){return new _e(ge.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(ge.UNAUTHENTICATED,n)}function BS(){return new _e(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qS(n){return new _e(ge.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jS(){return new _e(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $S(){return new _e(ge.CANCELED,"User canceled the upload/download.")}function GS(n){return new _e(ge.INVALID_URL,"Invalid URL '"+n+"'.")}function KS(n){return new _e(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function zS(){return new _e(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+r_+"' property when initializing the app?")}function WS(){return new _e(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HS(){return new _e(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QS(n){return new _e(ge.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wc(n){return new _e(ge.INVALID_ARGUMENT,n)}function i_(){return new _e(ge.APP_DELETED,"The Firebase app was deleted.")}function YS(n){return new _e(ge.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ji(n,e){return new _e(ge.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ei(n){throw new _e(ge.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=nt.makeFromUrl(e,t)}catch(i){return new nt(e,"")}if(r.path==="")return r;throw KS(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(z){z.path_=decodeURIComponent(z.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",b=new RegExp(`^https?://${m}/${f}/b/${i}/o${y}`,"i"),k={bucket:1,path:3},V=t===n_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",$=new RegExp(`^https?://${V}/${i}/${D}`,"i"),F=[{regex:c,indices:u,postModify:s},{regex:b,indices:k,postModify:h},{regex:$,indices:{bucket:1,path:2},postModify:h}];for(let z=0;z<F.length;z++){const H=F[z],Y=H.regex.exec(e);if(Y){const T=Y[H.indices.bucket];let _=Y[H.indices.path];_||(_=""),r=new nt(T,_),H.postModify(r);break}}if(r==null)throw GS(e);return r}}class JS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(n,e,t){let r=1,i=null,s=null,o=!1,c=0;function u(){return c===2}let h=!1;function f(...D){h||(h=!0,e.apply(null,D))}function m(D){i=setTimeout(()=>{i=null,n(b,u())},D)}function y(){s&&clearTimeout(s)}function b(D,...$){if(h){y();return}if(D){y(),f.call(null,D,...$);return}if(u()||o){y(),f.call(null,D,...$);return}r<64&&(r*=2);let F;c===1?(c=2,F=0):F=(r+Math.random())*1e3,m(F)}let k=!1;function V(D){k||(k=!0,y(),!h&&(i!==null?(D||(c=2),clearTimeout(i),m(0)):D||(c=1)))}return m(0),s=setTimeout(()=>{o=!0,V(!0)},t),V}function ZS(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(n){return n!==void 0}function tb(n){return typeof n=="object"&&!Array.isArray(n)}function ol(n){return typeof n=="string"||n instanceof String}function Ef(n){return al()&&n instanceof Blob}function al(){return typeof Blob!="undefined"}function Tf(n,e,t,r){if(r<e)throw Wc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Wc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function s_(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Bn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Bn||(Bn={}));/**
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
 */function nb(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t,r,i,s,o,c,u,h,f,m,y=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=y,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,V)=>{this.resolve_=k,this.reject_=V,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===Bn.NO_ERROR,u=s.getStatus();if(!c||nb(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Bn.ABORT;r(!1,new zs(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new zs(h,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());eb(u)?s(u):s()}catch(u){o(u)}else if(c!==null){const u=sl();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?i_():$S();o(u)}else{const u=jS();o(u)}};this.canceled_?t(!1,new zs(!1,null,!0)):this.backoffId_=XS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zs{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ib(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function sb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function ob(n,e){e&&(n["X-Firebase-GMPID"]=e)}function ab(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function cb(n,e,t,r,i,s,o=!0,c=!1){const u=s_(n.urlParams),h=n.url+u,f=Object.assign({},n.headers);return ob(f,e),ib(f,t),sb(f,s),ab(f,r),new rb(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function lb(...n){const e=ub();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(al())return new Blob(n);throw new _e(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hb(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function db(n){if(typeof atob=="undefined")throw QS("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lc{constructor(e,t){this.data=e,this.contentType=t||null}}function fb(n,e){switch(n){case vt.RAW:return new lc(o_(e));case vt.BASE64:case vt.BASE64URL:return new lc(a_(n,e));case vt.DATA_URL:return new lc(mb(e),gb(e))}throw sl()}function o_(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pb(n){let e;try{e=decodeURIComponent(n)}catch(t){throw ji(vt.DATA_URL,"Malformed data URL.")}return o_(e)}function a_(n,e){switch(n){case vt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ji(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case vt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ji(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=db(e)}catch(i){throw i.message.includes("polyfill")?i:ji(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class c_{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ji(vt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=_b(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mb(n){const e=new c_(n);return e.base64?a_(vt.BASE64,e.rest):pb(e.rest)}function gb(n){return new c_(n).contentType}function _b(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){let r=0,i="";Ef(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ef(this.data_)){const r=this.data_,i=hb(r,e,t);return i===null?null:new rn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new rn(r,!0)}}static getBlob(...e){if(al()){const t=e.map(r=>r instanceof rn?r.data_:r);return new rn(lb.apply(null,t))}else{const t=e.map(o=>ol(o)?fb(vt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[s++]=o[c]}),new rn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){let e;try{e=JSON.parse(n)}catch(t){return null}return tb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Ib(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function l_(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(n,e){return e}class $e{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||Eb}}let Ws=null;function Tb(n){return!ol(n)||n.length<2?n:l_(n)}function h_(){if(Ws)return Ws;const n=[];n.push(new $e("bucket")),n.push(new $e("generation")),n.push(new $e("metageneration")),n.push(new $e("name","fullPath",!0));function e(s,o){return Tb(o)}const t=new $e("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new $e("size");return i.xform=r,n.push(i),n.push(new $e("timeCreated")),n.push(new $e("updated")),n.push(new $e("md5Hash",null,!0)),n.push(new $e("cacheControl",null,!0)),n.push(new $e("contentDisposition",null,!0)),n.push(new $e("contentEncoding",null,!0)),n.push(new $e("contentLanguage",null,!0)),n.push(new $e("contentType",null,!0)),n.push(new $e("metadata","customMetadata",!0)),Ws=n,Ws}function wb(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new nt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function vb(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return wb(r,n),r}function d_(n,e,t){const r=u_(e);return r===null?null:vb(n,r,t)}function Ab(n,e,t,r){const i=u_(e);if(i===null||!ol(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=n.bucket,m=n.fullPath,y="/b/"+o(f)+"/o/"+o(m),b=cl(y,t,r),k=s_({alt:"media",token:h});return b+k})[0]}function Rb(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class f_{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){if(!n)throw sl()}function Sb(n,e){function t(r,i){const s=d_(n,i,e);return p_(s!==null),s}return t}function bb(n,e){function t(r,i){const s=d_(n,i,e);return p_(s!==null),Ab(s,i,n.host,n._protocol)}return t}function m_(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=BS():i=FS():t.getStatus()===402?i=US(n.bucket):t.getStatus()===403?i=qS(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Pb(n){const e=m_(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=LS(n.path)),s.serverResponse=i.serverResponse,s}return t}function Cb(n,e,t){const r=e.fullServerUrl(),i=cl(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,c=new f_(i,s,bb(n,t),o);return c.errorHandler=Pb(e),c}function kb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Nb(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=kb(null,e)),r}function Db(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let F="";for(let z=0;z<2;z++)F=F+Math.random().toString().slice(2);return F}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const h=Nb(e,r,i),f=Rb(h,t),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+u+"--",b=rn.getBlob(m,r,y);if(b===null)throw WS();const k={name:h.fullPath},V=cl(s,n.host,n._protocol),D="POST",$=n.maxUploadRetryTime,j=new f_(V,D,Sb(n,t),$);return j.urlParams=k,j.headers=o,j.body=b.uploadData(),j.errorHandler=m_(e),j}class Vb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,s){if(this.sent_)throw Ei("cannot .send() more than once");if(tr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ei("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ei("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Ei("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ei("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ob extends Vb{initXhr(){this.xhr_.responseType="text"}}function g_(){return new Ob}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this._service=e,t instanceof nt?this._location=t:this._location=nt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Jn(e,t)}get root(){const e=new nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return l_(this._location.path)}get storage(){return this._service}get parent(){const e=yb(this._location.path);if(e===null)return null;const t=new nt(this._location.bucket,e);return new Jn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw YS(e)}}function xb(n,e,t){n._throwIfRoot("uploadBytes");const r=Db(n.storage,n._location,h_(),new rn(e,!0),t);return n.storage.makeRequestWithTokens(r,g_).then(i=>({metadata:i,ref:n}))}function Mb(n){n._throwIfRoot("getDownloadURL");const e=Cb(n.storage,n._location,h_());return n.storage.makeRequestWithTokens(e,g_).then(t=>{if(t===null)throw HS();return t})}function Lb(n,e){const t=Ib(n._location.path,e),r=new nt(n._location.bucket,t);return new Jn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(n){return/^[A-Za-z]+:\/\//.test(n)}function Fb(n,e){return new Jn(n,e)}function __(n,e){if(n instanceof ul){const t=n;if(t._bucket==null)throw zS();const r=new Jn(t,t._bucket);return e!=null?__(r,e):r}else return e!==void 0?Lb(n,e):n}function Bb(n,e){if(e&&Ub(e)){if(n instanceof ul)return Fb(n,e);throw Wc("To use ref(service, url), the first argument must be a Storage instance.")}else return __(n,e)}function wf(n,e){const t=e==null?void 0:e[r_];return t==null?null:nt.makeFromBucketSpec(t,n)}function qb(n,e,t,r={}){n.host=`${e}:${t}`;const i=tr(e);i&&Yc(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:jf(s,n.app.options.projectId))}class ul{constructor(e,t,r,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=n_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xS,this._maxUploadRetryTime=MS,this._requests=new Set,i!=null?this._bucket=nt.makeFromBucketSpec(i,this._host):this._bucket=wf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nt.makeFromBucketSpec(this._url,e):this._bucket=wf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return p(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(t!==null)return t.accessToken}return null})}_getAppCheckToken(){return p(this,null,function*(){if(Te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new JS(i_());{const o=cb(e,this._appId,r,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}makeRequestWithTokens(e,t){return p(this,null,function*(){const[r,i]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()})}}const vf="@firebase/storage",Af="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="storage";function FC(n,e,t){return n=W(n),xb(n,e,t)}function BC(n){return n=W(n),Mb(n)}function qC(n,e){return n=W(n),Bb(n,e)}function jC(n=Fo(),e){n=W(n);const r=nr(n,y_).getImmediate({identifier:e}),i=Ff("storage");return i&&jb(r,...i),r}function jb(n,e,t,r={}){qb(n,e,t,r)}function $b(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new ul(t,r,i,e,rr)}function Gb(){gt(new ht(y_,$b,"PUBLIC").setMultipleInstances(!0)),Je(vf,Af,""),Je(vf,Af,"esm2020")}Gb();const I_="@firebase/installations",ll="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=1e4,T_=`w:${ll}`,w_="FIS_v2",Kb="https://firebaseinstallations.googleapis.com/v1",zb=60*60*1e3,Wb="installations",Hb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xn=new er(Wb,Hb,Qb);function v_(n){return n instanceof _t&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_({projectId:n}){return`${Kb}/projects/${n}/installations`}function R_(n){return{token:n.token,requestStatus:2,expiresIn:Jb(n.expiresIn),creationTime:Date.now()}}function S_(n,e){return p(this,null,function*(){const r=(yield e.json()).error;return Xn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function b_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Yb(n,{refreshToken:e}){const t=b_(n);return t.append("Authorization",Xb(e)),t}function P_(n){return p(this,null,function*(){const e=yield n();return e.status>=500&&e.status<600?n():e})}function Jb(n){return Number(n.replace("s","000"))}function Xb(n){return`${w_} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=A_(n),o=b_(n),c=e.getImmediate({optional:!0});if(c){const m=yield c.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={fid:t,authVersion:w_,appId:n.appId,sdkVersion:T_},h={method:"POST",headers:o,body:JSON.stringify(u)},f=yield P_(()=>fetch(s,h));if(f.ok){const m=yield f.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:R_(m.authToken)}}else throw yield S_("Create Installation",f)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=/^[cdef][\w-]{21}$/,Hc="";function nP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=rP(n);return tP.test(t)?t:Hc}catch(n){return Hc}}function rP(n){return eP(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new Map;function N_(n,e){const t=wa(n);D_(t,e),iP(t,e)}function D_(n,e){const t=k_.get(n);if(t)for(const r of t)r(e)}function iP(n,e){const t=sP();t&&t.postMessage({key:n,fid:e}),oP()}let On=null;function sP(){return!On&&"BroadcastChannel"in self&&(On=new BroadcastChannel("[Firebase] FID Change"),On.onmessage=n=>{D_(n.data.key,n.data.fid)}),On}function oP(){k_.size===0&&On&&(On.close(),On=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="firebase-installations-database",cP=1,Zn="firebase-installations-store";let hc=null;function hl(){return hc||(hc=Lo(aP,cP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Zn)}}})),hc}function Mo(n,e){return p(this,null,function*(){const t=wa(n),i=(yield hl()).transaction(Zn,"readwrite"),s=i.objectStore(Zn),o=yield s.get(t);return yield s.put(e,t),yield i.done,(!o||o.fid!==e.fid)&&N_(n,e.fid),e})}function V_(n){return p(this,null,function*(){const e=wa(n),r=(yield hl()).transaction(Zn,"readwrite");yield r.objectStore(Zn).delete(e),yield r.done})}function va(n,e){return p(this,null,function*(){const t=wa(n),i=(yield hl()).transaction(Zn,"readwrite"),s=i.objectStore(Zn),o=yield s.get(t),c=e(o);return c===void 0?yield s.delete(t):yield s.put(c,t),yield i.done,c&&(!o||o.fid!==c.fid)&&N_(n,c.fid),c})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){return p(this,null,function*(){let e;const t=yield va(n.appConfig,r=>{const i=uP(r),s=lP(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Hc?{installationEntry:yield e}:{installationEntry:t,registrationPromise:e}})}function uP(n){const e=n||{fid:nP(),registrationStatus:0};return O_(e)}function lP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=hP(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dP(n)}:{installationEntry:e}}function hP(n,e){return p(this,null,function*(){try{const t=yield Zb(n,e);return Mo(n.appConfig,t)}catch(t){throw v_(t)&&t.customData.serverCode===409?yield V_(n.appConfig):yield Mo(n.appConfig,{fid:e.fid,registrationStatus:0}),t}})}function dP(n){return p(this,null,function*(){let e=yield Rf(n.appConfig);for(;e.registrationStatus===1;)yield C_(100),e=yield Rf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=yield dl(n);return r||t}return e})}function Rf(n){return va(n,e=>{if(!e)throw Xn.create("installation-not-found");return O_(e)})}function O_(n){return fP(n)?{fid:n.fid,registrationStatus:0}:n}function fP(n){return n.registrationStatus===1&&n.registrationTime+E_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},t){const s=mP(n,t),o=Yb(n,t),c=e.getImmediate({optional:!0});if(c){const m=yield c.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={installation:{sdkVersion:T_,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(u)},f=yield P_(()=>fetch(s,h));if(f.ok){const m=yield f.json();return R_(m)}else throw yield S_("Generate Auth Token",f)})}function mP(n,{fid:e}){return`${A_(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n,e=!1){return p(this,null,function*(){let t;const r=yield va(n.appConfig,s=>{if(!x_(s))throw Xn.create("not-registered");const o=s.authToken;if(!e&&yP(o))return s;if(o.requestStatus===1)return t=gP(n,e),s;{if(!navigator.onLine)throw Xn.create("app-offline");const c=EP(s);return t=_P(n,c),c}});return t?yield t:r.authToken})}function gP(n,e){return p(this,null,function*(){let t=yield Sf(n.appConfig);for(;t.authToken.requestStatus===1;)yield C_(100),t=yield Sf(n.appConfig);const r=t.authToken;return r.requestStatus===0?fl(n,e):r})}function Sf(n){return va(n,e=>{if(!x_(e))throw Xn.create("not-registered");const t=e.authToken;return TP(t)?xe(X({},e),{authToken:{requestStatus:0}}):e})}function _P(n,e){return p(this,null,function*(){try{const t=yield pP(n,e),r=xe(X({},e),{authToken:t});return yield Mo(n.appConfig,r),t}catch(t){if(v_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))yield V_(n.appConfig);else{const r=xe(X({},e),{authToken:{requestStatus:0}});yield Mo(n.appConfig,r)}throw t}})}function x_(n){return n!==void 0&&n.registrationStatus===2}function yP(n){return n.requestStatus===2&&!IP(n)}function IP(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+zb}function EP(n){const e={requestStatus:1,requestTime:Date.now()};return xe(X({},n),{authToken:e})}function TP(n){return n.requestStatus===1&&n.requestTime+E_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n){return p(this,null,function*(){const e=n,{installationEntry:t,registrationPromise:r}=yield dl(e);return r?r.catch(console.error):fl(e).catch(console.error),t.fid})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(n,e=!1){return p(this,null,function*(){const t=n;return yield AP(t),(yield fl(t,e)).token})}function AP(n){return p(this,null,function*(){const{registrationPromise:e}=yield dl(n);e&&(yield e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(n){if(!n||!n.options)throw dc("App Configuration");if(!n.name)throw dc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw dc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function dc(n){return Xn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="installations",SP="installations-internal",bP=n=>{const e=n.getProvider("app").getImmediate(),t=RP(e),r=nr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PP=n=>{const e=n.getProvider("app").getImmediate(),t=nr(e,M_).getImmediate();return{getId:()=>wP(t),getToken:i=>vP(t,i)}};function CP(){gt(new ht(M_,bP,"PUBLIC")),gt(new ht(SP,PP,"PRIVATE"))}CP();Je(I_,ll);Je(I_,ll,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="/firebase-messaging-sw.js",NP="/firebase-cloud-messaging-push-scope",L_="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",DP="https://fcmregistrations.googleapis.com/v1",U_="google.c.a.c_id",VP="google.c.a.c_l",OP="google.c.a.ts",xP="google.c.a.e",bf=1e4;var Pf;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Pf||(Pf={}));/**
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
 */var ss;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(ss||(ss={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function MP(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="fcm_token_details_db",LP=5,Cf="fcm_token_object_Store";function UP(n){return p(this,null,function*(){if("databases"in indexedDB&&!(yield indexedDB.databases()).map(s=>s.name).includes(fc))return null;let e=null;return(yield Lo(fc,LP,{upgrade:(r,i,s,o)=>p(this,null,function*(){var h;if(i<2||!r.objectStoreNames.contains(Cf))return;const c=o.objectStore(Cf),u=yield c.index("fcmSenderId").get(n);if(yield c.clear(),!!u){if(i===2){const f=u;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(h=f.createTime)!=null?h:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:kt(f.vapidKey)}}}else if(i===3){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:kt(f.auth),p256dh:kt(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:kt(f.vapidKey)}}}else if(i===4){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:kt(f.auth),p256dh:kt(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:kt(f.vapidKey)}}}}})})).close(),yield Qa(fc),yield Qa("fcm_vapid_details_db"),yield Qa("undefined"),FP(e)?e:null})}function FP(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="firebase-messaging-database",qP=1,os="firebase-messaging-store";let pc=null;function F_(){return pc||(pc=Lo(BP,qP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(os)}}})),pc}function jP(n){return p(this,null,function*(){const e=B_(n),r=yield(yield F_()).transaction(os).objectStore(os).get(e);if(r)return r;{const i=yield UP(n.appConfig.senderId);if(i)return yield pl(n,i),i}})}function pl(n,e){return p(this,null,function*(){const t=B_(n),i=(yield F_()).transaction(os,"readwrite");return yield i.objectStore(os).put(e,t),yield i.done,e})}function B_({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},He=new er("messaging","Messaging",$P);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(n,e){return p(this,null,function*(){const t=yield gl(n),r=q_(e),i={method:"POST",headers:t,body:JSON.stringify(r)};let s;try{s=yield(yield fetch(ml(n.appConfig),i)).json()}catch(o){throw He.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw He.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw He.create("token-subscribe-no-token");return s.token})}function KP(n,e){return p(this,null,function*(){const t=yield gl(n),r=q_(e.subscriptionOptions),i={method:"PATCH",headers:t,body:JSON.stringify(r)};let s;try{s=yield(yield fetch(`${ml(n.appConfig)}/${e.token}`,i)).json()}catch(o){throw He.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw He.create("token-update-failed",{errorInfo:o})}if(!s.token)throw He.create("token-update-no-token");return s.token})}function zP(n,e){return p(this,null,function*(){const r={method:"DELETE",headers:yield gl(n)};try{const s=yield(yield fetch(`${ml(n.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw He.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw He.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}})}function ml({projectId:n}){return`${DP}/projects/${n}/registrations`}function gl(t){return p(this,arguments,function*({appConfig:n,installations:e}){const r=yield e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})})}function q_({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const i={web:{endpoint:t,auth:e,p256dh:n}};return r!==L_&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=7*24*60*60*1e3;function HP(n){return p(this,null,function*(){const e=yield YP(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:kt(e.getKey("auth")),p256dh:kt(e.getKey("p256dh"))},r=yield jP(n.firebaseDependencies);if(r){if(JP(r.subscriptionOptions,t))return Date.now()>=r.createTime+WP?QP(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{yield zP(n.firebaseDependencies,r.token)}catch(i){}return kf(n.firebaseDependencies,t)}else return kf(n.firebaseDependencies,t)})}function QP(n,e){return p(this,null,function*(){try{const t=yield KP(n.firebaseDependencies,e),r=xe(X({},e),{token:t,createTime:Date.now()});return yield pl(n.firebaseDependencies,r),t}catch(t){throw t}})}function kf(n,e){return p(this,null,function*(){const r={token:yield GP(n,e),createTime:Date.now(),subscriptionOptions:e};return yield pl(n,r),r.token})}function YP(n,e){return p(this,null,function*(){const t=yield n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:MP(e)})})}function JP(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,i=e.auth===n.auth,s=e.p256dh===n.p256dh;return t&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return XP(e,n),ZP(e,n),eC(e,n),e}function XP(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const i=e.notification.image;i&&(n.notification.image=i);const s=e.notification.icon;s&&(n.notification.icon=s)}function ZP(n,e){e.data&&(n.data=e.data)}function eC(n,e){var i,s,o,c,u;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;n.fcmOptions={};const t=(c=(s=e.fcmOptions)==null?void 0:s.link)!=null?c:(o=e.notification)==null?void 0:o.click_action;t&&(n.fcmOptions.link=t);const r=(u=e.fcmOptions)==null?void 0:u.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(n){return typeof n=="object"&&!!n&&U_ in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nC("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function nC(n,e){const t=[];for(let r=0;r<n.length;r++)t.push(n.charAt(r)),r<e.length&&t.push(e.charAt(r));return t.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(n){if(!n||!n.options)throw mc("App Configuration Object");if(!n.name)throw mc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw mc(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function mc(n){return He.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=rC(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(n){return p(this,null,function*(){try{n.swRegistration=yield navigator.serviceWorker.register(kP,{scope:NP}),n.swRegistration.update().catch(()=>{}),yield oC(n.swRegistration)}catch(e){throw He.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}})}function oC(n){return p(this,null,function*(){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${bf} ms`)),bf),i=n.installing||n.waiting;n.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(n,e){return p(this,null,function*(){if(!e&&!n.swRegistration&&(yield sC(n)),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw He.create("invalid-sw-registration");n.swRegistration=e}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(n,e){return p(this,null,function*(){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=L_)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n,e){return p(this,null,function*(){if(!navigator)throw He.create("only-available-in-window");if(Notification.permission==="default"&&(yield Notification.requestPermission()),Notification.permission!=="granted")throw He.create("permission-blocked");return yield cC(n,e==null?void 0:e.vapidKey),yield aC(n,e==null?void 0:e.serviceWorkerRegistration),HP(n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(n,e,t){return p(this,null,function*(){const r=lC(e);(yield n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[U_],message_name:t[VP],message_time:t[OP],message_device_time:Math.floor(Date.now()/1e3)})})}function lC(n){switch(n){case ss.NOTIFICATION_CLICKED:return"notification_open";case ss.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(n,e){return p(this,null,function*(){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===ss.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Nf(t)):n.onMessageHandler.next(Nf(t)));const r=t.data;tC(r)&&r[xP]==="1"&&(yield uC(n,t.messageType,r))})}const Df="@firebase/messaging",Vf="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=n=>{const e=new iC(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>hC(e,t)),e},fC=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>j_(e,r)}};function pC(){gt(new ht("messaging",dC,"PUBLIC")),gt(new ht("messaging-internal",fC,"PRIVATE")),Je(Df,Vf),Je(Df,Vf,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(){return p(this,null,function*(){try{yield zf()}catch(n){return!1}return typeof window!="undefined"&&Qc()&&qy()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(n=Fo()){return mC().then(e=>{if(!e)throw He.create("unsupported-browser")},e=>{throw He.create("indexed-db-unsupported")}),nr(W(n),"messaging").getImmediate()}function GC(n,e){return p(this,null,function*(){return n=W(n),j_(n,e)})}pC();var Er;(function(n){n.IndexedDbLocal="INDEXED_DB_LOCAL",n.InMemory="IN_MEMORY",n.BrowserLocal="BROWSER_LOCAL",n.BrowserSession="BROWSER_SESSION"})(Er||(Er={}));var tn;(function(n){n.APPLE="apple.com",n.FACEBOOK="facebook.com",n.GAME_CENTER="gc.apple.com",n.GITHUB="github.com",n.GOOGLE="google.com",n.MICROSOFT="microsoft.com",n.PLAY_GAMES="playgames.google.com",n.TWITTER="twitter.com",n.YAHOO="yahoo.com",n.PASSWORD="password",n.PHONE="phone"})(tn||(tn={}));const KC=Ry("FirebaseAuthentication",{web:()=>Sy(()=>Promise.resolve().then(()=>gC),void 0).then(n=>new n.FirebaseAuthenticationWeb)});class re extends by{constructor(){super(),this.lastConfirmationResult=new Map;const e=Z();e.onAuthStateChanged(t=>this.handleAuthStateChange(t)),e.onIdTokenChanged(t=>void this.handleIdTokenChange(t))}applyActionCode(e){return p(this,null,function*(){const t=Z();return oT(t,e.oobCode)})}createUserWithEmailAndPassword(e){return p(this,null,function*(){const t=Z(),r=yield aT(t,e.email,e.password);return this.createSignInResult(r,null)})}confirmPasswordReset(e){return p(this,null,function*(){const t=Z();return sT(t,e.oobCode,e.newPassword)})}confirmVerificationCode(e){return p(this,null,function*(){const{verificationCode:t,verificationId:r}=e,i=this.lastConfirmationResult.get(r);if(!i)throw new Error(re.ERROR_CONFIRMATION_RESULT_MISSING);const s=yield i.confirm(t);return this.createSignInResult(s,null)})}deleteUser(){return p(this,null,function*(){const t=Z().currentUser;if(!t)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return CT(t)})}fetchSignInMethodsForEmail(e){return p(this,null,function*(){const t=Z();return{signInMethods:yield fT(t,e.email)}})}getPendingAuthResult(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}getCurrentUser(){return p(this,null,function*(){const e=Z();return{user:this.createUserResult(e.currentUser)}})}getIdToken(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return{token:(yield t.currentUser.getIdToken(e==null?void 0:e.forceRefresh))||""}})}getIdTokenResult(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);const r=yield t.currentUser.getIdTokenResult(e==null?void 0:e.forceRefresh);return Object.assign(Object.assign({},r),{authTime:Date.parse(r.authTime),expirationTime:Date.parse(r.expirationTime),issuedAtTime:Date.parse(r.issuedAtTime)})})}getRedirectResult(){return p(this,null,function*(){const e=Z(),t=yield lw(e),r=t?ye.credentialFromResult(t):null;return this.createSignInResult(t,r)})}getTenantId(){return p(this,null,function*(){return{tenantId:Z().tenantId}})}isSignInWithEmailLink(e){return p(this,null,function*(){const t=Z();return{isSignInWithEmailLink:lT(t,e.emailLink)}})}linkWithApple(e){return p(this,null,function*(){const t=new ye(tn.APPLE);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithEmailAndPassword(e){return p(this,null,function*(){const t=Mt.credential(e.email,e.password),r=yield this.linkCurrentUserWithCredential(t);return this.createSignInResult(r,t)})}linkWithEmailLink(e){return p(this,null,function*(){const t=Mt.credentialWithLink(e.email,e.emailLink),r=yield this.linkCurrentUserWithCredential(t);return this.createSignInResult(r,t)})}linkWithFacebook(e){return p(this,null,function*(){const t=new it;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=it.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithGameCenter(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}linkWithGithub(e){return p(this,null,function*(){const t=new ot;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ot.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithGoogle(e){return p(this,null,function*(){const t=new st;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=st.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithMicrosoft(e){return p(this,null,function*(){const t=new ye(tn.MICROSOFT);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithOpenIdConnect(e){return p(this,null,function*(){const t=new ye(e.providerId);this.applySignInOptions(e,t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithPhoneNumber(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);if(!e.phoneNumber)throw new Error(re.ERROR_PHONE_NUMBER_MISSING);if(!e.recaptchaVerifier||!(e.recaptchaVerifier instanceof jh))throw new Error(re.ERROR_RECAPTCHA_VERIFIER_MISSING);try{const i=yield YT(r,e.phoneNumber,e.recaptchaVerifier),{verificationId:s}=i;this.lastConfirmationResult.set(s,i);const o={verificationId:s};this.notifyListeners(re.PHONE_CODE_SENT_EVENT,o)}catch(i){const s={message:this.getErrorMessage(i)};this.notifyListeners(re.PHONE_VERIFICATION_FAILED_EVENT,s)}})}linkWithPlayGames(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}linkWithTwitter(e){return p(this,null,function*(){const t=new at;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=at.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithYahoo(e){return p(this,null,function*(){const t=new ye(tn.YAHOO);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}reload(){return p(this,null,function*(){const t=Z().currentUser;if(!t)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return np(t)})}revokeAccessToken(e){return p(this,null,function*(){const t=Z();return PT(t,e.token)})}sendEmailVerification(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return pT(r,e==null?void 0:e.actionCodeSettings)})}sendPasswordResetEmail(e){return p(this,null,function*(){const t=Z();return iT(t,e.email,e.actionCodeSettings)})}sendSignInLinkToEmail(e){return p(this,null,function*(){const t=Z();return uT(t,e.email,e.actionCodeSettings)})}setLanguageCode(e){return p(this,null,function*(){const t=Z();t.languageCode=e.languageCode})}setPersistence(e){return p(this,null,function*(){const t=Z();switch(e.persistence){case Er.BrowserLocal:yield Us(t,Sp);break;case Er.BrowserSession:yield Us(t,ou);break;case Er.IndexedDbLocal:yield Us(t,Np);break;case Er.InMemory:yield Us(t,Ec);break}})}setTenantId(e){return p(this,null,function*(){const t=Z();t.tenantId=e.tenantId})}signInAnonymously(){return p(this,null,function*(){const e=Z(),t=yield ZE(e);return this.createSignInResult(t,null)})}signInWithApple(e){return p(this,null,function*(){const t=new ye(tn.APPLE);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithCustomToken(e){return p(this,null,function*(){const t=Z(),r=yield rT(t,e.token);return this.createSignInResult(r,null)})}signInWithEmailAndPassword(e){return p(this,null,function*(){const t=Z(),r=yield cT(t,e.email,e.password);return this.createSignInResult(r,null)})}signInWithEmailLink(e){return p(this,null,function*(){const t=Z(),r=yield hT(t,e.email,e.emailLink);return this.createSignInResult(r,null)})}signInWithFacebook(e){return p(this,null,function*(){const t=new it;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=it.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithGithub(e){return p(this,null,function*(){const t=new ot;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ot.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithGoogle(e){return p(this,null,function*(){const t=new st;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=st.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithMicrosoft(e){return p(this,null,function*(){const t=new ye(tn.MICROSOFT);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithOpenIdConnect(e){return p(this,null,function*(){const t=new ye(e.providerId);this.applySignInOptions(e,t);const r=yield this.signInWithPopupOrRedirect(t,e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithPhoneNumber(e){return p(this,null,function*(){if(!e.phoneNumber)throw new Error(re.ERROR_PHONE_NUMBER_MISSING);if(!e.recaptchaVerifier||!(e.recaptchaVerifier instanceof jh))throw new Error(re.ERROR_RECAPTCHA_VERIFIER_MISSING);const t=Z();try{const r=yield QT(t,e.phoneNumber,e.recaptchaVerifier),{verificationId:i}=r;this.lastConfirmationResult.set(i,r);const s={verificationId:i};this.notifyListeners(re.PHONE_CODE_SENT_EVENT,s)}catch(r){const i={message:this.getErrorMessage(r)};this.notifyListeners(re.PHONE_VERIFICATION_FAILED_EVENT,i)}})}signInWithPlayGames(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}signInWithGameCenter(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}signInWithTwitter(e){return p(this,null,function*(){const t=new at;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=at.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithYahoo(e){return p(this,null,function*(){const t=new ye(tn.YAHOO);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signOut(){return p(this,null,function*(){yield Z().signOut()})}unlink(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);const r=yield eT(t.currentUser,e.providerId);return{user:this.createUserResult(r)}})}updateEmail(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return yT(r,e.newEmail)})}updatePassword(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return IT(r,e.newPassword)})}updateProfile(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return _T(r,{displayName:e.displayName,photoURL:e.photoUrl})})}useAppLanguage(){return p(this,null,function*(){Z().useDeviceLanguage()})}useEmulator(e){return p(this,null,function*(){const t=Z(),r=e.port||9099,i=e.scheme||"http";e.host.includes("://")?Tc(t,`${e.host}:${r}`):Tc(t,`${i}://${e.host}:${r}`)})}verifyBeforeUpdateEmail(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return mT(r,e==null?void 0:e.newEmail,e==null?void 0:e.actionCodeSettings)})}handleAuthStateChange(e){const r={user:this.createUserResult(e)};this.notifyListeners(re.AUTH_STATE_CHANGE_EVENT,r,!0)}handleIdTokenChange(e){return p(this,null,function*(){if(!e)return;const r={token:yield e.getIdToken(!1)};this.notifyListeners(re.ID_TOKEN_CHANGE_EVENT,r,!0)})}applySignInOptions(e,t){if(e.customParameters){const r={};e.customParameters.map(i=>{r[i.key]=i.value}),t.setCustomParameters(r)}if(e.scopes)for(const r of e.scopes)t.addScope(r)}signInWithPopupOrRedirect(e,t){const r=Z();return t==="redirect"?ow(r,e):tw(r,e)}linkCurrentUserWithPopupOrRedirect(e,t){const r=Z();if(!r.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return t==="redirect"?cw(r.currentUser,e):nw(r.currentUser,e)}linkCurrentUserWithCredential(e){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return wp(t.currentUser,e)}requestAppTrackingTransparencyPermission(){throw this.unimplemented("Not implemented on web.")}checkAppTrackingTransparencyPermission(){throw this.unimplemented("Not implemented on web.")}createSignInResult(e,t){const r=this.createUserResult((e==null?void 0:e.user)||null),i=this.createCredentialResult(t),s=this.createAdditionalUserInfoResult(e);return{user:r,credential:i,additionalUserInfo:s}}createCredentialResult(e){if(!e)return null;const t={providerId:e.providerId};return e instanceof St&&(t.accessToken=e.accessToken,t.idToken=e.idToken,t.secret=e.secret),t}createUserResult(e){return e?{displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,isAnonymous:e.isAnonymous,metadata:this.createUserMetadataResult(e.metadata),phoneNumber:e.phoneNumber,photoUrl:e.photoURL,providerData:this.createUserProviderDataResult(e.providerData),providerId:e.providerId,tenantId:e.tenantId,uid:e.uid}:null}createUserMetadataResult(e){const t={};return e.creationTime&&(t.creationTime=Date.parse(e.creationTime)),e.lastSignInTime&&(t.lastSignInTime=Date.parse(e.lastSignInTime)),t}createUserProviderDataResult(e){return e.map(t=>({displayName:t.displayName,email:t.email,phoneNumber:t.phoneNumber,photoUrl:t.photoURL,providerId:t.providerId,uid:t.uid}))}createAdditionalUserInfoResult(e){if(!e)return null;const t=RT(e);if(!t)return null;const{isNewUser:r,profile:i,providerId:s,username:o}=t,c={isNewUser:r};return s!==null&&(c.providerId=s),i!==null&&(c.profile=i),o!=null&&(c.username=o),c}getErrorMessage(e){return e instanceof Object&&"message"in e&&typeof e.message=="string"?e.message:JSON.stringify(e)}}re.AUTH_STATE_CHANGE_EVENT="authStateChange";re.ID_TOKEN_CHANGE_EVENT="idTokenChange";re.PHONE_CODE_SENT_EVENT="phoneCodeSent";re.PHONE_VERIFICATION_FAILED_EVENT="phoneVerificationFailed";re.ERROR_NO_USER_SIGNED_IN="No user is signed in.";re.ERROR_PHONE_NUMBER_MISSING="phoneNumber must be provided.";re.ERROR_RECAPTCHA_VERIFIER_MISSING="recaptchaVerifier must be provided and must be an instance of RecaptchaVerifier.";re.ERROR_CONFIRMATION_RESULT_MISSING="No confirmation result with this verification id was found.";const gC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseAuthenticationWeb:re},Symbol.toStringTag,{value:"Module"}));export{CC as A,UC as B,GC as C,VC as D,NC as E,KC as F,st as G,kC as H,MC as I,qC as J,FC as K,BC as L,CT as M,SC as N,bC as O,jh as R,vC as a,jC as b,mC as c,$C as d,AC as e,Sp as f,Z as g,lw as h,MI as i,wS as j,DC as k,RC as l,OC as m,aT as n,IC as o,cT as p,iu as q,tw as r,Us as s,ow as t,xC as u,QT as v,EC as w,LC as x,wC as y,PC as z};
