var Jg=Object.defineProperty,Xg=Object.defineProperties;var ey=Object.getOwnPropertyDescriptors;var $d=Object.getOwnPropertySymbols;var ty=Object.prototype.hasOwnProperty,ny=Object.prototype.propertyIsEnumerable;var Hd=(e,t,n)=>t in e?Jg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||={})ty.call(t,n)&&Hd(e,n,t[n]);if($d)for(var n of $d(t))ny.call(t,n)&&Hd(e,n,t[n]);return e},K=(e,t)=>Xg(e,ey(t));var Jo=null;var Ko=1,Ud=Symbol("SIGNAL");function O(e){let t=Jo;return Jo=e,t}function zd(){return Jo}var Xo={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ry(e){if(!(is(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Ko)){if(!e.producerMustRecompute(e)&&!ts(e)){e.dirty=!1,e.lastCleanEpoch=Ko;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Ko}}function es(e){return e&&(e.nextProducerIndex=0),O(e)}function Wd(e,t){if(O(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(is(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)rs(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function ts(e){os(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(ry(n),r!==n.version))return!0}return!1}function ns(e){if(os(e),is(e))for(let t=0;t<e.producerNode.length;t++)rs(e.producerNode[t],e.producerIndexOfThis[t]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function rs(e,t){if(iy(e),e.liveConsumerNode.length===1&&oy(e))for(let r=0;r<e.producerNode.length;r++)rs(e.producerNode[r],e.producerIndexOfThis[r]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],i=e.liveConsumerNode[t];os(i),i.producerIndexOfThis[r]=t}}function is(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function os(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function iy(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function oy(e){return e.producerNode!==void 0}function sy(){throw new Error}var ay=sy;function Gd(e){ay=e}function _(e){return typeof e=="function"}function sn(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var ei=sn(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Zn(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var ee=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let o of n)o.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(_(r))try{r()}catch(o){t=o instanceof ei?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{Yd(o)}catch(s){t=t??[],s instanceof ei?t=[...t,...s.errors]:t.push(s)}}if(t)throw new ei(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Yd(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Zn(n,t)}remove(t){let{_finalizers:n}=this;n&&Zn(n,t),t instanceof e&&t._removeParent(this)}};ee.EMPTY=(()=>{let e=new ee;return e.closed=!0,e})();var ss=ee.EMPTY;function ti(e){return e instanceof ee||e&&"closed"in e&&_(e.remove)&&_(e.add)&&_(e.unsubscribe)}function Yd(e){_(e)?e():e.unsubscribe()}var He={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var an={setTimeout(e,t,...n){let{delegate:r}=an;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=an;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function ni(e){an.setTimeout(()=>{let{onUnhandledError:t}=He;if(t)t(e);else throw e})}function Qn(){}var qd=as("C",void 0,void 0);function Zd(e){return as("E",void 0,e)}function Qd(e){return as("N",e,void 0)}function as(e,t,n){return{kind:e,value:t,error:n}}var Rt=null;function ln(e){if(He.useDeprecatedSynchronousErrorHandling){let t=!Rt;if(t&&(Rt={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=Rt;if(Rt=null,n)throw r}}else e()}function Kd(e){He.useDeprecatedSynchronousErrorHandling&&Rt&&(Rt.errorThrown=!0,Rt.error=e)}var Ot=class extends ee{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,ti(t)&&t.add(this)):this.destination=cy}static create(t,n,r){return new un(t,n,r)}next(t){this.isStopped?us(Qd(t),this):this._next(t)}error(t){this.isStopped?us(Zd(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?us(qd,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},ly=Function.prototype.bind;function ls(e,t){return ly.call(e,t)}var cs=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){ri(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){ri(r)}else ri(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){ri(n)}}},un=class extends Ot{constructor(t,n,r){super();let i;if(_(t)||!t)i={next:t??void 0,error:n??void 0,complete:r??void 0};else{let o;this&&He.useDeprecatedNextContext?(o=Object.create(t),o.unsubscribe=()=>this.unsubscribe(),i={next:t.next&&ls(t.next,o),error:t.error&&ls(t.error,o),complete:t.complete&&ls(t.complete,o)}):i=t}this.destination=new cs(i)}};function ri(e){He.useDeprecatedSynchronousErrorHandling?Kd(e):ni(e)}function uy(e){throw e}function us(e,t){let{onStoppedNotification:n}=He;n&&an.setTimeout(()=>n(e,t))}var cy={closed:!0,next:Qn,error:uy,complete:Qn};var cn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Te(e){return e}function ds(...e){return fs(e)}function fs(e){return e.length===0?Te:e.length===1?e[0]:function(n){return e.reduce((r,i)=>i(r),n)}}var $=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,i){let o=fy(n)?n:new un(n,r,i);return ln(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Jd(r),new r((i,o)=>{let s=new un({next:a=>{try{n(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[cn](){return this}pipe(...n){return fs(n)(this)}toPromise(n){return n=Jd(n),new n((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return e.create=t=>new e(t),e})();function Jd(e){var t;return(t=e??He.Promise)!==null&&t!==void 0?t:Promise}function dy(e){return e&&_(e.next)&&_(e.error)&&_(e.complete)}function fy(e){return e&&e instanceof Ot||dy(e)&&ti(e)}function ps(e){return _(e?.lift)}function L(e){return t=>{if(ps(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function V(e,t,n,r,i){return new hs(e,t,n,r,i)}var hs=class extends Ot{constructor(t,n,r,i,o,s){super(t),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function dn(){return L((e,t)=>{let n=null;e._refCount++;let r=V(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let i=e._connection,o=n;n=null,i&&(!o||i===o)&&i.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var fn=class extends ${constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,ps(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ee;let n=this.getSubject();t.add(this.source.subscribe(V(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ee.EMPTY)}return t}refCount(){return dn()(this)}};var Xd=sn(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var se=(()=>{class e extends ${constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new ii(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Xd}next(n){ln(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){ln(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){ln(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:i,observers:o}=this;return r||i?ss:(this.currentObservers=null,o.push(n),new ee(()=>{this.currentObservers=null,Zn(o,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:i,isStopped:o}=this;r?n.error(i):o&&n.complete()}asObservable(){let n=new $;return n.source=this,n}}return e.create=(t,n)=>new ii(t,n),e})(),ii=class extends se{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:ss}};var J=class extends se{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var ke=new $(e=>e.complete());function ef(e){return e&&_(e.schedule)}function tf(e){return e[e.length-1]}function nf(e){return _(tf(e))?e.pop():void 0}function wt(e){return ef(tf(e))?e.pop():void 0}function of(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function rf(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Pt(e){return this instanceof Pt?(this.v=e,this):new Pt(e)}function sf(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(f){return function(g){return Promise.resolve(g).then(f,d)}}function a(f,g){r[f]&&(i[f]=function(b){return new Promise(function(B,z){o.push([f,b,B,z])>1||l(f,b)})},g&&(i[f]=g(i[f])))}function l(f,g){try{u(r[f](g))}catch(b){p(o[0][3],b)}}function u(f){f.value instanceof Pt?Promise.resolve(f.value.v).then(c,d):p(o[0][2],f)}function c(f){l("next",f)}function d(f){l("throw",f)}function p(f,g){f(g),o.shift(),o.length&&l(o[0][0],o[0][1])}}function af(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof rf=="function"?rf(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,l){s=e[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(u){o({value:u,done:a})},s)}}var oi=e=>e&&typeof e.length=="number"&&typeof e!="function";function si(e){return _(e?.then)}function ai(e){return _(e[cn])}function li(e){return Symbol.asyncIterator&&_(e?.[Symbol.asyncIterator])}function ui(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function py(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ci=py();function di(e){return _(e?.[ci])}function fi(e){return sf(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:i}=yield Pt(n.read());if(i)return yield Pt(void 0);yield yield Pt(r)}}finally{n.releaseLock()}})}function pi(e){return _(e?.getReader)}function ae(e){if(e instanceof $)return e;if(e!=null){if(ai(e))return hy(e);if(oi(e))return my(e);if(si(e))return gy(e);if(li(e))return lf(e);if(di(e))return yy(e);if(pi(e))return vy(e)}throw ui(e)}function hy(e){return new $(t=>{let n=e[cn]();if(_(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function my(e){return new $(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function gy(e){return new $(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,ni)})}function yy(e){return new $(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function lf(e){return new $(t=>{wy(e,t).catch(n=>t.error(n))})}function vy(e){return lf(fi(e))}function wy(e,t){var n,r,i,o;return of(this,void 0,void 0,function*(){try{for(n=af(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=n.return)&&(yield o.call(n))}finally{if(i)throw i.error}}t.complete()})}function Ce(e,t,n,r=0,i=!1){let o=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function hi(e,t=0){return L((n,r)=>{n.subscribe(V(r,i=>Ce(r,e,()=>r.next(i),t),()=>Ce(r,e,()=>r.complete(),t),i=>Ce(r,e,()=>r.error(i),t)))})}function mi(e,t=0){return L((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function uf(e,t){return ae(e).pipe(mi(t),hi(t))}function cf(e,t){return ae(e).pipe(mi(t),hi(t))}function df(e,t){return new $(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function ff(e,t){return new $(n=>{let r;return Ce(n,t,()=>{r=e[ci](),Ce(n,t,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){n.error(s);return}o?n.complete():n.next(i)},0,!0)}),()=>_(r?.return)&&r.return()})}function gi(e,t){if(!e)throw new Error("Iterable cannot be null");return new $(n=>{Ce(n,t,()=>{let r=e[Symbol.asyncIterator]();Ce(n,t,()=>{r.next().then(i=>{i.done?n.complete():n.next(i.value)})},0,!0)})})}function pf(e,t){return gi(fi(e),t)}function hf(e,t){if(e!=null){if(ai(e))return uf(e,t);if(oi(e))return df(e,t);if(si(e))return cf(e,t);if(li(e))return gi(e,t);if(di(e))return ff(e,t);if(pi(e))return pf(e,t)}throw ui(e)}function te(e,t){return t?hf(e,t):ae(e)}function I(...e){let t=wt(e);return te(e,t)}function pn(e,t){let n=_(e)?e:()=>e,r=i=>i.error(n());return new $(t?i=>t.schedule(r,0,i):r)}function ms(e){return!!e&&(e instanceof $||_(e.lift)&&_(e.subscribe))}var st=sn(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function P(e,t){return L((n,r)=>{let i=0;n.subscribe(V(r,o=>{r.next(e.call(t,o,i++))}))})}var{isArray:by}=Array;function Dy(e,t){return by(t)?e(...t):e(t)}function yi(e){return P(t=>Dy(e,t))}var{isArray:Iy}=Array,{getPrototypeOf:Cy,prototype:Ey,keys:_y}=Object;function mf(e){if(e.length===1){let t=e[0];if(Iy(t))return{args:t,keys:null};if(xy(t)){let n=_y(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function xy(e){return e&&typeof e=="object"&&Cy(e)===Ey}function gf(e,t){return e.reduce((n,r,i)=>(n[r]=t[i],n),{})}function vi(...e){let t=wt(e),n=nf(e),{args:r,keys:i}=mf(e);if(r.length===0)return te([],t);let o=new $(Sy(r,t,i?s=>gf(i,s):Te));return n?o.pipe(yi(n)):o}function Sy(e,t,n=Te){return r=>{yf(t,()=>{let{length:i}=e,o=new Array(i),s=i,a=i;for(let l=0;l<i;l++)yf(t,()=>{let u=te(e[l],t),c=!1;u.subscribe(V(r,d=>{o[l]=d,c||(c=!0,a--),a||r.next(n(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}function yf(e,t,n){e?Ce(n,e,t):t()}function vf(e,t,n,r,i,o,s,a){let l=[],u=0,c=0,d=!1,p=()=>{d&&!l.length&&!u&&t.complete()},f=b=>u<r?g(b):l.push(b),g=b=>{o&&t.next(b),u++;let B=!1;ae(n(b,c++)).subscribe(V(t,z=>{i?.(z),o?f(z):t.next(z)},()=>{B=!0},void 0,()=>{if(B)try{for(u--;l.length&&u<r;){let z=l.shift();s?Ce(t,s,()=>g(z)):g(z)}p()}catch(z){t.error(z)}}))};return e.subscribe(V(t,f,()=>{d=!0,p()})),()=>{a?.()}}function ie(e,t,n=1/0){return _(t)?ie((r,i)=>P((o,s)=>t(r,o,i,s))(ae(e(r,i))),n):(typeof t=="number"&&(n=t),L((r,i)=>vf(r,i,e,n)))}function hn(e=1/0){return ie(Te,e)}function wf(){return hn(1)}function mn(...e){return wf()(te(e,wt(e)))}function wi(e){return new $(t=>{ae(e()).subscribe(t)})}function bi(e,t,n){return n?bi(e,t).pipe(yi(n)):new $(r=>{let i=(...s)=>r.next(s.length===1?s[0]:s),o=e(i);return _(t)?()=>t(i,o):void 0})}function Ue(e,t){return L((n,r)=>{let i=0;n.subscribe(V(r,o=>e.call(t,o,i++)&&r.next(o)))})}function bt(e){return L((t,n)=>{let r=null,i=!1,o;r=t.subscribe(V(n,void 0,void 0,s=>{o=ae(e(s,bt(e)(t))),r?(r.unsubscribe(),r=null,o.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(n))})}function bf(e,t,n,r,i){return(o,s)=>{let a=n,l=t,u=0;o.subscribe(V(s,c=>{let d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},i&&(()=>{a&&s.next(l),s.complete()})))}}function gn(e,t){return _(t)?ie(e,t,1):ie(e,1)}function Dt(e){return L((t,n)=>{let r=!1;t.subscribe(V(n,i=>{r=!0,n.next(i)},()=>{r||n.next(e),n.complete()}))})}function at(e){return e<=0?()=>ke:L((t,n)=>{let r=0;t.subscribe(V(n,i=>{++r<=e&&(n.next(i),e<=r&&n.complete())}))})}function gs(e){return P(()=>e)}function Di(e=My){return L((t,n)=>{let r=!1;t.subscribe(V(n,i=>{r=!0,n.next(i)},()=>r?n.complete():n.error(e())))})}function My(){return new st}function Kn(e){return L((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Ze(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Ue((i,o)=>e(i,o,r)):Te,at(1),n?Dt(t):Di(()=>new st))}function yn(e){return e<=0?()=>ke:L((t,n)=>{let r=[];t.subscribe(V(n,i=>{r.push(i),e<r.length&&r.shift()},()=>{for(let i of r)n.next(i);n.complete()},void 0,()=>{r=null}))})}function ys(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Ue((i,o)=>e(i,o,r)):Te,yn(1),n?Dt(t):Di(()=>new st))}function vs(e,t){return L(bf(e,t,arguments.length>=2,!0))}function ws(...e){let t=wt(e);return L((n,r)=>{(t?mn(e,n,t):mn(e,n)).subscribe(r)})}function Ae(e,t){return L((n,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();n.subscribe(V(r,l=>{i?.unsubscribe();let u=0,c=o++;ae(e(l,c)).subscribe(i=V(r,d=>r.next(t?t(l,d,c,u++):d),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function Jn(e){return L((t,n)=>{ae(e).subscribe(V(n,()=>n.complete(),Qn)),!n.closed&&t.subscribe(n)})}function ce(e,t,n){let r=_(e)||t||n?{next:e,error:t,complete:n}:e;return r?L((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(V(o,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),o.error(l)},()=>{var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):Te}var ip="https://g.co/ng/security#xss",E=class extends Error{constructor(t,n){super(Ea(t,n)),this.code=t}};function Ea(e,t){return`${`NG0${Math.abs(e)}`}${t?": "+t:""}`}function _a(e){return{toString:e}.toString()}var er=globalThis;function Y(e){for(let t in e)if(e[t]===Y)return t;throw Error("Could not find renamed property on target object.")}function _e(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(_e).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let t=e.toString();if(t==null)return""+t;let n=t.indexOf(`
`);return n===-1?t:t.substring(0,n)}function Df(e,t){return e==null||e===""?t===null?"":t:t==null||t===""?e:e+" "+t}var Ty=Y({__forward_ref__:Y});function op(e){return e.__forward_ref__=op,e.toString=function(){return _e(this())},e}function Oe(e){return sp(e)?e():e}function sp(e){return typeof e=="function"&&e.hasOwnProperty(Ty)&&e.__forward_ref__===op}function S(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Ki(e){return If(e,lp)||If(e,up)}function ap(e){return Ki(e)!==null}function If(e,t){return e.hasOwnProperty(t)?e[t]:null}function ky(e){let t=e&&(e[lp]||e[up]);return t||null}function Cf(e){return e&&(e.hasOwnProperty(Ef)||e.hasOwnProperty(Ay))?e[Ef]:null}var lp=Y({\u0275prov:Y}),Ef=Y({\u0275inj:Y}),up=Y({ngInjectableDef:Y}),Ay=Y({ngInjectorDef:Y}),k=class{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=S({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function cp(e){return e&&!!e.\u0275providers}var jy=Y({\u0275cmp:Y}),Ny=Y({\u0275dir:Y}),Ry=Y({\u0275pipe:Y}),Oy=Y({\u0275mod:Y}),ki=Y({\u0275fac:Y}),Xn=Y({__NG_ELEMENT_ID__:Y}),_f=Y({__NG_ENV_ID__:Y});function Ji(e){return typeof e=="string"?e:e==null?"":String(e)}function Py(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():Ji(e)}function Fy(e,t){let n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new E(-200,e)}function xa(e,t){throw new E(-201,!1)}var N=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(N||{}),Ns;function dp(){return Ns}function Ee(e){let t=Ns;return Ns=e,t}function fp(e,t,n){let r=Ki(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&N.Optional)return null;if(t!==void 0)return t;xa(e,"Injector")}var Ly={},tr=Ly,Vy="__NG_DI_FLAG__",Ai="ngTempTokenPath",By="ngTokenPath",$y=/\n/gm,Hy="\u0275",xf="__source",Dn;function Uy(){return Dn}function It(e){let t=Dn;return Dn=e,t}function zy(e,t=N.Default){if(Dn===void 0)throw new E(-203,!1);return Dn===null?fp(e,void 0,t):Dn.get(e,t&N.Optional?null:void 0,t)}function F(e,t=N.Default){return(dp()||zy)(Oe(e),t)}function m(e,t=N.Default){return F(e,Xi(t))}function Xi(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Rs(e){let t=[];for(let n=0;n<e.length;n++){let r=Oe(e[n]);if(Array.isArray(r)){if(r.length===0)throw new E(900,!1);let i,o=N.Default;for(let s=0;s<r.length;s++){let a=r[s],l=Wy(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}t.push(F(i,o))}else t.push(F(r))}return t}function Wy(e){return e[Vy]}function Gy(e,t,n,r){let i=e[Ai];throw t[xf]&&i.unshift(t[xf]),e.message=Yy(`
`+e.message,i,n,r),e[By]=i,e[Ai]=null,e}function Yy(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==Hy?e.slice(2):e;let i=_e(t);if(Array.isArray(t))i=t.map(_e).join(" -> ");else if(typeof t=="object"){let o=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];o.push(s+":"+(typeof a=="string"?JSON.stringify(a):_e(a)))}i=`{${o.join(", ")}}`}return`${n}${r?"("+r+")":""}[${i}]: ${e.replace($y,`
  `)}`}function Vt(e,t){let n=e.hasOwnProperty(ki);return n?e[ki]:null}function qy(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let i=e[r],o=t[r];if(n&&(i=n(i),o=n(o)),o!==i)return!1}return!0}function Zy(e){return e.flat(Number.POSITIVE_INFINITY)}function Sa(e,t){e.forEach(n=>Array.isArray(n)?Sa(n,t):t(n))}function pp(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function ji(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Qy(e,t,n,r){let i=e.length;if(i==t)e.push(n,r);else if(i===1)e.push(r,e[0]),e[0]=n;else{for(i--,e.push(e[i-1],e[i]);i>t;){let o=i-2;e[i]=e[o],i--}e[t]=n,e[t+1]=r}}function Ky(e,t,n){let r=gr(e,t);return r>=0?e[r|1]=n:(r=~r,Qy(e,r,t,n)),r}function bs(e,t){let n=gr(e,t);if(n>=0)return e[n|1]}function gr(e,t){return Jy(e,t,1)}function Jy(e,t,n){let r=0,i=e.length>>n;for(;i!==r;){let o=r+(i-r>>1),s=e[o<<n];if(t===s)return o<<n;s>t?i=o:r=o+1}return~(i<<n)}var nr={},Bt=[],Cn=new k(""),hp=new k("",-1),mp=new k(""),Ni=class{get(t,n=tr){if(n===tr){let r=new Error(`NullInjectorError: No provider for ${_e(t)}!`);throw r.name="NullInjectorError",r}return n}},gp=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(gp||{}),Je=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(Je||{}),En=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(En||{});function Xy(e,t,n){let r=e.length;for(;;){let i=e.indexOf(t,n);if(i===-1)return i;if(i===0||e.charCodeAt(i-1)<=32){let o=t.length;if(i+o===r||e.charCodeAt(i+o)<=32)return i}n=i+1}}function Os(e,t,n){let r=0;for(;r<n.length;){let i=n[r];if(typeof i=="number"){if(i!==0)break;r++;let o=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,o)}else{let o=i,s=n[++r];ev(o)?e.setProperty(t,o,s):e.setAttribute(t,o,s),r++}}return r}function yp(e){return e===3||e===4||e===6}function ev(e){return e.charCodeAt(0)===64}function Ma(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let i=t[r];typeof i=="number"?n=i:n===0||(n===-1||n===2?Sf(e,n,i,null,t[++r]):Sf(e,n,i,null,null))}}return e}function Sf(e,t,n,r,i){let o=0,s=e.length;if(t===-1)s=-1;else for(;o<e.length;){let a=e[o++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=o-1;break}}}for(;o<e.length;){let a=e[o];if(typeof a=="number")break;if(a===n){if(r===null){i!==null&&(e[o+1]=i);return}else if(r===e[o+1]){e[o+2]=i;return}}o++,r!==null&&o++,i!==null&&o++}s!==-1&&(e.splice(s,0,t),o=s+1),e.splice(o++,0,n),r!==null&&e.splice(o++,0,r),i!==null&&e.splice(o++,0,i)}var vp="ng-template";function tv(e,t,n,r){let i=0;if(r){for(;i<t.length&&typeof t[i]=="string";i+=2)if(t[i]==="class"&&Xy(t[i+1].toLowerCase(),n,0)!==-1)return!0}else if(Ta(e))return!1;if(i=t.indexOf(1,i),i>-1){let o;for(;++i<t.length&&typeof(o=t[i])=="string";)if(o.toLowerCase()===n)return!0}return!1}function Ta(e){return e.type===4&&e.value!==vp}function nv(e,t,n){let r=e.type===4&&!n?vp:e.value;return t===r}function rv(e,t,n){let r=4,i=e.attrs,o=i!==null?sv(i):0,s=!1;for(let a=0;a<t.length;a++){let l=t[a];if(typeof l=="number"){if(!s&&!ze(r)&&!ze(l))return!1;if(s&&ze(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!nv(e,l,n)||l===""&&t.length===1){if(ze(r))return!1;s=!0}}else if(r&8){if(i===null||!tv(e,i,l,n)){if(ze(r))return!1;s=!0}}else{let u=t[++a],c=iv(l,i,Ta(e),n);if(c===-1){if(ze(r))return!1;s=!0;continue}if(u!==""){let d;if(c>o?d="":d=i[c+1].toLowerCase(),r&2&&u!==d){if(ze(r))return!1;s=!0}}}}return ze(r)||s}function ze(e){return(e&1)===0}function iv(e,t,n,r){if(t===null)return-1;let i=0;if(r||!n){let o=!1;for(;i<t.length;){let s=t[i];if(s===e)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=t[++i];for(;typeof a=="string";)a=t[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return av(t,e)}function ov(e,t,n=!1){for(let r=0;r<t.length;r++)if(rv(e,t[r],n))return!0;return!1}function sv(e){for(let t=0;t<e.length;t++){let n=e[t];if(yp(n))return t}return e.length}function av(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function Mf(e,t){return e?":not("+t.trim()+")":t}function lv(e){let t=e[0],n=1,r=2,i="",o=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let a=e[++n];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!ze(s)&&(t+=Mf(o,i),i=""),r=s,o=o||!ze(r);n++}return i!==""&&(t+=Mf(o,i)),t}function uv(e){return e.map(lv).join(",")}function cv(e){let t=[],n=[],r=1,i=2;for(;r<e.length;){let o=e[r];if(typeof o=="string")i===2?o!==""&&t.push(o,e[++r]):i===8&&n.push(o);else{if(!ze(i))break;i=o}r++}return{attrs:t,classes:n}}function q(e){return _a(()=>{let t=Cp(e),n=K(w({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===gp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Je.Emulated,styles:e.styles||Bt,_:null,schemas:e.schemas||null,tView:null,id:""});Ep(n);let r=e.dependencies;return n.directiveDefs=kf(r,!1),n.pipeDefs=kf(r,!0),n.id=pv(n),n})}function dv(e){return $t(e)||wp(e)}function fv(e){return e!==null}function Tf(e,t){if(e==null)return nr;let n={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],o,s,a=En.None;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o):(o=i,s=i),t?(n[o]=a!==En.None?[r,a]:r,t[o]=s):n[o]=r}return n}function yr(e){return _a(()=>{let t=Cp(e);return Ep(t),t})}function ka(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone===!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function $t(e){return e[jy]||null}function wp(e){return e[Ny]||null}function bp(e){return e[Ry]||null}function Dp(e){let t=$t(e)||wp(e)||bp(e);return t!==null?t.standalone:!1}function Ip(e,t){let n=e[Oy]||null;if(!n&&t===!0)throw new Error(`Type ${_e(e)} does not have '\u0275mod' property.`);return n}function Cp(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputTransforms:null,inputConfig:e.inputs||nr,exportAs:e.exportAs||null,standalone:e.standalone===!0,signals:e.signals===!0,selectors:e.selectors||Bt,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Tf(e.inputs,t),outputs:Tf(e.outputs),debugInfo:null}}function Ep(e){e.features?.forEach(t=>t(e))}function kf(e,t){if(!e)return null;let n=t?bp:dv;return()=>(typeof e=="function"?e():e).map(r=>n(r)).filter(fv)}function pv(e){let t=0,n=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,e.consts,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery].join("|");for(let i of n)t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function eo(e){return{\u0275providers:e}}function hv(...e){return{\u0275providers:_p(!0,e),\u0275fromNgModule:!0}}function _p(e,...t){let n=[],r=new Set,i,o=s=>{n.push(s)};return Sa(t,s=>{let a=s;Ps(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&xp(i,o),n}function xp(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:i}=e[n];Aa(i,o=>{t(o,r)})}}function Ps(e,t,n,r){if(e=Oe(e),!e)return!1;let i=null,o=Cf(e),s=!o&&$t(e);if(!o&&!s){let l=e.ngModule;if(o=Cf(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=e}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let u of l)Ps(u,t,n,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let u;try{Sa(o.imports,c=>{Ps(c,t,n,r)&&(u||=[],u.push(c))})}finally{}u!==void 0&&xp(u,t)}if(!a){let u=Vt(i)||(()=>new i);t({provide:i,useFactory:u,deps:Bt},i),t({provide:mp,useValue:i,multi:!0},i),t({provide:Cn,useValue:()=>F(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let u=e;Aa(l,c=>{t(c,u)})}}else return!1;return i!==e&&e.providers!==void 0}function Aa(e,t){for(let n of e)cp(n)&&(n=n.\u0275providers),Array.isArray(n)?Aa(n,t):t(n)}var mv=Y({provide:String,useValue:Y});function Sp(e){return e!==null&&typeof e=="object"&&mv in e}function gv(e){return!!(e&&e.useExisting)}function yv(e){return!!(e&&e.useFactory)}function Fs(e){return typeof e=="function"}var to=new k(""),Ei={},vv={},Ds;function ja(){return Ds===void 0&&(Ds=new Ni),Ds}var Fe=class{},rr=class extends Fe{get destroyed(){return this._destroyed}constructor(t,n,r,i){super(),this.parent=n,this.source=r,this.scopes=i,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Vs(t,s=>this.processProvider(s)),this.records.set(hp,vn(void 0,this)),i.has("environment")&&this.records.set(Fe,vn(void 0,this));let o=this.records.get(to);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(mp,Bt,N.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let t=O(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),O(t)}}onDestroy(t){return this.assertNotDestroyed(),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){this.assertNotDestroyed();let n=It(this),r=Ee(void 0),i;try{return t()}finally{It(n),Ee(r)}}get(t,n=tr,r=N.Default){if(this.assertNotDestroyed(),t.hasOwnProperty(_f))return t[_f](this);r=Xi(r);let i,o=It(this),s=Ee(void 0);try{if(!(r&N.SkipSelf)){let l=this.records.get(t);if(l===void 0){let u=Ev(t)&&Ki(t);u&&this.injectableDefInScope(u)?l=vn(Ls(t),Ei):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l)}let a=r&N.Self?ja():this.parent;return n=r&N.Optional&&n===tr?null:n,a.get(t,n)}catch(a){if(a.name==="NullInjectorError"){if((a[Ai]=a[Ai]||[]).unshift(_e(t)),o)throw a;return Gy(a,t,"R3InjectorError",this.source)}else throw a}finally{Ee(s),It(o)}}resolveInjectorInitializers(){let t=O(null),n=It(this),r=Ee(void 0),i;try{let o=this.get(Cn,Bt,N.Self);for(let s of o)s()}finally{It(n),Ee(r),O(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(_e(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new E(205,!1)}processProvider(t){t=Oe(t);let n=Fs(t)?t:Oe(t&&t.provide),r=bv(t);if(!Fs(t)&&t.multi===!0){let i=this.records.get(n);i||(i=vn(void 0,Ei,!0),i.factory=()=>Rs(i.multi),this.records.set(n,i)),n=t,i.multi.push(t)}this.records.set(n,r)}hydrate(t,n){let r=O(null);try{return n.value===Ei&&(n.value=vv,n.value=n.factory()),typeof n.value=="object"&&n.value&&Cv(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{O(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=Oe(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function Ls(e){let t=Ki(e),n=t!==null?t.factory:Vt(e);if(n!==null)return n;if(e instanceof k)throw new E(204,!1);if(e instanceof Function)return wv(e);throw new E(204,!1)}function wv(e){if(e.length>0)throw new E(204,!1);let n=ky(e);return n!==null?()=>n.factory(e):()=>new e}function bv(e){if(Sp(e))return vn(void 0,e.useValue);{let t=Dv(e);return vn(t,Ei)}}function Dv(e,t,n){let r;if(Fs(e)){let i=Oe(e);return Vt(i)||Ls(i)}else if(Sp(e))r=()=>Oe(e.useValue);else if(yv(e))r=()=>e.useFactory(...Rs(e.deps||[]));else if(gv(e))r=()=>F(Oe(e.useExisting));else{let i=Oe(e&&(e.useClass||e.provide));if(Iv(e))r=()=>new i(...Rs(e.deps));else return Vt(i)||Ls(i)}return r}function vn(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Iv(e){return!!e.deps}function Cv(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Ev(e){return typeof e=="function"||typeof e=="object"&&e instanceof k}function Vs(e,t){for(let n of e)Array.isArray(n)?Vs(n,t):n&&cp(n)?Vs(n.\u0275providers,t):t(n)}function dt(e,t){e instanceof rr&&e.assertNotDestroyed();let n,r=It(e),i=Ee(void 0);try{return t()}finally{It(r),Ee(i)}}function _v(){return dp()!==void 0||Uy()!=null}function xv(e){return typeof e=="function"}var ft=0,x=1,C=2,we=3,We=4,Ye=5,ir=6,Ri=7,ye=8,_n=9,Xe=10,fe=11,or=12,Af=13,jn=14,Ge=15,Ht=16,wn=17,lt=18,no=19,Mp=20,Ct=21,Is=22,Pe=23,je=25,Tp=1;var Ut=7,Oi=8,xn=9,ve=10,Pi=function(e){return e[e.None=0]="None",e[e.HasTransplantedViews=2]="HasTransplantedViews",e}(Pi||{});function Et(e){return Array.isArray(e)&&typeof e[Tp]=="object"}function pt(e){return Array.isArray(e)&&e[Tp]===!0}function kp(e){return(e.flags&4)!==0}function ro(e){return e.componentOffset>-1}function Na(e){return(e.flags&1)===1}function vr(e){return!!e.template}function Bs(e){return(e[C]&512)!==0}var $s=class{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function Ap(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}function xt(){return jp}function jp(e){return e.type.prototype.ngOnChanges&&(e.setInput=Mv),Sv}xt.ngInherit=!0;function Sv(){let e=Rp(this),t=e?.current;if(t){let n=e.previous;if(n===nr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Mv(e,t,n,r,i){let o=this.declaredInputs[r],s=Rp(e)||Tv(e,{previous:nr,current:null}),a=s.current||(s.current={}),l=s.previous,u=l[o];a[o]=new $s(u&&u.currentValue,n,l===nr),Ap(e,t,i,n)}var Np="__ngSimpleChanges__";function Rp(e){return e[Np]||null}function Tv(e,t){return e[Np]=t}var jf=null;var Qe=function(e,t,n){jf?.(e,t,n)},Op="svg",kv="math";function et(e){for(;Array.isArray(e);)e=e[ft];return e}function Pp(e,t){return et(t[e])}function Le(e,t){return et(t[e.index])}function Ra(e,t){return e.data[t]}function Av(e,t){return e[t]}function St(e,t){let n=t[e];return Et(n)?n:n[ft]}function jv(e){return(e[C]&4)===4}function Oa(e){return(e[C]&128)===128}function Nv(e){return pt(e[we])}function Sn(e,t){return t==null?null:e[t]}function Fp(e){e[wn]=0}function Lp(e){e[C]&1024||(e[C]|=1024,Oa(e)&&io(e))}function Rv(e,t){for(;e>0;)t=t[jn],e--;return t}function sr(e){return!!(e[C]&9216||e[Pe]?.dirty)}function Hs(e){e[Xe].changeDetectionScheduler?.notify(7),e[C]&64&&(e[C]|=1024),sr(e)&&io(e)}function io(e){e[Xe].changeDetectionScheduler?.notify(0);let t=zt(e);for(;t!==null&&!(t[C]&8192||(t[C]|=8192,!Oa(t)));)t=zt(t)}function Vp(e,t){if((e[C]&256)===256)throw new E(911,!1);e[Ct]===null&&(e[Ct]=[]),e[Ct].push(t)}function Ov(e,t){if(e[Ct]===null)return;let n=e[Ct].indexOf(t);n!==-1&&e[Ct].splice(n,1)}function zt(e){let t=e[we];return pt(t)?t[we]:t}var R={lFrame:Zp(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Bp=!1;function Pv(){return R.lFrame.elementDepthCount}function Fv(){R.lFrame.elementDepthCount++}function Lv(){R.lFrame.elementDepthCount--}function $p(){return R.bindingsEnabled}function Vv(){return R.skipHydrationRootTNode!==null}function Bv(e){return R.skipHydrationRootTNode===e}function $v(){R.skipHydrationRootTNode=null}function H(){return R.lFrame.lView}function xe(){return R.lFrame.tView}function oo(e){return R.lFrame.contextLView=e,e[ye]}function so(e){return R.lFrame.contextLView=null,e}function Se(){let e=Hp();for(;e!==null&&e.type===64;)e=e.parent;return e}function Hp(){return R.lFrame.currentTNode}function Hv(){let e=R.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function wr(e,t){let n=R.lFrame;n.currentTNode=e,n.isParent=t}function Up(){return R.lFrame.isParent}function Uv(){R.lFrame.isParent=!1}function zp(){return Bp}function Nf(e){Bp=e}function Wp(){let e=R.lFrame,t=e.bindingRootIndex;return t===-1&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function zv(e){return R.lFrame.bindingIndex=e}function br(){return R.lFrame.bindingIndex++}function Wv(e){let t=R.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function Gv(){return R.lFrame.inI18n}function Yv(e,t){let n=R.lFrame;n.bindingIndex=n.bindingRootIndex=e,Us(t)}function qv(){return R.lFrame.currentDirectiveIndex}function Us(e){R.lFrame.currentDirectiveIndex=e}function Zv(e){let t=R.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function Gp(){return R.lFrame.currentQueryIndex}function Pa(e){R.lFrame.currentQueryIndex=e}function Qv(e){let t=e[x];return t.type===2?t.declTNode:t.type===1?e[Ye]:null}function Yp(e,t,n){if(n&N.SkipSelf){let i=t,o=e;for(;i=i.parent,i===null&&!(n&N.Host);)if(i=Qv(o),i===null||(o=o[jn],i.type&10))break;if(i===null)return!1;t=i,e=o}let r=R.lFrame=qp();return r.currentTNode=t,r.lView=e,!0}function Fa(e){let t=qp(),n=e[x];R.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function qp(){let e=R.lFrame,t=e===null?null:e.child;return t===null?Zp(e):t}function Zp(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function Qp(){let e=R.lFrame;return R.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Kp=Qp;function La(){let e=Qp();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Kv(e){return(R.lFrame.contextLView=Rv(e,R.lFrame.contextLView))[ye]}function Qt(){return R.lFrame.selectedIndex}function Wt(e){R.lFrame.selectedIndex=e}function Jp(){let e=R.lFrame;return Ra(e.tView,e.selectedIndex)}function Xp(){R.lFrame.currentNamespace=Op}function Jv(){return R.lFrame.currentNamespace}var eh=!0;function Va(){return eh}function Ba(e){eh=e}function Xv(e,t,n){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=t.type.prototype;if(r){let s=jp(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}i&&(n.preOrderHooks??=[]).push(0-e,i),o&&((n.preOrderHooks??=[]).push(e,o),(n.preOrderCheckHooks??=[]).push(e,o))}function $a(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let o=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=o;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),l&&(e.viewHooks??=[]).push(-n,l),u&&((e.viewHooks??=[]).push(n,u),(e.viewCheckHooks??=[]).push(n,u)),c!=null&&(e.destroyHooks??=[]).push(n,c)}}function _i(e,t,n){th(e,t,3,n)}function xi(e,t,n,r){(e[C]&3)===n&&th(e,t,n,r)}function Cs(e,t){let n=e[C];(n&3)===t&&(n&=16383,n+=1,e[C]=n)}function th(e,t,n,r){let i=r!==void 0?e[wn]&65535:0,o=r??-1,s=t.length-1,a=0;for(let l=i;l<s;l++)if(typeof t[l+1]=="number"){if(a=t[l],r!=null&&a>=r)break}else t[l]<0&&(e[wn]+=65536),(a<o||o==-1)&&(e0(e,n,t,l),e[wn]=(e[wn]&4294901760)+l+2),l++}function Rf(e,t){Qe(4,e,t);let n=O(null);try{t.call(e)}finally{O(n),Qe(5,e,t)}}function e0(e,t,n,r){let i=n[r]<0,o=n[r+1],s=i?-n[r]:n[r],a=e[s];i?e[C]>>14<e[wn]>>16&&(e[C]&3)===t&&(e[C]+=16384,Rf(a,o)):Rf(a,o)}var In=-1,ar=class{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}};function t0(e){return e instanceof ar}function n0(e){return(e.flags&8)!==0}function r0(e){return(e.flags&16)!==0}var Es={},zs=class{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=Xi(r);let i=this.injector.get(t,Es,r);return i!==Es||n===Es?i:this.parentInjector.get(t,n,r)}};function nh(e){return e!==In}function Fi(e){return e&32767}function i0(e){return e>>16}function Li(e,t){let n=i0(e),r=t;for(;n>0;)r=r[jn],n--;return r}var Ws=!0;function Vi(e){let t=Ws;return Ws=e,t}var o0=256,rh=o0-1,ih=5,s0=0,Ke={};function a0(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(Xn)&&(r=n[Xn]),r==null&&(r=n[Xn]=s0++);let i=r&rh,o=1<<i;t.data[e+(i>>ih)]|=o}function oh(e,t){let n=sh(e,t);if(n!==-1)return n;let r=t[x];r.firstCreatePass&&(e.injectorIndex=t.length,_s(r.data,e),_s(t,null),_s(r.blueprint,null));let i=Ha(e,t),o=e.injectorIndex;if(nh(i)){let s=Fi(i),a=Li(i,t),l=a[x].data;for(let u=0;u<8;u++)t[o+u]=a[s+u]|l[s+u]}return t[o+8]=i,o}function _s(e,t){e.push(0,0,0,0,0,0,0,0,t)}function sh(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function Ha(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,i=t;for(;i!==null;){if(r=dh(i),r===null)return In;if(n++,i=i[jn],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return In}function l0(e,t,n){a0(e,t,n)}function u0(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let r=n.length,i=0;for(;i<r;){let o=n[i];if(yp(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof n[i]=="string";)i++;else{if(o===t)return n[i+1];i=i+2}}}return null}function ah(e,t,n){if(n&N.Optional||e!==void 0)return e;xa(t,"NodeInjector")}function lh(e,t,n,r){if(n&N.Optional&&r===void 0&&(r=null),!(n&(N.Self|N.Host))){let i=e[_n],o=Ee(void 0);try{return i?i.get(t,r,n&N.Optional):fp(t,r,n&N.Optional)}finally{Ee(o)}}return ah(r,t,n)}function uh(e,t,n,r=N.Default,i){if(e!==null){if(t[C]&2048&&!(r&N.Self)){let s=p0(e,t,n,r,Ke);if(s!==Ke)return s}let o=ch(e,t,n,r,Ke);if(o!==Ke)return o}return lh(t,n,r,i)}function ch(e,t,n,r,i){let o=d0(n);if(typeof o=="function"){if(!Yp(t,e,r))return r&N.Host?ah(i,n,r):lh(t,n,r,i);try{let s;if(s=o(r),s==null&&!(r&N.Optional))xa(n);else return s}finally{Kp()}}else if(typeof o=="number"){let s=null,a=sh(e,t),l=In,u=r&N.Host?t[Ge][Ye]:null;for((a===-1||r&N.SkipSelf)&&(l=a===-1?Ha(e,t):t[a+8],l===In||!Pf(r,!1)?a=-1:(s=t[x],a=Fi(l),t=Li(l,t)));a!==-1;){let c=t[x];if(Of(o,a,c.data)){let d=c0(a,t,n,s,r,u);if(d!==Ke)return d}l=t[a+8],l!==In&&Pf(r,t[x].data[a+8]===u)&&Of(o,a,t)?(s=c,a=Fi(l),t=Li(l,t)):a=-1}}return i}function c0(e,t,n,r,i,o){let s=t[x],a=s.data[e+8],l=r==null?ro(a)&&Ws:r!=s&&(a.type&3)!==0,u=i&N.Host&&o===a,c=Si(a,s,n,l,u);return c!==null?Mn(t,s,c,a):Ke}function Si(e,t,n,r,i){let o=e.providerIndexes,s=t.data,a=o&1048575,l=e.directiveStart,u=e.directiveEnd,c=o>>20,d=r?a:a+c,p=i?a+c:u;for(let f=d;f<p;f++){let g=s[f];if(f<l&&n===g||f>=l&&g.type===n)return f}if(i){let f=s[l];if(f&&vr(f)&&f.type===n)return l}return null}function Mn(e,t,n,r){let i=e[n],o=t.data;if(t0(i)){let s=i;s.resolving&&Fy(Py(o[n]));let a=Vi(s.canSeeViewProviders);s.resolving=!0;let l,u=s.injectImpl?Ee(s.injectImpl):null,c=Yp(e,r,N.Default);try{i=e[n]=s.factory(void 0,o,e,r),t.firstCreatePass&&n>=r.directiveStart&&Xv(n,o[n],t)}finally{u!==null&&Ee(u),Vi(a),s.resolving=!1,Kp()}}return i}function d0(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(Xn)?e[Xn]:void 0;return typeof t=="number"?t>=0?t&rh:f0:t}function Of(e,t,n){let r=1<<e;return!!(n[t+(e>>ih)]&r)}function Pf(e,t){return!(e&N.Self)&&!(e&N.Host&&t)}var Lt=class{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return uh(this._tNode,this._lView,t,Xi(r),n)}};function f0(){return new Lt(Se(),H())}function Ua(e){return _a(()=>{let t=e.prototype.constructor,n=t[ki]||Gs(t),r=Object.prototype,i=Object.getPrototypeOf(e.prototype).constructor;for(;i&&i!==r;){let o=i[ki]||Gs(i);if(o&&o!==n)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function Gs(e){return sp(e)?()=>{let t=Gs(Oe(e));return t&&t()}:Vt(e)}function p0(e,t,n,r,i){let o=e,s=t;for(;o!==null&&s!==null&&s[C]&2048&&!(s[C]&512);){let a=ch(o,s,n,r|N.Self,Ke);if(a!==Ke)return a;let l=o.parent;if(!l){let u=s[Mp];if(u){let c=u.get(n,Ke,r);if(c!==Ke)return c}l=dh(s),s=s[jn]}o=l}return i}function dh(e){let t=e[x],n=t.type;return n===2?t.declTNode:n===1?e[Ye]:null}function za(e){return u0(Se(),e)}function Ff(e,t=null,n=null,r){let i=fh(e,t,n,r);return i.resolveInjectorInitializers(),i}function fh(e,t=null,n=null,r,i=new Set){let o=[n||Bt,hv(e)];return r=r||(typeof e=="object"?void 0:_e(e)),new rr(o,t||ja(),r||null,i)}var Ft=class Ft{static create(t,n){if(Array.isArray(t))return Ff({name:""},n,t,"");{let r=t.name??"";return Ff({name:r},t.parent,t.providers,r)}}};Ft.THROW_IF_NOT_FOUND=tr,Ft.NULL=new Ni,Ft.\u0275prov=S({token:Ft,providedIn:"any",factory:()=>F(hp)}),Ft.__NG_ELEMENT_ID__=-1;var Gt=Ft;var h0=new k("");h0.__NG_ELEMENT_ID__=e=>{let t=Se();if(t===null)throw new E(204,!1);if(t.type&2)return t.value;if(e&N.Optional)return null;throw new E(204,!1)};var m0="ngOriginalError";function xs(e){return e[m0]}var ut=class{constructor(){this._console=console}handleError(t){let n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&xs(t);for(;n&&xs(n);)n=xs(n);return n||null}},ph=new k("",{providedIn:"root",factory:()=>m(ut).handleError.bind(void 0)}),hh=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=g0,t.__NG_ENV_ID__=r=>r;let e=t;return e})(),Ys=class extends hh{constructor(t){super(),this._lView=t}onDestroy(t){return Vp(this._lView,t),()=>Ov(this._lView,t)}};function g0(){return new Ys(H())}function y0(){return Nn(Se(),H())}function Nn(e,t){return new ht(Le(e,t))}var ht=(()=>{let t=class t{constructor(r){this.nativeElement=r}};t.__NG_ELEMENT_ID__=y0;let e=t;return e})();function v0(e){return e instanceof ht?e.nativeElement:e}var Rn=(()=>{let t=class t{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new J(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let r=this.taskId++;return this.pendingTasks.add(r),r}remove(r){this.pendingTasks.delete(r),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};t.\u0275prov=S({token:t,providedIn:"root",factory:()=>new t});let e=t;return e})();var qs=class extends se{constructor(t=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=t,_v()&&(this.destroyRef=m(hh,{optional:!0})??void 0,this.pendingTasks=m(Rn,{optional:!0})??void 0)}emit(t){let n=O(null);try{super.next(t)}finally{O(n)}}subscribe(t,n,r){let i=t,o=n||(()=>null),s=r;if(t&&typeof t=="object"){let l=t;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return t instanceof ee&&t.add(a),a}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{t(n),r!==void 0&&this.pendingTasks?.remove(r)})}}},de=qs;function w0(){return this._results[Symbol.iterator]()}var Zs=class e{get changes(){return this._changes??=new de}constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let n=e.prototype;n[Symbol.iterator]||(n[Symbol.iterator]=w0)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){this.dirty=!1;let r=Zy(t);(this._changesDetected=!qy(this._results,r,n))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(t){this._onDirty=t}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function mh(e){return(e.flags&128)===128}var gh=new Map,b0=0;function D0(){return b0++}function I0(e){gh.set(e[no],e)}function C0(e){gh.delete(e[no])}var Lf="__ngContext__";function Yt(e,t){Et(t)?(e[Lf]=t[no],I0(t)):e[Lf]=t}function yh(e){return wh(e[or])}function vh(e){return wh(e[We])}function wh(e){for(;e!==null&&!pt(e);)e=e[We];return e}var Qs;function bh(e){Qs=e}function E0(){if(Qs!==void 0)return Qs;if(typeof document<"u")return document;throw new E(210,!1)}var Wa=new k("",{providedIn:"root",factory:()=>_0}),_0="ng",Ga=new k(""),Mt=new k("",{providedIn:"platform",factory:()=>"unknown"});var Dr=new k("",{providedIn:"root",factory:()=>E0().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var x0="h",S0="b";var M0=()=>null;function Ya(e,t,n=!1){return M0(e,t,n)}var Dh=!1,T0=new k("",{providedIn:"root",factory:()=>Dh});var Ii;function k0(){if(Ii===void 0&&(Ii=null,er.trustedTypes))try{Ii=er.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Ii}function Vf(e){return k0()?.createScriptURL(e)||e}var Bi=class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ip})`}};function Ir(e){return e instanceof Bi?e.changingThisBreaksApplicationSecurity:e}function qa(e,t){let n=A0(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${ip})`)}return n===t}function A0(e){return e instanceof Bi&&e.getTypeName()||null}var j0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ih(e){return e=String(e),e.match(j0)?e:"unsafe:"+e}var ao=function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e}(ao||{});function tt(e){let t=Eh();return t?t.sanitize(ao.URL,e)||"":qa(e,"URL")?Ir(e):Ih(Ji(e))}function N0(e){let t=Eh();if(t)return Vf(t.sanitize(ao.RESOURCE_URL,e)||"");if(qa(e,"ResourceURL"))return Vf(Ir(e));throw new E(904,!1)}function R0(e,t){return t==="src"&&(e==="embed"||e==="frame"||e==="iframe"||e==="media"||e==="script")||t==="href"&&(e==="base"||e==="link")?N0:tt}function Ch(e,t,n){return R0(t,n)(e)}function Eh(){let e=H();return e&&e[Xe].sanitizer}function _h(e){return e instanceof Function?e():e}var ct=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(ct||{}),O0;function Za(e,t){return O0(e,t)}function bn(e,t,n,r,i){if(r!=null){let o,s=!1;pt(r)?o=r:Et(r)&&(s=!0,r=r[ft]);let a=et(r);e===0&&n!==null?i==null?Th(t,n,a):$i(t,n,a,i||null,!0):e===1&&n!==null?$i(t,n,a,i||null,!0):e===2?K0(t,a,s):e===3&&t.destroyNode(a),o!=null&&X0(t,e,o,n,i)}}function P0(e,t){return e.createText(t)}function F0(e,t,n){e.setValue(t,n)}function xh(e,t,n){return e.createElement(t,n)}function L0(e,t){Sh(e,t),t[ft]=null,t[Ye]=null}function V0(e,t,n,r,i,o){r[ft]=i,r[Ye]=t,uo(e,r,n,1,i,o)}function Sh(e,t){t[Xe].changeDetectionScheduler?.notify(8),uo(e,t,t[fe],2,null,null)}function B0(e){let t=e[or];if(!t)return Ss(e[x],e);for(;t;){let n=null;if(Et(t))n=t[or];else{let r=t[ve];r&&(n=r)}if(!n){for(;t&&!t[We]&&t!==e;)Et(t)&&Ss(t[x],t),t=t[we];t===null&&(t=e),Et(t)&&Ss(t[x],t),n=t&&t[We]}t=n}}function $0(e,t,n,r){let i=ve+r,o=n.length;r>0&&(n[i-1][We]=t),r<o-ve?(t[We]=n[i],pp(n,ve+r,t)):(n.push(t),t[We]=null),t[we]=n;let s=t[Ht];s!==null&&n!==s&&Mh(s,t);let a=t[lt];a!==null&&a.insertView(e),Hs(t),t[C]|=128}function Mh(e,t){let n=e[xn],r=t[we];if(Et(r))e[C]|=Pi.HasTransplantedViews;else{let i=r[we][Ge];t[Ge]!==i&&(e[C]|=Pi.HasTransplantedViews)}n===null?e[xn]=[t]:n.push(t)}function Qa(e,t){let n=e[xn],r=n.indexOf(t);n.splice(r,1)}function lr(e,t){if(e.length<=ve)return;let n=ve+t,r=e[n];if(r){let i=r[Ht];i!==null&&i!==e&&Qa(i,r),t>0&&(e[n-1][We]=r[We]);let o=ji(e,ve+t);L0(r[x],r);let s=o[lt];s!==null&&s.detachView(o[x]),r[we]=null,r[We]=null,r[C]&=-129}return r}function lo(e,t){if(!(t[C]&256)){let n=t[fe];n.destroyNode&&uo(e,t,n,3,null,null),B0(t)}}function Ss(e,t){if(t[C]&256)return;let n=O(null);try{t[C]&=-129,t[C]|=256,t[Pe]&&ns(t[Pe]),U0(e,t),H0(e,t),t[x].type===1&&t[fe].destroy();let r=t[Ht];if(r!==null&&pt(t[we])){r!==t[we]&&Qa(r,t);let i=t[lt];i!==null&&i.detachView(e)}C0(t)}finally{O(n)}}function H0(e,t){let n=e.cleanup,r=t[Ri];if(n!==null)for(let o=0;o<n.length-1;o+=2)if(typeof n[o]=="string"){let s=n[o+3];s>=0?r[s]():r[-s].unsubscribe(),o+=2}else{let s=r[n[o+1]];n[o].call(s)}r!==null&&(t[Ri]=null);let i=t[Ct];if(i!==null){t[Ct]=null;for(let o=0;o<i.length;o++){let s=i[o];s()}}}function U0(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let i=t[n[r]];if(!(i instanceof ar)){let o=n[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];Qe(4,a,l);try{l.call(a)}finally{Qe(5,a,l)}}else{Qe(4,i,o);try{o.call(i)}finally{Qe(5,i,o)}}}}}function z0(e,t,n){return W0(e,t.parent,n)}function W0(e,t,n){let r=t;for(;r!==null&&r.type&40;)t=r,r=t.parent;if(r===null)return n[ft];{let{componentOffset:i}=r;if(i>-1){let{encapsulation:o}=e.data[r.directiveStart+i];if(o===Je.None||o===Je.Emulated)return null}return Le(r,n)}}function $i(e,t,n,r,i){e.insertBefore(t,n,r,i)}function Th(e,t,n){e.appendChild(t,n)}function Bf(e,t,n,r,i){r!==null?$i(e,t,n,r,i):Th(e,t,n)}function G0(e,t,n,r){e.removeChild(t,n,r)}function Ka(e,t){return e.parentNode(t)}function Y0(e,t){return e.nextSibling(t)}function q0(e,t,n){return Q0(e,t,n)}function Z0(e,t,n){return e.type&40?Le(e,n):null}var Q0=Z0,$f;function Ja(e,t,n,r){let i=z0(e,r,t),o=t[fe],s=r.parent||t[Ye],a=q0(s,r,t);if(i!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)Bf(o,i,n[l],a,!1);else Bf(o,i,n,a,!1);$f!==void 0&&$f(o,r,t,n,i)}function Mi(e,t){if(t!==null){let n=t.type;if(n&3)return Le(t,e);if(n&4)return Ks(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return Mi(e,r);{let i=e[t.index];return pt(i)?Ks(-1,i):et(i)}}else{if(n&32)return Za(t,e)()||et(e[t.index]);{let r=kh(e,t);if(r!==null){if(Array.isArray(r))return r[0];let i=zt(e[Ge]);return Mi(i,r)}else return Mi(e,t.next)}}}return null}function kh(e,t){if(t!==null){let r=e[Ge][Ye],i=t.projection;return r.projection[i]}return null}function Ks(e,t){let n=ve+e+1;if(n<t.length){let r=t[n],i=r[x].firstChild;if(i!==null)return Mi(r,i)}return t[Ut]}function K0(e,t,n){let r=Ka(e,t);r&&G0(e,r,t,n)}function Xa(e,t,n,r,i,o,s){for(;n!=null;){let a=r[n.index],l=n.type;if(s&&t===0&&(a&&Yt(et(a),r),n.flags|=2),(n.flags&32)!==32)if(l&8)Xa(e,t,n.child,r,i,o,!1),bn(t,e,i,a,o);else if(l&32){let u=Za(n,r),c;for(;c=u();)bn(t,e,i,c,o);bn(t,e,i,a,o)}else l&16?J0(e,t,r,n,i,o):bn(t,e,i,a,o);n=s?n.projectionNext:n.next}}function uo(e,t,n,r,i,o){Xa(n,r,e.firstChild,t,i,o,!1)}function J0(e,t,n,r,i,o){let s=n[Ge],l=s[Ye].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let c=l[u];bn(t,e,i,c,o)}else{let u=l,c=s[we];mh(r)&&(u.flags|=128),Xa(e,t,u,c,i,o,!0)}}function X0(e,t,n,r,i){let o=n[Ut],s=et(n);o!==s&&bn(t,e,r,o,i);for(let a=ve;a<n.length;a++){let l=n[a];uo(l[x],l,e,t,r,o)}}function ew(e,t,n,r,i){if(t)i?e.addClass(n,r):e.removeClass(n,r);else{let o=r.indexOf("-")===-1?void 0:ct.DashCase;i==null?e.removeStyle(n,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=ct.Important),e.setStyle(n,r,i,o))}}function tw(e,t,n){e.setAttribute(t,"style",n)}function Ah(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function jh(e,t,n){let{mergedAttrs:r,classes:i,styles:o}=n;r!==null&&Os(e,t,r),i!==null&&Ah(e,t,i),o!==null&&tw(e,t,o)}var mt={};function h(e=1){Nh(xe(),H(),Qt()+e,!1)}function Nh(e,t,n,r){if(!r)if((t[C]&3)===3){let o=e.preOrderCheckHooks;o!==null&&_i(t,o,n)}else{let o=e.preOrderHooks;o!==null&&xi(t,o,0,n)}Wt(n)}function D(e,t=N.Default){let n=H();if(n===null)return F(e,t);let r=Se();return uh(r,n,Oe(e),t)}function Rh(e,t,n,r,i,o){let s=O(null);try{let a=null;i&En.SignalBased&&(a=t[r][Ud]),a!==null&&a.transformFn!==void 0&&(o=a.transformFn(o)),i&En.HasDecoratorInputTransform&&(o=e.inputTransforms[r].call(t,o)),e.setInput!==null?e.setInput(t,a,o,n,r):Ap(t,a,r,o)}finally{O(s)}}function nw(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let i=n[r];if(i<0)Wt(~i);else{let o=i,s=n[++r],a=n[++r];Yv(s,o);let l=t[o];a(2,l)}}}finally{Wt(-1)}}function co(e,t,n,r,i,o,s,a,l,u,c){let d=t.blueprint.slice();return d[ft]=i,d[C]=r|4|128|8|64,(u!==null||e&&e[C]&2048)&&(d[C]|=2048),Fp(d),d[we]=d[jn]=e,d[ye]=n,d[Xe]=s||e&&e[Xe],d[fe]=a||e&&e[fe],d[_n]=l||e&&e[_n]||null,d[Ye]=o,d[no]=D0(),d[ir]=c,d[Mp]=u,d[Ge]=t.type==2?e[Ge]:d,d}function fo(e,t,n,r,i){let o=e.data[t];if(o===null)o=rw(e,t,n,r,i),Gv()&&(o.flags|=32);else if(o.type&64){o.type=n,o.value=r,o.attrs=i;let s=Hv();o.injectorIndex=s===null?-1:s.injectorIndex}return wr(o,!0),o}function rw(e,t,n,r,i){let o=Hp(),s=Up(),a=s?o:o&&o.parent,l=e.data[t]=uw(e,a,n,t,r,i);return e.firstChild===null&&(e.firstChild=l),o!==null&&(s?o.child==null&&l.parent!==null&&(o.child=l):o.next===null&&(o.next=l,l.prev=o)),l}function Oh(e,t,n,r){if(n===0)return-1;let i=t.length;for(let o=0;o<n;o++)t.push(r),e.blueprint.push(r),e.data.push(null);return i}function Ph(e,t,n,r,i){let o=Qt(),s=r&2;try{Wt(-1),s&&t.length>je&&Nh(e,t,je,!1),Qe(s?2:0,i),n(r,i)}finally{Wt(o),Qe(s?3:1,i)}}function Fh(e,t,n){if(kp(t)){let r=O(null);try{let i=t.directiveStart,o=t.directiveEnd;for(let s=i;s<o;s++){let a=e.data[s];if(a.contentQueries){let l=n[s];a.contentQueries(1,l,s)}}}finally{O(r)}}}function Lh(e,t,n){$p()&&(gw(e,t,n,Le(n,t)),(n.flags&64)===64&&Uh(e,t,n))}function Vh(e,t,n=Le){let r=t.localNames;if(r!==null){let i=t.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?n(t,e):e[s];e[i++]=a}}}function Bh(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=el(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function el(e,t,n,r,i,o,s,a,l,u,c){let d=je+r,p=d+i,f=iw(d,p),g=typeof u=="function"?u():u;return f[x]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:c}}function iw(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:mt);return n}function ow(e,t,n,r){let o=r.get(T0,Dh)||n===Je.ShadowDom,s=e.selectRootElement(t,o);return sw(s),s}function sw(e){aw(e)}var aw=()=>null;function lw(e,t,n,r){let i=Gh(t);i.push(n),e.firstCreatePass&&Yh(e).push(r,i.length-1)}function uw(e,t,n,r,i,o){let s=t?t.injectorIndex:-1,a=0;return Vv()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Hf(e,t,n,r,i){for(let o in t){if(!t.hasOwnProperty(o))continue;let s=t[o];if(s===void 0)continue;r??={};let a,l=En.None;Array.isArray(s)?(a=s[0],l=s[1]):a=s;let u=o;if(i!==null){if(!i.hasOwnProperty(o))continue;u=i[o]}e===0?Uf(r,n,u,a,l):Uf(r,n,u,a)}return r}function Uf(e,t,n,r,i){let o;e.hasOwnProperty(n)?(o=e[n]).push(t,r):o=e[n]=[t,r],i!==void 0&&o.push(i)}function cw(e,t,n){let r=t.directiveStart,i=t.directiveEnd,o=e.data,s=t.attrs,a=[],l=null,u=null;for(let c=r;c<i;c++){let d=o[c],p=n?n.get(d):null,f=p?p.inputs:null,g=p?p.outputs:null;l=Hf(0,d.inputs,c,l,f),u=Hf(1,d.outputs,c,u,g);let b=l!==null&&s!==null&&!Ta(t)?Sw(l,c,s):null;a.push(b)}l!==null&&(l.hasOwnProperty("class")&&(t.flags|=8),l.hasOwnProperty("style")&&(t.flags|=16)),t.initialInputs=a,t.inputs=l,t.outputs=u}function dw(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function fw(e,t,n,r,i,o,s,a){let l=Le(t,n),u=t.inputs,c;!a&&u!=null&&(c=u[r])?(tl(e,n,c,r,i),ro(t)&&pw(n,t.index)):t.type&3?(r=dw(r),i=s!=null?s(i,t.value||"",r):i,o.setProperty(l,r,i)):t.type&12}function pw(e,t){let n=St(t,e);n[C]&16||(n[C]|=64)}function $h(e,t,n,r){if($p()){let i=r===null?null:{"":-1},o=vw(e,n),s,a;o===null?s=a=null:[s,a]=o,s!==null&&Hh(e,t,n,s,i,a),i&&ww(n,r,i)}n.mergedAttrs=Ma(n.mergedAttrs,n.attrs)}function Hh(e,t,n,r,i,o){for(let u=0;u<r.length;u++)l0(oh(n,t),e,r[u].type);Dw(n,e.data.length,r.length);for(let u=0;u<r.length;u++){let c=r[u];c.providersResolver&&c.providersResolver(c)}let s=!1,a=!1,l=Oh(e,t,r.length,null);for(let u=0;u<r.length;u++){let c=r[u];n.mergedAttrs=Ma(n.mergedAttrs,c.hostAttrs),Iw(e,n,t,l,c),bw(l,c,i),c.contentQueries!==null&&(n.flags|=4),(c.hostBindings!==null||c.hostAttrs!==null||c.hostVars!==0)&&(n.flags|=64);let d=c.type.prototype;!s&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),s=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),a=!0),l++}cw(e,n,o)}function hw(e,t,n,r,i){let o=i.hostBindings;if(o){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;mw(s)!=a&&s.push(a),s.push(n,r,o)}}function mw(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function gw(e,t,n,r){let i=n.directiveStart,o=n.directiveEnd;ro(n)&&Cw(t,n,e.data[i+n.componentOffset]),e.firstCreatePass||oh(n,t),Yt(r,t);let s=n.initialInputs;for(let a=i;a<o;a++){let l=e.data[a],u=Mn(t,e,a,n);if(Yt(u,t),s!==null&&xw(t,a-i,u,l,n,s),vr(l)){let c=St(n.index,t);c[ye]=Mn(t,e,a,n)}}}function Uh(e,t,n){let r=n.directiveStart,i=n.directiveEnd,o=n.index,s=qv();try{Wt(o);for(let a=r;a<i;a++){let l=e.data[a],u=t[a];Us(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&yw(l,u)}}finally{Wt(-1),Us(s)}}function yw(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function vw(e,t){let n=e.directiveRegistry,r=null,i=null;if(n)for(let o=0;o<n.length;o++){let s=n[o];if(ov(t,s.selectors,!1))if(r||(r=[]),vr(s))if(s.findHostDirectiveDefs!==null){let a=[];i=i||new Map,s.findHostDirectiveDefs(s,a,i),r.unshift(...a,s);let l=a.length;Js(e,t,l)}else r.unshift(s),Js(e,t,0);else i=i||new Map,s.findHostDirectiveDefs?.(s,r,i),r.push(s)}return r===null?null:[r,i]}function Js(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function ww(e,t,n){if(t){let r=e.localNames=[];for(let i=0;i<t.length;i+=2){let o=n[t[i+1]];if(o==null)throw new E(-301,!1);r.push(t[i],o)}}}function bw(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;vr(t)&&(n[""]=e)}}function Dw(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Iw(e,t,n,r,i){e.data[r]=i;let o=i.factory||(i.factory=Vt(i.type,!0)),s=new ar(o,vr(i),D);e.blueprint[r]=s,n[r]=s,hw(e,t,r,Oh(e,n,i.hostVars,mt),i)}function Cw(e,t,n){let r=Le(t,e),i=Bh(n),o=e[Xe].rendererFactory,s=16;n.signals?s=4096:n.onPush&&(s=64);let a=po(e,co(e,i,null,s,r,t,null,o.createRenderer(r,n),null,null,null));e[t.index]=a}function Ew(e,t,n,r,i,o){let s=Le(e,t);_w(t[fe],s,o,e.value,n,r,i)}function _w(e,t,n,r,i,o,s){if(o==null)e.removeAttribute(t,i,n);else{let a=s==null?Ji(o):s(o,r||"",i);e.setAttribute(t,i,a,n)}}function xw(e,t,n,r,i,o){let s=o[t];if(s!==null)for(let a=0;a<s.length;){let l=s[a++],u=s[a++],c=s[a++],d=s[a++];Rh(r,n,l,u,c,d)}}function Sw(e,t,n){let r=null,i=0;for(;i<n.length;){let o=n[i];if(o===0){i+=4;continue}else if(o===5){i+=2;continue}if(typeof o=="number")break;if(e.hasOwnProperty(o)){r===null&&(r=[]);let s=e[o];for(let a=0;a<s.length;a+=3)if(s[a]===t){r.push(o,s[a+1],s[a+2],n[i+1]);break}}i+=2}return r}function zh(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function Wh(e,t){let n=e.contentQueries;if(n!==null){let r=O(null);try{for(let i=0;i<n.length;i+=2){let o=n[i],s=n[i+1];if(s!==-1){let a=e.data[s];Pa(o),a.contentQueries(2,t[s],s)}}}finally{O(r)}}}function po(e,t){return e[or]?e[Af][We]=t:e[or]=t,e[Af]=t,t}function Xs(e,t,n){Pa(0);let r=O(null);try{t(e,n)}finally{O(r)}}function Gh(e){return e[Ri]??=[]}function Yh(e){return e.cleanup??=[]}function qh(e,t){let n=e[_n],r=n?n.get(ut,null):null;r&&r.handleError(t)}function tl(e,t,n,r,i){for(let o=0;o<n.length;){let s=n[o++],a=n[o++],l=n[o++],u=t[s],c=e.data[s];Rh(c,u,r,a,l,i)}}function Mw(e,t,n){let r=Pp(t,e);F0(e[fe],r,n)}function Tw(e,t){let n=St(t,e),r=n[x];kw(r,n);let i=n[ft];i!==null&&n[ir]===null&&(n[ir]=Ya(i,n[_n])),nl(r,n,n[ye])}function kw(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function nl(e,t,n){Fa(t);try{let r=e.viewQuery;r!==null&&Xs(1,r,n);let i=e.template;i!==null&&Ph(e,t,i,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[lt]?.finishViewCreation(e),e.staticContentQueries&&Wh(e,t),e.staticViewQueries&&Xs(2,e.viewQuery,n);let o=e.components;o!==null&&Aw(t,o)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[C]&=-5,La()}}function Aw(e,t){for(let n=0;n<t.length;n++)Tw(e,t[n])}function ho(e,t,n,r){let i=O(null);try{let o=t.tView,a=e[C]&4096?4096:16,l=co(e,o,n,a,null,t,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),u=e[t.index];l[Ht]=u;let c=e[lt];return c!==null&&(l[lt]=c.createEmbeddedView(o)),nl(o,l,n),l}finally{O(i)}}function Zh(e,t){let n=ve+t;if(n<e.length)return e[n]}function ur(e,t){return!t||t.firstChild===null||mh(e)}function mo(e,t,n,r=!0){let i=t[x];if($0(i,t,e,n),r){let s=Ks(n,e),a=t[fe],l=Ka(a,e[Ut]);l!==null&&V0(i,e[Ye],a,t,l,s)}let o=t[ir];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Qh(e,t){let n=lr(e,t);return n!==void 0&&lo(n[x],n),n}function Hi(e,t,n,r,i=!1){for(;n!==null;){let o=t[n.index];o!==null&&r.push(et(o)),pt(o)&&jw(o,r);let s=n.type;if(s&8)Hi(e,t,n.child,r);else if(s&32){let a=Za(n,t),l;for(;l=a();)r.push(l)}else if(s&16){let a=kh(t,n);if(Array.isArray(a))r.push(...a);else{let l=zt(t[Ge]);Hi(l[x],l,a,r,!0)}}n=i?n.projectionNext:n.next}return r}function jw(e,t){for(let n=ve;n<e.length;n++){let r=e[n],i=r[x].firstChild;i!==null&&Hi(r[x],r,i,t)}e[Ut]!==e[ft]&&t.push(e[Ut])}var Kh=[];function Nw(e){return e[Pe]??Rw(e)}function Rw(e){let t=Kh.pop()??Object.create(Pw);return t.lView=e,t}function Ow(e){e.lView[Pe]!==e&&(e.lView=null,Kh.push(e))}var Pw=K(w({},Xo),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{io(e.lView)},consumerOnSignalRead(){this.lView[Pe]=this}});function Fw(e){let t=e[Pe]??Object.create(Lw);return t.lView=e,t}var Lw=K(w({},Xo),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{let t=zt(e.lView);for(;t&&!Jh(t[x]);)t=zt(t);t&&Lp(t)},consumerOnSignalRead(){this.lView[Pe]=this}});function Jh(e){return e.type!==2}var Vw=100;function Xh(e,t=!0,n=0){let r=e[Xe],i=r.rendererFactory,o=!1;o||i.begin?.();try{Bw(e,n)}catch(s){throw t&&qh(e,s),s}finally{o||(i.end?.(),r.inlineEffectRunner?.flush())}}function Bw(e,t){let n=zp();try{Nf(!0),ea(e,t);let r=0;for(;sr(e);){if(r===Vw)throw new E(103,!1);r++,ea(e,1)}}finally{Nf(n)}}function $w(e,t,n,r){let i=t[C];if((i&256)===256)return;let o=!1,s=!1;!o&&t[Xe].inlineEffectRunner?.flush(),Fa(t);let a=!0,l=null,u=null;o||(Jh(e)?(u=Nw(t),l=es(u)):zd()===null?(a=!1,u=Fw(t),l=es(u)):t[Pe]&&(ns(t[Pe]),t[Pe]=null));try{Fp(t),zv(e.bindingStartIndex),n!==null&&Ph(e,t,n,2,r);let c=(i&3)===3;if(!o)if(c){let f=e.preOrderCheckHooks;f!==null&&_i(t,f,null)}else{let f=e.preOrderHooks;f!==null&&xi(t,f,0,null),Cs(t,0)}if(s||Hw(t),em(t,0),e.contentQueries!==null&&Wh(e,t),!o)if(c){let f=e.contentCheckHooks;f!==null&&_i(t,f)}else{let f=e.contentHooks;f!==null&&xi(t,f,1),Cs(t,1)}nw(e,t);let d=e.components;d!==null&&nm(t,d,0);let p=e.viewQuery;if(p!==null&&Xs(2,p,r),!o)if(c){let f=e.viewCheckHooks;f!==null&&_i(t,f)}else{let f=e.viewHooks;f!==null&&xi(t,f,2),Cs(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Is]){for(let f of t[Is])f();t[Is]=null}o||(t[C]&=-73)}catch(c){throw o||io(t),c}finally{u!==null&&(Wd(u,l),a&&Ow(u)),La()}}function em(e,t){for(let n=yh(e);n!==null;n=vh(n))for(let r=ve;r<n.length;r++){let i=n[r];tm(i,t)}}function Hw(e){for(let t=yh(e);t!==null;t=vh(t)){if(!(t[C]&Pi.HasTransplantedViews))continue;let n=t[xn];for(let r=0;r<n.length;r++){let i=n[r];Lp(i)}}}function Uw(e,t,n){let r=St(t,e);tm(r,n)}function tm(e,t){Oa(e)&&ea(e,t)}function ea(e,t){let r=e[x],i=e[C],o=e[Pe],s=!!(t===0&&i&16);if(s||=!!(i&64&&t===0),s||=!!(i&1024),s||=!!(o?.dirty&&ts(o)),s||=!1,o&&(o.dirty=!1),e[C]&=-9217,s)$w(r,e,r.template,e[ye]);else if(i&8192){em(e,1);let a=r.components;a!==null&&nm(e,a,1)}}function nm(e,t,n){for(let r=0;r<t.length;r++)Uw(e,t[r],n)}function rl(e,t){let n=zp()?64:1088;for(e[Xe].changeDetectionScheduler?.notify(t);e;){e[C]|=n;let r=zt(e);if(Bs(e)&&!r)return e;e=r}return null}var qt=class{get rootNodes(){let t=this._lView,n=t[x];return Hi(n,t,n.firstChild,[])}constructor(t,n,r=!0){this._lView=t,this._cdRefInjectingView=n,this.notifyErrorHandler=r,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[ye]}set context(t){this._lView[ye]=t}get destroyed(){return(this._lView[C]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[we];if(pt(t)){let n=t[Oi],r=n?n.indexOf(this):-1;r>-1&&(lr(t,r),ji(n,r))}this._attachedToViewContainer=!1}lo(this._lView[x],this._lView)}onDestroy(t){Vp(this._lView,t)}markForCheck(){rl(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[C]&=-129}reattach(){Hs(this._lView),this._lView[C]|=128}detectChanges(){this._lView[C]|=1024,Xh(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new E(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Bs(this._lView),n=this._lView[Ht];n!==null&&!t&&Qa(n,this._lView),Sh(this._lView[x],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new E(902,!1);this._appRef=t;let n=Bs(this._lView),r=this._lView[Ht];r!==null&&!n&&Mh(r,this._lView),Hs(this._lView)}},cr=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=Gw;let e=t;return e})(),zw=cr,Ww=class extends zw{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,n){return this.createEmbeddedViewImpl(t,n)}createEmbeddedViewImpl(t,n,r){let i=ho(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:n,dehydratedView:r});return new qt(i)}};function Gw(){return il(Se(),H())}function il(e,t){return e.type&4?new Ww(t,e,Nn(e,t)):null}var lj=new RegExp(`^(\\d+)*(${S0}|${x0})*(.*)`);var Yw=()=>null;function dr(e,t){return Yw(e,t)}var fr=class{},ol=new k("",{providedIn:"root",factory:()=>!1});var rm=new k(""),ta=class{},Ui=class{};function qw(e){let t=Error(`No component factory found for ${_e(e)}.`);return t[Zw]=e,t}var Zw="ngComponent";var na=class{resolveComponentFactory(t){throw qw(t)}},fl=class fl{};fl.NULL=new na;var Tn=fl,kn=class{},Cr=(()=>{let t=class t{constructor(){this.destroyNode=null}};t.__NG_ELEMENT_ID__=()=>Qw();let e=t;return e})();function Qw(){let e=H(),t=Se(),n=St(t.index,e);return(Et(n)?n:e)[fe]}var Kw=(()=>{let t=class t{};t.\u0275prov=S({token:t,providedIn:"root",factory:()=>null});let e=t;return e})();var zf=new Set;function Er(e){zf.has(e)||(zf.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}function im(e){let t=!0;return setTimeout(()=>{t&&(t=!1,e())}),typeof er.requestAnimationFrame=="function"&&er.requestAnimationFrame(()=>{t&&(t=!1,e())}),()=>{t=!1}}function Wf(e){let t=!0;return queueMicrotask(()=>{t&&e()}),()=>{t=!1}}function Gf(...e){}var X=class e{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new de(!1),this.onMicrotaskEmpty=new de(!1),this.onStable=new de(!1),this.onError=new de(!1),typeof Zone>"u")throw new E(908,!1);Zone.assertZonePatched();let i=this;i._nesting=0,i._outer=i._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(i._inner=i._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(i._inner=i._inner.fork(Zone.longStackTraceZoneSpec)),i.shouldCoalesceEventChangeDetection=!r&&n,i.shouldCoalesceRunChangeDetection=r,i.callbackScheduled=!1,eb(i)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new E(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new E(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,t,Jw,Gf,Gf);try{return o.runTask(s,n,r)}finally{o.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},Jw={};function sl(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Xw(e){e.isCheckStableRunning||e.callbackScheduled||(e.callbackScheduled=!0,Zone.root.run(()=>{im(()=>{e.callbackScheduled=!1,ra(e),e.isCheckStableRunning=!0,sl(e),e.isCheckStableRunning=!1})}),ra(e))}function eb(e){let t=()=>{Xw(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,i,o,s,a)=>{if(tb(a))return n.invokeTask(i,o,s,a);try{return Yf(e),n.invokeTask(i,o,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),qf(e)}},onInvoke:(n,r,i,o,s,a,l)=>{try{return Yf(e),n.invoke(i,o,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!nb(a)&&t(),qf(e)}},onHasTask:(n,r,i,o)=>{n.hasTask(i,o),r===i&&(o.change=="microTask"?(e._hasPendingMicrotasks=o.microTask,ra(e),sl(e)):o.change=="macroTask"&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(n,r,i,o)=>(n.handleError(i,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}function ra(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Yf(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function qf(e){e._nesting--,sl(e)}var ia=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new de,this.onMicrotaskEmpty=new de,this.onStable=new de,this.onError=new de}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,i){return t.apply(n,r)}};function tb(e){return om(e,"__ignore_ng_zone__")}function nb(e){return om(e,"__scheduler_tick__")}function om(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var sm=(()=>{let t=class t{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let r=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let i of r)i()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};t.\u0275prov=S({token:t,providedIn:"root",factory:()=>new t});let e=t;return e})();function oa(e,t,n){let r=n?e.styles:null,i=n?e.classes:null,o=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")o=a;else if(o==1)i=Df(i,a);else if(o==2){let l=a,u=t[++s];r=Df(r,l+": "+u+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=i:e.classesWithoutHost=i}var zi=class extends Tn{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=$t(t);return new pr(n,this.ngModule)}};function Zf(e){let t=[];for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];r!==void 0&&t.push({propName:Array.isArray(r)?r[0]:r,templateName:n})}return t}function rb(e){let t=e.toLowerCase();return t==="svg"?Op:t==="math"?kv:null}var pr=class extends Ui{get inputs(){let t=this.componentDef,n=t.inputTransforms,r=Zf(t.inputs);if(n!==null)for(let i of r)n.hasOwnProperty(i.propName)&&(i.transform=n[i.propName]);return r}get outputs(){return Zf(this.componentDef.outputs)}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=uv(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}create(t,n,r,i){let o=O(null);try{i=i||this.ngModule;let s=i instanceof Fe?i:i?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let a=s?new zs(t,s):t,l=a.get(kn,null);if(l===null)throw new E(407,!1);let u=a.get(Kw,null),c=a.get(sm,null),d=a.get(fr,null),p={rendererFactory:l,sanitizer:u,inlineEffectRunner:null,afterRenderEventManager:c,changeDetectionScheduler:d},f=l.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",b=r?ow(f,r,this.componentDef.encapsulation,a):xh(f,g,rb(g)),B=512;this.componentDef.signals?B|=4096:this.componentDef.onPush||(B|=16);let z=null;b!==null&&(z=Ya(b,a,!0));let ue=el(0,null,null,1,0,null,null,null,null,null,null),re=co(null,ue,null,B,null,null,p,f,a,null,z);Fa(re);let ot,rn;try{let $e=this.componentDef,on,Qo=null;$e.findHostDirectiveDefs?(on=[],Qo=new Map,$e.findHostDirectiveDefs($e,on,Qo),on.push($e)):on=[$e];let Qg=ib(re,b),Kg=ob(Qg,b,$e,on,re,p,f);rn=Ra(ue,je),b&&lb(f,$e,b,r),n!==void 0&&ub(rn,this.ngContentSelectors,n),ot=ab(Kg,$e,on,Qo,re,[cb]),nl(ue,re,null)}finally{La()}return new sa(this.componentType,ot,Nn(rn,re),re,rn)}finally{O(o)}}},sa=class extends ta{constructor(t,n,r,i,o){super(),this.location=r,this._rootLView=i,this._tNode=o,this.previousInputValues=null,this.instance=n,this.hostView=this.changeDetectorRef=new qt(i,void 0,!1),this.componentType=t}setInput(t,n){let r=this._tNode.inputs,i;if(r!==null&&(i=r[t])){if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView;tl(o[x],o,i,t,n),this.previousInputValues.set(t,n);let s=St(this._tNode.index,o);rl(s,1)}}get injector(){return new Lt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function ib(e,t){let n=e[x],r=je;return e[r]=t,fo(n,r,2,"#host",null)}function ob(e,t,n,r,i,o,s){let a=i[x];sb(r,e,t,s);let l=null;t!==null&&(l=Ya(t,i[_n]));let u=o.rendererFactory.createRenderer(t,n),c=16;n.signals?c=4096:n.onPush&&(c=64);let d=co(i,Bh(n),null,c,i[e.index],e,o,u,null,null,l);return a.firstCreatePass&&Js(a,e,r.length-1),po(i,d),i[e.index]=d}function sb(e,t,n,r){for(let i of e)t.mergedAttrs=Ma(t.mergedAttrs,i.hostAttrs);t.mergedAttrs!==null&&(oa(t,t.mergedAttrs,!0),n!==null&&jh(r,n,t))}function ab(e,t,n,r,i,o){let s=Se(),a=i[x],l=Le(s,i);Hh(a,i,s,n,null,r);for(let c=0;c<n.length;c++){let d=s.directiveStart+c,p=Mn(i,a,d,s);Yt(p,i)}Uh(a,i,s),l&&Yt(l,i);let u=Mn(i,a,s.directiveStart+s.componentOffset,s);if(e[ye]=i[ye]=u,o!==null)for(let c of o)c(u,t);return Fh(a,s,i),u}function lb(e,t,n,r){if(r)Os(e,n,["ng-version","18.0.4"]);else{let{attrs:i,classes:o}=cv(t.selectors[0]);i&&Os(e,n,i),o&&o.length>0&&Ah(e,n,o.join(" "))}}function ub(e,t,n){let r=e.projection=[];for(let i=0;i<t.length;i++){let o=n[i];r.push(o!=null?Array.from(o):null)}}function cb(){let e=Se();$a(H()[x],e)}var On=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=db;let e=t;return e})();function db(){let e=Se();return lm(e,H())}var fb=On,am=class extends fb{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Nn(this._hostTNode,this._hostLView)}get injector(){return new Lt(this._hostTNode,this._hostLView)}get parentInjector(){let t=Ha(this._hostTNode,this._hostLView);if(nh(t)){let n=Li(t,this._hostLView),r=Fi(t),i=n[x].data[r+8];return new Lt(i,n)}else return new Lt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Qf(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-ve}createEmbeddedView(t,n,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=dr(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},o,s);return this.insertImpl(a,i,ur(this._hostTNode,s)),a}createComponent(t,n,r,i,o){let s=t&&!xv(t),a;if(s)a=n;else{let g=n||{};a=g.index,r=g.injector,i=g.projectableNodes,o=g.environmentInjector||g.ngModuleRef}let l=s?t:new pr($t(t)),u=r||this.parentInjector;if(!o&&l.ngModule==null){let b=(s?u:this.parentInjector).get(Fe,null);b&&(o=b)}let c=$t(l.componentType??{}),d=dr(this._lContainer,c?.id??null),p=d?.firstChild??null,f=l.create(u,i,p,o);return this.insertImpl(f.hostView,a,ur(this._hostTNode,d)),f}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let i=t._lView;if(Nv(i)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let l=i[we],u=new am(l,l[Ye],l[we]);u.detach(u.indexOf(t))}}let o=this._adjustIndex(n),s=this._lContainer;return mo(s,i,o,r),t.attachToViewContainerRef(),pp(Ms(s),o,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Qf(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=lr(this._lContainer,n);r&&(ji(Ms(this._lContainer),n),lo(r[x],r))}detach(t){let n=this._adjustIndex(t,-1),r=lr(this._lContainer,n);return r&&ji(Ms(this._lContainer),n)!=null?new qt(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Qf(e){return e[Oi]}function Ms(e){return e[Oi]||(e[Oi]=[])}function lm(e,t){let n,r=t[e.index];return pt(r)?n=r:(n=zh(r,t,null,e),t[e.index]=n,po(t,n)),hb(n,t,e,r),new am(n,e,t)}function pb(e,t){let n=e[fe],r=n.createComment(""),i=Le(t,e),o=Ka(n,i);return $i(n,o,r,Y0(n,i),!1),r}var hb=yb,mb=()=>!1;function gb(e,t,n){return mb(e,t,n)}function yb(e,t,n,r){if(e[Ut])return;let i;n.type&8?i=et(r):i=pb(t,n),e[Ut]=i}var aa=class e{constructor(t){this.queryList=t,this.matches=null}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},la=class e{constructor(t=[]){this.queries=t}createEmbeddedView(t){let n=t.queries;if(n!==null){let r=t.contentQueries!==null?t.contentQueries[0]:n.length,i=[];for(let o=0;o<r;o++){let s=n.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new e(i)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}finishViewCreation(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)al(t,n).matches!==null&&this.queries[n].setDirty()}},Wi=class{constructor(t,n,r=null){this.flags=n,this.read=r,typeof t=="string"?this.predicate=_b(t):this.predicate=t}},ua=class e{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){let i=n!==null?n.length:0,o=this.getByIndex(r).embeddedTView(t,i);o&&(o.indexInDeclarationView=r,n!==null?n.push(o):n=[o])}return n!==null?new e(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}},ca=class e{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new e(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,r=t.parent;for(;r!==null&&r.type&8&&r.index!==n;)r=r.parent;return n===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(t,n,vb(n,o)),this.matchTNodeWithReadOption(t,n,Si(n,t,o,!1,!1))}else r===cr?n.type&4&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Si(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===ht||i===On||i===cr&&n.type&4)this.addMatch(n.index,-2);else{let o=Si(n,t,i,!1,!1);o!==null&&this.addMatch(n.index,o)}else this.addMatch(n.index,r)}}addMatch(t,n){this.matches===null?this.matches=[t,n]:this.matches.push(t,n)}};function vb(e,t){let n=e.localNames;if(n!==null){for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1]}return null}function wb(e,t){return e.type&11?Nn(e,t):e.type&4?il(e,t):null}function bb(e,t,n,r){return n===-1?wb(t,e):n===-2?Db(e,t,r):Mn(e,e[x],n,t)}function Db(e,t,n){if(n===ht)return Nn(t,e);if(n===cr)return il(t,e);if(n===On)return lm(t,e)}function um(e,t,n,r){let i=t[lt].queries[r];if(i.matches===null){let o=e.data,s=n.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let u=s[l];if(u<0)a.push(null);else{let c=o[u];a.push(bb(t,c,s[l+1],n.metadata.read))}}i.matches=a}return i.matches}function da(e,t,n,r){let i=e.queries.getByIndex(n),o=i.matches;if(o!==null){let s=um(e,t,i,n);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let u=o[a+1],c=t[-l];for(let d=ve;d<c.length;d++){let p=c[d];p[Ht]===p[we]&&da(p[x],p,u,r)}if(c[xn]!==null){let d=c[xn];for(let p=0;p<d.length;p++){let f=d[p];da(f[x],f,u,r)}}}}}return r}function Ib(e,t){return e[lt].queries[t].queryList}function cm(e,t,n){let r=new Zs((n&4)===4);return lw(e,t,r,r.destroy),(t[lt]??=new la).queries.push(new aa(r))-1}function Cb(e,t,n){let r=xe();return r.firstCreatePass&&(dm(r,new Wi(e,t,n),-1),(t&2)===2&&(r.staticViewQueries=!0)),cm(r,H(),t)}function Eb(e,t,n,r){let i=xe();if(i.firstCreatePass){let o=Se();dm(i,new Wi(t,n,r),o.index),xb(i,e),(n&2)===2&&(i.staticContentQueries=!0)}return cm(i,H(),n)}function _b(e){return e.split(",").map(t=>t.trim())}function dm(e,t,n){e.queries===null&&(e.queries=new ua),e.queries.track(new ca(t,n))}function xb(e,t){let n=e.contentQueries||(e.contentQueries=[]),r=n.length?n[n.length-1]:-1;t!==r&&n.push(e.queries.length-1,t)}function al(e,t){return e.queries.getByIndex(t)}function Sb(e,t){let n=e[x],r=al(n,t);return r.crossesNgTemplate?da(n,e,t,[]):um(n,e,r,t)}function _r(e){let t=e.inputConfig,n={};for(let r in t)if(t.hasOwnProperty(r)){let i=t[r];Array.isArray(i)&&i[3]&&(n[r]=i[3])}e.inputTransforms=n}var _t=class{},hr=class{};var fa=class extends _t{constructor(t,n,r){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new zi(this);let i=Ip(t);this._bootstrapComponents=_h(i.bootstrap),this._r3Injector=fh(t,n,[{provide:_t,useValue:this},{provide:Tn,useValue:this.componentFactoryResolver},...r],_e(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},pa=class extends hr{constructor(t){super(),this.moduleType=t}create(t){return new fa(this.moduleType,t,[])}};var Gi=class extends _t{constructor(t){super(),this.componentFactoryResolver=new zi(this),this.instance=null;let n=new rr([...t.providers,{provide:_t,useValue:this},{provide:Tn,useValue:this.componentFactoryResolver}],t.parent||ja(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function ll(e,t,n=null){return new Gi({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}function fm(e,t,n){return e[t]=n}function Mb(e,t){return e[t]}function Kt(e,t,n){let r=e[t];return Object.is(r,n)?!1:(e[t]=n,!0)}function Tb(e){return(e.flags&32)===32}function kb(e,t,n,r,i,o,s,a,l){let u=t.consts,c=fo(t,e,4,s||null,a||null);$h(t,n,c,Sn(u,l)),$a(t,c);let d=c.tView=el(2,c,r,i,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u,null);return t.queries!==null&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}function ha(e,t,n,r,i,o,s,a,l,u){let c=n+je,d=t.firstCreatePass?kb(c,t,e,r,i,o,s,a,l):t.data[c];wr(d,!1);let p=Ab(t,e,d,n);Va()&&Ja(t,e,p,d),Yt(p,e);let f=zh(p,e,p,d);return e[c]=f,po(e,f),gb(f,d,e),Na(d)&&Lh(t,e,d),l!=null&&Vh(e,d,u),d}function U(e,t,n,r,i,o,s,a){let l=H(),u=xe(),c=Sn(u.consts,o);return ha(l,u,e,t,n,r,i,c,s,a),U}var Ab=jb;function jb(e,t,n,r){return Ba(!0),t[fe].createComment("")}function xr(e,t,n,r){let i=H(),o=br();if(Kt(i,o,t)){let s=xe(),a=Jp();Ew(a,i,e,t,n,r)}return xr}function Nb(e,t,n,r){return Kt(e,br(),n)?t+Ji(n)+r:mt}function Ci(e,t){return e<<17|t<<2}function Zt(e){return e>>17&32767}function Rb(e){return(e&2)==2}function Ob(e,t){return e&131071|t<<17}function ma(e){return e|2}function An(e){return(e&131068)>>2}function Ts(e,t){return e&-131069|t<<2}function Pb(e){return(e&1)===1}function ga(e){return e|1}function Fb(e,t,n,r,i,o){let s=o?t.classBindings:t.styleBindings,a=Zt(s),l=An(s);e[r]=n;let u=!1,c;if(Array.isArray(n)){let d=n;c=d[1],(c===null||gr(d,c)>0)&&(u=!0)}else c=n;if(i)if(l!==0){let p=Zt(e[a+1]);e[r+1]=Ci(p,a),p!==0&&(e[p+1]=Ts(e[p+1],r)),e[a+1]=Ob(e[a+1],r)}else e[r+1]=Ci(a,0),a!==0&&(e[a+1]=Ts(e[a+1],r)),a=r;else e[r+1]=Ci(l,0),a===0?a=r:e[l+1]=Ts(e[l+1],r),l=r;u&&(e[r+1]=ma(e[r+1])),Kf(e,c,r,!0),Kf(e,c,r,!1),Lb(t,c,e,r,o),s=Ci(a,l),o?t.classBindings=s:t.styleBindings=s}function Lb(e,t,n,r,i){let o=i?e.residualClasses:e.residualStyles;o!=null&&typeof t=="string"&&gr(o,t)>=0&&(n[r+1]=ga(n[r+1]))}function Kf(e,t,n,r){let i=e[n+1],o=t===null,s=r?Zt(i):An(i),a=!1;for(;s!==0&&(a===!1||o);){let l=e[s],u=e[s+1];Vb(l,t)&&(a=!0,e[s+1]=r?ga(u):ma(u)),s=r?Zt(u):An(u)}a&&(e[n+1]=r?ma(i):ga(i))}function Vb(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?gr(e,t)>=0:!1}function M(e,t,n){let r=H(),i=br();if(Kt(r,i,t)){let o=xe(),s=Jp();fw(o,s,r,e,t,r[fe],n,!1)}return M}function Jf(e,t,n,r,i){let o=t.inputs,s=i?"class":"style";tl(e,n,o[s],s,r)}function Sr(e,t,n){return pm(e,t,n,!1),Sr}function Mr(e,t){return pm(e,t,null,!0),Mr}function pm(e,t,n,r){let i=H(),o=xe(),s=Wv(2);if(o.firstUpdatePass&&$b(o,e,s,r),t!==mt&&Kt(i,s,t)){let a=o.data[Qt()];Gb(o,a,i,i[fe],e,i[s+1]=Yb(t,n),r,s)}}function Bb(e,t){return t>=e.expandoStartIndex}function $b(e,t,n,r){let i=e.data;if(i[n+1]===null){let o=i[Qt()],s=Bb(e,n);qb(o,r)&&t===null&&!s&&(t=!1),t=Hb(i,o,t,r),Fb(i,o,t,n,s,r)}}function Hb(e,t,n,r){let i=Zv(e),o=r?t.residualClasses:t.residualStyles;if(i===null)(r?t.classBindings:t.styleBindings)===0&&(n=ks(null,e,t,n,r),n=mr(n,t.attrs,r),o=null);else{let s=t.directiveStylingLast;if(s===-1||e[s]!==i)if(n=ks(i,e,t,n,r),o===null){let l=Ub(e,t,r);l!==void 0&&Array.isArray(l)&&(l=ks(null,e,t,l[1],r),l=mr(l,t.attrs,r),zb(e,t,r,l))}else o=Wb(e,t,r)}return o!==void 0&&(r?t.residualClasses=o:t.residualStyles=o),n}function Ub(e,t,n){let r=n?t.classBindings:t.styleBindings;if(An(r)!==0)return e[Zt(r)]}function zb(e,t,n,r){let i=n?t.classBindings:t.styleBindings;e[Zt(i)]=r}function Wb(e,t,n){let r,i=t.directiveEnd;for(let o=1+t.directiveStylingLast;o<i;o++){let s=e[o].hostAttrs;r=mr(r,s,n)}return mr(r,t.attrs,n)}function ks(e,t,n,r,i){let o=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(o=t[a],r=mr(r,o.hostAttrs,i),o!==e);)a++;return e!==null&&(n.directiveStylingLast=a),r}function mr(e,t,n){let r=n?1:2,i=-1;if(t!==null)for(let o=0;o<t.length;o++){let s=t[o];typeof s=="number"?i=s:i===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),Ky(e,s,n?!0:t[++o]))}return e===void 0?null:e}function Gb(e,t,n,r,i,o,s,a){if(!(t.type&3))return;let l=e.data,u=l[a+1],c=Pb(u)?Xf(l,t,n,i,An(u),s):void 0;if(!Yi(c)){Yi(o)||Rb(u)&&(o=Xf(l,null,n,i,a,s));let d=Pp(Qt(),n);ew(r,s,d,i,o)}}function Xf(e,t,n,r,i,o){let s=t===null,a;for(;i>0;){let l=e[i],u=Array.isArray(l),c=u?l[1]:l,d=c===null,p=n[i+1];p===mt&&(p=d?Bt:void 0);let f=d?bs(p,r):c===r?p:void 0;if(u&&!Yi(f)&&(f=bs(l,r)),Yi(f)&&(a=f,s))return a;let g=e[i+1];i=s?Zt(g):An(g)}if(t!==null){let l=o?t.residualClasses:t.residualStyles;l!=null&&(a=bs(l,r))}return a}function Yi(e){return e!==void 0}function Yb(e,t){return e==null||e===""||(typeof t=="string"?e=e+t:typeof e=="object"&&(e=_e(Ir(e)))),e}function qb(e,t){return(e.flags&(t?8:16))!==0}var ya=class{destroy(t){}updateValue(t,n){}swap(t,n){let r=Math.min(t,n),i=Math.max(t,n),o=this.detach(i);if(i-r>1){let s=this.detach(r);this.attach(r,o),this.attach(i,s)}else this.attach(r,o)}move(t,n){this.attach(n,this.detach(t))}};function As(e,t,n,r,i){return e===n&&Object.is(t,r)?1:Object.is(i(e,t),i(n,r))?-1:0}function Zb(e,t,n){let r,i,o=0,s=e.length-1,a=void 0;if(Array.isArray(t)){let l=t.length-1;for(;o<=s&&o<=l;){let u=e.at(o),c=t[o],d=As(o,u,o,c,n);if(d!==0){d<0&&e.updateValue(o,c),o++;continue}let p=e.at(s),f=t[l],g=As(s,p,l,f,n);if(g!==0){g<0&&e.updateValue(s,f),s--,l--;continue}let b=n(o,u),B=n(s,p),z=n(o,c);if(Object.is(z,B)){let ue=n(l,f);Object.is(ue,b)?(e.swap(o,s),e.updateValue(s,f),l--,s--):e.move(s,o),e.updateValue(o,c),o++;continue}if(r??=new qi,i??=tp(e,o,s,n),va(e,r,o,z))e.updateValue(o,c),o++,s++;else if(i.has(z))r.set(b,e.detach(o)),s--;else{let ue=e.create(o,t[o]);e.attach(o,ue),o++,s++}}for(;o<=l;)ep(e,r,n,o,t[o]),o++}else if(t!=null){let l=t[Symbol.iterator](),u=l.next();for(;!u.done&&o<=s;){let c=e.at(o),d=u.value,p=As(o,c,o,d,n);if(p!==0)p<0&&e.updateValue(o,d),o++,u=l.next();else{r??=new qi,i??=tp(e,o,s,n);let f=n(o,d);if(va(e,r,o,f))e.updateValue(o,d),o++,s++,u=l.next();else if(!i.has(f))e.attach(o,e.create(o,d)),o++,s++,u=l.next();else{let g=n(o,c);r.set(g,e.detach(o)),s--}}}for(;!u.done;)ep(e,r,n,e.length,u.value),u=l.next()}for(;o<=s;)e.destroy(e.detach(s--));r?.forEach(l=>{e.destroy(l)})}function va(e,t,n,r){return t!==void 0&&t.has(r)?(e.attach(n,t.get(r)),t.delete(r),!0):!1}function ep(e,t,n,r,i){if(va(e,t,r,n(r,i)))e.updateValue(r,i);else{let o=e.create(r,i);e.attach(r,o)}}function tp(e,t,n,r){let i=new Set;for(let o=t;o<=n;o++)i.add(r(o,e.at(o)));return i}var qi=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let n=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(n)?(this.kvMap.set(t,this._vMap.get(n)),this._vMap.delete(n)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,n){if(this.kvMap.has(t)){let r=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,n)}else this.kvMap.set(t,n)}forEach(t){for(let[n,r]of this.kvMap)if(t(r,n),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),t(r,n)}}};function W(e,t){Er("NgControlFlow");let n=H(),r=br(),i=n[r]!==mt?n[r]:-1,o=i!==-1?Zi(n,je+i):void 0,s=0;if(Kt(n,r,e)){let a=O(null);try{if(o!==void 0&&Qh(o,s),e!==-1){let l=je+e,u=Zi(n,l),c=Ia(n[x],l),d=dr(u,c.tView.ssrId),p=ho(n,c,t,{dehydratedView:d});mo(u,p,s,ur(c,d))}}finally{O(a)}}else if(o!==void 0){let a=Zh(o,s);a!==void 0&&(a[ye]=t)}}var wa=class{constructor(t,n,r){this.lContainer=t,this.$implicit=n,this.$index=r}get $count(){return this.lContainer.length-ve}};function hm(e,t){return t}var ba=class{constructor(t,n,r){this.hasEmptyBlock=t,this.trackByFn=n,this.liveCollection=r}};function pe(e,t,n,r,i,o,s,a,l,u,c,d,p){Er("NgControlFlow");let f=H(),g=xe(),b=l!==void 0,B=H(),z=a?s.bind(B[Ge][ye]):s,ue=new ba(b,z);B[je+e]=ue,ha(f,g,e+1,t,n,r,i,Sn(g.consts,o)),b&&ha(f,g,e+2,l,u,c,d,Sn(g.consts,p))}var Da=class extends ya{constructor(t,n,r){super(),this.lContainer=t,this.hostLView=n,this.templateTNode=r,this.operationsCounter=void 0,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-ve}at(t){return this.getLView(t)[ye].$implicit}attach(t,n){let r=n[ir];this.needsIndexUpdate||=t!==this.length,mo(this.lContainer,n,t,ur(this.templateTNode,r))}detach(t){return this.needsIndexUpdate||=t!==this.length-1,Qb(this.lContainer,t)}create(t,n){let r=dr(this.lContainer,this.templateTNode.tView.ssrId),i=ho(this.hostLView,this.templateTNode,new wa(this.lContainer,n,t),{dehydratedView:r});return this.operationsCounter?.recordCreate(),i}destroy(t){lo(t[x],t),this.operationsCounter?.recordDestroy()}updateValue(t,n){this.getLView(t)[ye].$implicit=n}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[ye].$index=t}getLView(t){return Kb(this.lContainer,t)}};function he(e){let t=O(null),n=Qt();try{let r=H(),i=r[x],o=r[n],s=n+1,a=Zi(r,s);if(o.liveCollection===void 0){let u=Ia(i,s);o.liveCollection=new Da(a,r,u)}else o.liveCollection.reset();let l=o.liveCollection;if(Zb(l,e,o.trackByFn),l.updateIndexes(),o.hasEmptyBlock){let u=br(),c=l.length===0;if(Kt(r,u,c)){let d=n+2,p=Zi(r,d);if(c){let f=Ia(i,d),g=dr(p,f.tView.ssrId),b=ho(r,f,void 0,{dehydratedView:g});mo(p,b,0,ur(f,g))}else Qh(p,0)}}}finally{O(t)}}function Zi(e,t){return e[t]}function Qb(e,t){return lr(e,t)}function Kb(e,t){return Zh(e,t)}function Ia(e,t){return Ra(e,t)}function Jb(e,t,n,r,i,o){let s=t.consts,a=Sn(s,i),l=fo(t,e,2,r,a);return $h(t,n,l,Sn(s,o)),l.attrs!==null&&oa(l,l.attrs,!1),l.mergedAttrs!==null&&oa(l,l.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,l),l}function y(e,t,n,r){let i=H(),o=xe(),s=je+e,a=i[fe],l=o.firstCreatePass?Jb(s,o,i,t,n,r):o.data[s],u=Xb(o,i,l,a,t,e);i[s]=u;let c=Na(l);return wr(l,!0),jh(a,u,l),!Tb(l)&&Va()&&Ja(o,i,u,l),Pv()===0&&Yt(u,i),Fv(),c&&(Lh(o,i,l),Fh(o,l,i)),r!==null&&Vh(i,l),y}function v(){let e=Se();Up()?Uv():(e=e.parent,wr(e,!1));let t=e;Bv(t)&&$v(),Lv();let n=xe();return n.firstCreatePass&&($a(n,e),kp(e)&&n.queries.elementEnd(e)),t.classesWithoutHost!=null&&n0(t)&&Jf(n,t,H(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&r0(t)&&Jf(n,t,H(),t.stylesWithoutHost,!1),v}function Q(e,t,n,r){return y(e,t,n,r),v(),Q}var Xb=(e,t,n,r,i,o)=>(Ba(!0),xh(r,i,Jv()));function go(){return H()}var Qi="en-US";var eD=Qi;function tD(e){typeof e=="string"&&(eD=e.toLowerCase().replace(/_/g,"-"))}var nD=(e,t,n)=>{};function Jt(e,t,n,r){let i=H(),o=xe(),s=Se();return iD(o,i,i[fe],s,e,t,r),Jt}function rD(e,t,n,r){let i=e.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===n&&i[o+1]===r){let a=t[Ri],l=i[o+2];return a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function iD(e,t,n,r,i,o,s){let a=Na(r),u=e.firstCreatePass&&Yh(e),c=t[ye],d=Gh(t),p=!0;if(r.type&3||s){let b=Le(r,t),B=s?s(b):b,z=d.length,ue=s?ot=>s(et(ot[r.index])):r.index,re=null;if(!s&&a&&(re=rD(e,t,i,r.index)),re!==null){let ot=re.__ngLastListenerFn__||re;ot.__ngNextListenerFn__=o,re.__ngLastListenerFn__=o,p=!1}else{o=rp(r,t,c,o),nD(b,i,o);let ot=n.listen(B,i,o);d.push(o,ot),u&&u.push(i,ue,z,z+1)}}else o=rp(r,t,c,o);let f=r.outputs,g;if(p&&f!==null&&(g=f[i])){let b=g.length;if(b)for(let B=0;B<b;B+=2){let z=g[B],ue=g[B+1],rn=t[z][ue].subscribe(o),$e=d.length;d.push(o,rn),u&&u.push(i,r.index,$e,-($e+1))}}}function np(e,t,n,r){let i=O(null);try{return Qe(6,t,n),n(r)!==!1}catch(o){return qh(e,o),!1}finally{Qe(7,t,n),O(i)}}function rp(e,t,n,r){return function i(o){if(o===Function)return r;let s=e.componentOffset>-1?St(e.index,t):t;rl(s,5);let a=np(t,n,r,o),l=i.__ngNextListenerFn__;for(;l;)a=np(t,n,l,o)&&a,l=l.__ngNextListenerFn__;return a}}function T(e=1){return Kv(e)}function mm(e,t,n,r){Eb(e,t,n,r)}function gm(e,t,n){Cb(e,t,n)}function yo(e){let t=H(),n=xe(),r=Gp();Pa(r+1);let i=al(n,r);if(e.dirty&&jv(t)===((i.metadata.flags&2)===2)){if(i.matches===null)e.reset([]);else{let o=Sb(t,r);e.reset(o,v0),e.notifyOnChanges()}return!0}return!1}function vo(){return Ib(H(),Gp())}function oD(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}function A(e,t=""){let n=H(),r=xe(),i=e+je,o=r.firstCreatePass?fo(r,i,1,t,null):r.data[i],s=sD(r,n,o,t,e);n[i]=s,Va()&&Ja(r,n,s,o),wr(o,!1)}var sD=(e,t,n,r,i)=>(Ba(!0),P0(t[fe],r));function be(e){return ne("",e,""),be}function ne(e,t,n){let r=H(),i=Nb(r,e,t,n);return i!==mt&&Mw(r,Qt(),i),ne}var aD=(()=>{let t=class t{constructor(r){this._injector=r,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(r){if(!r.standalone)return null;if(!this.cachedInjectors.has(r)){let i=_p(!1,r.type),o=i.length>0?ll([i],this._injector,`Standalone[${r.type.name}]`):null;this.cachedInjectors.set(r,o)}return this.cachedInjectors.get(r)}ngOnDestroy(){try{for(let r of this.cachedInjectors.values())r!==null&&r.destroy()}finally{this.cachedInjectors.clear()}}};t.\u0275prov=S({token:t,providedIn:"environment",factory:()=>new t(F(Fe))});let e=t;return e})();function Z(e){Er("NgStandalone"),e.getStandaloneInjector=t=>t.get(aD).getOrCreateStandaloneInjector(e)}function ym(e,t,n){let r=Wp()+e,i=H();return i[r]===mt?fm(i,r,n?t.call(n):t()):Mb(i,r)}function lD(e,t){let n=e[t];return n===mt?void 0:n}function uD(e,t,n,r,i,o){let s=t+n;return Kt(e,s,i)?fm(e,s+1,o?r.call(o,i):r(i)):lD(e,s+1)}function wo(e,t){let n=xe(),r,i=e+je;n.firstCreatePass?(r=cD(t,n.pipeRegistry),n.data[i]=r,r.onDestroy&&(n.destroyHooks??=[]).push(i,r.onDestroy)):r=n.data[i];let o=r.factory||(r.factory=Vt(r.type,!0)),s,a=Ee(D);try{let l=Vi(!1),u=o();return Vi(l),oD(n,H(),i,u),u}finally{Ee(a)}}function cD(e,t){if(t)for(let n=t.length-1;n>=0;n--){let r=t[n];if(e===r.name)return r}}function bo(e,t,n){let r=e+je,i=H(),o=Av(i,r);return dD(i,r)?uD(i,Wp(),t,o.transform,n,o):o.transform(n)}function dD(e,t){return e[x].data[t].pure}var Do=(()=>{let t=class t{log(r){console.log(r)}warn(r){console.warn(r)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"platform"});let e=t;return e})();var vm=new k("");function Tr(e){return!!e&&typeof e.then=="function"}function wm(e){return!!e&&typeof e.subscribe=="function"}var bm=new k(""),Dm=(()=>{let t=class t{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,i)=>{this.resolve=r,this.reject=i}),this.appInits=m(bm,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let r=[];for(let o of this.appInits){let s=o();if(Tr(s))r.push(s);else if(wm(s)){let a=new Promise((l,u)=>{s.subscribe({complete:l,error:u})});r.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(r).then(()=>{i()}).catch(o=>{this.reject(o)}),r.length===0&&i(),this.initialized=!0}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),ul=new k("");function fD(){Gd(()=>{throw new E(600,!1)})}function pD(e){return e.isBoundToModule}var hD=10;function mD(e,t,n){try{let r=n();return Tr(r)?r.catch(i=>{throw t.runOutsideAngular(()=>e.handleError(i)),i}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}var Pn=(()=>{let t=class t{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=m(ph),this.afterRenderEffectManager=m(sm),this.zonelessEnabled=m(ol),this.externalTestViews=new Set,this.beforeRender=new se,this.afterTick=new se,this.componentTypes=[],this.components=[],this.isStable=m(Rn).hasPendingTasks.pipe(P(r=>!r)),this._injector=m(Fe)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(r,i){let o=r instanceof Ui;if(!this._injector.get(Dm).done){let f=!o&&Dp(r),g=!1;throw new E(405,g)}let a;o?a=r:a=this._injector.get(Tn).resolveComponentFactory(r),this.componentTypes.push(a.componentType);let l=pD(a)?void 0:this._injector.get(_t),u=i||a.selector,c=a.create(Gt.NULL,[],u,l),d=c.location.nativeElement,p=c.injector.get(vm,null);return p?.registerApplication(d),c.onDestroy(()=>{this.detachView(c.hostView),js(this.components,c),p?.unregisterApplication(d)}),this._loadComponent(c),c}tick(){this._tick(!0)}_tick(r){if(this._runningTick)throw new E(101,!1);let i=O(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(r)}catch(o){this.internalErrorHandler(o)}finally{this._runningTick=!1,O(i),this.afterTick.next()}}detectChangesInAttachedViews(r){let i=null;this._injector.destroyed||(i=this._injector.get(kn,null,{optional:!0}));let o=0,s=this.afterRenderEffectManager;for(;o<hD;){let a=o===0;if(r||!a){this.beforeRender.next(a);for(let{_lView:l,notifyErrorHandler:u}of this._views)gD(l,u,a,this.zonelessEnabled)}else i?.begin?.(),i?.end?.();if(o++,s.executeInternalCallbacks(),!this.allViews.some(({_lView:l})=>sr(l))&&(s.execute(),!this.allViews.some(({_lView:l})=>sr(l))))break}}attachView(r){let i=r;this._views.push(i),i.attachToAppRef(this)}detachView(r){let i=r;js(this._views,i),i.detachFromAppRef()}_loadComponent(r){this.attachView(r.hostView),this.tick(),this.components.push(r);let i=this._injector.get(ul,[]);[...this._bootstrapListeners,...i].forEach(o=>o(r))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(r=>r()),this._views.slice().forEach(r=>r.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(r){return this._destroyListeners.push(r),()=>js(this._destroyListeners,r)}destroy(){if(this._destroyed)throw new E(406,!1);let r=this._injector;r.destroy&&!r.destroyed&&r.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function js(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function gD(e,t,n,r){if(!n&&!sr(e))return;Xh(e,t,n&&!r?0:1)}var Ca=class{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},cl=(()=>{let t=class t{compileModuleSync(r){return new pa(r)}compileModuleAsync(r){return Promise.resolve(this.compileModuleSync(r))}compileModuleAndAllComponentsSync(r){let i=this.compileModuleSync(r),o=Ip(r),s=_h(o.declarations).reduce((a,l)=>{let u=$t(l);return u&&a.push(new pr(u)),a},[]);return new Ca(i,s)}compileModuleAndAllComponentsAsync(r){return Promise.resolve(this.compileModuleAndAllComponentsSync(r))}clearCache(){}clearCacheFor(r){}getModuleId(r){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var yD=(()=>{let t=class t{constructor(){this.zone=m(X),this.changeDetectionScheduler=m(fr),this.applicationRef=m(Pn)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),vD=new k("",{factory:()=>!1});function Im({ngZoneFactory:e,ignoreChangesOutsideZone:t}){return e??=()=>new X(Em()),[{provide:X,useFactory:e},{provide:Cn,multi:!0,useFactory:()=>{let n=m(yD,{optional:!0});return()=>n.initialize()}},{provide:Cn,multi:!0,useFactory:()=>{let n=m(bD);return()=>{n.initialize()}}},{provide:ph,useFactory:wD},t===!0?{provide:rm,useValue:!0}:[]]}function wD(){let e=m(X),t=m(ut);return n=>e.runOutsideAngular(()=>t.handleError(n))}function Cm(e){let t=e?.ignoreChangesOutsideZone,n=Im({ngZoneFactory:()=>{let r=Em(e);return r.shouldCoalesceEventChangeDetection&&Er("NgZone_CoalesceEvent"),new X(r)},ignoreChangesOutsideZone:t});return eo([{provide:vD,useValue:!0},{provide:ol,useValue:!1},n])}function Em(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var bD=(()=>{let t=class t{constructor(){this.subscription=new ee,this.initialized=!1,this.zone=m(X),this.pendingTasks=m(Rn)}initialize(){if(this.initialized)return;this.initialized=!0;let r=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(r=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{X.assertNotInAngularZone(),queueMicrotask(()=>{r!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(r),r=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{X.assertInAngularZone(),r??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var DD=(()=>{let t=class t{constructor(){this.appRef=m(Pn),this.taskService=m(Rn),this.ngZone=m(X),this.zonelessEnabled=m(ol),this.disableScheduling=m(rm,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new ee,this.cancelScheduledCallback=null,this.shouldRefreshViews=!1,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof ia||!this.zoneIsDefined)}notify(r){if(!this.zonelessEnabled&&r===5)return;switch(r){case 3:case 2:case 0:case 4:case 5:case 1:{this.shouldRefreshViews=!0;break}case 8:case 7:case 6:case 9:default:}if(!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Wf:im;this.pendingRenderTaskId=this.taskService.add(),this.zoneIsDefined?Zone.root.run(()=>{this.cancelScheduledCallback=i(()=>{this.tick(this.shouldRefreshViews)})}):this.cancelScheduledCallback=i(()=>{this.tick(this.shouldRefreshViews)})}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&X.isInAngularZone())}tick(r){if(this.runningTick||this.appRef.destroyed)return;let i=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick(r)},void 0,this.schedulerTickApplyArgs)}catch(o){throw this.taskService.remove(i),o}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Wf(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(i)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.shouldRefreshViews=!1,this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let r=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(r)}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function ID(){return typeof $localize<"u"&&$localize.locale||Qi}var dl=new k("",{providedIn:"root",factory:()=>m(dl,N.Optional|N.SkipSelf)||ID()});var _m=new k("");var Ti=null;function CD(e=[],t){return Gt.create({name:t,providers:[{provide:to,useValue:"platform"},{provide:_m,useValue:new Set([()=>Ti=null])},...e]})}function ED(e=[]){if(Ti)return Ti;let t=CD(e);return Ti=t,fD(),_D(t),t}function _D(e){e.get(Ga,null)?.forEach(n=>n())}var Tt=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=xD;let e=t;return e})();function xD(e){return SD(Se(),H(),(e&16)===16)}function SD(e,t,n){if(ro(e)&&!n){let r=St(e.index,t);return new qt(r,r)}else if(e.type&47){let r=t[Ge];return new qt(r,t)}return null}function xm(e){try{let{rootComponent:t,appProviders:n,platformProviders:r}=e,i=ED(r),o=[Im({}),{provide:fr,useExisting:DD},...n||[]],a=new Gi({providers:o,parent:i,debugName:"",runEnvironmentInitializers:!1}).injector,l=a.get(X);return l.run(()=>{a.resolveInjectorInitializers();let u=a.get(ut,null),c;l.runOutsideAngular(()=>{c=l.onError.subscribe({next:f=>{u.handleError(f)}})});let d=()=>a.destroy(),p=i.get(_m);return p.add(d),a.onDestroy(()=>{c.unsubscribe(),p.delete(d)}),mD(u,l,()=>{let f=a.get(Dm);return f.runInitializers(),f.donePromise.then(()=>{let g=a.get(dl,Qi);tD(g||Qi);let b=a.get(Pn);return t!==void 0&&b.bootstrap(t),b})})})}catch(t){return Promise.reject(t)}}function nt(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function kr(e,t=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):t}var km=null;function Fn(){return km}function Am(e){km??=e}var Io=class{};var Ve=new k(""),jm=(()=>{let t=class t{historyGo(r){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>m(MD),providedIn:"platform"});let e=t;return e})();var MD=(()=>{let t=class t extends jm{constructor(){super(),this._doc=m(Ve),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Fn().getBaseHref(this._doc)}onPopState(r){let i=Fn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",r,!1),()=>i.removeEventListener("popstate",r)}onHashChange(r){let i=Fn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",r,!1),()=>i.removeEventListener("hashchange",r)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(r){this._location.pathname=r}pushState(r,i,o){this._history.pushState(r,i,o)}replaceState(r,i,o){this._history.replaceState(r,i,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(r=0){this._history.go(r)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Nm(e,t){if(e.length==0)return t;if(t.length==0)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,n==2?e+t.substring(1):n==1?e+t:e+"/"+t}function Sm(e){let t=e.match(/#|\?|$/),n=t&&t.index||e.length,r=n-(e[n-1]==="/"?1:0);return e.slice(0,r)+e.slice(n)}function Xt(e){return e&&e[0]!=="?"?"?"+e:e}var Ln=(()=>{let t=class t{historyGo(r){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>m(Rm),providedIn:"root"});let e=t;return e})(),TD=new k(""),Rm=(()=>{let t=class t extends Ln{constructor(r,i){super(),this._platformLocation=r,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??m(Ve).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(r){this._removeListenerFns.push(this._platformLocation.onPopState(r),this._platformLocation.onHashChange(r))}getBaseHref(){return this._baseHref}prepareExternalUrl(r){return Nm(this._baseHref,r)}path(r=!1){let i=this._platformLocation.pathname+Xt(this._platformLocation.search),o=this._platformLocation.hash;return o&&r?`${i}${o}`:i}pushState(r,i,o,s){let a=this.prepareExternalUrl(o+Xt(s));this._platformLocation.pushState(r,i,a)}replaceState(r,i,o,s){let a=this.prepareExternalUrl(o+Xt(s));this._platformLocation.replaceState(r,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(r=0){this._platformLocation.historyGo?.(r)}};t.\u0275fac=function(i){return new(i||t)(F(jm),F(TD,8))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ar=(()=>{let t=class t{constructor(r){this._subject=new de,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=r;let i=this._locationStrategy.getBaseHref();this._basePath=jD(Sm(Mm(i))),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(r=!1){return this.normalize(this._locationStrategy.path(r))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(r,i=""){return this.path()==this.normalize(r+Xt(i))}normalize(r){return t.stripTrailingSlash(AD(this._basePath,Mm(r)))}prepareExternalUrl(r){return r&&r[0]!=="/"&&(r="/"+r),this._locationStrategy.prepareExternalUrl(r)}go(r,i="",o=null){this._locationStrategy.pushState(o,"",r,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(r+Xt(i)),o)}replaceState(r,i="",o=null){this._locationStrategy.replaceState(o,"",r,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(r+Xt(i)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(r=0){this._locationStrategy.historyGo?.(r)}onUrlChange(r){return this._urlChangeListeners.push(r),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(r);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(r="",i){this._urlChangeListeners.forEach(o=>o(r,i))}subscribe(r,i,o){return this._subject.subscribe({next:r,error:i,complete:o})}};t.normalizeQueryParams=Xt,t.joinWithSlash=Nm,t.stripTrailingSlash=Sm,t.\u0275fac=function(i){return new(i||t)(F(Ln))},t.\u0275prov=S({token:t,factory:()=>kD(),providedIn:"root"});let e=t;return e})();function kD(){return new Ar(F(Ln))}function AD(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Mm(e){return e.replace(/\/index.html$/,"")}function jD(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}function Om(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[i,o]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(i.trim()===t)return decodeURIComponent(o)}return null}var ml="browser",ND="server";function Pm(e){return e===ml}function gl(e){return e===ND}var Co=class{};var wl=class extends Io{constructor(){super(...arguments),this.supportsDOMEvents=!0}},bl=class e extends wl{static makeCurrent(){Am(new e)}onAndCancel(t,n,r){return t.addEventListener(n,r),()=>{t.removeEventListener(n,r)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=PD();return n==null?null:FD(n)}resetBaseElement(){jr=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Om(document.cookie,t)}},jr=null;function PD(){return jr=jr||document.querySelector("base"),jr?jr.getAttribute("href"):null}function FD(e){return new URL(e,document.baseURI).pathname}var LD=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Dl=new k(""),Bm=(()=>{let t=class t{constructor(r,i){this._zone=i,this._eventNameToPlugin=new Map,r.forEach(o=>{o.manager=this}),this._plugins=r.slice().reverse()}addEventListener(r,i,o){return this._findPluginFor(i).addEventListener(r,i,o)}getZone(){return this._zone}_findPluginFor(r){let i=this._eventNameToPlugin.get(r);if(i)return i;if(i=this._plugins.find(s=>s.supports(r)),!i)throw new E(5101,!1);return this._eventNameToPlugin.set(r,i),i}};t.\u0275fac=function(i){return new(i||t)(F(Dl),F(X))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Eo=class{constructor(t){this._doc=t}},yl="ng-app-id",$m=(()=>{let t=class t{constructor(r,i,o,s={}){this.doc=r,this.appId=i,this.nonce=o,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=gl(s),this.resetHostNodes()}addStyles(r){for(let i of r)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(r){for(let i of r)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let r=this.styleNodesInDOM;r&&(r.forEach(i=>i.remove()),r.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(r){this.hostNodes.add(r);for(let i of this.getAllStyles())this.addStyleToHost(r,i)}removeHost(r){this.hostNodes.delete(r)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(r){for(let i of this.hostNodes)this.addStyleToHost(i,r)}onStyleRemoved(r){let i=this.styleRef;i.get(r)?.elements?.forEach(o=>o.remove()),i.delete(r)}collectServerRenderedStyles(){let r=this.doc.head?.querySelectorAll(`style[${yl}="${this.appId}"]`);if(r?.length){let i=new Map;return r.forEach(o=>{o.textContent!=null&&i.set(o.textContent,o)}),i}return null}changeUsageCount(r,i){let o=this.styleRef;if(o.has(r)){let s=o.get(r);return s.usage+=i,s.usage}return o.set(r,{usage:i,elements:[]}),i}getStyleElement(r,i){let o=this.styleNodesInDOM,s=o?.get(i);if(s?.parentNode===r)return o.delete(i),s.removeAttribute(yl),s;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=i,this.platformIsServer&&a.setAttribute(yl,this.appId),r.appendChild(a),a}}addStyleToHost(r,i){let o=this.getStyleElement(r,i),s=this.styleRef,a=s.get(i)?.elements;a?a.push(o):s.set(i,{elements:[o],usage:1})}resetHostNodes(){let r=this.hostNodes;r.clear(),r.add(this.doc.head)}};t.\u0275fac=function(i){return new(i||t)(F(Ve),F(Wa),F(Dr,8),F(Mt))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),vl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Cl=/%COMP%/g,Hm="%COMP%",VD=`_nghost-${Hm}`,BD=`_ngcontent-${Hm}`,$D=!0,HD=new k("",{providedIn:"root",factory:()=>$D});function UD(e){return BD.replace(Cl,e)}function zD(e){return VD.replace(Cl,e)}function Um(e,t){return t.map(n=>n.replace(Cl,e))}var Fm=(()=>{let t=class t{constructor(r,i,o,s,a,l,u,c=null){this.eventManager=r,this.sharedStylesHost=i,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=l,this.ngZone=u,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=gl(l),this.defaultRenderer=new Nr(r,a,u,this.platformIsServer)}createRenderer(r,i){if(!r||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Je.ShadowDom&&(i=K(w({},i),{encapsulation:Je.Emulated}));let o=this.getOrCreateRenderer(r,i);return o instanceof _o?o.applyToHost(r):o instanceof Rr&&o.applyStyles(),o}getOrCreateRenderer(r,i){let o=this.rendererByCompId,s=o.get(i.id);if(!s){let a=this.doc,l=this.ngZone,u=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(i.encapsulation){case Je.Emulated:s=new _o(u,c,i,this.appId,d,a,l,p);break;case Je.ShadowDom:return new Il(u,c,r,i,a,l,this.nonce,p);default:s=new Rr(u,c,i,d,a,l,p);break}o.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(i){return new(i||t)(F(Bm),F($m),F(Wa),F(HD),F(Ve),F(Mt),F(X),F(Dr))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Nr=class{constructor(t,n,r,i){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=i,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,n){return n?this.doc.createElementNS(vl[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Lm(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(Lm(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new E(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,i){if(i){n=i+":"+n;let o=vl[i];o?t.setAttributeNS(o,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let i=vl[r];i?t.removeAttributeNS(i,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,i){i&(ct.DashCase|ct.Important)?t.style.setProperty(n,r,i&ct.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&ct.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r){if(typeof t=="string"&&(t=Fn().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${n}`);return this.eventManager.addEventListener(t,n,this.decoratePreventDefault(r))}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(n)):t(n))===!1&&n.preventDefault()}}};function Lm(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Il=class extends Nr{constructor(t,n,r,i,o,s,a,l){super(t,o,s,l),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=Um(i.id,i.styles);for(let c of u){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=c,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Rr=class extends Nr{constructor(t,n,r,i,o,s,a,l){super(t,o,s,a),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=i,this.styles=l?Um(l,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},_o=class extends Rr{constructor(t,n,r,i,o,s,a,l){let u=i+"-"+r.id;super(t,n,r,o,s,a,l,u),this.contentAttr=UD(u),this.hostAttr=zD(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}},WD=(()=>{let t=class t extends Eo{constructor(r){super(r)}supports(r){return!0}addEventListener(r,i,o){return r.addEventListener(i,o,!1),()=>this.removeEventListener(r,i,o)}removeEventListener(r,i,o){return r.removeEventListener(i,o)}};t.\u0275fac=function(i){return new(i||t)(F(Ve))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Vm=["alt","control","meta","shift"],GD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},YD={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},qD=(()=>{let t=class t extends Eo{constructor(r){super(r)}supports(r){return t.parseEventName(r)!=null}addEventListener(r,i,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Fn().onAndCancel(r,s.domEventName,a))}static parseEventName(r){let i=r.toLowerCase().split("."),o=i.shift();if(i.length===0||!(o==="keydown"||o==="keyup"))return null;let s=t._normalizeKey(i.pop()),a="",l=i.indexOf("code");if(l>-1&&(i.splice(l,1),a="code."),Vm.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=s,i.length!=0||s.length===0)return null;let u={};return u.domEventName=o,u.fullKey=a,u}static matchEventFullKeyCode(r,i){let o=GD[r.key]||r.key,s="";return i.indexOf("code.")>-1&&(o=r.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Vm.forEach(a=>{if(a!==o){let l=YD[a];l(r)&&(s+=a+".")}}),s+=o,s===i)}static eventCallback(r,i,o){return s=>{t.matchEventFullKeyCode(s,r)&&o.runGuarded(()=>i(s))}}static _normalizeKey(r){return r==="esc"?"escape":r}};t.\u0275fac=function(i){return new(i||t)(F(Ve))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})();function zm(e,t){return xm(w({rootComponent:e},ZD(t)))}function ZD(e){return{appProviders:[...eI,...e?.providers??[]],platformProviders:XD}}function QD(){bl.makeCurrent()}function KD(){return new ut}function JD(){return bh(document),document}var XD=[{provide:Mt,useValue:ml},{provide:Ga,useValue:QD,multi:!0},{provide:Ve,useFactory:JD,deps:[]}];var eI=[{provide:to,useValue:"root"},{provide:ut,useFactory:KD,deps:[]},{provide:Dl,useClass:WD,multi:!0,deps:[Ve,X,Mt]},{provide:Dl,useClass:qD,multi:!0,deps:[Ve]},Fm,$m,Bm,{provide:kn,useExisting:Fm},{provide:Co,useClass:LD,deps:[]},[]];var De=(()=>{let t=class t{constructor(r){this._doc=r}getTitle(){return this._doc.title}setTitle(r){this._doc.title=r||""}};t.\u0275fac=function(i){return new(i||t)(F(Ve))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var j="primary",Kr=Symbol("RouteTitle"),Ml=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function zn(e){return new Ml(e)}function tI(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let i={};for(let o=0;o<r.length;o++){let s=r[o],a=e[o];if(s[0]===":")i[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:i}}function nI(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!rt(e[n],t[n]))return!1;return!0}function rt(e,t){let n=e?Tl(e):void 0,r=t?Tl(t):void 0;if(!n||!r||n.length!=r.length)return!1;let i;for(let o=0;o<n.length;o++)if(i=n[o],!Jm(e[i],t[i]))return!1;return!0}function Tl(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Jm(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((i,o)=>r[o]===i)}else return e===t}function Xm(e){return e.length>0?e[e.length-1]:null}function jt(e){return ms(e)?e:Tr(e)?te(Promise.resolve(e)):I(e)}var rI={exact:tg,subset:ng},eg={exact:iI,subset:oI,ignored:()=>!0};function Wm(e,t,n){return rI[n.paths](e.root,t.root,n.matrixParams)&&eg[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function iI(e,t){return rt(e,t)}function tg(e,t,n){if(!tn(e.segments,t.segments)||!Mo(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!tg(e.children[r],t.children[r],n))return!1;return!0}function oI(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>Jm(e[n],t[n]))}function ng(e,t,n){return rg(e,t,t.segments,n)}function rg(e,t,n,r){if(e.segments.length>n.length){let i=e.segments.slice(0,n.length);return!(!tn(i,n)||t.hasChildren()||!Mo(i,n,r))}else if(e.segments.length===n.length){if(!tn(e.segments,n)||!Mo(e.segments,n,r))return!1;for(let i in t.children)if(!e.children[i]||!ng(e.children[i],t.children[i],r))return!1;return!0}else{let i=n.slice(0,e.segments.length),o=n.slice(e.segments.length);return!tn(e.segments,i)||!Mo(e.segments,i,r)||!e.children[j]?!1:rg(e.children[j],t,o,r)}}function Mo(e,t,n){return t.every((r,i)=>eg[n](e[i].parameters,r.parameters))}var At=class{constructor(t=new G([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=zn(this.queryParams),this._queryParamMap}toString(){return lI.serialize(this)}},G=class{constructor(t,n){this.segments=t,this.children=n,this.parent=null,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return To(this)}},en=class{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=zn(this.parameters),this._parameterMap}toString(){return og(this)}};function sI(e,t){return tn(e,t)&&e.every((n,r)=>rt(n.parameters,t[r].parameters))}function tn(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function aI(e,t){let n=[];return Object.entries(e.children).forEach(([r,i])=>{r===j&&(n=n.concat(t(i,r)))}),Object.entries(e.children).forEach(([r,i])=>{r!==j&&(n=n.concat(t(i,r)))}),n}var tu=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>new $r,providedIn:"root"});let e=t;return e})(),$r=class{parse(t){let n=new Al(t);return new At(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${Or(t.root,!0)}`,r=dI(t.queryParams),i=typeof t.fragment=="string"?`#${uI(t.fragment)}`:"";return`${n}${r}${i}`}},lI=new $r;function To(e){return e.segments.map(t=>og(t)).join("/")}function Or(e,t){if(!e.hasChildren())return To(e);if(t){let n=e.children[j]?Or(e.children[j],!1):"",r=[];return Object.entries(e.children).forEach(([i,o])=>{i!==j&&r.push(`${i}:${Or(o,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=aI(e,(r,i)=>i===j?[Or(e.children[j],!1)]:[`${i}:${Or(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[j]!=null?`${To(e)}/${n[0]}`:`${To(e)}/(${n.join("//")})`}}function ig(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function xo(e){return ig(e).replace(/%3B/gi,";")}function uI(e){return encodeURI(e)}function kl(e){return ig(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ko(e){return decodeURIComponent(e)}function Gm(e){return ko(e.replace(/\+/g,"%20"))}function og(e){return`${kl(e.path)}${cI(e.parameters)}`}function cI(e){return Object.entries(e).map(([t,n])=>`;${kl(t)}=${kl(n)}`).join("")}function dI(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(i=>`${xo(n)}=${xo(i)}`).join("&"):`${xo(n)}=${xo(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var fI=/^[^\/()?;#]+/;function El(e){let t=e.match(fI);return t?t[0]:""}var pI=/^[^\/()?;=#]+/;function hI(e){let t=e.match(pI);return t?t[0]:""}var mI=/^[^=?&#]+/;function gI(e){let t=e.match(mI);return t?t[0]:""}var yI=/^[^&#]+/;function vI(e){let t=e.match(yI);return t?t[0]:""}var Al=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new G([],{}):new G([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[j]=new G(t,n)),r}parseSegment(){let t=El(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(t),new en(ko(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=hI(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let i=El(this.remaining);i&&(r=i,this.capture(r))}t[ko(n)]=ko(r)}parseQueryParam(t){let n=gI(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=vI(this.remaining);s&&(r=s,this.capture(r))}let i=Gm(n),o=Gm(r);if(t.hasOwnProperty(i)){let s=t[i];Array.isArray(s)||(s=[s],t[i]=s),s.push(o)}else t[i]=o}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=El(this.remaining),i=this.remaining[r.length];if(i!=="/"&&i!==")"&&i!==";")throw new E(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):t&&(o=j);let s=this.parseChildren();n[o]=Object.keys(s).length===1?s[j]:new G([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new E(4011,!1)}};function sg(e){return e.segments.length>0?new G([],{[j]:e}):e}function ag(e){let t={};for(let[r,i]of Object.entries(e.children)){let o=ag(i);if(r===j&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))t[s]=a;else(o.segments.length>0||o.hasChildren())&&(t[r]=o)}let n=new G(e.segments,t);return wI(n)}function wI(e){if(e.numberOfChildren===1&&e.children[j]){let t=e.children[j];return new G(e.segments.concat(t.segments),t.children)}return e}function Hr(e){return e instanceof At}function bI(e,t,n=null,r=null){let i=lg(e);return ug(i,t,n,r)}function lg(e){let t;function n(o){let s={};for(let l of o.children){let u=n(l);s[l.outlet]=u}let a=new G(o.url,s);return o===e&&(t=a),a}let r=n(e.root),i=sg(r);return t??i}function ug(e,t,n,r){let i=e;for(;i.parent;)i=i.parent;if(t.length===0)return _l(i,i,i,n,r);let o=DI(t);if(o.toRoot())return _l(i,i,new G([],{}),n,r);let s=II(o,i,e),a=s.processChildren?Lr(s.segmentGroup,s.index,o.commands):dg(s.segmentGroup,s.index,o.commands);return _l(i,s.segmentGroup,a,n,r)}function Ao(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Ur(e){return typeof e=="object"&&e!=null&&e.outlets}function _l(e,t,n,r,i){let o={};r&&Object.entries(r).forEach(([l,u])=>{o[l]=Array.isArray(u)?u.map(c=>`${c}`):`${u}`});let s;e===t?s=n:s=cg(e,t,n);let a=sg(ag(s));return new At(a,o,i)}function cg(e,t,n){let r={};return Object.entries(e.children).forEach(([i,o])=>{o===t?r[i]=n:r[i]=cg(o,t,n)}),new G(e.segments,r)}var jo=class{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Ao(r[0]))throw new E(4003,!1);let i=r.find(Ur);if(i&&i!==Xm(r))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function DI(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new jo(!0,0,e);let t=0,n=!1,r=e.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,u])=>{a[l]=typeof u=="string"?u.split("/"):u}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?n=!0:a===".."?t++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new jo(n,t,r)}var $n=class{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function II(e,t,n){if(e.isAbsolute)return new $n(t,!0,0);if(!n)return new $n(t,!1,NaN);if(n.parent===null)return new $n(n,!0,0);let r=Ao(e.commands[0])?0:1,i=n.segments.length-1+r;return CI(n,i,e.numberOfDoubleDots)}function CI(e,t,n){let r=e,i=t,o=n;for(;o>i;){if(o-=i,r=r.parent,!r)throw new E(4005,!1);i=r.segments.length}return new $n(r,!1,i-o)}function EI(e){return Ur(e[0])?e[0].outlets:{[j]:e}}function dg(e,t,n){if(e??=new G([],{}),e.segments.length===0&&e.hasChildren())return Lr(e,t,n);let r=_I(e,t,n),i=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let o=new G(e.segments.slice(0,r.pathIndex),{});return o.children[j]=new G(e.segments.slice(r.pathIndex),e.children),Lr(o,0,i)}else return r.match&&i.length===0?new G(e.segments,{}):r.match&&!e.hasChildren()?jl(e,t,n):r.match?Lr(e,0,i):jl(e,t,n)}function Lr(e,t,n){if(n.length===0)return new G(e.segments,{});{let r=EI(n),i={};if(Object.keys(r).some(o=>o!==j)&&e.children[j]&&e.numberOfChildren===1&&e.children[j].segments.length===0){let o=Lr(e.children[j],t,n);return new G(e.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=dg(e.children[o],t,s))}),Object.entries(e.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new G(e.segments,i)}}function _I(e,t,n){let r=0,i=t,o={match:!1,pathIndex:0,commandIndex:0};for(;i<e.segments.length;){if(r>=n.length)return o;let s=e.segments[i],a=n[r];if(Ur(a))break;let l=`${a}`,u=r<n.length-1?n[r+1]:null;if(i>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!qm(l,u,s))return o;r+=2}else{if(!qm(l,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function jl(e,t,n){let r=e.segments.slice(0,t),i=0;for(;i<n.length;){let o=n[i];if(Ur(o)){let l=xI(o.outlets);return new G(r,l)}if(i===0&&Ao(n[0])){let l=e.segments[t];r.push(new en(l.path,Ym(n[0]))),i++;continue}let s=Ur(o)?o.outlets[j]:`${o}`,a=i<n.length-1?n[i+1]:null;s&&a&&Ao(a)?(r.push(new en(s,Ym(a))),i+=2):(r.push(new en(s,{})),i++)}return new G(r,{})}function xI(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=jl(new G([],{}),0,r))}),t}function Ym(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function qm(e,t,n){return e==n.path&&rt(t,n.parameters)}var Vr="imperative",ge=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(ge||{}),Be=class{constructor(t,n){this.id=t,this.url=n}},zr=class extends Be{constructor(t,n,r="imperative",i=null){super(t,n),this.type=ge.NavigationStart,this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},yt=class extends Be{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=ge.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Re=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(Re||{}),Nl=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Nl||{}),gt=class extends Be{constructor(t,n,r,i){super(t,n),this.reason=r,this.code=i,this.type=ge.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},nn=class extends Be{constructor(t,n,r,i){super(t,n),this.reason=r,this.code=i,this.type=ge.NavigationSkipped}},Wr=class extends Be{constructor(t,n,r,i){super(t,n),this.error=r,this.target=i,this.type=ge.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},No=class extends Be{constructor(t,n,r,i){super(t,n),this.urlAfterRedirects=r,this.state=i,this.type=ge.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rl=class extends Be{constructor(t,n,r,i){super(t,n),this.urlAfterRedirects=r,this.state=i,this.type=ge.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ol=class extends Be{constructor(t,n,r,i,o){super(t,n),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o,this.type=ge.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Pl=class extends Be{constructor(t,n,r,i){super(t,n),this.urlAfterRedirects=r,this.state=i,this.type=ge.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fl=class extends Be{constructor(t,n,r,i){super(t,n),this.urlAfterRedirects=r,this.state=i,this.type=ge.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ll=class{constructor(t){this.route=t,this.type=ge.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Vl=class{constructor(t){this.route=t,this.type=ge.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Bl=class{constructor(t){this.snapshot=t,this.type=ge.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$l=class{constructor(t){this.snapshot=t,this.type=ge.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hl=class{constructor(t){this.snapshot=t,this.type=ge.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ul=class{constructor(t){this.snapshot=t,this.type=ge.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Gr=class{},Wn=class{constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};var zl=class{constructor(t){this.injector=t,this.outlet=null,this.route=null,this.children=new Bo(this.injector),this.attachRef=null}},Bo=(()=>{let t=class t{constructor(r){this.parentInjector=r,this.contexts=new Map}onChildOutletCreated(r,i){let o=this.getOrCreateContext(r);o.outlet=i,this.contexts.set(r,o)}onChildOutletDestroyed(r){let i=this.getContext(r);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let r=this.contexts;return this.contexts=new Map,r}onOutletReAttached(r){this.contexts=r}getOrCreateContext(r){let i=this.getContext(r);return i||(i=new zl(this.parentInjector),this.contexts.set(r,i)),i}getContext(r){return this.contexts.get(r)||null}};t.\u0275fac=function(i){return new(i||t)(F(Fe))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Ro=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=Wl(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=Wl(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=Gl(t,this._root);return n.length<2?[]:n[n.length-2].children.map(i=>i.value).filter(i=>i!==t)}pathFromRoot(t){return Gl(t,this._root).map(n=>n.value)}};function Wl(e,t){if(e===t.value)return t;for(let n of t.children){let r=Wl(e,n);if(r)return r}return null}function Gl(e,t){if(e===t.value)return[t];for(let n of t.children){let r=Gl(e,n);if(r.length)return r.unshift(t),r}return[]}var Ne=class{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Bn(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var Oo=class extends Ro{constructor(t,n){super(t),this.snapshot=n,nu(this,t)}toString(){return this.snapshot.toString()}};function fg(e){let t=SI(e),n=new J([new en("",{})]),r=new J({}),i=new J({}),o=new J({}),s=new J(""),a=new oe(n,r,o,s,i,j,e,t.root);return a.snapshot=t.root,new Oo(new Ne(a,[]),t)}function SI(e){let t={},n={},r={},i="",o=new Hn([],t,r,i,n,j,e,null,{});return new Fo("",new Ne(o,[]))}var oe=class{constructor(t,n,r,i,o,s,a,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(P(u=>u[Kr]))??I(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(P(t=>zn(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(P(t=>zn(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Po(e,t,n="emptyOnly"){let r,{routeConfig:i}=e;return t!==null&&(n==="always"||i?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:w(w({},t.params),e.params),data:w(w({},t.data),e.data),resolve:w(w(w(w({},e.data),t.data),i?.data),e._resolvedData)}:r={params:w({},e.params),data:w({},e.data),resolve:w(w({},e.data),e._resolvedData??{})},i&&hg(i)&&(r.resolve[Kr]=i.title),r}var Hn=class{get title(){return this.data?.[Kr]}constructor(t,n,r,i,o,s,a,l,u){this.url=t,this.params=n,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=zn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=zn(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},Fo=class extends Ro{constructor(t,n){super(n),this.url=t,nu(this,n)}toString(){return pg(this._root)}};function nu(e,t){t.value._routerState=e,t.children.forEach(n=>nu(e,n))}function pg(e){let t=e.children.length>0?` { ${e.children.map(pg).join(", ")} } `:"";return`${e.value}${t}`}function xl(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,rt(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),rt(t.params,n.params)||e.paramsSubject.next(n.params),nI(t.url,n.url)||e.urlSubject.next(n.url),rt(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Yl(e,t){let n=rt(e.params,t.params)&&sI(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||Yl(e.parent,t.parent))}function hg(e){return typeof e.title=="string"||e.title===null}var ru=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=j,this.activateEvents=new de,this.deactivateEvents=new de,this.attachEvents=new de,this.detachEvents=new de,this.parentContexts=m(Bo),this.location=m(On),this.changeDetector=m(Tt),this.inputBinder=m(iu,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(r){if(r.name){let{firstChange:i,previousValue:o}=r.name;if(i)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(r){return this.parentContexts.getContext(r)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let r=this.parentContexts.getContext(this.name);r?.route&&(r.attachRef?this.attach(r.attachRef,r.route):this.activateWith(r.route,r.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let r=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(r.instance),r}attach(r,i){this.activated=r,this._activatedRoute=i,this.location.insert(r.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(r.instance)}deactivate(){if(this.activated){let r=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(r)}}activateWith(r,i){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=r;let o=this.location,a=r.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,u=new ql(r,l,o.injector);this.activated=o.createComponent(a,{index:o.length,injector:u,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=yr({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[xt]});let e=t;return e})(),ql=class e{__ngOutletInjector(t){return new e(this.route,this.childContexts,t)}constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===oe?this.route:t===Bo?this.childContexts:this.parent.get(t,n)}},iu=new k("");function MI(e,t,n){let r=Yr(e,t._root,n?n._root:void 0);return new Oo(r,t)}function Yr(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let i=TI(e,t,n);return new Ne(r,i)}else{if(e.shouldAttach(t.value)){let o=e.retrieve(t.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Yr(e,a)),s}}let r=kI(t.value),i=t.children.map(o=>Yr(e,o));return new Ne(r,i)}}function TI(e,t,n){return t.children.map(r=>{for(let i of n.children)if(e.shouldReuseRoute(r.value,i.value.snapshot))return Yr(e,r,i);return Yr(e,r)})}function kI(e){return new oe(new J(e.url),new J(e.params),new J(e.queryParams),new J(e.fragment),new J(e.data),e.outlet,e.component,e)}var qr=class{constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},mg="ngNavigationCancelingError";function Lo(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=Hr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,i=gg(!1,Re.Redirect);return i.url=n,i.navigationBehaviorOptions=r,i}function gg(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[mg]=!0,n.cancellationCode=t,n}function AI(e){return yg(e)&&Hr(e.url)}function yg(e){return!!e&&e[mg]}var jI=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=q({type:t,selectors:[["ng-component"]],standalone:!0,features:[Z],decls:1,vars:0,template:function(i,o){i&1&&Q(0,"router-outlet")},dependencies:[ru],encapsulation:2});let e=t;return e})();function NI(e,t){return e.providers&&!e._injector&&(e._injector=ll(e.providers,t,`Route: ${e.path}`)),e._injector??t}function ou(e){let t=e.children&&e.children.map(ou),n=t?K(w({},e),{children:t}):w({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==j&&(n.component=jI),n}function qe(e){return e.outlet||j}function RI(e,t){let n=e.filter(r=>qe(r)===t);return n.push(...e.filter(r=>qe(r)!==t)),n}function Jr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var OI=(e,t,n,r)=>P(i=>(new Zl(t,i.targetRouterState,i.currentRouterState,n,r).activate(e),i)),Zl=class{constructor(t,n,r,i,o){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),xl(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let i=Bn(n);t.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(t,n,r){let i=t.value,o=n?n.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else o&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),i=r&&t.value.component?r.children:n,o=Bn(t);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),i=r&&t.value.component?r.children:n,o=Bn(t);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let i=Bn(n);t.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new Ul(o.value.snapshot))}),t.children.length&&this.forwardEvent(new $l(t.value.snapshot))}activateRoutes(t,n,r){let i=t.value,o=n?n.value:null;if(xl(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),xl(a.route.value),this.activateChildRoutes(t,null,s.children)}else{let a=Jr(i.snapshot);s.attachRef=null,s.route=i,s.injector=a??s.injector,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(t,null,s.children)}}else this.activateChildRoutes(t,null,r)}},Vo=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Un=class{constructor(t,n){this.component=t,this.route=n}};function PI(e,t,n){let r=e._root,i=t?t._root:null;return Pr(r,i,n,[r.value])}function FI(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function Yn(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!ap(e)?e:t.get(e):r}function Pr(e,t,n,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=Bn(t);return e.children.forEach(s=>{LI(s,o[s.value.outlet],n,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Br(a,n.getContext(s),i)),i}function LI(e,t,n,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=VI(s,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Vo(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Pr(e,t,a?a.children:null,r,i):Pr(e,t,n,r,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Un(a.outlet.component,s))}else s&&Br(t,a,i),i.canActivateChecks.push(new Vo(r)),o.component?Pr(e,null,a?a.children:null,r,i):Pr(e,null,n,r,i);return i}function VI(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!tn(e.url,t.url);case"pathParamsOrQueryParamsChange":return!tn(e.url,t.url)||!rt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Yl(e,t)||!rt(e.queryParams,t.queryParams);case"paramsChange":default:return!Yl(e,t)}}function Br(e,t,n){let r=Bn(e),i=e.value;Object.entries(r).forEach(([o,s])=>{i.component?t?Br(s,t.children.getContext(o),n):Br(s,null,n):Br(s,t,n)}),i.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new Un(t.outlet.component,i)):n.canDeactivateChecks.push(new Un(null,i)):n.canDeactivateChecks.push(new Un(null,i))}function Xr(e){return typeof e=="function"}function BI(e){return typeof e=="boolean"}function $I(e){return e&&Xr(e.canLoad)}function HI(e){return e&&Xr(e.canActivate)}function UI(e){return e&&Xr(e.canActivateChild)}function zI(e){return e&&Xr(e.canDeactivate)}function WI(e){return e&&Xr(e.canMatch)}function vg(e){return e instanceof st||e?.name==="EmptyError"}var So=Symbol("INITIAL_VALUE");function Gn(){return Ae(e=>vi(e.map(t=>t.pipe(at(1),ws(So)))).pipe(P(t=>{for(let n of t)if(n!==!0){if(n===So)return So;if(n===!1||GI(n))return n}return!0}),Ue(t=>t!==So),at(1)))}function GI(e){return Hr(e)||e instanceof qr}function YI(e,t){return ie(n=>{let{targetSnapshot:r,currentSnapshot:i,guards:{canActivateChecks:o,canDeactivateChecks:s}}=n;return s.length===0&&o.length===0?I(K(w({},n),{guardsResult:!0})):qI(s,r,i,e).pipe(ie(a=>a&&BI(a)?ZI(r,o,e,t):I(a)),P(a=>K(w({},n),{guardsResult:a})))})}function qI(e,t,n,r){return te(e).pipe(ie(i=>eC(i.component,i.route,n,t,r)),Ze(i=>i!==!0,!0))}function ZI(e,t,n,r){return te(t).pipe(gn(i=>mn(KI(i.route.parent,r),QI(i.route,r),XI(e,i.path,n),JI(e,i.route,n))),Ze(i=>i!==!0,!0))}function QI(e,t){return e!==null&&t&&t(new Hl(e)),I(!0)}function KI(e,t){return e!==null&&t&&t(new Bl(e)),I(!0)}function JI(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return I(!0);let i=r.map(o=>wi(()=>{let s=Jr(t)??n,a=Yn(o,s),l=HI(a)?a.canActivate(t,e):dt(s,()=>a(t,e));return jt(l).pipe(Ze())}));return I(i).pipe(Gn())}function XI(e,t,n){let r=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(s=>FI(s)).filter(s=>s!==null).map(s=>wi(()=>{let a=s.guards.map(l=>{let u=Jr(s.node)??n,c=Yn(l,u),d=UI(c)?c.canActivateChild(r,e):dt(u,()=>c(r,e));return jt(d).pipe(Ze())});return I(a).pipe(Gn())}));return I(o).pipe(Gn())}function eC(e,t,n,r,i){let o=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!o||o.length===0)return I(!0);let s=o.map(a=>{let l=Jr(t)??i,u=Yn(a,l),c=zI(u)?u.canDeactivate(e,t,n,r):dt(l,()=>u(e,t,n,r));return jt(c).pipe(Ze())});return I(s).pipe(Gn())}function tC(e,t,n,r){let i=t.canLoad;if(i===void 0||i.length===0)return I(!0);let o=i.map(s=>{let a=Yn(s,e),l=$I(a)?a.canLoad(t,n):dt(e,()=>a(t,n));return jt(l)});return I(o).pipe(Gn(),wg(r))}function wg(e){return ds(ce(t=>{if(typeof t!="boolean")throw Lo(e,t)}),P(t=>t===!0))}function nC(e,t,n,r){let i=t.canMatch;if(!i||i.length===0)return I(!0);let o=i.map(s=>{let a=Yn(s,e),l=WI(a)?a.canMatch(t,n):dt(e,()=>a(t,n));return jt(l)});return I(o).pipe(Gn(),wg(r))}var Zr=class{constructor(t){this.segmentGroup=t||null}},Qr=class extends Error{constructor(t){super(),this.urlTree=t}};function Vn(e){return pn(new Zr(e))}function rC(e){return pn(new E(4e3,!1))}function iC(e){return pn(gg(!1,Re.GuardRejected))}var Ql=class{constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],i=n.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return I(r);if(i.numberOfChildren>1||!i.children[j])return rC(`${t.redirectTo}`);i=i.children[j]}}applyRedirectCommands(t,n,r,i,o){if(typeof n!="string"){let a=n,{queryParams:l,fragment:u,routeConfig:c,url:d,outlet:p,params:f,data:g,title:b}=i,B=dt(o,()=>a({params:f,data:g,queryParams:l,fragment:u,routeConfig:c,url:d,outlet:p,title:b}));if(B instanceof At)throw new Qr(B);n=B}let s=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r);if(n[0]==="/")throw new Qr(s);return s}applyRedirectCreateUrlTree(t,n,r,i){let o=this.createSegmentGroup(t,n.root,r,i);return new At(o,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);r[i]=n[a]}else r[i]=o}),r}createSegmentGroup(t,n,r,i){let o=this.createSegments(t,n.segments,r,i),s={};return Object.entries(n.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(t,l,r,i)}),new G(o,s)}createSegments(t,n,r,i){return n.map(o=>o.path[0]===":"?this.findPosParam(t,o,i):this.findOrReturn(o,r))}findPosParam(t,n,r){let i=r[n.path.substring(1)];if(!i)throw new E(4001,!1);return i}findOrReturn(t,n){let r=0;for(let i of n){if(i.path===t.path)return n.splice(r),i;r++}return t}},Kl={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function oC(e,t,n,r,i){let o=su(e,t,n);return o.matched?(r=NI(t,r),nC(r,t,n,i).pipe(P(s=>s===!0?o:w({},Kl)))):I(o)}function su(e,t,n){if(t.path==="**")return sC(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?w({},Kl):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let i=(t.matcher||tI)(n,e,t);if(!i)return w({},Kl);let o={};Object.entries(i.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=i.consumed.length>0?w(w({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function sC(e){return{matched:!0,parameters:e.length>0?Xm(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Zm(e,t,n,r){return n.length>0&&uC(e,n,r)?{segmentGroup:new G(t,lC(r,new G(n,e.children))),slicedSegments:[]}:n.length===0&&cC(e,n,r)?{segmentGroup:new G(e.segments,aC(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new G(e.segments,e.children),slicedSegments:n}}function aC(e,t,n,r){let i={};for(let o of n)if($o(e,t,o)&&!r[qe(o)]){let s=new G([],{});i[qe(o)]=s}return w(w({},r),i)}function lC(e,t){let n={};n[j]=t;for(let r of e)if(r.path===""&&qe(r)!==j){let i=new G([],{});n[qe(r)]=i}return n}function uC(e,t,n){return n.some(r=>$o(e,t,r)&&qe(r)!==j)}function cC(e,t,n){return n.some(r=>$o(e,t,r))}function $o(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function dC(e,t,n,r){return qe(e)!==r&&(r===j||!$o(t,n,e))?!1:su(t,e,n).matched}function fC(e,t,n){return t.length===0&&!e.children[n]}var Jl=class{};function pC(e,t,n,r,i,o,s="emptyOnly"){return new Xl(e,t,n,r,i,s,o).recognize()}var hC=31,Xl=class{constructor(t,n,r,i,o,s,a){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Ql(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new E(4002,`'${t.segmentGroup}'`)}recognize(){let t=Zm(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(P(({children:n,rootSnapshot:r})=>{let i=new Ne(r,n),o=new Fo("",i),s=bI(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(t){let n=new Hn([],Object.freeze({}),Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),j,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,j,n).pipe(P(r=>({children:r,rootSnapshot:n})),bt(r=>{if(r instanceof Qr)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Zr?this.noMatchError(r):r}))}processSegmentGroup(t,n,r,i,o){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r,o):this.processSegment(t,n,r,r.segments,i,!0,o).pipe(P(s=>s instanceof Ne?[s]:[]))}processChildren(t,n,r,i){let o=[];for(let s of Object.keys(r.children))s==="primary"?o.unshift(s):o.push(s);return te(o).pipe(gn(s=>{let a=r.children[s],l=RI(n,s);return this.processSegmentGroup(t,l,a,s,i)}),vs((s,a)=>(s.push(...a),s)),Dt(null),ys(),ie(s=>{if(s===null)return Vn(r);let a=bg(s);return mC(a),I(a)}))}processSegment(t,n,r,i,o,s,a){return te(n).pipe(gn(l=>this.processSegmentAgainstRoute(l._injector??t,n,l,r,i,o,s,a).pipe(bt(u=>{if(u instanceof Zr)return I(null);throw u}))),Ze(l=>!!l),bt(l=>{if(vg(l))return fC(r,i,o)?I(new Jl):Vn(r);throw l}))}processSegmentAgainstRoute(t,n,r,i,o,s,a,l){return dC(r,i,o,s)?r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,i,r,o,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,i,n,r,o,s,l):Vn(i):Vn(i)}expandSegmentAgainstRouteUsingRedirect(t,n,r,i,o,s,a){let{matched:l,parameters:u,consumedSegments:c,positionalParamSegments:d,remainingSegments:p}=su(n,i,o);if(!l)return Vn(n);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>hC&&(this.allowRedirects=!1));let f=new Hn(o,u,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Qm(i),qe(i),i.component??i._loadedComponent??null,i,Km(i)),g=Po(f,a,this.paramsInheritanceStrategy);f.params=Object.freeze(g.params),f.data=Object.freeze(g.data);let b=this.applyRedirects.applyRedirectCommands(c,i.redirectTo,d,f,t);return this.applyRedirects.lineralizeSegments(i,b).pipe(ie(B=>this.processSegment(t,r,n,B.concat(p),s,!1,a)))}matchSegmentAgainstRoute(t,n,r,i,o,s){let a=oC(n,r,i,t,this.urlSerializer);return r.path==="**"&&(n.children={}),a.pipe(Ae(l=>l.matched?(t=r._injector??t,this.getChildConfig(t,r,i).pipe(Ae(({routes:u})=>{let c=r._loadedInjector??t,{parameters:d,consumedSegments:p,remainingSegments:f}=l,g=new Hn(p,d,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Qm(r),qe(r),r.component??r._loadedComponent??null,r,Km(r)),b=Po(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(b.params),g.data=Object.freeze(b.data);let{segmentGroup:B,slicedSegments:z}=Zm(n,p,f,u);if(z.length===0&&B.hasChildren())return this.processChildren(c,u,B,g).pipe(P(re=>new Ne(g,re)));if(u.length===0&&z.length===0)return I(new Ne(g,[]));let ue=qe(r)===o;return this.processSegment(c,u,B,z,ue?j:o,!0,g).pipe(P(re=>new Ne(g,re instanceof Ne?[re]:[])))}))):Vn(n)))}getChildConfig(t,n,r){return n.children?I({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?I({routes:n._loadedRoutes,injector:n._loadedInjector}):tC(t,n,r,this.urlSerializer).pipe(ie(i=>i?this.configLoader.loadChildren(t,n).pipe(ce(o=>{n._loadedRoutes=o.routes,n._loadedInjector=o.injector})):iC(n))):I({routes:[],injector:t})}};function mC(e){e.sort((t,n)=>t.value.outlet===j?-1:n.value.outlet===j?1:t.value.outlet.localeCompare(n.value.outlet))}function gC(e){let t=e.value.routeConfig;return t&&t.path===""}function bg(e){let t=[],n=new Set;for(let r of e){if(!gC(r)){t.push(r);continue}let i=t.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),n.add(i)):t.push(r)}for(let r of n){let i=bg(r.children);t.push(new Ne(r.value,i))}return t.filter(r=>!n.has(r))}function Qm(e){return e.data||{}}function Km(e){return e.resolve||{}}function yC(e,t,n,r,i,o){return ie(s=>pC(e,t,n,r,s.extractedUrl,i,o).pipe(P(({state:a,tree:l})=>K(w({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function vC(e,t){return ie(n=>{let{targetSnapshot:r,guards:{canActivateChecks:i}}=n;if(!i.length)return I(n);let o=new Set(i.map(l=>l.route)),s=new Set;for(let l of o)if(!s.has(l))for(let u of Dg(l))s.add(u);let a=0;return te(s).pipe(gn(l=>o.has(l)?wC(l,r,e,t):(l.data=Po(l,l.parent,e).resolve,I(void 0))),ce(()=>a++),yn(1),ie(l=>a===s.size?I(n):ke))})}function Dg(e){let t=e.children.map(n=>Dg(n)).flat();return[e,...t]}function wC(e,t,n,r){let i=e.routeConfig,o=e._resolve;return i?.title!==void 0&&!hg(i)&&(o[Kr]=i.title),bC(o,e,t,r).pipe(P(s=>(e._resolvedData=s,e.data=Po(e,e.parent,n).resolve,null)))}function bC(e,t,n,r){let i=Tl(e);if(i.length===0)return I({});let o={};return te(i).pipe(ie(s=>DC(e[s],t,n,r).pipe(Ze(),ce(a=>{if(a instanceof qr)throw Lo(new $r,a);o[s]=a}))),yn(1),gs(o),bt(s=>vg(s)?ke:pn(s)))}function DC(e,t,n,r){let i=Jr(t)??r,o=Yn(e,i),s=o.resolve?o.resolve(t,n):dt(i,()=>o(t,n));return jt(s)}function Sl(e){return Ae(t=>{let n=e(t);return n?te(n).pipe(P(()=>t)):I(t)})}var Ig=(()=>{let t=class t{buildTitle(r){let i,o=r.root;for(;o!==void 0;)i=this.getResolvedTitleForRoute(o)??i,o=o.children.find(s=>s.outlet===j);return i}getResolvedTitleForRoute(r){return r.data[Kr]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>m(IC),providedIn:"root"});let e=t;return e})(),IC=(()=>{let t=class t extends Ig{constructor(r){super(),this.title=r}updateTitle(r){let i=this.buildTitle(r);i!==void 0&&this.title.setTitle(i)}};t.\u0275fac=function(i){return new(i||t)(F(De))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),au=new k("",{providedIn:"root",factory:()=>({})}),lu=new k(""),CC=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=m(cl)}loadComponent(r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return I(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=jt(r.loadComponent()).pipe(P(Cg),ce(s=>{this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s}),Kn(()=>{this.componentLoaders.delete(r)})),o=new fn(i,()=>new se).pipe(dn());return this.componentLoaders.set(r,o),o}loadChildren(r,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return I({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=EC(i,this.compiler,r,this.onLoadEndListener).pipe(Kn(()=>{this.childrenLoaders.delete(i)})),a=new fn(s,()=>new se).pipe(dn());return this.childrenLoaders.set(i,a),a}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function EC(e,t,n,r){return jt(e.loadChildren()).pipe(P(Cg),ie(i=>i instanceof hr||Array.isArray(i)?I(i):te(t.compileModuleAsync(i))),P(i=>{r&&r(e);let o,s,a=!1;return Array.isArray(i)?(s=i,a=!0):(o=i.create(n).injector,s=o.get(lu,[],{optional:!0,self:!0}).flat()),{routes:s.map(ou),injector:o}}))}function _C(e){return e&&typeof e=="object"&&"default"in e}function Cg(e){return _C(e)?e.default:e}var uu=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>m(xC),providedIn:"root"});let e=t;return e})(),xC=(()=>{let t=class t{shouldProcessUrl(r){return!0}extract(r){return r}merge(r,i){return r}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),SC=new k("");var MC=new k(""),TC=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new se,this.transitionAbortSubject=new se,this.configLoader=m(CC),this.environmentInjector=m(Fe),this.urlSerializer=m(tu),this.rootContexts=m(Bo),this.location=m(Ar),this.inputBindingEnabled=m(iu,{optional:!0})!==null,this.titleStrategy=m(Ig),this.options=m(au,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=m(uu),this.createViewTransition=m(SC,{optional:!0}),this.navigationErrorHandler=m(MC,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>I(void 0),this.rootComponentType=null;let r=o=>this.events.next(new Ll(o)),i=o=>this.events.next(new Vl(o));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=r}complete(){this.transitions?.complete()}handleNavigationRequest(r){let i=++this.navigationId;this.transitions?.next(K(w(w({},this.transitions.value),r),{id:i}))}setupNavigations(r,i,o){return this.transitions=new J({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Vr,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Ue(s=>s.id!==0),P(s=>K(w({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Ae(s=>{let a=!1,l=!1;return I(s).pipe(Ae(u=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Re.SupersededByNewNavigation),ke;this.currentTransition=s,this.currentNavigation={id:u.id,initialUrl:u.rawUrl,extractedUrl:u.extractedUrl,trigger:u.source,extras:u.extras,previousNavigation:this.lastSuccessfulNavigation?K(w({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!r.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=u.extras.onSameUrlNavigation??r.onSameUrlNavigation;if(!c&&d!=="reload"){let p="";return this.events.next(new nn(u.id,this.urlSerializer.serialize(u.rawUrl),p,Nl.IgnoredSameUrlNavigation)),u.resolve(!1),ke}if(this.urlHandlingStrategy.shouldProcessUrl(u.rawUrl))return I(u).pipe(Ae(p=>{let f=this.transitions?.getValue();return this.events.next(new zr(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),f!==this.transitions?.getValue()?ke:Promise.resolve(p)}),yC(this.environmentInjector,this.configLoader,this.rootComponentType,r.config,this.urlSerializer,this.paramsInheritanceStrategy),ce(p=>{s.targetSnapshot=p.targetSnapshot,s.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation=K(w({},this.currentNavigation),{finalUrl:p.urlAfterRedirects});let f=new No(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(u.currentRawUrl)){let{id:p,extractedUrl:f,source:g,restoredState:b,extras:B}=u,z=new zr(p,this.urlSerializer.serialize(f),g,b);this.events.next(z);let ue=fg(this.rootComponentType).snapshot;return this.currentTransition=s=K(w({},u),{targetSnapshot:ue,urlAfterRedirects:f,extras:K(w({},B),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,I(s)}else{let p="";return this.events.next(new nn(u.id,this.urlSerializer.serialize(u.extractedUrl),p,Nl.IgnoredByUrlHandlingStrategy)),u.resolve(!1),ke}}),ce(u=>{let c=new Rl(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(c)}),P(u=>(this.currentTransition=s=K(w({},u),{guards:PI(u.targetSnapshot,u.currentSnapshot,this.rootContexts)}),s)),YI(this.environmentInjector,u=>this.events.next(u)),ce(u=>{if(s.guardsResult=u.guardsResult,u.guardsResult&&typeof u.guardsResult!="boolean")throw Lo(this.urlSerializer,u.guardsResult);let c=new Ol(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot,!!u.guardsResult);this.events.next(c)}),Ue(u=>u.guardsResult?!0:(this.cancelNavigationTransition(u,"",Re.GuardRejected),!1)),Sl(u=>{if(u.guards.canActivateChecks.length)return I(u).pipe(ce(c=>{let d=new Pl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}),Ae(c=>{let d=!1;return I(c).pipe(vC(this.paramsInheritanceStrategy,this.environmentInjector),ce({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(c,"",Re.NoDataFromResolver)}}))}),ce(c=>{let d=new Fl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}))}),Sl(u=>{let c=d=>{let p=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&p.push(this.configLoader.loadComponent(d.routeConfig).pipe(ce(f=>{d.component=f}),P(()=>{})));for(let f of d.children)p.push(...c(f));return p};return vi(c(u.targetSnapshot.root)).pipe(Dt(null),at(1))}),Sl(()=>this.afterPreactivation()),Ae(()=>{let{currentSnapshot:u,targetSnapshot:c}=s,d=this.createViewTransition?.(this.environmentInjector,u.root,c.root);return d?te(d).pipe(P(()=>s)):I(s)}),P(u=>{let c=MI(r.routeReuseStrategy,u.targetSnapshot,u.currentRouterState);return this.currentTransition=s=K(w({},u),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,s}),ce(()=>{this.events.next(new Gr)}),OI(this.rootContexts,r.routeReuseStrategy,u=>this.events.next(u),this.inputBindingEnabled),at(1),ce({next:u=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new yt(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects))),this.titleStrategy?.updateTitle(u.targetRouterState.snapshot),u.resolve(!0)},complete:()=>{a=!0}}),Jn(this.transitionAbortSubject.pipe(ce(u=>{throw u}))),Kn(()=>{!a&&!l&&this.cancelNavigationTransition(s,"",Re.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),bt(u=>{if(l=!0,yg(u))this.events.next(new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),u.message,u.cancellationCode)),AI(u)?this.events.next(new Wn(u.url,u.navigationBehaviorOptions)):s.resolve(!1);else{let c=new Wr(s.id,this.urlSerializer.serialize(s.extractedUrl),u,s.targetSnapshot??void 0);try{let d=dt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof qr){let{message:p,cancellationCode:f}=Lo(this.urlSerializer,d);this.events.next(new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),p,f)),this.events.next(new Wn(d.redirectTo,d.navigationBehaviorOptions))}else{this.events.next(c);let p=r.errorHandler(u);s.resolve(!!p)}}catch(d){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(d)}}return ke}))}))}cancelNavigationTransition(r,i,o){let s=new gt(r.id,this.urlSerializer.serialize(r.extractedUrl),i,o);this.events.next(s),r.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function kC(e){return e!==Vr}var AC=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>m(jC),providedIn:"root"});let e=t;return e})(),eu=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},jC=(()=>{let t=class t extends eu{};t.\u0275fac=(()=>{let r;return function(o){return(r||(r=Ua(t)))(o||t)}})(),t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Eg=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:()=>m(NC),providedIn:"root"});let e=t;return e})(),NC=(()=>{let t=class t extends Eg{constructor(){super(...arguments),this.location=m(Ar),this.urlSerializer=m(tu),this.options=m(au,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=m(uu),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new At,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=fg(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(r){return this.location.subscribe(i=>{i.type==="popstate"&&r(i.url,i.state)})}handleRouterEvent(r,i){if(r instanceof zr)this.stateMemento=this.createStateMemento();else if(r instanceof nn)this.rawUrlTree=i.initialUrl;else if(r instanceof No){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(o,i)}}else r instanceof Gr?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,i))):r instanceof gt&&(r.code===Re.GuardRejected||r.code===Re.NoDataFromResolver)?this.restoreHistory(i):r instanceof Wr?this.restoreHistory(i,!0):r instanceof yt&&(this.lastSuccessfulId=r.id,this.currentPageId=this.browserPageId)}setBrowserUrl(r,i){let o=this.urlSerializer.serialize(r);if(this.location.isCurrentPathEqualTo(o)||i.extras.replaceUrl){let s=this.browserPageId,a=w(w({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(o,"",a)}else{let s=w(w({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(o,"",s)}}restoreHistory(r,i=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,s=this.currentPageId-o;s!==0?this.location.historyGo(s):this.currentUrlTree===r.finalUrl&&s===0&&(this.resetState(r),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(r),this.resetUrlToCurrentUrlTree())}resetState(r){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,r.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(r,i){return this.canceledNavigationResolution==="computed"?{navigationId:r,\u0275routerPageId:i}:{navigationId:r}}};t.\u0275fac=(()=>{let r;return function(o){return(r||(r=Ua(t)))(o||t)}})(),t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Fr=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(Fr||{});function RC(e,t){e.events.pipe(Ue(n=>n instanceof yt||n instanceof gt||n instanceof Wr||n instanceof nn),P(n=>n instanceof yt||n instanceof nn?Fr.COMPLETE:(n instanceof gt?n.code===Re.Redirect||n.code===Re.SupersededByNewNavigation:!1)?Fr.REDIRECTING:Fr.FAILED),Ue(n=>n!==Fr.REDIRECTING),at(1)).subscribe(()=>{t()})}function OC(e){throw e}var PC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},FC={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ho=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=m(Do),this.stateManager=m(Eg),this.options=m(au,{optional:!0})||{},this.pendingTasks=m(Rn),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=m(TC),this.urlSerializer=m(tu),this.location=m(Ar),this.urlHandlingStrategy=m(uu),this._events=new se,this.errorHandler=this.options.errorHandler||OC,this.navigated=!1,this.routeReuseStrategy=m(AC),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=m(lu,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!m(iu,{optional:!0}),this.eventsSubscription=new ee,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:r=>{this.console.warn(r)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let r=this.navigationTransitions.events.subscribe(i=>{try{let o=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(o!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof gt&&i.code!==Re.Redirect&&i.code!==Re.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof yt)this.navigated=!0;else if(i instanceof Wn){let a=i.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(i.url,o.currentRawUrl),u=w({info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||kC(o.source)},a);this.scheduleNavigation(l,Vr,null,u,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}VC(i)&&this._events.next(i)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(r)}resetRootComponentType(r){this.routerState.root.component=r,this.navigationTransitions.rootComponentType=r}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((r,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(r,"popstate",i)},0)})}navigateToSyncWithBrowser(r,i,o){let s={replaceUrl:!0},a=o?.navigationId?o:null;if(o){let u=w({},o);delete u.navigationId,delete u.\u0275routerPageId,Object.keys(u).length!==0&&(s.state=u)}let l=this.parseUrl(r);this.scheduleNavigation(l,i,a,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(r){this.config=r.map(ou),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(r,i={}){let{relativeTo:o,queryParams:s,fragment:a,queryParamsHandling:l,preserveFragment:u}=i,c=u?this.currentUrlTree.fragment:a,d=null;switch(l){case"merge":d=w(w({},this.currentUrlTree.queryParams),s);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=s||null}d!==null&&(d=this.removeEmptyProps(d));let p;try{let f=o?o.snapshot:this.routerState.snapshot.root;p=lg(f)}catch{(typeof r[0]!="string"||r[0][0]!=="/")&&(r=[]),p=this.currentUrlTree.root}return ug(p,r,d,c??null)}navigateByUrl(r,i={skipLocationChange:!1}){let o=Hr(r)?r:this.parseUrl(r),s=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(s,Vr,null,i)}navigate(r,i={skipLocationChange:!1}){return LC(r),this.navigateByUrl(this.createUrlTree(r,i),i)}serializeUrl(r){return this.urlSerializer.serialize(r)}parseUrl(r){try{return this.urlSerializer.parse(r)}catch{return this.urlSerializer.parse("/")}}isActive(r,i){let o;if(i===!0?o=w({},PC):i===!1?o=w({},FC):o=i,Hr(r))return Wm(this.currentUrlTree,r,o);let s=this.parseUrl(r);return Wm(this.currentUrlTree,s,o)}removeEmptyProps(r){return Object.entries(r).reduce((i,[o,s])=>(s!=null&&(i[o]=s),i),{})}scheduleNavigation(r,i,o,s,a){if(this.disposed)return Promise.resolve(!1);let l,u,c;a?(l=a.resolve,u=a.reject,c=a.promise):c=new Promise((p,f)=>{l=p,u=f});let d=this.pendingTasks.add();return RC(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:r,extras:s,resolve:l,reject:u,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(p=>Promise.reject(p))}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function LC(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new E(4008,!1)}function VC(e){return!(e instanceof Gr)&&!(e instanceof Wn)}var Ie=(()=>{let t=class t{constructor(r,i,o,s,a,l){this.router=r,this.route=i,this.tabIndexAttribute=o,this.renderer=s,this.el=a,this.locationStrategy=l,this.href=null,this.commands=null,this.onChanges=new se,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let u=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area",this.isAnchorElement?this.subscription=r.events.subscribe(c=>{c instanceof yt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(r){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",r)}ngOnChanges(r){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(r){r!=null?(this.commands=Array.isArray(r)?r:[r],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(r,i,o,s,a){let l=this.urlTree;if(l===null||this.isAnchorElement&&(r!==0||i||o||s||a||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(l,u),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let r=this.urlTree;this.href=r!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(r)):null;let i=this.href===null?null:Ch(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(r,i){let o=this.renderer,s=this.el.nativeElement;i!==null?o.setAttribute(s,r,i):o.removeAttribute(s,r)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};t.\u0275fac=function(i){return new(i||t)(D(Ho),D(oe),za("tabindex"),D(Cr),D(ht),D(Ln))},t.\u0275dir=yr({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,o){i&1&&Jt("click",function(a){return o.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&xr("target",o.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",nt],skipLocationChange:[2,"skipLocationChange","skipLocationChange",nt],replaceUrl:[2,"replaceUrl","replaceUrl",nt],routerLink:"routerLink"},standalone:!0,features:[_r,xt]});let e=t;return e})(),_g=(()=>{let t=class t{get isActive(){return this._isActive}constructor(r,i,o,s,a){this.router=r,this.element=i,this.renderer=o,this.cdr=s,this.link=a,this.classes=[],this._isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new de,this.routerEventsSubscription=r.events.subscribe(l=>{l instanceof yt&&this.update()})}ngAfterContentInit(){I(this.links.changes,I(null)).pipe(hn()).subscribe(r=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let r=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=te(r).pipe(hn()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(r){let i=Array.isArray(r)?r:r.split(" ");this.classes=i.filter(o=>!!o)}ngOnChanges(r){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let r=this.hasActiveLinks();this.classes.forEach(i=>{r?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),r&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==r&&(this._isActive=r,this.cdr.markForCheck(),this.isActiveChange.emit(r))})}isLinkActive(r){let i=BC(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return o=>{let s=o.urlTree;return s?r.isActive(s,i):!1}}hasActiveLinks(){let r=this.isLinkActive(this.router);return this.link&&r(this.link)||this.links.some(r)}};t.\u0275fac=function(i){return new(i||t)(D(Ho),D(ht),D(Cr),D(Tt),D(Ie,8))},t.\u0275dir=yr({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(i,o,s){if(i&1&&mm(s,Ie,5),i&2){let a;yo(a=vo())&&(o.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[xt]});let e=t;return e})();function BC(e){return!!e.paths}var $C=new k("");function xg(e,...t){return eo([{provide:lu,multi:!0,useValue:e},[],{provide:oe,useFactory:HC,deps:[Ho]},{provide:ul,multi:!0,useFactory:UC},t.map(n=>n.\u0275providers)])}function HC(e){return e.routerState.root}function UC(){let e=m(Gt);return t=>{let n=e.get(Pn);if(t!==n.components[0])return;let r=e.get(Ho),i=e.get(zC);e.get(WC)===1&&r.initialNavigation(),e.get(GC,null,N.Optional)?.setUpPreloading(),e.get($C,null,N.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var zC=new k("",{factory:()=>new se}),WC=new k("",{providedIn:"root",factory:()=>1});var GC=new k("");var Nt=class{constructor(){this.songs={},this.albums={}}getSongsWithTexts(){return Object.values(this.songs).filter(t=>t.text)}getSongsWithoutAlbum(){return Object.values(this.songs).filter(t=>!t.albums.length)}getAllVideos(){return Object.values(this.songs).filter(t=>t.clipYouTubeId)}sortAsc(t,n){return t.name[0]<n.name[0]?-1:t.name[0]>n.name[0]?1:0}sortByYears(t,n){return this.yearOfSong(t)<this.yearOfSong(n)?-1:this.yearOfSong(t)>this.yearOfSong(n)?1:0}yearOfSong(t){let n=t.albums.map(r=>this.albums[r].year);return n.length?Math.min(...n):0}};var YC={id:"tardigrade-inferno",name:"Tardigrade Inferno",year:2016,folder:"/artist/tardigrade_inferno/albums/2016_ti.jpg",songs:["lovely-host","a-grain-of-sand","underwater-valentine"],info:`
  `},cu=YC;var qC={id:"execution-is-fun",name:"Execution is Fun!",year:2017,folder:"/artist/tardigrade_inferno/albums/2017_eif.jpg",songs:["execution-is-fun"],info:`
  `},du=qC;var ZC={id:"mastermind",name:"Mastermind",year:2019,folder:"/artist/tardigrade_inferno/albums/2019_m.jpg",songs:["all-tardigrades-go-to-hell","hypnosis","dreadful-song","alabama-song",{name:"Precourse"},"clown-therapy","all-pigs-are-the-same","church-asylum","marmalade","im-coming-for-your-soul","mastermind","we-are-number-one"],info:`
  `},fu=ZC;var QC={id:"how-nightmares-die",name:"How Nightmares Die",year:2020,folder:"/artist/tardigrade_inferno/albums/2020_hnd.jpg",songs:["how-nightmares-die"],info:`
A story about an inventor, battling people's nightmares with bullets and steampunk machinery. It was supposed to be a small experiment that we wanted to make while on lockdown, but the video slowly outgrew the scope of the initial project. So it is a small song with great ambitions. Music is still dark and with a heart of metal, but with electricity in its veins and with a gun, loaded with old drum samples.
`},pu=QC;var KC={id:"the-worst-of-me",name:"The Worst of Me",year:2021,folder:"/artist/tardigrade_inferno/albums/2021_twom.jpg",songs:["the-worst-of-me","write-with-blood"],info:`
  `},hu=KC;var JC={id:"spooky-scary-skeletons",name:"Spooky Scary Skeletons",year:2021,folder:"/artist/tardigrade_inferno/albums/2021_sss.jpg",songs:["spooky-scary-skeletons"],info:`
Andrew Gold cover
  `},mu=JC;var XC={id:"arrival-of-a-train-single",name:"Arrival of a Train (single)",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_aoat.jpg",songs:["arrival-of-a-train"],info:`
  `},gu=XC;var eE={id:"fire-plague-and-locust",name:"Fire, Plague and Locust",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_fpal.jpg",songs:["fire-plague-and-locust"],info:`
  `},yu=eE;var tE={id:"arrival-of-a-train",name:"Arrival of a Train",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_mini.jpg",songs:["arrival-of-a-train","fire-plague-and-locust","engine-of-skin","evoke"],info:`
  `},vu=tE;var nE={id:"ringmaster-has-to-die",name:"Ringmaster has to Die",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_rhtd.jpg",songs:["ringmaster-has-to-die"],info:`
  `},wu=nE;var rE={id:"clockwork-god",name:"Clockwork God",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_cg.jpg",songs:["clockwork-god","ringmaster-has-to-die"],info:`
  `},bu=rE;var iE={id:"burn-the-circus",name:"Burn the Circus",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_btc.jpg",songs:["ringmaster-has-to-die","clockwork-god","rats","cholera","tick-tock","9-out-of-10","little-princess","splinter-in-the-eye","nailed-to-the-ferris-wheel","wearing-white","burn-the-circus"],info:`
  `},Du=iE;var Sg={[cu.id]:cu,[du.id]:du,[fu.id]:fu,[pu.id]:pu,[hu.id]:hu,[mu.id]:mu,[gu.id]:gu,[yu.id]:yu,[vu.id]:vu,[wu.id]:wu,[bu.id]:bu,[Du.id]:Du};var oE={id:"9-out-of-10",name:["9 out of 10"],albums:["burn-the-circus"],clipYouTubeId:"JoEULDNPL9s",duration:232,text:`
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
`},Iu=oE;var sE={id:"a-grain-of-sand",name:["A Grain of Sand"],albums:["tardigrade-inferno"],duration:252,text:`
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
`},Cu=sE;var aE={id:"alabama-song",name:["Alabama Song"],albums:["mastermind"],duration:170,text:`
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
`},Eu=aE;var lE={id:"all-pigs-are-the-same",name:["All Pigs are the Same"],albums:["mastermind"],duration:203,text:`
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
`},_u=lE;var uE={id:"all-tardigrades-go-to-hell",name:["All Tardigrades go to Hell"],albums:["mastermind"],duration:178,text:`
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
`},xu=uE;var cE={id:"arrival-of-a-train",name:["Arrival of a Train"],albums:["arrival-of-a-train-single","arrival-of-a-train"],clipYouTubeId:"LAKEQqJ7FKk",duration:235,text:`
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
`},Su=cE;var dE={id:"burn-the-circus",name:["Burn the Circus"],albums:["burn-the-circus"],duration:225,text:`
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
`},Mu=dE;var fE={id:"cholera",name:["Cholera"],albums:["burn-the-circus"],duration:246,text:`
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
`},Tu=fE;var pE={id:"church-asylum",name:["Church Asylum"],albums:["mastermind"],duration:244,text:`
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
`},ku=pE;var hE={id:"clockwork-god",name:["Clockwork God"],albums:["clockwork-god","burn-the-circus"],clipYouTubeId:"NhBBW-3x_9s",duration:270,text:`
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
`},Au=hE;var mE={id:"clown-therapy",name:["Clown Therapy"],albums:["mastermind"],duration:228,text:`
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
`},ju=mE;var gE={id:"dreadful-song",name:["Dreadful Song"],albums:["mastermind"],duration:187,text:`
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
`},Nu=gE;var yE={id:"engine-of-skin",name:["Engine of Skin"],albums:["arrival-of-a-train"],duration:261,text:`
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
`},Ru=yE;var vE={id:"evoke",name:["Evoke"],albums:["arrival-of-a-train"],duration:257,text:`
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
`},Ou=vE;var wE={id:"execution-is-fun",name:["Execution is fun!"],albums:["execution-is-fun"],clipYouTubeId:"DrnKM4mGDIQ",duration:207,text:`
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
`},Pu=wE;var bE={id:"fire-plague-and-locust",name:["Fire, Plague and Locust"],albums:["fire-plague-and-locust","arrival-of-a-train"],clipYouTubeId:"hacScKtrqbQ",duration:215,text:`
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
`},Fu=bE;var DE={id:"how-nightmares-die",name:["How Nightmares Die"],albums:["how-nightmares-die"],clipYouTubeId:"sR7HHmJ4Jk4",duration:147,text:`
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
`},Lu=DE;var IE={id:"hypnosis",name:["Hypnosis"],albums:["mastermind"],clipYouTubeId:"mbJ6x6HrXUM",duration:343,text:`
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
`},Vu=IE;var CE={id:"im-coming-for-your-soul",name:["I`m Coming for Your Soul"],albums:["mastermind"],duration:282,text:`
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
`},Bu=CE;var EE={id:"little-princess",name:["Little Princess"],albums:["burn-the-circus"],duration:284,text:`
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
`},$u=EE;var _E={id:"lovely-host",name:["Lovely Host"],albums:["tardigrade-inferno"],duration:237,text:`
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
`},Hu=_E;var xE={id:"marmalade",name:["Marmalade"],albums:["mastermind"],duration:184,text:`
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
`},Uu=xE;var SE={id:"mastermind",name:["Mastermind"],albums:["mastermind"],duration:238,text:`
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
`},zu=SE;var ME={id:"misery",name:["Misery"],albums:[],clipYouTubeId:"UdzmAxVGwCw",duration:253,text:`
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
`},Wu=ME;var TE={id:"nailed-to-the-ferris-wheel",name:["Nailed to the Ferris Wheel"],albums:["burn-the-circus"],duration:236,text:`
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
`},Gu=TE;var kE={id:"rats",name:["Rats"],albums:["burn-the-circus"],duration:193,text:`
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
`},Yu=kE;var AE={id:"ringmaster-has-to-die",name:["Ringmaster has to Die"],albums:["ringmaster-has-to-die","clockwork-god","burn-the-circus"],clipYouTubeId:"hh3kZP4kNsE",duration:278,text:`
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
`},qu=AE;var jE={id:"splinter-in-the-eye",name:["Splinter in the Eye"],albums:["burn-the-circus"],duration:193,text:`
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
`},Zu=jE;var NE={id:"spooky-scary-skeletons",name:["Spooky Scary Skeletons"],albums:["spooky-scary-skeletons"],clipYouTubeId:"T_381kOAtTg",duration:134,text:`
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
`},Qu=NE;var RE={id:"the-worst-of-me",name:["The Worst of Me"],albums:["the-worst-of-me"],clipYouTubeId:"-ZmFGFufDDE",duration:205,text:`
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
`},Ku=RE;var OE={id:"tick-tock",name:["Tick-Tock"],albums:["burn-the-circus"],duration:271,text:`
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
`},Ju=OE;var PE={id:"underwater-valentine",name:["Underwater Valentine"],albums:["tardigrade-inferno"],duration:224,text:`
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
`},Xu=PE;var FE={id:"we-are-number-one",name:["We Are Number One"],albums:["mastermind"],clipYouTubeId:"mzJ4vCjSt28",duration:146,text:`
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
`},ec=FE;var LE={id:"wearing-white",name:["Wearing White"],albums:["burn-the-circus"],duration:283,text:`
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
`},tc=LE;var VE={id:"write-with-blood",name:["Write with Blood"],albums:["the-worst-of-me"],clipYouTubeId:"HbyaCInNiRA",duration:204,text:`
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
`},nc=VE;var Mg={[Iu.id]:Iu,[Cu.id]:Cu,[Eu.id]:Eu,[_u.id]:_u,[xu.id]:xu,[Su.id]:Su,[Mu.id]:Mu,[Tu.id]:Tu,[ku.id]:ku,[Au.id]:Au,[ju.id]:ju,[Nu.id]:Nu,[Ru.id]:Ru,[Ou.id]:Ou,[Pu.id]:Pu,[Fu.id]:Fu,[Lu.id]:Lu,[Vu.id]:Vu,[Bu.id]:Bu,[$u.id]:$u,[Hu.id]:Hu,[Uu.id]:Uu,[zu.id]:zu,[Gu.id]:Gu,[Yu.id]:Yu,[qu.id]:qu,[Zu.id]:Zu,[Qu.id]:Qu,[Ku.id]:Ku,[Ju.id]:Ju,[Xu.id]:Xu,[ec.id]:ec,[tc.id]:tc,[nc.id]:nc,[Wu.id]:Wu};var BE={id:"tardigrade-inferno",name:"Tardigrade Inferno",image:"/artist/tardigrade_inferno/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/12ZMAQkYyLSuNLvjbySISC",appleMusic:"https://music.apple.com/ru/artist/tardigrade-inferno/1448941163",youtubeMusic:"https://music.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA",youtube:"https://www.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA",bandcamp:"https://tardigradeinferno.bandcamp.com/",yandexMusic:"https://music.yandex.ru/artist/6761875"},albums:["tardigrade-inferno","execution-is-fun","mastermind","how-nightmares-die","the-worst-of-me","spooky-scary-skeletons","arrival-of-a-train-single","fire-plague-and-locust","arrival-of-a-train","ringmaster-has-to-die","clockwork-god","burn-the-circus"]},rc=class extends Nt{constructor(){super(...arguments),this.artist=BE,this.albums=Sg,this.songs=Mg}},Uo=new rc;var $E={id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440",year:1987,folder:"/artist/master/albums/master_1987.jpg",songs:[{name:"\u041C\u0430\u0441\u0442\u0435\u0440"},{name:"\u0411\u0435\u0440\u0435\u0433\u0438\u0441\u044C!"},{name:"\u0420\u0443\u043A\u0438 \u043F\u0440\u043E\u0447\u044C"},{name:"\u0429\u0438\u0442 \u0438 \u043C\u0435\u0447"},{name:"\u0415\u0449\u0435 \u0440\u0430\u0437 \u043D\u043E\u0447\u044C"},{name:"\u0412\u043E\u043B\u044F \u0438 \u0440\u0430\u0437\u0443\u043C"},{name:"\u0412\u0441\u0442\u0430\u043D\u044C, \u0441\u0442\u0440\u0430\u0445 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439"},{name:"\u0425\u0440\u0430\u043D\u0438 \u043C\u0435\u043D\u044F"},{name:"\u041A\u0442\u043E \u043A\u043E\u0433\u043E?"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041C\u0430\u0441\u0442\u0435\u0440" \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u043B\u0441\u044F \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F". \u0424\u0438\u0440\u043C\u0430 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F" \u043F\u043E\u043C\u0435\u0449\u0430\u043B\u0430\u0441\u044C \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u043A\u043E\u0441\u0442\u0435\u043B\u0430 \u043D\u0430 \u0443\u043B\u0438\u0446\u0435 \u0421\u0442\u0430\u043D\u043A\u0435\u0432\u0438\u0447\u0430, \u0432\u043E \u0434\u0432\u043E\u0440\u0435, \u0433\u0434\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B\u0441\u044F \u0430\u0432\u0442\u043E\u0431\u0443\u0441 \u0422\u043E\u043D\u0432\u0430\u0433\u0438\u043D \u0441\u043E \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u043E\u0439. \u0418\u043C\u0435\u043D\u043D\u043E \u0432 \u043D\u0435\u043C \u0431\u044B\u043B \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0438 \u0441\u0432\u0435\u0434\u0435\u043D \u043F\u0435\u0440\u0432\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C. \u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0442\u043E\u0436\u0435 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "\u041C\u0415\u041B\u041E\u0414\u0418\u042F" \u0432 1987 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043D\u0438\u043B\u0435 \u0438 \u0431\u044B\u043B \u043F\u0440\u043E\u0434\u0430\u043D \u0442\u0438\u0440\u0430\u0436\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u0412 1995 \u0433\u043E\u0434\u0443 \u0430\u043B\u044C\u0431\u043E\u043C \u043F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D \u043D\u0430 CD \u0444\u0438\u0440\u043C\u043E\u0439 \u0421\u041E\u042E\u0417.
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B          \u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430
\u0418.\u041C\u043E\u043B\u0447\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435     \u041A.\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
  `},ic=$E;var HE={id:"s-petlyoj-na-shee",name:"\u0421 \u043F\u0435\u0442\u043B\u0451\u0439 \u043D\u0430 \u0448\u0435\u0435",year:1989,folder:"/artist/master/albums/spnsh_1989.jpg",songs:[{name:"\u041D\u0435 \u0445\u043E\u0442\u0438\u043C!"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"\u041C\u044B \u043D\u0435 \u0440\u0430\u0431\u044B?"},{name:"\u041A\u043E\u0433\u0434\u0430 \u044F \u0443\u043C\u0440\u0443..."},{name:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043D\u0430\u0448\u0443 \u0437\u043B\u043E\u0441\u0442\u044C"},{name:"\u041D\u0430\u043F\u043B\u0435\u0432\u0430\u0442\u044C!"},{name:"\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"2000 \u043B\u0435\u0442 (\u0418\u0443\u0434\u0430)"},{name:"\u0412\u043E\u0439\u043D\u0430"},{name:"\u0421\u0435\u043C\u044C \u043A\u0440\u0443\u0433\u043E\u0432 \u0430\u0434\u0430"},{name:"\u0421 \u043F\u0435\u0442\u043B\u0451\u0439 \u043D\u0430 \u0448\u0435\u0435"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u0421 \u041F\u0435\u0442\u043B\u0435\u0439 \u041D\u0430 \u0428\u0435\u0435" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u0430 \u042E.\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u041D\u043E\u0432\u044B\u0435 \u041C\u044B\u0442\u0438\u0449\u0438. \u0412 \u0442\u0440\u0435\u0445\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0443\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u042E.\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430 \u0431\u044B\u043B\u0430 \u043F\u0440\u0438\u0432\u0435\u0437\u0435\u043D\u0430 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0438 \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u0438\u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043C\u0430\u0433\u043D\u0438\u0442\u043E\u0444\u043E\u043D. \u042D\u0442\u043E \u0431\u044B\u043B \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u043F\u044B\u0442 \u0437\u0430\u043F\u0438\u0441\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u0438\u043B\u0430\u043C\u0438. \u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0432 1989 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043D\u0438\u043B\u0435 \u0444\u0438\u0440\u043C\u043E\u0439 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F", \u0438 \u0431\u044B\u043B \u043F\u0440\u043E\u0434\u0430\u043D \u0442\u0438\u0440\u0430\u0436\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u0434\u0432\u0443\u0445 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u0410\u043B\u044C\u0431\u043E\u043C \u0431\u044B\u043B \u043F\u0440\u0438\u0437\u043D\u0430\u043D \u043B\u0443\u0447\u0448\u0438\u043C \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u043C \u0433\u043E\u0434\u0430. \u0412 1995 \u0433\u043E\u0434\u0443 \u0431\u044B\u043B \u043F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D \u043D\u0430 CD \u0441\u0442\u0443\u0434\u0438\u0435\u0439 \u0421\u041E\u042E\u0417
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B          \u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430
\u0418.\u041C\u043E\u043B\u0447\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435     \u041A.\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
  `},oc=HE;var UE={id:"talk-of-the-devil",name:"Talk of the Devil",year:1991,folder:"/artist/master/albums/talk_of_the_devil_1992.jpg",songs:[{name:"Intro Golgotha"},{name:"Talk Of The Devil"},{name:"Danger"},{name:"Fallen Angel"},{name:"Live To Die"},{name:"Tsar"},{name:"Heroes"},{name:"Romance (bass-solo)"},{name:"I Hate Your Sex"},{name:"Paranoid"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "Talk Of The Devil" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0432 1991 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "MOROZ Records" - LP (\u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u0439 \u0434\u0438\u0441\u043A). \u0417\u0430\u043F\u0438\u0441\u044C \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "SNC-records", \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u0422\u0440\u0443\u0448\u0438\u043D. \u0422\u0430\u043A\u0436\u0435 \u041C\u0438\u0445\u0430\u0438\u043B \u0421\u0435\u0440\u044B\u0448\u0435\u0432 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043B \u043B\u044E\u0434\u0435\u0439 \u0438\u0437 \u0445\u0440\u0430\u043C\u0430 \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u0445\u043E\u0440\u0430 \u0432 \u043F\u0435\u0441\u043D\u0435 Fallen Angel.

\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B

\u0421\u0435\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B:
\u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430                                          \u0412.\u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (1)
\u0421.\u0415\u0444\u0438\u043C\u043E\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (6)                             \u0410.\u041C\u043E\u0438\u0441\u0435\u0435\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (7)
\u0410.\u0428\u0430\u0442\u0443\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (2, 3, 4, 5)      \u0418.\u041A\u043E\u0436\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430 (6)
\u0445\u043E\u0440 \u0445\u0440\u0430\u043C\u0430 \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u0430 (3)
  `},sc=UE;var zE={id:"maniac-party",name:"Maniac Party",year:1994,folder:"/artist/master/albums/maniac_party_1994.jpg",songs:[{name:"Beastie Generation"},{name:"Maniac Party"},{name:"Lock Them In Graves"},{name:"Burning In Hell (Civil War Disaster)"},{name:"Screams Of Pain"},{name:"Time X (bass-solo)"},{name:"They Are Just Like Us"},{name:"Punk Guys"},{name:"Go!"}],info:`
"Maniac Party" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "SNC-records" \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u0432 1993 \u0433\u043E\u0434\u0443, \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0415.\u0422\u0440\u0443\u0448\u0438\u043D. \u0421\u0430\u043C \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u0448\u0435\u043B \u0442\u043E\u043B\u044C\u043A\u043E \u0432 1994 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "APEX" - CD, \u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 - \u0444\u0438\u0440\u043C\u0430 "POLYGRAM".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421.\u0421\u0438\u0434\u043E\u0440\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B       \u0422.\u0428\u0435\u043D\u0434\u0435\u0440 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},ac=zE;var WE={id:"pesni-myortvyh",name:"\u041F\u0435\u0441\u043D\u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0445",year:1996,folder:"/artist/master/albums/pesni_mertvix_1996.jpg",songs:[{name:"\u041F\u0435\u0441\u043D\u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0414\u0438\u043A\u0438\u0435 \u0433\u0443\u0441\u0438"},{name:"\u0414\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0442"},{name:"\u041F\u0435\u043F\u0435\u043B \u043D\u0430 \u0432\u0435\u0442\u0440\u0443"},{name:"\u041D\u0430\u0434\u043E\u0435\u043B\u043E"},{name:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0441\u0430\u043C"},{name:"\u042F \u043D\u0435 \u0445\u043E\u0447\u0443 \u0432\u043E\u0439\u043D\u044B"},{name:"\u0422\u0430\u0442\u0443"},{name:"\u041D\u043E\u0447\u044C"},{name:"\u041A\u043E\u0440\u0430\u0431\u043B\u044C \u0434\u0443\u0440\u0430\u043A\u043E\u0432"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041F\u0435\u0441\u043D\u0438 \u043C\u0435\u0440\u0442\u0432\u044B\u0445" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "\u0410\u0440\u0438\u044F Records" \u0432 \u043C\u0430\u0440\u0442\u0435 1996 \u0433\u043E\u0434\u0430. \u0417\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u044B - \u0412.\u0425\u043E\u043B\u0441\u0442\u0438\u043D\u0438\u043D \u0438 \u0414.\u041A\u0430\u043B\u0438\u043D\u0438\u043D. \u0412\u044B\u043F\u0443\u0449\u0435\u043D \u0444\u0438\u0440\u043C\u043E\u0439 "Flam Records" \u0432 1996 \u0433\u043E\u0434\u0443. \u0412 \u043F\u0435\u0441\u043D\u0435 \u0422\u0430\u0442\u0443 \u0432 \u0437\u0430\u043F\u0438\u0441\u0438 \u0445\u043E\u0440\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0410.\u0422\u0440\u043E\u0444\u0438\u043C\u043E\u0432, \u0410.\u0413\u0438\u0440\u043D\u044B\u043A (ZZ-Top), \u042E\u0440\u0438\u0439 \u0412\u0430\u0441\u0438\u043D (\u0430\u0440\u0442\u0438\u0441\u0442 \u0430\u043D\u0441\u0430\u043C\u0431\u043B\u044F \u0418\u0433\u043E\u0440\u044F \u041C\u043E\u0438\u0441\u0435\u0435\u0432\u0430).

\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B       \u0422.\u0428\u0435\u043D\u0434\u0435\u0440 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},lc=WE;var GE={id:"labirint",name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442",year:1999,folder:"/artist/master/albums/labirint_2000.jpg",songs:[{name:"\u041C\u0435\u0441\u0442\u0430 \u0445\u0432\u0430\u0442\u0438\u0442 \u0432\u0441\u0435\u043C"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"\u0421\u043E\u043D"},{name:"\u041A\u043E\u043C\u0435\u0442\u0430 2000"},{name:"Metal-\u0434\u043E\u043A\u0442\u043E\u0440"},{name:"\u041E\u0445\u043E\u0442\u043D\u0438\u043A\u0438 \u0437\u0430 \u0441\u0447\u0430\u0441\u0442\u044C\u0435\u043C"},{name:"\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0442, \u043D\u0438\u0447\u0442\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0442\u043E (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"\u0422\u0430\u0440\u0430\u043D"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0433\u0440\u0443\u043F\u043F\u044B \u041C\u0430\u0441\u0442\u0435\u0440 \u0432 \u043A\u043E\u043D\u0446\u0435 1999 \u0433\u043E\u0434\u0430. \u041C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0438 \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0443 \u0438 \u0440\u0435\u0448\u0438\u043B\u0438 \u0432\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0443 \u0441\u0435\u0431\u044F \u043D\u0430 \u0431\u0430\u0437\u0435. \u0410\u043B\u044C\u0431\u043E\u043C "\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432 2001 \u0444\u0438\u0440\u043C\u043E\u0439 "CD-Land" \u043D\u0430 CD



\u0421\u043E\u0441\u0442\u0430\u0432:
\u041B.\u0424\u043E\u043C\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                   \u041E.\u041C\u0438\u043B\u043E\u0432\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},uc=GE;var YE={id:"rc-cars",name:"\u041D\u0435\u0434\u0435\u0442\u0441\u043A\u0438\u0435 \u0433\u043E\u043D\u043A\u0438",year:2003,folder:"/artist/master/albums/rc_cars.jpg",songs:[{name:"\u0420\u0443\u043A\u0438 \u043F\u0440\u043E\u0447\u044C"},{name:"\u041C\u0435\u0441\u0442\u0430 \u0445\u0432\u0430\u0442\u0438\u0442 \u0432\u0441\u0435\u043C"},{name:"\u041A\u0442\u043E \u043A\u043E\u0433\u043E?"},{name:"\u0411\u0435\u0440\u0435\u0433\u0438\u0441\u044C"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"Metal-\u0434\u043E\u043A\u0442\u043E\u0440"},{name:"\u041C\u0430\u0441\u0442\u0435\u0440"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"\u0421\u043E\u043D"},{name:"\u0422\u0430\u0440\u0430\u043D"}],info:`
\u0417\u0430\u043F\u0438\u0441\u044C 2002 \u0433., \u0441\u0430\u0443\u043D\u0434\u0442\u0440\u0435\u043A \u043A \u043A\u043E\u043C\u043F\u044C\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u0433\u0440\u0435
\u0410\u043B\u0438\u043A \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441, \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430, \u0410\u043D\u0434\u0440\u0435\u0439 \u041B\u0435\u0431\u0435\u0434\u0435\u0432 \u041A\u0440\u0443\u0441\u0442\u0435\u0440 - \u0441\u044D\u043C\u043F\u043B\u044B, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u0437\u0432\u0443\u043A\u043E\u0432\u044B\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u044B
  `},cc=YE;var qE={id:"klassika",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 1987-2002",year:2001,folder:"/artist/master/albums/klassika_1987_2002.jpg",songs:[{name:"\u0418\u043D\u0442\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"\u0421 \u043A\u0435\u043C \u0442\u044B?"},{name:"\u0415\u0449\u0435 \u0440\u0430\u0437 \u043D\u043E\u0447\u044C"},{name:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0441\u0430\u043C"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"2000 \u043B\u0435\u0442 (\u0418\u0443\u0434\u0430)"},{name:"\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"\u0422\u043E\u0440\u0435\u0440\u043E"},{name:"\u041D\u0435\u0431\u043E \u0432 \u0433\u043B\u0430\u0437\u0430\u0445"},{name:"\u0412\u0441\u0442\u0430\u043D\u044C, \u0441\u0442\u0440\u0430\u0445 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439"},{name:"\u0422\u0430\u0442\u0443"},{name:"\u0412\u043E\u043B\u044F \u0438 \u0440\u0430\u0437\u0443\u043C"},{name:"\u0427\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u0430\u044F"}],info:`
\u041B\u0435\u0442\u043E\u043C 2001 \u0433\u043E\u0434\u0430 - \u0433\u0440\u0443\u043F\u043F\u0430 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0430\u043B\u044C\u0431\u043E\u043C "\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 1987-2001", \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0448\u043B\u0438 \u0441\u0442\u0430\u0440\u044B\u0435 \u0445\u0438\u0442\u044B \u0433\u0440\u0443\u043F\u043F\u044B \u0432 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0435, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0410\u043B\u0438\u043A\u0430 \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E: "\u0422\u043E\u0440\u0435\u0440\u043E" \u0438 "\u0421 \u041A\u0435\u043C \u0422\u044B?" \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0435 \u0438\u043C \u0432 \u0442\u043E \u0432\u0440\u0435\u043C\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D \u0438\u0433\u0440\u0430\u043B \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 "\u0410\u0440\u0438\u044F".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                 \u041E.\u041C\u0438\u043B\u043E\u0432\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},dc=qE;var ZE={id:"33-zhizni",name:"33 \u0436\u0438\u0437\u043D\u0438",year:2004,folder:"/artist/master/albums/33zizni_2004.jpg",songs:[{name:"\u0418\u0433\u0440\u0430"},{name:"\u041C\u0430\u0441\u0442\u0435\u0440 \u0441\u043A\u043E\u0440\u0431\u043D\u044B\u0445 \u0434\u0435\u043B"},{name:"\u0412\u0435\u0440\u0430 \u0433\u043E\u0440\u0438\u0442 \u043D\u0430 \u043A\u043E\u0441\u0442\u0440\u0430\u0445"},{name:"33 \u0436\u0438\u0437\u043D\u0438"},{name:"\u042D\u043A\u0441\u043F\u0440\u0435\u0441\u0441"},{name:"\u0413\u043B\u043E\u0442\u043E\u043A \u043E\u0433\u043D\u044F"},{name:"\u0412\u043E\u0439\u043D\u0430 \u043C\u0438\u0440\u043E\u0432"},{name:"Heavy-\u043B\u0430\u043C\u0431\u0430\u0434\u0430"},{name:"\u0421\u043D\u0435\u0436\u043D\u044B\u0439 \u043E\u0445\u043E\u0442\u043D\u0438\u043A"},{name:"\u0421\u0442\u0438\u0445\u0438\u044F"},{name:"\u0414\u0435\u0442\u0438 \u043F\u043E\u0434\u0437\u0435\u043C\u0435\u043B\u044C\u044F"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "33 \u0436\u0438\u0437\u043D\u0438" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u041C\u0430\u0441\u0442\u0435\u0440-\u0420\u0435\u043A\u043E\u0440\u0434\u0441 \u0432 2004 \u0433\u043E\u0434\u0443. \u0412 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0431\u044B\u043B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0421\u0442\u0440\u0430\u0439\u043A\u0430. \u041E\u0431\u043B\u043E\u0436\u043A\u0443 \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043B \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0410\u043D\u0434\u0440\u0435\u0439 \u0411\u0430\u0440\u043A\u043E\u0432 (Grimmy bro). \u0410\u043B\u044C\u0431\u043E\u043C "33 \u0436\u0438\u0437\u043D\u0438" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u043D\u0430 CD \u041E\u041E\u041E "\u041C\u0430\u0441\u0442\u0435\u0440-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                 \u0410.\u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},fc=ZE;var QE={id:"akustika",name:"\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",year:2005,folder:"/artist/master/albums/akystika_2005.jpg",songs:["plach-svireli",{name:"\u0422\u043E\u0440\u0435\u0440\u043E"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"33 \u0436\u0438\u0437\u043D\u0438"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"Heavy-\u043B\u0430\u043C\u0431\u0430\u0434\u0430"},{name:"\u041F\u0435\u043F\u0435\u043B \u043D\u0430 \u0432\u0435\u0442\u0440\u0443"},{name:"\u0418\u0433\u0440\u0430"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"\u0417\u0434\u0435\u0441\u044C \u043A\u0443\u044E\u0442 \u043C\u0435\u0442\u0430\u043B\u043B"},"veter"],info:`
\u0410\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u0448\u0435\u043B \u0432 \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2005 \u0433\u043E\u0434\u0430. \u0412 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A \u0441\u0442\u0430\u0440\u044B\u0435 \u0445\u0438\u0442\u044B, \u0442\u0430\u043A \u0438 \u0434\u0432\u0435 \u043D\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438.

"\u041A\u0430\u0436\u0434\u044B\u0439 \u0448\u0430\u0433 \u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0434\u043E\u0440\u043E\u0433\u0435 - \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435 \u0438 \u043E\u043F\u044B\u0442. \u042D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C - \u0435\u0449\u0451 \u043E\u0434\u043D\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432\u043F\u0435\u0440\u0451\u0434 \u0434\u043B\u044F \u043D\u0430\u0441 \u0438 \u0434\u043B\u044F \u0442\u0435\u0431\u044F..."



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410. \u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430        \u0410. \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
LEXX - \u0433\u0438\u0442\u0430\u0440\u0430, \u0432\u043E\u043A\u0430\u043B     \u0410. \u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u043F\u0435\u0440\u043A\u0443\u0441\u0441\u0438\u044F
  `},pc=QE;var KE={id:"po-tu-storonu-sna",name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430",year:2006,folder:"/artist/master/albums/ptcc_2006.jpg",songs:[{name:"\u0422\u0430\u043D\u0435\u0446"},{name:"\u0413\u0435\u043D\u0438\u0439 \u0440\u043E\u043A\u0430"},{name:"\u041C\u0443\u0437\u044B\u043A\u0430 \u0441\u0444\u0435\u0440"},"za-granyu",{name:"\u041F\u0435\u0441\u043D\u044F \u0410\u043D\u043D\u0443\u0448\u043A\u0438"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C \u0411\u0435\u0440\u043B\u0438\u043E\u0437\u0430"},{name:"\u041A\u043E\u043D\u0444\u0435\u0440\u0430\u043D\u0441"},{name:"\u041C\u0435\u0447\u0442\u0430\u0439"},{name:"\u0412\u043E\u0439\u043D\u0430 (Live in studio)"},{name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430 (\u0447\u0430\u0441\u0442\u044C 1)"},{name:"\u041B\u0435\u0441 \u0411\u0440\u043E\u043A\u0438\u043B\u043E\u043D"},{name:"\u041A\u0440\u044B\u0441\u044B"},{name:"\u0421\u044B\u043D \u043A\u0430\u043C\u043D\u044F"},{name:"\u0412\u0440\u0435\u043C\u044F \u0432\u0430\u0440\u0432\u0430\u0440\u043E\u0432"},{name:"Live in studio"},{name:"Omut"},{name:"\u041C\u0440\u0430\u043C\u043E\u0440\u043D\u044B\u0439 \u0410\u043D\u0433\u0435\u043B"},{name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430 (\u0447\u0430\u0441\u0442\u044C 2) (Live in studio)"}],info:`
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
  `},hc=KE;var JE={id:"viii",name:"VIII",year:2010,folder:"/artist/master/albums/vii_2010.jpg",songs:[{name:"\u0412\u043E\u0441\u044C\u043C\u0430\u044F \u0434\u0432\u0435\u0440\u044C"},{name:"\u0417\u0430\u043C\u0440\u0438!"},{name:"\u0411\u0443\u043B\u044C\u0434\u043E\u0437\u0435\u0440"},{name:"\u0421\u0443\u0434 \u0438\u0434\u0451\u0442"},{name:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0440\u0430\u0442"},{name:"\u0412\u043E\u0437\u0434\u0443\u0445!"},{name:"\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C"},{name:"\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u0441\u0430\u0440\u0430\u043D\u0447\u0430"},{name:"\u0420\u0443\u0431\u0438\u0442\u0435 \u043C\u0430\u0447\u0442\u044B!"},{name:"\u0411\u0435\u0440\u0435\u0433 \u0438\u043B\u043B\u044E\u0437\u0438\u0439"},{name:"\u041A\u043E\u0440\u043E\u043B\u0438 \u0440\u043E\u043A-\u043D-\u0440\u043E\u043B\u043B\u0430"},{name:"\u041E\u043D\u0438 \u043A\u0430\u043A \u043C\u044B"},{name:"Kings of Rock-n-Roll"},{name:"\u041D\u0430\u0447\u0430\u043B\u043E \u0432\u043E\u0441\u044C\u043C\u043E\u0433\u043E"}],info:`
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
  `},mc=JE;var Tg={[ic.id]:ic,[oc.id]:oc,[sc.id]:sc,[ac.id]:ac,[lc.id]:lc,[uc.id]:uc,[cc.id]:cc,[dc.id]:dc,[fc.id]:fc,[pc.id]:pc,[hc.id]:hc,[mc.id]:mc};var XE={id:"za-granyu",name:["\u0417\u0430 \u0433\u0440\u0430\u043D\u044C\u044E"],albums:["po-tu-storonu-sna"],authors:"\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0442\u0440\u0430\u0439\u043A \u2014 \u041C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430 \u041F\u0443\u0448\u043A\u0438\u043D\u0430",text:`
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
`},gc=XE;var e_={id:"plach-svireli",name:["\u041F\u043B\u0430\u0447 \u0441\u0432\u0438\u0440\u0435\u043B\u0438"],albums:["akustika"],duration:234,text:`
\u0414\u0435\u043D\u044C \u043A\u0430\u043A \u0441\u0442\u0435\u043A\u043B\u043E \u0440\u0430\u0437\u0431\u0438\u043B\u0430,
\u0422\u0435\u043D\u044C \u043F\u043E \u0441\u0442\u0435\u043D\u0435 \u0440\u0430\u0437\u043C\u044B\u043B\u0430 \u043D\u043E\u0447\u044C,
\u0422\u044B \u043D\u0435 \u0441\u043F\u0438\u0448\u044C, \u0442\u044B \u043D\u0435 \u0441\u043F\u0438\u0448\u044C...
\u0422\u044B - \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u044C\u0435 \u043D\u0435\u0431\u0430,
\u0422\u044B - \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u044C\u0435 \u0441\u0432\u0435\u0442\u0430, \u043D\u043E...
\u0422\u044B \u043E\u0434\u043D\u0430, \u0442\u044B \u0433\u0440\u0443\u0441\u0442\u0438\u0448\u044C...

\u041F\u043B\u0430\u0447 \u0441\u0432\u0438\u0440\u0435\u043B\u0438 \u0434\u0443\u0448\u0430 \u0432 \u043C\u0435\u0442\u0435\u043B\u0438,
\u041D\u043E \u0435\u0449\u0451 \u043D\u0435 \u0443\u043C\u0435\u0440\u043B\u0430.
\u0417\u0430\u043C\u0435\u0440\u0437\u0430\u0435\u0448\u044C \u0438 \u0443\u043B\u0435\u0442\u0430\u0435\u0448\u044C
\u0412 \u0446\u0430\u0440\u0441\u0442\u0432\u043E \u0432\u0435\u0447\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u0430.

\u0421\u043F\u0438\u0448\u044C, \u043D\u043E \u0433\u043B\u0430\u0437\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u044B,
\u0418 \u0432\u0441\u0435 \u043C\u0435\u0447\u0442\u044B - \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0434\u044B\u043C,
\u0411\u0435\u0437 \u043E\u0433\u043D\u044F, \u0431\u0435\u0437 \u043E\u0433\u043D\u044F.
\u0414\u043E\u0436\u0434\u044C - \u044D\u0442\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u0451\u0437\u044B,
\u0418 \u043E\u0431\u043B\u0435\u0442\u0430\u044E\u0442 \u043B\u0435\u043F\u0435\u0441\u0442\u043A\u0438
\u0421 \u0431\u0435\u043B\u044B\u0445 \u0440\u043E\u0437, \u043C\u0451\u0440\u0442\u0432\u044B\u0445 \u0440\u043E\u0437...
`},yc=e_;var t_={id:"veter",name:["\u0412\u0435\u0442\u0435\u0440"],albums:["akustika"],duration:117,text:`
\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, \u0431\u0440\u0430\u0442, \u0440\u0430\u043D\u043E \u043D\u0430\u0441 \u0445\u043E\u0440\u043E\u043D\u044F\u0442,
\u0417\u043D\u0430\u0435\u0448\u044C \u0442\u044B, \u043A\u0430\u043A \u0432\u0435\u0441\u043D\u043E\u044E \u043D\u043E\u044E\u0442 \u0440\u0430\u043D\u044B,
\u0412\u0434\u0430\u043B\u044C \u0434\u043D\u0438 \u043E\u0434\u043D\u0438 \u0443\u0445\u043E\u0434\u044F\u0442,
\u0417\u0438\u043C \u0438 \u043B\u0435\u0442 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044F \u043F\u0440\u043E\u0441\u0435\u0434\u044C,

\u0421\u043B\u043E\u0432\u043D\u043E \u0441\u043B\u0435\u0434 - \u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0432\u0435\u0442,
\u0421\u0442\u043E \u0434\u043E\u0440\u043E\u0433, \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442 - \u0442\u0430\u044E\u0442...

\u041F\u043E\u043C\u043D\u0438, \u0431\u0440\u0430\u0442, \u0431\u0443\u0434\u0443\u0442 \u0433\u0440\u043E\u0437\u044B,
\u041D\u0435\u0441\u043F\u0440\u043E\u0441\u0442\u0430 \u0434\u043E\u0436\u0434\u044C \u0438 \u0441\u043B\u0451\u0437\u044B,
\u0412\u0435\u0440\u044C \u043C\u043D\u0435, \u043A\u0430\u043A \u0438 \u043F\u0440\u0435\u0436\u0434\u0435 -
\u041D\u0435\u0431\u043E\u043C \u0431\u0443\u0434\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435.

\u0412\u0435\u0442\u0435\u0440, \u0432\u0435\u0442\u0435\u0440 - \u043D\u0435\u043F\u043E\u043A\u043E\u0440\u043D\u0430\u044F \u0434\u0443\u0448\u0430,
\u041F\u0435\u0441\u043D\u0435\u0439 \u0431\u0440\u0451\u043B \u043F\u043E \u0441\u0432\u0435\u0442\u0443,
\u0418 \u043E\u043F\u044F\u0442\u044C \u0443\u0441\u043B\u044B\u0448\u0430\u043B \u044F -
\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439 , \u0431\u0440\u0430\u0442...
`},vc=t_;var n_={id:"ride-to-live-live-to-ride",name:["Ride To Live, Live To Ride"],albums:[],authors:"\u043C\u0443\u0437\u044B\u043A\u0430: Dee Snider, \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442: \u041C.\u041F\u0443\u0448\u043A\u0438\u043D\u0430",text:`
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
`},wc=n_;var r_={id:"na-linii-ognya",name:["\u041D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F"],albums:[],clipYouTubeId:"sdAZuPTbFtE",text:`
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
`},bc=r_;var kg={[gc.id]:gc,[yc.id]:yc,[vc.id]:vc,[wc.id]:wc,[bc.id]:bc};var i_={id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440",image:"/artist/master/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/3Gocx0waYCfV2wx0d5nKzs",youtube:"https://www.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q",youtubeMusic:"https://music.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q",yandexMusic:"https://music.yandex.ru/artist/359599"},albums:["master","s-petlyoj-na-shee","talk-of-the-devil","maniac-party","pesni-myortvyh","labirint","klassika","rc-cars","33-zhizni","akustika","po-tu-storonu-sna","viii"]},Dc=class extends Nt{constructor(){super(...arguments),this.artist=i_,this.albums=Tg,this.songs=kg}},zo=new Dc;var o_={id:"trotilovyye-skazki",name:"\u0422\u0440\u043E\u0442\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u043A\u0430\u0437\u043A\u0438",year:1998,folder:"/artist/shmely/albums/1998_skazki.jpg",songs:[{name:"\u0427\u043E\u0440\u043D\u0430 \u0434\u043E\u0431\u0430"},{name:"\u042F\u0431\u043B\u043E\u0447\u043A\u043E-\u043C\u044F\u0443\u0447\u0438\u043B\u043E"},{name:"\u0421\u0435\u043A\u0441, \u043D\u0430\u0440\u043A\u043E\u0442\u0438\u043A\u0438, \u0441\u0430\u043C\u043E\u0433\u043E\u043D"},{name:"\u041B\u0438\u0445\u043E\u043C\u0430\u043D\u0435 \u043C\u0435\u043D\u0435 \u043Di\u0447"},{name:"\u0410\u0434\u0441\u043A\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"},{name:"\u0417\u0438\u043C\u0430"},{name:"\u0417\u0430 \u0442\u043E\u0431\u043E\u044E"},{name:"\u041D\u0435 \u0445\u043E\u0434\u0438"},{name:"\u0426\u0432\u0438\u043D\u0442\u0430\u0440"},{name:"\u041E\u0440\u0433i\u044F"},"daj-garri"]},Ic=o_;var s_={id:"tulovishche",name:"\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435",year:1998,folder:"/artist/shmely/albums/1998_tulovishe.jpg",songs:[{name:"\u041D\u0435\u0431\u043E (\u0441\u0442\u0438\u0445)"},{name:"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0431\u043E\u0433"},{name:"\u041B\u0430\u0439 \u0438\u043B\u043B\u044E\u0437\u0438\u0438"},{name:"\u0422\u0440\u0430\u0432\u044B"},{name:"\u041F\u0435\u0440\u0432\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C (\u0441\u0442\u0438\u0445)"},"tulovishchej",{name:"\u042D\u043A\u0437\u043E\u0442\u0438\u043A\u0430"},{name:"\u0413\u043D\u0438\u043B\u043E\u0435 \u043E\u0437\u0435\u0440\u043E"},{name:"\u0416\u0430\u043B\u043E \u0431\u0435\u0439 \u0441\u0430\u0432\u0430\u043B\u044F\u0439"},{name:"\u041B\u0430\u0433i\u0434\u043D\u043E"},"raspyatie",{name:"\u041A\u043E\u0440\u0430\u0431\u043B\u0438\u043A\u0438"},{name:"\u0412\u0435\u0442\u0435\u0440 \u0438 \u0433\u0440\u043E\u043C"},{name:"\u041D\u0435\u043F\u0443\u0442\u0451\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u0431\u0443\u0441"},{name:"\u041C\u044F\u0441\u043D\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"},{name:"\u0413\u0438\u043C\u043D\u043E\u043F\u043E\u0434\u043E\u0431\u043D\u0430\u044F"}]},Cc=s_;var a_={id:"purga",name:"\u041F\u0443\u0440\u0433\u0430",year:1998,folder:"/artist/shmely/albums/1998_purga.jpg",songs:[{name:"\u0410\u0439 \u0434\u0430!"},{name:"\u0413\u0440\u043E\u0437\u0430"},{name:"\u0422\u043E\u0441\u043A\u0430"},{name:"\u041B\u0430\u043A\u0430\u0439 \u043E\u0442\u0440\u0430\u0432\u0443"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435"},{name:"\u0422\u0435\u043D\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B"},{name:"\u041D\u0435\u0432\u0435\u0441\u0451\u043B\u0430\u044F \u0441\u043A\u0430\u0437\u043A\u0430"},{name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442"},{name:"\u0411\u0430\u0440\u044B\u043D\u044F"},{name:"\u041C\u043E\u043B\u043E\u0434\u0430\u044F"},{name:"\u041B\u044E\u0442\u0438\u0439 \u0441\u043Di\u0433"},{name:"\u041B\u043E\u0433\u043E\u0432\u043E"},{name:"\u0411\u0440\u0430\u0433\u0430"},{name:"\u0417\u0430\u043C\u043E\u043A \u0438\u0437 \u0442\u0443\u0447"},{name:"\u0412\u043E\u0434\u0430"},{name:"\u0413\u0443\u0431\u044B - \u044F\u0434"},{name:"\u0411\u0443\u0434\u0442\u043E \u0441\u043A\u0430\u0437\u043A\u0430"}]},Ec=a_;var l_={id:"durackiye-knizhki",name:"\u0414\u0443\u0440\u0430\u0446\u043A\u0438\u0435 \u043A\u043D\u0438\u0436\u043A\u0438",year:1998,folder:"/artist/shmely/albums/1998_knizhki.jpg",streaming:{spotify:"https://open.spotify.com/album/63sm3EX7I90qTqXEFBcUdT",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kgofi2TmxxKfzOrot5dsKipLqRNh1VjsE",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_l16b-hVl6mCOISWOuLJWtDPH5uTbbBoG4",yandexMusic:"https://music.yandex.ru/album/3444884"},songs:["ya-ne-angel",{name:"\u041C\u043E\u0433\u0438\u043B\u044C\u0449\u0438\u043A"},"volosy",{name:"\u0416\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u043D\u043E"},{name:"\u0413\u043E\u0440\u0438, \u043A\u043E\u0441\u0442\u0451\u0440!"},{name:"\u0420\u0435\u0437\u0438\u043D\u043E\u0432\u044B\u0435 \u0434\u0435\u0431\u0440\u0438"},{name:"\u042F\u0437\u0432\u0430 \u043D\u0430 \u0434\u0443\u0448\u0435"},{name:"\u0414\u0443\u0440\u0430\u0446\u043A\u0438\u0435 \u043A\u043D\u0438\u0436\u043A\u0438"},{name:"\u0413\u043E\u0432\u043D\u043E"},{name:"\u041D\u0435 \u0433\u0440\u0443\u0441\u0442\u0438, \u0438 \u0442\u0430\u043A \u0445\u0443\u0451\u0432\u043E"},{name:"\u041F\u044C\u044F\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u043A\u0430"},{name:"\u0418\u043A\u043E\u043D\u0430"},{name:"\u041E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u044F"},{name:"\u041Ci\u0441\u044F\u0446\u044A \u0437 \u043D\u0435\u0431\u0430 \u0433\u0435\u0442\u044C"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430\u044F"},{name:"\u0420\u0443\u0439\u043D\u0435\u0442\u0441\u044F \u043C\u043E\u0437\u043E\u043A"},{name:"\u0412\u0430\u043A\u0445\u0430\u043D\u0430\u043B\u0438\u044F"}]},_c=l_;var u_={id:"petlya-soblazna",name:"\u041F\u0435\u0442\u043B\u044F \u0441\u043E\u0431\u043B\u0430\u0437\u043D\u0430",year:1998,folder:"/artist/shmely/albums/1998_ps_.jpg",songs:[{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0432\u044B\u0439\u0434\u0435\u0442"},{name:"\u0412\u0435\u0441\u043D\u0430 \u043F\u043E\u043A\u043E\u0439\u043D\u0438\u0446\u0430"},{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0413\u0430\u043D\u044C\u0431\u0430"},{name:"\u0410\u043B\u043B\u0438\u043B\u0443\u0439\u0430"},{name:"\u041E\u0431\u0435\u0441\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0430\u0445"},{name:"\u0411i\u0441\u043E\u0432 \u0433\u0430\u0439"},"trahni-nebo","divchina-kulya",{name:"\u0417\u0430\u0432i\u0442\u0430\u0439"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0438\u0441\u043F\u043E\u0432\u0435\u0434\u044C"},{name:"\u0424\u0430\u0448\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B"},{name:"\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A"}]},xc=u_;var c_={id:"zloradostnaya-opuhol",name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C",year:1999,folder:"/artist/shmely/albums/1999_zo.jpg",songs:[{name:"\u0411\u044B\u043B\u0438 \u043C\u044B"},{name:"\u041B\u0435\u0437\u0432\u0438\u0435"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430"},{name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C"},{name:"\u0413\u043B\u0438\u0441\u0442\u044B"},{name:"\u0428\u0435\u0439\u043A \u0448\u0435\u0439\u043A \u0447\u0430 \u0447\u0430 \u0447\u0430"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430"},{name:"\u0421\u043C\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430"},{name:"\u041C\u0443\u0442\u0430\u043D\u0442\u044B"},{name:"\u0414\u0436\u0430\u0433\u0438 \u043C\u0435\u0440\u0442\u0432\u0435\u0435 \u0432\u0441\u0435\u0445 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0410\u043F\u043E\u043A\u0430\u043B\u0438\u043F\u0441\u0438\u0441"},{name:"\u041F\u0435\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"}]},Sc=c_;var d_={id:"vulkanizaciya-dushi",name:"\u0412\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0443\u0448\u0438",year:1999,folder:"/artist/shmely/albums/1999_vd_.jpg",songs:[{name:"\u041A\u0440\u0438\u0436\u0430\u043D\u0430 \u0432\u043E\u0434\u0430"},{name:"\u0412\u0435\u0441\u043D\u044F\u043D\u043A\u0430"},{name:"\u0423 \u0413\u0430\u044E"},{name:"\u0411\u043E\u0433\u0438"},{name:"\u041F\u043E\u043C\u043E\u043B\u0438\u0441\u044C"},{name:"\u041E-\u041E-\u041E"},{name:"\u0414\u0438\u0432\u043E"},{name:"\u041E\u0440\u0433\u0430\u0437\u043C"},"volosy",{name:"\u041Ci\u0441\u044F\u0446\u044A"},{name:"\u0414\u0443\u043D\u044F"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C"}]},Mc=d_;var f_={id:"princessa-bez-trusov",name:"\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0442\u0440\u0443\u0441\u043E\u0432",year:2e3,folder:"/artist/shmely/albums/2000_prinzessa.jpg",songs:[{name:"\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0442\u0440\u0443\u0441\u043E\u0432"},{name:"\u0418\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0440\u0430\u0442"},{name:"\u041A\u0440\u043E\u043D\u043E\u0441"},{name:"\u0418\u0432\u0430 (\u0441\u0442\u0438\u0448\u043E\u043A)"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C"},{name:"\u0420\u0436\u0430\u0432\u044B\u0439 \u043A\u0438\u0431\u043E\u0440\u0433"},{name:"\u0428\u0443\u043B\u043E\u0432\u044C\u0435"},{name:"\u041F\u043E\u0435\u0431\u0435\u043D\u044C-\u0442\u0440\u0430\u0432\u0430"},{name:"\u0415\u0449\u0451 \u0441\u0442\u0438\u0448\u043E\u043A"},{name:"\u0417\u043E\u043C\u0431\u0438-\u0431\u0443\u0433\u0438"},{name:"\u041F\u043E \u043C\u0430\u0441\u043B\u0443"},{name:"\u041C\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u043A"},{name:"\u0426\u0432\u0435\u0442\u044B"},{name:"\u0421\u0442\u0438\u0448\u043E\u0447\u0435\u043A"},{name:"\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u044F"},{name:"\u0417\u0430\u0440\u0435\u0432\u043E"},{name:"\u041F\u0430\u043D\u043A-\u0434\u0438\u043A\u0442\u0430\u0442\u0443\u0440\u0430"},{name:"\u041A\u0440\u0430\u0445 \u0438 \u0433\u0438\u0431\u0435\u043B\u044C"},{name:"\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A-\u0443\u0431\u0438\u0439\u0446\u0430 (\u0441\u043A\u0430\u0437\u043A\u0430)"}]},Tc=f_;var p_={id:"bomba-v-ubezhishche",name:"\u0411\u043E\u043C\u0431\u0430 \u0432 \u0443\u0431\u0435\u0436\u0438\u0449\u0435",year:2e3,folder:"/artist/shmely/albums/2000_bomba.jpg",songs:[{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u0422\u0438\u0448\u0438\u043D\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439"},{name:"\u0411\u043E\u043C \u043B\u0431\u043E\u043C"},["polna-suma",{name:["\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043E\u0441\u0442\u0440\u043E\u0432"]}],{name:"\u0422\u0443\u043B\u044F\u0440\u0435\u043C\u0438\u044F"},{name:"\u0412\u0438\u0440\u0443\u0441"},"ya-ne-angel",{name:"\u0412\u0438\u0445\u0440\u044C \u0441\u0442\u0440\u0430\u0441\u0442\u0435\u0439"},{name:"\u0421\u0430\u0434\u0438\u0437\u043C"},{name:"\u0425\u0443\u043B\u0438 \u043F\u0443\u043B\u0438 \u043F\u0440\u0430\u0445\u0443"},{name:"\u0422\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430"},{name:"\u0410\u043D\u0430\u043A\u043E\u043D\u0434\u0430"},{name:"\u0411\u043E\u0440\u043E\u0434\u0430"},"slyoznaya",{name:"\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434"},{name:"\u042F\u0437\u0432\u0430 \u043D\u0430 \u0434\u0443\u0448\u0435"},{name:"Z\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F"}]},kc=p_;var h_={id:"moshchi",name:"\u041C\u043E\u0449\u0438",year:2e3,folder:"/artist/shmely/albums/2000_moshi.jpg",streaming:{spotify:"https://open.spotify.com/album/1xaIDZcBZLaXtnrsfg1Tbr",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_mcpRAnZyTiyTLoYoZlOifD4WoKEopi6vs",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_mGUbrFjlAsspY8eHWwTpWm_7DAB7C5J1s",yandexMusic:"https://music.yandex.ru/album/3444130"},songs:[{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"},{name:"\u042D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u0425\u0430"},"laboratoriya-altruizma",{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0430-\u0432\u0430\u043C\u043F\u0438\u0440"},{name:"\u0412 \u043C\u044F\u0441\u043D\u043E\u043C \u0446\u0435\u0445\u0443 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A \u0434\u0443\u0448\u0438"},{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u041B\u0443\u043A\u0430\u0432\u044B\u0439 \u0441\u0443\u0438\u0446\u0438\u0434"},{name:"\u041F\u0430\u0434\u0430\u043B\u044C"},{name:"\u0410\u0442\u0435\u0438\u0441\u0442"},{name:"\u0420\u0430\u0434\u0438\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B"},{name:"\u041C\u0430\u0441\u0442\u0443\u0440\u0431\u0430\u0442\u043E\u0440"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432 \u0438 \u041A\u0430\u043C\u043D\u0435\u0431\u043B\u044F\u0434\u043E\u0432"}],info:`
\u0412\u043E\u0442 \u0447\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0428\u043C\u0435\u043B\u0438:

"\u0410\u043B\u044C\u0431\u043E\u043C \u041C\u043E\u0449\u0438, \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0433\u0434\u0435-\u0442\u043E \u0432 1999 \u0433. \u0438\u043B\u0438 \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 2000 \u0433. (\u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u043C), \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E-\u0434\u0432\u0435, \u0432\u0434\u0432\u043E\u0451\u043C. \u0410\u043B\u044C\u0431\u043E\u043C \u043F\u0438\u0441\u0430\u043B\u0441\u044F \u043D\u0435 \u0432 \u0441\u0430\u043C\u043E\u0435 \u043B\u0443\u0447\u0448\u0435\u0435 \u043D\u0430\u0448\u0435 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435... \u041A\u0430\u043A \u043F\u043E\u043C\u043D\u0438\u0442\u0441\u044F, \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430 \u0437\u043B\u043E (\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E \u043A\u043E\u043C\u0443) \u0443\u0436\u0430\u0441\u043D\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C, \u041E\u0434\u0438\u043D \u0438\u0437 \u043D\u0438\u0445 - "\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C", \u0430 \u044D\u0442\u043E, \u0442\u0430\u043A \u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C. \u041F\u043E \u0440\u0430\u0437\u043D\u044B\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0441\u0430\u043C\u0438 \u043C\u044B \u0435\u0433\u043E \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u043C. \u0414\u0443\u043C\u0430\u0435\u043C \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0441\u0442\u0438\u043D\u043D\u044B\u043C \u0444\u0430\u043D\u0430\u0442\u0430\u043C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 \u0438\u0437 \u043D\u0435\u0433\u043E \u0443\u0436\u0435 \u0431\u044B\u043B\u0438 \u0432 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u0430\u0445. \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0441\u0435\u043D \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u0440\u0430\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441 \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C\u0438. \u042D\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044F \u0435\u0449\u0451 \u043D\u0435\u043E\u0442\u043C\u0430\u0441\u0442\u0435\u0440\u0451\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0432\u0443\u0447\u0438\u0442 \u0442\u0438\u0445\u043E".
  `},Ac=h_;var m_={id:"trahni-nebo",name:"\u0422\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E",year:2e3,folder:"/artist/shmely/albums/2000_nebo.jpg",songs:[{name:"\u041B\u0430\u0439 \u0438\u043B\u043B\u044E\u0437\u0438\u0438"},{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043E\u043B\u043D\u044B\u0448\u043A\u043E"},"tulovishchej",{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0413\u0430\u043D\u044C\u0431\u0430"},{name:"\u0410\u043B\u043B\u0438\u043B\u0443\u0439\u044F"},"raspyatie","trahni-nebo","divchina-kulya",{name:"\u0417\u0430\u0432i\u0442\u0430\u0439 \u0437\u0430\u0447i\u043A\u0430\u0439"},{name:"\u0424\u0430\u0448\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B"},{name:"\u0422\u0440\u0430\u0432\u044B"}]},jc=m_;var g_={id:"organizm",name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043C",year:2e3,folder:"/artist/shmely/albums/2000_organizm.jpg",songs:["polna-suma",{name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043C"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439"},{name:"\u041F\u0443\u0442\u044C \u043A... (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435"},"pokidaya-mir",["slyoznaya",{name:["\u041B\u0438\u0445\u0430 \u0442\u0430 \u0431\u0435\u0434\u0430"]}],{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u0418\u0432\u043E\u043B\u0433\u043E\u0439"},{name:"\u0413\u0440\u043E\u0437\u0430 (\u041A\u043B\u043E\u0447\u044C\u044F)"},"laboratoriya-altruizma",{name:"\u0427\u0435\u0440\u0435\u043F \u0438 \u043F\u043E\u0434\u0441\u043D\u0435\u0436\u043D\u0438\u043A"},{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"}]},Nc=g_;var y_={id:"spazmy-roka",name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430",year:2001,folder:"/artist/shmely/albums/2001_spazmi.jpg",streaming:{spotify:"https://open.spotify.com/album/28tVBP8rDTC3eLMVzOAZ5m",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_l79--sEsZYpEuVcmBME0YHVr2cHd5B22U",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_noWkxPhjlR4FF4_LZCf6WX1ztDral0UMg",yandexMusic:"https://music.yandex.ru/album/3444133"},songs:["ya-vselennaya",{name:"\u041C\u0430\u043A\u0435\u0442 \u041C\u0438\u0440\u0430 \u0421\u0447\u0430\u0441\u0442\u044C\u044F"},"na-ladoni-planeta",{name:"\u041E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u0432\u0435\u0442, \u043E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u043B\u0435\u0434"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u0434\u0430"},["patologoanatom",{name:["\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C (\u041A\u043B\u043E\u0447\u044C\u044F)"]}],"novaya-religiya",{name:"\u0416\u0434\u0430\u0442\u044C"},{name:"\u041C\u043E\u044F \u043B\u044E\u0431\u0438\u043C\u0430\u044F (\u0411\u0435\u0448\u0435\u043D\u044B\u0439 \u043A\u0430\u0439\u0444)"},{name:"\u041D\u0435\u0432\u0435\u0441\u0451\u043B\u0430\u044F \u0441\u043A\u0430\u0437\u043A\u0430"},"saprofag",{name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430"},["volosy",{name:["\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B"]}],{name:"\u0417\u0430\u0432\u0442\u0440\u0430 \u043D\u0430 \u0432\u044B\u043F\u0438\u0441\u043A\u0443 \u0432 \u0430\u0434 (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0412\u0441\u0451 \u0432\u043E \u0438\u043C\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430"},{name:"\u0411\u043E\u0439"}]},Rc=y_;var v_={id:"risunki-na-dushe",name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435",year:2001,folder:"/artist/shmely/albums/2001_risunki.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79304"},songs:[{name:"Intro"},"skelety",{name:"\u041F\u0443\u0442\u044C \u043A..."},{name:"\u0413\u0440\u043E\u0437\u0430"},"patologoanatom",{name:"\u041F\u043B\u044F\u0448\u0443\u0449\u0438\u0439 \u043A\u0430\u0440\u043B\u0438\u043A"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439"},{name:"\u0417\u0430\u0432\u0442\u0440\u0430 \u043D\u0430 \u0432\u044B\u043F\u0438\u0441\u043A\u0443"},"tulovishchej",{name:"\u041A\u043B\u044E\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043E\u043A"},"laboratoriya-altruizma",{name:"\u0414\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0442\u0430"},["tulovishchej",{name:["\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435\u0439 (remix)"]}],{name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435"},["skelety",{name:["\u0421\u043A\u0435\u043B\u0435\u0442\u044B (video edit)"]}],{name:"Outro"}]},Oc=v_;var w_={id:"poshmelye",name:"\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435",year:2002,folder:"/artist/shmely/albums/2002_poshmele.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79307"},songs:["ya-vselennaya",{name:"\u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445"},{name:"\u041E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u0432\u0435\u0442, \u043E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u043B\u0435\u0434"},"na-ladoni-planeta",{name:"\u0413\u0440\u043E\u0437\u0430"},{name:"\u041F\u043E\u043B\u0435"},"poshmelye",{name:"\u041A\u043B\u043E\u0443\u043D"},{name:"\u041F\u0443\u0442\u044C \u043A..."},"volosy",{name:"\u041A\u0440\u043E\u043D\u043E\u0441"},{name:"\u0422\u0435\u043D\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B"},"skelety","patologoanatom","novaya-religiya",{name:"\u0426\u0432\u0435\u0442\u044B"}],info:`
"\u041F\u041E\u0428\u041C\u0415\u041B\u042C\u0415" - \u0441\u0431\u043E\u0440\u043D\u0438\u043A (2002)
\u042D\u0442\u043E\u0442 \u0441\u0431\u043E\u0440\u043D\u0438\u043A \u043F\u0435\u0441\u0435\u043D \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430 \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0430\u043C\u0438 \u0438\u0445 \u0433\u0440\u0443\u043F\u043F\u044B "\u0428\u041C\u0415\u041B\u0418".
\u0412\u044B\u043F\u0443\u0449\u0435\u043D \u0444\u0438\u0440\u043C\u043E\u0439 Moroz Records \u0432 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435 2002 \u0433\u043E\u0434\u0430. \u0412 \u043D\u0435\u0433\u043E \u0432\u043E\u0448\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 2000-2002 \u0433\u043E\u0434\u043E\u0432.
\u041A\u0440\u043E\u043C\u0435 \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430, \u0432 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0435\u0441\u0435\u043D, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B:
\u0421\u043E\u0432\u0430, \u0420\u043E\u0441\u0441, \u0418\u0432\u0430\u043D, A. Waters, \u041C\u0430\u043A\u0441 (\u041A\u0440\u0430\u043D\u0442\u044B), \u0410. \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432.
`},Pc=w_;var b_={id:"negativ-prostranstva",name:"\u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",year:2002,folder:"/artist/shmely/albums/2002_negativ.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79306"},songs:[{name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440"},{name:"\u0412\u0435\u0440\u0430 \u0438 \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u0412\u043E\u043B\u0447\u0438\u0446\u0430"},{name:"\u041D\u0435\u0436\u043D\u043E\u0441\u0442\u044C"},"slyoznaya",{name:"\u041F\u0435\u0440\u0432\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0433\u0440\u0435\u0445"},{name:"\u041B\u0438\u0445\u043E\u0440\u0430\u0434\u0438\u0442 \u043C\u0435\u043D\u044F \u043D\u043E\u0447\u044C"},{name:"\u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430"},{name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0435\u0439\u0441 (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0412\u044B\u0441\u043E\u0442\u0430"},{name:"\u041F\u0440\u043E\u0449\u0430\u0439"},{name:"\u0427\u0435\u0440\u0435\u0437 \u043A\u0440\u0430\u0439"},{name:"\u0411\u0440\u0430\u0433\u0430"},{name:"\u0412\u0441\u0451"},{name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440 (Club MIX)"}]},Fc=b_;var D_={id:"agressivnyj-pokoj",name:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",year:2002,folder:"/artist/shmely/albums/2002_pokoy.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79305"},songs:["bol",{name:"\u0422\u044B \u0441\u043D\u0435\u0433 \u0432 \u043C\u043E\u0435\u0439 \u043F\u0440\u0435\u0438\u0441\u043F\u043E\u0434\u043D\u0435\u0439"},{name:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439"},{name:"The First Love"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439 (new version)"},{name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435 (new version)"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435 (1999)"},"blagodat","maneken",["laboratoriya-altruizma",{name:["\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C\u0430 (new version)"]}],{name:"\u0414\u0435\u043D\u044C \u0421\u0432\u044F\u0442\u043E\u0433\u043E \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430"},{name:"\u041E\u0442\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u0433\u0438"},["slyoznaya",{name:["\u0421\u043B\u0451\u0437\u043D\u0430\u044F (remix)"]}],{name:"\u041B\u0438\u0431\u043E (remix)"},{name:"\u0413\u0440\u043E\u0437\u0430 (remix)"},{name:"\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0439 \u0437\u0430\u043C\u043E\u043A (live 1999)"},{name:"\u041B\u0430\u043A\u0430\u0439 \u043E\u0442\u0440\u0430\u0432\u0443 (live 1999)"}]},Lc=D_;var I_={id:"polna-suma",name:"\u041F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430",year:2003,folder:"/artist/shmely/albums/2003_suma.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79309"},songs:[{name:"\u0417\u0432\u0435\u0440\u044C"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C"},{name:"\u0422\u043E\u0441\u043A\u0430"},{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},"polna-suma","laboratoriya-altruizma",{name:"\u0412\u043E\u0434\u0430"},{name:"\u0421\u0430\u0434\u0438\u0437\u043C"},{name:"\u0420\u0430\u0434\u0438\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B"},{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442"},{name:"\u0411\u043E\u043C \u043B\u0431\u043E\u043C"},{name:"\u0422\u0438\u0448\u0438\u043D\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u041E\u0431\u043B\u0430\u043A\u0430"},{name:"\u042D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u0425\u0430"},{name:"\u0413\u043E\u0440\u0438, \u043A\u043E\u0441\u0442\u0451\u0440!"},{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0422\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"},{name:"\u0425\u0443\u043B\u0438 \u043F\u0443\u043B\u0438 \u043F\u0440\u0430\u0445\u0443"},{name:"\u0423\u0430-\u0443-\u0443\u0430"}]},Vc=I_;var C_={id:"ostanovite-chelovechestvo",name:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043E",year:2003,folder:"/artist/shmely/albums/2003_ostanovite.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79308"},songs:[{name:"\u0410\u0438\u0441\u0442 \u043D\u0430\u0434 \u0438\u043D\u043A\u0443\u0431\u0430\u0442\u043E\u0440\u043E\u043C"},{name:"\u042F \u0432\u0441\u0451 \u043D\u0430\u0440\u0443\u0448\u0438\u043B"},{name:"\u0412 \u043A\u043B\u043E\u0447\u044C\u044F"},{name:"\u0427\u0443\u0436\u043E\u0439"},{name:"\u0428\u0430\u043D\u0441"},{name:"\u041A\u0440\u0430\u0441\u043E\u0442\u0430"},{name:"\u041D\u0430 \u043C\u043E\u0433\u0438\u043B\u0435 \u043B\u044E\u0431\u0432\u0438"},{name:"\u0411\u0438\u043E-\u043C\u043E\u0442\u043E\u0440"},{name:"\u041E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u044F"},{name:"\u041D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430"},{name:"\u041F\u0440\u043E\u0440\u0432\u0451\u043C\u0441\u044F"},{name:"\u0413\u043E\u043B\u043E\u0441-\u043F\u0430\u043B\u0430\u0447"},{name:"\u041E\u043D"},{name:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043E"},{name:"\u041C\u043E\u0439 \u043F\u0443\u0442\u044C"},{name:"\u0412\u0437\u0433\u043B\u044F\u0434 \u0438\u0437\u043D\u0443\u0442\u0440\u0438"}]},Bc=C_;var E_={id:"zhazhda",name:"\u0416\u0430\u0436\u0434\u0430",year:2004,folder:"/artist/shmely/albums/2004_zh.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79310"},songs:[{name:"\u0416\u0430\u0436\u0434\u0430"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430\u044F (\u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u044F\u044F)"},{name:"\u0421\u0435\u0440\u0430"},{name:"\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u0437\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F)"},{name:"\u0422\u0440\u0443\u0434\u043D\u044B\u0439 \u0440\u0435\u0431\u0451\u043D\u043E\u043A (\u0448\u043A\u043E\u043B\u044C\u043D\u0430\u044F)"},["ya-ne-angel",{name:["\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B (\u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)"]}],{name:"\u0414\u0438\u0441\u043A\u043E\u0442\u0435\u043A\u0430 (\u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u044F\u044F)"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C (\u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)"},{name:"\u041A\u043E\u0440\u043E\u0431\u0430\u0441"}],info:`
\u0412\u043D\u0435\u043F\u043B\u0430\u043D\u043E\u0432\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C (\u0442\u0438\u0440\u0430\u0436 100 \u0448\u0442.).
\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201DSka'n'Dall\u201D \u0433. \u0420\u043E\u0432\u043D\u043E. 2004 \u0433.

\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201D\u0428\u041C\u201D

\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B - \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432.


"\u0412 \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043E\u0448\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u0438\u0435, \u0437\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435, \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0443\u0436\u0435 \u0438\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0445 \u0440\u0430\u043D\u0435\u0435 \u0438 \u043D\u043E\u0432\u044B\u0435..."
  `},$c=E_;var __={id:"ten-serdca",name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430",year:2004,folder:"/artist/shmely/albums/2004_ten.jpg",streaming:{spotify:"https://open.spotify.com/album/7fsVsr0pCmCEpyQ9o2jMXW",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_k_3MQ5DeK39QrTGigpDgrsyMK04F16W-c",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_l8lFy44LN0_BS2JYDee8CyKtCkd3xmfL0",yandexMusic:"https://music.yandex.ru/album/79311"},songs:[{name:"\u0414\u043B\u044F \u043D\u0435\u0451 \u043E\u0434\u043D\u043E\u0439"},{name:"\u0411\u0435\u0439, \u043A\u043E\u043B\u043E\u043A\u043E\u043B!"},{name:"\u041D\u0430\u043F\u0440\u043E\u043B\u043E\u043C"},{name:"\u0412\u043E\u043B\u0447\u044C\u044F \u044F\u0433\u043E\u0434\u0430"},{name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430"},{name:"\u041B\u0438\u0432\u0435\u043D\u044C \u0441\u043B\u0451\u0437"},{name:"\u0412\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0443\u0448"},{name:"\u041A\u0430\u0440\u0443\u0441\u0435\u043B\u044C"},{name:"\u0422\u044C\u043C\u0430"},{name:"\u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0434\u0443\u0448\u0438"},{name:"\u0412\u043C\u0435\u0441\u0442\u0435 \u0443\u043C\u0435\u0440\u0435\u0442\u044C"},{name:"\u0421\u0432\u043E\u0431\u043E\u0434\u0430"},{name:"\u0421\u043F\u0438\u0434\u0432\u0435\u0439"},{name:"\u0412\u043E\u043B\u0447\u044C\u044F \u044F\u0433\u043E\u0434\u0430 (remix)"},{name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430 (remix)"}],info:`
\u041B\u0451\u0441 (\u041B\u0451\u043B\u044F) - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430; \u0428\u043C\u0435\u043B\u044C (\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440) - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043C\u0443\u0437\u044B\u043A\u0430, \u0442\u0435\u043A\u0441\u0442\u044B; \u0420\u043E\u0441\u0441 (\u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432) - \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u0411\u0430\u0437\u0438\u043B\u0438\u043E (\u0418\u0433\u043E\u0440\u044C) - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u041B\u0430\u0440\u0441 (\u042E\u0440\u0430) - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B.
\u041F\u0435\u0441\u043D\u044F \u201D\u0414\u043B\u044F \u043D\u0435\u0451 \u043E\u0434\u043D\u043E\u0439\u201D \u043F\u043E\u0441\u0432\u044F\u0449\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0437\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0443\u0448\u0435\u0434\u0448\u0435\u043C\u0443 \u0438\u0437 \u0436\u0438\u0437\u043D\u0438 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u0443 - \u041D\u0438\u043A\u043E\u043B\u0430\u044E \u0411\u044B\u043A\u043E\u0432\u0443, \u0438 \u0434\u0440\u0443\u0433\u0438\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0443\u0436\u0435 \u043D\u0435\u0442 \u0432 \u0436\u0438\u0432\u044B\u0445.
\u0417\u0430\u043F\u0438\u0441\u044C, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433 \u0438 \u0440\u0435\u043C\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 - \u0420\u043E\u0441\u0441. \u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0430 \u201DSHMELY RECORDS\u201D \u043D\u043E\u044F\u0431\u0440\u044C 2003 \u0433. - \u043C\u0430\u0440\u0442 2004 \u0433. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0442\u0438\u0438 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u201D\u0422\u0415\u041D\u0418\u041F\u201D \u0410. \u0415\u0440\u043C\u0430\u043A\u043E\u0432\u044B\u043C. \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0430 \u201DA.W. studio\u201D. \u0421\u043A\u0440\u0438\u043F\u043A\u0438 \u0432 \u043F\u0435\u0441\u043D\u0435 \u201D\u0422\u0415\u041D\u042C \u0421\u0415\u0420\u0414\u0426\u0410\u201D - \u041C\u0430\u0440\u044C\u044F\u043D\u0430 \u041F\u0438\u0441\u043A\u0430\u0440\u0451\u0432\u0430 (\u0414\u043E\u0441). \u041A\u043B\u0438\u043F - \u0418\u0433\u043E\u0440\u044C \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0438\u0439.
  `},Hc=__;var x_={id:"lyod",name:"\u041B\u0451\u0434",year:2005,folder:"/artist/shmely/albums/2005_lyod.jpg",streaming:{spotify:"https://open.spotify.com/album/5pL8KLhjDalWkja1X7dKz9",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nXvdHxMP-aZmghtnw-vMDkh7MmjhHzMSc",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lNKOLD4k7WdPQm4mG-38CMnTtmV_Dd-rc",yandexMusic:"https://music.yandex.ru/album/79313"},songs:[{name:"\u041E\u0441\u0438\u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043B"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u043F\u0442\u0438\u0446\u0430"},{name:"\u0421\u043E\u043B\u043D\u0446\u0435 \u043C\u043E\u0451"},{name:"\u041B\u044E\u0431\u043E\u0432\u044C"},{name:"\u041F\u043E\u0432\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430 \u0441\u043D\u043E\u0432"},{name:"\u0418\u0434\u0438"},{name:"\u041F\u043E\u043B\u044B\u043D\u044C"},{name:"\u041B\u0451\u0434"},{name:"\u0428\u0443\u0442\u043A\u0430"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u043B\u0433\u0430"},{name:"\u041D\u0430 \u0442\u043E\u043C \u0441\u0432\u0435\u0442\u0435 \u043C\u044B \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043C\u0441\u044F \u0432\u043D\u043E\u0432\u044C"},{name:"\u041E\u0433\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u0451\u0437\u044B \u0433\u0438\u0435\u043D\u044B"},{name:"\u0414\u0430\u0432\u0438\u0442 \u043D\u0435\u0431\u043E"}],info:`
\u041B\u0451\u0441 (\u041B\u0451\u043B\u044F) - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430; \u0428\u043C\u0435\u043B\u044C (\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440) - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043C\u0443\u0437\u044B\u043A\u0430, \u0442\u0435\u043A\u0441\u0442\u044B; \u0420\u043E\u0441\u0441 (\u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432) - \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u0411\u0430\u0437\u0438\u043B\u0438\u043E (\u0418\u0433\u043E\u0440\u044C) - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u041C\u0430\u0440\u0442\u044B\u043D (\u0410\u043D\u0434\u0440\u0435\u0439) - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B.
\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201DShmely rec.\u201D \u0438 \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u201D\u0422\u0435\u043D\u0438\u043F\u201D (095) 963-71-49. \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433 - \u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432 \u0429\u0435\u0440\u0431\u0430\u0442\u043A\u043E (\u0420\u043E\u0441\u0441).
\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u043E\u043A\u0430\u043B\u043E\u0432 \u0438 \u0434\u0432\u0443\u0445 \u043F\u0435\u0441\u0435\u043D; \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430 \u041A\u043E\u0437\u043B\u043E\u0432\u0430 - \u0431\u0430\u043B\u0430\u043B\u0430\u0439\u043A\u0430; \u041E\u043B\u0435\u0433\u0430 \u0422\u0443\u0440\u0442\u044B\u0433\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430; \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u0430\u0441, \u0437\u0430\u043F\u0438\u0441\u044C.
  `},Uc=x_;var S_={id:"vethij-sbornik",name:"\u0412\u0435\u0442\u0445\u0438\u0439 \u0441\u0431\u043E\u0440\u043D\u0438\u043A",year:2005,folder:"/artist/shmely/albums/2005_vs.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79303"},songs:[{name:"\u041F\u043E\u043C\u043E\u043B\u0438\u0441\u044C"},{name:"\u0423 \u0413\u0430\u044E"},{name:"\u041A\u0440\u0438\u0436\u0430\u043D\u0430 \u0432\u043E\u0434\u0430"},{name:"\u0414\u0438\u0432\u043E"},{name:"\u0412\u0435\u0441\u043D\u044F\u043D\u043A\u0430"},{name:"\u041Ci\u0441\u044F\u0446\u044A"},{name:"\u041E-\u041E-\u041E"},{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C"},{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u0414\u0443\u043D\u044F"},{name:"\u0428\u0443\u043B\u043E\u0432\u044C\u0435"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430"},{name:"\u0417\u0430\u0432i\u0442\u0430\u0439"},{name:"\u041E\u0431\u0435\u0441\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0430\u0445"},"saprofag"]},zc=S_;var M_={id:"vosem-zhenshchin-na-raduge",name:"\u0412\u043E\u0441\u0435\u043C\u044C \u0436\u0435\u043D\u0449\u0438\u043D \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435",year:2005,folder:"/artist/shmely/albums/2005_8.jpg",streaming:{spotify:"https://open.spotify.com/album/3XCE0DFw3NkkTXcIXQUBUG",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_n5v0d9QAPVVjafh936OD9bKmlrdjXaJG0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_k78_d1RVxFP6B04ZnTvobzmfJMMYLNN7o",yandexMusic:"https://music.yandex.ru/album/79312"},songs:[{name:"\u0412\u043F\u0435\u0440\u0435\u0434\u0438"},{name:"\u041F\u043E\u0445\u043E\u0440\u043E\u043D\u044B \u043B\u044E\u0431\u0432\u0438"},{name:"\u041F\u043E\u043B\u043D\u043E\u043B\u0443\u043D\u0438\u0435"},{name:"\u0412\u043E\u0441\u0435\u043C\u044C \u0436\u0435\u043D\u0449\u0438\u043D \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435"},{name:"\u041C\u0435\u043B\u044C\u043F\u043E\u043C\u0435\u043D\u0430"},"ya-ne-angel",{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u0421\u043E\u043B\u043D\u0446\u0435 \u0432\u0430\u043C\u043F\u0438\u0440\u0430"},{name:"\u0425\u0443\u0434\u043E\u0436\u043D\u0438\u043A"},{name:"\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0441\u043D\u0430"},{name:"\u0420\u0438\u0442\u0443\u0430\u043B \u0441\u043E\u0436\u0436\u0435\u043D\u0438\u044F \u043A\u0443\u043A\u043E\u043B"},{name:"\u0413\u043B\u043E\u0442\u043E\u043A"},{name:"\u0421\u0442\u043E\u043D \u043E\u043B\u0438\u0446\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F"},{name:"\u0413\u0434\u0435 \u0435\u0441\u0442\u044C \u0442\u044B"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0431\u0430\u0431\u043E\u0447\u043A\u0430"},{name:"\u0420\u0430\u0434\u0443\u0433\u0430 \u043D\u0430\u0434 \u0431\u0435\u043D\u0437\u0438\u043D\u043E\u0432\u043E\u0439 \u043B\u0443\u0436\u0435\u0439"}],info:`
\u041B\u0401\u0421 - \u0432\u043E\u043A\u0430\u043B, \u0445\u043E\u0440\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u0442\u0438\u0438, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
\u0428\u041C\u0415\u041B\u042C - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u043F\u0430\u0440\u0442\u0438\u0438 \u0443\u0434\u0430\u0440\u043D\u044B\u0445, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
A. WATERS - \u0433\u0438\u0442\u0430\u0440\u0430, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0418\u0432\u0430\u043D \u0422\u0438\u043C\u043E\u0448\u0435\u043D\u043A\u043E - \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430; \u0414\u043E\u0441 - \u0441\u043A\u0440\u0438\u043F\u043A\u0430; \u041F\u0430\u0432\u0435\u043B \u0428\u0443\u0432\u0430\u0435\u0432 - \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430; \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u043E\u0432
"A.W.Studio", \u0441\u0442\u0443\u0434\u0438\u044F "\u0422\u0415\u041D\u0418\u041F" 2005 \u0433.
  `},Wc=M_;var T_={id:"pugovica",name:"\u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430",year:2006,folder:"/artist/shmely/albums/2006_pugovica.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79314"},songs:["intro",{name:"\u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430"},{name:"\u0410\u043D\u0433\u0435\u043B 13"},{name:"\u0421\u0442\u0440\u0438\u043F\u0442\u0438\u0437 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0434\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F"},{name:"\u041C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441"},"gilotina","zver","renessans","antiromantika",{name:"\u0425\u043E\u0434\u0438\u0442 \u0447\u0451\u0440\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u043B\u0435\u0432\u0430"},{name:"\u0412\u0430\u043B\u044C\u0441 \u0432\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u044B\u0445 \u0432\u043E\u043B\u043D"},{name:"\u041A\u0430\u0442\u0451\u043D\u043A\u0430"},{name:"\u041C\u0438\u0440 - \u043A\u043E\u043C\u0435\u0434\u0438\u044F"},"sudorogi"],info:`
\u0421\u043E\u043B\u044C\u043D\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C \u041B\u0451\u0441\u0430 \u0438 \u0428\u043C\u0435\u043B\u044F \u041F\u0423\u0413\u041E\u0412\u0418\u0426\u0410
\u0418\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043B\u0441\u044F \u043A\u0430\u043A \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439. \u041D\u043E \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F \u0431\u044B\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430. \u0412 \u043D\u0435\u0433\u043E \u0432\u043E\u0448\u043B\u0438 \u0442\u0430\u043A\u0436\u0435 \u043F\u0435\u0441\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 Lyolya & Shmel'. \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0432 \u0445\u043E\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u0438\u043D\u044F\u043B \u0443\u0447\u0430\u0441\u0442\u0438\u0435 Alan Waters. \u0422\u0430\u043A \u0447\u0442\u043E \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043F\u043E\u043B\u043D\u0435 \u043C\u043E\u0436\u043D\u043E \u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u043E\u0439 \u0428\u041C \u0438 AW, \u0435\u0441\u043B\u0438 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u0432 \u0441\u0447\u0451\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u043F\u0435\u0441\u0435\u043D.
  `},Gc=T_;var k_={id:"ya-vernus-k-tebe",name:"\u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u043A \u0442\u0435\u0431\u0435",year:2006,folder:"/artist/shmely/albums/2006_vernus.jpg",songs:[{name:"\u0416\u0434\u0438 \u043C\u0435\u043D\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u0447\u044C"},{name:"\u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445"},{name:"\u0412\u044C\u044E\u0433\u0430"},"laboratoriya-altruizma",{name:"\u0413\u0440\u043E\u0437\u0430"},"biomekhanika",{name:"\u041A\u043B\u043E\u0443\u043D \u0443\u043C\u0435\u0440"},"bol","pokidaya-mir",{name:"\u0412\u0441\u0435 \u043C\u0435\u0447\u0442\u044B \u0441\u0431\u044B\u0432\u0430\u044E\u0442\u0441\u044F"},{name:"\u0414\u0440\u0430\u043C\u0430"},{name:"\u042D\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440"},{name:"\u0414\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F"}],info:`
\u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u0432 \u0438 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u0432, \u0437\u0434\u0435\u0441\u044C \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u0440\u0435\u0448\u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0436\u0438\u0432\u044B\u0435 \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u0447\u0442\u043E, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u043E\u0442\u0440\u0430\u0437\u0438\u043B\u043E\u0441\u044C \u043D\u0430 \u043E\u0431\u0449\u0435\u043C \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B. \u0412\u043E \u043C\u043D\u043E\u0433\u043E\u043C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u043E\u0432\u043E\u043C\u0443 \u0432\u0442\u043E\u0440\u043E\u043C\u0443 \u0433\u0438\u0442\u0430\u0440\u0438\u0441\u0442\u0443 \u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0446\u0443 \u0441\u0430\u0443\u043D\u0434 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0442\u044F\u0436\u0435\u043B\u0438\u043B\u0441\u044F, \u0433\u0438\u0442\u0430\u0440\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0435\u0432\u0443\u0442 \u0438 \u0440\u0430\u0437\u0434\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u043C\u043E\u0449\u044C\u044E \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u0430\u043B\u044C\u0431\u043E\u043C\u0430. \u0422\u0430\u043A\u043E\u0433\u043E \u043C\u043E\u0449\u043D\u043E\u0433\u043E \u0437\u0432\u0443\u043A\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430.
\u041F\u043E \u0441\u0443\u0442\u0438 \u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u043A \u0442\u0435\u0431\u0435... \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u043C, \u0430 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C \u0438\u0437 \u043A\u043E\u0440\u043E\u043D\u043D\u044B\u0445 \u0436\u0438\u0432\u044B\u0445 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B, \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043D\u043E\u0432\u043E, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0430\u0440\u044B \u043D\u043E\u0432\u044B\u0445 \u043F\u0435\u0441\u0435\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043F\u0440\u043E\u0447\u0435\u043C, \u043D\u0435 \u0443\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u0432 \u0445\u0438\u0442\u043E\u0432\u043E\u0441\u0442\u0438 \u0441\u0442\u0430\u0440\u044B\u043C \u043F\u0435\u0441\u043D\u044F\u043C. \u0417\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u043B\u043E\u043D\u043D\u0438\u043A\u0438 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u0430 \u043D\u0430\u0439\u0434\u0443\u0442 \u0442\u0430\u043A\u0438\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043A\u0430\u043A \u0411\u043E\u043B\u044C, \u0413\u0440\u043E\u0437\u0430, \u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445 \u0438 \u0434\u0430\u0436\u0435 \u0442\u0430\u043A\u0443\u044E \u0434\u0440\u0435\u0432\u043D\u044E\u044E \u043F\u0435\u0441\u043D\u044E \u043A\u0430\u043A \u0412\u044C\u044E\u0433\u0430. \u041A \u043C\u0438\u043D\u0443\u0441\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043D\u0435\u0441\u0442\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437\u043C\u044B\u0442\u044B\u0439 \u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0436\u0438\u0432\u043E\u0439 \u0437\u0432\u0443\u043A, \u043F\u043E\u0440\u043E\u0439, \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0430\u043B\u044C\u0431\u043E\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043D\u044F\u0442\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043D\u0438\u043A\u043E\u043C, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0432\u0440\u0430\u0437\u0443\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u0432 \u0432\u0438\u0434\u0435 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0414\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F.
  `},Yc=k_;var A_={id:"koshkiny-obidy",name:"\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B",year:2007,folder:"/artist/shmely/albums/2007_obidy.jpg",streaming:{spotify:"https://open.spotify.com/album/4GUxH5Jfgjt8as9HOTgert",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_lR7Pe58N1QAhRwvosJkNnfAnnm1vtxoS0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lDcR1z3lQhYexnJx3XtUCozmhSDzgbLuw",yandexMusic:"https://music.yandex.ru/album/3444128"},songs:[{name:"\u0423\u0445\u043E\u0434\u0438"},{name:"\u0427\u0435\u0440\u0435\u043F. \u0421\u043B\u0451\u0437\u044B."},{name:"\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B"},{name:"\u041F\u0430\u043D\u0442\u043E\u043C\u0438\u043C\u0430"},{name:"\u041C\u0435\u0447"},{name:"\u0420\u0430\u0432\u043D\u043E\u0434\u0443\u0448\u043D\u043E"},{name:"\u0417\u043B\u043E \u0440\u0435\u043A\u0438"},{name:"\u041B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0438\u0445\u043E\u0434"},{name:"\u0416\u0435\u0440\u0442\u0432\u0430"},{name:"\u0421\u0443\u0435\u0442\u0430"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430 \u043A \u043C\u043E\u0440\u044E"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u043B\u0435\u0442\u0443\u0447\u0430\u044F \u043C\u044B\u0448\u044C"},{name:"\u0417\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u043E\u043C (Shado News)"},{name:"La Rencontre (Steve Love)"}],info:`
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
  `},qc=A_;var j_={id:"karamelnyye-strahi",name:"\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438",year:2008,folder:"/artist/shmely/albums/2008_strahi.jpg",streaming:{spotify:"https://open.spotify.com/album/7biUa81AdYs3MZ44VKMJXr",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_mP9ymhFypJA4WYW-baAVJ0yKUwGO0-M8g",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nXeF2ClIBVJ0TsyEbRNV7FoJFjjtssJUY",yandexMusic:"https://music.yandex.ru/album/3444127"},songs:[{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u0432 \u0441\u0435\u0440\u043E\u043C"},{name:"\u0421\u0432\u0430\u0434\u044C\u0431\u044B \u043D\u0435 \u0431\u0443\u0434\u0435\u0442"},{name:"\u041C\u0430\u043C\u0430"},{name:"\u041D\u0435\u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435 \u0441\u043D\u044B (\u0441\u0442\u0438\u0445)"},{name:"\u041A\u043E\u043B\u044B\u0431\u0435\u043B\u044C\u043D\u0430\u044F+"},{name:"\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438"},{name:"\u0420\u0430\u043D\u044B"},{name:"\u042F \u0442\u0435\u0431\u044F \u043B\u044E\u0431\u043B\u044E"},{name:"\u0417\u043C\u0435\u044F \u044D\u0439\u0444\u043E\u0440\u0438\u044F"},{name:"\u042F \u0431\u0443\u0434\u0443 \u0436\u0438\u0442\u044C"},{name:"\u041D\u0435\u0440\u0432\u044B"},{name:"\u041B\u0438\u0440\u0438\u043A\u0430"},{name:"\u0426\u0432\u0435\u0442 \u0434\u043E\u0436\u0434\u044F (bonus track)"},{name:"\u0412 \u0436\u0438\u0432\u044B\u0445 \u0438\u0433\u0440\u0430\u044E\u0442 \u043C\u0435\u0440\u0442\u0432\u0435\u0446\u044B (bonus track)"}]},Zc=j_;var N_={id:"moskovskaya-yarmarka-udovolstvij",name:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u044F\u0440\u043C\u0430\u0440\u043A\u0430 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0439",year:2009,folder:"/artist/shmely/albums/2009_myau.jpg",streaming:{spotify:"https://open.spotify.com/album/0wzOwUeEa3fVPI77pJRK8E",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_loV5x6XOgMrmUH5w9d1IlTiuF_jGr3ll8",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nH21z5pDqYVpk4W06KePL0KE-pMCeRVCw",yandexMusic:"https://music.yandex.ru/album/3444131"},songs:[{name:"\u0412\u0441\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C"},{name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430 \u0441 \u0447\u0451\u0440\u043D\u044B\u043C\u0438 \u0431\u0430\u043D\u0442\u0438\u043A\u0430\u043C\u0438"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0442\u0435\u043D\u044C"},{name:"\u0416\u0451\u043B\u0443\u0434\u0438"},{name:"\u041B\u044E\u0431\u043E\u0432\u044C \u0438\u0437 \u0441\u0442\u0435\u043A\u043B\u0430"},{name:"\u041B\u0430\u0441\u043A\u0430"},{name:"\u041A\u0440\u0438\u0437\u0438\u0441"},{name:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u044F\u0440\u043C\u0430\u0440\u043A\u0430 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0439"},{name:"\u041F\u0438\u0440"},{name:"\u0414\u0432\u0435 \u0441\u0442\u043E\u043B\u0438\u0446\u044B"},{name:"\u0411\u0440\u044E\u0445\u043E"},{name:"\u0417\u043E\u044F"},{name:"\u0413\u0434\u0435? (bonus track)"},{name:"\u0421 \u041D\u043E\u0432\u044B\u043C \u0433\u043E\u0434\u043E\u043C (bonus track)"},{name:"\u041C\u043B\u0435\u0447\u043D\u0430\u044F \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u044F (bonus track)"}]},Qc=N_;var R_={id:"mekhanicheskaya-balerina",name:"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430",year:2010,folder:"/artist/shmely/albums/2010_balerina.jpg",streaming:{spotify:"https://open.spotify.com/album/0AoYg8ddVNIoismWBYv7jp",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_lKAK6qxtulNpigAsSzglJMTDsX86CWRZg",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_kAfpmxC-5vpT_zMwug5HcuXsnFi4l41bo",yandexMusic:"https://music.yandex.ru/album/3444129"},songs:[{name:"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430"},{name:"\u041B\u044E\u0434\u0438"},{name:"\u041A\u0430\u043A\u043E\u0444\u043E\u043D\u0438\u044F \u0441\u0435\u0440\u0434\u0435\u0446"},{name:"\u0412\u0435\u0449\u0438\u0439 \u0441\u043E\u043D"},{name:"\u041F\u0440\u0451\u0442? \u0422\u0430\u043A \u043F\u0440\u0438!"},{name:"\u0416\u0433\u0438"},{name:"\u041B\u044B\u0441\u0430\u044F \u0433\u043E\u0440\u0430"},{name:"\u041D\u0435\u0431\u043E \u043F\u0440\u043E\u0442\u0438\u0432"},{name:"\u041A\u043E\u0442\u0435\u0439\u043A\u0430 \u043D\u0430 \u0442\u0440\u0451\u0445 \u043D\u043E\u0436\u043A\u0430\u0445"},{name:"\u0421\u043D\u043E\u0432\u0430 \u043F\u0440\u043E \u043B\u044E\u0431\u043E\u0432\u044C, \u0431\u043B\u0438\u043D"},{name:"\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C"},{name:"\u041A\u043E\u043B\u044B\u0431\u0435\u043B\u044C\u043D\u0430\u044F++"},{name:"\u0410\u0435\u043B\u044C-\u0410\u0443\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0438\u0433\u0440\u0430 (bonus track)"}]},Kc=R_;var O_={id:"toplivo",name:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E",year:2010,folder:"/artist/shmely/albums/2010_toplivo.jpg",streaming:{spotify:"https://open.spotify.com/album/0frmw2fWFkFtuoeobgciN8",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kkufNdmy_VwLed5KlwFD4q4LfGwmPF8JU",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nFcLyMsmp6FHj0wt6J3w--1qXcmgyX_xY",yandexMusic:"https://music.yandex.ru/album/3444135"},songs:[{name:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E-\u0436\u0438\u0437\u043D\u044C"},{name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u0438 \u0442\u044B"},{name:"\u041F\u0430\u0440\u0443\u0441\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u0437\u0430 \u0440\u0443\u043B\u0451\u043C"},{name:"\u0427\u0435\u0440\u0451\u043C\u0443\u0445\u0430"},{name:"\u041C\u0435\u043B\u0430\u043D\u0445\u043E\u043B\u0438\u044F"},{name:"\u041B\u0430\u0441\u043A\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0434\u0435\u0446"},{name:"\u041D\u0430\u0439\u0434\u0438..."},{name:"\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0435\u0447\u0442\u044B"},{name:"\u0425\u0432\u043E\u0440\u044C"},{name:"\u0414\u043E\u043A\u0442\u043E\u0440 \u041C\u043E\u0442\u043E\u0440\u0444\u0438\u043B"},{name:"\u041D\u0435\u0444\u0442\u044C \u0410\u043B\u043B\u0438\u043B\u0443\u0439\u044F"},{name:"\u0425\u043E\u0440\u043E\u0432\u043E\u0434"},{name:"\u041F\u043B\u044E\u0448\u0435\u0432\u044B\u0435 \u0437\u043E\u043C\u0431\u0438"},{name:"\u0422\u0440\u0443\u043D\u0430 \u043D\u0430 \u043A\u043E\u043B\u0451\u0441\u0430\u0445"},{name:"\u0411\u043E\u0433 \u043B\u044E\u0431\u0438\u0442 \u0441\u0435\u0431\u044F"}]},Jc=O_;var P_={id:"cekh-po-reabilitacii-paranoikov",name:"\u0426\u0435\u0445 \u043F\u043E \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043D\u043E\u0438\u043A\u043E\u0432",year:2011,folder:"/artist/shmely/albums/2010_crp.jpg",streaming:{spotify:"https://open.spotify.com/album/74KcaQJrAjhzeHvW6rZUIQ",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nvSuftR3G7q_K8Vs-fiCNpZl3ElyIU9aI",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_mPPAXZrdGJIx_q2kUTz6POPoJdG26koUc",yandexMusic:"https://music.yandex.ru/album/3444136"},songs:[{name:"\u0421\u0432\u0435\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F"},{name:"\u041E\u0442\u0432\u0430\u043B\u0438, \u043C\u043E\u044F \u0447\u0435\u0440\u0435\u0448\u043D\u044F"},{name:"\u0411\u044B\u043B\u0438 \u043C\u044B (new version)"},{name:"\u042F \u0445\u043E\u0447\u0443 \u0431\u044B\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u043E\u043C"},{name:"\u041A\u0430\u0442\u0451\u043D\u043A\u0430 (new version)"},{name:"\u0426\u0435\u0445 \u043F\u043E \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043D\u043E\u0438\u043A\u043E\u0432"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430-2 (\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435)"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430 (new version)"},{name:"\u0417\u0430\u0433\u043E\u0432\u043E\u0440\u043A\u0430"},{name:"\u041F\u0430\u043D\u0438\u043A\u0430 (\u0438\u0437 \u0446\u0438\u043A\u043B\u0430 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438)"},{name:"\u041F\u043E\u0447\u0442\u0430"},{name:"\u0425\u0430\u043B\u044F\u0432\u0430 (\u0438\u0437 \u0446\u0438\u043A\u043B\u0430 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438)"}]},Xc=P_;var F_={id:"teatr-urodov",name:"\u0422\u0435\u0430\u0442\u0440 \u0443\u0440\u043E\u0434\u043E\u0432",year:2011,folder:"/artist/shmely/albums/2011_teatr.jpg",streaming:{spotify:"https://open.spotify.com/album/40ou3ofmt60WN6Z1LXpF0p",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kziusKHBqOaVCF3vKxL1PcshlkPV1UU5U",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_liV01e1JDnannkLWqdmM7BJv613aPj9Ws",yandexMusic:"https://music.yandex.ru/album/3444134"},songs:[{name:"\u0423\u043B\u0451\u0442"},{name:"\u0421\u0430\u043D\u0438\u0442\u0430\u0440\u043A\u0430"},{name:"\u0422\u0430\u0442\u0443 \u043D\u0430 \u043F\u043E\u043F\u0435"},{name:"\u041C\u0430\u044D\u0441\u0442\u0440\u043E \u0443\u0436\u0430\u0441\u043E\u0432"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430 \u043F\u0443\u0441\u0442\u0430"},{name:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043F\u043E\u0435\u0437\u0434"},{name:"\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A"},{name:"\u041F\u043E\u0446\u0435\u043B\u0443\u0438"},{name:"\u0410\u0445, \u0443 \u0435\u043B\u0438"},{name:"\u041C\u0430\u043B\u043E"},{name:"\u0422\u0435\u0430\u0442\u0440 \u0443\u0440\u043E\u0434\u043E\u0432"},{name:"\u041A\u0440\u0410\u0417 255"},{name:"\u0421\u0443\u0434\u044C\u0431\u0430"},{name:"\u041C\u0443-\u041C\u0443 \u0436\u0438\u0432\u0430"}]},ed=F_;var L_={id:"para-trupov",name:"\u041F\u0430\u0440\u0430 \u0442\u0440\u0443\u043F\u043E\u0432",year:2013,folder:"/artist/shmely/albums/2013_para.jpg",streaming:{spotify:"https://open.spotify.com/album/6AfviE2K704Bym6YNCdMMk",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nTkPpeyc83R9Kt6M9PaGmyy59OHDa5ovQ",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nQT0FMPii6bQHu7gPMH0Cu3X9kinOkYbU",yandexMusic:"https://music.yandex.ru/album/3444132"},songs:[{name:"\u0417\u0432\u0451\u0437\u0434\u044B \u0441\u0432\u0435\u0442\u044F\u0442 \u044F\u0440\u0447\u0435"},{name:"\u0411\u0435\u043B\u044B\u0435 \u0447\u0443\u043B\u043E\u0447\u043A\u0438"},{name:"\u041F\u0430\u0440\u0430 \u0442\u0440\u0443\u043F\u043E\u0432"},{name:"\u041D\u0430 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u043C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0435"},{name:"\u041D\u043E\u0432\u0430\u044F \u0440\u0430\u0434\u043E\u0441\u0442\u044C"},{name:"\u041A\u0443\u043A\u043B\u0430 \u0413\u0435\u0440\u0434\u0430"},{name:"\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0438 \u041C\u043E\u0441\u043A\u0432\u044B"},{name:"\u0414\u0438\u0437\u0430\u0439\u043D"},{name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u043F\u043E \u0410\u0434\u0443"},{name:"\u0410\u043D\u0441\u0430\u043C\u0431\u043B\u044C"},{name:"\u0413\u0440\u043E\u0431\u043E\u0432\u0449\u0438\u043A"}]},td=L_;var V_={id:"belyj-karandash",name:"\u0411\u0435\u043B\u044B\u0439 \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448",year:2014,folder:"/artist/shmely/albums/2014_karandash.jpg",streaming:{spotify:"https://open.spotify.com/album/4BKbUBCtcHXI55rIgRK1N2",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_me_kZEdgKM1vA9Z3ztRoX4z7PGpIzFXQo",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_liI8wzWEd8L3cCk0h6iXOxEnakMSfvEz8",yandexMusic:"https://music.yandex.ru/album/3444125"},songs:[{name:"\u0421\u0435\u0440\u0434\u0446\u0435 \u0411\u043E\u0433\u0430"},{name:"\u0411\u0435\u043B\u044B\u0439 \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448"},{name:"\u0421\u0435\u0439 \u0447\u0430\u0441"},{name:"\u041F\u043E\u0434 \u0430\u0441\u0444\u0430\u043B\u044C\u0442"},{name:"\u0411\u0435\u0437\u043E\u0442\u0432\u0435\u0442\u043D\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u0412\u0441\u0435\u043B\u0435\u043D\u0441\u043A\u0438\u0439 \u043E\u0440\u0433\u0430\u0437\u043C"},{name:"\u041A\u0430\u0431\u0430\u0440\u0435"},{name:"\u041F\u043E\u0442\u0435\u0445\u0430"},{name:"\u041D\u0430\u043F\u043E\u0438 \u043D\u0430\u0441"},{name:"\u041F\u043E\u043F\u0443\u0442\u0447\u0438\u0446\u0430"},{name:"\u0414\u0440\u0443\u0433\u043E\u0439 \u0441\u043C\u0435\u0445"},{name:"\u041E\u043A\u0435\u0430\u043D\u043E\u043C\u0430\u0433\u0438\u044F"},{name:"\u041F\u044B\u043B\u0430\u044E\u0449\u0438\u0439 \u0430\u043D\u0433\u0435\u043B"},{name:"\u041D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430"},{name:"\u0410\u043D\u0434\u0440\u043E\u043C\u0435\u0434\u0430"}]},nd=V_;var B_={id:"zloradostnaya-opuhol-new",name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C. \u041F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D\u0438\u0435",year:2016,folder:"/artist/shmely/albums/2016_zo.jpg",streaming:{spotify:"https://open.spotify.com/album/4Q4riSrf2rdfmY6EllfbRp",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kf4b67Cf_KzFSmA1Ya-ptvWjGMmG9rfWs",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lEU8oxwMxMRJ8Qm8pCykRlxwEBZBbYlK0",yandexMusic:"https://music.yandex.ru/album/3444126"},songs:[{name:"\u0411\u044B\u043B\u0438 \u043C\u044B"},{name:"\u041B\u0435\u0437\u0432\u0438\u0435"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430"},{name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C"},{name:"\u0413\u043B\u0438\u0441\u0442\u044B"},{name:"\u0428\u0435\u0439\u043A \u0448\u0435\u0439\u043A \u0447\u0430 \u0447\u0430 \u0447\u0430"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430"},{name:"\u0421\u043C\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430"},{name:"\u041C\u0443\u0442\u0430\u043D\u0442\u044B"},{name:"\u0414\u0436\u0430\u0433\u0438 \u043C\u0435\u0440\u0442\u0432\u0435\u0435 \u0432\u0441\u0435\u0445 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0410\u043F\u043E\u043A\u0430\u043B\u0438\u043F\u0441\u0438\u0441"},{name:"\u041F\u0435\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"}]},rd=B_;var $_={id:"16-chudes",name:"16 \u0447\u0443\u0434\u0435\u0441",year:2016,folder:"/artist/shmely/albums/2016_16.jpg",streaming:{spotify:"https://open.spotify.com/album/20RNbLgkaoqnmqM6aZ5ppb",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_k5j2ONFgCxjaMibPrmWT_7cqOZpokpY0A",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lvl4Bi2EQ2Cr_pT1KK0COoNLGwDAHRHUE",yandexMusic:"https://music.yandex.ru/album/4090274"},songs:[{name:"\u0428\u0443\u043A\u0430\u0439"},{name:"\u0414\u0443\u0448\u0430 \u043D\u0435 \u043B\u0430\u0434\u0438\u0442 \u0441 \u0441\u0435\u0440\u0434\u0446\u0435\u043C"},{name:"\u0421\u0432\u0435\u0442\u0438\u0442\u0441\u044F \u043C\u0433\u043B\u0430"},{name:"\u041A\u043B\u0438\u0447\u0435 \u043D\u0430 \u043E\u0437\u0435\u0440\u0430"},{name:"\u0410\u043D\u0438\u043C\u0430\u0442\u043E\u0440\u044B"},{name:"\u0425\u0430\u043E\u0441 \u0447\u043E\u0440\u043D\u043E\u0442\u0438"},{name:"\u042F \u0445\u043E\u0447\u0443 \u0431\u0430\u0447\u0438\u0442\u0438 \u0442\u0435\u0431\u0435"},{name:"\u0411\u0430\u0440\u0434\u044B \u0427\u0435\u0440\u043D\u043E\u0431\u044B\u043B\u044F"},{name:"\u0411\u043E\u0439\u0441\u044F \u0441\u0435\u0431\u044F \u043A\u043E\u0433\u0434\u0430 \u043F\u044C\u044F\u043D"},{name:"\u0417\u043E\u043C\u0431\u0438 \u0440\u043E\u0434\u0441\u0442\u0435\u0440"},{name:"\u041E\u043B \u0438\u043D\u043A\u043B\u044E\u0437\u0438\u0432"},{name:"\u041B\u0430\u0432\u0430\u0448\u0430\u0431\u0430\u0448"}]},id=$_;var H_={id:"mizantropiya",name:"\u041C\u0438\u0437\u0430\u043D\u0442\u0440\u043E\u043F\u0438\u044F",year:2016,folder:"/artist/shmely/albums/2016_mizantropiya.jpg",streaming:{spotify:"https://open.spotify.com/album/5fyLR7SyykWK1EmVKesNNK",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_ni5xNthJBzgd9MZ63IBNDGsWa0rtcuJA0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_ly9XGbpMjncfPi2jDs8Kyq9bm47Iiezuc",yandexMusic:"https://music.yandex.ru/album/4184010"},songs:[{name:"\u041B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0442\u0435\u0445\u0438"},{name:"\u0425\u043E\u0442\u0438\u0432 \u0441\u043F\u0438\u0442\u0430\u0442\u0438"},{name:"\u041D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"},{name:"\u041D\u0435 \u0441\u0443\u043C\u0443\u0432\u0430\u0442\u0438"},{name:"\u041F\u043E\u0437\u0434\u043D\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0436\u0438\u0437\u043D\u044C"},{name:"\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0438\u0439 \u0441\u0432i\u0442"},{name:"\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0438"},{name:"\u0427\u043E\u0432\u0435\u043D \u0421\u0442\u0440\u0430\u0445\u0443"},{name:"\u041C\u0438\u0437\u0430\u043D\u0442\u0440\u043E\u043F\u0438\u044F"},{name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0431i\u043B\u0438\u0437\u043C"},{name:"\u0410\u0434\u0441\u043A\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"},{name:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u044C"},{name:"\u0421\u0432\u0430\u0438"},{name:"\u0422\u043E\u043A"},{name:"\u0412\u0435\u0434\u044C\u043C\u044B \u043C\u043E\u0438"}]},od=H_;var Ag={[Ic.id]:Ic,[Cc.id]:Cc,[Ec.id]:Ec,[_c.id]:_c,[xc.id]:xc,[Sc.id]:Sc,[Mc.id]:Mc,[Tc.id]:Tc,[kc.id]:kc,[Ac.id]:Ac,[jc.id]:jc,[Nc.id]:Nc,[Rc.id]:Rc,[Oc.id]:Oc,[Pc.id]:Pc,[Fc.id]:Fc,[Lc.id]:Lc,[Vc.id]:Vc,[Bc.id]:Bc,[$c.id]:$c,[Hc.id]:Hc,[Uc.id]:Uc,[zc.id]:zc,[Wc.id]:Wc,[Gc.id]:Gc,[Yc.id]:Yc,[qc.id]:qc,[Zc.id]:Zc,[Qc.id]:Qc,[Kc.id]:Kc,[Jc.id]:Jc,[Xc.id]:Xc,[ed.id]:ed,[td.id]:td,[nd.id]:nd,[rd.id]:rd,[id.id]:id,[od.id]:od};var U_={id:"daj-garri",name:["\u0414\u0430\u0439 \u0413\u0430\u0440\u0440\u0438"],albums:["trotilovyye-skazki"],text:`
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
`},sd=U_;var z_={id:"ya-vselennaya",name:["\u042F \u2013 \u0412\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F"],albums:["spazmy-roka","poshmelye"],authors:"\u0428\u043C\u0435\u043B\u044C",duration:196,text:`
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
`},ad=z_;var W_={id:"na-ladoni-planeta",name:["\u041D\u0430 \u043B\u0430\u0434\u043E\u043D\u0438 \u043F\u043B\u0430\u043D\u0435\u0442\u0430"],albums:["spazmy-roka","poshmelye"],authors:"\u0428\u043C\u0435\u043B\u044C",duration:187,text:`
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
`},ld=W_;var G_={id:"poshmelye",name:["\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435"],albums:["poshmelye"],clipYouTubeId:"ArmZpTJd4_0",authors:"\u0421\u0442\u0430\u043A\u0430\u043D \u0438 \u041C\u0430\u043A\u0441 \u042D\u043A\u0441 - \u041C\u0430\u043A\u0441 \u042D\u043A\u0441",duration:192,text:`
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
`},ud=G_;var Y_={id:"kak-izydet-svet",name:["\u041A\u0430\u043A \u0438\u0437\u044B\u0434\u0435\u0442 \u0441\u0432\u0435\u0442..."],albums:[],text:`
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
`},cd=Y_;var q_={id:"laboratoriya-altruizma",name:["\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C\u0430"],albums:["moshchi","organizm","risunki-na-dushe","agressivnyj-pokoj","polna-suma","ya-vernus-k-tebe"],text:`
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
`},dd=q_;var Z_={id:"antiromantika",name:["\u0410\u043D\u0442\u0438\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430"],albums:["pugovica"],text:`
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
`},fd=Z_;var Q_={id:"biomekhanika",name:["\u0411\u0438\u043E\u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0430"],albums:["ya-vernus-k-tebe"],text:`
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
`},pd=Q_;var K_={id:"blagodat",name:["\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C"],albums:["agressivnyj-pokoj"],text:`
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
`},hd=K_;var J_={id:"bol",name:["\u0411\u043E\u043B\u044C"],albums:["agressivnyj-pokoj","ya-vernus-k-tebe"],clipYouTubeId:"UShBtzycUsY",text:`
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
`},md=J_;var X_={id:"britogolovye-moskvichki",name:["\u0411\u0440\u0438\u0442\u043E\u0433\u043E\u043B\u043E\u0432\u044B\u0435 \u043C\u043E\u0441\u043A\u0432\u0438\u0447\u043A\u0438"],albums:[],authors:"\u041F\u0430\u0443\u043A",text:`
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
`},gd=X_;var ex={id:"divchina-kulya",name:["\u0414i\u0432\u0447\u0438\u043D\u0430-\u043A\u0443\u043B\u044F"],albums:["petlya-soblazna","trahni-nebo"],clipYouTubeId:"d7O9aDr7las",text:`
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
`},yd=ex;var tx={id:"fokusnik",name:["\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A"],albums:["teatr-urodov"],text:`
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
`},vd=tx;var nx={id:"gilotina",name:["\u0413\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430 \u0432 \u0446\u0432\u0435\u0442\u0430\u0445"],albums:["pugovica"],clipYouTubeId:"cFLeFuZwbmc",text:`
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
`},wd=nx;var rx={id:"intro",name:["\u0412\u0441\u0451 \u0431\u0443\u0434\u0435\u0442 \u0445\u043E\u0440\u043E\u0448\u043E (intro)"],albums:["pugovica"],text:`
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
`},bd=rx;var ix={id:"maneken",name:["\u041C\u0430\u043D\u0435\u043A\u0435\u043D"],albums:["agressivnyj-pokoj"],clipYouTubeId:"exkzYZohXRg",text:`
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
`},Dd=ix;var ox={id:"zver",name:["\u0417\u0432\u0435\u0440\u044C"],albums:["pugovica"],clipYouTubeId:"GArQ6RYZi9c",text:`
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
`},Id=ox;var sx={id:"novaya-religiya",name:["\u041D\u043E\u0432\u0430\u044F \u0440\u0435\u043B\u0438\u0433\u0438\u044F"],albums:["spazmy-roka","poshmelye"],duration:183,text:`
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
`},Cd=sx;var ax={id:"patologoanatom",name:["\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C"],albums:["spazmy-roka","risunki-na-dushe","poshmelye"],duration:184,text:`
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
`},Ed=ax;var lx={id:"pechal-prekrasna",name:["\u041F\u0435\u0447\u0430\u043B\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0430"],albums:[],authors:"\u0428\u043C\u0435\u043B\u044C",text:`
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
`},_d=lx;var ux={id:"pokidaya-mir",name:["\u041F\u043E\u043A\u0438\u0434\u0430\u044F \u043C\u0438\u0440"],albums:["organizm","ya-vernus-k-tebe"],clipYouTubeId:"LG8BvZiYcDA",text:`
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
`},xd=ux;var cx={id:"polna-suma",name:["\u041F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430","\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043E\u0441\u0442\u0440\u043E\u0432"],albums:["bomba-v-ubezhishche","organizm","polna-suma"],text:`
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
`},Sd=cx;var dx={id:"raspyatie",name:["\u0417\u0432\u0451\u0437\u0434\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u044F\u0442\u0438\u0435"],albums:["tulovishche","trahni-nebo"],text:`
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
`},Md=dx;var fx={id:"renessans",name:["\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441"],albums:["pugovica"],text:`
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
`},Td=fx;var px={id:"saprofag",name:["\u0421\u0430\u043F\u0440\u043E\u0444\u0430\u0433"],albums:["spazmy-roka","vethij-sbornik"],text:`
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
`},kd=px;var hx={id:"skelety",name:["\u0421\u043A\u0435\u043B\u0435\u0442\u044B"],albums:["risunki-na-dushe","poshmelye"],clipYouTubeId:"sm_W3X9wYo0",duration:237,text:`
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
`},Ad=hx;var mx={id:"skvoz-ogon",name:["\u0421\u043A\u0432\u043E\u0437\u044C \u043E\u0433\u043E\u043D\u044C \u0434\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434\u0430"],albums:[],text:`
\u041C\u0438\u043B\u043B\u0438\u043E\u043D \u0434\u043E\u0440\u043E\u0433 \u044F \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u0430,
\u0411\u0435\u0437 \u0442\u0435\u0431\u044F \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u043D\u0435 \u043C\u0438\u043B
\u0411\u0435\u0437 \u0442\u0435\u0431\u044F \u0436\u0438\u0432\u043E\u0435 \u0432\u0441\u0451 \u043E\u0441\u0442\u044B\u043B\u043E,
\u042F \u043E\u0434\u043D\u0430 \u0441\u0440\u0435\u0434\u0438 \u043C\u043E\u0433\u0438\u043B

\u0413\u0434\u0435-\u0442\u043E \u0437\u0430\u043A\u0440\u0443\u0436\u0438\u0442\u0441\u044F \u043B\u0438\u0441\u0442\u0432\u0430,
\u0413\u0434\u0435-\u0442\u043E \u0437\u0430\u0436\u0433\u0443\u0442\u0441\u044F \u0437\u0432\u0451\u0437\u0434\u044B,
\u041C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0441\u0442\u0440\u0430\u0448\u043D\u043E, \u043D\u043E \u043F\u043E\u043A\u0430
\u041D\u0435\u0442 \u0441\u043B\u043E\u0432\u0430 "\u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E"

\u0421\u043A\u0432\u043E\u0437\u044C \u043E\u0433\u043E\u043D\u044C \u0434\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434\u0430
\u041A\u0430\u043A \u0436\u0430\u0434\u043D\u0430 \u0441\u0443\u0434\u044C\u0431\u0430 \u043A \u043D\u0435\u0438\u0437\u0432\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u0441\u0442\u0438!
\u0421\u043A\u0432\u043E\u0437\u044C \u043E\u0433\u043E\u043D\u044C \u0434\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434\u0430
\u041D\u043E \u044F \u0434\u043E\u0431\u044C\u044E\u0441\u044C \u0436\u0435\u043B\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0447\u0430\u0441\u0442\u044C\u044F!

\u0421\u0430\u043C\u044B\u0435 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0435 \u043C\u0435\u0447\u0442\u044B \u0445\u0440\u0430\u043D\u0438\u043B\u0430 -
\u0414\u043B\u044F \u0442\u0435\u0431\u044F, \u043B\u0438\u0448\u044C \u0434\u043B\u044F \u0442\u0435\u0431\u044F!
\u0412\u0441\u0451 \u0432\u043E\u043A\u0440\u0443\u0433 \u0441\u0435\u0431\u044F \u043F\u043E\u0445\u043E\u0440\u043E\u043D\u0438\u043B\u0430,
\u0422\u044B \u043C\u043E\u0451 \u043D\u0435\u0431\u043E \u0438 \u0437\u0435\u043C\u043B\u044F!

\u0413\u0434\u0435-\u0442\u043E \u0437\u0430\u043F\u043B\u0430\u0447\u0435\u0442 \u043F\u0442\u0438\u0446\u0435\u0439 \u0436\u0438\u0437\u043D\u044C,
\u0410 \u044F \u0437\u0430\u0432\u043E\u044E \u0432\u043E\u043B\u043A\u043E\u043C,
\u0422\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u0436\u0434\u0438\u0441\u044C \u0438 \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0438\u0441\u044C,
\u0415\u0449\u0451 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0435\u0434\u043E\u043B\u0433\u043E!

\u0412\u0435\u0440\u044E, \u044F \u0441 \u0442\u043E\u0431\u043E\u0439 \u043B\u0438\u0448\u044C \u043E\u0436\u0438\u0432\u0430\u044E,
\u0412\u0435\u0440\u044E, \u044F \u0441 \u0442\u043E\u0431\u043E\u0439 \u043B\u0438\u0448\u044C \u043E\u0436\u0438\u043B\u0430!
\u0412\u0435\u0440\u044E, \u044F \u0441 \u0442\u043E\u0431\u043E\u0439 \u043B\u0438\u0448\u044C \u043E\u0436\u0438\u0432\u0430\u044E,
\u0422\u0435\u043F\u0435\u0440\u044C \u044F \u0436\u0438\u0432\u0430\u044F...
`},jd=mx;var gx={id:"slyoznaya",name:["\u0421\u043B\u0451\u0437\u043D\u0430\u044F","\u041B\u0438\u0445\u0430 \u0442\u0430 \u0431\u0435\u0434\u0430"],albums:["bomba-v-ubezhishche","organizm","negativ-prostranstva","agressivnyj-pokoj"],text:`
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
`},Nd=gx;var yx={id:"sudorogi",name:["\u0421\u0443\u0434\u043E\u0440\u043E\u0433\u0438 \u0436\u0438\u0432\u044B\u0445 \u0431\u043E\u043B\u043E\u0442"],albums:["pugovica"],text:`
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
`},Rd=yx;var vx={id:"trahni-nebo",name:["\u0422\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E"],albums:["petlya-soblazna","trahni-nebo"],text:`
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
`},Od=vx;var wx={id:"tulovishchej",name:["\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435\u0439"],albums:["tulovishche","trahni-nebo","risunki-na-dushe"],text:`
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
`},Pd=wx;var bx={id:"volosy",name:["\u0412\u043E\u043B\u043E\u0441\u044B","\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B"],albums:["durackiye-knizhki","vulkanizaciya-dushi","spazmy-roka","poshmelye"],duration:198,text:`
\u0420\u0443\u043A\u0438, \u0447\u0442\u043E \u0442\u044F\u043D\u0443\u043B\u0438\u0441\u044C \u0432\u043E\u043D, \u0442\u0443\u0433\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u044B
\u041D\u0435 \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u0435\u0447\u0442\u044B
\u0412\u0435\u043D\u044B, \u0447\u0442\u043E \u043D\u0435\u0441\u043B\u0438 \u043B\u044E\u0431\u043E\u0432\u044C, \u043D\u0435\u0436\u043D\u043E \u0432\u0441\u043F\u043E\u0440\u043E\u0442\u044B,
\u041A\u0430\u043A \u0440\u0430\u0437\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u043C\u043E\u0441\u0442\u044B

\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B...

\u041F\u043B\u0430\u0442\u044C\u0435, \u0447\u0442\u043E \u043F\u0443\u0441\u0442\u0438\u043B\u043E\u0441\u044C \u0432\u043F\u043B\u044F\u0441, \u0441\u0442\u0451\u0440\u043B\u043E\u0441\u044C \u0432 \u0434\u044B\u0440\u043E\u0447\u043A\u0438,
\u0417\u0430\u0433\u043E\u0440\u0435\u043B\u043E\u0441\u044C \u0438 \u043F\u0440\u043E\u0448\u043B\u043E
\u0421\u0430\u043D\u0438, \u0447\u0442\u043E \u043A\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u0432\u043D\u0438\u0437, \u0437\u0430\u0443\u043F\u0440\u044F\u043C\u0438\u043B\u0438\u0441\u044C,
\u041A\u043E\u0433\u0434\u0430 \u0441\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0432\u0437\u043E\u0448\u043B\u043E
`},Fd=bx;var Dx={id:"ya-ne-angel",name:["\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B"],albums:["durackiye-knizhki","bomba-v-ubezhishche","zhazhda","vosem-zhenshchin-na-raduge"],text:`
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
`},Ld=Dx;var jg={[fd.id]:fd,[pd.id]:pd,[hd.id]:hd,[md.id]:md,[gd.id]:gd,[sd.id]:sd,[yd.id]:yd,[vd.id]:vd,[wd.id]:wd,[bd.id]:bd,[cd.id]:cd,[dd.id]:dd,[Dd.id]:Dd,[ld.id]:ld,[Cd.id]:Cd,[Ed.id]:Ed,[_d.id]:_d,[xd.id]:xd,[Sd.id]:Sd,[ud.id]:ud,[Md.id]:Md,[Td.id]:Td,[kd.id]:kd,[Ad.id]:Ad,[jd.id]:jd,[Nd.id]:Nd,[Rd.id]:Rd,[Od.id]:Od,[Pd.id]:Pd,[Fd.id]:Fd,[Ld.id]:Ld,[ad.id]:ad,[Id.id]:Id};var Ng=[{name:"www.zvuki.ru",type:"folder",children:[{type:"file",name:"17582.jpg"},{type:"file",name:"17583.jpg"}]},{name:"site",type:"folder",children:[{name:"2001 \u0432 \u0437\u0430\u043C\u043A\u0435 (\u043C\u0435\u0441\u0442\u043E, \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445 \u0441\u0442\u0430\u0432\u0448\u0435\u0435 \u043A\u0443\u043B\u044C\u0442\u043E\u0432\u044B\u043C)",type:"folder",children:[{type:"file",name:"10.jpg"},{type:"file",name:"2.jpg"},{type:"file",name:"3.jpg"},{type:"file",name:"4.jpg"},{type:"file",name:"5.jpg"},{type:"file",name:"7.jpg"},{type:"file",name:"8.jpg"},{type:"file",name:"9.jpg"}]},{name:"2002.08 \u0431\u0430\u0439\u043A-\u0448\u043E\u0443",type:"folder",children:[{type:"file",name:"b10.jpg"},{type:"file",name:"b12.jpg"},{type:"file",name:"b14.jpg"},{type:"file",name:"b2.jpg"},{type:"file",name:"b3.jpg"},{type:"file",name:"b5.jpg"},{type:"file",name:"b4.jpg"},{type:"file",name:"b6.jpg"},{type:"file",name:"b8.jpg"},{type:"file",name:"b9.jpg"},{type:"file",name:"bike1.jpg"},{type:"file",name:"bike3.jpg"},{type:"file",name:"bike2.jpg"},{type:"file",name:"bike4.jpg"},{type:"file",name:"bike6.jpg"},{type:"file",name:"bike7.jpg"},{type:"file",name:"bike8.jpg"},{type:"file",name:"lis7.jpg"}]},{name:"2004 \u043D\u043E\u0432\u043E\u0433\u043E\u0434\u043D\u0438\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438",type:"folder",children:[{type:"file",name:"05.jpg"},{type:"file",name:"06.jpg"},{type:"file",name:"newy01.jpg"},{type:"file",name:"newy02.jpg"},{type:"file",name:"newy03.jpg"},{type:"file",name:"newy04.jpg"},{type:"file",name:"newy05.jpg"},{type:"file",name:"newy06.jpg"},{type:"file",name:"newy07.jpg"},{type:"file",name:"newy08.jpg"},{type:"file",name:"newy09.jpg"},{type:"file",name:"newy10.jpg"},{type:"file",name:"newy11.jpg"},{type:"file",name:"nov2004sm.jpg"}]},{name:"2004.06.12 \u041A\u0438\u0435\u0432",type:"folder",children:[{type:"file",name:"kiev01.jpg"},{type:"file",name:"kiev02.jpg"},{type:"file",name:"kiev03.jpg"},{type:"file",name:"kiev04.jpg"},{type:"file",name:"kiev05.jpg"},{type:"file",name:"kiev06.jpg"},{type:"file",name:"kiev07.jpg"},{type:"file",name:"kiev08.jpg"},{type:"file",name:"kiev09.jpg"},{type:"file",name:"kiev10.jpg"},{type:"file",name:"kiev11.jpg"},{type:"file",name:"kiev12.jpg"},{type:"file",name:"kiev13.jpg"},{type:"file",name:"kiev14.jpg"},{type:"file",name:"kiev15.jpg"},{type:"file",name:"kiev16.jpg"},{type:"file",name:"kiev17.jpg"},{type:"file",name:"kiev18.jpg"},{type:"file",name:"kiev19.jpg"},{type:"file",name:"kiev20.jpg"},{type:"file",name:"kiev21.jpg"},{type:"file",name:"kiev22.jpg"},{type:"file",name:"kiev23.jpg"},{type:"file",name:"kiev24.jpg"},{type:"file",name:"kiev26.jpg"},{type:"file",name:"kiev25.jpg"},{type:"file",name:"kiev28.jpg"},{type:"file",name:"kiev29.jpg"},{type:"file",name:"kiev27.jpg"},{type:"file",name:"kiev30.jpg"},{type:"file",name:"kiev31.jpg"},{type:"file",name:"kiev32.jpg"},{type:"file",name:"kiev33.jpg"},{type:"file",name:"kiev34.jpg"},{type:"file",name:"kiev35.jpg"},{type:"file",name:"kiev36.jpg"},{type:"file",name:"kiev37.jpg"},{type:"file",name:"kiev38.jpg"},{type:"file",name:"kiev39.jpg"}]},{name:"2004.03.24 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u0438\u043D\u043E\u0442\u0435\u0430\u0442\u0440 \u0420\u0430\u0441\u0441\u0432\u0435\u0442",type:"folder",children:[{type:"file",name:"241.jpg"},{type:"file",name:"242.jpg"},{type:"file",name:"243.jpg"},{type:"file",name:"244.jpg"},{type:"file",name:"246.jpg"},{type:"file",name:"245.jpg"},{type:"file",name:"247.jpg"},{type:"file",name:"248.jpg"},{type:"file",name:"249.jpg"},{type:"file",name:"250.jpg"},{type:"file",name:"251.jpg"},{type:"file",name:"252.jpg"},{type:"file",name:"253.jpg"},{type:"file",name:"254.jpg"},{type:"file",name:"255.jpg"},{type:"file",name:"256.jpg"},{type:"file",name:"257.jpg"},{type:"file",name:"258.jpg"},{type:"file",name:"259.jpg"},{type:"file",name:"260.jpg"},{type:"file",name:"261.jpg"},{type:"file",name:"262.jpg"},{type:"file",name:"263.jpg"},{type:"file",name:"264.jpg"},{type:"file",name:"265.jpg"},{type:"file",name:"266.jpg"},{type:"file",name:"267.jpg"},{type:"file",name:"268.jpg"},{type:"file",name:"269.jpg"},{type:"file",name:"270.jpg"},{type:"file",name:"271.jpg"},{type:"file",name:"272.jpg"},{type:"file",name:"273.jpg"},{type:"file",name:"274.jpg"},{type:"file",name:"275.jpg"},{type:"file",name:"276.jpg"},{type:"file",name:"277.jpg"},{type:"file",name:"278.jpg"},{type:"file",name:"279.jpg"},{type:"file",name:"280.jpg"},{type:"file",name:"281.jpg"},{type:"file",name:"282.jpg"},{type:"file",name:"283.jpg"},{type:"file",name:"284.jpg"},{type:"file",name:"285.jpg"},{type:"file",name:"286.jpg"},{type:"file",name:"287.jpg"},{type:"file",name:"288.jpg"},{type:"file",name:"289.jpg"},{type:"file",name:"290.jpg"},{type:"file",name:"291.jpg"},{type:"file",name:"292.jpg"},{type:"file",name:"293.jpg"},{type:"file",name:"294.jpg"},{type:"file",name:"295.jpg"},{type:"file",name:"296.jpg"}]},{name:"2004.06.17 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u043A\u043B\u0443\u0431 \u041E\u0440\u043B\u0430\u043D\u0434\u0438\u043D\u0430",type:"folder",children:[{type:"file",name:"piter1.jpg"},{type:"file",name:"piter10.jpg"},{type:"file",name:"piter11.jpg"},{type:"file",name:"piter12.jpg"},{type:"file",name:"piter13.jpg"},{type:"file",name:"piter14.jpg"},{type:"file",name:"piter2.jpg"},{type:"file",name:"piter3.jpg"},{type:"file",name:"piter4.jpg"},{type:"file",name:"piter5.jpg"},{type:"file",name:"piter7.jpg"},{type:"file",name:"piter8.jpg"},{type:"file",name:"piter9.jpg"}]},{name:"2004.08.08 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u044F",type:"folder",children:[{type:"file",name:"01.jpg"},{type:"file",name:"02.jpg"},{type:"file",name:"03.jpg"},{type:"file",name:"05.jpg"},{type:"file",name:"06.jpg"},{type:"file",name:"07.jpg"},{type:"file",name:"09.jpg"},{type:"file",name:"10.jpg"},{type:"file",name:"11.jpg"},{type:"file",name:"12.jpg"},{type:"file",name:"13.jpg"},{type:"file",name:"14.jpg"},{type:"file",name:"15.jpg"},{type:"file",name:"16.jpg"},{type:"file",name:"17.jpg"},{type:"file",name:"18.jpg"},{type:"file",name:"8.jpg"}]},{name:"2005 \u043F\u0435\u0440\u0432\u044B\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u043D\u0438\u043A",type:"folder",children:[{type:"file",name:"kv01.jpg"},{type:"file",name:"kv02.jpg"},{type:"file",name:"kv03.jpg"},{type:"file",name:"kv04.jpg"},{type:"file",name:"kv05.jpg"},{type:"file",name:"kv06.jpg"},{type:"file",name:"kv07.jpg"},{type:"file",name:"kv08.jpg"},{type:"file",name:"kv09.jpg"}]},{name:"2005.09.24 \u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430 \u0432 \u043A\u043E\u043D\u044E\u0448\u043D\u044F\u0445 \u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u044B II \u043D\u0430 \u0427\u0438\u0441\u0442\u044B\u0445 \u043F\u0440\u0443\u0434\u0430\u0445",type:"folder",children:[{type:"file",name:"konush2.jpg"},{type:"file",name:"konush1.jpg"},{type:"file",name:"konush3.jpg"},{type:"file",name:"konush4.jpg"}]},{name:"2005.06.18 \u0432\u0442\u043E\u0440\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u043D\u0438\u043A",type:"folder",children:[{type:"file",name:"kotbot.jpg"},{type:"file",name:"kv201.jpg"},{type:"file",name:"kv2010.jpg"},{type:"file",name:"kv2011.jpg"},{type:"file",name:"kv202.jpg"},{type:"file",name:"kv203.jpg"},{type:"file",name:"kv204.jpg"},{type:"file",name:"kv205.jpg"},{type:"file",name:"kv206.jpg"},{type:"file",name:"kv207.jpg"},{type:"file",name:"kv208.jpg"},{type:"file",name:"kv209.jpg"}]},{name:"2005 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0420\u043E\u043A-\u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C",type:"folder",children:[{type:"file",name:"f2502.jpg"},{type:"file",name:"f2503.jpg"},{type:"file",name:"f2504.jpg"},{type:"file",name:"f2505.jpg"},{type:"file",name:"f2506.jpg"},{type:"file",name:"f2507.jpg"},{type:"file",name:"f2508.jpg"},{type:"file",name:"f2509.jpg"},{type:"file",name:"f2510.jpg"},{type:"file",name:"f2511.jpg"},{type:"file",name:"f2512.jpg"},{type:"file",name:"f2513.jpg"},{type:"file",name:"f2514.jpg"},{type:"file",name:"f2515.jpg"},{type:"file",name:"f2518.jpg"},{type:"file",name:"f2516.jpg"},{type:"file",name:"f2517.jpg"},{type:"file",name:"f2519.jpg"},{type:"file",name:"f2520.jpg"},{type:"file",name:"f2521.jpg"},{type:"file",name:"f2522.jpg"},{type:"file",name:"f2523.jpg"},{type:"file",name:"f2524.jpg"},{type:"file",name:"f2527.jpg"},{type:"file",name:"f2526.jpg"},{type:"file",name:"f2528.jpg"},{type:"file",name:"f2529.jpg"},{type:"file",name:"f2530.jpg"},{type:"file",name:"f2531.jpg"},{type:"file",name:"f2532.jpg"},{type:"file",name:"f2533.jpg"},{type:"file",name:"f2534.jpg"},{type:"file",name:"f2535.jpg"},{type:"file",name:"f2536.jpg"},{type:"file",name:"f2537.jpg"},{type:"file",name:"f2538.jpg"},{type:"file",name:"f2539.jpg"},{type:"file",name:"f2540.jpg"},{type:"file",name:"f2541.jpg"},{type:"file",name:"f2542.jpg"},{type:"file",name:"f2543.jpg"},{type:"file",name:"f2544.jpg"},{type:"file",name:"f2545.jpg"},{type:"file",name:"f2546.jpg"},{type:"file",name:"f2547.jpg"},{type:"file",name:"f2548.jpg"},{type:"file",name:"f2549.jpg"},{type:"file",name:"f2550.jpg"},{type:"file",name:"f2551.jpg"},{type:"file",name:"f2552.jpg"}]},{name:"2005.12.03 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u043B\u044C\u0434\u0430",type:"folder",children:[{type:"file",name:"pl1.jpg"},{type:"file",name:"pl2.jpg"},{type:"file",name:"pl3.jpg"},{type:"file",name:"pl4.jpg"},{type:"file",name:"pl5.jpg"},{type:"file",name:"pl6.jpg"},{type:"file",name:"pl7.jpg"},{type:"file",name:"pl8.jpg"},{type:"file",name:"planeta2.jpg"},{type:"file",name:"planeta1.jpg"},{type:"file",name:"planeta3.jpg"},{type:"file",name:"planeta4.jpg"},{type:"file",name:"planeta5.jpg"},{type:"file",name:"planeta6.jpg"},{type:"file",name:"planeta7.jpg"},{type:"file",name:"planeta8.jpg"}]},{name:"2005.12.03 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u0422\u0430\u0431\u0443\u043B\u0430 \u0420\u0430\u0441\u0430",type:"folder",children:[{type:"file",name:"ts1.jpg"},{type:"file",name:"ts10.jpg"},{type:"file",name:"ts11.jpg"},{type:"file",name:"ts12.jpg"},{type:"file",name:"ts2.jpg"},{type:"file",name:"ts3.jpg"},{type:"file",name:"ts4.jpg"},{type:"file",name:"ts5.jpg"},{type:"file",name:"ts6.jpg"},{type:"file",name:"ts7.jpg"},{type:"file",name:"ts8.jpg"}]},{name:"2005.12.07 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u0422\u0430\u0431\u0443\u043B\u0430 \u0420\u0430\u0441\u0430",type:"folder",children:[{type:"file",name:"tabula1.jpg"},{type:"file",name:"tabula2.jpg"},{type:"file",name:"tabula3.jpg"},{type:"file",name:"tabula4.jpg"}]},{name:"2005.12.26 \u044E\u0431\u0438\u043B\u0435\u0439\u043D\u044B\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u043D\u0438\u043A, \u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430",type:"folder",children:[{type:"file",name:"kv301.jpg"},{type:"file",name:"kv302.jpg"},{type:"file",name:"kv304.jpg"},{type:"file",name:"kv303.jpg"}]},{name:"2006.09 \u043D\u0430 \u0440\u0435\u043F\u0435\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u0435",type:"folder",children:[{type:"file",name:"shm2006_1.jpg"},{type:"file",name:"shm2006_2.jpg"},{type:"file",name:"shm2006_3.jpg"},{type:"file",name:"shm2006_4.jpg"}]},{name:"2006.01 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u044F \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430",type:"folder",children:[{type:"file",name:"pugov03.jpg"},{type:"file",name:"pugov02.jpg"},{type:"file",name:"pugov01.jpg"},{type:"file",name:"pugov04.jpg"},{type:"file",name:"pugov07.jpg"},{type:"file",name:"pugov05.jpg"},{type:"file",name:"pugov06.jpg"},{type:"file",name:"pugov08.jpg"}]},{name:"2006.06.03 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u0425\u043E\u0440\u043E\u0448\u043E",type:"folder",children:[{type:"file",name:"00103.jpg"},{type:"file",name:"00203.jpg"},{type:"file",name:"00303.jpg"},{type:"file",name:"00403.jpg"},{type:"file",name:"00503.jpg"},{type:"file",name:"00603.jpg"},{type:"file",name:"00703.jpg"},{type:"file",name:"00803.jpg"},{type:"file",name:"00903.jpg"},{type:"file",name:"01003.jpg"},{type:"file",name:"01103.jpg"},{type:"file",name:"01203.jpg"},{type:"file",name:"01303.jpg"},{type:"file",name:"01403.jpg"}]},{name:"2007.02.03 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u041A\u0430\u043B\u0438\u043D\u043A\u0438\u043D, \u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430",type:"folder",children:[{type:"file",name:"kalinkin2_11.jpg"},{type:"file",name:"kalinkin2_10.jpg"},{type:"file",name:"kalinkin2_15.jpg"},{type:"file",name:"kalinkin2_22.jpg"},{type:"file",name:"kalinkin2_23.jpg"},{type:"file",name:"kalinkin2_28.jpg"},{type:"file",name:"kalinkin2_4.jpg"},{type:"file",name:"kalinkin2_44.jpg"},{type:"file",name:"kalinkin2_52.jpg"},{type:"file",name:"kalinkin2_6.jpg"}]},{name:"2007.02.24 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u041A\u0432\u0430\u0434\u0440\u0430\u0442",type:"folder",children:[{type:"file",name:"shmely_kv05.jpg"},{type:"file",name:"shmely_kv06.jpg"},{type:"file",name:"shmely_kv07.jpg"},{type:"file",name:"shmely_kv08.jpg"},{type:"file",name:"shmely_kv09.jpg"},{type:"file",name:"shmely_kv10.jpg"},{type:"file",name:"shmely_kv11.jpg"},{type:"file",name:"shmely_kv13.jpg"},{type:"file",name:"shmely_kv12.jpg"},{type:"file",name:"shmely_kv14.jpg"},{type:"file",name:"shmely_kv17.jpg"},{type:"file",name:"shmely_kv15.jpg"},{type:"file",name:"shmely_kv18.jpg"},{type:"file",name:"shmely_kv20.jpg"}]},{name:"2006.12.09 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 Mezzoforte",type:"folder",children:[{type:"file",name:"9d001.jpg"},{type:"file",name:"9d002.jpg"},{type:"file",name:"9d003.jpg"},{type:"file",name:"9d004.jpg"},{type:"file",name:"9d005.jpg"},{type:"file",name:"9d006.jpg"},{type:"file",name:"9d007.jpg"},{type:"file",name:"9d008.jpg"},{type:"file",name:"9d009.jpg"},{type:"file",name:"9d010.jpg"},{type:"file",name:"9d011.jpg"},{type:"file",name:"9d012.jpg"},{type:"file",name:"9d013.jpg"},{type:"file",name:"9d014.jpg"},{type:"file",name:"9d015.jpg"},{type:"file",name:"9d016.jpg"},{type:"file",name:"9d017.jpg"},{type:"file",name:"9d019.jpg"},{type:"file",name:"9d020.jpg"},{type:"file",name:"9d021.jpg"},{type:"file",name:"9d022.jpg"},{type:"file",name:"9d023.jpg"},{type:"file",name:"9d024.jpg"},{type:"file",name:"9d025.jpg"},{type:"file",name:"9d026.jpg"},{type:"file",name:"9d027.jpg"},{type:"file",name:"9d028.jpg"},{type:"file",name:"9d029.jpg"},{type:"file",name:"9d031.jpg"},{type:"file",name:"9d030.jpg"},{type:"file",name:"9d032.jpg"},{type:"file",name:"9d033.jpg"},{type:"file",name:"9d034.jpg"},{type:"file",name:"9d035.jpg"},{type:"file",name:"9d036.jpg"},{type:"file",name:"9d037.jpg"},{type:"file",name:"9d038.jpg"},{type:"file",name:"9d039.jpg"},{type:"file",name:"9d040.jpg"},{type:"file",name:"9d041.jpg"},{type:"file",name:"9d043.jpg"},{type:"file",name:"9d042.jpg"}]},{name:"2007.10 \u0444\u043E\u0442\u043E \u0441\u043E \u0441\u044A\u0451\u043C\u043E\u043A \u043A\u043B\u0438\u043F\u0430 \u0417\u043B\u043E \u0440\u0435\u043A\u0438",type:"folder",children:[{type:"file",name:"rek01.jpg"},{type:"file",name:"rek02.jpg"},{type:"file",name:"rek03.jpg"},{type:"file",name:"rek04.jpg"},{type:"file",name:"rek05.jpg"},{type:"file",name:"rek06.jpg"},{type:"file",name:"rek07.jpg"},{type:"file",name:"rek08.jpg"}]},{name:"2007.10 \u0444\u043E\u0442\u043E \u0441\u043E \u0441\u044A\u0451\u043C\u043E\u043A \u043A\u043B\u0438\u043F\u0430 \u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u043F\u0442\u0438\u0446\u0430",type:"folder",children:[{type:"file",name:"klgp01.jpg"},{type:"file",name:"klgp02.jpg"},{type:"file",name:"klgp03.jpg"},{type:"file",name:"klgp04.jpg"},{type:"file",name:"klgp05.jpg"},{type:"file",name:"klgp06.jpg"},{type:"file",name:"klgp07.jpg"},{type:"file",name:"klgp08.jpg"},{type:"file",name:"klgp09.jpg"}]},{name:"2007.05.12 \u0412\u043E\u0440\u043E\u043D\u0435\u0436",type:"folder",children:[{type:"file",name:"voroneg001.jpg"},{type:"file",name:"voroneg002.jpg"},{type:"file",name:"voroneg004.jpg"},{type:"file",name:"voroneg003.jpg"},{type:"file",name:"voroneg005.jpg"},{type:"file",name:"voroneg006.jpg"},{type:"file",name:"voroneg007.jpg"},{type:"file",name:"voroneg008.jpg"},{type:"file",name:"voroneg009.jpg"},{type:"file",name:"voroneg010.jpg"},{type:"file",name:"voroneg011.jpg"},{type:"file",name:"voroneg012.jpg"},{type:"file",name:"voroneg013.jpg"},{type:"file",name:"voroneg014.jpg"},{type:"file",name:"voroneg016.jpg"},{type:"file",name:"voroneg015.jpg"},{type:"file",name:"voroneg017.jpg"}]},{name:"2007.11.23 \u041C\u043E\u0441\u043A\u0432\u0430",type:"folder",children:[{type:"file",name:"shmn01.jpg"},{type:"file",name:"shmn02.jpg"},{type:"file",name:"shmn04.jpg"},{type:"file",name:"shmn03.jpg"},{type:"file",name:"shmn05.jpg"},{type:"file",name:"shmn06.jpg"},{type:"file",name:"shmn07.jpg"},{type:"file",name:"shmn08.jpg"},{type:"file",name:"shmn09.jpg"},{type:"file",name:"shmn11.jpg"},{type:"file",name:"shmn10.jpg"},{type:"file",name:"shmn12.jpg"},{type:"file",name:"shmn13.jpg"},{type:"file",name:"shmn14.jpg"},{type:"file",name:"shmn15.jpg"},{type:"file",name:"shmn16.jpg"},{type:"file",name:"shmn17.jpg"},{type:"file",name:"shmn18.jpg"}]},{name:"2009.11.01 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u041F\u043B\u0430\u043D-\u0411",type:"folder",children:[{type:"file",name:"ula01.jpg"},{type:"file",name:"ula02.jpg"},{type:"file",name:"ula03.jpg"},{type:"file",name:"ula04.jpg"},{type:"file",name:"ula05.jpg"},{type:"file",name:"ula06.jpg"},{type:"file",name:"ula08.jpg"},{type:"file",name:"ula07.jpg"},{type:"file",name:"ula10.jpg"},{type:"file",name:"ula09.jpg"},{type:"file",name:"ula11.jpg"},{type:"file",name:"ula12.jpg"},{type:"file",name:"ula13.jpg"},{type:"file",name:"ulak01.jpg"},{type:"file",name:"ulak02.jpg"},{type:"file",name:"ulak03.jpg"},{type:"file",name:"ulak04.jpg"},{type:"file",name:"ulak05.jpg"},{type:"file",name:"ulak06.jpg"},{type:"file",name:"ulak07.jpg"},{type:"file",name:"ulak10.jpg"},{type:"file",name:"ulak11.jpg"},{type:"file",name:"ulak12.jpg"},{type:"file",name:"ulak14.jpg"},{type:"file",name:"ulak13.jpg"},{type:"file",name:"ulak15.jpg"},{type:"file",name:"ulak8.jpg"},{type:"file",name:"ulak9.jpg"}]},{name:"2009.12 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u044F \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430",type:"folder",children:[{type:"file",name:"mb1.jpg"},{type:"file",name:"mb10.jpg"},{type:"file",name:"mb12.jpg"},{type:"file",name:"mb14.jpg"},{type:"file",name:"mb15.jpg"},{type:"file",name:"mb13.jpg"},{type:"file",name:"mb16.jpg"},{type:"file",name:"mb18.jpg"},{type:"file",name:"mb19.jpg"},{type:"file",name:"mb2.jpg"},{type:"file",name:"mb3.jpg"},{type:"file",name:"mb4.jpg"},{type:"file",name:"mb7.jpg"},{type:"file",name:"mb5.jpg"},{type:"file",name:"mb8.jpg"},{type:"file",name:"mb9.jpg"}]},{name:"2009.06 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u044F \u0434\u043B\u044F \u043E\u043D\u043B\u0430\u0439\u043D-\u0436\u0443\u0440\u043D\u0430\u043B\u0430 DeAngels",type:"folder",children:[{type:"file",name:"d01.jpg"},{type:"file",name:"d02.jpg"},{type:"file",name:"d03.jpg"},{type:"file",name:"d12.jpg"},{type:"file",name:"d201.jpg"},{type:"file",name:"d203.jpg"},{type:"file",name:"d207.jpg"},{type:"file",name:"d215.jpg"},{type:"file",name:"d216.jpg"},{type:"file",name:"d217.jpg"},{type:"file",name:"d218.jpg"},{type:"file",name:"d222.jpg"},{type:"file",name:"d224.jpg"},{type:"file",name:"d226.jpg"},{type:"file",name:"d228.jpg"},{type:"file",name:"d229.jpg"},{type:"file",name:"d230.jpg"},{type:"file",name:"d238.jpg"},{type:"file",name:"d241.jpg"},{type:"file",name:"d242.jpg"},{type:"file",name:"d28.jpg"},{type:"file",name:"d30.jpg"},{type:"file",name:"d35.jpg"},{type:"file",name:"d34.jpg"},{type:"file",name:"d38.jpg"},{type:"file",name:"d41.jpg"},{type:"file",name:"d51.jpg"},{type:"file",name:"d54.jpg"},{type:"file",name:"d55.jpg"},{type:"file",name:"d56.jpg"},{type:"file",name:"d60.jpg"},{type:"file",name:"d61.jpg"},{type:"file",name:"d62.jpg"},{type:"file",name:"d69.jpg"},{type:"file",name:"d75.jpg"},{type:"file",name:"d76.jpg"}]},{name:"2009.12.18 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u0420\u0435\u043B\u0430\u043A\u0441",type:"folder",children:[{type:"file",name:"rel01.jpg"},{type:"file",name:"rel02.jpg"},{type:"file",name:"rel03.jpg"},{type:"file",name:"rel04.jpg"},{type:"file",name:"rel05.jpg"},{type:"file",name:"rel06.jpg"},{type:"file",name:"rel07.jpg"},{type:"file",name:"rel09.jpg"},{type:"file",name:"rel08.jpg"},{type:"file",name:"rel11.jpg"},{type:"file",name:"rel10.jpg"},{type:"file",name:"rel12.jpg"},{type:"file",name:"rel13.jpg"},{type:"file",name:"rel15.jpg"},{type:"file",name:"rel14.jpg"},{type:"file",name:"rel16.jpg"},{type:"file",name:"rel17.jpg"},{type:"file",name:"rel18.jpg"}]},{name:"2010.04.04 \u0441\u044A\u0451\u043C\u043A\u0438 \u043A\u043B\u0438\u043F\u0430 \u0422\u043E\u043F\u043B\u0438\u0432\u043E \u0436\u0438\u0437\u043D\u044C",type:"folder",children:[{type:"file",name:"top01.jpg"},{type:"file",name:"top02.jpg"},{type:"file",name:"top03.jpg"},{type:"file",name:"top04.jpg"},{type:"file",name:"top05.jpg"},{type:"file",name:"top06.jpg"},{type:"file",name:"top7.jpg"}]},{name:"2009.11.13 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u041E\u043B\u044C\u0441\u0442\u0435\u0440",type:"folder",children:[{type:"file",name:"shmeli001.jpg"},{type:"file",name:"shmeli002.jpg"},{type:"file",name:"shmeli003.jpg"},{type:"file",name:"shmeli004.jpg"},{type:"file",name:"shmeli005.jpg"},{type:"file",name:"shmeli006.jpg"},{type:"file",name:"shmeli007.jpg"},{type:"file",name:"shmeli008.jpg"},{type:"file",name:"shmeli009.jpg"},{type:"file",name:"shmeli010.jpg"},{type:"file",name:"shmeli011.jpg"},{type:"file",name:"shmeli012.jpg"},{type:"file",name:"shmeli013.jpg"},{type:"file",name:"shmeli014.jpg"},{type:"file",name:"shmeli015.jpg"},{type:"file",name:"shmeli016.jpg"},{type:"file",name:"shmeli017.jpg"},{type:"file",name:"shmeli018.jpg"},{type:"file",name:"shmeli019.jpg"},{type:"file",name:"shmeli020.jpg"},{type:"file",name:"shmeli021.jpg"},{type:"file",name:"shmeli022.jpg"},{type:"file",name:"shmeli023.jpg"},{type:"file",name:"shmeli025.jpg"},{type:"file",name:"shmeli024.jpg"},{type:"file",name:"shmeli026.jpg"},{type:"file",name:"shmeli027.jpg"},{type:"file",name:"shmeli028.jpg"},{type:"file",name:"shmeli029.jpg"},{type:"file",name:"shmeli032.jpg"},{type:"file",name:"shmeli030.jpg"},{type:"file",name:"shmeli033.jpg"},{type:"file",name:"shmeli031.jpg"},{type:"file",name:"shmeli034.jpg"},{type:"file",name:"shmeli035.jpg"},{type:"file",name:"shmeli036.jpg"},{type:"file",name:"shmeli037.jpg"},{type:"file",name:"shmeli038.jpg"},{type:"file",name:"shmeli039.jpg"},{type:"file",name:"shmeli040.jpg"},{type:"file",name:"shmeli041.jpg"},{type:"file",name:"shmeli042.jpg"},{type:"file",name:"shmeli043.jpg"},{type:"file",name:"shmeli044.jpg"},{type:"file",name:"shmeli046.jpg"},{type:"file",name:"shmeli045.jpg"},{type:"file",name:"shmeli047.jpg"},{type:"file",name:"shmeli048.jpg"},{type:"file",name:"shmeli049.jpg"},{type:"file",name:"shmeli050.jpg"},{type:"file",name:"shmeli051.jpg"},{type:"file",name:"shmeli052.jpg"},{type:"file",name:"shmeli053.jpg"},{type:"file",name:"shmeli054.jpg"},{type:"file",name:"shmeli055.jpg"},{type:"file",name:"shmeli056.jpg"},{type:"file",name:"shmeli057.jpg"},{type:"file",name:"shmeli058.jpg"},{type:"file",name:"shmeli059.jpg"},{type:"file",name:"shmeli060.jpg"},{type:"file",name:"shmeli061.jpg"},{type:"file",name:"shmeli062.jpg"},{type:"file",name:"shmeli063.jpg"}]},{name:"2010.05.30 \u041A\u0438\u0440\u043E\u0432, \u043A\u043B\u0443\u0431 Red & Black",type:"folder",children:[{type:"file",name:"kirov01.jpg"},{type:"file",name:"kirov02.jpg"},{type:"file",name:"kirov03.jpg"},{type:"file",name:"kirov04.jpg"},{type:"file",name:"kirov05.jpg"},{type:"file",name:"kirov06.jpg"},{type:"file",name:"kirov07.jpg"},{type:"file",name:"kirov08.jpg"},{type:"file",name:"kirov09.jpg"},{type:"file",name:"kirov10.jpg"},{type:"file",name:"kirov11.jpg"},{type:"file",name:"kirov12.jpg"},{type:"file",name:"kirov13.jpg"},{type:"file",name:"kirov14.jpg"},{type:"file",name:"kirov15.jpg"},{type:"file",name:"kirov16.jpg"},{type:"file",name:"kirov17.jpg"},{type:"file",name:"kirov18.jpg"},{type:"file",name:"kirov19.jpg"},{type:"file",name:"kirov20.jpg"},{type:"file",name:"kirov21.jpg"},{type:"file",name:"kirov23.jpg"},{type:"file",name:"kirov22.jpg"},{type:"file",name:"kirov24.jpg"},{type:"file",name:"kirov25.jpg"},{type:"file",name:"kirov27.jpg"},{type:"file",name:"kirov26.jpg"},{type:"file",name:"kirov28.jpg"},{type:"file",name:"kirov29.jpg"},{type:"file",name:"kirov30.jpg"},{type:"file",name:"kirov31.jpg"},{type:"file",name:"kirov32.jpg"},{type:"file",name:"kirov34.jpg"},{type:"file",name:"kirov33.jpg"},{type:"file",name:"kirov35.jpg"},{type:"file",name:"kirov36.jpg"},{type:"file",name:"kirov37.jpg"},{type:"file",name:"kirov38.jpg"}]},{name:"2005.05.27 \u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u0415\u0432\u0440\u043E\u043F\u0430-\u0410\u0437\u0438\u044F, \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u041B\u0451\u0434",type:"folder",children:[{type:"file",name:"l001.jpg"},{type:"file",name:"l017.jpg"},{type:"file",name:"l018.jpg"},{type:"file",name:"l019.jpg"},{type:"file",name:"l020.jpg"},{type:"file",name:"l021.jpg"},{type:"file",name:"l022.jpg"},{type:"file",name:"l023.jpg"},{type:"file",name:"l024.jpg"},{type:"file",name:"l025.jpg"},{type:"file",name:"l026.jpg"},{type:"file",name:"l027.jpg"},{type:"file",name:"l028.jpg"},{type:"file",name:"l029.jpg"},{type:"file",name:"l030.jpg"},{type:"file",name:"l036.jpg"},{type:"file",name:"l037.jpg"},{type:"file",name:"l038.jpg"},{type:"file",name:"l039.jpg"},{type:"file",name:"l040.jpg"},{type:"file",name:"l041.jpg"},{type:"file",name:"l042.jpg"},{type:"file",name:"l043.jpg"},{type:"file",name:"l044.jpg"},{type:"file",name:"l045.jpg"},{type:"file",name:"l046.jpg"},{type:"file",name:"l047.jpg"},{type:"file",name:"l048.jpg"},{type:"file",name:"l049.jpg"},{type:"file",name:"l050.jpg"},{type:"file",name:"l051.jpg"},{type:"file",name:"l052.jpg"},{type:"file",name:"l053.jpg"},{type:"file",name:"l059.jpg"},{type:"file",name:"l060.jpg"},{type:"file",name:"l061.jpg"},{type:"file",name:"l062.jpg"},{type:"file",name:"l0623.jpg"},{type:"file",name:"l0624.jpg"},{type:"file",name:"l0625.jpg"},{type:"file",name:"l0626.jpg"},{type:"file",name:"lp01.jpg"},{type:"file",name:"lp02.jpg"},{type:"file",name:"lp09.jpg"},{type:"file",name:"lp10.jpg"},{type:"file",name:"lp11.jpg"},{type:"file",name:"lp12.jpg"},{type:"file",name:"lp13.jpg"},{type:"file",name:"lp14.jpg"},{type:"file",name:"lp15.jpg"},{type:"file",name:"lp17.jpg"},{type:"file",name:"lp18.jpg"},{type:"file",name:"lp22.jpg"},{type:"file",name:"lp23.jpg"},{type:"file",name:"lp24.jpg"},{name:"MetalKings.ru",type:"folder",children:[{type:"file",name:"shmely-270505-01.jpg"},{type:"file",name:"shmely-270505-02.jpg"},{type:"file",name:"shmely-270505-03.jpg"},{type:"file",name:"shmely-270505-04.jpg"},{type:"file",name:"shmely-270505-05.jpg"},{type:"file",name:"shmely-270505-06.jpg"},{type:"file",name:"shmely-270505-07.jpg"},{type:"file",name:"shmely-270505-08.jpg"},{type:"file",name:"shmely-270505-09.jpg"},{type:"file",name:"shmely-270505-10.jpg"},{type:"file",name:"shmely-270505-11.jpg"},{type:"file",name:"shmely-270505-12.jpg"},{type:"file",name:"shmely-270505-13.jpg"},{type:"file",name:"shmely-270505-14.jpg"},{type:"file",name:"shmely-270505-15.jpg"},{type:"file",name:"shmely-270505-16.jpg"},{type:"file",name:"shmely-270505-17.jpg"},{type:"file",name:"shmely-270505-18.jpg"},{type:"file",name:"shmely-270505-19.jpg"},{type:"file",name:"shmely-270505-20.jpg"},{type:"file",name:"shmely-270505-21.jpg"},{type:"file",name:"shmely-270505-22.jpg"},{type:"file",name:"shmely-270505-23.jpg"},{type:"file",name:"shmely-270505-24.jpg"},{type:"file",name:"shmely-270505-25.jpg"},{type:"file",name:"shmely-270505-26.jpg"},{type:"file",name:"shmely-270505-27.jpg"},{type:"file",name:"shmely-270505-28.jpg"},{type:"file",name:"shmely-270505-29.jpg"},{type:"file",name:"shmely-270505-30.jpg"},{type:"file",name:"shmely-270505-31.jpg"},{type:"file",name:"shmely-270505-32.jpg"},{type:"file",name:"shmely-270505-33.jpg"},{type:"file",name:"shmely-270505-34.jpg"},{type:"file",name:"shmely-270505-35.jpg"},{type:"file",name:"shmely-270505-36.jpg"},{type:"file",name:"shmely-270505-37.jpg"},{type:"file",name:"shmely-270505-38.jpg"},{type:"file",name:"shmely-270505-39.jpg"},{type:"file",name:"shmely-270505-40.jpg"},{type:"file",name:"shmely-270505-41.jpg"},{type:"file",name:"shmely-270505-42.jpg"},{type:"file",name:"shmely-270505-43.jpg"},{type:"file",name:"shmely-270505-44.jpg"},{type:"file",name:"shmely-270505-45.jpg"},{type:"file",name:"shmely-270505-46.jpg"},{type:"file",name:"shmely-270505-47.jpg"},{type:"file",name:"shmely-270505-48.jpg"},{type:"file",name:"shmely-270505-49.jpg"},{type:"file",name:"shmely-270505-50.jpg"},{type:"file",name:"shmely-270505-51.jpg"},{type:"file",name:"shmely-270505-52.jpg"},{type:"file",name:"shmely-270505-53.jpg"},{type:"file",name:"shmely-270505-54.jpg"},{type:"file",name:"shmely-270505-55.jpg"},{type:"file",name:"shmely-270505-56.jpg"},{type:"file",name:"shmely-270505-57.jpg"},{type:"file",name:"shmely-270505-59.jpg"},{type:"file",name:"shmely-270505-58.jpg"},{type:"file",name:"shmely-270505-60.jpg"},{type:"file",name:"shmely-270505-61.jpg"},{type:"file",name:"shmely-270505-62.jpg"},{type:"file",name:"shmely-270505-63.jpg"},{type:"file",name:"shmely-270505-64.jpg"},{type:"file",name:"shmely-270505-65.jpg"},{type:"file",name:"shmely-270505-66.jpg"},{type:"file",name:"shmely-270505-67.jpg"},{type:"file",name:"shmely-270505-68.jpg"},{type:"file",name:"shmely-270505-69.jpg"},{type:"file",name:"shmely-270505-70.jpg"},{type:"file",name:"shmely-270505-71.jpg"},{type:"file",name:"shmely-270505-72.jpg"},{type:"file",name:"shmely-270505-73.jpg"},{type:"file",name:"shmely-270505-74.jpg"},{type:"file",name:"shmely-270505-75.jpg"}]},{name:"\u0413\u0440\u0438\u043C\u0451\u0440\u043A\u0430",type:"folder",children:[{type:"file",name:"l002.jpg"},{type:"file",name:"l003.jpg"},{type:"file",name:"l004.jpg"},{type:"file",name:"l005.jpg"},{type:"file",name:"lp16.jpg"}]},{name:"\u0412\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u0428\u041C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u041A\u043B\u043E\u0447\u044C\u044F",type:"folder",children:[{type:"file",name:"l006.jpg"},{type:"file",name:"l008.jpg"},{type:"file",name:"l007.jpg"},{type:"file",name:"l009.jpg"},{type:"file",name:"l010.jpg"},{type:"file",name:"l011.jpg"},{type:"file",name:"l014.jpg"},{type:"file",name:"l013.jpg"},{type:"file",name:"l012.jpg"},{type:"file",name:"l015.jpg"},{type:"file",name:"l016.jpg"},{type:"file",name:"l031.jpg"},{type:"file",name:"l032.jpg"},{type:"file",name:"l033.jpg"},{type:"file",name:"l034.jpg"},{type:"file",name:"l035.jpg"},{type:"file",name:"l054.jpg"},{type:"file",name:"l055.jpg"},{type:"file",name:"l056.jpg"},{type:"file",name:"l057.jpg"},{type:"file",name:"l058.jpg"},{type:"file",name:"lp03.jpg"},{type:"file",name:"lp04.jpg"},{type:"file",name:"lp05.jpg"},{type:"file",name:"lp06.jpg"},{type:"file",name:"lp07.jpg"},{type:"file",name:"lp08.jpg"},{type:"file",name:"lp19.jpg"},{type:"file",name:"lp20.jpg"},{type:"file",name:"lp21.jpg"}]}]},{name:"2008.01.26 \u043A\u043B\u0443\u0431 \u041F\u043B\u0430\u043D-\u0411, \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B",type:"folder",children:[{type:"file",name:"16508--6277749-.jpg"},{type:"file",name:"16508--6284619-.jpg"},{type:"file",name:"16508--6284620-.jpg"},{type:"file",name:"16508--6284621-.jpg"},{type:"file",name:"16508--6284622-.jpg"},{type:"file",name:"16508--6284624-.jpg"},{type:"file",name:"16508--6284623-.jpg"},{type:"file",name:"16508--6284625-.jpg"},{type:"file",name:"16508--6284626-.jpg"},{type:"file",name:"16508--6284628-.jpg"},{type:"file",name:"16508--6284627-.jpg"},{type:"file",name:"16508--6284629-.jpg"},{type:"file",name:"16508--6284630-.jpg"},{type:"file",name:"16508--6284631-.jpg"},{type:"file",name:"16508--6284632-.jpg"},{type:"file",name:"16508--6284633-.jpg"},{type:"file",name:"16508--6284634-.jpg"},{type:"file",name:"16508--6284635-.jpg"},{type:"file",name:"16508--6284636-.jpg"},{type:"file",name:"16508--6284637-.jpg"},{type:"file",name:"16508--6284638-.jpg"},{type:"file",name:"16508--6284639-.jpg"},{type:"file",name:"16508--6284640-.jpg"},{type:"file",name:"16508--6284641-.jpg"},{type:"file",name:"16508--6284642-.jpg"},{type:"file",name:"16508--6284643-.jpg"},{type:"file",name:"16508--6284644-.jpg"},{type:"file",name:"16508--6284645-.jpg"},{type:"file",name:"16508--6284646-.jpg"},{type:"file",name:"16508--6284647-.jpg"},{type:"file",name:"16508--6284648-.jpg"},{type:"file",name:"16508--6284649-.jpg"},{type:"file",name:"16508--6284650-.jpg"},{type:"file",name:"16508--6284651-.jpg"},{type:"file",name:"16508--6284652-.jpg"},{type:"file",name:"16508--6284653-.jpg"},{type:"file",name:"16508--6295316-.jpg"},{type:"file",name:"16508--6295317-.jpg"},{type:"file",name:"16508--6295318-.jpg"},{type:"file",name:"16508--6295319-.jpg"},{name:"Darkside.ru",type:"folder",children:[{type:"file",name:"1616-12.jpg"},{type:"file",name:"1616-13.jpg"},{type:"file",name:"1616-14.jpg"},{type:"file",name:"1616-15.jpg"},{type:"file",name:"1616-16.jpg"},{type:"file",name:"1616-17.jpg"},{type:"file",name:"1616-18.jpg"},{type:"file",name:"1616-19.jpg"},{type:"file",name:"1616-20.jpg"},{type:"file",name:"1616-21.jpg"},{type:"file",name:"1616-22.jpg"},{type:"file",name:"1616-23.jpg"},{type:"file",name:"1616-24.jpg"},{type:"file",name:"1616-25.jpg"},{type:"file",name:"1616-26.jpg"},{type:"file",name:"1616-27.jpg"},{type:"file",name:"1616-28.jpg"},{type:"file",name:"1616-29.jpg"},{type:"file",name:"1616-30.jpg"},{type:"file",name:"1616-31.jpg"},{type:"file",name:"1616-32.jpg"},{type:"file",name:"1616-33.jpg"},{type:"file",name:"1616-34.jpg"},{type:"file",name:"1616-35.jpg"},{type:"file",name:"1616-36.jpg"},{type:"file",name:"1616-37.jpg"},{type:"file",name:"1616-38.jpg"},{type:"file",name:"1616-39.jpg"},{type:"file",name:"1616-40.jpg"},{type:"file",name:"1616-41.jpg"},{type:"file",name:"1616-46.jpg"},{type:"file",name:"1616-47.jpg"},{type:"file",name:"1617-1.jpg"},{type:"file",name:"1617-10.jpg"},{type:"file",name:"1617-11.jpg"},{type:"file",name:"1617-2.jpg"},{type:"file",name:"1617-3.jpg"},{type:"file",name:"1617-4.jpg"},{type:"file",name:"1617-5.jpg"},{type:"file",name:"1617-6.jpg"},{type:"file",name:"1617-7.jpg"},{type:"file",name:"1617-8.jpg"},{type:"file",name:"1617-9.jpg"},{type:"file",name:"1623-1.jpg"},{type:"file",name:"1623-2.jpg"},{type:"file",name:"1623-3.jpg"},{type:"file",name:"1623-4.jpg"}]}]},{name:"other",type:"folder",children:[{type:"file",name:"001.jpg"},{type:"file",name:"002.jpg"},{type:"file",name:"003.jpg"},{type:"file",name:"004.jpg"},{type:"file",name:"005.jpg"},{type:"file",name:"006.jpg"},{type:"file",name:"007.jpg"},{type:"file",name:"al001.jpg"},{type:"file",name:"al002.jpg"},{type:"file",name:"al003.jpg"},{type:"file",name:"al004.jpg"},{type:"file",name:"al005.jpg"},{type:"file",name:"band.jpg"},{type:"file",name:"g02.jpg"},{type:"file",name:"g03.jpg"},{type:"file",name:"index.jpg"},{type:"file",name:"l2.jpg"},{type:"file",name:"lel001.jpg"},{type:"file",name:"lel002.jpg"},{type:"file",name:"lel003.jpg"},{type:"file",name:"lel004.jpg"},{type:"file",name:"ls01.jpg"},{type:"file",name:"ls02.jpg"},{type:"file",name:"ls03.jpg"},{type:"file",name:"ls04.jpg"},{type:"file",name:"ls05.jpg"},{type:"file",name:"obchak.jpg"},{type:"file",name:"r11.jpg"},{type:"file",name:"sh01.jpg"},{type:"file",name:"sh02.jpg"},{type:"file",name:"sh03.jpg"},{type:"file",name:"shm0501.jpg"},{type:"file",name:"shm0502b.jpg"},{type:"file",name:"shmled.jpg"},{name:"Halloween-2002",type:"folder",children:[{type:"file",name:"hall01.jpg"},{type:"file",name:"hall02.jpg"},{type:"file",name:"hall03.jpg"},{type:"file",name:"hall04.jpg"},{type:"file",name:"hall05.jpg"},{type:"file",name:"hall06.jpg"},{type:"file",name:"hall07.jpg"},{type:"file",name:"hall08.jpg"},{type:"file",name:"hall09.jpg"},{type:"file",name:"hall10.jpg"},{type:"file",name:"hall11.jpg"},{type:"file",name:"hall12.jpg"},{type:"file",name:"hall14.jpg"},{type:"file",name:"hall15.jpg"},{type:"file",name:"hall16.jpg"},{type:"file",name:"hall17.jpg"}]},{name:"Live",type:"folder",children:[{type:"file",name:"live1.jpg"},{type:"file",name:"live2.jpg"},{type:"file",name:"live3.jpg"},{type:"file",name:"live4.jpg"},{type:"file",name:"live5.jpg"},{type:"file",name:"live6.jpg"},{type:"file",name:"live7.jpg"},{type:"file",name:"live8.jpg"},{type:"file",name:"live9.jpg"}]},{name:"2009 \u0433\u043E\u0434",type:"folder",children:[{type:"file",name:"shmeli_1.jpg"},{type:"file",name:"shmeli_10.jpg"},{type:"file",name:"shmeli_12.jpg"},{type:"file",name:"shmeli_11.jpg"},{type:"file",name:"shmeli_13.jpg"},{type:"file",name:"shmeli_14.jpg"},{type:"file",name:"shmeli_15.jpg"},{type:"file",name:"shmeli_16.jpg"},{type:"file",name:"shmeli_17.jpg"},{type:"file",name:"shmeli_18.jpg"},{type:"file",name:"shmeli_19.jpg"},{type:"file",name:"shmeli_2.jpg"},{type:"file",name:"shmeli_20.jpg"},{type:"file",name:"shmeli_22.jpg"},{type:"file",name:"shmeli_23.jpg"},{type:"file",name:"shmeli_24.jpg"},{type:"file",name:"shmeli_25.jpg"},{type:"file",name:"shmeli_26.jpg"},{type:"file",name:"shmeli_3.jpg"},{type:"file",name:"shmeli_4.jpg"},{type:"file",name:"shmeli_6.jpg"},{type:"file",name:"shmeli_7.jpg"},{type:"file",name:"shmeli_8.jpg"},{type:"file",name:"shmeli_9.jpg"}]},{name:"\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430",type:"folder",children:[{type:"file",name:"dosts.jpg"},{type:"file",name:"kats.jpg"},{type:"file",name:"lyosts.jpg"},{type:"file",name:"shmelts.jpg"}]},{name:"\u041B\u0451\u0441. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043D\u0438\u043C\u043A\u0438 \u0438\u0437 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u0438 \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u041B\u0451\u0434",type:"folder",children:[{type:"file",name:"lyolyaled2.jpg"},{type:"file",name:"lyolyaled3.jpg"},{type:"file",name:"lyolyaled4.jpg"},{type:"file",name:"lyolyaled6.jpg"},{type:"file",name:"lyolyaled7.jpg"},{type:"file",name:"lyolyaled8.jpg"}]},{name:"\u041C\u041A-2003",type:"folder",children:[{type:"file",name:"r06.jpg"},{type:"file",name:"r07.jpg"}]},{name:"\u041C\u043E\u0441\u043A\u0432\u0430, \u0420-\u043A\u043B\u0443\u0431",type:"folder",children:[{type:"file",name:"g08.jpg"},{type:"file",name:"g13.jpg"}]},{name:"\u041C\u043E\u0441\u043A\u0432\u0430, \u043A\u043B\u0443\u0431 \u0420\u0435\u043B\u0430\u043A\u0441",type:"folder",children:[{type:"file",name:"rel4.jpg"},{type:"file",name:"rel7.jpg"},{type:"file",name:"rel8.jpg"}]},{name:"\u041B\u0451\u0441 \u0438 \u0428\u043C\u0435\u043B\u044C \u0432 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435",type:"folder",children:[{type:"file",name:"p01.jpg"},{type:"file",name:"p02.jpg"},{type:"file",name:"p03.jpg"},{type:"file",name:"p04.jpg"},{type:"file",name:"p05.jpg"},{type:"file",name:"p06.jpg"},{type:"file",name:"p07.jpg"},{type:"file",name:"p08.jpg"},{type:"file",name:"p09.jpg"},{type:"file",name:"p10.jpg"},{type:"file",name:"p11.jpg"},{type:"file",name:"p13.jpg"},{type:"file",name:"p12.jpg"},{type:"file",name:"p14.jpg"},{type:"file",name:"p15.jpg"},{type:"file",name:"p16.jpg"},{type:"file",name:"p17.jpg"},{type:"file",name:"p18.jpg"},{type:"file",name:"p19.jpg"},{type:"file",name:"p20.jpg"},{type:"file",name:"p21.jpg"},{type:"file",name:"p23.jpg"},{type:"file",name:"p24.jpg"},{type:"file",name:"p26.jpg"},{type:"file",name:"p27.jpg"},{type:"file",name:"p28.jpg"},{type:"file",name:"p29.jpg"},{type:"file",name:"p30.jpg"},{type:"file",name:"p31.jpg"},{type:"file",name:"p5.jpg"}]},{name:"\u041E\u0431\u043E\u0438",type:"folder",children:[{type:"file",name:"mboboi.jpg"},{type:"file",name:"mboboi0_01.jpg"},{type:"file",name:"mboboi0_02.jpg"},{type:"file",name:"mboboi0_03.jpg"},{type:"file",name:"mboboi1.jpg"},{type:"file",name:"mboboi2.jpg"},{type:"file",name:"mboboi3.jpg"},{type:"file",name:"oboi_shmely_1.jpg"},{type:"file",name:"oboin01.jpg"},{type:"file",name:"oboin02.jpg"},{type:"file",name:"shmeli_wall1.jpg"},{type:"file",name:"shmeli_wall2.jpg"},{type:"file",name:"shmely_oboi02.jpg"},{type:"file",name:"shmely_oboi06.jpg"},{type:"file",name:"shmelywp1.jpg"},{type:"file",name:"shmwallpaper1.jpg"},{type:"file",name:"shmwallpaper2.jpg"},{type:"file",name:"shmwallpaper3.jpg"},{type:"file",name:"shmwallpaper4.jpg"},{type:"file",name:"shmwallpaper5.jpg"},{type:"file",name:"shmwallpaper7.jpg"},{type:"file",name:"ula.jpg"},{type:"file",name:"wpkniga1.jpg"},{type:"file",name:"wpkniga10.jpg"},{type:"file",name:"wpkniga11.jpg"},{type:"file",name:"wpkniga2.jpg"},{type:"file",name:"wpkniga3.jpg"},{type:"file",name:"wpkniga4.jpg"},{type:"file",name:"wpkniga5.jpg"},{type:"file",name:"wpkniga6.jpg"},{type:"file",name:"wpkniga7.jpg"},{type:"file",name:"wpkniga8.jpg"},{type:"file",name:"wpkniga9.jpg"}]},{name:"\u041F\u0438\u0442\u0435\u0440, \u043A\u043B\u0443\u0431 \u0410\u0440\u043A\u0442\u0438\u043A\u0430",type:"folder",children:[{type:"file",name:"ob1.jpg"},{type:"file",name:"ob3.jpg"},{type:"file",name:"ob4.jpg"},{type:"file",name:"ob7.jpg"}]},{name:"\u041F\u0438\u0442\u0435\u0440, \u043A\u043B\u0443\u0431 \u041E\u0440\u043B\u0430\u043D\u0434\u0438\u043D\u0430",type:"folder",children:[{type:"file",name:"002.jpg"},{type:"file",name:"r01.jpg"},{type:"file",name:"r02.jpg"},{type:"file",name:"r04.jpg"},{type:"file",name:"r05.jpg"},{type:"file",name:"r12.jpg"},{type:"file",name:"r13.jpg"},{type:"file",name:"rel1.jpg"},{type:"file",name:"rel2.jpg"},{type:"file",name:"rel3.jpg"}]},{name:"\u0421\u044A\u0451\u043C\u043A\u0430 \u0432 \u0425\u0438\u043C\u043A\u0430\u0445",type:"folder",children:[{type:"file",name:"001.jpg"},{type:"file",name:"002.jpg"},{type:"file",name:"003.jpg"},{type:"file",name:"005.jpg"},{type:"file",name:"004.jpg"},{type:"file",name:"006.jpg"},{type:"file",name:"007.jpg"},{type:"file",name:"008.jpg"},{type:"file",name:"009.jpg"},{type:"file",name:"010.jpg"},{type:"file",name:"011.jpg"},{type:"file",name:"012.jpg"},{type:"file",name:"014.jpg"},{type:"file",name:"015.jpg"},{type:"file",name:"016.jpg"},{type:"file",name:"017.jpg"}]},{name:"\u0424\u043E\u0442\u043E \u041B\u0438\u0441\u044B \u0420\u043E\u0441\u043B\u043E\u0432\u043E\u0439",type:"folder",children:[{type:"file",name:"02i.jpg"},{type:"file",name:"03i.jpg"},{type:"file",name:"04i.jpg"},{type:"file",name:"05i.jpg"},{type:"file",name:"06i.jpg"},{type:"file",name:"08i.jpg"},{type:"file",name:"10i.jpg"},{type:"file",name:"11i.jpg"},{type:"file",name:"12i.jpg"},{type:"file",name:"13i.jpg"},{type:"file",name:"14i.jpg"},{type:"file",name:"16i.jpg"}]},{name:"\u0424\u043E\u0442\u043E \u043F\u043E\u0441\u043B\u0435 \u0441\u044A\u0451\u043C\u043E\u043A \u043A\u043B\u0438\u043F\u0430 \u0412 \u0436\u0438\u0432\u044B\u0445 \u0438\u0433\u0440\u0430\u044E\u0442 \u043C\u0435\u0440\u0442\u0432\u0435\u0446\u044B",type:"folder",children:[{type:"file",name:"ms01.jpg"},{type:"file",name:"ms02.jpg"},{type:"file",name:"ms03.jpg"},{type:"file",name:"ms04.jpg"},{type:"file",name:"u002.jpg"},{type:"file",name:"u003.jpg"}]},{name:"\u0424\u043E\u0442\u043E \u0441 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0441\u044A\u0451\u043C\u043E\u043A \u043A\u043B\u0438\u043F\u0430 \u0423\u043C\u0440\u0451\u043C \u0436\u0438\u0432\u044B\u043C\u0438",type:"folder",children:[{type:"file",name:"ug_1.jpg"},{type:"file",name:"ug_2.jpg"}]},{name:"\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u044F \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438",type:"folder",children:[{type:"file",name:"ks1.jpg"},{type:"file",name:"ks2.jpg"},{type:"file",name:"ks3.jpg"}]},{name:"\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u044F \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",type:"folder",children:[{type:"file",name:"np1.jpg"},{type:"file",name:"np2.jpg"},{type:"file",name:"np3.jpg"},{type:"file",name:"np4.jpg"},{type:"file",name:"np5.jpg"},{type:"file",name:"np6.jpg"},{type:"file",name:"np7.jpg"},{type:"file",name:"np8.jpg"},{type:"file",name:"np9.jpg"}]},{name:"\u0424\u043E\u0442\u043E \u0441 \u0440\u0430\u0437\u043D\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043E\u0432 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 (2009)",type:"folder",children:[{type:"file",name:"shm1.jpg"},{type:"file",name:"shm10.jpg"},{type:"file",name:"shm11.jpg"},{type:"file",name:"shm12.jpg"},{type:"file",name:"shm13.jpg"},{type:"file",name:"shm14.jpg"},{type:"file",name:"shm15.jpg"},{type:"file",name:"shm16.jpg"},{type:"file",name:"shm17.jpg"},{type:"file",name:"shm18.jpg"},{type:"file",name:"shm19.jpg"},{type:"file",name:"shm2.jpg"},{type:"file",name:"shm20.jpg"},{type:"file",name:"shm21.jpg"},{type:"file",name:"shm22.jpg"},{type:"file",name:"shm23.jpg"},{type:"file",name:"shm24.jpg"},{type:"file",name:"shm25.jpg"},{type:"file",name:"shm26.jpg"},{type:"file",name:"shm27.jpg"},{type:"file",name:"shm28.jpg"},{type:"file",name:"shm29.jpg"},{type:"file",name:"shm3.jpg"},{type:"file",name:"shm30.jpg"},{type:"file",name:"shm31.jpg"},{type:"file",name:"shm32.jpg"},{type:"file",name:"shm4.jpg"},{type:"file",name:"shm5.jpg"},{type:"file",name:"shm6.jpg"},{type:"file",name:"shm7.jpg"},{type:"file",name:"shm8.jpg"},{type:"file",name:"shm9.jpg"},{type:"file",name:"shmeli_mon1.jpg"},{type:"file",name:"shmeli_mon2.jpg"},{type:"file",name:"shmeli_mon3.jpg"},{type:"file",name:"shmeli_mon4.jpg"},{type:"file",name:"shmeli_mon5.jpg"},{type:"file",name:"shmeli_mon6.jpg"},{type:"file",name:"shmeli_mon7.jpg"},{type:"file",name:"shmeli_mon8.jpg"},{type:"file",name:"shmeli_relax_01.jpg"},{type:"file",name:"shmeli_relax_02.jpg"},{type:"file",name:"shmeli_relax_03.jpg"},{type:"file",name:"shmeli_relax_04.jpg"},{type:"file",name:"shmeli_relax_05.jpg"},{type:"file",name:"shmeli_relax_06.jpg"},{type:"file",name:"shmeli_relax_07.jpg"},{type:"file",name:"shmeli_relax_08.jpg"}]},{name:"\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430, \u043A\u0438\u043D\u043E\u0442\u0435\u0430\u0442\u0440 \u0420\u0430\u0441\u0441\u0432\u0435\u0442, \u041C\u043E\u0441\u043A\u0432\u0430",type:"folder",children:[{type:"file",name:"1901.jpg"},{type:"file",name:"1902.jpg"},{type:"file",name:"1903.jpg"},{type:"file",name:"1904.jpg"},{type:"file",name:"1905.jpg"},{type:"file",name:"1906.jpg"},{type:"file",name:"1907.jpg"},{type:"file",name:"1908.jpg"},{type:"file",name:"1909.jpg"},{type:"file",name:"1910.jpg"},{type:"file",name:"1911.jpg"},{type:"file",name:"1912.jpg"},{type:"file",name:"1914.jpg"},{type:"file",name:"1915.jpg"},{type:"file",name:"1916.jpg"},{type:"file",name:"1917.jpg"},{type:"file",name:"1918.jpg"},{type:"file",name:"1919.jpg"},{type:"file",name:"1920.jpg"},{type:"file",name:"1921.jpg"},{type:"file",name:"1922.jpg"},{type:"file",name:"1923.jpg"},{type:"file",name:"1924.jpg"},{type:"file",name:"1925.jpg"},{type:"file",name:"1926.jpg"},{type:"file",name:"1927.jpg"},{type:"file",name:"1928.jpg"},{type:"file",name:"1929.jpg"},{type:"file",name:"1930.jpg"},{type:"file",name:"1931.jpg"},{type:"file",name:"1932.jpg"},{type:"file",name:"1933.jpg"},{type:"file",name:"1934.jpg"},{type:"file",name:"1935.jpg"},{type:"file",name:"1936.jpg"},{type:"file",name:"1937.jpg"},{type:"file",name:"1938.jpg"},{type:"file",name:"1939.jpg"},{type:"file",name:"1940.jpg"},{type:"file",name:"1941.jpg"},{type:"file",name:"1942.jpg"},{type:"file",name:"1943.jpg"},{type:"file",name:"1944.jpg"},{type:"file",name:"1945.jpg"},{type:"file",name:"1946.jpg"},{type:"file",name:"1947.jpg"},{type:"file",name:"1948.jpg"},{type:"file",name:"1949.jpg"},{type:"file",name:"1950.jpg"},{type:"file",name:"1951.jpg"},{type:"file",name:"1952.jpg"},{type:"file",name:"1953.jpg"},{type:"file",name:"1954.jpg"},{type:"file",name:"1955.jpg"},{type:"file",name:"1956.jpg"},{type:"file",name:"1957.jpg"},{type:"file",name:"1958.jpg"},{type:"file",name:"1959.jpg"},{type:"file",name:"1960.jpg"},{type:"file",name:"1961.jpg"},{type:"file",name:"1962.jpg"},{type:"file",name:"1963.jpg"},{type:"file",name:"1964.jpg"},{type:"file",name:"1965.jpg"},{type:"file",name:"1966.jpg"},{type:"file",name:"1967.jpg"}]},{name:"\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u044F \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B",type:"folder",children:[{type:"file",name:"0017.jpg"},{type:"file",name:"0021.jpg"},{type:"file",name:"0025.jpg"},{type:"file",name:"0036.jpg"},{type:"file",name:"0040.jpg"},{type:"file",name:"0045.jpg"},{type:"file",name:"0104.jpg"},{type:"file",name:"0118.jpg"},{type:"file",name:"0129.jpg"},{type:"file",name:"0153.jpg"},{type:"file",name:"0154.jpg"},{type:"file",name:"0155.jpg"},{type:"file",name:"0159.jpg"},{type:"file",name:"0163.jpg"},{type:"file",name:"0170.jpg"}]},{name:"\u0428\u043C\u0435\u043B\u044C \u0438 \u0436\u0435\u043D\u0449\u0438\u043D\u044B \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B \u0418\u043D\u0444\u0435\u0440\u043D\u043E",type:"folder",children:[{type:"file",name:"shminferno1.jpg"},{type:"file",name:"shminferno2.jpg"},{type:"file",name:"shminferno3.jpg"},{type:"file",name:"shminferno4.jpg"},{type:"file",name:"shminferno5.jpg"},{type:"file",name:"shminferno6.jpg"},{type:"file",name:"shminferno7.jpg"}]}]}]}];var Cx={id:"shmely",name:"\u0428\u043C\u0435\u043B\u0438",image:"/artist/shmely/artist.webp",images:Ng,streaming:{spotify:"https://open.spotify.com/artist/4OXVjz9BARB2MwT6sdx8JE",youtube:"https://www.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw",youtubeMusic:"https://music.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw",yandexMusic:"https://music.yandex.ru/artist/213256"},albums:["trotilovyye-skazki","tulovishche","purga","durackiye-knizhki","petlya-soblazna","zloradostnaya-opuhol","vulkanizaciya-dushi","princessa-bez-trusov","bomba-v-ubezhishche","moshchi","trahni-nebo","organizm","spazmy-roka","risunki-na-dushe","poshmelye","negativ-prostranstva","agressivnyj-pokoj","polna-suma","ostanovite-chelovechestvo","zhazhda","ten-serdca","lyod","vethij-sbornik","vosem-zhenshchin-na-raduge","pugovica","ya-vernus-k-tebe","koshkiny-obidy","karamelnyye-strahi","moskovskaya-yarmarka-udovolstvij","mekhanicheskaya-balerina","toplivo","cekh-po-reabilitacii-paranoikov","teatr-urodov","para-trupov","belyj-karandash","zloradostnaya-opuhol-new","16-chudes","mizantropiya"]},Vd=class extends Nt{constructor(){super(...arguments),this.artist=Cx,this.albums=Ag,this.songs=jg}},Wo=new Vd;var Rg={[Uo.artist.id]:Uo,[zo.artist.id]:zo,[Wo.artist.id]:Wo},Me=Rg;console.log(Rg);var Og=[Uo.artist,zo.artist,Wo.artist];var le=(()=>{let t=class t{constructor(){this.artist$=new J(""),this.album$=new J(""),this.song$=new J("")}setArtist(r="",i="",o=""){this.artist$.next(r),this.album$.next(i),this.song$.next(o)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ex=(e,t)=>t.id;function _x(e,t){if(e&1&&(y(0,"div",1)(1,"a",2),Q(2,"img",3),y(3,"h3",4),A(4),v()()()),e&2){let n=t.$implicit;h(),M("routerLink","artist/"+n.id),h(),M("src","."+n.image,tt)("alt",n.name),h(2),be(n.name)}}var Pg=(()=>{let t=class t{constructor(r,i){this.titleService=r,this.artistService=i,this.artists=Og,this.titleService.setTitle("\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439"),this.artistService.setArtist()}};t.\u0275fac=function(i){return new(i||t)(D(De),D(le))},t.\u0275cmp=q({type:t,selectors:[["app-home-page"]],standalone:!0,features:[Z],decls:3,vars:0,consts:[[1,"home-page","rows"],[1,"home-page__item","col"],[1,"home-page__link",3,"routerLink"],[3,"src","alt"],[1,"home-page__name"]],template:function(i,o){i&1&&(y(0,"div",0),pe(1,_x,5,4,"div",1,Ex),v()),i&2&&(h(),he(o.artists))},dependencies:[Ie],styles:[".home-page__item[_ngcontent-%COMP%]{width:48%}@media screen and (max-width: 768px){.home-page__item[_ngcontent-%COMP%]{width:98%}}.home-page__link[_ngcontent-%COMP%]{display:block;text-decoration:none}.home-page__name[_ngcontent-%COMP%]{font-size:18px;transition:color .3s ease;margin-top:10px;margin-bottom:20px}"]});let e=t;return e})();function xx(e,t){if(e&1&&(y(0,"div",4),A(1),v()),e&2){let n=T();h(),be(n.year)}}var Go=(()=>{let t=class t{constructor(){this.year=0,this.thumbnail=!1}get folder(){return this.image??"/album-card.jpg"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=q({type:t,selectors:[["app-album-card"]],inputs:{link:"link",name:"name",image:"image",year:"year",thumbnail:"thumbnail"},standalone:!0,features:[Z],decls:6,vars:7,consts:[[1,"album-card",3,"routerLink"],[1,"album-card__image"],[1,"album-card__img",3,"src","alt"],[1,"album-card__name"],[1,"album-card__year"]],template:function(i,o){i&1&&(y(0,"a",0)(1,"div",1),Q(2,"img",2),v(),y(3,"div",3),A(4),v(),U(5,xx,2,1,"div",4),v()),i&2&&(Mr("thumbnail",o.thumbnail),M("routerLink",o.link),h(2),M("src","."+o.folder,tt)("alt",o.name),h(2),be(o.name),h(),W(o.year?5:-1))},dependencies:[Ie],styles:[".album-card[_ngcontent-%COMP%]{display:block;position:relative;padding:20px 22px 24px;box-sizing:border-box;text-decoration:none;transition:background-color .3s ease}@media screen and (max-width: 992px){.album-card[_ngcontent-%COMP%]{padding:10px 10px 19px}}.album-card[_ngcontent-%COMP%]:hover{background-color:#222427}.album-card__img[_ngcontent-%COMP%]{margin:auto;object-fit:contain;object-position:center;height:100%;width:0;min-width:100%;min-height:100%;aspect-ratio:1}.album-card__name[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-transform:uppercase;transition:color .3s ease;margin-top:14px}.album-card__year[_ngcontent-%COMP%]{font-weight:500;line-height:1.5;font-size:16px;color:#696c6f}.album-card.thumbnail[_ngcontent-%COMP%]   .album-card__name[_ngcontent-%COMP%], .album-card.thumbnail[_ngcontent-%COMP%]   .album-card__year[_ngcontent-%COMP%]{font-size:14px}"]});let e=t;return e})();var Sx=(e,t)=>t.link;function Mx(e,t){if(e&1&&(y(0,"li",1)(1,"a",2),Q(2,"img",3),v()()),e&2){let n=t.$implicit;M("title",n.name),h(),M("href",n.link,tt),h(),M("src","./streaming/"+n.image,tt)("alt",n.name)}}function Tx(e,t){if(e&1&&(y(0,"ul",0),pe(1,Mx,3,4,"li",1,Sx),v()),e&2){let n=T();h(),he(n.list)}}var Yo=(()=>{let t=class t{constructor(){this.streamingList={spotify:{name:"Spotify",image:"spotify.svg"},appleMusic:{name:"Apple Music",image:"appleMusic.svg"},youtubeMusic:{name:"YouTube Music",image:"YouTubeMusic.svg"},youtube:{name:"YouTube",image:"YouTube.svg"},bandcamp:{name:"Bandcamp",image:"bandcamp.svg"},yandexMusic:{name:"\u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0443\u0437\u044B\u043A\u0430",image:"yandexMusic.svg"}}}get list(){return this.streaming?Object.entries(this.streaming).map(([i,o])=>{let{name:s,image:a}=this.streamingList[i];return{link:o,name:s,image:a}}):[]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=q({type:t,selectors:[["app-streaming-list"]],inputs:{streaming:"streaming"},standalone:!0,features:[Z],decls:1,vars:1,consts:[["aria-label","Streaming List",1,"streaming-list"],[1,"streaming-list__item",3,"title"],["target","_blank",1,"streaming-list__link",3,"href"],[1,"streaming-list__logo",3,"src","alt"]],template:function(i,o){i&1&&U(0,Tx,3,0,"ul",0),i&2&&W(o.streaming?0:-1)},styles:[".streaming-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;column-gap:10px;align-items:center;list-style-type:none;padding-left:0}.streaming-list__item[_ngcontent-%COMP%]{filter:grayscale(1);background-color:#444;margin-bottom:10px;transition:background-color .4s}.streaming-list__item[_ngcontent-%COMP%]:hover{filter:grayscale(0);background-color:#eee}.streaming-list__link[_ngcontent-%COMP%]{display:block;height:22px;padding:10px}.streaming-list__logo[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=t;return e})();var kx=(e,t)=>t.id;function Ax(e,t){if(e&1&&Q(0,"app-album-card",1),e&2){let n=t.$implicit;M("link","album/"+n.id)("name",n.name)("year",n.year)("image",n.folder)}}function jx(e,t){if(e&1&&(y(0,"div",0),pe(1,Ax,1,4,"app-album-card",1,kx),y(3,"div",2),Q(4,"app-streaming-list",3),v()()),e&2){let n=T();h(),he(n.albums),h(3),M("streaming",n.streaming)}}var Fg=(()=>{let t=class t{constructor(r,i,o){if(this.route=r,this.titleService=i,this.artistService=o,this.artists=Me,this.artistName="",this.artistId=null,this.albums=[],this.route.params.subscribe(({artist:a})=>{this.artistService.setArtist(a)}),this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let s=this.artists[this.artistId];this.streaming=s.artist.streaming,this.artistName=s.artist.name,this.albums=s.artist.albums.map(a=>s.albums[a])}ngOnInit(){this.titleService.setTitle(`${this.artistName} | \u0414\u0438\u0441\u043A\u043E\u0433\u0440\u0430\u0444\u0438\u044F`)}};t.\u0275fac=function(i){return new(i||t)(D(oe),D(De),D(le))},t.\u0275cmp=q({type:t,selectors:[["app-artist-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"artist-page","rows"],[1,"artist-page__col","col",3,"link","name","year","image"],[1,"artist-page__streaming-list","col"],[3,"streaming"]],template:function(i,o){i&1&&U(0,jx,5,1,"div",0),i&2&&W(o.artistName?0:-1)},dependencies:[Go,Yo],styles:[".artist-page__col[_ngcontent-%COMP%]{width:23%}@media screen and (max-width: 992px){.artist-page__col[_ngcontent-%COMP%]{width:31.3333333333%}}@media screen and (max-width: 768px){.artist-page__col[_ngcontent-%COMP%]{width:48%}}@media screen and (max-width: 480px){.artist-page__col[_ngcontent-%COMP%]{width:98%}}.artist-page__streaming-list[_ngcontent-%COMP%]{width:98%}"]});let e=t;return e})();var qo=(()=>{let t=class t{transform(r){return r?r.trim():""}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=ka({name:"trim",type:t,pure:!0,standalone:!0});let e=t;return e})();var Nx=(e,t)=>t.id||t.name;function Rx(e,t){if(e&1&&(y(0,"div",2),Q(1,"img",6),v()),e&2){let n=T(2);h(),M("src","."+n.album.folder,tt)("alt",n.album.name)}}function Ox(e,t){if(e&1&&A(0),e&2){let n=T(2).$implicit,r=T(2);ne(" (",r.getTime(n.duration),") ")}}function Px(e,t){if(e&1&&(A(0),y(1,"a",7),A(2),v(),U(3,Ox,1,1)),e&2){let n=T(),r=n.$implicit,i=n.$index,o=T(2);ne(" ",i+1,". "),h(),M("routerLink","/artist/"+o.artistId+"/song/"+r.id),h(),ne(" ",r.name," "),h(),W(r.duration?3:-1)}}function Fx(e,t){if(e&1&&(A(0),y(1,"span"),A(2),v()),e&2){let n=T(),r=n.$implicit,i=n.$index;ne(" ",i+1,". "),h(2),be(r.name)}}function Lx(e,t){if(e&1&&(y(0,"div",4),U(1,Px,4,4)(2,Fx,3,2,"span"),v()),e&2){let n=t.$implicit;h(),W(n.id?1:2)}}function Vx(e,t){if(e&1&&(y(0,"pre"),A(1),wo(2,"trim"),v()),e&2){let n=T(2);h(),be(bo(2,1,n.album==null?null:n.album.info))}}function Bx(e,t){if(e&1&&(y(0,"div",0)(1,"div",1),U(2,Rx,2,2,"div",2),y(3,"h3"),A(4),y(5,"span",3),A(6),v()(),pe(7,Lx,3,1,"div",4,Nx),U(9,Vx,3,3,"pre"),Q(10,"app-streaming-list",5),v()()),e&2){let n=T();h(2),W(n.album&&n.album.folder?2:-1),h(2),ne(" ",n.album==null?null:n.album.name," "),h(2),be(n.album==null?null:n.album.year),h(),he(n.songs),h(2),W(n.album!=null&&n.album.info?9:-1),h(),M("streaming",n.album==null?null:n.album.streaming)}}var Lg=(()=>{let t=class t{constructor(r,i,o){this.route=r,this.titleService=i,this.artistService=o,this.artists=Me,this.artistName="",this.artistId=null,this.album=null,this.songs=[],this.route.params.subscribe(({artist:l,album:u})=>{this.artistService.setArtist(l,u)}),this.artistId=this.route.snapshot.paramMap.get("artist");let s=this.route.snapshot.paramMap.get("album");if(!this.artistId||!s)return;let a=this.artists[this.artistId];this.artistName=a.artist.name,this.album=a.albums[s],this.songs=this.album.songs.map(l=>{if(typeof l=="string"){let u=a.songs[l];return{id:u.id,name:u.name[0],duration:u.duration??0}}if(Array.isArray(l)){let[u,{name:c}]=l,d=a.songs[u];return{id:u,name:c[0],duration:d.duration??0}}return{name:l.name,id:"",duration:0}})}ngOnInit(){this.titleService.setTitle(`${this.album?.name} (${this.album?.year}) | ${this.artistName}`)}getTime(r){let i=r/60,o=r%60;return[Math.trunc(i),("0"+o).slice(-2)].join(":")}};t.\u0275fac=function(i){return new(i||t)(D(oe),D(De),D(le))},t.\u0275cmp=q({type:t,selectors:[["app-album-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"album-page","rows"],[1,"album-page__item","col"],[1,"album-page__folder"],[1,"album-page__year"],[1,"album-page__song"],[3,"streaming"],[3,"src","alt"],[3,"routerLink"]],template:function(i,o){i&1&&U(0,Bx,11,5,"div",0),i&2&&W(o.artistName?0:-1)},dependencies:[Ie,qo,Yo],styles:[".album-page__item[_ngcontent-%COMP%]{width:98%}.album-page__folder[_ngcontent-%COMP%]{max-width:400px;float:right;margin-left:20px;margin-bottom:20px}@media screen and (max-width: 768px){.album-page__folder[_ngcontent-%COMP%]{float:none;margin-left:0;line-height:1}}.album-page__year[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.5;font-size:20px;letter-spacing:.05em;text-transform:uppercase;color:#696c6f}.album-page__song[_ngcontent-%COMP%]{line-height:1.8}.album-page__song[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .album-page__song[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px}.album-page__song[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;text-decoration:none;border-bottom:1px solid var(--hover-text)}"]});let e=t;return e})();var $x=["youtubeContainer"];function Hx(e,t){if(e&1){let n=go();y(0,"youtube-player-placeholder",2),Jt("click",function(){oo(n);let i=T();return so(i._load(!0))}),v()}if(e&2){let n=T();M("videoId",n.videoId)("width",n.width)("height",n.height)("isLoading",n._isLoading)("buttonLabel",n.placeholderButtonLabel)("quality",n.placeholderImageQuality)}}var Ux=(()=>{let t=class t{_getBackgroundImage(){let r;return this.quality==="low"?r=`https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`:this.quality==="high"?r=`https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg`:r=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,`url(${r})`}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=q({type:t,selectors:[["youtube-player-placeholder"]],hostAttrs:[1,"youtube-player-placeholder"],hostVars:8,hostBindings:function(i,o){i&2&&(Sr("background-image",o._getBackgroundImage())("width",o.width,"px")("height",o.height,"px"),Mr("youtube-player-placeholder-loading",o.isLoading))},inputs:{videoId:"videoId",width:"width",height:"height",isLoading:"isLoading",buttonLabel:"buttonLabel",quality:"quality"},standalone:!0,features:[Z],decls:4,vars:1,consts:[["type","button",1,"youtube-player-placeholder-button"],["height","100%","version","1.1","viewBox","0 0 68 48","focusable","false","aria-hidden","true"],["d","M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z","fill","#f00"],["d","M 45,24 27,14 27,34","fill","#fff"]],template:function(i,o){i&1&&(y(0,"button",0),Xp(),y(1,"svg",1),Q(2,"path",2)(3,"path",3),v()()),i&2&&xr("aria-label",o.buttonLabel)},styles:[".youtube-player-placeholder{display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden;cursor:pointer;background-color:#000;background-position:center center;background-size:cover;transition:box-shadow 300ms ease;box-shadow:inset 0 120px 90px -90px rgba(0,0,0,.8)}.youtube-player-placeholder-button{transition:opacity 300ms ease;-moz-appearance:none;-webkit-appearance:none;background:none;border:none;padding:0;display:flex}.youtube-player-placeholder-button svg{width:68px;height:48px}.youtube-player-placeholder-loading{box-shadow:none}.youtube-player-placeholder-loading .youtube-player-placeholder-button{opacity:0}"],encapsulation:2,changeDetection:0});let e=t;return e})(),zx=new k("YOUTUBE_PLAYER_CONFIG"),Vg=640,Bg=390;function $g(e){return e==null?e:kr(e,0)}var it=function(e){return e[e.UNSTARTED=-1]="UNSTARTED",e[e.ENDED=0]="ENDED",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.BUFFERING=3]="BUFFERING",e[e.CUED=5]="CUED",e}(it||{}),Zo=(()=>{let t=class t{get height(){return this._height}set height(r){this._height=r==null||isNaN(r)?Bg:r}get width(){return this._width}set width(r){this._width=r==null||isNaN(r)?Vg:r}constructor(r,i){this._ngZone=r,this._destroyed=new se,this._playerChanges=new J(void 0),this._nonce=m(Dr,{optional:!0}),this._changeDetectorRef=m(Tt),this._isLoading=!1,this._hasPlaceholder=!0,this._height=Bg,this._width=Vg,this.disableCookies=!1,this.disablePlaceholder=!1,this.showBeforeIframeApiLoads=!1,this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange");let o=m(zx,{optional:!0});this.loadApi=o?.loadApi??!0,this.disablePlaceholder=!!o?.disablePlaceholder,this.placeholderButtonLabel=o?.placeholderButtonLabel||"Play video",this.placeholderImageQuality=o?.placeholderImageQuality||"standard",this._isBrowser=Pm(i)}ngAfterViewInit(){this._conditionallyLoad()}ngOnChanges(r){this._shouldRecreatePlayer(r)?this._conditionallyLoad():this._player&&((r.width||r.height)&&this._setSize(),r.suggestedQuality&&this._setQuality(),(r.startSeconds||r.endSeconds||r.suggestedQuality)&&this._cuePlayer())}ngOnDestroy(){this._pendingPlayer?.destroy(),this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():(this._getPendingState().playbackState=it.PLAYING,this._load(!0))}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=it.PAUSED}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=it.CUED}seekTo(r,i){this._player?this._player.seekTo(r,i):this._getPendingState().seek={seconds:r,allowSeekAhead:i}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():this._pendingPlayerState?!!this._pendingPlayerState.muted:!1}setVolume(r){this._player?this._player.setVolume(r):this._getPendingState().volume=r}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&this._pendingPlayerState.volume!=null?this._pendingPlayerState.volume:0}setPlaybackRate(r){if(this._player)return this._player.setPlaybackRate(r);this._getPendingState().playbackRate=r}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&this._pendingPlayerState.playbackRate!=null?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(!(!this._isBrowser||!window.YT))return this._player?this._player.getPlayerState():this._pendingPlayerState&&this._pendingPlayerState.playbackState!=null?this._pendingPlayerState.playbackState:it.UNSTARTED}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_load(r){this._isBrowser&&(!window.YT||!window.YT.Player?(this.loadApi?(this._isLoading=!0,Wx(this._nonce)):this.showBeforeIframeApiLoads,this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback?.(),this._ngZone.run(()=>this._createPlayer(r))}):this._createPlayer(r))}_conditionallyLoad(){this._shouldShowPlaceholder()?this.playerVars?.autoplay===1&&this._load(!0):this._load(!1)}_shouldShowPlaceholder(){return this.disablePlaceholder?!1:this._isBrowser?this._hasPlaceholder&&!!this.videoId&&!this._player:!0}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_shouldRecreatePlayer(r){let i=r.videoId||r.playerVars||r.disableCookies||r.disablePlaceholder;return!!i&&!i.isFirstChange()}_createPlayer(r){if(this._player?.destroy(),this._pendingPlayer?.destroy(),typeof YT>"u"||!this.videoId&&!this.playerVars?.list)return;let i=this._ngZone.runOutsideAngular(()=>new YT.Player(this.youtubeContainer.nativeElement,{videoId:this.videoId,host:this.disableCookies?"https://www.youtube-nocookie.com":void 0,width:this.width,height:this.height,playerVars:r?K(w({},this.playerVars||{}),{autoplay:1}):this.playerVars})),o=()=>{this._ngZone.run(()=>{this._isLoading=!1,this._hasPlaceholder=!1,this._player=i,this._pendingPlayer=void 0,i.removeEventListener("onReady",o),this._playerChanges.next(i),this._setSize(),this._setQuality(),this._pendingPlayerState&&(this._applyPendingPlayerState(i,this._pendingPlayerState),this._pendingPlayerState=void 0);let s=i.getPlayerState();(s===it.UNSTARTED||s===it.CUED||s==null)&&this._cuePlayer(),this._changeDetectorRef.markForCheck()})};this._pendingPlayer=i,i.addEventListener("onReady",o)}_applyPendingPlayerState(r,i){let{playbackState:o,playbackRate:s,volume:a,muted:l,seek:u}=i;switch(o){case it.PLAYING:r.playVideo();break;case it.PAUSED:r.pauseVideo();break;case it.CUED:r.stopVideo();break}s!=null&&r.setPlaybackRate(s),a!=null&&r.setVolume(a),l!=null&&(l?r.mute():r.unMute()),u!=null&&r.seekTo(u.seconds,u.allowSeekAhead)}_cuePlayer(){this._player&&this.videoId&&this._player.cueVideoById({videoId:this.videoId,startSeconds:this.startSeconds,endSeconds:this.endSeconds,suggestedQuality:this.suggestedQuality})}_setSize(){this._player?.setSize(this.width,this.height)}_setQuality(){this._player&&this.suggestedQuality&&this._player.setPlaybackQuality(this.suggestedQuality)}_getLazyEmitter(r){return this._playerChanges.pipe(Ae(i=>i?bi(o=>{i.addEventListener(r,o)},o=>{try{i?.removeEventListener?.(r,o)}catch{}}):I()),i=>new $(o=>i.subscribe({next:s=>this._ngZone.run(()=>o.next(s)),error:s=>o.error(s),complete:()=>o.complete()})),Jn(this._destroyed))}};t.\u0275fac=function(i){return new(i||t)(D(X),D(Mt))},t.\u0275cmp=q({type:t,selectors:[["youtube-player"]],viewQuery:function(i,o){if(i&1&&gm($x,7),i&2){let s;yo(s=vo())&&(o.youtubeContainer=s.first)}},inputs:{videoId:"videoId",height:[2,"height","height",kr],width:[2,"width","width",kr],startSeconds:[2,"startSeconds","startSeconds",$g],endSeconds:[2,"endSeconds","endSeconds",$g],suggestedQuality:"suggestedQuality",playerVars:"playerVars",disableCookies:[2,"disableCookies","disableCookies",nt],loadApi:[2,"loadApi","loadApi",nt],disablePlaceholder:[2,"disablePlaceholder","disablePlaceholder",nt],showBeforeIframeApiLoads:[2,"showBeforeIframeApiLoads","showBeforeIframeApiLoads",nt],placeholderButtonLabel:"placeholderButtonLabel",placeholderImageQuality:"placeholderImageQuality"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},standalone:!0,features:[_r,xt,Z],decls:4,vars:3,consts:[["youtubeContainer",""],[3,"videoId","width","height","isLoading","buttonLabel","quality"],[3,"click","videoId","width","height","isLoading","buttonLabel","quality"]],template:function(i,o){i&1&&(U(0,Hx,1,6,"youtube-player-placeholder",1),y(1,"div"),Q(2,"div",null,0),v()),i&2&&(W(o._shouldShowPlaceholder()?0:-1),h(),Sr("display",o._shouldShowPlaceholder()?"none":""))},dependencies:[Ux],encapsulation:2,changeDetection:0});let e=t;return e})(),Bd=!1;function Wx(e){if(Bd)return;let t="https://www.youtube.com/iframe_api",n=document.createElement("script"),r=i=>{n.removeEventListener("load",r),n.removeEventListener("error",r),i.type==="error"&&(Bd=!1)};n.addEventListener("load",r),n.addEventListener("error",r),n.src=t,n.async=!0,e&&n.setAttribute("nonce",e),Bd=!0,document.body.appendChild(n)}var Gx=(e,t)=>t.id;function Yx(e,t){if(e&1&&(y(0,"small"),A(1),v()),e&2){let n=T().$implicit;h(),be(n)}}function qx(e,t){if(e&1&&(y(0,"h3"),A(1),v()),e&2){let n=T().$implicit;h(),ne(" ",n," ")}}function Zx(e,t){if(e&1&&U(0,Yx,2,1,"small")(1,qx,2,1,"h3"),e&2){let n=t.$index;W(n?0:1)}}function Qx(e,t){if(e&1&&pe(0,Zx,2,1,null,null,hm),e&2){let n=T(2);he(n.song==null?null:n.song.name)}}function Kx(e,t){if(e&1&&(y(0,"div",2),Q(1,"youtube-player",6),v()),e&2){let n=T(2);h(),M("videoId",n.song==null?null:n.song.clipYouTubeId)}}function Jx(e,t){if(e&1&&(y(0,"div",5),Q(1,"app-album-card",7),v()),e&2){let n=t.$implicit,r=T(3);h(),M("name",n.name)("link","./artist/"+r.artistId+"/album/"+n.id)("year",n.year)("image","."+n.folder)("thumbnail",!0)}}function Xx(e,t){if(e&1&&pe(0,Jx,2,5,"div",5,Gx),e&2){let n=T(2);he(n.albums)}}function eS(e,t){if(e&1&&(y(0,"div",5),Q(1,"app-album-card",8),v()),e&2){let n=T(2);h(),M("link","./artist/"+n.artistId+"/songs/other")("name","\u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B")("thumbnail",!0)}}function tS(e,t){if(e&1&&(y(0,"div",0)(1,"div",1),U(2,Qx,2,0),y(3,"small"),A(4),v(),y(5,"pre"),A(6),wo(7,"trim"),v()(),y(8,"div",1),U(9,Kx,2,1,"div",2),v(),y(10,"div",3)(11,"div",4),U(12,Xx,2,0)(13,eS,2,3,"div",5),v()()()),e&2){let n=T();h(2),W(n.song!=null&&n.song.name?2:-1),h(2),be(n.song==null?null:n.song.authors),h(2),be(bo(7,5,n.song==null?null:n.song.text)),h(3),W(n.song!=null&&n.song.clipYouTubeId?9:-1),h(3),W(n.albums.length?12:13)}}var Hg=(()=>{let t=class t{constructor(r,i,o){this.route=r,this.titleService=i,this.artistService=o,this.artists=Me,this.artistName="",this.artistId=null,this.albums=[],this.song=null,this.route.params.subscribe(({artist:l,song:u})=>{this.artistService.setArtist(l,"",u)}),this.artistId=this.route.snapshot.paramMap.get("artist");let s=this.route.snapshot.paramMap.get("song");if(!this.artistId||!s)return;let a=this.artists[this.artistId];this.artistName=a.artist.name,this.song=a.songs[s],this.albums=this.song.albums.map(l=>a.albums[l])}ngOnInit(){this.titleService.setTitle(`${this.song?.name[0]} | ${this.artistName}`)}};t.\u0275fac=function(i){return new(i||t)(D(oe),D(De),D(le))},t.\u0275cmp=q({type:t,selectors:[["app-song-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"song-page","rows"],[1,"song-page__col","col"],[1,"song-page__video"],[1,"song-page__full","col"],[1,"song-page__albums","rows"],[1,"song-page__album","col"],["placeholderImageQuality","low",3,"videoId"],[3,"name","link","year","image","thumbnail"],[3,"link","name","thumbnail"]],template:function(i,o){i&1&&U(0,tS,14,7,"div",0),i&2&&W(o.artistName?0:-1)},dependencies:[qo,Zo,Go],styles:[".song-page__col[_ngcontent-%COMP%]{width:48%;position:relative}@media screen and (max-width: 992px){.song-page__col[_ngcontent-%COMP%]{width:98%}}.song-page__full[_ngcontent-%COMP%]{width:98%}.song-page__album[_ngcontent-%COMP%]{width:14.6666666667%}@media screen and (max-width: 992px){.song-page__album[_ngcontent-%COMP%]{width:23%}}@media screen and (max-width: 768px){.song-page__album[_ngcontent-%COMP%]{width:31.3333333333%}}@media screen and (max-width: 480px){.song-page__album[_ngcontent-%COMP%]{width:48%}}@media screen and (max-width: 320px){.song-page__album[_ngcontent-%COMP%]{width:98%}}.song-page__video[_ngcontent-%COMP%]{position:sticky;top:20px;aspect-ratio:16/9}@media screen and (max-width: 992px){.song-page__video[_ngcontent-%COMP%]{margin:20px 0 40px}}"]});let e=t;return e})();var nS=(e,t)=>t.id;function rS(e,t){if(e&1&&(y(0,"div",1)(1,"div",3),A(2),y(3,"a",2),A(4),v()()()),e&2){let n=t.$implicit,r=t.$index,i=T(2);h(2),ne(" ",r+1,". "),h(),M("routerLink","/artist/"+i.artistId+"/song/"+n.id),h(),ne(" ",n.name[0]," ")}}function iS(e,t){if(e&1&&(y(0,"div",0)(1,"div",1)(2,"h3")(3,"span"),A(4,"\u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438"),v(),A(5," | "),y(6,"a",2),A(7,"\u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B"),v()()(),pe(8,rS,5,3,"div",1,nS),v()),e&2){let n=T();h(6),M("routerLink","other"),h(2),he(n.songs)}}var Ug=(()=>{let t=class t{constructor(r,i,o){if(this.route=r,this.titleService=i,this.artistService=o,this.artists=Me,this.artistName="",this.artistId=null,this.songs=[],this.route.params.subscribe(({artist:a})=>{this.artistService.setArtist(a)}),this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let s=this.artists[this.artistId];this.artistName=s.artist.name,this.songs=s.getSongsWithTexts().sort(s.sortAsc)}ngOnInit(){this.titleService.setTitle(`${this.artistName} | \u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438`)}};t.\u0275fac=function(i){return new(i||t)(D(oe),D(De),D(le))},t.\u0275cmp=q({type:t,selectors:[["app-songs-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"songs-page","rows"],[1,"songs-page__item","col"],[3,"routerLink"],[1,"songs-page__song"]],template:function(i,o){i&1&&U(0,iS,10,1,"div",0),i&2&&W(o.artistName?0:-1)},dependencies:[Ie],styles:[".songs-page__item[_ngcontent-%COMP%]{width:98%;line-height:1.8}@media screen and (max-width: 480px){.songs-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}}.songs-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--hover-text)}.songs-page__song[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;text-decoration:none;border-bottom:1px solid var(--hover-text)}"]});let e=t;return e})();var oS=(e,t)=>t.id;function sS(e,t){if(e&1&&(y(0,"div",1)(1,"div",3),A(2),y(3,"a",2),A(4),v()()()),e&2){let n=t.$implicit,r=t.$index,i=T(2);h(2),ne(" ",r+1,". "),h(),M("routerLink","/artist/"+i.artistId+"/song/"+n.id),h(),ne(" ",n.name[0]," ")}}function aS(e,t){if(e&1&&(y(0,"div",0)(1,"div",1)(2,"h3")(3,"a",2),A(4,"\u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438"),v(),A(5," | "),y(6,"span"),A(7,"\u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B"),v()()(),pe(8,sS,5,3,"div",1,oS),v()),e&2){let n=T();h(3),M("routerLink","../"),h(5),he(n.songs)}}var zg=(()=>{let t=class t{constructor(r,i,o){if(this.route=r,this.titleService=i,this.artistService=o,this.artists=Me,this.artistName="",this.artistId=null,this.songs=[],this.route.params.subscribe(({artist:a})=>{this.artistService.setArtist(a)}),this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let s=this.artists[this.artistId];this.artistName=s.artist.name,this.songs=s.getSongsWithoutAlbum().sort(s.sortAsc)}ngOnInit(){this.titleService.setTitle(`${this.artistName} | \u0414\u0440\u0443\u0433\u0438\u0435 \u043F\u0435\u0441\u043D\u0438`)}};t.\u0275fac=function(i){return new(i||t)(D(oe),D(De),D(le))},t.\u0275cmp=q({type:t,selectors:[["app-other-songs-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"other-songs-page","rows"],[1,"other-songs-page__item","col"],[3,"routerLink"],[1,"other-songs-page__song"]],template:function(i,o){i&1&&U(0,aS,10,1,"div",0),i&2&&W(o.artistName?0:-1)},dependencies:[Ie],styles:[".other-songs-page__item[_ngcontent-%COMP%]{width:98%;line-height:1.8}@media screen and (max-width: 480px){.other-songs-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}}.other-songs-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--hover-text)}.other-songs-page__song[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;text-decoration:none;border-bottom:1px solid var(--hover-text)}"]});let e=t;return e})();var lS=(e,t)=>t.id;function uS(e,t){if(e&1&&(y(0,"span",6),A(1),v()),e&2){let n=T().$implicit,r=T(2);h(),be(r.artist.yearOfSong(n))}}function cS(e,t){if(e&1){let n=go();y(0,"div",2)(1,"div",3)(2,"youtube-player",4),Jt("stateChange",function(i){oo(n);let o=T(2);return so(o.stateChange(i))}),v()(),y(3,"a",5),A(4),U(5,uS,2,1,"span",6),v()()}if(e&2){let n=t.$implicit,r=T(2);h(2),M("videoId",n.clipYouTubeId),h(),M("routerLink","/artist/"+r.artistId+"/song/"+n.id),h(),ne(" ",n.name," "),h(),W(r.artist.yearOfSong(n)?5:-1)}}function dS(e,t){if(e&1&&(y(0,"div",0)(1,"h3",1),A(2,"\u041A\u043B\u0438\u043F\u044B"),v(),pe(3,cS,6,4,"div",2,lS),v()),e&2){let n=T();h(3),he(n.songs)}}var Wg=(()=>{let t=class t{constructor(r,i,o){this.route=r,this.titleService=i,this.artistService=o,this.artists=Me,this.artistName="",this.artistId=null,this.songs=[],this.route.params.subscribe(({artist:s})=>{this.artistService.setArtist(s)}),this.artistId=this.route.snapshot.paramMap.get("artist"),this.artistId&&(this.artist=this.artists[this.artistId],this.artistName=this.artist.artist.name,this.songs=this.artist.getAllVideos().sort(this.artist.sortByYears.bind(this.artist)))}ngOnInit(){this.titleService.setTitle(`${this.artistName} | \u041A\u043B\u0438\u043F\u044B`)}stateChange(r){console.log(r)}};t.\u0275fac=function(i){return new(i||t)(D(oe),D(De),D(le))},t.\u0275cmp=q({type:t,selectors:[["app-video-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"video-page","rows"],[1,"col"],[1,"video-page__item","col"],[1,"video-page__player"],["placeholderImageQuality","low",3,"stateChange","videoId"],[1,"video-page__title",3,"routerLink"],[1,"video-page__year"]],template:function(i,o){i&1&&U(0,dS,5,0,"div",0),i&2&&W(o.artistName?0:-1)},dependencies:[Ie,Zo],styles:[".video-page[_ngcontent-%COMP%]{margin-bottom:40px}.video-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:98%}.video-page__item[_ngcontent-%COMP%]{width:48%;padding-bottom:28px;text-decoration:none;transition:background-color .3s ease;aspect-ratio:16/9}@media screen and (max-width: 992px){.video-page__item[_ngcontent-%COMP%]{width:98%}}.video-page__title[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-decoration:none;text-transform:uppercase;transition:color .3s ease;margin-top:14px}.video-page__year[_ngcontent-%COMP%]{display:block;font-weight:500;line-height:1.5;font-size:16px;color:#696c6f}"]});let e=t;return e})();var Gg=[{path:"",component:Pg},{path:"artist/:artist",component:Fg},{path:"artist/:artist/video",component:Wg},{path:"artist/:artist/songs",component:Ug},{path:"artist/:artist/songs/other",component:zg},{path:"artist/:artist/song/:song",component:Hg},{path:"artist/:artist/album/:album",component:Lg},{path:"**",redirectTo:""}];var Yg={providers:[Cm({eventCoalescing:!0}),xg(Gg)]};var fS=()=>({exact:!0});function pS(e,t){if(e&1&&(y(0,"li",4)(1,"a",1),A(2,"\u0424\u043E\u0442\u043E"),v()()),e&2){let n=T(2);M("routerLinkActive","active"),h(),M("routerLink","/artist/"+n.artistId+"/images")}}function hS(e,t){if(e&1&&(y(0,"h2")(1,"a",1),A(2),v()(),y(3,"ul",2)(4,"li",3)(5,"a",1),A(6,"\u0414\u0438\u0441\u043A\u043E\u0433\u0440\u0430\u0444\u0438\u044F"),v()(),U(7,pS,3,2,"li",4),y(8,"li",4)(9,"a",1),A(10,"\u0422\u0435\u043A\u0441\u0442\u044B \u043F\u0435\u0441\u0435\u043D"),v()(),y(11,"li",4)(12,"a",1),A(13,"\u041A\u043B\u0438\u043F\u044B"),v()()()),e&2){let n=T();h(),M("routerLink","/artist/"+n.artistId),h(),ne(" ",n.artistName," "),h(2),M("routerLinkActive","active")("routerLinkActiveOptions",ym(10,fS)),h(),M("routerLink","/artist/"+n.artistId),h(2),W(n.isImages?7:-1),h(),M("routerLinkActive","active"),h(),M("routerLink","/artist/"+n.artistId+"/songs"),h(2),M("routerLinkActive","active"),h(),M("routerLink","/artist/"+n.artistId+"/video")}}var qg=(()=>{let t=class t{constructor(r){this.artistService=r,this.artistId="",this.artistName="",this.isImages=!1,this.artistService.artist$.subscribe(i=>{this.artistId=i;let o=Me[i];if(o){let{artist:s}=o;this.artistName=s.name,s.images?.length&&(this.isImages=!0)}else this.artistName=""})}};t.\u0275fac=function(i){return new(i||t)(D(le))},t.\u0275cmp=q({type:t,selectors:[["app-header"]],standalone:!0,features:[Z],decls:2,vars:1,consts:[[1,"header"],[3,"routerLink"],[1,"header__menu"],[3,"routerLinkActive","routerLinkActiveOptions"],[3,"routerLinkActive"]],template:function(i,o){i&1&&(y(0,"header",0),U(1,hS,14,11),v()),i&2&&(h(),W(o.artistId?1:-1))},dependencies:[Ie,_g],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;column-gap:20px;background-color:#32323280;padding:10px 20px;margin-bottom:20px}@media screen and (max-width: 768px){.header[_ngcontent-%COMP%]{flex-direction:column;row-gap:20px}}@media screen and (max-width: 480px){.header[_ngcontent-%COMP%]{text-align:center}}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.header__menu[_ngcontent-%COMP%]{display:flex;column-gap:10px;justify-content:center;list-style-type:none;padding-left:0;margin:0;text-transform:uppercase;font-weight:500}@media screen and (max-width: 480px){.header__menu[_ngcontent-%COMP%]{flex-wrap:wrap}}.header__menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:var(--hover-text)}.header__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]});let e=t;return e})();var Zg=(()=>{let t=class t{constructor(r){this.artistService=r,this.artistService.artist$.subscribe(this.faviconChange)}faviconChange(r){let i=document.querySelector('[rel="icon"]'),o=r.length&&r==="master"?"artist/master/favicon.ico":"favicon.ico";i.href!==o&&(i.href=o)}};t.\u0275fac=function(i){return new(i||t)(D(le))},t.\u0275cmp=q({type:t,selectors:[["app-root"]],standalone:!0,features:[Z],decls:3,vars:0,consts:[[1,"wrapper"]],template:function(i,o){i&1&&(Q(0,"app-header"),y(1,"div",0),Q(2,"router-outlet"),v())},dependencies:[ru,qg],encapsulation:2});let e=t;return e})();zm(Zg,Yg).catch(console.error);
