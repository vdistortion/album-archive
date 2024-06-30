var Og=Object.defineProperty,Pg=Object.defineProperties;var Fg=Object.getOwnPropertyDescriptors;var Md=Object.getOwnPropertySymbols;var Lg=Object.prototype.hasOwnProperty,jg=Object.prototype.propertyIsEnumerable;var Td=(e,t,n)=>t in e?Og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||={})Lg.call(t,n)&&Td(e,n,t[n]);if(Md)for(var n of Md(t))jg.call(t,n)&&Td(e,n,t[n]);return e},Z=(e,t)=>Pg(e,Fg(t));var Fi=null;var Pi=1,Ad=Symbol("SIGNAL");function N(e){let t=Fi;return Fi=e,t}function kd(){return Fi}var Li={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Vg(e){if(!(Hi(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Pi)){if(!e.producerMustRecompute(e)&&!Vi(e)){e.dirty=!1,e.lastCleanEpoch=Pi;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Pi}}function ji(e){return e&&(e.nextProducerIndex=0),N(e)}function Nd(e,t){if(N(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Hi(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)$i(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Vi(e){Ui(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(Vg(n),r!==n.version))return!0}return!1}function Bi(e){if(Ui(e),Hi(e))for(let t=0;t<e.producerNode.length;t++)$i(e.producerNode[t],e.producerIndexOfThis[t]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function $i(e,t){if(Bg(e),e.liveConsumerNode.length===1&&$g(e))for(let r=0;r<e.producerNode.length;r++)$i(e.producerNode[r],e.producerIndexOfThis[r]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];Ui(o),o.producerIndexOfThis[r]=t}}function Hi(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function Ui(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function Bg(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function $g(e){return e.producerNode!==void 0}function Hg(){throw new Error}var Ug=Hg;function Rd(e){Ug=e}function C(e){return typeof e=="function"}function Xt(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Gr=Xt(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function zn(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var ee=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(C(r))try{r()}catch(i){t=i instanceof Gr?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Od(i)}catch(s){t=t??[],s instanceof Gr?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Gr(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Od(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&zn(n,t)}remove(t){let{_finalizers:n}=this;n&&zn(n,t),t instanceof e&&t._removeParent(this)}};ee.EMPTY=(()=>{let e=new ee;return e.closed=!0,e})();var zi=ee.EMPTY;function Yr(e){return e instanceof ee||e&&"closed"in e&&C(e.remove)&&C(e.add)&&C(e.unsubscribe)}function Od(e){C(e)?e():e.unsubscribe()}var Ve={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var en={setTimeout(e,t,...n){let{delegate:r}=en;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=en;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function qr(e){en.setTimeout(()=>{let{onUnhandledError:t}=Ve;if(t)t(e);else throw e})}function Wn(){}var Pd=Wi("C",void 0,void 0);function Fd(e){return Wi("E",void 0,e)}function Ld(e){return Wi("N",e,void 0)}function Wi(e,t,n){return{kind:e,value:t,error:n}}var Tt=null;function tn(e){if(Ve.useDeprecatedSynchronousErrorHandling){let t=!Tt;if(t&&(Tt={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=Tt;if(Tt=null,n)throw r}}else e()}function jd(e){Ve.useDeprecatedSynchronousErrorHandling&&Tt&&(Tt.errorThrown=!0,Tt.error=e)}var At=class extends ee{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Yr(t)&&t.add(this)):this.destination=Gg}static create(t,n,r){return new nn(t,n,r)}next(t){this.isStopped?Yi(Ld(t),this):this._next(t)}error(t){this.isStopped?Yi(Fd(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Yi(Pd,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},zg=Function.prototype.bind;function Gi(e,t){return zg.call(e,t)}var qi=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Zr(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Zr(r)}else Zr(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Zr(n)}}},nn=class extends At{constructor(t,n,r){super();let o;if(C(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Ve.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Gi(t.next,i),error:t.error&&Gi(t.error,i),complete:t.complete&&Gi(t.complete,i)}):o=t}this.destination=new qi(o)}};function Zr(e){Ve.useDeprecatedSynchronousErrorHandling?jd(e):qr(e)}function Wg(e){throw e}function Yi(e,t){let{onStoppedNotification:n}=Ve;n&&en.setTimeout(()=>n(e,t))}var Gg={closed:!0,next:Wn,error:Wg,complete:Wn};var rn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ee(e){return e}function Zi(...e){return Qi(e)}function Qi(e){return e.length===0?Ee:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var B=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=qg(n)?n:new nn(n,r,o);return tn(()=>{let{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Vd(r),new r((o,i)=>{let s=new nn({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[rn](){return this}pipe(...n){return Qi(n)(this)}toPromise(n){return n=Vd(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Vd(e){var t;return(t=e??Ve.Promise)!==null&&t!==void 0?t:Promise}function Yg(e){return e&&C(e.next)&&C(e.error)&&C(e.complete)}function qg(e){return e&&e instanceof At||Yg(e)&&Yr(e)}function Ki(e){return C(e?.lift)}function L(e){return t=>{if(Ki(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function j(e,t,n,r,o){return new Ji(e,t,n,r,o)}var Ji=class extends At{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function on(){return L((e,t)=>{let n=null;e._refCount++;let r=j(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var sn=class extends B{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Ki(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ee;let n=this.getSubject();t.add(this.source.subscribe(j(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ee.EMPTY)}return t}refCount(){return on()(this)}};var Bd=Xt(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ae=(()=>{class e extends B{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new Qr(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Bd}next(n){tn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){tn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){tn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?zi:(this.currentObservers=null,i.push(n),new ee(()=>{this.currentObservers=null,zn(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new B;return n.source=this,n}}return e.create=(t,n)=>new Qr(t,n),e})(),Qr=class extends ae{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:zi}};var re=class extends ae{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var xe=new B(e=>e.complete());function $d(e){return e&&C(e.schedule)}function Hd(e){return e[e.length-1]}function Ud(e){return C(Hd(e))?e.pop():void 0}function pt(e){return $d(Hd(e))?e.pop():void 0}function Wd(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):o(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function zd(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function kt(e){return this instanceof kt?(this.v=e,this):new kt(e)}function Gd(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o={},a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(g){return Promise.resolve(g).then(f,d)}}function a(f,g){r[f]&&(o[f]=function(b){return new Promise(function(V,$){i.push([f,b,V,$])>1||l(f,b)})},g&&(o[f]=g(o[f])))}function l(f,g){try{u(r[f](g))}catch(b){h(i[0][3],b)}}function u(f){f.value instanceof kt?Promise.resolve(f.value.v).then(c,d):h(i[0][2],f)}function c(f){l("next",f)}function d(f){l("throw",f)}function h(f,g){f(g),i.shift(),i.length&&l(i[0][0],i[0][1])}}function Yd(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof zd=="function"?zd(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){s=e[i](s),o(a,l,s.done,s.value)})}}function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}}var Kr=e=>e&&typeof e.length=="number"&&typeof e!="function";function Jr(e){return C(e?.then)}function Xr(e){return C(e[rn])}function eo(e){return Symbol.asyncIterator&&C(e?.[Symbol.asyncIterator])}function to(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Zg(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var no=Zg();function ro(e){return C(e?.[no])}function oo(e){return Gd(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield kt(n.read());if(o)return yield kt(void 0);yield yield kt(r)}}finally{n.releaseLock()}})}function io(e){return C(e?.getReader)}function le(e){if(e instanceof B)return e;if(e!=null){if(Xr(e))return Qg(e);if(Kr(e))return Kg(e);if(Jr(e))return Jg(e);if(eo(e))return qd(e);if(ro(e))return Xg(e);if(io(e))return ey(e)}throw to(e)}function Qg(e){return new B(t=>{let n=e[rn]();if(C(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Kg(e){return new B(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Jg(e){return new B(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,qr)})}function Xg(e){return new B(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function qd(e){return new B(t=>{ty(e,t).catch(n=>t.error(n))})}function ey(e){return qd(oo(e))}function ty(e,t){var n,r,o,i;return Wd(this,void 0,void 0,function*(){try{for(n=Yd(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function be(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function so(e,t=0){return L((n,r)=>{n.subscribe(j(r,o=>be(r,e,()=>r.next(o),t),()=>be(r,e,()=>r.complete(),t),o=>be(r,e,()=>r.error(o),t)))})}function ao(e,t=0){return L((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function Zd(e,t){return le(e).pipe(ao(t),so(t))}function Qd(e,t){return le(e).pipe(ao(t),so(t))}function Kd(e,t){return new B(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Jd(e,t){return new B(n=>{let r;return be(n,t,()=>{r=e[no](),be(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>C(r?.return)&&r.return()})}function lo(e,t){if(!e)throw new Error("Iterable cannot be null");return new B(n=>{be(n,t,()=>{let r=e[Symbol.asyncIterator]();be(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Xd(e,t){return lo(oo(e),t)}function ef(e,t){if(e!=null){if(Xr(e))return Zd(e,t);if(Kr(e))return Kd(e,t);if(Jr(e))return Qd(e,t);if(eo(e))return lo(e,t);if(ro(e))return Jd(e,t);if(io(e))return Xd(e,t)}throw to(e)}function oe(e,t){return t?ef(e,t):le(e)}function E(...e){let t=pt(e);return oe(e,t)}function an(e,t){let n=C(e)?e:()=>e,r=o=>o.error(n());return new B(t?o=>t.schedule(r,0,o):r)}function Xi(e){return!!e&&(e instanceof B||C(e.lift)&&C(e.subscribe))}var ot=Xt(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function R(e,t){return L((n,r)=>{let o=0;n.subscribe(j(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:ny}=Array;function ry(e,t){return ny(t)?e(...t):e(t)}function uo(e){return R(t=>ry(e,t))}var{isArray:oy}=Array,{getPrototypeOf:iy,prototype:sy,keys:ay}=Object;function tf(e){if(e.length===1){let t=e[0];if(oy(t))return{args:t,keys:null};if(ly(t)){let n=ay(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function ly(e){return e&&typeof e=="object"&&iy(e)===sy}function nf(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function co(...e){let t=pt(e),n=Ud(e),{args:r,keys:o}=tf(e);if(r.length===0)return oe([],t);let i=new B(uy(r,t,o?s=>nf(o,s):Ee));return n?i.pipe(uo(n)):i}function uy(e,t,n=Ee){return r=>{rf(t,()=>{let{length:o}=e,i=new Array(o),s=o,a=o;for(let l=0;l<o;l++)rf(t,()=>{let u=oe(e[l],t),c=!1;u.subscribe(j(r,d=>{i[l]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function rf(e,t,n){e?be(n,e,t):t()}function of(e,t,n,r,o,i,s,a){let l=[],u=0,c=0,d=!1,h=()=>{d&&!l.length&&!u&&t.complete()},f=b=>u<r?g(b):l.push(b),g=b=>{i&&t.next(b),u++;let V=!1;le(n(b,c++)).subscribe(j(t,$=>{o?.($),i?f($):t.next($)},()=>{V=!0},void 0,()=>{if(V)try{for(u--;l.length&&u<r;){let $=l.shift();s?be(t,s,()=>g($)):g($)}h()}catch($){t.error($)}}))};return e.subscribe(j(t,f,()=>{d=!0,h()})),()=>{a?.()}}function ie(e,t,n=1/0){return C(t)?ie((r,o)=>R((i,s)=>t(r,i,o,s))(le(e(r,o))),n):(typeof t=="number"&&(n=t),L((r,o)=>of(r,o,e,n)))}function es(e=1/0){return ie(Ee,e)}function sf(){return es(1)}function ln(...e){return sf()(oe(e,pt(e)))}function fo(e){return new B(t=>{le(e()).subscribe(t)})}function ho(e,t,n){return n?ho(e,t).pipe(uo(n)):new B(r=>{let o=(...s)=>r.next(s.length===1?s[0]:s),i=e(o);return C(t)?()=>t(o,i):void 0})}function Be(e,t){return L((n,r)=>{let o=0;n.subscribe(j(r,i=>e.call(t,i,o++)&&r.next(i)))})}function mt(e){return L((t,n)=>{let r=null,o=!1,i;r=t.subscribe(j(n,void 0,void 0,s=>{i=le(e(s,mt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function af(e,t,n,r,o){return(i,s)=>{let a=n,l=t,u=0;i.subscribe(j(s,c=>{let d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function un(e,t){return C(t)?ie(e,t,1):ie(e,1)}function gt(e){return L((t,n)=>{let r=!1;t.subscribe(j(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function it(e){return e<=0?()=>xe:L((t,n)=>{let r=0;t.subscribe(j(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function ts(e){return R(()=>e)}function po(e=cy){return L((t,n)=>{let r=!1;t.subscribe(j(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function cy(){return new ot}function Gn(e){return L((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Ye(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Be((o,i)=>e(o,i,r)):Ee,it(1),n?gt(t):po(()=>new ot))}function cn(e){return e<=0?()=>xe:L((t,n)=>{let r=[];t.subscribe(j(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function ns(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Be((o,i)=>e(o,i,r)):Ee,cn(1),n?gt(t):po(()=>new ot))}function rs(e,t){return L(af(e,t,arguments.length>=2,!0))}function os(...e){let t=pt(e);return L((n,r)=>{(t?ln(e,n,t):ln(e,n)).subscribe(r)})}function _e(e,t){return L((n,r)=>{let o=null,i=0,s=!1,a=()=>s&&!o&&r.complete();n.subscribe(j(r,l=>{o?.unsubscribe();let u=0,c=i++;le(e(l,c)).subscribe(o=j(r,d=>r.next(t?t(l,d,c,u++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Yn(e){return L((t,n)=>{le(e).subscribe(j(n,()=>n.complete(),Wn)),!n.closed&&t.subscribe(n)})}function ce(e,t,n){let r=C(e)||t||n?{next:e,error:t,complete:n}:e;return r?L((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;o.subscribe(j(i,l=>{var u;(u=r.next)===null||u===void 0||u.call(r,l),i.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},l=>{var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),i.error(l)},()=>{var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):Ee}var Gf="https://g.co/ng/security#xss",I=class extends Error{constructor(t,n){super(ca(t,n)),this.code=t}};function ca(e,t){return`${`NG0${Math.abs(e)}`}${t?": "+t:""}`}function da(e){return{toString:e}.toString()}var Zn=globalThis;function z(e){for(let t in e)if(e[t]===z)return t;throw Error("Could not find renamed property on target object.")}function De(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(De).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let t=e.toString();if(t==null)return""+t;let n=t.indexOf(`
`);return n===-1?t:t.substring(0,n)}function lf(e,t){return e==null||e===""?t===null?"":t:t==null||t===""?e:e+" "+t}var dy=z({__forward_ref__:z});function Yf(e){return e.__forward_ref__=Yf,e.toString=function(){return De(this())},e}function ke(e){return qf(e)?e():e}function qf(e){return typeof e=="function"&&e.hasOwnProperty(dy)&&e.__forward_ref__===Yf}function _(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Ho(e){return uf(e,Qf)||uf(e,Kf)}function Zf(e){return Ho(e)!==null}function uf(e,t){return e.hasOwnProperty(t)?e[t]:null}function fy(e){let t=e&&(e[Qf]||e[Kf]);return t||null}function cf(e){return e&&(e.hasOwnProperty(df)||e.hasOwnProperty(hy))?e[df]:null}var Qf=z({\u0275prov:z}),df=z({\u0275inj:z}),Kf=z({ngInjectableDef:z}),hy=z({ngInjectorDef:z}),S=class{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=_({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Jf(e){return e&&!!e.\u0275providers}var py=z({\u0275cmp:z}),my=z({\u0275dir:z}),gy=z({\u0275pipe:z}),yy=z({\u0275mod:z}),Co=z({\u0275fac:z}),qn=z({__NG_ELEMENT_ID__:z}),ff=z({__NG_ENV_ID__:z});function gn(e){return typeof e=="string"?e:e==null?"":String(e)}function vy(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():gn(e)}function wy(e,t){let n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new I(-200,e)}function fa(e,t){throw new I(-201,!1)}var T=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(T||{}),vs;function Xf(){return vs}function Ae(e){let t=vs;return vs=e,t}function eh(e,t,n){let r=Ho(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&T.Optional)return null;if(t!==void 0)return t;fa(e,"Injector")}var by={},Qn=by,Dy="__NG_DI_FLAG__",Eo="ngTempTokenPath",Iy="ngTokenPath",Cy=/\n/gm,Ey="\u0275",hf="__source",pn;function xy(){return pn}function yt(e){let t=pn;return pn=e,t}function _y(e,t=T.Default){if(pn===void 0)throw new I(-203,!1);return pn===null?eh(e,void 0,t):pn.get(e,t&T.Optional?null:void 0,t)}function O(e,t=T.Default){return(Xf()||_y)(ke(e),t)}function m(e,t=T.Default){return O(e,Uo(t))}function Uo(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function ws(e){let t=[];for(let n=0;n<e.length;n++){let r=ke(e[n]);if(Array.isArray(r)){if(r.length===0)throw new I(900,!1);let o,i=T.Default;for(let s=0;s<r.length;s++){let a=r[s],l=Sy(a);typeof l=="number"?l===-1?o=a.token:i|=l:o=a}t.push(O(o,i))}else t.push(O(r))}return t}function Sy(e){return e[Dy]}function My(e,t,n,r){let o=e[Eo];throw t[hf]&&o.unshift(t[hf]),e.message=Ty(`
`+e.message,o,n,r),e[Iy]=o,e[Eo]=null,e}function Ty(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==Ey?e.slice(2):e;let o=De(t);if(Array.isArray(t))o=t.map(De).join(" -> ");else if(typeof t=="object"){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+(typeof a=="string"?JSON.stringify(a):De(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Cy,`
  `)}`}function yn(e,t){let n=e.hasOwnProperty(Co);return n?e[Co]:null}function Ay(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}function ky(e){return e.flat(Number.POSITIVE_INFINITY)}function ha(e,t){e.forEach(n=>Array.isArray(n)?ha(n,t):t(n))}function th(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function xo(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Ny(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(o===1)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;){let i=o-2;e[o]=e[i],o--}e[t]=n,e[t+1]=r}}function Ry(e,t,n){let r=dr(e,t);return r>=0?e[r|1]=n:(r=~r,Ny(e,r,t,n)),r}function is(e,t){let n=dr(e,t);if(n>=0)return e[n|1]}function dr(e,t){return Oy(e,t,1)}function Oy(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){let i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}var Kn={},Ot=[],vn=new S(""),nh=new S("",-1),rh=new S(""),_o=class{get(t,n=Qn){if(n===Qn){let r=new Error(`NullInjectorError: No provider for ${De(t)}!`);throw r.name="NullInjectorError",r}return n}},oh=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(oh||{}),Qe=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(Qe||{}),wn=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(wn||{});function Py(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}function bs(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{let i=o,s=n[++r];Fy(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function ih(e){return e===3||e===4||e===6}function Fy(e){return e.charCodeAt(0)===64}function pa(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?pf(e,n,o,null,t[++r]):pf(e,n,o,null,null))}}return e}function pf(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let a=e[i++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=i-1;break}}}for(;i<e.length;){let a=e[i];if(typeof a=="number")break;if(a===n){if(r===null){o!==null&&(e[i+1]=o);return}else if(r===e[i+1]){e[i+2]=o;return}}i++,r!==null&&i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),r!==null&&e.splice(i++,0,r),o!==null&&e.splice(i++,0,o)}var sh="ng-template";function Ly(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&Py(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(ma(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function ma(e){return e.type===4&&e.value!==sh}function jy(e,t,n){let r=e.type===4&&!n?sh:e.value;return t===r}function Vy(e,t,n){let r=4,o=e.attrs,i=o!==null?Hy(o):0,s=!1;for(let a=0;a<t.length;a++){let l=t[a];if(typeof l=="number"){if(!s&&!$e(r)&&!$e(l))return!1;if(s&&$e(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!jy(e,l,n)||l===""&&t.length===1){if($e(r))return!1;s=!0}}else if(r&8){if(o===null||!Ly(e,o,l,n)){if($e(r))return!1;s=!0}}else{let u=t[++a],c=By(l,o,ma(e),n);if(c===-1){if($e(r))return!1;s=!0;continue}if(u!==""){let d;if(c>i?d="":d=o[c+1].toLowerCase(),r&2&&u!==d){if($e(r))return!1;s=!0}}}}return $e(r)||s}function $e(e){return(e&1)===0}function By(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=t[++o];for(;typeof a=="string";)a=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return Uy(t,e)}function $y(e,t,n=!1){for(let r=0;r<t.length;r++)if(Vy(e,t[r],n))return!0;return!1}function Hy(e){for(let t=0;t<e.length;t++){let n=e[t];if(ih(n))return t}return e.length}function Uy(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function mf(e,t){return e?":not("+t.trim()+")":t}function zy(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!$e(s)&&(t+=mf(i,o),o=""),r=s,i=i||!$e(r);n++}return o!==""&&(t+=mf(i,o)),t}function Wy(e){return e.map(zy).join(",")}function Gy(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!$e(o))break;o=i}r++}return{attrs:t,classes:n}}function G(e){return da(()=>{let t=dh(e),n=Z(w({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===oh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Qe.Emulated,styles:e.styles||Ot,_:null,schemas:e.schemas||null,tView:null,id:""});fh(n);let r=e.dependencies;return n.directiveDefs=yf(r,!1),n.pipeDefs=yf(r,!0),n.id=Zy(n),n})}function Yy(e){return Pt(e)||ah(e)}function qy(e){return e!==null}function gf(e,t){if(e==null)return Kn;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,a=wn.None;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i):(i=o,s=o),t?(n[i]=a!==wn.None?[r,a]:r,t[i]=s):n[i]=r}return n}function zo(e){return da(()=>{let t=dh(e);return fh(t),t})}function Pt(e){return e[py]||null}function ah(e){return e[my]||null}function lh(e){return e[gy]||null}function uh(e){let t=Pt(e)||ah(e)||lh(e);return t!==null?t.standalone:!1}function ch(e,t){let n=e[yy]||null;if(!n&&t===!0)throw new Error(`Type ${De(e)} does not have '\u0275mod' property.`);return n}function dh(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputTransforms:null,inputConfig:e.inputs||Kn,exportAs:e.exportAs||null,standalone:e.standalone===!0,signals:e.signals===!0,selectors:e.selectors||Ot,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:gf(e.inputs,t),outputs:gf(e.outputs),debugInfo:null}}function fh(e){e.features?.forEach(t=>t(e))}function yf(e,t){if(!e)return null;let n=t?lh:Yy;return()=>(typeof e=="function"?e():e).map(r=>n(r)).filter(qy)}function Zy(e){let t=0,n=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,e.consts,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery].join("|");for(let o of n)t=Math.imul(31,t)+o.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function Wo(e){return{\u0275providers:e}}function Qy(...e){return{\u0275providers:hh(!0,e),\u0275fromNgModule:!0}}function hh(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return ha(t,s=>{let a=s;Ds(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&ph(o,i),n}function ph(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];ga(o,i=>{t(i,r)})}}function Ds(e,t,n,r){if(e=ke(e),!e)return!1;let o=null,i=cf(e),s=!i&&Pt(e);if(!i&&!s){let l=e.ngModule;if(i=cf(l),i)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=e}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let u of l)Ds(u,t,n,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let u;try{ha(i.imports,c=>{Ds(c,t,n,r)&&(u||=[],u.push(c))})}finally{}u!==void 0&&ph(u,t)}if(!a){let u=yn(o)||(()=>new o);t({provide:o,useFactory:u,deps:Ot},o),t({provide:rh,useValue:o,multi:!0},o),t({provide:vn,useValue:()=>O(o),multi:!0},o)}let l=i.providers;if(l!=null&&!a){let u=e;ga(l,c=>{t(c,u)})}}else return!1;return o!==e&&e.providers!==void 0}function ga(e,t){for(let n of e)Jf(n)&&(n=n.\u0275providers),Array.isArray(n)?ga(n,t):t(n)}var Ky=z({provide:String,useValue:z});function mh(e){return e!==null&&typeof e=="object"&&Ky in e}function Jy(e){return!!(e&&e.useExisting)}function Xy(e){return!!(e&&e.useFactory)}function Is(e){return typeof e=="function"}var Go=new S(""),yo={},ev={},ss;function ya(){return ss===void 0&&(ss=new _o),ss}var Re=class{},Jn=class extends Re{get destroyed(){return this._destroyed}constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Es(t,s=>this.processProvider(s)),this.records.set(nh,dn(void 0,this)),o.has("environment")&&this.records.set(Re,dn(void 0,this));let i=this.records.get(Go);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(rh,Ot,T.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let t=N(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),N(t)}}onDestroy(t){return this.assertNotDestroyed(),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){this.assertNotDestroyed();let n=yt(this),r=Ae(void 0),o;try{return t()}finally{yt(n),Ae(r)}}get(t,n=Qn,r=T.Default){if(this.assertNotDestroyed(),t.hasOwnProperty(ff))return t[ff](this);r=Uo(r);let o,i=yt(this),s=Ae(void 0);try{if(!(r&T.SkipSelf)){let l=this.records.get(t);if(l===void 0){let u=sv(t)&&Ho(t);u&&this.injectableDefInScope(u)?l=dn(Cs(t),yo):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l)}let a=r&T.Self?ya():this.parent;return n=r&T.Optional&&n===Qn?null:n,a.get(t,n)}catch(a){if(a.name==="NullInjectorError"){if((a[Eo]=a[Eo]||[]).unshift(De(t)),i)throw a;return My(a,t,"R3InjectorError",this.source)}else throw a}finally{Ae(s),yt(i)}}resolveInjectorInitializers(){let t=N(null),n=yt(this),r=Ae(void 0),o;try{let i=this.get(vn,Ot,T.Self);for(let s of i)s()}finally{yt(n),Ae(r),N(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(De(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new I(205,!1)}processProvider(t){t=ke(t);let n=Is(t)?t:ke(t&&t.provide),r=nv(t);if(!Is(t)&&t.multi===!0){let o=this.records.get(n);o||(o=dn(void 0,yo,!0),o.factory=()=>ws(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){let r=N(null);try{return n.value===yo&&(n.value=ev,n.value=n.factory()),typeof n.value=="object"&&n.value&&iv(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{N(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=ke(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function Cs(e){let t=Ho(e),n=t!==null?t.factory:yn(e);if(n!==null)return n;if(e instanceof S)throw new I(204,!1);if(e instanceof Function)return tv(e);throw new I(204,!1)}function tv(e){if(e.length>0)throw new I(204,!1);let n=fy(e);return n!==null?()=>n.factory(e):()=>new e}function nv(e){if(mh(e))return dn(void 0,e.useValue);{let t=rv(e);return dn(t,yo)}}function rv(e,t,n){let r;if(Is(e)){let o=ke(e);return yn(o)||Cs(o)}else if(mh(e))r=()=>ke(e.useValue);else if(Xy(e))r=()=>e.useFactory(...ws(e.deps||[]));else if(Jy(e))r=()=>O(ke(e.useExisting));else{let o=ke(e&&(e.useClass||e.provide));if(ov(e))r=()=>new o(...ws(e.deps));else return yn(o)||Cs(o)}return r}function dn(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function ov(e){return!!e.deps}function iv(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function sv(e){return typeof e=="function"||typeof e=="object"&&e instanceof S}function Es(e,t){for(let n of e)Array.isArray(n)?Es(n,t):n&&Jf(n)?Es(n.\u0275providers,t):t(n)}function ut(e,t){e instanceof Jn&&e.assertNotDestroyed();let n,r=yt(e),o=Ae(void 0);try{return t()}finally{yt(r),Ae(o)}}function av(){return Xf()!==void 0||xy()!=null}function lv(e){return typeof e=="function"}var ct=0,x=1,D=2,ve=3,He=4,We=5,Xn=6,So=7,ge=8,bn=9,Ke=10,de=11,er=12,vf=13,Sn=14,Ue=15,Ft=16,fn=17,st=18,Yo=19,gh=20,vt=21,as=22,Ne=23,ze=25,yh=1;var Lt=7,Mo=8,Dn=9,ye=10,To=function(e){return e[e.None=0]="None",e[e.HasTransplantedViews=2]="HasTransplantedViews",e}(To||{});function wt(e){return Array.isArray(e)&&typeof e[yh]=="object"}function dt(e){return Array.isArray(e)&&e[yh]===!0}function vh(e){return(e.flags&4)!==0}function qo(e){return e.componentOffset>-1}function va(e){return(e.flags&1)===1}function fr(e){return!!e.template}function xs(e){return(e[D]&512)!==0}var _s=class{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function wh(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}function zt(){return bh}function bh(e){return e.type.prototype.ngOnChanges&&(e.setInput=cv),uv}zt.ngInherit=!0;function uv(){let e=Ih(this),t=e?.current;if(t){let n=e.previous;if(n===Kn)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function cv(e,t,n,r,o){let i=this.declaredInputs[r],s=Ih(e)||dv(e,{previous:Kn,current:null}),a=s.current||(s.current={}),l=s.previous,u=l[i];a[i]=new _s(u&&u.currentValue,n,l===Kn),wh(e,t,o,n)}var Dh="__ngSimpleChanges__";function Ih(e){return e[Dh]||null}function dv(e,t){return e[Dh]=t}var wf=null;var qe=function(e,t,n){wf?.(e,t,n)},Ch="svg",fv="math";function Je(e){for(;Array.isArray(e);)e=e[ct];return e}function Eh(e,t){return Je(t[e])}function Oe(e,t){return Je(t[e.index])}function wa(e,t){return e.data[t]}function It(e,t){let n=t[e];return wt(n)?n:n[ct]}function hv(e){return(e[D]&4)===4}function ba(e){return(e[D]&128)===128}function pv(e){return dt(e[ve])}function In(e,t){return t==null?null:e[t]}function xh(e){e[fn]=0}function _h(e){e[D]&1024||(e[D]|=1024,ba(e)&&Zo(e))}function mv(e,t){for(;e>0;)t=t[Sn],e--;return t}function tr(e){return!!(e[D]&9216||e[Ne]?.dirty)}function Ss(e){e[Ke].changeDetectionScheduler?.notify(7),e[D]&64&&(e[D]|=1024),tr(e)&&Zo(e)}function Zo(e){e[Ke].changeDetectionScheduler?.notify(0);let t=jt(e);for(;t!==null&&!(t[D]&8192||(t[D]|=8192,!ba(t)));)t=jt(t)}function Sh(e,t){if((e[D]&256)===256)throw new I(911,!1);e[vt]===null&&(e[vt]=[]),e[vt].push(t)}function gv(e,t){if(e[vt]===null)return;let n=e[vt].indexOf(t);n!==-1&&e[vt].splice(n,1)}function jt(e){let t=e[ve];return dt(t)?t[ve]:t}var A={lFrame:Lh(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Mh=!1;function yv(){return A.lFrame.elementDepthCount}function vv(){A.lFrame.elementDepthCount++}function wv(){A.lFrame.elementDepthCount--}function Th(){return A.bindingsEnabled}function bv(){return A.skipHydrationRootTNode!==null}function Dv(e){return A.skipHydrationRootTNode===e}function Iv(){A.skipHydrationRootTNode=null}function H(){return A.lFrame.lView}function Pe(){return A.lFrame.tView}function Qo(e){return A.lFrame.contextLView=e,e[ge]}function Ko(e){return A.lFrame.contextLView=null,e}function Se(){let e=Ah();for(;e!==null&&e.type===64;)e=e.parent;return e}function Ah(){return A.lFrame.currentTNode}function Cv(){let e=A.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function hr(e,t){let n=A.lFrame;n.currentTNode=e,n.isParent=t}function kh(){return A.lFrame.isParent}function Ev(){A.lFrame.isParent=!1}function Nh(){return Mh}function bf(e){Mh=e}function xv(){return A.lFrame.bindingIndex}function _v(e){return A.lFrame.bindingIndex=e}function pr(){return A.lFrame.bindingIndex++}function Rh(e){let t=A.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function Sv(){return A.lFrame.inI18n}function Mv(e,t){let n=A.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ms(t)}function Tv(){return A.lFrame.currentDirectiveIndex}function Ms(e){A.lFrame.currentDirectiveIndex=e}function Av(e){let t=A.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function Oh(){return A.lFrame.currentQueryIndex}function Da(e){A.lFrame.currentQueryIndex=e}function kv(e){let t=e[x];return t.type===2?t.declTNode:t.type===1?e[We]:null}function Ph(e,t,n){if(n&T.SkipSelf){let o=t,i=e;for(;o=o.parent,o===null&&!(n&T.Host);)if(o=kv(i),o===null||(i=i[Sn],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=A.lFrame=Fh();return r.currentTNode=t,r.lView=e,!0}function Ia(e){let t=Fh(),n=e[x];A.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Fh(){let e=A.lFrame,t=e===null?null:e.child;return t===null?Lh(e):t}function Lh(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function jh(){let e=A.lFrame;return A.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Vh=jh;function Ca(){let e=jh();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Nv(e){return(A.lFrame.contextLView=mv(e,A.lFrame.contextLView))[ge]}function Ct(){return A.lFrame.selectedIndex}function Vt(e){A.lFrame.selectedIndex=e}function Bh(){let e=A.lFrame;return wa(e.tView,e.selectedIndex)}function $h(){A.lFrame.currentNamespace=Ch}function Rv(){return A.lFrame.currentNamespace}var Hh=!0;function Ea(){return Hh}function xa(e){Hh=e}function Ov(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=bh(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function _a(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=i;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),l&&(e.viewHooks??=[]).push(-n,l),u&&((e.viewHooks??=[]).push(n,u),(e.viewCheckHooks??=[]).push(n,u)),c!=null&&(e.destroyHooks??=[]).push(n,c)}}function vo(e,t,n){Uh(e,t,3,n)}function wo(e,t,n,r){(e[D]&3)===n&&Uh(e,t,n,r)}function ls(e,t){let n=e[D];(n&3)===t&&(n&=16383,n+=1,e[D]=n)}function Uh(e,t,n,r){let o=r!==void 0?e[fn]&65535:0,i=r??-1,s=t.length-1,a=0;for(let l=o;l<s;l++)if(typeof t[l+1]=="number"){if(a=t[l],r!=null&&a>=r)break}else t[l]<0&&(e[fn]+=65536),(a<i||i==-1)&&(Pv(e,n,t,l),e[fn]=(e[fn]&4294901760)+l+2),l++}function Df(e,t){qe(4,e,t);let n=N(null);try{t.call(e)}finally{N(n),qe(5,e,t)}}function Pv(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],a=e[s];o?e[D]>>14<e[fn]>>16&&(e[D]&3)===t&&(e[D]+=16384,Df(a,i)):Df(a,i)}var mn=-1,nr=class{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}};function Fv(e){return e instanceof nr}function Lv(e){return(e.flags&8)!==0}function jv(e){return(e.flags&16)!==0}var us={},Ts=class{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=Uo(r);let o=this.injector.get(t,us,r);return o!==us||n===us?o:this.parentInjector.get(t,n,r)}};function zh(e){return e!==mn}function Ao(e){return e&32767}function Vv(e){return e>>16}function ko(e,t){let n=Vv(e),r=t;for(;n>0;)r=r[Sn],n--;return r}var As=!0;function If(e){let t=As;return As=e,t}var Bv=256,Wh=Bv-1,Gh=5,$v=0,Ze={};function Hv(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(qn)&&(r=n[qn]),r==null&&(r=n[qn]=$v++);let o=r&Wh,i=1<<o;t.data[e+(o>>Gh)]|=i}function Yh(e,t){let n=qh(e,t);if(n!==-1)return n;let r=t[x];r.firstCreatePass&&(e.injectorIndex=t.length,cs(r.data,e),cs(t,null),cs(r.blueprint,null));let o=Sa(e,t),i=e.injectorIndex;if(zh(o)){let s=Ao(o),a=ko(o,t),l=a[x].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function cs(e,t){e.push(0,0,0,0,0,0,0,0,t)}function qh(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function Sa(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=Xh(o),r===null)return mn;if(n++,o=o[Sn],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return mn}function Uv(e,t,n){Hv(e,t,n)}function zv(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let r=n.length,o=0;for(;o<r;){let i=n[o];if(ih(i))break;if(i===0)o=o+2;else if(typeof i=="number")for(o++;o<r&&typeof n[o]=="string";)o++;else{if(i===t)return n[o+1];o=o+2}}}return null}function Zh(e,t,n){if(n&T.Optional||e!==void 0)return e;fa(t,"NodeInjector")}function Qh(e,t,n,r){if(n&T.Optional&&r===void 0&&(r=null),!(n&(T.Self|T.Host))){let o=e[bn],i=Ae(void 0);try{return o?o.get(t,r,n&T.Optional):eh(t,r,n&T.Optional)}finally{Ae(i)}}return Zh(r,t,n)}function Kh(e,t,n,r=T.Default,o){if(e!==null){if(t[D]&2048&&!(r&T.Self)){let s=qv(e,t,n,r,Ze);if(s!==Ze)return s}let i=Jh(e,t,n,r,Ze);if(i!==Ze)return i}return Qh(t,n,r,o)}function Jh(e,t,n,r,o){let i=Gv(n);if(typeof i=="function"){if(!Ph(t,e,r))return r&T.Host?Zh(o,n,r):Qh(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&T.Optional))fa(n);else return s}finally{Vh()}}else if(typeof i=="number"){let s=null,a=qh(e,t),l=mn,u=r&T.Host?t[Ue][We]:null;for((a===-1||r&T.SkipSelf)&&(l=a===-1?Sa(e,t):t[a+8],l===mn||!Ef(r,!1)?a=-1:(s=t[x],a=Ao(l),t=ko(l,t)));a!==-1;){let c=t[x];if(Cf(i,a,c.data)){let d=Wv(a,t,n,s,r,u);if(d!==Ze)return d}l=t[a+8],l!==mn&&Ef(r,t[x].data[a+8]===u)&&Cf(i,a,t)?(s=c,a=Ao(l),t=ko(l,t)):a=-1}}return o}function Wv(e,t,n,r,o,i){let s=t[x],a=s.data[e+8],l=r==null?qo(a)&&As:r!=s&&(a.type&3)!==0,u=o&T.Host&&i===a,c=bo(a,s,n,l,u);return c!==null?Cn(t,s,c,a):Ze}function bo(e,t,n,r,o){let i=e.providerIndexes,s=t.data,a=i&1048575,l=e.directiveStart,u=e.directiveEnd,c=i>>20,d=r?a:a+c,h=o?a+c:u;for(let f=d;f<h;f++){let g=s[f];if(f<l&&n===g||f>=l&&g.type===n)return f}if(o){let f=s[l];if(f&&fr(f)&&f.type===n)return l}return null}function Cn(e,t,n,r){let o=e[n],i=t.data;if(Fv(o)){let s=o;s.resolving&&wy(vy(i[n]));let a=If(s.canSeeViewProviders);s.resolving=!0;let l,u=s.injectImpl?Ae(s.injectImpl):null,c=Ph(e,r,T.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&Ov(n,i[n],t)}finally{u!==null&&Ae(u),If(a),s.resolving=!1,Vh()}}return o}function Gv(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(qn)?e[qn]:void 0;return typeof t=="number"?t>=0?t&Wh:Yv:t}function Cf(e,t,n){let r=1<<e;return!!(n[t+(e>>Gh)]&r)}function Ef(e,t){return!(e&T.Self)&&!(e&T.Host&&t)}var Rt=class{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Kh(this._tNode,this._lView,t,Uo(r),n)}};function Yv(){return new Rt(Se(),H())}function Ma(e){return da(()=>{let t=e.prototype.constructor,n=t[Co]||ks(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[Co]||ks(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function ks(e){return qf(e)?()=>{let t=ks(ke(e));return t&&t()}:yn(e)}function qv(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[D]&2048&&!(s[D]&512);){let a=Jh(i,s,n,r|T.Self,Ze);if(a!==Ze)return a;let l=i.parent;if(!l){let u=s[gh];if(u){let c=u.get(n,Ze,r);if(c!==Ze)return c}l=Xh(s),s=s[Sn]}i=l}return o}function Xh(e){let t=e[x],n=t.type;return n===2?t.declTNode:n===1?e[We]:null}function Ta(e){return zv(Se(),e)}function xf(e,t=null,n=null,r){let o=ep(e,t,n,r);return o.resolveInjectorInitializers(),o}function ep(e,t=null,n=null,r,o=new Set){let i=[n||Ot,Qy(e)];return r=r||(typeof e=="object"?void 0:De(e)),new Jn(i,t||ya(),r||null,o)}var Nt=class Nt{static create(t,n){if(Array.isArray(t))return xf({name:""},n,t,"");{let r=t.name??"";return xf({name:r},t.parent,t.providers,r)}}};Nt.THROW_IF_NOT_FOUND=Qn,Nt.NULL=new _o,Nt.\u0275prov=_({token:Nt,providedIn:"any",factory:()=>O(nh)}),Nt.__NG_ELEMENT_ID__=-1;var Bt=Nt;var Zv=new S("");Zv.__NG_ELEMENT_ID__=e=>{let t=Se();if(t===null)throw new I(204,!1);if(t.type&2)return t.value;if(e&T.Optional)return null;throw new I(204,!1)};var Qv="ngOriginalError";function ds(e){return e[Qv]}var at=class{constructor(){this._console=console}handleError(t){let n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&ds(t);for(;n&&ds(n);)n=ds(n);return n||null}},tp=new S("",{providedIn:"root",factory:()=>m(at).handleError.bind(void 0)}),np=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=Kv,t.__NG_ENV_ID__=r=>r;let e=t;return e})(),Ns=class extends np{constructor(t){super(),this._lView=t}onDestroy(t){return Sh(this._lView,t),()=>gv(this._lView,t)}};function Kv(){return new Ns(H())}function Jv(){return Mn(Se(),H())}function Mn(e,t){return new Et(Oe(e,t))}var Et=(()=>{let t=class t{constructor(r){this.nativeElement=r}};t.__NG_ELEMENT_ID__=Jv;let e=t;return e})();function Xv(e){return e instanceof Et?e.nativeElement:e}var Tn=(()=>{let t=class t{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new re(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let r=this.taskId++;return this.pendingTasks.add(r),r}remove(r){this.pendingTasks.delete(r),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};t.\u0275prov=_({token:t,providedIn:"root",factory:()=>new t});let e=t;return e})();var Rs=class extends ae{constructor(t=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=t,av()&&(this.destroyRef=m(np,{optional:!0})??void 0,this.pendingTasks=m(Tn,{optional:!0})??void 0)}emit(t){let n=N(null);try{super.next(t)}finally{N(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:i,complete:s});return t instanceof ee&&t.add(a),a}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{t(n),r!==void 0&&this.pendingTasks?.remove(r)})}}},me=Rs;function ew(){return this._results[Symbol.iterator]()}var Os=class e{get changes(){return this._changes??=new me}constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let n=e.prototype;n[Symbol.iterator]||(n[Symbol.iterator]=ew)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){this.dirty=!1;let r=ky(t);(this._changesDetected=!Ay(this._results,r,n))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(t){this._onDirty=t}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function rp(e){return(e.flags&128)===128}var op=new Map,tw=0;function nw(){return tw++}function rw(e){op.set(e[Yo],e)}function ow(e){op.delete(e[Yo])}var _f="__ngContext__";function $t(e,t){wt(t)?(e[_f]=t[Yo],rw(t)):e[_f]=t}function ip(e){return ap(e[er])}function sp(e){return ap(e[He])}function ap(e){for(;e!==null&&!dt(e);)e=e[He];return e}var Ps;function lp(e){Ps=e}function iw(){if(Ps!==void 0)return Ps;if(typeof document<"u")return document;throw new I(210,!1)}var Aa=new S("",{providedIn:"root",factory:()=>sw}),sw="ng",ka=new S(""),xt=new S("",{providedIn:"platform",factory:()=>"unknown"});var mr=new S("",{providedIn:"root",factory:()=>iw().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var aw="h",lw="b";var uw=()=>null;function Na(e,t,n=!1){return uw(e,t,n)}var up=!1,cw=new S("",{providedIn:"root",factory:()=>up});var mo;function dw(){if(mo===void 0&&(mo=null,Zn.trustedTypes))try{mo=Zn.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return mo}function Sf(e){return dw()?.createScriptURL(e)||e}var No=class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Gf})`}};function gr(e){return e instanceof No?e.changingThisBreaksApplicationSecurity:e}function Ra(e,t){let n=fw(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${Gf})`)}return n===t}function fw(e){return e instanceof No&&e.getTypeName()||null}var hw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function cp(e){return e=String(e),e.match(hw)?e:"unsafe:"+e}var Jo=function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e}(Jo||{});function Xe(e){let t=fp();return t?t.sanitize(Jo.URL,e)||"":Ra(e,"URL")?gr(e):cp(gn(e))}function pw(e){let t=fp();if(t)return Sf(t.sanitize(Jo.RESOURCE_URL,e)||"");if(Ra(e,"ResourceURL"))return Sf(gr(e));throw new I(904,!1)}function mw(e,t){return t==="src"&&(e==="embed"||e==="frame"||e==="iframe"||e==="media"||e==="script")||t==="href"&&(e==="base"||e==="link")?pw:Xe}function dp(e,t,n){return mw(t,n)(e)}function fp(){let e=H();return e&&e[Ke].sanitizer}function hp(e){return e instanceof Function?e():e}var lt=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(lt||{}),gw;function Oa(e,t){return gw(e,t)}function hn(e,t,n,r,o){if(r!=null){let i,s=!1;dt(r)?i=r:wt(r)&&(s=!0,r=r[ct]);let a=Je(r);e===0&&n!==null?o==null?yp(t,n,a):Ro(t,n,a,o||null,!0):e===1&&n!==null?Ro(t,n,a,o||null,!0):e===2?Nw(t,a,s):e===3&&t.destroyNode(a),i!=null&&Ow(t,e,i,n,o)}}function yw(e,t){return e.createText(t)}function vw(e,t,n){e.setValue(t,n)}function pp(e,t,n){return e.createElement(t,n)}function ww(e,t){mp(e,t),t[ct]=null,t[We]=null}function bw(e,t,n,r,o,i){r[ct]=o,r[We]=t,ei(e,r,n,1,o,i)}function mp(e,t){t[Ke].changeDetectionScheduler?.notify(8),ei(e,t,t[de],2,null,null)}function Dw(e){let t=e[er];if(!t)return fs(e[x],e);for(;t;){let n=null;if(wt(t))n=t[er];else{let r=t[ye];r&&(n=r)}if(!n){for(;t&&!t[He]&&t!==e;)wt(t)&&fs(t[x],t),t=t[ve];t===null&&(t=e),wt(t)&&fs(t[x],t),n=t&&t[He]}t=n}}function Iw(e,t,n,r){let o=ye+r,i=n.length;r>0&&(n[o-1][He]=t),r<i-ye?(t[He]=n[o],th(n,ye+r,t)):(n.push(t),t[He]=null),t[ve]=n;let s=t[Ft];s!==null&&n!==s&&gp(s,t);let a=t[st];a!==null&&a.insertView(e),Ss(t),t[D]|=128}function gp(e,t){let n=e[Dn],r=t[ve];if(wt(r))e[D]|=To.HasTransplantedViews;else{let o=r[ve][Ue];t[Ue]!==o&&(e[D]|=To.HasTransplantedViews)}n===null?e[Dn]=[t]:n.push(t)}function Pa(e,t){let n=e[Dn],r=n.indexOf(t);n.splice(r,1)}function rr(e,t){if(e.length<=ye)return;let n=ye+t,r=e[n];if(r){let o=r[Ft];o!==null&&o!==e&&Pa(o,r),t>0&&(e[n-1][He]=r[He]);let i=xo(e,ye+t);ww(r[x],r);let s=i[st];s!==null&&s.detachView(i[x]),r[ve]=null,r[He]=null,r[D]&=-129}return r}function Xo(e,t){if(!(t[D]&256)){let n=t[de];n.destroyNode&&ei(e,t,n,3,null,null),Dw(t)}}function fs(e,t){if(t[D]&256)return;let n=N(null);try{t[D]&=-129,t[D]|=256,t[Ne]&&Bi(t[Ne]),Ew(e,t),Cw(e,t),t[x].type===1&&t[de].destroy();let r=t[Ft];if(r!==null&&dt(t[ve])){r!==t[ve]&&Pa(r,t);let o=t[st];o!==null&&o.detachView(e)}ow(t)}finally{N(n)}}function Cw(e,t){let n=e.cleanup,r=t[So];if(n!==null)for(let i=0;i<n.length-1;i+=2)if(typeof n[i]=="string"){let s=n[i+3];s>=0?r[s]():r[-s].unsubscribe(),i+=2}else{let s=r[n[i+1]];n[i].call(s)}r!==null&&(t[So]=null);let o=t[vt];if(o!==null){t[vt]=null;for(let i=0;i<o.length;i++){let s=o[i];s()}}}function Ew(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof nr)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],l=i[s+1];qe(4,a,l);try{l.call(a)}finally{qe(5,a,l)}}else{qe(4,o,i);try{i.call(o)}finally{qe(5,o,i)}}}}}function xw(e,t,n){return _w(e,t.parent,n)}function _w(e,t,n){let r=t;for(;r!==null&&r.type&40;)t=r,r=t.parent;if(r===null)return n[ct];{let{componentOffset:o}=r;if(o>-1){let{encapsulation:i}=e.data[r.directiveStart+o];if(i===Qe.None||i===Qe.Emulated)return null}return Oe(r,n)}}function Ro(e,t,n,r,o){e.insertBefore(t,n,r,o)}function yp(e,t,n){e.appendChild(t,n)}function Mf(e,t,n,r,o){r!==null?Ro(e,t,n,r,o):yp(e,t,n)}function Sw(e,t,n,r){e.removeChild(t,n,r)}function Fa(e,t){return e.parentNode(t)}function Mw(e,t){return e.nextSibling(t)}function Tw(e,t,n){return kw(e,t,n)}function Aw(e,t,n){return e.type&40?Oe(e,n):null}var kw=Aw,Tf;function La(e,t,n,r){let o=xw(e,r,t),i=t[de],s=r.parent||t[We],a=Tw(s,r,t);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)Mf(i,o,n[l],a,!1);else Mf(i,o,n,a,!1);Tf!==void 0&&Tf(i,r,t,n,o)}function Do(e,t){if(t!==null){let n=t.type;if(n&3)return Oe(t,e);if(n&4)return Fs(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return Do(e,r);{let o=e[t.index];return dt(o)?Fs(-1,o):Je(o)}}else{if(n&32)return Oa(t,e)()||Je(e[t.index]);{let r=vp(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=jt(e[Ue]);return Do(o,r)}else return Do(e,t.next)}}}return null}function vp(e,t){if(t!==null){let r=e[Ue][We],o=t.projection;return r.projection[o]}return null}function Fs(e,t){let n=ye+e+1;if(n<t.length){let r=t[n],o=r[x].firstChild;if(o!==null)return Do(r,o)}return t[Lt]}function Nw(e,t,n){let r=Fa(e,t);r&&Sw(e,r,t,n)}function ja(e,t,n,r,o,i,s){for(;n!=null;){let a=r[n.index],l=n.type;if(s&&t===0&&(a&&$t(Je(a),r),n.flags|=2),(n.flags&32)!==32)if(l&8)ja(e,t,n.child,r,o,i,!1),hn(t,e,o,a,i);else if(l&32){let u=Oa(n,r),c;for(;c=u();)hn(t,e,o,c,i);hn(t,e,o,a,i)}else l&16?Rw(e,t,r,n,o,i):hn(t,e,o,a,i);n=s?n.projectionNext:n.next}}function ei(e,t,n,r,o,i){ja(n,r,e.firstChild,t,o,i,!1)}function Rw(e,t,n,r,o,i){let s=n[Ue],l=s[We].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++){let c=l[u];hn(t,e,o,c,i)}else{let u=l,c=s[ve];rp(r)&&(u.flags|=128),ja(e,t,u,c,o,i,!0)}}function Ow(e,t,n,r,o){let i=n[Lt],s=Je(n);i!==s&&hn(t,e,r,i,o);for(let a=ye;a<n.length;a++){let l=n[a];ei(l[x],l,e,t,r,i)}}function Pw(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=r.indexOf("-")===-1?void 0:lt.DashCase;o==null?e.removeStyle(n,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=lt.Important),e.setStyle(n,r,o,i))}}function Fw(e,t,n){e.setAttribute(t,"style",n)}function wp(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function bp(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&bs(e,t,r),o!==null&&wp(e,t,o),i!==null&&Fw(e,t,i)}var ft={};function p(e=1){Dp(Pe(),H(),Ct()+e,!1)}function Dp(e,t,n,r){if(!r)if((t[D]&3)===3){let i=e.preOrderCheckHooks;i!==null&&vo(t,i,n)}else{let i=e.preOrderHooks;i!==null&&wo(t,i,0,n)}Vt(n)}function Q(e,t=T.Default){let n=H();if(n===null)return O(e,t);let r=Se();return Kh(r,n,ke(e),t)}function Ip(e,t,n,r,o,i){let s=N(null);try{let a=null;o&wn.SignalBased&&(a=t[r][Ad]),a!==null&&a.transformFn!==void 0&&(i=a.transformFn(i)),o&wn.HasDecoratorInputTransform&&(i=e.inputTransforms[r].call(t,i)),e.setInput!==null?e.setInput(t,a,i,n,r):wh(t,a,r,i)}finally{N(s)}}function Lw(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Vt(~o);else{let i=o,s=n[++r],a=n[++r];Mv(s,i);let l=t[i];a(2,l)}}}finally{Vt(-1)}}function ti(e,t,n,r,o,i,s,a,l,u,c){let d=t.blueprint.slice();return d[ct]=o,d[D]=r|4|128|8|64,(u!==null||e&&e[D]&2048)&&(d[D]|=2048),xh(d),d[ve]=d[Sn]=e,d[ge]=n,d[Ke]=s||e&&e[Ke],d[de]=a||e&&e[de],d[bn]=l||e&&e[bn]||null,d[We]=i,d[Yo]=nw(),d[Xn]=c,d[gh]=u,d[Ue]=t.type==2?e[Ue]:d,d}function ni(e,t,n,r,o){let i=e.data[t];if(i===null)i=jw(e,t,n,r,o),Sv()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=Cv();i.injectorIndex=s===null?-1:s.injectorIndex}return hr(i,!0),i}function jw(e,t,n,r,o){let i=Ah(),s=kh(),a=s?i:i&&i.parent,l=e.data[t]=zw(e,a,n,t,r,o);return e.firstChild===null&&(e.firstChild=l),i!==null&&(s?i.child==null&&l.parent!==null&&(i.child=l):i.next===null&&(i.next=l,l.prev=i)),l}function Cp(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Ep(e,t,n,r,o){let i=Ct(),s=r&2;try{Vt(-1),s&&t.length>ze&&Dp(e,t,ze,!1),qe(s?2:0,o),n(r,o)}finally{Vt(i),qe(s?3:1,o)}}function xp(e,t,n){if(vh(t)){let r=N(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let a=e.data[s];if(a.contentQueries){let l=n[s];a.contentQueries(1,l,s)}}}finally{N(r)}}}function _p(e,t,n){Th()&&(Kw(e,t,n,Oe(n,t)),(n.flags&64)===64&&kp(e,t,n))}function Sp(e,t,n=Oe){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?n(t,e):e[s];e[o++]=a}}}function Mp(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=Va(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Va(e,t,n,r,o,i,s,a,l,u,c){let d=ze+r,h=d+o,f=Vw(d,h),g=typeof u=="function"?u():u;return f[x]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:c}}function Vw(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:ft);return n}function Bw(e,t,n,r){let i=r.get(cw,up)||n===Qe.ShadowDom,s=e.selectRootElement(t,i);return $w(s),s}function $w(e){Hw(e)}var Hw=()=>null;function Uw(e,t,n,r){let o=Op(t);o.push(n),e.firstCreatePass&&Pp(e).push(r,o.length-1)}function zw(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,a=0;return bv()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Af(e,t,n,r,o){for(let i in t){if(!t.hasOwnProperty(i))continue;let s=t[i];if(s===void 0)continue;r??={};let a,l=wn.None;Array.isArray(s)?(a=s[0],l=s[1]):a=s;let u=i;if(o!==null){if(!o.hasOwnProperty(i))continue;u=o[i]}e===0?kf(r,n,u,a,l):kf(r,n,u,a)}return r}function kf(e,t,n,r,o){let i;e.hasOwnProperty(n)?(i=e[n]).push(t,r):i=e[n]=[t,r],o!==void 0&&i.push(o)}function Ww(e,t,n){let r=t.directiveStart,o=t.directiveEnd,i=e.data,s=t.attrs,a=[],l=null,u=null;for(let c=r;c<o;c++){let d=i[c],h=n?n.get(d):null,f=h?h.inputs:null,g=h?h.outputs:null;l=Af(0,d.inputs,c,l,f),u=Af(1,d.outputs,c,u,g);let b=l!==null&&s!==null&&!ma(t)?lb(l,c,s):null;a.push(b)}l!==null&&(l.hasOwnProperty("class")&&(t.flags|=8),l.hasOwnProperty("style")&&(t.flags|=16)),t.initialInputs=a,t.inputs=l,t.outputs=u}function Gw(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function Yw(e,t,n,r,o,i,s,a){let l=Oe(t,n),u=t.inputs,c;!a&&u!=null&&(c=u[r])?(Ba(e,n,c,r,o),qo(t)&&qw(n,t.index)):t.type&3?(r=Gw(r),o=s!=null?s(o,t.value||"",r):o,i.setProperty(l,r,o)):t.type&12}function qw(e,t){let n=It(t,e);n[D]&16||(n[D]|=64)}function Tp(e,t,n,r){if(Th()){let o=r===null?null:{"":-1},i=Xw(e,n),s,a;i===null?s=a=null:[s,a]=i,s!==null&&Ap(e,t,n,s,o,a),o&&eb(n,r,o)}n.mergedAttrs=pa(n.mergedAttrs,n.attrs)}function Ap(e,t,n,r,o,i){for(let u=0;u<r.length;u++)Uv(Yh(n,t),e,r[u].type);nb(n,e.data.length,r.length);for(let u=0;u<r.length;u++){let c=r[u];c.providersResolver&&c.providersResolver(c)}let s=!1,a=!1,l=Cp(e,t,r.length,null);for(let u=0;u<r.length;u++){let c=r[u];n.mergedAttrs=pa(n.mergedAttrs,c.hostAttrs),rb(e,n,t,l,c),tb(l,c,o),c.contentQueries!==null&&(n.flags|=4),(c.hostBindings!==null||c.hostAttrs!==null||c.hostVars!==0)&&(n.flags|=64);let d=c.type.prototype;!s&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),s=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),a=!0),l++}Ww(e,n,i)}function Zw(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;Qw(s)!=a&&s.push(a),s.push(n,r,i)}}function Qw(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function Kw(e,t,n,r){let o=n.directiveStart,i=n.directiveEnd;qo(n)&&ob(t,n,e.data[o+n.componentOffset]),e.firstCreatePass||Yh(n,t),$t(r,t);let s=n.initialInputs;for(let a=o;a<i;a++){let l=e.data[a],u=Cn(t,e,a,n);if($t(u,t),s!==null&&ab(t,a-o,u,l,n,s),fr(l)){let c=It(n.index,t);c[ge]=Cn(t,e,a,n)}}}function kp(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=Tv();try{Vt(i);for(let a=r;a<o;a++){let l=e.data[a],u=t[a];Ms(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&Jw(l,u)}}finally{Vt(-1),Ms(s)}}function Jw(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function Xw(e,t){let n=e.directiveRegistry,r=null,o=null;if(n)for(let i=0;i<n.length;i++){let s=n[i];if($y(t,s.selectors,!1))if(r||(r=[]),fr(s))if(s.findHostDirectiveDefs!==null){let a=[];o=o||new Map,s.findHostDirectiveDefs(s,a,o),r.unshift(...a,s);let l=a.length;Ls(e,t,l)}else r.unshift(s),Ls(e,t,0);else o=o||new Map,s.findHostDirectiveDefs?.(s,r,o),r.push(s)}return r===null?null:[r,o]}function Ls(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function eb(e,t,n){if(t){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new I(-301,!1);r.push(t[o],i)}}}function tb(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;fr(t)&&(n[""]=e)}}function nb(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function rb(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=yn(o.type,!0)),s=new nr(i,fr(o),Q);e.blueprint[r]=s,n[r]=s,Zw(e,t,r,Cp(e,n,o.hostVars,ft),o)}function ob(e,t,n){let r=Oe(t,e),o=Mp(n),i=e[Ke].rendererFactory,s=16;n.signals?s=4096:n.onPush&&(s=64);let a=ri(e,ti(e,o,null,s,r,t,null,i.createRenderer(r,n),null,null,null));e[t.index]=a}function ib(e,t,n,r,o,i){let s=Oe(e,t);sb(t[de],s,i,e.value,n,r,o)}function sb(e,t,n,r,o,i,s){if(i==null)e.removeAttribute(t,o,n);else{let a=s==null?gn(i):s(i,r||"",o);e.setAttribute(t,o,a,n)}}function ab(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let a=0;a<s.length;){let l=s[a++],u=s[a++],c=s[a++],d=s[a++];Ip(r,n,l,u,c,d)}}function lb(e,t,n){let r=null,o=0;for(;o<n.length;){let i=n[o];if(i===0){o+=4;continue}else if(i===5){o+=2;continue}if(typeof i=="number")break;if(e.hasOwnProperty(i)){r===null&&(r=[]);let s=e[i];for(let a=0;a<s.length;a+=3)if(s[a]===t){r.push(i,s[a+1],s[a+2],n[o+1]);break}}o+=2}return r}function Np(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function Rp(e,t){let n=e.contentQueries;if(n!==null){let r=N(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let a=e.data[s];Da(i),a.contentQueries(2,t[s],s)}}}finally{N(r)}}}function ri(e,t){return e[er]?e[vf][He]=t:e[er]=t,e[vf]=t,t}function js(e,t,n){Da(0);let r=N(null);try{t(e,n)}finally{N(r)}}function Op(e){return e[So]??=[]}function Pp(e){return e.cleanup??=[]}function Fp(e,t){let n=e[bn],r=n?n.get(at,null):null;r&&r.handleError(t)}function Ba(e,t,n,r,o){for(let i=0;i<n.length;){let s=n[i++],a=n[i++],l=n[i++],u=t[s],c=e.data[s];Ip(c,u,r,a,l,o)}}function Lp(e,t,n){let r=Eh(t,e);vw(e[de],r,n)}function ub(e,t){let n=It(t,e),r=n[x];cb(r,n);let o=n[ct];o!==null&&n[Xn]===null&&(n[Xn]=Na(o,n[bn])),$a(r,n,n[ge])}function cb(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function $a(e,t,n){Ia(t);try{let r=e.viewQuery;r!==null&&js(1,r,n);let o=e.template;o!==null&&Ep(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[st]?.finishViewCreation(e),e.staticContentQueries&&Rp(e,t),e.staticViewQueries&&js(2,e.viewQuery,n);let i=e.components;i!==null&&db(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[D]&=-5,Ca()}}function db(e,t){for(let n=0;n<t.length;n++)ub(e,t[n])}function oi(e,t,n,r){let o=N(null);try{let i=t.tView,a=e[D]&4096?4096:16,l=ti(e,i,n,a,null,t,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),u=e[t.index];l[Ft]=u;let c=e[st];return c!==null&&(l[st]=c.createEmbeddedView(i)),$a(i,l,n),l}finally{N(o)}}function jp(e,t){let n=ye+t;if(n<e.length)return e[n]}function or(e,t){return!t||t.firstChild===null||rp(e)}function ii(e,t,n,r=!0){let o=t[x];if(Iw(o,t,e,n),r){let s=Fs(n,e),a=t[de],l=Fa(a,e[Lt]);l!==null&&bw(o,e[We],a,t,l,s)}let i=t[Xn];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function Vp(e,t){let n=rr(e,t);return n!==void 0&&Xo(n[x],n),n}function Oo(e,t,n,r,o=!1){for(;n!==null;){let i=t[n.index];i!==null&&r.push(Je(i)),dt(i)&&fb(i,r);let s=n.type;if(s&8)Oo(e,t,n.child,r);else if(s&32){let a=Oa(n,t),l;for(;l=a();)r.push(l)}else if(s&16){let a=vp(t,n);if(Array.isArray(a))r.push(...a);else{let l=jt(t[Ue]);Oo(l[x],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}function fb(e,t){for(let n=ye;n<e.length;n++){let r=e[n],o=r[x].firstChild;o!==null&&Oo(r[x],r,o,t)}e[Lt]!==e[ct]&&t.push(e[Lt])}var Bp=[];function hb(e){return e[Ne]??pb(e)}function pb(e){let t=Bp.pop()??Object.create(gb);return t.lView=e,t}function mb(e){e.lView[Ne]!==e&&(e.lView=null,Bp.push(e))}var gb=Z(w({},Li),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{Zo(e.lView)},consumerOnSignalRead(){this.lView[Ne]=this}});function yb(e){let t=e[Ne]??Object.create(vb);return t.lView=e,t}var vb=Z(w({},Li),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{let t=jt(e.lView);for(;t&&!$p(t[x]);)t=jt(t);t&&_h(t)},consumerOnSignalRead(){this.lView[Ne]=this}});function $p(e){return e.type!==2}var wb=100;function Hp(e,t=!0,n=0){let r=e[Ke],o=r.rendererFactory,i=!1;i||o.begin?.();try{bb(e,n)}catch(s){throw t&&Fp(e,s),s}finally{i||(o.end?.(),r.inlineEffectRunner?.flush())}}function bb(e,t){let n=Nh();try{bf(!0),Vs(e,t);let r=0;for(;tr(e);){if(r===wb)throw new I(103,!1);r++,Vs(e,1)}}finally{bf(n)}}function Db(e,t,n,r){let o=t[D];if((o&256)===256)return;let i=!1,s=!1;!i&&t[Ke].inlineEffectRunner?.flush(),Ia(t);let a=!0,l=null,u=null;i||($p(e)?(u=hb(t),l=ji(u)):kd()===null?(a=!1,u=yb(t),l=ji(u)):t[Ne]&&(Bi(t[Ne]),t[Ne]=null));try{xh(t),_v(e.bindingStartIndex),n!==null&&Ep(e,t,n,2,r);let c=(o&3)===3;if(!i)if(c){let f=e.preOrderCheckHooks;f!==null&&vo(t,f,null)}else{let f=e.preOrderHooks;f!==null&&wo(t,f,0,null),ls(t,0)}if(s||Ib(t),Up(t,0),e.contentQueries!==null&&Rp(e,t),!i)if(c){let f=e.contentCheckHooks;f!==null&&vo(t,f)}else{let f=e.contentHooks;f!==null&&wo(t,f,1),ls(t,1)}Lw(e,t);let d=e.components;d!==null&&Wp(t,d,0);let h=e.viewQuery;if(h!==null&&js(2,h,r),!i)if(c){let f=e.viewCheckHooks;f!==null&&vo(t,f)}else{let f=e.viewHooks;f!==null&&wo(t,f,2),ls(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[as]){for(let f of t[as])f();t[as]=null}i||(t[D]&=-73)}catch(c){throw i||Zo(t),c}finally{u!==null&&(Nd(u,l),a&&mb(u)),Ca()}}function Up(e,t){for(let n=ip(e);n!==null;n=sp(n))for(let r=ye;r<n.length;r++){let o=n[r];zp(o,t)}}function Ib(e){for(let t=ip(e);t!==null;t=sp(t)){if(!(t[D]&To.HasTransplantedViews))continue;let n=t[Dn];for(let r=0;r<n.length;r++){let o=n[r];_h(o)}}}function Cb(e,t,n){let r=It(t,e);zp(r,n)}function zp(e,t){ba(e)&&Vs(e,t)}function Vs(e,t){let r=e[x],o=e[D],i=e[Ne],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&Vi(i)),s||=!1,i&&(i.dirty=!1),e[D]&=-9217,s)Db(r,e,r.template,e[ge]);else if(o&8192){Up(e,1);let a=r.components;a!==null&&Wp(e,a,1)}}function Wp(e,t,n){for(let r=0;r<t.length;r++)Cb(e,t[r],n)}function Ha(e,t){let n=Nh()?64:1088;for(e[Ke].changeDetectionScheduler?.notify(t);e;){e[D]|=n;let r=jt(e);if(xs(e)&&!r)return e;e=r}return null}var Ht=class{get rootNodes(){let t=this._lView,n=t[x];return Oo(n,t,n.firstChild,[])}constructor(t,n,r=!0){this._lView=t,this._cdRefInjectingView=n,this.notifyErrorHandler=r,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[ge]}set context(t){this._lView[ge]=t}get destroyed(){return(this._lView[D]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[ve];if(dt(t)){let n=t[Mo],r=n?n.indexOf(this):-1;r>-1&&(rr(t,r),xo(n,r))}this._attachedToViewContainer=!1}Xo(this._lView[x],this._lView)}onDestroy(t){Sh(this._lView,t)}markForCheck(){Ha(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[D]&=-129}reattach(){Ss(this._lView),this._lView[D]|=128}detectChanges(){this._lView[D]|=1024,Hp(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new I(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=xs(this._lView),n=this._lView[Ft];n!==null&&!t&&Pa(n,this._lView),mp(this._lView[x],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new I(902,!1);this._appRef=t;let n=xs(this._lView),r=this._lView[Ft];r!==null&&!n&&gp(r,this._lView),Ss(this._lView)}},ir=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=_b;let e=t;return e})(),Eb=ir,xb=class extends Eb{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,n){return this.createEmbeddedViewImpl(t,n)}createEmbeddedViewImpl(t,n,r){let o=oi(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:n,dehydratedView:r});return new Ht(o)}};function _b(){return Ua(Se(),H())}function Ua(e,t){return e.type&4?new xb(t,e,Mn(e,t)):null}var NN=new RegExp(`^(\\d+)*(${lw}|${aw})*(.*)`);var Sb=()=>null;function sr(e,t){return Sb(e,t)}var ar=class{},za=new S("",{providedIn:"root",factory:()=>!1});var Gp=new S(""),Bs=class{},Po=class{};function Mb(e){let t=Error(`No component factory found for ${De(e)}.`);return t[Tb]=e,t}var Tb="ngComponent";var $s=class{resolveComponentFactory(t){throw Mb(t)}},tl=class tl{};tl.NULL=new $s;var En=tl,xn=class{},si=(()=>{let t=class t{constructor(){this.destroyNode=null}};t.__NG_ELEMENT_ID__=()=>Ab();let e=t;return e})();function Ab(){let e=H(),t=Se(),n=It(t.index,e);return(wt(n)?n:e)[de]}var kb=(()=>{let t=class t{};t.\u0275prov=_({token:t,providedIn:"root",factory:()=>null});let e=t;return e})();var Nf=new Set;function yr(e){Nf.has(e)||(Nf.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}function Yp(e){let t=!0;return setTimeout(()=>{t&&(t=!1,e())}),typeof Zn.requestAnimationFrame=="function"&&Zn.requestAnimationFrame(()=>{t&&(t=!1,e())}),()=>{t=!1}}function Rf(e){let t=!0;return queueMicrotask(()=>{t&&e()}),()=>{t=!1}}function Of(...e){}var J=class e{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new me(!1),this.onMicrotaskEmpty=new me(!1),this.onStable=new me(!1),this.onError=new me(!1),typeof Zone>"u")throw new I(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,Ob(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new I(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new I(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,Nb,Of,Of);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},Nb={};function Wa(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Rb(e){e.isCheckStableRunning||e.callbackScheduled||(e.callbackScheduled=!0,Zone.root.run(()=>{Yp(()=>{e.callbackScheduled=!1,Hs(e),e.isCheckStableRunning=!0,Wa(e),e.isCheckStableRunning=!1})}),Hs(e))}function Ob(e){let t=()=>{Rb(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{if(Pb(a))return n.invokeTask(o,i,s,a);try{return Pf(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&i.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),Ff(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return Pf(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!Fb(a)&&t(),Ff(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&(i.change=="microTask"?(e._hasPendingMicrotasks=i.microTask,Hs(e),Wa(e)):i.change=="macroTask"&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}function Hs(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Pf(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Ff(e){e._nesting--,Wa(e)}var Us=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new me,this.onMicrotaskEmpty=new me,this.onStable=new me,this.onError=new me}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function Pb(e){return qp(e,"__ignore_ng_zone__")}function Fb(e){return qp(e,"__scheduler_tick__")}function qp(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var Zp=(()=>{let t=class t{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let r=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let o of r)o()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};t.\u0275prov=_({token:t,providedIn:"root",factory:()=>new t});let e=t;return e})();function zs(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")i=a;else if(i==1)o=lf(o,a);else if(i==2){let l=a,u=t[++s];r=lf(r,l+": "+u+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}var Fo=class extends En{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=Pt(t);return new lr(n,this.ngModule)}};function Lf(e){let t=[];for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];r!==void 0&&t.push({propName:Array.isArray(r)?r[0]:r,templateName:n})}return t}function Lb(e){let t=e.toLowerCase();return t==="svg"?Ch:t==="math"?fv:null}var lr=class extends Po{get inputs(){let t=this.componentDef,n=t.inputTransforms,r=Lf(t.inputs);if(n!==null)for(let o of r)n.hasOwnProperty(o.propName)&&(o.transform=n[o.propName]);return r}get outputs(){return Lf(this.componentDef.outputs)}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=Wy(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}create(t,n,r,o){let i=N(null);try{o=o||this.ngModule;let s=o instanceof Re?o:o?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let a=s?new Ts(t,s):t,l=a.get(xn,null);if(l===null)throw new I(407,!1);let u=a.get(kb,null),c=a.get(Zp,null),d=a.get(ar,null),h={rendererFactory:l,sanitizer:u,inlineEffectRunner:null,afterRenderEventManager:c,changeDetectionScheduler:d},f=l.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",b=r?Bw(f,r,this.componentDef.encapsulation,a):pp(f,g,Lb(g)),V=512;this.componentDef.signals?V|=4096:this.componentDef.onPush||(V|=16);let $=null;b!==null&&($=Na(b,a,!0));let ue=Va(0,null,null,1,0,null,null,null,null,null,null),ne=ti(null,ue,null,V,null,null,h,f,a,null,$);Ia(ne);let rt,Kt;try{let je=this.componentDef,Jt,Oi=null;je.findHostDirectiveDefs?(Jt=[],Oi=new Map,je.findHostDirectiveDefs(je,Jt,Oi),Jt.push(je)):Jt=[je];let Ng=jb(ne,b),Rg=Vb(Ng,b,je,Jt,ne,h,f);Kt=wa(ue,ze),b&&Hb(f,je,b,r),n!==void 0&&Ub(Kt,this.ngContentSelectors,n),rt=$b(Rg,je,Jt,Oi,ne,[zb]),$a(ue,ne,null)}finally{Ca()}return new Ws(this.componentType,rt,Mn(Kt,ne),ne,Kt)}finally{N(i)}}},Ws=class extends Bs{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.previousInputValues=null,this.instance=n,this.hostView=this.changeDetectorRef=new Ht(o,void 0,!1),this.componentType=t}setInput(t,n){let r=this._tNode.inputs,o;if(r!==null&&(o=r[t])){if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let i=this._rootLView;Ba(i[x],i,o,t,n),this.previousInputValues.set(t,n);let s=It(this._tNode.index,i);Ha(s,1)}}get injector(){return new Rt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function jb(e,t){let n=e[x],r=ze;return e[r]=t,ni(n,r,2,"#host",null)}function Vb(e,t,n,r,o,i,s){let a=o[x];Bb(r,e,t,s);let l=null;t!==null&&(l=Na(t,o[bn]));let u=i.rendererFactory.createRenderer(t,n),c=16;n.signals?c=4096:n.onPush&&(c=64);let d=ti(o,Mp(n),null,c,o[e.index],e,i,u,null,null,l);return a.firstCreatePass&&Ls(a,e,r.length-1),ri(o,d),o[e.index]=d}function Bb(e,t,n,r){for(let o of e)t.mergedAttrs=pa(t.mergedAttrs,o.hostAttrs);t.mergedAttrs!==null&&(zs(t,t.mergedAttrs,!0),n!==null&&bp(r,n,t))}function $b(e,t,n,r,o,i){let s=Se(),a=o[x],l=Oe(s,o);Ap(a,o,s,n,null,r);for(let c=0;c<n.length;c++){let d=s.directiveStart+c,h=Cn(o,a,d,s);$t(h,o)}kp(a,o,s),l&&$t(l,o);let u=Cn(o,a,s.directiveStart+s.componentOffset,s);if(e[ge]=o[ge]=u,i!==null)for(let c of i)c(u,t);return xp(a,s,o),u}function Hb(e,t,n,r){if(r)bs(e,n,["ng-version","18.0.4"]);else{let{attrs:o,classes:i}=Gy(t.selectors[0]);o&&bs(e,n,o),i&&i.length>0&&wp(e,n,i.join(" "))}}function Ub(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null?Array.from(i):null)}}function zb(){let e=Se();_a(H()[x],e)}var An=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=Wb;let e=t;return e})();function Wb(){let e=Se();return Kp(e,H())}var Gb=An,Qp=class extends Gb{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Mn(this._hostTNode,this._hostLView)}get injector(){return new Rt(this._hostTNode,this._hostLView)}get parentInjector(){let t=Sa(this._hostTNode,this._hostLView);if(zh(t)){let n=ko(t,this._hostLView),r=Ao(t),o=n[x].data[r+8];return new Rt(o,n)}else return new Rt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=jf(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-ye}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=sr(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(a,o,or(this._hostTNode,s)),a}createComponent(t,n,r,o,i){let s=t&&!lv(t),a;if(s)a=n;else{let g=n||{};a=g.index,r=g.injector,o=g.projectableNodes,i=g.environmentInjector||g.ngModuleRef}let l=s?t:new lr(Pt(t)),u=r||this.parentInjector;if(!i&&l.ngModule==null){let b=(s?u:this.parentInjector).get(Re,null);b&&(i=b)}let c=Pt(l.componentType??{}),d=sr(this._lContainer,c?.id??null),h=d?.firstChild??null,f=l.create(u,o,h,i);return this.insertImpl(f.hostView,a,or(this._hostTNode,d)),f}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(pv(o)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let l=o[ve],u=new Qp(l,l[We],l[ve]);u.detach(u.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return ii(s,o,i,r),t.attachToViewContainerRef(),th(hs(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=jf(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=rr(this._lContainer,n);r&&(xo(hs(this._lContainer),n),Xo(r[x],r))}detach(t){let n=this._adjustIndex(t,-1),r=rr(this._lContainer,n);return r&&xo(hs(this._lContainer),n)!=null?new Ht(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function jf(e){return e[Mo]}function hs(e){return e[Mo]||(e[Mo]=[])}function Kp(e,t){let n,r=t[e.index];return dt(r)?n=r:(n=Np(r,t,null,e),t[e.index]=n,ri(t,n)),qb(n,t,e,r),new Qp(n,e,t)}function Yb(e,t){let n=e[de],r=n.createComment(""),o=Oe(t,e),i=Fa(n,o);return Ro(n,i,r,Mw(n,o),!1),r}var qb=Kb,Zb=()=>!1;function Qb(e,t,n){return Zb(e,t,n)}function Kb(e,t,n,r){if(e[Lt])return;let o;n.type&8?o=Je(r):o=Yb(t,n),e[Lt]=o}var Gs=class e{constructor(t){this.queryList=t,this.matches=null}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},Ys=class e{constructor(t=[]){this.queries=t}createEmbeddedView(t){let n=t.queries;if(n!==null){let r=t.contentQueries!==null?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){let s=n.getByIndex(i),a=this.queries[s.indexInDeclarationView];o.push(a.clone())}return new e(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}finishViewCreation(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)Ga(t,n).matches!==null&&this.queries[n].setDirty()}},qs=class{constructor(t,n,r=null){this.flags=n,this.read=r,typeof t=="string"?this.predicate=iD(t):this.predicate=t}},Zs=class e{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){let o=n!==null?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,n!==null?n.push(i):n=[i])}return n!==null?new e(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}},Qs=class e{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new e(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,r=t.parent;for(;r!==null&&r.type&8&&r.index!==n;)r=r.parent;return n===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){let r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){let i=r[o];this.matchTNodeWithReadOption(t,n,Jb(n,i)),this.matchTNodeWithReadOption(t,n,bo(n,t,i,!1,!1))}else r===ir?n.type&4&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,bo(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(r!==null){let o=this.metadata.read;if(o!==null)if(o===Et||o===An||o===ir&&n.type&4)this.addMatch(n.index,-2);else{let i=bo(n,t,o,!1,!1);i!==null&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){this.matches===null?this.matches=[t,n]:this.matches.push(t,n)}};function Jb(e,t){let n=e.localNames;if(n!==null){for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1]}return null}function Xb(e,t){return e.type&11?Mn(e,t):e.type&4?Ua(e,t):null}function eD(e,t,n,r){return n===-1?Xb(t,e):n===-2?tD(e,t,r):Cn(e,e[x],n,t)}function tD(e,t,n){if(n===Et)return Mn(t,e);if(n===ir)return Ua(t,e);if(n===An)return Kp(t,e)}function Jp(e,t,n,r){let o=t[st].queries[r];if(o.matches===null){let i=e.data,s=n.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let u=s[l];if(u<0)a.push(null);else{let c=i[u];a.push(eD(t,c,s[l+1],n.metadata.read))}}o.matches=a}return o.matches}function Ks(e,t,n,r){let o=e.queries.getByIndex(n),i=o.matches;if(i!==null){let s=Jp(e,t,o,n);for(let a=0;a<i.length;a+=2){let l=i[a];if(l>0)r.push(s[a/2]);else{let u=i[a+1],c=t[-l];for(let d=ye;d<c.length;d++){let h=c[d];h[Ft]===h[ve]&&Ks(h[x],h,u,r)}if(c[Dn]!==null){let d=c[Dn];for(let h=0;h<d.length;h++){let f=d[h];Ks(f[x],f,u,r)}}}}}return r}function nD(e,t){return e[st].queries[t].queryList}function rD(e,t,n){let r=new Os((n&4)===4);return Uw(e,t,r,r.destroy),(t[st]??=new Ys).queries.push(new Gs(r))-1}function oD(e,t,n){let r=Pe();return r.firstCreatePass&&(sD(r,new qs(e,t,n),-1),(t&2)===2&&(r.staticViewQueries=!0)),rD(r,H(),t)}function iD(e){return e.split(",").map(t=>t.trim())}function sD(e,t,n){e.queries===null&&(e.queries=new Zs),e.queries.track(new Qs(t,n))}function Ga(e,t){return e.queries.getByIndex(t)}function aD(e,t){let n=e[x],r=Ga(n,t);return r.crossesNgTemplate?Ks(n,e,t,[]):Jp(n,e,r,t)}function vr(e){let t=e.inputConfig,n={};for(let r in t)if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)&&o[3]&&(n[r]=o[3])}e.inputTransforms=n}var bt=class{},ur=class{};var Js=class extends bt{constructor(t,n,r){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Fo(this);let o=ch(t);this._bootstrapComponents=hp(o.bootstrap),this._r3Injector=ep(t,n,[{provide:bt,useValue:this},{provide:En,useValue:this.componentFactoryResolver},...r],De(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},Xs=class extends ur{constructor(t){super(),this.moduleType=t}create(t){return new Js(this.moduleType,t,[])}};var Lo=class extends bt{constructor(t){super(),this.componentFactoryResolver=new Fo(this),this.instance=null;let n=new Jn([...t.providers,{provide:bt,useValue:this},{provide:En,useValue:this.componentFactoryResolver}],t.parent||ya(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function Ya(e,t,n=null){return new Lo({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}function Dt(e,t,n){let r=e[t];return Object.is(r,n)?!1:(e[t]=n,!0)}function lD(e,t,n,r){let o=Dt(e,t,n);return Dt(e,t+1,r)||o}function uD(e){return(e.flags&32)===32}function cD(e,t,n,r,o,i,s,a,l){let u=t.consts,c=ni(t,e,4,s||null,a||null);Tp(t,n,c,In(u,l)),_a(t,c);let d=c.tView=Va(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u,null);return t.queries!==null&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}function ea(e,t,n,r,o,i,s,a,l,u){let c=n+ze,d=t.firstCreatePass?cD(c,t,e,r,o,i,s,a,l):t.data[c];hr(d,!1);let h=dD(t,e,d,n);Ea()&&La(t,e,h,d),$t(h,e);let f=Np(h,e,h,d);return e[c]=f,ri(e,f),Qb(f,d,e),va(d)&&_p(t,e,d),l!=null&&Sp(e,d,u),d}function W(e,t,n,r,o,i,s,a){let l=H(),u=Pe(),c=In(u.consts,i);return ea(l,u,e,t,n,r,o,c,s,a),W}var dD=fD;function fD(e,t,n,r){return xa(!0),t[de].createComment("")}function wr(e,t,n,r){let o=H(),i=pr();if(Dt(o,i,t)){let s=Pe(),a=Bh();ib(a,o,e,t,n,r)}return wr}function hD(e,t,n,r){return Dt(e,pr(),n)?t+gn(n)+r:ft}function pD(e,t,n,r,o,i){let s=xv(),a=lD(e,s,n,o);return Rh(2),a?t+gn(n)+r+gn(o)+i:ft}function go(e,t){return e<<17|t<<2}function Ut(e){return e>>17&32767}function mD(e){return(e&2)==2}function gD(e,t){return e&131071|t<<17}function ta(e){return e|2}function _n(e){return(e&131068)>>2}function ps(e,t){return e&-131069|t<<2}function yD(e){return(e&1)===1}function na(e){return e|1}function vD(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=Ut(s),l=_n(s);e[r]=n;let u=!1,c;if(Array.isArray(n)){let d=n;c=d[1],(c===null||dr(d,c)>0)&&(u=!0)}else c=n;if(o)if(l!==0){let h=Ut(e[a+1]);e[r+1]=go(h,a),h!==0&&(e[h+1]=ps(e[h+1],r)),e[a+1]=gD(e[a+1],r)}else e[r+1]=go(a,0),a!==0&&(e[a+1]=ps(e[a+1],r)),a=r;else e[r+1]=go(l,0),a===0?a=r:e[l+1]=ps(e[l+1],r),l=r;u&&(e[r+1]=ta(e[r+1])),Vf(e,c,r,!0),Vf(e,c,r,!1),wD(t,c,e,r,i),s=go(a,l),i?t.classBindings=s:t.styleBindings=s}function wD(e,t,n,r,o){let i=o?e.residualClasses:e.residualStyles;i!=null&&typeof t=="string"&&dr(i,t)>=0&&(n[r+1]=na(n[r+1]))}function Vf(e,t,n,r){let o=e[n+1],i=t===null,s=r?Ut(o):_n(o),a=!1;for(;s!==0&&(a===!1||i);){let l=e[s],u=e[s+1];bD(l,t)&&(a=!0,e[s+1]=r?na(u):ta(u)),s=r?Ut(u):_n(u)}a&&(e[n+1]=r?ta(o):na(o))}function bD(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?dr(e,t)>=0:!1}function k(e,t,n){let r=H(),o=pr();if(Dt(r,o,t)){let i=Pe(),s=Bh();Yw(i,s,r,e,t,r[de],n,!1)}return k}function Bf(e,t,n,r,o){let i=t.inputs,s=o?"class":"style";Ba(e,n,i[s],s,r)}function br(e,t,n){return Xp(e,t,n,!1),br}function qa(e,t){return Xp(e,t,null,!0),qa}function Xp(e,t,n,r){let o=H(),i=Pe(),s=Rh(2);if(i.firstUpdatePass&&ID(i,e,s,r),t!==ft&&Dt(o,s,t)){let a=i.data[Ct()];SD(i,a,o,o[de],e,o[s+1]=MD(t,n),r,s)}}function DD(e,t){return t>=e.expandoStartIndex}function ID(e,t,n,r){let o=e.data;if(o[n+1]===null){let i=o[Ct()],s=DD(e,n);TD(i,r)&&t===null&&!s&&(t=!1),t=CD(o,i,t,r),vD(o,i,t,n,s,r)}}function CD(e,t,n,r){let o=Av(e),i=r?t.residualClasses:t.residualStyles;if(o===null)(r?t.classBindings:t.styleBindings)===0&&(n=ms(null,e,t,n,r),n=cr(n,t.attrs,r),i=null);else{let s=t.directiveStylingLast;if(s===-1||e[s]!==o)if(n=ms(o,e,t,n,r),i===null){let l=ED(e,t,r);l!==void 0&&Array.isArray(l)&&(l=ms(null,e,t,l[1],r),l=cr(l,t.attrs,r),xD(e,t,r,l))}else i=_D(e,t,r)}return i!==void 0&&(r?t.residualClasses=i:t.residualStyles=i),n}function ED(e,t,n){let r=n?t.classBindings:t.styleBindings;if(_n(r)!==0)return e[Ut(r)]}function xD(e,t,n,r){let o=n?t.classBindings:t.styleBindings;e[Ut(o)]=r}function _D(e,t,n){let r,o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++){let s=e[i].hostAttrs;r=cr(r,s,n)}return cr(r,t.attrs,n)}function ms(e,t,n,r,o){let i=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(i=t[a],r=cr(r,i.hostAttrs,o),i!==e);)a++;return e!==null&&(n.directiveStylingLast=a),r}function cr(e,t,n){let r=n?1:2,o=-1;if(t!==null)for(let i=0;i<t.length;i++){let s=t[i];typeof s=="number"?o=s:o===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),Ry(e,s,n?!0:t[++i]))}return e===void 0?null:e}function SD(e,t,n,r,o,i,s,a){if(!(t.type&3))return;let l=e.data,u=l[a+1],c=yD(u)?$f(l,t,n,o,_n(u),s):void 0;if(!jo(c)){jo(i)||mD(u)&&(i=$f(l,null,n,o,a,s));let d=Eh(Ct(),n);Pw(r,s,d,o,i)}}function $f(e,t,n,r,o,i){let s=t===null,a;for(;o>0;){let l=e[o],u=Array.isArray(l),c=u?l[1]:l,d=c===null,h=n[o+1];h===ft&&(h=d?Ot:void 0);let f=d?is(h,r):c===r?h:void 0;if(u&&!jo(f)&&(f=is(l,r)),jo(f)&&(a=f,s))return a;let g=e[o+1];o=s?Ut(g):_n(g)}if(t!==null){let l=i?t.residualClasses:t.residualStyles;l!=null&&(a=is(l,r))}return a}function jo(e){return e!==void 0}function MD(e,t){return e==null||e===""||(typeof t=="string"?e=e+t:typeof e=="object"&&(e=De(gr(e)))),e}function TD(e,t){return(e.flags&(t?8:16))!==0}var ra=class{destroy(t){}updateValue(t,n){}swap(t,n){let r=Math.min(t,n),o=Math.max(t,n),i=this.detach(o);if(o-r>1){let s=this.detach(r);this.attach(r,i),this.attach(o,s)}else this.attach(r,i)}move(t,n){this.attach(n,this.detach(t))}};function gs(e,t,n,r,o){return e===n&&Object.is(t,r)?1:Object.is(o(e,t),o(n,r))?-1:0}function AD(e,t,n){let r,o,i=0,s=e.length-1,a=void 0;if(Array.isArray(t)){let l=t.length-1;for(;i<=s&&i<=l;){let u=e.at(i),c=t[i],d=gs(i,u,i,c,n);if(d!==0){d<0&&e.updateValue(i,c),i++;continue}let h=e.at(s),f=t[l],g=gs(s,h,l,f,n);if(g!==0){g<0&&e.updateValue(s,f),s--,l--;continue}let b=n(i,u),V=n(s,h),$=n(i,c);if(Object.is($,V)){let ue=n(l,f);Object.is(ue,b)?(e.swap(i,s),e.updateValue(s,f),l--,s--):e.move(s,i),e.updateValue(i,c),i++;continue}if(r??=new Vo,o??=Uf(e,i,s,n),oa(e,r,i,$))e.updateValue(i,c),i++,s++;else if(o.has($))r.set(b,e.detach(i)),s--;else{let ue=e.create(i,t[i]);e.attach(i,ue),i++,s++}}for(;i<=l;)Hf(e,r,n,i,t[i]),i++}else if(t!=null){let l=t[Symbol.iterator](),u=l.next();for(;!u.done&&i<=s;){let c=e.at(i),d=u.value,h=gs(i,c,i,d,n);if(h!==0)h<0&&e.updateValue(i,d),i++,u=l.next();else{r??=new Vo,o??=Uf(e,i,s,n);let f=n(i,d);if(oa(e,r,i,f))e.updateValue(i,d),i++,s++,u=l.next();else if(!o.has(f))e.attach(i,e.create(i,d)),i++,s++,u=l.next();else{let g=n(i,c);r.set(g,e.detach(i)),s--}}}for(;!u.done;)Hf(e,r,n,e.length,u.value),u=l.next()}for(;i<=s;)e.destroy(e.detach(s--));r?.forEach(l=>{e.destroy(l)})}function oa(e,t,n,r){return t!==void 0&&t.has(r)?(e.attach(n,t.get(r)),t.delete(r),!0):!1}function Hf(e,t,n,r,o){if(oa(e,t,r,n(r,o)))e.updateValue(r,o);else{let i=e.create(r,o);e.attach(r,i)}}function Uf(e,t,n,r){let o=new Set;for(let i=t;i<=n;i++)o.add(r(i,e.at(i)));return o}var Vo=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let n=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(n)?(this.kvMap.set(t,this._vMap.get(n)),this._vMap.delete(n)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,n){if(this.kvMap.has(t)){let r=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=new Map);let o=this._vMap;for(;o.has(r);)r=o.get(r);o.set(r,n)}else this.kvMap.set(t,n)}forEach(t){for(let[n,r]of this.kvMap)if(t(r,n),this._vMap!==void 0){let o=this._vMap;for(;o.has(r);)r=o.get(r),t(r,n)}}};function Y(e,t){yr("NgControlFlow");let n=H(),r=pr(),o=n[r]!==ft?n[r]:-1,i=o!==-1?Bo(n,ze+o):void 0,s=0;if(Dt(n,r,e)){let a=N(null);try{if(i!==void 0&&Vp(i,s),e!==-1){let l=ze+e,u=Bo(n,l),c=la(n[x],l),d=sr(u,c.tView.ssrId),h=oi(n,c,t,{dehydratedView:d});ii(u,h,s,or(c,d))}}finally{N(a)}}else if(i!==void 0){let a=jp(i,s);a!==void 0&&(a[ge]=t)}}var ia=class{constructor(t,n,r){this.lContainer=t,this.$implicit=n,this.$index=r}get $count(){return this.lContainer.length-ye}};function em(e,t){return t}var sa=class{constructor(t,n,r){this.hasEmptyBlock=t,this.trackByFn=n,this.liveCollection=r}};function fe(e,t,n,r,o,i,s,a,l,u,c,d,h){yr("NgControlFlow");let f=H(),g=Pe(),b=l!==void 0,V=H(),$=a?s.bind(V[Ue][ge]):s,ue=new sa(b,$);V[ze+e]=ue,ea(f,g,e+1,t,n,r,o,In(g.consts,i)),b&&ea(f,g,e+2,l,u,c,d,In(g.consts,h))}var aa=class extends ra{constructor(t,n,r){super(),this.lContainer=t,this.hostLView=n,this.templateTNode=r,this.operationsCounter=void 0,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-ye}at(t){return this.getLView(t)[ge].$implicit}attach(t,n){let r=n[Xn];this.needsIndexUpdate||=t!==this.length,ii(this.lContainer,n,t,or(this.templateTNode,r))}detach(t){return this.needsIndexUpdate||=t!==this.length-1,kD(this.lContainer,t)}create(t,n){let r=sr(this.lContainer,this.templateTNode.tView.ssrId),o=oi(this.hostLView,this.templateTNode,new ia(this.lContainer,n,t),{dehydratedView:r});return this.operationsCounter?.recordCreate(),o}destroy(t){Xo(t[x],t),this.operationsCounter?.recordDestroy()}updateValue(t,n){this.getLView(t)[ge].$implicit=n}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[ge].$index=t}getLView(t){return ND(this.lContainer,t)}};function he(e){let t=N(null),n=Ct();try{let r=H(),o=r[x],i=r[n],s=n+1,a=Bo(r,s);if(i.liveCollection===void 0){let u=la(o,s);i.liveCollection=new aa(a,r,u)}else i.liveCollection.reset();let l=i.liveCollection;if(AD(l,e,i.trackByFn),l.updateIndexes(),i.hasEmptyBlock){let u=pr(),c=l.length===0;if(Dt(r,u,c)){let d=n+2,h=Bo(r,d);if(c){let f=la(o,d),g=sr(h,f.tView.ssrId),b=oi(r,f,void 0,{dehydratedView:g});ii(h,b,0,or(f,g))}else Vp(h,0)}}}finally{N(t)}}function Bo(e,t){return e[t]}function kD(e,t){return rr(e,t)}function ND(e,t){return jp(e,t)}function la(e,t){return wa(e,t)}function RD(e,t,n,r,o,i){let s=t.consts,a=In(s,o),l=ni(t,e,2,r,a);return Tp(t,n,l,In(s,i)),l.attrs!==null&&zs(l,l.attrs,!1),l.mergedAttrs!==null&&zs(l,l.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,l),l}function y(e,t,n,r){let o=H(),i=Pe(),s=ze+e,a=o[de],l=i.firstCreatePass?RD(s,i,o,t,n,r):i.data[s],u=OD(i,o,l,a,t,e);o[s]=u;let c=va(l);return hr(l,!0),bp(a,u,l),!uD(l)&&Ea()&&La(i,o,u,l),yv()===0&&$t(u,o),vv(),c&&(_p(i,o,l),xp(i,l,o)),r!==null&&Sp(o,l),y}function v(){let e=Se();kh()?Ev():(e=e.parent,hr(e,!1));let t=e;Dv(t)&&Iv(),wv();let n=Pe();return n.firstCreatePass&&(_a(n,e),vh(e)&&n.queries.elementEnd(e)),t.classesWithoutHost!=null&&Lv(t)&&Bf(n,t,H(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&jv(t)&&Bf(n,t,H(),t.stylesWithoutHost,!1),v}function K(e,t,n,r){return y(e,t,n,r),v(),K}var OD=(e,t,n,r,o,i)=>(xa(!0),pp(r,o,Rv()));function ai(){return H()}var $o="en-US";var PD=$o;function FD(e){typeof e=="string"&&(PD=e.toLowerCase().replace(/_/g,"-"))}var LD=(e,t,n)=>{};function Wt(e,t,n,r){let o=H(),i=Pe(),s=Se();return VD(i,o,o[de],s,e,t,r),Wt}function jD(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let a=t[So],l=o[i+2];return a.length>l?a[l]:null}typeof s=="string"&&(i+=2)}return null}function VD(e,t,n,r,o,i,s){let a=va(r),u=e.firstCreatePass&&Pp(e),c=t[ge],d=Op(t),h=!0;if(r.type&3||s){let b=Oe(r,t),V=s?s(b):b,$=d.length,ue=s?rt=>s(Je(rt[r.index])):r.index,ne=null;if(!s&&a&&(ne=jD(e,t,o,r.index)),ne!==null){let rt=ne.__ngLastListenerFn__||ne;rt.__ngNextListenerFn__=i,ne.__ngLastListenerFn__=i,h=!1}else{i=Wf(r,t,c,i),LD(b,o,i);let rt=n.listen(V,o,i);d.push(i,rt),u&&u.push(o,ue,$,$+1)}}else i=Wf(r,t,c,i);let f=r.outputs,g;if(h&&f!==null&&(g=f[o])){let b=g.length;if(b)for(let V=0;V<b;V+=2){let $=g[V],ue=g[V+1],Kt=t[$][ue].subscribe(i),je=d.length;d.push(i,Kt),u&&u.push(o,r.index,je,-(je+1))}}}function zf(e,t,n,r){let o=N(null);try{return qe(6,t,n),n(r)!==!1}catch(i){return Fp(e,i),!1}finally{qe(7,t,n),N(o)}}function Wf(e,t,n,r){return function o(i){if(i===Function)return r;let s=e.componentOffset>-1?It(e.index,t):t;Ha(s,5);let a=zf(t,n,r,i),l=o.__ngNextListenerFn__;for(;l;)a=zf(t,n,l,i)&&a,l=l.__ngNextListenerFn__;return a}}function P(e=1){return Nv(e)}function tm(e,t,n){oD(e,t,n)}function Za(e){let t=H(),n=Pe(),r=Oh();Da(r+1);let o=Ga(n,r);if(e.dirty&&hv(t)===((o.metadata.flags&2)===2)){if(o.matches===null)e.reset([]);else{let i=aD(t,r);e.reset(i,Xv),e.notifyOnChanges()}return!0}return!1}function Qa(){return nD(H(),Oh())}function F(e,t=""){let n=H(),r=Pe(),o=e+ze,i=r.firstCreatePass?ni(r,o,1,t,null):r.data[o],s=BD(r,n,i,t,e);n[o]=s,Ea()&&La(r,n,s,i),hr(i,!1)}var BD=(e,t,n,r,o)=>(xa(!0),yw(t[de],r));function X(e){return te("",e,""),X}function te(e,t,n){let r=H(),o=hD(r,e,t,n);return o!==ft&&Lp(r,Ct(),o),te}function Ka(e,t,n,r,o){let i=H(),s=pD(i,e,t,n,r,o);return s!==ft&&Lp(i,Ct(),s),Ka}var $D=(()=>{let t=class t{constructor(r){this._injector=r,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(r){if(!r.standalone)return null;if(!this.cachedInjectors.has(r)){let o=hh(!1,r.type),i=o.length>0?Ya([o],this._injector,`Standalone[${r.type.name}]`):null;this.cachedInjectors.set(r,i)}return this.cachedInjectors.get(r)}ngOnDestroy(){try{for(let r of this.cachedInjectors.values())r!==null&&r.destroy()}finally{this.cachedInjectors.clear()}}};t.\u0275prov=_({token:t,providedIn:"environment",factory:()=>new t(O(Re))});let e=t;return e})();function q(e){yr("NgStandalone"),e.getStandaloneInjector=t=>t.get($D).getOrCreateStandaloneInjector(e)}var li=(()=>{let t=class t{log(r){console.log(r)}warn(r){console.warn(r)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"platform"});let e=t;return e})();var nm=new S("");function Dr(e){return!!e&&typeof e.then=="function"}function rm(e){return!!e&&typeof e.subscribe=="function"}var om=new S(""),im=(()=>{let t=class t{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o}),this.appInits=m(om,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let r=[];for(let i of this.appInits){let s=i();if(Dr(s))r.push(s);else if(rm(s)){let a=new Promise((l,u)=>{s.subscribe({complete:l,error:u})});r.push(a)}}let o=()=>{this.done=!0,this.resolve()};Promise.all(r).then(()=>{o()}).catch(i=>{this.reject(i)}),r.length===0&&o(),this.initialized=!0}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Ja=new S("");function HD(){Rd(()=>{throw new I(600,!1)})}function UD(e){return e.isBoundToModule}var zD=10;function WD(e,t,n){try{let r=n();return Dr(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}var kn=(()=>{let t=class t{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=m(tp),this.afterRenderEffectManager=m(Zp),this.zonelessEnabled=m(za),this.externalTestViews=new Set,this.beforeRender=new ae,this.afterTick=new ae,this.componentTypes=[],this.components=[],this.isStable=m(Tn).hasPendingTasks.pipe(R(r=>!r)),this._injector=m(Re)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(r,o){let i=r instanceof Po;if(!this._injector.get(im).done){let f=!i&&uh(r),g=!1;throw new I(405,g)}let a;i?a=r:a=this._injector.get(En).resolveComponentFactory(r),this.componentTypes.push(a.componentType);let l=UD(a)?void 0:this._injector.get(bt),u=o||a.selector,c=a.create(Bt.NULL,[],u,l),d=c.location.nativeElement,h=c.injector.get(nm,null);return h?.registerApplication(d),c.onDestroy(()=>{this.detachView(c.hostView),ys(this.components,c),h?.unregisterApplication(d)}),this._loadComponent(c),c}tick(){this._tick(!0)}_tick(r){if(this._runningTick)throw new I(101,!1);let o=N(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(r)}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,N(o),this.afterTick.next()}}detectChangesInAttachedViews(r){let o=null;this._injector.destroyed||(o=this._injector.get(xn,null,{optional:!0}));let i=0,s=this.afterRenderEffectManager;for(;i<zD;){let a=i===0;if(r||!a){this.beforeRender.next(a);for(let{_lView:l,notifyErrorHandler:u}of this._views)GD(l,u,a,this.zonelessEnabled)}else o?.begin?.(),o?.end?.();if(i++,s.executeInternalCallbacks(),!this.allViews.some(({_lView:l})=>tr(l))&&(s.execute(),!this.allViews.some(({_lView:l})=>tr(l))))break}}attachView(r){let o=r;this._views.push(o),o.attachToAppRef(this)}detachView(r){let o=r;ys(this._views,o),o.detachFromAppRef()}_loadComponent(r){this.attachView(r.hostView),this.tick(),this.components.push(r);let o=this._injector.get(Ja,[]);[...this._bootstrapListeners,...o].forEach(i=>i(r))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(r=>r()),this._views.slice().forEach(r=>r.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(r){return this._destroyListeners.push(r),()=>ys(this._destroyListeners,r)}destroy(){if(this._destroyed)throw new I(406,!1);let r=this._injector;r.destroy&&!r.destroyed&&r.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function ys(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function GD(e,t,n,r){if(!n&&!tr(e))return;Hp(e,t,n&&!r?0:1)}var ua=class{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},Xa=(()=>{let t=class t{compileModuleSync(r){return new Xs(r)}compileModuleAsync(r){return Promise.resolve(this.compileModuleSync(r))}compileModuleAndAllComponentsSync(r){let o=this.compileModuleSync(r),i=ch(r),s=hp(i.declarations).reduce((a,l)=>{let u=Pt(l);return u&&a.push(new lr(u)),a},[]);return new ua(o,s)}compileModuleAndAllComponentsAsync(r){return Promise.resolve(this.compileModuleAndAllComponentsSync(r))}clearCache(){}clearCacheFor(r){}getModuleId(r){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var YD=(()=>{let t=class t{constructor(){this.zone=m(J),this.changeDetectionScheduler=m(ar),this.applicationRef=m(kn)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),qD=new S("",{factory:()=>!1});function sm({ngZoneFactory:e,ignoreChangesOutsideZone:t}){return e??=()=>new J(lm()),[{provide:J,useFactory:e},{provide:vn,multi:!0,useFactory:()=>{let n=m(YD,{optional:!0});return()=>n.initialize()}},{provide:vn,multi:!0,useFactory:()=>{let n=m(QD);return()=>{n.initialize()}}},{provide:tp,useFactory:ZD},t===!0?{provide:Gp,useValue:!0}:[]]}function ZD(){let e=m(J),t=m(at);return n=>e.runOutsideAngular(()=>t.handleError(n))}function am(e){let t=e?.ignoreChangesOutsideZone,n=sm({ngZoneFactory:()=>{let r=lm(e);return r.shouldCoalesceEventChangeDetection&&yr("NgZone_CoalesceEvent"),new J(r)},ignoreChangesOutsideZone:t});return Wo([{provide:qD,useValue:!0},{provide:za,useValue:!1},n])}function lm(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var QD=(()=>{let t=class t{constructor(){this.subscription=new ee,this.initialized=!1,this.zone=m(J),this.pendingTasks=m(Tn)}initialize(){if(this.initialized)return;this.initialized=!0;let r=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(r=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{J.assertNotInAngularZone(),queueMicrotask(()=>{r!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(r),r=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{J.assertInAngularZone(),r??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var KD=(()=>{let t=class t{constructor(){this.appRef=m(kn),this.taskService=m(Tn),this.ngZone=m(J),this.zonelessEnabled=m(za),this.disableScheduling=m(Gp,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new ee,this.cancelScheduledCallback=null,this.shouldRefreshViews=!1,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Us||!this.zoneIsDefined)}notify(r){if(!this.zonelessEnabled&&r===5)return;switch(r){case 3:case 2:case 0:case 4:case 5:case 1:{this.shouldRefreshViews=!0;break}case 8:case 7:case 6:case 9:default:}if(!this.shouldScheduleTick())return;let o=this.useMicrotaskScheduler?Rf:Yp;this.pendingRenderTaskId=this.taskService.add(),this.zoneIsDefined?Zone.root.run(()=>{this.cancelScheduledCallback=o(()=>{this.tick(this.shouldRefreshViews)})}):this.cancelScheduledCallback=o(()=>{this.tick(this.shouldRefreshViews)})}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&J.isInAngularZone())}tick(r){if(this.runningTick||this.appRef.destroyed)return;let o=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick(r)},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(o),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Rf(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(o)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.shouldRefreshViews=!1,this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let r=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(r)}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function JD(){return typeof $localize<"u"&&$localize.locale||$o}var el=new S("",{providedIn:"root",factory:()=>m(el,T.Optional|T.SkipSelf)||JD()});var um=new S("");var Io=null;function XD(e=[],t){return Bt.create({name:t,providers:[{provide:Go,useValue:"platform"},{provide:um,useValue:new Set([()=>Io=null])},...e]})}function eI(e=[]){if(Io)return Io;let t=XD(e);return Io=t,HD(),tI(t),t}function tI(e){e.get(ka,null)?.forEach(n=>n())}var Gt=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=nI;let e=t;return e})();function nI(e){return rI(Se(),H(),(e&16)===16)}function rI(e,t,n){if(qo(e)&&!n){let r=It(e.index,t);return new Ht(r,r)}else if(e.type&47){let r=t[Ue];return new Ht(r,t)}return null}function cm(e){try{let{rootComponent:t,appProviders:n,platformProviders:r}=e,o=eI(r),i=[sm({}),{provide:ar,useExisting:KD},...n||[]],a=new Lo({providers:i,parent:o,debugName:"",runEnvironmentInitializers:!1}).injector,l=a.get(J);return l.run(()=>{a.resolveInjectorInitializers();let u=a.get(at,null),c;l.runOutsideAngular(()=>{c=l.onError.subscribe({next:f=>{u.handleError(f)}})});let d=()=>a.destroy(),h=o.get(um);return h.add(d),a.onDestroy(()=>{c.unsubscribe(),h.delete(d)}),WD(u,l,()=>{let f=a.get(im);return f.runInitializers(),f.donePromise.then(()=>{let g=a.get(el,$o);FD(g||$o);let b=a.get(kn);return t!==void 0&&b.bootstrap(t),b})})})}catch(t){return Promise.reject(t)}}function et(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function Ir(e,t=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):t}var pm=null;function Nn(){return pm}function mm(e){pm??=e}var ui=class{};var Fe=new S(""),gm=(()=>{let t=class t{historyGo(r){throw new Error("")}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:()=>m(oI),providedIn:"platform"});let e=t;return e})();var oI=(()=>{let t=class t extends gm{constructor(){super(),this._doc=m(Fe),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Nn().getBaseHref(this._doc)}onPopState(r){let o=Nn().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",r,!1),()=>o.removeEventListener("popstate",r)}onHashChange(r){let o=Nn().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",r,!1),()=>o.removeEventListener("hashchange",r)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(r){this._location.pathname=r}pushState(r,o,i){this._history.pushState(r,o,i)}replaceState(r,o,i){this._history.replaceState(r,o,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(r=0){this._history.go(r)}getState(){return this._history.state}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function ym(e,t){if(e.length==0)return t;if(t.length==0)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,n==2?e+t.substring(1):n==1?e+t:e+"/"+t}function dm(e){let t=e.match(/#|\?|$/),n=t&&t.index||e.length,r=n-(e[n-1]==="/"?1:0);return e.slice(0,r)+e.slice(n)}function Yt(e){return e&&e[0]!=="?"?"?"+e:e}var Rn=(()=>{let t=class t{historyGo(r){throw new Error("")}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:()=>m(vm),providedIn:"root"});let e=t;return e})(),iI=new S(""),vm=(()=>{let t=class t extends Rn{constructor(r,o){super(),this._platformLocation=r,this._removeListenerFns=[],this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??m(Fe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(r){this._removeListenerFns.push(this._platformLocation.onPopState(r),this._platformLocation.onHashChange(r))}getBaseHref(){return this._baseHref}prepareExternalUrl(r){return ym(this._baseHref,r)}path(r=!1){let o=this._platformLocation.pathname+Yt(this._platformLocation.search),i=this._platformLocation.hash;return i&&r?`${o}${i}`:o}pushState(r,o,i,s){let a=this.prepareExternalUrl(i+Yt(s));this._platformLocation.pushState(r,o,a)}replaceState(r,o,i,s){let a=this.prepareExternalUrl(i+Yt(s));this._platformLocation.replaceState(r,o,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(r=0){this._platformLocation.historyGo?.(r)}};t.\u0275fac=function(o){return new(o||t)(O(gm),O(iI,8))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Cr=(()=>{let t=class t{constructor(r){this._subject=new me,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=r;let o=this._locationStrategy.getBaseHref();this._basePath=lI(dm(fm(o))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(r=!1){return this.normalize(this._locationStrategy.path(r))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(r,o=""){return this.path()==this.normalize(r+Yt(o))}normalize(r){return t.stripTrailingSlash(aI(this._basePath,fm(r)))}prepareExternalUrl(r){return r&&r[0]!=="/"&&(r="/"+r),this._locationStrategy.prepareExternalUrl(r)}go(r,o="",i=null){this._locationStrategy.pushState(i,"",r,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(r+Yt(o)),i)}replaceState(r,o="",i=null){this._locationStrategy.replaceState(i,"",r,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(r+Yt(o)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(r=0){this._locationStrategy.historyGo?.(r)}onUrlChange(r){return this._urlChangeListeners.push(r),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{let o=this._urlChangeListeners.indexOf(r);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(r="",o){this._urlChangeListeners.forEach(i=>i(r,o))}subscribe(r,o,i){return this._subject.subscribe({next:r,error:o,complete:i})}};t.normalizeQueryParams=Yt,t.joinWithSlash=ym,t.stripTrailingSlash=dm,t.\u0275fac=function(o){return new(o||t)(O(Rn))},t.\u0275prov=_({token:t,factory:()=>sI(),providedIn:"root"});let e=t;return e})();function sI(){return new Cr(O(Rn))}function aI(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function fm(e){return e.replace(/\/index.html$/,"")}function lI(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}function wm(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var ol="browser",uI="server";function bm(e){return e===ol}function il(e){return e===uI}var ci=class{};var ll=class extends ui{constructor(){super(...arguments),this.supportsDOMEvents=!0}},ul=class e extends ll{static makeCurrent(){mm(new e)}onAndCancel(t,n,r){return t.addEventListener(n,r),()=>{t.removeEventListener(n,r)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=fI();return n==null?null:hI(n)}resetBaseElement(){Er=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return wm(document.cookie,t)}},Er=null;function fI(){return Er=Er||document.querySelector("base"),Er?Er.getAttribute("href"):null}function hI(e){return new URL(e,document.baseURI).pathname}var pI=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac});let e=t;return e})(),cl=new S(""),Em=(()=>{let t=class t{constructor(r,o){this._zone=o,this._eventNameToPlugin=new Map,r.forEach(i=>{i.manager=this}),this._plugins=r.slice().reverse()}addEventListener(r,o,i){return this._findPluginFor(o).addEventListener(r,o,i)}getZone(){return this._zone}_findPluginFor(r){let o=this._eventNameToPlugin.get(r);if(o)return o;if(o=this._plugins.find(s=>s.supports(r)),!o)throw new I(5101,!1);return this._eventNameToPlugin.set(r,o),o}};t.\u0275fac=function(o){return new(o||t)(O(cl),O(J))},t.\u0275prov=_({token:t,factory:t.\u0275fac});let e=t;return e})(),di=class{constructor(t){this._doc=t}},sl="ng-app-id",xm=(()=>{let t=class t{constructor(r,o,i,s={}){this.doc=r,this.appId=o,this.nonce=i,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=il(s),this.resetHostNodes()}addStyles(r){for(let o of r)this.changeUsageCount(o,1)===1&&this.onStyleAdded(o)}removeStyles(r){for(let o of r)this.changeUsageCount(o,-1)<=0&&this.onStyleRemoved(o)}ngOnDestroy(){let r=this.styleNodesInDOM;r&&(r.forEach(o=>o.remove()),r.clear());for(let o of this.getAllStyles())this.onStyleRemoved(o);this.resetHostNodes()}addHost(r){this.hostNodes.add(r);for(let o of this.getAllStyles())this.addStyleToHost(r,o)}removeHost(r){this.hostNodes.delete(r)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(r){for(let o of this.hostNodes)this.addStyleToHost(o,r)}onStyleRemoved(r){let o=this.styleRef;o.get(r)?.elements?.forEach(i=>i.remove()),o.delete(r)}collectServerRenderedStyles(){let r=this.doc.head?.querySelectorAll(`style[${sl}="${this.appId}"]`);if(r?.length){let o=new Map;return r.forEach(i=>{i.textContent!=null&&o.set(i.textContent,i)}),o}return null}changeUsageCount(r,o){let i=this.styleRef;if(i.has(r)){let s=i.get(r);return s.usage+=o,s.usage}return i.set(r,{usage:o,elements:[]}),o}getStyleElement(r,o){let i=this.styleNodesInDOM,s=i?.get(o);if(s?.parentNode===r)return i.delete(o),s.removeAttribute(sl),s;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=o,this.platformIsServer&&a.setAttribute(sl,this.appId),r.appendChild(a),a}}addStyleToHost(r,o){let i=this.getStyleElement(r,o),s=this.styleRef,a=s.get(o)?.elements;a?a.push(i):s.set(o,{elements:[i],usage:1})}resetHostNodes(){let r=this.hostNodes;r.clear(),r.add(this.doc.head)}};t.\u0275fac=function(o){return new(o||t)(O(Fe),O(Aa),O(mr,8),O(xt))},t.\u0275prov=_({token:t,factory:t.\u0275fac});let e=t;return e})(),al={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},fl=/%COMP%/g,_m="%COMP%",mI=`_nghost-${_m}`,gI=`_ngcontent-${_m}`,yI=!0,vI=new S("",{providedIn:"root",factory:()=>yI});function wI(e){return gI.replace(fl,e)}function bI(e){return mI.replace(fl,e)}function Sm(e,t){return t.map(n=>n.replace(fl,e))}var Dm=(()=>{let t=class t{constructor(r,o,i,s,a,l,u,c=null){this.eventManager=r,this.sharedStylesHost=o,this.appId=i,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=l,this.ngZone=u,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=il(l),this.defaultRenderer=new xr(r,a,u,this.platformIsServer)}createRenderer(r,o){if(!r||!o)return this.defaultRenderer;this.platformIsServer&&o.encapsulation===Qe.ShadowDom&&(o=Z(w({},o),{encapsulation:Qe.Emulated}));let i=this.getOrCreateRenderer(r,o);return i instanceof fi?i.applyToHost(r):i instanceof _r&&i.applyStyles(),i}getOrCreateRenderer(r,o){let i=this.rendererByCompId,s=i.get(o.id);if(!s){let a=this.doc,l=this.ngZone,u=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(o.encapsulation){case Qe.Emulated:s=new fi(u,c,o,this.appId,d,a,l,h);break;case Qe.ShadowDom:return new dl(u,c,r,o,a,l,this.nonce,h);default:s=new _r(u,c,o,d,a,l,h);break}i.set(o.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(o){return new(o||t)(O(Em),O(xm),O(Aa),O(vI),O(Fe),O(xt),O(J),O(mr))},t.\u0275prov=_({token:t,factory:t.\u0275fac});let e=t;return e})(),xr=class{constructor(t,n,r,o){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,n){return n?this.doc.createElementNS(al[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Im(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(Im(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new I(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=al[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=al[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(lt.DashCase|lt.Important)?t.style.setProperty(n,r,o&lt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&lt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r){if(typeof t=="string"&&(t=Nn().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${n}`);return this.eventManager.addEventListener(t,n,this.decoratePreventDefault(r))}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(n)):t(n))===!1&&n.preventDefault()}}};function Im(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var dl=class extends xr{constructor(t,n,r,o,i,s,a,l){super(t,i,s,l),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=Sm(o.id,o.styles);for(let c of u){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=c,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},_r=class extends xr{constructor(t,n,r,o,i,s,a,l){super(t,i,s,a),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o,this.styles=l?Sm(l,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},fi=class extends _r{constructor(t,n,r,o,i,s,a,l){let u=o+"-"+r.id;super(t,n,r,i,s,a,l,u),this.contentAttr=wI(u),this.hostAttr=bI(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}},DI=(()=>{let t=class t extends di{constructor(r){super(r)}supports(r){return!0}addEventListener(r,o,i){return r.addEventListener(o,i,!1),()=>this.removeEventListener(r,o,i)}removeEventListener(r,o,i){return r.removeEventListener(o,i)}};t.\u0275fac=function(o){return new(o||t)(O(Fe))},t.\u0275prov=_({token:t,factory:t.\u0275fac});let e=t;return e})(),Cm=["alt","control","meta","shift"],II={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},CI={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},EI=(()=>{let t=class t extends di{constructor(r){super(r)}supports(r){return t.parseEventName(r)!=null}addEventListener(r,o,i){let s=t.parseEventName(o),a=t.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Nn().onAndCancel(r,s.domEventName,a))}static parseEventName(r){let o=r.toLowerCase().split("."),i=o.shift();if(o.length===0||!(i==="keydown"||i==="keyup"))return null;let s=t._normalizeKey(o.pop()),a="",l=o.indexOf("code");if(l>-1&&(o.splice(l,1),a="code."),Cm.forEach(c=>{let d=o.indexOf(c);d>-1&&(o.splice(d,1),a+=c+".")}),a+=s,o.length!=0||s.length===0)return null;let u={};return u.domEventName=i,u.fullKey=a,u}static matchEventFullKeyCode(r,o){let i=II[r.key]||r.key,s="";return o.indexOf("code.")>-1&&(i=r.code,s="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Cm.forEach(a=>{if(a!==i){let l=CI[a];l(r)&&(s+=a+".")}}),s+=i,s===o)}static eventCallback(r,o,i){return s=>{t.matchEventFullKeyCode(s,r)&&i.runGuarded(()=>o(s))}}static _normalizeKey(r){return r==="esc"?"escape":r}};t.\u0275fac=function(o){return new(o||t)(O(Fe))},t.\u0275prov=_({token:t,factory:t.\u0275fac});let e=t;return e})();function Mm(e,t){return cm(w({rootComponent:e},xI(t)))}function xI(e){return{appProviders:[...AI,...e?.providers??[]],platformProviders:TI}}function _I(){ul.makeCurrent()}function SI(){return new at}function MI(){return lp(document),document}var TI=[{provide:xt,useValue:ol},{provide:ka,useValue:_I,multi:!0},{provide:Fe,useFactory:MI,deps:[]}];var AI=[{provide:Go,useValue:"root"},{provide:at,useFactory:SI,deps:[]},{provide:cl,useClass:DI,multi:!0,deps:[Fe,J,xt]},{provide:cl,useClass:EI,multi:!0,deps:[Fe]},Dm,xm,Em,{provide:xn,useExisting:Dm},{provide:ci,useClass:pI,deps:[]},[]];var Tm=(()=>{let t=class t{constructor(r){this._doc=r}getTitle(){return this._doc.title}setTitle(r){this._doc.title=r||""}};t.\u0275fac=function(o){return new(o||t)(O(Fe))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var M="primary",Ur=Symbol("RouteTitle"),yl=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Vn(e){return new yl(e)}function NI(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],a=e[i];if(s[0]===":")o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function RI(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!tt(e[n],t[n]))return!1;return!0}function tt(e,t){let n=e?vl(e):void 0,r=t?vl(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!Lm(e[o],t[o]))return!1;return!0}function vl(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Lm(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function jm(e){return e.length>0?e[e.length-1]:null}function Mt(e){return Xi(e)?e:Dr(e)?oe(Promise.resolve(e)):E(e)}var OI={exact:Bm,subset:$m},Vm={exact:PI,subset:FI,ignored:()=>!0};function Am(e,t,n){return OI[n.paths](e.root,t.root,n.matrixParams)&&Vm[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function PI(e,t){return tt(e,t)}function Bm(e,t,n){if(!Zt(e.segments,t.segments)||!mi(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!Bm(e.children[r],t.children[r],n))return!1;return!0}function FI(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>Lm(e[n],t[n]))}function $m(e,t,n){return Hm(e,t,t.segments,n)}function Hm(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!Zt(o,n)||t.hasChildren()||!mi(o,n,r))}else if(e.segments.length===n.length){if(!Zt(e.segments,n)||!mi(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!$m(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!Zt(e.segments,o)||!mi(e.segments,o,r)||!e.children[M]?!1:Hm(e.children[M],t,i,r)}}function mi(e,t,n){return t.every((r,o)=>Vm[n](e[o].parameters,r.parameters))}var _t=class{constructor(t=new U([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Vn(this.queryParams),this._queryParamMap}toString(){return VI.serialize(this)}},U=class{constructor(t,n){this.segments=t,this.children=n,this.parent=null,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gi(this)}},qt=class{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=Vn(this.parameters),this._parameterMap}toString(){return zm(this)}};function LI(e,t){return Zt(e,t)&&e.every((n,r)=>tt(n.parameters,t[r].parameters))}function Zt(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function jI(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===M&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==M&&(n=n.concat(t(o,r)))}),n}var zl=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:()=>new Rr,providedIn:"root"});let e=t;return e})(),Rr=class{parse(t){let n=new bl(t);return new _t(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${Sr(t.root,!0)}`,r=HI(t.queryParams),o=typeof t.fragment=="string"?`#${BI(t.fragment)}`:"";return`${n}${r}${o}`}},VI=new Rr;function gi(e){return e.segments.map(t=>zm(t)).join("/")}function Sr(e,t){if(!e.hasChildren())return gi(e);if(t){let n=e.children[M]?Sr(e.children[M],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==M&&r.push(`${o}:${Sr(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=jI(e,(r,o)=>o===M?[Sr(e.children[M],!1)]:[`${o}:${Sr(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[M]!=null?`${gi(e)}/${n[0]}`:`${gi(e)}/(${n.join("//")})`}}function Um(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function hi(e){return Um(e).replace(/%3B/gi,";")}function BI(e){return encodeURI(e)}function wl(e){return Um(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function yi(e){return decodeURIComponent(e)}function km(e){return yi(e.replace(/\+/g,"%20"))}function zm(e){return`${wl(e.path)}${$I(e.parameters)}`}function $I(e){return Object.entries(e).map(([t,n])=>`;${wl(t)}=${wl(n)}`).join("")}function HI(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${hi(n)}=${hi(o)}`).join("&"):`${hi(n)}=${hi(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var UI=/^[^\/()?;#]+/;function hl(e){let t=e.match(UI);return t?t[0]:""}var zI=/^[^\/()?;=#]+/;function WI(e){let t=e.match(zI);return t?t[0]:""}var GI=/^[^=?&#]+/;function YI(e){let t=e.match(GI);return t?t[0]:""}var qI=/^[^&#]+/;function ZI(e){let t=e.match(qI);return t?t[0]:""}var bl=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new U([],{}):new U([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[M]=new U(t,n)),r}parseSegment(){let t=hl(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new I(4009,!1);return this.capture(t),new qt(yi(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=WI(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=hl(this.remaining);o&&(r=o,this.capture(r))}t[yi(n)]=yi(r)}parseQueryParam(t){let n=YI(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=ZI(this.remaining);s&&(r=s,this.capture(r))}let o=km(n),i=km(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=hl(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new I(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=M);let s=this.parseChildren();n[i]=Object.keys(s).length===1?s[M]:new U([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new I(4011,!1)}};function Wm(e){return e.segments.length>0?new U([],{[M]:e}):e}function Gm(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=Gm(o);if(r===M&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))t[s]=a;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new U(e.segments,t);return QI(n)}function QI(e){if(e.numberOfChildren===1&&e.children[M]){let t=e.children[M];return new U(e.segments.concat(t.segments),t.children)}return e}function Or(e){return e instanceof _t}function KI(e,t,n=null,r=null){let o=Ym(e);return qm(o,t,n,r)}function Ym(e){let t;function n(i){let s={};for(let l of i.children){let u=n(l);s[l.outlet]=u}let a=new U(i.url,s);return i===e&&(t=a),a}let r=n(e.root),o=Wm(r);return t??o}function qm(e,t,n,r){let o=e;for(;o.parent;)o=o.parent;if(t.length===0)return pl(o,o,o,n,r);let i=JI(t);if(i.toRoot())return pl(o,o,new U([],{}),n,r);let s=XI(i,o,e),a=s.processChildren?Ar(s.segmentGroup,s.index,i.commands):Qm(s.segmentGroup,s.index,i.commands);return pl(o,s.segmentGroup,a,n,r)}function vi(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Pr(e){return typeof e=="object"&&e!=null&&e.outlets}function pl(e,t,n,r,o){let i={};r&&Object.entries(r).forEach(([l,u])=>{i[l]=Array.isArray(u)?u.map(c=>`${c}`):`${u}`});let s;e===t?s=n:s=Zm(e,t,n);let a=Wm(Gm(s));return new _t(a,i,o)}function Zm(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=Zm(i,t,n)}),new U(e.segments,r)}var wi=class{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&vi(r[0]))throw new I(4003,!1);let o=r.find(Pr);if(o&&o!==jm(r))throw new I(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function JI(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new wi(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([l,u])=>{a[l]=typeof u=="string"?u.split("/"):u}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?n=!0:a===".."?t++:a!=""&&o.push(a))}),o):[...o,i]},[]);return new wi(n,t,r)}var Fn=class{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function XI(e,t,n){if(e.isAbsolute)return new Fn(t,!0,0);if(!n)return new Fn(t,!1,NaN);if(n.parent===null)return new Fn(n,!0,0);let r=vi(e.commands[0])?0:1,o=n.segments.length-1+r;return e0(n,o,e.numberOfDoubleDots)}function e0(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new I(4005,!1);o=r.segments.length}return new Fn(r,!1,o-i)}function t0(e){return Pr(e[0])?e[0].outlets:{[M]:e}}function Qm(e,t,n){if(e??=new U([],{}),e.segments.length===0&&e.hasChildren())return Ar(e,t,n);let r=n0(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new U(e.segments.slice(0,r.pathIndex),{});return i.children[M]=new U(e.segments.slice(r.pathIndex),e.children),Ar(i,0,o)}else return r.match&&o.length===0?new U(e.segments,{}):r.match&&!e.hasChildren()?Dl(e,t,n):r.match?Ar(e,0,o):Dl(e,t,n)}function Ar(e,t,n){if(n.length===0)return new U(e.segments,{});{let r=t0(n),o={};if(Object.keys(r).some(i=>i!==M)&&e.children[M]&&e.numberOfChildren===1&&e.children[M].segments.length===0){let i=Ar(e.children[M],t,n);return new U(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=Qm(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new U(e.segments,o)}}function n0(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],a=n[r];if(Pr(a))break;let l=`${a}`,u=r<n.length-1?n[r+1]:null;if(o>0&&l===void 0)break;if(l&&u&&typeof u=="object"&&u.outlets===void 0){if(!Rm(l,u,s))return i;r+=2}else{if(!Rm(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function Dl(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(Pr(i)){let l=r0(i.outlets);return new U(r,l)}if(o===0&&vi(n[0])){let l=e.segments[t];r.push(new qt(l.path,Nm(n[0]))),o++;continue}let s=Pr(i)?i.outlets[M]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&vi(a)?(r.push(new qt(s,Nm(a))),o+=2):(r.push(new qt(s,{})),o++)}return new U(r,{})}function r0(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=Dl(new U([],{}),0,r))}),t}function Nm(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function Rm(e,t,n){return e==n.path&&tt(t,n.parameters)}var kr="imperative",pe=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(pe||{}),Le=class{constructor(t,n){this.id=t,this.url=n}},Fr=class extends Le{constructor(t,n,r="imperative",o=null){super(t,n),this.type=pe.NavigationStart,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},St=class extends Le{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=pe.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Te=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(Te||{}),Il=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Il||{}),ht=class extends Le{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=pe.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Qt=class extends Le{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=pe.NavigationSkipped}},Lr=class extends Le{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=pe.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},bi=class extends Le{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=pe.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cl=class extends Le{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=pe.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},El=class extends Le{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=pe.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},xl=class extends Le{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=pe.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_l=class extends Le{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=pe.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sl=class{constructor(t){this.route=t,this.type=pe.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ml=class{constructor(t){this.route=t,this.type=pe.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Tl=class{constructor(t){this.snapshot=t,this.type=pe.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Al=class{constructor(t){this.snapshot=t,this.type=pe.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},kl=class{constructor(t){this.snapshot=t,this.type=pe.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nl=class{constructor(t){this.snapshot=t,this.type=pe.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var jr=class{},Bn=class{constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};var Rl=class{constructor(t){this.injector=t,this.outlet=null,this.route=null,this.children=new Si(this.injector),this.attachRef=null}},Si=(()=>{let t=class t{constructor(r){this.parentInjector=r,this.contexts=new Map}onChildOutletCreated(r,o){let i=this.getOrCreateContext(r);i.outlet=o,this.contexts.set(r,i)}onChildOutletDestroyed(r){let o=this.getContext(r);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let r=this.contexts;return this.contexts=new Map,r}onOutletReAttached(r){this.contexts=r}getOrCreateContext(r){let o=this.getContext(r);return o||(o=new Rl(this.parentInjector),this.contexts.set(r,o)),o}getContext(r){return this.contexts.get(r)||null}};t.\u0275fac=function(o){return new(o||t)(O(Re))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Di=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=Ol(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=Ol(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=Pl(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return Pl(t,this._root).map(n=>n.value)}};function Ol(e,t){if(e===t.value)return t;for(let n of t.children){let r=Ol(e,n);if(r)return r}return null}function Pl(e,t){if(e===t.value)return[t];for(let n of t.children){let r=Pl(e,n);if(r.length)return r.unshift(t),r}return[]}var Me=class{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Pn(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var Ii=class extends Di{constructor(t,n){super(t),this.snapshot=n,Wl(this,t)}toString(){return this.snapshot.toString()}};function Km(e){let t=o0(e),n=new re([new qt("",{})]),r=new re({}),o=new re({}),i=new re({}),s=new re(""),a=new se(n,r,i,s,o,M,e,t.root);return a.snapshot=t.root,new Ii(new Me(a,[]),t)}function o0(e){let t={},n={},r={},o="",i=new Ln([],t,r,o,n,M,e,null,{});return new Ei("",new Me(i,[]))}var se=class{constructor(t,n,r,o,i,s,a,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(R(u=>u[Ur]))??E(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(R(t=>Vn(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(R(t=>Vn(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ci(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:w(w({},t.params),e.params),data:w(w({},t.data),e.data),resolve:w(w(w(w({},e.data),t.data),o?.data),e._resolvedData)}:r={params:w({},e.params),data:w({},e.data),resolve:w(w({},e.data),e._resolvedData??{})},o&&Xm(o)&&(r.resolve[Ur]=o.title),r}var Ln=class{get title(){return this.data?.[Ur]}constructor(t,n,r,o,i,s,a,l,u){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Vn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Vn(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},Ei=class extends Di{constructor(t,n){super(n),this.url=t,Wl(this,n)}toString(){return Jm(this._root)}};function Wl(e,t){t.value._routerState=e,t.children.forEach(n=>Wl(e,n))}function Jm(e){let t=e.children.length>0?` { ${e.children.map(Jm).join(", ")} } `:"";return`${e.value}${t}`}function ml(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,tt(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),tt(t.params,n.params)||e.paramsSubject.next(n.params),RI(t.url,n.url)||e.urlSubject.next(n.url),tt(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Fl(e,t){let n=tt(e.params,t.params)&&LI(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||Fl(e.parent,t.parent))}function Xm(e){return typeof e.title=="string"||e.title===null}var Gl=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=M,this.activateEvents=new me,this.deactivateEvents=new me,this.attachEvents=new me,this.detachEvents=new me,this.parentContexts=m(Si),this.location=m(An),this.changeDetector=m(Gt),this.inputBinder=m(Yl,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(r){if(r.name){let{firstChange:o,previousValue:i}=r.name;if(o)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(r){return this.parentContexts.getContext(r)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let r=this.parentContexts.getContext(this.name);r?.route&&(r.attachRef?this.attach(r.attachRef,r.route):this.activateWith(r.route,r.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new I(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new I(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new I(4012,!1);this.location.detach();let r=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(r.instance),r}attach(r,o){this.activated=r,this._activatedRoute=o,this.location.insert(r.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(r.instance)}deactivate(){if(this.activated){let r=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(r)}}activateWith(r,o){if(this.isActivated)throw new I(4013,!1);this._activatedRoute=r;let i=this.location,a=r.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,u=new Ll(r,l,i.injector);this.activated=i.createComponent(a,{index:i.length,injector:u,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=zo({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[zt]});let e=t;return e})(),Ll=class e{__ngOutletInjector(t){return new e(this.route,this.childContexts,t)}constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===se?this.route:t===Si?this.childContexts:this.parent.get(t,n)}},Yl=new S("");function i0(e,t,n){let r=Vr(e,t._root,n?n._root:void 0);return new Ii(r,t)}function Vr(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=s0(e,t,n);return new Me(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Vr(e,a)),s}}let r=a0(t.value),o=t.children.map(i=>Vr(e,i));return new Me(r,o)}}function s0(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Vr(e,r,o);return Vr(e,r)})}function a0(e){return new se(new re(e.url),new re(e.params),new re(e.queryParams),new re(e.fragment),new re(e.data),e.outlet,e.component,e)}var Br=class{constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},eg="ngNavigationCancelingError";function xi(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=Or(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=tg(!1,Te.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function tg(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[eg]=!0,n.cancellationCode=t,n}function l0(e){return ng(e)&&Or(e.url)}function ng(e){return!!e&&e[eg]}var u0=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=G({type:t,selectors:[["ng-component"]],standalone:!0,features:[q],decls:1,vars:0,template:function(o,i){o&1&&K(0,"router-outlet")},dependencies:[Gl],encapsulation:2});let e=t;return e})();function c0(e,t){return e.providers&&!e._injector&&(e._injector=Ya(e.providers,t,`Route: ${e.path}`)),e._injector??t}function ql(e){let t=e.children&&e.children.map(ql),n=t?Z(w({},e),{children:t}):w({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==M&&(n.component=u0),n}function Ge(e){return e.outlet||M}function d0(e,t){let n=e.filter(r=>Ge(r)===t);return n.push(...e.filter(r=>Ge(r)!==t)),n}function zr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var f0=(e,t,n,r)=>R(o=>(new jl(t,o.targetRouterState,o.currentRouterState,n,r).activate(e),o)),jl=class{constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),ml(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=Pn(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Pn(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Pn(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=Pn(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new Nl(i.value.snapshot))}),t.children.length&&this.forwardEvent(new Al(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(ml(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let a=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),ml(a.route.value),this.activateChildRoutes(t,null,s.children)}else{let a=zr(o.snapshot);s.attachRef=null,s.route=o,s.injector=a??s.injector,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}}else this.activateChildRoutes(t,null,r)}},_i=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},jn=class{constructor(t,n){this.component=t,this.route=n}};function h0(e,t,n){let r=e._root,o=t?t._root:null;return Mr(r,o,n,[r.value])}function p0(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function Hn(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!Zf(e)?e:t.get(e):r}function Mr(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Pn(t);return e.children.forEach(s=>{m0(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>Nr(a,n.getContext(s),o)),o}function m0(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let l=g0(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new _i(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Mr(e,t,a?a.children:null,r,o):Mr(e,t,n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new jn(a.outlet.component,s))}else s&&Nr(t,a,o),o.canActivateChecks.push(new _i(r)),i.component?Mr(e,null,a?a.children:null,r,o):Mr(e,null,n,r,o);return o}function g0(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!Zt(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Zt(e.url,t.url)||!tt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Fl(e,t)||!tt(e.queryParams,t.queryParams);case"paramsChange":default:return!Fl(e,t)}}function Nr(e,t,n){let r=Pn(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?Nr(s,t.children.getContext(i),n):Nr(s,null,n):Nr(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new jn(t.outlet.component,o)):n.canDeactivateChecks.push(new jn(null,o)):n.canDeactivateChecks.push(new jn(null,o))}function Wr(e){return typeof e=="function"}function y0(e){return typeof e=="boolean"}function v0(e){return e&&Wr(e.canLoad)}function w0(e){return e&&Wr(e.canActivate)}function b0(e){return e&&Wr(e.canActivateChild)}function D0(e){return e&&Wr(e.canDeactivate)}function I0(e){return e&&Wr(e.canMatch)}function rg(e){return e instanceof ot||e?.name==="EmptyError"}var pi=Symbol("INITIAL_VALUE");function $n(){return _e(e=>co(e.map(t=>t.pipe(it(1),os(pi)))).pipe(R(t=>{for(let n of t)if(n!==!0){if(n===pi)return pi;if(n===!1||C0(n))return n}return!0}),Be(t=>t!==pi),it(1)))}function C0(e){return Or(e)||e instanceof Br}function E0(e,t){return ie(n=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?E(Z(w({},n),{guardsResult:!0})):x0(s,r,o,e).pipe(ie(a=>a&&y0(a)?_0(r,i,e,t):E(a)),R(a=>Z(w({},n),{guardsResult:a})))})}function x0(e,t,n,r){return oe(e).pipe(ie(o=>k0(o.component,o.route,n,t,r)),Ye(o=>o!==!0,!0))}function _0(e,t,n,r){return oe(t).pipe(un(o=>ln(M0(o.route.parent,r),S0(o.route,r),A0(e,o.path,n),T0(e,o.route,n))),Ye(o=>o!==!0,!0))}function S0(e,t){return e!==null&&t&&t(new kl(e)),E(!0)}function M0(e,t){return e!==null&&t&&t(new Tl(e)),E(!0)}function T0(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return E(!0);let o=r.map(i=>fo(()=>{let s=zr(t)??n,a=Hn(i,s),l=w0(a)?a.canActivate(t,e):ut(s,()=>a(t,e));return Mt(l).pipe(Ye())}));return E(o).pipe($n())}function A0(e,t,n){let r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>p0(s)).filter(s=>s!==null).map(s=>fo(()=>{let a=s.guards.map(l=>{let u=zr(s.node)??n,c=Hn(l,u),d=b0(c)?c.canActivateChild(r,e):ut(u,()=>c(r,e));return Mt(d).pipe(Ye())});return E(a).pipe($n())}));return E(i).pipe($n())}function k0(e,t,n,r,o){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return E(!0);let s=i.map(a=>{let l=zr(t)??o,u=Hn(a,l),c=D0(u)?u.canDeactivate(e,t,n,r):ut(l,()=>u(e,t,n,r));return Mt(c).pipe(Ye())});return E(s).pipe($n())}function N0(e,t,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return E(!0);let i=o.map(s=>{let a=Hn(s,e),l=v0(a)?a.canLoad(t,n):ut(e,()=>a(t,n));return Mt(l)});return E(i).pipe($n(),og(r))}function og(e){return Zi(ce(t=>{if(typeof t!="boolean")throw xi(e,t)}),R(t=>t===!0))}function R0(e,t,n,r){let o=t.canMatch;if(!o||o.length===0)return E(!0);let i=o.map(s=>{let a=Hn(s,e),l=I0(a)?a.canMatch(t,n):ut(e,()=>a(t,n));return Mt(l)});return E(i).pipe($n(),og(r))}var $r=class{constructor(t){this.segmentGroup=t||null}},Hr=class extends Error{constructor(t){super(),this.urlTree=t}};function On(e){return an(new $r(e))}function O0(e){return an(new I(4e3,!1))}function P0(e){return an(tg(!1,Te.GuardRejected))}var Vl=class{constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return E(r);if(o.numberOfChildren>1||!o.children[M])return O0(`${t.redirectTo}`);o=o.children[M]}}applyRedirectCommands(t,n,r,o,i){if(typeof n!="string"){let a=n,{queryParams:l,fragment:u,routeConfig:c,url:d,outlet:h,params:f,data:g,title:b}=o,V=ut(i,()=>a({params:f,data:g,queryParams:l,fragment:u,routeConfig:c,url:d,outlet:h,title:b}));if(V instanceof _t)throw new Hr(V);n=V}let s=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r);if(n[0]==="/")throw new Hr(s);return s}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new _t(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);r[o]=n[a]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(t,l,r,o)}),new U(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new I(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}},Bl={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function F0(e,t,n,r,o){let i=Zl(e,t,n);return i.matched?(r=c0(t,r),R0(r,t,n,o).pipe(R(s=>s===!0?i:w({},Bl)))):E(i)}function Zl(e,t,n){if(t.path==="**")return L0(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?w({},Bl):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||NI)(n,e,t);if(!o)return w({},Bl);let i={};Object.entries(o.posParams??{}).forEach(([a,l])=>{i[a]=l.path});let s=o.consumed.length>0?w(w({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function L0(e){return{matched:!0,parameters:e.length>0?jm(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Om(e,t,n,r){return n.length>0&&B0(e,n,r)?{segmentGroup:new U(t,V0(r,new U(n,e.children))),slicedSegments:[]}:n.length===0&&$0(e,n,r)?{segmentGroup:new U(e.segments,j0(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new U(e.segments,e.children),slicedSegments:n}}function j0(e,t,n,r){let o={};for(let i of n)if(Mi(e,t,i)&&!r[Ge(i)]){let s=new U([],{});o[Ge(i)]=s}return w(w({},r),o)}function V0(e,t){let n={};n[M]=t;for(let r of e)if(r.path===""&&Ge(r)!==M){let o=new U([],{});n[Ge(r)]=o}return n}function B0(e,t,n){return n.some(r=>Mi(e,t,r)&&Ge(r)!==M)}function $0(e,t,n){return n.some(r=>Mi(e,t,r))}function Mi(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function H0(e,t,n,r){return Ge(e)!==r&&(r===M||!Mi(t,n,e))?!1:Zl(t,e,n).matched}function U0(e,t,n){return t.length===0&&!e.children[n]}var $l=class{};function z0(e,t,n,r,o,i,s="emptyOnly"){return new Hl(e,t,n,r,o,s,i).recognize()}var W0=31,Hl=class{constructor(t,n,r,o,i,s,a){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Vl(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new I(4002,`'${t.segmentGroup}'`)}recognize(){let t=Om(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(R(({children:n,rootSnapshot:r})=>{let o=new Me(r,n),i=new Ei("",o),s=KI(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(t){let n=new Ln([],Object.freeze({}),Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,M,n).pipe(R(r=>({children:r,rootSnapshot:n})),mt(r=>{if(r instanceof Hr)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof $r?this.noMatchError(r):r}))}processSegmentGroup(t,n,r,o,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r,i):this.processSegment(t,n,r,r.segments,o,!0,i).pipe(R(s=>s instanceof Me?[s]:[]))}processChildren(t,n,r,o){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return oe(i).pipe(un(s=>{let a=r.children[s],l=d0(n,s);return this.processSegmentGroup(t,l,a,s,o)}),rs((s,a)=>(s.push(...a),s)),gt(null),ns(),ie(s=>{if(s===null)return On(r);let a=ig(s);return G0(a),E(a)}))}processSegment(t,n,r,o,i,s,a){return oe(n).pipe(un(l=>this.processSegmentAgainstRoute(l._injector??t,n,l,r,o,i,s,a).pipe(mt(u=>{if(u instanceof $r)return E(null);throw u}))),Ye(l=>!!l),mt(l=>{if(rg(l))return U0(r,o,i)?E(new $l):On(r);throw l}))}processSegmentAgainstRoute(t,n,r,o,i,s,a,l){return H0(r,o,i,s)?r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,o,r,i,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s,l):On(o):On(o)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s,a){let{matched:l,parameters:u,consumedSegments:c,positionalParamSegments:d,remainingSegments:h}=Zl(n,o,i);if(!l)return On(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>W0&&(this.allowRedirects=!1));let f=new Ln(i,u,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Pm(o),Ge(o),o.component??o._loadedComponent??null,o,Fm(o)),g=Ci(f,a,this.paramsInheritanceStrategy);f.params=Object.freeze(g.params),f.data=Object.freeze(g.data);let b=this.applyRedirects.applyRedirectCommands(c,o.redirectTo,d,f,t);return this.applyRedirects.lineralizeSegments(o,b).pipe(ie(V=>this.processSegment(t,r,n,V.concat(h),s,!1,a)))}matchSegmentAgainstRoute(t,n,r,o,i,s){let a=F0(n,r,o,t,this.urlSerializer);return r.path==="**"&&(n.children={}),a.pipe(_e(l=>l.matched?(t=r._injector??t,this.getChildConfig(t,r,o).pipe(_e(({routes:u})=>{let c=r._loadedInjector??t,{parameters:d,consumedSegments:h,remainingSegments:f}=l,g=new Ln(h,d,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Pm(r),Ge(r),r.component??r._loadedComponent??null,r,Fm(r)),b=Ci(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(b.params),g.data=Object.freeze(b.data);let{segmentGroup:V,slicedSegments:$}=Om(n,h,f,u);if($.length===0&&V.hasChildren())return this.processChildren(c,u,V,g).pipe(R(ne=>new Me(g,ne)));if(u.length===0&&$.length===0)return E(new Me(g,[]));let ue=Ge(r)===i;return this.processSegment(c,u,V,$,ue?M:i,!0,g).pipe(R(ne=>new Me(g,ne instanceof Me?[ne]:[])))}))):On(n)))}getChildConfig(t,n,r){return n.children?E({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?E({routes:n._loadedRoutes,injector:n._loadedInjector}):N0(t,n,r,this.urlSerializer).pipe(ie(o=>o?this.configLoader.loadChildren(t,n).pipe(ce(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):P0(n))):E({routes:[],injector:t})}};function G0(e){e.sort((t,n)=>t.value.outlet===M?-1:n.value.outlet===M?1:t.value.outlet.localeCompare(n.value.outlet))}function Y0(e){let t=e.value.routeConfig;return t&&t.path===""}function ig(e){let t=[],n=new Set;for(let r of e){if(!Y0(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=ig(r.children);t.push(new Me(r.value,o))}return t.filter(r=>!n.has(r))}function Pm(e){return e.data||{}}function Fm(e){return e.resolve||{}}function q0(e,t,n,r,o,i){return ie(s=>z0(e,t,n,r,s.extractedUrl,o,i).pipe(R(({state:a,tree:l})=>Z(w({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function Z0(e,t){return ie(n=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return E(n);let i=new Set(o.map(l=>l.route)),s=new Set;for(let l of i)if(!s.has(l))for(let u of sg(l))s.add(u);let a=0;return oe(s).pipe(un(l=>i.has(l)?Q0(l,r,e,t):(l.data=Ci(l,l.parent,e).resolve,E(void 0))),ce(()=>a++),cn(1),ie(l=>a===s.size?E(n):xe))})}function sg(e){let t=e.children.map(n=>sg(n)).flat();return[e,...t]}function Q0(e,t,n,r){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!Xm(o)&&(i[Ur]=o.title),K0(i,e,t,r).pipe(R(s=>(e._resolvedData=s,e.data=Ci(e,e.parent,n).resolve,null)))}function K0(e,t,n,r){let o=vl(e);if(o.length===0)return E({});let i={};return oe(o).pipe(ie(s=>J0(e[s],t,n,r).pipe(Ye(),ce(a=>{if(a instanceof Br)throw xi(new Rr,a);i[s]=a}))),cn(1),ts(i),mt(s=>rg(s)?xe:an(s)))}function J0(e,t,n,r){let o=zr(t)??r,i=Hn(e,o),s=i.resolve?i.resolve(t,n):ut(o,()=>i(t,n));return Mt(s)}function gl(e){return _e(t=>{let n=e(t);return n?oe(n).pipe(R(()=>t)):E(t)})}var ag=(()=>{let t=class t{buildTitle(r){let o,i=r.root;for(;i!==void 0;)o=this.getResolvedTitleForRoute(i)??o,i=i.children.find(s=>s.outlet===M);return o}getResolvedTitleForRoute(r){return r.data[Ur]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:()=>m(X0),providedIn:"root"});let e=t;return e})(),X0=(()=>{let t=class t extends ag{constructor(r){super(),this.title=r}updateTitle(r){let o=this.buildTitle(r);o!==void 0&&this.title.setTitle(o)}};t.\u0275fac=function(o){return new(o||t)(O(Tm))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Ql=new S("",{providedIn:"root",factory:()=>({})}),Kl=new S(""),eC=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=m(Xa)}loadComponent(r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return E(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let o=Mt(r.loadComponent()).pipe(R(lg),ce(s=>{this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s}),Gn(()=>{this.componentLoaders.delete(r)})),i=new sn(o,()=>new ae).pipe(on());return this.componentLoaders.set(r,i),i}loadChildren(r,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return E({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let s=tC(o,this.compiler,r,this.onLoadEndListener).pipe(Gn(()=>{this.childrenLoaders.delete(o)})),a=new sn(s,()=>new ae).pipe(on());return this.childrenLoaders.set(o,a),a}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function tC(e,t,n,r){return Mt(e.loadChildren()).pipe(R(lg),ie(o=>o instanceof ur||Array.isArray(o)?E(o):oe(t.compileModuleAsync(o))),R(o=>{r&&r(e);let i,s,a=!1;return Array.isArray(o)?(s=o,a=!0):(i=o.create(n).injector,s=i.get(Kl,[],{optional:!0,self:!0}).flat()),{routes:s.map(ql),injector:i}}))}function nC(e){return e&&typeof e=="object"&&"default"in e}function lg(e){return nC(e)?e.default:e}var Jl=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:()=>m(rC),providedIn:"root"});let e=t;return e})(),rC=(()=>{let t=class t{shouldProcessUrl(r){return!0}extract(r){return r}merge(r,o){return r}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),oC=new S("");var iC=new S(""),sC=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new ae,this.transitionAbortSubject=new ae,this.configLoader=m(eC),this.environmentInjector=m(Re),this.urlSerializer=m(zl),this.rootContexts=m(Si),this.location=m(Cr),this.inputBindingEnabled=m(Yl,{optional:!0})!==null,this.titleStrategy=m(ag),this.options=m(Ql,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=m(Jl),this.createViewTransition=m(oC,{optional:!0}),this.navigationErrorHandler=m(iC,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>E(void 0),this.rootComponentType=null;let r=i=>this.events.next(new Sl(i)),o=i=>this.events.next(new Ml(i));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=r}complete(){this.transitions?.complete()}handleNavigationRequest(r){let o=++this.navigationId;this.transitions?.next(Z(w(w({},this.transitions.value),r),{id:o}))}setupNavigations(r,o,i){return this.transitions=new re({id:0,currentUrlTree:o,currentRawUrl:o,extractedUrl:this.urlHandlingStrategy.extract(o),urlAfterRedirects:this.urlHandlingStrategy.extract(o),rawUrl:o,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:kr,restoredState:null,currentSnapshot:i.snapshot,targetSnapshot:null,currentRouterState:i,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Be(s=>s.id!==0),R(s=>Z(w({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),_e(s=>{let a=!1,l=!1;return E(s).pipe(_e(u=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Te.SupersededByNewNavigation),xe;this.currentTransition=s,this.currentNavigation={id:u.id,initialUrl:u.rawUrl,extractedUrl:u.extractedUrl,trigger:u.source,extras:u.extras,previousNavigation:this.lastSuccessfulNavigation?Z(w({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!r.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=u.extras.onSameUrlNavigation??r.onSameUrlNavigation;if(!c&&d!=="reload"){let h="";return this.events.next(new Qt(u.id,this.urlSerializer.serialize(u.rawUrl),h,Il.IgnoredSameUrlNavigation)),u.resolve(!1),xe}if(this.urlHandlingStrategy.shouldProcessUrl(u.rawUrl))return E(u).pipe(_e(h=>{let f=this.transitions?.getValue();return this.events.next(new Fr(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),f!==this.transitions?.getValue()?xe:Promise.resolve(h)}),q0(this.environmentInjector,this.configLoader,this.rootComponentType,r.config,this.urlSerializer,this.paramsInheritanceStrategy),ce(h=>{s.targetSnapshot=h.targetSnapshot,s.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=Z(w({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let f=new bi(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(u.currentRawUrl)){let{id:h,extractedUrl:f,source:g,restoredState:b,extras:V}=u,$=new Fr(h,this.urlSerializer.serialize(f),g,b);this.events.next($);let ue=Km(this.rootComponentType).snapshot;return this.currentTransition=s=Z(w({},u),{targetSnapshot:ue,urlAfterRedirects:f,extras:Z(w({},V),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,E(s)}else{let h="";return this.events.next(new Qt(u.id,this.urlSerializer.serialize(u.extractedUrl),h,Il.IgnoredByUrlHandlingStrategy)),u.resolve(!1),xe}}),ce(u=>{let c=new Cl(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(c)}),R(u=>(this.currentTransition=s=Z(w({},u),{guards:h0(u.targetSnapshot,u.currentSnapshot,this.rootContexts)}),s)),E0(this.environmentInjector,u=>this.events.next(u)),ce(u=>{if(s.guardsResult=u.guardsResult,u.guardsResult&&typeof u.guardsResult!="boolean")throw xi(this.urlSerializer,u.guardsResult);let c=new El(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot,!!u.guardsResult);this.events.next(c)}),Be(u=>u.guardsResult?!0:(this.cancelNavigationTransition(u,"",Te.GuardRejected),!1)),gl(u=>{if(u.guards.canActivateChecks.length)return E(u).pipe(ce(c=>{let d=new xl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}),_e(c=>{let d=!1;return E(c).pipe(Z0(this.paramsInheritanceStrategy,this.environmentInjector),ce({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(c,"",Te.NoDataFromResolver)}}))}),ce(c=>{let d=new _l(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}))}),gl(u=>{let c=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(ce(f=>{d.component=f}),R(()=>{})));for(let f of d.children)h.push(...c(f));return h};return co(c(u.targetSnapshot.root)).pipe(gt(null),it(1))}),gl(()=>this.afterPreactivation()),_e(()=>{let{currentSnapshot:u,targetSnapshot:c}=s,d=this.createViewTransition?.(this.environmentInjector,u.root,c.root);return d?oe(d).pipe(R(()=>s)):E(s)}),R(u=>{let c=i0(r.routeReuseStrategy,u.targetSnapshot,u.currentRouterState);return this.currentTransition=s=Z(w({},u),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,s}),ce(()=>{this.events.next(new jr)}),f0(this.rootContexts,r.routeReuseStrategy,u=>this.events.next(u),this.inputBindingEnabled),it(1),ce({next:u=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new St(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects))),this.titleStrategy?.updateTitle(u.targetRouterState.snapshot),u.resolve(!0)},complete:()=>{a=!0}}),Yn(this.transitionAbortSubject.pipe(ce(u=>{throw u}))),Gn(()=>{!a&&!l&&this.cancelNavigationTransition(s,"",Te.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),mt(u=>{if(l=!0,ng(u))this.events.next(new ht(s.id,this.urlSerializer.serialize(s.extractedUrl),u.message,u.cancellationCode)),l0(u)?this.events.next(new Bn(u.url,u.navigationBehaviorOptions)):s.resolve(!1);else{let c=new Lr(s.id,this.urlSerializer.serialize(s.extractedUrl),u,s.targetSnapshot??void 0);try{let d=ut(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Br){let{message:h,cancellationCode:f}=xi(this.urlSerializer,d);this.events.next(new ht(s.id,this.urlSerializer.serialize(s.extractedUrl),h,f)),this.events.next(new Bn(d.redirectTo,d.navigationBehaviorOptions))}else{this.events.next(c);let h=r.errorHandler(u);s.resolve(!!h)}}catch(d){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(d)}}return xe}))}))}cancelNavigationTransition(r,o,i){let s=new ht(r.id,this.urlSerializer.serialize(r.extractedUrl),o,i);this.events.next(s),r.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function aC(e){return e!==kr}var lC=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:()=>m(uC),providedIn:"root"});let e=t;return e})(),Ul=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},uC=(()=>{let t=class t extends Ul{};t.\u0275fac=(()=>{let r;return function(i){return(r||(r=Ma(t)))(i||t)}})(),t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),ug=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:()=>m(cC),providedIn:"root"});let e=t;return e})(),cC=(()=>{let t=class t extends ug{constructor(){super(...arguments),this.location=m(Cr),this.urlSerializer=m(zl),this.options=m(Ql,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=m(Jl),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new _t,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Km(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(r){return this.location.subscribe(o=>{o.type==="popstate"&&r(o.url,o.state)})}handleRouterEvent(r,o){if(r instanceof Fr)this.stateMemento=this.createStateMemento();else if(r instanceof Qt)this.rawUrlTree=o.initialUrl;else if(r instanceof bi){if(this.urlUpdateStrategy==="eager"&&!o.extras.skipLocationChange){let i=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl);this.setBrowserUrl(i,o)}}else r instanceof jr?(this.currentUrlTree=o.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl),this.routerState=o.targetRouterState,this.urlUpdateStrategy==="deferred"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,o))):r instanceof ht&&(r.code===Te.GuardRejected||r.code===Te.NoDataFromResolver)?this.restoreHistory(o):r instanceof Lr?this.restoreHistory(o,!0):r instanceof St&&(this.lastSuccessfulId=r.id,this.currentPageId=this.browserPageId)}setBrowserUrl(r,o){let i=this.urlSerializer.serialize(r);if(this.location.isCurrentPathEqualTo(i)||o.extras.replaceUrl){let s=this.browserPageId,a=w(w({},o.extras.state),this.generateNgRouterState(o.id,s));this.location.replaceState(i,"",a)}else{let s=w(w({},o.extras.state),this.generateNgRouterState(o.id,this.browserPageId+1));this.location.go(i,"",s)}}restoreHistory(r,o=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,s=this.currentPageId-i;s!==0?this.location.historyGo(s):this.currentUrlTree===r.finalUrl&&s===0&&(this.resetState(r),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetState(r),this.resetUrlToCurrentUrlTree())}resetState(r){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,r.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(r,o){return this.canceledNavigationResolution==="computed"?{navigationId:r,\u0275routerPageId:o}:{navigationId:r}}};t.\u0275fac=(()=>{let r;return function(i){return(r||(r=Ma(t)))(i||t)}})(),t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Tr=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(Tr||{});function dC(e,t){e.events.pipe(Be(n=>n instanceof St||n instanceof ht||n instanceof Lr||n instanceof Qt),R(n=>n instanceof St||n instanceof Qt?Tr.COMPLETE:(n instanceof ht?n.code===Te.Redirect||n.code===Te.SupersededByNewNavigation:!1)?Tr.REDIRECTING:Tr.FAILED),Be(n=>n!==Tr.REDIRECTING),it(1)).subscribe(()=>{t()})}function fC(e){throw e}var hC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},pC={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Xl=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=m(li),this.stateManager=m(ug),this.options=m(Ql,{optional:!0})||{},this.pendingTasks=m(Tn),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=m(sC),this.urlSerializer=m(zl),this.location=m(Cr),this.urlHandlingStrategy=m(Jl),this._events=new ae,this.errorHandler=this.options.errorHandler||fC,this.navigated=!1,this.routeReuseStrategy=m(lC),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=m(Kl,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!m(Yl,{optional:!0}),this.eventsSubscription=new ee,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:r=>{this.console.warn(r)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let r=this.navigationTransitions.events.subscribe(o=>{try{let i=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(i!==null&&s!==null){if(this.stateManager.handleRouterEvent(o,s),o instanceof ht&&o.code!==Te.Redirect&&o.code!==Te.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof St)this.navigated=!0;else if(o instanceof Bn){let a=o.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(o.url,i.currentRawUrl),u=w({info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||aC(i.source)},a);this.scheduleNavigation(l,kr,null,u,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}gC(o)&&this._events.next(o)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(r)}resetRootComponentType(r){this.routerState.root.component=r,this.navigationTransitions.rootComponentType=r}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),kr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((r,o)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(r,"popstate",o)},0)})}navigateToSyncWithBrowser(r,o,i){let s={replaceUrl:!0},a=i?.navigationId?i:null;if(i){let u=w({},i);delete u.navigationId,delete u.\u0275routerPageId,Object.keys(u).length!==0&&(s.state=u)}let l=this.parseUrl(r);this.scheduleNavigation(l,o,a,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(r){this.config=r.map(ql),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(r,o={}){let{relativeTo:i,queryParams:s,fragment:a,queryParamsHandling:l,preserveFragment:u}=o,c=u?this.currentUrlTree.fragment:a,d=null;switch(l){case"merge":d=w(w({},this.currentUrlTree.queryParams),s);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=s||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let f=i?i.snapshot:this.routerState.snapshot.root;h=Ym(f)}catch{(typeof r[0]!="string"||r[0][0]!=="/")&&(r=[]),h=this.currentUrlTree.root}return qm(h,r,d,c??null)}navigateByUrl(r,o={skipLocationChange:!1}){let i=Or(r)?r:this.parseUrl(r),s=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(s,kr,null,o)}navigate(r,o={skipLocationChange:!1}){return mC(r),this.navigateByUrl(this.createUrlTree(r,o),o)}serializeUrl(r){return this.urlSerializer.serialize(r)}parseUrl(r){try{return this.urlSerializer.parse(r)}catch{return this.urlSerializer.parse("/")}}isActive(r,o){let i;if(o===!0?i=w({},hC):o===!1?i=w({},pC):i=o,Or(r))return Am(this.currentUrlTree,r,i);let s=this.parseUrl(r);return Am(this.currentUrlTree,s,i)}removeEmptyProps(r){return Object.entries(r).reduce((o,[i,s])=>(s!=null&&(o[i]=s),o),{})}scheduleNavigation(r,o,i,s,a){if(this.disposed)return Promise.resolve(!1);let l,u,c;a?(l=a.resolve,u=a.reject,c=a.promise):c=new Promise((h,f)=>{l=h,u=f});let d=this.pendingTasks.add();return dC(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:r,extras:s,resolve:l,reject:u,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(h=>Promise.reject(h))}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function mC(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new I(4008,!1)}function gC(e){return!(e instanceof jr)&&!(e instanceof Bn)}var we=(()=>{let t=class t{constructor(r,o,i,s,a,l){this.router=r,this.route=o,this.tabIndexAttribute=i,this.renderer=s,this.el=a,this.locationStrategy=l,this.href=null,this.commands=null,this.onChanges=new ae,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let u=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area",this.isAnchorElement?this.subscription=r.events.subscribe(c=>{c instanceof St&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(r){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",r)}ngOnChanges(r){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(r){r!=null?(this.commands=Array.isArray(r)?r:[r],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(r,o,i,s,a){let l=this.urlTree;if(l===null||this.isAnchorElement&&(r!==0||o||i||s||a||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(l,u),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let r=this.urlTree;this.href=r!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(r)):null;let o=this.href===null?null:dp(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",o)}applyAttributeValue(r,o){let i=this.renderer,s=this.el.nativeElement;o!==null?i.setAttribute(s,r,o):i.removeAttribute(s,r)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};t.\u0275fac=function(o){return new(o||t)(Q(Xl),Q(se),Ta("tabindex"),Q(si),Q(Et),Q(Rn))},t.\u0275dir=zo({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(o,i){o&1&&Wt("click",function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),o&2&&wr("target",i.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",et],skipLocationChange:[2,"skipLocationChange","skipLocationChange",et],replaceUrl:[2,"replaceUrl","replaceUrl",et],routerLink:"routerLink"},standalone:!0,features:[vr,zt]});let e=t;return e})();var yC=new S("");function cg(e,...t){return Wo([{provide:Kl,multi:!0,useValue:e},[],{provide:se,useFactory:vC,deps:[Xl]},{provide:Ja,multi:!0,useFactory:wC},t.map(n=>n.\u0275providers)])}function vC(e){return e.routerState.root}function wC(){let e=m(Bt);return t=>{let n=e.get(kn);if(t!==n.components[0])return;let r=e.get(Xl),o=e.get(bC);e.get(DC)===1&&r.initialNavigation(),e.get(IC,null,T.Optional)?.setUpPreloading(),e.get(yC,null,T.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var bC=new S("",{factory:()=>new ae}),DC=new S("",{providedIn:"root",factory:()=>1});var IC=new S("");var CC={id:"tardigrade-inferno",name:"Tardigrade Inferno",year:2016,folder:"/artist/tardigrade_inferno/albums/2016_ti.jpg",songs:["lovely-host","a-grain-of-sand","underwater-valentine"],info:`
  `},eu=CC;var EC={id:"execution-is-fun",name:"Execution is Fun!",year:2017,folder:"/artist/tardigrade_inferno/albums/2017_eif.jpg",songs:["execution-is-fun"],info:`
  `},tu=EC;var xC={id:"mastermind",name:"Mastermind",year:2019,folder:"/artist/tardigrade_inferno/albums/2019_m.jpg",songs:["all-tardigrades-go-to-hell","hypnosis","dreadful-song","alabama-song",{name:"Precourse"},"clown-therapy","all-pigs-are-the-same","church-asylum","marmalade","im-coming-for-your-soul","mastermind","we-are-number-one"],info:`
  `},nu=xC;var _C={id:"how-nightmares-die",name:"How Nightmares Die",year:2020,folder:"/artist/tardigrade_inferno/albums/2020_hnd.jpg",songs:["how-nightmares-die"],info:`
A story about an inventor, battling people's nightmares with bullets and steampunk machinery. It was supposed to be a small experiment that we wanted to make while on lockdown, but the video slowly outgrew the scope of the initial project. So it is a small song with great ambitions. Music is still dark and with a heart of metal, but with electricity in its veins and with a gun, loaded with old drum samples.
`},ru=_C;var SC={id:"the-worst-of-me",name:"The Worst of Me",year:2021,folder:"/artist/tardigrade_inferno/albums/2021_twom.jpg",songs:["the-worst-of-me","write-with-blood"],info:`
  `},ou=SC;var MC={id:"spooky-scary-skeletons",name:"Spooky Scary Skeletons",year:2021,folder:"/artist/tardigrade_inferno/albums/2021_sss.jpg",songs:["spooky-scary-skeletons"],info:`
Andrew Gold cover
  `},iu=MC;var TC={id:"arrival-of-a-train-single",name:"Arrival of a Train (single)",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_aoat.jpg",songs:["arrival-of-a-train"],info:`
  `},su=TC;var AC={id:"fire-plague-and-locust",name:"Fire, Plague and Locust",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_fpal.jpg",songs:["fire-plague-and-locust"],info:`
  `},au=AC;var kC={id:"arrival-of-a-train",name:"Arrival of a Train",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_mini.jpg",songs:["arrival-of-a-train","fire-plague-and-locust","engine-of-skin","evoke"],info:`
  `},lu=kC;var NC={id:"ringmaster-has-to-die",name:"Ringmaster has to Die",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_rhtd.jpg",songs:["ringmaster-has-to-die"],info:`
  `},uu=NC;var RC={id:"clockwork-god",name:"Clockwork God",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_cg.jpg",songs:["clockwork-god","ringmaster-has-to-die"],info:`
  `},cu=RC;var OC={id:"burn-the-circus",name:"Burn the Circus",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_btc.jpg",songs:["ringmaster-has-to-die","clockwork-god","rats","cholera","tick-tock","9-out-of-10","little-princess","splinter-in-the-eye","nailed-to-the-ferris-wheel","wearing-white","burn-the-circus"],info:`
  `},du=OC;var dg={[eu.id]:eu,[tu.id]:tu,[nu.id]:nu,[ru.id]:ru,[ou.id]:ou,[iu.id]:iu,[su.id]:su,[au.id]:au,[lu.id]:lu,[uu.id]:uu,[cu.id]:cu,[du.id]:du};var PC={id:"9-out-of-10",name:["9 out of 10"],albums:["burn-the-circus"],clipYouTubeId:"JoEULDNPL9s",text:`
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
`},fu=PC;var FC={id:"a-grain-of-sand",name:["A Grain of Sand"],albums:["tardigrade-inferno"],text:`
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
`},hu=FC;var LC={id:"alabama-song",name:["Alabama Song"],albums:["mastermind"],text:`
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
`},pu=LC;var jC={id:"all-pigs-are-the-same",name:["All Pigs are the Same"],albums:["mastermind"],text:`
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
`},mu=jC;var VC={id:"all-tardigrades-go-to-hell",name:["All Tardigrades go to Hell"],albums:["mastermind"],text:`
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
`},gu=VC;var BC={id:"arrival-of-a-train",name:["Arrival of a Train"],albums:["arrival-of-a-train-single","arrival-of-a-train"],clipYouTubeId:"LAKEQqJ7FKk",text:`
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
`},yu=BC;var $C={id:"burn-the-circus",name:["Burn the Circus"],albums:["burn-the-circus"],text:`
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
`},vu=$C;var HC={id:"cholera",name:["Cholera"],albums:["burn-the-circus"],text:`
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
`},wu=HC;var UC={id:"church-asylum",name:["Church Asylum"],albums:["mastermind"],text:`
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
`},bu=UC;var zC={id:"clockwork-god",name:["Clockwork God"],albums:["clockwork-god","burn-the-circus"],clipYouTubeId:"NhBBW-3x_9s",text:`
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
`},Du=zC;var WC={id:"clown-therapy",name:["Clown Therapy"],albums:["mastermind"],text:`
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
`},Iu=WC;var GC={id:"dreadful-song",name:["Dreadful Song"],albums:["mastermind"],text:`
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
`},Cu=GC;var YC={id:"engine-of-skin",name:["Engine of Skin"],albums:["arrival-of-a-train"],text:`
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
`},Eu=YC;var qC={id:"evoke",name:["Evoke"],albums:["arrival-of-a-train"],text:`
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
`},xu=qC;var ZC={id:"execution-is-fun",name:["Execution is fun!"],albums:["execution-is-fun"],clipYouTubeId:"DrnKM4mGDIQ",text:`
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
`},_u=ZC;var QC={id:"fire-plague-and-locust",name:["Fire, Plague and Locust"],albums:["fire-plague-and-locust","arrival-of-a-train"],clipYouTubeId:"hacScKtrqbQ",text:`
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
`},Su=QC;var KC={id:"how-nightmares-die",name:["How Nightmares Die"],albums:["how-nightmares-die"],clipYouTubeId:"sR7HHmJ4Jk4",text:`
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
`},Mu=KC;var JC={id:"hypnosis",name:["Hypnosis"],albums:["mastermind"],clipYouTubeId:"mbJ6x6HrXUM",text:`
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
`},Tu=JC;var XC={id:"im-coming-for-your-soul",name:["I`m Coming for Your Soul"],albums:["mastermind"],text:`
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
`},Au=XC;var eE={id:"little-princess",name:["Little Princess"],albums:["burn-the-circus"],text:`
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
`},ku=eE;var tE={id:"lovely-host",name:["Lovely Host"],albums:["tardigrade-inferno"],text:`
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
`},Nu=tE;var nE={id:"marmalade",name:["Marmalade"],albums:["mastermind"],text:`
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
`},Ru=nE;var rE={id:"mastermind",name:["Mastermind"],albums:["mastermind"],text:`
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
`},Ou=rE;var oE={id:"misery",name:["Misery"],albums:[],clipYouTubeId:"UdzmAxVGwCw",text:`
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
`},Pu=oE;var iE={id:"nailed-to-the-ferris-wheel",name:["Nailed to the Ferris Wheel"],albums:["burn-the-circus"],text:`
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
`},Fu=iE;var sE={id:"rats",name:["Rats"],albums:["burn-the-circus"],text:`
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
`},Lu=sE;var aE={id:"ringmaster-has-to-die",name:["Ringmaster has to Die"],albums:["ringmaster-has-to-die","clockwork-god","burn-the-circus"],clipYouTubeId:"hh3kZP4kNsE",text:`
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
`},ju=aE;var lE={id:"splinter-in-the-eye",name:["Splinter in the Eye"],albums:["burn-the-circus"],text:`
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
`},Vu=lE;var uE={id:"spooky-scary-skeletons",name:["Spooky Scary Skeletons"],albums:["spooky-scary-skeletons"],clipYouTubeId:"T_381kOAtTg",text:`
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
`},Bu=uE;var cE={id:"the-worst-of-me",name:["The Worst of Me"],albums:["the-worst-of-me"],clipYouTubeId:"-ZmFGFufDDE",text:`
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
`},$u=cE;var dE={id:"tick-tock",name:["Tick-Tock"],albums:["burn-the-circus"],text:`
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
`},Hu=dE;var fE={id:"underwater-valentine",name:["Underwater Valentine"],albums:["tardigrade-inferno"],text:`
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
`},Uu=fE;var hE={id:"we-are-number-one",name:["We Are Number One"],albums:["mastermind"],clipYouTubeId:"mzJ4vCjSt28",text:`
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
`},zu=hE;var pE={id:"wearing-white",name:["Wearing White"],albums:["burn-the-circus"],text:`
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
`},Wu=pE;var mE={id:"write-with-blood",name:["Write with Blood"],albums:["the-worst-of-me"],clipYouTubeId:"HbyaCInNiRA",text:`
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
`},Gu=mE;var fg={[fu.id]:fu,[hu.id]:hu,[pu.id]:pu,[mu.id]:mu,[gu.id]:gu,[yu.id]:yu,[vu.id]:vu,[wu.id]:wu,[bu.id]:bu,[Du.id]:Du,[Iu.id]:Iu,[Cu.id]:Cu,[Eu.id]:Eu,[xu.id]:xu,[_u.id]:_u,[Su.id]:Su,[Mu.id]:Mu,[Tu.id]:Tu,[Au.id]:Au,[ku.id]:ku,[Nu.id]:Nu,[Ru.id]:Ru,[Ou.id]:Ou,[Fu.id]:Fu,[Lu.id]:Lu,[ju.id]:ju,[Vu.id]:Vu,[Bu.id]:Bu,[$u.id]:$u,[Hu.id]:Hu,[Uu.id]:Uu,[zu.id]:zu,[Wu.id]:Wu,[Gu.id]:Gu,[Pu.id]:Pu};var gE={id:"tardigrade-inferno",name:"Tardigrade Inferno",image:"/artist/tardigrade_inferno/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/12ZMAQkYyLSuNLvjbySISC",appleMusic:"https://music.apple.com/ru/artist/tardigrade-inferno/1448941163",youtubeMusic:"https://music.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA",youtube:"https://www.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA",bandcamp:"https://tardigradeinferno.bandcamp.com/",yandexMusic:"https://music.yandex.ru/artist/6761875"},albums:["tardigrade-inferno","execution-is-fun","mastermind","how-nightmares-die","the-worst-of-me","spooky-scary-skeletons","arrival-of-a-train-single","fire-plague-and-locust","arrival-of-a-train","ringmaster-has-to-die","clockwork-god","burn-the-circus"]},Ti={artist:gE,albums:dg,songs:fg};var yE={id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440",year:1987,folder:"/artist/master/albums/master_1987.jpg",songs:[{name:"\u041C\u0430\u0441\u0442\u0435\u0440"},{name:"\u0411\u0435\u0440\u0435\u0433\u0438\u0441\u044C!"},{name:"\u0420\u0443\u043A\u0438 \u043F\u0440\u043E\u0447\u044C"},{name:"\u0429\u0438\u0442 \u0438 \u043C\u0435\u0447"},{name:"\u0415\u0449\u0435 \u0440\u0430\u0437 \u043D\u043E\u0447\u044C"},{name:"\u0412\u043E\u043B\u044F \u0438 \u0440\u0430\u0437\u0443\u043C"},{name:"\u0412\u0441\u0442\u0430\u043D\u044C, \u0441\u0442\u0440\u0430\u0445 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439"},{name:"\u0425\u0440\u0430\u043D\u0438 \u043C\u0435\u043D\u044F"},{name:"\u041A\u0442\u043E \u043A\u043E\u0433\u043E?"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041C\u0430\u0441\u0442\u0435\u0440" \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u043B\u0441\u044F \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F". \u0424\u0438\u0440\u043C\u0430 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F" \u043F\u043E\u043C\u0435\u0449\u0430\u043B\u0430\u0441\u044C \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u043A\u043E\u0441\u0442\u0435\u043B\u0430 \u043D\u0430 \u0443\u043B\u0438\u0446\u0435 \u0421\u0442\u0430\u043D\u043A\u0435\u0432\u0438\u0447\u0430, \u0432\u043E \u0434\u0432\u043E\u0440\u0435, \u0433\u0434\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B\u0441\u044F \u0430\u0432\u0442\u043E\u0431\u0443\u0441 \u0422\u043E\u043D\u0432\u0430\u0433\u0438\u043D \u0441\u043E \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u043E\u0439. \u0418\u043C\u0435\u043D\u043D\u043E \u0432 \u043D\u0435\u043C \u0431\u044B\u043B \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0438 \u0441\u0432\u0435\u0434\u0435\u043D \u043F\u0435\u0440\u0432\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C. \u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0442\u043E\u0436\u0435 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "\u041C\u0415\u041B\u041E\u0414\u0418\u042F" \u0432 1987 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043D\u0438\u043B\u0435 \u0438 \u0431\u044B\u043B \u043F\u0440\u043E\u0434\u0430\u043D \u0442\u0438\u0440\u0430\u0436\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u0412 1995 \u0433\u043E\u0434\u0443 \u0430\u043B\u044C\u0431\u043E\u043C \u043F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D \u043D\u0430 CD \u0444\u0438\u0440\u043C\u043E\u0439 \u0421\u041E\u042E\u0417.
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B          \u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430
\u0418.\u041C\u043E\u043B\u0447\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435     \u041A.\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
  `},Yu=yE;var vE={id:"s-petlyoj-na-shee",name:"\u0421 \u043F\u0435\u0442\u043B\u0451\u0439 \u043D\u0430 \u0448\u0435\u0435",year:1989,folder:"/artist/master/albums/spnsh_1989.jpg",songs:[{name:"\u041D\u0435 \u0445\u043E\u0442\u0438\u043C!"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"\u041C\u044B \u043D\u0435 \u0440\u0430\u0431\u044B?"},{name:"\u041A\u043E\u0433\u0434\u0430 \u044F \u0443\u043C\u0440\u0443..."},{name:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043D\u0430\u0448\u0443 \u0437\u043B\u043E\u0441\u0442\u044C"},{name:"\u041D\u0430\u043F\u043B\u0435\u0432\u0430\u0442\u044C!"},{name:"\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"2000 \u043B\u0435\u0442 (\u0418\u0443\u0434\u0430)"},{name:"\u0412\u043E\u0439\u043D\u0430"},{name:"\u0421\u0435\u043C\u044C \u043A\u0440\u0443\u0433\u043E\u0432 \u0430\u0434\u0430"},{name:"\u0421 \u043F\u0435\u0442\u043B\u0451\u0439 \u043D\u0430 \u0448\u0435\u0435"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u0421 \u041F\u0435\u0442\u043B\u0435\u0439 \u041D\u0430 \u0428\u0435\u0435" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u0430 \u042E.\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u041D\u043E\u0432\u044B\u0435 \u041C\u044B\u0442\u0438\u0449\u0438. \u0412 \u0442\u0440\u0435\u0445\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0443\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u042E.\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430 \u0431\u044B\u043B\u0430 \u043F\u0440\u0438\u0432\u0435\u0437\u0435\u043D\u0430 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0438 \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u0438\u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043C\u0430\u0433\u043D\u0438\u0442\u043E\u0444\u043E\u043D. \u042D\u0442\u043E \u0431\u044B\u043B \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u043F\u044B\u0442 \u0437\u0430\u043F\u0438\u0441\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u0438\u043B\u0430\u043C\u0438. \u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0432 1989 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043D\u0438\u043B\u0435 \u0444\u0438\u0440\u043C\u043E\u0439 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F", \u0438 \u0431\u044B\u043B \u043F\u0440\u043E\u0434\u0430\u043D \u0442\u0438\u0440\u0430\u0436\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u0434\u0432\u0443\u0445 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u0410\u043B\u044C\u0431\u043E\u043C \u0431\u044B\u043B \u043F\u0440\u0438\u0437\u043D\u0430\u043D \u043B\u0443\u0447\u0448\u0438\u043C \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u043C \u0433\u043E\u0434\u0430. \u0412 1995 \u0433\u043E\u0434\u0443 \u0431\u044B\u043B \u043F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D \u043D\u0430 CD \u0441\u0442\u0443\u0434\u0438\u0435\u0439 \u0421\u041E\u042E\u0417
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B          \u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430
\u0418.\u041C\u043E\u043B\u0447\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435     \u041A.\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
  `},qu=vE;var wE={id:"talk-of-the-devil",name:"Talk of the Devil",year:1991,folder:"/artist/master/albums/talk_of_the_devil_1992.jpg",songs:[{name:"Intro Golgotha"},{name:"Talk Of The Devil"},{name:"Danger"},{name:"Fallen Angel"},{name:"Live To Die"},{name:"Tsar"},{name:"Heroes"},{name:"Romance (bass-solo)"},{name:"I Hate Your Sex"},{name:"Paranoid"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "Talk Of The Devil" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0432 1991 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "MOROZ Records" - LP (\u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u0439 \u0434\u0438\u0441\u043A). \u0417\u0430\u043F\u0438\u0441\u044C \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "SNC-records", \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u0422\u0440\u0443\u0448\u0438\u043D. \u0422\u0430\u043A\u0436\u0435 \u041C\u0438\u0445\u0430\u0438\u043B \u0421\u0435\u0440\u044B\u0448\u0435\u0432 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043B \u043B\u044E\u0434\u0435\u0439 \u0438\u0437 \u0445\u0440\u0430\u043C\u0430 \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u0445\u043E\u0440\u0430 \u0432 \u043F\u0435\u0441\u043D\u0435 Fallen Angel.

\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B

\u0421\u0435\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B:
\u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430                                          \u0412.\u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (1)
\u0421.\u0415\u0444\u0438\u043C\u043E\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (6)                             \u0410.\u041C\u043E\u0438\u0441\u0435\u0435\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (7)
\u0410.\u0428\u0430\u0442\u0443\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (2, 3, 4, 5)      \u0418.\u041A\u043E\u0436\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430 (6)
\u0445\u043E\u0440 \u0445\u0440\u0430\u043C\u0430 \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u0430 (3)
  `},Zu=wE;var bE={id:"maniac-party",name:"Maniac Party",year:1994,folder:"/artist/master/albums/maniac_party_1994.jpg",songs:[{name:"Beastie Generation"},{name:"Maniac Party"},{name:"Lock Them In Graves"},{name:"Burning In Hell (Civil War Disaster)"},{name:"Screams Of Pain"},{name:"Time X (bass-solo)"},{name:"They Are Just Like Us"},{name:"Punk Guys"},{name:"Go!"}],info:`
"Maniac Party" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "SNC-records" \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u0432 1993 \u0433\u043E\u0434\u0443, \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0415.\u0422\u0440\u0443\u0448\u0438\u043D. \u0421\u0430\u043C \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u0448\u0435\u043B \u0442\u043E\u043B\u044C\u043A\u043E \u0432 1994 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "APEX" - CD, \u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 - \u0444\u0438\u0440\u043C\u0430 "POLYGRAM".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421.\u0421\u0438\u0434\u043E\u0440\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B       \u0422.\u0428\u0435\u043D\u0434\u0435\u0440 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},Qu=bE;var DE={id:"pesni-myortvyh",name:"\u041F\u0435\u0441\u043D\u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0445",year:1996,folder:"/artist/master/albums/pesni_mertvix_1996.jpg",songs:[{name:"\u041F\u0435\u0441\u043D\u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0414\u0438\u043A\u0438\u0435 \u0433\u0443\u0441\u0438"},{name:"\u0414\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0442"},{name:"\u041F\u0435\u043F\u0435\u043B \u043D\u0430 \u0432\u0435\u0442\u0440\u0443"},{name:"\u041D\u0430\u0434\u043E\u0435\u043B\u043E"},{name:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0441\u0430\u043C"},{name:"\u042F \u043D\u0435 \u0445\u043E\u0447\u0443 \u0432\u043E\u0439\u043D\u044B"},{name:"\u0422\u0430\u0442\u0443"},{name:"\u041D\u043E\u0447\u044C"},{name:"\u041A\u043E\u0440\u0430\u0431\u043B\u044C \u0434\u0443\u0440\u0430\u043A\u043E\u0432"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041F\u0435\u0441\u043D\u0438 \u043C\u0435\u0440\u0442\u0432\u044B\u0445" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "\u0410\u0440\u0438\u044F Records" \u0432 \u043C\u0430\u0440\u0442\u0435 1996 \u0433\u043E\u0434\u0430. \u0417\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u044B - \u0412.\u0425\u043E\u043B\u0441\u0442\u0438\u043D\u0438\u043D \u0438 \u0414.\u041A\u0430\u043B\u0438\u043D\u0438\u043D. \u0412\u044B\u043F\u0443\u0449\u0435\u043D \u0444\u0438\u0440\u043C\u043E\u0439 "Flam Records" \u0432 1996 \u0433\u043E\u0434\u0443. \u0412 \u043F\u0435\u0441\u043D\u0435 \u0422\u0430\u0442\u0443 \u0432 \u0437\u0430\u043F\u0438\u0441\u0438 \u0445\u043E\u0440\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0410.\u0422\u0440\u043E\u0444\u0438\u043C\u043E\u0432, \u0410.\u0413\u0438\u0440\u043D\u044B\u043A (ZZ-Top), \u042E\u0440\u0438\u0439 \u0412\u0430\u0441\u0438\u043D (\u0430\u0440\u0442\u0438\u0441\u0442 \u0430\u043D\u0441\u0430\u043C\u0431\u043B\u044F \u0418\u0433\u043E\u0440\u044F \u041C\u043E\u0438\u0441\u0435\u0435\u0432\u0430).

\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B       \u0422.\u0428\u0435\u043D\u0434\u0435\u0440 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},Ku=DE;var IE={id:"labirint",name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442",year:1999,folder:"/artist/master/albums/labirint_2000.jpg",songs:[{name:"\u041C\u0435\u0441\u0442\u0430 \u0445\u0432\u0430\u0442\u0438\u0442 \u0432\u0441\u0435\u043C"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"\u0421\u043E\u043D"},{name:"\u041A\u043E\u043C\u0435\u0442\u0430 2000"},{name:"Metal-\u0434\u043E\u043A\u0442\u043E\u0440"},{name:"\u041E\u0445\u043E\u0442\u043D\u0438\u043A\u0438 \u0437\u0430 \u0441\u0447\u0430\u0441\u0442\u044C\u0435\u043C"},{name:"\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0442, \u043D\u0438\u0447\u0442\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0442\u043E (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"\u0422\u0430\u0440\u0430\u043D"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0433\u0440\u0443\u043F\u043F\u044B \u041C\u0430\u0441\u0442\u0435\u0440 \u0432 \u043A\u043E\u043D\u0446\u0435 1999 \u0433\u043E\u0434\u0430. \u041C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0438 \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0443 \u0438 \u0440\u0435\u0448\u0438\u043B\u0438 \u0432\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0443 \u0441\u0435\u0431\u044F \u043D\u0430 \u0431\u0430\u0437\u0435. \u0410\u043B\u044C\u0431\u043E\u043C "\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432 2001 \u0444\u0438\u0440\u043C\u043E\u0439 "CD-Land" \u043D\u0430 CD



\u0421\u043E\u0441\u0442\u0430\u0432:
\u041B.\u0424\u043E\u043C\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                   \u041E.\u041C\u0438\u043B\u043E\u0432\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},Ju=IE;var CE={id:"rc-cars",name:"\u041D\u0435\u0434\u0435\u0442\u0441\u043A\u0438\u0435 \u0433\u043E\u043D\u043A\u0438",year:2003,folder:"/artist/master/albums/rc_cars.jpg",songs:[{name:"\u0420\u0443\u043A\u0438 \u043F\u0440\u043E\u0447\u044C"},{name:"\u041C\u0435\u0441\u0442\u0430 \u0445\u0432\u0430\u0442\u0438\u0442 \u0432\u0441\u0435\u043C"},{name:"\u041A\u0442\u043E \u043A\u043E\u0433\u043E?"},{name:"\u0411\u0435\u0440\u0435\u0433\u0438\u0441\u044C"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"Metal-\u0434\u043E\u043A\u0442\u043E\u0440"},{name:"\u041C\u0430\u0441\u0442\u0435\u0440"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"\u0421\u043E\u043D"},{name:"\u0422\u0430\u0440\u0430\u043D"}],info:`
\u0417\u0430\u043F\u0438\u0441\u044C 2002 \u0433., \u0441\u0430\u0443\u043D\u0434\u0442\u0440\u0435\u043A \u043A \u043A\u043E\u043C\u043F\u044C\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u0433\u0440\u0435
\u0410\u043B\u0438\u043A \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441, \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430, \u0410\u043D\u0434\u0440\u0435\u0439 \u041B\u0435\u0431\u0435\u0434\u0435\u0432 \u041A\u0440\u0443\u0441\u0442\u0435\u0440 - \u0441\u044D\u043C\u043F\u043B\u044B, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u0437\u0432\u0443\u043A\u043E\u0432\u044B\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u044B
  `},Xu=CE;var EE={id:"klassika",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 1987-2002",year:2001,folder:"/artist/master/albums/klassika_1987_2002.jpg",songs:[{name:"\u0418\u043D\u0442\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"\u0421 \u043A\u0435\u043C \u0442\u044B?"},{name:"\u0415\u0449\u0435 \u0440\u0430\u0437 \u043D\u043E\u0447\u044C"},{name:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0441\u0430\u043C"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"2000 \u043B\u0435\u0442 (\u0418\u0443\u0434\u0430)"},{name:"\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"\u0422\u043E\u0440\u0435\u0440\u043E"},{name:"\u041D\u0435\u0431\u043E \u0432 \u0433\u043B\u0430\u0437\u0430\u0445"},{name:"\u0412\u0441\u0442\u0430\u043D\u044C, \u0441\u0442\u0440\u0430\u0445 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439"},{name:"\u0422\u0430\u0442\u0443"},{name:"\u0412\u043E\u043B\u044F \u0438 \u0440\u0430\u0437\u0443\u043C"},{name:"\u0427\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u0430\u044F"}],info:`
\u041B\u0435\u0442\u043E\u043C 2001 \u0433\u043E\u0434\u0430 - \u0433\u0440\u0443\u043F\u043F\u0430 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0430\u043B\u044C\u0431\u043E\u043C "\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 1987-2001", \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0448\u043B\u0438 \u0441\u0442\u0430\u0440\u044B\u0435 \u0445\u0438\u0442\u044B \u0433\u0440\u0443\u043F\u043F\u044B \u0432 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0435, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0410\u043B\u0438\u043A\u0430 \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E: "\u0422\u043E\u0440\u0435\u0440\u043E" \u0438 "\u0421 \u041A\u0435\u043C \u0422\u044B?" \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0435 \u0438\u043C \u0432 \u0442\u043E \u0432\u0440\u0435\u043C\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D \u0438\u0433\u0440\u0430\u043B \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 "\u0410\u0440\u0438\u044F".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                 \u041E.\u041C\u0438\u043B\u043E\u0432\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},ec=EE;var xE={id:"33-zhizni",name:"33 \u0436\u0438\u0437\u043D\u0438",year:2004,folder:"/artist/master/albums/33zizni_2004.jpg",songs:[{name:"\u0418\u0433\u0440\u0430"},{name:"\u041C\u0430\u0441\u0442\u0435\u0440 \u0441\u043A\u043E\u0440\u0431\u043D\u044B\u0445 \u0434\u0435\u043B"},{name:"\u0412\u0435\u0440\u0430 \u0433\u043E\u0440\u0438\u0442 \u043D\u0430 \u043A\u043E\u0441\u0442\u0440\u0430\u0445"},{name:"33 \u0436\u0438\u0437\u043D\u0438"},{name:"\u042D\u043A\u0441\u043F\u0440\u0435\u0441\u0441"},{name:"\u0413\u043B\u043E\u0442\u043E\u043A \u043E\u0433\u043D\u044F"},{name:"\u0412\u043E\u0439\u043D\u0430 \u043C\u0438\u0440\u043E\u0432"},{name:"Heavy-\u043B\u0430\u043C\u0431\u0430\u0434\u0430"},{name:"\u0421\u043D\u0435\u0436\u043D\u044B\u0439 \u043E\u0445\u043E\u0442\u043D\u0438\u043A"},{name:"\u0421\u0442\u0438\u0445\u0438\u044F"},{name:"\u0414\u0435\u0442\u0438 \u043F\u043E\u0434\u0437\u0435\u043C\u0435\u043B\u044C\u044F"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "33 \u0436\u0438\u0437\u043D\u0438" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u041C\u0430\u0441\u0442\u0435\u0440-\u0420\u0435\u043A\u043E\u0440\u0434\u0441 \u0432 2004 \u0433\u043E\u0434\u0443. \u0412 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0431\u044B\u043B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0421\u0442\u0440\u0430\u0439\u043A\u0430. \u041E\u0431\u043B\u043E\u0436\u043A\u0443 \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043B \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0410\u043D\u0434\u0440\u0435\u0439 \u0411\u0430\u0440\u043A\u043E\u0432 (Grimmy bro). \u0410\u043B\u044C\u0431\u043E\u043C "33 \u0436\u0438\u0437\u043D\u0438" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u043D\u0430 CD \u041E\u041E\u041E "\u041C\u0430\u0441\u0442\u0435\u0440-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                 \u0410.\u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},tc=xE;var _E={id:"akustika",name:"\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",year:2005,folder:"/artist/master/albums/akystika_2005.jpg",songs:["plach-svireli",{name:"\u0422\u043E\u0440\u0435\u0440\u043E"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"33 \u0436\u0438\u0437\u043D\u0438"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"Heavy-\u043B\u0430\u043C\u0431\u0430\u0434\u0430"},{name:"\u041F\u0435\u043F\u0435\u043B \u043D\u0430 \u0432\u0435\u0442\u0440\u0443"},{name:"\u0418\u0433\u0440\u0430"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"\u0417\u0434\u0435\u0441\u044C \u043A\u0443\u044E\u0442 \u043C\u0435\u0442\u0430\u043B\u043B"},"veter"],info:`
\u0410\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u0448\u0435\u043B \u0432 \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2005 \u0433\u043E\u0434\u0430. \u0412 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A \u0441\u0442\u0430\u0440\u044B\u0435 \u0445\u0438\u0442\u044B, \u0442\u0430\u043A \u0438 \u0434\u0432\u0435 \u043D\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438.

"\u041A\u0430\u0436\u0434\u044B\u0439 \u0448\u0430\u0433 \u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0434\u043E\u0440\u043E\u0433\u0435 - \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435 \u0438 \u043E\u043F\u044B\u0442. \u042D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C - \u0435\u0449\u0451 \u043E\u0434\u043D\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432\u043F\u0435\u0440\u0451\u0434 \u0434\u043B\u044F \u043D\u0430\u0441 \u0438 \u0434\u043B\u044F \u0442\u0435\u0431\u044F..."



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410. \u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430        \u0410. \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
LEXX - \u0433\u0438\u0442\u0430\u0440\u0430, \u0432\u043E\u043A\u0430\u043B     \u0410. \u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u043F\u0435\u0440\u043A\u0443\u0441\u0441\u0438\u044F
  `},nc=_E;var SE={id:"po-tu-storonu-sna",name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430",year:2006,folder:"/artist/master/albums/ptcc_2006.jpg",songs:[{name:"\u0422\u0430\u043D\u0435\u0446"},{name:"\u0413\u0435\u043D\u0438\u0439 \u0440\u043E\u043A\u0430"},{name:"\u041C\u0443\u0437\u044B\u043A\u0430 \u0441\u0444\u0435\u0440"},"za-granyu",{name:"\u041F\u0435\u0441\u043D\u044F \u0410\u043D\u043D\u0443\u0448\u043A\u0438"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C \u0411\u0435\u0440\u043B\u0438\u043E\u0437\u0430"},{name:"\u041A\u043E\u043D\u0444\u0435\u0440\u0430\u043D\u0441"},{name:"\u041C\u0435\u0447\u0442\u0430\u0439"},{name:"\u0412\u043E\u0439\u043D\u0430 (Live in studio)"},{name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430 (\u0447\u0430\u0441\u0442\u044C 1)"},{name:"\u041B\u0435\u0441 \u0411\u0440\u043E\u043A\u0438\u043B\u043E\u043D"},{name:"\u041A\u0440\u044B\u0441\u044B"},{name:"\u0421\u044B\u043D \u043A\u0430\u043C\u043D\u044F"},{name:"\u0412\u0440\u0435\u043C\u044F \u0432\u0430\u0440\u0432\u0430\u0440\u043E\u0432"},{name:"Live in studio"},{name:"Omut"},{name:"\u041C\u0440\u0430\u043C\u043E\u0440\u043D\u044B\u0439 \u0410\u043D\u0433\u0435\u043B"},{name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430 (\u0447\u0430\u0441\u0442\u044C 2) (Live in studio)"}],info:`
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
  `},rc=SE;var ME={id:"viii",name:"VIII",year:2010,folder:"/artist/master/albums/vii_2010.jpg",songs:[{name:"\u0412\u043E\u0441\u044C\u043C\u0430\u044F \u0434\u0432\u0435\u0440\u044C"},{name:"\u0417\u0430\u043C\u0440\u0438!"},{name:"\u0411\u0443\u043B\u044C\u0434\u043E\u0437\u0435\u0440"},{name:"\u0421\u0443\u0434 \u0438\u0434\u0451\u0442"},{name:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0440\u0430\u0442"},{name:"\u0412\u043E\u0437\u0434\u0443\u0445!"},{name:"\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C"},{name:"\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u0441\u0430\u0440\u0430\u043D\u0447\u0430"},{name:"\u0420\u0443\u0431\u0438\u0442\u0435 \u043C\u0430\u0447\u0442\u044B!"},{name:"\u0411\u0435\u0440\u0435\u0433 \u0438\u043B\u043B\u044E\u0437\u0438\u0439"},{name:"\u041A\u043E\u0440\u043E\u043B\u0438 \u0440\u043E\u043A-\u043D-\u0440\u043E\u043B\u043B\u0430"},{name:"\u041E\u043D\u0438 \u043A\u0430\u043A \u043C\u044B"},{name:"Kings of Rock-n-Roll"},{name:"\u041D\u0430\u0447\u0430\u043B\u043E \u0432\u043E\u0441\u044C\u043C\u043E\u0433\u043E"}],info:`
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
  `},oc=ME;var hg={[Yu.id]:Yu,[qu.id]:qu,[Zu.id]:Zu,[Qu.id]:Qu,[Ku.id]:Ku,[Ju.id]:Ju,[Xu.id]:Xu,[ec.id]:ec,[tc.id]:tc,[nc.id]:nc,[rc.id]:rc,[oc.id]:oc};var TE={id:"za-granyu",name:["\u0417\u0430 \u0433\u0440\u0430\u043D\u044C\u044E"],albums:["po-tu-storonu-sna"],authors:"\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0442\u0440\u0430\u0439\u043A \u2014 \u041C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430 \u041F\u0443\u0448\u043A\u0438\u043D\u0430",text:`
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
`},ic=TE;var AE={id:"plach-svireli",name:["\u041F\u043B\u0430\u0447 \u0441\u0432\u0438\u0440\u0435\u043B\u0438"],albums:["akustika"],text:`
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
`},sc=AE;var kE={id:"veter",name:["\u0412\u0435\u0442\u0435\u0440"],albums:["akustika"],text:`
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
`},ac=kE;var NE={id:"ride-to-live-live-to-ride",name:["Ride To Live, Live To Ride"],albums:[],authors:"\u043C\u0443\u0437\u044B\u043A\u0430: Dee Snider, \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442: \u041C.\u041F\u0443\u0448\u043A\u0438\u043D\u0430",text:`
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
`},lc=NE;var RE={id:"na-linii-ognya",name:["\u041D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F"],albums:[],clipYouTubeId:"sdAZuPTbFtE",text:`
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
`},uc=RE;var pg={[ic.id]:ic,[sc.id]:sc,[ac.id]:ac,[lc.id]:lc,[uc.id]:uc};var OE={id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440",image:"/artist/master/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/3Gocx0waYCfV2wx0d5nKzs",youtube:"https://www.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q",youtubeMusic:"https://music.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q",yandexMusic:"https://music.yandex.ru/artist/359599"},albums:["master","s-petlyoj-na-shee","talk-of-the-devil","maniac-party","pesni-myortvyh","labirint","rc-cars","klassika","33-zhizni","akustika","po-tu-storonu-sna","viii"]},Ai={artist:OE,albums:hg,songs:pg};var PE={id:"trotilovyye-skazki",name:"\u0422\u0440\u043E\u0442\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u043A\u0430\u0437\u043A\u0438",year:1998,folder:"/artist/shmely/albums/1998_skazki.jpg",songs:[{name:"\u0427\u043E\u0440\u043D\u0430 \u0434\u043E\u0431\u0430"},{name:"\u042F\u0431\u043B\u043E\u0447\u043A\u043E-\u043C\u044F\u0443\u0447\u0438\u043B\u043E"},{name:"\u0421\u0435\u043A\u0441, \u043D\u0430\u0440\u043A\u043E\u0442\u0438\u043A\u0438, \u0441\u0430\u043C\u043E\u0433\u043E\u043D"},{name:"\u041B\u0438\u0445\u043E\u043C\u0430\u043D\u0435 \u043C\u0435\u043D\u0435 \u043Di\u0447"},{name:"\u0410\u0434\u0441\u043A\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"},{name:"\u0417\u0438\u043C\u0430"},{name:"\u0417\u0430 \u0442\u043E\u0431\u043E\u044E"},{name:"\u041D\u0435 \u0445\u043E\u0434\u0438"},{name:"\u0426\u0432\u0438\u043D\u0442\u0430\u0440"},{name:"\u041E\u0440\u0433i\u044F"},"daj-garri"]},cc=PE;var FE={id:"tulovishche",name:"\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435",year:1998,folder:"/artist/shmely/albums/1998_tulovishe.jpg",songs:[{name:"\u041D\u0435\u0431\u043E (\u0441\u0442\u0438\u0445)"},{name:"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0431\u043E\u0433"},{name:"\u041B\u0430\u0439 \u0438\u043B\u043B\u044E\u0437\u0438\u0438"},{name:"\u0422\u0440\u0430\u0432\u044B"},{name:"\u041F\u0435\u0440\u0432\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C (\u0441\u0442\u0438\u0445)"},"tulovishchej",{name:"\u042D\u043A\u0437\u043E\u0442\u0438\u043A\u0430"},{name:"\u0413\u043D\u0438\u043B\u043E\u0435 \u043E\u0437\u0435\u0440\u043E"},{name:"\u0416\u0430\u043B\u043E \u0431\u0435\u0439 \u0441\u0430\u0432\u0430\u043B\u044F\u0439"},{name:"\u041B\u0430\u0433i\u0434\u043D\u043E"},"raspyatie",{name:"\u041A\u043E\u0440\u0430\u0431\u043B\u0438\u043A\u0438"},{name:"\u0412\u0435\u0442\u0435\u0440 \u0438 \u0433\u0440\u043E\u043C"},{name:"\u041D\u0435\u043F\u0443\u0442\u0451\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u0431\u0443\u0441"},{name:"\u041C\u044F\u0441\u043D\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"},{name:"\u0413\u0438\u043C\u043D\u043E\u043F\u043E\u0434\u043E\u0431\u043D\u0430\u044F"}]},dc=FE;var LE={id:"purga",name:"\u041F\u0443\u0440\u0433\u0430",year:1998,folder:"/artist/shmely/albums/1998_purga.jpg",songs:[{name:"\u0410\u0439 \u0434\u0430!"},{name:"\u0413\u0440\u043E\u0437\u0430"},{name:"\u0422\u043E\u0441\u043A\u0430"},{name:"\u041B\u0430\u043A\u0430\u0439 \u043E\u0442\u0440\u0430\u0432\u0443"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435"},{name:"\u0422\u0435\u043D\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B"},{name:"\u041D\u0435\u0432\u0435\u0441\u0451\u043B\u0430\u044F \u0441\u043A\u0430\u0437\u043A\u0430"},{name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442"},{name:"\u0411\u0430\u0440\u044B\u043D\u044F"},{name:"\u041C\u043E\u043B\u043E\u0434\u0430\u044F"},{name:"\u041B\u044E\u0442\u0438\u0439 \u0441\u043Di\u0433"},{name:"\u041B\u043E\u0433\u043E\u0432\u043E"},{name:"\u0411\u0440\u0430\u0433\u0430"},{name:"\u0417\u0430\u043C\u043E\u043A \u0438\u0437 \u0442\u0443\u0447"},{name:"\u0412\u043E\u0434\u0430"},{name:"\u0413\u0443\u0431\u044B - \u044F\u0434"},{name:"\u0411\u0443\u0434\u0442\u043E \u0441\u043A\u0430\u0437\u043A\u0430"}]},fc=LE;var jE={id:"durackiye-knizhki",name:"\u0414\u0443\u0440\u0430\u0446\u043A\u0438\u0435 \u043A\u043D\u0438\u0436\u043A\u0438",year:1998,folder:"/artist/shmely/albums/1998_knizhki.jpg",streaming:{spotify:"https://open.spotify.com/album/63sm3EX7I90qTqXEFBcUdT",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kgofi2TmxxKfzOrot5dsKipLqRNh1VjsE",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_l16b-hVl6mCOISWOuLJWtDPH5uTbbBoG4",yandexMusic:"https://music.yandex.ru/album/3444884"},songs:["ya-ne-angel",{name:"\u041C\u043E\u0433\u0438\u043B\u044C\u0449\u0438\u043A"},"volosy",{name:"\u0416\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u043D\u043E"},{name:"\u0413\u043E\u0440\u0438, \u043A\u043E\u0441\u0442\u0451\u0440!"},{name:"\u0420\u0435\u0437\u0438\u043D\u043E\u0432\u044B\u0435 \u0434\u0435\u0431\u0440\u0438"},{name:"\u042F\u0437\u0432\u0430 \u043D\u0430 \u0434\u0443\u0448\u0435"},{name:"\u0414\u0443\u0440\u0430\u0446\u043A\u0438\u0435 \u043A\u043D\u0438\u0436\u043A\u0438"},{name:"\u0413\u043E\u0432\u043D\u043E"},{name:"\u041D\u0435 \u0433\u0440\u0443\u0441\u0442\u0438, \u0438 \u0442\u0430\u043A \u0445\u0443\u0451\u0432\u043E"},{name:"\u041F\u044C\u044F\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u043A\u0430"},{name:"\u0418\u043A\u043E\u043D\u0430"},{name:"\u041E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u044F"},{name:"\u041Ci\u0441\u044F\u0446\u044A \u0437 \u043D\u0435\u0431\u0430 \u0433\u0435\u0442\u044C"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430\u044F"},{name:"\u0420\u0443\u0439\u043D\u0435\u0442\u0441\u044F \u043C\u043E\u0437\u043E\u043A"},{name:"\u0412\u0430\u043A\u0445\u0430\u043D\u0430\u043B\u0438\u044F"}]},hc=jE;var VE={id:"petlya-soblazna",name:"\u041F\u0435\u0442\u043B\u044F \u0441\u043E\u0431\u043B\u0430\u0437\u043D\u0430",year:1998,folder:"/artist/shmely/albums/1998_ps_.jpg",songs:[{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0432\u044B\u0439\u0434\u0435\u0442"},{name:"\u0412\u0435\u0441\u043D\u0430 \u043F\u043E\u043A\u043E\u0439\u043D\u0438\u0446\u0430"},{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0413\u0430\u043D\u044C\u0431\u0430"},{name:"\u0410\u043B\u043B\u0438\u043B\u0443\u0439\u0430"},{name:"\u041E\u0431\u0435\u0441\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0430\u0445"},{name:"\u0411i\u0441\u043E\u0432 \u0433\u0430\u0439"},"trahni-nebo","divchina-kulya",{name:"\u0417\u0430\u0432i\u0442\u0430\u0439"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0438\u0441\u043F\u043E\u0432\u0435\u0434\u044C"},{name:"\u0424\u0430\u0448\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B"},{name:"\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A"}]},pc=VE;var BE={id:"zloradostnaya-opuhol",name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C",year:1999,folder:"/artist/shmely/albums/1999_zo.jpg",songs:[{name:"\u0411\u044B\u043B\u0438 \u043C\u044B"},{name:"\u041B\u0435\u0437\u0432\u0438\u0435"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430"},{name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C"},{name:"\u0413\u043B\u0438\u0441\u0442\u044B"},{name:"\u0428\u0435\u0439\u043A \u0448\u0435\u0439\u043A \u0447\u0430 \u0447\u0430 \u0447\u0430"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430"},{name:"\u0421\u043C\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430"},{name:"\u041C\u0443\u0442\u0430\u043D\u0442\u044B"},{name:"\u0414\u0436\u0430\u0433\u0438 \u043C\u0435\u0440\u0442\u0432\u0435\u0435 \u0432\u0441\u0435\u0445 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0410\u043F\u043E\u043A\u0430\u043B\u0438\u043F\u0441\u0438\u0441"},{name:"\u041F\u0435\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"}]},mc=BE;var $E={id:"vulkanizaciya-dushi",name:"\u0412\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0443\u0448\u0438",year:1999,folder:"/artist/shmely/albums/1999_vd_.jpg",songs:[{name:"\u041A\u0440\u0438\u0436\u0430\u043D\u0430 \u0432\u043E\u0434\u0430"},{name:"\u0412\u0435\u0441\u043D\u044F\u043D\u043A\u0430"},{name:"\u0423 \u0413\u0430\u044E"},{name:"\u0411\u043E\u0433\u0438"},{name:"\u041F\u043E\u043C\u043E\u043B\u0438\u0441\u044C"},{name:"\u041E-\u041E-\u041E"},{name:"\u0414\u0438\u0432\u043E"},{name:"\u041E\u0440\u0433\u0430\u0437\u043C"},"volosy",{name:"\u041Ci\u0441\u044F\u0446\u044A"},{name:"\u0414\u0443\u043D\u044F"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C"}]},gc=$E;var HE={id:"princessa-bez-trusov",name:"\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0442\u0440\u0443\u0441\u043E\u0432",year:2e3,folder:"/artist/shmely/albums/2000_prinzessa.jpg",songs:[{name:"\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0442\u0440\u0443\u0441\u043E\u0432"},{name:"\u0418\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0440\u0430\u0442"},{name:"\u041A\u0440\u043E\u043D\u043E\u0441"},{name:"\u0418\u0432\u0430 (\u0441\u0442\u0438\u0448\u043E\u043A)"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C"},{name:"\u0420\u0436\u0430\u0432\u044B\u0439 \u043A\u0438\u0431\u043E\u0440\u0433"},{name:"\u0428\u0443\u043B\u043E\u0432\u044C\u0435"},{name:"\u041F\u043E\u0435\u0431\u0435\u043D\u044C-\u0442\u0440\u0430\u0432\u0430"},{name:"\u0415\u0449\u0451 \u0441\u0442\u0438\u0448\u043E\u043A"},{name:"\u0417\u043E\u043C\u0431\u0438-\u0431\u0443\u0433\u0438"},{name:"\u041F\u043E \u043C\u0430\u0441\u043B\u0443"},{name:"\u041C\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u043A"},{name:"\u0426\u0432\u0435\u0442\u044B"},{name:"\u0421\u0442\u0438\u0448\u043E\u0447\u0435\u043A"},{name:"\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u044F"},{name:"\u0417\u0430\u0440\u0435\u0432\u043E"},{name:"\u041F\u0430\u043D\u043A-\u0434\u0438\u043A\u0442\u0430\u0442\u0443\u0440\u0430"},{name:"\u041A\u0440\u0430\u0445 \u0438 \u0433\u0438\u0431\u0435\u043B\u044C"},{name:"\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A-\u0443\u0431\u0438\u0439\u0446\u0430 (\u0441\u043A\u0430\u0437\u043A\u0430)"}]},yc=HE;var UE={id:"bomba-v-ubezhishche",name:"\u0411\u043E\u043C\u0431\u0430 \u0432 \u0443\u0431\u0435\u0436\u0438\u0449\u0435",year:2e3,folder:"/artist/shmely/albums/2000_bomba.jpg",songs:[{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u0422\u0438\u0448\u0438\u043D\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439"},{name:"\u0411\u043E\u043C \u043B\u0431\u043E\u043C"},["polna-suma",{name:["\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043E\u0441\u0442\u0440\u043E\u0432"]}],{name:"\u0422\u0443\u043B\u044F\u0440\u0435\u043C\u0438\u044F"},{name:"\u0412\u0438\u0440\u0443\u0441"},"ya-ne-angel",{name:"\u0412\u0438\u0445\u0440\u044C \u0441\u0442\u0440\u0430\u0441\u0442\u0435\u0439"},{name:"\u0421\u0430\u0434\u0438\u0437\u043C"},{name:"\u0425\u0443\u043B\u0438 \u043F\u0443\u043B\u0438 \u043F\u0440\u0430\u0445\u0443"},{name:"\u0422\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430"},{name:"\u0410\u043D\u0430\u043A\u043E\u043D\u0434\u0430"},{name:"\u0411\u043E\u0440\u043E\u0434\u0430"},"slyoznaya",{name:"\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434"},{name:"\u042F\u0437\u0432\u0430 \u043D\u0430 \u0434\u0443\u0448\u0435"},{name:"Z\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F"}]},vc=UE;var zE={id:"moshchi",name:"\u041C\u043E\u0449\u0438",year:2e3,folder:"/artist/shmely/albums/2000_moshi.jpg",streaming:{spotify:"https://open.spotify.com/album/1xaIDZcBZLaXtnrsfg1Tbr",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_mcpRAnZyTiyTLoYoZlOifD4WoKEopi6vs",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_mGUbrFjlAsspY8eHWwTpWm_7DAB7C5J1s",yandexMusic:"https://music.yandex.ru/album/3444130"},songs:[{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"},{name:"\u042D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u0425\u0430"},"laboratoriya-altruizma",{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0430-\u0432\u0430\u043C\u043F\u0438\u0440"},{name:"\u0412 \u043C\u044F\u0441\u043D\u043E\u043C \u0446\u0435\u0445\u0443 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A \u0434\u0443\u0448\u0438"},{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u041B\u0443\u043A\u0430\u0432\u044B\u0439 \u0441\u0443\u0438\u0446\u0438\u0434"},{name:"\u041F\u0430\u0434\u0430\u043B\u044C"},{name:"\u0410\u0442\u0435\u0438\u0441\u0442"},{name:"\u0420\u0430\u0434\u0438\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B"},{name:"\u041C\u0430\u0441\u0442\u0443\u0440\u0431\u0430\u0442\u043E\u0440"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432 \u0438 \u041A\u0430\u043C\u043D\u0435\u0431\u043B\u044F\u0434\u043E\u0432"}],info:`
\u0412\u043E\u0442 \u0447\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0428\u043C\u0435\u043B\u0438:

"\u0410\u043B\u044C\u0431\u043E\u043C \u041C\u043E\u0449\u0438, \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0433\u0434\u0435-\u0442\u043E \u0432 1999 \u0433. \u0438\u043B\u0438 \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 2000 \u0433. (\u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u043C), \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E-\u0434\u0432\u0435, \u0432\u0434\u0432\u043E\u0451\u043C. \u0410\u043B\u044C\u0431\u043E\u043C \u043F\u0438\u0441\u0430\u043B\u0441\u044F \u043D\u0435 \u0432 \u0441\u0430\u043C\u043E\u0435 \u043B\u0443\u0447\u0448\u0435\u0435 \u043D\u0430\u0448\u0435 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435... \u041A\u0430\u043A \u043F\u043E\u043C\u043D\u0438\u0442\u0441\u044F, \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430 \u0437\u043B\u043E (\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E \u043A\u043E\u043C\u0443) \u0443\u0436\u0430\u0441\u043D\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C, \u041E\u0434\u0438\u043D \u0438\u0437 \u043D\u0438\u0445 - "\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C", \u0430 \u044D\u0442\u043E, \u0442\u0430\u043A \u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C. \u041F\u043E \u0440\u0430\u0437\u043D\u044B\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0441\u0430\u043C\u0438 \u043C\u044B \u0435\u0433\u043E \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u043C. \u0414\u0443\u043C\u0430\u0435\u043C \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0441\u0442\u0438\u043D\u043D\u044B\u043C \u0444\u0430\u043D\u0430\u0442\u0430\u043C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 \u0438\u0437 \u043D\u0435\u0433\u043E \u0443\u0436\u0435 \u0431\u044B\u043B\u0438 \u0432 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u0430\u0445. \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0441\u0435\u043D \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u0440\u0430\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441 \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C\u0438. \u042D\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044F \u0435\u0449\u0451 \u043D\u0435\u043E\u0442\u043C\u0430\u0441\u0442\u0435\u0440\u0451\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0432\u0443\u0447\u0438\u0442 \u0442\u0438\u0445\u043E".
  `},wc=zE;var WE={id:"trahni-nebo",name:"\u0422\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E",year:2e3,folder:"/artist/shmely/albums/2000_nebo.jpg",songs:[{name:"\u041B\u0430\u0439 \u0438\u043B\u043B\u044E\u0437\u0438\u0438"},{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043E\u043B\u043D\u044B\u0448\u043A\u043E"},"tulovishchej",{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0413\u0430\u043D\u044C\u0431\u0430"},{name:"\u0410\u043B\u043B\u0438\u043B\u0443\u0439\u044F"},"raspyatie","trahni-nebo","divchina-kulya",{name:"\u0417\u0430\u0432i\u0442\u0430\u0439 \u0437\u0430\u0447i\u043A\u0430\u0439"},{name:"\u0424\u0430\u0448\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B"},{name:"\u0422\u0440\u0430\u0432\u044B"}]},bc=WE;var GE={id:"organizm",name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043C",year:2e3,folder:"/artist/shmely/albums/2000_organizm.jpg",songs:["polna-suma",{name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043C"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439"},{name:"\u041F\u0443\u0442\u044C \u043A... (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435"},"pokidaya-mir",["slyoznaya",{name:["\u041B\u0438\u0445\u0430 \u0442\u0430 \u0431\u0435\u0434\u0430"]}],{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u0418\u0432\u043E\u043B\u0433\u043E\u0439"},{name:"\u0413\u0440\u043E\u0437\u0430 (\u041A\u043B\u043E\u0447\u044C\u044F)"},"laboratoriya-altruizma",{name:"\u0427\u0435\u0440\u0435\u043F \u0438 \u043F\u043E\u0434\u0441\u043D\u0435\u0436\u043D\u0438\u043A"},{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"}]},Dc=GE;var YE={id:"spazmy-roka",name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430",year:2001,folder:"/artist/shmely/albums/2001_spazmi.jpg",streaming:{spotify:"https://open.spotify.com/album/28tVBP8rDTC3eLMVzOAZ5m",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_l79--sEsZYpEuVcmBME0YHVr2cHd5B22U",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_noWkxPhjlR4FF4_LZCf6WX1ztDral0UMg",yandexMusic:"https://music.yandex.ru/album/3444133"},songs:["ya-vselennaya",{name:"\u041C\u0430\u043A\u0435\u0442 \u041C\u0438\u0440\u0430 \u0421\u0447\u0430\u0441\u0442\u044C\u044F"},"na-ladoni-planeta",{name:"\u041E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u0432\u0435\u0442, \u043E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u043B\u0435\u0434"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u0434\u0430"},["patologoanatom",{name:["\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C (\u041A\u043B\u043E\u0447\u044C\u044F)"]}],"novaya-religiya",{name:"\u0416\u0434\u0430\u0442\u044C"},{name:"\u041C\u043E\u044F \u043B\u044E\u0431\u0438\u043C\u0430\u044F (\u0411\u0435\u0448\u0435\u043D\u044B\u0439 \u043A\u0430\u0439\u0444)"},{name:"\u041D\u0435\u0432\u0435\u0441\u0451\u043B\u0430\u044F \u0441\u043A\u0430\u0437\u043A\u0430"},"saprofag",{name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430"},["volosy",{name:["\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B"]}],{name:"\u0417\u0430\u0432\u0442\u0440\u0430 \u043D\u0430 \u0432\u044B\u043F\u0438\u0441\u043A\u0443 \u0432 \u0430\u0434 (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0412\u0441\u0451 \u0432\u043E \u0438\u043C\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430"},{name:"\u0411\u043E\u0439"}]},Ic=YE;var qE={id:"risunki-na-dushe",name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435",year:2001,folder:"/artist/shmely/albums/2001_risunki.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79304"},songs:[{name:"Intro"},"skelety",{name:"\u041F\u0443\u0442\u044C \u043A..."},{name:"\u0413\u0440\u043E\u0437\u0430"},"patologoanatom",{name:"\u041F\u043B\u044F\u0448\u0443\u0449\u0438\u0439 \u043A\u0430\u0440\u043B\u0438\u043A"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439"},{name:"\u0417\u0430\u0432\u0442\u0440\u0430 \u043D\u0430 \u0432\u044B\u043F\u0438\u0441\u043A\u0443"},"tulovishchej",{name:"\u041A\u043B\u044E\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043E\u043A"},"laboratoriya-altruizma",{name:"\u0414\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0442\u0430"},["tulovishchej",{name:["\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435\u0439 (remix)"]}],{name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435"},["skelety",{name:["\u0421\u043A\u0435\u043B\u0435\u0442\u044B (video edit)"]}],{name:"Outro"}]},Cc=qE;var ZE={id:"poshmelye",name:"\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435",year:2002,folder:"/artist/shmely/albums/2002_poshmele.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79307"},songs:["ya-vselennaya",{name:"\u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445"},{name:"\u041E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u0432\u0435\u0442, \u043E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u043B\u0435\u0434"},"na-ladoni-planeta",{name:"\u0413\u0440\u043E\u0437\u0430"},{name:"\u041F\u043E\u043B\u0435"},"poshmelye",{name:"\u041A\u043B\u043E\u0443\u043D"},{name:"\u041F\u0443\u0442\u044C \u043A..."},"volosy",{name:"\u041A\u0440\u043E\u043D\u043E\u0441"},{name:"\u0422\u0435\u043D\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B"},"skelety","patologoanatom","novaya-religiya",{name:"\u0426\u0432\u0435\u0442\u044B"}],info:`
"\u041F\u041E\u0428\u041C\u0415\u041B\u042C\u0415" - \u0441\u0431\u043E\u0440\u043D\u0438\u043A (2002)
\u042D\u0442\u043E\u0442 \u0441\u0431\u043E\u0440\u043D\u0438\u043A \u043F\u0435\u0441\u0435\u043D \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430 \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0430\u043C\u0438 \u0438\u0445 \u0433\u0440\u0443\u043F\u043F\u044B "\u0428\u041C\u0415\u041B\u0418".
\u0412\u044B\u043F\u0443\u0449\u0435\u043D \u0444\u0438\u0440\u043C\u043E\u0439 Moroz Records \u0432 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435 2002 \u0433\u043E\u0434\u0430. \u0412 \u043D\u0435\u0433\u043E \u0432\u043E\u0448\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 2000-2002 \u0433\u043E\u0434\u043E\u0432.
\u041A\u0440\u043E\u043C\u0435 \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430, \u0432 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0435\u0441\u0435\u043D, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B:
\u0421\u043E\u0432\u0430, \u0420\u043E\u0441\u0441, \u0418\u0432\u0430\u043D, A. Waters, \u041C\u0430\u043A\u0441 (\u041A\u0440\u0430\u043D\u0442\u044B), \u0410. \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432.
`},Ec=ZE;var QE={id:"negativ-prostranstva",name:"\u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",year:2002,folder:"/artist/shmely/albums/2002_negativ.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79306"},songs:[{name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440"},{name:"\u0412\u0435\u0440\u0430 \u0438 \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u0412\u043E\u043B\u0447\u0438\u0446\u0430"},{name:"\u041D\u0435\u0436\u043D\u043E\u0441\u0442\u044C"},"slyoznaya",{name:"\u041F\u0435\u0440\u0432\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0433\u0440\u0435\u0445"},{name:"\u041B\u0438\u0445\u043E\u0440\u0430\u0434\u0438\u0442 \u043C\u0435\u043D\u044F \u043D\u043E\u0447\u044C"},{name:"\u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430"},{name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0435\u0439\u0441 (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0412\u044B\u0441\u043E\u0442\u0430"},{name:"\u041F\u0440\u043E\u0449\u0430\u0439"},{name:"\u0427\u0435\u0440\u0435\u0437 \u043A\u0440\u0430\u0439"},{name:"\u0411\u0440\u0430\u0433\u0430"},{name:"\u0412\u0441\u0451"},{name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440 (Club MIX)"}]},xc=QE;var KE={id:"agressivnyj-pokoj",name:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",year:2002,folder:"/artist/shmely/albums/2002_pokoy.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79305"},songs:["bol",{name:"\u0422\u044B \u0441\u043D\u0435\u0433 \u0432 \u043C\u043E\u0435\u0439 \u043F\u0440\u0435\u0438\u0441\u043F\u043E\u0434\u043D\u0435\u0439"},{name:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439"},{name:"The First Love"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439 (new version)"},{name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435 (new version)"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435 (1999)"},"blagodat","maneken",["laboratoriya-altruizma",{name:["\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C\u0430 (new version)"]}],{name:"\u0414\u0435\u043D\u044C \u0421\u0432\u044F\u0442\u043E\u0433\u043E \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430"},{name:"\u041E\u0442\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u0433\u0438"},["slyoznaya",{name:["\u0421\u043B\u0451\u0437\u043D\u0430\u044F (remix)"]}],{name:"\u041B\u0438\u0431\u043E (remix)"},{name:"\u0413\u0440\u043E\u0437\u0430 (remix)"},{name:"\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0439 \u0437\u0430\u043C\u043E\u043A (live 1999)"},{name:"\u041B\u0430\u043A\u0430\u0439 \u043E\u0442\u0440\u0430\u0432\u0443 (live 1999)"}]},_c=KE;var JE={id:"polna-suma",name:"\u041F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430",year:2003,folder:"/artist/shmely/albums/2003_suma.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79309"},songs:[{name:"\u0417\u0432\u0435\u0440\u044C"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C"},{name:"\u0422\u043E\u0441\u043A\u0430"},{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},"polna-suma","laboratoriya-altruizma",{name:"\u0412\u043E\u0434\u0430"},{name:"\u0421\u0430\u0434\u0438\u0437\u043C"},{name:"\u0420\u0430\u0434\u0438\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B"},{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442"},{name:"\u0411\u043E\u043C \u043B\u0431\u043E\u043C"},{name:"\u0422\u0438\u0448\u0438\u043D\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u041E\u0431\u043B\u0430\u043A\u0430"},{name:"\u042D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u0425\u0430"},{name:"\u0413\u043E\u0440\u0438, \u043A\u043E\u0441\u0442\u0451\u0440!"},{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0422\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"},{name:"\u0425\u0443\u043B\u0438 \u043F\u0443\u043B\u0438 \u043F\u0440\u0430\u0445\u0443"},{name:"\u0423\u0430-\u0443-\u0443\u0430"}]},Sc=JE;var XE={id:"ostanovite-chelovechestvo",name:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043E",year:2003,folder:"/artist/shmely/albums/2003_ostanovite.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79308"},songs:[{name:"\u0410\u0438\u0441\u0442 \u043D\u0430\u0434 \u0438\u043D\u043A\u0443\u0431\u0430\u0442\u043E\u0440\u043E\u043C"},{name:"\u042F \u0432\u0441\u0451 \u043D\u0430\u0440\u0443\u0448\u0438\u043B"},{name:"\u0412 \u043A\u043B\u043E\u0447\u044C\u044F"},{name:"\u0427\u0443\u0436\u043E\u0439"},{name:"\u0428\u0430\u043D\u0441"},{name:"\u041A\u0440\u0430\u0441\u043E\u0442\u0430"},{name:"\u041D\u0430 \u043C\u043E\u0433\u0438\u043B\u0435 \u043B\u044E\u0431\u0432\u0438"},{name:"\u0411\u0438\u043E-\u043C\u043E\u0442\u043E\u0440"},{name:"\u041E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u044F"},{name:"\u041D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430"},{name:"\u041F\u0440\u043E\u0440\u0432\u0451\u043C\u0441\u044F"},{name:"\u0413\u043E\u043B\u043E\u0441-\u043F\u0430\u043B\u0430\u0447"},{name:"\u041E\u043D"},{name:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043E"},{name:"\u041C\u043E\u0439 \u043F\u0443\u0442\u044C"},{name:"\u0412\u0437\u0433\u043B\u044F\u0434 \u0438\u0437\u043D\u0443\u0442\u0440\u0438"}]},Mc=XE;var ex={id:"zhazhda",name:"\u0416\u0430\u0436\u0434\u0430",year:2004,folder:"/artist/shmely/albums/2004_zh.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79310"},songs:[{name:"\u0416\u0430\u0436\u0434\u0430"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430\u044F (\u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u044F\u044F)"},{name:"\u0421\u0435\u0440\u0430"},{name:"\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u0437\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F)"},{name:"\u0422\u0440\u0443\u0434\u043D\u044B\u0439 \u0440\u0435\u0431\u0451\u043D\u043E\u043A (\u0448\u043A\u043E\u043B\u044C\u043D\u0430\u044F)"},["ya-ne-angel",{name:["\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B (\u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)"]}],{name:"\u0414\u0438\u0441\u043A\u043E\u0442\u0435\u043A\u0430 (\u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u044F\u044F)"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C (\u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)"},{name:"\u041A\u043E\u0440\u043E\u0431\u0430\u0441"}],info:`
\u0412\u043D\u0435\u043F\u043B\u0430\u043D\u043E\u0432\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C (\u0442\u0438\u0440\u0430\u0436 100 \u0448\u0442.).
\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201DSka'n'Dall\u201D \u0433. \u0420\u043E\u0432\u043D\u043E. 2004 \u0433.

\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201D\u0428\u041C\u201D

\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B - \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432.


"\u0412 \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043E\u0448\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u0438\u0435, \u0437\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435, \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0443\u0436\u0435 \u0438\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0445 \u0440\u0430\u043D\u0435\u0435 \u0438 \u043D\u043E\u0432\u044B\u0435..."
  `},Tc=ex;var tx={id:"ten-serdca",name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430",year:2004,folder:"/artist/shmely/albums/2004_ten.jpg",streaming:{spotify:"https://open.spotify.com/album/7fsVsr0pCmCEpyQ9o2jMXW",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_k_3MQ5DeK39QrTGigpDgrsyMK04F16W-c",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_l8lFy44LN0_BS2JYDee8CyKtCkd3xmfL0",yandexMusic:"https://music.yandex.ru/album/79311"},songs:[{name:"\u0414\u043B\u044F \u043D\u0435\u0451 \u043E\u0434\u043D\u043E\u0439"},{name:"\u0411\u0435\u0439, \u043A\u043E\u043B\u043E\u043A\u043E\u043B!"},{name:"\u041D\u0430\u043F\u0440\u043E\u043B\u043E\u043C"},{name:"\u0412\u043E\u043B\u0447\u044C\u044F \u044F\u0433\u043E\u0434\u0430"},{name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430"},{name:"\u041B\u0438\u0432\u0435\u043D\u044C \u0441\u043B\u0451\u0437"},{name:"\u0412\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0443\u0448"},{name:"\u041A\u0430\u0440\u0443\u0441\u0435\u043B\u044C"},{name:"\u0422\u044C\u043C\u0430"},{name:"\u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0434\u0443\u0448\u0438"},{name:"\u0412\u043C\u0435\u0441\u0442\u0435 \u0443\u043C\u0435\u0440\u0435\u0442\u044C"},{name:"\u0421\u0432\u043E\u0431\u043E\u0434\u0430"},{name:"\u0421\u043F\u0438\u0434\u0432\u0435\u0439"},{name:"\u0412\u043E\u043B\u0447\u044C\u044F \u044F\u0433\u043E\u0434\u0430 (remix)"},{name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430 (remix)"}],info:`
\u041B\u0451\u0441 (\u041B\u0451\u043B\u044F) - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430; \u0428\u043C\u0435\u043B\u044C (\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440) - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043C\u0443\u0437\u044B\u043A\u0430, \u0442\u0435\u043A\u0441\u0442\u044B; \u0420\u043E\u0441\u0441 (\u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432) - \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u0411\u0430\u0437\u0438\u043B\u0438\u043E (\u0418\u0433\u043E\u0440\u044C) - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u041B\u0430\u0440\u0441 (\u042E\u0440\u0430) - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B.
\u041F\u0435\u0441\u043D\u044F \u201D\u0414\u043B\u044F \u043D\u0435\u0451 \u043E\u0434\u043D\u043E\u0439\u201D \u043F\u043E\u0441\u0432\u044F\u0449\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0437\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0443\u0448\u0435\u0434\u0448\u0435\u043C\u0443 \u0438\u0437 \u0436\u0438\u0437\u043D\u0438 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u0443 - \u041D\u0438\u043A\u043E\u043B\u0430\u044E \u0411\u044B\u043A\u043E\u0432\u0443, \u0438 \u0434\u0440\u0443\u0433\u0438\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0443\u0436\u0435 \u043D\u0435\u0442 \u0432 \u0436\u0438\u0432\u044B\u0445.
\u0417\u0430\u043F\u0438\u0441\u044C, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433 \u0438 \u0440\u0435\u043C\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 - \u0420\u043E\u0441\u0441. \u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0430 \u201DSHMELY RECORDS\u201D \u043D\u043E\u044F\u0431\u0440\u044C 2003 \u0433. - \u043C\u0430\u0440\u0442 2004 \u0433. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0442\u0438\u0438 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u201D\u0422\u0415\u041D\u0418\u041F\u201D \u0410. \u0415\u0440\u043C\u0430\u043A\u043E\u0432\u044B\u043C. \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0430 \u201DA.W. studio\u201D. \u0421\u043A\u0440\u0438\u043F\u043A\u0438 \u0432 \u043F\u0435\u0441\u043D\u0435 \u201D\u0422\u0415\u041D\u042C \u0421\u0415\u0420\u0414\u0426\u0410\u201D - \u041C\u0430\u0440\u044C\u044F\u043D\u0430 \u041F\u0438\u0441\u043A\u0430\u0440\u0451\u0432\u0430 (\u0414\u043E\u0441). \u041A\u043B\u0438\u043F - \u0418\u0433\u043E\u0440\u044C \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0438\u0439.
  `},Ac=tx;var nx={id:"lyod",name:"\u041B\u0451\u0434",year:2005,folder:"/artist/shmely/albums/2005_lyod.jpg",streaming:{spotify:"https://open.spotify.com/album/5pL8KLhjDalWkja1X7dKz9",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nXvdHxMP-aZmghtnw-vMDkh7MmjhHzMSc",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lNKOLD4k7WdPQm4mG-38CMnTtmV_Dd-rc",yandexMusic:"https://music.yandex.ru/album/79313"},songs:[{name:"\u041E\u0441\u0438\u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043B"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u043F\u0442\u0438\u0446\u0430"},{name:"\u0421\u043E\u043B\u043D\u0446\u0435 \u043C\u043E\u0451"},{name:"\u041B\u044E\u0431\u043E\u0432\u044C"},{name:"\u041F\u043E\u0432\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430 \u0441\u043D\u043E\u0432"},{name:"\u0418\u0434\u0438"},{name:"\u041F\u043E\u043B\u044B\u043D\u044C"},{name:"\u041B\u0451\u0434"},{name:"\u0428\u0443\u0442\u043A\u0430"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u043B\u0433\u0430"},{name:"\u041D\u0430 \u0442\u043E\u043C \u0441\u0432\u0435\u0442\u0435 \u043C\u044B \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043C\u0441\u044F \u0432\u043D\u043E\u0432\u044C"},{name:"\u041E\u0433\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u0451\u0437\u044B \u0433\u0438\u0435\u043D\u044B"},{name:"\u0414\u0430\u0432\u0438\u0442 \u043D\u0435\u0431\u043E"}],info:`
\u041B\u0451\u0441 (\u041B\u0451\u043B\u044F) - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430; \u0428\u043C\u0435\u043B\u044C (\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440) - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043C\u0443\u0437\u044B\u043A\u0430, \u0442\u0435\u043A\u0441\u0442\u044B; \u0420\u043E\u0441\u0441 (\u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432) - \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u0411\u0430\u0437\u0438\u043B\u0438\u043E (\u0418\u0433\u043E\u0440\u044C) - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u041C\u0430\u0440\u0442\u044B\u043D (\u0410\u043D\u0434\u0440\u0435\u0439) - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B.
\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201DShmely rec.\u201D \u0438 \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u201D\u0422\u0435\u043D\u0438\u043F\u201D (095) 963-71-49. \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433 - \u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432 \u0429\u0435\u0440\u0431\u0430\u0442\u043A\u043E (\u0420\u043E\u0441\u0441).
\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u043E\u043A\u0430\u043B\u043E\u0432 \u0438 \u0434\u0432\u0443\u0445 \u043F\u0435\u0441\u0435\u043D; \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430 \u041A\u043E\u0437\u043B\u043E\u0432\u0430 - \u0431\u0430\u043B\u0430\u043B\u0430\u0439\u043A\u0430; \u041E\u043B\u0435\u0433\u0430 \u0422\u0443\u0440\u0442\u044B\u0433\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430; \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u0430\u0441, \u0437\u0430\u043F\u0438\u0441\u044C.
  `},kc=nx;var rx={id:"vethij-sbornik",name:"\u0412\u0435\u0442\u0445\u0438\u0439 \u0441\u0431\u043E\u0440\u043D\u0438\u043A",year:2005,folder:"/artist/shmely/albums/2005_vs.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79303"},songs:[{name:"\u041F\u043E\u043C\u043E\u043B\u0438\u0441\u044C"},{name:"\u0423 \u0413\u0430\u044E"},{name:"\u041A\u0440\u0438\u0436\u0430\u043D\u0430 \u0432\u043E\u0434\u0430"},{name:"\u0414\u0438\u0432\u043E"},{name:"\u0412\u0435\u0441\u043D\u044F\u043D\u043A\u0430"},{name:"\u041Ci\u0441\u044F\u0446\u044A"},{name:"\u041E-\u041E-\u041E"},{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C"},{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u0414\u0443\u043D\u044F"},{name:"\u0428\u0443\u043B\u043E\u0432\u044C\u0435"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430"},{name:"\u0417\u0430\u0432i\u0442\u0430\u0439"},{name:"\u041E\u0431\u0435\u0441\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0430\u0445"},"saprofag"]},Nc=rx;var ox={id:"vosem-zhenshchin-na-raduge",name:"\u0412\u043E\u0441\u0435\u043C\u044C \u0436\u0435\u043D\u0449\u0438\u043D \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435",year:2005,folder:"/artist/shmely/albums/2005_8.jpg",streaming:{spotify:"https://open.spotify.com/album/3XCE0DFw3NkkTXcIXQUBUG",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_n5v0d9QAPVVjafh936OD9bKmlrdjXaJG0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_k78_d1RVxFP6B04ZnTvobzmfJMMYLNN7o",yandexMusic:"https://music.yandex.ru/album/79312"},songs:[{name:"\u0412\u043F\u0435\u0440\u0435\u0434\u0438"},{name:"\u041F\u043E\u0445\u043E\u0440\u043E\u043D\u044B \u043B\u044E\u0431\u0432\u0438"},{name:"\u041F\u043E\u043B\u043D\u043E\u043B\u0443\u043D\u0438\u0435"},{name:"\u0412\u043E\u0441\u0435\u043C\u044C \u0436\u0435\u043D\u0449\u0438\u043D \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435"},{name:"\u041C\u0435\u043B\u044C\u043F\u043E\u043C\u0435\u043D\u0430"},"ya-ne-angel",{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u0421\u043E\u043B\u043D\u0446\u0435 \u0432\u0430\u043C\u043F\u0438\u0440\u0430"},{name:"\u0425\u0443\u0434\u043E\u0436\u043D\u0438\u043A"},{name:"\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0441\u043D\u0430"},{name:"\u0420\u0438\u0442\u0443\u0430\u043B \u0441\u043E\u0436\u0436\u0435\u043D\u0438\u044F \u043A\u0443\u043A\u043E\u043B"},{name:"\u0413\u043B\u043E\u0442\u043E\u043A"},{name:"\u0421\u0442\u043E\u043D \u043E\u043B\u0438\u0446\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F"},{name:"\u0413\u0434\u0435 \u0435\u0441\u0442\u044C \u0442\u044B"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0431\u0430\u0431\u043E\u0447\u043A\u0430"},{name:"\u0420\u0430\u0434\u0443\u0433\u0430 \u043D\u0430\u0434 \u0431\u0435\u043D\u0437\u0438\u043D\u043E\u0432\u043E\u0439 \u043B\u0443\u0436\u0435\u0439"}],info:`
\u041B\u0401\u0421 - \u0432\u043E\u043A\u0430\u043B, \u0445\u043E\u0440\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u0442\u0438\u0438, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
\u0428\u041C\u0415\u041B\u042C - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u043F\u0430\u0440\u0442\u0438\u0438 \u0443\u0434\u0430\u0440\u043D\u044B\u0445, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
A. WATERS - \u0433\u0438\u0442\u0430\u0440\u0430, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0418\u0432\u0430\u043D \u0422\u0438\u043C\u043E\u0448\u0435\u043D\u043A\u043E - \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430; \u0414\u043E\u0441 - \u0441\u043A\u0440\u0438\u043F\u043A\u0430; \u041F\u0430\u0432\u0435\u043B \u0428\u0443\u0432\u0430\u0435\u0432 - \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430; \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u043E\u0432
"A.W.Studio", \u0441\u0442\u0443\u0434\u0438\u044F "\u0422\u0415\u041D\u0418\u041F" 2005 \u0433.
  `},Rc=ox;var ix={id:"pugovica",name:"\u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430",year:2006,folder:"/artist/shmely/albums/2006_pugovica.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79314"},songs:["intro",{name:"\u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430"},{name:"\u0410\u043D\u0433\u0435\u043B 13"},{name:"\u0421\u0442\u0440\u0438\u043F\u0442\u0438\u0437 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0434\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F"},{name:"\u041C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441"},"gilotina","zver","renessans","antiromantika",{name:"\u0425\u043E\u0434\u0438\u0442 \u0447\u0451\u0440\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u043B\u0435\u0432\u0430"},{name:"\u0412\u0430\u043B\u044C\u0441 \u0432\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u044B\u0445 \u0432\u043E\u043B\u043D"},{name:"\u041A\u0430\u0442\u0451\u043D\u043A\u0430"},{name:"\u041C\u0438\u0440 - \u043A\u043E\u043C\u0435\u0434\u0438\u044F"},"sudorogi"],info:`
\u0421\u043E\u043B\u044C\u043D\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C \u041B\u0451\u0441\u0430 \u0438 \u0428\u043C\u0435\u043B\u044F \u041F\u0423\u0413\u041E\u0412\u0418\u0426\u0410
\u0418\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043B\u0441\u044F \u043A\u0430\u043A \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439. \u041D\u043E \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F \u0431\u044B\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430. \u0412 \u043D\u0435\u0433\u043E \u0432\u043E\u0448\u043B\u0438 \u0442\u0430\u043A\u0436\u0435 \u043F\u0435\u0441\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 Lyolya & Shmel'. \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0432 \u0445\u043E\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u0438\u043D\u044F\u043B \u0443\u0447\u0430\u0441\u0442\u0438\u0435 Alan Waters. \u0422\u0430\u043A \u0447\u0442\u043E \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043F\u043E\u043B\u043D\u0435 \u043C\u043E\u0436\u043D\u043E \u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u043E\u0439 \u0428\u041C \u0438 AW, \u0435\u0441\u043B\u0438 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u0432 \u0441\u0447\u0451\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u043F\u0435\u0441\u0435\u043D.
  `},Oc=ix;var sx={id:"ya-vernus-k-tebe",name:"\u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u043A \u0442\u0435\u0431\u0435",year:2006,folder:"/artist/shmely/albums/2006_vernus.jpg",songs:[{name:"\u0416\u0434\u0438 \u043C\u0435\u043D\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u0447\u044C"},{name:"\u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445"},{name:"\u0412\u044C\u044E\u0433\u0430"},"laboratoriya-altruizma",{name:"\u0413\u0440\u043E\u0437\u0430"},"biomekhanika",{name:"\u041A\u043B\u043E\u0443\u043D \u0443\u043C\u0435\u0440"},"bol","pokidaya-mir",{name:"\u0412\u0441\u0435 \u043C\u0435\u0447\u0442\u044B \u0441\u0431\u044B\u0432\u0430\u044E\u0442\u0441\u044F"},{name:"\u0414\u0440\u0430\u043C\u0430"},{name:"\u042D\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440"},{name:"\u0414\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F"}],info:`
\u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u0432 \u0438 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u0432, \u0437\u0434\u0435\u0441\u044C \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u0440\u0435\u0448\u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0436\u0438\u0432\u044B\u0435 \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u0447\u0442\u043E, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u043E\u0442\u0440\u0430\u0437\u0438\u043B\u043E\u0441\u044C \u043D\u0430 \u043E\u0431\u0449\u0435\u043C \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B. \u0412\u043E \u043C\u043D\u043E\u0433\u043E\u043C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u043E\u0432\u043E\u043C\u0443 \u0432\u0442\u043E\u0440\u043E\u043C\u0443 \u0433\u0438\u0442\u0430\u0440\u0438\u0441\u0442\u0443 \u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0446\u0443 \u0441\u0430\u0443\u043D\u0434 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0442\u044F\u0436\u0435\u043B\u0438\u043B\u0441\u044F, \u0433\u0438\u0442\u0430\u0440\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0435\u0432\u0443\u0442 \u0438 \u0440\u0430\u0437\u0434\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u043C\u043E\u0449\u044C\u044E \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u0430\u043B\u044C\u0431\u043E\u043C\u0430. \u0422\u0430\u043A\u043E\u0433\u043E \u043C\u043E\u0449\u043D\u043E\u0433\u043E \u0437\u0432\u0443\u043A\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430.
\u041F\u043E \u0441\u0443\u0442\u0438 \u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u043A \u0442\u0435\u0431\u0435... \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u043C, \u0430 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C \u0438\u0437 \u043A\u043E\u0440\u043E\u043D\u043D\u044B\u0445 \u0436\u0438\u0432\u044B\u0445 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B, \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043D\u043E\u0432\u043E, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0430\u0440\u044B \u043D\u043E\u0432\u044B\u0445 \u043F\u0435\u0441\u0435\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043F\u0440\u043E\u0447\u0435\u043C, \u043D\u0435 \u0443\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u0432 \u0445\u0438\u0442\u043E\u0432\u043E\u0441\u0442\u0438 \u0441\u0442\u0430\u0440\u044B\u043C \u043F\u0435\u0441\u043D\u044F\u043C. \u0417\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u043B\u043E\u043D\u043D\u0438\u043A\u0438 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u0430 \u043D\u0430\u0439\u0434\u0443\u0442 \u0442\u0430\u043A\u0438\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043A\u0430\u043A \u0411\u043E\u043B\u044C, \u0413\u0440\u043E\u0437\u0430, \u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445 \u0438 \u0434\u0430\u0436\u0435 \u0442\u0430\u043A\u0443\u044E \u0434\u0440\u0435\u0432\u043D\u044E\u044E \u043F\u0435\u0441\u043D\u044E \u043A\u0430\u043A \u0412\u044C\u044E\u0433\u0430. \u041A \u043C\u0438\u043D\u0443\u0441\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043D\u0435\u0441\u0442\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437\u043C\u044B\u0442\u044B\u0439 \u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0436\u0438\u0432\u043E\u0439 \u0437\u0432\u0443\u043A, \u043F\u043E\u0440\u043E\u0439, \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0430\u043B\u044C\u0431\u043E\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043D\u044F\u0442\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043D\u0438\u043A\u043E\u043C, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0432\u0440\u0430\u0437\u0443\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u0432 \u0432\u0438\u0434\u0435 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0414\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F.
  `},Pc=sx;var ax={id:"koshkiny-obidy",name:"\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B",year:2007,folder:"/artist/shmely/albums/2007_obidy.jpg",streaming:{spotify:"https://open.spotify.com/album/4GUxH5Jfgjt8as9HOTgert",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_lR7Pe58N1QAhRwvosJkNnfAnnm1vtxoS0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lDcR1z3lQhYexnJx3XtUCozmhSDzgbLuw",yandexMusic:"https://music.yandex.ru/album/3444128"},songs:[{name:"\u0423\u0445\u043E\u0434\u0438"},{name:"\u0427\u0435\u0440\u0435\u043F. \u0421\u043B\u0451\u0437\u044B."},{name:"\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B"},{name:"\u041F\u0430\u043D\u0442\u043E\u043C\u0438\u043C\u0430"},{name:"\u041C\u0435\u0447"},{name:"\u0420\u0430\u0432\u043D\u043E\u0434\u0443\u0448\u043D\u043E"},{name:"\u0417\u043B\u043E \u0440\u0435\u043A\u0438"},{name:"\u041B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0438\u0445\u043E\u0434"},{name:"\u0416\u0435\u0440\u0442\u0432\u0430"},{name:"\u0421\u0443\u0435\u0442\u0430"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430 \u043A \u043C\u043E\u0440\u044E"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u043B\u0435\u0442\u0443\u0447\u0430\u044F \u043C\u044B\u0448\u044C"},{name:"\u0417\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u043E\u043C (Shado News)"},{name:"La Rencontre (Steve Love)"}],info:`
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
  `},Fc=ax;var lx={id:"karamelnyye-strahi",name:"\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438",year:2008,folder:"/artist/shmely/albums/2008_strahi.jpg",streaming:{spotify:"https://open.spotify.com/album/7biUa81AdYs3MZ44VKMJXr",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_mP9ymhFypJA4WYW-baAVJ0yKUwGO0-M8g",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nXeF2ClIBVJ0TsyEbRNV7FoJFjjtssJUY",yandexMusic:"https://music.yandex.ru/album/3444127"},songs:[{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u0432 \u0441\u0435\u0440\u043E\u043C"},{name:"\u0421\u0432\u0430\u0434\u044C\u0431\u044B \u043D\u0435 \u0431\u0443\u0434\u0435\u0442"},{name:"\u041C\u0430\u043C\u0430"},{name:"\u041D\u0435\u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435 \u0441\u043D\u044B (\u0441\u0442\u0438\u0445)"},{name:"\u041A\u043E\u043B\u044B\u0431\u0435\u043B\u044C\u043D\u0430\u044F+"},{name:"\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438"},{name:"\u0420\u0430\u043D\u044B"},{name:"\u042F \u0442\u0435\u0431\u044F \u043B\u044E\u0431\u043B\u044E"},{name:"\u0417\u043C\u0435\u044F \u044D\u0439\u0444\u043E\u0440\u0438\u044F"},{name:"\u042F \u0431\u0443\u0434\u0443 \u0436\u0438\u0442\u044C"},{name:"\u041D\u0435\u0440\u0432\u044B"},{name:"\u041B\u0438\u0440\u0438\u043A\u0430"},{name:"\u0426\u0432\u0435\u0442 \u0434\u043E\u0436\u0434\u044F (bonus track)"},{name:"\u0412 \u0436\u0438\u0432\u044B\u0445 \u0438\u0433\u0440\u0430\u044E\u0442 \u043C\u0435\u0440\u0442\u0432\u0435\u0446\u044B (bonus track)"}]},Lc=lx;var ux={id:"moskovskaya-yarmarka-udovolstvij",name:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u044F\u0440\u043C\u0430\u0440\u043A\u0430 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0439",year:2009,folder:"/artist/shmely/albums/2009_myau.jpg",streaming:{spotify:"https://open.spotify.com/album/0wzOwUeEa3fVPI77pJRK8E",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_loV5x6XOgMrmUH5w9d1IlTiuF_jGr3ll8",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nH21z5pDqYVpk4W06KePL0KE-pMCeRVCw",yandexMusic:"https://music.yandex.ru/album/3444131"},songs:[{name:"\u0412\u0441\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C"},{name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430 \u0441 \u0447\u0451\u0440\u043D\u044B\u043C\u0438 \u0431\u0430\u043D\u0442\u0438\u043A\u0430\u043C\u0438"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0442\u0435\u043D\u044C"},{name:"\u0416\u0451\u043B\u0443\u0434\u0438"},{name:"\u041B\u044E\u0431\u043E\u0432\u044C \u0438\u0437 \u0441\u0442\u0435\u043A\u043B\u0430"},{name:"\u041B\u0430\u0441\u043A\u0430"},{name:"\u041A\u0440\u0438\u0437\u0438\u0441"},{name:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u044F\u0440\u043C\u0430\u0440\u043A\u0430 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0439"},{name:"\u041F\u0438\u0440"},{name:"\u0414\u0432\u0435 \u0441\u0442\u043E\u043B\u0438\u0446\u044B"},{name:"\u0411\u0440\u044E\u0445\u043E"},{name:"\u0417\u043E\u044F"},{name:"\u0413\u0434\u0435? (bonus track)"},{name:"\u0421 \u041D\u043E\u0432\u044B\u043C \u0433\u043E\u0434\u043E\u043C (bonus track)"},{name:"\u041C\u043B\u0435\u0447\u043D\u0430\u044F \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u044F (bonus track)"}]},jc=ux;var cx={id:"mekhanicheskaya-balerina",name:"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430",year:2010,folder:"/artist/shmely/albums/2010_balerina.jpg",streaming:{spotify:"https://open.spotify.com/album/0AoYg8ddVNIoismWBYv7jp",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_lKAK6qxtulNpigAsSzglJMTDsX86CWRZg",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_kAfpmxC-5vpT_zMwug5HcuXsnFi4l41bo",yandexMusic:"https://music.yandex.ru/album/3444129"},songs:[{name:"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430"},{name:"\u041B\u044E\u0434\u0438"},{name:"\u041A\u0430\u043A\u043E\u0444\u043E\u043D\u0438\u044F \u0441\u0435\u0440\u0434\u0435\u0446"},{name:"\u0412\u0435\u0449\u0438\u0439 \u0441\u043E\u043D"},{name:"\u041F\u0440\u0451\u0442? \u0422\u0430\u043A \u043F\u0440\u0438!"},{name:"\u0416\u0433\u0438"},{name:"\u041B\u044B\u0441\u0430\u044F \u0433\u043E\u0440\u0430"},{name:"\u041D\u0435\u0431\u043E \u043F\u0440\u043E\u0442\u0438\u0432"},{name:"\u041A\u043E\u0442\u0435\u0439\u043A\u0430 \u043D\u0430 \u0442\u0440\u0451\u0445 \u043D\u043E\u0436\u043A\u0430\u0445"},{name:"\u0421\u043D\u043E\u0432\u0430 \u043F\u0440\u043E \u043B\u044E\u0431\u043E\u0432\u044C, \u0431\u043B\u0438\u043D"},{name:"\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C"},{name:"\u041A\u043E\u043B\u044B\u0431\u0435\u043B\u044C\u043D\u0430\u044F++"},{name:"\u0410\u0435\u043B\u044C-\u0410\u0443\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0438\u0433\u0440\u0430 (bonus track)"}]},Vc=cx;var dx={id:"toplivo",name:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E",year:2010,folder:"/artist/shmely/albums/2010_toplivo.jpg",streaming:{spotify:"https://open.spotify.com/album/0frmw2fWFkFtuoeobgciN8",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kkufNdmy_VwLed5KlwFD4q4LfGwmPF8JU",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nFcLyMsmp6FHj0wt6J3w--1qXcmgyX_xY",yandexMusic:"https://music.yandex.ru/album/3444135"},songs:[{name:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E-\u0436\u0438\u0437\u043D\u044C"},{name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u0438 \u0442\u044B"},{name:"\u041F\u0430\u0440\u0443\u0441\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u0437\u0430 \u0440\u0443\u043B\u0451\u043C"},{name:"\u0427\u0435\u0440\u0451\u043C\u0443\u0445\u0430"},{name:"\u041C\u0435\u043B\u0430\u043D\u0445\u043E\u043B\u0438\u044F"},{name:"\u041B\u0430\u0441\u043A\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0434\u0435\u0446"},{name:"\u041D\u0430\u0439\u0434\u0438..."},{name:"\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0435\u0447\u0442\u044B"},{name:"\u0425\u0432\u043E\u0440\u044C"},{name:"\u0414\u043E\u043A\u0442\u043E\u0440 \u041C\u043E\u0442\u043E\u0440\u0444\u0438\u043B"},{name:"\u041D\u0435\u0444\u0442\u044C \u0410\u043B\u043B\u0438\u043B\u0443\u0439\u044F"},{name:"\u0425\u043E\u0440\u043E\u0432\u043E\u0434"},{name:"\u041F\u043B\u044E\u0448\u0435\u0432\u044B\u0435 \u0437\u043E\u043C\u0431\u0438"},{name:"\u0422\u0440\u0443\u043D\u0430 \u043D\u0430 \u043A\u043E\u043B\u0451\u0441\u0430\u0445"},{name:"\u0411\u043E\u0433 \u043B\u044E\u0431\u0438\u0442 \u0441\u0435\u0431\u044F"}]},Bc=dx;var fx={id:"cekh-po-reabilitacii-paranoikov",name:"\u0426\u0435\u0445 \u043F\u043E \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043D\u043E\u0438\u043A\u043E\u0432",year:2011,folder:"/artist/shmely/albums/2010_crp.jpg",streaming:{spotify:"https://open.spotify.com/album/74KcaQJrAjhzeHvW6rZUIQ",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nvSuftR3G7q_K8Vs-fiCNpZl3ElyIU9aI",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_mPPAXZrdGJIx_q2kUTz6POPoJdG26koUc",yandexMusic:"https://music.yandex.ru/album/3444136"},songs:[{name:"\u0421\u0432\u0435\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F"},{name:"\u041E\u0442\u0432\u0430\u043B\u0438, \u043C\u043E\u044F \u0447\u0435\u0440\u0435\u0448\u043D\u044F"},{name:"\u0411\u044B\u043B\u0438 \u043C\u044B (new version)"},{name:"\u042F \u0445\u043E\u0447\u0443 \u0431\u044B\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u043E\u043C"},{name:"\u041A\u0430\u0442\u0451\u043D\u043A\u0430 (new version)"},{name:"\u0426\u0435\u0445 \u043F\u043E \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043D\u043E\u0438\u043A\u043E\u0432"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430-2 (\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435)"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430 (new version)"},{name:"\u0417\u0430\u0433\u043E\u0432\u043E\u0440\u043A\u0430"},{name:"\u041F\u0430\u043D\u0438\u043A\u0430 (\u0438\u0437 \u0446\u0438\u043A\u043B\u0430 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438)"},{name:"\u041F\u043E\u0447\u0442\u0430"},{name:"\u0425\u0430\u043B\u044F\u0432\u0430 (\u0438\u0437 \u0446\u0438\u043A\u043B\u0430 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438)"}]},$c=fx;var hx={id:"teatr-urodov",name:"\u0422\u0435\u0430\u0442\u0440 \u0443\u0440\u043E\u0434\u043E\u0432",year:2011,folder:"/artist/shmely/albums/2011_teatr.jpg",streaming:{spotify:"https://open.spotify.com/album/40ou3ofmt60WN6Z1LXpF0p",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kziusKHBqOaVCF3vKxL1PcshlkPV1UU5U",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_liV01e1JDnannkLWqdmM7BJv613aPj9Ws",yandexMusic:"https://music.yandex.ru/album/3444134"},songs:[{name:"\u0423\u043B\u0451\u0442"},{name:"\u0421\u0430\u043D\u0438\u0442\u0430\u0440\u043A\u0430"},{name:"\u0422\u0430\u0442\u0443 \u043D\u0430 \u043F\u043E\u043F\u0435"},{name:"\u041C\u0430\u044D\u0441\u0442\u0440\u043E \u0443\u0436\u0430\u0441\u043E\u0432"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430 \u043F\u0443\u0441\u0442\u0430"},{name:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043F\u043E\u0435\u0437\u0434"},{name:"\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A"},{name:"\u041F\u043E\u0446\u0435\u043B\u0443\u0438"},{name:"\u0410\u0445, \u0443 \u0435\u043B\u0438"},{name:"\u041C\u0430\u043B\u043E"},{name:"\u0422\u0435\u0430\u0442\u0440 \u0443\u0440\u043E\u0434\u043E\u0432"},{name:"\u041A\u0440\u0410\u0417 255"},{name:"\u0421\u0443\u0434\u044C\u0431\u0430"},{name:"\u041C\u0443-\u041C\u0443 \u0436\u0438\u0432\u0430"}]},Hc=hx;var px={id:"para-trupov",name:"\u041F\u0430\u0440\u0430 \u0442\u0440\u0443\u043F\u043E\u0432",year:2013,folder:"/artist/shmely/albums/2013_para.jpg",streaming:{spotify:"https://open.spotify.com/album/6AfviE2K704Bym6YNCdMMk",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nTkPpeyc83R9Kt6M9PaGmyy59OHDa5ovQ",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nQT0FMPii6bQHu7gPMH0Cu3X9kinOkYbU",yandexMusic:"https://music.yandex.ru/album/3444132"},songs:[{name:"\u0417\u0432\u0451\u0437\u0434\u044B \u0441\u0432\u0435\u0442\u044F\u0442 \u044F\u0440\u0447\u0435"},{name:"\u0411\u0435\u043B\u044B\u0435 \u0447\u0443\u043B\u043E\u0447\u043A\u0438"},{name:"\u041F\u0430\u0440\u0430 \u0442\u0440\u0443\u043F\u043E\u0432"},{name:"\u041D\u0430 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u043C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0435"},{name:"\u041D\u043E\u0432\u0430\u044F \u0440\u0430\u0434\u043E\u0441\u0442\u044C"},{name:"\u041A\u0443\u043A\u043B\u0430 \u0413\u0435\u0440\u0434\u0430"},{name:"\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0438 \u041C\u043E\u0441\u043A\u0432\u044B"},{name:"\u0414\u0438\u0437\u0430\u0439\u043D"},{name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u043F\u043E \u0410\u0434\u0443"},{name:"\u0410\u043D\u0441\u0430\u043C\u0431\u043B\u044C"},{name:"\u0413\u0440\u043E\u0431\u043E\u0432\u0449\u0438\u043A"}]},Uc=px;var mx={id:"belyj-karandash",name:"\u0411\u0435\u043B\u044B\u0439 \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448",year:2014,folder:"/artist/shmely/albums/2014_karandash.jpg",streaming:{spotify:"https://open.spotify.com/album/4BKbUBCtcHXI55rIgRK1N2",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_me_kZEdgKM1vA9Z3ztRoX4z7PGpIzFXQo",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_liI8wzWEd8L3cCk0h6iXOxEnakMSfvEz8",yandexMusic:"https://music.yandex.ru/album/3444125"},songs:[{name:"\u0421\u0435\u0440\u0434\u0446\u0435 \u0411\u043E\u0433\u0430"},{name:"\u0411\u0435\u043B\u044B\u0439 \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448"},{name:"\u0421\u0435\u0439 \u0447\u0430\u0441"},{name:"\u041F\u043E\u0434 \u0430\u0441\u0444\u0430\u043B\u044C\u0442"},{name:"\u0411\u0435\u0437\u043E\u0442\u0432\u0435\u0442\u043D\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u0412\u0441\u0435\u043B\u0435\u043D\u0441\u043A\u0438\u0439 \u043E\u0440\u0433\u0430\u0437\u043C"},{name:"\u041A\u0430\u0431\u0430\u0440\u0435"},{name:"\u041F\u043E\u0442\u0435\u0445\u0430"},{name:"\u041D\u0430\u043F\u043E\u0438 \u043D\u0430\u0441"},{name:"\u041F\u043E\u043F\u0443\u0442\u0447\u0438\u0446\u0430"},{name:"\u0414\u0440\u0443\u0433\u043E\u0439 \u0441\u043C\u0435\u0445"},{name:"\u041E\u043A\u0435\u0430\u043D\u043E\u043C\u0430\u0433\u0438\u044F"},{name:"\u041F\u044B\u043B\u0430\u044E\u0449\u0438\u0439 \u0430\u043D\u0433\u0435\u043B"},{name:"\u041D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430"},{name:"\u0410\u043D\u0434\u0440\u043E\u043C\u0435\u0434\u0430"}]},zc=mx;var gx={id:"zloradostnaya-opuhol-new",name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C. \u041F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D\u0438\u0435",year:2016,folder:"/artist/shmely/albums/2016_zo.jpg",streaming:{spotify:"https://open.spotify.com/album/4Q4riSrf2rdfmY6EllfbRp",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kf4b67Cf_KzFSmA1Ya-ptvWjGMmG9rfWs",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lEU8oxwMxMRJ8Qm8pCykRlxwEBZBbYlK0",yandexMusic:"https://music.yandex.ru/album/3444126"},songs:[{name:"\u0411\u044B\u043B\u0438 \u043C\u044B"},{name:"\u041B\u0435\u0437\u0432\u0438\u0435"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430"},{name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C"},{name:"\u0413\u043B\u0438\u0441\u0442\u044B"},{name:"\u0428\u0435\u0439\u043A \u0448\u0435\u0439\u043A \u0447\u0430 \u0447\u0430 \u0447\u0430"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430"},{name:"\u0421\u043C\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430"},{name:"\u041C\u0443\u0442\u0430\u043D\u0442\u044B"},{name:"\u0414\u0436\u0430\u0433\u0438 \u043C\u0435\u0440\u0442\u0432\u0435\u0435 \u0432\u0441\u0435\u0445 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0410\u043F\u043E\u043A\u0430\u043B\u0438\u043F\u0441\u0438\u0441"},{name:"\u041F\u0435\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"}]},Wc=gx;var yx={id:"16-chudes",name:"16 \u0447\u0443\u0434\u0435\u0441",year:2016,folder:"/artist/shmely/albums/2016_16.jpg",streaming:{spotify:"https://open.spotify.com/album/20RNbLgkaoqnmqM6aZ5ppb",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_k5j2ONFgCxjaMibPrmWT_7cqOZpokpY0A",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lvl4Bi2EQ2Cr_pT1KK0COoNLGwDAHRHUE",yandexMusic:"https://music.yandex.ru/album/4090274"},songs:[{name:"\u0428\u0443\u043A\u0430\u0439"},{name:"\u0414\u0443\u0448\u0430 \u043D\u0435 \u043B\u0430\u0434\u0438\u0442 \u0441 \u0441\u0435\u0440\u0434\u0446\u0435\u043C"},{name:"\u0421\u0432\u0435\u0442\u0438\u0442\u0441\u044F \u043C\u0433\u043B\u0430"},{name:"\u041A\u043B\u0438\u0447\u0435 \u043D\u0430 \u043E\u0437\u0435\u0440\u0430"},{name:"\u0410\u043D\u0438\u043C\u0430\u0442\u043E\u0440\u044B"},{name:"\u0425\u0430\u043E\u0441 \u0447\u043E\u0440\u043D\u043E\u0442\u0438"},{name:"\u042F \u0445\u043E\u0447\u0443 \u0431\u0430\u0447\u0438\u0442\u0438 \u0442\u0435\u0431\u0435"},{name:"\u0411\u0430\u0440\u0434\u044B \u0427\u0435\u0440\u043D\u043E\u0431\u044B\u043B\u044F"},{name:"\u0411\u043E\u0439\u0441\u044F \u0441\u0435\u0431\u044F \u043A\u043E\u0433\u0434\u0430 \u043F\u044C\u044F\u043D"},{name:"\u0417\u043E\u043C\u0431\u0438 \u0440\u043E\u0434\u0441\u0442\u0435\u0440"},{name:"\u041E\u043B \u0438\u043D\u043A\u043B\u044E\u0437\u0438\u0432"},{name:"\u041B\u0430\u0432\u0430\u0448\u0430\u0431\u0430\u0448"}]},Gc=yx;var vx={id:"mizantropiya",name:"\u041C\u0438\u0437\u0430\u043D\u0442\u0440\u043E\u043F\u0438\u044F",year:2016,folder:"/artist/shmely/albums/2016_mizantropiya.jpg",streaming:{spotify:"https://open.spotify.com/album/5fyLR7SyykWK1EmVKesNNK",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_ni5xNthJBzgd9MZ63IBNDGsWa0rtcuJA0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_ly9XGbpMjncfPi2jDs8Kyq9bm47Iiezuc",yandexMusic:"https://music.yandex.ru/album/4184010"},songs:[{name:"\u041B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0442\u0435\u0445\u0438"},{name:"\u0425\u043E\u0442\u0438\u0432 \u0441\u043F\u0438\u0442\u0430\u0442\u0438"},{name:"\u041D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"},{name:"\u041D\u0435 \u0441\u0443\u043C\u0443\u0432\u0430\u0442\u0438"},{name:"\u041F\u043E\u0437\u0434\u043D\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0436\u0438\u0437\u043D\u044C"},{name:"\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0438\u0439 \u0441\u0432i\u0442"},{name:"\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0438"},{name:"\u0427\u043E\u0432\u0435\u043D \u0421\u0442\u0440\u0430\u0445\u0443"},{name:"\u041C\u0438\u0437\u0430\u043D\u0442\u0440\u043E\u043F\u0438\u044F"},{name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0431i\u043B\u0438\u0437\u043C"},{name:"\u0410\u0434\u0441\u043A\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"},{name:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u044C"},{name:"\u0421\u0432\u0430\u0438"},{name:"\u0422\u043E\u043A"},{name:"\u0412\u0435\u0434\u044C\u043C\u044B \u043C\u043E\u0438"}]},Yc=vx;var mg={[cc.id]:cc,[dc.id]:dc,[fc.id]:fc,[hc.id]:hc,[pc.id]:pc,[mc.id]:mc,[gc.id]:gc,[yc.id]:yc,[vc.id]:vc,[wc.id]:wc,[bc.id]:bc,[Dc.id]:Dc,[Ic.id]:Ic,[Cc.id]:Cc,[Ec.id]:Ec,[xc.id]:xc,[_c.id]:_c,[Sc.id]:Sc,[Mc.id]:Mc,[Tc.id]:Tc,[Ac.id]:Ac,[kc.id]:kc,[Nc.id]:Nc,[Rc.id]:Rc,[Oc.id]:Oc,[Pc.id]:Pc,[Fc.id]:Fc,[Lc.id]:Lc,[jc.id]:jc,[Vc.id]:Vc,[Bc.id]:Bc,[$c.id]:$c,[Hc.id]:Hc,[Uc.id]:Uc,[zc.id]:zc,[Wc.id]:Wc,[Gc.id]:Gc,[Yc.id]:Yc};var wx={id:"daj-garri",name:["\u0414\u0430\u0439 \u0413\u0430\u0440\u0440\u0438"],albums:["trotilovyye-skazki"],text:`
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
`},qc=wx;var bx={id:"ya-vselennaya",name:["\u042F \u2013 \u0412\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F"],albums:["spazmy-roka","poshmelye"],authors:"\u0428\u043C\u0435\u043B\u044C",text:`
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
`},Zc=bx;var Dx={id:"na-ladoni-planeta",name:["\u041D\u0430 \u043B\u0430\u0434\u043E\u043D\u0438 \u043F\u043B\u0430\u043D\u0435\u0442\u0430"],albums:["spazmy-roka","poshmelye"],authors:"\u0428\u043C\u0435\u043B\u044C",text:`
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
`},Qc=Dx;var Ix={id:"poshmelye",name:["\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435"],albums:["poshmelye"],clipYouTubeId:"ArmZpTJd4_0",authors:"\u0421\u0442\u0430\u043A\u0430\u043D \u0438 \u041C\u0430\u043A\u0441 \u042D\u043A\u0441 - \u041C\u0430\u043A\u0441 \u042D\u043A\u0441",text:`
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
`},Kc=Ix;var Cx={id:"kak-izydet-svet",name:["\u041A\u0430\u043A \u0438\u0437\u044B\u0434\u0435\u0442 \u0441\u0432\u0435\u0442..."],albums:[],text:`
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
`},Jc=Cx;var Ex={id:"laboratoriya-altruizma",name:["\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C\u0430"],albums:["moshchi","organizm","risunki-na-dushe","agressivnyj-pokoj","polna-suma","ya-vernus-k-tebe"],text:`
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
`},Xc=Ex;var xx={id:"antiromantika",name:["\u0410\u043D\u0442\u0438\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430"],albums:["pugovica"],text:`
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
`},ed=xx;var _x={id:"biomekhanika",name:["\u0411\u0438\u043E\u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0430"],albums:["ya-vernus-k-tebe"],text:`
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
`},td=_x;var Sx={id:"blagodat",name:["\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C"],albums:["agressivnyj-pokoj"],text:`
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
`},nd=Sx;var Mx={id:"bol",name:["\u0411\u043E\u043B\u044C"],albums:["agressivnyj-pokoj","ya-vernus-k-tebe"],clipYouTubeId:"UShBtzycUsY",text:`
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
`},rd=Mx;var Tx={id:"britogolovye-moskvichki",name:["\u0411\u0440\u0438\u0442\u043E\u0433\u043E\u043B\u043E\u0432\u044B\u0435 \u043C\u043E\u0441\u043A\u0432\u0438\u0447\u043A\u0438"],albums:[],authors:"\u041F\u0430\u0443\u043A",text:`
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
`},od=Tx;var Ax={id:"divchina-kulya",name:["\u0414i\u0432\u0447\u0438\u043D\u0430-\u043A\u0443\u043B\u044F"],albums:["petlya-soblazna","trahni-nebo"],clipYouTubeId:"d7O9aDr7las",text:`
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
`},id=Ax;var kx={id:"fokusnik",name:["\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A"],albums:["teatr-urodov"],text:`
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
`},sd=kx;var Nx={id:"gilotina",name:["\u0413\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430 \u0432 \u0446\u0432\u0435\u0442\u0430\u0445"],albums:["pugovica"],clipYouTubeId:"cFLeFuZwbmc",text:`
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
`},ad=Nx;var Rx={id:"intro",name:["\u0412\u0441\u0451 \u0431\u0443\u0434\u0435\u0442 \u0445\u043E\u0440\u043E\u0448\u043E (intro)"],albums:["pugovica"],text:`
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
`},ld=Rx;var Ox={id:"maneken",name:["\u041C\u0430\u043D\u0435\u043A\u0435\u043D"],albums:["agressivnyj-pokoj"],clipYouTubeId:"exkzYZohXRg",text:`
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
`},ud=Ox;var Px={id:"zver",name:["\u0417\u0432\u0435\u0440\u044C"],albums:["pugovica"],clipYouTubeId:"GArQ6RYZi9c",text:`
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
`},cd=Px;var Fx={id:"novaya-religiya",name:["\u041D\u043E\u0432\u0430\u044F \u0440\u0435\u043B\u0438\u0433\u0438\u044F"],albums:["spazmy-roka","poshmelye"],text:`
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
`},dd=Fx;var Lx={id:"patologoanatom",name:["\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C"],albums:["spazmy-roka","risunki-na-dushe","poshmelye"],text:`
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
`},fd=Lx;var jx={id:"pechal-prekrasna",name:["\u041F\u0435\u0447\u0430\u043B\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0430"],albums:[],authors:"\u0428\u043C\u0435\u043B\u044C",text:`
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
`},hd=jx;var Vx={id:"pokidaya-mir",name:["\u041F\u043E\u043A\u0438\u0434\u0430\u044F \u043C\u0438\u0440"],albums:["organizm","ya-vernus-k-tebe"],clipYouTubeId:"LG8BvZiYcDA",text:`
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
`},pd=Vx;var Bx={id:"polna-suma",name:["\u041F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430","\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043E\u0441\u0442\u0440\u043E\u0432"],albums:["bomba-v-ubezhishche","organizm","polna-suma"],text:`
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
`},md=Bx;var $x={id:"raspyatie",name:["\u0417\u0432\u0451\u0437\u0434\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u044F\u0442\u0438\u0435"],albums:["tulovishche","trahni-nebo"],text:`
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
`},gd=$x;var Hx={id:"renessans",name:["\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441"],albums:["pugovica"],text:`
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
`},yd=Hx;var Ux={id:"saprofag",name:["\u0421\u0430\u043F\u0440\u043E\u0444\u0430\u0433"],albums:["spazmy-roka","vethij-sbornik"],text:`
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
`},vd=Ux;var zx={id:"skelety",name:["\u0421\u043A\u0435\u043B\u0435\u0442\u044B"],albums:["risunki-na-dushe","poshmelye"],clipYouTubeId:"sm_W3X9wYo0",text:`
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
`},wd=zx;var Wx={id:"skvoz-ogon",name:["\u0421\u043A\u0432\u043E\u0437\u044C \u043E\u0433\u043E\u043D\u044C \u0434\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434\u0430"],albums:[],text:`
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
`},bd=Wx;var Gx={id:"slyoznaya",name:["\u0421\u043B\u0451\u0437\u043D\u0430\u044F","\u041B\u0438\u0445\u0430 \u0442\u0430 \u0431\u0435\u0434\u0430"],albums:["bomba-v-ubezhishche","organizm","negativ-prostranstva","agressivnyj-pokoj"],text:`
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
`},Dd=Gx;var Yx={id:"sudorogi",name:["\u0421\u0443\u0434\u043E\u0440\u043E\u0433\u0438 \u0436\u0438\u0432\u044B\u0445 \u0431\u043E\u043B\u043E\u0442"],albums:["pugovica"],text:`
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
`},Id=Yx;var qx={id:"trahni-nebo",name:["\u0422\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E"],albums:["petlya-soblazna","trahni-nebo"],text:`
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
`},Cd=qx;var Zx={id:"tulovishchej",name:["\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435\u0439"],albums:["tulovishche","trahni-nebo","risunki-na-dushe"],text:`
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
`},Ed=Zx;var Qx={id:"volosy",name:["\u0412\u043E\u043B\u043E\u0441\u044B","\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B"],albums:["durackiye-knizhki","vulkanizaciya-dushi","spazmy-roka","poshmelye"],text:`
\u0420\u0443\u043A\u0438, \u0447\u0442\u043E \u0442\u044F\u043D\u0443\u043B\u0438\u0441\u044C \u0432\u043E\u043D, \u0442\u0443\u0433\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u044B
\u041D\u0435 \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u0435\u0447\u0442\u044B
\u0412\u0435\u043D\u044B, \u0447\u0442\u043E \u043D\u0435\u0441\u043B\u0438 \u043B\u044E\u0431\u043E\u0432\u044C, \u043D\u0435\u0436\u043D\u043E \u0432\u0441\u043F\u043E\u0440\u043E\u0442\u044B,
\u041A\u0430\u043A \u0440\u0430\u0437\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u043C\u043E\u0441\u0442\u044B

\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B...

\u041F\u043B\u0430\u0442\u044C\u0435, \u0447\u0442\u043E \u043F\u0443\u0441\u0442\u0438\u043B\u043E\u0441\u044C \u0432\u043F\u043B\u044F\u0441, \u0441\u0442\u0451\u0440\u043B\u043E\u0441\u044C \u0432 \u0434\u044B\u0440\u043E\u0447\u043A\u0438,
\u0417\u0430\u0433\u043E\u0440\u0435\u043B\u043E\u0441\u044C \u0438 \u043F\u0440\u043E\u0448\u043B\u043E
\u0421\u0430\u043D\u0438, \u0447\u0442\u043E \u043A\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u0432\u043D\u0438\u0437, \u0437\u0430\u0443\u043F\u0440\u044F\u043C\u0438\u043B\u0438\u0441\u044C,
\u041A\u043E\u0433\u0434\u0430 \u0441\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0432\u0437\u043E\u0448\u043B\u043E
`},xd=Qx;var Kx={id:"ya-ne-angel",name:["\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B"],albums:["durackiye-knizhki","bomba-v-ubezhishche","zhazhda","vosem-zhenshchin-na-raduge"],text:`
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
`},_d=Kx;var gg={[ed.id]:ed,[td.id]:td,[nd.id]:nd,[rd.id]:rd,[od.id]:od,[qc.id]:qc,[id.id]:id,[sd.id]:sd,[ad.id]:ad,[ld.id]:ld,[Jc.id]:Jc,[Xc.id]:Xc,[ud.id]:ud,[Qc.id]:Qc,[dd.id]:dd,[fd.id]:fd,[hd.id]:hd,[pd.id]:pd,[md.id]:md,[Kc.id]:Kc,[gd.id]:gd,[yd.id]:yd,[vd.id]:vd,[wd.id]:wd,[bd.id]:bd,[Dd.id]:Dd,[Id.id]:Id,[Cd.id]:Cd,[Ed.id]:Ed,[xd.id]:xd,[_d.id]:_d,[Zc.id]:Zc,[cd.id]:cd};var Jx={id:"shmely",name:"\u0428\u043C\u0435\u043B\u0438",image:"/artist/shmely/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/4OXVjz9BARB2MwT6sdx8JE",youtube:"https://www.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw",youtubeMusic:"https://music.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw",yandexMusic:"https://music.yandex.ru/artist/213256"},albums:["trotilovyye-skazki","tulovishche","purga","durackiye-knizhki","petlya-soblazna","zloradostnaya-opuhol","vulkanizaciya-dushi","princessa-bez-trusov","bomba-v-ubezhishche","moshchi","trahni-nebo","organizm","spazmy-roka","risunki-na-dushe","poshmelye","negativ-prostranstva","agressivnyj-pokoj","polna-suma","ostanovite-chelovechestvo","zhazhda","ten-serdca","lyod","vethij-sbornik","vosem-zhenshchin-na-raduge","pugovica","ya-vernus-k-tebe","koshkiny-obidy","karamelnyye-strahi","moskovskaya-yarmarka-udovolstvij","mekhanicheskaya-balerina","toplivo","cekh-po-reabilitacii-paranoikov","teatr-urodov","para-trupov","belyj-karandash","zloradostnaya-opuhol-new","16-chudes","mizantropiya"]},ki={artist:Jx,albums:mg,songs:gg};var Xx={[Ti.artist.id]:Ti,[Ai.artist.id]:Ai,[ki.artist.id]:ki},Ce=Xx,yg=[Ti.artist,Ai.artist,ki.artist];var e_=(e,t)=>t.id;function t_(e,t){if(e&1&&(y(0,"div",2)(1,"a",3),K(2,"img",4),y(3,"span",5),F(4),v()()()),e&2){let n=t.$implicit;p(),k("routerLink","artist/"+n.id),p(),k("src","."+n.image,Xe)("alt",n.name),p(2),X(n.name)}}console.log(Ce);var vg=(()=>{let t=class t{constructor(){this.artists=yg}ngOnInit(){document.title="\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=G({type:t,selectors:[["app-home-page"]],standalone:!0,features:[q],decls:4,vars:0,consts:[[1,"home-page"],[1,"home-page__row"],[1,"home-page__item"],[1,"home-page__link",3,"routerLink"],[1,"home-page__img",3,"src","alt"],[1,"home-page__name"]],template:function(o,i){o&1&&(y(0,"div",0)(1,"div",1),fe(2,t_,5,4,"div",2,e_),v()()),o&2&&(p(2),he(i.artists))},dependencies:[we],styles:[".home-page[_ngcontent-%COMP%]{margin-top:40px}.home-page__row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-left:-1%;margin-right:-1%}.home-page__item[_ngcontent-%COMP%]{box-sizing:border-box;word-wrap:break-word;margin-left:1%;margin-right:1%;width:48%}@media screen and (max-width: 768px){.home-page__item[_ngcontent-%COMP%]{width:98%}}.home-page__img[_ngcontent-%COMP%]{max-width:100%}.home-page__link[_ngcontent-%COMP%]{text-decoration:none}.home-page__name[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-transform:uppercase;transition:color .3s ease;margin-top:10px;margin-bottom:20px}"]});let e=t;return e})();function n_(e,t){if(e&1&&(y(0,"div",4),F(1),v()),e&2){let n=P();p(),X(n.year)}}var wg=(()=>{let t=class t{constructor(){this.year=0}get folder(){return this.image??"/artist/album-card.jpg"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=G({type:t,selectors:[["app-album-card"]],inputs:{link:"link",name:"name",image:"image",year:"year"},standalone:!0,features:[q],decls:6,vars:5,consts:[[1,"album-card",3,"routerLink"],[1,"album-card__image"],[1,"album-card__img",3,"src","alt"],[1,"album-card__name"],[1,"album-card__year"]],template:function(o,i){o&1&&(y(0,"a",0)(1,"div",1),K(2,"img",2),v(),y(3,"div",3),F(4),v(),W(5,n_,2,1,"div",4),v()),o&2&&(k("routerLink",i.link),p(2),k("src","."+i.folder,Xe)("alt",i.name),p(2),X(i.name),p(),Y(i.year?5:-1))},dependencies:[we],styles:[".album-card[_ngcontent-%COMP%]{display:block;position:relative;padding:20px 22px 24px;box-sizing:border-box;text-decoration:none;transition:background-color .3s ease}@media screen and (max-width: 992px){.album-card[_ngcontent-%COMP%]{padding:10px 10px 19px}}.album-card[_ngcontent-%COMP%]:hover{background-color:#222427}.album-card__img[_ngcontent-%COMP%]{margin:auto;object-fit:contain;object-position:center;height:100%;width:0;min-width:100%;min-height:100%;aspect-ratio:1}.album-card__name[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-transform:uppercase;transition:color .3s ease;margin-top:14px}.album-card__year[_ngcontent-%COMP%]{font-weight:500;line-height:1.5;font-size:16px;color:#696c6f}"]});let e=t;return e})();var r_=(e,t)=>t.link;function o_(e,t){if(e&1&&(y(0,"li",1)(1,"a",2),K(2,"img",3),v()()),e&2){let n=t.$implicit;k("title",n.name),p(),k("href",n.link,Xe),p(),k("src","./streaming/"+n.image,Xe)("alt",n.name)}}function i_(e,t){if(e&1&&(y(0,"ul",0),fe(1,o_,3,4,"li",1,r_),v()),e&2){let n=P();p(),he(n.list)}}var Ni=(()=>{let t=class t{constructor(){this.streamingList={spotify:{name:"Spotify",image:"spotify.svg"},appleMusic:{name:"Apple Music",image:"appleMusic.svg"},youtubeMusic:{name:"YouTube Music",image:"YouTubeMusic.svg"},youtube:{name:"YouTube",image:"YouTube.svg"},bandcamp:{name:"Bandcamp",image:"bandcamp.svg"},yandexMusic:{name:"\u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0443\u0437\u044B\u043A\u0430",image:"yandexMusic.svg"}}}get list(){return this.streaming?Object.entries(this.streaming).map(([o,i])=>{let{name:s,image:a}=this.streamingList[o];return{link:i,name:s,image:a}}):[]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=G({type:t,selectors:[["app-streaming-list"]],inputs:{streaming:"streaming"},standalone:!0,features:[q],decls:1,vars:1,consts:[["aria-label","Streaming List",1,"streaming-list"],[1,"streaming-list__item",3,"title"],["target","_blank",1,"streaming-list__link",3,"href"],[1,"streaming-list__logo",3,"src","alt"]],template:function(o,i){o&1&&W(0,i_,3,0,"ul",0),o&2&&Y(i.streaming?0:-1)},styles:[".streaming-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;column-gap:10px;align-items:center;list-style-type:none;padding-left:0}.streaming-list__item[_ngcontent-%COMP%]{filter:grayscale(1);background-color:#444;margin-top:10px;transition:background-color .4s}.streaming-list__item[_ngcontent-%COMP%]:hover{filter:grayscale(0);background-color:#eee}.streaming-list__link[_ngcontent-%COMP%]{display:block;height:22px;padding:10px}.streaming-list__logo[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=t;return e})();var s_=(e,t)=>t.id;function a_(e,t){if(e&1&&K(0,"app-album-card",4),e&2){let n=t.$implicit;k("link",n.id)("name",n.name)("year",n.year)("image",n.folder)}}function l_(e,t){if(e&1&&(y(0,"h2",1)(1,"a",2),F(2),v()(),y(3,"div",3),fe(4,a_,1,4,"app-album-card",4,s_),K(6,"app-album-card",5)(7,"app-album-card",5)(8,"app-album-card",5),v(),K(9,"app-streaming-list",6)),e&2){let n=P();p(2),te(" ",n.artistName," "),p(2),he(n.albums),p(2),k("link","/artist/"+n.artistId+"/songs/other")("name","\u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B"),p(),k("link","/artist/"+n.artistId+"/songs")("name","\u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438"),p(),k("link","/artist/"+n.artistId+"/video")("name","\u041A\u043B\u0438\u043F\u044B"),p(),k("streaming",n.streaming)}}var bg=(()=>{let t=class t{constructor(r){if(this.route=r,this.artists=Ce,this.artistName="",this.artistId=null,this.albums=[],this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let o=this.artists[this.artistId];this.streaming=o.artist.streaming,this.artistName=o.artist.name,this.albums=o.artist.albums.map(i=>o.albums[i])}ngOnInit(){document.title=`${this.artistName} | \u0414\u0438\u0441\u043A\u043E\u0433\u0440\u0430\u0444\u0438\u044F`}};t.\u0275fac=function(o){return new(o||t)(Q(se))},t.\u0275cmp=G({type:t,selectors:[["app-artist-page"]],standalone:!0,features:[q],decls:2,vars:1,consts:[[1,"home-page"],[1,"home-page__name"],["routerLink",""],[1,"home-page__wrap","rows"],[1,"col",3,"link","name","year","image"],[1,"col",3,"link","name"],[3,"streaming"]],template:function(o,i){o&1&&(y(0,"div",0),W(1,l_,10,8),v()),o&2&&(p(),Y(i.artistName?1:-1))},dependencies:[we,wg,Ni]});let e=t;return e})();var u_=(e,t)=>t.id||t.name;function c_(e,t){if(e&1&&(y(0,"div",4),K(1,"img",7),v()),e&2){let n=P(2);p(),k("src","."+n.album.folder,Xe)("alt",n.album.name)}}function d_(e,t){if(e&1&&(F(0),y(1,"a",2),F(2),v()),e&2){let n=P(),r=n.$implicit,o=n.$index,i=P(2);te(" ",o+1,". "),p(),k("routerLink","/artist/"+i.artistId+"/song/"+r.id),p(),te(" ",r.name," ")}}function f_(e,t){if(e&1&&F(0),e&2){let n=P(),r=n.$implicit,o=n.$index;Ka(" ",o+1,". ",r.name," ")}}function h_(e,t){if(e&1&&(y(0,"div",5),W(1,d_,3,3,"a",2)(2,f_,1,2),v()),e&2){let n=t.$implicit;p(),Y(n.id?1:2)}}function p_(e,t){if(e&1&&(y(0,"pre"),F(1),v()),e&2){let n=P(2);p(),X(n.album==null?null:n.album.info)}}function m_(e,t){if(e&1&&(y(0,"h2",1)(1,"a",2),F(2),v()(),y(3,"div",3),W(4,c_,2,2,"div",4),y(5,"h3"),F(6),y(7,"span"),F(8),v()(),fe(9,h_,3,1,"div",5,u_),W(11,p_,2,1,"pre"),K(12,"app-streaming-list",6),v()),e&2){let n=P();p(),k("routerLink","/artist/"+n.artistId),p(),X(n.artistName),p(2),Y(n.album&&n.album.folder?4:-1),p(2),te(" ",n.album==null?null:n.album.name," "),p(2),X(n.album==null?null:n.album.year),p(),he(n.songs),p(2),Y(n.album!=null&&n.album.info?11:-1),p(),k("streaming",n.album==null?null:n.album.streaming)}}var Dg=(()=>{let t=class t{constructor(r){this.route=r,this.artists=Ce,this.artistName="",this.artistId=null,this.album=null,this.songs=[],this.artistId=this.route.snapshot.paramMap.get("artist");let o=this.route.snapshot.paramMap.get("album");if(!this.artistId||!o)return;let i=this.artists[this.artistId];this.artistName=i.artist.name,this.album=i.albums[o],this.songs=this.album.songs.map(s=>{if(typeof s=="string"){let a=i.songs[s];return{id:a.id,name:a.name[0]}}if(Array.isArray(s)){let[a,{name:l}]=s;return{id:a,name:l[0]}}return{name:s.name,id:""}})}ngOnInit(){document.title=`${this.album?.name} (${this.album?.year}) | ${this.artistName}`}};t.\u0275fac=function(o){return new(o||t)(Q(se))},t.\u0275cmp=G({type:t,selectors:[["app-album-page"]],standalone:!0,features:[q],decls:2,vars:1,consts:[[1,"album-page"],[1,"album-page__name"],[3,"routerLink"],[1,"album-page__wrap"],[1,"album-page__folder-wrap"],[1,"album-page__item"],[3,"streaming"],[1,"album-page__folder",3,"src","alt"]],template:function(o,i){o&1&&(y(0,"div",0),W(1,m_,13,7),v()),o&2&&(p(),Y(i.artistName?1:-1))},dependencies:[we,Ni],styles:[".album-page__folder-wrap[_ngcontent-%COMP%]{max-width:500px;float:right;margin-left:10px;margin-bottom:10px}@media screen and (max-width: 768px){.album-page__folder-wrap[_ngcontent-%COMP%]{float:none;margin:0}}.album-page__folder[_ngcontent-%COMP%]{max-width:100%}.album-page__item[_ngcontent-%COMP%]{line-height:1.8}.album-page__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;text-decoration:none;border-bottom:1px solid var(--hover-text)}.album-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:800;line-height:1.1;font-size:30px;letter-spacing:.1em;text-transform:uppercase;max-width:840px;margin-top:42px}.album-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.5;font-size:20px;letter-spacing:.05em;text-transform:uppercase;color:#696c6f}"]});let e=t;return e})();var g_=["youtubeContainer"];function y_(e,t){if(e&1){let n=ai();y(0,"youtube-player-placeholder",2),Wt("click",function(){Qo(n);let o=P();return Ko(o._load(!0))}),v()}if(e&2){let n=P();k("videoId",n.videoId)("width",n.width)("height",n.height)("isLoading",n._isLoading)("buttonLabel",n.placeholderButtonLabel)("quality",n.placeholderImageQuality)}}var v_=(()=>{let t=class t{_getBackgroundImage(){let r;return this.quality==="low"?r=`https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`:this.quality==="high"?r=`https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg`:r=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,`url(${r})`}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=G({type:t,selectors:[["youtube-player-placeholder"]],hostAttrs:[1,"youtube-player-placeholder"],hostVars:8,hostBindings:function(o,i){o&2&&(br("background-image",i._getBackgroundImage())("width",i.width,"px")("height",i.height,"px"),qa("youtube-player-placeholder-loading",i.isLoading))},inputs:{videoId:"videoId",width:"width",height:"height",isLoading:"isLoading",buttonLabel:"buttonLabel",quality:"quality"},standalone:!0,features:[q],decls:4,vars:1,consts:[["type","button",1,"youtube-player-placeholder-button"],["height","100%","version","1.1","viewBox","0 0 68 48","focusable","false","aria-hidden","true"],["d","M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z","fill","#f00"],["d","M 45,24 27,14 27,34","fill","#fff"]],template:function(o,i){o&1&&(y(0,"button",0),$h(),y(1,"svg",1),K(2,"path",2)(3,"path",3),v()()),o&2&&wr("aria-label",i.buttonLabel)},styles:[".youtube-player-placeholder{display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden;cursor:pointer;background-color:#000;background-position:center center;background-size:cover;transition:box-shadow 300ms ease;box-shadow:inset 0 120px 90px -90px rgba(0,0,0,.8)}.youtube-player-placeholder-button{transition:opacity 300ms ease;-moz-appearance:none;-webkit-appearance:none;background:none;border:none;padding:0;display:flex}.youtube-player-placeholder-button svg{width:68px;height:48px}.youtube-player-placeholder-loading{box-shadow:none}.youtube-player-placeholder-loading .youtube-player-placeholder-button{opacity:0}"],encapsulation:2,changeDetection:0});let e=t;return e})(),w_=new S("YOUTUBE_PLAYER_CONFIG"),Ig=640,Cg=390;function Eg(e){return e==null?e:Ir(e,0)}var nt=function(e){return e[e.UNSTARTED=-1]="UNSTARTED",e[e.ENDED=0]="ENDED",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.BUFFERING=3]="BUFFERING",e[e.CUED=5]="CUED",e}(nt||{}),Ri=(()=>{let t=class t{get height(){return this._height}set height(r){this._height=r==null||isNaN(r)?Cg:r}get width(){return this._width}set width(r){this._width=r==null||isNaN(r)?Ig:r}constructor(r,o){this._ngZone=r,this._destroyed=new ae,this._playerChanges=new re(void 0),this._nonce=m(mr,{optional:!0}),this._changeDetectorRef=m(Gt),this._isLoading=!1,this._hasPlaceholder=!0,this._height=Cg,this._width=Ig,this.disableCookies=!1,this.disablePlaceholder=!1,this.showBeforeIframeApiLoads=!1,this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange");let i=m(w_,{optional:!0});this.loadApi=i?.loadApi??!0,this.disablePlaceholder=!!i?.disablePlaceholder,this.placeholderButtonLabel=i?.placeholderButtonLabel||"Play video",this.placeholderImageQuality=i?.placeholderImageQuality||"standard",this._isBrowser=bm(o)}ngAfterViewInit(){this._conditionallyLoad()}ngOnChanges(r){this._shouldRecreatePlayer(r)?this._conditionallyLoad():this._player&&((r.width||r.height)&&this._setSize(),r.suggestedQuality&&this._setQuality(),(r.startSeconds||r.endSeconds||r.suggestedQuality)&&this._cuePlayer())}ngOnDestroy(){this._pendingPlayer?.destroy(),this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():(this._getPendingState().playbackState=nt.PLAYING,this._load(!0))}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=nt.PAUSED}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=nt.CUED}seekTo(r,o){this._player?this._player.seekTo(r,o):this._getPendingState().seek={seconds:r,allowSeekAhead:o}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():this._pendingPlayerState?!!this._pendingPlayerState.muted:!1}setVolume(r){this._player?this._player.setVolume(r):this._getPendingState().volume=r}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&this._pendingPlayerState.volume!=null?this._pendingPlayerState.volume:0}setPlaybackRate(r){if(this._player)return this._player.setPlaybackRate(r);this._getPendingState().playbackRate=r}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&this._pendingPlayerState.playbackRate!=null?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(!(!this._isBrowser||!window.YT))return this._player?this._player.getPlayerState():this._pendingPlayerState&&this._pendingPlayerState.playbackState!=null?this._pendingPlayerState.playbackState:nt.UNSTARTED}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_load(r){this._isBrowser&&(!window.YT||!window.YT.Player?(this.loadApi?(this._isLoading=!0,b_(this._nonce)):this.showBeforeIframeApiLoads,this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback?.(),this._ngZone.run(()=>this._createPlayer(r))}):this._createPlayer(r))}_conditionallyLoad(){this._shouldShowPlaceholder()?this.playerVars?.autoplay===1&&this._load(!0):this._load(!1)}_shouldShowPlaceholder(){return this.disablePlaceholder?!1:this._isBrowser?this._hasPlaceholder&&!!this.videoId&&!this._player:!0}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_shouldRecreatePlayer(r){let o=r.videoId||r.playerVars||r.disableCookies||r.disablePlaceholder;return!!o&&!o.isFirstChange()}_createPlayer(r){if(this._player?.destroy(),this._pendingPlayer?.destroy(),typeof YT>"u"||!this.videoId&&!this.playerVars?.list)return;let o=this._ngZone.runOutsideAngular(()=>new YT.Player(this.youtubeContainer.nativeElement,{videoId:this.videoId,host:this.disableCookies?"https://www.youtube-nocookie.com":void 0,width:this.width,height:this.height,playerVars:r?Z(w({},this.playerVars||{}),{autoplay:1}):this.playerVars})),i=()=>{this._ngZone.run(()=>{this._isLoading=!1,this._hasPlaceholder=!1,this._player=o,this._pendingPlayer=void 0,o.removeEventListener("onReady",i),this._playerChanges.next(o),this._setSize(),this._setQuality(),this._pendingPlayerState&&(this._applyPendingPlayerState(o,this._pendingPlayerState),this._pendingPlayerState=void 0);let s=o.getPlayerState();(s===nt.UNSTARTED||s===nt.CUED||s==null)&&this._cuePlayer(),this._changeDetectorRef.markForCheck()})};this._pendingPlayer=o,o.addEventListener("onReady",i)}_applyPendingPlayerState(r,o){let{playbackState:i,playbackRate:s,volume:a,muted:l,seek:u}=o;switch(i){case nt.PLAYING:r.playVideo();break;case nt.PAUSED:r.pauseVideo();break;case nt.CUED:r.stopVideo();break}s!=null&&r.setPlaybackRate(s),a!=null&&r.setVolume(a),l!=null&&(l?r.mute():r.unMute()),u!=null&&r.seekTo(u.seconds,u.allowSeekAhead)}_cuePlayer(){this._player&&this.videoId&&this._player.cueVideoById({videoId:this.videoId,startSeconds:this.startSeconds,endSeconds:this.endSeconds,suggestedQuality:this.suggestedQuality})}_setSize(){this._player?.setSize(this.width,this.height)}_setQuality(){this._player&&this.suggestedQuality&&this._player.setPlaybackQuality(this.suggestedQuality)}_getLazyEmitter(r){return this._playerChanges.pipe(_e(o=>o?ho(i=>{o.addEventListener(r,i)},i=>{try{o?.removeEventListener?.(r,i)}catch{}}):E()),o=>new B(i=>o.subscribe({next:s=>this._ngZone.run(()=>i.next(s)),error:s=>i.error(s),complete:()=>i.complete()})),Yn(this._destroyed))}};t.\u0275fac=function(o){return new(o||t)(Q(J),Q(xt))},t.\u0275cmp=G({type:t,selectors:[["youtube-player"]],viewQuery:function(o,i){if(o&1&&tm(g_,7),o&2){let s;Za(s=Qa())&&(i.youtubeContainer=s.first)}},inputs:{videoId:"videoId",height:[2,"height","height",Ir],width:[2,"width","width",Ir],startSeconds:[2,"startSeconds","startSeconds",Eg],endSeconds:[2,"endSeconds","endSeconds",Eg],suggestedQuality:"suggestedQuality",playerVars:"playerVars",disableCookies:[2,"disableCookies","disableCookies",et],loadApi:[2,"loadApi","loadApi",et],disablePlaceholder:[2,"disablePlaceholder","disablePlaceholder",et],showBeforeIframeApiLoads:[2,"showBeforeIframeApiLoads","showBeforeIframeApiLoads",et],placeholderButtonLabel:"placeholderButtonLabel",placeholderImageQuality:"placeholderImageQuality"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},standalone:!0,features:[vr,zt,q],decls:4,vars:3,consts:[["youtubeContainer",""],[3,"videoId","width","height","isLoading","buttonLabel","quality"],[3,"click","videoId","width","height","isLoading","buttonLabel","quality"]],template:function(o,i){o&1&&(W(0,y_,1,6,"youtube-player-placeholder",1),y(1,"div"),K(2,"div",null,0),v()),o&2&&(Y(i._shouldShowPlaceholder()?0:-1),p(),br("display",i._shouldShowPlaceholder()?"none":""))},dependencies:[v_],encapsulation:2,changeDetection:0});let e=t;return e})(),Sd=!1;function b_(e){if(Sd)return;let t="https://www.youtube.com/iframe_api",n=document.createElement("script"),r=o=>{n.removeEventListener("load",r),n.removeEventListener("error",r),o.type==="error"&&(Sd=!1)};n.addEventListener("load",r),n.addEventListener("error",r),n.src=t,n.async=!0,e&&n.setAttribute("nonce",e),Sd=!0,document.body.appendChild(n)}var D_=(e,t)=>t.id;function I_(e,t){if(e&1&&(y(0,"small"),F(1),v()),e&2){let n=P().$implicit;p(),X(n)}}function C_(e,t){if(e&1&&(y(0,"h3"),F(1),v()),e&2){let n=P().$implicit;p(),te(" ",n," ")}}function E_(e,t){if(e&1&&W(0,I_,2,1,"small")(1,C_,2,1,"h3"),e&2){let n=t.$index;Y(n?0:1)}}function x_(e,t){if(e&1&&fe(0,E_,2,1,null,null,em),e&2){let n=P(2);he(n.song==null?null:n.song.name)}}function __(e,t){if(e&1&&(y(0,"div",3)(1,"strong"),F(2),y(3,"span")(4,"a",1),F(5),v()()()()),e&2){let n=t.$implicit,r=P(3);p(2),te(" ",n.year," \u2014 "),p(2),k("routerLink","/artist/"+r.artistId+"/"+n.id),p(),te(" ",n.name," ")}}function S_(e,t){if(e&1&&fe(0,__,6,3,"div",3,D_),e&2){let n=P(2);he(n.albums)}}function M_(e,t){if(e&1&&(y(0,"div",3)(1,"a",1),F(2," \u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B "),v()()),e&2){let n=P(2);p(),k("routerLink","/artist/"+n.artistId+"/songs/other")}}function T_(e,t){if(e&1&&(y(0,"div",4),K(1,"youtube-player",5),v()),e&2){let n=P(2);p(),k("videoId",n.song==null?null:n.song.clipYouTubeId)}}function A_(e,t){if(e&1&&(y(0,"div",0)(1,"h2")(2,"a",1),F(3),v()(),y(4,"div",2),W(5,x_,2,0),y(6,"small"),F(7),v(),y(8,"pre"),F(9),v(),W(10,S_,2,0)(11,M_,3,1,"div",3),v(),y(12,"div",2),W(13,T_,2,1,"div",4),v()()),e&2){let n=P();p(2),k("routerLink","/artist/"+n.artistId),p(),X(n.artistName),p(2),Y(n.song!=null&&n.song.name?5:-1),p(2),X(n.song==null?null:n.song.authors),p(2),X(n.song==null?null:n.song.text),p(),Y(n.albums.length?10:11),p(3),Y(n.song!=null&&n.song.clipYouTubeId?13:-1)}}var xg=(()=>{let t=class t{constructor(r){this.route=r,this.artists=Ce,this.artistName="",this.artistId=null,this.albums=[],this.song=null,this.artistId=this.route.snapshot.paramMap.get("artist");let o=this.route.snapshot.paramMap.get("song");if(!this.artistId||!o)return;let i=this.artists[this.artistId];this.artistName=i.artist.name,this.song=i.songs[o],this.albums=this.song.albums.map(s=>i.albums[s])}ngOnInit(){document.title=`${this.song?.name[0]} | ${this.artistName}`}};t.\u0275fac=function(o){return new(o||t)(Q(se))},t.\u0275cmp=G({type:t,selectors:[["app-song-page"]],standalone:!0,features:[q],decls:1,vars:1,consts:[[1,"song-page"],[3,"routerLink"],[1,"song-page__col"],[1,"song-page__item"],[1,"song-page__video"],["placeholderImageQuality","low",3,"videoId"]],template:function(o,i){o&1&&W(0,A_,14,7,"div",0),o&2&&Y(i.artistName?0:-1)},dependencies:[we,Ri],styles:[".song-page[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-left:-1%;margin-right:-1%}.song-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{box-sizing:border-box;word-wrap:break-word;margin-left:1%;margin-right:1%;width:98%}.song-page__col[_ngcontent-%COMP%]{box-sizing:border-box;word-wrap:break-word;margin-left:1%;margin-right:1%;width:48%;position:relative}@media screen and (max-width: 992px){.song-page__col[_ngcontent-%COMP%]{width:98%}}.song-page__video[_ngcontent-%COMP%]{position:sticky;top:20px;aspect-ratio:16/9}@media screen and (max-width: 992px){.song-page__video[_ngcontent-%COMP%]{margin:20px 0 40px}}.song-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-weight:800;line-height:1.2;font-size:30px;letter-spacing:.1em;text-transform:uppercase}.song-page[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{white-space:pre-line;color:#696c6f;margin-top:2px;font-weight:500;line-height:1.5;font-size:16px}.song-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{line-height:1.5;font-size:16px}"]});let e=t;return e})();var k_=(e,t)=>t.id;function N_(e,t){if(e&1&&(y(0,"div",4),F(1),y(2,"a",2),F(3),v()()),e&2){let n=t.$implicit,r=t.$index,o=P(2);p(),te(" ",r+1,". "),p(),k("routerLink","/artist/"+o.artistId+"/song/"+n.id),p(),te(" ",n.name[0]," ")}}function R_(e,t){if(e&1&&(y(0,"h2",1)(1,"a",2),F(2),v()(),y(3,"div",3),fe(4,N_,4,3,"div",4,k_),v()),e&2){let n=P();p(),k("routerLink","/artist/"+n.artistId),p(),X(n.artistName),p(2),he(n.songs)}}var _g=(()=>{let t=class t{constructor(r){if(this.route=r,this.artists=Ce,this.artistName="",this.artistId=null,this.songs=[],this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let o=this.artists[this.artistId];this.artistName=o.artist.name,this.songs=Object.values(o.songs).sort((i,s)=>i.name[0]<s.name[0]?-1:i.name[0]>s.name[0]?1:0)}ngOnInit(){document.title=`${this.artistName} | \u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438`}};t.\u0275fac=function(o){return new(o||t)(Q(se))},t.\u0275cmp=G({type:t,selectors:[["app-songs-page"]],standalone:!0,features:[q],decls:2,vars:1,consts:[[1,"songs-page"],[1,"songs-page__name"],[3,"routerLink"],[1,"songs-page__wrap"],[1,"songs-page__item"]],template:function(o,i){o&1&&(y(0,"div",0),W(1,R_,6,2),v()),o&2&&(p(),Y(i.artistName?1:-1))},dependencies:[we],styles:[".songs-page__item[_ngcontent-%COMP%]{line-height:1.8}.songs-page__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;text-decoration:none;border-bottom:1px solid var(--hover-text)}"]});let e=t;return e})();var O_=(e,t)=>t.id;function P_(e,t){if(e&1&&(y(0,"div",4),F(1),y(2,"a",2),F(3),v()()),e&2){let n=t.$implicit,r=t.$index,o=P(2);p(),te(" ",r+1,". "),p(),k("routerLink","/artist/"+o.artistId+"/song/"+n.id),p(),te(" ",n.name[0]," ")}}function F_(e,t){if(e&1&&(y(0,"h2",1)(1,"a",2),F(2),v()(),y(3,"div",3),fe(4,P_,4,3,"div",4,O_),v()),e&2){let n=P();p(),k("routerLink","/artist/"+n.artistId),p(),X(n.artistName),p(2),he(n.songs)}}var Sg=(()=>{let t=class t{constructor(r){if(this.route=r,this.artists=Ce,this.artistName="",this.artistId=null,this.songs=[],this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let o=this.artists[this.artistId];this.artistName=o.artist.name,this.songs=Object.values(o.songs).filter(i=>!i.albums.length).sort((i,s)=>i.name[0]<s.name[0]?-1:i.name[0]>s.name[0]?1:0)}ngOnInit(){document.title=`${this.artistName} | \u0414\u0440\u0443\u0433\u0438\u0435 \u043F\u0435\u0441\u043D\u0438`}};t.\u0275fac=function(o){return new(o||t)(Q(se))},t.\u0275cmp=G({type:t,selectors:[["app-other-songs-page"]],standalone:!0,features:[q],decls:2,vars:1,consts:[[1,"other-songs-page"],[1,"other-songs-page__name"],[3,"routerLink"],[1,"other-songs-page__wrap"],[1,"other-songs-page__item"]],template:function(o,i){o&1&&(y(0,"div",0),W(1,F_,6,2),v()),o&2&&(p(),Y(i.artistName?1:-1))},dependencies:[we],styles:[".other-songs-page__item[_ngcontent-%COMP%]{line-height:1.8}.other-songs-page__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;text-decoration:none;border-bottom:1px solid var(--hover-text)}"]});let e=t;return e})();var L_=(e,t)=>t.id;function j_(e,t){if(e&1){let n=ai();y(0,"div",4)(1,"div",5)(2,"youtube-player",6),Wt("stateChange",function(o){Qo(n);let i=P(2);return Ko(i.stateChange(o))}),v()(),y(3,"a",7),F(4),v()()}if(e&2){let n=t.$implicit,r=P(2);p(2),k("videoId",n.clipYouTubeId),p(),k("routerLink","/artist/"+r.artistId+"/song/"+n.id),p(),te(" ",n.name," ")}}function V_(e,t){if(e&1&&(y(0,"div",1)(1,"h2",2)(2,"a",3),F(3),v()()(),y(4,"div",1),fe(5,j_,5,3,"div",4,L_),v()),e&2){let n=P();p(2),k("routerLink","/artist/"+n.artistId),p(),X(n.artistName),p(2),he(n.songs)}}var Mg=(()=>{let t=class t{constructor(r){if(this.route=r,this.artists=Ce,this.artistName="",this.artistId=null,this.songs=[],this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let o=this.artists[this.artistId];this.artistName=o.artist.name,this.songs=Object.values(o.songs).filter(i=>i.clipYouTubeId).sort((i,s)=>i.name[0]<s.name[0]?-1:i.name[0]>s.name[0]?1:0)}ngOnInit(){document.title=`${this.artistName} | \u041A\u043B\u0438\u043F\u044B`}stateChange(r){console.log(r)}};t.\u0275fac=function(o){return new(o||t)(Q(se))},t.\u0275cmp=G({type:t,selectors:[["app-video-page"]],standalone:!0,features:[q],decls:2,vars:1,consts:[[1,"video-page"],[1,"video-page__wrap"],[1,"video-page__name"],[3,"routerLink"],[1,"video-page__item"],[1,"video-page__player"],["placeholderImageQuality","low",3,"stateChange","videoId"],[1,"video-page__title",3,"routerLink"]],template:function(o,i){o&1&&(y(0,"div",0),W(1,V_,7,2),v()),o&2&&(p(),Y(i.artistName?1:-1))},dependencies:[we,Ri],styles:[".video-page[_ngcontent-%COMP%]{margin-bottom:40px}.video-page__wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-left:-1%;margin-right:-1%}.video-page__name[_ngcontent-%COMP%]{box-sizing:border-box;word-wrap:break-word;margin-left:1%;margin-right:1%;width:98%;padding:0 22px}.video-page__item[_ngcontent-%COMP%]{box-sizing:border-box;word-wrap:break-word;margin-left:1%;margin-right:1%;width:48%;padding:20px 22px 24px;text-decoration:none;transition:background-color .3s ease;aspect-ratio:16/9}@media screen and (max-width: 992px){.video-page__item[_ngcontent-%COMP%]{width:98%}}.video-page__title[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-decoration:none;text-transform:uppercase;transition:color .3s ease;margin-top:14px}"]});let e=t;return e})();var Tg=[{path:"",component:vg},{path:"artist/:artist",component:bg},{path:"artist/:artist/video",component:Mg},{path:"artist/:artist/songs",component:_g},{path:"artist/:artist/songs/other",component:Sg},{path:"artist/:artist/song/:song",component:xg},{path:"artist/:artist/:album",component:Dg},{path:"**",redirectTo:""}];var Ag={providers:[am({eventCoalescing:!0}),cg(Tg)]};var kg=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=G({type:t,selectors:[["app-root"]],standalone:!0,features:[q],decls:2,vars:0,consts:[[1,"wrapper"]],template:function(o,i){o&1&&(y(0,"div",0),K(1,"router-outlet"),v())},dependencies:[Gl],encapsulation:2});let e=t;return e})();Mm(kg,Ag).catch(console.error);
