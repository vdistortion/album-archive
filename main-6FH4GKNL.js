var Nm=Object.defineProperty,Rm=Object.defineProperties;var Om=Object.getOwnPropertyDescriptors;var Bc=Object.getOwnPropertySymbols;var Pm=Object.prototype.hasOwnProperty,Fm=Object.prototype.propertyIsEnumerable;var Hc=(e,t,n)=>t in e?Nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||={})Pm.call(t,n)&&Hc(e,n,t[n]);if(Bc)for(var n of Bc(t))Fm.call(t,n)&&Hc(e,n,t[n]);return e},q=(e,t)=>Rm(e,Om(t));var fi=null;var di=1,$c=Symbol("SIGNAL");function A(e){let t=fi;return fi=e,t}function Uc(){return fi}var hi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Lm(e){if(!(vi(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===di)){if(!e.producerMustRecompute(e)&&!mi(e)){e.dirty=!1,e.lastCleanEpoch=di;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=di}}function pi(e){return e&&(e.nextProducerIndex=0),A(e)}function zc(e,t){if(A(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(vi(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)yi(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function mi(e){wi(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(Lm(n),r!==n.version))return!0}return!1}function gi(e){if(wi(e),vi(e))for(let t=0;t<e.producerNode.length;t++)yi(e.producerNode[t],e.producerIndexOfThis[t]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function yi(e,t){if(jm(e),e.liveConsumerNode.length===1&&Vm(e))for(let r=0;r<e.producerNode.length;r++)yi(e.producerNode[r],e.producerIndexOfThis[r]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];wi(o),o.producerIndexOfThis[r]=t}}function vi(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function wi(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function jm(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function Vm(e){return e.producerNode!==void 0}function Bm(){throw new Error}var Hm=Bm;function Wc(e){Hm=e}function C(e){return typeof e=="function"}function Bt(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var _r=Bt(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function An(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Y=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(C(r))try{r()}catch(i){t=i instanceof _r?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Gc(i)}catch(s){t=t??[],s instanceof _r?t=[...t,...s.errors]:t.push(s)}}if(t)throw new _r(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Gc(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&An(n,t)}remove(t){let{_finalizers:n}=this;n&&An(n,t),t instanceof e&&t._removeParent(this)}};Y.EMPTY=(()=>{let e=new Y;return e.closed=!0,e})();var bi=Y.EMPTY;function Ar(e){return e instanceof Y||e&&"closed"in e&&C(e.remove)&&C(e.add)&&C(e.unsubscribe)}function Gc(e){C(e)?e():e.unsubscribe()}var je={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ht={setTimeout(e,t,...n){let{delegate:r}=Ht;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=Ht;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function kr(e){Ht.setTimeout(()=>{let{onUnhandledError:t}=je;if(t)t(e);else throw e})}function kn(){}var qc=Di("C",void 0,void 0);function Yc(e){return Di("E",void 0,e)}function Zc(e){return Di("N",e,void 0)}function Di(e,t,n){return{kind:e,value:t,error:n}}var bt=null;function $t(e){if(je.useDeprecatedSynchronousErrorHandling){let t=!bt;if(t&&(bt={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=bt;if(bt=null,n)throw r}}else e()}function Kc(e){je.useDeprecatedSynchronousErrorHandling&&bt&&(bt.errorThrown=!0,bt.error=e)}var Dt=class extends Y{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Ar(t)&&t.add(this)):this.destination=zm}static create(t,n,r){return new Ut(t,n,r)}next(t){this.isStopped?Ci(Zc(t),this):this._next(t)}error(t){this.isStopped?Ci(Yc(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Ci(qc,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},$m=Function.prototype.bind;function Ii(e,t){return $m.call(e,t)}var Ei=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Nr(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Nr(r)}else Nr(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Nr(n)}}},Ut=class extends Dt{constructor(t,n,r){super();let o;if(C(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&je.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Ii(t.next,i),error:t.error&&Ii(t.error,i),complete:t.complete&&Ii(t.complete,i)}):o=t}this.destination=new Ei(o)}};function Nr(e){je.useDeprecatedSynchronousErrorHandling?Kc(e):kr(e)}function Um(e){throw e}function Ci(e,t){let{onStoppedNotification:n}=je;n&&Ht.setTimeout(()=>n(e,t))}var zm={closed:!0,next:kn,error:Um,complete:kn};var zt=typeof Symbol=="function"&&Symbol.observable||"@@observable";function be(e){return e}function xi(...e){return Si(e)}function Si(e){return e.length===0?be:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var $=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=Gm(n)?n:new Ut(n,r,o);return $t(()=>{let{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Qc(r),new r((o,i)=>{let s=new Ut({next:a=>{try{n(a)}catch(u){i(u),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[zt](){return this}pipe(...n){return Si(n)(this)}toPromise(n){return n=Qc(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Qc(e){var t;return(t=e??je.Promise)!==null&&t!==void 0?t:Promise}function Wm(e){return e&&C(e.next)&&C(e.error)&&C(e.complete)}function Gm(e){return e&&e instanceof Dt||Wm(e)&&Ar(e)}function Mi(e){return C(e?.lift)}function R(e){return t=>{if(Mi(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function O(e,t,n,r,o){return new Ti(e,t,n,r,o)}var Ti=class extends Dt{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(u){t.error(u)}}:super._next,this._error=o?function(a){try{o(a)}catch(u){t.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function Wt(){return R((e,t)=>{let n=null;e._refCount++;let r=O(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var Gt=class extends ${constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Mi(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new Y;let n=this.getSubject();t.add(this.source.subscribe(O(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=Y.EMPTY)}return t}refCount(){return Wt()(this)}};var Jc=Bt(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var de=(()=>{class e extends ${constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new Rr(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Jc}next(n){$t(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){$t(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){$t(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?bi:(this.currentObservers=null,i.push(n),new Y(()=>{this.currentObservers=null,An(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new $;return n.source=this,n}}return e.create=(t,n)=>new Rr(t,n),e})(),Rr=class extends de{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:bi}};var ae=class extends de{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var De=new $(e=>e.complete());function Xc(e){return e&&C(e.schedule)}function ed(e){return e[e.length-1]}function td(e){return C(ed(e))?e.pop():void 0}function lt(e){return Xc(ed(e))?e.pop():void 0}function rd(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(c){try{l(r.next(c))}catch(d){s(d)}}function u(c){try{l(r.throw(c))}catch(d){s(d)}}function l(c){c.done?i(c.value):o(c.value).then(a,u)}l((r=r.apply(e,t||[])).next())})}function nd(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function It(e){return this instanceof It?(this.v=e,this):new It(e)}function od(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o={},a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(m){return Promise.resolve(m).then(f,d)}}function a(f,m){r[f]&&(o[f]=function(b){return new Promise(function(L,V){i.push([f,b,L,V])>1||u(f,b)})},m&&(o[f]=m(o[f])))}function u(f,m){try{l(r[f](m))}catch(b){h(i[0][3],b)}}function l(f){f.value instanceof It?Promise.resolve(f.value.v).then(c,d):h(i[0][2],f)}function c(f){u("next",f)}function d(f){u("throw",f)}function h(f,m){f(m),i.shift(),i.length&&u(i[0][0],i[0][1])}}function id(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof nd=="function"?nd(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,u){s=e[i](s),o(a,u,s.done,s.value)})}}function o(i,s,a,u){Promise.resolve(u).then(function(l){i({value:l,done:a})},s)}}var Or=e=>e&&typeof e.length=="number"&&typeof e!="function";function Pr(e){return C(e?.then)}function Fr(e){return C(e[zt])}function Lr(e){return Symbol.asyncIterator&&C(e?.[Symbol.asyncIterator])}function jr(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function qm(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Vr=qm();function Br(e){return C(e?.[Vr])}function Hr(e){return od(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield It(n.read());if(o)return yield It(void 0);yield yield It(r)}}finally{n.releaseLock()}})}function $r(e){return C(e?.getReader)}function ne(e){if(e instanceof $)return e;if(e!=null){if(Fr(e))return Ym(e);if(Or(e))return Zm(e);if(Pr(e))return Km(e);if(Lr(e))return sd(e);if(Br(e))return Qm(e);if($r(e))return Jm(e)}throw jr(e)}function Ym(e){return new $(t=>{let n=e[zt]();if(C(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Zm(e){return new $(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Km(e){return new $(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,kr)})}function Qm(e){return new $(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function sd(e){return new $(t=>{Xm(e,t).catch(n=>t.error(n))})}function Jm(e){return sd(Hr(e))}function Xm(e,t){var n,r,o,i;return rd(this,void 0,void 0,function*(){try{for(n=id(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function ye(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Ur(e,t=0){return R((n,r)=>{n.subscribe(O(r,o=>ye(r,e,()=>r.next(o),t),()=>ye(r,e,()=>r.complete(),t),o=>ye(r,e,()=>r.error(o),t)))})}function zr(e,t=0){return R((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function ad(e,t){return ne(e).pipe(zr(t),Ur(t))}function ud(e,t){return ne(e).pipe(zr(t),Ur(t))}function ld(e,t){return new $(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function cd(e,t){return new $(n=>{let r;return ye(n,t,()=>{r=e[Vr](),ye(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>C(r?.return)&&r.return()})}function Wr(e,t){if(!e)throw new Error("Iterable cannot be null");return new $(n=>{ye(n,t,()=>{let r=e[Symbol.asyncIterator]();ye(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function dd(e,t){return Wr(Hr(e),t)}function fd(e,t){if(e!=null){if(Fr(e))return ad(e,t);if(Or(e))return ld(e,t);if(Pr(e))return ud(e,t);if(Lr(e))return Wr(e,t);if(Br(e))return cd(e,t);if($r(e))return dd(e,t)}throw jr(e)}function ee(e,t){return t?fd(e,t):ne(e)}function E(...e){let t=lt(e);return ee(e,t)}function qt(e,t){let n=C(e)?e:()=>e,r=o=>o.error(n());return new $(t?o=>t.schedule(r,0,o):r)}function _i(e){return!!e&&(e instanceof $||C(e.lift)&&C(e.subscribe))}var tt=Bt(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function k(e,t){return R((n,r)=>{let o=0;n.subscribe(O(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:eg}=Array;function tg(e,t){return eg(t)?e(...t):e(t)}function hd(e){return k(t=>tg(e,t))}var{isArray:ng}=Array,{getPrototypeOf:rg,prototype:og,keys:ig}=Object;function pd(e){if(e.length===1){let t=e[0];if(ng(t))return{args:t,keys:null};if(sg(t)){let n=ig(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function sg(e){return e&&typeof e=="object"&&rg(e)===og}function md(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function Gr(...e){let t=lt(e),n=td(e),{args:r,keys:o}=pd(e);if(r.length===0)return ee([],t);let i=new $(ag(r,t,o?s=>md(o,s):be));return n?i.pipe(hd(n)):i}function ag(e,t,n=be){return r=>{gd(t,()=>{let{length:o}=e,i=new Array(o),s=o,a=o;for(let u=0;u<o;u++)gd(t,()=>{let l=ee(e[u],t),c=!1;l.subscribe(O(r,d=>{i[u]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function gd(e,t,n){e?ye(n,e,t):t()}function yd(e,t,n,r,o,i,s,a){let u=[],l=0,c=0,d=!1,h=()=>{d&&!u.length&&!l&&t.complete()},f=b=>l<r?m(b):u.push(b),m=b=>{i&&t.next(b),l++;let L=!1;ne(n(b,c++)).subscribe(O(t,V=>{o?.(V),i?f(V):t.next(V)},()=>{L=!0},void 0,()=>{if(L)try{for(l--;u.length&&l<r;){let V=u.shift();s?ye(t,s,()=>m(V)):m(V)}h()}catch(V){t.error(V)}}))};return e.subscribe(O(t,f,()=>{d=!0,h()})),()=>{a?.()}}function te(e,t,n=1/0){return C(t)?te((r,o)=>k((i,s)=>t(r,i,o,s))(ne(e(r,o))),n):(typeof t=="number"&&(n=t),R((r,o)=>yd(r,o,e,n)))}function Ai(e=1/0){return te(be,e)}function vd(){return Ai(1)}function Yt(...e){return vd()(ee(e,lt(e)))}function qr(e){return new $(t=>{ne(e()).subscribe(t)})}function Ve(e,t){return R((n,r)=>{let o=0;n.subscribe(O(r,i=>e.call(t,i,o++)&&r.next(i)))})}function ct(e){return R((t,n)=>{let r=null,o=!1,i;r=t.subscribe(O(n,void 0,void 0,s=>{i=ne(e(s,ct(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function wd(e,t,n,r,o){return(i,s)=>{let a=n,u=t,l=0;i.subscribe(O(s,c=>{let d=l++;u=a?e(u,c,d):(a=!0,c),r&&s.next(u)},o&&(()=>{a&&s.next(u),s.complete()})))}}function Zt(e,t){return C(t)?te(e,t,1):te(e,1)}function dt(e){return R((t,n)=>{let r=!1;t.subscribe(O(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function nt(e){return e<=0?()=>De:R((t,n)=>{let r=0;t.subscribe(O(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function ki(e){return k(()=>e)}function Yr(e=ug){return R((t,n)=>{let r=!1;t.subscribe(O(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function ug(){return new tt}function Nn(e){return R((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function qe(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Ve((o,i)=>e(o,i,r)):be,nt(1),n?dt(t):Yr(()=>new tt))}function Kt(e){return e<=0?()=>De:R((t,n)=>{let r=[];t.subscribe(O(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function Ni(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Ve((o,i)=>e(o,i,r)):be,Kt(1),n?dt(t):Yr(()=>new tt))}function Ri(e,t){return R(wd(e,t,arguments.length>=2,!0))}function Oi(...e){let t=lt(e);return R((n,r)=>{(t?Yt(e,n,t):Yt(e,n)).subscribe(r)})}function Be(e,t){return R((n,r)=>{let o=null,i=0,s=!1,a=()=>s&&!o&&r.complete();n.subscribe(O(r,u=>{o?.unsubscribe();let l=0,c=i++;ne(e(u,c)).subscribe(o=O(r,d=>r.next(t?t(u,d,c,l++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Pi(e){return R((t,n)=>{ne(e).subscribe(O(n,()=>n.complete(),kn)),!n.closed&&t.subscribe(n)})}function ue(e,t,n){let r=C(e)||t||n?{next:e,error:t,complete:n}:e;return r?R((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;o.subscribe(O(i,u=>{var l;(l=r.next)===null||l===void 0||l.call(r,u),i.next(u)},()=>{var u;a=!1,(u=r.complete)===null||u===void 0||u.call(r),i.complete()},u=>{var l;a=!1,(l=r.error)===null||l===void 0||l.call(r,u),i.error(u)},()=>{var u,l;a&&((u=r.unsubscribe)===null||u===void 0||u.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):be}var nf="https://g.co/ng/security#xss",D=class extends Error{constructor(t,n){super(_s(t,n)),this.code=t}};function _s(e,t){return`${`NG0${Math.abs(e)}`}${t?": "+t:""}`}function As(e){return{toString:e}.toString()}var On=globalThis;function U(e){for(let t in e)if(e[t]===U)return t;throw Error("Could not find renamed property on target object.")}function Ie(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(Ie).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let t=e.toString();if(t==null)return""+t;let n=t.indexOf(`
`);return n===-1?t:t.substring(0,n)}function bd(e,t){return e==null||e===""?t===null?"":t:t==null||t===""?e:e+" "+t}var lg=U({__forward_ref__:U});function rf(e){return e.__forward_ref__=rf,e.toString=function(){return Ie(this())},e}function Se(e){return of(e)?e():e}function of(e){return typeof e=="function"&&e.hasOwnProperty(lg)&&e.__forward_ref__===rf}function x(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Do(e){return Dd(e,af)||Dd(e,uf)}function sf(e){return Do(e)!==null}function Dd(e,t){return e.hasOwnProperty(t)?e[t]:null}function cg(e){let t=e&&(e[af]||e[uf]);return t||null}function Id(e){return e&&(e.hasOwnProperty(Cd)||e.hasOwnProperty(dg))?e[Cd]:null}var af=U({\u0275prov:U}),Cd=U({\u0275inj:U}),uf=U({ngInjectableDef:U}),dg=U({ngInjectorDef:U}),_=class{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=x({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function lf(e){return e&&!!e.\u0275providers}var fg=U({\u0275cmp:U}),hg=U({\u0275dir:U}),pg=U({\u0275pipe:U}),mg=U({\u0275mod:U}),to=U({\u0275fac:U}),Rn=U({__NG_ELEMENT_ID__:U}),Ed=U({__NG_ENV_ID__:U});function nn(e){return typeof e=="string"?e:e==null?"":String(e)}function gg(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():nn(e)}function yg(e,t){let n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new D(-200,e)}function ks(e,t){throw new D(-201,!1)}var M=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(M||{}),Gi;function cf(){return Gi}function xe(e){let t=Gi;return Gi=e,t}function df(e,t,n){let r=Do(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&M.Optional)return null;if(t!==void 0)return t;ks(e,"Injector")}var vg={},Pn=vg,wg="__NG_DI_FLAG__",no="ngTempTokenPath",bg="ngTokenPath",Dg=/\n/gm,Ig="\u0275",xd="__source",en;function Cg(){return en}function ft(e){let t=en;return en=e,t}function Eg(e,t=M.Default){if(en===void 0)throw new D(-203,!1);return en===null?df(e,void 0,t):en.get(e,t&M.Optional?null:void 0,t)}function N(e,t=M.Default){return(cf()||Eg)(Se(e),t)}function g(e,t=M.Default){return N(e,Io(t))}function Io(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function qi(e){let t=[];for(let n=0;n<e.length;n++){let r=Se(e[n]);if(Array.isArray(r)){if(r.length===0)throw new D(900,!1);let o,i=M.Default;for(let s=0;s<r.length;s++){let a=r[s],u=xg(a);typeof u=="number"?u===-1?o=a.token:i|=u:o=a}t.push(N(o,i))}else t.push(N(r))}return t}function xg(e){return e[wg]}function Sg(e,t,n,r){let o=e[no];throw t[xd]&&o.unshift(t[xd]),e.message=Mg(`
`+e.message,o,n,r),e[bg]=o,e[no]=null,e}function Mg(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==Ig?e.slice(2):e;let o=Ie(t);if(Array.isArray(t))o=t.map(Ie).join(" -> ");else if(typeof t=="object"){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+(typeof a=="string"?JSON.stringify(a):Ie(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Dg,`
  `)}`}function rn(e,t){let n=e.hasOwnProperty(to);return n?e[to]:null}function Ns(e,t){e.forEach(n=>Array.isArray(n)?Ns(n,t):t(n))}function ff(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function ro(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}var Fn={},on=[],sn=new _(""),hf=new _("",-1),pf=new _(""),oo=class{get(t,n=Pn){if(n===Pn){let r=new Error(`NullInjectorError: No provider for ${Ie(t)}!`);throw r.name="NullInjectorError",r}return n}},mf=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(mf||{}),Ke=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(Ke||{}),an=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(an||{});function Tg(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}function Yi(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{let i=o,s=n[++r];_g(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function gf(e){return e===3||e===4||e===6}function _g(e){return e.charCodeAt(0)===64}function Rs(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Sd(e,n,o,null,t[++r]):Sd(e,n,o,null,null))}}return e}function Sd(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let a=e[i++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=i-1;break}}}for(;i<e.length;){let a=e[i];if(typeof a=="number")break;if(a===n){if(r===null){o!==null&&(e[i+1]=o);return}else if(r===e[i+1]){e[i+2]=o;return}}i++,r!==null&&i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),r!==null&&e.splice(i++,0,r),o!==null&&e.splice(i++,0,o)}var yf="ng-template";function Ag(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&Tg(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Os(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function Os(e){return e.type===4&&e.value!==yf}function kg(e,t,n){let r=e.type===4&&!n?yf:e.value;return t===r}function Ng(e,t,n){let r=4,o=e.attrs,i=o!==null?Pg(o):0,s=!1;for(let a=0;a<t.length;a++){let u=t[a];if(typeof u=="number"){if(!s&&!He(r)&&!He(u))return!1;if(s&&He(u))continue;s=!1,r=u|r&1;continue}if(!s)if(r&4){if(r=2|r&1,u!==""&&!kg(e,u,n)||u===""&&t.length===1){if(He(r))return!1;s=!0}}else if(r&8){if(o===null||!Ag(e,o,u,n)){if(He(r))return!1;s=!0}}else{let l=t[++a],c=Rg(u,o,Os(e),n);if(c===-1){if(He(r))return!1;s=!0;continue}if(l!==""){let d;if(c>i?d="":d=o[c+1].toLowerCase(),r&2&&l!==d){if(He(r))return!1;s=!0}}}}return He(r)||s}function He(e){return(e&1)===0}function Rg(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=t[++o];for(;typeof a=="string";)a=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return Fg(t,e)}function Og(e,t,n=!1){for(let r=0;r<t.length;r++)if(Ng(e,t[r],n))return!0;return!1}function Pg(e){for(let t=0;t<e.length;t++){let n=e[t];if(gf(n))return t}return e.length}function Fg(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function Md(e,t){return e?":not("+t.trim()+")":t}function Lg(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!He(s)&&(t+=Md(i,o),o=""),r=s,i=i||!He(r);n++}return o!==""&&(t+=Md(i,o)),t}function jg(e){return e.map(Lg).join(",")}function Vg(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!He(o))break;o=i}r++}return{attrs:t,classes:n}}function K(e){return As(()=>{let t=If(e),n=q(y({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===mf.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Ke.Emulated,styles:e.styles||on,_:null,schemas:e.schemas||null,tView:null,id:""});Cf(n);let r=e.dependencies;return n.directiveDefs=_d(r,!1),n.pipeDefs=_d(r,!0),n.id=$g(n),n})}function Bg(e){return xt(e)||vf(e)}function Hg(e){return e!==null}function Td(e,t){if(e==null)return Fn;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,a=an.None;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i):(i=o,s=o),t?(n[i]=a!==an.None?[r,a]:r,t[i]=s):n[i]=r}return n}function Co(e){return As(()=>{let t=If(e);return Cf(t),t})}function xt(e){return e[fg]||null}function vf(e){return e[hg]||null}function wf(e){return e[pg]||null}function bf(e){let t=xt(e)||vf(e)||wf(e);return t!==null?t.standalone:!1}function Df(e,t){let n=e[mg]||null;if(!n&&t===!0)throw new Error(`Type ${Ie(e)} does not have '\u0275mod' property.`);return n}function If(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputTransforms:null,inputConfig:e.inputs||Fn,exportAs:e.exportAs||null,standalone:e.standalone===!0,signals:e.signals===!0,selectors:e.selectors||on,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Td(e.inputs,t),outputs:Td(e.outputs),debugInfo:null}}function Cf(e){e.features?.forEach(t=>t(e))}function _d(e,t){if(!e)return null;let n=t?wf:Bg;return()=>(typeof e=="function"?e():e).map(r=>n(r)).filter(Hg)}function $g(e){let t=0,n=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,e.consts,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery].join("|");for(let o of n)t=Math.imul(31,t)+o.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function Eo(e){return{\u0275providers:e}}function Ug(...e){return{\u0275providers:Ef(!0,e),\u0275fromNgModule:!0}}function Ef(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return Ns(t,s=>{let a=s;Zi(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&xf(o,i),n}function xf(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];Ps(o,i=>{t(i,r)})}}function Zi(e,t,n,r){if(e=Se(e),!e)return!1;let o=null,i=Id(e),s=!i&&xt(e);if(!i&&!s){let u=e.ngModule;if(i=Id(u),i)o=u;else return!1}else{if(s&&!s.standalone)return!1;o=e}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let u=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of u)Zi(l,t,n,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let l;try{Ns(i.imports,c=>{Zi(c,t,n,r)&&(l||=[],l.push(c))})}finally{}l!==void 0&&xf(l,t)}if(!a){let l=rn(o)||(()=>new o);t({provide:o,useFactory:l,deps:on},o),t({provide:pf,useValue:o,multi:!0},o),t({provide:sn,useValue:()=>N(o),multi:!0},o)}let u=i.providers;if(u!=null&&!a){let l=e;Ps(u,c=>{t(c,l)})}}else return!1;return o!==e&&e.providers!==void 0}function Ps(e,t){for(let n of e)lf(n)&&(n=n.\u0275providers),Array.isArray(n)?Ps(n,t):t(n)}var zg=U({provide:String,useValue:U});function Sf(e){return e!==null&&typeof e=="object"&&zg in e}function Wg(e){return!!(e&&e.useExisting)}function Gg(e){return!!(e&&e.useFactory)}function Ki(e){return typeof e=="function"}var xo=new _(""),Kr={},qg={},Fi;function Fs(){return Fi===void 0&&(Fi=new oo),Fi}var Te=class{},Ln=class extends Te{get destroyed(){return this._destroyed}constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Ji(t,s=>this.processProvider(s)),this.records.set(hf,Qt(void 0,this)),o.has("environment")&&this.records.set(Te,Qt(void 0,this));let i=this.records.get(xo);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(pf,on,M.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let t=A(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),A(t)}}onDestroy(t){return this.assertNotDestroyed(),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){this.assertNotDestroyed();let n=ft(this),r=xe(void 0),o;try{return t()}finally{ft(n),xe(r)}}get(t,n=Pn,r=M.Default){if(this.assertNotDestroyed(),t.hasOwnProperty(Ed))return t[Ed](this);r=Io(r);let o,i=ft(this),s=xe(void 0);try{if(!(r&M.SkipSelf)){let u=this.records.get(t);if(u===void 0){let l=Xg(t)&&Do(t);l&&this.injectableDefInScope(l)?u=Qt(Qi(t),Kr):u=null,this.records.set(t,u)}if(u!=null)return this.hydrate(t,u)}let a=r&M.Self?Fs():this.parent;return n=r&M.Optional&&n===Pn?null:n,a.get(t,n)}catch(a){if(a.name==="NullInjectorError"){if((a[no]=a[no]||[]).unshift(Ie(t)),i)throw a;return Sg(a,t,"R3InjectorError",this.source)}else throw a}finally{xe(s),ft(i)}}resolveInjectorInitializers(){let t=A(null),n=ft(this),r=xe(void 0),o;try{let i=this.get(sn,on,M.Self);for(let s of i)s()}finally{ft(n),xe(r),A(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(Ie(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new D(205,!1)}processProvider(t){t=Se(t);let n=Ki(t)?t:Se(t&&t.provide),r=Zg(t);if(!Ki(t)&&t.multi===!0){let o=this.records.get(n);o||(o=Qt(void 0,Kr,!0),o.factory=()=>qi(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){let r=A(null);try{return n.value===Kr&&(n.value=qg,n.value=n.factory()),typeof n.value=="object"&&n.value&&Jg(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{A(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=Se(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function Qi(e){let t=Do(e),n=t!==null?t.factory:rn(e);if(n!==null)return n;if(e instanceof _)throw new D(204,!1);if(e instanceof Function)return Yg(e);throw new D(204,!1)}function Yg(e){if(e.length>0)throw new D(204,!1);let n=cg(e);return n!==null?()=>n.factory(e):()=>new e}function Zg(e){if(Sf(e))return Qt(void 0,e.useValue);{let t=Kg(e);return Qt(t,Kr)}}function Kg(e,t,n){let r;if(Ki(e)){let o=Se(e);return rn(o)||Qi(o)}else if(Sf(e))r=()=>Se(e.useValue);else if(Gg(e))r=()=>e.useFactory(...qi(e.deps||[]));else if(Wg(e))r=()=>N(Se(e.useExisting));else{let o=Se(e&&(e.useClass||e.provide));if(Qg(e))r=()=>new o(...qi(e.deps));else return rn(o)||Qi(o)}return r}function Qt(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Qg(e){return!!e.deps}function Jg(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Xg(e){return typeof e=="function"||typeof e=="object"&&e instanceof _}function Ji(e,t){for(let n of e)Array.isArray(n)?Ji(n,t):n&&lf(n)?Ji(n.\u0275providers,t):t(n)}function ot(e,t){e instanceof Ln&&e.assertNotDestroyed();let n,r=ft(e),o=xe(void 0);try{return t()}finally{ft(r),xe(o)}}function ey(){return cf()!==void 0||Cg()!=null}function ty(e){return typeof e=="function"}var it=0,T=1,I=2,ge=3,$e=4,We=5,jn=6,io=7,pe=8,un=9,Qe=10,fe=11,Vn=12,Ad=13,mn=14,Ue=15,ln=16,Jt=17,cn=18,So=19,Mf=20,ht=21,Li=22,Me=23,ze=25,Tf=1;var St=7,so=8,ao=9,me=10,uo=function(e){return e[e.None=0]="None",e[e.HasTransplantedViews=2]="HasTransplantedViews",e}(uo||{});function pt(e){return Array.isArray(e)&&typeof e[Tf]=="object"}function st(e){return Array.isArray(e)&&e[Tf]===!0}function _f(e){return(e.flags&4)!==0}function Mo(e){return e.componentOffset>-1}function Ls(e){return(e.flags&1)===1}function Zn(e){return!!e.template}function Xi(e){return(e[I]&512)!==0}var es=class{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function Af(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}function Kn(){return kf}function kf(e){return e.type.prototype.ngOnChanges&&(e.setInput=ry),ny}Kn.ngInherit=!0;function ny(){let e=Rf(this),t=e?.current;if(t){let n=e.previous;if(n===Fn)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function ry(e,t,n,r,o){let i=this.declaredInputs[r],s=Rf(e)||oy(e,{previous:Fn,current:null}),a=s.current||(s.current={}),u=s.previous,l=u[i];a[i]=new es(l&&l.currentValue,n,u===Fn),Af(e,t,o,n)}var Nf="__ngSimpleChanges__";function Rf(e){return e[Nf]||null}function oy(e,t){return e[Nf]=t}var kd=null;var Ye=function(e,t,n){kd?.(e,t,n)},iy="svg",sy="math";function Je(e){for(;Array.isArray(e);)e=e[it];return e}function ay(e,t){return Je(t[e])}function _e(e,t){return Je(t[e.index])}function js(e,t){return e.data[t]}function gt(e,t){let n=t[e];return pt(n)?n:n[it]}function Vs(e){return(e[I]&128)===128}function uy(e){return st(e[ge])}function dn(e,t){return t==null?null:e[t]}function Of(e){e[Jt]=0}function Pf(e){e[I]&1024||(e[I]|=1024,Vs(e)&&To(e))}function ly(e,t){for(;e>0;)t=t[mn],e--;return t}function Bn(e){return!!(e[I]&9216||e[Me]?.dirty)}function ts(e){e[Qe].changeDetectionScheduler?.notify(7),e[I]&64&&(e[I]|=1024),Bn(e)&&To(e)}function To(e){e[Qe].changeDetectionScheduler?.notify(0);let t=Mt(e);for(;t!==null&&!(t[I]&8192||(t[I]|=8192,!Vs(t)));)t=Mt(t)}function Ff(e,t){if((e[I]&256)===256)throw new D(911,!1);e[ht]===null&&(e[ht]=[]),e[ht].push(t)}function cy(e,t){if(e[ht]===null)return;let n=e[ht].indexOf(t);n!==-1&&e[ht].splice(n,1)}function Mt(e){let t=e[ge];return st(t)?t[ge]:t}var P={lFrame:Wf(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Lf=!1;function dy(){return P.lFrame.elementDepthCount}function fy(){P.lFrame.elementDepthCount++}function hy(){P.lFrame.elementDepthCount--}function jf(){return P.bindingsEnabled}function py(){return P.skipHydrationRootTNode!==null}function my(e){return P.skipHydrationRootTNode===e}function gy(){P.skipHydrationRootTNode=null}function z(){return P.lFrame.lView}function at(){return P.lFrame.tView}function Ae(){let e=Vf();for(;e!==null&&e.type===64;)e=e.parent;return e}function Vf(){return P.lFrame.currentTNode}function yy(){let e=P.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function Qn(e,t){let n=P.lFrame;n.currentTNode=e,n.isParent=t}function Bf(){return P.lFrame.isParent}function vy(){P.lFrame.isParent=!1}function Hf(){return Lf}function Nd(e){Lf=e}function wy(){return P.lFrame.bindingIndex}function by(e){return P.lFrame.bindingIndex=e}function Jn(){return P.lFrame.bindingIndex++}function Dy(e){let t=P.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function Iy(){return P.lFrame.inI18n}function Cy(e,t){let n=P.lFrame;n.bindingIndex=n.bindingRootIndex=e,ns(t)}function Ey(){return P.lFrame.currentDirectiveIndex}function ns(e){P.lFrame.currentDirectiveIndex=e}function $f(e){P.lFrame.currentQueryIndex=e}function xy(e){let t=e[T];return t.type===2?t.declTNode:t.type===1?e[We]:null}function Uf(e,t,n){if(n&M.SkipSelf){let o=t,i=e;for(;o=o.parent,o===null&&!(n&M.Host);)if(o=xy(i),o===null||(i=i[mn],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=P.lFrame=zf();return r.currentTNode=t,r.lView=e,!0}function Bs(e){let t=zf(),n=e[T];P.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function zf(){let e=P.lFrame,t=e===null?null:e.child;return t===null?Wf(e):t}function Wf(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function Gf(){let e=P.lFrame;return P.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var qf=Gf;function Hs(){let e=Gf();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Sy(e){return(P.lFrame.contextLView=ly(e,P.lFrame.contextLView))[pe]}function Xn(){return P.lFrame.selectedIndex}function Tt(e){P.lFrame.selectedIndex=e}function Yf(){let e=P.lFrame;return js(e.tView,e.selectedIndex)}function My(){return P.lFrame.currentNamespace}var Zf=!0;function $s(){return Zf}function Us(e){Zf=e}function Ty(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=kf(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function zs(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:l,ngOnDestroy:c}=i;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),u&&(e.viewHooks??=[]).push(-n,u),l&&((e.viewHooks??=[]).push(n,l),(e.viewCheckHooks??=[]).push(n,l)),c!=null&&(e.destroyHooks??=[]).push(n,c)}}function Qr(e,t,n){Kf(e,t,3,n)}function Jr(e,t,n,r){(e[I]&3)===n&&Kf(e,t,n,r)}function ji(e,t){let n=e[I];(n&3)===t&&(n&=16383,n+=1,e[I]=n)}function Kf(e,t,n,r){let o=r!==void 0?e[Jt]&65535:0,i=r??-1,s=t.length-1,a=0;for(let u=o;u<s;u++)if(typeof t[u+1]=="number"){if(a=t[u],r!=null&&a>=r)break}else t[u]<0&&(e[Jt]+=65536),(a<i||i==-1)&&(_y(e,n,t,u),e[Jt]=(e[Jt]&4294901760)+u+2),u++}function Rd(e,t){Ye(4,e,t);let n=A(null);try{t.call(e)}finally{A(n),Ye(5,e,t)}}function _y(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],a=e[s];o?e[I]>>14<e[Jt]>>16&&(e[I]&3)===t&&(e[I]+=16384,Rd(a,i)):Rd(a,i)}var tn=-1,Hn=class{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}};function Ay(e){return e instanceof Hn}function ky(e){return(e.flags&8)!==0}function Ny(e){return(e.flags&16)!==0}var Vi={},rs=class{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=Io(r);let o=this.injector.get(t,Vi,r);return o!==Vi||n===Vi?o:this.parentInjector.get(t,n,r)}};function Qf(e){return e!==tn}function lo(e){return e&32767}function Ry(e){return e>>16}function co(e,t){let n=Ry(e),r=t;for(;n>0;)r=r[mn],n--;return r}var os=!0;function Od(e){let t=os;return os=e,t}var Oy=256,Jf=Oy-1,Xf=5,Py=0,Ze={};function Fy(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(Rn)&&(r=n[Rn]),r==null&&(r=n[Rn]=Py++);let o=r&Jf,i=1<<o;t.data[e+(o>>Xf)]|=i}function eh(e,t){let n=th(e,t);if(n!==-1)return n;let r=t[T];r.firstCreatePass&&(e.injectorIndex=t.length,Bi(r.data,e),Bi(t,null),Bi(r.blueprint,null));let o=Ws(e,t),i=e.injectorIndex;if(Qf(o)){let s=lo(o),a=co(o,t),u=a[T].data;for(let l=0;l<8;l++)t[i+l]=a[s+l]|u[s+l]}return t[i+8]=o,i}function Bi(e,t){e.push(0,0,0,0,0,0,0,0,t)}function th(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function Ws(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=sh(o),r===null)return tn;if(n++,o=o[mn],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return tn}function Ly(e,t,n){Fy(e,t,n)}function jy(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let r=n.length,o=0;for(;o<r;){let i=n[o];if(gf(i))break;if(i===0)o=o+2;else if(typeof i=="number")for(o++;o<r&&typeof n[o]=="string";)o++;else{if(i===t)return n[o+1];o=o+2}}}return null}function nh(e,t,n){if(n&M.Optional||e!==void 0)return e;ks(t,"NodeInjector")}function rh(e,t,n,r){if(n&M.Optional&&r===void 0&&(r=null),!(n&(M.Self|M.Host))){let o=e[un],i=xe(void 0);try{return o?o.get(t,r,n&M.Optional):df(t,r,n&M.Optional)}finally{xe(i)}}return nh(r,t,n)}function oh(e,t,n,r=M.Default,o){if(e!==null){if(t[I]&2048&&!(r&M.Self)){let s=Uy(e,t,n,r,Ze);if(s!==Ze)return s}let i=ih(e,t,n,r,Ze);if(i!==Ze)return i}return rh(t,n,r,o)}function ih(e,t,n,r,o){let i=Hy(n);if(typeof i=="function"){if(!Uf(t,e,r))return r&M.Host?nh(o,n,r):rh(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&M.Optional))ks(n);else return s}finally{qf()}}else if(typeof i=="number"){let s=null,a=th(e,t),u=tn,l=r&M.Host?t[Ue][We]:null;for((a===-1||r&M.SkipSelf)&&(u=a===-1?Ws(e,t):t[a+8],u===tn||!Fd(r,!1)?a=-1:(s=t[T],a=lo(u),t=co(u,t)));a!==-1;){let c=t[T];if(Pd(i,a,c.data)){let d=Vy(a,t,n,s,r,l);if(d!==Ze)return d}u=t[a+8],u!==tn&&Fd(r,t[T].data[a+8]===l)&&Pd(i,a,t)?(s=c,a=lo(u),t=co(u,t)):a=-1}}return o}function Vy(e,t,n,r,o,i){let s=t[T],a=s.data[e+8],u=r==null?Mo(a)&&os:r!=s&&(a.type&3)!==0,l=o&M.Host&&i===a,c=By(a,s,n,u,l);return c!==null?$n(t,s,c,a):Ze}function By(e,t,n,r,o){let i=e.providerIndexes,s=t.data,a=i&1048575,u=e.directiveStart,l=e.directiveEnd,c=i>>20,d=r?a:a+c,h=o?a+c:l;for(let f=d;f<h;f++){let m=s[f];if(f<u&&n===m||f>=u&&m.type===n)return f}if(o){let f=s[u];if(f&&Zn(f)&&f.type===n)return u}return null}function $n(e,t,n,r){let o=e[n],i=t.data;if(Ay(o)){let s=o;s.resolving&&yg(gg(i[n]));let a=Od(s.canSeeViewProviders);s.resolving=!0;let u,l=s.injectImpl?xe(s.injectImpl):null,c=Uf(e,r,M.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&Ty(n,i[n],t)}finally{l!==null&&xe(l),Od(a),s.resolving=!1,qf()}}return o}function Hy(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(Rn)?e[Rn]:void 0;return typeof t=="number"?t>=0?t&Jf:$y:t}function Pd(e,t,n){let r=1<<e;return!!(n[t+(e>>Xf)]&r)}function Fd(e,t){return!(e&M.Self)&&!(e&M.Host&&t)}var Et=class{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return oh(this._tNode,this._lView,t,Io(r),n)}};function $y(){return new Et(Ae(),z())}function Gs(e){return As(()=>{let t=e.prototype.constructor,n=t[to]||is(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[to]||is(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function is(e){return of(e)?()=>{let t=is(Se(e));return t&&t()}:rn(e)}function Uy(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[I]&2048&&!(s[I]&512);){let a=ih(i,s,n,r|M.Self,Ze);if(a!==Ze)return a;let u=i.parent;if(!u){let l=s[Mf];if(l){let c=l.get(n,Ze,r);if(c!==Ze)return c}u=sh(s),s=s[mn]}i=u}return o}function sh(e){let t=e[T],n=t.type;return n===2?t.declTNode:n===1?e[We]:null}function qs(e){return jy(Ae(),e)}function Ld(e,t=null,n=null,r){let o=ah(e,t,n,r);return o.resolveInjectorInitializers(),o}function ah(e,t=null,n=null,r,o=new Set){let i=[n||on,Ug(e)];return r=r||(typeof e=="object"?void 0:Ie(e)),new Ln(i,t||Fs(),r||null,o)}var Ct=class Ct{static create(t,n){if(Array.isArray(t))return Ld({name:""},n,t,"");{let r=t.name??"";return Ld({name:r},t.parent,t.providers,r)}}};Ct.THROW_IF_NOT_FOUND=Pn,Ct.NULL=new oo,Ct.\u0275prov=x({token:Ct,providedIn:"any",factory:()=>N(hf)}),Ct.__NG_ELEMENT_ID__=-1;var _t=Ct;var zy=new _("");zy.__NG_ELEMENT_ID__=e=>{let t=Ae();if(t===null)throw new D(204,!1);if(t.type&2)return t.value;if(e&M.Optional)return null;throw new D(204,!1)};var Wy="ngOriginalError";function Hi(e){return e[Wy]}var rt=class{constructor(){this._console=console}handleError(t){let n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&Hi(t);for(;n&&Hi(n);)n=Hi(n);return n||null}},uh=new _("",{providedIn:"root",factory:()=>g(rt).handleError.bind(void 0)}),lh=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=Gy,t.__NG_ENV_ID__=r=>r;let e=t;return e})(),ss=class extends lh{constructor(t){super(),this._lView=t}onDestroy(t){return Ff(this._lView,t),()=>cy(this._lView,t)}};function Gy(){return new ss(z())}function qy(){return Ys(Ae(),z())}function Ys(e,t){return new er(_e(e,t))}var er=(()=>{let t=class t{constructor(r){this.nativeElement=r}};t.__NG_ELEMENT_ID__=qy;let e=t;return e})();var gn=(()=>{let t=class t{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new ae(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let r=this.taskId++;return this.pendingTasks.add(r),r}remove(r){this.pendingTasks.delete(r),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};t.\u0275prov=x({token:t,providedIn:"root",factory:()=>new t});let e=t;return e})();var as=class extends de{constructor(t=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=t,ey()&&(this.destroyRef=g(lh,{optional:!0})??void 0,this.pendingTasks=g(gn,{optional:!0})??void 0)}emit(t){let n=A(null);try{super.next(t)}finally{A(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let u=t;o=u.next?.bind(u),i=u.error?.bind(u),s=u.complete?.bind(u)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:i,complete:s});return t instanceof Y&&t.add(a),a}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{t(n),r!==void 0&&this.pendingTasks?.remove(r)})}}},he=as;function ch(e){return(e.flags&128)===128}var dh=new Map,Yy=0;function Zy(){return Yy++}function Ky(e){dh.set(e[So],e)}function Qy(e){dh.delete(e[So])}var jd="__ngContext__";function At(e,t){pt(t)?(e[jd]=t[So],Ky(t)):e[jd]=t}function fh(e){return ph(e[Vn])}function hh(e){return ph(e[$e])}function ph(e){for(;e!==null&&!st(e);)e=e[$e];return e}var us;function mh(e){us=e}function Jy(){if(us!==void 0)return us;if(typeof document<"u")return document;throw new D(210,!1)}var Zs=new _("",{providedIn:"root",factory:()=>Xy}),Xy="ng",Ks=new _(""),yn=new _("",{providedIn:"platform",factory:()=>"unknown"});var Qs=new _("",{providedIn:"root",factory:()=>Jy().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var ev="h",tv="b";var nv=()=>null;function Js(e,t,n=!1){return nv(e,t,n)}var gh=!1,rv=new _("",{providedIn:"root",factory:()=>gh});var Zr;function ov(){if(Zr===void 0&&(Zr=null,On.trustedTypes))try{Zr=On.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Zr}function Vd(e){return ov()?.createScriptURL(e)||e}var fo=class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${nf})`}};function _o(e){return e instanceof fo?e.changingThisBreaksApplicationSecurity:e}function Xs(e,t){let n=iv(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${nf})`)}return n===t}function iv(e){return e instanceof fo&&e.getTypeName()||null}var sv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function yh(e){return e=String(e),e.match(sv)?e:"unsafe:"+e}var Ao=function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e}(Ao||{});function ve(e){let t=wh();return t?t.sanitize(Ao.URL,e)||"":Xs(e,"URL")?_o(e):yh(nn(e))}function av(e){let t=wh();if(t)return Vd(t.sanitize(Ao.RESOURCE_URL,e)||"");if(Xs(e,"ResourceURL"))return Vd(_o(e));throw new D(904,!1)}function uv(e,t){return t==="src"&&(e==="embed"||e==="frame"||e==="iframe"||e==="media"||e==="script")||t==="href"&&(e==="base"||e==="link")?av:ve}function vh(e,t,n){return uv(t,n)(e)}function wh(){let e=z();return e&&e[Qe].sanitizer}function bh(e){return e instanceof Function?e():e}var Nt=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(Nt||{}),lv;function ea(e,t){return lv(e,t)}function Xt(e,t,n,r,o){if(r!=null){let i,s=!1;st(r)?i=r:pt(r)&&(s=!0,r=r[it]);let a=Je(r);e===0&&n!==null?o==null?Eh(t,n,a):ho(t,n,a,o||null,!0):e===1&&n!==null?ho(t,n,a,o||null,!0):e===2?xv(t,a,s):e===3&&t.destroyNode(a),i!=null&&Mv(t,e,i,n,o)}}function cv(e,t){return e.createText(t)}function dv(e,t,n){e.setValue(t,n)}function Dh(e,t,n){return e.createElement(t,n)}function fv(e,t){Ih(e,t),t[it]=null,t[We]=null}function hv(e,t,n,r,o,i){r[it]=o,r[We]=t,No(e,r,n,1,o,i)}function Ih(e,t){t[Qe].changeDetectionScheduler?.notify(8),No(e,t,t[fe],2,null,null)}function pv(e){let t=e[Vn];if(!t)return $i(e[T],e);for(;t;){let n=null;if(pt(t))n=t[Vn];else{let r=t[me];r&&(n=r)}if(!n){for(;t&&!t[$e]&&t!==e;)pt(t)&&$i(t[T],t),t=t[ge];t===null&&(t=e),pt(t)&&$i(t[T],t),n=t&&t[$e]}t=n}}function mv(e,t,n,r){let o=me+r,i=n.length;r>0&&(n[o-1][$e]=t),r<i-me?(t[$e]=n[o],ff(n,me+r,t)):(n.push(t),t[$e]=null),t[ge]=n;let s=t[ln];s!==null&&n!==s&&Ch(s,t);let a=t[cn];a!==null&&a.insertView(e),ts(t),t[I]|=128}function Ch(e,t){let n=e[ao],r=t[ge];if(pt(r))e[I]|=uo.HasTransplantedViews;else{let o=r[ge][Ue];t[Ue]!==o&&(e[I]|=uo.HasTransplantedViews)}n===null?e[ao]=[t]:n.push(t)}function ta(e,t){let n=e[ao],r=n.indexOf(t);n.splice(r,1)}function Un(e,t){if(e.length<=me)return;let n=me+t,r=e[n];if(r){let o=r[ln];o!==null&&o!==e&&ta(o,r),t>0&&(e[n-1][$e]=r[$e]);let i=ro(e,me+t);fv(r[T],r);let s=i[cn];s!==null&&s.detachView(i[T]),r[ge]=null,r[$e]=null,r[I]&=-129}return r}function ko(e,t){if(!(t[I]&256)){let n=t[fe];n.destroyNode&&No(e,t,n,3,null,null),pv(t)}}function $i(e,t){if(t[I]&256)return;let n=A(null);try{t[I]&=-129,t[I]|=256,t[Me]&&gi(t[Me]),yv(e,t),gv(e,t),t[T].type===1&&t[fe].destroy();let r=t[ln];if(r!==null&&st(t[ge])){r!==t[ge]&&ta(r,t);let o=t[cn];o!==null&&o.detachView(e)}Qy(t)}finally{A(n)}}function gv(e,t){let n=e.cleanup,r=t[io];if(n!==null)for(let i=0;i<n.length-1;i+=2)if(typeof n[i]=="string"){let s=n[i+3];s>=0?r[s]():r[-s].unsubscribe(),i+=2}else{let s=r[n[i+1]];n[i].call(s)}r!==null&&(t[io]=null);let o=t[ht];if(o!==null){t[ht]=null;for(let i=0;i<o.length;i++){let s=o[i];s()}}}function yv(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof Hn)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],u=i[s+1];Ye(4,a,u);try{u.call(a)}finally{Ye(5,a,u)}}else{Ye(4,o,i);try{i.call(o)}finally{Ye(5,o,i)}}}}}function vv(e,t,n){return wv(e,t.parent,n)}function wv(e,t,n){let r=t;for(;r!==null&&r.type&40;)t=r,r=t.parent;if(r===null)return n[it];{let{componentOffset:o}=r;if(o>-1){let{encapsulation:i}=e.data[r.directiveStart+o];if(i===Ke.None||i===Ke.Emulated)return null}return _e(r,n)}}function ho(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Eh(e,t,n){e.appendChild(t,n)}function Bd(e,t,n,r,o){r!==null?ho(e,t,n,r,o):Eh(e,t,n)}function bv(e,t,n,r){e.removeChild(t,n,r)}function na(e,t){return e.parentNode(t)}function Dv(e,t){return e.nextSibling(t)}function Iv(e,t,n){return Ev(e,t,n)}function Cv(e,t,n){return e.type&40?_e(e,n):null}var Ev=Cv,Hd;function ra(e,t,n,r){let o=vv(e,r,t),i=t[fe],s=r.parent||t[We],a=Iv(s,r,t);if(o!=null)if(Array.isArray(n))for(let u=0;u<n.length;u++)Bd(i,o,n[u],a,!1);else Bd(i,o,n,a,!1);Hd!==void 0&&Hd(i,r,t,n,o)}function Xr(e,t){if(t!==null){let n=t.type;if(n&3)return _e(t,e);if(n&4)return ls(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return Xr(e,r);{let o=e[t.index];return st(o)?ls(-1,o):Je(o)}}else{if(n&32)return ea(t,e)()||Je(e[t.index]);{let r=xh(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=Mt(e[Ue]);return Xr(o,r)}else return Xr(e,t.next)}}}return null}function xh(e,t){if(t!==null){let r=e[Ue][We],o=t.projection;return r.projection[o]}return null}function ls(e,t){let n=me+e+1;if(n<t.length){let r=t[n],o=r[T].firstChild;if(o!==null)return Xr(r,o)}return t[St]}function xv(e,t,n){let r=na(e,t);r&&bv(e,r,t,n)}function oa(e,t,n,r,o,i,s){for(;n!=null;){let a=r[n.index],u=n.type;if(s&&t===0&&(a&&At(Je(a),r),n.flags|=2),(n.flags&32)!==32)if(u&8)oa(e,t,n.child,r,o,i,!1),Xt(t,e,o,a,i);else if(u&32){let l=ea(n,r),c;for(;c=l();)Xt(t,e,o,c,i);Xt(t,e,o,a,i)}else u&16?Sv(e,t,r,n,o,i):Xt(t,e,o,a,i);n=s?n.projectionNext:n.next}}function No(e,t,n,r,o,i){oa(n,r,e.firstChild,t,o,i,!1)}function Sv(e,t,n,r,o,i){let s=n[Ue],u=s[We].projection[r.projection];if(Array.isArray(u))for(let l=0;l<u.length;l++){let c=u[l];Xt(t,e,o,c,i)}else{let l=u,c=s[ge];ch(r)&&(l.flags|=128),oa(e,t,l,c,o,i,!0)}}function Mv(e,t,n,r,o){let i=n[St],s=Je(n);i!==s&&Xt(t,e,r,i,o);for(let a=me;a<n.length;a++){let u=n[a];No(u[T],u,e,t,r,i)}}function Tv(e,t,n){e.setAttribute(t,"style",n)}function Sh(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Mh(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&Yi(e,t,r),o!==null&&Sh(e,t,o),i!==null&&Tv(e,t,i)}var Rt={};function p(e=1){Th(at(),z(),Xn()+e,!1)}function Th(e,t,n,r){if(!r)if((t[I]&3)===3){let i=e.preOrderCheckHooks;i!==null&&Qr(t,i,n)}else{let i=e.preOrderHooks;i!==null&&Jr(t,i,0,n)}Tt(n)}function re(e,t=M.Default){let n=z();if(n===null)return N(e,t);let r=Ae();return oh(r,n,Se(e),t)}function _h(e,t,n,r,o,i){let s=A(null);try{let a=null;o&an.SignalBased&&(a=t[r][$c]),a!==null&&a.transformFn!==void 0&&(i=a.transformFn(i)),o&an.HasDecoratorInputTransform&&(i=e.inputTransforms[r].call(t,i)),e.setInput!==null?e.setInput(t,a,i,n,r):Af(t,a,r,i)}finally{A(s)}}function _v(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Tt(~o);else{let i=o,s=n[++r],a=n[++r];Cy(s,i);let u=t[i];a(2,u)}}}finally{Tt(-1)}}function Ro(e,t,n,r,o,i,s,a,u,l,c){let d=t.blueprint.slice();return d[it]=o,d[I]=r|4|128|8|64,(l!==null||e&&e[I]&2048)&&(d[I]|=2048),Of(d),d[ge]=d[mn]=e,d[pe]=n,d[Qe]=s||e&&e[Qe],d[fe]=a||e&&e[fe],d[un]=u||e&&e[un]||null,d[We]=i,d[So]=Zy(),d[jn]=c,d[Mf]=l,d[Ue]=t.type==2?e[Ue]:d,d}function Oo(e,t,n,r,o){let i=e.data[t];if(i===null)i=Av(e,t,n,r,o),Iy()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=yy();i.injectorIndex=s===null?-1:s.injectorIndex}return Qn(i,!0),i}function Av(e,t,n,r,o){let i=Vf(),s=Bf(),a=s?i:i&&i.parent,u=e.data[t]=Pv(e,a,n,t,r,o);return e.firstChild===null&&(e.firstChild=u),i!==null&&(s?i.child==null&&u.parent!==null&&(i.child=u):i.next===null&&(i.next=u,u.prev=i)),u}function Ah(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function kh(e,t,n,r,o){let i=Xn(),s=r&2;try{Tt(-1),s&&t.length>ze&&Th(e,t,ze,!1),Ye(s?2:0,o),n(r,o)}finally{Tt(i),Ye(s?3:1,o)}}function Nh(e,t,n){if(_f(t)){let r=A(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let a=e.data[s];if(a.contentQueries){let u=n[s];a.contentQueries(1,u,s)}}}finally{A(r)}}}function Rh(e,t,n){jf()&&($v(e,t,n,_e(n,t)),(n.flags&64)===64&&jh(e,t,n))}function Oh(e,t,n=_e){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?n(t,e):e[s];e[o++]=a}}}function Ph(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=ia(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function ia(e,t,n,r,o,i,s,a,u,l,c){let d=ze+r,h=d+o,f=kv(d,h),m=typeof l=="function"?l():l;return f[T]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:u,consts:m,incompleteFirstPass:!1,ssrId:c}}function kv(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:Rt);return n}function Nv(e,t,n,r){let i=r.get(rv,gh)||n===Ke.ShadowDom,s=e.selectRootElement(t,i);return Rv(s),s}function Rv(e){Ov(e)}var Ov=()=>null;function Pv(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,a=0;return py()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function $d(e,t,n,r,o){for(let i in t){if(!t.hasOwnProperty(i))continue;let s=t[i];if(s===void 0)continue;r??={};let a,u=an.None;Array.isArray(s)?(a=s[0],u=s[1]):a=s;let l=i;if(o!==null){if(!o.hasOwnProperty(i))continue;l=o[i]}e===0?Ud(r,n,l,a,u):Ud(r,n,l,a)}return r}function Ud(e,t,n,r,o){let i;e.hasOwnProperty(n)?(i=e[n]).push(t,r):i=e[n]=[t,r],o!==void 0&&i.push(o)}function Fv(e,t,n){let r=t.directiveStart,o=t.directiveEnd,i=e.data,s=t.attrs,a=[],u=null,l=null;for(let c=r;c<o;c++){let d=i[c],h=n?n.get(d):null,f=h?h.inputs:null,m=h?h.outputs:null;u=$d(0,d.inputs,c,u,f),l=$d(1,d.outputs,c,l,m);let b=u!==null&&s!==null&&!Os(t)?Xv(u,c,s):null;a.push(b)}u!==null&&(u.hasOwnProperty("class")&&(t.flags|=8),u.hasOwnProperty("style")&&(t.flags|=16)),t.initialInputs=a,t.inputs=u,t.outputs=l}function Lv(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function jv(e,t,n,r,o,i,s,a){let u=_e(t,n),l=t.inputs,c;!a&&l!=null&&(c=l[r])?(sa(e,n,c,r,o),Mo(t)&&Vv(n,t.index)):t.type&3?(r=Lv(r),o=s!=null?s(o,t.value||"",r):o,i.setProperty(u,r,o)):t.type&12}function Vv(e,t){let n=gt(t,e);n[I]&16||(n[I]|=64)}function Fh(e,t,n,r){if(jf()){let o=r===null?null:{"":-1},i=zv(e,n),s,a;i===null?s=a=null:[s,a]=i,s!==null&&Lh(e,t,n,s,o,a),o&&Wv(n,r,o)}n.mergedAttrs=Rs(n.mergedAttrs,n.attrs)}function Lh(e,t,n,r,o,i){for(let l=0;l<r.length;l++)Ly(eh(n,t),e,r[l].type);qv(n,e.data.length,r.length);for(let l=0;l<r.length;l++){let c=r[l];c.providersResolver&&c.providersResolver(c)}let s=!1,a=!1,u=Ah(e,t,r.length,null);for(let l=0;l<r.length;l++){let c=r[l];n.mergedAttrs=Rs(n.mergedAttrs,c.hostAttrs),Yv(e,n,t,u,c),Gv(u,c,o),c.contentQueries!==null&&(n.flags|=4),(c.hostBindings!==null||c.hostAttrs!==null||c.hostVars!==0)&&(n.flags|=64);let d=c.type.prototype;!s&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),s=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),a=!0),u++}Fv(e,n,i)}function Bv(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;Hv(s)!=a&&s.push(a),s.push(n,r,i)}}function Hv(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function $v(e,t,n,r){let o=n.directiveStart,i=n.directiveEnd;Mo(n)&&Zv(t,n,e.data[o+n.componentOffset]),e.firstCreatePass||eh(n,t),At(r,t);let s=n.initialInputs;for(let a=o;a<i;a++){let u=e.data[a],l=$n(t,e,a,n);if(At(l,t),s!==null&&Jv(t,a-o,l,u,n,s),Zn(u)){let c=gt(n.index,t);c[pe]=$n(t,e,a,n)}}}function jh(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=Ey();try{Tt(i);for(let a=r;a<o;a++){let u=e.data[a],l=t[a];ns(a),(u.hostBindings!==null||u.hostVars!==0||u.hostAttrs!==null)&&Uv(u,l)}}finally{Tt(-1),ns(s)}}function Uv(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function zv(e,t){let n=e.directiveRegistry,r=null,o=null;if(n)for(let i=0;i<n.length;i++){let s=n[i];if(Og(t,s.selectors,!1))if(r||(r=[]),Zn(s))if(s.findHostDirectiveDefs!==null){let a=[];o=o||new Map,s.findHostDirectiveDefs(s,a,o),r.unshift(...a,s);let u=a.length;cs(e,t,u)}else r.unshift(s),cs(e,t,0);else o=o||new Map,s.findHostDirectiveDefs?.(s,r,o),r.push(s)}return r===null?null:[r,o]}function cs(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function Wv(e,t,n){if(t){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new D(-301,!1);r.push(t[o],i)}}}function Gv(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Zn(t)&&(n[""]=e)}}function qv(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Yv(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=rn(o.type,!0)),s=new Hn(i,Zn(o),re);e.blueprint[r]=s,n[r]=s,Bv(e,t,r,Ah(e,n,o.hostVars,Rt),o)}function Zv(e,t,n){let r=_e(t,e),o=Ph(n),i=e[Qe].rendererFactory,s=16;n.signals?s=4096:n.onPush&&(s=64);let a=Po(e,Ro(e,o,null,s,r,t,null,i.createRenderer(r,n),null,null,null));e[t.index]=a}function Kv(e,t,n,r,o,i){let s=_e(e,t);Qv(t[fe],s,i,e.value,n,r,o)}function Qv(e,t,n,r,o,i,s){if(i==null)e.removeAttribute(t,o,n);else{let a=s==null?nn(i):s(i,r||"",o);e.setAttribute(t,o,a,n)}}function Jv(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let a=0;a<s.length;){let u=s[a++],l=s[a++],c=s[a++],d=s[a++];_h(r,n,u,l,c,d)}}function Xv(e,t,n){let r=null,o=0;for(;o<n.length;){let i=n[o];if(i===0){o+=4;continue}else if(i===5){o+=2;continue}if(typeof i=="number")break;if(e.hasOwnProperty(i)){r===null&&(r=[]);let s=e[i];for(let a=0;a<s.length;a+=3)if(s[a]===t){r.push(i,s[a+1],s[a+2],n[o+1]);break}}o+=2}return r}function Vh(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function Bh(e,t){let n=e.contentQueries;if(n!==null){let r=A(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let a=e.data[s];$f(i),a.contentQueries(2,t[s],s)}}}finally{A(r)}}}function Po(e,t){return e[Vn]?e[Ad][$e]=t:e[Vn]=t,e[Ad]=t,t}function ds(e,t,n){$f(0);let r=A(null);try{t(e,n)}finally{A(r)}}function ew(e){return e[io]??=[]}function tw(e){return e.cleanup??=[]}function Hh(e,t){let n=e[un],r=n?n.get(rt,null):null;r&&r.handleError(t)}function sa(e,t,n,r,o){for(let i=0;i<n.length;){let s=n[i++],a=n[i++],u=n[i++],l=t[s],c=e.data[s];_h(c,l,r,a,u,o)}}function $h(e,t,n){let r=ay(t,e);dv(e[fe],r,n)}function nw(e,t){let n=gt(t,e),r=n[T];rw(r,n);let o=n[it];o!==null&&n[jn]===null&&(n[jn]=Js(o,n[un])),aa(r,n,n[pe])}function rw(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function aa(e,t,n){Bs(t);try{let r=e.viewQuery;r!==null&&ds(1,r,n);let o=e.template;o!==null&&kh(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[cn]?.finishViewCreation(e),e.staticContentQueries&&Bh(e,t),e.staticViewQueries&&ds(2,e.viewQuery,n);let i=e.components;i!==null&&ow(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[I]&=-5,Hs()}}function ow(e,t){for(let n=0;n<t.length;n++)nw(e,t[n])}function ua(e,t,n,r){let o=A(null);try{let i=t.tView,a=e[I]&4096?4096:16,u=Ro(e,i,n,a,null,t,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),l=e[t.index];u[ln]=l;let c=e[cn];return c!==null&&(u[cn]=c.createEmbeddedView(i)),aa(i,u,n),u}finally{A(o)}}function Uh(e,t){let n=me+t;if(n<e.length)return e[n]}function zn(e,t){return!t||t.firstChild===null||ch(e)}function Fo(e,t,n,r=!0){let o=t[T];if(mv(o,t,e,n),r){let s=ls(n,e),a=t[fe],u=na(a,e[St]);u!==null&&hv(o,e[We],a,t,u,s)}let i=t[jn];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function zh(e,t){let n=Un(e,t);return n!==void 0&&ko(n[T],n),n}function po(e,t,n,r,o=!1){for(;n!==null;){let i=t[n.index];i!==null&&r.push(Je(i)),st(i)&&iw(i,r);let s=n.type;if(s&8)po(e,t,n.child,r);else if(s&32){let a=ea(n,t),u;for(;u=a();)r.push(u)}else if(s&16){let a=xh(t,n);if(Array.isArray(a))r.push(...a);else{let u=Mt(t[Ue]);po(u[T],u,a,r,!0)}}n=o?n.projectionNext:n.next}return r}function iw(e,t){for(let n=me;n<e.length;n++){let r=e[n],o=r[T].firstChild;o!==null&&po(r[T],r,o,t)}e[St]!==e[it]&&t.push(e[St])}var Wh=[];function sw(e){return e[Me]??aw(e)}function aw(e){let t=Wh.pop()??Object.create(lw);return t.lView=e,t}function uw(e){e.lView[Me]!==e&&(e.lView=null,Wh.push(e))}var lw=q(y({},hi),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{To(e.lView)},consumerOnSignalRead(){this.lView[Me]=this}});function cw(e){let t=e[Me]??Object.create(dw);return t.lView=e,t}var dw=q(y({},hi),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{let t=Mt(e.lView);for(;t&&!Gh(t[T]);)t=Mt(t);t&&Pf(t)},consumerOnSignalRead(){this.lView[Me]=this}});function Gh(e){return e.type!==2}var fw=100;function qh(e,t=!0,n=0){let r=e[Qe],o=r.rendererFactory,i=!1;i||o.begin?.();try{hw(e,n)}catch(s){throw t&&Hh(e,s),s}finally{i||(o.end?.(),r.inlineEffectRunner?.flush())}}function hw(e,t){let n=Hf();try{Nd(!0),fs(e,t);let r=0;for(;Bn(e);){if(r===fw)throw new D(103,!1);r++,fs(e,1)}}finally{Nd(n)}}function pw(e,t,n,r){let o=t[I];if((o&256)===256)return;let i=!1,s=!1;!i&&t[Qe].inlineEffectRunner?.flush(),Bs(t);let a=!0,u=null,l=null;i||(Gh(e)?(l=sw(t),u=pi(l)):Uc()===null?(a=!1,l=cw(t),u=pi(l)):t[Me]&&(gi(t[Me]),t[Me]=null));try{Of(t),by(e.bindingStartIndex),n!==null&&kh(e,t,n,2,r);let c=(o&3)===3;if(!i)if(c){let f=e.preOrderCheckHooks;f!==null&&Qr(t,f,null)}else{let f=e.preOrderHooks;f!==null&&Jr(t,f,0,null),ji(t,0)}if(s||mw(t),Yh(t,0),e.contentQueries!==null&&Bh(e,t),!i)if(c){let f=e.contentCheckHooks;f!==null&&Qr(t,f)}else{let f=e.contentHooks;f!==null&&Jr(t,f,1),ji(t,1)}_v(e,t);let d=e.components;d!==null&&Kh(t,d,0);let h=e.viewQuery;if(h!==null&&ds(2,h,r),!i)if(c){let f=e.viewCheckHooks;f!==null&&Qr(t,f)}else{let f=e.viewHooks;f!==null&&Jr(t,f,2),ji(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Li]){for(let f of t[Li])f();t[Li]=null}i||(t[I]&=-73)}catch(c){throw i||To(t),c}finally{l!==null&&(zc(l,u),a&&uw(l)),Hs()}}function Yh(e,t){for(let n=fh(e);n!==null;n=hh(n))for(let r=me;r<n.length;r++){let o=n[r];Zh(o,t)}}function mw(e){for(let t=fh(e);t!==null;t=hh(t)){if(!(t[I]&uo.HasTransplantedViews))continue;let n=t[ao];for(let r=0;r<n.length;r++){let o=n[r];Pf(o)}}}function gw(e,t,n){let r=gt(t,e);Zh(r,n)}function Zh(e,t){Vs(e)&&fs(e,t)}function fs(e,t){let r=e[T],o=e[I],i=e[Me],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&mi(i)),s||=!1,i&&(i.dirty=!1),e[I]&=-9217,s)pw(r,e,r.template,e[pe]);else if(o&8192){Yh(e,1);let a=r.components;a!==null&&Kh(e,a,1)}}function Kh(e,t,n){for(let r=0;r<t.length;r++)gw(e,t[r],n)}function la(e,t){let n=Hf()?64:1088;for(e[Qe].changeDetectionScheduler?.notify(t);e;){e[I]|=n;let r=Mt(e);if(Xi(e)&&!r)return e;e=r}return null}var fn=class{get rootNodes(){let t=this._lView,n=t[T];return po(n,t,n.firstChild,[])}constructor(t,n,r=!0){this._lView=t,this._cdRefInjectingView=n,this.notifyErrorHandler=r,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[pe]}set context(t){this._lView[pe]=t}get destroyed(){return(this._lView[I]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[ge];if(st(t)){let n=t[so],r=n?n.indexOf(this):-1;r>-1&&(Un(t,r),ro(n,r))}this._attachedToViewContainer=!1}ko(this._lView[T],this._lView)}onDestroy(t){Ff(this._lView,t)}markForCheck(){la(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[I]&=-129}reattach(){ts(this._lView),this._lView[I]|=128}detectChanges(){this._lView[I]|=1024,qh(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Xi(this._lView),n=this._lView[ln];n!==null&&!t&&ta(n,this._lView),Ih(this._lView[T],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=t;let n=Xi(this._lView),r=this._lView[ln];r!==null&&!n&&Ch(r,this._lView),ts(this._lView)}};var NA=new RegExp(`^(\\d+)*(${tv}|${ev})*(.*)`);var yw=()=>null;function Wn(e,t){return yw(e,t)}var Gn=class{},ca=new _("",{providedIn:"root",factory:()=>!1});var Qh=new _(""),hs=class{},mo=class{};function vw(e){let t=Error(`No component factory found for ${Ie(e)}.`);return t[ww]=e,t}var ww="ngComponent";var ps=class{resolveComponentFactory(t){throw vw(t)}},ba=class ba{};ba.NULL=new ps;var hn=ba,pn=class{},Lo=(()=>{let t=class t{constructor(){this.destroyNode=null}};t.__NG_ELEMENT_ID__=()=>bw();let e=t;return e})();function bw(){let e=z(),t=Ae(),n=gt(t.index,e);return(pt(n)?n:e)[fe]}var Dw=(()=>{let t=class t{};t.\u0275prov=x({token:t,providedIn:"root",factory:()=>null});let e=t;return e})();var zd=new Set;function tr(e){zd.has(e)||(zd.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}function Jh(e){let t=!0;return setTimeout(()=>{t&&(t=!1,e())}),typeof On.requestAnimationFrame=="function"&&On.requestAnimationFrame(()=>{t&&(t=!1,e())}),()=>{t=!1}}function Wd(e){let t=!0;return queueMicrotask(()=>{t&&e()}),()=>{t=!1}}function Gd(...e){}var Z=class e{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new he(!1),this.onMicrotaskEmpty=new he(!1),this.onStable=new he(!1),this.onError=new he(!1),typeof Zone>"u")throw new D(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,Ew(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new D(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,Iw,Gd,Gd);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},Iw={};function da(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Cw(e){e.isCheckStableRunning||e.callbackScheduled||(e.callbackScheduled=!0,Zone.root.run(()=>{Jh(()=>{e.callbackScheduled=!1,ms(e),e.isCheckStableRunning=!0,da(e),e.isCheckStableRunning=!1})}),ms(e))}function Ew(e){let t=()=>{Cw(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{if(xw(a))return n.invokeTask(o,i,s,a);try{return qd(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&i.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),Yd(e)}},onInvoke:(n,r,o,i,s,a,u)=>{try{return qd(e),n.invoke(o,i,s,a,u)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!Sw(a)&&t(),Yd(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&(i.change=="microTask"?(e._hasPendingMicrotasks=i.microTask,ms(e),da(e)):i.change=="macroTask"&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}function ms(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function qd(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Yd(e){e._nesting--,da(e)}var gs=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new he,this.onMicrotaskEmpty=new he,this.onStable=new he,this.onError=new he}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function xw(e){return Xh(e,"__ignore_ng_zone__")}function Sw(e){return Xh(e,"__scheduler_tick__")}function Xh(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var ep=(()=>{let t=class t{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let r=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let o of r)o()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};t.\u0275prov=x({token:t,providedIn:"root",factory:()=>new t});let e=t;return e})();function ys(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")i=a;else if(i==1)o=bd(o,a);else if(i==2){let u=a,l=t[++s];r=bd(r,u+": "+l+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}var go=class extends hn{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=xt(t);return new qn(n,this.ngModule)}};function Zd(e){let t=[];for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];r!==void 0&&t.push({propName:Array.isArray(r)?r[0]:r,templateName:n})}return t}function Mw(e){let t=e.toLowerCase();return t==="svg"?iy:t==="math"?sy:null}var qn=class extends mo{get inputs(){let t=this.componentDef,n=t.inputTransforms,r=Zd(t.inputs);if(n!==null)for(let o of r)n.hasOwnProperty(o.propName)&&(o.transform=n[o.propName]);return r}get outputs(){return Zd(this.componentDef.outputs)}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=jg(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}create(t,n,r,o){let i=A(null);try{o=o||this.ngModule;let s=o instanceof Te?o:o?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let a=s?new rs(t,s):t,u=a.get(pn,null);if(u===null)throw new D(407,!1);let l=a.get(Dw,null),c=a.get(ep,null),d=a.get(Gn,null),h={rendererFactory:u,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:c,changeDetectionScheduler:d},f=u.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",b=r?Nv(f,r,this.componentDef.encapsulation,a):Dh(f,m,Mw(m)),L=512;this.componentDef.signals?L|=4096:this.componentDef.onPush||(L|=16);let V=null;b!==null&&(V=Js(b,a,!0));let se=ia(0,null,null,1,0,null,null,null,null,null,null),X=Ro(null,se,null,L,null,null,h,f,a,null,V);Bs(X);let et,jt;try{let Le=this.componentDef,Vt,ci=null;Le.findHostDirectiveDefs?(Vt=[],ci=new Map,Le.findHostDirectiveDefs(Le,Vt,ci),Vt.push(Le)):Vt=[Le];let Am=Tw(X,b),km=_w(Am,b,Le,Vt,X,h,f);jt=js(se,ze),b&&Nw(f,Le,b,r),n!==void 0&&Rw(jt,this.ngContentSelectors,n),et=kw(km,Le,Vt,ci,X,[Ow]),aa(se,X,null)}finally{Hs()}return new vs(this.componentType,et,Ys(jt,X),X,jt)}finally{A(i)}}},vs=class extends hs{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.previousInputValues=null,this.instance=n,this.hostView=this.changeDetectorRef=new fn(o,void 0,!1),this.componentType=t}setInput(t,n){let r=this._tNode.inputs,o;if(r!==null&&(o=r[t])){if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let i=this._rootLView;sa(i[T],i,o,t,n),this.previousInputValues.set(t,n);let s=gt(this._tNode.index,i);la(s,1)}}get injector(){return new Et(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function Tw(e,t){let n=e[T],r=ze;return e[r]=t,Oo(n,r,2,"#host",null)}function _w(e,t,n,r,o,i,s){let a=o[T];Aw(r,e,t,s);let u=null;t!==null&&(u=Js(t,o[un]));let l=i.rendererFactory.createRenderer(t,n),c=16;n.signals?c=4096:n.onPush&&(c=64);let d=Ro(o,Ph(n),null,c,o[e.index],e,i,l,null,null,u);return a.firstCreatePass&&cs(a,e,r.length-1),Po(o,d),o[e.index]=d}function Aw(e,t,n,r){for(let o of e)t.mergedAttrs=Rs(t.mergedAttrs,o.hostAttrs);t.mergedAttrs!==null&&(ys(t,t.mergedAttrs,!0),n!==null&&Mh(r,n,t))}function kw(e,t,n,r,o,i){let s=Ae(),a=o[T],u=_e(s,o);Lh(a,o,s,n,null,r);for(let c=0;c<n.length;c++){let d=s.directiveStart+c,h=$n(o,a,d,s);At(h,o)}jh(a,o,s),u&&At(u,o);let l=$n(o,a,s.directiveStart+s.componentOffset,s);if(e[pe]=o[pe]=l,i!==null)for(let c of i)c(l,t);return Nh(a,s,o),l}function Nw(e,t,n,r){if(r)Yi(e,n,["ng-version","18.0.4"]);else{let{attrs:o,classes:i}=Vg(t.selectors[0]);o&&Yi(e,n,o),i&&i.length>0&&Sh(e,n,i.join(" "))}}function Rw(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null?Array.from(i):null)}}function Ow(){let e=Ae();zs(z()[T],e)}var jo=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=Pw;let e=t;return e})();function Pw(){let e=Ae();return Lw(e,z())}var Fw=jo,tp=class extends Fw{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Ys(this._hostTNode,this._hostLView)}get injector(){return new Et(this._hostTNode,this._hostLView)}get parentInjector(){let t=Ws(this._hostTNode,this._hostLView);if(Qf(t)){let n=co(t,this._hostLView),r=lo(t),o=n[T].data[r+8];return new Et(o,n)}else return new Et(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Kd(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-me}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=Wn(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(a,o,zn(this._hostTNode,s)),a}createComponent(t,n,r,o,i){let s=t&&!ty(t),a;if(s)a=n;else{let m=n||{};a=m.index,r=m.injector,o=m.projectableNodes,i=m.environmentInjector||m.ngModuleRef}let u=s?t:new qn(xt(t)),l=r||this.parentInjector;if(!i&&u.ngModule==null){let b=(s?l:this.parentInjector).get(Te,null);b&&(i=b)}let c=xt(u.componentType??{}),d=Wn(this._lContainer,c?.id??null),h=d?.firstChild??null,f=u.create(l,o,h,i);return this.insertImpl(f.hostView,a,zn(this._hostTNode,d)),f}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(uy(o)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let u=o[ge],l=new tp(u,u[We],u[ge]);l.detach(l.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return Fo(s,o,i,r),t.attachToViewContainerRef(),ff(Ui(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Kd(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=Un(this._lContainer,n);r&&(ro(Ui(this._lContainer),n),ko(r[T],r))}detach(t){let n=this._adjustIndex(t,-1),r=Un(this._lContainer,n);return r&&ro(Ui(this._lContainer),n)!=null?new fn(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Kd(e){return e[so]}function Ui(e){return e[so]||(e[so]=[])}function Lw(e,t){let n,r=t[e.index];return st(r)?n=r:(n=Vh(r,t,null,e),t[e.index]=n,Po(t,n)),Vw(n,t,e,r),new tp(n,e,t)}function jw(e,t){let n=e[fe],r=n.createComment(""),o=_e(t,e),i=na(n,o);return ho(n,i,r,Dv(n,o),!1),r}var Vw=$w,Bw=()=>!1;function Hw(e,t,n){return Bw(e,t,n)}function $w(e,t,n,r){if(e[St])return;let o;n.type&8?o=Je(r):o=jw(t,n),e[St]=o}function fa(e){let t=e.inputConfig,n={};for(let r in t)if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)&&o[3]&&(n[r]=o[3])}e.inputTransforms=n}var mt=class{},Yn=class{};var ws=class extends mt{constructor(t,n,r){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new go(this);let o=Df(t);this._bootstrapComponents=bh(o.bootstrap),this._r3Injector=ah(t,n,[{provide:mt,useValue:this},{provide:hn,useValue:this.componentFactoryResolver},...r],Ie(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},bs=class extends Yn{constructor(t){super(),this.moduleType=t}create(t){return new ws(this.moduleType,t,[])}};var yo=class extends mt{constructor(t){super(),this.componentFactoryResolver=new go(this),this.instance=null;let n=new Ln([...t.providers,{provide:mt,useValue:this},{provide:hn,useValue:this.componentFactoryResolver}],t.parent||Fs(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function ha(e,t,n=null){return new yo({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}function kt(e,t,n){let r=e[t];return Object.is(r,n)?!1:(e[t]=n,!0)}function Uw(e,t,n,r){let o=kt(e,t,n);return kt(e,t+1,r)||o}function zw(e){return(e.flags&32)===32}function Ww(e,t,n,r,o,i,s,a,u){let l=t.consts,c=Oo(t,e,4,s||null,a||null);Fh(t,n,c,dn(l,u)),zs(t,c);let d=c.tView=ia(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l,null);return t.queries!==null&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}function Ds(e,t,n,r,o,i,s,a,u,l){let c=n+ze,d=t.firstCreatePass?Ww(c,t,e,r,o,i,s,a,u):t.data[c];Qn(d,!1);let h=Gw(t,e,d,n);$s()&&ra(t,e,h,d),At(h,e);let f=Vh(h,e,h,d);return e[c]=f,Po(e,f),Hw(f,d,e),Ls(d)&&Rh(t,e,d),u!=null&&Oh(e,d,l),d}function Q(e,t,n,r,o,i,s,a){let u=z(),l=at(),c=dn(l.consts,i);return Ds(u,l,e,t,n,r,o,c,s,a),Q}var Gw=qw;function qw(e,t,n,r){return Us(!0),t[fe].createComment("")}function pa(e,t,n,r){let o=z(),i=Jn();if(kt(o,i,t)){let s=at(),a=Yf();Kv(a,o,e,t,n,r)}return pa}function Yw(e,t,n,r){return kt(e,Jn(),n)?t+nn(n)+r:Rt}function Zw(e,t,n,r,o,i){let s=wy(),a=Uw(e,s,n,o);return Dy(2),a?t+nn(n)+r+nn(o)+i:Rt}function F(e,t,n){let r=z(),o=Jn();if(kt(r,o,t)){let i=at(),s=Yf();jv(i,s,r,e,t,r[fe],n,!1)}return F}function Qd(e,t,n,r,o){let i=t.inputs,s=o?"class":"style";sa(e,n,i[s],s,r)}var Is=class{destroy(t){}updateValue(t,n){}swap(t,n){let r=Math.min(t,n),o=Math.max(t,n),i=this.detach(o);if(o-r>1){let s=this.detach(r);this.attach(r,i),this.attach(o,s)}else this.attach(r,i)}move(t,n){this.attach(n,this.detach(t))}};function zi(e,t,n,r,o){return e===n&&Object.is(t,r)?1:Object.is(o(e,t),o(n,r))?-1:0}function Kw(e,t,n){let r,o,i=0,s=e.length-1,a=void 0;if(Array.isArray(t)){let u=t.length-1;for(;i<=s&&i<=u;){let l=e.at(i),c=t[i],d=zi(i,l,i,c,n);if(d!==0){d<0&&e.updateValue(i,c),i++;continue}let h=e.at(s),f=t[u],m=zi(s,h,u,f,n);if(m!==0){m<0&&e.updateValue(s,f),s--,u--;continue}let b=n(i,l),L=n(s,h),V=n(i,c);if(Object.is(V,L)){let se=n(u,f);Object.is(se,b)?(e.swap(i,s),e.updateValue(s,f),u--,s--):e.move(s,i),e.updateValue(i,c),i++;continue}if(r??=new vo,o??=Xd(e,i,s,n),Cs(e,r,i,V))e.updateValue(i,c),i++,s++;else if(o.has(V))r.set(b,e.detach(i)),s--;else{let se=e.create(i,t[i]);e.attach(i,se),i++,s++}}for(;i<=u;)Jd(e,r,n,i,t[i]),i++}else if(t!=null){let u=t[Symbol.iterator](),l=u.next();for(;!l.done&&i<=s;){let c=e.at(i),d=l.value,h=zi(i,c,i,d,n);if(h!==0)h<0&&e.updateValue(i,d),i++,l=u.next();else{r??=new vo,o??=Xd(e,i,s,n);let f=n(i,d);if(Cs(e,r,i,f))e.updateValue(i,d),i++,s++,l=u.next();else if(!o.has(f))e.attach(i,e.create(i,d)),i++,s++,l=u.next();else{let m=n(i,c);r.set(m,e.detach(i)),s--}}}for(;!l.done;)Jd(e,r,n,e.length,l.value),l=u.next()}for(;i<=s;)e.destroy(e.detach(s--));r?.forEach(u=>{e.destroy(u)})}function Cs(e,t,n,r){return t!==void 0&&t.has(r)?(e.attach(n,t.get(r)),t.delete(r),!0):!1}function Jd(e,t,n,r,o){if(Cs(e,t,r,n(r,o)))e.updateValue(r,o);else{let i=e.create(r,o);e.attach(r,i)}}function Xd(e,t,n,r){let o=new Set;for(let i=t;i<=n;i++)o.add(r(i,e.at(i)));return o}var vo=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let n=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(n)?(this.kvMap.set(t,this._vMap.get(n)),this._vMap.delete(n)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,n){if(this.kvMap.has(t)){let r=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=new Map);let o=this._vMap;for(;o.has(r);)r=o.get(r);o.set(r,n)}else this.kvMap.set(t,n)}forEach(t){for(let[n,r]of this.kvMap)if(t(r,n),this._vMap!==void 0){let o=this._vMap;for(;o.has(r);)r=o.get(r),t(r,n)}}};function W(e,t){tr("NgControlFlow");let n=z(),r=Jn(),o=n[r]!==Rt?n[r]:-1,i=o!==-1?wo(n,ze+o):void 0,s=0;if(kt(n,r,e)){let a=A(null);try{if(i!==void 0&&zh(i,s),e!==-1){let u=ze+e,l=wo(n,u),c=Ms(n[T],u),d=Wn(l,c.tView.ssrId),h=ua(n,c,t,{dehydratedView:d});Fo(l,h,s,zn(c,d))}}finally{A(a)}}else if(i!==void 0){let a=Uh(i,s);a!==void 0&&(a[pe]=t)}}var Es=class{constructor(t,n,r){this.lContainer=t,this.$implicit=n,this.$index=r}get $count(){return this.lContainer.length-me}};var xs=class{constructor(t,n,r){this.hasEmptyBlock=t,this.trackByFn=n,this.liveCollection=r}};function ke(e,t,n,r,o,i,s,a,u,l,c,d,h){tr("NgControlFlow");let f=z(),m=at(),b=u!==void 0,L=z(),V=a?s.bind(L[Ue][pe]):s,se=new xs(b,V);L[ze+e]=se,Ds(f,m,e+1,t,n,r,o,dn(m.consts,i)),b&&Ds(f,m,e+2,u,l,c,d,dn(m.consts,h))}var Ss=class extends Is{constructor(t,n,r){super(),this.lContainer=t,this.hostLView=n,this.templateTNode=r,this.operationsCounter=void 0,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-me}at(t){return this.getLView(t)[pe].$implicit}attach(t,n){let r=n[jn];this.needsIndexUpdate||=t!==this.length,Fo(this.lContainer,n,t,zn(this.templateTNode,r))}detach(t){return this.needsIndexUpdate||=t!==this.length-1,Qw(this.lContainer,t)}create(t,n){let r=Wn(this.lContainer,this.templateTNode.tView.ssrId),o=ua(this.hostLView,this.templateTNode,new Es(this.lContainer,n,t),{dehydratedView:r});return this.operationsCounter?.recordCreate(),o}destroy(t){ko(t[T],t),this.operationsCounter?.recordDestroy()}updateValue(t,n){this.getLView(t)[pe].$implicit=n}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[pe].$index=t}getLView(t){return Jw(this.lContainer,t)}};function Ne(e){let t=A(null),n=Xn();try{let r=z(),o=r[T],i=r[n],s=n+1,a=wo(r,s);if(i.liveCollection===void 0){let l=Ms(o,s);i.liveCollection=new Ss(a,r,l)}else i.liveCollection.reset();let u=i.liveCollection;if(Kw(u,e,i.trackByFn),u.updateIndexes(),i.hasEmptyBlock){let l=Jn(),c=u.length===0;if(kt(r,l,c)){let d=n+2,h=wo(r,d);if(c){let f=Ms(o,d),m=Wn(h,f.tView.ssrId),b=ua(r,f,void 0,{dehydratedView:m});Fo(h,b,0,zn(f,m))}else zh(h,0)}}}finally{A(t)}}function wo(e,t){return e[t]}function Qw(e,t){return Un(e,t)}function Jw(e,t){return Uh(e,t)}function Ms(e,t){return js(e,t)}function Xw(e,t,n,r,o,i){let s=t.consts,a=dn(s,o),u=Oo(t,e,2,r,a);return Fh(t,n,u,dn(s,i)),u.attrs!==null&&ys(u,u.attrs,!1),u.mergedAttrs!==null&&ys(u,u.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,u),u}function v(e,t,n,r){let o=z(),i=at(),s=ze+e,a=o[fe],u=i.firstCreatePass?Xw(s,i,o,t,n,r):i.data[s],l=eb(i,o,u,a,t,e);o[s]=l;let c=Ls(u);return Qn(u,!0),Mh(a,l,u),!zw(u)&&$s()&&ra(i,o,l,u),dy()===0&&At(l,o),fy(),c&&(Rh(i,o,u),Nh(i,u,o)),r!==null&&Oh(o,u),v}function w(){let e=Ae();Bf()?vy():(e=e.parent,Qn(e,!1));let t=e;my(t)&&gy(),hy();let n=at();return n.firstCreatePass&&(zs(n,e),_f(e)&&n.queries.elementEnd(e)),t.classesWithoutHost!=null&&ky(t)&&Qd(n,t,z(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&Ny(t)&&Qd(n,t,z(),t.stylesWithoutHost,!1),w}function G(e,t,n,r){return v(e,t,n,r),w(),G}var eb=(e,t,n,r,o,i)=>(Us(!0),Dh(r,o,My()));var bo="en-US";var tb=bo;function nb(e){typeof e=="string"&&(tb=e.toLowerCase().replace(/_/g,"-"))}var rb=(e,t,n)=>{};function ma(e,t,n,r){let o=z(),i=at(),s=Ae();return ib(i,o,o[fe],s,e,t,r),ma}function ob(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let a=t[io],u=o[i+2];return a.length>u?a[u]:null}typeof s=="string"&&(i+=2)}return null}function ib(e,t,n,r,o,i,s){let a=Ls(r),l=e.firstCreatePass&&tw(e),c=t[pe],d=ew(t),h=!0;if(r.type&3||s){let b=_e(r,t),L=s?s(b):b,V=d.length,se=s?et=>s(Je(et[r.index])):r.index,X=null;if(!s&&a&&(X=ob(e,t,o,r.index)),X!==null){let et=X.__ngLastListenerFn__||X;et.__ngNextListenerFn__=i,X.__ngLastListenerFn__=i,h=!1}else{i=tf(r,t,c,i),rb(b,o,i);let et=n.listen(L,o,i);d.push(i,et),l&&l.push(o,se,V,V+1)}}else i=tf(r,t,c,i);let f=r.outputs,m;if(h&&f!==null&&(m=f[o])){let b=m.length;if(b)for(let L=0;L<b;L+=2){let V=m[L],se=m[L+1],jt=t[V][se].subscribe(i),Le=d.length;d.push(i,jt),l&&l.push(o,r.index,Le,-(Le+1))}}}function ef(e,t,n,r){let o=A(null);try{return Ye(6,t,n),n(r)!==!1}catch(i){return Hh(e,i),!1}finally{Ye(7,t,n),A(o)}}function tf(e,t,n,r){return function o(i){if(i===Function)return r;let s=e.componentOffset>-1?gt(e.index,t):t;la(s,5);let a=ef(t,n,r,i),u=o.__ngNextListenerFn__;for(;u;)a=ef(t,n,u,i)&&a,u=u.__ngNextListenerFn__;return a}}function B(e=1){return Sy(e)}function j(e,t=""){let n=z(),r=at(),o=e+ze,i=r.firstCreatePass?Oo(r,o,1,t,null):r.data[o],s=sb(r,n,i,t,e);n[o]=s,$s()&&ra(r,n,s,i),Qn(i,!1)}var sb=(e,t,n,r,o)=>(Us(!0),cv(t[fe],r));function oe(e){return ie("",e,""),oe}function ie(e,t,n){let r=z(),o=Yw(r,e,t,n);return o!==Rt&&$h(r,Xn(),o),ie}function ga(e,t,n,r,o){let i=z(),s=Zw(i,e,t,n,r,o);return s!==Rt&&$h(i,Xn(),s),ga}var ab=(()=>{let t=class t{constructor(r){this._injector=r,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(r){if(!r.standalone)return null;if(!this.cachedInjectors.has(r)){let o=Ef(!1,r.type),i=o.length>0?ha([o],this._injector,`Standalone[${r.type.name}]`):null;this.cachedInjectors.set(r,i)}return this.cachedInjectors.get(r)}ngOnDestroy(){try{for(let r of this.cachedInjectors.values())r!==null&&r.destroy()}finally{this.cachedInjectors.clear()}}};t.\u0275prov=x({token:t,providedIn:"environment",factory:()=>new t(N(Te))});let e=t;return e})();function J(e){tr("NgStandalone"),e.getStandaloneInjector=t=>t.get(ab).getOrCreateStandaloneInjector(e)}var Vo=(()=>{let t=class t{log(r){console.log(r)}warn(r){console.warn(r)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"platform"});let e=t;return e})();var np=new _("");function nr(e){return!!e&&typeof e.then=="function"}function rp(e){return!!e&&typeof e.subscribe=="function"}var op=new _(""),ip=(()=>{let t=class t{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o}),this.appInits=g(op,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let r=[];for(let i of this.appInits){let s=i();if(nr(s))r.push(s);else if(rp(s)){let a=new Promise((u,l)=>{s.subscribe({complete:u,error:l})});r.push(a)}}let o=()=>{this.done=!0,this.resolve()};Promise.all(r).then(()=>{o()}).catch(i=>{this.reject(i)}),r.length===0&&o(),this.initialized=!0}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),ya=new _("");function ub(){Wc(()=>{throw new D(600,!1)})}function lb(e){return e.isBoundToModule}var cb=10;function db(e,t,n){try{let r=n();return nr(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}var vn=(()=>{let t=class t{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=g(uh),this.afterRenderEffectManager=g(ep),this.zonelessEnabled=g(ca),this.externalTestViews=new Set,this.beforeRender=new de,this.afterTick=new de,this.componentTypes=[],this.components=[],this.isStable=g(gn).hasPendingTasks.pipe(k(r=>!r)),this._injector=g(Te)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(r,o){let i=r instanceof mo;if(!this._injector.get(ip).done){let f=!i&&bf(r),m=!1;throw new D(405,m)}let a;i?a=r:a=this._injector.get(hn).resolveComponentFactory(r),this.componentTypes.push(a.componentType);let u=lb(a)?void 0:this._injector.get(mt),l=o||a.selector,c=a.create(_t.NULL,[],l,u),d=c.location.nativeElement,h=c.injector.get(np,null);return h?.registerApplication(d),c.onDestroy(()=>{this.detachView(c.hostView),Wi(this.components,c),h?.unregisterApplication(d)}),this._loadComponent(c),c}tick(){this._tick(!0)}_tick(r){if(this._runningTick)throw new D(101,!1);let o=A(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(r)}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,A(o),this.afterTick.next()}}detectChangesInAttachedViews(r){let o=null;this._injector.destroyed||(o=this._injector.get(pn,null,{optional:!0}));let i=0,s=this.afterRenderEffectManager;for(;i<cb;){let a=i===0;if(r||!a){this.beforeRender.next(a);for(let{_lView:u,notifyErrorHandler:l}of this._views)fb(u,l,a,this.zonelessEnabled)}else o?.begin?.(),o?.end?.();if(i++,s.executeInternalCallbacks(),!this.allViews.some(({_lView:u})=>Bn(u))&&(s.execute(),!this.allViews.some(({_lView:u})=>Bn(u))))break}}attachView(r){let o=r;this._views.push(o),o.attachToAppRef(this)}detachView(r){let o=r;Wi(this._views,o),o.detachFromAppRef()}_loadComponent(r){this.attachView(r.hostView),this.tick(),this.components.push(r);let o=this._injector.get(ya,[]);[...this._bootstrapListeners,...o].forEach(i=>i(r))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(r=>r()),this._views.slice().forEach(r=>r.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(r){return this._destroyListeners.push(r),()=>Wi(this._destroyListeners,r)}destroy(){if(this._destroyed)throw new D(406,!1);let r=this._injector;r.destroy&&!r.destroyed&&r.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Wi(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function fb(e,t,n,r){if(!n&&!Bn(e))return;qh(e,t,n&&!r?0:1)}var Ts=class{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},va=(()=>{let t=class t{compileModuleSync(r){return new bs(r)}compileModuleAsync(r){return Promise.resolve(this.compileModuleSync(r))}compileModuleAndAllComponentsSync(r){let o=this.compileModuleSync(r),i=Df(r),s=bh(i.declarations).reduce((a,u)=>{let l=xt(u);return l&&a.push(new qn(l)),a},[]);return new Ts(o,s)}compileModuleAndAllComponentsAsync(r){return Promise.resolve(this.compileModuleAndAllComponentsSync(r))}clearCache(){}clearCacheFor(r){}getModuleId(r){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var hb=(()=>{let t=class t{constructor(){this.zone=g(Z),this.changeDetectionScheduler=g(Gn),this.applicationRef=g(vn)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),pb=new _("",{factory:()=>!1});function sp({ngZoneFactory:e,ignoreChangesOutsideZone:t}){return e??=()=>new Z(up()),[{provide:Z,useFactory:e},{provide:sn,multi:!0,useFactory:()=>{let n=g(hb,{optional:!0});return()=>n.initialize()}},{provide:sn,multi:!0,useFactory:()=>{let n=g(gb);return()=>{n.initialize()}}},{provide:uh,useFactory:mb},t===!0?{provide:Qh,useValue:!0}:[]]}function mb(){let e=g(Z),t=g(rt);return n=>e.runOutsideAngular(()=>t.handleError(n))}function ap(e){let t=e?.ignoreChangesOutsideZone,n=sp({ngZoneFactory:()=>{let r=up(e);return r.shouldCoalesceEventChangeDetection&&tr("NgZone_CoalesceEvent"),new Z(r)},ignoreChangesOutsideZone:t});return Eo([{provide:pb,useValue:!0},{provide:ca,useValue:!1},n])}function up(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var gb=(()=>{let t=class t{constructor(){this.subscription=new Y,this.initialized=!1,this.zone=g(Z),this.pendingTasks=g(gn)}initialize(){if(this.initialized)return;this.initialized=!0;let r=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(r=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Z.assertNotInAngularZone(),queueMicrotask(()=>{r!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(r),r=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Z.assertInAngularZone(),r??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var yb=(()=>{let t=class t{constructor(){this.appRef=g(vn),this.taskService=g(gn),this.ngZone=g(Z),this.zonelessEnabled=g(ca),this.disableScheduling=g(Qh,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new Y,this.cancelScheduledCallback=null,this.shouldRefreshViews=!1,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof gs||!this.zoneIsDefined)}notify(r){if(!this.zonelessEnabled&&r===5)return;switch(r){case 3:case 2:case 0:case 4:case 5:case 1:{this.shouldRefreshViews=!0;break}case 8:case 7:case 6:case 9:default:}if(!this.shouldScheduleTick())return;let o=this.useMicrotaskScheduler?Wd:Jh;this.pendingRenderTaskId=this.taskService.add(),this.zoneIsDefined?Zone.root.run(()=>{this.cancelScheduledCallback=o(()=>{this.tick(this.shouldRefreshViews)})}):this.cancelScheduledCallback=o(()=>{this.tick(this.shouldRefreshViews)})}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Z.isInAngularZone())}tick(r){if(this.runningTick||this.appRef.destroyed)return;let o=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick(r)},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(o),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Wd(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(o)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.shouldRefreshViews=!1,this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let r=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(r)}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function vb(){return typeof $localize<"u"&&$localize.locale||bo}var wa=new _("",{providedIn:"root",factory:()=>g(wa,M.Optional|M.SkipSelf)||vb()});var lp=new _("");var eo=null;function wb(e=[],t){return _t.create({name:t,providers:[{provide:xo,useValue:"platform"},{provide:lp,useValue:new Set([()=>eo=null])},...e]})}function bb(e=[]){if(eo)return eo;let t=wb(e);return eo=t,ub(),Db(t),t}function Db(e){e.get(Ks,null)?.forEach(n=>n())}var rr=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=Ib;let e=t;return e})();function Ib(e){return Cb(Ae(),z(),(e&16)===16)}function Cb(e,t,n){if(Mo(e)&&!n){let r=gt(e.index,t);return new fn(r,r)}else if(e.type&47){let r=t[Ue];return new fn(r,t)}return null}function cp(e){try{let{rootComponent:t,appProviders:n,platformProviders:r}=e,o=bb(r),i=[sp({}),{provide:Gn,useExisting:yb},...n||[]],a=new yo({providers:i,parent:o,debugName:"",runEnvironmentInitializers:!1}).injector,u=a.get(Z);return u.run(()=>{a.resolveInjectorInitializers();let l=a.get(rt,null),c;u.runOutsideAngular(()=>{c=u.onError.subscribe({next:f=>{l.handleError(f)}})});let d=()=>a.destroy(),h=o.get(lp);return h.add(d),a.onDestroy(()=>{c.unsubscribe(),h.delete(d)}),db(l,u,()=>{let f=a.get(ip);return f.runInitializers(),f.donePromise.then(()=>{let m=a.get(wa,bo);nb(m||bo);let b=a.get(vn);return t!==void 0&&b.bootstrap(t),b})})})}catch(t){return Promise.reject(t)}}function or(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}var gp=null;function wn(){return gp}function yp(e){gp??=e}var Bo=class{};var Oe=new _(""),vp=(()=>{let t=class t{historyGo(r){throw new Error("")}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:()=>g(Eb),providedIn:"platform"});let e=t;return e})();var Eb=(()=>{let t=class t extends vp{constructor(){super(),this._doc=g(Oe),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return wn().getBaseHref(this._doc)}onPopState(r){let o=wn().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",r,!1),()=>o.removeEventListener("popstate",r)}onHashChange(r){let o=wn().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",r,!1),()=>o.removeEventListener("hashchange",r)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(r){this._location.pathname=r}pushState(r,o,i){this._history.pushState(r,o,i)}replaceState(r,o,i){this._history.replaceState(r,o,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(r=0){this._history.go(r)}getState(){return this._history.state}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function wp(e,t){if(e.length==0)return t;if(t.length==0)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,n==2?e+t.substring(1):n==1?e+t:e+"/"+t}function dp(e){let t=e.match(/#|\?|$/),n=t&&t.index||e.length,r=n-(e[n-1]==="/"?1:0);return e.slice(0,r)+e.slice(n)}function Ot(e){return e&&e[0]!=="?"?"?"+e:e}var bn=(()=>{let t=class t{historyGo(r){throw new Error("")}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:()=>g(bp),providedIn:"root"});let e=t;return e})(),xb=new _(""),bp=(()=>{let t=class t extends bn{constructor(r,o){super(),this._platformLocation=r,this._removeListenerFns=[],this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??g(Oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(r){this._removeListenerFns.push(this._platformLocation.onPopState(r),this._platformLocation.onHashChange(r))}getBaseHref(){return this._baseHref}prepareExternalUrl(r){return wp(this._baseHref,r)}path(r=!1){let o=this._platformLocation.pathname+Ot(this._platformLocation.search),i=this._platformLocation.hash;return i&&r?`${o}${i}`:o}pushState(r,o,i,s){let a=this.prepareExternalUrl(i+Ot(s));this._platformLocation.pushState(r,o,a)}replaceState(r,o,i,s){let a=this.prepareExternalUrl(i+Ot(s));this._platformLocation.replaceState(r,o,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(r=0){this._platformLocation.historyGo?.(r)}};t.\u0275fac=function(o){return new(o||t)(N(vp),N(xb,8))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var ir=(()=>{let t=class t{constructor(r){this._subject=new he,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=r;let o=this._locationStrategy.getBaseHref();this._basePath=Tb(dp(fp(o))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(r=!1){return this.normalize(this._locationStrategy.path(r))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(r,o=""){return this.path()==this.normalize(r+Ot(o))}normalize(r){return t.stripTrailingSlash(Mb(this._basePath,fp(r)))}prepareExternalUrl(r){return r&&r[0]!=="/"&&(r="/"+r),this._locationStrategy.prepareExternalUrl(r)}go(r,o="",i=null){this._locationStrategy.pushState(i,"",r,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(r+Ot(o)),i)}replaceState(r,o="",i=null){this._locationStrategy.replaceState(i,"",r,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(r+Ot(o)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(r=0){this._locationStrategy.historyGo?.(r)}onUrlChange(r){return this._urlChangeListeners.push(r),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{let o=this._urlChangeListeners.indexOf(r);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(r="",o){this._urlChangeListeners.forEach(i=>i(r,o))}subscribe(r,o,i){return this._subject.subscribe({next:r,error:o,complete:i})}};t.normalizeQueryParams=Ot,t.joinWithSlash=wp,t.stripTrailingSlash=dp,t.\u0275fac=function(o){return new(o||t)(N(bn))},t.\u0275prov=x({token:t,factory:()=>Sb(),providedIn:"root"});let e=t;return e})();function Sb(){return new ir(N(bn))}function Mb(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function fp(e){return e.replace(/\/index.html$/,"")}function Tb(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}function Dp(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var Ip="browser",_b="server";function Da(e){return e===_b}var Ho=class{};var Ea=class extends Bo{constructor(){super(...arguments),this.supportsDOMEvents=!0}},xa=class e extends Ea{static makeCurrent(){yp(new e)}onAndCancel(t,n,r){return t.addEventListener(n,r),()=>{t.removeEventListener(n,r)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=Nb();return n==null?null:Rb(n)}resetBaseElement(){sr=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Dp(document.cookie,t)}},sr=null;function Nb(){return sr=sr||document.querySelector("base"),sr?sr.getAttribute("href"):null}function Rb(e){return new URL(e,document.baseURI).pathname}var Ob=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})(),Sa=new _(""),Sp=(()=>{let t=class t{constructor(r,o){this._zone=o,this._eventNameToPlugin=new Map,r.forEach(i=>{i.manager=this}),this._plugins=r.slice().reverse()}addEventListener(r,o,i){return this._findPluginFor(o).addEventListener(r,o,i)}getZone(){return this._zone}_findPluginFor(r){let o=this._eventNameToPlugin.get(r);if(o)return o;if(o=this._plugins.find(s=>s.supports(r)),!o)throw new D(5101,!1);return this._eventNameToPlugin.set(r,o),o}};t.\u0275fac=function(o){return new(o||t)(N(Sa),N(Z))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})(),$o=class{constructor(t){this._doc=t}},Ia="ng-app-id",Mp=(()=>{let t=class t{constructor(r,o,i,s={}){this.doc=r,this.appId=o,this.nonce=i,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Da(s),this.resetHostNodes()}addStyles(r){for(let o of r)this.changeUsageCount(o,1)===1&&this.onStyleAdded(o)}removeStyles(r){for(let o of r)this.changeUsageCount(o,-1)<=0&&this.onStyleRemoved(o)}ngOnDestroy(){let r=this.styleNodesInDOM;r&&(r.forEach(o=>o.remove()),r.clear());for(let o of this.getAllStyles())this.onStyleRemoved(o);this.resetHostNodes()}addHost(r){this.hostNodes.add(r);for(let o of this.getAllStyles())this.addStyleToHost(r,o)}removeHost(r){this.hostNodes.delete(r)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(r){for(let o of this.hostNodes)this.addStyleToHost(o,r)}onStyleRemoved(r){let o=this.styleRef;o.get(r)?.elements?.forEach(i=>i.remove()),o.delete(r)}collectServerRenderedStyles(){let r=this.doc.head?.querySelectorAll(`style[${Ia}="${this.appId}"]`);if(r?.length){let o=new Map;return r.forEach(i=>{i.textContent!=null&&o.set(i.textContent,i)}),o}return null}changeUsageCount(r,o){let i=this.styleRef;if(i.has(r)){let s=i.get(r);return s.usage+=o,s.usage}return i.set(r,{usage:o,elements:[]}),o}getStyleElement(r,o){let i=this.styleNodesInDOM,s=i?.get(o);if(s?.parentNode===r)return i.delete(o),s.removeAttribute(Ia),s;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=o,this.platformIsServer&&a.setAttribute(Ia,this.appId),r.appendChild(a),a}}addStyleToHost(r,o){let i=this.getStyleElement(r,o),s=this.styleRef,a=s.get(o)?.elements;a?a.push(i):s.set(o,{elements:[i],usage:1})}resetHostNodes(){let r=this.hostNodes;r.clear(),r.add(this.doc.head)}};t.\u0275fac=function(o){return new(o||t)(N(Oe),N(Zs),N(Qs,8),N(yn))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})(),Ca={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ta=/%COMP%/g,Tp="%COMP%",Pb=`_nghost-${Tp}`,Fb=`_ngcontent-${Tp}`,Lb=!0,jb=new _("",{providedIn:"root",factory:()=>Lb});function Vb(e){return Fb.replace(Ta,e)}function Bb(e){return Pb.replace(Ta,e)}function _p(e,t){return t.map(n=>n.replace(Ta,e))}var Cp=(()=>{let t=class t{constructor(r,o,i,s,a,u,l,c=null){this.eventManager=r,this.sharedStylesHost=o,this.appId=i,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=u,this.ngZone=l,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=Da(u),this.defaultRenderer=new ar(r,a,l,this.platformIsServer)}createRenderer(r,o){if(!r||!o)return this.defaultRenderer;this.platformIsServer&&o.encapsulation===Ke.ShadowDom&&(o=q(y({},o),{encapsulation:Ke.Emulated}));let i=this.getOrCreateRenderer(r,o);return i instanceof Uo?i.applyToHost(r):i instanceof ur&&i.applyStyles(),i}getOrCreateRenderer(r,o){let i=this.rendererByCompId,s=i.get(o.id);if(!s){let a=this.doc,u=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(o.encapsulation){case Ke.Emulated:s=new Uo(l,c,o,this.appId,d,a,u,h);break;case Ke.ShadowDom:return new Ma(l,c,r,o,a,u,this.nonce,h);default:s=new ur(l,c,o,d,a,u,h);break}i.set(o.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(o){return new(o||t)(N(Sp),N(Mp),N(Zs),N(jb),N(Oe),N(yn),N(Z),N(Qs))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})(),ar=class{constructor(t,n,r,o){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,n){return n?this.doc.createElementNS(Ca[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Ep(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(Ep(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new D(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=Ca[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=Ca[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(Nt.DashCase|Nt.Important)?t.style.setProperty(n,r,o&Nt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&Nt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r){if(typeof t=="string"&&(t=wn().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${n}`);return this.eventManager.addEventListener(t,n,this.decoratePreventDefault(r))}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(n)):t(n))===!1&&n.preventDefault()}}};function Ep(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Ma=class extends ar{constructor(t,n,r,o,i,s,a,u){super(t,i,s,u),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=_p(o.id,o.styles);for(let c of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=c,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ur=class extends ar{constructor(t,n,r,o,i,s,a,u){super(t,i,s,a),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o,this.styles=u?_p(u,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Uo=class extends ur{constructor(t,n,r,o,i,s,a,u){let l=o+"-"+r.id;super(t,n,r,i,s,a,u,l),this.contentAttr=Vb(l),this.hostAttr=Bb(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}},Hb=(()=>{let t=class t extends $o{constructor(r){super(r)}supports(r){return!0}addEventListener(r,o,i){return r.addEventListener(o,i,!1),()=>this.removeEventListener(r,o,i)}removeEventListener(r,o,i){return r.removeEventListener(o,i)}};t.\u0275fac=function(o){return new(o||t)(N(Oe))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})(),xp=["alt","control","meta","shift"],$b={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ub={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},zb=(()=>{let t=class t extends $o{constructor(r){super(r)}supports(r){return t.parseEventName(r)!=null}addEventListener(r,o,i){let s=t.parseEventName(o),a=t.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>wn().onAndCancel(r,s.domEventName,a))}static parseEventName(r){let o=r.toLowerCase().split("."),i=o.shift();if(o.length===0||!(i==="keydown"||i==="keyup"))return null;let s=t._normalizeKey(o.pop()),a="",u=o.indexOf("code");if(u>-1&&(o.splice(u,1),a="code."),xp.forEach(c=>{let d=o.indexOf(c);d>-1&&(o.splice(d,1),a+=c+".")}),a+=s,o.length!=0||s.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(r,o){let i=$b[r.key]||r.key,s="";return o.indexOf("code.")>-1&&(i=r.code,s="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),xp.forEach(a=>{if(a!==i){let u=Ub[a];u(r)&&(s+=a+".")}}),s+=i,s===o)}static eventCallback(r,o,i){return s=>{t.matchEventFullKeyCode(s,r)&&i.runGuarded(()=>o(s))}}static _normalizeKey(r){return r==="esc"?"escape":r}};t.\u0275fac=function(o){return new(o||t)(N(Oe))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})();function Ap(e,t){return cp(y({rootComponent:e},Wb(t)))}function Wb(e){return{appProviders:[...Kb,...e?.providers??[]],platformProviders:Zb}}function Gb(){xa.makeCurrent()}function qb(){return new rt}function Yb(){return mh(document),document}var Zb=[{provide:yn,useValue:Ip},{provide:Ks,useValue:Gb,multi:!0},{provide:Oe,useFactory:Yb,deps:[]}];var Kb=[{provide:xo,useValue:"root"},{provide:rt,useFactory:qb,deps:[]},{provide:Sa,useClass:Hb,multi:!0,deps:[Oe,Z,yn]},{provide:Sa,useClass:zb,multi:!0,deps:[Oe]},Cp,Mp,Sp,{provide:pn,useExisting:Cp},{provide:Ho,useClass:Ob,deps:[]},[]];var kp=(()=>{let t=class t{constructor(r){this._doc=r}getTitle(){return this._doc.title}setTitle(r){this._doc.title=r||""}};t.\u0275fac=function(o){return new(o||t)(N(Oe))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var S="primary",xr=Symbol("RouteTitle"),Ra=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Sn(e){return new Ra(e)}function Jb(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],a=e[i];if(s[0]===":")o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function Xb(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Xe(e[n],t[n]))return!1;return!0}function Xe(e,t){let n=e?Oa(e):void 0,r=t?Oa(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!Vp(e[o],t[o]))return!1;return!0}function Oa(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Vp(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function Bp(e){return e.length>0?e[e.length-1]:null}function wt(e){return _i(e)?e:nr(e)?ee(Promise.resolve(e)):E(e)}var eD={exact:$p,subset:Up},Hp={exact:tD,subset:nD,ignored:()=>!0};function Np(e,t,n){return eD[n.paths](e.root,t.root,n.matrixParams)&&Hp[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function tD(e,t){return Xe(e,t)}function $p(e,t,n){if(!Ft(e.segments,t.segments)||!Go(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!$p(e.children[r],t.children[r],n))return!1;return!0}function nD(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>Vp(e[n],t[n]))}function Up(e,t,n){return zp(e,t,t.segments,n)}function zp(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!Ft(o,n)||t.hasChildren()||!Go(o,n,r))}else if(e.segments.length===n.length){if(!Ft(e.segments,n)||!Go(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!Up(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!Ft(e.segments,o)||!Go(e.segments,o,r)||!e.children[S]?!1:zp(e.children[S],t,i,r)}}function Go(e,t,n){return t.every((r,o)=>Hp[n](e[o].parameters,r.parameters))}var yt=class{constructor(t=new H([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Sn(this.queryParams),this._queryParamMap}toString(){return iD.serialize(this)}},H=class{constructor(t,n){this.segments=t,this.children=n,this.parent=null,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qo(this)}},Pt=class{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=Sn(this.parameters),this._parameterMap}toString(){return Gp(this)}};function rD(e,t){return Ft(e,t)&&e.every((n,r)=>Xe(n.parameters,t[r].parameters))}function Ft(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function oD(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===S&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==S&&(n=n.concat(t(o,r)))}),n}var su=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:()=>new mr,providedIn:"root"});let e=t;return e})(),mr=class{parse(t){let n=new Fa(t);return new yt(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${lr(t.root,!0)}`,r=uD(t.queryParams),o=typeof t.fragment=="string"?`#${sD(t.fragment)}`:"";return`${n}${r}${o}`}},iD=new mr;function qo(e){return e.segments.map(t=>Gp(t)).join("/")}function lr(e,t){if(!e.hasChildren())return qo(e);if(t){let n=e.children[S]?lr(e.children[S],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==S&&r.push(`${o}:${lr(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=oD(e,(r,o)=>o===S?[lr(e.children[S],!1)]:[`${o}:${lr(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[S]!=null?`${qo(e)}/${n[0]}`:`${qo(e)}/(${n.join("//")})`}}function Wp(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function zo(e){return Wp(e).replace(/%3B/gi,";")}function sD(e){return encodeURI(e)}function Pa(e){return Wp(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Yo(e){return decodeURIComponent(e)}function Rp(e){return Yo(e.replace(/\+/g,"%20"))}function Gp(e){return`${Pa(e.path)}${aD(e.parameters)}`}function aD(e){return Object.entries(e).map(([t,n])=>`;${Pa(t)}=${Pa(n)}`).join("")}function uD(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${zo(n)}=${zo(o)}`).join("&"):`${zo(n)}=${zo(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var lD=/^[^\/()?;#]+/;function _a(e){let t=e.match(lD);return t?t[0]:""}var cD=/^[^\/()?;=#]+/;function dD(e){let t=e.match(cD);return t?t[0]:""}var fD=/^[^=?&#]+/;function hD(e){let t=e.match(fD);return t?t[0]:""}var pD=/^[^&#]+/;function mD(e){let t=e.match(pD);return t?t[0]:""}var Fa=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new H([],{}):new H([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[S]=new H(t,n)),r}parseSegment(){let t=_a(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(t),new Pt(Yo(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=dD(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=_a(this.remaining);o&&(r=o,this.capture(r))}t[Yo(n)]=Yo(r)}parseQueryParam(t){let n=hD(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=mD(this.remaining);s&&(r=s,this.capture(r))}let o=Rp(n),i=Rp(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=_a(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=S);let s=this.parseChildren();n[i]=Object.keys(s).length===1?s[S]:new H([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new D(4011,!1)}};function qp(e){return e.segments.length>0?new H([],{[S]:e}):e}function Yp(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=Yp(o);if(r===S&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))t[s]=a;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new H(e.segments,t);return gD(n)}function gD(e){if(e.numberOfChildren===1&&e.children[S]){let t=e.children[S];return new H(e.segments.concat(t.segments),t.children)}return e}function gr(e){return e instanceof yt}function yD(e,t,n=null,r=null){let o=Zp(e);return Kp(o,t,n,r)}function Zp(e){let t;function n(i){let s={};for(let u of i.children){let l=n(u);s[u.outlet]=l}let a=new H(i.url,s);return i===e&&(t=a),a}let r=n(e.root),o=qp(r);return t??o}function Kp(e,t,n,r){let o=e;for(;o.parent;)o=o.parent;if(t.length===0)return Aa(o,o,o,n,r);let i=vD(t);if(i.toRoot())return Aa(o,o,new H([],{}),n,r);let s=wD(i,o,e),a=s.processChildren?fr(s.segmentGroup,s.index,i.commands):Jp(s.segmentGroup,s.index,i.commands);return Aa(o,s.segmentGroup,a,n,r)}function Zo(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function yr(e){return typeof e=="object"&&e!=null&&e.outlets}function Aa(e,t,n,r,o){let i={};r&&Object.entries(r).forEach(([u,l])=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`});let s;e===t?s=n:s=Qp(e,t,n);let a=qp(Yp(s));return new yt(a,i,o)}function Qp(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=Qp(i,t,n)}),new H(e.segments,r)}var Ko=class{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Zo(r[0]))throw new D(4003,!1);let o=r.find(yr);if(o&&o!==Bp(r))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vD(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Ko(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([u,l])=>{a[u]=typeof l=="string"?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((a,u)=>{u==0&&a==="."||(u==0&&a===""?n=!0:a===".."?t++:a!=""&&o.push(a))}),o):[...o,i]},[]);return new Ko(n,t,r)}var Cn=class{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function wD(e,t,n){if(e.isAbsolute)return new Cn(t,!0,0);if(!n)return new Cn(t,!1,NaN);if(n.parent===null)return new Cn(n,!0,0);let r=Zo(e.commands[0])?0:1,o=n.segments.length-1+r;return bD(n,o,e.numberOfDoubleDots)}function bD(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new D(4005,!1);o=r.segments.length}return new Cn(r,!1,o-i)}function DD(e){return yr(e[0])?e[0].outlets:{[S]:e}}function Jp(e,t,n){if(e??=new H([],{}),e.segments.length===0&&e.hasChildren())return fr(e,t,n);let r=ID(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new H(e.segments.slice(0,r.pathIndex),{});return i.children[S]=new H(e.segments.slice(r.pathIndex),e.children),fr(i,0,o)}else return r.match&&o.length===0?new H(e.segments,{}):r.match&&!e.hasChildren()?La(e,t,n):r.match?fr(e,0,o):La(e,t,n)}function fr(e,t,n){if(n.length===0)return new H(e.segments,{});{let r=DD(n),o={};if(Object.keys(r).some(i=>i!==S)&&e.children[S]&&e.numberOfChildren===1&&e.children[S].segments.length===0){let i=fr(e.children[S],t,n);return new H(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=Jp(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new H(e.segments,o)}}function ID(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],a=n[r];if(yr(a))break;let u=`${a}`,l=r<n.length-1?n[r+1]:null;if(o>0&&u===void 0)break;if(u&&l&&typeof l=="object"&&l.outlets===void 0){if(!Pp(u,l,s))return i;r+=2}else{if(!Pp(u,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function La(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(yr(i)){let u=CD(i.outlets);return new H(r,u)}if(o===0&&Zo(n[0])){let u=e.segments[t];r.push(new Pt(u.path,Op(n[0]))),o++;continue}let s=yr(i)?i.outlets[S]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&Zo(a)?(r.push(new Pt(s,Op(a))),o+=2):(r.push(new Pt(s,{})),o++)}return new H(r,{})}function CD(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=La(new H([],{}),0,r))}),t}function Op(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function Pp(e,t,n){return e==n.path&&Xe(t,n.parameters)}var hr="imperative",ce=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(ce||{}),Pe=class{constructor(t,n){this.id=t,this.url=n}},vr=class extends Pe{constructor(t,n,r="imperative",o=null){super(t,n),this.type=ce.NavigationStart,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},vt=class extends Pe{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=ce.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ee=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(Ee||{}),ja=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(ja||{}),ut=class extends Pe{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=ce.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Lt=class extends Pe{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=ce.NavigationSkipped}},wr=class extends Pe{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=ce.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Qo=class extends Pe{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=ce.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Va=class extends Pe{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=ce.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ba=class extends Pe{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=ce.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ha=class extends Pe{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=ce.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$a=class extends Pe{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=ce.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ua=class{constructor(t){this.route=t,this.type=ce.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},za=class{constructor(t){this.route=t,this.type=ce.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Wa=class{constructor(t){this.snapshot=t,this.type=ce.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ga=class{constructor(t){this.snapshot=t,this.type=ce.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qa=class{constructor(t){this.snapshot=t,this.type=ce.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ya=class{constructor(t){this.snapshot=t,this.type=ce.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var br=class{},Mn=class{constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};var Za=class{constructor(t){this.injector=t,this.outlet=null,this.route=null,this.children=new oi(this.injector),this.attachRef=null}},oi=(()=>{let t=class t{constructor(r){this.parentInjector=r,this.contexts=new Map}onChildOutletCreated(r,o){let i=this.getOrCreateContext(r);i.outlet=o,this.contexts.set(r,i)}onChildOutletDestroyed(r){let o=this.getContext(r);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let r=this.contexts;return this.contexts=new Map,r}onOutletReAttached(r){this.contexts=r}getOrCreateContext(r){let o=this.getContext(r);return o||(o=new Za(this.parentInjector),this.contexts.set(r,o)),o}getContext(r){return this.contexts.get(r)||null}};t.\u0275fac=function(o){return new(o||t)(N(Te))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Jo=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=Ka(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=Ka(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=Qa(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return Qa(t,this._root).map(n=>n.value)}};function Ka(e,t){if(e===t.value)return t;for(let n of t.children){let r=Ka(e,n);if(r)return r}return null}function Qa(e,t){if(e===t.value)return[t];for(let n of t.children){let r=Qa(e,n);if(r.length)return r.unshift(t),r}return[]}var Ce=class{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function In(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var Xo=class extends Jo{constructor(t,n){super(t),this.snapshot=n,au(this,t)}toString(){return this.snapshot.toString()}};function Xp(e){let t=ED(e),n=new ae([new Pt("",{})]),r=new ae({}),o=new ae({}),i=new ae({}),s=new ae(""),a=new le(n,r,i,s,o,S,e,t.root);return a.snapshot=t.root,new Xo(new Ce(a,[]),t)}function ED(e){let t={},n={},r={},o="",i=new En([],t,r,o,n,S,e,null,{});return new ti("",new Ce(i,[]))}var le=class{constructor(t,n,r,o,i,s,a,u){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(k(l=>l[xr]))??E(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(k(t=>Sn(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(k(t=>Sn(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ei(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:y(y({},t.params),e.params),data:y(y({},t.data),e.data),resolve:y(y(y(y({},e.data),t.data),o?.data),e._resolvedData)}:r={params:y({},e.params),data:y({},e.data),resolve:y(y({},e.data),e._resolvedData??{})},o&&tm(o)&&(r.resolve[xr]=o.title),r}var En=class{get title(){return this.data?.[xr]}constructor(t,n,r,o,i,s,a,u,l){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.routeConfig=u,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Sn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Sn(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},ti=class extends Jo{constructor(t,n){super(n),this.url=t,au(this,n)}toString(){return em(this._root)}};function au(e,t){t.value._routerState=e,t.children.forEach(n=>au(e,n))}function em(e){let t=e.children.length>0?` { ${e.children.map(em).join(", ")} } `:"";return`${e.value}${t}`}function ka(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Xe(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),Xe(t.params,n.params)||e.paramsSubject.next(n.params),Xb(t.url,n.url)||e.urlSubject.next(n.url),Xe(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Ja(e,t){let n=Xe(e.params,t.params)&&rD(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||Ja(e.parent,t.parent))}function tm(e){return typeof e.title=="string"||e.title===null}var uu=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=S,this.activateEvents=new he,this.deactivateEvents=new he,this.attachEvents=new he,this.detachEvents=new he,this.parentContexts=g(oi),this.location=g(jo),this.changeDetector=g(rr),this.inputBinder=g(lu,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(r){if(r.name){let{firstChange:o,previousValue:i}=r.name;if(o)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(r){return this.parentContexts.getContext(r)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let r=this.parentContexts.getContext(this.name);r?.route&&(r.attachRef?this.attach(r.attachRef,r.route):this.activateWith(r.route,r.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let r=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(r.instance),r}attach(r,o){this.activated=r,this._activatedRoute=o,this.location.insert(r.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(r.instance)}deactivate(){if(this.activated){let r=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(r)}}activateWith(r,o){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=r;let i=this.location,a=r.snapshot.component,u=this.parentContexts.getOrCreateContext(this.name).children,l=new Xa(r,u,i.injector);this.activated=i.createComponent(a,{index:i.length,injector:l,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=Co({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Kn]});let e=t;return e})(),Xa=class e{__ngOutletInjector(t){return new e(this.route,this.childContexts,t)}constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===le?this.route:t===oi?this.childContexts:this.parent.get(t,n)}},lu=new _("");function xD(e,t,n){let r=Dr(e,t._root,n?n._root:void 0);return new Xo(r,t)}function Dr(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=SD(e,t,n);return new Ce(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Dr(e,a)),s}}let r=MD(t.value),o=t.children.map(i=>Dr(e,i));return new Ce(r,o)}}function SD(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Dr(e,r,o);return Dr(e,r)})}function MD(e){return new le(new ae(e.url),new ae(e.params),new ae(e.queryParams),new ae(e.fragment),new ae(e.data),e.outlet,e.component,e)}var Ir=class{constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},nm="ngNavigationCancelingError";function ni(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=gr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=rm(!1,Ee.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function rm(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[nm]=!0,n.cancellationCode=t,n}function TD(e){return om(e)&&gr(e.url)}function om(e){return!!e&&e[nm]}var _D=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=K({type:t,selectors:[["ng-component"]],standalone:!0,features:[J],decls:1,vars:0,template:function(o,i){o&1&&G(0,"router-outlet")},dependencies:[uu],encapsulation:2});let e=t;return e})();function AD(e,t){return e.providers&&!e._injector&&(e._injector=ha(e.providers,t,`Route: ${e.path}`)),e._injector??t}function cu(e){let t=e.children&&e.children.map(cu),n=t?q(y({},e),{children:t}):y({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==S&&(n.component=_D),n}function Ge(e){return e.outlet||S}function kD(e,t){let n=e.filter(r=>Ge(r)===t);return n.push(...e.filter(r=>Ge(r)!==t)),n}function Sr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var ND=(e,t,n,r)=>k(o=>(new eu(t,o.targetRouterState,o.currentRouterState,n,r).activate(e),o)),eu=class{constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),ka(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=In(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=In(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=In(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=In(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new Ya(i.value.snapshot))}),t.children.length&&this.forwardEvent(new Ga(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(ka(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let a=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),ka(a.route.value),this.activateChildRoutes(t,null,s.children)}else{let a=Sr(o.snapshot);s.attachRef=null,s.route=o,s.injector=a??s.injector,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}}else this.activateChildRoutes(t,null,r)}},ri=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},xn=class{constructor(t,n){this.component=t,this.route=n}};function RD(e,t,n){let r=e._root,o=t?t._root:null;return cr(r,o,n,[r.value])}function OD(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function _n(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!sf(e)?e:t.get(e):r}function cr(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=In(t);return e.children.forEach(s=>{PD(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>pr(a,n.getContext(s),o)),o}function PD(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let u=FD(s,i,i.routeConfig.runGuardsAndResolvers);u?o.canActivateChecks.push(new ri(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?cr(e,t,a?a.children:null,r,o):cr(e,t,n,r,o),u&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new xn(a.outlet.component,s))}else s&&pr(t,a,o),o.canActivateChecks.push(new ri(r)),i.component?cr(e,null,a?a.children:null,r,o):cr(e,null,n,r,o);return o}function FD(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!Ft(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Ft(e.url,t.url)||!Xe(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ja(e,t)||!Xe(e.queryParams,t.queryParams);case"paramsChange":default:return!Ja(e,t)}}function pr(e,t,n){let r=In(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?pr(s,t.children.getContext(i),n):pr(s,null,n):pr(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new xn(t.outlet.component,o)):n.canDeactivateChecks.push(new xn(null,o)):n.canDeactivateChecks.push(new xn(null,o))}function Mr(e){return typeof e=="function"}function LD(e){return typeof e=="boolean"}function jD(e){return e&&Mr(e.canLoad)}function VD(e){return e&&Mr(e.canActivate)}function BD(e){return e&&Mr(e.canActivateChild)}function HD(e){return e&&Mr(e.canDeactivate)}function $D(e){return e&&Mr(e.canMatch)}function im(e){return e instanceof tt||e?.name==="EmptyError"}var Wo=Symbol("INITIAL_VALUE");function Tn(){return Be(e=>Gr(e.map(t=>t.pipe(nt(1),Oi(Wo)))).pipe(k(t=>{for(let n of t)if(n!==!0){if(n===Wo)return Wo;if(n===!1||UD(n))return n}return!0}),Ve(t=>t!==Wo),nt(1)))}function UD(e){return gr(e)||e instanceof Ir}function zD(e,t){return te(n=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?E(q(y({},n),{guardsResult:!0})):WD(s,r,o,e).pipe(te(a=>a&&LD(a)?GD(r,i,e,t):E(a)),k(a=>q(y({},n),{guardsResult:a})))})}function WD(e,t,n,r){return ee(e).pipe(te(o=>QD(o.component,o.route,n,t,r)),qe(o=>o!==!0,!0))}function GD(e,t,n,r){return ee(t).pipe(Zt(o=>Yt(YD(o.route.parent,r),qD(o.route,r),KD(e,o.path,n),ZD(e,o.route,n))),qe(o=>o!==!0,!0))}function qD(e,t){return e!==null&&t&&t(new qa(e)),E(!0)}function YD(e,t){return e!==null&&t&&t(new Wa(e)),E(!0)}function ZD(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return E(!0);let o=r.map(i=>qr(()=>{let s=Sr(t)??n,a=_n(i,s),u=VD(a)?a.canActivate(t,e):ot(s,()=>a(t,e));return wt(u).pipe(qe())}));return E(o).pipe(Tn())}function KD(e,t,n){let r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>OD(s)).filter(s=>s!==null).map(s=>qr(()=>{let a=s.guards.map(u=>{let l=Sr(s.node)??n,c=_n(u,l),d=BD(c)?c.canActivateChild(r,e):ot(l,()=>c(r,e));return wt(d).pipe(qe())});return E(a).pipe(Tn())}));return E(i).pipe(Tn())}function QD(e,t,n,r,o){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return E(!0);let s=i.map(a=>{let u=Sr(t)??o,l=_n(a,u),c=HD(l)?l.canDeactivate(e,t,n,r):ot(u,()=>l(e,t,n,r));return wt(c).pipe(qe())});return E(s).pipe(Tn())}function JD(e,t,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return E(!0);let i=o.map(s=>{let a=_n(s,e),u=jD(a)?a.canLoad(t,n):ot(e,()=>a(t,n));return wt(u)});return E(i).pipe(Tn(),sm(r))}function sm(e){return xi(ue(t=>{if(typeof t!="boolean")throw ni(e,t)}),k(t=>t===!0))}function XD(e,t,n,r){let o=t.canMatch;if(!o||o.length===0)return E(!0);let i=o.map(s=>{let a=_n(s,e),u=$D(a)?a.canMatch(t,n):ot(e,()=>a(t,n));return wt(u)});return E(i).pipe(Tn(),sm(r))}var Cr=class{constructor(t){this.segmentGroup=t||null}},Er=class extends Error{constructor(t){super(),this.urlTree=t}};function Dn(e){return qt(new Cr(e))}function eI(e){return qt(new D(4e3,!1))}function tI(e){return qt(rm(!1,Ee.GuardRejected))}var tu=class{constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return E(r);if(o.numberOfChildren>1||!o.children[S])return eI(`${t.redirectTo}`);o=o.children[S]}}applyRedirectCommands(t,n,r,o,i){if(typeof n!="string"){let a=n,{queryParams:u,fragment:l,routeConfig:c,url:d,outlet:h,params:f,data:m,title:b}=o,L=ot(i,()=>a({params:f,data:m,queryParams:u,fragment:l,routeConfig:c,url:d,outlet:h,title:b}));if(L instanceof yt)throw new Er(L);n=L}let s=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r);if(n[0]==="/")throw new Er(s);return s}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new yt(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);r[o]=n[a]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([a,u])=>{s[a]=this.createSegmentGroup(t,u,r,o)}),new H(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new D(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}},nu={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function nI(e,t,n,r,o){let i=du(e,t,n);return i.matched?(r=AD(t,r),XD(r,t,n,o).pipe(k(s=>s===!0?i:y({},nu)))):E(i)}function du(e,t,n){if(t.path==="**")return rI(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?y({},nu):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||Jb)(n,e,t);if(!o)return y({},nu);let i={};Object.entries(o.posParams??{}).forEach(([a,u])=>{i[a]=u.path});let s=o.consumed.length>0?y(y({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function rI(e){return{matched:!0,parameters:e.length>0?Bp(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Fp(e,t,n,r){return n.length>0&&sI(e,n,r)?{segmentGroup:new H(t,iI(r,new H(n,e.children))),slicedSegments:[]}:n.length===0&&aI(e,n,r)?{segmentGroup:new H(e.segments,oI(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new H(e.segments,e.children),slicedSegments:n}}function oI(e,t,n,r){let o={};for(let i of n)if(ii(e,t,i)&&!r[Ge(i)]){let s=new H([],{});o[Ge(i)]=s}return y(y({},r),o)}function iI(e,t){let n={};n[S]=t;for(let r of e)if(r.path===""&&Ge(r)!==S){let o=new H([],{});n[Ge(r)]=o}return n}function sI(e,t,n){return n.some(r=>ii(e,t,r)&&Ge(r)!==S)}function aI(e,t,n){return n.some(r=>ii(e,t,r))}function ii(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function uI(e,t,n,r){return Ge(e)!==r&&(r===S||!ii(t,n,e))?!1:du(t,e,n).matched}function lI(e,t,n){return t.length===0&&!e.children[n]}var ru=class{};function cI(e,t,n,r,o,i,s="emptyOnly"){return new ou(e,t,n,r,o,s,i).recognize()}var dI=31,ou=class{constructor(t,n,r,o,i,s,a){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new tu(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new D(4002,`'${t.segmentGroup}'`)}recognize(){let t=Fp(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(k(({children:n,rootSnapshot:r})=>{let o=new Ce(r,n),i=new ti("",o),s=yD(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(t){let n=new En([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),S,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,S,n).pipe(k(r=>({children:r,rootSnapshot:n})),ct(r=>{if(r instanceof Er)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Cr?this.noMatchError(r):r}))}processSegmentGroup(t,n,r,o,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r,i):this.processSegment(t,n,r,r.segments,o,!0,i).pipe(k(s=>s instanceof Ce?[s]:[]))}processChildren(t,n,r,o){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return ee(i).pipe(Zt(s=>{let a=r.children[s],u=kD(n,s);return this.processSegmentGroup(t,u,a,s,o)}),Ri((s,a)=>(s.push(...a),s)),dt(null),Ni(),te(s=>{if(s===null)return Dn(r);let a=am(s);return fI(a),E(a)}))}processSegment(t,n,r,o,i,s,a){return ee(n).pipe(Zt(u=>this.processSegmentAgainstRoute(u._injector??t,n,u,r,o,i,s,a).pipe(ct(l=>{if(l instanceof Cr)return E(null);throw l}))),qe(u=>!!u),ct(u=>{if(im(u))return lI(r,o,i)?E(new ru):Dn(r);throw u}))}processSegmentAgainstRoute(t,n,r,o,i,s,a,u){return uI(r,o,i,s)?r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,o,r,i,s,u):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s,u):Dn(o):Dn(o)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s,a){let{matched:u,parameters:l,consumedSegments:c,positionalParamSegments:d,remainingSegments:h}=du(n,o,i);if(!u)return Dn(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>dI&&(this.allowRedirects=!1));let f=new En(i,l,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Lp(o),Ge(o),o.component??o._loadedComponent??null,o,jp(o)),m=ei(f,a,this.paramsInheritanceStrategy);f.params=Object.freeze(m.params),f.data=Object.freeze(m.data);let b=this.applyRedirects.applyRedirectCommands(c,o.redirectTo,d,f,t);return this.applyRedirects.lineralizeSegments(o,b).pipe(te(L=>this.processSegment(t,r,n,L.concat(h),s,!1,a)))}matchSegmentAgainstRoute(t,n,r,o,i,s){let a=nI(n,r,o,t,this.urlSerializer);return r.path==="**"&&(n.children={}),a.pipe(Be(u=>u.matched?(t=r._injector??t,this.getChildConfig(t,r,o).pipe(Be(({routes:l})=>{let c=r._loadedInjector??t,{parameters:d,consumedSegments:h,remainingSegments:f}=u,m=new En(h,d,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Lp(r),Ge(r),r.component??r._loadedComponent??null,r,jp(r)),b=ei(m,s,this.paramsInheritanceStrategy);m.params=Object.freeze(b.params),m.data=Object.freeze(b.data);let{segmentGroup:L,slicedSegments:V}=Fp(n,h,f,l);if(V.length===0&&L.hasChildren())return this.processChildren(c,l,L,m).pipe(k(X=>new Ce(m,X)));if(l.length===0&&V.length===0)return E(new Ce(m,[]));let se=Ge(r)===i;return this.processSegment(c,l,L,V,se?S:i,!0,m).pipe(k(X=>new Ce(m,X instanceof Ce?[X]:[])))}))):Dn(n)))}getChildConfig(t,n,r){return n.children?E({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?E({routes:n._loadedRoutes,injector:n._loadedInjector}):JD(t,n,r,this.urlSerializer).pipe(te(o=>o?this.configLoader.loadChildren(t,n).pipe(ue(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):tI(n))):E({routes:[],injector:t})}};function fI(e){e.sort((t,n)=>t.value.outlet===S?-1:n.value.outlet===S?1:t.value.outlet.localeCompare(n.value.outlet))}function hI(e){let t=e.value.routeConfig;return t&&t.path===""}function am(e){let t=[],n=new Set;for(let r of e){if(!hI(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=am(r.children);t.push(new Ce(r.value,o))}return t.filter(r=>!n.has(r))}function Lp(e){return e.data||{}}function jp(e){return e.resolve||{}}function pI(e,t,n,r,o,i){return te(s=>cI(e,t,n,r,s.extractedUrl,o,i).pipe(k(({state:a,tree:u})=>q(y({},s),{targetSnapshot:a,urlAfterRedirects:u}))))}function mI(e,t){return te(n=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return E(n);let i=new Set(o.map(u=>u.route)),s=new Set;for(let u of i)if(!s.has(u))for(let l of um(u))s.add(l);let a=0;return ee(s).pipe(Zt(u=>i.has(u)?gI(u,r,e,t):(u.data=ei(u,u.parent,e).resolve,E(void 0))),ue(()=>a++),Kt(1),te(u=>a===s.size?E(n):De))})}function um(e){let t=e.children.map(n=>um(n)).flat();return[e,...t]}function gI(e,t,n,r){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!tm(o)&&(i[xr]=o.title),yI(i,e,t,r).pipe(k(s=>(e._resolvedData=s,e.data=ei(e,e.parent,n).resolve,null)))}function yI(e,t,n,r){let o=Oa(e);if(o.length===0)return E({});let i={};return ee(o).pipe(te(s=>vI(e[s],t,n,r).pipe(qe(),ue(a=>{if(a instanceof Ir)throw ni(new mr,a);i[s]=a}))),Kt(1),ki(i),ct(s=>im(s)?De:qt(s)))}function vI(e,t,n,r){let o=Sr(t)??r,i=_n(e,o),s=i.resolve?i.resolve(t,n):ot(o,()=>i(t,n));return wt(s)}function Na(e){return Be(t=>{let n=e(t);return n?ee(n).pipe(k(()=>t)):E(t)})}var lm=(()=>{let t=class t{buildTitle(r){let o,i=r.root;for(;i!==void 0;)o=this.getResolvedTitleForRoute(i)??o,i=i.children.find(s=>s.outlet===S);return o}getResolvedTitleForRoute(r){return r.data[xr]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:()=>g(wI),providedIn:"root"});let e=t;return e})(),wI=(()=>{let t=class t extends lm{constructor(r){super(),this.title=r}updateTitle(r){let o=this.buildTitle(r);o!==void 0&&this.title.setTitle(o)}};t.\u0275fac=function(o){return new(o||t)(N(kp))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),fu=new _("",{providedIn:"root",factory:()=>({})}),hu=new _(""),bI=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=g(va)}loadComponent(r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return E(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let o=wt(r.loadComponent()).pipe(k(cm),ue(s=>{this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s}),Nn(()=>{this.componentLoaders.delete(r)})),i=new Gt(o,()=>new de).pipe(Wt());return this.componentLoaders.set(r,i),i}loadChildren(r,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return E({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let s=DI(o,this.compiler,r,this.onLoadEndListener).pipe(Nn(()=>{this.childrenLoaders.delete(o)})),a=new Gt(s,()=>new de).pipe(Wt());return this.childrenLoaders.set(o,a),a}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function DI(e,t,n,r){return wt(e.loadChildren()).pipe(k(cm),te(o=>o instanceof Yn||Array.isArray(o)?E(o):ee(t.compileModuleAsync(o))),k(o=>{r&&r(e);let i,s,a=!1;return Array.isArray(o)?(s=o,a=!0):(i=o.create(n).injector,s=i.get(hu,[],{optional:!0,self:!0}).flat()),{routes:s.map(cu),injector:i}}))}function II(e){return e&&typeof e=="object"&&"default"in e}function cm(e){return II(e)?e.default:e}var pu=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:()=>g(CI),providedIn:"root"});let e=t;return e})(),CI=(()=>{let t=class t{shouldProcessUrl(r){return!0}extract(r){return r}merge(r,o){return r}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),EI=new _("");var xI=new _(""),SI=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new de,this.transitionAbortSubject=new de,this.configLoader=g(bI),this.environmentInjector=g(Te),this.urlSerializer=g(su),this.rootContexts=g(oi),this.location=g(ir),this.inputBindingEnabled=g(lu,{optional:!0})!==null,this.titleStrategy=g(lm),this.options=g(fu,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=g(pu),this.createViewTransition=g(EI,{optional:!0}),this.navigationErrorHandler=g(xI,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>E(void 0),this.rootComponentType=null;let r=i=>this.events.next(new Ua(i)),o=i=>this.events.next(new za(i));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=r}complete(){this.transitions?.complete()}handleNavigationRequest(r){let o=++this.navigationId;this.transitions?.next(q(y(y({},this.transitions.value),r),{id:o}))}setupNavigations(r,o,i){return this.transitions=new ae({id:0,currentUrlTree:o,currentRawUrl:o,extractedUrl:this.urlHandlingStrategy.extract(o),urlAfterRedirects:this.urlHandlingStrategy.extract(o),rawUrl:o,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:hr,restoredState:null,currentSnapshot:i.snapshot,targetSnapshot:null,currentRouterState:i,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Ve(s=>s.id!==0),k(s=>q(y({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Be(s=>{let a=!1,u=!1;return E(s).pipe(Be(l=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Ee.SupersededByNewNavigation),De;this.currentTransition=s,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?q(y({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!r.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??r.onSameUrlNavigation;if(!c&&d!=="reload"){let h="";return this.events.next(new Lt(l.id,this.urlSerializer.serialize(l.rawUrl),h,ja.IgnoredSameUrlNavigation)),l.resolve(!1),De}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return E(l).pipe(Be(h=>{let f=this.transitions?.getValue();return this.events.next(new vr(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),f!==this.transitions?.getValue()?De:Promise.resolve(h)}),pI(this.environmentInjector,this.configLoader,this.rootComponentType,r.config,this.urlSerializer,this.paramsInheritanceStrategy),ue(h=>{s.targetSnapshot=h.targetSnapshot,s.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=q(y({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let f=new Qo(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:f,source:m,restoredState:b,extras:L}=l,V=new vr(h,this.urlSerializer.serialize(f),m,b);this.events.next(V);let se=Xp(this.rootComponentType).snapshot;return this.currentTransition=s=q(y({},l),{targetSnapshot:se,urlAfterRedirects:f,extras:q(y({},L),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,E(s)}else{let h="";return this.events.next(new Lt(l.id,this.urlSerializer.serialize(l.extractedUrl),h,ja.IgnoredByUrlHandlingStrategy)),l.resolve(!1),De}}),ue(l=>{let c=new Va(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),k(l=>(this.currentTransition=s=q(y({},l),{guards:RD(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),s)),zD(this.environmentInjector,l=>this.events.next(l)),ue(l=>{if(s.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw ni(this.urlSerializer,l.guardsResult);let c=new Ba(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),Ve(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Ee.GuardRejected),!1)),Na(l=>{if(l.guards.canActivateChecks.length)return E(l).pipe(ue(c=>{let d=new Ha(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}),Be(c=>{let d=!1;return E(c).pipe(mI(this.paramsInheritanceStrategy,this.environmentInjector),ue({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(c,"",Ee.NoDataFromResolver)}}))}),ue(c=>{let d=new $a(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}))}),Na(l=>{let c=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(ue(f=>{d.component=f}),k(()=>{})));for(let f of d.children)h.push(...c(f));return h};return Gr(c(l.targetSnapshot.root)).pipe(dt(null),nt(1))}),Na(()=>this.afterPreactivation()),Be(()=>{let{currentSnapshot:l,targetSnapshot:c}=s,d=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return d?ee(d).pipe(k(()=>s)):E(s)}),k(l=>{let c=xD(r.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=s=q(y({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,s}),ue(()=>{this.events.next(new br)}),ND(this.rootContexts,r.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),nt(1),ue({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new vt(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Pi(this.transitionAbortSubject.pipe(ue(l=>{throw l}))),Nn(()=>{!a&&!u&&this.cancelNavigationTransition(s,"",Ee.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),ct(l=>{if(u=!0,om(l))this.events.next(new ut(s.id,this.urlSerializer.serialize(s.extractedUrl),l.message,l.cancellationCode)),TD(l)?this.events.next(new Mn(l.url,l.navigationBehaviorOptions)):s.resolve(!1);else{let c=new wr(s.id,this.urlSerializer.serialize(s.extractedUrl),l,s.targetSnapshot??void 0);try{let d=ot(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Ir){let{message:h,cancellationCode:f}=ni(this.urlSerializer,d);this.events.next(new ut(s.id,this.urlSerializer.serialize(s.extractedUrl),h,f)),this.events.next(new Mn(d.redirectTo,d.navigationBehaviorOptions))}else{this.events.next(c);let h=r.errorHandler(l);s.resolve(!!h)}}catch(d){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(d)}}return De}))}))}cancelNavigationTransition(r,o,i){let s=new ut(r.id,this.urlSerializer.serialize(r.extractedUrl),o,i);this.events.next(s),r.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function MI(e){return e!==hr}var TI=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:()=>g(_I),providedIn:"root"});let e=t;return e})(),iu=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},_I=(()=>{let t=class t extends iu{};t.\u0275fac=(()=>{let r;return function(i){return(r||(r=Gs(t)))(i||t)}})(),t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),dm=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:()=>g(AI),providedIn:"root"});let e=t;return e})(),AI=(()=>{let t=class t extends dm{constructor(){super(...arguments),this.location=g(ir),this.urlSerializer=g(su),this.options=g(fu,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=g(pu),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new yt,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Xp(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(r){return this.location.subscribe(o=>{o.type==="popstate"&&r(o.url,o.state)})}handleRouterEvent(r,o){if(r instanceof vr)this.stateMemento=this.createStateMemento();else if(r instanceof Lt)this.rawUrlTree=o.initialUrl;else if(r instanceof Qo){if(this.urlUpdateStrategy==="eager"&&!o.extras.skipLocationChange){let i=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl);this.setBrowserUrl(i,o)}}else r instanceof br?(this.currentUrlTree=o.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl),this.routerState=o.targetRouterState,this.urlUpdateStrategy==="deferred"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,o))):r instanceof ut&&(r.code===Ee.GuardRejected||r.code===Ee.NoDataFromResolver)?this.restoreHistory(o):r instanceof wr?this.restoreHistory(o,!0):r instanceof vt&&(this.lastSuccessfulId=r.id,this.currentPageId=this.browserPageId)}setBrowserUrl(r,o){let i=this.urlSerializer.serialize(r);if(this.location.isCurrentPathEqualTo(i)||o.extras.replaceUrl){let s=this.browserPageId,a=y(y({},o.extras.state),this.generateNgRouterState(o.id,s));this.location.replaceState(i,"",a)}else{let s=y(y({},o.extras.state),this.generateNgRouterState(o.id,this.browserPageId+1));this.location.go(i,"",s)}}restoreHistory(r,o=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,s=this.currentPageId-i;s!==0?this.location.historyGo(s):this.currentUrlTree===r.finalUrl&&s===0&&(this.resetState(r),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetState(r),this.resetUrlToCurrentUrlTree())}resetState(r){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,r.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(r,o){return this.canceledNavigationResolution==="computed"?{navigationId:r,\u0275routerPageId:o}:{navigationId:r}}};t.\u0275fac=(()=>{let r;return function(i){return(r||(r=Gs(t)))(i||t)}})(),t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),dr=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(dr||{});function kI(e,t){e.events.pipe(Ve(n=>n instanceof vt||n instanceof ut||n instanceof wr||n instanceof Lt),k(n=>n instanceof vt||n instanceof Lt?dr.COMPLETE:(n instanceof ut?n.code===Ee.Redirect||n.code===Ee.SupersededByNewNavigation:!1)?dr.REDIRECTING:dr.FAILED),Ve(n=>n!==dr.REDIRECTING),nt(1)).subscribe(()=>{t()})}function NI(e){throw e}var RI={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},OI={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},mu=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=g(Vo),this.stateManager=g(dm),this.options=g(fu,{optional:!0})||{},this.pendingTasks=g(gn),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=g(SI),this.urlSerializer=g(su),this.location=g(ir),this.urlHandlingStrategy=g(pu),this._events=new de,this.errorHandler=this.options.errorHandler||NI,this.navigated=!1,this.routeReuseStrategy=g(TI),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=g(hu,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!g(lu,{optional:!0}),this.eventsSubscription=new Y,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:r=>{this.console.warn(r)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let r=this.navigationTransitions.events.subscribe(o=>{try{let i=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(i!==null&&s!==null){if(this.stateManager.handleRouterEvent(o,s),o instanceof ut&&o.code!==Ee.Redirect&&o.code!==Ee.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof vt)this.navigated=!0;else if(o instanceof Mn){let a=o.navigationBehaviorOptions,u=this.urlHandlingStrategy.merge(o.url,i.currentRawUrl),l=y({info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||MI(i.source)},a);this.scheduleNavigation(u,hr,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}FI(o)&&this._events.next(o)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(r)}resetRootComponentType(r){this.routerState.root.component=r,this.navigationTransitions.rootComponentType=r}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),hr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((r,o)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(r,"popstate",o)},0)})}navigateToSyncWithBrowser(r,o,i){let s={replaceUrl:!0},a=i?.navigationId?i:null;if(i){let l=y({},i);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let u=this.parseUrl(r);this.scheduleNavigation(u,o,a,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(r){this.config=r.map(cu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(r,o={}){let{relativeTo:i,queryParams:s,fragment:a,queryParamsHandling:u,preserveFragment:l}=o,c=l?this.currentUrlTree.fragment:a,d=null;switch(u){case"merge":d=y(y({},this.currentUrlTree.queryParams),s);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=s||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let f=i?i.snapshot:this.routerState.snapshot.root;h=Zp(f)}catch{(typeof r[0]!="string"||r[0][0]!=="/")&&(r=[]),h=this.currentUrlTree.root}return Kp(h,r,d,c??null)}navigateByUrl(r,o={skipLocationChange:!1}){let i=gr(r)?r:this.parseUrl(r),s=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(s,hr,null,o)}navigate(r,o={skipLocationChange:!1}){return PI(r),this.navigateByUrl(this.createUrlTree(r,o),o)}serializeUrl(r){return this.urlSerializer.serialize(r)}parseUrl(r){try{return this.urlSerializer.parse(r)}catch{return this.urlSerializer.parse("/")}}isActive(r,o){let i;if(o===!0?i=y({},RI):o===!1?i=y({},OI):i=o,gr(r))return Np(this.currentUrlTree,r,i);let s=this.parseUrl(r);return Np(this.currentUrlTree,s,i)}removeEmptyProps(r){return Object.entries(r).reduce((o,[i,s])=>(s!=null&&(o[i]=s),o),{})}scheduleNavigation(r,o,i,s,a){if(this.disposed)return Promise.resolve(!1);let u,l,c;a?(u=a.resolve,l=a.reject,c=a.promise):c=new Promise((h,f)=>{u=h,l=f});let d=this.pendingTasks.add();return kI(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:r,extras:s,resolve:u,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(h=>Promise.reject(h))}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function PI(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new D(4008,!1)}function FI(e){return!(e instanceof br)&&!(e instanceof Mn)}var we=(()=>{let t=class t{constructor(r,o,i,s,a,u){this.router=r,this.route=o,this.tabIndexAttribute=i,this.renderer=s,this.el=a,this.locationStrategy=u,this.href=null,this.commands=null,this.onChanges=new de,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=r.events.subscribe(c=>{c instanceof vt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(r){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",r)}ngOnChanges(r){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(r){r!=null?(this.commands=Array.isArray(r)?r:[r],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(r,o,i,s,a){let u=this.urlTree;if(u===null||this.isAnchorElement&&(r!==0||o||i||s||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(u,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let r=this.urlTree;this.href=r!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(r)):null;let o=this.href===null?null:vh(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",o)}applyAttributeValue(r,o){let i=this.renderer,s=this.el.nativeElement;o!==null?i.setAttribute(s,r,o):i.removeAttribute(s,r)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};t.\u0275fac=function(o){return new(o||t)(re(mu),re(le),qs("tabindex"),re(Lo),re(er),re(bn))},t.\u0275dir=Co({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(o,i){o&1&&ma("click",function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),o&2&&pa("target",i.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",or],skipLocationChange:[2,"skipLocationChange","skipLocationChange",or],replaceUrl:[2,"replaceUrl","replaceUrl",or],routerLink:"routerLink"},standalone:!0,features:[fa,Kn]});let e=t;return e})();var LI=new _("");function fm(e,...t){return Eo([{provide:hu,multi:!0,useValue:e},[],{provide:le,useFactory:jI,deps:[mu]},{provide:ya,multi:!0,useFactory:VI},t.map(n=>n.\u0275providers)])}function jI(e){return e.routerState.root}function VI(){let e=g(_t);return t=>{let n=e.get(vn);if(t!==n.components[0])return;let r=e.get(mu),o=e.get(BI);e.get(HI)===1&&r.initialNavigation(),e.get($I,null,M.Optional)?.setUpPreloading(),e.get(LI,null,M.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var BI=new _("",{factory:()=>new de}),HI=new _("",{providedIn:"root",factory:()=>1});var $I=new _("");var UI={id:"tardigrade-inferno",name:"Tardigrade Inferno",year:2016,folder:"/artist/tardigrade_inferno/albums/2016_ti.jpg",songs:["lovely-host","a-grain-of-sand","underwater-valentine"],info:`
  `},gu=UI;var zI={id:"execution-is-fun",name:"Execution is Fun!",year:2017,folder:"/artist/tardigrade_inferno/albums/2017_eif.jpg",songs:["execution-is-fun"],info:`
  `},yu=zI;var WI={id:"mastermind",name:"Mastermind",year:2019,folder:"/artist/tardigrade_inferno/albums/2019_m.jpg",songs:["all-tardigrades-go-to-hell","hypnosis","dreadful-song","alabama-song",{name:"Precourse"},"clown-therapy","all-pigs-are-the-same","church-asylum","marmalade","im-coming-for-your-soul","mastermind","we-are-number-one"],info:`
  `},vu=WI;var GI={id:"how-nightmares-die",name:"How Nightmares Die",year:2020,folder:"/artist/tardigrade_inferno/albums/2020_hnd.jpg",songs:["how-nightmares-die"],info:`
  `},wu=GI;var qI={id:"the-worst-of-me",name:"The Worst of Me",year:2021,folder:"/artist/tardigrade_inferno/albums/2021_twom.jpg",songs:["the-worst-of-me","write-with-blood"],info:`
  `},bu=qI;var YI={id:"spooky-scary-skeletons",name:"Spooky Scary Skeletons",year:2021,folder:"/artist/tardigrade_inferno/albums/2021_sss.jpg",songs:["spooky-scary-skeletons"],info:`
  `},Du=YI;var ZI={id:"arrival-of-a-train-single",name:"Arrival of a Train (single)",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_aoat.jpg",songs:["arrival-of-a-train"],info:`
  `},Iu=ZI;var KI={id:"fire-plague-and-locust",name:"Fire, Plague and Locust",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_fpal.jpg",songs:["fire-plague-and-locust"],info:`
  `},Cu=KI;var QI={id:"arrival-of-a-train",name:"Arrival of a Train",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_mini.jpg",songs:["arrival-of-a-train","fire-plague-and-locust","engine-of-skin","evoke"],info:`
  `},Eu=QI;var JI={id:"ringmaster-has-to-die",name:"Ringmaster has to Die",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_rhtd.jpg",songs:["ringmaster-has-to-die"],info:`
  `},xu=JI;var XI={id:"clockwork-god",name:"Clockwork God",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_cg.jpg",songs:["clockwork-god","ringmaster-has-to-die"],info:`
  `},Su=XI;var eC={id:"burn-the-circus",name:"Burn the Circus",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_btc.jpg",songs:["ringmaster-has-to-die","clockwork-god","rats","cholera","tick-tock","9-out-of-10","little-princess","splinter-in-the-eye","nailed-to-the-ferris-wheel","wearing-white","burn-the-circus"],info:`
  `},Mu=eC;var hm={[gu.id]:gu,[yu.id]:yu,[vu.id]:vu,[wu.id]:wu,[bu.id]:bu,[Du.id]:Du,[Iu.id]:Iu,[Cu.id]:Cu,[Eu.id]:Eu,[xu.id]:xu,[Su.id]:Su,[Mu.id]:Mu};var tC={id:"9-out-of-10",name:["9 out of 10"],albums:["burn-the-circus"],text:`
 	
Last thing I heard before I died
Was 10 frightened doctors talking aside
9 out of 10 doctors argued that I,
Giving my blood loss, will surely die
9 out of 10 friends that gathered around
Cried when they lowered me into the ground
9 out of 10 thought that I was gone
9 out of 10 times, oh, they were wrong

This circle of torture and pain will end
If I will rate you and will recommend
I resurrect and then again
I whisper right into your ear
9 out of 10

A shot to the face, an axe to the neck
A dart to the eye, a stab in the back
Thrown in the ocean, fed to the pigs
Honey, you should know better than this
Fall from the mountain onto the knife
Poisoned with lead then buried alive
Cut into pieces by thousand men
It\u2019s getting better, still 9 out of 10

This circle of torture and pain will end
If I will rate you and will recommend
I resurrect and then again
I whisper right into your ear
9 out of 10

Remember what you said?
You said I\u2019ll soon be dead
You said I had one wish
My only wish - a perfect murder
The powers that you have
But nothing in your head
You said I had one wish
And now I\u2019m practically immortal

The time is going fast
How many years have passed?
You used to beat me then
Until I got it truly perfect
The time is going fast
How many years have passed?
I die and live again
You\u2019ll never get the truly perfect ten

This circle of torture and pain will end
If I will rate you and will recommend
I resurrect and then again
I whisper right into your ear
9 out of 10

I resurrect and then again
I whisper right into your ear
9 out of 10
`},Tu=tC;var nC={id:"a-grain-of-sand",name:["A Grain of Sand"],albums:["tardigrade-inferno"],text:`
This night is long and dark, like the one before
I spend them both with eyes open, lying on the floor
A man - a being of water, but after crying dry
My head is like an hourglass with desert sand inside

Careful and quiet, a loving hand
Is placing beside you a grain of sand
Your happiest dream is for you to dwell
Goodnight, sweetheart. Sleep well.

It's just a twist of fate, it's not for me to choose
And now I'm on the edge and sand may be of use
It's not about me, I hope you'll understand
Your head is full of water, my hand is full of sand

Careful and quiet, a loving hand
Is placing beside you a grain of sand
Your happiest dream is for you to dwell
Goodnight, sweetheart. Sleep well.

Baby, baby, don\u2019t you cry
Sand is falling from the sky
You need just a single grain
And the sky will pour down rain

Single grain and pain will end
I\u2019m on my knees, I\u2019m bleeding sand
I\u2019ll close the door, I\u2019ll kill the light
I\u2019ll be your sandman for the night

Careful and quiet, a loving hand
Is placing beside you a grain of sand
Your happiest dream is for you to dwell
`},_u=nC;var rC={id:"alabama-song",name:["Alabama Song"],albums:["mastermind"],text:`
Well, show me the way
To the next whiskey bar
Oh, don't ask why
Oh, don't ask why
Show me the way
To the next whiskey bar
Oh, don't ask why
Oh, don't ask why
For if we don't find
The next whiskey bar
I tell you we must die
I tell you we must die
I tell you, I tell you
I tell you we must die

Oh, moon of Alabama
We now must say goodbye
We've lost our good old mama
And must have whiskey, oh, you know why

Well ,show me the way to the next pretty boy
Oh, don't ask why
Oh, don't ask why
Show me the way to the next little boy
Oh, don't ask why
Oh, don't ask why
For if we don't find
The next little boy
I tell you we must die
I tell you we must die
I tell you, I tell you
I tell you we must die

Oh, moon of Alabama
We now must say goodbye
We've lost our good old mama
And must have whiskey, oh, you know why
`},Au=rC;var oC={id:"all-pigs-are-the-same",name:["All Pigs are the Same"],albums:["mastermind"],text:`
I\u2019m here for the tribute
From farmers all around
I\u2019m here to collect the pigs
For royal hunting ground
And hunger is upon you
You\u2019re eating your own kids!
But there is no excuse for you -
I need my bloody pigs!

You\u2019re eating your own cattle
So you don\u2019t starve to death!
Now, do you even realise
You put me under stress?
You\u2019re messing with my planning!
You\u2019re tearing me apart!
But I just might have an idea
For you to play your part!

Where are the pigs now?
What a mix up!
Truly, what a shame!
Breeding, growing,
Where we are going
All pigs are the same!

Lets saw your arms and legs off -
For now they are too long!
And ears are short, I\u2019ll have to stretch.
And cut away your tongue!
And soon it will be over
Just think of this instead:
You will be royal hunting pigs -
At least you will be fed!

Where are the pigs now?
What a mix up!
Truly, what a shame!
Breeding, growing,
Where we are going
All pigs are the same!

You are pigs now!
Alive somehow
Growing day by day
You\u2019ll be going
The next morning
To your final stay

A King wants entertainment!
We\u2019re on the hunting ground!
But there is no guard left alive
And only pigs around
They quickly knock him over!
He\u2019s screaming underneath!
And we must have forgotten to
Remove their bloody teeth!

Where are the pigs now?
What a mix up!
Truly, what a shame!
They keep going!
They keep growing!
All pigs are the same!
`},ku=oC;var iC={id:"all-tardigrades-go-to-hell",name:["All Tardigrades go to Hell"],albums:["mastermind"],text:`
Hello, hello, my darlings
Ain\u2019t that a lovely sight?
Roll up and gather round
We have a show for you
TONIGHT!

To all who in a back rows  -
You want to die of age?
There sure will be a chance, now
Come closer to stage
and DANCE!

There is a cavern where
The King of Maggots lies
A granter of all wishes
A devil in disguise
When tardigrades were fragile
A lonely tardigrade
Came to the King of Maggots
To wish and was betrayed

You want to live forever
No death, no agony
This is beyond my power
Can\u2019t fool the entropy
But I can make you stronger
Impossible to kill
Immune to heat and hunger
A gesture of goodwill

A wicked catch embedded
In this demonic spell
A body dies and after
A soul will go to hell
Immune to all the torment
Immune to hellish flame
They colonized inferno
For them it\u2019s all the same

Hello, hello, my darlings
Ain\u2019t that a lovely sight?
Roll up and gather round
We have a show tonight

To all who in a back rows  -
You want to die of age?
There sure will be a chance, now
Come closer to this stage
and DANCE!

A smell of burning eyelids
And crying from below
The Tardigrade Inferno
Is perfect for the show!
`},Nu=iC;var sC={id:"arrival-of-a-train",name:["Arrival of a Train"],albums:["arrival-of-a-train-single","arrival-of-a-train"],text:`
It\u2019s the arrival of a train
To my forgotten lizard brain
Into the heart, into the vein
Choo-choo-choo-choo-choo goes the train!

It\u2019s the arrival of a train
And all your fears, sweat and pain
Are lost like tears in the rain
Choo-choo-choo-choo-choo goes the train!

It\u2019s coming
For everything you care about
Hear chugging of the wheels
That\u2019s all your fears coming true!
The train is coming
And everything you love will perish
And the last thing you will hear
Choo! Choo! Choo! Choo!

Await arrival of a train
It will be gone, you will remain
The future truly is insane
Just wait until we make a plane

And you will die under the train
Your blood will flow down the drain
And all your struggles are in vain
Choo-choo-choo-choo-choo goes the train!

It\u2019s coming
For everything you care about
Hear chugging of the wheels
That\u2019s all your fears coming true!
The train is coming
And everything you love will perish
And the last thing you will hear
Choo! Choo! Choo! Choo!

The metal train is coming right into the village
The metal train is coming right into my head
And will I find myself running from its image
Or will I ride it to the sunset at the end?

Choo-choo-choo-choo-choo goes the train!

It\u2019s coming
For everything you care about
Hear chugging of the wheels
That\u2019s all your fears coming true!
The train is coming
And everything you love will perish
And the last thing you will hear
Choo! Choo! Choo! Choo!
`},Ru=sC;var aC={id:"burn-the-circus",name:["Burn the Circus"],albums:["burn-the-circus"],text:`
Once upon an early autumn
As the rain was pouring down
One of the circus acrobats
Fell for a happy clown
Acrobat came to that clown
Trembling from within
Why I never see you laughing
But I always see you grin

I feel absolutely nothing
Said the happy clown
If you want to see me laughing
Burn the circus down

I remember you were joyful
I remember how you laughed
At the death of the magician
When he sawed himself in half
I hadn't heard your favorite song
You hummed for quite a while
You used to sing, but now you're silent
With your creepy concrete smile

I don\u2019t feel anything
Said the happy clown
If you want to hear me sing, please,
Burn the circus down

I have traveled with this circus
All across the map
Now it pinned my soul in place
Like a mousetrap
One day circus tent caught fire
I've noticed something odd
I've been so absurdly happy
Like I'm fucking ten years old

All my life and my routine
Just a big letdown
Take a can of gasoline
Burn the circus down

Acrobat just turned away
They walked their separate ways
And the happy clown kept on smiling,
Dreaming of the world ablaze
And one day they woke up
In bed side-by-side
Let\u2019s burn down this circus
With all of them inside

So they stayed in the burning circus
Never to be found
What\u2019s the moral of that story,
What\u2019s it all about?
If life fails to amuse you
Do it all yourself
Take the match and light the fuse
And burn your fucking self
`},Ou=aC;var uC={id:"cholera",name:["Cholera"],albums:["burn-the-circus"],text:`
Is this help sign big enough?
I\u2019m holding it above my head,
I\u2019m staying just to see
How everything will end
And just to hear your honest laugh

Am I just making an excuse?
A part of me thinks that I am
Another part of me
Is telling you and them:
My body still can be of use

I\u2019ll gladly die in front of you
Just trying to communicate
That Smallpox and Plague will seal our fate
Wait, and Influenza will arrive
Live a Scarlet Fever dream alive

I read the news today, oh boy!
It\u2019s printed all across my face!
Impossible to miss,
And also to erase
I\u2019m barely standing broken toy

I\u2019ll gladly die in front of you
Just trying to communicate
That Smallpox and Plague will seal our fate
Wait, and Influenza will arrive
Live a Scarlet Fever dream alive

A metaphorical disease
It is not perfect, but what is?
I\u2019m staying just to see the end
Cholera is my dearest friend

Is this help sign big enough?
I\u2019ve carved it right into my skin
It is the only thing
That keeps my mind clean
I'm simply looking for some love

I\u2019ll gladly die in front of you
Just trying to communicate
That Smallpox and Plague will seal our fate
Wait, and Influenza will arrive
Live a Scarlet Fever dream alive

I\u2019m staying just to see the end
Cholera is my dearest friend
`},Pu=uC;var lC={id:"church-asylum",name:["Church Asylum"],albums:["mastermind"],text:`
You want asylum?
A church asylum?
You want my guidance,
A sanctuary?
This is my guidance -
You keep your silence!
We need reliance
Till the very end!

Spread the word of Lord Almighty
Let the sunshine in your heart
Pray so hard till you no longer
Can tell love and hate apart

I demand silence!
In the asylum!
Leave your defiance
At your quarter
You roughless killer!
You deadly sinner!
I serve you dinner
Bread and water

Spread the word of Lord Almighty
Let the sunshine in your heart
Pray so hard till you no longer
Can tell love and hate apart

I\xB4ve just found out
I know about
Your bodycount
Bloody slaughter
You roughless killer!
You deadly sinner!
So no more dinner,
No more water!

You asked for guidance
You brought here violence
And your defiance
And denial
A resolution -
An execution!
Or absolution
And exile

Spread the word of Lord Almighty
Let the sunshine in your heart
Pray so hard till you no longer
Can tell love and hate apart
`},Fu=lC;var cC={id:"clockwork-god",name:["Clockwork God"],albums:["clockwork-god","burn-the-circus"],text:`
My clockwork is supreme
It is Turing complete
It's better than the flesh
Because the bodies tend to bleed
I'm making a machine
With cog and torsion spring
A human-like construction that can
Talk, and dream, and feel, and think

Everything we know
Leads us to the next
The mind is the contraption
That has grown too complex
If only I could make
A god from the machine
Multiply complexity until
It gains form and will

First, there was the God Almighty
From the God came Soul Eternal
Then the Soul commanded body
Body made the cog

From the cog I'll make a body
With the spring I'll make a mind
When the mind grows almighty
Then I'll make the Clockwork God

I\u2019m spending days and nights on my impossible invention
I left my mind open for divine intervention
While artificial humans will be sure someone\u2019s focus
For me, it\u2019s but a step to my divine magnum opus
The forward march of science gives us all that it can bring
But all that I will need is just a chain, a cog, a spring
And while the copper parts grow exponentially in size
I fear there is one thing that I have yet to realize

First, there was the God Almighty
From the God came Soul Eternal
Then the Soul commanded body
Body made the cog

From the cog I'll make a body
With the spring I'll make a mind
When the mind grows almighty
Then I'll make the Clockwork God

Cos\u2019 everything miraculous
Can be expressed with calculus
Got nothing but my sweat and blood
To reverse engineer the God
But I\u2019ve spent years with no success
There\u2019s no solution, it makes no sense
A blank space sits amidst my scripts
I\u2019ve tried it all, but nothing fits

What if there\u2019s no god almighty?
And there is no soul eternal?
There is brain and there is body
And there is a cog
From the cog I made a body
With the spring I made a mind
Will the mind grow almighty
And become a god?

I need more parts to make a god
Than there are atoms in the world
There is less copper than I need
My perfect vision is incomplete

The revelation came to me
The God is but a fantasy
There is no God, the image's fake
The only God - the one we make

First, there is no god almighty
And there is no soul eternal
There is brain and there is body
And there is a cog

From the cog I made a body
With the spring I made a mind
There is nothing that's almighty
So the mind prays\u2026
To the Clockwork God
`},Lu=cC;var dC={id:"clown-therapy",name:["Clown Therapy"],albums:["mastermind"],text:`
Don\u2019t you cry and don\u2019t you worry
I will put on clown dress
I will sing and tell a story
I will help you with your stress
Have no fear whatsoever
Promise that you will be nice
But I beg you, don\u2019t you ever
Look into my lifeless eyes

I signed up for clown care
Thinking that it\u2019s just a game
But I\u2019ve seen so much despair
That I\u2019ll never be the same
Loss of limbs and brain cancer
Burning, countless degrees
Tell me if there is an answer?
Why they all deserve all this?

Little angel shaved my head
Drew fibrosis on my skin
Hello children, god is dead
Let the clown therapy begin

It can not be nature\u2019s lesson -
Cancer at the age of ten
I will have to put my dress on
I will have to smile again
Little angel hold my lips
As I\u2019m frowning upside-down
You do not deserve all this
Oh, don\u2019t listen to that silly clown

Little angel shaved my head
Drew fibrosis on my skin
Hello children, god is dead
Let the clown therapy begin
`},ju=dC;var fC={id:"dreadful-song",name:["Dreadful Song"],albums:["mastermind"],text:`
Life is not fair
People everywhere
Are spending years analyzing
A fictional affair
Think of global warming!
Help me spread the warning!
And forget about it
By tomorrow morning

You\u2019ve got time to spare
Tell me, will you dare
To spend your life as a volunteer
So life could be fair?
And when you were younger
You didn't die of hunger!
Think of all the children starving -
An impressive number!

Tell me now how you sleep
Safe from bombs and falling fires.
Will your world just die when
They pull out tubes and wires?
Your compassion is strong
It just goes and comes along
And the only way to end it -
Is to sing a dreadful song!

See the climate changing?
Feel the planet ageing?
Thinking that you'll die before it
Is so much engaging!
Life's not really fair
Feel all that despair
Just acknowledge all the horrors
Like you really care

Tell me now how you sleep
Safe from bombs and falling fires.
Will your world just die when
They pull out tubes and wires?
Your compassion is strong
It just goes and comes along
And the only way to end it -
Is to sing a dreadful song!

Sing a very dreadful song...
Feel the dread and sing along...

Let me tell you how I sleep
Safe from bombs and falling fires.
And my world will die when
They pull out tubes and wires
My compassion is strong
It just goes and comes along
I know how to calm it down -
I just write a dreadful song!

Sing with me a dreadful song!
Feel the dread and sing along!
`},Vu=fC;var hC={id:"engine-of-skin",name:["Engine of Skin"],albums:["arrival-of-a-train"],text:`
Are you in love with your engine of skin?
Where does it end and you begin?
Does all the pain make you feel alive?
A burn from a fire? A cut from a knife?
Blood from the cut will be lost in the soil
Little by little, \u2018till nothing remains
Bring on the future where synthetic oil
Slowly replaces the blood in my veins

On your soft palate - expiration date
And someday you will find you've got used to pain
Apathy will rise, and it grows in size
Just as fast as the growing disease in your brain

Can you experience life as it is?
Excluding all the wavelengths you miss?
And every day you can feel even less
The time has come for breeding and death
My mind and my soul are a chemical process
It can be copied, deleted and more
When one door opens, the other one closes
But now we can break open all of the doors

On your soft palate - expiration date
And someday you will find you've got used to pain
Apathy will rise, and it grows in size
Just as fast as the growing disease in your brain

Are you afraid of evolving too far?
That at the end we\u2019ll lose who we are?
If you are burning the things you oppose
Add to the pile your glasses and clothes
Take all the flesh that I could live without
Damn all the feelings, it is but a shell
Upload my soul and my mind to the cloud
While my body can go straight to hell

On your soft palate - expiration date
And someday you will find you' ve got used to pain
Apathy will rise, and it grows in size
Just as fast as the growing disease in your brain

Sometimes I dream
Of Luddites reversed
That will break down
The engines of old
Armed to the teeth
With pitchforks and torches
We'll come to the source
To start a revolt

Blood from my core
Rains on the floor
I\u2019d rather die
Then give up control
Broken machine
The engine of skin
When you will end
Then I\u2019ll begin

Are you in love with your engine of skin?
Where does it end and you begin?
Does all the pain make you feel alive?
A burn from a fire? A cut from a knife?
Blood from the cut will dissolve in the ocean
Little by little you rot from within
Your soul is trapped in a downward motion
Powered one-way by the engine of skin

On your soft palate - expiration date
And someday you will find you've got used to pain
Apathy will rise, and it grows in size
Just as fast as the growing disease in your brain
`},Bu=hC;var pC={id:"evoke",name:["Evoke"],albums:["arrival-of-a-train"],text:`
I\u2019m dealing with a devil
I wrote his name on the wall
The signs will unravel
A way to heal my aching soul
I\u2019m drawing the lines on the floor
So it will not hurt anymore
My flesh is weak, my end is near
I\u2019m at my final chapter
The death itself I do not fear,
I fear the void after
The devil has come to my call
The deal is sealed with my soul

Evoke a demon by its name
A soul exchanged to ease the pain
I leave my old form in the past
I will be free now at last

The devil is eternal
He is a part of space and time
My suffering\u2019s internal
And now we\u2019ve swapped his soul for mine
And I will surpass death and pain
The time will die, I\u2019ll remain
I walk across the battlefields
Across the salted soil
A thousand years - it will heal
A million - it will boil
The time of man passes by
My new flesh refuses to die

Evoke a demon by its name
A soul exchanged to ease the pain
I leave my old form in the past
I will be free now at last

The time is ending, it fades away
Its end is witnessed by the chosen few
The smallest particle is the last to stay
And then the universe is born anew
The sorrowed tale repeats again
The age of man is rising from the ash
I hear myself calling my new name
To swap my soul back into my dying flesh

I find myself back
Returned to my old self
The time loops forever
And here I am again
I\u2019m back to my time and my place
With an insane smile on my face
Now I\u2019ve seen the end of time
I fear death no longer
The fear of death is gone away
Replaced with something stronger
I\u2019m laughing, deranged, on the floor
I\u2019m scared of eternity more

Evoke a demon by its name
A soul exchanged to ease the pain
I leave my old form in the past
I will be free now at last
`},Hu=pC;var mC={id:"execution-is-fun",name:["Execution is fun!"],albums:["execution-is-fun"],text:`
Execution\u2019s fun
I think that you should come
To loose yourself and to relax
Just put your head under my axe
Execution\u2019s fun
I think you should try one
To put your mind back on track
I\u2019ll swing my axe right through your neck

Execution\u2019s fun
And now the pain is gone
You will live forever after
And you\u2019ll give us a little laughter
Execution\u2019s fun
It\u2019s not for everyone
All your records must be clean
And you must be at least eighteen

Bring me, bring me volunteers
Bring them, bring them, let me see
Help me, help me put my hood on
Hand my giant axe to me
Help me, help me, help me stand up
Raise me, raise me to my feet
Help me, help me, help me swing it
Execution is complete!

Execution\u2019s fast
A moment that will last
Think of joy that you will bring
You\u2019ll entertain your dear king
Chains are not free
So plan accordingly
Feel the fangs of open market
We now have PR department

Bring me, bring me volunteers
Bring them, bring them, let me see
Help me, help me put my hood on
Hand my giant axe to me
Help me, help me, help me stand up
Raise me, raise me to my feet
Help me, help me, help me swing it
Execution is complete!

King is crazy, King is mad
Ruling from the deathbed
He enjoys his bed and cushions
And the morning executions

King is crazy, King is mad
King wants just to see you dead
Life if just a bad illusion
Try my permanent solution

All prisoners are dead
So we take you instead
It is a show to see
So bring your family
Executions fun
Oh god, what have I done...

Bring me, bring me volunteers
Bring them, bring them, let me see
Help me, help me put my hood on
Hand my giant axe to me
Help me, help me, help me stand up
Raise me, raise me to my feet
Help me, help me, help me swing it
Execution is complete!

Bring me, bring me volunteers
Bring them, bring them, let me see
Help me, help me put my hood on
Hand my giant axe to me
Help me, help me, help me stand up
Raise me, raise me to my feet
Help me, help me, help me swing it
Execution is complete!
`},$u=mC;var gC={id:"fire-plague-and-locust",name:["Fire, Plague and Locust"],albums:["fire-plague-and-locust","arrival-of-a-train"],text:`
First thing in the morning
Check if the world is burning
It easily can change overnight
Check if the symptom lingers
Count your teeth and fingers
Looks like you are doing alright

The smoke is rising higher
And everything's on fire
And when it dies, the plague will return
You gotta stand your ground
And build a fence around
And pray the barbed wire won't burn

When doubting your choices
You talk to inner voices
It is your way of coping with stress
Is someone coming here?
Maybe interfere?
They all had it coming, I guess

Strong men make good times!
Don't ask me how, it's science!
I\u2019m fighting for the whole human race
And future generations
Will launch space stations
I only need to crush someone\u2019s face

Fire, plague and locust
Are spreading as you are standing still
It all will make you stronger
Just as long as you don't kill
Yourself

You have
A gun
A head
Go mad

Count all senses
As your expenses
And leave your shelter
In disarray
You're almost hopeless
The only hope is
To try to live or
To die another day

Remember the beginning?
We thought that we were winning
Now all you want is to die in peace
In the abandoned fair
You dream of clean air
You also dream of hating your kids

You all are weak and spoiled
Your oceans aren't boiled
Your ice caps are not going to melt
Your whole generation
Is blight upon the nation
If only you just knew how it felt

When fire, plague and locust
Are spreading as you are standing still
It all will make you stronger
Just as long as you don't kill
Yourself

You have
A gun
A head
Go mad
`},Uu=gC;var yC={id:"how-nightmares-die",name:["How Nightmares Die"],albums:["how-nightmares-die"],text:`
Lightning outside my window
Shines on her face
Nightmares are my specialty
She is my latest case
Every time she goes to sleep
She dreams of death and pain
I will help you, don\u2019t you weep
I'll cure your damaged brain

You will have to sign here
Safety first
You OK with brain drilling?
Safety first

She is sleeping terrified,
Screaming in her bed
I will steal her bad dreams through
Wires in her head
Silver bullet loaded gun will
Sing them lullaby
Pull the trigger and it's done -
That's how nightmares die!

Pockets filled with spare bullets
Safety first
Sleeping pills are non allergic
Safety first

Our heads are connected
Our dreams are intertwined
I'm ready, I welcome
The horrors of her mind
The moment of transfer
I'm doing as rehearsed
A shame I forgot to
Switch off the safety first

Lightning outside my window
Outshouts my screams
I have suffered all these years
Hosting her bad dreams
Every time I go to sleep
I dream of death and pain
Silver bullets that I keep
Will cure my damaged brain

Check if no one is around
Safety first
Point the gun and pull a trigger
Safety first
`},zu=yC;var vC={id:"hypnosis",name:["Hypnosis"],albums:["mastermind"],text:`
A human mind - a fragile thing
Its walls are weaker than you think
You lock your door, you think you\u2019re safe
And all the people think the same

No mind is ever locked for me
My voice is now my masterkey
I open doors, I crack the codes
And put a spell

And there is nothing you can hide
I\u2019m in control once I\u2019m inside
You\u2019re just a vessel for my will,
An empty shell

I am a scholar, my mentor is
A wise and famous hypnotist
I feel the power, the magic force
Just like in his online course

This is the perfect place and time
To commit a perfect crime
You\u2019d better not try to resist
Enjoy the ride

No one around, the time is right
So let me step into the light
It only takes a magic phrase
To break your mind

Hypnotize, hypnotize, watch the spirals in my eyes
Hypnotize, hypnotize, mesmerise
Hypnotize, hypnotize, play along and play it nice
Hypnotize, hypnotize, look into my eyes

It should be working, I know it is
Or I am not a hypnotist!
I have a plan, you\u2019ve got a role
I put you on remote control

Stop giving me a silly stare
Now go away like you don't care
I know a spell, I know how to
Set you ablaze

For now consider yourself free
I have a night ahead of me
And you won\u2019t be the last to hear
My magic phrase

Hypnotize, hypnotize, watch the spirals in my eyes
Hypnotize, hypnotize, mesmerise
Hypnotize, hypnotize, play along and play it nice
Hypnotize, hypnotize, look into my eyes

Two days have passed, now I'm prepared
Nervous a bit, a little scared
I called for them, my slaves are here
I am the master! The puppeteer!

But I have no idea how
My mentor is their master now
They all have brands just like he has
Across his face

This is not right, this is not fair!
They are giving me a blinkless stare!
And chanting, chanting my beloved
Magic phrase

Hypnotize, hypnotize, watch the spirals in my eyes
Hypnotize, hypnotize, mesmerise
Hypnotize, hypnotize, play along and play it nice
Hypnotize, hypnotize, look into my eyes
`},Wu=vC;var wC={id:"im-coming-for-your-soul",name:["I`m Coming for Your Soul"],albums:["mastermind"],text:`
The crowd is a monster, It\u2019s drinking and laughing
It's loudly discussing Your age
But you are above it, You look like a goddess
When you come onto The stage

The crowd is violent, But it goes silent
It hungrily looks at Your skin
You heartbeat is loud. No one can put out
The flame that you\u2019ve brought here Within

The showtime is over You rush past the crowd
You feel like you\u2019ve been Torn apart
You lie in bed with A half-finished poem
Breathing inside in Your heart

I\u2019m up in the attic A lonely fanatic
Your biggest admirer And fan
You\xB4re smart and you know it, You\u2019re more than a poet
And I\u2019m even less than A man

Do you know that everybody
Is coming just to see your body
I am not like them at all
I am coming, I am coming...

I am coming for your soul

For your soul, for your soul
I am coming for your soul
For your soul, for your soul
I\u2019m coming for your soul
For your soul, for your soul
For your little ugly soul
For your soul, for your soul
I\u2019m coming for your soul

A bar in the uptown, A detuned piano
I\u2019m waiting for you Every day
All drunks and all patrons, All thieves and all beggars
Keep singing along when You play

You've got skill and passion, But you too old-fashioned
And you\u2019ve got nothing To sell
It\u2019s not you desire. Your biggest admirer -
A soul-sucking demon From hell

All of them are coming here
Just to drink a glass of beer
I am not like them at all
I am coming, I am coming...

I am coming for your soul

For your soul, for your soul
I am coming for your soul
For your soul, for your soul
I\u2019m coming for your soul
For your soul, for your soul
For your little ugly soul
For your soul, for your soul
I\u2019m coming for your soul

Kiss your sorry skill goodbye
After I have sucked you dry
I belive that you will fail
Any minute

And I know it for a fact
There is no way you can act
Read your lines like you care,
Like you mean it!

Fame and money are so sweet
Now you\u2019ve got no soul to eat
I\u2019m afraid that I misjudged
It\u2019s importance

Have no worries, have no fear
At the peak of your career
I won't be the one to ruin
Your performance

I have seen that everywhere
You will die, no one will care
Let me just fulfill my role
I am coming, I am coming...

I am coming for your soul

For your soul, for your soul
I am coming for your soul
For your soul, for your soul
I\u2019m coming for your soul
For your soul, for your soul
For your little ugly soul
For your soul, for your soul
I\u2019m coming for your soul
`},Gu=wC;var bC={id:"little-princess",name:["Little Princess"],albums:["burn-the-circus"],text:`
Little princess in the forest
With so strange hypnotic eyes
She will reverse the fairy tale
And in the end, she\u2019ll have to die
And at midnight you can see her
In the corner of your eye
As she claims souls of children
Who were born on starless nights

And after all the townsfolk have chorused
We leave unwanted children in the forest

Little princess in the forest
Wears antlers on her head
And her children bring her flowers
Which hold souls of the dead
They corrupt the fairy tale
They are laughing in reverse
They should all go down in flame
If we are to break this curse

The fire burning sounded like a song
And all the little children sang along

Guide them and leave them
You'll never see them
And their eyes will
Turn solid black
Won\u2019t hear them creeping
You will be sleeping
When your unwanted
Start coming back

Little princess in the forest
Has a meathook for an arm
And her tears smell of poison
If she ever comes to harm
And she cried for her children
When they died and went to hell
And the flowers caught on fire
Where her poisoned tears fell

Little princess in the forest
With so strange hypnotic eyes
If we ever to survive this
Little princess has to die

Guide them and leave them
You'll never see them
And their eyes will
Turn solid black
Won\u2019t hear them creeping
You will be sleeping
When your unwanted
Start coming back

Prayers are hollow
Darkness will follow
When your unwanted
Will break through the doors
Lost and abandoned
Your life has ended
The last thing you hear
Is your scream reversed
`},qu=bC;var DC={id:"lovely-host",name:["Lovely Host"],albums:["tardigrade-inferno"],text:`
Please, please, please, please, please don't kill me
Just give my life a chance
And little place inside you
For me to play and dance

I will live inside  your body
will live inside your mind
We'll grow together and our
Fates will be intertwined

You are such a lovely person
You are a lovely host
I will do my best to serve you
Rest assured and of course

I will change the way you acting
The way you talk and think
Empower and encourage
You to do anything

I'm alive!
I survived!
You are such
A lovely host!

Remember that cricket
You saw long time ago?
It jumped into the ocean
And drowned down below

All crickets die in water
Then what was it about?
Maybe something was inside it
And that something wanted out?

Take a look at this blue marble
You recognize the place?
You floating above it
You are in outer space

Now you have a job in NASA
You have fulfilled your dream
So far away from home
No one can hear you scream

You fleeing from the station
You almost out of air
You wonder why you doing it
And why do even care?

You are a lovely person
And I'm your silent guide
I'm sorry for the pain that is
Crescendoing inside

Remember that cricket
You saw a long ago?
Maybe something was inside it
And that something had to go?

I'm alive!
I survived!
You were such
A lovely host!
`},Yu=DC;var IC={id:"marmalade",name:["Marmalade"],albums:["mastermind"],text:`
Stretching, filing, against her skin
Blessed are those who are not kin
In sin, we breathe; in sex, we tie
Duct tape her legs to the red sky
Foolsome flesh allowances
The pansies raided the pantry of
Gabardine dreams, promiscuous
Delight, deny not the flavor

Custard dreams
Abusing, musing
Marmalade flesh
Naked spread am I, am I

Actors of the tragic phantom
Extend your legs to great Saturn
Brown table tops scream for cover
At the sight of your new lover

If today I die
And can't deny
The poison chosen
For tonight, tonight

Borrowed dreams, hollowed reveries
Metal pillows, pewter yellows
Furry roadkill, house on the hill
Pouring gravy on her thighs still

If today I die
And can't deny
The poison chosen
For tonight, tonight
`},Zu=IC;var CC={id:"mastermind",name:["Mastermind"],albums:["mastermind"],text:`
The crazy scientist AKA Genius
Is carrying a bucket of ice
He has spent his last years back in his warehouse
Building a doomsday device
It's rusty and noisy,  it sparks and it's smoking ,
And powered by an exercise bike
All the equipment is turned to eleven
Waiting for the lightning to strike

I truly am a genius
I am the mastermind
With my machines I'll bring you to your knees
I will rule over mankind

The gears are turning and the hamsters are running
Powering deathmetal rays
It's storming and raining, but there is no lightning
And there will be no storms in days
Bored and distracted, he breaks it all down
Just like he did in the past
It's time to move on, to build a new one
Right in the place of the last

I truly am a genius
I am the mastermind
With my machines I'll bring you to your knees
I will rule over mankind

His tools are all  broken, and warehouse is silent
He is crying, collapsed on a floor
\u201CWhat is the point of a doomsday device
I don't want to rule anymore \u201C
But there is one final and adequate challenge
For a brilliant mind in his prime,
With the power of science, the one mastermind,
Is traveling backwards in time

A crazy scientist AKA Genius
Is carrying a bucket of ice
The beer is cold. He, lo and behold,
Won\u2019t make the same mistake twice.
Forget all the deathrays and world domination
He is studying the game of chess!
The world will be safe while he is playing
With various degrees of success

I truly am a genius
I am the mastermind
I have just began, and after I\u2019m done
You will find this world redefined
`},Ku=CC;var EC={id:"misery",name:["Misery"],albums:[],text:`
The drunken sailors come by
Desperate lost and frisky
Fat moms with ugly children
The smell of sweat and whiskey

The sluts are shoving aggressively
The freaks just want to start
And all the crowd is waiting
For the Circus of the dark
Of the dark

They laugh and cry and devastate and penetrate the minds of others
And these morbid angels clowns and fidgets are accepting their Misery
And the vile, self-destruction
The beauty of the nature
Exciting part of human world

So everyone is watching
They puke and bleed and fart
It\u2019s part of their damnation
They live into the farce

If you\u2019re addicted to something
Or maybe lost your path
You're coming to our show
To see the beauty of the dark
Of the dark

They laugh and cry and devastate and penetrate the minds of others
And these morbid angels clowns and fidgets are accepting their Misery
And the vile, self-destruction
The beauty of the nature
Exciting part of human world
`},Qu=EC;var xC={id:"nailed-to-the-ferris-wheel",name:["Nailed to the Ferris Wheel"],albums:["burn-the-circus"],text:`
Look how it turns around
Step on the fairground
Carts on the stainless steel
Go ride my ferris wheel

Good evening m\u2019am, Good evening sir
So glad you've come to me
Oh, may I ask, how\u2019d I deserve
Oh, such a company?

I'm glad that I have found
A pair of you around
I've been depressed, I've looked inside
And look what I have found
I'll build a piece of art
And you will be its part
I'm nailing you to a broken wheel
To fix my broken heart

Screaming as it turns around
Bleeding on the fairground
Flesh on the stainless steel
Nailed to the ferris wheel

The fair is closed, The circus - burned
Along with the trampoline
And who am I: a tortured soul
Or just a drama queen?

My wheel is turning fast
I'm not going to last
And every minute of my life
Is tainted by my past
This symbol is displaying
A life that I had failed
I want to leave behind me something
Something that I've nailed

Screaming as it turns around
Bleeding on the fairground
Flesh on the stainless steel
Nailed to the ferris wheel

Shattered my mind!
Left me behind!
Is your ringmaster
Dying tonight?
Listen to this!
The final piece!
Let your ringmaster
Finally die in peace...

I want to make my dreams come true
And from this premise comes the rest
I tried so hard and failed hard
Doing my sincere best
To be a man I want to be
And knowing that I never will
The closest to a fair chance
Is spinning the samsara wheel

I wonder why, I wonder why
You beg to let you die
I wonder if, I wonder if
You do not want to live

To hell with your opinions
It is the work of genius
A monument to a failed life
Is not for your convenience
I could just let you free
But I want you to see
That I will never die alone
I'm taking you with me

Screaming as it turns around
Bleeding on the fairground
Flesh on the stainless steel
Nailed to the ferris wheel
`},Ju=xC;var SC={id:"rats",name:["Rats"],albums:["burn-the-circus"],text:`
Big Rat City is in fear
Rats began to disappear
Midnight killer leaves no trails -
Tears out whiskers, cuts off tails

The world famous rat detective
Has already took the case
Photos taken, dots connected
He is pretty sure it was rats!

Dying screams are heard at night
On the streets of broken lights
Rat fatale is found dead
Small bite marks are on her head

The world famous rat detective
Has already took the case
Photos taken, dots connected
He is pretty sure it was rats!

Running, running, chasing tails
He picked up a faint scent
And he found the darkest corner
And he\u2019s ready to descent

Take a look
Under the floor
Behind the walls
And you will find

Rats!
Rats!
Rats! Rats! Rats!

Running, running, chasing tails
Now you sure got all the facts
You have found your Midnight killer
You\u2019ve discovered fractal rats

Even smaller
Even faster
There\u2019s no ending
And no master

Smaller rats have smaller rats
A never-ending fractal figure
If it truly has no end
Does it mean that there are bigger?

The world famous rat detective
Has already took the case
Photos taken, dots connected
He is pretty sure it was rats!
`},Xu=SC;var MC={id:"ringmaster-has-to-die",name:["Ringmaster has to Die"],albums:["ringmaster-has-to-die","clockwork-god","burn-the-circus"],text:`
It's an absurdity, it's his fault
It was just an innocent somersault
With hands tied and torn out hair
Down my magnificent office stairs

I just came and saw this scene -
He was drinking gasoline,
Then he put himself on fire
Right before it, he was fired

Hope you die, I hope you would
But I don't want to ruin the mood
Can you see with your own heart
How the audience love this part

When we're on the stage
You will hear our cry
Trapped inside the cage
Hoping you would die
Ringmaster, ringmaster
My life is a disaster
Forgive me, it\u2019s over
Ringmaster has to die

So you want me to step down?
Be replaced by a random clown?
And the answer\u2019s on the surface
Only I can run this circus
Who can run it if not me?
We don\u2019t need uncertainties
Clowns and jugglers will do fine
Suit yourselves after I die

When we're on the stage
You will hear our cry
Trapped inside the cage
Hoping you would die
Ringmaster, ringmaster
My life is a disaster
Forgive me, it\u2019s over
Ringmaster has to die

Hope I die? I never will
The circus will burn, I\u2019ll be standing still
Can you see with your own heart
Now we are ready for the final part

It's an absurdity, it's not my fault
Half of the circus just died of cold
I heard that you love me here less and less
So I\u2019ve prepared for you something else

First time on the stage
Fighting for their lives
Locked inside the cage
What will they contrive
To survive?

Ringmaster, ringmaster
My life is a mess
And every time I close my eyes
I hope it would hurt less
And we\u2019ve been trapped here for some time
It feels like thousand years
And every time I close my eyes
I hope you disappear
Please just die

When we're on the stage
You will hear our cry
Trapped inside the cage
Hoping you would die
Ringmaster, ringmaster
My life is a disaster
Forgive me, it\u2019s over
Ringmaster has to die
`},el=MC;var TC={id:"splinter-in-the-eye",name:["Splinter in the Eye"],albums:["burn-the-circus"],text:`
Tell them \u201Cbaby don\u2019t you cry\u201D
Pat them on the shoulder
Put the splinter in the eye
And fuck with the beholder
Everything will be alright
Honey, don\u2019t you worry
We will kill the god tonight
Better safe than sorry

I just sang the devil\u2019s song
God gave me a warning
Fuck the rights and fuck the wrongs
We have until the morning
And tomorrow we\u2019ll be dead
Your smile is disarming
Fuck beholder in the head
Judgment day is coming

I have tried all of the stages
Bartering and begging
I have been like this for ages
Why am I still shaking
Time and money, I got neither
And it\u2019s getting colder
There is fear and beauty in the
Eye of the beholder

I can almost see it clear
Splinter notwithstanding
We will fucking disappear
There's no happy ending
You have my remote control
Now aim at where my heart is
I present my fucking soul
Welcome to the darkness

See the splinter in my eye
What have we done?
Is it best for us to die?
Tell no one

See how many fucks I\u2019m giving
As I\u2019m getting older
There is darkness hidden in the
Eye of the beholder
I see now through many lies
Now my mind is clear
Fuck beholder in the eye
Lick a broken mirror

Let me see your body naked
Stripped of the illusion
Take part of the problem make it
Part of the solution
Let your good side rest in peace
In the iron maiden
Crawling on our hands and knees
Keep calm and hail satan

See the splinter in my eye
What have we done?
Is it best for us to die?
Tell no one

See the fires in the sky?
What have we done?
All is lost, the end is nigh
We killed the sun

Burn the splinter in my eye!
Make it undone!
Is that something we can hide?
Tell no one
`},tl=TC;var _C={id:"spooky-scary-skeletons",name:["Spooky Scary Skeletons"],albums:["spooky-scary-skeletons"],text:`
Spooky, scary skeletons
Send shivers down your spine
Shrieking skulls will shock your soul
Seal your doom tonight

Spooky, scary skeletons
Speak with such a screech
You'll shake and shudder in surprise
When you hear these zombies shriek

We're sorry skeletons, you're so misunderstood
You only want to socialize, but I don't think we should

'Cause spooky, scary skeletons
Shout startling, shrilly screams
They'll sneak from their sarcophagus
And just won't leave you be

Spirits supernatural are shy what's all the fuss?
But bags of bones seem so unsafe, it's semi-serious

Spooky, scary skeletons
Are silly all the same
They'll smile and scrabble slowly by
And drive you so insane

Sticks and stones will break your bones
They seldom let you snooze
Spooky, scary skeletons
Will wake you with a boo!
`},nl=_C;var AC={id:"the-worst-of-me",name:["The Worst of Me"],albums:["the-worst-of-me"],text:`
I was walking through the park
Fast and light
And It felt so nice and cool
Then I met the pretty duck
I said "Hi"
He reacted oh, so cruel

What have I done to you, creature?
I could barely whisper
"Darling, why?
Please, do not do this!"

I don't want to hurt you
You don't need to quack
Let me go, leave me
You stupid little duck

Violence is the shortest way
To bring out the worst of me
So you should better run away
Your payback is gonna be severe

Suddenly I lost my mind
All turned black
When the wrathful bird attacked
I remember wooden stick
Hard enough
To beat up the nasty duck

Violence is the shortest way
To bring out the worst of me
So you should better run away
Your payback is gonna be severe

I'll remember
I'll remember
I'll remember
I'll remember
You are bleeding
You are dead
I'll remember
'till my death

Fell into the puddle
He's bleeding from his ear
I can not take my anger back
There are no more nice ducks here
Hate me hate me I earned this
Now I see it clear
This was the last duck - what a twist
I bury my heart near

Violence is the shortest way
To bring out the worst of me
So you should better run away
Your payback is gonna be

I feel so bad, I feel so low
My soul became a salty flow
His flesh will rot and bones will glow
Doesn't matter but I know
`},rl=AC;var kC={id:"tick-tock",name:["Tick-Tock"],albums:["burn-the-circus"],text:`
Tick-tock, tick-tock
Time is up, death-o-clock
When the time is ticking
Your lifetime is shrinking
Tick-tock, tick-tock
Sun is up, get to work
Better start working
Or you'll hate yourself

I know exactly what the time is
I do not need no fucking clocks
I hear the footsteps of death behind me
They sound like ticking, they never stop
Every second I am not working
I feel I\u2019m wasting my finite time
The clocks are ticking, the clocks are talking
I almost hear them in my mind

Tick-tock, tick-tock
Time is up, death-o-clock
When the time is ticking
Your lifetime is shrinking
Tick-tock, tick-tock
Sun is up, get to work
Better start working
Or you'll hate yourself

And after every action
My soul shrinks in size
A fraction of a fraction
Dies

I tried to follow the dream I\u2019d chosen -
I was as lost as I was before
I tried to stop, tried to smell the roses
They smelled like tension, and nothing more
The time is slipping right through my fingers
Something\u2019s broken inside my brain
The time is passing, and I can feel this
If I were me I would go insane

Tick-tock, tick-tock
Time is up, death-o-clock
When the time is ticking
Your lifetime is shrinking
Tick-tock, tick-tock
Sun is up, get to work
Better start working
Or you'll hate yourself

And after every action
My soul shrinks in size
A fraction of a fraction
Dies

Tick-tock, tick-tock
Deep inside something broke
Life could be fine
If you\u2019ve got the time
Tick-tock, tick-tock
Time is up, death-o-clock
Better start working
Like it\u2019s your final day

By counting all your fears
You will go down fast
In hundred thousand years
My soul will turn to dust
The plethora of choices
To live or chase my dream
No matter what the choice is
I\u2019ll hate myself for it

Tick-tock, tick-tock
Time is up, death-o-clock
When the time is ticking
Your lifetime is shrinking
Tick-tock, tick-tock
Sun is up, get to work
Better start working
Or you'll hear

Tick-tock, tick-tock
Deep inside something broke
Life could be fine
If you\u2019ve got the time
Tick-tock, tick-tock
Sun is up, get to work
Better start working
Or you'll hate yourself

And after every action
My soul shrinks in size
A fraction of a fraction
Dies

And every night I hear
The ticking in my head
When I wake up I feel
Dead

Tick-tock, tick-tock
Everything is too long
I am simply waiting
Waiting for my death
Tick-tock, tick-tock
How much time you have left
Now you\u2019ve got four minutes,
Thirty seconds less
`},ol=kC;var NC={id:"underwater-valentine",name:["Underwater Valentine"],albums:["tardigrade-inferno"],text:`
Lady, please Take my hand
I have strong and steady grip
Let me take You with me
To my humble pirate ship

We will sit Down between
Crates with rum and turpentine
Will you be Here with me
Will you be my valentine?

Have no fear for sea devil
You\u2019re my damsel in distress
We will sail into sunset
Then it\u2019s time to undress
Orlop deck is waiting for us
Down below the waterline
I will be with you forever
I\u2019m your underwater valentine

Take a look At my hook
Bought it on a pirate sale
Lost my arm In a fight
With a giant killer whale

We can do What we want
Anchor up and sail away
We can watch a TV show
In my humble pirate bay

Have no fear for sea devil
You\u2019re my damsel in distress
We will sail into sunset
Then it\u2019s time to undress
Orlop deck is waiting for us
Down below the waterline
I will be with you forever
I\u2019m your underwater valentine

Lady please, Not the neck
You have strong and steady grip
I will stay away from you
And your gorgeous pirate ship

Took my hook Told me to
Throw myself over the rail
Now I sleep With my arm
Deep inside a killer whale

Have no fear for sea devil,
Whales - that\u2019s your final test
First it eats your handless body
Then it\u2019s time to digest
You are sleeping with my treasure
Down below the waterline
I will haunt you forever.
I\u2019m your underwater valentine
`},il=NC;var RC={id:"we-are-number-one",name:["We Are Number One"],albums:["mastermind"],text:`
We are number one!

Now listen closely
Here's a little lesson in trickery
This is going down in history
If you wanna be a Villain Number One
You have to chase a superhero on the run
Just follow my moves, and sneak around
Be careful not to make a sound

Ha ha ha
Now look at this net, that I just found
When I say go, be ready to throw
Go!
Let's try something else

Now watch and learn, here's the deal
He'll slip and slide on this banana peel!
Ha ha ha
What are you doing!?
`},sl=RC;var OC={id:"wearing-white",name:["Wearing White"],albums:["burn-the-circus"],text:`
Come out en masse, dance on the grass
And feel the sunlight on your skin
It's nothing but pure joy and love
And everything is colored green
My microscope and stethoscope
Will leave you greatly terrified
I'll check your gums, I'll check your lungs
I'm scary, and I'm wearing white

The sun is bright, you feel alright
I know exactly how it feels
But just your mood will do no good
You need your medicine and pills
Lives are at stake, I will not break
The Hippocratic Oath I gave
Bark from a tree and herbal tea
Will lead you straight into the grave

I smell your fear, and I feel tremors in your knees
And I can say in Latin the name of your disease
It\u2019s all unnatural what we will do tonight
I smell of medicine, I stand here, wearing white

Forget your plans, I\u2019ve got your scans
And I\u2019m afraid I have bad news
You feel alright, but you will die
Unless we stuff you full of tubes
It will be worse, the choice is yours
The time is up, the stakes are high
But know: it's wrong to live too long
And it is natural to die

I smell your fear, and I feel tremors in your knees
And I can say in Latin the name of your disease
It\u2019s all unnatural what we will do tonight
I smell of medicine, I stand here, wearing white

You will be cured by any means
Ignore your white coat phobia
The sterile tools and cold machines
Are coded as dystopia
Open your eyes - you could\u2019ve died
Look at yourself - you are feeling alright
Now go and spread your insanity
Go on and preach your humanity

I smell your fear, and I feel tremors in your knees
And I can say in Latin the name of your disease
I could choose green, but I chose medicine instead
I\u2019m wearing white because white goes best with red
`},al=OC;var PC={id:"write-with-blood",name:["Write with Blood"],albums:["the-worst-of-me"],text:`
You feel weaker with every passing day
Feel new pain - you know it\u2019s here to stay
All the people - you know they feel the same
Growing older and going less insane

Put your hat on and run into the mud
Trace the killer by following the blood
You will find new evidence and hints
Rip and tear and take the fingerprints

And the only thing you\u2019ll need -
Not to be afraid to bleed
Put your blood inside the story
Story writes itself indeed

Do you see it, do you not?
You will die and you will rot
If you want to write your story
Write your story with your blood

Rain is pouring down on your aching hip
Go home early - you need some extra sleep
Have a nightmare about drowning down
Bleed a little, enough to write it down


Grab your helmet and dive into the deep
Sneak right into the King of Herrings keep
Rip its heart out! And steal the coral crown!
Drain the ocean, so you will never drown

And the only thing you\u2019ll need -
Not to be afraid to bleed
Put your blood inside the story
Story writes itself indeed

Do you see it, do you not?
You will die and you will rot
If you want to live forever
Write your story with your blood

Write your story with your blood

Try to find a perfect rhyme online
To tell a story for the millionth time
You have neither strength nor skill, nor time
And every day you feel like dead or dying

Bury deep your head, it will grow roots
Your body will turn into trees and fruits
And birds and bees will feed upon your flesh
The Sun will die and turn them into ash

Blood from your veins
Will go in vain
All that remains
Is for you to try again

And the only thing you\u2019ll need -
Not to be afraid to bleed
Put your blood inside the story
Story writes itself indeed

Do you see it, do you not?
You will die and you will rot
Do you want to live forever?
Write your story with your blood
`},ul=PC;var pm={[Tu.id]:Tu,[_u.id]:_u,[Au.id]:Au,[ku.id]:ku,[Nu.id]:Nu,[Ru.id]:Ru,[Ou.id]:Ou,[Pu.id]:Pu,[Fu.id]:Fu,[Lu.id]:Lu,[ju.id]:ju,[Vu.id]:Vu,[Bu.id]:Bu,[Hu.id]:Hu,[$u.id]:$u,[Uu.id]:Uu,[zu.id]:zu,[Wu.id]:Wu,[Gu.id]:Gu,[qu.id]:qu,[Yu.id]:Yu,[Zu.id]:Zu,[Ku.id]:Ku,[Ju.id]:Ju,[Xu.id]:Xu,[el.id]:el,[tl.id]:tl,[nl.id]:nl,[rl.id]:rl,[ol.id]:ol,[il.id]:il,[sl.id]:sl,[al.id]:al,[ul.id]:ul,[Qu.id]:Qu};var FC={id:"tardigrade_inferno",name:"Tardigrade Inferno",image:"/artist/tardigrade_inferno/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/12ZMAQkYyLSuNLvjbySISC",youtube:"https://www.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA",youtubeMusic:"https://music.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA",yandexMusic:"https://music.yandex.ru/artist/6761875",bandcamp:"https://tardigradeinferno.bandcamp.com/",appleMusic:"https://music.apple.com/ru/artist/tardigrade-inferno/1448941163"},albums:["tardigrade-inferno","execution-is-fun","mastermind","how-nightmares-die","the-worst-of-me","spooky-scary-skeletons","arrival-of-a-train-single","fire-plague-and-locust","arrival-of-a-train","ringmaster-has-to-die","clockwork-god","burn-the-circus"]},si={artist:FC,albums:hm,songs:pm};var LC={id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440",year:1987,folder:"/artist/master/albums/master_1987.jpg",songs:[{name:"\u041C\u0430\u0441\u0442\u0435\u0440"},{name:"\u0411\u0435\u0440\u0435\u0433\u0438\u0441\u044C!"},{name:"\u0420\u0443\u043A\u0438 \u041F\u0440\u043E\u0447\u044C!"},{name:"\u0429\u0438\u0442 \u0418 \u041C\u0435\u0447"},{name:"\u0415\u0449\u0435 \u0420\u0430\u0437 \u041D\u043E\u0447\u044C"},{name:"\u0412\u043E\u043B\u044F \u0418 \u0420\u0430\u0437\u0443\u043C"},{name:"\u0412\u0441\u0442\u0430\u043D\u044C, \u0421\u0442\u0440\u0430\u0445 \u041F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439"},{name:"\u0425\u0440\u0430\u043D\u0438 \u041C\u0435\u043D\u044F"},{name:"\u041A\u0442\u043E \u041A\u043E\u0433\u043E ?"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041C\u0430\u0441\u0442\u0435\u0440" \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u043B\u0441\u044F \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F". \u0424\u0438\u0440\u043C\u0430 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F" \u043F\u043E\u043C\u0435\u0449\u0430\u043B\u0430\u0441\u044C \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u043A\u043E\u0441\u0442\u0435\u043B\u0430 \u043D\u0430 \u0443\u043B\u0438\u0446\u0435 \u0421\u0442\u0430\u043D\u043A\u0435\u0432\u0438\u0447\u0430, \u0432\u043E \u0434\u0432\u043E\u0440\u0435, \u0433\u0434\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B\u0441\u044F \u0430\u0432\u0442\u043E\u0431\u0443\u0441 \u0422\u043E\u043D\u0432\u0430\u0433\u0438\u043D \u0441\u043E \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u043E\u0439. \u0418\u043C\u0435\u043D\u043D\u043E \u0432 \u043D\u0435\u043C \u0431\u044B\u043B \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0438 \u0441\u0432\u0435\u0434\u0435\u043D \u043F\u0435\u0440\u0432\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C. \u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0442\u043E\u0436\u0435 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "\u041C\u0415\u041B\u041E\u0414\u0418\u042F" \u0432 1987 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043D\u0438\u043B\u0435 \u0438 \u0431\u044B\u043B \u043F\u0440\u043E\u0434\u0430\u043D \u0442\u0438\u0440\u0430\u0436\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u0412 1995 \u0433\u043E\u0434\u0443 \u0430\u043B\u044C\u0431\u043E\u043C \u043F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D \u043D\u0430 CD \u0444\u0438\u0440\u043C\u043E\u0439 \u0421\u041E\u042E\u0417.
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B          \u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430
\u0418.\u041C\u043E\u043B\u0447\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435     \u041A.\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
  `},ll=LC;var jC={id:"s-petlyoj-na-shee",name:"\u0421 \u043F\u0435\u0442\u043B\u0451\u0439 \u043D\u0430 \u0448\u0435\u0435",year:1989,folder:"/artist/master/albums/spnsh_1989.jpg",songs:[{name:"\u041D\u0435 \u0425\u043E\u0442\u0438\u043C!"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"\u041C\u044B \u041D\u0435 \u0420\u0430\u0431\u044B?"},{name:"\u041A\u043E\u0433\u0434\u0430 \u042F \u0423\u043C\u0440\u0443..."},{name:"\u0411\u043E\u0436\u0435, \u0425\u0440\u0430\u043D\u0438 \u041D\u0430\u0448\u0443 \u0417\u043B\u043E\u0441\u0442\u044C"},{name:"\u041D\u0430\u043F\u043B\u0435\u0432\u0430\u0442\u044C!"},{name:"\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C"},{name:"2000 \u041B\u0435\u0442(\u0418\u0443\u0434\u0430)"},{name:"\u0412\u043E\u0439\u043D\u0430"},{name:"\u0421\u0435\u043C\u044C \u041A\u0440\u0443\u0433\u043E\u0432 \u0410\u0434\u0430"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u0421 \u041F\u0435\u0442\u043B\u0435\u0439 \u041D\u0430 \u0428\u0435\u0435" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u0430 \u042E.\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u041D\u043E\u0432\u044B\u0435 \u041C\u044B\u0442\u0438\u0449\u0438. \u0412 \u0442\u0440\u0435\u0445\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0443\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u042E.\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430 \u0431\u044B\u043B\u0430 \u043F\u0440\u0438\u0432\u0435\u0437\u0435\u043D\u0430 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0438 \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u0438\u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043C\u0430\u0433\u043D\u0438\u0442\u043E\u0444\u043E\u043D. \u042D\u0442\u043E \u0431\u044B\u043B \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u043F\u044B\u0442 \u0437\u0430\u043F\u0438\u0441\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u0438\u043B\u0430\u043C\u0438. \u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0432 1989 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043D\u0438\u043B\u0435 \u0444\u0438\u0440\u043C\u043E\u0439 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F", \u0438 \u0431\u044B\u043B \u043F\u0440\u043E\u0434\u0430\u043D \u0442\u0438\u0440\u0430\u0436\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u0434\u0432\u0443\u0445 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u0410\u043B\u044C\u0431\u043E\u043C \u0431\u044B\u043B \u043F\u0440\u0438\u0437\u043D\u0430\u043D \u043B\u0443\u0447\u0448\u0438\u043C \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u043C \u0433\u043E\u0434\u0430. \u0412 1995 \u0433\u043E\u0434\u0443 \u0431\u044B\u043B \u043F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D \u043D\u0430 CD \u0441\u0442\u0443\u0434\u0438\u0435\u0439 \u0421\u041E\u042E\u0417
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B          \u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430
\u0418.\u041C\u043E\u043B\u0447\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435     \u041A.\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
  `},cl=jC;var VC={id:"talk-of-the-devil",name:"Talk of the Devil",year:1991,folder:"/artist/master/albums/talk_of_the_devil_1992.jpg",songs:[{name:"Intro Golgotha"},{name:"Talk Of The Devil"},{name:"Danger"},{name:"Fallen Angel"},{name:"Live To Die"},{name:"Tsar"},{name:"Heroes"},{name:"Romance"},{name:"I Hate Your Sex"},{name:"Paranoid"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "Talk Of The Devil" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0432 1991 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "MOROZ Records" - LP (\u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u0439 \u0434\u0438\u0441\u043A). \u0417\u0430\u043F\u0438\u0441\u044C \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "SNC-records", \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u0422\u0440\u0443\u0448\u0438\u043D. \u0422\u0430\u043A\u0436\u0435 \u041C\u0438\u0445\u0430\u0438\u043B \u0421\u0435\u0440\u044B\u0448\u0435\u0432 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043B \u043B\u044E\u0434\u0435\u0439 \u0438\u0437 \u0445\u0440\u0430\u043C\u0430 \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u0445\u043E\u0440\u0430 \u0432 \u043F\u0435\u0441\u043D\u0435 Fallen Angel.

\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B

\u0421\u0435\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B:
\u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430                                          \u0412.\u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (1)
\u0421.\u0415\u0444\u0438\u043C\u043E\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (6)                             \u0410.\u041C\u043E\u0438\u0441\u0435\u0435\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (7)
\u0410.\u0428\u0430\u0442\u0443\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (2, 3, 4, 5)      \u0418.\u041A\u043E\u0436\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430 (6)
\u0445\u043E\u0440 \u0445\u0440\u0430\u043C\u0430 \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u0430 (3)
  `},dl=VC;var BC={id:"maniac-party",name:"Maniac Party",year:1994,folder:"/artist/master/albums/maniac_party_1994.jpg",songs:[{name:"Beastie Generation"},{name:"Maniac Party"},{name:"Lock Them In Graves"},{name:"Burning In Hell (Civil War Disaster)"},{name:"Screams Of Pain"},{name:"Time X"},{name:"They Are Just Like Us"},{name:"Punk Guys"},{name:"Go!"}],info:`
"Maniac Party" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "SNC-records" \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u0432 1993 \u0433\u043E\u0434\u0443, \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0415.\u0422\u0440\u0443\u0448\u0438\u043D. \u0421\u0430\u043C \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u0448\u0435\u043B \u0442\u043E\u043B\u044C\u043A\u043E \u0432 1994 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "APEX" - CD, \u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 - \u0444\u0438\u0440\u043C\u0430 "POLYGRAM".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421.\u0421\u0438\u0434\u043E\u0440\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B       \u0422.\u0428\u0435\u043D\u0434\u0435\u0440 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},fl=BC;var HC={id:"pesni-myortvyh",name:"\u041F\u0435\u0441\u043D\u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0445",year:1996,folder:"/artist/master/albums/pesni_mertvix_1996.jpg",songs:[{name:"\u041F\u0435\u0441\u043D\u0438 \u041C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0414\u0438\u043A\u0438\u0435 \u0413\u0443\u0441\u0438"},{name:"\u0414\u0430\u0439\u0442\u0435 \u0421\u0432\u0435\u0442"},{name:"\u041F\u0435\u043F\u0435\u043B \u041D\u0430 \u0412\u0435\u0442\u0440\u0443"},{name:"\u041D\u0430\u0434\u043E\u0435\u043B\u043E"},{name:"\u0422\u043E\u043B\u044C\u043A\u043E \u0422\u044B \u0421\u0430\u043C"},{name:"\u042F \u041D\u0435 \u0425\u043E\u0447\u0443 \u0412\u043E\u0439\u043D\u044B"},{name:"\u0422\u0430\u0442\u0443"},{name:"\u041D\u043E\u0447\u044C"},{name:"\u041A\u043E\u0440\u0430\u0431\u043B\u044C \u0414\u0443\u0440\u0430\u043A\u043E\u0432"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041F\u0435\u0441\u043D\u0438 \u043C\u0435\u0440\u0442\u0432\u044B\u0445" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "\u0410\u0440\u0438\u044F Records" \u0432 \u043C\u0430\u0440\u0442\u0435 1996 \u0433\u043E\u0434\u0430. \u0417\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u044B - \u0412.\u0425\u043E\u043B\u0441\u0442\u0438\u043D\u0438\u043D \u0438 \u0414.\u041A\u0430\u043B\u0438\u043D\u0438\u043D. \u0412\u044B\u043F\u0443\u0449\u0435\u043D \u0444\u0438\u0440\u043C\u043E\u0439 "Flam Records" \u0432 1996 \u0433\u043E\u0434\u0443. \u0412 \u043F\u0435\u0441\u043D\u0435 \u0422\u0430\u0442\u0443 \u0432 \u0437\u0430\u043F\u0438\u0441\u0438 \u0445\u043E\u0440\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0410.\u0422\u0440\u043E\u0444\u0438\u043C\u043E\u0432, \u0410.\u0413\u0438\u0440\u043D\u044B\u043A (ZZ-Top), \u042E\u0440\u0438\u0439 \u0412\u0430\u0441\u0438\u043D (\u0430\u0440\u0442\u0438\u0441\u0442 \u0430\u043D\u0441\u0430\u043C\u0431\u043B\u044F \u0418\u0433\u043E\u0440\u044F \u041C\u043E\u0438\u0441\u0435\u0435\u0432\u0430).

\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B       \u0422.\u0428\u0435\u043D\u0434\u0435\u0440 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},hl=HC;var $C={id:"labirint",name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442",year:1999,folder:"/artist/master/albums/labirint_2000.jpg",songs:[{name:"\u041C\u0435\u0441\u0442\u0430 \u0425\u0432\u0430\u0442\u0438\u0442 \u0412\u0441\u0435\u043C!"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0412\u0435\u043A"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"\u0421\u043E\u043D"},{name:"\u041A\u043E\u043C\u0435\u0442\u0430 2000"},{name:"\u041C\u0435\u0442\u0430\u043B\u043B \u0414\u043E\u043A\u0442\u043E\u0440"},{name:"\u041E\u0445\u043E\u0442\u043D\u0438\u043A\u0438 \u0417\u0430 \u0421\u0447\u0430\u0441\u0442\u044C\u0435\u043C"},{name:"\u041D\u0438\u043A\u0442\u043E \u041D\u0435 \u0417\u0430\u0431\u044B\u0442, \u041D\u0438\u0447\u0442\u043E \u041D\u0435 \u0417\u0430\u0431\u044B\u0442\u043E"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0433\u0440\u0443\u043F\u043F\u044B \u041C\u0430\u0441\u0442\u0435\u0440 \u0432 \u043A\u043E\u043D\u0446\u0435 1999 \u0433\u043E\u0434\u0430. \u041C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0438 \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0443 \u0438 \u0440\u0435\u0448\u0438\u043B\u0438 \u0432\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0443 \u0441\u0435\u0431\u044F \u043D\u0430 \u0431\u0430\u0437\u0435. \u0410\u043B\u044C\u0431\u043E\u043C "\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432 2001 \u0444\u0438\u0440\u043C\u043E\u0439 "CD-Land" \u043D\u0430 CD



\u0421\u043E\u0441\u0442\u0430\u0432:
\u041B.\u0424\u043E\u043C\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                   \u041E.\u041C\u0438\u043B\u043E\u0432\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},pl=$C;var UC={id:"klassika",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 1987-2002",year:2001,folder:"/artist/master/albums/klassika_1987_2002.jpg",songs:[{name:"\u0418\u043D\u0442\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"\u0421 \u043A\u0435\u043C \u0442\u044B ?"},{name:"\u0415\u0449\u0435 \u0440\u0430\u0437 \u043D\u043E\u0447\u044C"},{name:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0441\u0430\u043C"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"2000 \u043B\u0435\u0442(\u0418\u0443\u0434\u0430)"},{name:"\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C(\u0441\u043E\u043B\u043E, \u0431\u0430\u0441)"},{name:"\u0422\u043E\u0440\u0435\u0440\u043E"},{name:"\u041D\u0435\u0431\u043E \u0432 \u0433\u043B\u0430\u0437\u0430\u0445"},{name:"\u0412\u0441\u0442\u0430\u043D\u044C, \u0441\u0442\u0440\u0430\u0445 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439"},{name:"\u0422\u0430\u0442\u0443"},{name:"\u0412\u043E\u043B\u044F \u0438 \u0440\u0430\u0437\u0443\u043C"}],info:`
\u041B\u0435\u0442\u043E\u043C 2001 \u0433\u043E\u0434\u0430 - \u0433\u0440\u0443\u043F\u043F\u0430 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0430\u043B\u044C\u0431\u043E\u043C "\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 1987-2001", \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0448\u043B\u0438 \u0441\u0442\u0430\u0440\u044B\u0435 \u0445\u0438\u0442\u044B \u0433\u0440\u0443\u043F\u043F\u044B \u0432 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0435, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0410\u043B\u0438\u043A\u0430 \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E: "\u0422\u043E\u0440\u0435\u0440\u043E" \u0438 "\u0421 \u041A\u0435\u043C \u0422\u044B?" \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0435 \u0438\u043C \u0432 \u0442\u043E \u0432\u0440\u0435\u043C\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D \u0438\u0433\u0440\u0430\u043B \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 "\u0410\u0440\u0438\u044F".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                 \u041E.\u041C\u0438\u043B\u043E\u0432\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},ml=UC;var zC={id:"33-zhizni",name:"33 \u0436\u0438\u0437\u043D\u0438",year:2004,folder:"/artist/master/albums/33zizni_2004.jpg",songs:[{name:"\u0418\u0433\u0440\u0430"},{name:"\u041C\u0430\u0441\u0442\u0435\u0440 \u0421\u043A\u043E\u0440\u0431\u043D\u044B\u0445 \u0414\u0435\u043B"},{name:"\u0412\u0435\u0440\u0430 \u0413\u043E\u0440\u0438\u0442 \u041D\u0430 \u041A\u043E\u0441\u0442\u0440\u0430\u0445"},{name:"33 \u0416\u0438\u0437\u043D\u0438"},{name:"\u042D\u043A\u0441\u043F\u0440\u0435\u0441\u0441"},{name:"\u0413\u043B\u043E\u0442\u043E\u043A \u041E\u0433\u043D\u044F"},{name:"\u0412\u043E\u0439\u043D\u0430 \u041C\u0438\u0440\u043E\u0432"},{name:"Heavy \u041B\u0430\u043C\u0431\u0430\u0434\u0430"},{name:"\u0421\u043D\u0435\u0436\u043D\u044B\u0439 \u041E\u0445\u043E\u0442\u043D\u0438\u043A"},{name:"\u0421\u0442\u0438\u0445\u0438\u044F"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "33 \u0436\u0438\u0437\u043D\u0438" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u041C\u0430\u0441\u0442\u0435\u0440-\u0420\u0435\u043A\u043E\u0440\u0434\u0441 \u0432 2004 \u0433\u043E\u0434\u0443. \u0412 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0431\u044B\u043B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0421\u0442\u0440\u0430\u0439\u043A\u0430. \u041E\u0431\u043B\u043E\u0436\u043A\u0443 \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043B \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0410\u043D\u0434\u0440\u0435\u0439 \u0411\u0430\u0440\u043A\u043E\u0432 (Grimmy bro). \u0410\u043B\u044C\u0431\u043E\u043C "33 \u0436\u0438\u0437\u043D\u0438" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u043D\u0430 CD \u041E\u041E\u041E "\u041C\u0430\u0441\u0442\u0435\u0440-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                 \u0410.\u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},gl=zC;var WC={id:"akustika",name:"\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",year:2005,folder:"/artist/master/albums/akystika_2005.jpg",songs:[{name:"\u041F\u043B\u0430\u0447 \u0421\u0432\u0438\u0440\u0435\u043B\u0438"},{name:"\u0422\u043E\u0440\u0435\u0440\u043E"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0412\u0435\u043A"},{name:"33 \u0416\u0438\u0437\u043D\u0438"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"Heavy \u041B\u0430\u043C\u0431\u0430\u0434\u0430"},{name:"\u041F\u0435\u043F\u0435\u043B \u041D\u0430 \u0412\u0435\u0442\u0440\u0443"},{name:"\u0418\u0433\u0440\u0430"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"}],info:`
\u0410\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u0448\u0435\u043B \u0432 \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2005 \u0433\u043E\u0434\u0430. \u0412 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A \u0441\u0442\u0430\u0440\u044B\u0435 \u0445\u0438\u0442\u044B, \u0442\u0430\u043A \u0438 \u0434\u0432\u0435 \u043D\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438.

"\u041A\u0430\u0436\u0434\u044B\u0439 \u0448\u0430\u0433 \u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0434\u043E\u0440\u043E\u0433\u0435 - \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435 \u0438 \u043E\u043F\u044B\u0442. \u042D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C - \u0435\u0449\u0451 \u043E\u0434\u043D\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432\u043F\u0435\u0440\u0451\u0434 \u0434\u043B\u044F \u043D\u0430\u0441 \u0438 \u0434\u043B\u044F \u0442\u0435\u0431\u044F..."



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410. \u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430        \u0410. \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
LEXX - \u0433\u0438\u0442\u0430\u0440\u0430, \u0432\u043E\u043A\u0430\u043B     \u0410. \u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u043F\u0435\u0440\u043A\u0443\u0441\u0441\u0438\u044F
  `},yl=WC;var GC={id:"po-tu-storonu-sna",name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430",year:2006,folder:"/artist/master/albums/ptcc_2006.jpg",songs:[{name:"\u0422\u0430\u043D\u0435\u0446"},{name:"\u0413\u0435\u043D\u0438\u0439 \u0440\u043E\u043A\u0430"},{name:"\u041C\u0443\u0437\u044B\u043A\u0430 \u0441\u0444\u0435\u0440"},"za-granyu",{name:"\u041F\u0435\u0441\u043D\u044F \u0410\u043D\u043D\u0443\u0448\u043A\u0438"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C \u0411\u0435\u0440\u043B\u0438\u043E\u0437\u0430"},{name:"\u041A\u043E\u043D\u0444\u0435\u0440\u0430\u043D\u0441"},{name:"\u041C\u0435\u0447\u0442\u0430\u0439"},{name:"\u0412\u043E\u0439\u043D\u0430 (Live in studio)"},{name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430 (\u0447\u0430\u0441\u0442\u044C 1)"},{name:"\u041B\u0435\u0441 \u0411\u0440\u043E\u043A\u0438\u043B\u043E\u043D"},{name:"\u041A\u0440\u044B\u0441\u044B"},{name:"\u0421\u044B\u043D \u043A\u0430\u043C\u043D\u044F"},{name:"\u0412\u0440\u0435\u043C\u044F \u0432\u0430\u0440\u0432\u0430\u0440\u043E\u0432"},{name:"Live in studio"},{name:"Omut"},{name:"\u041C\u0440\u0430\u043C\u043E\u0440\u043D\u044B\u0439 \u0410\u043D\u0433\u0435\u043B"},{name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430 (\u0447\u0430\u0441\u0442\u044C 2) (Live in studio)"}],info:`
2006 \u0433\u043E\u0434... \u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u041C\u0430\u0441\u0442\u0435\u0440+Margenta  \u044D\u0442\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u0432 \u044D\u043F\u043E\u0445\u0443 \u0442\u044F\u0436\u0451\u043B\u043E\u0439 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0441\u0446\u0435\u043D\u044B. \u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u044B \u0441\u043E \u0437\u0432\u0443\u043A\u043E\u043C \u0438 \u0441\u0442\u0438\u043B\u044F\u043C\u0438 \u0443\u0432\u0435\u043D\u0447\u0430\u043B\u0438\u0441\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u043C \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u044B  \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u0432 1000 \u0447\u0430\u0441\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B \u0438 \u0432\u0441\u0435\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430.

"\u0422\u044B \u041C\u0430\u0441\u0442\u0435\u0440 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043F\u0435\u0440\u0435\u0436\u0438\u043B, \u0440\u0435\u043C\u0435\u0441\u043B\u0435\u043D\u043D\u0438\u043A \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0435\u0448\u044C, \u0438 \u0434\u0438\u043B\u0435\u0442\u0430\u043D\u0442 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043F\u0435\u0440\u0435\u0436\u0438\u0442\u044C".
"\u041D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u0440\u0430\u044F, \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u0430\u0434\u0430, \u0442\u043E\u043B\u044C\u043A\u043E \u044D\u0442\u0438 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u043C\u0438\u0440\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0448\u044C, \u043F\u043E\u043A\u0430 \u0434\u0443\u043C\u0430\u0435\u0448\u044C, \u0447\u0442\u043E \u0442\u0430\u043A \u0438 \u043D\u0430\u0434\u043E".

\u0421\u043E\u0441\u0442\u0430\u0432:
\u041C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430  \u041F\u0443\u0448\u043A\u0438\u043D\u0430 - \u0430\u0432\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u043E\u0432, \u0432\u043D\u0435\u0437\u0430\u043F\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A...
\u0410. \u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430, \u0432\u043E\u043A\u0430\u043B                  \u0410.\u042F\u0440\u0443\u0448\u0438\u043D\u0430 - \u0432\u043E\u043A\u0430\u043B
\u0410. \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430                \u0421.\u0421\u043A\u0440\u0438\u043F\u043D\u0438\u043A\u043E\u0432 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
LEXX - \u0433\u0438\u0442\u0430\u0440\u0430, \u0432\u043E\u043A\u0430\u043B, \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435      \u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B
\u0410. \u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u043F\u0435\u0440\u043A\u0443\u0441\u0441\u0438\u044F   \u041E.\u041A\u043E\u0447\u0443\u0431\u0435\u0439 - \u0432\u043E\u043A\u0430\u043B
\u0413.\u041C\u0430\u0442\u0432\u0435\u0435\u0432 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435                      \u041C.\u0421\u0430\u043C\u043E\u0441\u0432\u0430\u0442 - \u0432\u043E\u043A\u0430\u043B
\u0412.\u042F\u0440\u0443\u0448\u0438\u043D - \u0432\u043E\u043A\u0430\u043B                                 \u041E.\u0414\u0437\u0443\u0441\u043E\u0432\u0430 - \u0432\u043E\u043A\u0430\u043B
  `},vl=GC;var qC={id:"viii",name:"VIII",year:2010,folder:"/artist/master/albums/vii_2010.jpg",songs:[{name:"\u0412\u043E\u0441\u044C\u043C\u0430\u044F \u0414\u0432\u0435\u0440\u044C"},{name:"\u0417\u0430\u043C\u0440\u0438!"},{name:"\u0411\u0443\u043B\u044C\u0434\u043E\u0437\u0435\u0440"},{name:"\u0421\u0443\u0434 \u0418\u0434\u0451\u0442"},{name:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0411\u0440\u0430\u0442"},{name:"\u0412\u043E\u0437\u0434\u0443\u0445!"},{name:"\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0414\u0432\u0435\u0440\u044C"},{name:"\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u0421\u0430\u0440\u0430\u043D\u0447\u0430"},{name:"\u0420\u0443\u0431\u0438\u0442\u0435 \u041C\u0430\u0447\u0442\u044B!"},{name:"\u0411\u0435\u0440\u0435\u0433 \u0418\u043B\u043B\u044E\u0437\u0438\u0439"},{name:"Kings Of Rock-n - Roll"},{name:"\u041E\u043D\u0438 \u041A\u0430\u043A \u041C\u044B"},{name:"Kings Of Rock-n - Roll"},{name:"\u041D\u0430\u0447\u0430\u043B\u043E \u0412\u043E\u0441\u044C\u043C\u043E\u0433\u043E"}],info:`
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430, \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
Lexx - \u0432\u043E\u043A\u0430\u043B
\u041E\u043B\u0435\u0433 "\u041A\u043E\u0431\u0440\u0430" \u0425\u043E\u0432\u0440\u0438\u043D - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B
\u0410\u043D\u0434\u0440\u0435\u0439 \u0421\u043C\u0438\u0440\u043D\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043E\u043D\u0438\u0434 \u0424\u043E\u043C\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430 (7), \u0441\u043E\u043B\u043E-\u0433\u0438\u0442\u0430\u0440\u0430 (11-13)

\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435:
\u041A\u0438\u0440\u0438\u043B\u043B \u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435 (1, 7)
\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 "\u0413\u0438\u043F\u0441" - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (2, 4)

\u0417\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0410\u043D\u0434\u0440\u0435\u0439 "\u041A\u0440\u0443\u0441\u0442\u0435\u0440" \u041B\u0435\u0431\u0435\u0434\u0435\u0432
\u041F\u0440\u043E\u0434\u044E\u0441\u0435\u0440\u044B: A. \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439, \u0410. \u041B\u0435\u0431\u0435\u0434\u0435\u0432, LEXX
\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u044E\u0441\u0435\u0440 - \u0410\u043B\u0438\u043A \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439
\u0412\u044B\u043F\u0443\u0441\u043A\u0430\u044E\u0449\u0438\u0439 \u043B\u0435\u0439\u0431\u043B: CD-Maximum
\u0410\u043B\u044C\u0431\u043E\u043C \u043D\u043E\u0441\u0438\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 VIII ("\u0412\u043E\u0441\u044C\u043C\u043E\u0439"), \u0447\u0442\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u043D\u043E\u043C\u0435\u0440\u0443 \u0432 \u0434\u0438\u0441\u043A\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0433\u0440\u0443\u043F\u043F\u044B..\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F "\u041E\u043D\u0438 \u043A\u0430\u043A \u043C\u044B" \u0432\u043F\u0435\u0440\u0432\u044B\u0435 \u0432\u044B\u0448\u043B\u0430 \u043D\u0430 \u0430\u043D\u0433\u043B\u043E\u044F\u0437\u044B\u0447\u043D\u043E\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u0435 "Maniac Party", \u0433\u0434\u0435 \u043E\u043D\u0430 \u043D\u043E\u0441\u0438\u043B\u0430 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "They are just like us". \u0420\u0443\u0441\u0441\u043A\u043E\u044F\u0437\u044B\u0447\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0442\u0435\u043A\u0441\u0442\u0430: \u041C. \u041F\u0443\u0448\u043A\u0438\u043D\u0430, \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442: \u041E. \u0413\u043E\u0440\u0431\u0443\u043D\u043E\u0432 \u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0433\u0440\u0443\u043F\u043F\u044B \u041C\u0410\u0421\u0422\u0415\u0420, \u043A\u0440\u043E\u043C\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 "\u0412\u043E\u0441\u044C\u043C\u0430\u044F \u0434\u0432\u0435\u0440\u044C" (intro), \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u041A\u0438\u0440\u0438\u043B\u043B \u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 \u0437\u0430\u043F\u0438\u0441\u0430\u043B \u043D\u0430 \u0441\u0432\u043E\u0435\u0439 \u0441\u0442\u0443\u0434\u0438\u0438 \u0432 \u0411\u0435\u043B\u044C\u0433\u0438\u0438, \u0433\u043E\u0440\u043E\u0434 \u0413\u0435\u043D\u0442.
  `},wl=qC;var mm={[ll.id]:ll,[cl.id]:cl,[dl.id]:dl,[fl.id]:fl,[hl.id]:hl,[pl.id]:pl,[ml.id]:ml,[gl.id]:gl,[yl.id]:yl,[vl.id]:vl,[wl.id]:wl};var YC={id:"za-granyu",name:["\u0417\u0430 \u0433\u0440\u0430\u043D\u044C\u044E"],albums:["po-tu-storonu-sna"],authors:"\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0442\u0440\u0430\u0439\u043A \u2014 \u041C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430 \u041F\u0443\u0448\u043A\u0438\u043D\u0430",text:`
\u041D\u0430\u0443\u0447\u0438\u043B\u0438\u0441\u044C \u043C\u043E\u043B\u0447\u0430\u0442\u044C
\u0422\u0435, \u043A\u0442\u043E \u0440\u0430\u043D\u044C\u0448\u0435 \u043A\u0440\u0438\u0447\u0430\u043B,
\u0422\u043E \u043B\u0438 \u0436\u0438\u0437\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u0430
\u0422\u043E \u043B\u0438 \u0433\u043E\u043B\u043E\u0441 \u043F\u0440\u043E\u043F\u0430\u043B

\u0418\u0449\u0443\u0442 \u0434\u0435\u0442\u0438  \u0413\u0440\u0430\u0430\u043B\u044C
\u0421 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u043C\u0435\u0447\u043E\u043C,
\u0414\u0432\u0435\u0440\u044C \u0432 \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u043D\u043D\u044B\u0439 \u0440\u0430\u0439
\u041F\u043E\u0434\u043F\u0438\u0440\u0430\u044E\u0442 \u043F\u043B\u0435\u0447\u043E\u043C\u2026

\u0421\u0442\u0430\u0440\u0438\u043A\u0438 \u043F\u0440\u043E\u0441\u044F\u0442 \u0434\u0435\u043D\u044C
\u0421\u0442\u0430\u0442\u044C \u0434\u043B\u0438\u043D\u043D\u0435\u0435 \u043D\u0430 \u0436\u0438\u0437\u043D\u044C,
\u041D\u043E \u0442\u0435\u0440\u044F\u044E\u0442 \u0432\u0434\u0440\u0443\u0433 \u0442\u0435\u043D\u044C,
\u0422\u0435\u043D\u044C \u0443\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u0432\u0432\u044B\u0441\u044C.

\u0418 \u0434\u0432\u043E\u0440\u043D\u044F\u0433\u0438 \u0445\u0440\u0438\u043F\u044F\u0442,
\u041F\u043E\u043F\u0430\u0434\u0430\u044F \u0432 \u043F\u0435\u0442\u043B\u044E,
\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0438\u043C \u043B\u0430\u043F,
\u0427\u0442\u043E\u0431\u044B \u0441\u043C\u0435\u0440\u0442\u044C \u043E\u0431\u043C\u0430\u043D\u0443\u0442\u044C\u2026

\u0422\u044B \u043D\u0430 \u0438\u0441\u043F\u043E\u0432\u0435\u0434\u044C \u0448\u0435\u043B,
\u0414\u0430 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0437\u0430\u0431\u044B\u043B,
\u0412\u0440\u043E\u0434\u0435 \u0432\u0441\u0435 \u0445\u043E\u0440\u043E\u0448\u043E,
\u0422\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u0440\u0434\u0446\u0435\u043C \u043E\u0441\u0442\u044B\u043B.

\u0414\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u043F\u044B\u043B\u044C\u2026 \u043F\u044B\u043B\u044C\u2026
\u0420\u0430\u0441\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u043F\u044B\u043B\u2026 \u043F\u044B\u043B\u2026
\u041B\u043E\u0441\u043A\u0443\u0442\u044C\u044F \u043D\u0435\u0431\u0435\u0441\u2026 \u0431\u0435\u0441\u2026
\u041F\u0440\u0438\u043C\u0435\u0440\u0438\u043B - \u0418\u0441\u0447\u0435\u0437,
\u0414\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u043F\u044B\u043B\u044C\u2026 \u043F\u044B\u043B\u044C\u2026
\u0420\u0430\u0441\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u043F\u044B\u043B\u2026 \u043F\u044B\u043B\u2026
\u0422\u0440\u0435\u0432\u043E\u0436\u043D\u043E,
\u0417\u0430 \u0433\u0440\u0430\u043D\u044C\u044E \u2026

\u041D\u0430\u0443\u0447\u0438\u043B\u0438\u0441\u044C \u043C\u043E\u043B\u0447\u0430\u0442\u044C
\u0422\u0435, \u043A\u0442\u043E \u0440\u0430\u043D\u044C\u0448\u0435 \u043A\u0440\u0438\u0447\u0430\u043B,
\u0422\u043E \u043B\u0438 \u0436\u0438\u0437\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u0430
\u0422\u043E \u043B\u0438 \u0433\u043E\u043B\u043E\u0441 \u043F\u0440\u043E\u043F\u0430\u043B

\u041A\u043E\u0436\u0430 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0433\u0440\u0443\u0431\u0430,
\u0427\u0442\u043E\u0431 \u0441\u0433\u043E\u0440\u0435\u0442\u044C \u043E\u0442 \u0441\u0442\u044B\u0434\u0430,
\u041C\u044B\u0441\u043B\u0438, \u0431\u0443\u043A\u0432\u044B, \u0441\u043B\u043E\u0432\u0430,
\u0418\u0437 \u0432\u043E\u0434\u044B, \u0438\u0437\u043E \u043B\u044C\u0434\u0430\u2026
`},bl=YC;var ZC={id:"ride-to-live-live-to-ride",name:["Ride To Live, Live To Ride"],albums:[],authors:"\u043C\u0443\u0437\u044B\u043A\u0430: Dee Snider, \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442: \u041C.\u041F\u0443\u0448\u043A\u0438\u043D\u0430",text:`
\u041A\u043E\u0433\u0434\u0430 \u043D\u0435\u0442 \u0441\u0438\u043B - \u043C\u043E\u043B\u0447\u0438,
\u041A\u0443\u043B\u0430\u043A \u0441\u043E\u0436\u043C\u0438,
\u041F\u043E\u0442\u043E\u043C \u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u0443\u0436\u0438\u043D\u043E\u0439
\u041D\u0430\u0437\u043B\u043E \u0432\u0441\u0435\u043C \u0440\u0430\u0441\u043F\u0440\u044F\u043C\u0438\u0441\u044C,
\u0418 \u043C\u0447\u0438 \u0445\u043E\u0442\u044C \u0432 \u0430\u0434,
\u0425\u043E\u0442\u044C \u0432 \u0431\u043B\u0430\u0433\u043E\u0441\u0442\u043D\u044B\u0439 \u0440\u0430\u0439.
\u0413\u043E\u043D\u0438, \u043B\u0435\u0442\u0438 \u0438 \u0437\u043D\u0430\u0439 -

\u0422\u044B \u0434\u043E\u043B\u0436\u0435\u043D...
Ride To Live, live to ride,
\u0416\u0438\u0437\u043D\u044C \u0438 \u0441\u043C\u0435\u0440\u0442\u044C - \u0432\u043E\u0442 \u0438\u0433\u0440\u0430!
\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0433\u0430\u0437,
\u0423\u0439\u0434\u0438 \u0437\u0430 \u0433\u0440\u0430\u043D\u044C,
You ride to live to ride!

\u0423\u0437\u043B\u043E\u043C - \u0432\u0435\u0440\u0435\u0432\u043A\u0438 \u0432\u0435\u043D,
\u0411\u0435\u043D\u0437\u0438\u043D - \u0432 \u043A\u0440\u043E\u0432\u0438,
\u0422\u0432\u043E\u0439 \u0434\u043E\u043C - \u0433\u0434\u0435 \u043D\u043E\u0447\u044C \u043D\u0430\u0441\u0442\u0438\u0433\u043D\u0435\u0442,
\u041D\u043E \u0432 \u044D\u0442\u043E\u043C \u043A\u0430\u0439\u0444 \u043B\u043E\u0432\u0438,
\u0422\u044B \u0437\u0432\u0435\u0440\u044C, \u0442\u044B \u0411\u043E\u0433,
\u0422\u044B \u0414\u044C\u044F\u0432\u043E\u043B \u0434\u043E\u0440\u043E\u0433,
\u0414\u0440\u0443\u0437\u044C\u044F \u043F\u043E\u0439\u043C\u0443\u0442, \u0434\u0430\u0439 \u0441\u0440\u043E\u043A!

\u041E\u0434\u043D\u043E \u043B\u0438\u0448\u044C...
Ride To Live, live to ride,
\u0416\u0438\u0437\u043D\u044C \u0438 \u0441\u043C\u0435\u0440\u0442\u044C - \u0432\u043E\u0442 \u0438\u0433\u0440\u0430!
\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0433\u0430\u0437,
\u0423\u0439\u0434\u0438 \u0437\u0430 \u0433\u0440\u0430\u043D\u044C,
You ride to live to ride!

\u0412\u0441\u0435 \u0442\u043E, \u0447\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B \u0442\u044B,
\u041D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C,
\u0412 \u043B\u044E\u0431\u043E\u0439 \u0431\u0435\u0437\u0443\u043C\u043D\u043E\u0439 \u0433\u043E\u043D\u043A\u0435
\u0422\u044B \u0434\u043E\u043B\u0435\u043D \u043F\u0435\u0440\u0432\u044B\u043C \u0431\u044B\u0442\u044C,
\u0427\u0443\u0436\u043E\u0439 \u043F\u043E\u043A\u043E\u0439
\u0412\u0437\u0440\u044B\u0432\u0430\u0435\u0448\u044C \u0441\u043E\u0431\u043E\u0439,
\u0411\u0435\u0440\u0438 \u0432\u0435\u0441\u044C \u043C\u0438\u0440 - \u043E\u043D \u0442\u0432\u043E\u0439!

\u0417\u0430\u043F\u043E\u043C\u043D\u0438 -
Ride To Live, live to ride,
\u0416\u0438\u0437\u043D\u044C \u0438 \u0441\u043C\u0435\u0440\u0442\u044C - \u0432\u043E\u0442 \u0438\u0433\u0440\u0430!
\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0433\u0430\u0437,
\u0423\u0439\u0434\u0438 \u0437\u0430 \u0433\u0440\u0430\u043D\u044C,
You ride to live to ride!
`},Dl=ZC;var KC={id:"na-linii-ognya",name:["\u041D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F"],albums:[],text:`
\u041A\u0430\u043C\u0435\u043D\u043D\u044B\u0435 \u0434\u0436\u0443\u043D\u0433\u043B\u0438, \u0433\u043E\u0440\u043E\u0434 \u0433\u0440\u0435\u0445\u043E\u0432,
\u041F\u0443\u0441\u0442\u0430\u044F \u0436\u0438\u0437\u043D\u044C, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0448\u044C \u043B\u044E\u0431\u043E\u0432\u044C.
\u0428\u0443\u0442\u0438\u0442\u044C \u043D\u0435 \u043F\u0440\u043E\u0431\u0443\u0439 \u0441 \u0432\u043E\u043B\u0447\u044C\u0435\u0439 \u0441\u0442\u0430\u0435\u0439,
\u041E\u043D\u0430 \u0431\u044B\u043B\u0430 \u043F\u043E\u0447\u0442\u0438 \u0441\u0432\u044F\u0442\u0430\u044F.

\u041A\u043E\u0441\u044B\u0435 \u0432\u0437\u0433\u043B\u044F\u0434\u044B, \u043D\u043E \u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F,
\u0418 \u043E\u0447\u0435\u043D\u044C \u0434\u0430\u043B\u0435\u043A\u043E \u0442\u0432\u043E\u0438 \u0434\u0440\u0443\u0437\u044C\u044F.
\u0418\u0433\u0440\u0430 \u0441\u043E \u0441\u043C\u0435\u0440\u0442\u044C\u044E, \u043D\u043E\u043B\u044C-\u043D\u043E\u043B\u044C, \u043D\u0438\u0447\u044C\u044F,
\u041E\u043D \u0436\u0438\u0442\u044C \u043F\u0440\u0438\u0432\u044B\u043A \u043D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F.

\u041F\u0440\u0438\u043F\u0435\u0432:
\u041D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F
\u0421\u043A\u0440\u044B\u0432\u0430\u044F \u0432 \u0441\u0435\u0440\u0434\u0446\u0435 \u0431\u043E\u043B\u044C.
\u041D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F
\u0418\u0433\u0440\u0430\u0442\u044C \u0447\u0443\u0436\u0443\u044E \u0440\u043E\u043B\u044C.
\u041D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F
\u041D\u0435\u043B\u044C\u0437\u044F \u043B\u044E\u0431\u043E\u0432\u044C \u0437\u0430\u0431\u044B\u0442\u044C.
\u041D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F
\u041D\u0430\u0434\u0435\u0436\u0434\u0443 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C.

\u041D\u0430\u0434 \u0447\u0435\u0440\u043D\u044B\u043C \u0433\u043E\u0440\u043E\u0434\u043E\u043C, \u0447\u0435\u0440\u043D\u044B\u0439 \u0434\u044B\u043C,
\u041E\u043D \u0431\u044B\u043B \u0441\u0432\u043E\u0438\u043C, \u043E\u043D \u0431\u044B\u043B \u0447\u0443\u0436\u0438\u043C.
\u0421\u043C\u0435\u0440\u0442\u0438 \u043D\u0435 \u0431\u043E\u044F\u043B\u0441\u044F, \u0441\u043C\u0435\u0440\u0442\u0438 \u043D\u0435 \u0438\u0441\u043A\u0430\u043B,
\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u043B, \u043A\u0430\u043A \u043E\u043D \u0443\u0441\u0442\u0430\u043B.

\u0418 \u0442\u044B \u043D\u0435 \u0431\u043E\u0433, \u0438 \u043C\u0438\u0440 \u0436\u0435\u0441\u0442\u043E\u043A,
\u041B\u044E\u0431\u0432\u0438 \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u043E\u0439 \u0431\u044B\u043B \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0441\u0440\u043E\u043A.
\u0412 \u0440\u0430\u0437\u0431\u0438\u0442\u043E\u043C \u0441\u0435\u0440\u0434\u0446\u0435 \u0431\u043E\u043B\u044C \u0445\u0440\u0430\u043D\u044F,
\u041E\u043D \u0436\u0438\u0442\u044C \u043F\u0440\u0438\u0432\u044B\u043A \u043D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F.
`},Il=KC;var gm={[bl.id]:bl,[Dl.id]:Dl,[Il.id]:Il};var QC={id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440",image:"/artist/master/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/3Gocx0waYCfV2wx0d5nKzs",youtube:"https://www.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q",youtubeMusic:"https://music.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q",yandexMusic:"https://music.yandex.ru/artist/359599"},albums:["master","s-petlyoj-na-shee","talk-of-the-devil","maniac-party","pesni-myortvyh","labirint","klassika","33-zhizni","akustika","po-tu-storonu-sna","viii"]},ai={artist:QC,albums:mm,songs:gm};var JC={id:"trotilovyye-skazki",name:"\u0422\u0440\u043E\u0442\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u043A\u0430\u0437\u043A\u0438",year:1998,folder:"/artist/shmely/albums/1998_skazki.jpg",songs:[{name:"\u0427\u043E\u0440\u043D\u0430 \u0434\u043E\u0431\u0430"},{name:"\u042F\u0431\u043B\u043E\u0447\u043A\u043E-\u043C\u044F\u0443\u0447\u0438\u043B\u043E"},{name:"\u0421\u0435\u043A\u0441, \u043D\u0430\u0440\u043A\u043E\u0442\u0438\u043A\u0438, \u0441\u0430\u043C\u043E\u0433\u043E\u043D"},{name:"\u041B\u0438\u0445\u043E\u043C\u0430\u043D\u0435 \u043C\u0435\u043D\u0435 \u043Di\u0447"},{name:"\u0410\u0434\u0441\u043A\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"},{name:"\u0417\u0438\u043C\u0430"},{name:"\u0417\u0430 \u0442\u043E\u0431\u043E\u044E"},{name:"\u041D\u0435 \u0445\u043E\u0434\u0438"},{name:"\u0426\u0432\u0438\u043D\u0442\u0430\u0440"},{name:"\u041E\u0440\u0433i\u044F"},"daj-garri"]},Cl=JC;var XC={id:"tulovishche",name:"\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435",year:1998,folder:"/artist/shmely/albums/1998_tulovishe.jpg",songs:[{name:"\u041D\u0435\u0431\u043E (\u0441\u0442\u0438\u0445)"},{name:"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0431\u043E\u0433"},{name:"\u041B\u0430\u0439 \u0438\u043B\u043B\u044E\u0437\u0438\u0438"},{name:"\u0422\u0440\u0430\u0432\u044B"},{name:"\u041F\u0435\u0440\u0432\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C (\u0441\u0442\u0438\u0445)"},"tulovishchej",{name:"\u042D\u043A\u0437\u043E\u0442\u0438\u043A\u0430"},{name:"\u0413\u043D\u0438\u043B\u043E\u0435 \u043E\u0437\u0435\u0440\u043E"},{name:"\u0416\u0430\u043B\u043E \u0431\u0435\u0439 \u0441\u0430\u0432\u0430\u043B\u044F\u0439"},{name:"\u041B\u0430\u0433i\u0434\u043D\u043E"},"raspyatie",{name:"\u041A\u043E\u0440\u0430\u0431\u043B\u0438\u043A\u0438"},{name:"\u0412\u0435\u0442\u0435\u0440 \u0438 \u0433\u0440\u043E\u043C"},{name:"\u041D\u0435\u043F\u0443\u0442\u0451\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u0431\u0443\u0441"},{name:"\u041C\u044F\u0441\u043D\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"},{name:"\u0413\u0438\u043C\u043D\u043E\u043F\u043E\u0434\u043E\u0431\u043D\u0430\u044F"}]},El=XC;var e0={id:"purga",name:"\u041F\u0443\u0440\u0433\u0430",year:1998,folder:"/artist/shmely/albums/1998_purga.jpg",songs:[{name:"\u0410\u0439 \u0434\u0430!"},{name:"\u0413\u0440\u043E\u0437\u0430"},{name:"\u0422\u043E\u0441\u043A\u0430"},{name:"\u041B\u0430\u043A\u0430\u0439 \u043E\u0442\u0440\u0430\u0432\u0443"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435"},{name:"\u0422\u0435\u043D\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B"},{name:"\u041D\u0435\u0432\u0435\u0441\u0451\u043B\u0430\u044F \u0441\u043A\u0430\u0437\u043A\u0430"},{name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442"},{name:"\u0411\u0430\u0440\u044B\u043D\u044F"},{name:"\u041C\u043E\u043B\u043E\u0434\u0430\u044F"},{name:"\u041B\u044E\u0442\u0438\u0439 \u0441\u043Di\u0433"},{name:"\u041B\u043E\u0433\u043E\u0432\u043E"},{name:"\u0411\u0440\u0430\u0433\u0430"},{name:"\u0417\u0430\u043C\u043E\u043A \u0438\u0437 \u0442\u0443\u0447"},{name:"\u0412\u043E\u0434\u0430"},{name:"\u0413\u0443\u0431\u044B - \u044F\u0434"},{name:"\u0411\u0443\u0434\u0442\u043E \u0441\u043A\u0430\u0437\u043A\u0430"}]},xl=e0;var t0={id:"durackiye-knizhki",name:"\u0414\u0443\u0440\u0430\u0446\u043A\u0438\u0435 \u043A\u043D\u0438\u0436\u043A\u0438",year:1998,folder:"/artist/shmely/albums/1998_knizhki.jpg",streaming:{spotify:"https://open.spotify.com/album/63sm3EX7I90qTqXEFBcUdT",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kgofi2TmxxKfzOrot5dsKipLqRNh1VjsE",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_l16b-hVl6mCOISWOuLJWtDPH5uTbbBoG4",yandexMusic:"https://music.yandex.ru/album/3444884"},songs:["ya-ne-angel",{name:"\u041C\u043E\u0433\u0438\u043B\u044C\u0449\u0438\u043A"},"volosy",{name:"\u0416\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u043D\u043E"},{name:"\u0413\u043E\u0440\u0438, \u043A\u043E\u0441\u0442\u0451\u0440!"},{name:"\u0420\u0435\u0437\u0438\u043D\u043E\u0432\u044B\u0435 \u0434\u0435\u0431\u0440\u0438"},{name:"\u042F\u0437\u0432\u0430 \u043D\u0430 \u0434\u0443\u0448\u0435"},{name:"\u0414\u0443\u0440\u0430\u0446\u043A\u0438\u0435 \u043A\u043D\u0438\u0436\u043A\u0438"},{name:"\u0413\u043E\u0432\u043D\u043E"},{name:"\u041D\u0435 \u0433\u0440\u0443\u0441\u0442\u0438, \u0438 \u0442\u0430\u043A \u0445\u0443\u0451\u0432\u043E"},{name:"\u041F\u044C\u044F\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u043A\u0430"},{name:"\u0418\u043A\u043E\u043D\u0430"},{name:"\u041E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u044F"},{name:"\u041Ci\u0441\u044F\u0446\u044A \u0437 \u043D\u0435\u0431\u0430 \u0433\u0435\u0442\u044C"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430\u044F"},{name:"\u0420\u0443\u0439\u043D\u0435\u0442\u0441\u044F \u043C\u043E\u0437\u043E\u043A"},{name:"\u0412\u0430\u043A\u0445\u0430\u043D\u0430\u043B\u0438\u044F"}]},Sl=t0;var n0={id:"petlya-soblazna",name:"\u041F\u0435\u0442\u043B\u044F \u0441\u043E\u0431\u043B\u0430\u0437\u043D\u0430",year:1998,folder:"/artist/shmely/albums/1998_ps_.jpg",songs:[{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0432\u044B\u0439\u0434\u0435\u0442"},{name:"\u0412\u0435\u0441\u043D\u0430 \u043F\u043E\u043A\u043E\u0439\u043D\u0438\u0446\u0430"},{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0413\u0430\u043D\u044C\u0431\u0430"},{name:"\u0410\u043B\u043B\u0438\u043B\u0443\u0439\u0430"},{name:"\u041E\u0431\u0435\u0441\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0430\u0445"},{name:"\u0411i\u0441\u043E\u0432 \u0433\u0430\u0439"},"trahni-nebo","divchina-kulya",{name:"\u0417\u0430\u0432i\u0442\u0430\u0439"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0438\u0441\u043F\u043E\u0432\u0435\u0434\u044C"},{name:"\u0424\u0430\u0448\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B"},{name:"\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A"}]},Ml=n0;var r0={id:"zloradostnaya-opuhol",name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C",year:1999,folder:"/artist/shmely/albums/1999_zo.jpg",songs:[{name:"\u0411\u044B\u043B\u0438 \u043C\u044B"},{name:"\u041B\u0435\u0437\u0432\u0438\u0435"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430"},{name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C"},{name:"\u0413\u043B\u0438\u0441\u0442\u044B"},{name:"\u0428\u0435\u0439\u043A \u0448\u0435\u0439\u043A \u0447\u0430 \u0447\u0430 \u0447\u0430"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430"},{name:"\u0421\u043C\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430"},{name:"\u041C\u0443\u0442\u0430\u043D\u0442\u044B"},{name:"\u0414\u0436\u0430\u0433\u0438 \u043C\u0435\u0440\u0442\u0432\u0435\u0435 \u0432\u0441\u0435\u0445 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0410\u043F\u043E\u043A\u0430\u043B\u0438\u043F\u0441\u0438\u0441"},{name:"\u041F\u0435\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"}]},Tl=r0;var o0={id:"vulkanizaciya-dushi",name:"\u0412\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0443\u0448\u0438",year:1999,folder:"/artist/shmely/albums/1999_vd_.jpg",songs:[{name:"\u041A\u0440\u0438\u0436\u0430\u043D\u0430 \u0432\u043E\u0434\u0430"},{name:"\u0412\u0435\u0441\u043D\u044F\u043D\u043A\u0430"},{name:"\u0423 \u0413\u0430\u044E"},{name:"\u0411\u043E\u0433\u0438"},{name:"\u041F\u043E\u043C\u043E\u043B\u0438\u0441\u044C"},{name:"\u041E-\u041E-\u041E"},{name:"\u0414\u0438\u0432\u043E"},{name:"\u041E\u0440\u0433\u0430\u0437\u043C"},"volosy",{name:"\u041Ci\u0441\u044F\u0446\u044A"},{name:"\u0414\u0443\u043D\u044F"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C"}]},_l=o0;var i0={id:"princessa-bez-trusov",name:"\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0442\u0440\u0443\u0441\u043E\u0432",year:2e3,folder:"/artist/shmely/albums/2000_prinzessa.jpg",songs:[{name:"\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0442\u0440\u0443\u0441\u043E\u0432"},{name:"\u0418\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0440\u0430\u0442"},{name:"\u041A\u0440\u043E\u043D\u043E\u0441"},{name:"\u0418\u0432\u0430 (\u0441\u0442\u0438\u0448\u043E\u043A)"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C"},{name:"\u0420\u0436\u0430\u0432\u044B\u0439 \u043A\u0438\u0431\u043E\u0440\u0433"},{name:"\u0428\u0443\u043B\u043E\u0432\u044C\u0435"},{name:"\u041F\u043E\u0435\u0431\u0435\u043D\u044C-\u0442\u0440\u0430\u0432\u0430"},{name:"\u0415\u0449\u0451 \u0441\u0442\u0438\u0448\u043E\u043A"},{name:"\u0417\u043E\u043C\u0431\u0438-\u0431\u0443\u0433\u0438"},{name:"\u041F\u043E \u043C\u0430\u0441\u043B\u0443"},{name:"\u041C\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u043A"},{name:"\u0426\u0432\u0435\u0442\u044B"},{name:"\u0421\u0442\u0438\u0448\u043E\u0447\u0435\u043A"},{name:"\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u044F"},{name:"\u0417\u0430\u0440\u0435\u0432\u043E"},{name:"\u041F\u0430\u043D\u043A-\u0434\u0438\u043A\u0442\u0430\u0442\u0443\u0440\u0430"},{name:"\u041A\u0440\u0430\u0445 \u0438 \u0433\u0438\u0431\u0435\u043B\u044C"},{name:"\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A-\u0443\u0431\u0438\u0439\u0446\u0430 (\u0441\u043A\u0430\u0437\u043A\u0430)"}]},Al=i0;var s0={id:"bomba-v-ubezhishche",name:"\u0411\u043E\u043C\u0431\u0430 \u0432 \u0443\u0431\u0435\u0436\u0438\u0449\u0435",year:2e3,folder:"/artist/shmely/albums/2000_bomba.jpg",songs:[{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u0422\u0438\u0448\u0438\u043D\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439"},{name:"\u0411\u043E\u043C \u043B\u0431\u043E\u043C"},"polna-suma",{name:"\u0422\u0443\u043B\u044F\u0440\u0435\u043C\u0438\u044F"},{name:"\u0412\u0438\u0440\u0443\u0441"},"ya-ne-angel",{name:"\u0412\u0438\u0445\u0440\u044C \u0441\u0442\u0440\u0430\u0441\u0442\u0435\u0439"},{name:"\u0421\u0430\u0434\u0438\u0437\u043C"},{name:"\u0425\u0443\u043B\u0438 \u043F\u0443\u043B\u0438 \u043F\u0440\u0430\u0445\u0443"},{name:"\u0422\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430"},{name:"\u0410\u043D\u0430\u043A\u043E\u043D\u0434\u0430"},{name:"\u0411\u043E\u0440\u043E\u0434\u0430"},"slyoznaya",{name:"\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434"},{name:"\u042F\u0437\u0432\u0430 \u043D\u0430 \u0434\u0443\u0448\u0435"},{name:"Z\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F"}]},kl=s0;var a0={id:"moshchi",name:"\u041C\u043E\u0449\u0438",year:2e3,folder:"/artist/shmely/albums/2000_moshi.jpg",streaming:{spotify:"https://open.spotify.com/album/1xaIDZcBZLaXtnrsfg1Tbr",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_mcpRAnZyTiyTLoYoZlOifD4WoKEopi6vs",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_mGUbrFjlAsspY8eHWwTpWm_7DAB7C5J1s",yandexMusic:"https://music.yandex.ru/album/3444130"},songs:[{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"},{name:"\u042D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u0425\u0430"},"laboratoriya-altruizma",{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0430-\u0432\u0430\u043C\u043F\u0438\u0440"},{name:"\u0412 \u043C\u044F\u0441\u043D\u043E\u043C \u0446\u0435\u0445\u0443 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A \u0434\u0443\u0448\u0438"},{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u041B\u0443\u043A\u0430\u0432\u044B\u0439 \u0441\u0443\u0438\u0446\u0438\u0434"},{name:"\u041F\u0430\u0434\u0430\u043B\u044C"},{name:"\u0410\u0442\u0435\u0438\u0441\u0442"},{name:"\u0420\u0430\u0434\u0438\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B"},{name:"\u041C\u0430\u0441\u0442\u0443\u0440\u0431\u0430\u0442\u043E\u0440"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432 \u0438 \u041A\u0430\u043C\u043D\u0435\u0431\u043B\u044F\u0434\u043E\u0432"}],info:`
\u0412\u043E\u0442 \u0447\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0428\u043C\u0435\u043B\u0438:

"\u0410\u043B\u044C\u0431\u043E\u043C \u041C\u043E\u0449\u0438, \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0433\u0434\u0435-\u0442\u043E \u0432 1999 \u0433. \u0438\u043B\u0438 \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 2000 \u0433. (\u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u043C), \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E-\u0434\u0432\u0435, \u0432\u0434\u0432\u043E\u0451\u043C. \u0410\u043B\u044C\u0431\u043E\u043C \u043F\u0438\u0441\u0430\u043B\u0441\u044F \u043D\u0435 \u0432 \u0441\u0430\u043C\u043E\u0435 \u043B\u0443\u0447\u0448\u0435\u0435 \u043D\u0430\u0448\u0435 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435... \u041A\u0430\u043A \u043F\u043E\u043C\u043D\u0438\u0442\u0441\u044F, \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430 \u0437\u043B\u043E (\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E \u043A\u043E\u043C\u0443) \u0443\u0436\u0430\u0441\u043D\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C, \u041E\u0434\u0438\u043D \u0438\u0437 \u043D\u0438\u0445 - "\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C", \u0430 \u044D\u0442\u043E, \u0442\u0430\u043A \u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C. \u041F\u043E \u0440\u0430\u0437\u043D\u044B\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0441\u0430\u043C\u0438 \u043C\u044B \u0435\u0433\u043E \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u043C. \u0414\u0443\u043C\u0430\u0435\u043C \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0441\u0442\u0438\u043D\u043D\u044B\u043C \u0444\u0430\u043D\u0430\u0442\u0430\u043C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 \u0438\u0437 \u043D\u0435\u0433\u043E \u0443\u0436\u0435 \u0431\u044B\u043B\u0438 \u0432 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u0430\u0445. \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0441\u0435\u043D \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u0440\u0430\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441 \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C\u0438. \u042D\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044F \u0435\u0449\u0451 \u043D\u0435\u043E\u0442\u043C\u0430\u0441\u0442\u0435\u0440\u0451\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0432\u0443\u0447\u0438\u0442 \u0442\u0438\u0445\u043E".
  `},Nl=a0;var u0={id:"trahni-nebo",name:"\u0422\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E",year:2e3,folder:"/artist/shmely/albums/2000_nebo.jpg",songs:[{name:"\u041B\u0430\u0439 \u0438\u043B\u043B\u044E\u0437\u0438\u0438"},{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043E\u043B\u043D\u044B\u0448\u043A\u043E"},"tulovishchej",{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0413\u0430\u043D\u044C\u0431\u0430"},{name:"\u0410\u043B\u043B\u0438\u043B\u0443\u0439\u044F"},"raspyatie","trahni-nebo","divchina-kulya",{name:"\u0417\u0430\u0432i\u0442\u0430\u0439 \u0437\u0430\u0447i\u043A\u0430\u0439"},{name:"\u0424\u0430\u0448\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B"},{name:"\u0422\u0440\u0430\u0432\u044B"}]},Rl=u0;var l0={id:"organizm",name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043C",year:2e3,folder:"/artist/shmely/albums/2000_organizm.jpg",songs:["polna-suma",{name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043C"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439"},{name:"\u041F\u0443\u0442\u044C \u043A... (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435"},"pokidaya-mir","slyoznaya",{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u0418\u0432\u043E\u043B\u0433\u043E\u0439"},{name:"\u0413\u0440\u043E\u0437\u0430 (\u041A\u043B\u043E\u0447\u044C\u044F)"},"laboratoriya-altruizma",{name:"\u0427\u0435\u0440\u0435\u043F \u0438 \u043F\u043E\u0434\u0441\u043D\u0435\u0436\u043D\u0438\u043A"},{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"}]},Ol=l0;var c0={id:"spazmy-roka",name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430",year:2001,folder:"/artist/shmely/albums/2001_spazmi.jpg",streaming:{spotify:"https://open.spotify.com/album/28tVBP8rDTC3eLMVzOAZ5m",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_l79--sEsZYpEuVcmBME0YHVr2cHd5B22U",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_noWkxPhjlR4FF4_LZCf6WX1ztDral0UMg",yandexMusic:"https://music.yandex.ru/album/3444133"},songs:["ya-vselennaya",{name:"\u041C\u0430\u043A\u0435\u0442 \u041C\u0438\u0440\u0430 \u0421\u0447\u0430\u0441\u0442\u044C\u044F"},"na-ladoni-planeta",{name:"\u041E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u0432\u0435\u0442, \u043E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u043B\u0435\u0434"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u0434\u0430"},"patologoanatom","novaya-religiya",{name:"\u0416\u0434\u0430\u0442\u044C"},{name:"\u041C\u043E\u044F \u043B\u044E\u0431\u0438\u043C\u0430\u044F (\u0411\u0435\u0448\u0435\u043D\u044B\u0439 \u043A\u0430\u0439\u0444)"},{name:"\u041D\u0435\u0432\u0435\u0441\u0451\u043B\u0430\u044F \u0441\u043A\u0430\u0437\u043A\u0430"},"saprofag",{name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430"},"volosy",{name:"\u0417\u0430\u0432\u0442\u0440\u0430 \u043D\u0430 \u0432\u044B\u043F\u0438\u0441\u043A\u0443 \u0432 \u0430\u0434 (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0412\u0441\u0451 \u0432\u043E \u0438\u043C\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430"},{name:"\u0411\u043E\u0439"}]},Pl=c0;var d0={id:"risunki-na-dushe",name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435",year:2001,folder:"/artist/shmely/albums/2001_risunki.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79304"},songs:[{name:"Intro"},"skelety",{name:"\u041F\u0443\u0442\u044C \u043A..."},{name:"\u0413\u0440\u043E\u0437\u0430"},"patologoanatom",{name:"\u041F\u043B\u044F\u0448\u0443\u0449\u0438\u0439 \u043A\u0430\u0440\u043B\u0438\u043A"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439"},{name:"\u0417\u0430\u0432\u0442\u0440\u0430 \u043D\u0430 \u0432\u044B\u043F\u0438\u0441\u043A\u0443"},"tulovishchej",{name:"\u041A\u043B\u044E\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043E\u043A"},"laboratoriya-altruizma",{name:"\u0414\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0442\u0430"},"tulovishchej",{name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435"},"skelety",{name:"Outro"}]},Fl=d0;var f0={id:"poshmelye",name:"\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435",year:2002,folder:"/artist/shmely/albums/2002_poshmele.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79307"},songs:["ya-vselennaya",{name:"\u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445"},{name:"\u041E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u0432\u0435\u0442, \u043E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u043B\u0435\u0434"},"na-ladoni-planeta",{name:"\u0413\u0440\u043E\u0437\u0430"},{name:"\u041F\u043E\u043B\u0435"},"poshmelye",{name:"\u041A\u043B\u043E\u0443\u043D"},{name:"\u041F\u0443\u0442\u044C \u043A..."},"volosy",{name:"\u041A\u0440\u043E\u043D\u043E\u0441"},{name:"\u0422\u0435\u043D\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B"},"skelety","patologoanatom","novaya-religiya",{name:"\u0426\u0432\u0435\u0442\u044B"}],info:`
"\u041F\u041E\u0428\u041C\u0415\u041B\u042C\u0415" - \u0441\u0431\u043E\u0440\u043D\u0438\u043A (2002)
\u042D\u0442\u043E\u0442 \u0441\u0431\u043E\u0440\u043D\u0438\u043A \u043F\u0435\u0441\u0435\u043D \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430 \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0430\u043C\u0438 \u0438\u0445 \u0433\u0440\u0443\u043F\u043F\u044B "\u0428\u041C\u0415\u041B\u0418".
\u0412\u044B\u043F\u0443\u0449\u0435\u043D \u0444\u0438\u0440\u043C\u043E\u0439 Moroz Records \u0432 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435 2002 \u0433\u043E\u0434\u0430. \u0412 \u043D\u0435\u0433\u043E \u0432\u043E\u0448\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 2000-2002 \u0433\u043E\u0434\u043E\u0432.
\u041A\u0440\u043E\u043C\u0435 \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430, \u0432 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0435\u0441\u0435\u043D, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B:
\u0421\u043E\u0432\u0430, \u0420\u043E\u0441\u0441, \u0418\u0432\u0430\u043D, A. Waters, \u041C\u0430\u043A\u0441 (\u041A\u0440\u0430\u043D\u0442\u044B), \u0410. \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432.
`},Ll=f0;var h0={id:"negativ-prostranstva",name:"\u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",year:2002,folder:"/artist/shmely/albums/2002_negativ.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79306"},songs:[{name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440"},{name:"\u0412\u0435\u0440\u0430 \u0438 \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u0412\u043E\u043B\u0447\u0438\u0446\u0430"},{name:"\u041D\u0435\u0436\u043D\u043E\u0441\u0442\u044C"},"slyoznaya",{name:"\u041F\u0435\u0440\u0432\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0433\u0440\u0435\u0445"},{name:"\u041B\u0438\u0445\u043E\u0440\u0430\u0434\u0438\u0442 \u043C\u0435\u043D\u044F \u043D\u043E\u0447\u044C"},{name:"\u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430"},{name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0435\u0439\u0441 (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0412\u044B\u0441\u043E\u0442\u0430"},{name:"\u041F\u0440\u043E\u0449\u0430\u0439"},{name:"\u0427\u0435\u0440\u0435\u0437 \u043A\u0440\u0430\u0439"},{name:"\u0411\u0440\u0430\u0433\u0430"},{name:"\u0412\u0441\u0451"},{name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440 (Club MIX)"}]},jl=h0;var p0={id:"agressivnyj-pokoj",name:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",year:2002,folder:"/artist/shmely/albums/2002_pokoy.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79305"},songs:["bol",{name:"\u0422\u044B \u0441\u043D\u0435\u0433 \u0432 \u043C\u043E\u0435\u0439 \u043F\u0440\u0435\u0438\u0441\u043F\u043E\u0434\u043D\u0435\u0439"},{name:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439"},{name:"The First Love"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439 (new version)"},{name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435 (new version)"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435 (1999)"},"blagodat","maneken","laboratoriya-altruizma",{name:"\u0414\u0435\u043D\u044C \u0421\u0432\u044F\u0442\u043E\u0433\u043E \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430"},{name:"\u041E\u0442\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u0433\u0438"},"slyoznaya",{name:"\u041B\u0438\u0431\u043E (remix)"},{name:"\u0413\u0440\u043E\u0437\u0430 (remix)"},{name:"\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0439 \u0437\u0430\u043C\u043E\u043A (live 1999)"},{name:"\u041B\u0430\u043A\u0430\u0439 \u043E\u0442\u0440\u0430\u0432\u0443 (live 1999)"}]},Vl=p0;var m0={id:"polna-suma",name:"\u041F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430",year:2003,folder:"/artist/shmely/albums/2003_suma.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79309"},songs:[{name:"\u0417\u0432\u0435\u0440\u044C"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C"},{name:"\u0422\u043E\u0441\u043A\u0430"},{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},"polna-suma","laboratoriya-altruizma",{name:"\u0412\u043E\u0434\u0430"},{name:"\u0421\u0430\u0434\u0438\u0437\u043C"},{name:"\u0420\u0430\u0434\u0438\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B"},{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442"},{name:"\u0411\u043E\u043C \u043B\u0431\u043E\u043C"},{name:"\u0422\u0438\u0448\u0438\u043D\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u041E\u0431\u043B\u0430\u043A\u0430"},{name:"\u042D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u0425\u0430"},{name:"\u0413\u043E\u0440\u0438, \u043A\u043E\u0441\u0442\u0451\u0440!"},{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0422\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"},{name:"\u0425\u0443\u043B\u0438 \u043F\u0443\u043B\u0438 \u043F\u0440\u0430\u0445\u0443"},{name:"\u0423\u0430-\u0443-\u0443\u0430"}]},Bl=m0;var g0={id:"ostanovite-chelovechestvo",name:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043E",year:2003,folder:"/artist/shmely/albums/2003_ostanovite.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79308"},songs:[{name:"\u0410\u0438\u0441\u0442 \u043D\u0430\u0434 \u0438\u043D\u043A\u0443\u0431\u0430\u0442\u043E\u0440\u043E\u043C"},{name:"\u042F \u0432\u0441\u0451 \u043D\u0430\u0440\u0443\u0448\u0438\u043B"},{name:"\u0412 \u043A\u043B\u043E\u0447\u044C\u044F"},{name:"\u0427\u0443\u0436\u043E\u0439"},{name:"\u0428\u0430\u043D\u0441"},{name:"\u041A\u0440\u0430\u0441\u043E\u0442\u0430"},{name:"\u041D\u0430 \u043C\u043E\u0433\u0438\u043B\u0435 \u043B\u044E\u0431\u0432\u0438"},{name:"\u0411\u0438\u043E-\u043C\u043E\u0442\u043E\u0440"},{name:"\u041E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u044F"},{name:"\u041D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430"},{name:"\u041F\u0440\u043E\u0440\u0432\u0451\u043C\u0441\u044F"},{name:"\u0413\u043E\u043B\u043E\u0441-\u043F\u0430\u043B\u0430\u0447"},{name:"\u041E\u043D"},{name:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043E"},{name:"\u041C\u043E\u0439 \u043F\u0443\u0442\u044C"},{name:"\u0412\u0437\u0433\u043B\u044F\u0434 \u0438\u0437\u043D\u0443\u0442\u0440\u0438"}]},Hl=g0;var y0={id:"zhazhda",name:"\u0416\u0430\u0436\u0434\u0430",year:2004,folder:"/artist/shmely/albums/2004_zh.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79310"},songs:[{name:"\u0416\u0430\u0436\u0434\u0430"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430\u044F (\u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u044F\u044F)"},{name:"\u0421\u0435\u0440\u0430"},{name:"\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u0437\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F)"},{name:"\u0422\u0440\u0443\u0434\u043D\u044B\u0439 \u0440\u0435\u0431\u0451\u043D\u043E\u043A (\u0448\u043A\u043E\u043B\u044C\u043D\u0430\u044F)"},"ya-ne-angel",{name:"\u0414\u0438\u0441\u043A\u043E\u0442\u0435\u043A\u0430 (\u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u044F\u044F)"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C (\u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)"},{name:"\u041A\u043E\u0440\u043E\u0431\u0430\u0441"}],info:`
\u0412\u043D\u0435\u043F\u043B\u0430\u043D\u043E\u0432\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C (\u0442\u0438\u0440\u0430\u0436 100 \u0448\u0442.).
\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201DSka'n'Dall\u201D \u0433. \u0420\u043E\u0432\u043D\u043E. 2004 \u0433.

\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201D\u0428\u041C\u201D

\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B - \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432.


"\u0412 \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043E\u0448\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u0438\u0435, \u0437\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435, \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0443\u0436\u0435 \u0438\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0445 \u0440\u0430\u043D\u0435\u0435 \u0438 \u043D\u043E\u0432\u044B\u0435..."
  `},$l=y0;var v0={id:"ten-serdca",name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430",year:2004,folder:"/artist/shmely/albums/2004_ten.jpg",streaming:{spotify:"https://open.spotify.com/album/7fsVsr0pCmCEpyQ9o2jMXW",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_k_3MQ5DeK39QrTGigpDgrsyMK04F16W-c",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_l8lFy44LN0_BS2JYDee8CyKtCkd3xmfL0",yandexMusic:"https://music.yandex.ru/album/79311"},songs:[{name:"\u0414\u043B\u044F \u043D\u0435\u0451 \u043E\u0434\u043D\u043E\u0439"},{name:"\u0411\u0435\u0439, \u043A\u043E\u043B\u043E\u043A\u043E\u043B!"},{name:"\u041D\u0430\u043F\u0440\u043E\u043B\u043E\u043C"},{name:"\u0412\u043E\u043B\u0447\u044C\u044F \u044F\u0433\u043E\u0434\u0430"},{name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430"},{name:"\u041B\u0438\u0432\u0435\u043D\u044C \u0441\u043B\u0451\u0437"},{name:"\u0412\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0443\u0448"},{name:"\u041A\u0430\u0440\u0443\u0441\u0435\u043B\u044C"},{name:"\u0422\u044C\u043C\u0430"},{name:"\u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0434\u0443\u0448\u0438"},{name:"\u0412\u043C\u0435\u0441\u0442\u0435 \u0443\u043C\u0435\u0440\u0435\u0442\u044C"},{name:"\u0421\u0432\u043E\u0431\u043E\u0434\u0430"},{name:"\u0421\u043F\u0438\u0434\u0432\u0435\u0439"},{name:"\u0412\u043E\u043B\u0447\u044C\u044F \u044F\u0433\u043E\u0434\u0430 (remix)"},{name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430 (remix)"}],info:`
\u041B\u0451\u0441 (\u041B\u0451\u043B\u044F) - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430; \u0428\u043C\u0435\u043B\u044C (\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440) - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043C\u0443\u0437\u044B\u043A\u0430, \u0442\u0435\u043A\u0441\u0442\u044B; \u0420\u043E\u0441\u0441 (\u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432) - \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u0411\u0430\u0437\u0438\u043B\u0438\u043E (\u0418\u0433\u043E\u0440\u044C) - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u041B\u0430\u0440\u0441 (\u042E\u0440\u0430) - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B.
\u041F\u0435\u0441\u043D\u044F \u201D\u0414\u043B\u044F \u043D\u0435\u0451 \u043E\u0434\u043D\u043E\u0439\u201D \u043F\u043E\u0441\u0432\u044F\u0449\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0437\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0443\u0448\u0435\u0434\u0448\u0435\u043C\u0443 \u0438\u0437 \u0436\u0438\u0437\u043D\u0438 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u0443 - \u041D\u0438\u043A\u043E\u043B\u0430\u044E \u0411\u044B\u043A\u043E\u0432\u0443, \u0438 \u0434\u0440\u0443\u0433\u0438\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0443\u0436\u0435 \u043D\u0435\u0442 \u0432 \u0436\u0438\u0432\u044B\u0445.
\u0417\u0430\u043F\u0438\u0441\u044C, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433 \u0438 \u0440\u0435\u043C\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 - \u0420\u043E\u0441\u0441. \u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0430 \u201DSHMELY RECORDS\u201D \u043D\u043E\u044F\u0431\u0440\u044C 2003 \u0433. - \u043C\u0430\u0440\u0442 2004 \u0433. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0442\u0438\u0438 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u201D\u0422\u0415\u041D\u0418\u041F\u201D \u0410. \u0415\u0440\u043C\u0430\u043A\u043E\u0432\u044B\u043C. \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0430 \u201DA.W. studio\u201D. \u0421\u043A\u0440\u0438\u043F\u043A\u0438 \u0432 \u043F\u0435\u0441\u043D\u0435 \u201D\u0422\u0415\u041D\u042C \u0421\u0415\u0420\u0414\u0426\u0410\u201D - \u041C\u0430\u0440\u044C\u044F\u043D\u0430 \u041F\u0438\u0441\u043A\u0430\u0440\u0451\u0432\u0430 (\u0414\u043E\u0441). \u041A\u043B\u0438\u043F - \u0418\u0433\u043E\u0440\u044C \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0438\u0439.
  `},Ul=v0;var w0={id:"lyod",name:"\u041B\u0451\u0434",year:2005,folder:"/artist/shmely/albums/2005_lyod.jpg",streaming:{spotify:"https://open.spotify.com/album/5pL8KLhjDalWkja1X7dKz9",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nXvdHxMP-aZmghtnw-vMDkh7MmjhHzMSc",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lNKOLD4k7WdPQm4mG-38CMnTtmV_Dd-rc",yandexMusic:"https://music.yandex.ru/album/79313"},songs:[{name:"\u041E\u0441\u0438\u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043B"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u043F\u0442\u0438\u0446\u0430"},{name:"\u0421\u043E\u043B\u043D\u0446\u0435 \u043C\u043E\u0451"},{name:"\u041B\u044E\u0431\u043E\u0432\u044C"},{name:"\u041F\u043E\u0432\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430 \u0441\u043D\u043E\u0432"},{name:"\u0418\u0434\u0438"},{name:"\u041F\u043E\u043B\u044B\u043D\u044C"},{name:"\u041B\u0451\u0434"},{name:"\u0428\u0443\u0442\u043A\u0430"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u043B\u0433\u0430"},{name:"\u041D\u0430 \u0442\u043E\u043C \u0441\u0432\u0435\u0442\u0435 \u043C\u044B \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043C\u0441\u044F \u0432\u043D\u043E\u0432\u044C"},{name:"\u041E\u0433\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u0451\u0437\u044B \u0433\u0438\u0435\u043D\u044B"},{name:"\u0414\u0430\u0432\u0438\u0442 \u043D\u0435\u0431\u043E"}],info:`
\u041B\u0451\u0441 (\u041B\u0451\u043B\u044F) - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430; \u0428\u043C\u0435\u043B\u044C (\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440) - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043C\u0443\u0437\u044B\u043A\u0430, \u0442\u0435\u043A\u0441\u0442\u044B; \u0420\u043E\u0441\u0441 (\u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432) - \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u0411\u0430\u0437\u0438\u043B\u0438\u043E (\u0418\u0433\u043E\u0440\u044C) - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u041C\u0430\u0440\u0442\u044B\u043D (\u0410\u043D\u0434\u0440\u0435\u0439) - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B.
\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201DShmely rec.\u201D \u0438 \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u201D\u0422\u0435\u043D\u0438\u043F\u201D (095) 963-71-49. \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433 - \u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432 \u0429\u0435\u0440\u0431\u0430\u0442\u043A\u043E (\u0420\u043E\u0441\u0441).
\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u043E\u043A\u0430\u043B\u043E\u0432 \u0438 \u0434\u0432\u0443\u0445 \u043F\u0435\u0441\u0435\u043D; \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430 \u041A\u043E\u0437\u043B\u043E\u0432\u0430 - \u0431\u0430\u043B\u0430\u043B\u0430\u0439\u043A\u0430; \u041E\u043B\u0435\u0433\u0430 \u0422\u0443\u0440\u0442\u044B\u0433\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430; \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u0430\u0441, \u0437\u0430\u043F\u0438\u0441\u044C.
  `},zl=w0;var b0={id:"vethij-sbornik",name:"\u0412\u0435\u0442\u0445\u0438\u0439 \u0441\u0431\u043E\u0440\u043D\u0438\u043A",year:2005,folder:"/artist/shmely/albums/2005_vs.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79303"},songs:[{name:"\u041F\u043E\u043C\u043E\u043B\u0438\u0441\u044C"},{name:"\u0423 \u0413\u0430\u044E"},{name:"\u041A\u0440\u0438\u0436\u0430\u043D\u0430 \u0432\u043E\u0434\u0430"},{name:"\u0414\u0438\u0432\u043E"},{name:"\u0412\u0435\u0441\u043D\u044F\u043D\u043A\u0430"},{name:"\u041Ci\u0441\u044F\u0446\u044A"},{name:"\u041E-\u041E-\u041E"},{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C"},{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u0414\u0443\u043D\u044F"},{name:"\u0428\u0443\u043B\u043E\u0432\u044C\u0435"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430"},{name:"\u0417\u0430\u0432i\u0442\u0430\u0439"},{name:"\u041E\u0431\u0435\u0441\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0430\u0445"},"saprofag"]},Wl=b0;var D0={id:"vosem-zhenshchin-na-raduge",name:"\u0412\u043E\u0441\u0435\u043C\u044C \u0436\u0435\u043D\u0449\u0438\u043D \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435",year:2005,folder:"/artist/shmely/albums/2005_8.jpg",streaming:{spotify:"https://open.spotify.com/album/3XCE0DFw3NkkTXcIXQUBUG",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_n5v0d9QAPVVjafh936OD9bKmlrdjXaJG0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_k78_d1RVxFP6B04ZnTvobzmfJMMYLNN7o",yandexMusic:"https://music.yandex.ru/album/79312"},songs:[{name:"\u0412\u043F\u0435\u0440\u0435\u0434\u0438"},{name:"\u041F\u043E\u0445\u043E\u0440\u043E\u043D\u044B \u043B\u044E\u0431\u0432\u0438"},{name:"\u041F\u043E\u043B\u043D\u043E\u043B\u0443\u043D\u0438\u0435"},{name:"\u0412\u043E\u0441\u0435\u043C\u044C \u0436\u0435\u043D\u0449\u0438\u043D \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435"},{name:"\u041C\u0435\u043B\u044C\u043F\u043E\u043C\u0435\u043D\u0430"},"ya-ne-angel",{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u0421\u043E\u043B\u043D\u0446\u0435 \u0432\u0430\u043C\u043F\u0438\u0440\u0430"},{name:"\u0425\u0443\u0434\u043E\u0436\u043D\u0438\u043A"},{name:"\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0441\u043D\u0430"},{name:"\u0420\u0438\u0442\u0443\u0430\u043B \u0441\u043E\u0436\u0436\u0435\u043D\u0438\u044F \u043A\u0443\u043A\u043E\u043B"},{name:"\u0413\u043B\u043E\u0442\u043E\u043A"},{name:"\u0421\u0442\u043E\u043D \u043E\u043B\u0438\u0446\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F"},{name:"\u0413\u0434\u0435 \u0435\u0441\u0442\u044C \u0442\u044B"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0431\u0430\u0431\u043E\u0447\u043A\u0430"},{name:"\u0420\u0430\u0434\u0443\u0433\u0430 \u043D\u0430\u0434 \u0431\u0435\u043D\u0437\u0438\u043D\u043E\u0432\u043E\u0439 \u043B\u0443\u0436\u0435\u0439"}],info:`
\u041B\u0401\u0421 - \u0432\u043E\u043A\u0430\u043B, \u0445\u043E\u0440\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u0442\u0438\u0438, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
\u0428\u041C\u0415\u041B\u042C - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u043F\u0430\u0440\u0442\u0438\u0438 \u0443\u0434\u0430\u0440\u043D\u044B\u0445, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
A. WATERS - \u0433\u0438\u0442\u0430\u0440\u0430, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0418\u0432\u0430\u043D \u0422\u0438\u043C\u043E\u0448\u0435\u043D\u043A\u043E - \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430; \u0414\u043E\u0441 - \u0441\u043A\u0440\u0438\u043F\u043A\u0430; \u041F\u0430\u0432\u0435\u043B \u0428\u0443\u0432\u0430\u0435\u0432 - \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430; \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u043E\u0432
"A.W.Studio", \u0441\u0442\u0443\u0434\u0438\u044F "\u0422\u0415\u041D\u0418\u041F" 2005 \u0433.
  `},Gl=D0;var I0={id:"pugovica",name:"\u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430",year:2006,folder:"/artist/shmely/albums/2006_pugovica.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79314"},songs:["intro",{name:"\u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430"},{name:"\u0410\u043D\u0433\u0435\u043B 13"},{name:"\u0421\u0442\u0440\u0438\u043F\u0442\u0438\u0437 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0434\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F"},{name:"\u041C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441"},"gilotina","zver","renessans","antiromantika",{name:"\u0425\u043E\u0434\u0438\u0442 \u0447\u0451\u0440\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u043B\u0435\u0432\u0430"},{name:"\u0412\u0430\u043B\u044C\u0441 \u0432\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u044B\u0445 \u0432\u043E\u043B\u043D"},{name:"\u041A\u0430\u0442\u0451\u043D\u043A\u0430"},{name:"\u041C\u0438\u0440 - \u043A\u043E\u043C\u0435\u0434\u0438\u044F"},"sudorogi"],info:`
\u0421\u043E\u043B\u044C\u043D\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C \u041B\u0451\u0441\u0430 \u0438 \u0428\u043C\u0435\u043B\u044F \u041F\u0423\u0413\u041E\u0412\u0418\u0426\u0410
\u0418\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043B\u0441\u044F \u043A\u0430\u043A \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439. \u041D\u043E \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F \u0431\u044B\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430. \u0412 \u043D\u0435\u0433\u043E \u0432\u043E\u0448\u043B\u0438 \u0442\u0430\u043A\u0436\u0435 \u043F\u0435\u0441\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 Lyolya & Shmel'. \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0432 \u0445\u043E\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u0438\u043D\u044F\u043B \u0443\u0447\u0430\u0441\u0442\u0438\u0435 Alan Waters. \u0422\u0430\u043A \u0447\u0442\u043E \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043F\u043E\u043B\u043D\u0435 \u043C\u043E\u0436\u043D\u043E \u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u043E\u0439 \u0428\u041C \u0438 AW, \u0435\u0441\u043B\u0438 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u0432 \u0441\u0447\u0451\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u043F\u0435\u0441\u0435\u043D.
  `},ql=I0;var C0={id:"ya-vernus-k-tebe",name:"\u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u043A \u0442\u0435\u0431\u0435",year:2006,folder:"/artist/shmely/albums/2006_vernus.jpg",songs:[{name:"\u0416\u0434\u0438 \u043C\u0435\u043D\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u0447\u044C"},{name:"\u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445"},{name:"\u0412\u044C\u044E\u0433\u0430"},"laboratoriya-altruizma",{name:"\u0413\u0440\u043E\u0437\u0430"},"biomekhanika",{name:"\u041A\u043B\u043E\u0443\u043D \u0443\u043C\u0435\u0440"},"bol","pokidaya-mir",{name:"\u0412\u0441\u0435 \u043C\u0435\u0447\u0442\u044B \u0441\u0431\u044B\u0432\u0430\u044E\u0442\u0441\u044F"},{name:"\u0414\u0440\u0430\u043C\u0430"},{name:"\u042D\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440"},{name:"\u0414\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F"}],info:`
\u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u0432 \u0438 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u0432, \u0437\u0434\u0435\u0441\u044C \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u0440\u0435\u0448\u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0436\u0438\u0432\u044B\u0435 \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u0447\u0442\u043E, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u043E\u0442\u0440\u0430\u0437\u0438\u043B\u043E\u0441\u044C \u043D\u0430 \u043E\u0431\u0449\u0435\u043C \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B. \u0412\u043E \u043C\u043D\u043E\u0433\u043E\u043C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u043E\u0432\u043E\u043C\u0443 \u0432\u0442\u043E\u0440\u043E\u043C\u0443 \u0433\u0438\u0442\u0430\u0440\u0438\u0441\u0442\u0443 \u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0446\u0443 \u0441\u0430\u0443\u043D\u0434 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0442\u044F\u0436\u0435\u043B\u0438\u043B\u0441\u044F, \u0433\u0438\u0442\u0430\u0440\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0435\u0432\u0443\u0442 \u0438 \u0440\u0430\u0437\u0434\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u043C\u043E\u0449\u044C\u044E \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u0430\u043B\u044C\u0431\u043E\u043C\u0430. \u0422\u0430\u043A\u043E\u0433\u043E \u043C\u043E\u0449\u043D\u043E\u0433\u043E \u0437\u0432\u0443\u043A\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430.
\u041F\u043E \u0441\u0443\u0442\u0438 \u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u043A \u0442\u0435\u0431\u0435... \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u043C, \u0430 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C \u0438\u0437 \u043A\u043E\u0440\u043E\u043D\u043D\u044B\u0445 \u0436\u0438\u0432\u044B\u0445 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B, \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043D\u043E\u0432\u043E, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0430\u0440\u044B \u043D\u043E\u0432\u044B\u0445 \u043F\u0435\u0441\u0435\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043F\u0440\u043E\u0447\u0435\u043C, \u043D\u0435 \u0443\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u0432 \u0445\u0438\u0442\u043E\u0432\u043E\u0441\u0442\u0438 \u0441\u0442\u0430\u0440\u044B\u043C \u043F\u0435\u0441\u043D\u044F\u043C. \u0417\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u043B\u043E\u043D\u043D\u0438\u043A\u0438 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u0430 \u043D\u0430\u0439\u0434\u0443\u0442 \u0442\u0430\u043A\u0438\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043A\u0430\u043A \u0411\u043E\u043B\u044C, \u0413\u0440\u043E\u0437\u0430, \u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445 \u0438 \u0434\u0430\u0436\u0435 \u0442\u0430\u043A\u0443\u044E \u0434\u0440\u0435\u0432\u043D\u044E\u044E \u043F\u0435\u0441\u043D\u044E \u043A\u0430\u043A \u0412\u044C\u044E\u0433\u0430. \u041A \u043C\u0438\u043D\u0443\u0441\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043D\u0435\u0441\u0442\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437\u043C\u044B\u0442\u044B\u0439 \u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0436\u0438\u0432\u043E\u0439 \u0437\u0432\u0443\u043A, \u043F\u043E\u0440\u043E\u0439, \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0430\u043B\u044C\u0431\u043E\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043D\u044F\u0442\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043D\u0438\u043A\u043E\u043C, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0432\u0440\u0430\u0437\u0443\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u0432 \u0432\u0438\u0434\u0435 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0414\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F.
  `},Yl=C0;var E0={id:"koshkiny-obidy",name:"\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B",year:2007,folder:"/artist/shmely/albums/2007_obidy.jpg",streaming:{spotify:"https://open.spotify.com/album/4GUxH5Jfgjt8as9HOTgert",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_lR7Pe58N1QAhRwvosJkNnfAnnm1vtxoS0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lDcR1z3lQhYexnJx3XtUCozmhSDzgbLuw",yandexMusic:"https://music.yandex.ru/album/3444128"},songs:[{name:"\u0423\u0445\u043E\u0434\u0438"},{name:"\u0427\u0435\u0440\u0435\u043F. \u0421\u043B\u0451\u0437\u044B."},{name:"\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B"},{name:"\u041F\u0430\u043D\u0442\u043E\u043C\u0438\u043C\u0430"},{name:"\u041C\u0435\u0447"},{name:"\u0420\u0430\u0432\u043D\u043E\u0434\u0443\u0448\u043D\u043E"},{name:"\u0417\u043B\u043E \u0440\u0435\u043A\u0438"},{name:"\u041B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0438\u0445\u043E\u0434"},{name:"\u0416\u0435\u0440\u0442\u0432\u0430"},{name:"\u0421\u0443\u0435\u0442\u0430"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430 \u043A \u043C\u043E\u0440\u044E"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u043B\u0435\u0442\u0443\u0447\u0430\u044F \u043C\u044B\u0448\u044C"},{name:"\u0417\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u043E\u043C (Shado News)"},{name:"La Rencontre (Steve Love)"}],info:`
\u0414\u0432\u043E\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u0443\u0442\u044C \u043F\u0440\u0438\u0440\u043E\u0434\u044B \u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u0441\u0435\u043B\u0435\u043D\u043D\u044B\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u043B\u044F\u043D\u0443\u0442\u044C, \u0432\u0441\u0435\u0433\u043E \u043B\u0438\u0448\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0432 \u0443\u0433\u043E\u043B \u0432\u0437\u0433\u043B\u044F\u0434\u0430 \u043D\u0430 \u043C\u0438\u0440 \u041D\u0443\u0436\u043D\u043E \u043B\u0438\u0448\u044C \u043D\u0435\u043C\u043D\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0441\u0432\u043E\u0438\u043C\u0438 \u0433\u043B\u0430\u0437\u0430\u043C\u0438 \u0443\u0432\u0438\u0434\u0435\u0442\u044C, \u043A\u0430\u043A \u0432\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F, \u0441\u043B\u043E\u0432\u043D\u043E \u043F\u043B\u043E\u0441\u043A\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438-\u043C\u0438\u0448\u0435\u043D\u0438 \u0432 \u0442\u0438\u0440\u0435, \u043E\u0431\u043D\u0430\u0436\u0430\u044F \u0441\u0432\u043E\u044E \u0436\u0435\u043C\u0447\u0443\u0436\u043D\u043E-\u043A\u0440\u043E\u0432\u0430\u0432\u0443\u044E, \u043F\u0430\u0440\u0447\u043E\u0432\u043E-\u043B\u0435\u043F\u0435\u0441\u0442\u043A\u043E\u0432\u0443\u044E \u0438\u0437\u043D\u0430\u043D\u043A\u0443. \u0426\u0430\u0440\u0441\u0442\u0432\u043E \u0433\u0440\u043E\u0442\u0435\u0441\u043A\u0430, \u0438\u0433\u0440\u0430 \u0441\u0432\u0435\u0442\u0430 \u0438 \u0442\u044C\u043C\u044B, \u0442\u0435\u0430\u0442\u0440 \u0442\u0435\u043D\u0435\u0439, \u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u044B\u0445 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F\u043C\u0438\u2026 \u0418 \u0432\u043E\u0442 \u0432 \u043D\u0435\u044F\u0441\u043D\u044B\u0445 \u043A\u043B\u0443\u0431\u0430\u0445 \u0441\u0438\u0433\u0430\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u0434\u044B\u043C\u0430 \u043F\u0440\u043E\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u043E\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u044F \u0447\u0435\u0440\u0435\u043F\u043E\u0432, \u0430 \u0442\u0435\u043C\u043D\u0430\u044F \u043C\u043E\u043B\u0447\u0430\u043B\u0438\u0432\u0430\u044F \u0440\u0435\u043A\u0430 \u043E\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u043A\u0440\u043E\u0432\u0430\u0432\u043E-\u043A\u0440\u0430\u0441\u043D\u044B\u0439\u2026 \u0421\u044E\u0440\u0440\u0435\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u043E \u0438 \u0432 \u0442\u043E \u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u0442\u0430\u043A \u0431\u043B\u0438\u0437\u043A\u043E \u2013 \u044D\u0442\u043E \u043D\u0430 100% \u043E \u0433\u0440\u0443\u043F\u043F\u0435 \u0428\u041C\u0435\u043B\u0438.

\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u041E\u0431\u0438\u0434\u044B \u2013 \u043E\u0441\u0435\u043D\u043D\u0435-\u0437\u0438\u043C\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446 \u043D\u0430 \u0441\u0442\u044B\u043B\u043E\u043C \u0432\u0435\u0442\u0440\u0443. \u041D\u0435 \u043D\u0430\u0447\u0430\u0432 \u0441 \u043F\u0435\u0440\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438, \u0430 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0442\u044F\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u043A \u0442\u0440\u0435\u0442\u044C\u0435\u0439 (\u0438\u0437-\u0437\u0430 \u043E\u0434\u043D\u043E\u0438\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F), \u0432\u0440\u044F\u0434 \u043B\u0438 \u043D\u0435 \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0448\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043C\u043E\u0442\u0438\u0432 \u0438 \u0441\u043B\u043E\u0432\u0430 \u0435\u0435 \u043F\u0440\u0438\u043F\u0435\u0432\u0430, \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0439 \u0432\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u043D\u0435\u0440\u0435, \u043A\u0430\u043A \u0431\u0443\u0434\u0442\u043E \u0431\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u0438\u0436\u0435\u043D\u043D\u044B\u043C \u0433\u043E\u043B\u043E\u0441\u043E\u043C. \u0418 \u0442\u0440\u0443\u0434\u043D\u043E \u0441 \u0445\u043E\u0434\u0443 \u043D\u0435 \u043F\u0440\u043E\u043D\u0438\u043A\u043D\u0443\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u043F\u0430\u0442\u0438\u0435\u0439 \u043A \u0442\u0430\u043A\u043E\u0439 \u0441\u0432\u043E\u0435\u043E\u0431\u0440\u0430\u0437\u043D\u043E\u0439, \u0434\u0430\u0436\u0435 \u0432 \u0447\u0435\u043C-\u0442\u043E \u0442\u0440\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0435\u0441\u043D\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043F\u043B\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u0441 \u0433\u0440\u0443\u0441\u0442\u043D\u043E\u0439 \u0441\u043E\u0437\u0435\u0440\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E, \u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u044B \u0441\u043C\u0435\u0440\u0442\u0438 \u2013 \u0441\u043E \u0441\u0432\u0435\u0442\u043B\u044B\u043C\u0438 \u043E\u0431\u0440\u0430\u0437\u0430\u043C\u0438.

\u041F\u0440\u044B\u0433\u043D\u0435\u043C \u0437\u0430 \u043F\u043E\u0440\u043E\u0433 \u2013
\u0422\u0430\u043C \u0421\u0435\u0432\u0435\u0440\u0430 \u0412\u043E\u0441\u0442\u043E\u043A \u041C\u043E\u0441\u043A\u0432\u044B.
\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, \u044D\u0442\u043E \u043C\u044B \u2013
\u0422\u0432\u043E\u0438 \u043A\u043E\u0448\u043A\u0438 \u0438 \u043A\u043E\u0442\u044B.

\u041F\u0440\u043E\u043D\u0438\u043A\u043D\u0443\u0432\u0448\u0438\u0441\u044C, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0448\u044C \u043C\u0443\u0437\u044B\u043A\u0435 \u0434\u0432\u0435\u0440\u044C \u0438 \u0441\u0442\u0430\u0432\u0438\u0448\u044C \u0430\u043B\u044C\u0431\u043E\u043C \u0442\u0435\u043F\u0435\u0440\u044C \u0443\u0436\u0435 \u043A\u0430\u043A \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043E \u2013 \u0441 \u0441\u0430\u043C\u043E\u0433\u043E \u043D\u0430\u0447\u0430\u043B\u0430. \u0414\u0432\u0435\u0440\u044C.. \u0418\u043B\u0438 \u043A\u0440\u044B\u0448\u043A\u0443 \u043F\u0430\u043D\u0434\u043E\u0440\u0438\u043D\u043E\u0433\u043E \u044F\u0449\u0438\u043A\u0430

\u0413\u043E\u043B\u043E\u0441 \u041B\u0435\u0441 \u2013 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439, \u0447\u0430\u0440\u0443\u044E\u0449\u0438\u0439, \u043F\u0440\u043E\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u043D\u044B\u0439, \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0439 \u0441\u043E\u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043B\u0438\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0433\u0435\u0440\u043E\u044F\u043C \u2013 \u043F\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u0443 \u0447\u0435\u0442\u043A\u043E \u043E\u0431\u0432\u0435\u0434\u0435\u043D \u043D\u0438\u0437\u043A\u0438\u043C \u0433\u043E\u043B\u043E\u0441\u043E\u043C \u0428\u043C\u0435\u043B\u044F. \u041D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u044B\u043C \u043E\u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0434\u0443\u044D\u0442 \u0441\u043E SteveLove . \u0415\u0449\u0451 \u043E\u0434\u0438\u043D \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u043D\u044B\u0439 \u0433\u043E\u043B\u043E\u0441, \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u0439 \u0432\u043E\u043A\u0430\u043B\u0438\u0441\u0442\u043A\u0435 Shado News , \u0443\u0436\u0435 \u0432 \u0431\u043E\u043B\u0435\u0435 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043C\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0432\u043E\u0439 \u0431\u0430\u043B\u043B\u0430\u0434\u0435 \u0441 \u0438\u0441\u0442\u0435\u0440\u0438\u0447\u043D\u043E-\u0434\u0440\u0430\u043C\u0430\u0442\u0438\u0447\u043D\u043E\u0439 \u043B\u0438\u0440\u0438\u043A\u043E\u0439 \u0442\u043E\u0447\u043D\u043E \u043D\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u0440\u0430\u0432\u043D\u043E\u0434\u0443\u0448\u043D\u044B\u043C \u043F\u043E\u043A\u043B\u043E\u043D\u043D\u0438\u043A\u043E\u0432 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u043E\u0432.

\u0413\u0438\u0442\u0430\u0440\u044B \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u043E\u0432 \u2013 \u0442\u043E \u0443\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D \u0440\u0438\u0442\u043C-\u0441\u0435\u043A\u0446\u0438\u0438, \u0442\u043E \u0432\u043D\u043E\u0432\u044C \u0440\u0430\u0434\u0443\u044E\u0449\u0438\u0435 \u0443\u0445\u043E \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u044F\u0440\u043A\u0438\u043C \u0438\u043D\u0434\u0430\u0441\u0442\u0440\u0438\u0430\u043B-\u043C\u0435\u0442\u0430\u043B \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u0435\u043C; \u0431\u043B\u0438\u0441\u0442\u0430\u044E\u0449\u0438\u0435 \u0432 \u0441\u043E\u0447\u043D\u043E\u043C \u0433\u0438\u0442\u0430\u0440\u043D\u043E\u043C \u0441\u043E\u043B\u043E \u0441 \u0431\u043B\u044E\u0437\u043E\u0432\u043E\u0439 \u043C\u0435\u043B\u043E\u0434\u0438\u043A\u043E\u0439 (\u041C\u0435\u0447); \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u0414\u043E\u0440\u043E\u0433\u0438 \u043A \u043C\u043E\u0440\u044E \u043D\u0435\u043E\u0431\u044B\u0447\u043D\u043E \u0441\u043F\u043E\u0440\u044F\u0449\u0438\u0435 \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043E\u043C, \u043F\u0440\u0438\u0432\u043E\u0434\u044F \u0442\u043E \u043C\u0440\u0430\u0447\u043D\u043E-\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0444\u0430\u043D\u043A\u043E\u0432\u043E-\u0440\u0430\u0441\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u043D\u044B\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B.

\u041F\u0440\u0438\u0432\u044B\u0447\u043D\u0430\u044F \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u043D\u043E-\u0442\u0440\u0435\u0432\u043E\u0436\u043D\u0430\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E \u0437\u0430\u0432\u044F\u0437\u0430\u043D\u043D\u0430\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u043C \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u0438. \u042D\u0442\u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0432\u043A\u0440\u0430\u043F\u043B\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u0438\u0433\u0440\u0430\u044E\u0442 \u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0432 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u043E\u0442\u043D\u0430 \u0438 \u043A\u0430\u0436\u0443\u0442\u0441\u044F \u043D\u0435\u043E\u0442\u044A\u0435\u043C\u043B\u0435\u043C\u044B\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u043C \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0439.

\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043D\u044B\u043C\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F\u043C\u0438-\u0442\u0440\u0438\u043B\u043B\u0435\u0440\u0430\u043C\u0438, \u043F\u043E\u0432\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u043E \u0434\u0440\u0430\u043C\u0435 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0431\u0435\u0441\u0441\u0438\u043B\u0438\u044F, \u043B\u044E\u0431\u043E\u0432\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F\u0445, \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0435 \u0441 \u0441\u043E\u0446\u0438\u0443\u043C\u043E\u043C, \u043C\u0440\u0430\u0447\u043D\u043E\u0439 \u0440\u0435\u0444\u043B\u0435\u043A\u0441\u0438\u0438, \u043F\u0440\u0435\u0434\u0432\u043A\u0443\u0448\u0435\u043D\u0438\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u044B \u043F\u043E \u0434\u043E\u0440\u043E\u0433\u0435 \u043A \u043C\u043E\u0440\u044E\u2026 \u042D\u0442\u043E \u0438\u0433\u0440\u0430 \u0441\u0432\u0435\u0442\u0430 \u0438 \u0442\u0435\u043D\u0438, \u0433\u0434\u0435 \u0431\u0435\u0437\u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u044C \u0431\u0443\u0440\u0438 \u0441\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0431\u043B\u0438\u043A\u0430\u043C\u0438 \u0441\u043E\u043B\u043D\u0446\u0430, \u043F\u0440\u043E\u0433\u043B\u044F\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u043C\u0438 \u0441\u043A\u0432\u043E\u0437\u044C \u0442\u0443\u0447\u0438. \u0413\u0434\u0435 \u0435\u0449\u0435 \u0421\u0435\u0432\u0435\u0440 \u0438 \u0412\u043E\u0441\u0442\u043E\u043A \u043C\u0438\u0440\u043D\u043E \u0441\u043E\u0439\u0434\u0443\u0442\u0441\u044F \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0435 \u2013 \u043A\u0440\u043E\u043C\u0435 \u043A\u0430\u043A \u0432 \u043D\u043E\u0432\u043E\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0428\u041C\u0435\u043B\u0438 \u041A\u043E\u0448\u043A\u0438\u043D\u044B \u041E\u0431\u0438\u0434\u044B..
\u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u043D\u0430 Dizzaster.

\u0412 \u0430\u043B\u044C\u0431\u043E\u043C\u0435 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u041B\u0451\u0441 - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430; \u0428\u043C\u0435\u043B\u044C - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430; \u0411\u0430\u0437\u0438\u043B\u0438\u043E - \u0433\u0438\u0442\u0430\u0440\u0430, \u0418\u0432\u0430\u043D \u0422\u0438\u043C\u043E\u0448\u0435\u043D\u043A\u043E - \u0433\u0438\u0442\u0430\u0440\u0430. \u0422\u0430\u043A\u0436\u0435 \u043D\u0430 \u0430\u043B\u044C\u0431\u043E\u043C\u0435 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0434\u0432\u0430 \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0431\u043E\u043D\u0443\u0441\u0430 \u0438\u0437 \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430 + \u043A\u043B\u0438\u043F + \u0444\u043E\u0442\u043E.
  `},Zl=E0;var x0={id:"karamelnyye-strahi",name:"\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438",year:2008,folder:"/artist/shmely/albums/2008_strahi.jpg",streaming:{spotify:"https://open.spotify.com/album/7biUa81AdYs3MZ44VKMJXr",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_mP9ymhFypJA4WYW-baAVJ0yKUwGO0-M8g",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nXeF2ClIBVJ0TsyEbRNV7FoJFjjtssJUY",yandexMusic:"https://music.yandex.ru/album/3444127"},songs:[{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u0432 \u0441\u0435\u0440\u043E\u043C"},{name:"\u0421\u0432\u0430\u0434\u044C\u0431\u044B \u043D\u0435 \u0431\u0443\u0434\u0435\u0442"},{name:"\u041C\u0430\u043C\u0430"},{name:"\u041D\u0435\u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435 \u0441\u043D\u044B (\u0441\u0442\u0438\u0445)"},{name:"\u041A\u043E\u043B\u044B\u0431\u0435\u043B\u044C\u043D\u0430\u044F+"},{name:"\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438"},{name:"\u0420\u0430\u043D\u044B"},{name:"\u042F \u0442\u0435\u0431\u044F \u043B\u044E\u0431\u043B\u044E"},{name:"\u0417\u043C\u0435\u044F \u044D\u0439\u0444\u043E\u0440\u0438\u044F"},{name:"\u042F \u0431\u0443\u0434\u0443 \u0436\u0438\u0442\u044C"},{name:"\u041D\u0435\u0440\u0432\u044B"},{name:"\u041B\u0438\u0440\u0438\u043A\u0430"},{name:"\u0426\u0432\u0435\u0442 \u0434\u043E\u0436\u0434\u044F (bonus track)"},{name:"\u0412 \u0436\u0438\u0432\u044B\u0445 \u0438\u0433\u0440\u0430\u044E\u0442 \u043C\u0435\u0440\u0442\u0432\u0435\u0446\u044B (bonus track)"}]},Kl=x0;var S0={id:"moskovskaya-yarmarka-udovolstvij",name:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u044F\u0440\u043C\u0430\u0440\u043A\u0430 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0439",year:2009,folder:"/artist/shmely/albums/2009_myau.jpg",streaming:{spotify:"https://open.spotify.com/album/0wzOwUeEa3fVPI77pJRK8E",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_loV5x6XOgMrmUH5w9d1IlTiuF_jGr3ll8",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nH21z5pDqYVpk4W06KePL0KE-pMCeRVCw",yandexMusic:"https://music.yandex.ru/album/3444131"},songs:[{name:"\u0412\u0441\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C"},{name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430 \u0441 \u0447\u0451\u0440\u043D\u044B\u043C\u0438 \u0431\u0430\u043D\u0442\u0438\u043A\u0430\u043C\u0438"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0442\u0435\u043D\u044C"},{name:"\u0416\u0451\u043B\u0443\u0434\u0438"},{name:"\u041B\u044E\u0431\u043E\u0432\u044C \u0438\u0437 \u0441\u0442\u0435\u043A\u043B\u0430"},{name:"\u041B\u0430\u0441\u043A\u0430"},{name:"\u041A\u0440\u0438\u0437\u0438\u0441"},{name:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u044F\u0440\u043C\u0430\u0440\u043A\u0430 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0439"},{name:"\u041F\u0438\u0440"},{name:"\u0414\u0432\u0435 \u0441\u0442\u043E\u043B\u0438\u0446\u044B"},{name:"\u0411\u0440\u044E\u0445\u043E"},{name:"\u0417\u043E\u044F"},{name:"\u0413\u0434\u0435? (bonus track)"},{name:"\u0421 \u041D\u043E\u0432\u044B\u043C \u0433\u043E\u0434\u043E\u043C (bonus track)"},{name:"\u041C\u043B\u0435\u0447\u043D\u0430\u044F \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u044F (bonus track)"}]},Ql=S0;var M0={id:"mekhanicheskaya-balerina",name:"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430",year:2010,folder:"/artist/shmely/albums/2010_balerina.jpg",streaming:{spotify:"https://open.spotify.com/album/0AoYg8ddVNIoismWBYv7jp",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_lKAK6qxtulNpigAsSzglJMTDsX86CWRZg",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_kAfpmxC-5vpT_zMwug5HcuXsnFi4l41bo",yandexMusic:"https://music.yandex.ru/album/3444129"},songs:[{name:"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430"},{name:"\u041B\u044E\u0434\u0438"},{name:"\u041A\u0430\u043A\u043E\u0444\u043E\u043D\u0438\u044F \u0441\u0435\u0440\u0434\u0435\u0446"},{name:"\u0412\u0435\u0449\u0438\u0439 \u0441\u043E\u043D"},{name:"\u041F\u0440\u0451\u0442? \u0422\u0430\u043A \u043F\u0440\u0438!"},{name:"\u0416\u0433\u0438"},{name:"\u041B\u044B\u0441\u0430\u044F \u0433\u043E\u0440\u0430"},{name:"\u041D\u0435\u0431\u043E \u043F\u0440\u043E\u0442\u0438\u0432"},{name:"\u041A\u043E\u0442\u0435\u0439\u043A\u0430 \u043D\u0430 \u0442\u0440\u0451\u0445 \u043D\u043E\u0436\u043A\u0430\u0445"},{name:"\u0421\u043D\u043E\u0432\u0430 \u043F\u0440\u043E \u043B\u044E\u0431\u043E\u0432\u044C, \u0431\u043B\u0438\u043D"},{name:"\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C"},{name:"\u041A\u043E\u043B\u044B\u0431\u0435\u043B\u044C\u043D\u0430\u044F++"},{name:"\u0410\u0435\u043B\u044C-\u0410\u0443\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0438\u0433\u0440\u0430 (bonus track)"}]},Jl=M0;var T0={id:"toplivo",name:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E",year:2010,folder:"/artist/shmely/albums/2010_toplivo.jpg",streaming:{spotify:"https://open.spotify.com/album/0frmw2fWFkFtuoeobgciN8",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kkufNdmy_VwLed5KlwFD4q4LfGwmPF8JU",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nFcLyMsmp6FHj0wt6J3w--1qXcmgyX_xY",yandexMusic:"https://music.yandex.ru/album/3444135"},songs:[{name:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E-\u0436\u0438\u0437\u043D\u044C"},{name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u0438 \u0442\u044B"},{name:"\u041F\u0430\u0440\u0443\u0441\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u0437\u0430 \u0440\u0443\u043B\u0451\u043C"},{name:"\u0427\u0435\u0440\u0451\u043C\u0443\u0445\u0430"},{name:"\u041C\u0435\u043B\u0430\u043D\u0445\u043E\u043B\u0438\u044F"},{name:"\u041B\u0430\u0441\u043A\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0434\u0435\u0446"},{name:"\u041D\u0430\u0439\u0434\u0438..."},{name:"\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0435\u0447\u0442\u044B"},{name:"\u0425\u0432\u043E\u0440\u044C"},{name:"\u0414\u043E\u043A\u0442\u043E\u0440 \u041C\u043E\u0442\u043E\u0440\u0444\u0438\u043B"},{name:"\u041D\u0435\u0444\u0442\u044C \u0410\u043B\u043B\u0438\u043B\u0443\u0439\u044F"},{name:"\u0425\u043E\u0440\u043E\u0432\u043E\u0434"},{name:"\u041F\u043B\u044E\u0448\u0435\u0432\u044B\u0435 \u0437\u043E\u043C\u0431\u0438"},{name:"\u0422\u0440\u0443\u043D\u0430 \u043D\u0430 \u043A\u043E\u043B\u0451\u0441\u0430\u0445"},{name:"\u0411\u043E\u0433 \u043B\u044E\u0431\u0438\u0442 \u0441\u0435\u0431\u044F"}]},Xl=T0;var _0={id:"cekh-po-reabilitacii-paranoikov",name:"\u0426\u0435\u0445 \u043F\u043E \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043D\u043E\u0438\u043A\u043E\u0432",year:2011,folder:"/artist/shmely/albums/2010_crp.jpg",streaming:{spotify:"https://open.spotify.com/album/74KcaQJrAjhzeHvW6rZUIQ",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nvSuftR3G7q_K8Vs-fiCNpZl3ElyIU9aI",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_mPPAXZrdGJIx_q2kUTz6POPoJdG26koUc",yandexMusic:"https://music.yandex.ru/album/3444136"},songs:[{name:"\u0421\u0432\u0435\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F"},{name:"\u041E\u0442\u0432\u0430\u043B\u0438, \u043C\u043E\u044F \u0447\u0435\u0440\u0435\u0448\u043D\u044F"},{name:"\u0411\u044B\u043B\u0438 \u043C\u044B (new version)"},{name:"\u042F \u0445\u043E\u0447\u0443 \u0431\u044B\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u043E\u043C"},{name:"\u041A\u0430\u0442\u0451\u043D\u043A\u0430 (new version)"},{name:"\u0426\u0435\u0445 \u043F\u043E \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043D\u043E\u0438\u043A\u043E\u0432"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430-2 (\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435)"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430 (new version)"},{name:"\u0417\u0430\u0433\u043E\u0432\u043E\u0440\u043A\u0430"},{name:"\u041F\u0430\u043D\u0438\u043A\u0430 (\u0438\u0437 \u0446\u0438\u043A\u043B\u0430 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438)"},{name:"\u041F\u043E\u0447\u0442\u0430"},{name:"\u0425\u0430\u043B\u044F\u0432\u0430 (\u0438\u0437 \u0446\u0438\u043A\u043B\u0430 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438)"}]},ec=_0;var A0={id:"teatr-urodov",name:"\u0422\u0435\u0430\u0442\u0440 \u0443\u0440\u043E\u0434\u043E\u0432",year:2011,folder:"/artist/shmely/albums/2011_teatr.jpg",streaming:{spotify:"https://open.spotify.com/album/40ou3ofmt60WN6Z1LXpF0p",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kziusKHBqOaVCF3vKxL1PcshlkPV1UU5U",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_liV01e1JDnannkLWqdmM7BJv613aPj9Ws",yandexMusic:"https://music.yandex.ru/album/3444134"},songs:[{name:"\u0423\u043B\u0451\u0442"},{name:"\u0421\u0430\u043D\u0438\u0442\u0430\u0440\u043A\u0430"},{name:"\u0422\u0430\u0442\u0443 \u043D\u0430 \u043F\u043E\u043F\u0435"},{name:"\u041C\u0430\u044D\u0441\u0442\u0440\u043E \u0443\u0436\u0430\u0441\u043E\u0432"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430 \u043F\u0443\u0441\u0442\u0430"},{name:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043F\u043E\u0435\u0437\u0434"},{name:"\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A"},{name:"\u041F\u043E\u0446\u0435\u043B\u0443\u0438"},{name:"\u0410\u0445, \u0443 \u0435\u043B\u0438"},{name:"\u041C\u0430\u043B\u043E"},{name:"\u0422\u0435\u0430\u0442\u0440 \u0443\u0440\u043E\u0434\u043E\u0432"},{name:"\u041A\u0440\u0410\u0417 255"},{name:"\u0421\u0443\u0434\u044C\u0431\u0430"},{name:"\u041C\u0443-\u041C\u0443 \u0436\u0438\u0432\u0430"}]},tc=A0;var k0={id:"para-trupov",name:"\u041F\u0430\u0440\u0430 \u0442\u0440\u0443\u043F\u043E\u0432",year:2013,folder:"/artist/shmely/albums/2013_para.jpg",streaming:{spotify:"https://open.spotify.com/album/6AfviE2K704Bym6YNCdMMk",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nTkPpeyc83R9Kt6M9PaGmyy59OHDa5ovQ",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nQT0FMPii6bQHu7gPMH0Cu3X9kinOkYbU",yandexMusic:"https://music.yandex.ru/album/3444132"},songs:[{name:"\u0417\u0432\u0451\u0437\u0434\u044B \u0441\u0432\u0435\u0442\u044F\u0442 \u044F\u0440\u0447\u0435"},{name:"\u0411\u0435\u043B\u044B\u0435 \u0447\u0443\u043B\u043E\u0447\u043A\u0438"},{name:"\u041F\u0430\u0440\u0430 \u0442\u0440\u0443\u043F\u043E\u0432"},{name:"\u041D\u0430 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u043C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0435"},{name:"\u041D\u043E\u0432\u0430\u044F \u0440\u0430\u0434\u043E\u0441\u0442\u044C"},{name:"\u041A\u0443\u043A\u043B\u0430 \u0413\u0435\u0440\u0434\u0430"},{name:"\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0438 \u041C\u043E\u0441\u043A\u0432\u044B"},{name:"\u0414\u0438\u0437\u0430\u0439\u043D"},{name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u043F\u043E \u0410\u0434\u0443"},{name:"\u0410\u043D\u0441\u0430\u043C\u0431\u043B\u044C"},{name:"\u0413\u0440\u043E\u0431\u043E\u0432\u0449\u0438\u043A"}]},nc=k0;var N0={id:"belyj-karandash",name:"\u0411\u0435\u043B\u044B\u0439 \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448",year:2014,folder:"/artist/shmely/albums/2014_karandash.jpg",streaming:{spotify:"https://open.spotify.com/album/4BKbUBCtcHXI55rIgRK1N2",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_me_kZEdgKM1vA9Z3ztRoX4z7PGpIzFXQo",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_liI8wzWEd8L3cCk0h6iXOxEnakMSfvEz8",yandexMusic:"https://music.yandex.ru/album/3444125"},songs:[{name:"\u0421\u0435\u0440\u0434\u0446\u0435 \u0411\u043E\u0433\u0430"},{name:"\u0411\u0435\u043B\u044B\u0439 \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448"},{name:"\u0421\u0435\u0439 \u0447\u0430\u0441"},{name:"\u041F\u043E\u0434 \u0430\u0441\u0444\u0430\u043B\u044C\u0442"},{name:"\u0411\u0435\u0437\u043E\u0442\u0432\u0435\u0442\u043D\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u0412\u0441\u0435\u043B\u0435\u043D\u0441\u043A\u0438\u0439 \u043E\u0440\u0433\u0430\u0437\u043C"},{name:"\u041A\u0430\u0431\u0430\u0440\u0435"},{name:"\u041F\u043E\u0442\u0435\u0445\u0430"},{name:"\u041D\u0430\u043F\u043E\u0438 \u043D\u0430\u0441"},{name:"\u041F\u043E\u043F\u0443\u0442\u0447\u0438\u0446\u0430"},{name:"\u0414\u0440\u0443\u0433\u043E\u0439 \u0441\u043C\u0435\u0445"},{name:"\u041E\u043A\u0435\u0430\u043D\u043E\u043C\u0430\u0433\u0438\u044F"},{name:"\u041F\u044B\u043B\u0430\u044E\u0449\u0438\u0439 \u0430\u043D\u0433\u0435\u043B"},{name:"\u041D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430"},{name:"\u0410\u043D\u0434\u0440\u043E\u043C\u0435\u0434\u0430"}]},rc=N0;var R0={id:"zloradostnaya-opuhol-new",name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C. \u041F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D\u0438\u0435",year:2016,folder:"/artist/shmely/albums/2016_zo.jpg",streaming:{spotify:"https://open.spotify.com/album/4Q4riSrf2rdfmY6EllfbRp",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kf4b67Cf_KzFSmA1Ya-ptvWjGMmG9rfWs",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lEU8oxwMxMRJ8Qm8pCykRlxwEBZBbYlK0",yandexMusic:"https://music.yandex.ru/album/3444126"},songs:[{name:"\u0411\u044B\u043B\u0438 \u043C\u044B"},{name:"\u041B\u0435\u0437\u0432\u0438\u0435"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430"},{name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C"},{name:"\u0413\u043B\u0438\u0441\u0442\u044B"},{name:"\u0428\u0435\u0439\u043A \u0448\u0435\u0439\u043A \u0447\u0430 \u0447\u0430 \u0447\u0430"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430"},{name:"\u0421\u043C\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430"},{name:"\u041C\u0443\u0442\u0430\u043D\u0442\u044B"},{name:"\u0414\u0436\u0430\u0433\u0438 \u043C\u0435\u0440\u0442\u0432\u0435\u0435 \u0432\u0441\u0435\u0445 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0410\u043F\u043E\u043A\u0430\u043B\u0438\u043F\u0441\u0438\u0441"},{name:"\u041F\u0435\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"}]},oc=R0;var O0={id:"16-chudes",name:"16 \u0447\u0443\u0434\u0435\u0441",year:2016,folder:"/artist/shmely/albums/2016_16.jpg",streaming:{spotify:"https://open.spotify.com/album/20RNbLgkaoqnmqM6aZ5ppb",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_k5j2ONFgCxjaMibPrmWT_7cqOZpokpY0A",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lvl4Bi2EQ2Cr_pT1KK0COoNLGwDAHRHUE",yandexMusic:"https://music.yandex.ru/album/4090274"},songs:[{name:"\u0428\u0443\u043A\u0430\u0439"},{name:"\u0414\u0443\u0448\u0430 \u043D\u0435 \u043B\u0430\u0434\u0438\u0442 \u0441 \u0441\u0435\u0440\u0434\u0446\u0435\u043C"},{name:"\u0421\u0432\u0435\u0442\u0438\u0442\u0441\u044F \u043C\u0433\u043B\u0430"},{name:"\u041A\u043B\u0438\u0447\u0435 \u043D\u0430 \u043E\u0437\u0435\u0440\u0430"},{name:"\u0410\u043D\u0438\u043C\u0430\u0442\u043E\u0440\u044B"},{name:"\u0425\u0430\u043E\u0441 \u0447\u043E\u0440\u043D\u043E\u0442\u0438"},{name:"\u042F \u0445\u043E\u0447\u0443 \u0431\u0430\u0447\u0438\u0442\u0438 \u0442\u0435\u0431\u0435"},{name:"\u0411\u0430\u0440\u0434\u044B \u0427\u0435\u0440\u043D\u043E\u0431\u044B\u043B\u044F"},{name:"\u0411\u043E\u0439\u0441\u044F \u0441\u0435\u0431\u044F \u043A\u043E\u0433\u0434\u0430 \u043F\u044C\u044F\u043D"},{name:"\u0417\u043E\u043C\u0431\u0438 \u0440\u043E\u0434\u0441\u0442\u0435\u0440"},{name:"\u041E\u043B \u0438\u043D\u043A\u043B\u044E\u0437\u0438\u0432"},{name:"\u041B\u0430\u0432\u0430\u0448\u0430\u0431\u0430\u0448"}]},ic=O0;var P0={id:"mizantropiya",name:"\u041C\u0438\u0437\u0430\u043D\u0442\u0440\u043E\u043F\u0438\u044F",year:2016,folder:"/artist/shmely/albums/2016_mizantropiya.jpg",streaming:{spotify:"https://open.spotify.com/album/5fyLR7SyykWK1EmVKesNNK",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_ni5xNthJBzgd9MZ63IBNDGsWa0rtcuJA0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_ly9XGbpMjncfPi2jDs8Kyq9bm47Iiezuc",yandexMusic:"https://music.yandex.ru/album/4184010"},songs:[{name:"\u041B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0442\u0435\u0445\u0438"},{name:"\u0425\u043E\u0442\u0438\u0432 \u0441\u043F\u0438\u0442\u0430\u0442\u0438"},{name:"\u041D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"},{name:"\u041D\u0435 \u0441\u0443\u043C\u0443\u0432\u0430\u0442\u0438"},{name:"\u041F\u043E\u0437\u0434\u043D\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0436\u0438\u0437\u043D\u044C"},{name:"\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0438\u0439 \u0441\u0432i\u0442"},{name:"\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0438"},{name:"\u0427\u043E\u0432\u0435\u043D \u0421\u0442\u0440\u0430\u0445\u0443"},{name:"\u041C\u0438\u0437\u0430\u043D\u0442\u0440\u043E\u043F\u0438\u044F"},{name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0431i\u043B\u0438\u0437\u043C"},{name:"\u0410\u0434\u0441\u043A\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"},{name:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u044C"},{name:"\u0421\u0432\u0430\u0438"},{name:"\u0422\u043E\u043A"},{name:"\u0412\u0435\u0434\u044C\u043C\u044B \u043C\u043E\u0438"}]},sc=P0;var ym={[Cl.id]:Cl,[El.id]:El,[xl.id]:xl,[Sl.id]:Sl,[Ml.id]:Ml,[Tl.id]:Tl,[_l.id]:_l,[Al.id]:Al,[kl.id]:kl,[Nl.id]:Nl,[Rl.id]:Rl,[Ol.id]:Ol,[Pl.id]:Pl,[Fl.id]:Fl,[Ll.id]:Ll,[jl.id]:jl,[Vl.id]:Vl,[Bl.id]:Bl,[Hl.id]:Hl,[$l.id]:$l,[Ul.id]:Ul,[zl.id]:zl,[Wl.id]:Wl,[Gl.id]:Gl,[ql.id]:ql,[Yl.id]:Yl,[Zl.id]:Zl,[Kl.id]:Kl,[Ql.id]:Ql,[Jl.id]:Jl,[Xl.id]:Xl,[ec.id]:ec,[tc.id]:tc,[nc.id]:nc,[rc.id]:rc,[oc.id]:oc,[ic.id]:ic,[sc.id]:sc};var F0={id:"daj-garri",name:["\u0414\u0430\u0439 \u0413\u0430\u0440\u0440\u0438"],albums:["trotilovyye-skazki"],text:`
\u0414\u043E\u0440\u043E\u0433\u0430 \u0431\u0435\u0437 \u0432\u0435\u0442\u0440\u0430, \u043A\u0430\u043A \u043B\u044E\u0431\u043E\u0432\u044C \u0431\u0435\u0437 \u043E\u0433\u043D\u044F,
\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u0438\u043D\u0441\u043F\u0435\u043A\u0442\u043E\u0440, \u0442\u0440\u043E\u0442\u0443\u0430\u0440\u043D\u0430\u044F \u043F\u044B\u043B\u044C,
\u0418 \u043A\u0430\u043A \u0434\u044B\u0440\u044F\u0432\u044B\u0439 \u0441\u043A\u0430\u0437\u043E\u0447\u043D\u0438\u043A \u0432\u0438\u043B\u044F\u0435\u0442 \u043C\u0435\u043D\u044F
\u041C\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C...
\u041F\u0440\u044F\u043D\u044B\u0435 \u0434\u0435\u0440\u0435\u0432\u044C\u044F \u0441\u043C\u0435\u044E\u0442\u0441\u044F \u043C\u043D\u0435 \u0432\u0441\u043B\u0435\u0434,
\u0421\u043A\u0440\u043E\u043C\u043D\u043E \u043F\u0440\u0438\u043A\u0440\u044B\u0432 \u0442\u043E\u043B\u0441\u0442\u044B\u0435 \u0433\u043B\u0430\u0437\u0430
\u041D\u0430\u043C \u043D\u0435 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432 \u0432\u0430\u0448 \u0440\u0430\u0434\u043E\u0441\u0442\u043D\u044B\u0439 \u0441\u0432\u0435\u0442,
\u041F\u043E\u043A\u0443\u0434\u0430 \u0435\u0441\u0442\u044C \u0442\u044C\u043C\u0430...

\u0414\u0430\u0439, \u0434\u0430\u0439 \u0413\u0430\u0440\u0440\u0438! \u0414\u0430\u0439, \u0413\u0430\u0440\u0440\u0438! \u0413\u0430\u0440\u0440\u0438, \u0434\u0430\u0439!
\u0414\u0430\u0439, \u0413\u0430\u0440\u0440\u0438! \u0414\u0430\u0439, \u0413\u0430\u0440\u0440\u0438! \u0413\u0430\u0440\u0440\u0438, \u0434\u0430\u0439! (x3)

\u041F\u0440\u043E\u0441\u0442\u0438 \u043C\u0435\u043D\u044F \u0431\u043E\u0433, \u0447\u0442\u043E \u0442\u044B \u043D\u0435 \u0432\u043E \u043C\u043D\u0435,
\u041F\u0440\u043E\u0441\u0442\u0438 \u043C\u0435\u043D\u044F \u0434\u044C\u044F\u0432\u043E\u043B, \u0447\u0442\u043E \u044F \u043D\u0435 \u0441 \u0442\u043E\u0431\u043E\u0439,
\u041F\u0440\u043E\u0441\u0442\u0438 \u043C\u0435\u043D\u044F \u0437\u0435\u043C\u043B\u044F, \u0447\u0442\u043E \u044F \u043D\u0435 \u0432 \u0442\u0435\u0431\u0435...
\u0425\u043E\u0442\u044F \u0432\u0435\u0434\u044C \u044F \u0436\u0438\u0432\u043E\u0439
\u0412\u043D\u0435\u0437\u0430\u043F\u043D\u044B\u0435 \u043A\u043E\u043B\u0451\u0441\u0430 \u0442\u044F\u043D\u0443\u0442 \u0432\u043F\u0435\u0440\u0451\u0434,
\u041F\u0430\u0441\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0432\u0443\u043A\u0438, \u043A\u043E\u043C\u0430, \u0433\u043E\u0440\u0430...
\u041D\u0430\u043C \u043D\u0435 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432 \u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u0451\u0442,
\u041F\u043E\u043A\u0443\u0434\u0430 \u0435\u0441\u0442\u044C \u0442\u044C\u043C\u0430...

\u0421\u043D\u0438\u043C\u0438 \u0441 \u0441\u0435\u0431\u044F \u043A\u043E\u0436\u0443, \u0434\u043E\u043A\u0430\u0436\u0438 \u0447\u0442\u043E \u0442\u044B \u0435\u0441\u0442\u044C,
\u0422\u044B \u0441\u043F\u0438\u0448\u044C \u0441 \u0436\u0438\u0432\u044B\u043C \u0441\u043E\u043B\u043D\u0446\u0435\u043C, \u0437\u0430\u0431\u044B\u0432 \u043F\u0440\u043E \u0434\u0435\u043B\u0430
\u0411\u043E\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043A\u0430\u044F\u043D\u0438\u0435 \u0442\u0435\u0431\u0435 \u043D\u0435 \u043B\u0435\u0441\u0442\u044C...
\u0410\u0433\u0430...
`},ac=F0;var L0={id:"ya-vselennaya",name:["\u042F \u2013 \u0412\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F"],albums:["spazmy-roka","poshmelye"],authors:"\u0428\u043C\u0435\u043B\u044C",text:`
\u041A\u043E\u0433\u0434\u0430 \u0443\u043C\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u0435\u0442,
\u041B\u0438\u0448\u044C \u043F\u0440\u0430\u0437\u0434\u043D\u043E \u043B\u0438\u043A\u0443\u0435\u0442 \u043D\u0435\u043E\u043D,
\u041B\u0438\u0448\u044C \u043A\u043E\u0440\u0447\u0438\u0442\u0441\u044F \u0438\u0437 \u0442\u0440\u0443\u0431 \u043E\u0433\u043E\u043D\u044C,
\u042F \u043F\u0440\u0438\u0445\u043E\u0436\u0443 \u0441 \u0448\u0435\u0441\u0442\u0438 \u0441\u0442\u043E\u0440\u043E\u043D.
\u041A\u043E\u0433\u0434\u0430 \u0443\u043C\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u0435\u0442,
\u0414\u0430\u0436\u0435 \u043F\u0442\u0438\u0446\u044B \u0445\u043E\u0434\u044F\u0442 \u043F\u043E \u0437\u0435\u043C\u043B\u0435,
\u041F\u0443\u043B\u044C\u0441 \u0432\u0437\u0434\u0443\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0432\u0438\u0441\u043A\u0430\u0445 \u2013
\u042D\u0442\u043E \u044F \u043F\u043E\u0441\u0435\u043B\u0438\u043B\u0430\u0441\u044C \u0443 \u0432\u0441\u0435\u0445 \u0432 \u0433\u043E\u043B\u043E\u0432\u0435.

\u042F \u2013 \u0412\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F (x4)

\u041A\u043E\u0433\u0434\u0430 \u0443\u043C\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u0435\u0442,
\u041B\u0438\u043A\u0443\u0435\u0442 \u0430\u0442\u043E\u043C \u043A\u0430\u043A \u043D\u043E\u0432\u044B\u0439 \u0431\u043E\u0433,
\u0423\u043B\u044B\u0431\u043A\u0430 \u043A\u0440\u044B\u0441 \u043D\u0430 \u0432\u0435\u0441\u044C \u0437\u0430\u043A\u0430\u0442,
\u0410 \u044F \u0440\u0430\u0437\u0434\u0432\u0438\u0433\u0430\u044E \u043D\u0435\u0431\u043E\u0441\u0432\u043E\u0434,
\u041F\u0443\u0442\u044C \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u0431\u044B\u0442\u044C \u0438 \u0436\u0438\u0442\u044C,
\u041F\u0443\u0442\u044C \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u0435\u0441\u0442\u044C \u0438 \u043F\u0438\u0442\u044C,
\u041F\u0443\u0442\u044C \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u043B\u044E\u0431\u0438\u0442\u044C,
\u041F\u0443\u0442\u044C \u0434\u043B\u044F \u0432\u0441\u0435\u0445, \u043D\u043E \u043D\u0435 \u0434\u043B\u044F \u043C\u0435\u043D\u044F.
`},uc=L0;var j0={id:"na-ladoni-planeta",name:["\u041D\u0430 \u043B\u0430\u0434\u043E\u043D\u0438 \u043F\u043B\u0430\u043D\u0435\u0442\u0430"],albums:["spazmy-roka","poshmelye"],authors:"\u0428\u043C\u0435\u043B\u044C",text:`
\u041C\u043D\u0435 \u043F\u043E\u043B\u044F \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0435,
\u041D\u0435\u0431\u0435\u0441\u0430 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0435
\u041F\u0440\u043E\u0448\u0435\u043F\u0442\u0430\u043B\u0438 \u0438\u0441\u0442\u0438\u043D\u0443 \u0433\u043E\u043B\u0443\u044E, \u0441\u0442\u0440\u0430\u043D\u043D\u0443\u044E:
\u041D\u0435 \u0438\u0449\u0438, \u043C\u043E\u043B, \u043F\u043E\u0432\u043E\u0434\u0430,
\u041D\u0435 \u0437\u043E\u0432\u0438, \u043C\u043E\u043B, \u0445\u043E\u043B\u043E\u0434\u0430,
\u0414\u0430 \u043E\u0431\u0440\u0435\u0436\u044C \u043F\u0435\u0442\u043B\u044E \u0441\u0432\u043E\u044E \u0441\u0430\u043C\u0443\u044E \u0433\u043B\u0430\u0432\u043D\u0443\u044E...

\u041D\u0430 \u043B\u0430\u0434\u043E\u043D\u0438 \u043F\u043B\u0430\u043D\u0435\u0442\u0430, \u0430 \u0432 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u0435 \u043D\u0438\u0448\u0442\u044F\u043A,
\u0417\u0430 \u0441\u043F\u0438\u043D\u043E\u044E \u043F\u043E\u0431\u0435\u0434\u0430 \u0445\u043E\u0440\u043E\u0448\u043E \u0431, \u043D\u043E \u043D\u0435 \u0442\u0430\u043A.
\u0412\u0435\u0434\u044C \u0443\u0442\u043E\u043F\u043B\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u0442\u0438\u043A \u0432 \u0431\u0435\u043B\u0435\u0437\u043D\u0435 \u0442\u0443\u0430\u043B\u0435\u0442\u0430,
\u041F\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442 \u0431\u0435\u0437\u043C\u043E\u043B\u0432\u043D\u043E \u0443\u044E\u0442\u043D\u044B\u0439 \u043C\u0440\u0430\u043A...
\u041C\u0440\u0430\u043A... \u041C\u0440\u0430\u043A...

\u041D\u0430 \u0438\u0441\u043F\u0443\u0433, \u043D\u0430 \u0438\u0441\u043F\u043E\u0432\u0435\u0434\u044C
\u0428\u0451\u043B \u0431\u044B \u0432\u0434\u0440\u0443\u0433, \u043D\u043E \u0441\u043A\u0443\u0447\u043D\u043E \u0432\u0435\u0434\u044C
\u041F\u043E\u0434\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0438\u0444\u0442\u0435 \u043F\u043E\u043B\u043D\u043E\u043C \u0442\u0440\u0443\u043F\u0430\u043C\u0438...
\u0417\u043D\u0430\u0447\u0438\u0442, \u0431\u044B\u0442\u044C \u0432\u0435\u0441\u0451\u043B\u044B\u043C\u0438,
\u0421\u0442\u0430\u043D\u0435\u043C \u0436\u0438\u0442\u044C \u043F\u043E-\u043D\u043E\u0432\u043E\u043C\u0443,
\u0417\u0430\u043C\u0435\u043D\u0438\u0432 \u043C\u043E\u0433\u0438\u043B\u044B \u0446\u0432\u0435\u0442\u043D\u044B\u043C\u0438 \u0442\u0440\u0443\u0431\u0430\u043C\u0438...
`},lc=j0;var V0={id:"poshmelye",name:["\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435"],albums:["poshmelye"],authors:"\u0421\u0442\u0430\u043A\u0430\u043D \u0438 \u041C\u0430\u043A\u0441 \u042D\u043A\u0441 - \u041C\u0430\u043A\u0441 \u042D\u043A\u0441",text:`
\u041C\u0430\u0442\u0435\u0440\u0438\u043A\u0438 \u0434\u0432\u0438\u0436\u0443\u0442\u0441\u044F \u043F\u043E \u0448\u0435\u043B\u044C\u0444\u0443
\u0412 \u0441\u0442\u0440\u0430\u043D\u0435 (?) \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u044E\u0442 \u044D\u043B\u044C\u0444\u044B
\u0412 \u041F\u0430\u0440\u0438\u0436\u0435 \u0431\u0430\u0448\u043D\u044E \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u043B \u042D\u0439\u0444\u0435\u043B\u044C
\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u0441\u044F \u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435
\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0432\u043E\u0437 \u043D\u0430\u0441 \u0443\u043C\u0447\u0438\u0442 \u043F\u043E \u0440\u0435\u043B\u044C\u0441\u0430\u043C
\u0415\u0441\u043B\u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0438 \u0440\u0435\u0439\u0441\u0430
\u0412 \u0433\u043E\u0440\u0430\u0445 \u0440\u0430\u0441\u0442\u0443\u0442 \u0441\u0432\u044F\u0442\u044B\u0435 \u044D\u0434\u0435\u043B\u044C\u0432\u0435\u0439\u0441\u044B
\u0411\u044C\u044E\u0442 \u043D\u0435 \u043F\u043E \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0443, \u0430 \u043F\u043E \u0444\u0435\u0439\u0441\u0443\u2026
\u0421 \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u044F.

\u041D\u0430\u0434 \u041A\u0430\u0441\u0442\u043B-\u0420\u043E\u043A\u043E\u043C \u0441\u0433\u0443\u0441\u0442\u0438\u043B\u0438\u0441\u044C \u0442\u0435\u043D\u0438
\u041E\u0441\u0442\u044B\u043B\u0438 \u0432\u043C\u0438\u0433 \u0447\u0443\u0432\u0441\u0442\u0432\u0430 \u0438 \u043F\u0435\u043B\u044C\u043C\u0435\u043D\u0438
\u0420\u043E\u0434\u0438\u043B\u0441\u044F \u0441\u0432\u043E\u043B\u043E\u0447\u044C \u0438 \u043D\u0435\u0432\u0440\u0430\u0441\u0442\u0435\u043D\u0438\u043A
\u041D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0447\u0435\u0441\u0442\u0435\u0439, \u043D\u0443\u0436\u043D\u043E \u0434\u0435\u043D\u0435\u0433
\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u0435\u2026

\u041F\u0440\u0438\u0448\u0435\u043B \u043A\u043E\u043D\u0432\u0435\u0440\u0442 \u0441 \u043F\u043E\u0440\u043E\u0448\u043A\u043E\u043C \u043F\u043E \u043F\u043E\u0447\u0442\u0435
\u0428\u043C\u0435\u043B\u0438 \u043A\u043E\u0433\u043E-\u0442\u043E \u0441\u0432\u044F\u0437\u0430\u043B\u0438 \u0441\u043A\u043E\u0442\u0447\u0435\u043C
\u041A\u0440\u0430\u043D\u0442\u044B \u043F\u043E\u0434\u043A\u0440\u0430\u043B\u0438\u0441\u044C \u0431\u0435\u0437\u043B\u0443\u043D\u043D\u043E\u0439 \u043D\u043E\u0447\u044C\u044E
\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0437\u043E\u0440\u0432\u0430\u043B\u0430\u0441\u044C \u0432 \u043A\u043B\u043E\u0447\u044C\u044F
\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u0435\u2026
\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u0435\u2026
\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0448\u043C\u0435\u043B\u044C\u0435\u2026
`},cc=V0;var B0={id:"kak-izydet-svet",name:["\u041A\u0430\u043A \u0438\u0437\u044B\u0434\u0435\u0442 \u0441\u0432\u0435\u0442..."],albums:[],text:`
\u041A\u0430\u043A \u0438\u0437\u044B\u0434\u0435\u0442 \u0441\u0432\u0435\u0442 \u0441\u043A\u0432\u043E\u0437\u044C \u0432\u0440\u0430\u0442\u0430 \u043B\u044E\u0431\u0432\u0438,
\u0414\u0430 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0435\u0442 \u043C\u0438\u0444 \u0438\u0437 \u0436\u0438\u0432\u043E\u0439 \u0437\u0435\u043C\u043B\u0438
\u0412\u043E\u0441\u043F\u0435\u0432\u0430\u0439 \u043C\u0435\u0447\u0442\u0443, \u044F \u0438\u0441\u043F\u043E\u043B\u043D\u044E \u0432\u043C\u0438\u0433,
\u0418\u0431\u043E \u044F \u043F\u0440\u0438\u0448\u0451\u043B \u043D\u0430 \u0442\u0432\u043E\u0439 \u0436\u0430\u0434\u043D\u044B\u0439 \u043A\u0440\u0438\u043A,

\u041D\u0438 \u043A \u0434\u0443\u0448\u0435, \u043D\u0438 \u043A \u0441\u0435\u0440\u0434\u0446\u0443, \u0441\u0442\u0430\u043D\u0435\u0442 \u0448\u0443\u043C\u043D\u044B\u0439 \u0433\u0440\u0430\u0434,
\u0422\u0430\u0439\u043D\u0430 \u0434\u0438\u0432\u043D\u043E\u0439 \u0441\u043A\u0430\u0437\u043A\u0438 \u0441\u043B\u0430\u0449\u0435 \u0432\u043E \u0441\u0442\u043E \u043A\u0440\u0430\u0442,
\u041D\u0435 \u0442\u0430\u0438 \u043E\u0431\u0438\u0434\u0443, \u043D\u0435 \u0436\u0435\u043B\u0430\u0439 \u0432\u043E\u0439\u043D\u0443,
\u041B\u0438\u0448\u044C \u043F\u0440\u0438\u0437\u043D\u0430\u0439 \u043F\u043E\u0431\u0435\u0434\u0443 \u043A\u0430\u043A \u0441\u0432\u043E\u044E \u0432\u0438\u043D\u0443,

\u0414\u0430\u0431\u044B \u0432\u044B\u0448\u0435\u043B \u043C\u0438\u043B\u044B\u043C \u0436\u0430\u0440\u043A\u0438\u043C \u0442\u0435\u043B\u043E\u043C \u0432\u0437\u0434\u043E\u0445,
\u0414\u0430\u0431\u044B \u0431\u044B\u043B\u0438 \u0441\u0438\u043B\u044B \u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0438\u0442\u044C \u0441\u0435\u0431\u044F,
\u041D\u0435 \u043F\u0443\u0433\u0430\u0439\u0441\u044F \u0432\u0435\u0440\u044B, \u0441\u0445\u0432\u0430\u0447\u0435\u043D\u043D\u043E\u0439 \u0432\u0440\u0430\u0441\u043F\u043B\u043E\u0445,
\u041F\u0443\u0449\u0435\u043D\u043D\u043E\u0439 \u0432 \u0438\u0437\u0433\u043D\u0430\u043D\u044C\u0435 \u0437\u043B\u043E\u0433\u043E \u0431\u044B\u0442\u0438\u044F.

\u0422\u044B \u043E\u0442\u043D\u044B\u043D\u0435 \u0441\u0447\u0430\u0441\u0442\u044C\u0435, \u0442\u044B \u043E\u0442\u043D\u044B\u043D\u0435 \u0436\u0438\u0437\u043D\u044C,
\u0422\u044B \u0437\u0435\u043C\u043B\u0438 \u043A\u0440\u0435\u0449\u0435\u043D\u044C\u0435, \u043D\u0435\u0431\u0435\u0441\u0430\u043C \u0440\u043E\u0434\u0441\u0442\u0432\u043E,
\u0422\u044B \u0437\u0430 \u0442\u0435\u043D\u044C \u043E\u0442 \u0441\u0435\u0440\u0434\u0446\u0430 \u0431\u043E\u0436\u044C\u0435\u0433\u043E \u0434\u0435\u0440\u0436\u0438\u0441\u044C,
\u0412\u0441\u0451 \u0431\u0435\u0440\u0438 \u0432 \u043D\u0430\u0433\u0440\u0430\u0434\u0443, \u0442\u044B \u0432\u0435\u0434\u044C \u0431\u043E\u0436\u0435\u0441\u0442\u0432\u043E,

\u0422\u043E\u043B\u044C\u043A\u043E \u043D\u0435 \u0437\u0430\u043F\u0430\u043C\u044F\u0442\u0443\u0439, \u0447\u0442\u043E \u0442\u0435\u0431\u044F \u0441\u043E\u0437\u0434\u0430\u043B\u043E,
\u0412\u0435\u0434\u044C \u0440\u0430\u043D\u043E \u0438\u043B\u0438 \u043F\u043E\u0437\u0434\u043D\u043E, \u0431\u044B\u0442\u044C \u0431\u043E\u0436\u0435\u0441\u0442\u0432\u043E\u043C \u0438\u0437\u0432\u043D\u0435,
\u0422\u0435\u0431\u0435 \u0432\u0434\u0440\u0443\u0433 \u0441\u0442\u0430\u043D\u0435\u0442 \u043F\u0440\u043E\u0441\u0442\u043E \u043C\u0430\u043B\u043E,
\u0418 \u0442\u044B \u043E\u043F\u044F\u0442\u044C \u043F\u0440\u0438\u0434\u0451\u0448\u044C \u043A\u043E \u043C\u043D\u0435...
`},dc=B0;var H0={id:"laboratoriya-altruizma",name:["\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C\u0430"],albums:["moshchi","organizm","risunki-na-dushe","agressivnyj-pokoj","polna-suma","ya-vernus-k-tebe"],text:`
\u041D\u0430 \u0441\u043B\u0430\u0449\u0430\u0432\u043E\u043C \u043B\u0438\u0446\u0435 \u0443\u0447\u0451\u043D\u043E\u0433\u043E
\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0448\u043E\u043A \u0437\u0430\u0441\u0442\u044B\u043B \u043D\u0430\u0432\u0435\u043A\u0438,
\u0413\u0440\u0443\u0434\u043A\u0430 \u0431\u0440\u043E\u0432\u0435\u0439, \u043A\u0443\u0447\u043A\u0430 \u0433\u0443\u0431,
\u0414\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442 \u0438\u0441\u043A\u0440\u0435\u043D\u043D\u0435, \u0441\u043B\u043E\u0432\u043D\u043E \u0442\u0440\u0443\u043F!

\u0421\u043C\u0435\u043D\u0430 \u043A\u0440\u0443\u043F\u043D\u0430\u044F, \u043D\u0430\u0443\u043A\u0430 \u0445\u0438\u0442\u0440\u0430\u044F,
\u041F\u043E \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0430\u043C \u043B\u044E\u0431\u043E\u0432\u044C \u0438 \u043D\u0435\u043D\u0430\u0432\u0438\u0441\u0442\u044C
\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430, \u0435\u0433\u043E \u043C\u044B\u0441\u043B\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430\u044F,
\u0427\u0435\u043C-\u0442\u043E \u043E\u043D \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u0442 \u0432\u0441\u0435\u0432\u044B\u0448\u043D\u0435\u0433\u043E!

\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F (x3)
\u0410\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C\u0430!

\u0412\u0441\u0435 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043B\u0435\u0436\u0438\u0442 \u043D\u0430 \u043F\u043E\u043B\u043E\u0447\u043A\u0430\u0445,
\u041F\u0430\u0445\u043D\u0435\u0442 \u0441\u0447\u0430\u0441\u0442\u044C\u0435\u043C \u0438 \u0432\u0435\u0447\u043D\u043E\u0439 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E,
\u0422\u043E\u043B\u044C\u043A\u043E \u0432\u043E\u0442 \u043D\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044F \u043E\u043F\u044B\u0442,
\u0410 \u043F\u043E\u0434\u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0432\u0441\u0451 \u043C\u0435\u043D\u044C\u0448\u0435...

\u0422\u0443\u0445\u043D\u0443\u0442 \u0444\u043E\u043D\u0430\u0440\u0438\u043A\u0438, \u0442\u0443\u0445\u043D\u0443\u0442 \u043A\u0440\u0430\u0441\u0438\u0432\u043E,
\u0421\u043B\u043E\u0432\u043D\u043E \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u0438 \u0421\u0432\u044F\u0442\u043E\u0433\u043E \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430
\u0422\u0443\u0445\u043D\u0443\u0442 \u0444\u043E\u043D\u0430\u0440\u0438\u043A\u0438, \u0442\u0443\u0445\u043D\u0443\u0442 \u043A\u0440\u0430\u0441\u0438\u0432\u043E,
\u0421\u043B\u043E\u0432\u043D\u043E \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u0438 \u0421\u0432\u044F\u0442\u043E\u0433\u043E \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430!
`},fc=H0;var $0={id:"antiromantika",name:["\u0410\u043D\u0442\u0438\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430"],albums:["pugovica"],text:`
\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u0448\u0438\u0445 \u0432\u0435\u0440\u0438\u0442\u044C \u0432 \u0441\u0435\u0431\u044F
\u0415\u0441\u0442\u044C \u0432\u0435\u0440\u0430 \u0432 \u0431\u043E\u0433\u0430 \u0438\u043B\u0438 \u0442\u044C\u043C\u0443,
\u0414\u043B\u044F \u043E\u0434\u0438\u043D\u043E\u0447\u0435\u0441\u0442\u0432\u0430 \u043C\u0430\u043B\u0430 \u0432\u0441\u044F \u0437\u0435\u043C\u043B\u044F
\u041E\u0442\u043D\u044F\u0432\u0448\u0430\u044F \u0432\u0441\u044E \u043F\u0443\u0441\u0442\u043E\u0442\u0443...

\u0410\u043D\u0442\u0438\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430
\u041D\u0430\u0432\u0435\u043A, \u043D\u0430 \u0432\u0435\u043A\u0430...

\u0414\u043B\u044F \u043E\u0442\u043B\u0443\u0447\u0451\u043D\u043D\u044B\u0445 \u043E\u0442 \u043A\u0440\u0430\u0441\u043E\u0442\u044B
\u0415\u0441\u0442\u044C \u0442\u0438\u0445\u0438\u0439 \u0448\u0430\u0431\u0430\u0448 \u0433\u043E\u043B\u044B\u0445 \u0434\u0443\u0448,
\u0414\u043B\u044F \u0432\u043E\u0437\u0433\u043E\u0440\u0435\u0432\u0448\u0438\u0445 \u043E\u0442 \u0437\u0432\u0435\u0437\u0434\u044B
\u0415\u0441\u0442\u044C \u0447\u0443\u0434\u043D\u044B\u0439 \u043E\u043C\u0443\u0442 \u043E\u0441\u0435\u043D\u043D\u0438\u0445 \u043B\u0443\u0436...

\u0427\u0442\u043E \u0436, \u043F\u044C\u0435\u0434\u0435\u0441\u0442\u0430\u043B
\u0414\u043B\u044F \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432 \u043E\u0431\u043C\u0430\u043D\u0430,
\u041D\u043E\u0436 \u043E\u043F\u043E\u0437\u0434\u0430\u043B,
\u0423 \u0434\u0443\u0448\u0438 \u043F\u043E\u043A\u043E\u0439\u043D\u043E\u0439 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0441\u0432\u043E\u044F \u0440\u0430\u043D\u0430...
`},hc=$0;var U0={id:"biomekhanika",name:["\u0411\u0438\u043E\u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0430"],albums:["ya-vernus-k-tebe"],text:`
\u041A\u043E\u0442\u043E\u0440\u044B\u0439 \u0433\u043E\u0434 \u0441\u0438\u0437\u044B\u0439 \u0442\u0443\u043C\u0430\u043D
\u0421\u043A\u0440\u0435\u0436\u0435\u0442 \u0438 \u0441\u0442\u0443\u043A \u043A\u0430\u0436\u0434\u0443\u044E \u043D\u043E\u0447\u044C
\u0412 \u0433\u043E\u0440\u043E\u0434\u0435 \u0441\u043E\u043D, \u0442\u044C\u043C\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439
\u0410 \u0437\u0430 \u0443\u0433\u043B\u043E\u043C \u0433\u0430\u0440\u0430\u0436 \u0438 \u0441\u0432\u0435\u0442
\u0412\u043E\u0442 \u043E\u0436\u0438\u0432\u0451\u0442 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430 \u0434\u043E\u0447\u044C
\u0412\u043E\u0442 \u043E\u0436\u0438\u0432\u0451\u0442 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430 \u0434\u043E\u0447\u044C
\u0421\u0442\u0430\u043B\u044C, \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442 - \u043B\u044E\u0431\u0432\u0438 \u043C\u0430\u043A\u0435\u0442
\u0421\u0442\u0430\u043B\u044C, \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442 - \u043B\u044E\u0431\u0432\u0438 \u043C\u0430\u043A\u0435\u0442

\u0421\u0435\u0440\u0434\u0446\u0435 \u0436\u0433\u0451\u0442 \u043A\u0438\u0441\u043B\u043E\u0440\u043E\u0434 \u0438 \u0431\u0435\u043D\u0437\u0438\u043D, \u043C\u0438\u0433 \u0442\u0435\u043F\u043B\u0430
\u0427\u0435\u043B\u043E\u0432\u0435\u043A \u0441 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u043E\u043C \u0435\u0434\u0438\u043D, \u043E\u0436\u0438\u043B\u0430
\u041C\u0430\u0448\u0438\u043D\u0430!

\u0411\u0438\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0436\u0438\u0432\u0451\u0442 \u0432 \u0434\u0435\u0442\u0430\u043B\u044F\u0445
\u041C\u0430\u0448\u0438\u043D\u044B
\u0411\u0438\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0430\u043B\u0438
\u041C\u0430\u0448\u0438\u043D\u044B

\u0418 \u0432 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u0432\u043E\u043B\u044C\u0451\u0442\u0441\u044F \u0436\u0438\u0437\u043D\u044C
\u0418 \u0437\u0430\u0432\u0435\u0434\u0451\u0442 \u0441\u0438\u043B\u0430 \u043C\u043E\u0442\u043E\u0440
\u0412\u0435\u0447\u043D\u0443\u044E \u0431\u043E\u043B\u044C \u043F\u043E \u0432\u0435\u043D\u0430\u043C \u043A\u0440\u043E\u0432\u044C
\u0412 \u0442\u0435\u043B\u043E \u0432\u0434\u043E\u0445\u043D\u0451\u0442 \u043B\u0430\u0441\u043A\u043E\u0432\u044B\u0439 \u0434\u044B\u043C
\u0422\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043F\u0440\u044F\u043C\u043E \u0432 \u0433\u043B\u0430\u0437\u0430
\u041F\u0440\u044F\u043C\u043E \u0432 \u0433\u043B\u0430\u0437\u0430, \u043F\u0440\u044F\u043C\u043E \u0432 \u0443\u043F\u043E\u0440!
\u0421\u0442\u0430\u043D\u0435\u0448\u044C \u043D\u0430\u0432\u0435\u043A, \u0441\u0442\u0430\u043D\u0435\u0448\u044C \u043D\u0430\u0432\u0435\u043A
\u041D\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u043D\u043E \u043C\u043E\u043B\u043E\u0434\u044B\u043C
`},pc=U0;var z0={id:"blagodat",name:["\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C"],albums:["agressivnyj-pokoj"],text:`
\u0416\u0438\u0437\u043D\u044C \u2013 \u0440\u0430\u0431\u043E\u0442\u0430, \u0441\u0443\u0434\u044C\u0431\u0430 \u2013 \u043A\u0430\u043A \u043F\u0435\u043D\u0438\u0435 \u043F\u0442\u0438\u0446
\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u043E \u043B\u0438\u0446
\u041B\u0438\u0446\u0430 \u043C\u043E\u0433\u0443\u0442 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u0430\u043A \u043F\u0440\u0435\u0434\u0430\u043D\u043D\u043E \u0432 \u0441\u0443\u0442\u044C,
\u0417\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u0432\u0441\u0451 \u0441\u043D\u043E\u0432\u0430 \u0438 \u0441\u043D\u043E\u0432\u0430 \u0432\u0435\u0440\u043D\u0443\u0442\u044C.

\u0413\u0440\u0430\u043D\u044C \u043B\u044E\u0431\u0432\u0438 \u0431\u0435\u0440\u0435\u0433\u0438!
\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C,
\u0421\u043D\u0438\u0437\u043E\u0448\u043B\u0430 \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C!

\u0416\u0430\u0434\u043D\u043E \u0434\u044B\u0448\u0438\u0442 \u0438 \u043F\u043B\u043E\u0434\u043E\u0442\u0432\u043E\u0440\u043D\u043E \u0431\u043E\u043B\u0438\u0442
\u041C\u043E\u044F \u0442\u0435\u043D\u044C \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043C\u0435\u043D\u044F \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u0438\u0442
\u0421\u043B\u0430\u0432\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u043E\u0441\u0442\u0438 \u0438 \u043F\u043B\u043E\u0442\u044C,
\u0427\u0442\u043E\u0431 \u0441\u043B\u0451\u0437\u044B \u043D\u0435\u0431\u0430 \u0434\u043E\u0436\u0434\u0451\u043C \u0435\u0451 \u0441\u0442\u0430\u043B\u0438 \u043F\u043E\u0440\u043E\u0442\u044C

\u0417\u0430\u0432\u0442\u0440\u0430 \u0443\u0442\u0440\u043E\u043C \u0445\u043E\u0440\u043E\u0448\u0435\u0435 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432 \u0433\u043B\u0430\u0437\u0430
\u0416\u0438\u0437\u043D\u044C \u2013 \u0440\u0430\u0431\u043E\u0442\u0430, \u0430 \u043D\u0435 \u0441\u043B\u0435\u043F\u0430\u044F \u0438\u0433\u0440\u0430
\u0427\u0451\u0440\u043D\u044B\u043C \u0441\u0432\u0435\u0442\u043E\u043C \u0440\u0430\u0441\u0442\u0430\u044E\u0442 \u0447\u0443\u0432\u0441\u0442\u0432\u0430, \u0438 \u0432\u043D\u043E\u0432\u044C
\u0412\u043E\u0437\u0432\u0440\u0430\u0442\u0438\u0442\u0441\u044F \u0432\u043E \u0432\u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u0432\u0435\u043D\u044B \u043A\u0440\u043E\u0432\u044C
`},mc=z0;var W0={id:"bol",name:["\u0411\u043E\u043B\u044C"],albums:["agressivnyj-pokoj","ya-vernus-k-tebe"],text:`
\u0420\u0430\u0437\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043E \u0442\u0435\u043B\u043E \u0438 \u043B\u0438\u0446\u043E
\u042F\u0440\u043A\u043E\u0439 \u043A\u0440\u0430\u0441\u043A\u043E\u044E, \u0440\u0430\u043D\u0430\u043C\u0438 \u043E\u0442 \u0440\u043E\u0437\u0433
\u0412 \u0446\u0430\u0440\u0441\u0442\u0432\u0435 \u0441\u0432\u0435\u0442\u0430 \u0438 \u0433\u0440\u0451\u0437...

\u0417\u0430\u043A\u043E\u043B\u0434\u043E\u0432\u0430\u043D\u043E \u043D\u0430 \u0434\u0443\u0448\u0435 \u043A\u043E\u043B\u044C\u0446\u043E
\u0414\u0435\u0440\u0437\u043A\u043E\u0439 \u0445\u0432\u0430\u0442\u043A\u043E\u044E \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0445 \u0440\u043E\u0437
\u0427\u0442\u043E \u043D\u0438 \u0436\u0438\u0437\u043D\u044C \u2013 \u0432\u0435\u0447\u043D\u044B\u0439 \u043F\u043E\u0441\u0442.

\u0411\u043E\u043B\u044C! \u0421\u0434\u0435\u043B\u0430\u0439 \u043C\u043D\u0435 \u0445\u0443\u0436\u0435,
\u0411\u043E\u043B\u044C! \u041D\u0435 \u0443\u0445\u043E\u0434\u0438,
\u0411\u043E\u043B\u044C! \u0412\u043D\u0443\u0442\u0440\u0438 \u0438 \u0441\u043D\u0430\u0440\u0443\u0436\u0438,
\u0411\u043E\u043B\u044C! \u042F \u0432\u044B\u0440\u0432\u0443 \u0438\u0437 \u0433\u0440\u0443\u0434\u0438
\u0421\u0432\u043E\u0451 \u0441\u0435\u0440\u0434\u0446\u0435 \u0434\u043B\u044F \u0442\u0435\u0431\u044F.

\u041D\u0435\u0443\u043C\u0435\u043B\u044B\u0439 \u043F\u0440\u044B\u0436\u043E\u043A \u0432 \u043E\u043C\u0443\u0442 \u0433\u043E\u043B\u043E\u0432\u043E\u0439
\u0421\u0442\u0430\u043B \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u043C, \u043A\u0430\u043A \u043B\u0451\u0434, \u0432\u0435\u0447\u043D\u043E \u043C\u043E\u043B\u043E\u0434\u043E\u0439
\u0412 \u0446\u0430\u0440\u0441\u0442\u0432\u0435 \u0441\u0442\u0440\u0430\u0441\u0442\u0438 \u0441\u043B\u0435\u043F\u043E\u0439...

\u041D\u0435\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u044B\u0439 \u043F\u043E\u043B\u0451\u0442 \u043D\u0430\u0434 \u0441\u0432\u043E\u0435\u0439 \u0434\u0443\u0448\u043E\u0439
\u0412\u0437\u0433\u043B\u044F\u0434 \u043D\u0430 \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u043C\u0451\u0440\u0442\u0432\u043E\u044E \u043F\u0435\u0442\u043B\u0451\u0439
\u0414\u0435\u0432\u044F\u0442\u044C \u0434\u043D\u0435\u0439 - \u0438 \u0441\u0432\u044F\u0442\u043E\u0439!
`},gc=W0;var G0={id:"britogolovye-moskvichki",name:["\u0411\u0440\u0438\u0442\u043E\u0433\u043E\u043B\u043E\u0432\u044B\u0435 \u043C\u043E\u0441\u043A\u0432\u0438\u0447\u043A\u0438"],albums:[],authors:"\u041F\u0430\u0443\u043A",text:`
\u0411\u0440\u0438\u0442\u043E\u0433\u043E\u043B\u043E\u0432\u044B\u0435 \u043C\u043E\u0441\u043A\u0432\u0438\u0447\u043A\u0438
\u0417\u0430\u0431\u0440\u0438\u043B\u0438 \u0433\u043E\u043B\u043E\u0432\u044B, \u043A\u043E\u0441\u0438\u0447\u043A\u0438.
\u0412\u043C\u0435\u0441\u0442\u043E \u0442\u0443\u0444\u043B\u0435\u0439 \u0443 \u043D\u0430\u0441 \u0431\u043E\u0442\u0438\u043D\u043A\u0438,
\u0410 \u0447\u0442\u043E\u0431 \u0447\u0435\u0440\u0442\u0435\u0439 \u043C\u043E\u0447\u0438\u0442\u044C - \u0434\u0443\u0431\u0438\u043D\u043A\u0438!

\u0417\u043D\u0430\u044E\u0442 \u043D\u0430\u0441 \u0432\u0441\u0435 \u043F\u043E\u0434\u043E\u043D\u043A\u0438 -
\u0411\u0440\u0438\u0442\u043E\u0433\u043E\u043B\u043E\u0432\u044B\u0435 \u0434\u0435\u0432\u0447\u043E\u043D\u043A\u0438,
\u0412 \u0431\u0430\u043D\u0434\u0443 \u0432\u0441\u0442\u0443\u043F\u0430\u0439\u0442\u0435 \u043A \u043D\u0430\u043C, \u0441\u0435\u0441\u0442\u0440\u0438\u0447\u043A\u0438,
\u0411\u0440\u0438\u0442\u043E\u0433\u043E\u043B\u043E\u0432\u044B\u0435 \u043C\u043E\u0441\u043A\u0432\u0438\u0447\u043A\u0438!

\u0411\u0435\u0439 \u0447\u0435\u0440\u043D\u043E\u0436\u043E\u043F\u044B\u0445, \u0431\u0435\u0439 \u0437\u0430\u0440\u0430\u0437\u0443,
\u0411\u0435\u0439 \u0437\u0430\u0440\u0430\u0437\u0443 - \u043D\u0430 \u043F\u043E\u043B \u0438\u0445 \u0441\u0440\u0430\u0437\u0443!

White power \u043E\u0442\u043A\u0440\u044B\u043B \u0434\u0443\u0448\u0443 \u043D\u0430\u043C,
\u041D\u0430 \u0443\u043B\u0438\u0446\u0430\u0445 \u043C\u044B \u043C\u043E\u0447\u0438\u043C Scum!
\u0414\u043E\u0433\u043E\u043D\u0438\u043C, \u0432\u044B\u0441\u043B\u0435\u0434\u0438\u043C, \u0443\u0431\u044C\u0451\u043C,
\u0418 \u043F\u043E \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u0443 \u0440\u0430\u0437\u043E\u0442\u0440\u0451\u043C!

\u0416\u0435\u043D\u0441\u043A\u0430\u044F \u043D\u0435\u043D\u0430\u0432\u0438\u0441\u0442\u044C, \u0431\u0435\u043B\u0430\u044F \u043A\u0440\u043E\u0432\u044C,
\u041D\u0443 \u0430 \u0432 \u0434\u0443\u0448\u0435 \u0443 \u043D\u0435\u0451 \u043B\u0438\u0448\u044C \u043B\u044E\u0431\u043E\u0432\u044C...
\u041F\u043E \u0432\u0441\u0435\u043C \u0431\u043E\u044F\u043C \u043F\u0440\u043E\u0448\u043B\u0430 \u0441\u043E \u043C\u043D\u043E\u0439,
\u0417\u0430 \u0447\u0435\u0441\u0442\u044C, \u0437\u0430 \u043A\u0440\u043E\u0432\u044C, \u0437\u0430 \u0434\u043E\u043C \u0440\u043E\u0434\u043D\u043E\u0439!
`},yc=G0;var q0={id:"divchina-kulya",name:["\u0414i\u0432\u0447\u0438\u043D\u0430-\u043A\u0443\u043B\u044F"],albums:["petlya-soblazna","trahni-nebo"],text:`
\u0414\u0456\u0432\u0447\u0438\u043D\u0430-\u043A\u0443\u043B\u044F, \u043D\u0435 \u043A\u043E\u0445\u0430\u0439 \u043C\u0435\u043D\u0435
\u0422\u0456\u043B\u044C\u043A\u0438 \u043D\u0435 \u043A\u043E\u0445\u0430\u0439
\u0421\u0432\u044F\u0442\u0438\u0439 \u0434\u0443\u0445 \u0442\u043E\u0431\u0456 \u0441\u0443\u043A\u043D\u044E \u043F\u043E\u0448\u0438\u0454
\u0422\u0456\u043B\u044C\u043A\u0438 \u043D\u0435 \u043A\u043E\u0445\u0430\u0439

\u0421\u043C\u0435\u0440\u0442\u044E \u0437\u0430\u0439\u043C\u0430\u043D\u0430 \u043A\u0440\u0430\u0441\u0443\u043D\u044F
\u0421\u043C\u0435\u0440\u0442\u044E \u0437\u0430\u0439\u043C\u0430\u043D\u0430 \u043A\u0440\u0430\u0441\u0430
\u0421\u043C\u0435\u0440\u0442\u044E \u0437\u0430\u0439\u043C\u0430\u043D\u0430 \u043A\u0440\u0430\u0441\u0443\u043D\u044F
\u0421\u043C\u0435\u0440\u0442\u044E \u0437\u0430\u0439\u043C\u0430\u043D\u0430 \u043A\u0440\u0430\u0441\u0430

\u0414\u0456\u0432\u0447\u0438\u043D\u0430-\u043A\u0443\u043B\u044F, \u043D\u0435 \u0446\u0456\u043B\u0443\u0439 \u043C\u0435\u043D\u0435
\u0422\u0456\u043B\u044C\u043A\u0438 \u043D\u0435 \u0446\u0456\u043B\u0443\u0439
\u0421\u0432\u044F\u0442\u0438\u0439 \u0434\u0443\u0445 \u0442\u043E\u0431\u0456 \u0445\u0430\u0442\u0443 \u0437\u0431\u0443\u0434\u0443\u0454
\u0422\u0456\u043B\u044C\u043A\u0438 \u043D\u0435 \u0446\u0456\u043B\u0443\u0439
`},vc=q0;var Y0={id:"fokusnik",name:["\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A"],albums:["teatr-urodov"],text:`
\u0412\u044B\u0448\u0435\u043B \u0444\u043E\u043A\u0443\u0441\u043D\u0438\u043A \u043D\u0430 \u0441\u0446\u0435\u043D\u0443,
\u0412\u044B\u0437\u0432\u0430\u043B \u0434\u0435\u0432\u0443\u0448\u043A\u0443 \u0438\u0437 \u0437\u0430\u043B\u0430
\u0417\u0430\u043F\u043B\u0430\u0442\u0438\u043B, \u0443\u0441\u043B\u044B\u0448\u0430\u0432 \u0446\u0435\u043D\u0443,
\u0427\u0442\u043E\u0431\u044B \u0432 \u044F\u0449\u0438\u043A \u043F\u043E\u043B\u0435\u0437\u0430\u043B\u0430

\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A \u043F\u0435\u0447\u0430\u043B\u044C\u043D\u044B\u0439,
\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A \u043E\u0442\u0447\u0430\u044F\u043D\u043D\u044B\u0439,
\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A \u043F\u0440\u043E\u0449\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0440\u0430\u043C
\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A \u043F\u0435\u0447\u0430\u043B\u044C\u043D\u044B\u0439,
\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A \u043E\u0442\u0447\u0430\u044F\u043D\u043D\u044B\u0439
\u0420\u0435\u0436\u0435\u0442 \u0432\u0441\u0435\u0445 \u043D\u0430\u043F\u043E\u043F\u043E\u043B\u0430\u043C!
\u0422\u0440\u0430\u0445-\u0442\u0430\u0440\u0430\u0440\u0430\u0445! \u0422\u0440\u0430\u0445-\u0442\u0438\u0431\u0438\u0434\u043E\u0445!
\u041A\u0440\u043E\u0432\u044C \u043D\u0430 \u0440\u0443\u043A\u0430\u0445 - \u0437\u043D\u0430\u0442\u044C \u0444\u043E\u043A\u0443\u0441\u043D\u0438\u043A \u043F\u043B\u043E\u0445...

\u0412\u043C\u0438\u0433 \u0441\u0432\u0435\u0440\u043A\u043D\u0443\u043B\u0430 \u0441\u0443\u043A\u0430-\u0441\u0430\u0431\u043B\u044F,
\u041A\u0440\u043E\u0432\u044C \u0444\u043E\u043D\u0442\u0430\u043D\u043E\u043C \u0441 \u0434\u0432\u0443\u0445 \u0441\u0442\u043E\u0440\u043E\u043D
\u0412\u0437\u0434\u0440\u043E\u0433\u043D\u0443\u043B \u0437\u0430\u043B, \u0432\u043E\u0441\u043A\u043B\u0438\u043A\u043D\u0443\u0432 "\u0443\u0445 \u0431\u043B\u044F!"
\u0418 \u0440\u0430\u0437\u0434\u0430\u043B\u0441\u044F \u0441\u0442\u0440\u0430\u0448\u043D\u044B\u0439 \u0433\u0440\u043E\u043C

\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043C\u0438\u043B,
\u041F\u0430\u043B\u044C\u0446\u0435\u043C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u043C\u0430\u043D\u0438\u043B
\u0417\u0434\u0435\u0441\u044C \u0432\u0441\u0435 \u0432 \u0437\u0430\u043B\u0435 \u043E\u0441\u043E\u0437\u043D\u0430\u043B\u0438
\u0427\u0442\u043E \u0432 \u0447\u0438\u0441\u0442\u0438\u043B\u0438\u0449\u0435 \u043F\u043E\u043F\u0430\u043B\u0438!
`},wc=Y0;var Z0={id:"gilotina",name:["\u0413\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430 \u0432 \u0446\u0432\u0435\u0442\u0430\u0445"],albums:["pugovica"],text:`
\u0416\u0438\u043B \u043F\u0430\u043B\u0430\u0447, \u043D\u0430 \u0441\u043E\u0432\u0435\u0441\u0442\u044C \u0441\u043B\u0443\u0436\u0438\u043B
\u0412 \u043A\u0440\u0430\u0441\u043A\u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u044B \u0432\u043B\u044E\u0431\u043B\u0451\u043D \u0431\u044B\u043B \u043E\u043D...
\u041D\u043E\u0447\u044C\u044E \u043F\u043E \u043B\u0435\u0441\u0443 \u043E\u043D \u0434\u043E\u043B\u0433\u043E \u0431\u0440\u043E\u0434\u0438\u043B,
\u0412\u0435\u0434\u044C \u0441\u043D\u0438\u043B\u0441\u044F \u0435\u043C\u0443 \u043E\u0434\u0438\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u043D...

\u0413\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430, \u0433\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430, \u0433\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430
\u0413\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430 \u0432 \u0446\u0432\u0435\u0442\u0430\u0445

\u0421\u0435\u0440\u0434\u0446\u0435\u043C \u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A, \u0434\u0443\u0448\u043E\u044E \u043F\u043E\u044D\u0442,
\u041F\u043E\u0441\u043B\u0435 \u043D\u043E\u0432\u043E\u0439 \u043A\u0430\u0437\u043D\u0438 \u0446\u0432\u0435\u0442\u043E\u043A \u0441\u0430\u0436\u0430\u043B \u043E\u043D
\u041E\u043D\u0438 \u043E\u043A\u0440\u0443\u0436\u0430\u043B\u0438 \u0441\u043E \u0432\u0441\u0435\u0445 \u0441\u0442\u043E\u0440\u043E\u043D
\u0418 \u0432\u043D\u043E\u0432\u044C \u0432\u0440\u044B\u0432\u0430\u043B\u0438\u0441\u044C \u0432 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043E\u043D...

\u041E\u0434\u043D\u0430\u0436\u0434\u044B \u043F\u0430\u043B\u0430\u0447 \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F \u0438\u0437 \u0441\u043D\u043E\u0432 -
\u0421\u043C\u0435\u0440\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0441\u0442\u0430\u043B \u0430\u0440\u043E\u043C\u0430\u0442 \u0432\u0441\u0435\u0445 \u0446\u0432\u0435\u0442\u043E\u0432
`},bc=Z0;var K0={id:"intro",name:["\u0412\u0441\u0451 \u0431\u0443\u0434\u0435\u0442 \u0445\u043E\u0440\u043E\u0448\u043E"],albums:["pugovica"],text:`
\u0417\u0430\u0433\u043D\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u0447\u0435\u0439 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0441\u043C\u0435\u0451\u0442\u0441\u044F,
\u041E\u043D \u043A\u0438\u0441\u0442\u044C\u044E \u0449\u0435\u043A\u043E\u0447\u0435\u0442 \u043D\u0435\u0440\u0432\u044B \u0445\u043E\u043B\u0441\u0442\u0430
\u0421\u043E\u0440\u0432\u0430\u043B\u0430\u0441\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0433\u043E\u0440\u0435-\u0437\u0432\u0435\u0437\u0434\u0430
\u0412 \u0440\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044B\u0439 \u0445\u043E\u043B\u0441\u0442 \u0435\u0433\u043E \u0431\u044C\u0451\u0442\u0441\u044F \u0438 \u0431\u044C\u0451\u0442\u0441\u044F

\u0421\u0442\u0440\u0435\u043C\u0438\u0442\u0441\u044F \u0432 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0443\u044E \u043D\u0438\u0442\u044C \u0432\u043E\u0434\u0440\u0443\u0437\u0438\u0442\u044C\u0441\u044F,
\u0418 \u0441\u043D\u043E\u0432\u0430 \u0441\u043B\u0435\u043F\u0438\u0442\u044C \u0438 \u043C\u0430\u043D\u0438\u0442\u044C \u0431\u0435\u0437 \u043A\u043E\u043D\u0446\u0430...
\u041A\u0430\u0440\u0442\u0438\u043D\u0430 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430 \u0438 \u043D\u0435\u0442 \u0432 \u043D\u0435\u0439 \u043B\u0438\u0446\u0430,
\u041F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u043F\u043E\u0434 \u043D\u043E\u0433\u0438 \u043A \u043D\u0435\u043C\u0443 \u043F\u0440\u0438\u0437\u0435\u043C\u043B\u0438\u0442\u044C\u0441\u044F...

\u0411\u044B\u043B \u0438\u0437\u0433\u043D\u0430\u043D \u0438 \u043F\u0440\u043E\u043A\u043B\u044F\u0442 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0437\u0430 \u044D\u0442\u043E
\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u043C\u0438 \u0441\u0438\u043B\u0430\u043C\u0438 \u043C\u0435\u0440\u044B \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0439,
\u041D\u043E \u0442\u0435\u043D\u044C\u044E \u0441\u0443\u043C\u0435\u043B \u043E\u043D \u0432 \u043A\u0430\u0440\u0442\u0438\u043D\u0435 \u044F\u0432\u0438\u0442\u044C\u0441\u044F
\u0411\u0435\u0437 \u0441\u043E\u043B\u043D\u0446\u0430 \u0438 \u043F\u0440\u043E\u0447\u0435\u0433\u043E \u0446\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0432\u0435\u0442\u0430...

\u0418 \u0437\u043D\u0430\u0442\u044C \u0431\u044B, \u0437\u0430\u0447\u0435\u043C \u0438 \u043A\u0443\u0434\u0430 \u0442\u044B \u043F\u0440\u0438\u0448\u0451\u043B,
\u0422\u043E\u0433\u0434\u0430 \u0431\u044B \u043D\u0435 \u0441\u043F\u0430\u043B, \u043D\u0435 \u0432\u0437\u043B\u0435\u0442\u0430\u043B, \u043D\u0435 \u0438\u0441\u043A\u0430\u043B,
\u0410 \u0433\u043B\u0430\u0432\u043D\u043E\u0435, \u0432\u043E\u0432\u0440\u0435\u043C\u044F \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u043B
\u041E \u0442\u043E\u043C, \u0447\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0451 \u0445\u043E\u0440\u043E\u0448\u043E...
`},Dc=K0;var Q0={id:"maneken",name:["\u041C\u0430\u043D\u0435\u043A\u0435\u043D"],albums:["agressivnyj-pokoj"],text:`
\u041F\u0435\u0448\u0435\u0445\u043E\u0434\u043E\u0432 \u043F\u0435\u0449\u0435\u0440 \u0443\u0441\u0442\u0430\u043B\u044B\u0445
\u0425\u0432\u0430\u0442\u0430\u0435\u0442 \u0440\u0430\u0437\u0432\u0435\u0434\u0447\u0438\u043A \u0441\u043B\u0435\u0434,
\u0414\u0435\u0432\u0443\u0448\u043A\u0443 \u0438\u0449\u0435\u0442 \u043F\u0430\u0440\u0435\u043D\u044C,
\u0427\u0442\u043E\u0431 \u0441 \u043D\u0435\u0439 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E!

\u0418\u043B\u0438 \u0441\u043E\u0432\u0441\u0435\u043C \u0435\u0451 \u043D\u0435\u0442,
\u0418\u043B\u0438 \u043A\u043E\u0433\u0434\u0430 \u0441\u0432\u0435\u0442\u0430 \u043C\u0430\u043B\u043E
\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043E\u043D \u0438 \u0431\u0440\u0435\u0434 -
\u0414\u0435\u0432\u0443\u0448\u043A\u0430-\u043C\u0430\u043D\u0435\u043A\u0435\u043D!

\u041C\u0430\u043D\u0435\u043A\u0435\u043D \u0432 \u0431\u0435\u043B\u043E\u043C \u043F\u0430\u0440\u0438\u043A\u0435,
\u041C\u0430\u043D\u0435\u043A\u0435\u043D - \u0431\u043E\u0433\u0438\u043D\u044F \u0438\u0437\u0432\u043D\u0435!

\u041D\u0435 \u0434\u0435\u043D\u044C, \u043D\u0435 \u043D\u043E\u0447\u044C \u0438 \u043D\u0435 \u0434\u0432\u0430
\u041E\u043D \u0435\u0434\u0435\u0442 \u0432 \u043F\u043B\u0435\u043D\u0443 \u043A\u043E\u0448\u043C\u0430\u0440\u0430
\u0417\u0430 \u0434\u0435\u0432\u0443\u0448\u043A\u043E\u0439, \u0447\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430
\u0414\u0430\u0432\u0430\u043B\u0430, \u0434\u0430\u0432\u0430\u043B\u0430!

\u041F\u043E \u0443\u0442\u0440\u0430\u043C \u043F\u0443\u0441\u0442\u044B \u043F\u0435\u0449\u0435\u0440\u044B,
\u041F\u0435\u0449\u0435\u0440\u044B \u0438 \u043A\u0430\u043D\u0430\u043B\u044B, \u0441\u043D\u044B!
\u0412 \u043D\u0438\u0445 \u0434\u0435\u0432\u0443\u0448\u0435\u043A \u043A\u0430\u043A \u043D\u0435 \u0431\u044B\u0432\u0430\u043B\u043E!
\u0422\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u043A\u043B\u0430\u043C \u0449\u0438\u0442\u044B...
`},Ic=Q0;var J0={id:"zver",name:["\u0417\u0432\u0435\u0440\u044C"],albums:["pugovica"],text:`
\u0421 \u0432\u0435\u0442\u0440\u043E\u043C \u043F\u0440\u0438\u0448\u043B\u0430
\u0418\u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0445 \u0441\u043D\u043E\u0432,
\u041A\u043B\u0435\u0439\u043C\u043E\u043C \u0432\u0435\u0447\u043D\u043E\u0439 \u0432\u043B\u0430\u0441\u0442\u0438
\u0421\u0442\u0440\u0430\u0441\u0442\u0438 \u043F\u043E\u043B\u043D\u0430,
\u041D\u043E \u0442\u0435\u043D\u044C\u044E \u043A\u043E\u043B\u0434\u043E\u0432\u0441\u0442\u0432\u0430
\u041F\u0440\u043E\u043A\u043B\u044F\u0442\u043E \u0441\u0447\u0430\u0441\u0442\u044C\u0435

- \u0422\u0432\u043E\u044E \u0434\u0443\u0448\u0443 \u0432\u043A\u0443\u0441\u0438\u0442\u044C \u0441\u0435\u0440\u0434\u0446\u0435\u043C \u0432\u0435\u043B\u0435\u043D\u043E!
- \u0414\u0435\u043B\u0430\u0439, \u043A\u0430\u043A \u0437\u043D\u0430\u0435\u0448\u044C...
- \u0412 \u043C\u0438\u0440 \u043B\u044E\u0434\u0435\u0439 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044F \u0434\u0432\u0435\u0440\u044C,
\u042F \u043D\u0430\u0432\u0435\u043A\u0438 \u0442\u0432\u043E\u0439 \u0437\u0432\u0435\u0440\u044C... \u0417\u0432\u0435\u0440\u044C!
- \u041C\u043E\u0439...
- \u0417\u0432\u0435\u0440\u044C!
- \u041C\u043E\u0439...

\u0410\u0445, \u0442\u044B \u043F\u043E\u0446\u0435\u043B\u0443\u0439
\u042F\u0434 \u0436\u0435\u043B\u0430\u043D\u043D\u044B\u0445 \u0433\u0443\u0431,
\u0418 \u0437\u0432\u0435\u0440\u0435\u043C \u0442\u044B \u0431\u0443\u0434\u0435\u0448\u044C
\u041E\u0439, \u0442\u044B \u043D\u0435 \u0433\u043E\u0440\u044E\u0439,
\u0412\u0435\u0434\u044C \u043B\u0438\u0448\u044C \u043E\u0434\u043D\u0443 \u043B\u044E\u0431\u043E\u0432\u044C
\u0422\u044B \u0432\u0435\u043A \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u0435\u0448\u044C

\u041E\u0431\u043E\u0440\u043E\u0442\u0435\u043D\u044C,
\u041D\u043E \u0443\u0442\u0440\u043E \u043D\u0435 \u043F\u0440\u0438\u0434\u0451\u0442,
\u041D\u043E\u0447\u044C\u044E \u0441\u0442\u0430\u043B \u0434\u0435\u043D\u044C...
`},Cc=J0;var X0={id:"novaya-religiya",name:["\u041D\u043E\u0432\u0430\u044F \u0440\u0435\u043B\u0438\u0433\u0438\u044F"],albums:["spazmy-roka","poshmelye"],text:`
\u0427\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0435 \u0442\u0435\u0441\u0442\u043E,
\u0420\u0438\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043D\u0435\u0432\u0435\u0441\u0442\u0430,
\u041E\u0431\u043B\u0438\u0437\u0430\u043B\u043E \u0441\u0432\u044F\u0442\u043E \u043C\u0435\u0441\u0442\u043E,
\u041A\u0440\u043E\u0432\u044C\u044E \u043F\u043E\u043B\u0438\u043B\u0430\u0441\u044C \u043D\u0430 \u043A\u0440\u0435\u0441\u0442 \u0434\u0430...

\u041D\u043E\u0432\u0430\u044F \u0431\u0438\u0431\u043B\u0438\u044F,
\u041C\u043E\u0434\u043D\u0430\u044F \u0440\u0435\u043B\u0438\u0433\u0438\u044F...

\u0412\u044B\u0441\u0448\u0438\u0439 \u0441\u0443\u0434 \u043D\u0430\u0441 \u043D\u0435 \u043E\u0441\u0443\u0434\u0438\u0442,
\u0412\u044B\u0441\u0448\u0435\u0433\u043E \u0441\u0443\u0434\u0430 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442.
\u0415\u0441\u043B\u0438 \u0431 \u0431\u044B\u043B\u0438 \u0434\u0443\u0448\u0438 \u0432 \u0442\u0435\u043B\u0435,
\u0418\u0445 \u0434\u0430\u0432\u043D\u043E \u0431 \u0432\u0441\u0435 \u043E\u0442\u044B\u043C\u0435\u043B\u0438.
`},Ec=X0;var eE={id:"patologoanatom",name:["\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C"],albums:["spazmy-roka","risunki-na-dushe","poshmelye"],text:`
\u041C\u043E\u0440\u0444\u0438\u0439, \u0431\u0438\u043D\u0442 \u0438 \u0432\u0430\u0442\u0430, \u2013
\u0423\u0441\u043D\u0443\u043B\u0430 \u0432\u0441\u044F \u043F\u0430\u043B\u0430\u0442\u0430.
\u041B\u0438\u0448\u044C \u043D\u0435 \u0441\u043F\u0438\u0442 \u043A\u0438\u0431\u0435\u0440\u043D\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0430\u043D\u044C\u044F\u043A \u2013
\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C.

\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C (x2)
\u0420\u043E\u0431\u043E\u0442 \u0430\u0434\u0430, \u0440\u043E\u0431\u043E\u0442 \u0430\u0434\u0430 \u2013
\u0421\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C
\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C (x2)

\u0412\u043C\u0435\u0441\u0442\u043E \u043F\u043E\u0442\u0430 \u0440\u0442\u0443\u0442\u044C
\u041F\u0430\u0434\u0430\u0435\u0442 \u0436\u0435\u0440\u0442\u0432\u0435 \u043D\u0430 \u0433\u0440\u0443\u0434\u044C.
\u041A\u0438\u0441\u043B\u043E\u0442\u043D\u044B\u0435 \u0441\u043B\u0435\u0437\u044B \u0440\u0430\u0437\u0440\u044B\u0432\u0430\u044E\u0442 \u0430\u0442\u043E\u043C.
\u0417\u0434\u0435\u0441\u044C \u0437\u0430\u043F\u0430\u0445 \u0447\u0435\u043C-\u0442\u043E \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u0442 \u043B\u0430\u0434\u0430\u043D.

\u0423\u0442\u0440\u043E\u043C \u043F\u0440\u043E\u0441\u043D\u0443\u0442\u0441\u044F \u043B\u044E\u0434\u0438.
\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0443\u0437\u043D\u0430\u044E\u0442 \u043E\u043D\u0438,,
\u0427\u0442\u043E \u0441\u043A\u043E\u0440\u043E, \u0440\u0430\u0437\u043E\u0440\u0432\u0430\u0432 \u0438\u0445 \u0433\u0440\u0443\u0434\u0438,
\u0412\u044B\u043B\u0435\u0442\u044F\u0442 \u0436\u0435\u043B\u0435\u0437\u043D\u044B\u0435 \u0428\u041C\u0415\u041B\u0418!
`},xc=eE;var tE={id:"pechal-prekrasna",name:["\u041F\u0435\u0447\u0430\u043B\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0430"],albums:[],authors:"\u0428\u043C\u0435\u043B\u044C",text:`
\u041F\u0435\u0447\u0430\u043B\u044C...

\u0412 \u0441\u0432\u0435\u0442\u043B\u043E\u0439, \u0432 \u0438\u0437\u043D\u043E\u0448\u0435\u043D\u043D\u043E\u0439 \u0434\u0443\u0448\u0435
\u041F\u043E\u0445\u043E\u0440\u043E\u043D\u0435\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u0441\u043C\u044B\u0441\u043B \u0436\u0438\u0437\u043D\u0438
\u0422\u044B \u0432\u044B\u0439\u0434\u0438 \u043D\u0430 \u0441\u0432\u0438\u0434\u0430\u043D\u044C\u0435 \u0432 \u043D\u0435\u0433\u043B\u0435\u0436\u0435,
\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043D\u0435\u0436\u043D\u043E, \u043D\u043E \u0431\u0440\u0443\u0442\u0430\u043B\u044C\u043D\u043E

\u0418 \u0432\u0441\u0435 \u043E\u0433\u043D\u0438,
\u0418 \u0432\u0441\u0435 \u043E\u0433\u043D\u0438 \u043F\u043E\u0433\u0430\u0441\u043D\u0443\u0442,
\u0412\u0435\u0434\u044C \u0432 \u043C\u0438\u0440\u0435 \u043D\u0435\u0442 \u043B\u044E\u0431\u0432\u0438.
\u0422\u044B \u043D\u0435 \u0438\u0449\u0438 \u0435\u0451 \u043D\u0430\u043F\u0440\u0430\u0441\u043D\u043E...
\u041F\u0435\u0447\u0430\u043B\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0430

\u041F\u0435\u0447\u0430\u043B\u044C...

\u0412 \u0441\u043B\u0430\u0434\u043A\u0438\u0445, \u043D\u043E \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0433\u0443\u0431\u0430\u0445
\u0422\u043E\u043D\u0435\u0442 \u0431\u0435\u0441\u0447\u0443\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0442\u0435\u043B\u043E
\u0418 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044F \u043F\u0440\u0430\u0445
\u041D\u044B\u043D\u0447\u0435 \u044D\u0442\u043E \u0434\u0435\u043B\u043E \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E

\u0418 \u0432\u0441\u0435 \u043E\u0433\u043D\u0438,
\u0418 \u0432\u0441\u0435 \u043E\u0433\u043D\u0438 \u043F\u043E\u0433\u0430\u0441\u043D\u0443\u0442,
\u0412\u0435\u0434\u044C \u0432 \u043C\u0438\u0440\u0435 \u043D\u0435\u0442 \u043B\u044E\u0431\u0432\u0438
\u0422\u044B \u043D\u0435 \u0438\u0449\u0438 \u0435\u0451 \u043D\u0430\u043F\u0440\u0430\u0441\u043D\u043E...
\u041F\u0435\u0447\u0430\u043B\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0430

\u0412 \u043F\u043E\u0437\u043E\u043B\u043E\u0442\u0435 \u0431\u0435\u0437\u044B\u0441\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u0436\u0438
\u0417\u0430\u0438\u0441\u043A\u0440\u044F\u0442\u0441\u044F \u0431\u0443\u0434\u043D\u0438\u0447\u043D\u044B\u0435 \u0437\u0432\u0451\u0437\u0434\u044B
\u041F\u043E\u043B\u0435\u0442\u044F\u0442 \u0441 \u043D\u0435\u0431\u0435\u0441 \u0434\u0443\u0440\u043C\u0430\u043D \u0433\u0440\u0430\u0448\u0438,
\u0418\u0437\u043E\u0431\u044C\u044E\u0442 \u0432\u0441\u0435\u0445 \u043D\u0430\u0441\u043C\u0435\u0440\u0442\u044C, \u043D\u043E \u043A\u0440\u0430\u0441\u0438\u0432\u043E

\u0418 \u0432\u0441\u0435 \u043E\u0433\u043D\u0438,
\u0418 \u0432\u0441\u0435 \u043E\u0433\u043D\u0438 \u043F\u043E\u0433\u0430\u0441\u043D\u0443\u0442,
\u0412\u0435\u0434\u044C \u0432 \u043C\u0438\u0440\u0435 \u043D\u0435\u0442 \u043B\u044E\u0431\u0432\u0438
\u0422\u044B \u043D\u0435 \u0438\u0449\u0438 \u0435\u0451 \u043D\u0430\u043F\u0440\u0430\u0441\u043D\u043E...
`},Sc=tE;var nE={id:"pokidaya-mir",name:["\u041F\u043E\u043A\u0438\u0434\u0430\u044F \u043C\u0438\u0440"],albums:["organizm","ya-vernus-k-tebe"],text:`
\u0412\u0441\u0435 \u0441\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438\u0441\u044C \u043F\u0440\u043E\u0442\u0438\u0432 \u043C\u0435\u043D\u044F,
\u0417\u0430\u0431\u0438\u0432\u0430\u044E\u0442 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0433\u0440\u0435\u0445\u0438 \u0441 \u043C\u043E\u0435\u0439 \u043F\u043E\u0431\u0435\u0434\u043E\u0439
\u0410 \u044F \u0442\u0435\u0440\u044F\u044E \u0441\u0430\u043C \u0441\u0435\u0431\u044F,
\u0417\u0430\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u043E\u0431\u0440\u0435\u0442\u0430\u044E!

\u041F\u043E\u043A\u0438\u0434\u0430\u044F, \u043F\u043E\u043A\u0438\u0434\u0430\u044F \u043C\u0438\u0440... (x3)
\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u0444\u043E\u0440\u043C\u044B \u0430\u0441\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u044B\u0440
\u041F\u043E\u043A\u0438\u0434\u0430\u044F, \u043F\u043E\u043A\u0438\u0434\u0430\u044F \u043C\u0438\u0440... (x3)
\u0421\u0442\u0438\u0440\u0430\u044E \u043F\u0430\u043C\u044F\u0442\u0438 \u0437\u0430\u0441\u0442\u044B\u0432\u0448\u0438\u0439 \u0436\u0438\u0440

\u0414\u0443\u043C\u0430\u0439 \u043E \u0445\u043E\u0440\u043E\u0448\u0435\u043C \u0441 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u044C\u0435\u043C
\u0411\u0443\u0434\u0435\u0442 \u043A\u0430\u043A \u0437\u0430\u0445\u043E\u0447\u0435\u0448\u044C: \u0434\u0435\u043D\u044C\u0433\u0438, \u043F\u043E\u0441\u044B\u043B\u0430\u044F \u0434\u0443\u0445\u0430
\u041E\u0442\u0434\u0430\u0439 \u0442\u043E\u0433\u043E \u043D\u0430 \u043E\u0447\u0438\u0449\u0435\u043D\u0438\u0435,
\u041E\u0442\u0434\u0430\u0439 \u0436\u0435 \u0442\u043E, \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044F \u0440\u0430\u044F!
`},Mc=nE;var rE={id:"polna-suma",name:["\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043E\u0441\u0442\u0440\u043E\u0432"],albums:["bomba-v-ubezhishche","organizm","polna-suma"],text:`
\u041F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430 \u043B\u0438\u0445\u0430 \u0438 \u043F\u0440\u044F\u043D\u0438\u043A\u043E\u0432,
\u041F\u043E\u043B\u043E\u043D \u043A\u0430\u0440\u043C\u0430\u043D \u0441\u043A\u043E\u0440\u0431\u0438 \u043F\u043E \u043F\u0440\u043E\u0448\u043B\u043E\u043C\u0443
\u0413\u043E\u0440\u0441\u0442\u043A\u0430 \u0441\u0430\u0445\u0430\u0440\u0430, \u0434\u0430 \u043F\u0430\u043B\u0435\u0446 \u044E\u043B\u0438\u0442 \u0443 \u0432\u0438\u0441\u043A\u0430
\u0411\u044B\u043B\u0430 \u043F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430, \u0430 \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \u043D\u0435\u0439 \u0434\u044B\u0440\u0430...

\u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u043F\u0435\u0447\u0430\u0442\u044C \u043D\u0430 \u0431\u0435\u0437\u043B\u044E\u0434\u043D\u043E\u043C \u043E\u0441\u0442\u0440\u043E\u0432\u0435
\u0421\u043E\u043B\u043D\u0446\u0435 \u043D\u0430 \u0434\u0438\u0432\u0430\u043D, \u0430 \u0432\u043E\u0434\u043A\u0438 \u043D\u0435\u043C\u0435\u0440\u0435\u043D\u043E
\u0417\u0430\u0442\u044F\u043D\u0443\u043B\u0441\u044F \u0436\u0433\u0443\u0442, \u0430\u043D\u0430\u043B\u0438\u0437 \u043D\u0435 \u0432\u044B\u0434\u0430\u043B\u0441\u044F
\u0417\u0430\u0432\u0442\u0440\u0430\u0448\u043D\u0438\u0439 \u0442\u0443\u043C\u0430\u043D \u0443 \u0432\u0447\u0435\u0440\u0430\u0448\u043D\u0435\u0433\u043E \u0431\u0435\u0440\u0435\u0433\u0430

\u041D\u0435\u0436\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0430\u0436 \u043D\u043E\u0433\u0442\u044F\u043C\u0438, \u0443\u043A\u0443\u0441\u0430\u043C\u0438
\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0431\u043C\u0430\u043D \u0441\u0435\u0442\u044F\u043C\u0438 \u0438 \u043F\u0443\u043B\u044F\u043C\u0438
\u0422\u043E\u043C\u043D\u044B\u0439 \u0432\u043E\u044F\u0436, \u0445\u043E\u0442\u044C \u0442\u0430\u043D\u0446\u044B \u0446\u0430\u0440\u044F\u0442 \u0434\u043E \u0443\u0442\u0440\u0430
\u041F\u043E\u043B\u043E\u043D \u0434\u0438\u043A\u0438\u0439 \u043F\u043B\u044F\u0436, \u0445\u043E\u0442\u044C \u0437\u0438\u043C\u0430 \u0435\u0449\u0451 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430...

\u0413\u043E\u0440\u0434 \u0438 \u043B\u044E\u0431\u0438\u043C \u0431\u043E\u0433\u0430\u043C\u0438 \u0438 \u0431\u0435\u0441\u0430\u043C\u0438,
\u041D\u0435\u043F\u043E\u0431\u0435\u0434\u0438\u043C \u0431\u043E\u044F\u043C\u0438, \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430\u043C\u0438
\u041C\u0438\u0444 \u043E \u043B\u044E\u0431\u0432\u0438, \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043A\u043E\u043D\u0446\u0430,
\u0425\u043E\u0442\u044C \u043D\u0435\u0431\u043E \u0441 \u0437\u0435\u043C\u043B\u0451\u0439 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044E\u0442\u0441\u044F...
`},Tc=rE;var oE={id:"raspyatie",name:["\u0417\u0432\u0451\u0437\u0434\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u044F\u0442\u0438\u0435"],albums:["tulovishche","trahni-nebo"],text:`
\u041D\u0435 \u0438\u0449\u0438\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0437\u0432\u0435\u0440\u0438\u043D\u0446\u0435 -
\u042F \u0434\u0430\u0432\u043D\u043E \u0443\u0431\u0435\u0436\u0430\u043B \u0438\u0437 \u043A\u043B\u0435\u0442\u043A\u0438
\u041D\u0435 \u0438\u0449\u0438\u0442\u0435 \u043C\u0435\u043D\u044F \u043D\u0430 \u0447\u0435\u0440\u0434\u0430\u043A\u0435 -
\u042F \u0434\u0430\u0432\u043D\u043E \u0443\u0436\u0435 \u043F\u043E\u0432\u0435\u0448\u0435\u043D \u0432 \u043F\u043E\u0434\u0432\u0430\u043B\u0435
\u041D\u0435 \u0438\u0449\u0438\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u044F\u043C\u0435 -
\u042F \u0434\u0430\u0432\u043D\u043E \u0437\u0430\u043A\u043E\u043B\u043E\u0447\u0435\u043D \u0432 \u0433\u0440\u043E\u0431
\u041D\u0435 \u0438\u0449\u0438\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0433\u0440\u043E\u0431\u0443,
\u042F \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043D\u0430\u043F\u043B\u044E\u044E \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E \u044F \u043C\u0451\u0440\u0442\u0432\u044B\u0439,
\u041F\u043E \u0440\u0430\u0441\u043A\u0430\u043B\u0451\u043D\u043D\u043E\u043C\u0443 \u0441\u043D\u0435\u0433\u0443 \u0433\u0443\u043B\u044F\u0442\u044C \u043F\u043E\u0439\u0434\u0443...

\u041C\u0435\u0436\u0434\u0443 \u0442\u0435\u043C \u0431\u0443\u0434\u0443 \u0441\u043B\u0443\u0448\u0430\u0442\u044C, \u043A\u0430\u043A \u0440\u0430\u0441\u0442\u0451\u0442 \u0442\u0440\u0430\u0432\u0430
\u0412 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043E\u0442 \u043F\u0440\u043E\u0447\u0438\u0445 \u043E\u0431\u044B\u0434\u0435\u043D\u043D\u044B\u0445 \u0434\u0435\u043B,
\u0418 \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C, \u043A\u0430\u043A \u0445\u043E\u0434\u044F\u0442 \u0434\u043E\u043C\u0430
\u041F\u043E \u0442\u0432\u043E\u0435\u0439 \u0433\u043E\u043B\u043E\u0432\u0435, \u043F\u043E \u0442\u0432\u043E\u0438\u043C \u0433\u0443\u0431\u0430\u043C...
\u042F \u0440\u0430\u0441\u043F\u044F\u0442 \u043D\u0430 \u0437\u0432\u0435\u0437\u0434\u0435... (x4)
\u041D\u0430\u0437\u043B\u043E \u0432\u0441\u0435\u043C \u0432\u0440\u0430\u0433\u0430\u043C...

\u041D\u0435 \u043F\u0443\u0433\u0430\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0443\u043A\u0430\u0437\u043A\u043E\u0439 -
\u042F \u0434\u0430\u0432\u043D\u043E \u0443\u0436\u0435 \u043A\u043E\u043D\u0447\u0438\u043B \u0448\u043A\u043E\u043B\u0443
\u041D\u0435 \u043B\u0430\u0441\u043A\u0430\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u043A\u0438\u043D\u0436\u0430\u043B\u043E\u043C -
\u042F \u0434\u0430\u0432\u043D\u043E \u0440\u0430\u0441\u0447\u043B\u0435\u043D\u0451\u043D \u043D\u0430 \u0447\u0430\u0441\u0442\u0438
\u041D\u0435 \u0441\u043D\u0438\u043C\u0430\u0439\u0442\u0435 \u0441 \u043C\u0435\u043D\u044F \u043D\u0430\u0434\u0435\u0436\u0434\u044B -
\u042F \u0434\u0430\u0432\u043D\u043E \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043B\u0441\u044F \u0432 \u0431\u0435\u0437\u0434\u043D\u0443
\u041D\u0435 \u0442\u043E\u043B\u043A\u0430\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u043D\u0430 \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u044C\u0435,
\u042F \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043D\u0430\u043F\u043B\u044E\u044E \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E \u044F \u0436\u0438\u0432
\u0418 \u0431\u0443\u0434\u0443 \u0433\u0443\u043B\u044F\u0442\u044C \u043F\u043E \u043B\u0435\u0441\u0430\u043C \u043D\u0430\u043F\u0430\u043B\u043C\u043E\u043C...
`},_c=oE;var iE={id:"renessans",name:["\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441"],albums:["pugovica"],text:`
\u0411\u0440\u0451\u043B \u0432 \u043F\u0443\u0441\u0442\u044B\u043D\u0435 \u0431\u0435\u0437 \u043B\u0438\u043A\u0430 \u0438 \u043A\u0440\u043E\u0432\u0438
\u0421 \u043F\u0440\u043E\u043A\u043B\u044F\u0442\u0438\u0435\u043C \u0432 \u0447\u0438\u0441\u0442\u043E\u0439 \u0434\u0443\u0448\u0435,
\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0432\u0438\u0434\u0438\u0442 \u0438 \u0441\u043B\u043E\u0432 \u043D\u0435 \u043C\u043E\u043B\u0432\u0438\u0442
\u0421\u0442\u043E \u043B\u0435\u0442 \u0437\u0430 \u043B\u044E\u0431\u043E\u0432\u044C \u0441 \u041B\u044E\u0446\u0438\u0444\u0435\u0440\u0430 \u043A\u043B\u0438\u0448\u0435,
\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441...

\u041D\u0430 \u043E\u0431\u0440\u044B\u0432\u0435 \u0441\u0442\u043E\u0438\u0442 \u0437\u0430\u043C\u043E\u043A \u0441\u043C\u0435\u0440\u0442\u0438,
\u041E\u0433\u043E\u043D\u044C \u0438\u0437\u0432\u0435\u0440\u0433\u0430\u0435\u0442 \u0436\u0438\u0432\u043E\u0439
\u0412\u044C\u0451\u0442\u0441\u044F \u0434\u044B\u043C \u0434\u043E \u0441\u0430\u043C\u043E\u0439 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0439 \u0442\u0432\u0435\u0440\u0434\u0438,
\u0417\u0434\u0435\u0441\u044C \u044F \u0432\u043E\u0437\u0440\u043E\u0436\u0434\u0430\u044E\u0441\u044C \u0441\u043E\u0431\u043E\u0439!
\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441...

\u0410 \u0432\u0435\u0442\u0440\u044B \u043F\u043E\u044E\u0442
\u041D\u043E\u0432\u0443\u044E \u043B\u0438\u0442\u0443\u0440\u0433\u0438\u044E
\u0418\u0437 \u043F\u0440\u0430\u0445\u0430 \u0432\u044F\u0436\u0435\u0442 \u043F\u0430\u043B\u044C\u0442\u043E \u043D\u0430 \u043C\u0435\u043D\u044F
\u041B\u0430\u0441\u043A\u043E\u0432\u0430\u044F \u043C\u043E\u044F \u0431\u043E\u0433\u0438\u043D\u044F!

\u0412\u043E \u0432\u0441\u0435\u043B\u0435\u043D\u0441\u043A\u0443\u044E \u043F\u043B\u043E\u0442\u044C
\u0421 \u0433\u043E\u043B\u043E\u0432\u043E\u0439 \u043E\u043A\u0443\u043D\u0430\u044E\u0441\u044C,
\u041E\u0442\u0432\u043E\u0440\u044F\u0439\u0442\u0435 \u0438\u0437\u0433\u043D\u0430\u043D\u044C\u044F \u0432\u0440\u0430\u0442\u0430,
\u042F \u0434\u043E\u043C\u043E\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0441\u044C!
\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441...
`},Ac=iE;var sE={id:"saprofag",name:["\u0421\u0430\u043F\u0440\u043E\u0444\u0430\u0433"],albums:["spazmy-roka","vethij-sbornik"],text:`
\u041F\u043E\u0431\u0435\u0436\u0438\u0442, \u043F\u043E\u043A\u0430\u0442\u0438\u0442\u0441\u044F, \u0432 \u0441\u043A\u043B\u0430\u0434\u043A\u0430\u0445 \u0441\u043F\u0440\u044F\u0447\u0435\u0442\u0441\u044F,
\u0422\u0435\u043D\u044C \u043E\u043F\u044F\u0442\u044C \u0432\u043E\u0440\u043E\u0442\u0438\u0442\u0441\u044F, \u043F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432\u0447\u0435\u0440\u0430
\u0423\u0432\u044F\u0434\u0430\u044E\u0442 \u043B\u0438\u043B\u0438\u0438, \u0441\u043E\u043B\u043D\u0446\u0435 \u043F\u043E\u043A\u0440\u044B\u043B \u0441\u043D\u0435\u0433,
\u041D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u043B\u0441\u044F \u0438\u043D\u0435\u0435\u043C \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A

\u0422\u043E\u043B\u0443\u043E\u043B \u043D\u0430\u0441\u0443\u043F\u0438\u0442\u0441\u044F \u2013 \u0444\u0435\u0435\u0440\u0438\u044F \u0434\u0430 \u0431\u0430\u043B
\u041F\u0440\u0430\u0432\u0435\u0434\u043D\u044B\u0439 \u043E\u0441\u0442\u0443\u043F\u0438\u0442\u0441\u044F, \u043D\u0430\u0440\u0438\u0441\u0443\u0439 \u2013 \u043F\u0440\u043E\u043F\u0430\u043B
\u041A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0440\u0430\u0437\u0434\u0443\u044E\u0442\u0441\u044F \u0431\u0438\u043B\u0435\u0442\u0430\u043C\u0438 \u0432 \u0442\u0440\u0430\u043C\u0432\u0430\u0439,
\u0412 \u043F\u043E\u0434\u044A\u0435\u0437\u0434\u0435, \u0433\u0434\u0435 \u0446\u0435\u043B\u0443\u044E\u0442\u0441\u044F, \u0434\u0432\u0435\u0440\u044C \u043D\u0435 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0439!

\u0421\u0430\u043F\u0440\u043E\u0444\u0430\u0433 \u2013 \u0436\u0438\u043B\u0430 \u043D\u0430 \u0436\u0438\u043B\u0443
\u0421\u0430\u043F\u0440\u043E\u0444\u0430\u0433 \u2013 \u0432\u0435\u043D\u0430 \u043D\u0430 \u0432\u0435\u043D\u0443
\u0421\u0430\u043F\u0440\u043E\u0444\u0430\u0433 \u2013 \u0442\u0435\u043B\u043E \u043D\u0430 \u0442\u0435\u043B\u043E
\u0421\u0430\u043F\u0440\u043E\u0444\u0430\u0433 \u2013 \u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, \u0438\u0437\u043C\u0435\u043D\u0430
\u041C\u043E\u044F!

\u0429\u0443\u043F\u0430\u043B\u044C\u0446\u0430 \u0437\u0430\u0441\u043E\u0445\u0448\u0438\u0435 \u0437\u0430\u0448\u0435\u0432\u0435\u043B\u044F\u0442\u0441\u044F,
\u042D\u043C\u0431\u0440\u0438\u043E\u043D\u044B \u0431\u0440\u0430\u0432\u044B\u0435 \u0437\u0430\u0448\u0435\u0432\u0435\u043B\u044F\u0442\u0441\u044F,
\u041D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0435 \u0434\u043E\u043C\u0438\u043A\u0438 \u0437\u0430\u0448\u0435\u0432\u0435\u043B\u044F\u0442\u0441\u044F,
\u0412\u043E\u043B\u043E\u0441\u044B \u0432\u0441\u043F\u043E\u0442\u0435\u0432\u0448\u0438\u0435 \u0437\u0430\u0448\u0435\u0432\u0435\u043B\u044F\u0442\u0441\u044F

\u0417\u0430\u0431\u0440\u0435\u0434\u0451\u0442 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u0432 \u0440\u044F\u0436\u0435\u043D\u043A\u043E\u0432\u044B\u0439 \u0448\u0442\u043E\u0440\u043C,
\u041D\u0430 \u043F\u043B\u0438\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0441\u044F \u0430\u043D\u043E\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u043C
\u041A\u0442\u043E \u0438 \u0447\u0435\u043C \u043F\u0440\u043E\u0441\u043B\u0430\u0432\u0438\u0442\u0441\u044F, \u0437\u043B\u043E\u0431\u0430 \u0440\u0430\u0437\u0431\u0435\u0440\u0451\u0442
\u041C\u043E\u0449\u0438 \u043E\u043A\u043A\u0443\u043B\u044C\u0442\u0438\u0437\u043C\u0430 \u0437\u0430\u0434\u043E\u043C \u043D\u0430\u043F\u0435\u0440\u0451\u0434!
`},kc=sE;var aE={id:"skelety",name:["\u0421\u043A\u0435\u043B\u0435\u0442\u044B"],albums:["risunki-na-dushe","poshmelye"],text:`
\u0420\u043E\u0432\u043D\u043E \u043F\u044F\u0442\u044C \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C \u0443\u0442\u0440\u0430,
\u0421\u043F\u0430\u043B\u0430 \u0432 \u043B\u0438\u043F\u043A\u043E\u0439 \u043A\u043E\u043C\u0435 \u041C\u043E\u0441\u043A\u0432\u0430,
\u0418 \u0442\u0435\u043D\u044C \u043E\u043F\u0443\u0441\u0442\u0438\u043B\u0430\u0441\u044C, \u043A\u043E\u0433\u0434\u0430
\u041F\u043E\u0434 \u0437\u0435\u043C\u043B\u044E \u0438\u0437 \u0442\u043E\u043D\u043D\u0435\u043B\u0435\u0439 \u0432\u043E\u0448\u043B\u0438 \u043F\u043E\u0435\u0437\u0434\u0430
\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u0438\u043D\u044F\u044F,
\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043A\u0440\u0430\u0441\u043D\u0430\u044F,
\u0420\u043E\u0432\u043D\u043E \u043F\u044F\u0442\u044C \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C \u0443\u0442\u0440\u0430 -
\u0421\u043A\u0435\u043B\u0435\u0442\u044B \u0432 \u043F\u043E\u0435\u0437\u0434\u0430

\u0413\u043E\u0440\u043E\u0434 \u0432 \u0442\u0443\u043C\u0430\u043D\u0435, \u0438\u0434\u0443\u0442 \u0441\u043A\u0435\u043B\u0435\u0442\u044B!
\u0413\u043E\u0440\u043E\u0434 \u043C\u043E\u0439 \u0432 \u0442\u0443\u043C\u0430\u043D\u0435, \u0438\u0434\u0443\u0442 \u0441\u043A\u0435\u043B\u0435\u0442\u044B!
\u0422\u043E\u043B\u044C\u043A\u043E \u043C\u043D\u0435 \u043D\u0435 \u043C\u0435\u0440\u0435\u0449\u0438\u0442\u0441\u044F \u044D\u0442\u043E (x2)
\u041F\u044F\u0442\u044C \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C \u0443\u0442\u0440\u0430 - \u0441\u043A\u0435\u043B\u0435\u0442\u044B!

\u042F \u0441\u043B\u044B\u0448\u0430\u043B, \u043A\u0442\u043E-\u0442\u043E \u043A\u0440\u0438\u0447\u0430\u043B,
\u0412 \u0434\u044B\u043C\u0443 \u0438 \u043C\u0435\u0442\u0440\u043E, \u0438 \u0432\u043E\u043A\u0437\u0430\u043B,
\u041F\u0440\u043E\u0441\u043D\u0443\u043B\u0430\u0441\u044C \u043E\u0442 \u0432\u0437\u0440\u044B\u0432\u043E\u0432 \u041C\u043E\u0441\u043A\u0432\u0430 -
\u0422\u0440\u0435\u0441\u043D\u0443\u0442\u044B\u0435 \u0441\u0442\u0451\u043A\u043B\u0430 \u0438 \u043B\u0438\u0446\u0430-\u0447\u0435\u0440\u0435\u043F\u0430!
\u0422\u044B \u0434\u0443\u043C\u0430\u043B, \u044D\u0442\u043E \u0441\u043E\u043D,
\u041D\u0435 \u043C\u043E\u0436\u0435\u0442, \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C!
\u041D\u043E \u0437\u0435\u0440\u043A\u0430\u043B\u043E \u0432\u044B\u0434\u0430\u0441\u0442 \u0441\u0435\u043A\u0440\u0435\u0442 -
\u0422\u044B \u0441\u0442\u0430\u043B \u0441\u043A\u0435\u043B\u0435\u0442\u043E\u043C, \u0442\u044B \u0441\u0430\u043C \u0441\u043A\u0435\u043B\u0435\u0442!

\u0410 \u044F \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0441\u043F\u0430\u043B\u0430,
\u042F \u043B\u0430\u0441\u043A\u0430\u043B\u0430 \u0442\u0432\u043E\u0439 \u0433\u043B\u0430\u0434\u043A\u0438\u0439 \u0447\u0435\u0440\u0435\u043F
\u0422\u044B \u043F\u043B\u0430\u043A\u0430\u043B \u0438 \u0443\u043B\u044B\u0431\u0430\u043B\u0441\u044F,
\u0418 \u0433\u043B\u0430\u0437\u043D\u0438\u0446\u044B \u0442\u0432\u043E\u0438 \u0447\u0435\u0440\u043D\u0435\u043B\u0438...
`},Nc=aE;var uE={id:"skvoz-ogon",name:["\u0421\u043A\u0432\u043E\u0437\u044C \u043E\u0433\u043E\u043D\u044C \u0434\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434\u0430"],albums:[],text:`
\u041C\u0438\u043B\u043B\u0438\u043E\u043D \u0434\u043E\u0440\u043E\u0433 \u044F \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u0430, \u0431\u0435\u0437 \u0442\u0435\u0431\u044F \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u043D\u0435 \u043C\u0438\u043B
\u0411\u0435\u0437 \u0442\u0435\u0431\u044F \u0436\u0438\u0432\u043E\u0435 \u0432\u0441\u0451 \u043E\u0441\u0442\u044B\u043B\u043E, \u044F \u043E\u0434\u043D\u0430 \u0441\u0440\u0435\u0434\u0438 \u043C\u043E\u0433\u0438\u043B
\u0413\u0434\u0435-\u0442\u043E \u0437\u0430\u043A\u0440\u0443\u0436\u0438\u0442\u0441\u044F \u043B\u0438\u0441\u0442\u0432\u0430, \u0433\u0434\u0435-\u0442\u043E \u0437\u0430\u0436\u0433\u0443\u0442\u0441\u044F \u0437\u0432\u0451\u0437\u0434\u044B,
\u041C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0441\u0442\u0440\u0430\u0448\u043D\u043E, \u043D\u043E \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0441\u043B\u043E\u0432\u0430 '\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E'

\u0421\u043A\u0432\u043E\u0437\u044C \u043E\u0433\u043E\u043D\u044C \u0434\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434\u0430
\u041A\u0430\u043A \u0436\u0430\u0434\u043D\u0430 \u0441\u0443\u0434\u044C\u0431\u0430 \u043A \u043D\u0435\u0438\u0437\u0432\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u0441\u0442\u0438!
\u0421\u043A\u0432\u043E\u0437\u044C \u043E\u0433\u043E\u043D\u044C \u0434\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434\u0430
\u041D\u043E \u044F \u0434\u043E\u0431\u044C\u044E\u0441\u044C \u0436\u0435\u043B\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0447\u0430\u0441\u0442\u044C\u044F!

\u0421\u0430\u043C\u044B\u0435 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0435 \u043C\u0435\u0447\u0442\u044B \u0445\u0440\u0430\u043D\u0438\u043B\u0430 - \u0434\u043B\u044F \u0442\u0435\u0431\u044F, \u043B\u0438\u0448\u044C \u0434\u043B\u044F \u0442\u0435\u0431\u044F!
\u0412\u0441\u0451 \u0432\u043E\u043A\u0440\u0443\u0433 \u0441\u0435\u0431\u044F \u043F\u043E\u0445\u043E\u0440\u043E\u043D\u0438\u043B\u0430, \u0442\u044B \u043C\u043E\u0451 \u043D\u0435\u0431\u043E \u0438 \u0437\u0435\u043C\u043B\u044F!
\u0413\u0434\u0435-\u0442\u043E \u0437\u0430\u043F\u043B\u0430\u0447\u0435\u0442 \u043F\u0442\u0438\u0446\u0435\u0439 \u0436\u0438\u0437\u043D\u044C, \u0430 \u044F \u0437\u0430\u0432\u043E\u044E \u0432\u043E\u043B\u043A\u043E\u043C,
\u0422\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u0436\u0434\u0438\u0441\u044C \u0438 \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0438\u0441\u044C, \u0435\u0449\u0451 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0435\u0434\u043E\u043B\u0433\u043E!

\u0412\u0435\u0440\u044E, \u044F \u0441 \u0442\u043E\u0431\u043E\u0439 \u043B\u0438\u0448\u044C \u043E\u0436\u0438\u0432\u0430\u044E,
\u0412\u0435\u0440\u044E, \u044F \u0441 \u0442\u043E\u0431\u043E\u0439 \u043B\u0438\u0448\u044C \u043E\u0436\u0438\u043B\u0430!
\u0412\u0435\u0440\u044E, \u044F \u0441 \u0442\u043E\u0431\u043E\u0439 \u043B\u0438\u0448\u044C \u043E\u0436\u0438\u0432\u0430\u044E,
\u0422\u0435\u043F\u0435\u0440\u044C \u044F \u0436\u0438\u0432\u0430\u044F...
`},Rc=uE;var lE={id:"slyoznaya",name:["\u041B\u0438\u0445\u0430 \u0442\u0430 \u0431\u0435\u0434\u0430"],albums:["bomba-v-ubezhishche","organizm","negativ-prostranstva","agressivnyj-pokoj"],text:`
\u0410\u0445 \u0442\u044B, \u0441\u043B\u0451\u0437\u043D\u0430\u044F \u043D\u043E\u0447\u0435\u044E \u0436\u0434\u0430\u043D\u043D\u043E\u044E,
\u041F\u0440\u043E\u0431\u0435\u0436\u0430\u043B\u0430\u0441\u044F \u0432\u043E\u043B\u0447\u0438\u0446\u0435\u044E \u043F\u043E \u043B\u0435\u0441\u0430\u043C \u0433\u043B\u0443\u0445\u0438\u043C,
\u0410\u0445 \u0442\u044B \u0441\u043B\u0451\u0437\u043D\u0430\u044F \u0431\u0438\u0442\u044B\u043C \u0444\u043E\u043D\u0430\u0440\u0438\u043A\u043E\u043C
\u041F\u043E\u0432\u0435\u043B\u0430 \u0441\u0438\u043D\u0438\u0446\u0435\u044E \u0434\u0430 \u043F\u043E \u0441\u043B\u0435\u0434\u0430\u043C \u043C\u043E\u0438\u043C...
\u041D\u0438 \u0441 \u043B\u0443\u043D\u043E\u0439, \u043D\u0438 \u0441 \u0434\u043E\u0436\u0434\u0451\u043C, \u043D\u0438 \u0441 \u043A\u043E\u043F\u043E\u0442\u044C\u044E, -
\u041D\u0438\u043A\u043E\u0433\u0434\u0430...

\u041D\u0430\u043A\u0430\u0437\u0430\u043B\u0430 \u0431\u0435\u0434\u0430 \u0437\u0430 \u0442\u043E, \u0447\u0442\u043E
\u041E\u0431\u043B\u0438\u0437\u0430\u043B\u0430 \u043F\u0435\u043D\u043A\u0443 \u0441 \u043C\u043E\u043B\u043E\u043A\u0430,
\u041F\u043E\u043B\u043E\u043C\u0430\u043B\u0430 \u0441\u0442\u0435\u043D\u043A\u0443 \u0441\u0442\u0440\u0430\u0445\u0430...
\u041E\u0431\u043B\u0438\u0437\u0430\u043B\u0430 \u043F\u0435\u043D\u043A\u0443 \u0441 \u043C\u043E\u043B\u043E\u043A\u0430,
\u041F\u043E\u043B\u043E\u043C\u0430\u043B\u0430 \u0441\u0442\u0435\u043D\u043A\u0443 \u0441\u0442\u0440\u0430\u0445\u0430...
\u041B\u0438\u0445\u0430 \u0442\u0430 \u0431\u0435\u0434\u0430...

\u0410\u0445 \u0442\u044B, \u0441\u043B\u0451\u0437\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430 \u0434\u043E\u0440\u043E\u0436\u0435\u043D\u044C\u043A\u0430,
\u041F\u0430\u0443\u0442\u0438\u043D\u043E\u044E \u043E\u043A\u0443\u0442\u0430\u043B\u0430 \u0447\u0451\u0440\u043D\u044B\u0439 \u0433\u0440\u0435\u0445 \u0434\u0430 \u0441\u043C\u0435\u0445,
\u0410\u0445 \u0442\u044B \u0441\u043B\u0451\u0437\u043D\u0430\u044F \u0432 \u0447\u0430\u0441 \u0431\u0435\u0437\u043E\u0431\u0440\u0430\u0437\u0438\u044F
\u0420\u0430\u0441\u0442\u0440\u0435\u043F\u0430\u043B\u0430 \u0438 \u043E\u043A\u0443\u0442\u0430\u043B\u0430 \u0442\u0430\u0439\u043D\u044B\u0439 \u043C\u0438\u0440 \u043F\u043E\u0442\u0435\u0445
\u041D\u0430 \u043F\u0435\u0447\u0438 \u0434\u0443\u0448\u043E\u0439 \u0440\u0430\u0441\u043A\u0430\u043B\u0435\u043D\u043D\u043E\u0439,
\u0412 \u0447\u0430\u0441 \u043A\u043E\u0433\u0434\u0430...

\u041D\u043E \u0432 \u0442\u0438\u0441\u043A\u0438 \u0432\u0437\u044F\u043B\u0438 \u0442\u0443\u0447\u0438 \u0433\u0440\u043E\u0437\u043D\u044B\u0435,
\u0412\u044B\u0436\u0438\u043C\u0430\u043B\u0438 \u0441\u043E\u043A \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0440\u044B,
\u041E\u0431\u043D\u044F\u043B\u0430 \u043C\u0435\u0442\u0435\u043B\u044C \u0440\u0430\u0441\u043F\u0443\u0442\u043D\u0438\u0446\u0430
\u0418 \u0440\u0430\u0437\u0434\u0432\u0438\u043D\u0443\u043B\u0438\u0441\u044C \u0433\u043E\u0440\u044B...
`},Oc=lE;var cE={id:"sudorogi",name:["\u0421\u0443\u0434\u043E\u0440\u043E\u0433\u0438 \u0436\u0438\u0432\u044B\u0445 \u0431\u043E\u043B\u043E\u0442"],albums:["pugovica"],text:`
\u0412\u0435\u0440\u043D\u0443\u0441\u044C \u044F \u043D\u0430 \u0441\u0442\u043E \u043B\u0435\u0442,
\u0422\u044B \u0441\u043A\u0430\u0436\u0435\u0448\u044C - \u0437\u0430\u0431\u0435\u0440\u0438 \u043C\u0435\u043D\u044F!
\u0410 \u043D\u044B\u043D\u0447\u0435 \u043D\u0430\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442,
\u041D\u043E \u0437\u043D\u0430\u044E - \u0442\u044B \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u0448\u044C

\u041E\u0447\u043D\u0443\u0441\u044C \u044F \u0441\u0440\u0435\u0434\u0438 \u0432\u0435\u0442\u0440\u043E\u0432
\u0422\u0432\u043E\u0435\u0439 \u0437\u0435\u043C\u043B\u0438... \u0417\u0430\u0431\u0435\u0440\u0438 \u043C\u0435\u043D\u044F!
\u041E\u0441\u043A\u043E\u043B\u043A\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0441\u043D\u043E\u0432
\u0423\u0437\u043D\u0430\u0435\u0448\u044C \u0438 \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u0448\u044C

\u0421\u0443\u0434\u043E\u0440\u043E\u0433\u0438, \u0441\u0443\u0434\u043E\u0440\u043E\u0433\u0438
\u0416\u0438\u0432\u044B\u0445 \u0431\u043E\u043B\u043E\u0442, \u0433\u0434\u0435 \u043C\u044B \u043E\u0434\u043D\u0438!
\u0422\u044B \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u0448\u044C \u0441\u0443\u0434\u043E\u0440\u043E\u0433\u0438, \u0441\u0443\u0434\u043E\u0440\u043E\u0433\u0438
\u0418\u0441\u043A\u0430\u043B \u043D\u0430\u0440\u043E\u0434, \u043D\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u0438
\u041D\u0430\u0441 \u0443\u043A\u0443\u0442\u044B\u0432\u0430\u043B \u0442\u0443\u043C\u0430\u043D!

\u0410 \u043C\u043E\u0436\u0435\u0442 \u0431\u0435\u0437 \u0431\u043E\u043B\u0438,
\u0411\u0435\u0437 \u0442\u0435\u043D\u0438 \u0438 \u0431\u0435\u0437 \u043E\u0433\u043D\u044F
\u0411\u0435\u0437 \u043A\u043E\u0436\u0438 \u0438 \u043A\u0440\u043E\u0432\u0438,
\u0422\u0430\u043A \u043B\u0443\u0447\u0448\u0435 \u0442\u044B \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u0448\u044C
`},Pc=cE;var dE={id:"trahni-nebo",name:["\u0422\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E"],albums:["petlya-soblazna","trahni-nebo"],text:`
\u041A\u0430\u0442\u0438\u0442, \u043A\u0430\u0442\u0438\u0442, \u043A\u0430\u0442\u0438\u0442, \u043A\u0430\u0442\u0438\u0442
\u0421 \u0433\u043E\u0440\u044B \u0431\u043B\u044F\u0434\u0441\u043A\u0430\u044F \u0442\u0435\u043B\u0435\u0433\u0430,
\u0425\u0432\u0430\u0442\u0438\u0442, \u0445\u0432\u0430\u0442\u0438\u0442, \u0432\u0441\u0435\u043C \u043D\u0430\u0436\u0440\u0430\u0442\u044C\u0441\u044F,
\u0412\u043E\u0434\u043A\u0438, \u043C\u044F\u0441\u0430 \u0438 \u0440\u0430\u0437\u0432\u0440\u0430\u0442

\u0422\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E,
\u0422\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438 \u0441\u043E\u043B\u043D\u0446\u0435,
\u0422\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438 \u0437\u0432\u0451\u0437\u0434\u044B -
\u0421\u0442\u0430\u043D\u0435\u0448\u044C \u0431\u043E\u0433\u043E\u043C!

\u041B\u044C\u0451\u0442\u0441\u044F, \u043B\u044C\u0451\u0442\u0441\u044F, \u043B\u044C\u0451\u0442\u0441\u044F, \u043B\u044C\u0451\u0442\u0441\u044F
\u0421 \u0442\u0440\u0443\u043F\u043D\u044B\u0445 \u0442\u0443\u0447 \u043A\u0438\u0441\u043B\u043E\u0442\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C
\u0425\u0432\u0430\u0442\u0438\u0442 \u0432\u0441\u0435\u043C! \u041F\u043E\u0431\u0435\u0433\u0430\u0439 \u0431\u043E\u0441\u0438\u043A\u043E\u043C!
\u0412\u043E\u0442 \u0442\u0430\u043A\u0430\u044F, \u0431\u043B\u044F\u0442\u044C, \u0432\u0435\u0441\u043D\u0430...

\u0422\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E,
\u0422\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438 \u0437\u0432\u0451\u0437\u0434\u044B,
\u0422\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438, \u0442\u0440\u0430\u0445\u043D\u0438 \u0441\u043E\u043B\u043D\u0446\u0435 -
\u0421\u0442\u0430\u043D\u0435\u0448\u044C \u0431\u043E\u0433\u043E\u043C!
`},Fc=dE;var fE={id:"tulovishchej",name:["\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435"],albums:["tulovishche","trahni-nebo","risunki-na-dushe"],text:`
\u0427\u0442\u043E \u0437\u0430 \u043F\u0435\u0441\u043D\u044F \u0431\u0435\u0437 \u0431\u0430\u044F\u043D\u0430?
\u0427\u0442\u043E \u0437\u0430 \u0441\u0447\u0430\u0441\u0442\u044C\u0435 \u0431\u0435\u0437 \u0441\u0442\u0430\u043A\u0430\u043D\u0430?
\u0427\u0442\u043E \u0437\u0430 \u044E\u043D\u043E\u0441\u0442\u044C \u0431\u0435\u0437 \u043F\u0440\u044B\u0449\u0435\u0439?
\u0427\u0442\u043E \u0437\u0430 \u0434\u0443\u0448\u0438 \u0431\u0435\u0437 \u0442\u0443-\u0442\u0443...
\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435\u0439?

\u042F \u0440\u0430\u0437\u0434\u0432\u0430\u0438\u0432\u0430\u044E\u0441\u044C \u2013 \u043D\u0430\u0441 \u0434\u0432\u043E\u0435
\u042F \u0438 \u044F, \u044F \u0438 \u044F
\u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0432\u0435\u0449\u0435\u0439,
\u0427\u0442\u043E\u0431 \u043D\u0435 \u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0441\u0435\u0445 \u0442\u0443-\u0442\u0443...
\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435\u0439!
`},Lc=fE;var hE={id:"volosy",name:["\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B"],albums:["durackiye-knizhki","vulkanizaciya-dushi","spazmy-roka","poshmelye"],text:`
\u0420\u0443\u043A\u0438, \u0447\u0442\u043E \u0442\u044F\u043D\u0443\u043B\u0438\u0441\u044C \u0432\u043E\u043D, \u0442\u0443\u0433\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u044B
\u041D\u0435 \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u0435\u0447\u0442\u044B
\u0412\u0435\u043D\u044B, \u0447\u0442\u043E \u043D\u0435\u0441\u043B\u0438 \u043B\u044E\u0431\u043E\u0432\u044C, \u043D\u0435\u0436\u043D\u043E \u0432\u0441\u043F\u043E\u0440\u043E\u0442\u044B,
\u041A\u0430\u043A \u0440\u0430\u0437\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u043C\u043E\u0441\u0442\u044B

\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B...

\u041F\u043B\u0430\u0442\u044C\u0435, \u0447\u0442\u043E \u043F\u0443\u0441\u0442\u0438\u043B\u043E\u0441\u044C \u0432\u043F\u043B\u044F\u0441, \u0441\u0442\u0451\u0440\u043B\u043E\u0441\u044C \u0432 \u0434\u044B\u0440\u043E\u0447\u043A\u0438,
\u0417\u0430\u0433\u043E\u0440\u0435\u043B\u043E\u0441\u044C \u0438 \u043F\u0440\u043E\u0448\u043B\u043E
\u0421\u0430\u043D\u0438, \u0447\u0442\u043E \u043A\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u0432\u043D\u0438\u0437, \u0437\u0430\u0443\u043F\u0440\u044F\u043C\u0438\u043B\u0438\u0441\u044C,
\u041A\u043E\u0433\u0434\u0430 \u0441\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0432\u0437\u043E\u0448\u043B\u043E
`},jc=hE;var pE={id:"ya-ne-angel",name:["\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B"],albums:["durackiye-knizhki","bomba-v-ubezhishche","zhazhda","vosem-zhenshchin-na-raduge"],text:`
\u041D\u0430 \u0443\u043F\u0430\u0432\u0448\u0435\u0439 \u0441 \u043D\u0435\u0431\u0430 \u0431\u0440\u043E\u0448\u043A\u0435
\u041D\u0430\u0441\u0442\u0443\u043F\u0438\u043B \u0438 \u0441\u0442\u0430\u043B\u043E \u0445\u043E\u043B\u043E\u0434\u043D\u043E
\u0423\u043B\u0435\u0442\u0430\u0435\u0442 \u0441\u043E\u043D
\u041D\u0430 \u0440\u0430\u0437\u043E\u0440\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u0443\u0448\u043A\u0438
\u0421\u043B\u0451\u0437\u044B \u043A\u0430\u043F\u0430\u043B\u0438 \u0434\u0435\u0432\u0438\u0447\u044C\u0435\u0433\u043E \u0433\u043E\u043B\u043E\u0434\u0430
\u0423\u043B\u0435\u0442\u0430\u0435\u0442 \u0441\u043E\u043D

\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B, \u044F \u043D\u0435 \u044F
\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B - \u044F \u0431\u0435\u043B\u0430\u044F \u043D\u043E\u0447\u044C \u043D\u0430 \u0447\u0451\u0440\u043D\u043E\u043C \u0441\u043E\u043B\u043D\u0446\u0435
\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B, \u044F \u043D\u0435 \u044F
\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B - \u044F \u0436\u0451\u043B\u0442\u043E\u0435 \u043D\u0435\u0431\u043E \u043D\u0430\u0434 \u0432\u044B\u0441\u043E\u0445\u0448\u0438\u043C \u043C\u043E\u0440\u0435\u043C

\u0421 \u043E\u0431\u0433\u043E\u0440\u0435\u0432\u0448\u0438\u043C\u0438 \u0440\u0435\u0441\u043D\u0438\u0446\u0430\u043C\u0438
\u0428\u043B\u0438 \u043F\u043E \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0430\u043C \u043D\u0435\u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0442\u0430\u043A
\u0423\u043B\u0435\u0442\u0430\u0435\u0442 \u0441\u043E\u043D
\u041F\u0435\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043F\u0442\u0438\u0446\u0430\u043C\u0438
\u0418 \u043F\u043E\u0434 \u043F\u0435\u043D\u0438\u0435 \u0432\u044B\u0440\u043E\u0441 \u0447\u0451\u0440\u043D\u044B\u0439 \u043C\u0430\u043A
\u0423\u043B\u0435\u0442\u0430\u0435\u0442 \u0441\u043E\u043D

\u041F\u043E\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043B\u0438 \u0437\u0430\u043C\u0451\u0440\u0437\u0448\u0435\u0439 \u0433\u0438\u0435\u043D\u043E\u044E
\u041E\u0431\u043E\u0433\u0440\u0435\u043B\u0438 \u0438 \u0434\u0435\u043B\u043E \u0447\u0438\u0441\u0442\u043E\u0435
\u041D\u0430\u043F\u043E\u0438\u043B\u0438 \u0432\u043E\u0434\u043E\u0439 \u0441\u043E\u043B\u0451\u043D\u043E\u044E
\u0418 \u043F\u043E\u043A\u0440\u0430\u0441\u0438\u043B\u0438 \u0432 \u0446\u0432\u0435\u0442 \u043D\u0435\u0438\u0441\u0442\u043E\u0432\u044B\u0439
\u0413\u043E\u0434\u044B \u0448\u043B\u0438, \u0440\u043E\u0441\u043B\u0438 \u043D\u0430\u0448\u0438 \u0432\u043E\u043B\u043E\u0441\u044B
\u0413\u043E\u0434\u044B \u0448\u043B\u0438, \u0432\u0441\u043B\u0435\u0434 \u0440\u0443\u0433\u0430\u044F\u0441\u044C
\u0413\u043E\u0434\u044B \u0448\u043B\u0438, \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u043F\u043E\u043B\u043E\u0441\u044B
\u0413\u043E\u0434\u044B \u0448\u043B\u0438, \u043D\u0435 \u0441\u043F\u043E\u0442\u044B\u043A\u0430\u044F\u0441\u044C
`},Vc=pE;var vm={[hc.id]:hc,[pc.id]:pc,[mc.id]:mc,[gc.id]:gc,[yc.id]:yc,[ac.id]:ac,[vc.id]:vc,[wc.id]:wc,[bc.id]:bc,[Dc.id]:Dc,[dc.id]:dc,[fc.id]:fc,[Ic.id]:Ic,[lc.id]:lc,[Ec.id]:Ec,[xc.id]:xc,[Sc.id]:Sc,[Mc.id]:Mc,[Tc.id]:Tc,[cc.id]:cc,[_c.id]:_c,[Ac.id]:Ac,[kc.id]:kc,[Nc.id]:Nc,[Rc.id]:Rc,[Oc.id]:Oc,[Pc.id]:Pc,[Fc.id]:Fc,[Lc.id]:Lc,[jc.id]:jc,[Vc.id]:Vc,[uc.id]:uc,[Cc.id]:Cc};var mE={id:"shmely",name:"\u0428\u043C\u0435\u043B\u0438",image:"/artist/shmely/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/4OXVjz9BARB2MwT6sdx8JE",youtube:"https://www.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw",youtubeMusic:"https://music.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw",yandexMusic:"https://music.yandex.ru/artist/213256"},albums:["trotilovyye-skazki","tulovishche","purga","durackiye-knizhki","petlya-soblazna","zloradostnaya-opuhol","vulkanizaciya-dushi","princessa-bez-trusov","bomba-v-ubezhishche","moshchi","trahni-nebo","organizm","spazmy-roka","risunki-na-dushe","poshmelye","negativ-prostranstva","agressivnyj-pokoj","polna-suma","ostanovite-chelovechestvo","zhazhda","ten-serdca","lyod","vethij-sbornik","vosem-zhenshchin-na-raduge","pugovica","ya-vernus-k-tebe","koshkiny-obidy","karamelnyye-strahi","moskovskaya-yarmarka-udovolstvij","mekhanicheskaya-balerina","toplivo","cekh-po-reabilitacii-paranoikov","teatr-urodov","para-trupov","belyj-karandash","zloradostnaya-opuhol-new","16-chudes","mizantropiya"]},ui={artist:mE,albums:ym,songs:vm};var gE={[si.artist.id]:si,[ai.artist.id]:ai,[ui.artist.id]:ui},Fe=gE,wm=[si.artist,ai.artist,ui.artist];var yE=(e,t)=>t.id;function vE(e,t){if(e&1&&(v(0,"div",2)(1,"a",3),G(2,"img",4),v(3,"span",5),j(4),w()()()),e&2){let n=t.$implicit;p(),F("routerLink","artist/"+n.id),p(),F("src","."+n.image,ve)("alt",n.name),p(2),oe(n.name)}}console.log(Fe);var bm=(()=>{let t=class t{constructor(){this.artists=wm}ngOnInit(){document.title="\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=K({type:t,selectors:[["app-home-page"]],standalone:!0,features:[J],decls:4,vars:0,consts:[[1,"home-page"],[1,"home-page__row"],[1,"home-page__item"],[1,"home-page__link",3,"routerLink"],[1,"home-page__img",3,"src","alt"],[1,"home-page__name"]],template:function(o,i){o&1&&(v(0,"div",0)(1,"div",1),ke(2,vE,5,4,"div",2,yE),w()()),o&2&&(p(2),Ne(i.artists))},dependencies:[we],styles:[".home-page[_ngcontent-%COMP%]{margin-top:40px}.home-page__row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-left:-1%;margin-right:-1%}.home-page__item[_ngcontent-%COMP%]{box-sizing:border-box;word-wrap:break-word;margin-left:1%;margin-right:1%;width:48%}@media screen and (max-width: 768px){.home-page__item[_ngcontent-%COMP%]{width:98%}}.home-page__img[_ngcontent-%COMP%]{max-width:100%}.home-page__link[_ngcontent-%COMP%]{text-decoration:none}.home-page__name[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-transform:uppercase;transition:color .3s ease;margin-top:10px;margin-bottom:20px}"]});let e=t;return e})();function wE(e,t){if(e&1&&(v(0,"div",4),j(1),w()),e&2){let n=B();p(),oe(n.year)}}var Dm=(()=>{let t=class t{constructor(){this.year=0}get folder(){return this.image??"/artist/album-card.jpg"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=K({type:t,selectors:[["app-album-card"]],inputs:{link:"link",name:"name",image:"image",year:"year"},standalone:!0,features:[J],decls:6,vars:5,consts:[[1,"album-card",3,"routerLink"],[1,"album-card__image"],[1,"album-card__img",3,"src","alt"],[1,"album-card__name"],[1,"album-card__year"]],template:function(o,i){o&1&&(v(0,"a",0)(1,"div",1),G(2,"img",2),w(),v(3,"div",3),j(4),w(),Q(5,wE,2,1,"div",4),w()),o&2&&(F("routerLink",i.link),p(2),F("src","."+i.folder,ve)("alt",i.name),p(2),oe(i.name),p(),W(i.year?5:-1))},dependencies:[we],styles:[".album-card[_ngcontent-%COMP%]{display:block;position:relative;padding:20px 22px 24px;box-sizing:border-box;text-decoration:none;transition:background-color .3s ease}@media screen and (max-width: 992px){.album-card[_ngcontent-%COMP%]{padding:10px 10px 19px}}.album-card[_ngcontent-%COMP%]:hover{background-color:#222427}.album-card__img[_ngcontent-%COMP%]{margin:auto;object-fit:contain;object-position:center;height:100%;width:0;min-width:100%;min-height:100%;aspect-ratio:1}.album-card__name[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-transform:uppercase;transition:color .3s ease;margin-top:14px}.album-card__year[_ngcontent-%COMP%]{font-weight:500;line-height:1.5;font-size:16px;color:#696c6f}"]});let e=t;return e})();function bE(e,t){if(e&1&&(v(0,"li",1)(1,"a",7),G(2,"img",8),w()()),e&2){let n=B(2);p(),F("href",n.streaming.spotify,ve)}}function DE(e,t){if(e&1&&(v(0,"li",2)(1,"a",7),G(2,"img",9),w()()),e&2){let n=B(2);p(),F("href",n.streaming.appleMusic,ve)}}function IE(e,t){if(e&1&&(v(0,"li",3)(1,"a",7),G(2,"img",10),w()()),e&2){let n=B(2);p(),F("href",n.streaming.youtubeMusic,ve)}}function CE(e,t){if(e&1&&(v(0,"li",4)(1,"a",7),G(2,"img",11),w()()),e&2){let n=B(2);p(),F("href",n.streaming.youtube,ve)}}function EE(e,t){if(e&1&&(v(0,"li",5)(1,"a",7),G(2,"img",12),w()()),e&2){let n=B(2);p(),F("href",n.streaming.bandcamp,ve)}}function xE(e,t){if(e&1&&(v(0,"li",6)(1,"a",7),G(2,"img",13),w()()),e&2){let n=B(2);p(),F("href",n.streaming.yandexMusic,ve)}}function SE(e,t){if(e&1&&(v(0,"ul",0),Q(1,bE,3,1,"li",1)(2,DE,3,1,"li",2)(3,IE,3,1,"li",3)(4,CE,3,1,"li",4)(5,EE,3,1,"li",5)(6,xE,3,1,"li",6),w()),e&2){let n=B();p(),W(n.streaming.spotify?1:-1),p(),W(n.streaming.appleMusic?2:-1),p(),W(n.streaming.youtubeMusic?3:-1),p(),W(n.streaming.youtube?4:-1),p(),W(n.streaming.bandcamp?5:-1),p(),W(n.streaming.yandexMusic?6:-1)}}var li=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=K({type:t,selectors:[["app-streaming-list"]],inputs:{streaming:"streaming"},standalone:!0,features:[J],decls:1,vars:1,consts:[[1,"streaming-list"],["title","Spotify",1,"streaming-list__item"],["title","Apple Music",1,"streaming-list__item"],["title","YouTube Music",1,"streaming-list__item"],["title","YouTube",1,"streaming-list__item"],["title","Bandcamp",1,"streaming-list__item"],["title","\u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0443\u0437\u044B\u043A\u0430",1,"streaming-list__item"],["target","_blank",1,"streaming-list__link",3,"href"],["src","./streaming/spotify.svg","alt","Spotify",1,"streaming-list__logo"],["src","./streaming/appleMusic.svg","alt","Apple Music",1,"streaming-list__logo"],["src","./streaming/YouTubeMusic.svg","alt","YouTube Music",1,"streaming-list__logo"],["src","./streaming/YouTube.svg","alt","YouTube",1,"streaming-list__logo"],["src","./streaming/bandcamp.svg","alt","Bandcamp",1,"streaming-list__logo"],["src","./streaming/yandexMusic.svg","alt","\u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0443\u0437\u044B\u043A\u0430",1,"streaming-list__logo"]],template:function(o,i){o&1&&Q(0,SE,7,6,"ul",0),o&2&&W(i.streaming?0:-1)},styles:[".streaming-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;column-gap:10px;align-items:center;list-style-type:none;padding-left:0}.streaming-list__item[_ngcontent-%COMP%]{height:22px;filter:grayscale(1);background-color:#444;padding:10px;margin-top:10px;transition:background-color .4s}.streaming-list__item[_ngcontent-%COMP%]:hover{filter:grayscale(0);background-color:#eee}.streaming-list__logo[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=t;return e})();var ME=(e,t)=>t.id;function TE(e,t){if(e&1&&G(0,"app-album-card",4),e&2){let n=t.$implicit;F("link",n.id)("name",n.name)("year",n.year)("image",n.folder)}}function _E(e,t){if(e&1&&(v(0,"h2",1)(1,"a",2),j(2),w()(),v(3,"div",3),ke(4,TE,1,4,"app-album-card",4,ME),G(6,"app-album-card",5)(7,"app-album-card",5),w(),G(8,"app-streaming-list",6)),e&2){let n=B();p(2),ie(" ",n.artistName," "),p(2),Ne(n.albums),p(2),F("link","/artist/"+n.artistId+"/songs/other")("name","\u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B"),p(),F("link","/artist/"+n.artistId+"/songs")("name","\u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438"),p(),F("streaming",n.streaming)}}var Im=(()=>{let t=class t{constructor(r){if(this.route=r,this.artists=Fe,this.artistName="",this.artistId=null,this.albums=[],this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let o=this.artists[this.artistId];this.streaming=o.artist.streaming,this.artistName=o.artist.name,this.albums=o.artist.albums.map(i=>o.albums[i])}ngOnInit(){document.title=`${this.artistName} | \u0414\u0438\u0441\u043A\u043E\u0433\u0440\u0430\u0444\u0438\u044F`}};t.\u0275fac=function(o){return new(o||t)(re(le))},t.\u0275cmp=K({type:t,selectors:[["app-artist-page"]],standalone:!0,features:[J],decls:2,vars:1,consts:[[1,"home-page"],[1,"home-page__name"],["routerLink",""],[1,"home-page__wrap","rows"],[1,"col",3,"link","name","year","image"],[1,"col",3,"link","name"],[3,"streaming"]],template:function(o,i){o&1&&(v(0,"div",0),Q(1,_E,9,6),w()),o&2&&(p(),W(i.artistName?1:-1))},dependencies:[we,Dm,li]});let e=t;return e})();var AE=(e,t)=>t.id||t.name;function kE(e,t){if(e&1&&(v(0,"div",4),G(1,"img",7),w()),e&2){let n=B(2);p(),F("src","."+n.album.folder,ve)("alt",n.album.name)}}function NE(e,t){if(e&1&&(j(0),v(1,"a",2),j(2),w()),e&2){let n=B(),r=n.$implicit,o=n.$index,i=B(2);ie(" ",o+1,". "),p(),F("routerLink","/artist/"+i.artistId+"/song/"+r.id),p(),ie(" ",r.name," ")}}function RE(e,t){if(e&1&&j(0),e&2){let n=B(),r=n.$implicit,o=n.$index;ga(" ",o+1,". ",r.name," ")}}function OE(e,t){if(e&1&&(v(0,"div",5),Q(1,NE,3,3,"a",2)(2,RE,1,2),w()),e&2){let n=t.$implicit;p(),W(n.id?1:2)}}function PE(e,t){if(e&1&&(v(0,"pre"),j(1),w()),e&2){let n=B(2);p(),oe(n.album==null?null:n.album.info)}}function FE(e,t){if(e&1&&(v(0,"h2",1)(1,"a",2),j(2),w()(),v(3,"div",3),Q(4,kE,2,2,"div",4),v(5,"h3"),j(6),v(7,"span"),j(8),w()(),ke(9,OE,3,1,"div",5,AE),Q(11,PE,2,1,"pre"),G(12,"app-streaming-list",6),w()),e&2){let n=B();p(),F("routerLink","/artist/"+n.artistId),p(),oe(n.artistName),p(2),W(n.album&&n.album.folder?4:-1),p(2),ie(" ",n.album==null?null:n.album.name," "),p(2),oe(n.album==null?null:n.album.year),p(),Ne(n.songs),p(2),W(n.album!=null&&n.album.info?11:-1),p(),F("streaming",n.album==null?null:n.album.streaming)}}var Cm=(()=>{let t=class t{constructor(r){this.route=r,this.artists=Fe,this.artistName="",this.artistId=null,this.album=null,this.songs=[],this.artistId=this.route.snapshot.paramMap.get("artist");let o=this.route.snapshot.paramMap.get("album");if(!this.artistId||!o)return;let i=this.artists[this.artistId];this.artistName=i.artist.name,this.album=i.albums[o],this.songs=this.album.songs.map(s=>typeof s=="string"?i.songs[s]:{name:s.name,id:""})}ngOnInit(){document.title=`${this.album?.name} (${this.album?.year}) | ${this.artistName}`}};t.\u0275fac=function(o){return new(o||t)(re(le))},t.\u0275cmp=K({type:t,selectors:[["app-album-page"]],standalone:!0,features:[J],decls:2,vars:1,consts:[[1,"album-page"],[1,"album-page__name"],[3,"routerLink"],[1,"album-page__wrap"],[1,"album-page__folder-wrap"],[1,"album-page__item"],[3,"streaming"],[1,"album-page__folder",3,"src","alt"]],template:function(o,i){o&1&&(v(0,"div",0),Q(1,FE,13,7),w()),o&2&&(p(),W(i.artistName?1:-1))},dependencies:[we,li],styles:[".album-page__folder-wrap[_ngcontent-%COMP%]{max-width:500px;float:right;margin-left:10px;margin-bottom:10px}@media screen and (max-width: 768px){.album-page__folder-wrap[_ngcontent-%COMP%]{float:none;margin:0}}.album-page__folder[_ngcontent-%COMP%]{max-width:100%}.album-page__item[_ngcontent-%COMP%]{display:flex;line-height:1.8}.album-page__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;text-decoration:none;border-bottom:1px solid #c32f27}.album-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:800;line-height:1.1;font-size:30px;letter-spacing:.1em;text-transform:uppercase;max-width:840px;margin-top:42px}.album-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.5;font-size:20px;letter-spacing:.05em;text-transform:uppercase;color:#696c6f}"]});let e=t;return e})();var LE=(e,t)=>t.id;function jE(e,t){if(e&1&&(v(0,"div",4)(1,"strong"),j(2),v(3,"span")(4,"a",2),j(5),w()()()()),e&2){let n=t.$implicit,r=B(3);p(2),ie(" ",n.year," \u2014 "),p(2),F("routerLink","/artist/"+r.artistId+"/"+n.id),p(),ie(" ",n.name," ")}}function VE(e,t){if(e&1&&ke(0,jE,6,3,"div",4,LE),e&2){let n=B(2);Ne(n.albums)}}function BE(e,t){if(e&1&&(v(0,"div",4)(1,"a",2),j(2," \u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B "),w()()),e&2){let n=B(2);p(),F("routerLink","/artist/"+n.artistId+"/songs/other")}}function HE(e,t){if(e&1&&(v(0,"h2",1)(1,"a",2),j(2),w()(),v(3,"div",3)(4,"h3"),j(5),w(),v(6,"small"),j(7),w(),v(8,"pre"),j(9),w()(),v(10,"div",3),Q(11,VE,2,0)(12,BE,3,1,"div",4),w()),e&2){let n=B();p(),F("routerLink","/artist/"+n.artistId),p(),oe(n.artistName),p(3),ie(" ",n.song==null?null:n.song.name," "),p(2),oe(n.song==null?null:n.song.authors),p(2),oe(n.song==null?null:n.song.text),p(2),W(n.albums.length?11:12)}}var Em=(()=>{let t=class t{constructor(r){this.route=r,this.artists=Fe,this.artistName="",this.artistId=null,this.albums=[],this.song=null,this.artistId=this.route.snapshot.paramMap.get("artist");let o=this.route.snapshot.paramMap.get("song");if(!this.artistId||!o)return;let i=this.artists[this.artistId];this.artistName=i.artist.name,this.song=i.songs[o],this.albums=this.song.albums.map(s=>i.albums[s])}ngOnInit(){document.title=`${this.song?.name} | ${this.artistName}`}};t.\u0275fac=function(o){return new(o||t)(re(le))},t.\u0275cmp=K({type:t,selectors:[["app-song-page"]],standalone:!0,features:[J],decls:2,vars:1,consts:[[1,"home-page"],[1,"home-page__name"],[3,"routerLink"],[1,"home-page__wrap"],[1,"home-page__item"]],template:function(o,i){o&1&&(v(0,"div",0),Q(1,HE,13,6),w()),o&2&&(p(),W(i.artistName?1:-1))},dependencies:[we],styles:["h3[_ngcontent-%COMP%]{margin-top:27px;margin-bottom:0;font-weight:800;line-height:1.2;font-size:30px;letter-spacing:.1em;text-transform:uppercase}small[_ngcontent-%COMP%]{white-space:pre-line;color:#696c6f;margin-top:2px;font-weight:500;line-height:1.5;font-size:16px}pre[_ngcontent-%COMP%]{line-height:1.5;font-size:16px}"]});let e=t;return e})();var $E=(e,t)=>t.id;function UE(e,t){if(e&1&&(v(0,"div",4),j(1),v(2,"a",2),j(3),w()()),e&2){let n=t.$implicit,r=t.$index,o=B(2);p(),ie(" ",r+1,". "),p(),F("routerLink","/artist/"+o.artistId+"/song/"+n.id),p(),ie(" ",n.name," ")}}function zE(e,t){if(e&1&&(v(0,"h2",1)(1,"a",2),j(2),w()(),v(3,"div",3),ke(4,UE,4,3,"div",4,$E),w()),e&2){let n=B();p(),F("routerLink","/artist/"+n.artistId),p(),oe(n.artistName),p(2),Ne(n.songs)}}var xm=(()=>{let t=class t{constructor(r){if(this.route=r,this.artists=Fe,this.artistName="",this.artistId=null,this.songs=[],this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let o=this.artists[this.artistId];this.artistName=o.artist.name,this.songs=Object.values(o.songs).sort((i,s)=>i.name[0]<s.name[0]?-1:i.name[0]>s.name[0]?1:0)}ngOnInit(){document.title=`${this.artistName} | \u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438`}};t.\u0275fac=function(o){return new(o||t)(re(le))},t.\u0275cmp=K({type:t,selectors:[["app-songs-page"]],standalone:!0,features:[J],decls:2,vars:1,consts:[[1,"home-page"],[1,"home-page__name"],[3,"routerLink"],[1,"home-page__wrap"],[1,"home-page__item"]],template:function(o,i){o&1&&(v(0,"div",0),Q(1,zE,6,2),w()),o&2&&(p(),W(i.artistName?1:-1))},dependencies:[we]});let e=t;return e})();var WE=(e,t)=>t.id;function GE(e,t){if(e&1&&(v(0,"div",4),j(1),v(2,"a",2),j(3),w()()),e&2){let n=t.$implicit,r=t.$index,o=B(2);p(),ie(" ",r+1,". "),p(),F("routerLink","/artist/"+o.artistId+"/song/"+n.id),p(),ie(" ",n.name," ")}}function qE(e,t){if(e&1&&(v(0,"h2",1)(1,"a",2),j(2),w()(),v(3,"div",3),ke(4,GE,4,3,"div",4,WE),w()),e&2){let n=B();p(),F("routerLink","/artist/"+n.artistId),p(),oe(n.artistName),p(2),Ne(n.songs)}}var Sm=(()=>{let t=class t{constructor(r){if(this.route=r,this.artists=Fe,this.artistName="",this.artistId=null,this.songs=[],this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let o=this.artists[this.artistId];this.artistName=o.artist.name,this.songs=Object.values(o.songs).filter(i=>!i.albums.length).sort((i,s)=>i.name[0]<s.name[0]?-1:i.name[0]>s.name[0]?1:0)}ngOnInit(){document.title=`${this.artistName} | \u0414\u0440\u0443\u0433\u0438\u0435 \u043F\u0435\u0441\u043D\u0438`}};t.\u0275fac=function(o){return new(o||t)(re(le))},t.\u0275cmp=K({type:t,selectors:[["app-other-songs-page"]],standalone:!0,features:[J],decls:2,vars:1,consts:[[1,"home-page"],[1,"home-page__name"],[3,"routerLink"],[1,"home-page__wrap"],[1,"home-page__item"]],template:function(o,i){o&1&&(v(0,"div",0),Q(1,qE,6,2),w()),o&2&&(p(),W(i.artistName?1:-1))},dependencies:[we]});let e=t;return e})();var Mm=[{path:"",component:bm},{path:"artist/:artist",component:Im},{path:"artist/:artist/songs",component:xm},{path:"artist/:artist/songs/other",component:Sm},{path:"artist/:artist/song/:song",component:Em},{path:"artist/:artist/:album",component:Cm},{path:"**",redirectTo:""}];var Tm={providers:[ap({eventCoalescing:!0}),fm(Mm)]};var _m=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=K({type:t,selectors:[["app-root"]],standalone:!0,features:[J],decls:2,vars:0,consts:[[1,"wrapper"]],template:function(o,i){o&1&&(v(0,"div",0),G(1,"router-outlet"),w())},dependencies:[uu],encapsulation:2});let e=t;return e})();Ap(_m,Tm).catch(console.error);
