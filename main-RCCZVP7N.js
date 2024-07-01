var Kg=Object.defineProperty,Jg=Object.defineProperties;var Xg=Object.getOwnPropertyDescriptors;var $d=Object.getOwnPropertySymbols;var ey=Object.prototype.hasOwnProperty,ty=Object.prototype.propertyIsEnumerable;var Hd=(e,t,n)=>t in e?Kg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||={})ey.call(t,n)&&Hd(e,n,t[n]);if($d)for(var n of $d(t))ty.call(t,n)&&Hd(e,n,t[n]);return e},K=(e,t)=>Jg(e,Xg(t));var Ji=null;var Ki=1,Ud=Symbol("SIGNAL");function P(e){let t=Ji;return Ji=e,t}function zd(){return Ji}var Xi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ny(e){if(!(os(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Ki)){if(!e.producerMustRecompute(e)&&!ts(e)){e.dirty=!1,e.lastCleanEpoch=Ki;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Ki}}function es(e){return e&&(e.nextProducerIndex=0),P(e)}function Wd(e,t){if(P(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(os(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)rs(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function ts(e){is(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(ny(n),r!==n.version))return!0}return!1}function ns(e){if(is(e),os(e))for(let t=0;t<e.producerNode.length;t++)rs(e.producerNode[t],e.producerIndexOfThis[t]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function rs(e,t){if(ry(e),e.liveConsumerNode.length===1&&oy(e))for(let r=0;r<e.producerNode.length;r++)rs(e.producerNode[r],e.producerIndexOfThis[r]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];is(o),o.producerIndexOfThis[r]=t}}function os(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function is(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function ry(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function oy(e){return e.producerNode!==void 0}function iy(){throw new Error}var sy=iy;function Gd(e){sy=e}function x(e){return typeof e=="function"}function sn(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var eo=sn(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Zn(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var ee=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(x(r))try{r()}catch(i){t=i instanceof eo?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Yd(i)}catch(s){t=t??[],s instanceof eo?t=[...t,...s.errors]:t.push(s)}}if(t)throw new eo(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Yd(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Zn(n,t)}remove(t){let{_finalizers:n}=this;n&&Zn(n,t),t instanceof e&&t._removeParent(this)}};ee.EMPTY=(()=>{let e=new ee;return e.closed=!0,e})();var ss=ee.EMPTY;function to(e){return e instanceof ee||e&&"closed"in e&&x(e.remove)&&x(e.add)&&x(e.unsubscribe)}function Yd(e){x(e)?e():e.unsubscribe()}var He={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var an={setTimeout(e,t,...n){let{delegate:r}=an;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=an;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function no(e){an.setTimeout(()=>{let{onUnhandledError:t}=He;if(t)t(e);else throw e})}function Qn(){}var qd=as("C",void 0,void 0);function Zd(e){return as("E",void 0,e)}function Qd(e){return as("N",e,void 0)}function as(e,t,n){return{kind:e,value:t,error:n}}var Ot=null;function un(e){if(He.useDeprecatedSynchronousErrorHandling){let t=!Ot;if(t&&(Ot={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=Ot;if(Ot=null,n)throw r}}else e()}function Kd(e){He.useDeprecatedSynchronousErrorHandling&&Ot&&(Ot.errorThrown=!0,Ot.error=e)}var Pt=class extends ee{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,to(t)&&t.add(this)):this.destination=ly}static create(t,n,r){return new ln(t,n,r)}next(t){this.isStopped?ls(Qd(t),this):this._next(t)}error(t){this.isStopped?ls(Zd(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?ls(qd,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},ay=Function.prototype.bind;function us(e,t){return ay.call(e,t)}var cs=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){ro(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){ro(r)}else ro(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){ro(n)}}},ln=class extends Pt{constructor(t,n,r){super();let o;if(x(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&He.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&us(t.next,i),error:t.error&&us(t.error,i),complete:t.complete&&us(t.complete,i)}):o=t}this.destination=new cs(o)}};function ro(e){He.useDeprecatedSynchronousErrorHandling?Kd(e):no(e)}function uy(e){throw e}function ls(e,t){let{onStoppedNotification:n}=He;n&&an.setTimeout(()=>n(e,t))}var ly={closed:!0,next:Qn,error:uy,complete:Qn};var cn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Te(e){return e}function ds(...e){return fs(e)}function fs(e){return e.length===0?Te:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var $=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=dy(n)?n:new ln(n,r,o);return un(()=>{let{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=Jd(r),new r((o,i)=>{let s=new ln({next:a=>{try{n(a)}catch(u){i(u),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[cn](){return this}pipe(...n){return fs(n)(this)}toPromise(n){return n=Jd(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Jd(e){var t;return(t=e??He.Promise)!==null&&t!==void 0?t:Promise}function cy(e){return e&&x(e.next)&&x(e.error)&&x(e.complete)}function dy(e){return e&&e instanceof Pt||cy(e)&&to(e)}function hs(e){return x(e?.lift)}function j(e){return t=>{if(hs(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function V(e,t,n,r,o){return new ps(e,t,n,r,o)}var ps=class extends Pt{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(u){t.error(u)}}:super._next,this._error=o?function(a){try{o(a)}catch(u){t.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function dn(){return j((e,t)=>{let n=null;e._refCount++;let r=V(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var fn=class extends ${constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,hs(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ee;let n=this.getSubject();t.add(this.source.subscribe(V(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ee.EMPTY)}return t}refCount(){return dn()(this)}};var Xd=sn(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var se=(()=>{class e extends ${constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new oo(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Xd}next(n){un(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){un(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){un(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?ss:(this.currentObservers=null,i.push(n),new ee(()=>{this.currentObservers=null,Zn(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new $;return n.source=this,n}}return e.create=(t,n)=>new oo(t,n),e})(),oo=class extends se{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:ss}};var J=class extends se{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var Ae=new $(e=>e.complete());function ef(e){return e&&x(e.schedule)}function tf(e){return e[e.length-1]}function nf(e){return x(tf(e))?e.pop():void 0}function wt(e){return ef(tf(e))?e.pop():void 0}function of(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(c){try{l(r.next(c))}catch(d){s(d)}}function u(c){try{l(r.throw(c))}catch(d){s(d)}}function l(c){c.done?i(c.value):o(c.value).then(a,u)}l((r=r.apply(e,t||[])).next())})}function rf(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ft(e){return this instanceof Ft?(this.v=e,this):new Ft(e)}function sf(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o={},a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(g){return Promise.resolve(g).then(f,d)}}function a(f,g){r[f]&&(o[f]=function(b){return new Promise(function(B,U){i.push([f,b,B,U])>1||u(f,b)})},g&&(o[f]=g(o[f])))}function u(f,g){try{l(r[f](g))}catch(b){h(i[0][3],b)}}function l(f){f.value instanceof Ft?Promise.resolve(f.value.v).then(c,d):h(i[0][2],f)}function c(f){u("next",f)}function d(f){u("throw",f)}function h(f,g){f(g),i.shift(),i.length&&u(i[0][0],i[0][1])}}function af(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof rf=="function"?rf(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,u){s=e[i](s),o(a,u,s.done,s.value)})}}function o(i,s,a,u){Promise.resolve(u).then(function(l){i({value:l,done:a})},s)}}var io=e=>e&&typeof e.length=="number"&&typeof e!="function";function so(e){return x(e?.then)}function ao(e){return x(e[cn])}function uo(e){return Symbol.asyncIterator&&x(e?.[Symbol.asyncIterator])}function lo(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function fy(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var co=fy();function fo(e){return x(e?.[co])}function ho(e){return sf(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield Ft(n.read());if(o)return yield Ft(void 0);yield yield Ft(r)}}finally{n.releaseLock()}})}function po(e){return x(e?.getReader)}function ae(e){if(e instanceof $)return e;if(e!=null){if(ao(e))return hy(e);if(io(e))return py(e);if(so(e))return my(e);if(uo(e))return uf(e);if(fo(e))return gy(e);if(po(e))return yy(e)}throw lo(e)}function hy(e){return new $(t=>{let n=e[cn]();if(x(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function py(e){return new $(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function my(e){return new $(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,no)})}function gy(e){return new $(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function uf(e){return new $(t=>{vy(e,t).catch(n=>t.error(n))})}function yy(e){return uf(ho(e))}function vy(e,t){var n,r,o,i;return of(this,void 0,void 0,function*(){try{for(n=af(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function Ce(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function mo(e,t=0){return j((n,r)=>{n.subscribe(V(r,o=>Ce(r,e,()=>r.next(o),t),()=>Ce(r,e,()=>r.complete(),t),o=>Ce(r,e,()=>r.error(o),t)))})}function go(e,t=0){return j((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function lf(e,t){return ae(e).pipe(go(t),mo(t))}function cf(e,t){return ae(e).pipe(go(t),mo(t))}function df(e,t){return new $(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function ff(e,t){return new $(n=>{let r;return Ce(n,t,()=>{r=e[co](),Ce(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>x(r?.return)&&r.return()})}function yo(e,t){if(!e)throw new Error("Iterable cannot be null");return new $(n=>{Ce(n,t,()=>{let r=e[Symbol.asyncIterator]();Ce(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function hf(e,t){return yo(ho(e),t)}function pf(e,t){if(e!=null){if(ao(e))return lf(e,t);if(io(e))return df(e,t);if(so(e))return cf(e,t);if(uo(e))return yo(e,t);if(fo(e))return ff(e,t);if(po(e))return hf(e,t)}throw lo(e)}function te(e,t){return t?pf(e,t):ae(e)}function I(...e){let t=wt(e);return te(e,t)}function hn(e,t){let n=x(e)?e:()=>e,r=o=>o.error(n());return new $(t?o=>t.schedule(r,0,o):r)}function ms(e){return!!e&&(e instanceof $||x(e.lift)&&x(e.subscribe))}var st=sn(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function F(e,t){return j((n,r)=>{let o=0;n.subscribe(V(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:wy}=Array;function by(e,t){return wy(t)?e(...t):e(t)}function vo(e){return F(t=>by(e,t))}var{isArray:Dy}=Array,{getPrototypeOf:Iy,prototype:Cy,keys:Ey}=Object;function mf(e){if(e.length===1){let t=e[0];if(Dy(t))return{args:t,keys:null};if(xy(t)){let n=Ey(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function xy(e){return e&&typeof e=="object"&&Iy(e)===Cy}function gf(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function wo(...e){let t=wt(e),n=nf(e),{args:r,keys:o}=mf(e);if(r.length===0)return te([],t);let i=new $(_y(r,t,o?s=>gf(o,s):Te));return n?i.pipe(vo(n)):i}function _y(e,t,n=Te){return r=>{yf(t,()=>{let{length:o}=e,i=new Array(o),s=o,a=o;for(let u=0;u<o;u++)yf(t,()=>{let l=te(e[u],t),c=!1;l.subscribe(V(r,d=>{i[u]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function yf(e,t,n){e?Ce(n,e,t):t()}function vf(e,t,n,r,o,i,s,a){let u=[],l=0,c=0,d=!1,h=()=>{d&&!u.length&&!l&&t.complete()},f=b=>l<r?g(b):u.push(b),g=b=>{i&&t.next(b),l++;let B=!1;ae(n(b,c++)).subscribe(V(t,U=>{o?.(U),i?f(U):t.next(U)},()=>{B=!0},void 0,()=>{if(B)try{for(l--;u.length&&l<r;){let U=u.shift();s?Ce(t,s,()=>g(U)):g(U)}h()}catch(U){t.error(U)}}))};return e.subscribe(V(t,f,()=>{d=!0,h()})),()=>{a?.()}}function oe(e,t,n=1/0){return x(t)?oe((r,o)=>F((i,s)=>t(r,i,o,s))(ae(e(r,o))),n):(typeof t=="number"&&(n=t),j((r,o)=>vf(r,o,e,n)))}function pn(e=1/0){return oe(Te,e)}function wf(){return pn(1)}function mn(...e){return wf()(te(e,wt(e)))}function bo(e){return new $(t=>{ae(e()).subscribe(t)})}function Do(e,t,n){return n?Do(e,t).pipe(vo(n)):new $(r=>{let o=(...s)=>r.next(s.length===1?s[0]:s),i=e(o);return x(t)?()=>t(o,i):void 0})}function Ue(e,t){return j((n,r)=>{let o=0;n.subscribe(V(r,i=>e.call(t,i,o++)&&r.next(i)))})}function bt(e){return j((t,n)=>{let r=null,o=!1,i;r=t.subscribe(V(n,void 0,void 0,s=>{i=ae(e(s,bt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function bf(e,t,n,r,o){return(i,s)=>{let a=n,u=t,l=0;i.subscribe(V(s,c=>{let d=l++;u=a?e(u,c,d):(a=!0,c),r&&s.next(u)},o&&(()=>{a&&s.next(u),s.complete()})))}}function gn(e,t){return x(t)?oe(e,t,1):oe(e,1)}function Dt(e){return j((t,n)=>{let r=!1;t.subscribe(V(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function at(e){return e<=0?()=>Ae:j((t,n)=>{let r=0;t.subscribe(V(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function gs(e){return F(()=>e)}function Io(e=Sy){return j((t,n)=>{let r=!1;t.subscribe(V(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function Sy(){return new st}function Kn(e){return j((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Ze(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Ue((o,i)=>e(o,i,r)):Te,at(1),n?Dt(t):Io(()=>new st))}function yn(e){return e<=0?()=>Ae:j((t,n)=>{let r=[];t.subscribe(V(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function ys(e,t){let n=arguments.length>=2;return r=>r.pipe(e?Ue((o,i)=>e(o,i,r)):Te,yn(1),n?Dt(t):Io(()=>new st))}function vs(e,t){return j(bf(e,t,arguments.length>=2,!0))}function ws(...e){let t=wt(e);return j((n,r)=>{(t?mn(e,n,t):mn(e,n)).subscribe(r)})}function ke(e,t){return j((n,r)=>{let o=null,i=0,s=!1,a=()=>s&&!o&&r.complete();n.subscribe(V(r,u=>{o?.unsubscribe();let l=0,c=i++;ae(e(u,c)).subscribe(o=V(r,d=>r.next(t?t(u,d,c,l++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Jn(e){return j((t,n)=>{ae(e).subscribe(V(n,()=>n.complete(),Qn)),!n.closed&&t.subscribe(n)})}function ce(e,t,n){let r=x(e)||t||n?{next:e,error:t,complete:n}:e;return r?j((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;o.subscribe(V(i,u=>{var l;(l=r.next)===null||l===void 0||l.call(r,u),i.next(u)},()=>{var u;a=!1,(u=r.complete)===null||u===void 0||u.call(r),i.complete()},u=>{var l;a=!1,(l=r.error)===null||l===void 0||l.call(r,u),i.error(u)},()=>{var u,l;a&&((u=r.unsubscribe)===null||u===void 0||u.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):Te}var oh="https://g.co/ng/security#xss",E=class extends Error{constructor(t,n){super(Ea(t,n)),this.code=t}};function Ea(e,t){return`${`NG0${Math.abs(e)}`}${t?": "+t:""}`}function xa(e){return{toString:e}.toString()}var er=globalThis;function Y(e){for(let t in e)if(e[t]===Y)return t;throw Error("Could not find renamed property on target object.")}function xe(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(xe).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let t=e.toString();if(t==null)return""+t;let n=t.indexOf(`
`);return n===-1?t:t.substring(0,n)}function Df(e,t){return e==null||e===""?t===null?"":t:t==null||t===""?e:e+" "+t}var My=Y({__forward_ref__:Y});function ih(e){return e.__forward_ref__=ih,e.toString=function(){return xe(this())},e}function Pe(e){return sh(e)?e():e}function sh(e){return typeof e=="function"&&e.hasOwnProperty(My)&&e.__forward_ref__===ih}function S(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Jo(e){return If(e,uh)||If(e,lh)}function ah(e){return Jo(e)!==null}function If(e,t){return e.hasOwnProperty(t)?e[t]:null}function Ty(e){let t=e&&(e[uh]||e[lh]);return t||null}function Cf(e){return e&&(e.hasOwnProperty(Ef)||e.hasOwnProperty(Ay))?e[Ef]:null}var uh=Y({\u0275prov:Y}),Ef=Y({\u0275inj:Y}),lh=Y({ngInjectableDef:Y}),Ay=Y({ngInjectorDef:Y}),M=class{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=S({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ch(e){return e&&!!e.\u0275providers}var ky=Y({\u0275cmp:Y}),Ny=Y({\u0275dir:Y}),Ry=Y({\u0275pipe:Y}),Oy=Y({\u0275mod:Y}),ko=Y({\u0275fac:Y}),Xn=Y({__NG_ELEMENT_ID__:Y}),xf=Y({__NG_ENV_ID__:Y});function Xo(e){return typeof e=="string"?e:e==null?"":String(e)}function Py(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():Xo(e)}function Fy(e,t){let n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new E(-200,e)}function _a(e,t){throw new E(-201,!1)}var R=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(R||{}),Rs;function dh(){return Rs}function Ee(e){let t=Rs;return Rs=e,t}function fh(e,t,n){let r=Jo(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&R.Optional)return null;if(t!==void 0)return t;_a(e,"Injector")}var Ly={},tr=Ly,jy="__NG_DI_FLAG__",No="ngTempTokenPath",Vy="ngTokenPath",By=/\n/gm,$y="\u0275",_f="__source",Dn;function Hy(){return Dn}function It(e){let t=Dn;return Dn=e,t}function Uy(e,t=R.Default){if(Dn===void 0)throw new E(-203,!1);return Dn===null?fh(e,void 0,t):Dn.get(e,t&R.Optional?null:void 0,t)}function L(e,t=R.Default){return(dh()||Uy)(Pe(e),t)}function m(e,t=R.Default){return L(e,ei(t))}function ei(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Os(e){let t=[];for(let n=0;n<e.length;n++){let r=Pe(e[n]);if(Array.isArray(r)){if(r.length===0)throw new E(900,!1);let o,i=R.Default;for(let s=0;s<r.length;s++){let a=r[s],u=zy(a);typeof u=="number"?u===-1?o=a.token:i|=u:o=a}t.push(L(o,i))}else t.push(L(r))}return t}function zy(e){return e[jy]}function Wy(e,t,n,r){let o=e[No];throw t[_f]&&o.unshift(t[_f]),e.message=Gy(`
`+e.message,o,n,r),e[Vy]=o,e[No]=null,e}function Gy(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==$y?e.slice(2):e;let o=xe(t);if(Array.isArray(t))o=t.map(xe).join(" -> ");else if(typeof t=="object"){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+(typeof a=="string"?JSON.stringify(a):xe(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(By,`
  `)}`}function Vt(e,t){let n=e.hasOwnProperty(ko);return n?e[ko]:null}function Yy(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}function qy(e){return e.flat(Number.POSITIVE_INFINITY)}function Sa(e,t){e.forEach(n=>Array.isArray(n)?Sa(n,t):t(n))}function hh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ro(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Zy(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(o===1)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;){let i=o-2;e[o]=e[i],o--}e[t]=n,e[t+1]=r}}function Qy(e,t,n){let r=gr(e,t);return r>=0?e[r|1]=n:(r=~r,Zy(e,r,t,n)),r}function bs(e,t){let n=gr(e,t);if(n>=0)return e[n|1]}function gr(e,t){return Ky(e,t,1)}function Ky(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){let i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}var nr={},Bt=[],Cn=new M(""),ph=new M("",-1),mh=new M(""),Oo=class{get(t,n=tr){if(n===tr){let r=new Error(`NullInjectorError: No provider for ${xe(t)}!`);throw r.name="NullInjectorError",r}return n}},gh=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(gh||{}),Je=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(Je||{}),En=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(En||{});function Jy(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}function Ps(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{let i=o,s=n[++r];Xy(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function yh(e){return e===3||e===4||e===6}function Xy(e){return e.charCodeAt(0)===64}function Ma(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Sf(e,n,o,null,t[++r]):Sf(e,n,o,null,null))}}return e}function Sf(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let a=e[i++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=i-1;break}}}for(;i<e.length;){let a=e[i];if(typeof a=="number")break;if(a===n){if(r===null){o!==null&&(e[i+1]=o);return}else if(r===e[i+1]){e[i+2]=o;return}}i++,r!==null&&i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),r!==null&&e.splice(i++,0,r),o!==null&&e.splice(i++,0,o)}var vh="ng-template";function ev(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&Jy(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Ta(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function Ta(e){return e.type===4&&e.value!==vh}function tv(e,t,n){let r=e.type===4&&!n?vh:e.value;return t===r}function nv(e,t,n){let r=4,o=e.attrs,i=o!==null?iv(o):0,s=!1;for(let a=0;a<t.length;a++){let u=t[a];if(typeof u=="number"){if(!s&&!ze(r)&&!ze(u))return!1;if(s&&ze(u))continue;s=!1,r=u|r&1;continue}if(!s)if(r&4){if(r=2|r&1,u!==""&&!tv(e,u,n)||u===""&&t.length===1){if(ze(r))return!1;s=!0}}else if(r&8){if(o===null||!ev(e,o,u,n)){if(ze(r))return!1;s=!0}}else{let l=t[++a],c=rv(u,o,Ta(e),n);if(c===-1){if(ze(r))return!1;s=!0;continue}if(l!==""){let d;if(c>i?d="":d=o[c+1].toLowerCase(),r&2&&l!==d){if(ze(r))return!1;s=!0}}}}return ze(r)||s}function ze(e){return(e&1)===0}function rv(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=t[++o];for(;typeof a=="string";)a=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return sv(t,e)}function ov(e,t,n=!1){for(let r=0;r<t.length;r++)if(nv(e,t[r],n))return!0;return!1}function iv(e){for(let t=0;t<e.length;t++){let n=e[t];if(yh(n))return t}return e.length}function sv(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function Mf(e,t){return e?":not("+t.trim()+")":t}function av(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!ze(s)&&(t+=Mf(i,o),o=""),r=s,i=i||!ze(r);n++}return o!==""&&(t+=Mf(i,o)),t}function uv(e){return e.map(av).join(",")}function lv(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!ze(o))break;o=i}r++}return{attrs:t,classes:n}}function q(e){return xa(()=>{let t=Ch(e),n=K(w({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===gh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Je.Emulated,styles:e.styles||Bt,_:null,schemas:e.schemas||null,tView:null,id:""});Eh(n);let r=e.dependencies;return n.directiveDefs=Af(r,!1),n.pipeDefs=Af(r,!0),n.id=fv(n),n})}function cv(e){return $t(e)||wh(e)}function dv(e){return e!==null}function Tf(e,t){if(e==null)return nr;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,a=En.None;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i):(i=o,s=o),t?(n[i]=a!==En.None?[r,a]:r,t[i]=s):n[i]=r}return n}function yr(e){return xa(()=>{let t=Ch(e);return Eh(t),t})}function Aa(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone===!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function $t(e){return e[ky]||null}function wh(e){return e[Ny]||null}function bh(e){return e[Ry]||null}function Dh(e){let t=$t(e)||wh(e)||bh(e);return t!==null?t.standalone:!1}function Ih(e,t){let n=e[Oy]||null;if(!n&&t===!0)throw new Error(`Type ${xe(e)} does not have '\u0275mod' property.`);return n}function Ch(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputTransforms:null,inputConfig:e.inputs||nr,exportAs:e.exportAs||null,standalone:e.standalone===!0,signals:e.signals===!0,selectors:e.selectors||Bt,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Tf(e.inputs,t),outputs:Tf(e.outputs),debugInfo:null}}function Eh(e){e.features?.forEach(t=>t(e))}function Af(e,t){if(!e)return null;let n=t?bh:cv;return()=>(typeof e=="function"?e():e).map(r=>n(r)).filter(dv)}function fv(e){let t=0,n=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,e.consts,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery].join("|");for(let o of n)t=Math.imul(31,t)+o.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function ti(e){return{\u0275providers:e}}function hv(...e){return{\u0275providers:xh(!0,e),\u0275fromNgModule:!0}}function xh(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return Sa(t,s=>{let a=s;Fs(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&_h(o,i),n}function _h(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];ka(o,i=>{t(i,r)})}}function Fs(e,t,n,r){if(e=Pe(e),!e)return!1;let o=null,i=Cf(e),s=!i&&$t(e);if(!i&&!s){let u=e.ngModule;if(i=Cf(u),i)o=u;else return!1}else{if(s&&!s.standalone)return!1;o=e}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let u=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of u)Fs(l,t,n,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let l;try{Sa(i.imports,c=>{Fs(c,t,n,r)&&(l||=[],l.push(c))})}finally{}l!==void 0&&_h(l,t)}if(!a){let l=Vt(o)||(()=>new o);t({provide:o,useFactory:l,deps:Bt},o),t({provide:mh,useValue:o,multi:!0},o),t({provide:Cn,useValue:()=>L(o),multi:!0},o)}let u=i.providers;if(u!=null&&!a){let l=e;ka(u,c=>{t(c,l)})}}else return!1;return o!==e&&e.providers!==void 0}function ka(e,t){for(let n of e)ch(n)&&(n=n.\u0275providers),Array.isArray(n)?ka(n,t):t(n)}var pv=Y({provide:String,useValue:Y});function Sh(e){return e!==null&&typeof e=="object"&&pv in e}function mv(e){return!!(e&&e.useExisting)}function gv(e){return!!(e&&e.useFactory)}function Ls(e){return typeof e=="function"}var ni=new M(""),xo={},yv={},Ds;function Na(){return Ds===void 0&&(Ds=new Oo),Ds}var Le=class{},rr=class extends Le{get destroyed(){return this._destroyed}constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Vs(t,s=>this.processProvider(s)),this.records.set(ph,vn(void 0,this)),o.has("environment")&&this.records.set(Le,vn(void 0,this));let i=this.records.get(ni);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(mh,Bt,R.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let t=P(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),P(t)}}onDestroy(t){return this.assertNotDestroyed(),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){this.assertNotDestroyed();let n=It(this),r=Ee(void 0),o;try{return t()}finally{It(n),Ee(r)}}get(t,n=tr,r=R.Default){if(this.assertNotDestroyed(),t.hasOwnProperty(xf))return t[xf](this);r=ei(r);let o,i=It(this),s=Ee(void 0);try{if(!(r&R.SkipSelf)){let u=this.records.get(t);if(u===void 0){let l=Cv(t)&&Jo(t);l&&this.injectableDefInScope(l)?u=vn(js(t),xo):u=null,this.records.set(t,u)}if(u!=null)return this.hydrate(t,u)}let a=r&R.Self?Na():this.parent;return n=r&R.Optional&&n===tr?null:n,a.get(t,n)}catch(a){if(a.name==="NullInjectorError"){if((a[No]=a[No]||[]).unshift(xe(t)),i)throw a;return Wy(a,t,"R3InjectorError",this.source)}else throw a}finally{Ee(s),It(i)}}resolveInjectorInitializers(){let t=P(null),n=It(this),r=Ee(void 0),o;try{let i=this.get(Cn,Bt,R.Self);for(let s of i)s()}finally{It(n),Ee(r),P(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(xe(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new E(205,!1)}processProvider(t){t=Pe(t);let n=Ls(t)?t:Pe(t&&t.provide),r=wv(t);if(!Ls(t)&&t.multi===!0){let o=this.records.get(n);o||(o=vn(void 0,xo,!0),o.factory=()=>Os(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){let r=P(null);try{return n.value===xo&&(n.value=yv,n.value=n.factory()),typeof n.value=="object"&&n.value&&Iv(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{P(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=Pe(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function js(e){let t=Jo(e),n=t!==null?t.factory:Vt(e);if(n!==null)return n;if(e instanceof M)throw new E(204,!1);if(e instanceof Function)return vv(e);throw new E(204,!1)}function vv(e){if(e.length>0)throw new E(204,!1);let n=Ty(e);return n!==null?()=>n.factory(e):()=>new e}function wv(e){if(Sh(e))return vn(void 0,e.useValue);{let t=bv(e);return vn(t,xo)}}function bv(e,t,n){let r;if(Ls(e)){let o=Pe(e);return Vt(o)||js(o)}else if(Sh(e))r=()=>Pe(e.useValue);else if(gv(e))r=()=>e.useFactory(...Os(e.deps||[]));else if(mv(e))r=()=>L(Pe(e.useExisting));else{let o=Pe(e&&(e.useClass||e.provide));if(Dv(e))r=()=>new o(...Os(e.deps));else return Vt(o)||js(o)}return r}function vn(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Dv(e){return!!e.deps}function Iv(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Cv(e){return typeof e=="function"||typeof e=="object"&&e instanceof M}function Vs(e,t){for(let n of e)Array.isArray(n)?Vs(n,t):n&&ch(n)?Vs(n.\u0275providers,t):t(n)}function dt(e,t){e instanceof rr&&e.assertNotDestroyed();let n,r=It(e),o=Ee(void 0);try{return t()}finally{It(r),Ee(o)}}function Ev(){return dh()!==void 0||Hy()!=null}function xv(e){return typeof e=="function"}var ft=0,_=1,C=2,we=3,We=4,Ye=5,or=6,Po=7,ye=8,xn=9,Xe=10,fe=11,ir=12,kf=13,Nn=14,Ge=15,Ht=16,wn=17,ut=18,ri=19,Mh=20,Ct=21,Is=22,Fe=23,Ne=25,Th=1;var Ut=7,Fo=8,_n=9,ve=10,Lo=function(e){return e[e.None=0]="None",e[e.HasTransplantedViews=2]="HasTransplantedViews",e}(Lo||{});function Et(e){return Array.isArray(e)&&typeof e[Th]=="object"}function ht(e){return Array.isArray(e)&&e[Th]===!0}function Ah(e){return(e.flags&4)!==0}function oi(e){return e.componentOffset>-1}function Ra(e){return(e.flags&1)===1}function vr(e){return!!e.template}function Bs(e){return(e[C]&512)!==0}var $s=class{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function kh(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}function _t(){return Nh}function Nh(e){return e.type.prototype.ngOnChanges&&(e.setInput=Sv),_v}_t.ngInherit=!0;function _v(){let e=Oh(this),t=e?.current;if(t){let n=e.previous;if(n===nr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Sv(e,t,n,r,o){let i=this.declaredInputs[r],s=Oh(e)||Mv(e,{previous:nr,current:null}),a=s.current||(s.current={}),u=s.previous,l=u[i];a[i]=new $s(l&&l.currentValue,n,u===nr),kh(e,t,o,n)}var Rh="__ngSimpleChanges__";function Oh(e){return e[Rh]||null}function Mv(e,t){return e[Rh]=t}var Nf=null;var Qe=function(e,t,n){Nf?.(e,t,n)},Ph="svg",Tv="math";function et(e){for(;Array.isArray(e);)e=e[ft];return e}function Fh(e,t){return et(t[e])}function je(e,t){return et(t[e.index])}function Oa(e,t){return e.data[t]}function Av(e,t){return e[t]}function St(e,t){let n=t[e];return Et(n)?n:n[ft]}function kv(e){return(e[C]&4)===4}function Pa(e){return(e[C]&128)===128}function Nv(e){return ht(e[we])}function Sn(e,t){return t==null?null:e[t]}function Lh(e){e[wn]=0}function jh(e){e[C]&1024||(e[C]|=1024,Pa(e)&&ii(e))}function Rv(e,t){for(;e>0;)t=t[Nn],e--;return t}function sr(e){return!!(e[C]&9216||e[Fe]?.dirty)}function Hs(e){e[Xe].changeDetectionScheduler?.notify(7),e[C]&64&&(e[C]|=1024),sr(e)&&ii(e)}function ii(e){e[Xe].changeDetectionScheduler?.notify(0);let t=zt(e);for(;t!==null&&!(t[C]&8192||(t[C]|=8192,!Pa(t)));)t=zt(t)}function Vh(e,t){if((e[C]&256)===256)throw new E(911,!1);e[Ct]===null&&(e[Ct]=[]),e[Ct].push(t)}function Ov(e,t){if(e[Ct]===null)return;let n=e[Ct].indexOf(t);n!==-1&&e[Ct].splice(n,1)}function zt(e){let t=e[we];return ht(t)?t[we]:t}var O={lFrame:Zh(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Bh=!1;function Pv(){return O.lFrame.elementDepthCount}function Fv(){O.lFrame.elementDepthCount++}function Lv(){O.lFrame.elementDepthCount--}function $h(){return O.bindingsEnabled}function jv(){return O.skipHydrationRootTNode!==null}function Vv(e){return O.skipHydrationRootTNode===e}function Bv(){O.skipHydrationRootTNode=null}function H(){return O.lFrame.lView}function _e(){return O.lFrame.tView}function si(e){return O.lFrame.contextLView=e,e[ye]}function ai(e){return O.lFrame.contextLView=null,e}function Se(){let e=Hh();for(;e!==null&&e.type===64;)e=e.parent;return e}function Hh(){return O.lFrame.currentTNode}function $v(){let e=O.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function wr(e,t){let n=O.lFrame;n.currentTNode=e,n.isParent=t}function Uh(){return O.lFrame.isParent}function Hv(){O.lFrame.isParent=!1}function zh(){return Bh}function Rf(e){Bh=e}function Wh(){let e=O.lFrame,t=e.bindingRootIndex;return t===-1&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Uv(e){return O.lFrame.bindingIndex=e}function br(){return O.lFrame.bindingIndex++}function zv(e){let t=O.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function Wv(){return O.lFrame.inI18n}function Gv(e,t){let n=O.lFrame;n.bindingIndex=n.bindingRootIndex=e,Us(t)}function Yv(){return O.lFrame.currentDirectiveIndex}function Us(e){O.lFrame.currentDirectiveIndex=e}function qv(e){let t=O.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function Gh(){return O.lFrame.currentQueryIndex}function Fa(e){O.lFrame.currentQueryIndex=e}function Zv(e){let t=e[_];return t.type===2?t.declTNode:t.type===1?e[Ye]:null}function Yh(e,t,n){if(n&R.SkipSelf){let o=t,i=e;for(;o=o.parent,o===null&&!(n&R.Host);)if(o=Zv(i),o===null||(i=i[Nn],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=O.lFrame=qh();return r.currentTNode=t,r.lView=e,!0}function La(e){let t=qh(),n=e[_];O.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function qh(){let e=O.lFrame,t=e===null?null:e.child;return t===null?Zh(e):t}function Zh(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function Qh(){let e=O.lFrame;return O.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Kh=Qh;function ja(){let e=Qh();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Qv(e){return(O.lFrame.contextLView=Rv(e,O.lFrame.contextLView))[ye]}function Qt(){return O.lFrame.selectedIndex}function Wt(e){O.lFrame.selectedIndex=e}function Jh(){let e=O.lFrame;return Oa(e.tView,e.selectedIndex)}function Xh(){O.lFrame.currentNamespace=Ph}function Kv(){return O.lFrame.currentNamespace}var ep=!0;function Va(){return ep}function Ba(e){ep=e}function Jv(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=Nh(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function $a(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:l,ngOnDestroy:c}=i;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),u&&(e.viewHooks??=[]).push(-n,u),l&&((e.viewHooks??=[]).push(n,l),(e.viewCheckHooks??=[]).push(n,l)),c!=null&&(e.destroyHooks??=[]).push(n,c)}}function _o(e,t,n){tp(e,t,3,n)}function So(e,t,n,r){(e[C]&3)===n&&tp(e,t,n,r)}function Cs(e,t){let n=e[C];(n&3)===t&&(n&=16383,n+=1,e[C]=n)}function tp(e,t,n,r){let o=r!==void 0?e[wn]&65535:0,i=r??-1,s=t.length-1,a=0;for(let u=o;u<s;u++)if(typeof t[u+1]=="number"){if(a=t[u],r!=null&&a>=r)break}else t[u]<0&&(e[wn]+=65536),(a<i||i==-1)&&(Xv(e,n,t,u),e[wn]=(e[wn]&4294901760)+u+2),u++}function Of(e,t){Qe(4,e,t);let n=P(null);try{t.call(e)}finally{P(n),Qe(5,e,t)}}function Xv(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],a=e[s];o?e[C]>>14<e[wn]>>16&&(e[C]&3)===t&&(e[C]+=16384,Of(a,i)):Of(a,i)}var In=-1,ar=class{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}};function ew(e){return e instanceof ar}function tw(e){return(e.flags&8)!==0}function nw(e){return(e.flags&16)!==0}var Es={},zs=class{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=ei(r);let o=this.injector.get(t,Es,r);return o!==Es||n===Es?o:this.parentInjector.get(t,n,r)}};function np(e){return e!==In}function jo(e){return e&32767}function rw(e){return e>>16}function Vo(e,t){let n=rw(e),r=t;for(;n>0;)r=r[Nn],n--;return r}var Ws=!0;function Bo(e){let t=Ws;return Ws=e,t}var ow=256,rp=ow-1,op=5,iw=0,Ke={};function sw(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(Xn)&&(r=n[Xn]),r==null&&(r=n[Xn]=iw++);let o=r&rp,i=1<<o;t.data[e+(o>>op)]|=i}function ip(e,t){let n=sp(e,t);if(n!==-1)return n;let r=t[_];r.firstCreatePass&&(e.injectorIndex=t.length,xs(r.data,e),xs(t,null),xs(r.blueprint,null));let o=Ha(e,t),i=e.injectorIndex;if(np(o)){let s=jo(o),a=Vo(o,t),u=a[_].data;for(let l=0;l<8;l++)t[i+l]=a[s+l]|u[s+l]}return t[i+8]=o,i}function xs(e,t){e.push(0,0,0,0,0,0,0,0,t)}function sp(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function Ha(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=dp(o),r===null)return In;if(n++,o=o[Nn],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return In}function aw(e,t,n){sw(e,t,n)}function uw(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let r=n.length,o=0;for(;o<r;){let i=n[o];if(yh(i))break;if(i===0)o=o+2;else if(typeof i=="number")for(o++;o<r&&typeof n[o]=="string";)o++;else{if(i===t)return n[o+1];o=o+2}}}return null}function ap(e,t,n){if(n&R.Optional||e!==void 0)return e;_a(t,"NodeInjector")}function up(e,t,n,r){if(n&R.Optional&&r===void 0&&(r=null),!(n&(R.Self|R.Host))){let o=e[xn],i=Ee(void 0);try{return o?o.get(t,r,n&R.Optional):fh(t,r,n&R.Optional)}finally{Ee(i)}}return ap(r,t,n)}function lp(e,t,n,r=R.Default,o){if(e!==null){if(t[C]&2048&&!(r&R.Self)){let s=fw(e,t,n,r,Ke);if(s!==Ke)return s}let i=cp(e,t,n,r,Ke);if(i!==Ke)return i}return up(t,n,r,o)}function cp(e,t,n,r,o){let i=cw(n);if(typeof i=="function"){if(!Yh(t,e,r))return r&R.Host?ap(o,n,r):up(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&R.Optional))_a(n);else return s}finally{Kh()}}else if(typeof i=="number"){let s=null,a=sp(e,t),u=In,l=r&R.Host?t[Ge][Ye]:null;for((a===-1||r&R.SkipSelf)&&(u=a===-1?Ha(e,t):t[a+8],u===In||!Ff(r,!1)?a=-1:(s=t[_],a=jo(u),t=Vo(u,t)));a!==-1;){let c=t[_];if(Pf(i,a,c.data)){let d=lw(a,t,n,s,r,l);if(d!==Ke)return d}u=t[a+8],u!==In&&Ff(r,t[_].data[a+8]===l)&&Pf(i,a,t)?(s=c,a=jo(u),t=Vo(u,t)):a=-1}}return o}function lw(e,t,n,r,o,i){let s=t[_],a=s.data[e+8],u=r==null?oi(a)&&Ws:r!=s&&(a.type&3)!==0,l=o&R.Host&&i===a,c=Mo(a,s,n,u,l);return c!==null?Mn(t,s,c,a):Ke}function Mo(e,t,n,r,o){let i=e.providerIndexes,s=t.data,a=i&1048575,u=e.directiveStart,l=e.directiveEnd,c=i>>20,d=r?a:a+c,h=o?a+c:l;for(let f=d;f<h;f++){let g=s[f];if(f<u&&n===g||f>=u&&g.type===n)return f}if(o){let f=s[u];if(f&&vr(f)&&f.type===n)return u}return null}function Mn(e,t,n,r){let o=e[n],i=t.data;if(ew(o)){let s=o;s.resolving&&Fy(Py(i[n]));let a=Bo(s.canSeeViewProviders);s.resolving=!0;let u,l=s.injectImpl?Ee(s.injectImpl):null,c=Yh(e,r,R.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&Jv(n,i[n],t)}finally{l!==null&&Ee(l),Bo(a),s.resolving=!1,Kh()}}return o}function cw(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(Xn)?e[Xn]:void 0;return typeof t=="number"?t>=0?t&rp:dw:t}function Pf(e,t,n){let r=1<<e;return!!(n[t+(e>>op)]&r)}function Ff(e,t){return!(e&R.Self)&&!(e&R.Host&&t)}var jt=class{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return lp(this._tNode,this._lView,t,ei(r),n)}};function dw(){return new jt(Se(),H())}function Ua(e){return xa(()=>{let t=e.prototype.constructor,n=t[ko]||Gs(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[ko]||Gs(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function Gs(e){return sh(e)?()=>{let t=Gs(Pe(e));return t&&t()}:Vt(e)}function fw(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[C]&2048&&!(s[C]&512);){let a=cp(i,s,n,r|R.Self,Ke);if(a!==Ke)return a;let u=i.parent;if(!u){let l=s[Mh];if(l){let c=l.get(n,Ke,r);if(c!==Ke)return c}u=dp(s),s=s[Nn]}i=u}return o}function dp(e){let t=e[_],n=t.type;return n===2?t.declTNode:n===1?e[Ye]:null}function za(e){return uw(Se(),e)}function Lf(e,t=null,n=null,r){let o=fp(e,t,n,r);return o.resolveInjectorInitializers(),o}function fp(e,t=null,n=null,r,o=new Set){let i=[n||Bt,hv(e)];return r=r||(typeof e=="object"?void 0:xe(e)),new rr(i,t||Na(),r||null,o)}var Lt=class Lt{static create(t,n){if(Array.isArray(t))return Lf({name:""},n,t,"");{let r=t.name??"";return Lf({name:r},t.parent,t.providers,r)}}};Lt.THROW_IF_NOT_FOUND=tr,Lt.NULL=new Oo,Lt.\u0275prov=S({token:Lt,providedIn:"any",factory:()=>L(ph)}),Lt.__NG_ELEMENT_ID__=-1;var Gt=Lt;var hw=new M("");hw.__NG_ELEMENT_ID__=e=>{let t=Se();if(t===null)throw new E(204,!1);if(t.type&2)return t.value;if(e&R.Optional)return null;throw new E(204,!1)};var pw="ngOriginalError";function _s(e){return e[pw]}var lt=class{constructor(){this._console=console}handleError(t){let n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&_s(t);for(;n&&_s(n);)n=_s(n);return n||null}},hp=new M("",{providedIn:"root",factory:()=>m(lt).handleError.bind(void 0)}),pp=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=mw,t.__NG_ENV_ID__=r=>r;let e=t;return e})(),Ys=class extends pp{constructor(t){super(),this._lView=t}onDestroy(t){return Vh(this._lView,t),()=>Ov(this._lView,t)}};function mw(){return new Ys(H())}function gw(){return Rn(Se(),H())}function Rn(e,t){return new pt(je(e,t))}var pt=(()=>{let t=class t{constructor(r){this.nativeElement=r}};t.__NG_ELEMENT_ID__=gw;let e=t;return e})();function yw(e){return e instanceof pt?e.nativeElement:e}var On=(()=>{let t=class t{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new J(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let r=this.taskId++;return this.pendingTasks.add(r),r}remove(r){this.pendingTasks.delete(r),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};t.\u0275prov=S({token:t,providedIn:"root",factory:()=>new t});let e=t;return e})();var qs=class extends se{constructor(t=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=t,Ev()&&(this.destroyRef=m(pp,{optional:!0})??void 0,this.pendingTasks=m(On,{optional:!0})??void 0)}emit(t){let n=P(null);try{super.next(t)}finally{P(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let u=t;o=u.next?.bind(u),i=u.error?.bind(u),s=u.complete?.bind(u)}this.__isAsync&&(i=this.wrapInTimeout(i),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:i,complete:s});return t instanceof ee&&t.add(a),a}wrapInTimeout(t){return n=>{let r=this.pendingTasks?.add();setTimeout(()=>{t(n),r!==void 0&&this.pendingTasks?.remove(r)})}}},de=qs;function vw(){return this._results[Symbol.iterator]()}var Zs=class e{get changes(){return this._changes??=new de}constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let n=e.prototype;n[Symbol.iterator]||(n[Symbol.iterator]=vw)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){this.dirty=!1;let r=qy(t);(this._changesDetected=!Yy(this._results,r,n))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(t){this._onDirty=t}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function mp(e){return(e.flags&128)===128}var gp=new Map,ww=0;function bw(){return ww++}function Dw(e){gp.set(e[ri],e)}function Iw(e){gp.delete(e[ri])}var jf="__ngContext__";function Yt(e,t){Et(t)?(e[jf]=t[ri],Dw(t)):e[jf]=t}function yp(e){return wp(e[ir])}function vp(e){return wp(e[We])}function wp(e){for(;e!==null&&!ht(e);)e=e[We];return e}var Qs;function bp(e){Qs=e}function Cw(){if(Qs!==void 0)return Qs;if(typeof document<"u")return document;throw new E(210,!1)}var Wa=new M("",{providedIn:"root",factory:()=>Ew}),Ew="ng",Ga=new M(""),Mt=new M("",{providedIn:"platform",factory:()=>"unknown"});var Dr=new M("",{providedIn:"root",factory:()=>Cw().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var xw="h",_w="b";var Sw=()=>null;function Ya(e,t,n=!1){return Sw(e,t,n)}var Dp=!1,Mw=new M("",{providedIn:"root",factory:()=>Dp});var Co;function Tw(){if(Co===void 0&&(Co=null,er.trustedTypes))try{Co=er.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Co}function Vf(e){return Tw()?.createScriptURL(e)||e}var $o=class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${oh})`}};function Ir(e){return e instanceof $o?e.changingThisBreaksApplicationSecurity:e}function qa(e,t){let n=Aw(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${oh})`)}return n===t}function Aw(e){return e instanceof $o&&e.getTypeName()||null}var kw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ip(e){return e=String(e),e.match(kw)?e:"unsafe:"+e}var ui=function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e}(ui||{});function tt(e){let t=Ep();return t?t.sanitize(ui.URL,e)||"":qa(e,"URL")?Ir(e):Ip(Xo(e))}function Nw(e){let t=Ep();if(t)return Vf(t.sanitize(ui.RESOURCE_URL,e)||"");if(qa(e,"ResourceURL"))return Vf(Ir(e));throw new E(904,!1)}function Rw(e,t){return t==="src"&&(e==="embed"||e==="frame"||e==="iframe"||e==="media"||e==="script")||t==="href"&&(e==="base"||e==="link")?Nw:tt}function Cp(e,t,n){return Rw(t,n)(e)}function Ep(){let e=H();return e&&e[Xe].sanitizer}function xp(e){return e instanceof Function?e():e}var ct=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(ct||{}),Ow;function Za(e,t){return Ow(e,t)}function bn(e,t,n,r,o){if(r!=null){let i,s=!1;ht(r)?i=r:Et(r)&&(s=!0,r=r[ft]);let a=et(r);e===0&&n!==null?o==null?Tp(t,n,a):Ho(t,n,a,o||null,!0):e===1&&n!==null?Ho(t,n,a,o||null,!0):e===2?Qw(t,a,s):e===3&&t.destroyNode(a),i!=null&&Jw(t,e,i,n,o)}}function Pw(e,t){return e.createText(t)}function Fw(e,t,n){e.setValue(t,n)}function _p(e,t,n){return e.createElement(t,n)}function Lw(e,t){Sp(e,t),t[ft]=null,t[Ye]=null}function jw(e,t,n,r,o,i){r[ft]=o,r[Ye]=t,ci(e,r,n,1,o,i)}function Sp(e,t){t[Xe].changeDetectionScheduler?.notify(8),ci(e,t,t[fe],2,null,null)}function Vw(e){let t=e[ir];if(!t)return Ss(e[_],e);for(;t;){let n=null;if(Et(t))n=t[ir];else{let r=t[ve];r&&(n=r)}if(!n){for(;t&&!t[We]&&t!==e;)Et(t)&&Ss(t[_],t),t=t[we];t===null&&(t=e),Et(t)&&Ss(t[_],t),n=t&&t[We]}t=n}}function Bw(e,t,n,r){let o=ve+r,i=n.length;r>0&&(n[o-1][We]=t),r<i-ve?(t[We]=n[o],hh(n,ve+r,t)):(n.push(t),t[We]=null),t[we]=n;let s=t[Ht];s!==null&&n!==s&&Mp(s,t);let a=t[ut];a!==null&&a.insertView(e),Hs(t),t[C]|=128}function Mp(e,t){let n=e[_n],r=t[we];if(Et(r))e[C]|=Lo.HasTransplantedViews;else{let o=r[we][Ge];t[Ge]!==o&&(e[C]|=Lo.HasTransplantedViews)}n===null?e[_n]=[t]:n.push(t)}function Qa(e,t){let n=e[_n],r=n.indexOf(t);n.splice(r,1)}function ur(e,t){if(e.length<=ve)return;let n=ve+t,r=e[n];if(r){let o=r[Ht];o!==null&&o!==e&&Qa(o,r),t>0&&(e[n-1][We]=r[We]);let i=Ro(e,ve+t);Lw(r[_],r);let s=i[ut];s!==null&&s.detachView(i[_]),r[we]=null,r[We]=null,r[C]&=-129}return r}function li(e,t){if(!(t[C]&256)){let n=t[fe];n.destroyNode&&ci(e,t,n,3,null,null),Vw(t)}}function Ss(e,t){if(t[C]&256)return;let n=P(null);try{t[C]&=-129,t[C]|=256,t[Fe]&&ns(t[Fe]),Hw(e,t),$w(e,t),t[_].type===1&&t[fe].destroy();let r=t[Ht];if(r!==null&&ht(t[we])){r!==t[we]&&Qa(r,t);let o=t[ut];o!==null&&o.detachView(e)}Iw(t)}finally{P(n)}}function $w(e,t){let n=e.cleanup,r=t[Po];if(n!==null)for(let i=0;i<n.length-1;i+=2)if(typeof n[i]=="string"){let s=n[i+3];s>=0?r[s]():r[-s].unsubscribe(),i+=2}else{let s=r[n[i+1]];n[i].call(s)}r!==null&&(t[Po]=null);let o=t[Ct];if(o!==null){t[Ct]=null;for(let i=0;i<o.length;i++){let s=o[i];s()}}}function Hw(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof ar)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],u=i[s+1];Qe(4,a,u);try{u.call(a)}finally{Qe(5,a,u)}}else{Qe(4,o,i);try{i.call(o)}finally{Qe(5,o,i)}}}}}function Uw(e,t,n){return zw(e,t.parent,n)}function zw(e,t,n){let r=t;for(;r!==null&&r.type&40;)t=r,r=t.parent;if(r===null)return n[ft];{let{componentOffset:o}=r;if(o>-1){let{encapsulation:i}=e.data[r.directiveStart+o];if(i===Je.None||i===Je.Emulated)return null}return je(r,n)}}function Ho(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Tp(e,t,n){e.appendChild(t,n)}function Bf(e,t,n,r,o){r!==null?Ho(e,t,n,r,o):Tp(e,t,n)}function Ww(e,t,n,r){e.removeChild(t,n,r)}function Ka(e,t){return e.parentNode(t)}function Gw(e,t){return e.nextSibling(t)}function Yw(e,t,n){return Zw(e,t,n)}function qw(e,t,n){return e.type&40?je(e,n):null}var Zw=qw,$f;function Ja(e,t,n,r){let o=Uw(e,r,t),i=t[fe],s=r.parent||t[Ye],a=Yw(s,r,t);if(o!=null)if(Array.isArray(n))for(let u=0;u<n.length;u++)Bf(i,o,n[u],a,!1);else Bf(i,o,n,a,!1);$f!==void 0&&$f(i,r,t,n,o)}function To(e,t){if(t!==null){let n=t.type;if(n&3)return je(t,e);if(n&4)return Ks(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return To(e,r);{let o=e[t.index];return ht(o)?Ks(-1,o):et(o)}}else{if(n&32)return Za(t,e)()||et(e[t.index]);{let r=Ap(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=zt(e[Ge]);return To(o,r)}else return To(e,t.next)}}}return null}function Ap(e,t){if(t!==null){let r=e[Ge][Ye],o=t.projection;return r.projection[o]}return null}function Ks(e,t){let n=ve+e+1;if(n<t.length){let r=t[n],o=r[_].firstChild;if(o!==null)return To(r,o)}return t[Ut]}function Qw(e,t,n){let r=Ka(e,t);r&&Ww(e,r,t,n)}function Xa(e,t,n,r,o,i,s){for(;n!=null;){let a=r[n.index],u=n.type;if(s&&t===0&&(a&&Yt(et(a),r),n.flags|=2),(n.flags&32)!==32)if(u&8)Xa(e,t,n.child,r,o,i,!1),bn(t,e,o,a,i);else if(u&32){let l=Za(n,r),c;for(;c=l();)bn(t,e,o,c,i);bn(t,e,o,a,i)}else u&16?Kw(e,t,r,n,o,i):bn(t,e,o,a,i);n=s?n.projectionNext:n.next}}function ci(e,t,n,r,o,i){Xa(n,r,e.firstChild,t,o,i,!1)}function Kw(e,t,n,r,o,i){let s=n[Ge],u=s[Ye].projection[r.projection];if(Array.isArray(u))for(let l=0;l<u.length;l++){let c=u[l];bn(t,e,o,c,i)}else{let l=u,c=s[we];mp(r)&&(l.flags|=128),Xa(e,t,l,c,o,i,!0)}}function Jw(e,t,n,r,o){let i=n[Ut],s=et(n);i!==s&&bn(t,e,r,i,o);for(let a=ve;a<n.length;a++){let u=n[a];ci(u[_],u,e,t,r,i)}}function Xw(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=r.indexOf("-")===-1?void 0:ct.DashCase;o==null?e.removeStyle(n,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=ct.Important),e.setStyle(n,r,o,i))}}function eb(e,t,n){e.setAttribute(t,"style",n)}function kp(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Np(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&Ps(e,t,r),o!==null&&kp(e,t,o),i!==null&&eb(e,t,i)}var mt={};function p(e=1){Rp(_e(),H(),Qt()+e,!1)}function Rp(e,t,n,r){if(!r)if((t[C]&3)===3){let i=e.preOrderCheckHooks;i!==null&&_o(t,i,n)}else{let i=e.preOrderHooks;i!==null&&So(t,i,0,n)}Wt(n)}function D(e,t=R.Default){let n=H();if(n===null)return L(e,t);let r=Se();return lp(r,n,Pe(e),t)}function Op(e,t,n,r,o,i){let s=P(null);try{let a=null;o&En.SignalBased&&(a=t[r][Ud]),a!==null&&a.transformFn!==void 0&&(i=a.transformFn(i)),o&En.HasDecoratorInputTransform&&(i=e.inputTransforms[r].call(t,i)),e.setInput!==null?e.setInput(t,a,i,n,r):kh(t,a,r,i)}finally{P(s)}}function tb(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)Wt(~o);else{let i=o,s=n[++r],a=n[++r];Gv(s,i);let u=t[i];a(2,u)}}}finally{Wt(-1)}}function di(e,t,n,r,o,i,s,a,u,l,c){let d=t.blueprint.slice();return d[ft]=o,d[C]=r|4|128|8|64,(l!==null||e&&e[C]&2048)&&(d[C]|=2048),Lh(d),d[we]=d[Nn]=e,d[ye]=n,d[Xe]=s||e&&e[Xe],d[fe]=a||e&&e[fe],d[xn]=u||e&&e[xn]||null,d[Ye]=i,d[ri]=bw(),d[or]=c,d[Mh]=l,d[Ge]=t.type==2?e[Ge]:d,d}function fi(e,t,n,r,o){let i=e.data[t];if(i===null)i=nb(e,t,n,r,o),Wv()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=$v();i.injectorIndex=s===null?-1:s.injectorIndex}return wr(i,!0),i}function nb(e,t,n,r,o){let i=Hh(),s=Uh(),a=s?i:i&&i.parent,u=e.data[t]=ub(e,a,n,t,r,o);return e.firstChild===null&&(e.firstChild=u),i!==null&&(s?i.child==null&&u.parent!==null&&(i.child=u):i.next===null&&(i.next=u,u.prev=i)),u}function Pp(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Fp(e,t,n,r,o){let i=Qt(),s=r&2;try{Wt(-1),s&&t.length>Ne&&Rp(e,t,Ne,!1),Qe(s?2:0,o),n(r,o)}finally{Wt(i),Qe(s?3:1,o)}}function Lp(e,t,n){if(Ah(t)){let r=P(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let a=e.data[s];if(a.contentQueries){let u=n[s];a.contentQueries(1,u,s)}}}finally{P(r)}}}function jp(e,t,n){$h()&&(mb(e,t,n,je(n,t)),(n.flags&64)===64&&Up(e,t,n))}function Vp(e,t,n=je){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?n(t,e):e[s];e[o++]=a}}}function Bp(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=eu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function eu(e,t,n,r,o,i,s,a,u,l,c){let d=Ne+r,h=d+o,f=rb(d,h),g=typeof l=="function"?l():l;return f[_]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:u,consts:g,incompleteFirstPass:!1,ssrId:c}}function rb(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:mt);return n}function ob(e,t,n,r){let i=r.get(Mw,Dp)||n===Je.ShadowDom,s=e.selectRootElement(t,i);return ib(s),s}function ib(e){sb(e)}var sb=()=>null;function ab(e,t,n,r){let o=Gp(t);o.push(n),e.firstCreatePass&&Yp(e).push(r,o.length-1)}function ub(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,a=0;return jv()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Hf(e,t,n,r,o){for(let i in t){if(!t.hasOwnProperty(i))continue;let s=t[i];if(s===void 0)continue;r??={};let a,u=En.None;Array.isArray(s)?(a=s[0],u=s[1]):a=s;let l=i;if(o!==null){if(!o.hasOwnProperty(i))continue;l=o[i]}e===0?Uf(r,n,l,a,u):Uf(r,n,l,a)}return r}function Uf(e,t,n,r,o){let i;e.hasOwnProperty(n)?(i=e[n]).push(t,r):i=e[n]=[t,r],o!==void 0&&i.push(o)}function lb(e,t,n){let r=t.directiveStart,o=t.directiveEnd,i=e.data,s=t.attrs,a=[],u=null,l=null;for(let c=r;c<o;c++){let d=i[c],h=n?n.get(d):null,f=h?h.inputs:null,g=h?h.outputs:null;u=Hf(0,d.inputs,c,u,f),l=Hf(1,d.outputs,c,l,g);let b=u!==null&&s!==null&&!Ta(t)?_b(u,c,s):null;a.push(b)}u!==null&&(u.hasOwnProperty("class")&&(t.flags|=8),u.hasOwnProperty("style")&&(t.flags|=16)),t.initialInputs=a,t.inputs=u,t.outputs=l}function cb(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function db(e,t,n,r,o,i,s,a){let u=je(t,n),l=t.inputs,c;!a&&l!=null&&(c=l[r])?(tu(e,n,c,r,o),oi(t)&&fb(n,t.index)):t.type&3?(r=cb(r),o=s!=null?s(o,t.value||"",r):o,i.setProperty(u,r,o)):t.type&12}function fb(e,t){let n=St(t,e);n[C]&16||(n[C]|=64)}function $p(e,t,n,r){if($h()){let o=r===null?null:{"":-1},i=yb(e,n),s,a;i===null?s=a=null:[s,a]=i,s!==null&&Hp(e,t,n,s,o,a),o&&vb(n,r,o)}n.mergedAttrs=Ma(n.mergedAttrs,n.attrs)}function Hp(e,t,n,r,o,i){for(let l=0;l<r.length;l++)aw(ip(n,t),e,r[l].type);bb(n,e.data.length,r.length);for(let l=0;l<r.length;l++){let c=r[l];c.providersResolver&&c.providersResolver(c)}let s=!1,a=!1,u=Pp(e,t,r.length,null);for(let l=0;l<r.length;l++){let c=r[l];n.mergedAttrs=Ma(n.mergedAttrs,c.hostAttrs),Db(e,n,t,u,c),wb(u,c,o),c.contentQueries!==null&&(n.flags|=4),(c.hostBindings!==null||c.hostAttrs!==null||c.hostVars!==0)&&(n.flags|=64);let d=c.type.prototype;!s&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),s=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),a=!0),u++}lb(e,n,i)}function hb(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;pb(s)!=a&&s.push(a),s.push(n,r,i)}}function pb(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function mb(e,t,n,r){let o=n.directiveStart,i=n.directiveEnd;oi(n)&&Ib(t,n,e.data[o+n.componentOffset]),e.firstCreatePass||ip(n,t),Yt(r,t);let s=n.initialInputs;for(let a=o;a<i;a++){let u=e.data[a],l=Mn(t,e,a,n);if(Yt(l,t),s!==null&&xb(t,a-o,l,u,n,s),vr(u)){let c=St(n.index,t);c[ye]=Mn(t,e,a,n)}}}function Up(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=Yv();try{Wt(i);for(let a=r;a<o;a++){let u=e.data[a],l=t[a];Us(a),(u.hostBindings!==null||u.hostVars!==0||u.hostAttrs!==null)&&gb(u,l)}}finally{Wt(-1),Us(s)}}function gb(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function yb(e,t){let n=e.directiveRegistry,r=null,o=null;if(n)for(let i=0;i<n.length;i++){let s=n[i];if(ov(t,s.selectors,!1))if(r||(r=[]),vr(s))if(s.findHostDirectiveDefs!==null){let a=[];o=o||new Map,s.findHostDirectiveDefs(s,a,o),r.unshift(...a,s);let u=a.length;Js(e,t,u)}else r.unshift(s),Js(e,t,0);else o=o||new Map,s.findHostDirectiveDefs?.(s,r,o),r.push(s)}return r===null?null:[r,o]}function Js(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function vb(e,t,n){if(t){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new E(-301,!1);r.push(t[o],i)}}}function wb(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;vr(t)&&(n[""]=e)}}function bb(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Db(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=Vt(o.type,!0)),s=new ar(i,vr(o),D);e.blueprint[r]=s,n[r]=s,hb(e,t,r,Pp(e,n,o.hostVars,mt),o)}function Ib(e,t,n){let r=je(t,e),o=Bp(n),i=e[Xe].rendererFactory,s=16;n.signals?s=4096:n.onPush&&(s=64);let a=hi(e,di(e,o,null,s,r,t,null,i.createRenderer(r,n),null,null,null));e[t.index]=a}function Cb(e,t,n,r,o,i){let s=je(e,t);Eb(t[fe],s,i,e.value,n,r,o)}function Eb(e,t,n,r,o,i,s){if(i==null)e.removeAttribute(t,o,n);else{let a=s==null?Xo(i):s(i,r||"",o);e.setAttribute(t,o,a,n)}}function xb(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let a=0;a<s.length;){let u=s[a++],l=s[a++],c=s[a++],d=s[a++];Op(r,n,u,l,c,d)}}function _b(e,t,n){let r=null,o=0;for(;o<n.length;){let i=n[o];if(i===0){o+=4;continue}else if(i===5){o+=2;continue}if(typeof i=="number")break;if(e.hasOwnProperty(i)){r===null&&(r=[]);let s=e[i];for(let a=0;a<s.length;a+=3)if(s[a]===t){r.push(i,s[a+1],s[a+2],n[o+1]);break}}o+=2}return r}function zp(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function Wp(e,t){let n=e.contentQueries;if(n!==null){let r=P(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let a=e.data[s];Fa(i),a.contentQueries(2,t[s],s)}}}finally{P(r)}}}function hi(e,t){return e[ir]?e[kf][We]=t:e[ir]=t,e[kf]=t,t}function Xs(e,t,n){Fa(0);let r=P(null);try{t(e,n)}finally{P(r)}}function Gp(e){return e[Po]??=[]}function Yp(e){return e.cleanup??=[]}function qp(e,t){let n=e[xn],r=n?n.get(lt,null):null;r&&r.handleError(t)}function tu(e,t,n,r,o){for(let i=0;i<n.length;){let s=n[i++],a=n[i++],u=n[i++],l=t[s],c=e.data[s];Op(c,l,r,a,u,o)}}function Sb(e,t,n){let r=Fh(t,e);Fw(e[fe],r,n)}function Mb(e,t){let n=St(t,e),r=n[_];Tb(r,n);let o=n[ft];o!==null&&n[or]===null&&(n[or]=Ya(o,n[xn])),nu(r,n,n[ye])}function Tb(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function nu(e,t,n){La(t);try{let r=e.viewQuery;r!==null&&Xs(1,r,n);let o=e.template;o!==null&&Fp(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[ut]?.finishViewCreation(e),e.staticContentQueries&&Wp(e,t),e.staticViewQueries&&Xs(2,e.viewQuery,n);let i=e.components;i!==null&&Ab(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[C]&=-5,ja()}}function Ab(e,t){for(let n=0;n<t.length;n++)Mb(e,t[n])}function pi(e,t,n,r){let o=P(null);try{let i=t.tView,a=e[C]&4096?4096:16,u=di(e,i,n,a,null,t,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),l=e[t.index];u[Ht]=l;let c=e[ut];return c!==null&&(u[ut]=c.createEmbeddedView(i)),nu(i,u,n),u}finally{P(o)}}function Zp(e,t){let n=ve+t;if(n<e.length)return e[n]}function lr(e,t){return!t||t.firstChild===null||mp(e)}function mi(e,t,n,r=!0){let o=t[_];if(Bw(o,t,e,n),r){let s=Ks(n,e),a=t[fe],u=Ka(a,e[Ut]);u!==null&&jw(o,e[Ye],a,t,u,s)}let i=t[or];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function Qp(e,t){let n=ur(e,t);return n!==void 0&&li(n[_],n),n}function Uo(e,t,n,r,o=!1){for(;n!==null;){let i=t[n.index];i!==null&&r.push(et(i)),ht(i)&&kb(i,r);let s=n.type;if(s&8)Uo(e,t,n.child,r);else if(s&32){let a=Za(n,t),u;for(;u=a();)r.push(u)}else if(s&16){let a=Ap(t,n);if(Array.isArray(a))r.push(...a);else{let u=zt(t[Ge]);Uo(u[_],u,a,r,!0)}}n=o?n.projectionNext:n.next}return r}function kb(e,t){for(let n=ve;n<e.length;n++){let r=e[n],o=r[_].firstChild;o!==null&&Uo(r[_],r,o,t)}e[Ut]!==e[ft]&&t.push(e[Ut])}var Kp=[];function Nb(e){return e[Fe]??Rb(e)}function Rb(e){let t=Kp.pop()??Object.create(Pb);return t.lView=e,t}function Ob(e){e.lView[Fe]!==e&&(e.lView=null,Kp.push(e))}var Pb=K(w({},Xi),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{ii(e.lView)},consumerOnSignalRead(){this.lView[Fe]=this}});function Fb(e){let t=e[Fe]??Object.create(Lb);return t.lView=e,t}var Lb=K(w({},Xi),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{let t=zt(e.lView);for(;t&&!Jp(t[_]);)t=zt(t);t&&jh(t)},consumerOnSignalRead(){this.lView[Fe]=this}});function Jp(e){return e.type!==2}var jb=100;function Xp(e,t=!0,n=0){let r=e[Xe],o=r.rendererFactory,i=!1;i||o.begin?.();try{Vb(e,n)}catch(s){throw t&&qp(e,s),s}finally{i||(o.end?.(),r.inlineEffectRunner?.flush())}}function Vb(e,t){let n=zh();try{Rf(!0),ea(e,t);let r=0;for(;sr(e);){if(r===jb)throw new E(103,!1);r++,ea(e,1)}}finally{Rf(n)}}function Bb(e,t,n,r){let o=t[C];if((o&256)===256)return;let i=!1,s=!1;!i&&t[Xe].inlineEffectRunner?.flush(),La(t);let a=!0,u=null,l=null;i||(Jp(e)?(l=Nb(t),u=es(l)):zd()===null?(a=!1,l=Fb(t),u=es(l)):t[Fe]&&(ns(t[Fe]),t[Fe]=null));try{Lh(t),Uv(e.bindingStartIndex),n!==null&&Fp(e,t,n,2,r);let c=(o&3)===3;if(!i)if(c){let f=e.preOrderCheckHooks;f!==null&&_o(t,f,null)}else{let f=e.preOrderHooks;f!==null&&So(t,f,0,null),Cs(t,0)}if(s||$b(t),em(t,0),e.contentQueries!==null&&Wp(e,t),!i)if(c){let f=e.contentCheckHooks;f!==null&&_o(t,f)}else{let f=e.contentHooks;f!==null&&So(t,f,1),Cs(t,1)}tb(e,t);let d=e.components;d!==null&&nm(t,d,0);let h=e.viewQuery;if(h!==null&&Xs(2,h,r),!i)if(c){let f=e.viewCheckHooks;f!==null&&_o(t,f)}else{let f=e.viewHooks;f!==null&&So(t,f,2),Cs(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Is]){for(let f of t[Is])f();t[Is]=null}i||(t[C]&=-73)}catch(c){throw i||ii(t),c}finally{l!==null&&(Wd(l,u),a&&Ob(l)),ja()}}function em(e,t){for(let n=yp(e);n!==null;n=vp(n))for(let r=ve;r<n.length;r++){let o=n[r];tm(o,t)}}function $b(e){for(let t=yp(e);t!==null;t=vp(t)){if(!(t[C]&Lo.HasTransplantedViews))continue;let n=t[_n];for(let r=0;r<n.length;r++){let o=n[r];jh(o)}}}function Hb(e,t,n){let r=St(t,e);tm(r,n)}function tm(e,t){Pa(e)&&ea(e,t)}function ea(e,t){let r=e[_],o=e[C],i=e[Fe],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&ts(i)),s||=!1,i&&(i.dirty=!1),e[C]&=-9217,s)Bb(r,e,r.template,e[ye]);else if(o&8192){em(e,1);let a=r.components;a!==null&&nm(e,a,1)}}function nm(e,t,n){for(let r=0;r<t.length;r++)Hb(e,t[r],n)}function ru(e,t){let n=zh()?64:1088;for(e[Xe].changeDetectionScheduler?.notify(t);e;){e[C]|=n;let r=zt(e);if(Bs(e)&&!r)return e;e=r}return null}var qt=class{get rootNodes(){let t=this._lView,n=t[_];return Uo(n,t,n.firstChild,[])}constructor(t,n,r=!0){this._lView=t,this._cdRefInjectingView=n,this.notifyErrorHandler=r,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[ye]}set context(t){this._lView[ye]=t}get destroyed(){return(this._lView[C]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[we];if(ht(t)){let n=t[Fo],r=n?n.indexOf(this):-1;r>-1&&(ur(t,r),Ro(n,r))}this._attachedToViewContainer=!1}li(this._lView[_],this._lView)}onDestroy(t){Vh(this._lView,t)}markForCheck(){ru(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[C]&=-129}reattach(){Hs(this._lView),this._lView[C]|=128}detectChanges(){this._lView[C]|=1024,Xp(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new E(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Bs(this._lView),n=this._lView[Ht];n!==null&&!t&&Qa(n,this._lView),Sp(this._lView[_],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new E(902,!1);this._appRef=t;let n=Bs(this._lView),r=this._lView[Ht];r!==null&&!n&&Mp(r,this._lView),Hs(this._lView)}},cr=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=Wb;let e=t;return e})(),Ub=cr,zb=class extends Ub{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,n){return this.createEmbeddedViewImpl(t,n)}createEmbeddedViewImpl(t,n,r){let o=pi(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:n,dehydratedView:r});return new qt(o)}};function Wb(){return ou(Se(),H())}function ou(e,t){return e.type&4?new zb(t,e,Rn(e,t)):null}var iR=new RegExp(`^(\\d+)*(${_w}|${xw})*(.*)`);var Gb=()=>null;function dr(e,t){return Gb(e,t)}var fr=class{},iu=new M("",{providedIn:"root",factory:()=>!1});var rm=new M(""),ta=class{},zo=class{};function Yb(e){let t=Error(`No component factory found for ${xe(e)}.`);return t[qb]=e,t}var qb="ngComponent";var na=class{resolveComponentFactory(t){throw Yb(t)}},fu=class fu{};fu.NULL=new na;var Tn=fu,An=class{},Cr=(()=>{let t=class t{constructor(){this.destroyNode=null}};t.__NG_ELEMENT_ID__=()=>Zb();let e=t;return e})();function Zb(){let e=H(),t=Se(),n=St(t.index,e);return(Et(n)?n:e)[fe]}var Qb=(()=>{let t=class t{};t.\u0275prov=S({token:t,providedIn:"root",factory:()=>null});let e=t;return e})();var zf=new Set;function Er(e){zf.has(e)||(zf.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}function om(e){let t=!0;return setTimeout(()=>{t&&(t=!1,e())}),typeof er.requestAnimationFrame=="function"&&er.requestAnimationFrame(()=>{t&&(t=!1,e())}),()=>{t=!1}}function Wf(e){let t=!0;return queueMicrotask(()=>{t&&e()}),()=>{t=!1}}function Gf(...e){}var X=class e{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new de(!1),this.onMicrotaskEmpty=new de(!1),this.onStable=new de(!1),this.onError=new de(!1),typeof Zone>"u")throw new E(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,Xb(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new E(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new E(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,Kb,Gf,Gf);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},Kb={};function su(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Jb(e){e.isCheckStableRunning||e.callbackScheduled||(e.callbackScheduled=!0,Zone.root.run(()=>{om(()=>{e.callbackScheduled=!1,ra(e),e.isCheckStableRunning=!0,su(e),e.isCheckStableRunning=!1})}),ra(e))}function Xb(e){let t=()=>{Jb(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{if(eD(a))return n.invokeTask(o,i,s,a);try{return Yf(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&i.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),qf(e)}},onInvoke:(n,r,o,i,s,a,u)=>{try{return Yf(e),n.invoke(o,i,s,a,u)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!tD(a)&&t(),qf(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&(i.change=="microTask"?(e._hasPendingMicrotasks=i.microTask,ra(e),su(e)):i.change=="macroTask"&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}function ra(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Yf(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function qf(e){e._nesting--,su(e)}var oa=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new de,this.onMicrotaskEmpty=new de,this.onStable=new de,this.onError=new de}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}};function eD(e){return im(e,"__ignore_ng_zone__")}function tD(e){return im(e,"__scheduler_tick__")}function im(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var sm=(()=>{let t=class t{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let r=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let o of r)o()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};t.\u0275prov=S({token:t,providedIn:"root",factory:()=>new t});let e=t;return e})();function ia(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")i=a;else if(i==1)o=Df(o,a);else if(i==2){let u=a,l=t[++s];r=Df(r,u+": "+l+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}var Wo=class extends Tn{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=$t(t);return new hr(n,this.ngModule)}};function Zf(e){let t=[];for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];r!==void 0&&t.push({propName:Array.isArray(r)?r[0]:r,templateName:n})}return t}function nD(e){let t=e.toLowerCase();return t==="svg"?Ph:t==="math"?Tv:null}var hr=class extends zo{get inputs(){let t=this.componentDef,n=t.inputTransforms,r=Zf(t.inputs);if(n!==null)for(let o of r)n.hasOwnProperty(o.propName)&&(o.transform=n[o.propName]);return r}get outputs(){return Zf(this.componentDef.outputs)}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=uv(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}create(t,n,r,o){let i=P(null);try{o=o||this.ngModule;let s=o instanceof Le?o:o?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let a=s?new zs(t,s):t,u=a.get(An,null);if(u===null)throw new E(407,!1);let l=a.get(Qb,null),c=a.get(sm,null),d=a.get(fr,null),h={rendererFactory:u,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:c,changeDetectionScheduler:d},f=u.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",b=r?ob(f,r,this.componentDef.encapsulation,a):_p(f,g,nD(g)),B=512;this.componentDef.signals?B|=4096:this.componentDef.onPush||(B|=16);let U=null;b!==null&&(U=Ya(b,a,!0));let le=eu(0,null,null,1,0,null,null,null,null,null,null),re=di(null,le,null,B,null,null,h,f,a,null,U);La(re);let it,rn;try{let $e=this.componentDef,on,Qi=null;$e.findHostDirectiveDefs?(on=[],Qi=new Map,$e.findHostDirectiveDefs($e,on,Qi),on.push($e)):on=[$e];let Zg=rD(re,b),Qg=oD(Zg,b,$e,on,re,h,f);rn=Oa(le,Ne),b&&aD(f,$e,b,r),n!==void 0&&uD(rn,this.ngContentSelectors,n),it=sD(Qg,$e,on,Qi,re,[lD]),nu(le,re,null)}finally{ja()}return new sa(this.componentType,it,Rn(rn,re),re,rn)}finally{P(i)}}},sa=class extends ta{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.previousInputValues=null,this.instance=n,this.hostView=this.changeDetectorRef=new qt(o,void 0,!1),this.componentType=t}setInput(t,n){let r=this._tNode.inputs,o;if(r!==null&&(o=r[t])){if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let i=this._rootLView;tu(i[_],i,o,t,n),this.previousInputValues.set(t,n);let s=St(this._tNode.index,i);ru(s,1)}}get injector(){return new jt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function rD(e,t){let n=e[_],r=Ne;return e[r]=t,fi(n,r,2,"#host",null)}function oD(e,t,n,r,o,i,s){let a=o[_];iD(r,e,t,s);let u=null;t!==null&&(u=Ya(t,o[xn]));let l=i.rendererFactory.createRenderer(t,n),c=16;n.signals?c=4096:n.onPush&&(c=64);let d=di(o,Bp(n),null,c,o[e.index],e,i,l,null,null,u);return a.firstCreatePass&&Js(a,e,r.length-1),hi(o,d),o[e.index]=d}function iD(e,t,n,r){for(let o of e)t.mergedAttrs=Ma(t.mergedAttrs,o.hostAttrs);t.mergedAttrs!==null&&(ia(t,t.mergedAttrs,!0),n!==null&&Np(r,n,t))}function sD(e,t,n,r,o,i){let s=Se(),a=o[_],u=je(s,o);Hp(a,o,s,n,null,r);for(let c=0;c<n.length;c++){let d=s.directiveStart+c,h=Mn(o,a,d,s);Yt(h,o)}Up(a,o,s),u&&Yt(u,o);let l=Mn(o,a,s.directiveStart+s.componentOffset,s);if(e[ye]=o[ye]=l,i!==null)for(let c of i)c(l,t);return Lp(a,s,o),l}function aD(e,t,n,r){if(r)Ps(e,n,["ng-version","18.0.4"]);else{let{attrs:o,classes:i}=lv(t.selectors[0]);o&&Ps(e,n,o),i&&i.length>0&&kp(e,n,i.join(" "))}}function uD(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null?Array.from(i):null)}}function lD(){let e=Se();$a(H()[_],e)}var Pn=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=cD;let e=t;return e})();function cD(){let e=Se();return um(e,H())}var dD=Pn,am=class extends dD{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Rn(this._hostTNode,this._hostLView)}get injector(){return new jt(this._hostTNode,this._hostLView)}get parentInjector(){let t=Ha(this._hostTNode,this._hostLView);if(np(t)){let n=Vo(t,this._hostLView),r=jo(t),o=n[_].data[r+8];return new jt(o,n)}else return new jt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=Qf(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-ve}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=dr(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(a,o,lr(this._hostTNode,s)),a}createComponent(t,n,r,o,i){let s=t&&!xv(t),a;if(s)a=n;else{let g=n||{};a=g.index,r=g.injector,o=g.projectableNodes,i=g.environmentInjector||g.ngModuleRef}let u=s?t:new hr($t(t)),l=r||this.parentInjector;if(!i&&u.ngModule==null){let b=(s?l:this.parentInjector).get(Le,null);b&&(i=b)}let c=$t(u.componentType??{}),d=dr(this._lContainer,c?.id??null),h=d?.firstChild??null,f=u.create(l,o,h,i);return this.insertImpl(f.hostView,a,lr(this._hostTNode,d)),f}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(Nv(o)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let u=o[we],l=new am(u,u[Ye],u[we]);l.detach(l.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return mi(s,o,i,r),t.attachToViewContainerRef(),hh(Ms(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=Qf(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=ur(this._lContainer,n);r&&(Ro(Ms(this._lContainer),n),li(r[_],r))}detach(t){let n=this._adjustIndex(t,-1),r=ur(this._lContainer,n);return r&&Ro(Ms(this._lContainer),n)!=null?new qt(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Qf(e){return e[Fo]}function Ms(e){return e[Fo]||(e[Fo]=[])}function um(e,t){let n,r=t[e.index];return ht(r)?n=r:(n=zp(r,t,null,e),t[e.index]=n,hi(t,n)),hD(n,t,e,r),new am(n,e,t)}function fD(e,t){let n=e[fe],r=n.createComment(""),o=je(t,e),i=Ka(n,o);return Ho(n,i,r,Gw(n,o),!1),r}var hD=gD,pD=()=>!1;function mD(e,t,n){return pD(e,t,n)}function gD(e,t,n,r){if(e[Ut])return;let o;n.type&8?o=et(r):o=fD(t,n),e[Ut]=o}var aa=class e{constructor(t){this.queryList=t,this.matches=null}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},ua=class e{constructor(t=[]){this.queries=t}createEmbeddedView(t){let n=t.queries;if(n!==null){let r=t.contentQueries!==null?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){let s=n.getByIndex(i),a=this.queries[s.indexInDeclarationView];o.push(a.clone())}return new e(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}finishViewCreation(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)au(t,n).matches!==null&&this.queries[n].setDirty()}},Go=class{constructor(t,n,r=null){this.flags=n,this.read=r,typeof t=="string"?this.predicate=ED(t):this.predicate=t}},la=class e{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){let o=n!==null?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,n!==null?n.push(i):n=[i])}return n!==null?new e(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}},ca=class e{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new e(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,r=t.parent;for(;r!==null&&r.type&8&&r.index!==n;)r=r.parent;return n===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){let r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){let i=r[o];this.matchTNodeWithReadOption(t,n,yD(n,i)),this.matchTNodeWithReadOption(t,n,Mo(n,t,i,!1,!1))}else r===cr?n.type&4&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Mo(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(r!==null){let o=this.metadata.read;if(o!==null)if(o===pt||o===Pn||o===cr&&n.type&4)this.addMatch(n.index,-2);else{let i=Mo(n,t,o,!1,!1);i!==null&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){this.matches===null?this.matches=[t,n]:this.matches.push(t,n)}};function yD(e,t){let n=e.localNames;if(n!==null){for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1]}return null}function vD(e,t){return e.type&11?Rn(e,t):e.type&4?ou(e,t):null}function wD(e,t,n,r){return n===-1?vD(t,e):n===-2?bD(e,t,r):Mn(e,e[_],n,t)}function bD(e,t,n){if(n===pt)return Rn(t,e);if(n===cr)return ou(t,e);if(n===Pn)return um(t,e)}function lm(e,t,n,r){let o=t[ut].queries[r];if(o.matches===null){let i=e.data,s=n.matches,a=[];for(let u=0;s!==null&&u<s.length;u+=2){let l=s[u];if(l<0)a.push(null);else{let c=i[l];a.push(wD(t,c,s[u+1],n.metadata.read))}}o.matches=a}return o.matches}function da(e,t,n,r){let o=e.queries.getByIndex(n),i=o.matches;if(i!==null){let s=lm(e,t,o,n);for(let a=0;a<i.length;a+=2){let u=i[a];if(u>0)r.push(s[a/2]);else{let l=i[a+1],c=t[-u];for(let d=ve;d<c.length;d++){let h=c[d];h[Ht]===h[we]&&da(h[_],h,l,r)}if(c[_n]!==null){let d=c[_n];for(let h=0;h<d.length;h++){let f=d[h];da(f[_],f,l,r)}}}}}return r}function DD(e,t){return e[ut].queries[t].queryList}function cm(e,t,n){let r=new Zs((n&4)===4);return ab(e,t,r,r.destroy),(t[ut]??=new ua).queries.push(new aa(r))-1}function ID(e,t,n){let r=_e();return r.firstCreatePass&&(dm(r,new Go(e,t,n),-1),(t&2)===2&&(r.staticViewQueries=!0)),cm(r,H(),t)}function CD(e,t,n,r){let o=_e();if(o.firstCreatePass){let i=Se();dm(o,new Go(t,n,r),i.index),xD(o,e),(n&2)===2&&(o.staticContentQueries=!0)}return cm(o,H(),n)}function ED(e){return e.split(",").map(t=>t.trim())}function dm(e,t,n){e.queries===null&&(e.queries=new la),e.queries.track(new ca(t,n))}function xD(e,t){let n=e.contentQueries||(e.contentQueries=[]),r=n.length?n[n.length-1]:-1;t!==r&&n.push(e.queries.length-1,t)}function au(e,t){return e.queries.getByIndex(t)}function _D(e,t){let n=e[_],r=au(n,t);return r.crossesNgTemplate?da(n,e,t,[]):lm(n,e,r,t)}function xr(e){let t=e.inputConfig,n={};for(let r in t)if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)&&o[3]&&(n[r]=o[3])}e.inputTransforms=n}var xt=class{},pr=class{};var fa=class extends xt{constructor(t,n,r){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Wo(this);let o=Ih(t);this._bootstrapComponents=xp(o.bootstrap),this._r3Injector=fp(t,n,[{provide:xt,useValue:this},{provide:Tn,useValue:this.componentFactoryResolver},...r],xe(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},ha=class extends pr{constructor(t){super(),this.moduleType=t}create(t){return new fa(this.moduleType,t,[])}};var Yo=class extends xt{constructor(t){super(),this.componentFactoryResolver=new Wo(this),this.instance=null;let n=new rr([...t.providers,{provide:xt,useValue:this},{provide:Tn,useValue:this.componentFactoryResolver}],t.parent||Na(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function uu(e,t,n=null){return new Yo({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}function fm(e,t,n){return e[t]=n}function SD(e,t){return e[t]}function Kt(e,t,n){let r=e[t];return Object.is(r,n)?!1:(e[t]=n,!0)}function MD(e){return(e.flags&32)===32}function TD(e,t,n,r,o,i,s,a,u){let l=t.consts,c=fi(t,e,4,s||null,a||null);$p(t,n,c,Sn(l,u)),$a(t,c);let d=c.tView=eu(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l,null);return t.queries!==null&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}function pa(e,t,n,r,o,i,s,a,u,l){let c=n+Ne,d=t.firstCreatePass?TD(c,t,e,r,o,i,s,a,u):t.data[c];wr(d,!1);let h=AD(t,e,d,n);Va()&&Ja(t,e,h,d),Yt(h,e);let f=zp(h,e,h,d);return e[c]=f,hi(e,f),mD(f,d,e),Ra(d)&&jp(t,e,d),u!=null&&Vp(e,d,l),d}function z(e,t,n,r,o,i,s,a){let u=H(),l=_e(),c=Sn(l.consts,i);return pa(u,l,e,t,n,r,o,c,s,a),z}var AD=kD;function kD(e,t,n,r){return Ba(!0),t[fe].createComment("")}function _r(e,t,n,r){let o=H(),i=br();if(Kt(o,i,t)){let s=_e(),a=Jh();Cb(a,o,e,t,n,r)}return _r}function ND(e,t,n,r){return Kt(e,br(),n)?t+Xo(n)+r:mt}function Eo(e,t){return e<<17|t<<2}function Zt(e){return e>>17&32767}function RD(e){return(e&2)==2}function OD(e,t){return e&131071|t<<17}function ma(e){return e|2}function kn(e){return(e&131068)>>2}function Ts(e,t){return e&-131069|t<<2}function PD(e){return(e&1)===1}function ga(e){return e|1}function FD(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=Zt(s),u=kn(s);e[r]=n;let l=!1,c;if(Array.isArray(n)){let d=n;c=d[1],(c===null||gr(d,c)>0)&&(l=!0)}else c=n;if(o)if(u!==0){let h=Zt(e[a+1]);e[r+1]=Eo(h,a),h!==0&&(e[h+1]=Ts(e[h+1],r)),e[a+1]=OD(e[a+1],r)}else e[r+1]=Eo(a,0),a!==0&&(e[a+1]=Ts(e[a+1],r)),a=r;else e[r+1]=Eo(u,0),a===0?a=r:e[u+1]=Ts(e[u+1],r),u=r;l&&(e[r+1]=ma(e[r+1])),Kf(e,c,r,!0),Kf(e,c,r,!1),LD(t,c,e,r,i),s=Eo(a,u),i?t.classBindings=s:t.styleBindings=s}function LD(e,t,n,r,o){let i=o?e.residualClasses:e.residualStyles;i!=null&&typeof t=="string"&&gr(i,t)>=0&&(n[r+1]=ga(n[r+1]))}function Kf(e,t,n,r){let o=e[n+1],i=t===null,s=r?Zt(o):kn(o),a=!1;for(;s!==0&&(a===!1||i);){let u=e[s],l=e[s+1];jD(u,t)&&(a=!0,e[s+1]=r?ga(l):ma(l)),s=r?Zt(l):kn(l)}a&&(e[n+1]=r?ma(o):ga(o))}function jD(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?gr(e,t)>=0:!1}function T(e,t,n){let r=H(),o=br();if(Kt(r,o,t)){let i=_e(),s=Jh();db(i,s,r,e,t,r[fe],n,!1)}return T}function Jf(e,t,n,r,o){let i=t.inputs,s=o?"class":"style";tu(e,n,i[s],s,r)}function Sr(e,t,n){return hm(e,t,n,!1),Sr}function Mr(e,t){return hm(e,t,null,!0),Mr}function hm(e,t,n,r){let o=H(),i=_e(),s=zv(2);if(i.firstUpdatePass&&BD(i,e,s,r),t!==mt&&Kt(o,s,t)){let a=i.data[Qt()];WD(i,a,o,o[fe],e,o[s+1]=GD(t,n),r,s)}}function VD(e,t){return t>=e.expandoStartIndex}function BD(e,t,n,r){let o=e.data;if(o[n+1]===null){let i=o[Qt()],s=VD(e,n);YD(i,r)&&t===null&&!s&&(t=!1),t=$D(o,i,t,r),FD(o,i,t,n,s,r)}}function $D(e,t,n,r){let o=qv(e),i=r?t.residualClasses:t.residualStyles;if(o===null)(r?t.classBindings:t.styleBindings)===0&&(n=As(null,e,t,n,r),n=mr(n,t.attrs,r),i=null);else{let s=t.directiveStylingLast;if(s===-1||e[s]!==o)if(n=As(o,e,t,n,r),i===null){let u=HD(e,t,r);u!==void 0&&Array.isArray(u)&&(u=As(null,e,t,u[1],r),u=mr(u,t.attrs,r),UD(e,t,r,u))}else i=zD(e,t,r)}return i!==void 0&&(r?t.residualClasses=i:t.residualStyles=i),n}function HD(e,t,n){let r=n?t.classBindings:t.styleBindings;if(kn(r)!==0)return e[Zt(r)]}function UD(e,t,n,r){let o=n?t.classBindings:t.styleBindings;e[Zt(o)]=r}function zD(e,t,n){let r,o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++){let s=e[i].hostAttrs;r=mr(r,s,n)}return mr(r,t.attrs,n)}function As(e,t,n,r,o){let i=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(i=t[a],r=mr(r,i.hostAttrs,o),i!==e);)a++;return e!==null&&(n.directiveStylingLast=a),r}function mr(e,t,n){let r=n?1:2,o=-1;if(t!==null)for(let i=0;i<t.length;i++){let s=t[i];typeof s=="number"?o=s:o===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),Qy(e,s,n?!0:t[++i]))}return e===void 0?null:e}function WD(e,t,n,r,o,i,s,a){if(!(t.type&3))return;let u=e.data,l=u[a+1],c=PD(l)?Xf(u,t,n,o,kn(l),s):void 0;if(!qo(c)){qo(i)||RD(l)&&(i=Xf(u,null,n,o,a,s));let d=Fh(Qt(),n);Xw(r,s,d,o,i)}}function Xf(e,t,n,r,o,i){let s=t===null,a;for(;o>0;){let u=e[o],l=Array.isArray(u),c=l?u[1]:u,d=c===null,h=n[o+1];h===mt&&(h=d?Bt:void 0);let f=d?bs(h,r):c===r?h:void 0;if(l&&!qo(f)&&(f=bs(u,r)),qo(f)&&(a=f,s))return a;let g=e[o+1];o=s?Zt(g):kn(g)}if(t!==null){let u=i?t.residualClasses:t.residualStyles;u!=null&&(a=bs(u,r))}return a}function qo(e){return e!==void 0}function GD(e,t){return e==null||e===""||(typeof t=="string"?e=e+t:typeof e=="object"&&(e=xe(Ir(e)))),e}function YD(e,t){return(e.flags&(t?8:16))!==0}var ya=class{destroy(t){}updateValue(t,n){}swap(t,n){let r=Math.min(t,n),o=Math.max(t,n),i=this.detach(o);if(o-r>1){let s=this.detach(r);this.attach(r,i),this.attach(o,s)}else this.attach(r,i)}move(t,n){this.attach(n,this.detach(t))}};function ks(e,t,n,r,o){return e===n&&Object.is(t,r)?1:Object.is(o(e,t),o(n,r))?-1:0}function qD(e,t,n){let r,o,i=0,s=e.length-1,a=void 0;if(Array.isArray(t)){let u=t.length-1;for(;i<=s&&i<=u;){let l=e.at(i),c=t[i],d=ks(i,l,i,c,n);if(d!==0){d<0&&e.updateValue(i,c),i++;continue}let h=e.at(s),f=t[u],g=ks(s,h,u,f,n);if(g!==0){g<0&&e.updateValue(s,f),s--,u--;continue}let b=n(i,l),B=n(s,h),U=n(i,c);if(Object.is(U,B)){let le=n(u,f);Object.is(le,b)?(e.swap(i,s),e.updateValue(s,f),u--,s--):e.move(s,i),e.updateValue(i,c),i++;continue}if(r??=new Zo,o??=th(e,i,s,n),va(e,r,i,U))e.updateValue(i,c),i++,s++;else if(o.has(U))r.set(b,e.detach(i)),s--;else{let le=e.create(i,t[i]);e.attach(i,le),i++,s++}}for(;i<=u;)eh(e,r,n,i,t[i]),i++}else if(t!=null){let u=t[Symbol.iterator](),l=u.next();for(;!l.done&&i<=s;){let c=e.at(i),d=l.value,h=ks(i,c,i,d,n);if(h!==0)h<0&&e.updateValue(i,d),i++,l=u.next();else{r??=new Zo,o??=th(e,i,s,n);let f=n(i,d);if(va(e,r,i,f))e.updateValue(i,d),i++,s++,l=u.next();else if(!o.has(f))e.attach(i,e.create(i,d)),i++,s++,l=u.next();else{let g=n(i,c);r.set(g,e.detach(i)),s--}}}for(;!l.done;)eh(e,r,n,e.length,l.value),l=u.next()}for(;i<=s;)e.destroy(e.detach(s--));r?.forEach(u=>{e.destroy(u)})}function va(e,t,n,r){return t!==void 0&&t.has(r)?(e.attach(n,t.get(r)),t.delete(r),!0):!1}function eh(e,t,n,r,o){if(va(e,t,r,n(r,o)))e.updateValue(r,o);else{let i=e.create(r,o);e.attach(r,i)}}function th(e,t,n,r){let o=new Set;for(let i=t;i<=n;i++)o.add(r(i,e.at(i)));return o}var Zo=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let n=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(n)?(this.kvMap.set(t,this._vMap.get(n)),this._vMap.delete(n)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,n){if(this.kvMap.has(t)){let r=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=new Map);let o=this._vMap;for(;o.has(r);)r=o.get(r);o.set(r,n)}else this.kvMap.set(t,n)}forEach(t){for(let[n,r]of this.kvMap)if(t(r,n),this._vMap!==void 0){let o=this._vMap;for(;o.has(r);)r=o.get(r),t(r,n)}}};function G(e,t){Er("NgControlFlow");let n=H(),r=br(),o=n[r]!==mt?n[r]:-1,i=o!==-1?Qo(n,Ne+o):void 0,s=0;if(Kt(n,r,e)){let a=P(null);try{if(i!==void 0&&Qp(i,s),e!==-1){let u=Ne+e,l=Qo(n,u),c=Ia(n[_],u),d=dr(l,c.tView.ssrId),h=pi(n,c,t,{dehydratedView:d});mi(l,h,s,lr(c,d))}}finally{P(a)}}else if(i!==void 0){let a=Zp(i,s);a!==void 0&&(a[ye]=t)}}var wa=class{constructor(t,n,r){this.lContainer=t,this.$implicit=n,this.$index=r}get $count(){return this.lContainer.length-ve}};function pm(e,t){return t}var ba=class{constructor(t,n,r){this.hasEmptyBlock=t,this.trackByFn=n,this.liveCollection=r}};function he(e,t,n,r,o,i,s,a,u,l,c,d,h){Er("NgControlFlow");let f=H(),g=_e(),b=u!==void 0,B=H(),U=a?s.bind(B[Ge][ye]):s,le=new ba(b,U);B[Ne+e]=le,pa(f,g,e+1,t,n,r,o,Sn(g.consts,i)),b&&pa(f,g,e+2,u,l,c,d,Sn(g.consts,h))}var Da=class extends ya{constructor(t,n,r){super(),this.lContainer=t,this.hostLView=n,this.templateTNode=r,this.operationsCounter=void 0,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-ve}at(t){return this.getLView(t)[ye].$implicit}attach(t,n){let r=n[or];this.needsIndexUpdate||=t!==this.length,mi(this.lContainer,n,t,lr(this.templateTNode,r))}detach(t){return this.needsIndexUpdate||=t!==this.length-1,ZD(this.lContainer,t)}create(t,n){let r=dr(this.lContainer,this.templateTNode.tView.ssrId),o=pi(this.hostLView,this.templateTNode,new wa(this.lContainer,n,t),{dehydratedView:r});return this.operationsCounter?.recordCreate(),o}destroy(t){li(t[_],t),this.operationsCounter?.recordDestroy()}updateValue(t,n){this.getLView(t)[ye].$implicit=n}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[ye].$index=t}getLView(t){return QD(this.lContainer,t)}};function pe(e){let t=P(null),n=Qt();try{let r=H(),o=r[_],i=r[n],s=n+1,a=Qo(r,s);if(i.liveCollection===void 0){let l=Ia(o,s);i.liveCollection=new Da(a,r,l)}else i.liveCollection.reset();let u=i.liveCollection;if(qD(u,e,i.trackByFn),u.updateIndexes(),i.hasEmptyBlock){let l=br(),c=u.length===0;if(Kt(r,l,c)){let d=n+2,h=Qo(r,d);if(c){let f=Ia(o,d),g=dr(h,f.tView.ssrId),b=pi(r,f,void 0,{dehydratedView:g});mi(h,b,0,lr(f,g))}else Qp(h,0)}}}finally{P(t)}}function Qo(e,t){return e[t]}function ZD(e,t){return ur(e,t)}function QD(e,t){return Zp(e,t)}function Ia(e,t){return Oa(e,t)}function KD(e,t,n,r,o,i){let s=t.consts,a=Sn(s,o),u=fi(t,e,2,r,a);return $p(t,n,u,Sn(s,i)),u.attrs!==null&&ia(u,u.attrs,!1),u.mergedAttrs!==null&&ia(u,u.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,u),u}function y(e,t,n,r){let o=H(),i=_e(),s=Ne+e,a=o[fe],u=i.firstCreatePass?KD(s,i,o,t,n,r):i.data[s],l=JD(i,o,u,a,t,e);o[s]=l;let c=Ra(u);return wr(u,!0),Np(a,l,u),!MD(u)&&Va()&&Ja(i,o,l,u),Pv()===0&&Yt(l,o),Fv(),c&&(jp(i,o,u),Lp(i,u,o)),r!==null&&Vp(o,u),y}function v(){let e=Se();Uh()?Hv():(e=e.parent,wr(e,!1));let t=e;Vv(t)&&Bv(),Lv();let n=_e();return n.firstCreatePass&&($a(n,e),Ah(e)&&n.queries.elementEnd(e)),t.classesWithoutHost!=null&&tw(t)&&Jf(n,t,H(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&nw(t)&&Jf(n,t,H(),t.stylesWithoutHost,!1),v}function Q(e,t,n,r){return y(e,t,n,r),v(),Q}var JD=(e,t,n,r,o,i)=>(Ba(!0),_p(r,o,Kv()));function gi(){return H()}var Ko="en-US";var XD=Ko;function eI(e){typeof e=="string"&&(XD=e.toLowerCase().replace(/_/g,"-"))}var tI=(e,t,n)=>{};function Jt(e,t,n,r){let o=H(),i=_e(),s=Se();return rI(i,o,o[fe],s,e,t,r),Jt}function nI(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let a=t[Po],u=o[i+2];return a.length>u?a[u]:null}typeof s=="string"&&(i+=2)}return null}function rI(e,t,n,r,o,i,s){let a=Ra(r),l=e.firstCreatePass&&Yp(e),c=t[ye],d=Gp(t),h=!0;if(r.type&3||s){let b=je(r,t),B=s?s(b):b,U=d.length,le=s?it=>s(et(it[r.index])):r.index,re=null;if(!s&&a&&(re=nI(e,t,o,r.index)),re!==null){let it=re.__ngLastListenerFn__||re;it.__ngNextListenerFn__=i,re.__ngLastListenerFn__=i,h=!1}else{i=rh(r,t,c,i),tI(b,o,i);let it=n.listen(B,o,i);d.push(i,it),l&&l.push(o,le,U,U+1)}}else i=rh(r,t,c,i);let f=r.outputs,g;if(h&&f!==null&&(g=f[o])){let b=g.length;if(b)for(let B=0;B<b;B+=2){let U=g[B],le=g[B+1],rn=t[U][le].subscribe(i),$e=d.length;d.push(i,rn),l&&l.push(o,r.index,$e,-($e+1))}}}function nh(e,t,n,r){let o=P(null);try{return Qe(6,t,n),n(r)!==!1}catch(i){return qp(e,i),!1}finally{Qe(7,t,n),P(o)}}function rh(e,t,n,r){return function o(i){if(i===Function)return r;let s=e.componentOffset>-1?St(e.index,t):t;ru(s,5);let a=nh(t,n,r,i),u=o.__ngNextListenerFn__;for(;u;)a=nh(t,n,u,i)&&a,u=u.__ngNextListenerFn__;return a}}function A(e=1){return Qv(e)}function mm(e,t,n,r){CD(e,t,n,r)}function gm(e,t,n){ID(e,t,n)}function yi(e){let t=H(),n=_e(),r=Gh();Fa(r+1);let o=au(n,r);if(e.dirty&&kv(t)===((o.metadata.flags&2)===2)){if(o.matches===null)e.reset([]);else{let i=_D(t,r);e.reset(i,yw),e.notifyOnChanges()}return!0}return!1}function vi(){return DD(H(),Gh())}function oI(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}function N(e,t=""){let n=H(),r=_e(),o=e+Ne,i=r.firstCreatePass?fi(r,o,1,t,null):r.data[o],s=iI(r,n,i,t,e);n[o]=s,Va()&&Ja(r,n,s,i),wr(i,!1)}var iI=(e,t,n,r,o)=>(Ba(!0),Pw(t[fe],r));function be(e){return ne("",e,""),be}function ne(e,t,n){let r=H(),o=ND(r,e,t,n);return o!==mt&&Sb(r,Qt(),o),ne}var sI=(()=>{let t=class t{constructor(r){this._injector=r,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(r){if(!r.standalone)return null;if(!this.cachedInjectors.has(r)){let o=xh(!1,r.type),i=o.length>0?uu([o],this._injector,`Standalone[${r.type.name}]`):null;this.cachedInjectors.set(r,i)}return this.cachedInjectors.get(r)}ngOnDestroy(){try{for(let r of this.cachedInjectors.values())r!==null&&r.destroy()}finally{this.cachedInjectors.clear()}}};t.\u0275prov=S({token:t,providedIn:"environment",factory:()=>new t(L(Le))});let e=t;return e})();function Z(e){Er("NgStandalone"),e.getStandaloneInjector=t=>t.get(sI).getOrCreateStandaloneInjector(e)}function ym(e,t,n){let r=Wh()+e,o=H();return o[r]===mt?fm(o,r,n?t.call(n):t()):SD(o,r)}function aI(e,t){let n=e[t];return n===mt?void 0:n}function uI(e,t,n,r,o,i){let s=t+n;return Kt(e,s,o)?fm(e,s+1,i?r.call(i,o):r(o)):aI(e,s+1)}function wi(e,t){let n=_e(),r,o=e+Ne;n.firstCreatePass?(r=lI(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks??=[]).push(o,r.onDestroy)):r=n.data[o];let i=r.factory||(r.factory=Vt(r.type,!0)),s,a=Ee(D);try{let u=Bo(!1),l=i();return Bo(u),oI(n,H(),o,l),l}finally{Ee(a)}}function lI(e,t){if(t)for(let n=t.length-1;n>=0;n--){let r=t[n];if(e===r.name)return r}}function bi(e,t,n){let r=e+Ne,o=H(),i=Av(o,r);return cI(o,r)?uI(o,Wh(),t,i.transform,n,i):i.transform(n)}function cI(e,t){return e[_].data[t].pure}var Di=(()=>{let t=class t{log(r){console.log(r)}warn(r){console.warn(r)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"platform"});let e=t;return e})();var vm=new M("");function Tr(e){return!!e&&typeof e.then=="function"}function wm(e){return!!e&&typeof e.subscribe=="function"}var bm=new M(""),Dm=(()=>{let t=class t{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o}),this.appInits=m(bm,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let r=[];for(let i of this.appInits){let s=i();if(Tr(s))r.push(s);else if(wm(s)){let a=new Promise((u,l)=>{s.subscribe({complete:u,error:l})});r.push(a)}}let o=()=>{this.done=!0,this.resolve()};Promise.all(r).then(()=>{o()}).catch(i=>{this.reject(i)}),r.length===0&&o(),this.initialized=!0}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),lu=new M("");function dI(){Gd(()=>{throw new E(600,!1)})}function fI(e){return e.isBoundToModule}var hI=10;function pI(e,t,n){try{let r=n();return Tr(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}var Fn=(()=>{let t=class t{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=m(hp),this.afterRenderEffectManager=m(sm),this.zonelessEnabled=m(iu),this.externalTestViews=new Set,this.beforeRender=new se,this.afterTick=new se,this.componentTypes=[],this.components=[],this.isStable=m(On).hasPendingTasks.pipe(F(r=>!r)),this._injector=m(Le)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(r,o){let i=r instanceof zo;if(!this._injector.get(Dm).done){let f=!i&&Dh(r),g=!1;throw new E(405,g)}let a;i?a=r:a=this._injector.get(Tn).resolveComponentFactory(r),this.componentTypes.push(a.componentType);let u=fI(a)?void 0:this._injector.get(xt),l=o||a.selector,c=a.create(Gt.NULL,[],l,u),d=c.location.nativeElement,h=c.injector.get(vm,null);return h?.registerApplication(d),c.onDestroy(()=>{this.detachView(c.hostView),Ns(this.components,c),h?.unregisterApplication(d)}),this._loadComponent(c),c}tick(){this._tick(!0)}_tick(r){if(this._runningTick)throw new E(101,!1);let o=P(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(r)}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,P(o),this.afterTick.next()}}detectChangesInAttachedViews(r){let o=null;this._injector.destroyed||(o=this._injector.get(An,null,{optional:!0}));let i=0,s=this.afterRenderEffectManager;for(;i<hI;){let a=i===0;if(r||!a){this.beforeRender.next(a);for(let{_lView:u,notifyErrorHandler:l}of this._views)mI(u,l,a,this.zonelessEnabled)}else o?.begin?.(),o?.end?.();if(i++,s.executeInternalCallbacks(),!this.allViews.some(({_lView:u})=>sr(u))&&(s.execute(),!this.allViews.some(({_lView:u})=>sr(u))))break}}attachView(r){let o=r;this._views.push(o),o.attachToAppRef(this)}detachView(r){let o=r;Ns(this._views,o),o.detachFromAppRef()}_loadComponent(r){this.attachView(r.hostView),this.tick(),this.components.push(r);let o=this._injector.get(lu,[]);[...this._bootstrapListeners,...o].forEach(i=>i(r))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(r=>r()),this._views.slice().forEach(r=>r.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(r){return this._destroyListeners.push(r),()=>Ns(this._destroyListeners,r)}destroy(){if(this._destroyed)throw new E(406,!1);let r=this._injector;r.destroy&&!r.destroyed&&r.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ns(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function mI(e,t,n,r){if(!n&&!sr(e))return;Xp(e,t,n&&!r?0:1)}var Ca=class{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},cu=(()=>{let t=class t{compileModuleSync(r){return new ha(r)}compileModuleAsync(r){return Promise.resolve(this.compileModuleSync(r))}compileModuleAndAllComponentsSync(r){let o=this.compileModuleSync(r),i=Ih(r),s=xp(i.declarations).reduce((a,u)=>{let l=$t(u);return l&&a.push(new hr(l)),a},[]);return new Ca(o,s)}compileModuleAndAllComponentsAsync(r){return Promise.resolve(this.compileModuleAndAllComponentsSync(r))}clearCache(){}clearCacheFor(r){}getModuleId(r){}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var gI=(()=>{let t=class t{constructor(){this.zone=m(X),this.changeDetectionScheduler=m(fr),this.applicationRef=m(Fn)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),yI=new M("",{factory:()=>!1});function Im({ngZoneFactory:e,ignoreChangesOutsideZone:t}){return e??=()=>new X(Em()),[{provide:X,useFactory:e},{provide:Cn,multi:!0,useFactory:()=>{let n=m(gI,{optional:!0});return()=>n.initialize()}},{provide:Cn,multi:!0,useFactory:()=>{let n=m(wI);return()=>{n.initialize()}}},{provide:hp,useFactory:vI},t===!0?{provide:rm,useValue:!0}:[]]}function vI(){let e=m(X),t=m(lt);return n=>e.runOutsideAngular(()=>t.handleError(n))}function Cm(e){let t=e?.ignoreChangesOutsideZone,n=Im({ngZoneFactory:()=>{let r=Em(e);return r.shouldCoalesceEventChangeDetection&&Er("NgZone_CoalesceEvent"),new X(r)},ignoreChangesOutsideZone:t});return ti([{provide:yI,useValue:!0},{provide:iu,useValue:!1},n])}function Em(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var wI=(()=>{let t=class t{constructor(){this.subscription=new ee,this.initialized=!1,this.zone=m(X),this.pendingTasks=m(On)}initialize(){if(this.initialized)return;this.initialized=!0;let r=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(r=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{X.assertNotInAngularZone(),queueMicrotask(()=>{r!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(r),r=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{X.assertInAngularZone(),r??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var bI=(()=>{let t=class t{constructor(){this.appRef=m(Fn),this.taskService=m(On),this.ngZone=m(X),this.zonelessEnabled=m(iu),this.disableScheduling=m(rm,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new ee,this.cancelScheduledCallback=null,this.shouldRefreshViews=!1,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof oa||!this.zoneIsDefined)}notify(r){if(!this.zonelessEnabled&&r===5)return;switch(r){case 3:case 2:case 0:case 4:case 5:case 1:{this.shouldRefreshViews=!0;break}case 8:case 7:case 6:case 9:default:}if(!this.shouldScheduleTick())return;let o=this.useMicrotaskScheduler?Wf:om;this.pendingRenderTaskId=this.taskService.add(),this.zoneIsDefined?Zone.root.run(()=>{this.cancelScheduledCallback=o(()=>{this.tick(this.shouldRefreshViews)})}):this.cancelScheduledCallback=o(()=>{this.tick(this.shouldRefreshViews)})}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&X.isInAngularZone())}tick(r){if(this.runningTick||this.appRef.destroyed)return;let o=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick(r)},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(o),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Wf(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(o)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.shouldRefreshViews=!1,this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let r=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(r)}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function DI(){return typeof $localize<"u"&&$localize.locale||Ko}var du=new M("",{providedIn:"root",factory:()=>m(du,R.Optional|R.SkipSelf)||DI()});var xm=new M("");var Ao=null;function II(e=[],t){return Gt.create({name:t,providers:[{provide:ni,useValue:"platform"},{provide:xm,useValue:new Set([()=>Ao=null])},...e]})}function CI(e=[]){if(Ao)return Ao;let t=II(e);return Ao=t,dI(),EI(t),t}function EI(e){e.get(Ga,null)?.forEach(n=>n())}var Tt=(()=>{let t=class t{};t.__NG_ELEMENT_ID__=xI;let e=t;return e})();function xI(e){return _I(Se(),H(),(e&16)===16)}function _I(e,t,n){if(oi(e)&&!n){let r=St(e.index,t);return new qt(r,r)}else if(e.type&47){let r=t[Ge];return new qt(r,t)}return null}function _m(e){try{let{rootComponent:t,appProviders:n,platformProviders:r}=e,o=CI(r),i=[Im({}),{provide:fr,useExisting:bI},...n||[]],a=new Yo({providers:i,parent:o,debugName:"",runEnvironmentInitializers:!1}).injector,u=a.get(X);return u.run(()=>{a.resolveInjectorInitializers();let l=a.get(lt,null),c;u.runOutsideAngular(()=>{c=u.onError.subscribe({next:f=>{l.handleError(f)}})});let d=()=>a.destroy(),h=o.get(xm);return h.add(d),a.onDestroy(()=>{c.unsubscribe(),h.delete(d)}),pI(l,u,()=>{let f=a.get(Dm);return f.runInitializers(),f.donePromise.then(()=>{let g=a.get(du,Ko);eI(g||Ko);let b=a.get(Fn);return t!==void 0&&b.bootstrap(t),b})})})}catch(t){return Promise.reject(t)}}function nt(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function Ar(e,t=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):t}var Am=null;function Ln(){return Am}function km(e){Am??=e}var Ii=class{};var Ve=new M(""),Nm=(()=>{let t=class t{historyGo(r){throw new Error("")}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:()=>m(SI),providedIn:"platform"});let e=t;return e})();var SI=(()=>{let t=class t extends Nm{constructor(){super(),this._doc=m(Ve),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ln().getBaseHref(this._doc)}onPopState(r){let o=Ln().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",r,!1),()=>o.removeEventListener("popstate",r)}onHashChange(r){let o=Ln().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",r,!1),()=>o.removeEventListener("hashchange",r)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(r){this._location.pathname=r}pushState(r,o,i){this._history.pushState(r,o,i)}replaceState(r,o,i){this._history.replaceState(r,o,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(r=0){this._history.go(r)}getState(){return this._history.state}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Rm(e,t){if(e.length==0)return t;if(t.length==0)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,n==2?e+t.substring(1):n==1?e+t:e+"/"+t}function Sm(e){let t=e.match(/#|\?|$/),n=t&&t.index||e.length,r=n-(e[n-1]==="/"?1:0);return e.slice(0,r)+e.slice(n)}function Xt(e){return e&&e[0]!=="?"?"?"+e:e}var jn=(()=>{let t=class t{historyGo(r){throw new Error("")}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:()=>m(Om),providedIn:"root"});let e=t;return e})(),MI=new M(""),Om=(()=>{let t=class t extends jn{constructor(r,o){super(),this._platformLocation=r,this._removeListenerFns=[],this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??m(Ve).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(r){this._removeListenerFns.push(this._platformLocation.onPopState(r),this._platformLocation.onHashChange(r))}getBaseHref(){return this._baseHref}prepareExternalUrl(r){return Rm(this._baseHref,r)}path(r=!1){let o=this._platformLocation.pathname+Xt(this._platformLocation.search),i=this._platformLocation.hash;return i&&r?`${o}${i}`:o}pushState(r,o,i,s){let a=this.prepareExternalUrl(i+Xt(s));this._platformLocation.pushState(r,o,a)}replaceState(r,o,i,s){let a=this.prepareExternalUrl(i+Xt(s));this._platformLocation.replaceState(r,o,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(r=0){this._platformLocation.historyGo?.(r)}};t.\u0275fac=function(o){return new(o||t)(L(Nm),L(MI,8))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var kr=(()=>{let t=class t{constructor(r){this._subject=new de,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=r;let o=this._locationStrategy.getBaseHref();this._basePath=kI(Sm(Mm(o))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(r=!1){return this.normalize(this._locationStrategy.path(r))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(r,o=""){return this.path()==this.normalize(r+Xt(o))}normalize(r){return t.stripTrailingSlash(AI(this._basePath,Mm(r)))}prepareExternalUrl(r){return r&&r[0]!=="/"&&(r="/"+r),this._locationStrategy.prepareExternalUrl(r)}go(r,o="",i=null){this._locationStrategy.pushState(i,"",r,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(r+Xt(o)),i)}replaceState(r,o="",i=null){this._locationStrategy.replaceState(i,"",r,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(r+Xt(o)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(r=0){this._locationStrategy.historyGo?.(r)}onUrlChange(r){return this._urlChangeListeners.push(r),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{let o=this._urlChangeListeners.indexOf(r);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(r="",o){this._urlChangeListeners.forEach(i=>i(r,o))}subscribe(r,o,i){return this._subject.subscribe({next:r,error:o,complete:i})}};t.normalizeQueryParams=Xt,t.joinWithSlash=Rm,t.stripTrailingSlash=Sm,t.\u0275fac=function(o){return new(o||t)(L(jn))},t.\u0275prov=S({token:t,factory:()=>TI(),providedIn:"root"});let e=t;return e})();function TI(){return new kr(L(jn))}function AI(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Mm(e){return e.replace(/\/index.html$/,"")}function kI(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}function Pm(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var mu="browser",NI="server";function Fm(e){return e===mu}function gu(e){return e===NI}var Ci=class{};var wu=class extends Ii{constructor(){super(...arguments),this.supportsDOMEvents=!0}},bu=class e extends wu{static makeCurrent(){km(new e)}onAndCancel(t,n,r){return t.addEventListener(n,r),()=>{t.removeEventListener(n,r)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=PI();return n==null?null:FI(n)}resetBaseElement(){Nr=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Pm(document.cookie,t)}},Nr=null;function PI(){return Nr=Nr||document.querySelector("base"),Nr?Nr.getAttribute("href"):null}function FI(e){return new URL(e,document.baseURI).pathname}var LI=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Du=new M(""),Bm=(()=>{let t=class t{constructor(r,o){this._zone=o,this._eventNameToPlugin=new Map,r.forEach(i=>{i.manager=this}),this._plugins=r.slice().reverse()}addEventListener(r,o,i){return this._findPluginFor(o).addEventListener(r,o,i)}getZone(){return this._zone}_findPluginFor(r){let o=this._eventNameToPlugin.get(r);if(o)return o;if(o=this._plugins.find(s=>s.supports(r)),!o)throw new E(5101,!1);return this._eventNameToPlugin.set(r,o),o}};t.\u0275fac=function(o){return new(o||t)(L(Du),L(X))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Ei=class{constructor(t){this._doc=t}},yu="ng-app-id",$m=(()=>{let t=class t{constructor(r,o,i,s={}){this.doc=r,this.appId=o,this.nonce=i,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=gu(s),this.resetHostNodes()}addStyles(r){for(let o of r)this.changeUsageCount(o,1)===1&&this.onStyleAdded(o)}removeStyles(r){for(let o of r)this.changeUsageCount(o,-1)<=0&&this.onStyleRemoved(o)}ngOnDestroy(){let r=this.styleNodesInDOM;r&&(r.forEach(o=>o.remove()),r.clear());for(let o of this.getAllStyles())this.onStyleRemoved(o);this.resetHostNodes()}addHost(r){this.hostNodes.add(r);for(let o of this.getAllStyles())this.addStyleToHost(r,o)}removeHost(r){this.hostNodes.delete(r)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(r){for(let o of this.hostNodes)this.addStyleToHost(o,r)}onStyleRemoved(r){let o=this.styleRef;o.get(r)?.elements?.forEach(i=>i.remove()),o.delete(r)}collectServerRenderedStyles(){let r=this.doc.head?.querySelectorAll(`style[${yu}="${this.appId}"]`);if(r?.length){let o=new Map;return r.forEach(i=>{i.textContent!=null&&o.set(i.textContent,i)}),o}return null}changeUsageCount(r,o){let i=this.styleRef;if(i.has(r)){let s=i.get(r);return s.usage+=o,s.usage}return i.set(r,{usage:o,elements:[]}),o}getStyleElement(r,o){let i=this.styleNodesInDOM,s=i?.get(o);if(s?.parentNode===r)return i.delete(o),s.removeAttribute(yu),s;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=o,this.platformIsServer&&a.setAttribute(yu,this.appId),r.appendChild(a),a}}addStyleToHost(r,o){let i=this.getStyleElement(r,o),s=this.styleRef,a=s.get(o)?.elements;a?a.push(i):s.set(o,{elements:[i],usage:1})}resetHostNodes(){let r=this.hostNodes;r.clear(),r.add(this.doc.head)}};t.\u0275fac=function(o){return new(o||t)(L(Ve),L(Wa),L(Dr,8),L(Mt))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),vu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Cu=/%COMP%/g,Hm="%COMP%",jI=`_nghost-${Hm}`,VI=`_ngcontent-${Hm}`,BI=!0,$I=new M("",{providedIn:"root",factory:()=>BI});function HI(e){return VI.replace(Cu,e)}function UI(e){return jI.replace(Cu,e)}function Um(e,t){return t.map(n=>n.replace(Cu,e))}var Lm=(()=>{let t=class t{constructor(r,o,i,s,a,u,l,c=null){this.eventManager=r,this.sharedStylesHost=o,this.appId=i,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=u,this.ngZone=l,this.nonce=c,this.rendererByCompId=new Map,this.platformIsServer=gu(u),this.defaultRenderer=new Rr(r,a,l,this.platformIsServer)}createRenderer(r,o){if(!r||!o)return this.defaultRenderer;this.platformIsServer&&o.encapsulation===Je.ShadowDom&&(o=K(w({},o),{encapsulation:Je.Emulated}));let i=this.getOrCreateRenderer(r,o);return i instanceof xi?i.applyToHost(r):i instanceof Or&&i.applyStyles(),i}getOrCreateRenderer(r,o){let i=this.rendererByCompId,s=i.get(o.id);if(!s){let a=this.doc,u=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(o.encapsulation){case Je.Emulated:s=new xi(l,c,o,this.appId,d,a,u,h);break;case Je.ShadowDom:return new Iu(l,c,r,o,a,u,this.nonce,h);default:s=new Or(l,c,o,d,a,u,h);break}i.set(o.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(o){return new(o||t)(L(Bm),L($m),L(Wa),L($I),L(Ve),L(Mt),L(X),L(Dr))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Rr=class{constructor(t,n,r,o){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,n){return n?this.doc.createElementNS(vu[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(jm(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(jm(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new E(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=vu[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=vu[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(ct.DashCase|ct.Important)?t.style.setProperty(n,r,o&ct.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&ct.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r){if(typeof t=="string"&&(t=Ln().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${n}`);return this.eventManager.addEventListener(t,n,this.decoratePreventDefault(r))}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(n)):t(n))===!1&&n.preventDefault()}}};function jm(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Iu=class extends Rr{constructor(t,n,r,o,i,s,a,u){super(t,i,s,u),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Um(o.id,o.styles);for(let c of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=c,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Or=class extends Rr{constructor(t,n,r,o,i,s,a,u){super(t,i,s,a),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o,this.styles=u?Um(u,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},xi=class extends Or{constructor(t,n,r,o,i,s,a,u){let l=o+"-"+r.id;super(t,n,r,i,s,a,u,l),this.contentAttr=HI(l),this.hostAttr=UI(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}},zI=(()=>{let t=class t extends Ei{constructor(r){super(r)}supports(r){return!0}addEventListener(r,o,i){return r.addEventListener(o,i,!1),()=>this.removeEventListener(r,o,i)}removeEventListener(r,o,i){return r.removeEventListener(o,i)}};t.\u0275fac=function(o){return new(o||t)(L(Ve))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Vm=["alt","control","meta","shift"],WI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},GI={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},YI=(()=>{let t=class t extends Ei{constructor(r){super(r)}supports(r){return t.parseEventName(r)!=null}addEventListener(r,o,i){let s=t.parseEventName(o),a=t.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ln().onAndCancel(r,s.domEventName,a))}static parseEventName(r){let o=r.toLowerCase().split("."),i=o.shift();if(o.length===0||!(i==="keydown"||i==="keyup"))return null;let s=t._normalizeKey(o.pop()),a="",u=o.indexOf("code");if(u>-1&&(o.splice(u,1),a="code."),Vm.forEach(c=>{let d=o.indexOf(c);d>-1&&(o.splice(d,1),a+=c+".")}),a+=s,o.length!=0||s.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(r,o){let i=WI[r.key]||r.key,s="";return o.indexOf("code.")>-1&&(i=r.code,s="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Vm.forEach(a=>{if(a!==i){let u=GI[a];u(r)&&(s+=a+".")}}),s+=i,s===o)}static eventCallback(r,o,i){return s=>{t.matchEventFullKeyCode(s,r)&&i.runGuarded(()=>o(s))}}static _normalizeKey(r){return r==="esc"?"escape":r}};t.\u0275fac=function(o){return new(o||t)(L(Ve))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})();function zm(e,t){return _m(w({rootComponent:e},qI(t)))}function qI(e){return{appProviders:[...XI,...e?.providers??[]],platformProviders:JI}}function ZI(){bu.makeCurrent()}function QI(){return new lt}function KI(){return bp(document),document}var JI=[{provide:Mt,useValue:mu},{provide:Ga,useValue:ZI,multi:!0},{provide:Ve,useFactory:KI,deps:[]}];var XI=[{provide:ni,useValue:"root"},{provide:lt,useFactory:QI,deps:[]},{provide:Du,useClass:zI,multi:!0,deps:[Ve,X,Mt]},{provide:Du,useClass:YI,multi:!0,deps:[Ve]},Lm,$m,Bm,{provide:An,useExisting:Lm},{provide:Ci,useClass:LI,deps:[]},[]];var De=(()=>{let t=class t{constructor(r){this._doc=r}getTitle(){return this._doc.title}setTitle(r){this._doc.title=r||""}};t.\u0275fac=function(o){return new(o||t)(L(Ve))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var k="primary",Kr=Symbol("RouteTitle"),Mu=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function zn(e){return new Mu(e)}function e0(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],a=e[i];if(s[0]===":")o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function t0(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!rt(e[n],t[n]))return!1;return!0}function rt(e,t){let n=e?Tu(e):void 0,r=t?Tu(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!Jm(e[o],t[o]))return!1;return!0}function Tu(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Jm(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function Xm(e){return e.length>0?e[e.length-1]:null}function Nt(e){return ms(e)?e:Tr(e)?te(Promise.resolve(e)):I(e)}var n0={exact:tg,subset:ng},eg={exact:r0,subset:o0,ignored:()=>!0};function Wm(e,t,n){return n0[n.paths](e.root,t.root,n.matrixParams)&&eg[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function r0(e,t){return rt(e,t)}function tg(e,t,n){if(!tn(e.segments,t.segments)||!Mi(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!tg(e.children[r],t.children[r],n))return!1;return!0}function o0(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>Jm(e[n],t[n]))}function ng(e,t,n){return rg(e,t,t.segments,n)}function rg(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!tn(o,n)||t.hasChildren()||!Mi(o,n,r))}else if(e.segments.length===n.length){if(!tn(e.segments,n)||!Mi(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!ng(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!tn(e.segments,o)||!Mi(e.segments,o,r)||!e.children[k]?!1:rg(e.children[k],t,i,r)}}function Mi(e,t,n){return t.every((r,o)=>eg[n](e[o].parameters,r.parameters))}var kt=class{constructor(t=new W([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=zn(this.queryParams),this._queryParamMap}toString(){return a0.serialize(this)}},W=class{constructor(t,n){this.segments=t,this.children=n,this.parent=null,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ti(this)}},en=class{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=zn(this.parameters),this._parameterMap}toString(){return ig(this)}};function i0(e,t){return tn(e,t)&&e.every((n,r)=>rt(n.parameters,t[r].parameters))}function tn(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function s0(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===k&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==k&&(n=n.concat(t(o,r)))}),n}var tl=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:()=>new $r,providedIn:"root"});let e=t;return e})(),$r=class{parse(t){let n=new ku(t);return new kt(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${Pr(t.root,!0)}`,r=c0(t.queryParams),o=typeof t.fragment=="string"?`#${u0(t.fragment)}`:"";return`${n}${r}${o}`}},a0=new $r;function Ti(e){return e.segments.map(t=>ig(t)).join("/")}function Pr(e,t){if(!e.hasChildren())return Ti(e);if(t){let n=e.children[k]?Pr(e.children[k],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==k&&r.push(`${o}:${Pr(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=s0(e,(r,o)=>o===k?[Pr(e.children[k],!1)]:[`${o}:${Pr(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[k]!=null?`${Ti(e)}/${n[0]}`:`${Ti(e)}/(${n.join("//")})`}}function og(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function _i(e){return og(e).replace(/%3B/gi,";")}function u0(e){return encodeURI(e)}function Au(e){return og(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ai(e){return decodeURIComponent(e)}function Gm(e){return Ai(e.replace(/\+/g,"%20"))}function ig(e){return`${Au(e.path)}${l0(e.parameters)}`}function l0(e){return Object.entries(e).map(([t,n])=>`;${Au(t)}=${Au(n)}`).join("")}function c0(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${_i(n)}=${_i(o)}`).join("&"):`${_i(n)}=${_i(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var d0=/^[^\/()?;#]+/;function Eu(e){let t=e.match(d0);return t?t[0]:""}var f0=/^[^\/()?;=#]+/;function h0(e){let t=e.match(f0);return t?t[0]:""}var p0=/^[^=?&#]+/;function m0(e){let t=e.match(p0);return t?t[0]:""}var g0=/^[^&#]+/;function y0(e){let t=e.match(g0);return t?t[0]:""}var ku=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new W([],{}):new W([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[k]=new W(t,n)),r}parseSegment(){let t=Eu(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(t),new en(Ai(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=h0(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=Eu(this.remaining);o&&(r=o,this.capture(r))}t[Ai(n)]=Ai(r)}parseQueryParam(t){let n=m0(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=y0(this.remaining);s&&(r=s,this.capture(r))}let o=Gm(n),i=Gm(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Eu(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=k);let s=this.parseChildren();n[i]=Object.keys(s).length===1?s[k]:new W([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new E(4011,!1)}};function sg(e){return e.segments.length>0?new W([],{[k]:e}):e}function ag(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=ag(o);if(r===k&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))t[s]=a;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new W(e.segments,t);return v0(n)}function v0(e){if(e.numberOfChildren===1&&e.children[k]){let t=e.children[k];return new W(e.segments.concat(t.segments),t.children)}return e}function Hr(e){return e instanceof kt}function w0(e,t,n=null,r=null){let o=ug(e);return lg(o,t,n,r)}function ug(e){let t;function n(i){let s={};for(let u of i.children){let l=n(u);s[u.outlet]=l}let a=new W(i.url,s);return i===e&&(t=a),a}let r=n(e.root),o=sg(r);return t??o}function lg(e,t,n,r){let o=e;for(;o.parent;)o=o.parent;if(t.length===0)return xu(o,o,o,n,r);let i=b0(t);if(i.toRoot())return xu(o,o,new W([],{}),n,r);let s=D0(i,o,e),a=s.processChildren?jr(s.segmentGroup,s.index,i.commands):dg(s.segmentGroup,s.index,i.commands);return xu(o,s.segmentGroup,a,n,r)}function ki(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Ur(e){return typeof e=="object"&&e!=null&&e.outlets}function xu(e,t,n,r,o){let i={};r&&Object.entries(r).forEach(([u,l])=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`});let s;e===t?s=n:s=cg(e,t,n);let a=sg(ag(s));return new kt(a,i,o)}function cg(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=cg(i,t,n)}),new W(e.segments,r)}var Ni=class{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&ki(r[0]))throw new E(4003,!1);let o=r.find(Ur);if(o&&o!==Xm(r))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function b0(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Ni(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([u,l])=>{a[u]=typeof l=="string"?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((a,u)=>{u==0&&a==="."||(u==0&&a===""?n=!0:a===".."?t++:a!=""&&o.push(a))}),o):[...o,i]},[]);return new Ni(n,t,r)}var $n=class{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function D0(e,t,n){if(e.isAbsolute)return new $n(t,!0,0);if(!n)return new $n(t,!1,NaN);if(n.parent===null)return new $n(n,!0,0);let r=ki(e.commands[0])?0:1,o=n.segments.length-1+r;return I0(n,o,e.numberOfDoubleDots)}function I0(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new E(4005,!1);o=r.segments.length}return new $n(r,!1,o-i)}function C0(e){return Ur(e[0])?e[0].outlets:{[k]:e}}function dg(e,t,n){if(e??=new W([],{}),e.segments.length===0&&e.hasChildren())return jr(e,t,n);let r=E0(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new W(e.segments.slice(0,r.pathIndex),{});return i.children[k]=new W(e.segments.slice(r.pathIndex),e.children),jr(i,0,o)}else return r.match&&o.length===0?new W(e.segments,{}):r.match&&!e.hasChildren()?Nu(e,t,n):r.match?jr(e,0,o):Nu(e,t,n)}function jr(e,t,n){if(n.length===0)return new W(e.segments,{});{let r=C0(n),o={};if(Object.keys(r).some(i=>i!==k)&&e.children[k]&&e.numberOfChildren===1&&e.children[k].segments.length===0){let i=jr(e.children[k],t,n);return new W(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=dg(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new W(e.segments,o)}}function E0(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],a=n[r];if(Ur(a))break;let u=`${a}`,l=r<n.length-1?n[r+1]:null;if(o>0&&u===void 0)break;if(u&&l&&typeof l=="object"&&l.outlets===void 0){if(!qm(u,l,s))return i;r+=2}else{if(!qm(u,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function Nu(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(Ur(i)){let u=x0(i.outlets);return new W(r,u)}if(o===0&&ki(n[0])){let u=e.segments[t];r.push(new en(u.path,Ym(n[0]))),o++;continue}let s=Ur(i)?i.outlets[k]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&ki(a)?(r.push(new en(s,Ym(a))),o+=2):(r.push(new en(s,{})),o++)}return new W(r,{})}function x0(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=Nu(new W([],{}),0,r))}),t}function Ym(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function qm(e,t,n){return e==n.path&&rt(t,n.parameters)}var Vr="imperative",ge=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(ge||{}),Be=class{constructor(t,n){this.id=t,this.url=n}},zr=class extends Be{constructor(t,n,r="imperative",o=null){super(t,n),this.type=ge.NavigationStart,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},yt=class extends Be{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=ge.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Oe=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(Oe||{}),Ru=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Ru||{}),gt=class extends Be{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=ge.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},nn=class extends Be{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=ge.NavigationSkipped}},Wr=class extends Be{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=ge.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ri=class extends Be{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=ge.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ou=class extends Be{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=ge.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pu=class extends Be{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=ge.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Fu=class extends Be{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=ge.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lu=class extends Be{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=ge.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ju=class{constructor(t){this.route=t,this.type=ge.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Vu=class{constructor(t){this.route=t,this.type=ge.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Bu=class{constructor(t){this.snapshot=t,this.type=ge.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$u=class{constructor(t){this.snapshot=t,this.type=ge.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hu=class{constructor(t){this.snapshot=t,this.type=ge.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Uu=class{constructor(t){this.snapshot=t,this.type=ge.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Gr=class{},Wn=class{constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};var zu=class{constructor(t){this.injector=t,this.outlet=null,this.route=null,this.children=new Bi(this.injector),this.attachRef=null}},Bi=(()=>{let t=class t{constructor(r){this.parentInjector=r,this.contexts=new Map}onChildOutletCreated(r,o){let i=this.getOrCreateContext(r);i.outlet=o,this.contexts.set(r,i)}onChildOutletDestroyed(r){let o=this.getContext(r);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let r=this.contexts;return this.contexts=new Map,r}onOutletReAttached(r){this.contexts=r}getOrCreateContext(r){let o=this.getContext(r);return o||(o=new zu(this.parentInjector),this.contexts.set(r,o)),o}getContext(r){return this.contexts.get(r)||null}};t.\u0275fac=function(o){return new(o||t)(L(Le))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Oi=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=Wu(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=Wu(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=Gu(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return Gu(t,this._root).map(n=>n.value)}};function Wu(e,t){if(e===t.value)return t;for(let n of t.children){let r=Wu(e,n);if(r)return r}return null}function Gu(e,t){if(e===t.value)return[t];for(let n of t.children){let r=Gu(e,n);if(r.length)return r.unshift(t),r}return[]}var Re=class{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Bn(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var Pi=class extends Oi{constructor(t,n){super(t),this.snapshot=n,nl(this,t)}toString(){return this.snapshot.toString()}};function fg(e){let t=_0(e),n=new J([new en("",{})]),r=new J({}),o=new J({}),i=new J({}),s=new J(""),a=new ie(n,r,i,s,o,k,e,t.root);return a.snapshot=t.root,new Pi(new Re(a,[]),t)}function _0(e){let t={},n={},r={},o="",i=new Hn([],t,r,o,n,k,e,null,{});return new Li("",new Re(i,[]))}var ie=class{constructor(t,n,r,o,i,s,a,u){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(F(l=>l[Kr]))??I(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(F(t=>zn(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(F(t=>zn(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Fi(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:w(w({},t.params),e.params),data:w(w({},t.data),e.data),resolve:w(w(w(w({},e.data),t.data),o?.data),e._resolvedData)}:r={params:w({},e.params),data:w({},e.data),resolve:w(w({},e.data),e._resolvedData??{})},o&&pg(o)&&(r.resolve[Kr]=o.title),r}var Hn=class{get title(){return this.data?.[Kr]}constructor(t,n,r,o,i,s,a,u,l){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.routeConfig=u,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=zn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=zn(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},Li=class extends Oi{constructor(t,n){super(n),this.url=t,nl(this,n)}toString(){return hg(this._root)}};function nl(e,t){t.value._routerState=e,t.children.forEach(n=>nl(e,n))}function hg(e){let t=e.children.length>0?` { ${e.children.map(hg).join(", ")} } `:"";return`${e.value}${t}`}function _u(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,rt(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),rt(t.params,n.params)||e.paramsSubject.next(n.params),t0(t.url,n.url)||e.urlSubject.next(n.url),rt(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Yu(e,t){let n=rt(e.params,t.params)&&i0(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||Yu(e.parent,t.parent))}function pg(e){return typeof e.title=="string"||e.title===null}var rl=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=k,this.activateEvents=new de,this.deactivateEvents=new de,this.attachEvents=new de,this.detachEvents=new de,this.parentContexts=m(Bi),this.location=m(Pn),this.changeDetector=m(Tt),this.inputBinder=m(ol,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(r){if(r.name){let{firstChange:o,previousValue:i}=r.name;if(o)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(r){return this.parentContexts.getContext(r)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let r=this.parentContexts.getContext(this.name);r?.route&&(r.attachRef?this.attach(r.attachRef,r.route):this.activateWith(r.route,r.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let r=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(r.instance),r}attach(r,o){this.activated=r,this._activatedRoute=o,this.location.insert(r.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(r.instance)}deactivate(){if(this.activated){let r=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(r)}}activateWith(r,o){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=r;let i=this.location,a=r.snapshot.component,u=this.parentContexts.getOrCreateContext(this.name).children,l=new qu(r,u,i.injector);this.activated=i.createComponent(a,{index:i.length,injector:l,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=yr({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[_t]});let e=t;return e})(),qu=class e{__ngOutletInjector(t){return new e(this.route,this.childContexts,t)}constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===ie?this.route:t===Bi?this.childContexts:this.parent.get(t,n)}},ol=new M("");function S0(e,t,n){let r=Yr(e,t._root,n?n._root:void 0);return new Pi(r,t)}function Yr(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=M0(e,t,n);return new Re(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Yr(e,a)),s}}let r=T0(t.value),o=t.children.map(i=>Yr(e,i));return new Re(r,o)}}function M0(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Yr(e,r,o);return Yr(e,r)})}function T0(e){return new ie(new J(e.url),new J(e.params),new J(e.queryParams),new J(e.fragment),new J(e.data),e.outlet,e.component,e)}var qr=class{constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},mg="ngNavigationCancelingError";function ji(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=Hr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=gg(!1,Oe.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function gg(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[mg]=!0,n.cancellationCode=t,n}function A0(e){return yg(e)&&Hr(e.url)}function yg(e){return!!e&&e[mg]}var k0=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=q({type:t,selectors:[["ng-component"]],standalone:!0,features:[Z],decls:1,vars:0,template:function(o,i){o&1&&Q(0,"router-outlet")},dependencies:[rl],encapsulation:2});let e=t;return e})();function N0(e,t){return e.providers&&!e._injector&&(e._injector=uu(e.providers,t,`Route: ${e.path}`)),e._injector??t}function il(e){let t=e.children&&e.children.map(il),n=t?K(w({},e),{children:t}):w({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==k&&(n.component=k0),n}function qe(e){return e.outlet||k}function R0(e,t){let n=e.filter(r=>qe(r)===t);return n.push(...e.filter(r=>qe(r)!==t)),n}function Jr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var O0=(e,t,n,r)=>F(o=>(new Zu(t,o.targetRouterState,o.currentRouterState,n,r).activate(e),o)),Zu=class{constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),_u(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=Bn(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Bn(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Bn(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=Bn(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new Uu(i.value.snapshot))}),t.children.length&&this.forwardEvent(new $u(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(_u(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let a=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),_u(a.route.value),this.activateChildRoutes(t,null,s.children)}else{let a=Jr(o.snapshot);s.attachRef=null,s.route=o,s.injector=a??s.injector,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}}else this.activateChildRoutes(t,null,r)}},Vi=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Un=class{constructor(t,n){this.component=t,this.route=n}};function P0(e,t,n){let r=e._root,o=t?t._root:null;return Fr(r,o,n,[r.value])}function F0(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function Yn(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!ah(e)?e:t.get(e):r}function Fr(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Bn(t);return e.children.forEach(s=>{L0(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>Br(a,n.getContext(s),o)),o}function L0(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let u=j0(s,i,i.routeConfig.runGuardsAndResolvers);u?o.canActivateChecks.push(new Vi(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Fr(e,t,a?a.children:null,r,o):Fr(e,t,n,r,o),u&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new Un(a.outlet.component,s))}else s&&Br(t,a,o),o.canActivateChecks.push(new Vi(r)),i.component?Fr(e,null,a?a.children:null,r,o):Fr(e,null,n,r,o);return o}function j0(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!tn(e.url,t.url);case"pathParamsOrQueryParamsChange":return!tn(e.url,t.url)||!rt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Yu(e,t)||!rt(e.queryParams,t.queryParams);case"paramsChange":default:return!Yu(e,t)}}function Br(e,t,n){let r=Bn(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?Br(s,t.children.getContext(i),n):Br(s,null,n):Br(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new Un(t.outlet.component,o)):n.canDeactivateChecks.push(new Un(null,o)):n.canDeactivateChecks.push(new Un(null,o))}function Xr(e){return typeof e=="function"}function V0(e){return typeof e=="boolean"}function B0(e){return e&&Xr(e.canLoad)}function $0(e){return e&&Xr(e.canActivate)}function H0(e){return e&&Xr(e.canActivateChild)}function U0(e){return e&&Xr(e.canDeactivate)}function z0(e){return e&&Xr(e.canMatch)}function vg(e){return e instanceof st||e?.name==="EmptyError"}var Si=Symbol("INITIAL_VALUE");function Gn(){return ke(e=>wo(e.map(t=>t.pipe(at(1),ws(Si)))).pipe(F(t=>{for(let n of t)if(n!==!0){if(n===Si)return Si;if(n===!1||W0(n))return n}return!0}),Ue(t=>t!==Si),at(1)))}function W0(e){return Hr(e)||e instanceof qr}function G0(e,t){return oe(n=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?I(K(w({},n),{guardsResult:!0})):Y0(s,r,o,e).pipe(oe(a=>a&&V0(a)?q0(r,i,e,t):I(a)),F(a=>K(w({},n),{guardsResult:a})))})}function Y0(e,t,n,r){return te(e).pipe(oe(o=>X0(o.component,o.route,n,t,r)),Ze(o=>o!==!0,!0))}function q0(e,t,n,r){return te(t).pipe(gn(o=>mn(Q0(o.route.parent,r),Z0(o.route,r),J0(e,o.path,n),K0(e,o.route,n))),Ze(o=>o!==!0,!0))}function Z0(e,t){return e!==null&&t&&t(new Hu(e)),I(!0)}function Q0(e,t){return e!==null&&t&&t(new Bu(e)),I(!0)}function K0(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return I(!0);let o=r.map(i=>bo(()=>{let s=Jr(t)??n,a=Yn(i,s),u=$0(a)?a.canActivate(t,e):dt(s,()=>a(t,e));return Nt(u).pipe(Ze())}));return I(o).pipe(Gn())}function J0(e,t,n){let r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>F0(s)).filter(s=>s!==null).map(s=>bo(()=>{let a=s.guards.map(u=>{let l=Jr(s.node)??n,c=Yn(u,l),d=H0(c)?c.canActivateChild(r,e):dt(l,()=>c(r,e));return Nt(d).pipe(Ze())});return I(a).pipe(Gn())}));return I(i).pipe(Gn())}function X0(e,t,n,r,o){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return I(!0);let s=i.map(a=>{let u=Jr(t)??o,l=Yn(a,u),c=U0(l)?l.canDeactivate(e,t,n,r):dt(u,()=>l(e,t,n,r));return Nt(c).pipe(Ze())});return I(s).pipe(Gn())}function eC(e,t,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return I(!0);let i=o.map(s=>{let a=Yn(s,e),u=B0(a)?a.canLoad(t,n):dt(e,()=>a(t,n));return Nt(u)});return I(i).pipe(Gn(),wg(r))}function wg(e){return ds(ce(t=>{if(typeof t!="boolean")throw ji(e,t)}),F(t=>t===!0))}function tC(e,t,n,r){let o=t.canMatch;if(!o||o.length===0)return I(!0);let i=o.map(s=>{let a=Yn(s,e),u=z0(a)?a.canMatch(t,n):dt(e,()=>a(t,n));return Nt(u)});return I(i).pipe(Gn(),wg(r))}var Zr=class{constructor(t){this.segmentGroup=t||null}},Qr=class extends Error{constructor(t){super(),this.urlTree=t}};function Vn(e){return hn(new Zr(e))}function nC(e){return hn(new E(4e3,!1))}function rC(e){return hn(gg(!1,Oe.GuardRejected))}var Qu=class{constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return I(r);if(o.numberOfChildren>1||!o.children[k])return nC(`${t.redirectTo}`);o=o.children[k]}}applyRedirectCommands(t,n,r,o,i){if(typeof n!="string"){let a=n,{queryParams:u,fragment:l,routeConfig:c,url:d,outlet:h,params:f,data:g,title:b}=o,B=dt(i,()=>a({params:f,data:g,queryParams:u,fragment:l,routeConfig:c,url:d,outlet:h,title:b}));if(B instanceof kt)throw new Qr(B);n=B}let s=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r);if(n[0]==="/")throw new Qr(s);return s}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new kt(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);r[o]=n[a]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([a,u])=>{s[a]=this.createSegmentGroup(t,u,r,o)}),new W(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new E(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}},Ku={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function oC(e,t,n,r,o){let i=sl(e,t,n);return i.matched?(r=N0(t,r),tC(r,t,n,o).pipe(F(s=>s===!0?i:w({},Ku)))):I(i)}function sl(e,t,n){if(t.path==="**")return iC(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?w({},Ku):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||e0)(n,e,t);if(!o)return w({},Ku);let i={};Object.entries(o.posParams??{}).forEach(([a,u])=>{i[a]=u.path});let s=o.consumed.length>0?w(w({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function iC(e){return{matched:!0,parameters:e.length>0?Xm(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Zm(e,t,n,r){return n.length>0&&uC(e,n,r)?{segmentGroup:new W(t,aC(r,new W(n,e.children))),slicedSegments:[]}:n.length===0&&lC(e,n,r)?{segmentGroup:new W(e.segments,sC(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new W(e.segments,e.children),slicedSegments:n}}function sC(e,t,n,r){let o={};for(let i of n)if($i(e,t,i)&&!r[qe(i)]){let s=new W([],{});o[qe(i)]=s}return w(w({},r),o)}function aC(e,t){let n={};n[k]=t;for(let r of e)if(r.path===""&&qe(r)!==k){let o=new W([],{});n[qe(r)]=o}return n}function uC(e,t,n){return n.some(r=>$i(e,t,r)&&qe(r)!==k)}function lC(e,t,n){return n.some(r=>$i(e,t,r))}function $i(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function cC(e,t,n,r){return qe(e)!==r&&(r===k||!$i(t,n,e))?!1:sl(t,e,n).matched}function dC(e,t,n){return t.length===0&&!e.children[n]}var Ju=class{};function fC(e,t,n,r,o,i,s="emptyOnly"){return new Xu(e,t,n,r,o,s,i).recognize()}var hC=31,Xu=class{constructor(t,n,r,o,i,s,a){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Qu(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new E(4002,`'${t.segmentGroup}'`)}recognize(){let t=Zm(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(F(({children:n,rootSnapshot:r})=>{let o=new Re(r,n),i=new Li("",o),s=w0(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(t){let n=new Hn([],Object.freeze({}),Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),k,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,k,n).pipe(F(r=>({children:r,rootSnapshot:n})),bt(r=>{if(r instanceof Qr)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Zr?this.noMatchError(r):r}))}processSegmentGroup(t,n,r,o,i){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r,i):this.processSegment(t,n,r,r.segments,o,!0,i).pipe(F(s=>s instanceof Re?[s]:[]))}processChildren(t,n,r,o){let i=[];for(let s of Object.keys(r.children))s==="primary"?i.unshift(s):i.push(s);return te(i).pipe(gn(s=>{let a=r.children[s],u=R0(n,s);return this.processSegmentGroup(t,u,a,s,o)}),vs((s,a)=>(s.push(...a),s)),Dt(null),ys(),oe(s=>{if(s===null)return Vn(r);let a=bg(s);return pC(a),I(a)}))}processSegment(t,n,r,o,i,s,a){return te(n).pipe(gn(u=>this.processSegmentAgainstRoute(u._injector??t,n,u,r,o,i,s,a).pipe(bt(l=>{if(l instanceof Zr)return I(null);throw l}))),Ze(u=>!!u),bt(u=>{if(vg(u))return dC(r,o,i)?I(new Ju):Vn(r);throw u}))}processSegmentAgainstRoute(t,n,r,o,i,s,a,u){return cC(r,o,i,s)?r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,o,r,i,s,u):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s,u):Vn(o):Vn(o)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s,a){let{matched:u,parameters:l,consumedSegments:c,positionalParamSegments:d,remainingSegments:h}=sl(n,o,i);if(!u)return Vn(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>hC&&(this.allowRedirects=!1));let f=new Hn(i,l,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Qm(o),qe(o),o.component??o._loadedComponent??null,o,Km(o)),g=Fi(f,a,this.paramsInheritanceStrategy);f.params=Object.freeze(g.params),f.data=Object.freeze(g.data);let b=this.applyRedirects.applyRedirectCommands(c,o.redirectTo,d,f,t);return this.applyRedirects.lineralizeSegments(o,b).pipe(oe(B=>this.processSegment(t,r,n,B.concat(h),s,!1,a)))}matchSegmentAgainstRoute(t,n,r,o,i,s){let a=oC(n,r,o,t,this.urlSerializer);return r.path==="**"&&(n.children={}),a.pipe(ke(u=>u.matched?(t=r._injector??t,this.getChildConfig(t,r,o).pipe(ke(({routes:l})=>{let c=r._loadedInjector??t,{parameters:d,consumedSegments:h,remainingSegments:f}=u,g=new Hn(h,d,Object.freeze(w({},this.urlTree.queryParams)),this.urlTree.fragment,Qm(r),qe(r),r.component??r._loadedComponent??null,r,Km(r)),b=Fi(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(b.params),g.data=Object.freeze(b.data);let{segmentGroup:B,slicedSegments:U}=Zm(n,h,f,l);if(U.length===0&&B.hasChildren())return this.processChildren(c,l,B,g).pipe(F(re=>new Re(g,re)));if(l.length===0&&U.length===0)return I(new Re(g,[]));let le=qe(r)===i;return this.processSegment(c,l,B,U,le?k:i,!0,g).pipe(F(re=>new Re(g,re instanceof Re?[re]:[])))}))):Vn(n)))}getChildConfig(t,n,r){return n.children?I({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?I({routes:n._loadedRoutes,injector:n._loadedInjector}):eC(t,n,r,this.urlSerializer).pipe(oe(o=>o?this.configLoader.loadChildren(t,n).pipe(ce(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):rC(n))):I({routes:[],injector:t})}};function pC(e){e.sort((t,n)=>t.value.outlet===k?-1:n.value.outlet===k?1:t.value.outlet.localeCompare(n.value.outlet))}function mC(e){let t=e.value.routeConfig;return t&&t.path===""}function bg(e){let t=[],n=new Set;for(let r of e){if(!mC(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=bg(r.children);t.push(new Re(r.value,o))}return t.filter(r=>!n.has(r))}function Qm(e){return e.data||{}}function Km(e){return e.resolve||{}}function gC(e,t,n,r,o,i){return oe(s=>fC(e,t,n,r,s.extractedUrl,o,i).pipe(F(({state:a,tree:u})=>K(w({},s),{targetSnapshot:a,urlAfterRedirects:u}))))}function yC(e,t){return oe(n=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return I(n);let i=new Set(o.map(u=>u.route)),s=new Set;for(let u of i)if(!s.has(u))for(let l of Dg(u))s.add(l);let a=0;return te(s).pipe(gn(u=>i.has(u)?vC(u,r,e,t):(u.data=Fi(u,u.parent,e).resolve,I(void 0))),ce(()=>a++),yn(1),oe(u=>a===s.size?I(n):Ae))})}function Dg(e){let t=e.children.map(n=>Dg(n)).flat();return[e,...t]}function vC(e,t,n,r){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!pg(o)&&(i[Kr]=o.title),wC(i,e,t,r).pipe(F(s=>(e._resolvedData=s,e.data=Fi(e,e.parent,n).resolve,null)))}function wC(e,t,n,r){let o=Tu(e);if(o.length===0)return I({});let i={};return te(o).pipe(oe(s=>bC(e[s],t,n,r).pipe(Ze(),ce(a=>{if(a instanceof qr)throw ji(new $r,a);i[s]=a}))),yn(1),gs(i),bt(s=>vg(s)?Ae:hn(s)))}function bC(e,t,n,r){let o=Jr(t)??r,i=Yn(e,o),s=i.resolve?i.resolve(t,n):dt(o,()=>i(t,n));return Nt(s)}function Su(e){return ke(t=>{let n=e(t);return n?te(n).pipe(F(()=>t)):I(t)})}var Ig=(()=>{let t=class t{buildTitle(r){let o,i=r.root;for(;i!==void 0;)o=this.getResolvedTitleForRoute(i)??o,i=i.children.find(s=>s.outlet===k);return o}getResolvedTitleForRoute(r){return r.data[Kr]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:()=>m(DC),providedIn:"root"});let e=t;return e})(),DC=(()=>{let t=class t extends Ig{constructor(r){super(),this.title=r}updateTitle(r){let o=this.buildTitle(r);o!==void 0&&this.title.setTitle(o)}};t.\u0275fac=function(o){return new(o||t)(L(De))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),al=new M("",{providedIn:"root",factory:()=>({})}),ul=new M(""),IC=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=m(cu)}loadComponent(r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return I(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let o=Nt(r.loadComponent()).pipe(F(Cg),ce(s=>{this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s}),Kn(()=>{this.componentLoaders.delete(r)})),i=new fn(o,()=>new se).pipe(dn());return this.componentLoaders.set(r,i),i}loadChildren(r,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return I({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let s=CC(o,this.compiler,r,this.onLoadEndListener).pipe(Kn(()=>{this.childrenLoaders.delete(o)})),a=new fn(s,()=>new se).pipe(dn());return this.childrenLoaders.set(o,a),a}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function CC(e,t,n,r){return Nt(e.loadChildren()).pipe(F(Cg),oe(o=>o instanceof pr||Array.isArray(o)?I(o):te(t.compileModuleAsync(o))),F(o=>{r&&r(e);let i,s,a=!1;return Array.isArray(o)?(s=o,a=!0):(i=o.create(n).injector,s=i.get(ul,[],{optional:!0,self:!0}).flat()),{routes:s.map(il),injector:i}}))}function EC(e){return e&&typeof e=="object"&&"default"in e}function Cg(e){return EC(e)?e.default:e}var ll=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:()=>m(xC),providedIn:"root"});let e=t;return e})(),xC=(()=>{let t=class t{shouldProcessUrl(r){return!0}extract(r){return r}merge(r,o){return r}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),_C=new M("");var SC=new M(""),MC=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new se,this.transitionAbortSubject=new se,this.configLoader=m(IC),this.environmentInjector=m(Le),this.urlSerializer=m(tl),this.rootContexts=m(Bi),this.location=m(kr),this.inputBindingEnabled=m(ol,{optional:!0})!==null,this.titleStrategy=m(Ig),this.options=m(al,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=m(ll),this.createViewTransition=m(_C,{optional:!0}),this.navigationErrorHandler=m(SC,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>I(void 0),this.rootComponentType=null;let r=i=>this.events.next(new ju(i)),o=i=>this.events.next(new Vu(i));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=r}complete(){this.transitions?.complete()}handleNavigationRequest(r){let o=++this.navigationId;this.transitions?.next(K(w(w({},this.transitions.value),r),{id:o}))}setupNavigations(r,o,i){return this.transitions=new J({id:0,currentUrlTree:o,currentRawUrl:o,extractedUrl:this.urlHandlingStrategy.extract(o),urlAfterRedirects:this.urlHandlingStrategy.extract(o),rawUrl:o,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Vr,restoredState:null,currentSnapshot:i.snapshot,targetSnapshot:null,currentRouterState:i,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Ue(s=>s.id!==0),F(s=>K(w({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),ke(s=>{let a=!1,u=!1;return I(s).pipe(ke(l=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Oe.SupersededByNewNavigation),Ae;this.currentTransition=s,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?K(w({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!r.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??r.onSameUrlNavigation;if(!c&&d!=="reload"){let h="";return this.events.next(new nn(l.id,this.urlSerializer.serialize(l.rawUrl),h,Ru.IgnoredSameUrlNavigation)),l.resolve(!1),Ae}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return I(l).pipe(ke(h=>{let f=this.transitions?.getValue();return this.events.next(new zr(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),f!==this.transitions?.getValue()?Ae:Promise.resolve(h)}),gC(this.environmentInjector,this.configLoader,this.rootComponentType,r.config,this.urlSerializer,this.paramsInheritanceStrategy),ce(h=>{s.targetSnapshot=h.targetSnapshot,s.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=K(w({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let f=new Ri(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:f,source:g,restoredState:b,extras:B}=l,U=new zr(h,this.urlSerializer.serialize(f),g,b);this.events.next(U);let le=fg(this.rootComponentType).snapshot;return this.currentTransition=s=K(w({},l),{targetSnapshot:le,urlAfterRedirects:f,extras:K(w({},B),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,I(s)}else{let h="";return this.events.next(new nn(l.id,this.urlSerializer.serialize(l.extractedUrl),h,Ru.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Ae}}),ce(l=>{let c=new Ou(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),F(l=>(this.currentTransition=s=K(w({},l),{guards:P0(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),s)),G0(this.environmentInjector,l=>this.events.next(l)),ce(l=>{if(s.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw ji(this.urlSerializer,l.guardsResult);let c=new Pu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),Ue(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Oe.GuardRejected),!1)),Su(l=>{if(l.guards.canActivateChecks.length)return I(l).pipe(ce(c=>{let d=new Fu(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}),ke(c=>{let d=!1;return I(c).pipe(yC(this.paramsInheritanceStrategy,this.environmentInjector),ce({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(c,"",Oe.NoDataFromResolver)}}))}),ce(c=>{let d=new Lu(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}))}),Su(l=>{let c=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(ce(f=>{d.component=f}),F(()=>{})));for(let f of d.children)h.push(...c(f));return h};return wo(c(l.targetSnapshot.root)).pipe(Dt(null),at(1))}),Su(()=>this.afterPreactivation()),ke(()=>{let{currentSnapshot:l,targetSnapshot:c}=s,d=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return d?te(d).pipe(F(()=>s)):I(s)}),F(l=>{let c=S0(r.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=s=K(w({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,s}),ce(()=>{this.events.next(new Gr)}),O0(this.rootContexts,r.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),at(1),ce({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new yt(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Jn(this.transitionAbortSubject.pipe(ce(l=>{throw l}))),Kn(()=>{!a&&!u&&this.cancelNavigationTransition(s,"",Oe.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),bt(l=>{if(u=!0,yg(l))this.events.next(new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),l.message,l.cancellationCode)),A0(l)?this.events.next(new Wn(l.url,l.navigationBehaviorOptions)):s.resolve(!1);else{let c=new Wr(s.id,this.urlSerializer.serialize(s.extractedUrl),l,s.targetSnapshot??void 0);try{let d=dt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof qr){let{message:h,cancellationCode:f}=ji(this.urlSerializer,d);this.events.next(new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),h,f)),this.events.next(new Wn(d.redirectTo,d.navigationBehaviorOptions))}else{this.events.next(c);let h=r.errorHandler(l);s.resolve(!!h)}}catch(d){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(d)}}return Ae}))}))}cancelNavigationTransition(r,o,i){let s=new gt(r.id,this.urlSerializer.serialize(r.extractedUrl),o,i);this.events.next(s),r.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function TC(e){return e!==Vr}var AC=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:()=>m(kC),providedIn:"root"});let e=t;return e})(),el=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},kC=(()=>{let t=class t extends el{};t.\u0275fac=(()=>{let r;return function(i){return(r||(r=Ua(t)))(i||t)}})(),t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Eg=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:()=>m(NC),providedIn:"root"});let e=t;return e})(),NC=(()=>{let t=class t extends Eg{constructor(){super(...arguments),this.location=m(kr),this.urlSerializer=m(tl),this.options=m(al,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=m(ll),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new kt,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=fg(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(r){return this.location.subscribe(o=>{o.type==="popstate"&&r(o.url,o.state)})}handleRouterEvent(r,o){if(r instanceof zr)this.stateMemento=this.createStateMemento();else if(r instanceof nn)this.rawUrlTree=o.initialUrl;else if(r instanceof Ri){if(this.urlUpdateStrategy==="eager"&&!o.extras.skipLocationChange){let i=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl);this.setBrowserUrl(i,o)}}else r instanceof Gr?(this.currentUrlTree=o.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(o.finalUrl,o.initialUrl),this.routerState=o.targetRouterState,this.urlUpdateStrategy==="deferred"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,o))):r instanceof gt&&(r.code===Oe.GuardRejected||r.code===Oe.NoDataFromResolver)?this.restoreHistory(o):r instanceof Wr?this.restoreHistory(o,!0):r instanceof yt&&(this.lastSuccessfulId=r.id,this.currentPageId=this.browserPageId)}setBrowserUrl(r,o){let i=this.urlSerializer.serialize(r);if(this.location.isCurrentPathEqualTo(i)||o.extras.replaceUrl){let s=this.browserPageId,a=w(w({},o.extras.state),this.generateNgRouterState(o.id,s));this.location.replaceState(i,"",a)}else{let s=w(w({},o.extras.state),this.generateNgRouterState(o.id,this.browserPageId+1));this.location.go(i,"",s)}}restoreHistory(r,o=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,s=this.currentPageId-i;s!==0?this.location.historyGo(s):this.currentUrlTree===r.finalUrl&&s===0&&(this.resetState(r),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetState(r),this.resetUrlToCurrentUrlTree())}resetState(r){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,r.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(r,o){return this.canceledNavigationResolution==="computed"?{navigationId:r,\u0275routerPageId:o}:{navigationId:r}}};t.\u0275fac=(()=>{let r;return function(i){return(r||(r=Ua(t)))(i||t)}})(),t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Lr=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(Lr||{});function RC(e,t){e.events.pipe(Ue(n=>n instanceof yt||n instanceof gt||n instanceof Wr||n instanceof nn),F(n=>n instanceof yt||n instanceof nn?Lr.COMPLETE:(n instanceof gt?n.code===Oe.Redirect||n.code===Oe.SupersededByNewNavigation:!1)?Lr.REDIRECTING:Lr.FAILED),Ue(n=>n!==Lr.REDIRECTING),at(1)).subscribe(()=>{t()})}function OC(e){throw e}var PC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},FC={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Hi=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=m(Di),this.stateManager=m(Eg),this.options=m(al,{optional:!0})||{},this.pendingTasks=m(On),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=m(MC),this.urlSerializer=m(tl),this.location=m(kr),this.urlHandlingStrategy=m(ll),this._events=new se,this.errorHandler=this.options.errorHandler||OC,this.navigated=!1,this.routeReuseStrategy=m(AC),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=m(ul,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!m(ol,{optional:!0}),this.eventsSubscription=new ee,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:r=>{this.console.warn(r)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let r=this.navigationTransitions.events.subscribe(o=>{try{let i=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(i!==null&&s!==null){if(this.stateManager.handleRouterEvent(o,s),o instanceof gt&&o.code!==Oe.Redirect&&o.code!==Oe.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof yt)this.navigated=!0;else if(o instanceof Wn){let a=o.navigationBehaviorOptions,u=this.urlHandlingStrategy.merge(o.url,i.currentRawUrl),l=w({info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||TC(i.source)},a);this.scheduleNavigation(u,Vr,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}jC(o)&&this._events.next(o)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(r)}resetRootComponentType(r){this.routerState.root.component=r,this.navigationTransitions.rootComponentType=r}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((r,o)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(r,"popstate",o)},0)})}navigateToSyncWithBrowser(r,o,i){let s={replaceUrl:!0},a=i?.navigationId?i:null;if(i){let l=w({},i);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let u=this.parseUrl(r);this.scheduleNavigation(u,o,a,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(r){this.config=r.map(il),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(r,o={}){let{relativeTo:i,queryParams:s,fragment:a,queryParamsHandling:u,preserveFragment:l}=o,c=l?this.currentUrlTree.fragment:a,d=null;switch(u){case"merge":d=w(w({},this.currentUrlTree.queryParams),s);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=s||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let f=i?i.snapshot:this.routerState.snapshot.root;h=ug(f)}catch{(typeof r[0]!="string"||r[0][0]!=="/")&&(r=[]),h=this.currentUrlTree.root}return lg(h,r,d,c??null)}navigateByUrl(r,o={skipLocationChange:!1}){let i=Hr(r)?r:this.parseUrl(r),s=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(s,Vr,null,o)}navigate(r,o={skipLocationChange:!1}){return LC(r),this.navigateByUrl(this.createUrlTree(r,o),o)}serializeUrl(r){return this.urlSerializer.serialize(r)}parseUrl(r){try{return this.urlSerializer.parse(r)}catch{return this.urlSerializer.parse("/")}}isActive(r,o){let i;if(o===!0?i=w({},PC):o===!1?i=w({},FC):i=o,Hr(r))return Wm(this.currentUrlTree,r,i);let s=this.parseUrl(r);return Wm(this.currentUrlTree,s,i)}removeEmptyProps(r){return Object.entries(r).reduce((o,[i,s])=>(s!=null&&(o[i]=s),o),{})}scheduleNavigation(r,o,i,s,a){if(this.disposed)return Promise.resolve(!1);let u,l,c;a?(u=a.resolve,l=a.reject,c=a.promise):c=new Promise((h,f)=>{u=h,l=f});let d=this.pendingTasks.add();return RC(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:r,extras:s,resolve:u,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(h=>Promise.reject(h))}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function LC(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new E(4008,!1)}function jC(e){return!(e instanceof Gr)&&!(e instanceof Wn)}var Ie=(()=>{let t=class t{constructor(r,o,i,s,a,u){this.router=r,this.route=o,this.tabIndexAttribute=i,this.renderer=s,this.el=a,this.locationStrategy=u,this.href=null,this.commands=null,this.onChanges=new se,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=r.events.subscribe(c=>{c instanceof yt&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(r){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",r)}ngOnChanges(r){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(r){r!=null?(this.commands=Array.isArray(r)?r:[r],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(r,o,i,s,a){let u=this.urlTree;if(u===null||this.isAnchorElement&&(r!==0||o||i||s||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(u,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let r=this.urlTree;this.href=r!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(r)):null;let o=this.href===null?null:Cp(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",o)}applyAttributeValue(r,o){let i=this.renderer,s=this.el.nativeElement;o!==null?i.setAttribute(s,r,o):i.removeAttribute(s,r)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};t.\u0275fac=function(o){return new(o||t)(D(Hi),D(ie),za("tabindex"),D(Cr),D(pt),D(jn))},t.\u0275dir=yr({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(o,i){o&1&&Jt("click",function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),o&2&&_r("target",i.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",nt],skipLocationChange:[2,"skipLocationChange","skipLocationChange",nt],replaceUrl:[2,"replaceUrl","replaceUrl",nt],routerLink:"routerLink"},standalone:!0,features:[xr,_t]});let e=t;return e})(),xg=(()=>{let t=class t{get isActive(){return this._isActive}constructor(r,o,i,s,a){this.router=r,this.element=o,this.renderer=i,this.cdr=s,this.link=a,this.classes=[],this._isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new de,this.routerEventsSubscription=r.events.subscribe(u=>{u instanceof yt&&this.update()})}ngAfterContentInit(){I(this.links.changes,I(null)).pipe(pn()).subscribe(r=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let r=[...this.links.toArray(),this.link].filter(o=>!!o).map(o=>o.onChanges);this.linkInputChangesSubscription=te(r).pipe(pn()).subscribe(o=>{this._isActive!==this.isLinkActive(this.router)(o)&&this.update()})}set routerLinkActive(r){let o=Array.isArray(r)?r:r.split(" ");this.classes=o.filter(i=>!!i)}ngOnChanges(r){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let r=this.hasActiveLinks();this.classes.forEach(o=>{r?this.renderer.addClass(this.element.nativeElement,o):this.renderer.removeClass(this.element.nativeElement,o)}),r&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==r&&(this._isActive=r,this.cdr.markForCheck(),this.isActiveChange.emit(r))})}isLinkActive(r){let o=VC(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return i=>{let s=i.urlTree;return s?r.isActive(s,o):!1}}hasActiveLinks(){let r=this.isLinkActive(this.router);return this.link&&r(this.link)||this.links.some(r)}};t.\u0275fac=function(o){return new(o||t)(D(Hi),D(pt),D(Cr),D(Tt),D(Ie,8))},t.\u0275dir=yr({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(o,i,s){if(o&1&&mm(s,Ie,5),o&2){let a;yi(a=vi())&&(i.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[_t]});let e=t;return e})();function VC(e){return!!e.paths}var BC=new M("");function _g(e,...t){return ti([{provide:ul,multi:!0,useValue:e},[],{provide:ie,useFactory:$C,deps:[Hi]},{provide:lu,multi:!0,useFactory:HC},t.map(n=>n.\u0275providers)])}function $C(e){return e.routerState.root}function HC(){let e=m(Gt);return t=>{let n=e.get(Fn);if(t!==n.components[0])return;let r=e.get(Hi),o=e.get(UC);e.get(zC)===1&&r.initialNavigation(),e.get(WC,null,R.Optional)?.setUpPreloading(),e.get(BC,null,R.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var UC=new M("",{factory:()=>new se}),zC=new M("",{providedIn:"root",factory:()=>1});var WC=new M("");var Rt=class{constructor(){this.songs={},this.albums={}}getSongsWithTexts(){return Object.values(this.songs).filter(t=>t.text)}getSongsWithoutAlbum(){return Object.values(this.songs).filter(t=>!t.albums.length)}getAllVideos(){return Object.values(this.songs).filter(t=>t.clipYouTubeId)}sortAsc(t,n){return t.name[0]<n.name[0]?-1:t.name[0]>n.name[0]?1:0}sortByYears(t,n){return this.yearOfSong(t)<this.yearOfSong(n)?-1:this.yearOfSong(t)>this.yearOfSong(n)?1:0}yearOfSong(t){let n=t.albums.map(r=>this.albums[r].year);return n.length?Math.min(...n):0}};var GC={id:"tardigrade-inferno",name:"Tardigrade Inferno",year:2016,folder:"/artist/tardigrade_inferno/albums/2016_ti.jpg",songs:["lovely-host","a-grain-of-sand","underwater-valentine"],info:`
  `},cl=GC;var YC={id:"execution-is-fun",name:"Execution is Fun!",year:2017,folder:"/artist/tardigrade_inferno/albums/2017_eif.jpg",songs:["execution-is-fun"],info:`
  `},dl=YC;var qC={id:"mastermind",name:"Mastermind",year:2019,folder:"/artist/tardigrade_inferno/albums/2019_m.jpg",songs:["all-tardigrades-go-to-hell","hypnosis","dreadful-song","alabama-song",{name:"Precourse"},"clown-therapy","all-pigs-are-the-same","church-asylum","marmalade","im-coming-for-your-soul","mastermind","we-are-number-one"],info:`
  `},fl=qC;var ZC={id:"how-nightmares-die",name:"How Nightmares Die",year:2020,folder:"/artist/tardigrade_inferno/albums/2020_hnd.jpg",songs:["how-nightmares-die"],info:`
A story about an inventor, battling people's nightmares with bullets and steampunk machinery. It was supposed to be a small experiment that we wanted to make while on lockdown, but the video slowly outgrew the scope of the initial project. So it is a small song with great ambitions. Music is still dark and with a heart of metal, but with electricity in its veins and with a gun, loaded with old drum samples.
`},hl=ZC;var QC={id:"the-worst-of-me",name:"The Worst of Me",year:2021,folder:"/artist/tardigrade_inferno/albums/2021_twom.jpg",songs:["the-worst-of-me","write-with-blood"],info:`
  `},pl=QC;var KC={id:"spooky-scary-skeletons",name:"Spooky Scary Skeletons",year:2021,folder:"/artist/tardigrade_inferno/albums/2021_sss.jpg",songs:["spooky-scary-skeletons"],info:`
Andrew Gold cover
  `},ml=KC;var JC={id:"arrival-of-a-train-single",name:"Arrival of a Train (single)",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_aoat.jpg",songs:["arrival-of-a-train"],info:`
  `},gl=JC;var XC={id:"fire-plague-and-locust",name:"Fire, Plague and Locust",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_fpal.jpg",songs:["fire-plague-and-locust"],info:`
  `},yl=XC;var eE={id:"arrival-of-a-train",name:"Arrival of a Train",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_mini.jpg",songs:["arrival-of-a-train","fire-plague-and-locust","engine-of-skin","evoke"],info:`
  `},vl=eE;var tE={id:"ringmaster-has-to-die",name:"Ringmaster has to Die",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_rhtd.jpg",songs:["ringmaster-has-to-die"],info:`
  `},wl=tE;var nE={id:"clockwork-god",name:"Clockwork God",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_cg.jpg",songs:["clockwork-god","ringmaster-has-to-die"],info:`
  `},bl=nE;var rE={id:"burn-the-circus",name:"Burn the Circus",year:2023,folder:"/artist/tardigrade_inferno/albums/2023_btc.jpg",songs:["ringmaster-has-to-die","clockwork-god","rats","cholera","tick-tock","9-out-of-10","little-princess","splinter-in-the-eye","nailed-to-the-ferris-wheel","wearing-white","burn-the-circus"],info:`
  `},Dl=rE;var Sg={[cl.id]:cl,[dl.id]:dl,[fl.id]:fl,[hl.id]:hl,[pl.id]:pl,[ml.id]:ml,[gl.id]:gl,[yl.id]:yl,[vl.id]:vl,[wl.id]:wl,[bl.id]:bl,[Dl.id]:Dl};var oE={id:"9-out-of-10",name:["9 out of 10"],albums:["burn-the-circus"],clipYouTubeId:"JoEULDNPL9s",duration:232,text:`
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
`},Il=oE;var iE={id:"a-grain-of-sand",name:["A Grain of Sand"],albums:["tardigrade-inferno"],duration:252,text:`
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
`},Cl=iE;var sE={id:"alabama-song",name:["Alabama Song"],albums:["mastermind"],duration:170,text:`
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
`},El=sE;var aE={id:"all-pigs-are-the-same",name:["All Pigs are the Same"],albums:["mastermind"],duration:203,text:`
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
`},xl=aE;var uE={id:"all-tardigrades-go-to-hell",name:["All Tardigrades go to Hell"],albums:["mastermind"],duration:178,text:`
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
`},_l=uE;var lE={id:"arrival-of-a-train",name:["Arrival of a Train"],albums:["arrival-of-a-train-single","arrival-of-a-train"],clipYouTubeId:"LAKEQqJ7FKk",duration:235,text:`
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
`},Sl=lE;var cE={id:"burn-the-circus",name:["Burn the Circus"],albums:["burn-the-circus"],duration:225,text:`
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
`},Ml=cE;var dE={id:"cholera",name:["Cholera"],albums:["burn-the-circus"],duration:246,text:`
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
`},Tl=dE;var fE={id:"church-asylum",name:["Church Asylum"],albums:["mastermind"],duration:244,text:`
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
`},Al=fE;var hE={id:"clockwork-god",name:["Clockwork God"],albums:["clockwork-god","burn-the-circus"],clipYouTubeId:"NhBBW-3x_9s",duration:270,text:`
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
`},kl=hE;var pE={id:"clown-therapy",name:["Clown Therapy"],albums:["mastermind"],duration:228,text:`
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
`},Nl=pE;var mE={id:"dreadful-song",name:["Dreadful Song"],albums:["mastermind"],duration:187,text:`
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
`},Rl=mE;var gE={id:"engine-of-skin",name:["Engine of Skin"],albums:["arrival-of-a-train"],duration:261,text:`
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
`},Ol=gE;var yE={id:"evoke",name:["Evoke"],albums:["arrival-of-a-train"],duration:257,text:`
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
`},Pl=yE;var vE={id:"execution-is-fun",name:["Execution is fun!"],albums:["execution-is-fun"],clipYouTubeId:"DrnKM4mGDIQ",duration:207,text:`
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
`},Fl=vE;var wE={id:"fire-plague-and-locust",name:["Fire, Plague and Locust"],albums:["fire-plague-and-locust","arrival-of-a-train"],clipYouTubeId:"hacScKtrqbQ",duration:215,text:`
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
`},Ll=wE;var bE={id:"how-nightmares-die",name:["How Nightmares Die"],albums:["how-nightmares-die"],clipYouTubeId:"sR7HHmJ4Jk4",duration:147,text:`
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
`},jl=bE;var DE={id:"hypnosis",name:["Hypnosis"],albums:["mastermind"],clipYouTubeId:"mbJ6x6HrXUM",duration:343,text:`
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
`},Vl=DE;var IE={id:"im-coming-for-your-soul",name:["I`m Coming for Your Soul"],albums:["mastermind"],duration:282,text:`
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
`},Bl=IE;var CE={id:"little-princess",name:["Little Princess"],albums:["burn-the-circus"],duration:284,text:`
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
`},$l=CE;var EE={id:"lovely-host",name:["Lovely Host"],albums:["tardigrade-inferno"],duration:237,text:`
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
`},Hl=EE;var xE={id:"marmalade",name:["Marmalade"],albums:["mastermind"],duration:184,text:`
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
`},Ul=xE;var _E={id:"mastermind",name:["Mastermind"],albums:["mastermind"],duration:238,text:`
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
`},zl=_E;var SE={id:"misery",name:["Misery"],albums:[],clipYouTubeId:"UdzmAxVGwCw",duration:253,text:`
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
`},Wl=SE;var ME={id:"nailed-to-the-ferris-wheel",name:["Nailed to the Ferris Wheel"],albums:["burn-the-circus"],duration:236,text:`
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
`},Gl=ME;var TE={id:"rats",name:["Rats"],albums:["burn-the-circus"],duration:193,text:`
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
`},Yl=TE;var AE={id:"ringmaster-has-to-die",name:["Ringmaster has to Die"],albums:["ringmaster-has-to-die","clockwork-god","burn-the-circus"],clipYouTubeId:"hh3kZP4kNsE",duration:278,text:`
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
`},ql=AE;var kE={id:"splinter-in-the-eye",name:["Splinter in the Eye"],albums:["burn-the-circus"],duration:193,text:`
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
`},Zl=kE;var NE={id:"spooky-scary-skeletons",name:["Spooky Scary Skeletons"],albums:["spooky-scary-skeletons"],clipYouTubeId:"T_381kOAtTg",duration:134,text:`
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
`},Ql=NE;var RE={id:"the-worst-of-me",name:["The Worst of Me"],albums:["the-worst-of-me"],clipYouTubeId:"-ZmFGFufDDE",duration:205,text:`
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
`},Kl=RE;var OE={id:"tick-tock",name:["Tick-Tock"],albums:["burn-the-circus"],duration:271,text:`
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
`},Jl=OE;var PE={id:"underwater-valentine",name:["Underwater Valentine"],albums:["tardigrade-inferno"],duration:224,text:`
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
`},Xl=PE;var FE={id:"we-are-number-one",name:["We Are Number One"],albums:["mastermind"],clipYouTubeId:"mzJ4vCjSt28",duration:146,text:`
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
`},tc=LE;var jE={id:"write-with-blood",name:["Write with Blood"],albums:["the-worst-of-me"],clipYouTubeId:"HbyaCInNiRA",duration:204,text:`
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
`},nc=jE;var Mg={[Il.id]:Il,[Cl.id]:Cl,[El.id]:El,[xl.id]:xl,[_l.id]:_l,[Sl.id]:Sl,[Ml.id]:Ml,[Tl.id]:Tl,[Al.id]:Al,[kl.id]:kl,[Nl.id]:Nl,[Rl.id]:Rl,[Ol.id]:Ol,[Pl.id]:Pl,[Fl.id]:Fl,[Ll.id]:Ll,[jl.id]:jl,[Vl.id]:Vl,[Bl.id]:Bl,[$l.id]:$l,[Hl.id]:Hl,[Ul.id]:Ul,[zl.id]:zl,[Gl.id]:Gl,[Yl.id]:Yl,[ql.id]:ql,[Zl.id]:Zl,[Ql.id]:Ql,[Kl.id]:Kl,[Jl.id]:Jl,[Xl.id]:Xl,[ec.id]:ec,[tc.id]:tc,[nc.id]:nc,[Wl.id]:Wl};var VE={id:"tardigrade-inferno",name:"Tardigrade Inferno",image:"/artist/tardigrade_inferno/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/12ZMAQkYyLSuNLvjbySISC",appleMusic:"https://music.apple.com/ru/artist/tardigrade-inferno/1448941163",youtubeMusic:"https://music.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA",youtube:"https://www.youtube.com/channel/UCEuTnjeJchT6Xv03VRktLbA",bandcamp:"https://tardigradeinferno.bandcamp.com/",yandexMusic:"https://music.yandex.ru/artist/6761875"},albums:["tardigrade-inferno","execution-is-fun","mastermind","how-nightmares-die","the-worst-of-me","spooky-scary-skeletons","arrival-of-a-train-single","fire-plague-and-locust","arrival-of-a-train","ringmaster-has-to-die","clockwork-god","burn-the-circus"]},rc=class extends Rt{constructor(){super(...arguments),this.artist=VE,this.albums=Sg,this.songs=Mg}},Ui=new rc;var BE={id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440",year:1987,folder:"/artist/master/albums/master_1987.jpg",songs:[{name:"\u041C\u0430\u0441\u0442\u0435\u0440"},{name:"\u0411\u0435\u0440\u0435\u0433\u0438\u0441\u044C!"},{name:"\u0420\u0443\u043A\u0438 \u043F\u0440\u043E\u0447\u044C"},{name:"\u0429\u0438\u0442 \u0438 \u043C\u0435\u0447"},{name:"\u0415\u0449\u0435 \u0440\u0430\u0437 \u043D\u043E\u0447\u044C"},{name:"\u0412\u043E\u043B\u044F \u0438 \u0440\u0430\u0437\u0443\u043C"},{name:"\u0412\u0441\u0442\u0430\u043D\u044C, \u0441\u0442\u0440\u0430\u0445 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439"},{name:"\u0425\u0440\u0430\u043D\u0438 \u043C\u0435\u043D\u044F"},{name:"\u041A\u0442\u043E \u043A\u043E\u0433\u043E?"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041C\u0430\u0441\u0442\u0435\u0440" \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u043B\u0441\u044F \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F". \u0424\u0438\u0440\u043C\u0430 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F" \u043F\u043E\u043C\u0435\u0449\u0430\u043B\u0430\u0441\u044C \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u043A\u043E\u0441\u0442\u0435\u043B\u0430 \u043D\u0430 \u0443\u043B\u0438\u0446\u0435 \u0421\u0442\u0430\u043D\u043A\u0435\u0432\u0438\u0447\u0430, \u0432\u043E \u0434\u0432\u043E\u0440\u0435, \u0433\u0434\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043B\u0441\u044F \u0430\u0432\u0442\u043E\u0431\u0443\u0441 \u0422\u043E\u043D\u0432\u0430\u0433\u0438\u043D \u0441\u043E \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u043E\u0439. \u0418\u043C\u0435\u043D\u043D\u043E \u0432 \u043D\u0435\u043C \u0431\u044B\u043B \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0438 \u0441\u0432\u0435\u0434\u0435\u043D \u043F\u0435\u0440\u0432\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C. \u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0442\u043E\u0436\u0435 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "\u041C\u0415\u041B\u041E\u0414\u0418\u042F" \u0432 1987 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043D\u0438\u043B\u0435 \u0438 \u0431\u044B\u043B \u043F\u0440\u043E\u0434\u0430\u043D \u0442\u0438\u0440\u0430\u0436\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u0412 1995 \u0433\u043E\u0434\u0443 \u0430\u043B\u044C\u0431\u043E\u043C \u043F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D \u043D\u0430 CD \u0444\u0438\u0440\u043C\u043E\u0439 \u0421\u041E\u042E\u0417.
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B          \u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430
\u0418.\u041C\u043E\u043B\u0447\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435     \u041A.\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
  `},oc=BE;var $E={id:"s-petlyoj-na-shee",name:"\u0421 \u043F\u0435\u0442\u043B\u0451\u0439 \u043D\u0430 \u0448\u0435\u0435",year:1989,folder:"/artist/master/albums/spnsh_1989.jpg",songs:[{name:"\u041D\u0435 \u0445\u043E\u0442\u0438\u043C!"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"\u041C\u044B \u043D\u0435 \u0440\u0430\u0431\u044B?"},{name:"\u041A\u043E\u0433\u0434\u0430 \u044F \u0443\u043C\u0440\u0443..."},{name:"\u0411\u043E\u0436\u0435, \u0445\u0440\u0430\u043D\u0438 \u043D\u0430\u0448\u0443 \u0437\u043B\u043E\u0441\u0442\u044C"},{name:"\u041D\u0430\u043F\u043B\u0435\u0432\u0430\u0442\u044C!"},{name:"\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"2000 \u043B\u0435\u0442 (\u0418\u0443\u0434\u0430)"},{name:"\u0412\u043E\u0439\u043D\u0430"},{name:"\u0421\u0435\u043C\u044C \u043A\u0440\u0443\u0433\u043E\u0432 \u0430\u0434\u0430"},{name:"\u0421 \u043F\u0435\u0442\u043B\u0451\u0439 \u043D\u0430 \u0448\u0435\u0435"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u0421 \u041F\u0435\u0442\u043B\u0435\u0439 \u041D\u0430 \u0428\u0435\u0435" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u0430 \u042E.\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u041D\u043E\u0432\u044B\u0435 \u041C\u044B\u0442\u0438\u0449\u0438. \u0412 \u0442\u0440\u0435\u0445\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0443\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u042E.\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430 \u0431\u044B\u043B\u0430 \u043F\u0440\u0438\u0432\u0435\u0437\u0435\u043D\u0430 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0438 \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u0438\u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043C\u0430\u0433\u043D\u0438\u0442\u043E\u0444\u043E\u043D. \u042D\u0442\u043E \u0431\u044B\u043B \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u043F\u044B\u0442 \u0437\u0430\u043F\u0438\u0441\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0441\u0438\u043B\u0430\u043C\u0438. \u0410\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0432 1989 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043D\u0438\u043B\u0435 \u0444\u0438\u0440\u043C\u043E\u0439 "\u041C\u0435\u043B\u043E\u0434\u0438\u044F", \u0438 \u0431\u044B\u043B \u043F\u0440\u043E\u0434\u0430\u043D \u0442\u0438\u0440\u0430\u0436\u043E\u043C \u0431\u043E\u043B\u0435\u0435 \u0434\u0432\u0443\u0445 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u0410\u043B\u044C\u0431\u043E\u043C \u0431\u044B\u043B \u043F\u0440\u0438\u0437\u043D\u0430\u043D \u043B\u0443\u0447\u0448\u0438\u043C \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u043C \u0433\u043E\u0434\u0430. \u0412 1995 \u0433\u043E\u0434\u0443 \u0431\u044B\u043B \u043F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D \u043D\u0430 CD \u0441\u0442\u0443\u0434\u0438\u0435\u0439 \u0421\u041E\u042E\u0417
\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B          \u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430
\u0418.\u041C\u043E\u043B\u0447\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435     \u041A.\u041F\u043E\u043A\u0440\u043E\u0432\u0441\u043A\u0438\u0439 - \u043A\u043B\u0430\u0432\u0438\u0448\u043D\u044B\u0435
  `},ic=$E;var HE={id:"talk-of-the-devil",name:"Talk of the Devil",year:1991,folder:"/artist/master/albums/talk_of_the_devil_1992.jpg",songs:[{name:"Intro Golgotha"},{name:"Talk Of The Devil"},{name:"Danger"},{name:"Fallen Angel"},{name:"Live To Die"},{name:"Tsar"},{name:"Heroes"},{name:"Romance (bass-solo)"},{name:"I Hate Your Sex"},{name:"Paranoid"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "Talk Of The Devil" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0432 1991 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "MOROZ Records" - LP (\u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u0439 \u0434\u0438\u0441\u043A). \u0417\u0430\u043F\u0438\u0441\u044C \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "SNC-records", \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u0422\u0440\u0443\u0448\u0438\u043D. \u0422\u0430\u043A\u0436\u0435 \u041C\u0438\u0445\u0430\u0438\u043B \u0421\u0435\u0440\u044B\u0448\u0435\u0432 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043B \u043B\u044E\u0434\u0435\u0439 \u0438\u0437 \u0445\u0440\u0430\u043C\u0430 \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u0445\u043E\u0440\u0430 \u0432 \u043F\u0435\u0441\u043D\u0435 Fallen Angel.

\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410.\u0411\u043E\u043B\u044C\u0448\u0430\u043A\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B

\u0421\u0435\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B:
\u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430                                          \u0412.\u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (1)
\u0421.\u0415\u0444\u0438\u043C\u043E\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (6)                             \u0410.\u041C\u043E\u0438\u0441\u0435\u0435\u0432 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (7)
\u0410.\u0428\u0430\u0442\u0443\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B (2, 3, 4, 5)      \u0418.\u041A\u043E\u0436\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430 (6)
\u0445\u043E\u0440 \u0445\u0440\u0430\u043C\u0430 \u041C\u0438\u0445\u0430\u0438\u043B\u0430 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u0430 (3)
  `},sc=HE;var UE={id:"maniac-party",name:"Maniac Party",year:1994,folder:"/artist/master/albums/maniac_party_1994.jpg",songs:[{name:"Beastie Generation"},{name:"Maniac Party"},{name:"Lock Them In Graves"},{name:"Burning In Hell (Civil War Disaster)"},{name:"Screams Of Pain"},{name:"Time X (bass-solo)"},{name:"They Are Just Like Us"},{name:"Punk Guys"},{name:"Go!"}],info:`
"Maniac Party" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "SNC-records" \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u0432 1993 \u0433\u043E\u0434\u0443, \u0437\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 - \u0415.\u0422\u0440\u0443\u0448\u0438\u043D. \u0421\u0430\u043C \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u0448\u0435\u043B \u0442\u043E\u043B\u044C\u043A\u043E \u0432 1994 \u0433\u043E\u0434\u0443 \u043D\u0430 \u0444\u0438\u0440\u043C\u0435 "APEX" - CD, \u0432\u0438\u043D\u0438\u043B\u043E\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 - \u0444\u0438\u0440\u043C\u0430 "POLYGRAM".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421.\u0421\u0438\u0434\u043E\u0440\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430      \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B       \u0422.\u0428\u0435\u043D\u0434\u0435\u0440 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},ac=UE;var zE={id:"pesni-myortvyh",name:"\u041F\u0435\u0441\u043D\u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0445",year:1996,folder:"/artist/master/albums/pesni_mertvix_1996.jpg",songs:[{name:"\u041F\u0435\u0441\u043D\u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0414\u0438\u043A\u0438\u0435 \u0433\u0443\u0441\u0438"},{name:"\u0414\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0442"},{name:"\u041F\u0435\u043F\u0435\u043B \u043D\u0430 \u0432\u0435\u0442\u0440\u0443"},{name:"\u041D\u0430\u0434\u043E\u0435\u043B\u043E"},{name:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0441\u0430\u043C"},{name:"\u042F \u043D\u0435 \u0445\u043E\u0447\u0443 \u0432\u043E\u0439\u043D\u044B"},{name:"\u0422\u0430\u0442\u0443"},{name:"\u041D\u043E\u0447\u044C"},{name:"\u041A\u043E\u0440\u0430\u0431\u043B\u044C \u0434\u0443\u0440\u0430\u043A\u043E\u0432"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041F\u0435\u0441\u043D\u0438 \u043C\u0435\u0440\u0442\u0432\u044B\u0445" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 "\u0410\u0440\u0438\u044F Records" \u0432 \u043C\u0430\u0440\u0442\u0435 1996 \u0433\u043E\u0434\u0430. \u0417\u0432\u0443\u043A\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u044B - \u0412.\u0425\u043E\u043B\u0441\u0442\u0438\u043D\u0438\u043D \u0438 \u0414.\u041A\u0430\u043B\u0438\u043D\u0438\u043D. \u0412\u044B\u043F\u0443\u0449\u0435\u043D \u0444\u0438\u0440\u043C\u043E\u0439 "Flam Records" \u0432 1996 \u0433\u043E\u0434\u0443. \u0412 \u043F\u0435\u0441\u043D\u0435 \u0422\u0430\u0442\u0443 \u0432 \u0437\u0430\u043F\u0438\u0441\u0438 \u0445\u043E\u0440\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0410.\u0422\u0440\u043E\u0444\u0438\u043C\u043E\u0432, \u0410.\u0413\u0438\u0440\u043D\u044B\u043A (ZZ-Top), \u042E\u0440\u0438\u0439 \u0412\u0430\u0441\u0438\u043D (\u0430\u0440\u0442\u0438\u0441\u0442 \u0430\u043D\u0441\u0430\u043C\u0431\u043B\u044F \u0418\u0433\u043E\u0440\u044F \u041C\u043E\u0438\u0441\u0435\u0435\u0432\u0430).

\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421.\u041F\u043E\u043F\u043E\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041C.\u0421\u0435\u0440\u044B\u0448\u0435\u0432 - \u0432\u043E\u043A\u0430\u043B       \u0422.\u0428\u0435\u043D\u0434\u0435\u0440 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},uc=zE;var WE={id:"labirint",name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442",year:1999,folder:"/artist/master/albums/labirint_2000.jpg",songs:[{name:"\u041C\u0435\u0441\u0442\u0430 \u0445\u0432\u0430\u0442\u0438\u0442 \u0432\u0441\u0435\u043C"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"\u0421\u043E\u043D"},{name:"\u041A\u043E\u043C\u0435\u0442\u0430 2000"},{name:"Metal-\u0434\u043E\u043A\u0442\u043E\u0440"},{name:"\u041E\u0445\u043E\u0442\u043D\u0438\u043A\u0438 \u0437\u0430 \u0441\u0447\u0430\u0441\u0442\u044C\u0435\u043C"},{name:"\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0442, \u043D\u0438\u0447\u0442\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0442\u043E (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"\u0422\u0430\u0440\u0430\u043D"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0433\u0440\u0443\u043F\u043F\u044B \u041C\u0430\u0441\u0442\u0435\u0440 \u0432 \u043A\u043E\u043D\u0446\u0435 1999 \u0433\u043E\u0434\u0430. \u041C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0438 \u0437\u0432\u0443\u043A\u043E\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0443\u0440\u0443 \u0438 \u0440\u0435\u0448\u0438\u043B\u0438 \u0432\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0443 \u0441\u0435\u0431\u044F \u043D\u0430 \u0431\u0430\u0437\u0435. \u0410\u043B\u044C\u0431\u043E\u043C "\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432 2001 \u0444\u0438\u0440\u043C\u043E\u0439 "CD-Land" \u043D\u0430 CD



\u0421\u043E\u0441\u0442\u0430\u0432:
\u041B.\u0424\u043E\u043C\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                   \u041E.\u041C\u0438\u043B\u043E\u0432\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},lc=WE;var GE={id:"rc-cars",name:"\u041D\u0435\u0434\u0435\u0442\u0441\u043A\u0438\u0435 \u0433\u043E\u043D\u043A\u0438",year:2003,folder:"/artist/master/albums/rc_cars.jpg",songs:[{name:"\u0420\u0443\u043A\u0438 \u043F\u0440\u043E\u0447\u044C"},{name:"\u041C\u0435\u0441\u0442\u0430 \u0445\u0432\u0430\u0442\u0438\u0442 \u0432\u0441\u0435\u043C"},{name:"\u041A\u0442\u043E \u043A\u043E\u0433\u043E?"},{name:"\u0411\u0435\u0440\u0435\u0433\u0438\u0441\u044C"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"Metal-\u0434\u043E\u043A\u0442\u043E\u0440"},{name:"\u041C\u0430\u0441\u0442\u0435\u0440"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"\u0421\u043E\u043D"},{name:"\u0422\u0430\u0440\u0430\u043D"}],info:`
\u0417\u0430\u043F\u0438\u0441\u044C 2002 \u0433., \u0441\u0430\u0443\u043D\u0434\u0442\u0440\u0435\u043A \u043A \u043A\u043E\u043C\u043F\u044C\u0442\u0435\u0440\u043D\u043E\u0439 \u0438\u0433\u0440\u0435
\u0410\u043B\u0438\u043A \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441, \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430, \u0410\u043D\u0434\u0440\u0435\u0439 \u041B\u0435\u0431\u0435\u0434\u0435\u0432 \u041A\u0440\u0443\u0441\u0442\u0435\u0440 - \u0441\u044D\u043C\u043F\u043B\u044B, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u0437\u0432\u0443\u043A\u043E\u0432\u044B\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u044B
  `},cc=GE;var YE={id:"klassika",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 1987-2002",year:2001,folder:"/artist/master/albums/klassika_1987_2002.jpg",songs:[{name:"\u0418\u043D\u0442\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"},{name:"\u041B\u0430\u0431\u0438\u0440\u0438\u043D\u0442"},{name:"\u0421 \u043A\u0435\u043C \u0442\u044B?"},{name:"\u0415\u0449\u0435 \u0440\u0430\u0437 \u043D\u043E\u0447\u044C"},{name:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u044B \u0441\u0430\u043C"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"2000 \u043B\u0435\u0442 (\u0418\u0443\u0434\u0430)"},{name:"\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C (\u0431\u0430\u0441-\u0441\u043E\u043B\u043E)"},{name:"\u0422\u043E\u0440\u0435\u0440\u043E"},{name:"\u041D\u0435\u0431\u043E \u0432 \u0433\u043B\u0430\u0437\u0430\u0445"},{name:"\u0412\u0441\u0442\u0430\u043D\u044C, \u0441\u0442\u0440\u0430\u0445 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439"},{name:"\u0422\u0430\u0442\u0443"},{name:"\u0412\u043E\u043B\u044F \u0438 \u0440\u0430\u0437\u0443\u043C"},{name:"\u0427\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u0430\u044F"}],info:`
\u041B\u0435\u0442\u043E\u043C 2001 \u0433\u043E\u0434\u0430 - \u0433\u0440\u0443\u043F\u043F\u0430 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0430\u043B\u044C\u0431\u043E\u043C "\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 1987-2001", \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0448\u043B\u0438 \u0441\u0442\u0430\u0440\u044B\u0435 \u0445\u0438\u0442\u044B \u0433\u0440\u0443\u043F\u043F\u044B \u0432 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0435, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0410\u043B\u0438\u043A\u0430 \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E: "\u0422\u043E\u0440\u0435\u0440\u043E" \u0438 "\u0421 \u041A\u0435\u043C \u0422\u044B?" \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0435 \u0438\u043C \u0432 \u0442\u043E \u0432\u0440\u0435\u043C\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D \u0438\u0433\u0440\u0430\u043B \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 "\u0410\u0440\u0438\u044F".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                 \u041E.\u041C\u0438\u043B\u043E\u0432\u0430\u043D\u043E\u0432 - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},dc=YE;var qE={id:"33-zhizni",name:"33 \u0436\u0438\u0437\u043D\u0438",year:2004,folder:"/artist/master/albums/33zizni_2004.jpg",songs:[{name:"\u0418\u0433\u0440\u0430"},{name:"\u041C\u0430\u0441\u0442\u0435\u0440 \u0441\u043A\u043E\u0440\u0431\u043D\u044B\u0445 \u0434\u0435\u043B"},{name:"\u0412\u0435\u0440\u0430 \u0433\u043E\u0440\u0438\u0442 \u043D\u0430 \u043A\u043E\u0441\u0442\u0440\u0430\u0445"},{name:"33 \u0436\u0438\u0437\u043D\u0438"},{name:"\u042D\u043A\u0441\u043F\u0440\u0435\u0441\u0441"},{name:"\u0413\u043B\u043E\u0442\u043E\u043A \u043E\u0433\u043D\u044F"},{name:"\u0412\u043E\u0439\u043D\u0430 \u043C\u0438\u0440\u043E\u0432"},{name:"Heavy-\u043B\u0430\u043C\u0431\u0430\u0434\u0430"},{name:"\u0421\u043D\u0435\u0436\u043D\u044B\u0439 \u043E\u0445\u043E\u0442\u043D\u0438\u043A"},{name:"\u0421\u0442\u0438\u0445\u0438\u044F"},{name:"\u0414\u0435\u0442\u0438 \u043F\u043E\u0434\u0437\u0435\u043C\u0435\u043B\u044C\u044F"}],info:`
\u0410\u043B\u044C\u0431\u043E\u043C "33 \u0436\u0438\u0437\u043D\u0438" \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u041C\u0430\u0441\u0442\u0435\u0440-\u0420\u0435\u043A\u043E\u0440\u0434\u0441 \u0432 2004 \u0433\u043E\u0434\u0443. \u0412 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0431\u044B\u043B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0421\u0442\u0440\u0430\u0439\u043A\u0430. \u041E\u0431\u043B\u043E\u0436\u043A\u0443 \u0434\u043B\u044F \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043B \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0410\u043D\u0434\u0440\u0435\u0439 \u0411\u0430\u0440\u043A\u043E\u0432 (Grimmy bro). \u0410\u043B\u044C\u0431\u043E\u043C "33 \u0436\u0438\u0437\u043D\u0438" \u0431\u044B\u043B \u0432\u044B\u043F\u0443\u0449\u0435\u043D \u043D\u0430 CD \u041E\u041E\u041E "\u041C\u0430\u0441\u0442\u0435\u0440-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442".



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430           \u0410.\u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
\u041B\u0435\u043A\u0441 - \u0432\u043E\u043A\u0430\u043B                 \u0410.\u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435
  `},fc=qE;var ZE={id:"akustika",name:"\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",year:2005,folder:"/artist/master/albums/akystika_2005.jpg",songs:["plach-svireli",{name:"\u0422\u043E\u0440\u0435\u0440\u043E"},{name:"\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0432\u0435\u043A"},{name:"33 \u0436\u0438\u0437\u043D\u0438"},{name:"\u041F\u0430\u043B\u0430\u0447\u0438"},{name:"Heavy-\u043B\u0430\u043C\u0431\u0430\u0434\u0430"},{name:"\u041F\u0435\u043F\u0435\u043B \u043D\u0430 \u0432\u0435\u0442\u0440\u0443"},{name:"\u0418\u0433\u0440\u0430"},{name:"\u041A\u0440\u0435\u0441\u0442\u044B"},{name:"\u0417\u0434\u0435\u0441\u044C \u043A\u0443\u044E\u0442 \u043C\u0435\u0442\u0430\u043B\u043B"},"veter"],info:`
\u0410\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u044B\u0448\u0435\u043B \u0432 \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2005 \u0433\u043E\u0434\u0430. \u0412 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A \u0441\u0442\u0430\u0440\u044B\u0435 \u0445\u0438\u0442\u044B, \u0442\u0430\u043A \u0438 \u0434\u0432\u0435 \u043D\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438.

"\u041A\u0430\u0436\u0434\u044B\u0439 \u0448\u0430\u0433 \u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0434\u043E\u0440\u043E\u0433\u0435 - \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435, \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435 \u0438 \u043E\u043F\u044B\u0442. \u042D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C - \u0435\u0449\u0451 \u043E\u0434\u043D\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432\u043F\u0435\u0440\u0451\u0434 \u0434\u043B\u044F \u043D\u0430\u0441 \u0438 \u0434\u043B\u044F \u0442\u0435\u0431\u044F..."



\u0421\u043E\u0441\u0442\u0430\u0432:
\u0410. \u0421\u0442\u0440\u0430\u0439\u043A - \u0433\u0438\u0442\u0430\u0440\u0430        \u0410. \u0413\u0440\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439 - \u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430
LEXX - \u0433\u0438\u0442\u0430\u0440\u0430, \u0432\u043E\u043A\u0430\u043B     \u0410. \u041A\u0430\u0440\u043F\u0443\u0445\u0438\u043D - \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u043F\u0435\u0440\u043A\u0443\u0441\u0441\u0438\u044F
  `},hc=ZE;var QE={id:"po-tu-storonu-sna",name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430",year:2006,folder:"/artist/master/albums/ptcc_2006.jpg",songs:[{name:"\u0422\u0430\u043D\u0435\u0446"},{name:"\u0413\u0435\u043D\u0438\u0439 \u0440\u043E\u043A\u0430"},{name:"\u041C\u0443\u0437\u044B\u043A\u0430 \u0441\u0444\u0435\u0440"},"za-granyu",{name:"\u041F\u0435\u0441\u043D\u044F \u0410\u043D\u043D\u0443\u0448\u043A\u0438"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C \u0411\u0435\u0440\u043B\u0438\u043E\u0437\u0430"},{name:"\u041A\u043E\u043D\u0444\u0435\u0440\u0430\u043D\u0441"},{name:"\u041C\u0435\u0447\u0442\u0430\u0439"},{name:"\u0412\u043E\u0439\u043D\u0430 (Live in studio)"},{name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430 (\u0447\u0430\u0441\u0442\u044C 1)"},{name:"\u041B\u0435\u0441 \u0411\u0440\u043E\u043A\u0438\u043B\u043E\u043D"},{name:"\u041A\u0440\u044B\u0441\u044B"},{name:"\u0421\u044B\u043D \u043A\u0430\u043C\u043D\u044F"},{name:"\u0412\u0440\u0435\u043C\u044F \u0432\u0430\u0440\u0432\u0430\u0440\u043E\u0432"},{name:"Live in studio"},{name:"Omut"},{name:"\u041C\u0440\u0430\u043C\u043E\u0440\u043D\u044B\u0439 \u0410\u043D\u0433\u0435\u043B"},{name:"\u041F\u043E \u0442\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0441\u043D\u0430 (\u0447\u0430\u0441\u0442\u044C 2) (Live in studio)"}],info:`
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
  `},pc=QE;var KE={id:"viii",name:"VIII",year:2010,folder:"/artist/master/albums/vii_2010.jpg",songs:[{name:"\u0412\u043E\u0441\u044C\u043C\u0430\u044F \u0434\u0432\u0435\u0440\u044C"},{name:"\u0417\u0430\u043C\u0440\u0438!"},{name:"\u0411\u0443\u043B\u044C\u0434\u043E\u0437\u0435\u0440"},{name:"\u0421\u0443\u0434 \u0438\u0434\u0451\u0442"},{name:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0440\u0430\u0442"},{name:"\u0412\u043E\u0437\u0434\u0443\u0445!"},{name:"\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C"},{name:"\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u0441\u0430\u0440\u0430\u043D\u0447\u0430"},{name:"\u0420\u0443\u0431\u0438\u0442\u0435 \u043C\u0430\u0447\u0442\u044B!"},{name:"\u0411\u0435\u0440\u0435\u0433 \u0438\u043B\u043B\u044E\u0437\u0438\u0439"},{name:"\u041A\u043E\u0440\u043E\u043B\u0438 \u0440\u043E\u043A-\u043D-\u0440\u043E\u043B\u043B\u0430"},{name:"\u041E\u043D\u0438 \u043A\u0430\u043A \u043C\u044B"},{name:"Kings of Rock-n-Roll"},{name:"\u041D\u0430\u0447\u0430\u043B\u043E \u0432\u043E\u0441\u044C\u043C\u043E\u0433\u043E"}],info:`
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
  `},mc=KE;var Tg={[oc.id]:oc,[ic.id]:ic,[sc.id]:sc,[ac.id]:ac,[uc.id]:uc,[lc.id]:lc,[cc.id]:cc,[dc.id]:dc,[fc.id]:fc,[hc.id]:hc,[pc.id]:pc,[mc.id]:mc};var JE={id:"za-granyu",name:["\u0417\u0430 \u0433\u0440\u0430\u043D\u044C\u044E"],albums:["po-tu-storonu-sna"],authors:"\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0442\u0440\u0430\u0439\u043A \u2014 \u041C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430 \u041F\u0443\u0448\u043A\u0438\u043D\u0430",text:`
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
`},gc=JE;var XE={id:"plach-svireli",name:["\u041F\u043B\u0430\u0447 \u0441\u0432\u0438\u0440\u0435\u043B\u0438"],albums:["akustika"],duration:234,text:`
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
`},yc=XE;var ex={id:"veter",name:["\u0412\u0435\u0442\u0435\u0440"],albums:["akustika"],duration:117,text:`
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
`},vc=ex;var tx={id:"ride-to-live-live-to-ride",name:["Ride To Live, Live To Ride"],albums:[],authors:"\u043C\u0443\u0437\u044B\u043A\u0430: Dee Snider, \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442: \u041C.\u041F\u0443\u0448\u043A\u0438\u043D\u0430",text:`
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
`},wc=tx;var nx={id:"na-linii-ognya",name:["\u041D\u0430 \u043B\u0438\u043D\u0438\u0438 \u043E\u0433\u043D\u044F"],albums:[],clipYouTubeId:"sdAZuPTbFtE",text:`
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
`},bc=nx;var Ag={[gc.id]:gc,[yc.id]:yc,[vc.id]:vc,[wc.id]:wc,[bc.id]:bc};var rx={id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440",image:"/artist/master/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/3Gocx0waYCfV2wx0d5nKzs",youtube:"https://www.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q",youtubeMusic:"https://music.youtube.com/channel/UC8n4KOpcZlbnWJ1DHa96k9Q",yandexMusic:"https://music.yandex.ru/artist/359599"},albums:["master","s-petlyoj-na-shee","talk-of-the-devil","maniac-party","pesni-myortvyh","labirint","klassika","rc-cars","33-zhizni","akustika","po-tu-storonu-sna","viii"]},Dc=class extends Rt{constructor(){super(...arguments),this.artist=rx,this.albums=Tg,this.songs=Ag}},zi=new Dc;var ox={id:"trotilovyye-skazki",name:"\u0422\u0440\u043E\u0442\u0438\u043B\u043E\u0432\u044B\u0435 \u0441\u043A\u0430\u0437\u043A\u0438",year:1998,folder:"/artist/shmely/albums/1998_skazki.jpg",songs:[{name:"\u0427\u043E\u0440\u043D\u0430 \u0434\u043E\u0431\u0430"},{name:"\u042F\u0431\u043B\u043E\u0447\u043A\u043E-\u043C\u044F\u0443\u0447\u0438\u043B\u043E"},{name:"\u0421\u0435\u043A\u0441, \u043D\u0430\u0440\u043A\u043E\u0442\u0438\u043A\u0438, \u0441\u0430\u043C\u043E\u0433\u043E\u043D"},{name:"\u041B\u0438\u0445\u043E\u043C\u0430\u043D\u0435 \u043C\u0435\u043D\u0435 \u043Di\u0447"},{name:"\u0410\u0434\u0441\u043A\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"},{name:"\u0417\u0438\u043C\u0430"},{name:"\u0417\u0430 \u0442\u043E\u0431\u043E\u044E"},{name:"\u041D\u0435 \u0445\u043E\u0434\u0438"},{name:"\u0426\u0432\u0438\u043D\u0442\u0430\u0440"},{name:"\u041E\u0440\u0433i\u044F"},"daj-garri"]},Ic=ox;var ix={id:"tulovishche",name:"\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435",year:1998,folder:"/artist/shmely/albums/1998_tulovishe.jpg",songs:[{name:"\u041D\u0435\u0431\u043E (\u0441\u0442\u0438\u0445)"},{name:"\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0431\u043E\u0433"},{name:"\u041B\u0430\u0439 \u0438\u043B\u043B\u044E\u0437\u0438\u0438"},{name:"\u0422\u0440\u0430\u0432\u044B"},{name:"\u041F\u0435\u0440\u0432\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C (\u0441\u0442\u0438\u0445)"},"tulovishchej",{name:"\u042D\u043A\u0437\u043E\u0442\u0438\u043A\u0430"},{name:"\u0413\u043D\u0438\u043B\u043E\u0435 \u043E\u0437\u0435\u0440\u043E"},{name:"\u0416\u0430\u043B\u043E \u0431\u0435\u0439 \u0441\u0430\u0432\u0430\u043B\u044F\u0439"},{name:"\u041B\u0430\u0433i\u0434\u043D\u043E"},"raspyatie",{name:"\u041A\u043E\u0440\u0430\u0431\u043B\u0438\u043A\u0438"},{name:"\u0412\u0435\u0442\u0435\u0440 \u0438 \u0433\u0440\u043E\u043C"},{name:"\u041D\u0435\u043F\u0443\u0442\u0451\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u0431\u0443\u0441"},{name:"\u041C\u044F\u0441\u043D\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"},{name:"\u0413\u0438\u043C\u043D\u043E\u043F\u043E\u0434\u043E\u0431\u043D\u0430\u044F"}]},Cc=ix;var sx={id:"purga",name:"\u041F\u0443\u0440\u0433\u0430",year:1998,folder:"/artist/shmely/albums/1998_purga.jpg",songs:[{name:"\u0410\u0439 \u0434\u0430!"},{name:"\u0413\u0440\u043E\u0437\u0430"},{name:"\u0422\u043E\u0441\u043A\u0430"},{name:"\u041B\u0430\u043A\u0430\u0439 \u043E\u0442\u0440\u0430\u0432\u0443"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435"},{name:"\u0422\u0435\u043D\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B"},{name:"\u041D\u0435\u0432\u0435\u0441\u0451\u043B\u0430\u044F \u0441\u043A\u0430\u0437\u043A\u0430"},{name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442"},{name:"\u0411\u0430\u0440\u044B\u043D\u044F"},{name:"\u041C\u043E\u043B\u043E\u0434\u0430\u044F"},{name:"\u041B\u044E\u0442\u0438\u0439 \u0441\u043Di\u0433"},{name:"\u041B\u043E\u0433\u043E\u0432\u043E"},{name:"\u0411\u0440\u0430\u0433\u0430"},{name:"\u0417\u0430\u043C\u043E\u043A \u0438\u0437 \u0442\u0443\u0447"},{name:"\u0412\u043E\u0434\u0430"},{name:"\u0413\u0443\u0431\u044B - \u044F\u0434"},{name:"\u0411\u0443\u0434\u0442\u043E \u0441\u043A\u0430\u0437\u043A\u0430"}]},Ec=sx;var ax={id:"durackiye-knizhki",name:"\u0414\u0443\u0440\u0430\u0446\u043A\u0438\u0435 \u043A\u043D\u0438\u0436\u043A\u0438",year:1998,folder:"/artist/shmely/albums/1998_knizhki.jpg",streaming:{spotify:"https://open.spotify.com/album/63sm3EX7I90qTqXEFBcUdT",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kgofi2TmxxKfzOrot5dsKipLqRNh1VjsE",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_l16b-hVl6mCOISWOuLJWtDPH5uTbbBoG4",yandexMusic:"https://music.yandex.ru/album/3444884"},songs:["ya-ne-angel",{name:"\u041C\u043E\u0433\u0438\u043B\u044C\u0449\u0438\u043A"},"volosy",{name:"\u0416\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u043D\u043E"},{name:"\u0413\u043E\u0440\u0438, \u043A\u043E\u0441\u0442\u0451\u0440!"},{name:"\u0420\u0435\u0437\u0438\u043D\u043E\u0432\u044B\u0435 \u0434\u0435\u0431\u0440\u0438"},{name:"\u042F\u0437\u0432\u0430 \u043D\u0430 \u0434\u0443\u0448\u0435"},{name:"\u0414\u0443\u0440\u0430\u0446\u043A\u0438\u0435 \u043A\u043D\u0438\u0436\u043A\u0438"},{name:"\u0413\u043E\u0432\u043D\u043E"},{name:"\u041D\u0435 \u0433\u0440\u0443\u0441\u0442\u0438, \u0438 \u0442\u0430\u043A \u0445\u0443\u0451\u0432\u043E"},{name:"\u041F\u044C\u044F\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u043A\u0430"},{name:"\u0418\u043A\u043E\u043D\u0430"},{name:"\u041E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u044F"},{name:"\u041Ci\u0441\u044F\u0446\u044A \u0437 \u043D\u0435\u0431\u0430 \u0433\u0435\u0442\u044C"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430\u044F"},{name:"\u0420\u0443\u0439\u043D\u0435\u0442\u0441\u044F \u043C\u043E\u0437\u043E\u043A"},{name:"\u0412\u0430\u043A\u0445\u0430\u043D\u0430\u043B\u0438\u044F"}]},xc=ax;var ux={id:"petlya-soblazna",name:"\u041F\u0435\u0442\u043B\u044F \u0441\u043E\u0431\u043B\u0430\u0437\u043D\u0430",year:1998,folder:"/artist/shmely/albums/1998_ps_.jpg",songs:[{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0432\u044B\u0439\u0434\u0435\u0442"},{name:"\u0412\u0435\u0441\u043D\u0430 \u043F\u043E\u043A\u043E\u0439\u043D\u0438\u0446\u0430"},{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0413\u0430\u043D\u044C\u0431\u0430"},{name:"\u0410\u043B\u043B\u0438\u043B\u0443\u0439\u0430"},{name:"\u041E\u0431\u0435\u0441\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0430\u0445"},{name:"\u0411i\u0441\u043E\u0432 \u0433\u0430\u0439"},"trahni-nebo","divchina-kulya",{name:"\u0417\u0430\u0432i\u0442\u0430\u0439"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0438\u0441\u043F\u043E\u0432\u0435\u0434\u044C"},{name:"\u0424\u0430\u0448\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B"},{name:"\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A"}]},_c=ux;var lx={id:"zloradostnaya-opuhol",name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C",year:1999,folder:"/artist/shmely/albums/1999_zo.jpg",songs:[{name:"\u0411\u044B\u043B\u0438 \u043C\u044B"},{name:"\u041B\u0435\u0437\u0432\u0438\u0435"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430"},{name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C"},{name:"\u0413\u043B\u0438\u0441\u0442\u044B"},{name:"\u0428\u0435\u0439\u043A \u0448\u0435\u0439\u043A \u0447\u0430 \u0447\u0430 \u0447\u0430"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430"},{name:"\u0421\u043C\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430"},{name:"\u041C\u0443\u0442\u0430\u043D\u0442\u044B"},{name:"\u0414\u0436\u0430\u0433\u0438 \u043C\u0435\u0440\u0442\u0432\u0435\u0435 \u0432\u0441\u0435\u0445 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0410\u043F\u043E\u043A\u0430\u043B\u0438\u043F\u0441\u0438\u0441"},{name:"\u041F\u0435\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"}]},Sc=lx;var cx={id:"vulkanizaciya-dushi",name:"\u0412\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0443\u0448\u0438",year:1999,folder:"/artist/shmely/albums/1999_vd_.jpg",songs:[{name:"\u041A\u0440\u0438\u0436\u0430\u043D\u0430 \u0432\u043E\u0434\u0430"},{name:"\u0412\u0435\u0441\u043D\u044F\u043D\u043A\u0430"},{name:"\u0423 \u0413\u0430\u044E"},{name:"\u0411\u043E\u0433\u0438"},{name:"\u041F\u043E\u043C\u043E\u043B\u0438\u0441\u044C"},{name:"\u041E-\u041E-\u041E"},{name:"\u0414\u0438\u0432\u043E"},{name:"\u041E\u0440\u0433\u0430\u0437\u043C"},"volosy",{name:"\u041Ci\u0441\u044F\u0446\u044A"},{name:"\u0414\u0443\u043D\u044F"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C"}]},Mc=cx;var dx={id:"princessa-bez-trusov",name:"\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0442\u0440\u0443\u0441\u043E\u0432",year:2e3,folder:"/artist/shmely/albums/2000_prinzessa.jpg",songs:[{name:"\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0431\u0435\u0437 \u0442\u0440\u0443\u0441\u043E\u0432"},{name:"\u0418\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0440\u0430\u0442"},{name:"\u041A\u0440\u043E\u043D\u043E\u0441"},{name:"\u0418\u0432\u0430 (\u0441\u0442\u0438\u0448\u043E\u043A)"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C"},{name:"\u0420\u0436\u0430\u0432\u044B\u0439 \u043A\u0438\u0431\u043E\u0440\u0433"},{name:"\u0428\u0443\u043B\u043E\u0432\u044C\u0435"},{name:"\u041F\u043E\u0435\u0431\u0435\u043D\u044C-\u0442\u0440\u0430\u0432\u0430"},{name:"\u0415\u0449\u0451 \u0441\u0442\u0438\u0448\u043E\u043A"},{name:"\u0417\u043E\u043C\u0431\u0438-\u0431\u0443\u0433\u0438"},{name:"\u041F\u043E \u043C\u0430\u0441\u043B\u0443"},{name:"\u041C\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043E\u043A"},{name:"\u0426\u0432\u0435\u0442\u044B"},{name:"\u0421\u0442\u0438\u0448\u043E\u0447\u0435\u043A"},{name:"\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u044F"},{name:"\u0417\u0430\u0440\u0435\u0432\u043E"},{name:"\u041F\u0430\u043D\u043A-\u0434\u0438\u043A\u0442\u0430\u0442\u0443\u0440\u0430"},{name:"\u041A\u0440\u0430\u0445 \u0438 \u0433\u0438\u0431\u0435\u043B\u044C"},{name:"\u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A-\u0443\u0431\u0438\u0439\u0446\u0430 (\u0441\u043A\u0430\u0437\u043A\u0430)"}]},Tc=dx;var fx={id:"bomba-v-ubezhishche",name:"\u0411\u043E\u043C\u0431\u0430 \u0432 \u0443\u0431\u0435\u0436\u0438\u0449\u0435",year:2e3,folder:"/artist/shmely/albums/2000_bomba.jpg",songs:[{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u0422\u0438\u0448\u0438\u043D\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439"},{name:"\u0411\u043E\u043C \u043B\u0431\u043E\u043C"},["polna-suma",{name:["\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043E\u0441\u0442\u0440\u043E\u0432"]}],{name:"\u0422\u0443\u043B\u044F\u0440\u0435\u043C\u0438\u044F"},{name:"\u0412\u0438\u0440\u0443\u0441"},"ya-ne-angel",{name:"\u0412\u0438\u0445\u0440\u044C \u0441\u0442\u0440\u0430\u0441\u0442\u0435\u0439"},{name:"\u0421\u0430\u0434\u0438\u0437\u043C"},{name:"\u0425\u0443\u043B\u0438 \u043F\u0443\u043B\u0438 \u043F\u0440\u0430\u0445\u0443"},{name:"\u0422\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430"},{name:"\u0410\u043D\u0430\u043A\u043E\u043D\u0434\u0430"},{name:"\u0411\u043E\u0440\u043E\u0434\u0430"},"slyoznaya",{name:"\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434"},{name:"\u042F\u0437\u0432\u0430 \u043D\u0430 \u0434\u0443\u0448\u0435"},{name:"Z\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F"}]},Ac=fx;var hx={id:"moshchi",name:"\u041C\u043E\u0449\u0438",year:2e3,folder:"/artist/shmely/albums/2000_moshi.jpg",streaming:{spotify:"https://open.spotify.com/album/1xaIDZcBZLaXtnrsfg1Tbr",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_mcpRAnZyTiyTLoYoZlOifD4WoKEopi6vs",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_mGUbrFjlAsspY8eHWwTpWm_7DAB7C5J1s",yandexMusic:"https://music.yandex.ru/album/3444130"},songs:[{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"},{name:"\u042D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u0425\u0430"},"laboratoriya-altruizma",{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0430-\u0432\u0430\u043C\u043F\u0438\u0440"},{name:"\u0412 \u043C\u044F\u0441\u043D\u043E\u043C \u0446\u0435\u0445\u0443 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A \u0434\u0443\u0448\u0438"},{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u041B\u0443\u043A\u0430\u0432\u044B\u0439 \u0441\u0443\u0438\u0446\u0438\u0434"},{name:"\u041F\u0430\u0434\u0430\u043B\u044C"},{name:"\u0410\u0442\u0435\u0438\u0441\u0442"},{name:"\u0420\u0430\u0434\u0438\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B"},{name:"\u041C\u0430\u0441\u0442\u0443\u0440\u0431\u0430\u0442\u043E\u0440"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432 \u0438 \u041A\u0430\u043C\u043D\u0435\u0431\u043B\u044F\u0434\u043E\u0432"}],info:`
\u0412\u043E\u0442 \u0447\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0428\u043C\u0435\u043B\u0438:

"\u0410\u043B\u044C\u0431\u043E\u043C \u041C\u043E\u0449\u0438, \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u0433\u0434\u0435-\u0442\u043E \u0432 1999 \u0433. \u0438\u043B\u0438 \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 2000 \u0433. (\u043D\u0435 \u043F\u043E\u043C\u043D\u0438\u043C), \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E-\u0434\u0432\u0435, \u0432\u0434\u0432\u043E\u0451\u043C. \u0410\u043B\u044C\u0431\u043E\u043C \u043F\u0438\u0441\u0430\u043B\u0441\u044F \u043D\u0435 \u0432 \u0441\u0430\u043C\u043E\u0435 \u043B\u0443\u0447\u0448\u0435\u0435 \u043D\u0430\u0448\u0435 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435... \u041A\u0430\u043A \u043F\u043E\u043C\u043D\u0438\u0442\u0441\u044F, \u0445\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430 \u0437\u043B\u043E (\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E \u043A\u043E\u043C\u0443) \u0443\u0436\u0430\u0441\u043D\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C, \u041E\u0434\u0438\u043D \u0438\u0437 \u043D\u0438\u0445 - "\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C", \u0430 \u044D\u0442\u043E, \u0442\u0430\u043A \u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C. \u041F\u043E \u0440\u0430\u0437\u043D\u044B\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0441\u0430\u043C\u0438 \u043C\u044B \u0435\u0433\u043E \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u043C. \u0414\u0443\u043C\u0430\u0435\u043C \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0441\u0442\u0438\u043D\u043D\u044B\u043C \u0444\u0430\u043D\u0430\u0442\u0430\u043C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 \u0438\u0437 \u043D\u0435\u0433\u043E \u0443\u0436\u0435 \u0431\u044B\u043B\u0438 \u0432 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u0430\u0445. \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0435\u0441\u0435\u043D \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u0440\u0430\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441 \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C\u0438. \u042D\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044F \u0435\u0449\u0451 \u043D\u0435\u043E\u0442\u043C\u0430\u0441\u0442\u0435\u0440\u0451\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0432\u0443\u0447\u0438\u0442 \u0442\u0438\u0445\u043E".
  `},kc=hx;var px={id:"trahni-nebo",name:"\u0422\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E",year:2e3,folder:"/artist/shmely/albums/2000_nebo.jpg",songs:[{name:"\u041B\u0430\u0439 \u0438\u043B\u043B\u044E\u0437\u0438\u0438"},{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043E\u043B\u043D\u044B\u0448\u043A\u043E"},"tulovishchej",{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0413\u0430\u043D\u044C\u0431\u0430"},{name:"\u0410\u043B\u043B\u0438\u043B\u0443\u0439\u044F"},"raspyatie","trahni-nebo","divchina-kulya",{name:"\u0417\u0430\u0432i\u0442\u0430\u0439 \u0437\u0430\u0447i\u043A\u0430\u0439"},{name:"\u0424\u0430\u0448\u0438\u0441\u0442\u0441\u043A\u0438\u0439 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B"},{name:"\u0422\u0440\u0430\u0432\u044B"}]},Nc=px;var mx={id:"organizm",name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043C",year:2e3,folder:"/artist/shmely/albums/2000_organizm.jpg",songs:["polna-suma",{name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043C"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439"},{name:"\u041F\u0443\u0442\u044C \u043A... (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435"},"pokidaya-mir",["slyoznaya",{name:["\u041B\u0438\u0445\u0430 \u0442\u0430 \u0431\u0435\u0434\u0430"]}],{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u0418\u0432\u043E\u043B\u0433\u043E\u0439"},{name:"\u0413\u0440\u043E\u0437\u0430 (\u041A\u043B\u043E\u0447\u044C\u044F)"},"laboratoriya-altruizma",{name:"\u0427\u0435\u0440\u0435\u043F \u0438 \u043F\u043E\u0434\u0441\u043D\u0435\u0436\u043D\u0438\u043A"},{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"}]},Rc=mx;var gx={id:"spazmy-roka",name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430",year:2001,folder:"/artist/shmely/albums/2001_spazmi.jpg",streaming:{spotify:"https://open.spotify.com/album/28tVBP8rDTC3eLMVzOAZ5m",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_l79--sEsZYpEuVcmBME0YHVr2cHd5B22U",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_noWkxPhjlR4FF4_LZCf6WX1ztDral0UMg",yandexMusic:"https://music.yandex.ru/album/3444133"},songs:["ya-vselennaya",{name:"\u041C\u0430\u043A\u0435\u0442 \u041C\u0438\u0440\u0430 \u0421\u0447\u0430\u0441\u0442\u044C\u044F"},"na-ladoni-planeta",{name:"\u041E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u0432\u0435\u0442, \u043E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u043B\u0435\u0434"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u0434\u0430"},["patologoanatom",{name:["\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C (\u041A\u043B\u043E\u0447\u044C\u044F)"]}],"novaya-religiya",{name:"\u0416\u0434\u0430\u0442\u044C"},{name:"\u041C\u043E\u044F \u043B\u044E\u0431\u0438\u043C\u0430\u044F (\u0411\u0435\u0448\u0435\u043D\u044B\u0439 \u043A\u0430\u0439\u0444)"},{name:"\u041D\u0435\u0432\u0435\u0441\u0451\u043B\u0430\u044F \u0441\u043A\u0430\u0437\u043A\u0430"},"saprofag",{name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430"},["volosy",{name:["\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B"]}],{name:"\u0417\u0430\u0432\u0442\u0440\u0430 \u043D\u0430 \u0432\u044B\u043F\u0438\u0441\u043A\u0443 \u0432 \u0430\u0434 (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0412\u0441\u0451 \u0432\u043E \u0438\u043C\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430"},{name:"\u0411\u043E\u0439"}]},Oc=gx;var yx={id:"risunki-na-dushe",name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435",year:2001,folder:"/artist/shmely/albums/2001_risunki.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79304"},songs:[{name:"Intro"},"skelety",{name:"\u041F\u0443\u0442\u044C \u043A..."},{name:"\u0413\u0440\u043E\u0437\u0430"},"patologoanatom",{name:"\u041F\u043B\u044F\u0448\u0443\u0449\u0438\u0439 \u043A\u0430\u0440\u043B\u0438\u043A"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439"},{name:"\u0417\u0430\u0432\u0442\u0440\u0430 \u043D\u0430 \u0432\u044B\u043F\u0438\u0441\u043A\u0443"},"tulovishchej",{name:"\u041A\u043B\u044E\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043E\u043A"},"laboratoriya-altruizma",{name:"\u0414\u0430\u0439\u0442\u0435 \u0441\u0432\u0435\u0442\u0430"},["tulovishchej",{name:["\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435\u0439 (remix)"]}],{name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435"},["skelety",{name:["\u0421\u043A\u0435\u043B\u0435\u0442\u044B (video edit)"]}],{name:"Outro"}]},Pc=yx;var vx={id:"poshmelye",name:"\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435",year:2002,folder:"/artist/shmely/albums/2002_poshmele.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79307"},songs:["ya-vselennaya",{name:"\u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445"},{name:"\u041E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u0432\u0435\u0442, \u043E\u0433\u043E\u043D\u044C - \u043D\u0430\u0448 \u0441\u043B\u0435\u0434"},"na-ladoni-planeta",{name:"\u0413\u0440\u043E\u0437\u0430"},{name:"\u041F\u043E\u043B\u0435"},"poshmelye",{name:"\u041A\u043B\u043E\u0443\u043D"},{name:"\u041F\u0443\u0442\u044C \u043A..."},"volosy",{name:"\u041A\u0440\u043E\u043D\u043E\u0441"},{name:"\u0422\u0435\u043D\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B"},"skelety","patologoanatom","novaya-religiya",{name:"\u0426\u0432\u0435\u0442\u044B"}],info:`
"\u041F\u041E\u0428\u041C\u0415\u041B\u042C\u0415" - \u0441\u0431\u043E\u0440\u043D\u0438\u043A (2002)
\u042D\u0442\u043E\u0442 \u0441\u0431\u043E\u0440\u043D\u0438\u043A \u043F\u0435\u0441\u0435\u043D \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430 \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0430\u043C\u0438 \u0438\u0445 \u0433\u0440\u0443\u043F\u043F\u044B "\u0428\u041C\u0415\u041B\u0418".
\u0412\u044B\u043F\u0443\u0449\u0435\u043D \u0444\u0438\u0440\u043C\u043E\u0439 Moroz Records \u0432 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435 2002 \u0433\u043E\u0434\u0430. \u0412 \u043D\u0435\u0433\u043E \u0432\u043E\u0448\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 2000-2002 \u0433\u043E\u0434\u043E\u0432.
\u041A\u0440\u043E\u043C\u0435 \u0428\u043C\u0435\u043B\u044F \u0438 \u041B\u0451\u0441\u0430, \u0432 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0435\u0441\u0435\u043D, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B:
\u0421\u043E\u0432\u0430, \u0420\u043E\u0441\u0441, \u0418\u0432\u0430\u043D, A. Waters, \u041C\u0430\u043A\u0441 (\u041A\u0440\u0430\u043D\u0442\u044B), \u0410. \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432.
`},Fc=vx;var wx={id:"negativ-prostranstva",name:"\u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",year:2002,folder:"/artist/shmely/albums/2002_negativ.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79306"},songs:[{name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440"},{name:"\u0412\u0435\u0440\u0430 \u0438 \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u0412\u043E\u043B\u0447\u0438\u0446\u0430"},{name:"\u041D\u0435\u0436\u043D\u043E\u0441\u0442\u044C"},"slyoznaya",{name:"\u041F\u0435\u0440\u0432\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0433\u0440\u0435\u0445"},{name:"\u041B\u0438\u0445\u043E\u0440\u0430\u0434\u0438\u0442 \u043C\u0435\u043D\u044F \u043D\u043E\u0447\u044C"},{name:"\u041D\u0435\u0433\u0430\u0442\u0438\u0432 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430"},{name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0435\u0439\u0441 (\u041A\u043B\u043E\u0447\u044C\u044F)"},{name:"\u0412\u044B\u0441\u043E\u0442\u0430"},{name:"\u041F\u0440\u043E\u0449\u0430\u0439"},{name:"\u0427\u0435\u0440\u0435\u0437 \u043A\u0440\u0430\u0439"},{name:"\u0411\u0440\u0430\u0433\u0430"},{name:"\u0412\u0441\u0451"},{name:"\u0420\u0435\u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440 (Club MIX)"}]},Lc=wx;var bx={id:"agressivnyj-pokoj",name:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439",year:2002,folder:"/artist/shmely/albums/2002_pokoy.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79305"},songs:["bol",{name:"\u0422\u044B \u0441\u043D\u0435\u0433 \u0432 \u043C\u043E\u0435\u0439 \u043F\u0440\u0435\u0438\u0441\u043F\u043E\u0434\u043D\u0435\u0439"},{name:"\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043A\u043E\u0439"},{name:"The First Love"},{name:"\u041F\u043E\u0433\u0430\u0434\u0430\u0439 (new version)"},{name:"\u0420\u0438\u0441\u0443\u043D\u043A\u0438 \u043D\u0430 \u0434\u0443\u0448\u0435 (new version)"},{name:"\u0418\u0441\u043A\u0443\u0448\u0435\u043D\u0438\u0435 (1999)"},"blagodat","maneken",["laboratoriya-altruizma",{name:["\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C\u0430 (new version)"]}],{name:"\u0414\u0435\u043D\u044C \u0421\u0432\u044F\u0442\u043E\u0433\u043E \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430"},{name:"\u041E\u0442\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u0433\u0438"},["slyoznaya",{name:["\u0421\u043B\u0451\u0437\u043D\u0430\u044F (remix)"]}],{name:"\u041B\u0438\u0431\u043E (remix)"},{name:"\u0413\u0440\u043E\u0437\u0430 (remix)"},{name:"\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0439 \u0437\u0430\u043C\u043E\u043A (live 1999)"},{name:"\u041B\u0430\u043A\u0430\u0439 \u043E\u0442\u0440\u0430\u0432\u0443 (live 1999)"}]},jc=bx;var Dx={id:"polna-suma",name:"\u041F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430",year:2003,folder:"/artist/shmely/albums/2003_suma.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79309"},songs:[{name:"\u0417\u0432\u0435\u0440\u044C"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C"},{name:"\u0422\u043E\u0441\u043A\u0430"},{name:"\u0410\u0433\u043E\u043D\u0438\u044F"},{name:"\u041A\u043B\u044F\u043A\u0441\u0430"},"polna-suma","laboratoriya-altruizma",{name:"\u0412\u043E\u0434\u0430"},{name:"\u0421\u0430\u0434\u0438\u0437\u043C"},{name:"\u0420\u0430\u0434\u0438\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B"},{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0451\u0442"},{name:"\u0411\u043E\u043C \u043B\u0431\u043E\u043C"},{name:"\u0422\u0438\u0448\u0438\u043D\u0430 \u0438 \u043F\u043E\u043A\u043E\u0439"},{name:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u0444\u0435\u043A\u0430\u043B\u0438\u0439"},{name:"\u041E\u0431\u043B\u0430\u043A\u0430"},{name:"\u042D\u043F\u0438\u0434\u0435\u043C\u0438\u044F \u0425\u0430"},{name:"\u0413\u043E\u0440\u0438, \u043A\u043E\u0441\u0442\u0451\u0440!"},{name:"\u041A\u0440\u044B\u0448\u0430 \u0433\u043E\u0440\u0438\u0442"},{name:"\u0422\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430"},{name:"\u0421\u0438\u0437\u043E\u0431\u043B\u044E\u0434\u043E\u0432"},{name:"\u0425\u0443\u043B\u0438 \u043F\u0443\u043B\u0438 \u043F\u0440\u0430\u0445\u0443"},{name:"\u0423\u0430-\u0443-\u0443\u0430"}]},Vc=Dx;var Ix={id:"ostanovite-chelovechestvo",name:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043E",year:2003,folder:"/artist/shmely/albums/2003_ostanovite.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79308"},songs:[{name:"\u0410\u0438\u0441\u0442 \u043D\u0430\u0434 \u0438\u043D\u043A\u0443\u0431\u0430\u0442\u043E\u0440\u043E\u043C"},{name:"\u042F \u0432\u0441\u0451 \u043D\u0430\u0440\u0443\u0448\u0438\u043B"},{name:"\u0412 \u043A\u043B\u043E\u0447\u044C\u044F"},{name:"\u0427\u0443\u0436\u043E\u0439"},{name:"\u0428\u0430\u043D\u0441"},{name:"\u041A\u0440\u0430\u0441\u043E\u0442\u0430"},{name:"\u041D\u0430 \u043C\u043E\u0433\u0438\u043B\u0435 \u043B\u044E\u0431\u0432\u0438"},{name:"\u0411\u0438\u043E-\u043C\u043E\u0442\u043E\u0440"},{name:"\u041E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u044F"},{name:"\u041D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430"},{name:"\u041F\u0440\u043E\u0440\u0432\u0451\u043C\u0441\u044F"},{name:"\u0413\u043E\u043B\u043E\u0441-\u043F\u0430\u043B\u0430\u0447"},{name:"\u041E\u043D"},{name:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043E"},{name:"\u041C\u043E\u0439 \u043F\u0443\u0442\u044C"},{name:"\u0412\u0437\u0433\u043B\u044F\u0434 \u0438\u0437\u043D\u0443\u0442\u0440\u0438"}]},Bc=Ix;var Cx={id:"zhazhda",name:"\u0416\u0430\u0436\u0434\u0430",year:2004,folder:"/artist/shmely/albums/2004_zh.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79310"},songs:[{name:"\u0416\u0430\u0436\u0434\u0430"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430\u044F (\u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u044F\u044F)"},{name:"\u0421\u0435\u0440\u0430"},{name:"\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u0437\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u0430\u044F)"},{name:"\u0422\u0440\u0443\u0434\u043D\u044B\u0439 \u0440\u0435\u0431\u0451\u043D\u043E\u043A (\u0448\u043A\u043E\u043B\u044C\u043D\u0430\u044F)"},["ya-ne-angel",{name:["\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B (\u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)"]}],{name:"\u0414\u0438\u0441\u043A\u043E\u0442\u0435\u043A\u0430 (\u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u044F\u044F)"},{name:"\u042F \u043E\u0431\u0435\u0440\u043D\u0443\u0441\u044C \u043E\u0433\u043D\u0451\u043C (\u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F)"},{name:"\u041A\u043E\u0440\u043E\u0431\u0430\u0441"}],info:`
\u0412\u043D\u0435\u043F\u043B\u0430\u043D\u043E\u0432\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C (\u0442\u0438\u0440\u0430\u0436 100 \u0448\u0442.).
\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201DSka'n'Dall\u201D \u0433. \u0420\u043E\u0432\u043D\u043E. 2004 \u0433.

\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201D\u0428\u041C\u201D

\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B - \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432.


"\u0412 \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043E\u0448\u043B\u0438 \u043F\u0435\u0441\u043D\u0438 \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u043D\u043D\u0438\u0435, \u0437\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435, \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0443\u0436\u0435 \u0438\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0445 \u0440\u0430\u043D\u0435\u0435 \u0438 \u043D\u043E\u0432\u044B\u0435..."
  `},$c=Cx;var Ex={id:"ten-serdca",name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430",year:2004,folder:"/artist/shmely/albums/2004_ten.jpg",streaming:{spotify:"https://open.spotify.com/album/7fsVsr0pCmCEpyQ9o2jMXW",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_k_3MQ5DeK39QrTGigpDgrsyMK04F16W-c",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_l8lFy44LN0_BS2JYDee8CyKtCkd3xmfL0",yandexMusic:"https://music.yandex.ru/album/79311"},songs:[{name:"\u0414\u043B\u044F \u043D\u0435\u0451 \u043E\u0434\u043D\u043E\u0439"},{name:"\u0411\u0435\u0439, \u043A\u043E\u043B\u043E\u043A\u043E\u043B!"},{name:"\u041D\u0430\u043F\u0440\u043E\u043B\u043E\u043C"},{name:"\u0412\u043E\u043B\u0447\u044C\u044F \u044F\u0433\u043E\u0434\u0430"},{name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430"},{name:"\u041B\u0438\u0432\u0435\u043D\u044C \u0441\u043B\u0451\u0437"},{name:"\u0412\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u0443\u0448"},{name:"\u041A\u0430\u0440\u0443\u0441\u0435\u043B\u044C"},{name:"\u0422\u044C\u043C\u0430"},{name:"\u041A\u043E\u0440\u043C \u0434\u043B\u044F \u0434\u0443\u0448\u0438"},{name:"\u0412\u043C\u0435\u0441\u0442\u0435 \u0443\u043C\u0435\u0440\u0435\u0442\u044C"},{name:"\u0421\u0432\u043E\u0431\u043E\u0434\u0430"},{name:"\u0421\u043F\u0438\u0434\u0432\u0435\u0439"},{name:"\u0412\u043E\u043B\u0447\u044C\u044F \u044F\u0433\u043E\u0434\u0430 (remix)"},{name:"\u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430 (remix)"}],info:`
\u041B\u0451\u0441 (\u041B\u0451\u043B\u044F) - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430; \u0428\u043C\u0435\u043B\u044C (\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440) - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043C\u0443\u0437\u044B\u043A\u0430, \u0442\u0435\u043A\u0441\u0442\u044B; \u0420\u043E\u0441\u0441 (\u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432) - \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u0411\u0430\u0437\u0438\u043B\u0438\u043E (\u0418\u0433\u043E\u0440\u044C) - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u041B\u0430\u0440\u0441 (\u042E\u0440\u0430) - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B.
\u041F\u0435\u0441\u043D\u044F \u201D\u0414\u043B\u044F \u043D\u0435\u0451 \u043E\u0434\u043D\u043E\u0439\u201D \u043F\u043E\u0441\u0432\u044F\u0449\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0437\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0443\u0448\u0435\u0434\u0448\u0435\u043C\u0443 \u0438\u0437 \u0436\u0438\u0437\u043D\u0438 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u0443 - \u041D\u0438\u043A\u043E\u043B\u0430\u044E \u0411\u044B\u043A\u043E\u0432\u0443, \u0438 \u0434\u0440\u0443\u0433\u0438\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0443\u0436\u0435 \u043D\u0435\u0442 \u0432 \u0436\u0438\u0432\u044B\u0445.
\u0417\u0430\u043F\u0438\u0441\u044C, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433 \u0438 \u0440\u0435\u043C\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 - \u0420\u043E\u0441\u0441. \u0417\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043D\u0430 \u201DSHMELY RECORDS\u201D \u043D\u043E\u044F\u0431\u0440\u044C 2003 \u0433. - \u043C\u0430\u0440\u0442 2004 \u0433. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0442\u0438\u0438 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u201D\u0422\u0415\u041D\u0418\u041F\u201D \u0410. \u0415\u0440\u043C\u0430\u043A\u043E\u0432\u044B\u043C. \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0430 \u201DA.W. studio\u201D. \u0421\u043A\u0440\u0438\u043F\u043A\u0438 \u0432 \u043F\u0435\u0441\u043D\u0435 \u201D\u0422\u0415\u041D\u042C \u0421\u0415\u0420\u0414\u0426\u0410\u201D - \u041C\u0430\u0440\u044C\u044F\u043D\u0430 \u041F\u0438\u0441\u043A\u0430\u0440\u0451\u0432\u0430 (\u0414\u043E\u0441). \u041A\u043B\u0438\u043F - \u0418\u0433\u043E\u0440\u044C \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0438\u0439.
  `},Hc=Ex;var xx={id:"lyod",name:"\u041B\u0451\u0434",year:2005,folder:"/artist/shmely/albums/2005_lyod.jpg",streaming:{spotify:"https://open.spotify.com/album/5pL8KLhjDalWkja1X7dKz9",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nXvdHxMP-aZmghtnw-vMDkh7MmjhHzMSc",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lNKOLD4k7WdPQm4mG-38CMnTtmV_Dd-rc",yandexMusic:"https://music.yandex.ru/album/79313"},songs:[{name:"\u041E\u0441\u0438\u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043B"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u043F\u0442\u0438\u0446\u0430"},{name:"\u0421\u043E\u043B\u043D\u0446\u0435 \u043C\u043E\u0451"},{name:"\u041B\u044E\u0431\u043E\u0432\u044C"},{name:"\u041F\u043E\u0432\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0438\u0446\u0430 \u0441\u043D\u043E\u0432"},{name:"\u0418\u0434\u0438"},{name:"\u041F\u043E\u043B\u044B\u043D\u044C"},{name:"\u041B\u0451\u0434"},{name:"\u0428\u0443\u0442\u043A\u0430"},{name:"\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u043E\u043B\u0433\u0430"},{name:"\u041D\u0430 \u0442\u043E\u043C \u0441\u0432\u0435\u0442\u0435 \u043C\u044B \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043C\u0441\u044F \u0432\u043D\u043E\u0432\u044C"},{name:"\u041E\u0433\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u0451\u0437\u044B \u0433\u0438\u0435\u043D\u044B"},{name:"\u0414\u0430\u0432\u0438\u0442 \u043D\u0435\u0431\u043E"}],info:`
\u041B\u0451\u0441 (\u041B\u0451\u043B\u044F) - \u0432\u043E\u043A\u0430\u043B, \u043C\u0443\u0437\u044B\u043A\u0430; \u0428\u043C\u0435\u043B\u044C (\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440) - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043C\u0443\u0437\u044B\u043A\u0430, \u0442\u0435\u043A\u0441\u0442\u044B; \u0420\u043E\u0441\u0441 (\u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432) - \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u0411\u0430\u0437\u0438\u043B\u0438\u043E (\u0418\u0433\u043E\u0440\u044C) - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u044D\u043A-\u0432\u043E\u043A\u0430\u043B; \u041C\u0430\u0440\u0442\u044B\u043D (\u0410\u043D\u0434\u0440\u0435\u0439) - \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B.
\u0410\u043B\u044C\u0431\u043E\u043C \u0437\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u201DShmely rec.\u201D \u0438 \u043D\u0430 \u0441\u0442\u0443\u0434\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u201D\u0422\u0435\u043D\u0438\u043F\u201D (095) 963-71-49. \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433 - \u0420\u043E\u0441\u0442\u0438\u0441\u043B\u0430\u0432 \u0429\u0435\u0440\u0431\u0430\u0442\u043A\u043E (\u0420\u043E\u0441\u0441).
\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0437\u0430\u043F\u0438\u0441\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u043E\u043A\u0430\u043B\u043E\u0432 \u0438 \u0434\u0432\u0443\u0445 \u043F\u0435\u0441\u0435\u043D; \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430 \u041A\u043E\u0437\u043B\u043E\u0432\u0430 - \u0431\u0430\u043B\u0430\u043B\u0430\u0439\u043A\u0430; \u041E\u043B\u0435\u0433\u0430 \u0422\u0443\u0440\u0442\u044B\u0433\u0438\u043D - \u0433\u0438\u0442\u0430\u0440\u0430; \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0437\u0430\u043D\u0446\u0435\u0432 - \u0433\u0438\u0442\u0430\u0440\u0430, \u0431\u0430\u0441, \u0437\u0430\u043F\u0438\u0441\u044C.
  `},Uc=xx;var _x={id:"vethij-sbornik",name:"\u0412\u0435\u0442\u0445\u0438\u0439 \u0441\u0431\u043E\u0440\u043D\u0438\u043A",year:2005,folder:"/artist/shmely/albums/2005_vs.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79303"},songs:[{name:"\u041F\u043E\u043C\u043E\u043B\u0438\u0441\u044C"},{name:"\u0423 \u0413\u0430\u044E"},{name:"\u041A\u0440\u0438\u0436\u0430\u043D\u0430 \u0432\u043E\u0434\u0430"},{name:"\u0414\u0438\u0432\u043E"},{name:"\u0412\u0435\u0441\u043D\u044F\u043D\u043A\u0430"},{name:"\u041Ci\u0441\u044F\u0446\u044A"},{name:"\u041E-\u041E-\u041E"},{name:"\u041A\u0430\u043A \u043D\u0430 \u043F\u043B\u0430\u0445\u0435 \u0441\u0432\u044F\u0442\u043E\u0439"},{name:"\u0421\u043C\u0435\u0440\u0442\u044C"},{name:"\u0412\u044C\u044E\u0433\u0430"},{name:"\u0414\u0443\u043D\u044F"},{name:"\u0428\u0443\u043B\u043E\u0432\u044C\u0435"},{name:"\u041F\u0441\u0438\u0445\u043E\u0437"},{name:"\u0421\u043F\u0430\u0437\u043C\u044B \u0440\u043E\u043A\u0430"},{name:"\u0417\u0430\u0432i\u0442\u0430\u0439"},{name:"\u041E\u0431\u0435\u0441\u0441\u0438\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0430\u0445"},"saprofag"]},zc=_x;var Sx={id:"vosem-zhenshchin-na-raduge",name:"\u0412\u043E\u0441\u0435\u043C\u044C \u0436\u0435\u043D\u0449\u0438\u043D \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435",year:2005,folder:"/artist/shmely/albums/2005_8.jpg",streaming:{spotify:"https://open.spotify.com/album/3XCE0DFw3NkkTXcIXQUBUG",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_n5v0d9QAPVVjafh936OD9bKmlrdjXaJG0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_k78_d1RVxFP6B04ZnTvobzmfJMMYLNN7o",yandexMusic:"https://music.yandex.ru/album/79312"},songs:[{name:"\u0412\u043F\u0435\u0440\u0435\u0434\u0438"},{name:"\u041F\u043E\u0445\u043E\u0440\u043E\u043D\u044B \u043B\u044E\u0431\u0432\u0438"},{name:"\u041F\u043E\u043B\u043D\u043E\u043B\u0443\u043D\u0438\u0435"},{name:"\u0412\u043E\u0441\u0435\u043C\u044C \u0436\u0435\u043D\u0449\u0438\u043D \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435"},{name:"\u041C\u0435\u043B\u044C\u043F\u043E\u043C\u0435\u043D\u0430"},"ya-ne-angel",{name:"\u0418\u0432\u043E\u043B\u0433\u0430"},{name:"\u0421\u043E\u043B\u043D\u0446\u0435 \u0432\u0430\u043C\u043F\u0438\u0440\u0430"},{name:"\u0425\u0443\u0434\u043E\u0436\u043D\u0438\u043A"},{name:"\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0441\u043D\u0430"},{name:"\u0420\u0438\u0442\u0443\u0430\u043B \u0441\u043E\u0436\u0436\u0435\u043D\u0438\u044F \u043A\u0443\u043A\u043E\u043B"},{name:"\u0413\u043B\u043E\u0442\u043E\u043A"},{name:"\u0421\u0442\u043E\u043D \u043E\u043B\u0438\u0446\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F"},{name:"\u0413\u0434\u0435 \u0435\u0441\u0442\u044C \u0442\u044B"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0431\u0430\u0431\u043E\u0447\u043A\u0430"},{name:"\u0420\u0430\u0434\u0443\u0433\u0430 \u043D\u0430\u0434 \u0431\u0435\u043D\u0437\u0438\u043D\u043E\u0432\u043E\u0439 \u043B\u0443\u0436\u0435\u0439"}],info:`
\u041B\u0401\u0421 - \u0432\u043E\u043A\u0430\u043B, \u0445\u043E\u0440\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u0442\u0438\u0438, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
\u0428\u041C\u0415\u041B\u042C - \u0432\u043E\u043A\u0430\u043B, \u0431\u0430\u0441, \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u043F\u0430\u0440\u0442\u0438\u0438 \u0443\u0434\u0430\u0440\u043D\u044B\u0445, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
A. WATERS - \u0433\u0438\u0442\u0430\u0440\u0430, \u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440\u044B, \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435, \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430
\u0412 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435: \u0418\u0432\u0430\u043D \u0422\u0438\u043C\u043E\u0448\u0435\u043D\u043A\u043E - \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430, \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0430; \u0414\u043E\u0441 - \u0441\u043A\u0440\u0438\u043F\u043A\u0430; \u041F\u0430\u0432\u0435\u043B \u0428\u0443\u0432\u0430\u0435\u0432 - \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430; \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0415\u0440\u043C\u0430\u043A\u043E\u0432 - \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u043E\u043A\u0430\u043B\u043E\u0432
"A.W.Studio", \u0441\u0442\u0443\u0434\u0438\u044F "\u0422\u0415\u041D\u0418\u041F" 2005 \u0433.
  `},Wc=Sx;var Mx={id:"pugovica",name:"\u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430",year:2006,folder:"/artist/shmely/albums/2006_pugovica.jpg",streaming:{yandexMusic:"https://music.yandex.ru/album/79314"},songs:["intro",{name:"\u041F\u0443\u0433\u043E\u0432\u0438\u0446\u0430"},{name:"\u0410\u043D\u0433\u0435\u043B 13"},{name:"\u0421\u0442\u0440\u0438\u043F\u0442\u0438\u0437 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0434\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F"},{name:"\u041C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441"},"gilotina","zver","renessans","antiromantika",{name:"\u0425\u043E\u0434\u0438\u0442 \u0447\u0451\u0440\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u043B\u0435\u0432\u0430"},{name:"\u0412\u0430\u043B\u044C\u0441 \u0432\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u044B\u0445 \u0432\u043E\u043B\u043D"},{name:"\u041A\u0430\u0442\u0451\u043D\u043A\u0430"},{name:"\u041C\u0438\u0440 - \u043A\u043E\u043C\u0435\u0434\u0438\u044F"},"sudorogi"],info:`
\u0421\u043E\u043B\u044C\u043D\u044B\u0439 \u0430\u043B\u044C\u0431\u043E\u043C \u041B\u0451\u0441\u0430 \u0438 \u0428\u043C\u0435\u043B\u044F \u041F\u0423\u0413\u041E\u0412\u0418\u0426\u0410
\u0418\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043B\u0441\u044F \u043A\u0430\u043A \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439. \u041D\u043E \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F \u0431\u044B\u043B\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430. \u0412 \u043D\u0435\u0433\u043E \u0432\u043E\u0448\u043B\u0438 \u0442\u0430\u043A\u0436\u0435 \u043F\u0435\u0441\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 Lyolya & Shmel'. \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u0432 \u0445\u043E\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u0438\u043D\u044F\u043B \u0443\u0447\u0430\u0441\u0442\u0438\u0435 Alan Waters. \u0422\u0430\u043A \u0447\u0442\u043E \u044D\u0442\u043E\u0442 \u0430\u043B\u044C\u0431\u043E\u043C \u0432\u043F\u043E\u043B\u043D\u0435 \u043C\u043E\u0436\u043D\u043E \u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u043E\u0439 \u0428\u041C \u0438 AW, \u0435\u0441\u043B\u0438 \u043D\u0435 \u0431\u0440\u0430\u0442\u044C \u0432 \u0441\u0447\u0451\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u043F\u0435\u0441\u0435\u043D.
  `},Gc=Mx;var Tx={id:"ya-vernus-k-tebe",name:"\u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u043A \u0442\u0435\u0431\u0435",year:2006,folder:"/artist/shmely/albums/2006_vernus.jpg",songs:[{name:"\u0416\u0434\u0438 \u043C\u0435\u043D\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u0447\u044C"},{name:"\u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445"},{name:"\u0412\u044C\u044E\u0433\u0430"},"laboratoriya-altruizma",{name:"\u0413\u0440\u043E\u0437\u0430"},"biomekhanika",{name:"\u041A\u043B\u043E\u0443\u043D \u0443\u043C\u0435\u0440"},"bol","pokidaya-mir",{name:"\u0412\u0441\u0435 \u043C\u0435\u0447\u0442\u044B \u0441\u0431\u044B\u0432\u0430\u044E\u0442\u0441\u044F"},{name:"\u0414\u0440\u0430\u043C\u0430"},{name:"\u042D\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440"},{name:"\u0414\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F"}],info:`
\u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u0432 \u0438 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u0432, \u0437\u0434\u0435\u0441\u044C \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u0440\u0435\u0448\u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0436\u0438\u0432\u044B\u0435 \u0443\u0434\u0430\u0440\u043D\u044B\u0435, \u0447\u0442\u043E, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u043E\u0442\u0440\u0430\u0437\u0438\u043B\u043E\u0441\u044C \u043D\u0430 \u043E\u0431\u0449\u0435\u043C \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B. \u0412\u043E \u043C\u043D\u043E\u0433\u043E\u043C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043D\u043E\u0432\u043E\u043C\u0443 \u0432\u0442\u043E\u0440\u043E\u043C\u0443 \u0433\u0438\u0442\u0430\u0440\u0438\u0441\u0442\u0443 \u0413\u043E\u043B\u043B\u0430\u043D\u0434\u0446\u0443 \u0441\u0430\u0443\u043D\u0434 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0442\u044F\u0436\u0435\u043B\u0438\u043B\u0441\u044F, \u0433\u0438\u0442\u0430\u0440\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u0435\u0432\u0443\u0442 \u0438 \u0440\u0430\u0437\u0434\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442 \u043C\u043E\u0449\u044C\u044E \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u0430\u043B\u044C\u0431\u043E\u043C\u0430. \u0422\u0430\u043A\u043E\u0433\u043E \u043C\u043E\u0449\u043D\u043E\u0433\u043E \u0437\u0432\u0443\u043A\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0422\u0435\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430.
\u041F\u043E \u0441\u0443\u0442\u0438 \u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u043A \u0442\u0435\u0431\u0435... \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u043C, \u0430 \u0441\u0431\u043E\u0440\u043D\u0438\u043A\u043E\u043C \u0438\u0437 \u043A\u043E\u0440\u043E\u043D\u043D\u044B\u0445 \u0436\u0438\u0432\u044B\u0445 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B, \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043D\u043E\u0432\u043E, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0430\u0440\u044B \u043D\u043E\u0432\u044B\u0445 \u043F\u0435\u0441\u0435\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u043F\u0440\u043E\u0447\u0435\u043C, \u043D\u0435 \u0443\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u0432 \u0445\u0438\u0442\u043E\u0432\u043E\u0441\u0442\u0438 \u0441\u0442\u0430\u0440\u044B\u043C \u043F\u0435\u0441\u043D\u044F\u043C. \u0417\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u043B\u043E\u043D\u043D\u0438\u043A\u0438 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u0430 \u043D\u0430\u0439\u0434\u0443\u0442 \u0442\u0430\u043A\u0438\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043A\u0430\u043A \u0411\u043E\u043B\u044C, \u0413\u0440\u043E\u0437\u0430, \u0410\u043D\u0433\u0435\u043B\u044B \u0432 \u0434\u0432\u0435\u0440\u044F\u0445 \u0438 \u0434\u0430\u0436\u0435 \u0442\u0430\u043A\u0443\u044E \u0434\u0440\u0435\u0432\u043D\u044E\u044E \u043F\u0435\u0441\u043D\u044E \u043A\u0430\u043A \u0412\u044C\u044E\u0433\u0430. \u041A \u043C\u0438\u043D\u0443\u0441\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043D\u0435\u0441\u0442\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437\u043C\u044B\u0442\u044B\u0439 \u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0436\u0438\u0432\u043E\u0439 \u0437\u0432\u0443\u043A, \u043F\u043E\u0440\u043E\u0439, \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0430\u043B\u044C\u0431\u043E\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043D\u044F\u0442\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043D\u0438\u043A\u043E\u043C, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u0432\u0440\u0430\u0437\u0443\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0431\u043E\u043D\u0443\u0441\u044B \u0432 \u0432\u0438\u0434\u0435 \u043F\u0435\u0441\u0435\u043D \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0414\u0440\u0430\u043C\u0430\u0442\u0443\u0440\u0433\u0438\u044F.
  `},Yc=Tx;var Ax={id:"koshkiny-obidy",name:"\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B",year:2007,folder:"/artist/shmely/albums/2007_obidy.jpg",streaming:{spotify:"https://open.spotify.com/album/4GUxH5Jfgjt8as9HOTgert",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_lR7Pe58N1QAhRwvosJkNnfAnnm1vtxoS0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lDcR1z3lQhYexnJx3XtUCozmhSDzgbLuw",yandexMusic:"https://music.yandex.ru/album/3444128"},songs:[{name:"\u0423\u0445\u043E\u0434\u0438"},{name:"\u0427\u0435\u0440\u0435\u043F. \u0421\u043B\u0451\u0437\u044B."},{name:"\u041A\u043E\u0448\u043A\u0438\u043D\u044B \u043E\u0431\u0438\u0434\u044B"},{name:"\u041F\u0430\u043D\u0442\u043E\u043C\u0438\u043C\u0430"},{name:"\u041C\u0435\u0447"},{name:"\u0420\u0430\u0432\u043D\u043E\u0434\u0443\u0448\u043D\u043E"},{name:"\u0417\u043B\u043E \u0440\u0435\u043A\u0438"},{name:"\u041B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0438\u0445\u043E\u0434"},{name:"\u0416\u0435\u0440\u0442\u0432\u0430"},{name:"\u0421\u0443\u0435\u0442\u0430"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430 \u043A \u043C\u043E\u0440\u044E"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u043B\u0435\u0442\u0443\u0447\u0430\u044F \u043C\u044B\u0448\u044C"},{name:"\u0417\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u043E\u043C (Shado News)"},{name:"La Rencontre (Steve Love)"}],info:`
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
  `},qc=Ax;var kx={id:"karamelnyye-strahi",name:"\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438",year:2008,folder:"/artist/shmely/albums/2008_strahi.jpg",streaming:{spotify:"https://open.spotify.com/album/7biUa81AdYs3MZ44VKMJXr",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_mP9ymhFypJA4WYW-baAVJ0yKUwGO0-M8g",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nXeF2ClIBVJ0TsyEbRNV7FoJFjjtssJUY",yandexMusic:"https://music.yandex.ru/album/3444127"},songs:[{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u0432 \u0441\u0435\u0440\u043E\u043C"},{name:"\u0421\u0432\u0430\u0434\u044C\u0431\u044B \u043D\u0435 \u0431\u0443\u0434\u0435\u0442"},{name:"\u041C\u0430\u043C\u0430"},{name:"\u041D\u0435\u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435 \u0441\u043D\u044B (\u0441\u0442\u0438\u0445)"},{name:"\u041A\u043E\u043B\u044B\u0431\u0435\u043B\u044C\u043D\u0430\u044F+"},{name:"\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0445\u0438"},{name:"\u0420\u0430\u043D\u044B"},{name:"\u042F \u0442\u0435\u0431\u044F \u043B\u044E\u0431\u043B\u044E"},{name:"\u0417\u043C\u0435\u044F \u044D\u0439\u0444\u043E\u0440\u0438\u044F"},{name:"\u042F \u0431\u0443\u0434\u0443 \u0436\u0438\u0442\u044C"},{name:"\u041D\u0435\u0440\u0432\u044B"},{name:"\u041B\u0438\u0440\u0438\u043A\u0430"},{name:"\u0426\u0432\u0435\u0442 \u0434\u043E\u0436\u0434\u044F (bonus track)"},{name:"\u0412 \u0436\u0438\u0432\u044B\u0445 \u0438\u0433\u0440\u0430\u044E\u0442 \u043C\u0435\u0440\u0442\u0432\u0435\u0446\u044B (bonus track)"}]},Zc=kx;var Nx={id:"moskovskaya-yarmarka-udovolstvij",name:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u044F\u0440\u043C\u0430\u0440\u043A\u0430 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0439",year:2009,folder:"/artist/shmely/albums/2009_myau.jpg",streaming:{spotify:"https://open.spotify.com/album/0wzOwUeEa3fVPI77pJRK8E",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_loV5x6XOgMrmUH5w9d1IlTiuF_jGr3ll8",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nH21z5pDqYVpk4W06KePL0KE-pMCeRVCw",yandexMusic:"https://music.yandex.ru/album/3444131"},songs:[{name:"\u0412\u0441\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C"},{name:"\u0414\u0435\u0432\u043E\u0447\u043A\u0430 \u0441 \u0447\u0451\u0440\u043D\u044B\u043C\u0438 \u0431\u0430\u043D\u0442\u0438\u043A\u0430\u043C\u0438"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0442\u0435\u043D\u044C"},{name:"\u0416\u0451\u043B\u0443\u0434\u0438"},{name:"\u041B\u044E\u0431\u043E\u0432\u044C \u0438\u0437 \u0441\u0442\u0435\u043A\u043B\u0430"},{name:"\u041B\u0430\u0441\u043A\u0430"},{name:"\u041A\u0440\u0438\u0437\u0438\u0441"},{name:"\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u044F\u0440\u043C\u0430\u0440\u043A\u0430 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0439"},{name:"\u041F\u0438\u0440"},{name:"\u0414\u0432\u0435 \u0441\u0442\u043E\u043B\u0438\u0446\u044B"},{name:"\u0411\u0440\u044E\u0445\u043E"},{name:"\u0417\u043E\u044F"},{name:"\u0413\u0434\u0435? (bonus track)"},{name:"\u0421 \u041D\u043E\u0432\u044B\u043C \u0433\u043E\u0434\u043E\u043C (bonus track)"},{name:"\u041C\u043B\u0435\u0447\u043D\u0430\u044F \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u044F (bonus track)"}]},Qc=Nx;var Rx={id:"mekhanicheskaya-balerina",name:"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430",year:2010,folder:"/artist/shmely/albums/2010_balerina.jpg",streaming:{spotify:"https://open.spotify.com/album/0AoYg8ddVNIoismWBYv7jp",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_lKAK6qxtulNpigAsSzglJMTDsX86CWRZg",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_kAfpmxC-5vpT_zMwug5HcuXsnFi4l41bo",yandexMusic:"https://music.yandex.ru/album/3444129"},songs:[{name:"\u041C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u043B\u0435\u0440\u0438\u043D\u0430"},{name:"\u041B\u044E\u0434\u0438"},{name:"\u041A\u0430\u043A\u043E\u0444\u043E\u043D\u0438\u044F \u0441\u0435\u0440\u0434\u0435\u0446"},{name:"\u0412\u0435\u0449\u0438\u0439 \u0441\u043E\u043D"},{name:"\u041F\u0440\u0451\u0442? \u0422\u0430\u043A \u043F\u0440\u0438!"},{name:"\u0416\u0433\u0438"},{name:"\u041B\u044B\u0441\u0430\u044F \u0433\u043E\u0440\u0430"},{name:"\u041D\u0435\u0431\u043E \u043F\u0440\u043E\u0442\u0438\u0432"},{name:"\u041A\u043E\u0442\u0435\u0439\u043A\u0430 \u043D\u0430 \u0442\u0440\u0451\u0445 \u043D\u043E\u0436\u043A\u0430\u0445"},{name:"\u0421\u043D\u043E\u0432\u0430 \u043F\u0440\u043E \u043B\u044E\u0431\u043E\u0432\u044C, \u0431\u043B\u0438\u043D"},{name:"\u0426\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C"},{name:"\u041A\u043E\u043B\u044B\u0431\u0435\u043B\u044C\u043D\u0430\u044F++"},{name:"\u0410\u0435\u043B\u044C-\u0410\u0443\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430-\u0438\u0433\u0440\u0430 (bonus track)"}]},Kc=Rx;var Ox={id:"toplivo",name:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E",year:2010,folder:"/artist/shmely/albums/2010_toplivo.jpg",streaming:{spotify:"https://open.spotify.com/album/0frmw2fWFkFtuoeobgciN8",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kkufNdmy_VwLed5KlwFD4q4LfGwmPF8JU",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nFcLyMsmp6FHj0wt6J3w--1qXcmgyX_xY",yandexMusic:"https://music.yandex.ru/album/3444135"},songs:[{name:"\u0422\u043E\u043F\u043B\u0438\u0432\u043E-\u0436\u0438\u0437\u043D\u044C"},{name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u0438 \u0442\u044B"},{name:"\u041F\u0430\u0440\u0443\u0441\u0430"},{name:"\u0416\u0435\u043D\u0449\u0438\u043D\u0430 \u0437\u0430 \u0440\u0443\u043B\u0451\u043C"},{name:"\u0427\u0435\u0440\u0451\u043C\u0443\u0445\u0430"},{name:"\u041C\u0435\u043B\u0430\u043D\u0445\u043E\u043B\u0438\u044F"},{name:"\u041B\u0430\u0441\u043A\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0434\u0435\u0446"},{name:"\u041D\u0430\u0439\u0434\u0438..."},{name:"\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0435\u0447\u0442\u044B"},{name:"\u0425\u0432\u043E\u0440\u044C"},{name:"\u0414\u043E\u043A\u0442\u043E\u0440 \u041C\u043E\u0442\u043E\u0440\u0444\u0438\u043B"},{name:"\u041D\u0435\u0444\u0442\u044C \u0410\u043B\u043B\u0438\u043B\u0443\u0439\u044F"},{name:"\u0425\u043E\u0440\u043E\u0432\u043E\u0434"},{name:"\u041F\u043B\u044E\u0448\u0435\u0432\u044B\u0435 \u0437\u043E\u043C\u0431\u0438"},{name:"\u0422\u0440\u0443\u043D\u0430 \u043D\u0430 \u043A\u043E\u043B\u0451\u0441\u0430\u0445"},{name:"\u0411\u043E\u0433 \u043B\u044E\u0431\u0438\u0442 \u0441\u0435\u0431\u044F"}]},Jc=Ox;var Px={id:"cekh-po-reabilitacii-paranoikov",name:"\u0426\u0435\u0445 \u043F\u043E \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043D\u043E\u0438\u043A\u043E\u0432",year:2011,folder:"/artist/shmely/albums/2010_crp.jpg",streaming:{spotify:"https://open.spotify.com/album/74KcaQJrAjhzeHvW6rZUIQ",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nvSuftR3G7q_K8Vs-fiCNpZl3ElyIU9aI",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_mPPAXZrdGJIx_q2kUTz6POPoJdG26koUc",yandexMusic:"https://music.yandex.ru/album/3444136"},songs:[{name:"\u0421\u0432\u0435\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F"},{name:"\u041E\u0442\u0432\u0430\u043B\u0438, \u043C\u043E\u044F \u0447\u0435\u0440\u0435\u0448\u043D\u044F"},{name:"\u0411\u044B\u043B\u0438 \u043C\u044B (new version)"},{name:"\u042F \u0445\u043E\u0447\u0443 \u0431\u044B\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u043E\u043C"},{name:"\u041A\u0430\u0442\u0451\u043D\u043A\u0430 (new version)"},{name:"\u0426\u0435\u0445 \u043F\u043E \u0440\u0435\u0430\u0431\u0438\u043B\u0438\u0442\u0430\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043D\u043E\u0438\u043A\u043E\u0432"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430-2 (\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435)"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430 (new version)"},{name:"\u0417\u0430\u0433\u043E\u0432\u043E\u0440\u043A\u0430"},{name:"\u041F\u0430\u043D\u0438\u043A\u0430 (\u0438\u0437 \u0446\u0438\u043A\u043B\u0430 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438)"},{name:"\u041F\u043E\u0447\u0442\u0430"},{name:"\u0425\u0430\u043B\u044F\u0432\u0430 (\u0438\u0437 \u0446\u0438\u043A\u043B\u0430 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438)"}]},Xc=Px;var Fx={id:"teatr-urodov",name:"\u0422\u0435\u0430\u0442\u0440 \u0443\u0440\u043E\u0434\u043E\u0432",year:2011,folder:"/artist/shmely/albums/2011_teatr.jpg",streaming:{spotify:"https://open.spotify.com/album/40ou3ofmt60WN6Z1LXpF0p",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kziusKHBqOaVCF3vKxL1PcshlkPV1UU5U",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_liV01e1JDnannkLWqdmM7BJv613aPj9Ws",yandexMusic:"https://music.yandex.ru/album/3444134"},songs:[{name:"\u0423\u043B\u0451\u0442"},{name:"\u0421\u0430\u043D\u0438\u0442\u0430\u0440\u043A\u0430"},{name:"\u0422\u0430\u0442\u0443 \u043D\u0430 \u043F\u043E\u043F\u0435"},{name:"\u041C\u0430\u044D\u0441\u0442\u0440\u043E \u0443\u0436\u0430\u0441\u043E\u0432"},{name:"\u0414\u043E\u0440\u043E\u0433\u0430 \u043F\u0443\u0441\u0442\u0430"},{name:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043F\u043E\u0435\u0437\u0434"},{name:"\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A"},{name:"\u041F\u043E\u0446\u0435\u043B\u0443\u0438"},{name:"\u0410\u0445, \u0443 \u0435\u043B\u0438"},{name:"\u041C\u0430\u043B\u043E"},{name:"\u0422\u0435\u0430\u0442\u0440 \u0443\u0440\u043E\u0434\u043E\u0432"},{name:"\u041A\u0440\u0410\u0417 255"},{name:"\u0421\u0443\u0434\u044C\u0431\u0430"},{name:"\u041C\u0443-\u041C\u0443 \u0436\u0438\u0432\u0430"}]},ed=Fx;var Lx={id:"para-trupov",name:"\u041F\u0430\u0440\u0430 \u0442\u0440\u0443\u043F\u043E\u0432",year:2013,folder:"/artist/shmely/albums/2013_para.jpg",streaming:{spotify:"https://open.spotify.com/album/6AfviE2K704Bym6YNCdMMk",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_nTkPpeyc83R9Kt6M9PaGmyy59OHDa5ovQ",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_nQT0FMPii6bQHu7gPMH0Cu3X9kinOkYbU",yandexMusic:"https://music.yandex.ru/album/3444132"},songs:[{name:"\u0417\u0432\u0451\u0437\u0434\u044B \u0441\u0432\u0435\u0442\u044F\u0442 \u044F\u0440\u0447\u0435"},{name:"\u0411\u0435\u043B\u044B\u0435 \u0447\u0443\u043B\u043E\u0447\u043A\u0438"},{name:"\u041F\u0430\u0440\u0430 \u0442\u0440\u0443\u043F\u043E\u0432"},{name:"\u041D\u0430 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u043C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0435"},{name:"\u041D\u043E\u0432\u0430\u044F \u0440\u0430\u0434\u043E\u0441\u0442\u044C"},{name:"\u041A\u0443\u043A\u043B\u0430 \u0413\u0435\u0440\u0434\u0430"},{name:"\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0443\u0442\u043A\u0438 \u041C\u043E\u0441\u043A\u0432\u044B"},{name:"\u0414\u0438\u0437\u0430\u0439\u043D"},{name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u042D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u043F\u043E \u0410\u0434\u0443"},{name:"\u0410\u043D\u0441\u0430\u043C\u0431\u043B\u044C"},{name:"\u0413\u0440\u043E\u0431\u043E\u0432\u0449\u0438\u043A"}]},td=Lx;var jx={id:"belyj-karandash",name:"\u0411\u0435\u043B\u044B\u0439 \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448",year:2014,folder:"/artist/shmely/albums/2014_karandash.jpg",streaming:{spotify:"https://open.spotify.com/album/4BKbUBCtcHXI55rIgRK1N2",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_me_kZEdgKM1vA9Z3ztRoX4z7PGpIzFXQo",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_liI8wzWEd8L3cCk0h6iXOxEnakMSfvEz8",yandexMusic:"https://music.yandex.ru/album/3444125"},songs:[{name:"\u0421\u0435\u0440\u0434\u0446\u0435 \u0411\u043E\u0433\u0430"},{name:"\u0411\u0435\u043B\u044B\u0439 \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448"},{name:"\u0421\u0435\u0439 \u0447\u0430\u0441"},{name:"\u041F\u043E\u0434 \u0430\u0441\u0444\u0430\u043B\u044C\u0442"},{name:"\u0411\u0435\u0437\u043E\u0442\u0432\u0435\u0442\u043D\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C"},{name:"\u0412\u0441\u0435\u043B\u0435\u043D\u0441\u043A\u0438\u0439 \u043E\u0440\u0433\u0430\u0437\u043C"},{name:"\u041A\u0430\u0431\u0430\u0440\u0435"},{name:"\u041F\u043E\u0442\u0435\u0445\u0430"},{name:"\u041D\u0430\u043F\u043E\u0438 \u043D\u0430\u0441"},{name:"\u041F\u043E\u043F\u0443\u0442\u0447\u0438\u0446\u0430"},{name:"\u0414\u0440\u0443\u0433\u043E\u0439 \u0441\u043C\u0435\u0445"},{name:"\u041E\u043A\u0435\u0430\u043D\u043E\u043C\u0430\u0433\u0438\u044F"},{name:"\u041F\u044B\u043B\u0430\u044E\u0449\u0438\u0439 \u0430\u043D\u0433\u0435\u043B"},{name:"\u041D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430"},{name:"\u0410\u043D\u0434\u0440\u043E\u043C\u0435\u0434\u0430"}]},nd=jx;var Vx={id:"zloradostnaya-opuhol-new",name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C. \u041F\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043D\u0438\u0435",year:2016,folder:"/artist/shmely/albums/2016_zo.jpg",streaming:{spotify:"https://open.spotify.com/album/4Q4riSrf2rdfmY6EllfbRp",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_kf4b67Cf_KzFSmA1Ya-ptvWjGMmG9rfWs",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lEU8oxwMxMRJ8Qm8pCykRlxwEBZBbYlK0",yandexMusic:"https://music.yandex.ru/album/3444126"},songs:[{name:"\u0411\u044B\u043B\u0438 \u043C\u044B"},{name:"\u041B\u0435\u0437\u0432\u0438\u0435"},{name:"\u041F\u0435\u0441\u0435\u043D\u043A\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430"},{name:"\u0417\u043B\u043E\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u0430\u044F \u043E\u043F\u0443\u0445\u043E\u043B\u044C"},{name:"\u0413\u043B\u0438\u0441\u0442\u044B"},{name:"\u0428\u0435\u0439\u043A \u0448\u0435\u0439\u043A \u0447\u0430 \u0447\u0430 \u0447\u0430"},{name:"\u041B\u0435\u0447\u0435\u0431\u043D\u0438\u0446\u0430"},{name:"\u0421\u043C\u0438\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430"},{name:"\u041C\u0443\u0442\u0430\u043D\u0442\u044B"},{name:"\u0414\u0436\u0430\u0433\u0438 \u043C\u0435\u0440\u0442\u0432\u0435\u0435 \u0432\u0441\u0435\u0445 \u043C\u0451\u0440\u0442\u0432\u044B\u0445"},{name:"\u0410\u043F\u043E\u043A\u0430\u043B\u0438\u043F\u0441\u0438\u0441"},{name:"\u041F\u0435\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F"}]},rd=Vx;var Bx={id:"16-chudes",name:"16 \u0447\u0443\u0434\u0435\u0441",year:2016,folder:"/artist/shmely/albums/2016_16.jpg",streaming:{spotify:"https://open.spotify.com/album/20RNbLgkaoqnmqM6aZ5ppb",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_k5j2ONFgCxjaMibPrmWT_7cqOZpokpY0A",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_lvl4Bi2EQ2Cr_pT1KK0COoNLGwDAHRHUE",yandexMusic:"https://music.yandex.ru/album/4090274"},songs:[{name:"\u0428\u0443\u043A\u0430\u0439"},{name:"\u0414\u0443\u0448\u0430 \u043D\u0435 \u043B\u0430\u0434\u0438\u0442 \u0441 \u0441\u0435\u0440\u0434\u0446\u0435\u043C"},{name:"\u0421\u0432\u0435\u0442\u0438\u0442\u0441\u044F \u043C\u0433\u043B\u0430"},{name:"\u041A\u043B\u0438\u0447\u0435 \u043D\u0430 \u043E\u0437\u0435\u0440\u0430"},{name:"\u0410\u043D\u0438\u043C\u0430\u0442\u043E\u0440\u044B"},{name:"\u0425\u0430\u043E\u0441 \u0447\u043E\u0440\u043D\u043E\u0442\u0438"},{name:"\u042F \u0445\u043E\u0447\u0443 \u0431\u0430\u0447\u0438\u0442\u0438 \u0442\u0435\u0431\u0435"},{name:"\u0411\u0430\u0440\u0434\u044B \u0427\u0435\u0440\u043D\u043E\u0431\u044B\u043B\u044F"},{name:"\u0411\u043E\u0439\u0441\u044F \u0441\u0435\u0431\u044F \u043A\u043E\u0433\u0434\u0430 \u043F\u044C\u044F\u043D"},{name:"\u0417\u043E\u043C\u0431\u0438 \u0440\u043E\u0434\u0441\u0442\u0435\u0440"},{name:"\u041E\u043B \u0438\u043D\u043A\u043B\u044E\u0437\u0438\u0432"},{name:"\u041B\u0430\u0432\u0430\u0448\u0430\u0431\u0430\u0448"}]},od=Bx;var $x={id:"mizantropiya",name:"\u041C\u0438\u0437\u0430\u043D\u0442\u0440\u043E\u043F\u0438\u044F",year:2016,folder:"/artist/shmely/albums/2016_mizantropiya.jpg",streaming:{spotify:"https://open.spotify.com/album/5fyLR7SyykWK1EmVKesNNK",youtube:"https://www.youtube.com/playlist?list=OLAK5uy_ni5xNthJBzgd9MZ63IBNDGsWa0rtcuJA0",youtubeMusic:"https://music.youtube.com/playlist?list=OLAK5uy_ly9XGbpMjncfPi2jDs8Kyq9bm47Iiezuc",yandexMusic:"https://music.yandex.ru/album/4184010"},songs:[{name:"\u041B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0442\u0435\u0445\u0438"},{name:"\u0425\u043E\u0442\u0438\u0432 \u0441\u043F\u0438\u0442\u0430\u0442\u0438"},{name:"\u041D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"},{name:"\u041D\u0435 \u0441\u0443\u043C\u0443\u0432\u0430\u0442\u0438"},{name:"\u041F\u043E\u0437\u0434\u043D\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0436\u0438\u0437\u043D\u044C"},{name:"\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0438\u0439 \u0441\u0432i\u0442"},{name:"\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0438"},{name:"\u0427\u043E\u0432\u0435\u043D \u0421\u0442\u0440\u0430\u0445\u0443"},{name:"\u041C\u0438\u0437\u0430\u043D\u0442\u0440\u043E\u043F\u0438\u044F"},{name:"\u0410\u0432\u0442\u043E\u043C\u043E\u0431i\u043B\u0438\u0437\u043C"},{name:"\u0410\u0434\u0441\u043A\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430"},{name:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u044C"},{name:"\u0421\u0432\u0430\u0438"},{name:"\u0422\u043E\u043A"},{name:"\u0412\u0435\u0434\u044C\u043C\u044B \u043C\u043E\u0438"}]},id=$x;var kg={[Ic.id]:Ic,[Cc.id]:Cc,[Ec.id]:Ec,[xc.id]:xc,[_c.id]:_c,[Sc.id]:Sc,[Mc.id]:Mc,[Tc.id]:Tc,[Ac.id]:Ac,[kc.id]:kc,[Nc.id]:Nc,[Rc.id]:Rc,[Oc.id]:Oc,[Pc.id]:Pc,[Fc.id]:Fc,[Lc.id]:Lc,[jc.id]:jc,[Vc.id]:Vc,[Bc.id]:Bc,[$c.id]:$c,[Hc.id]:Hc,[Uc.id]:Uc,[zc.id]:zc,[Wc.id]:Wc,[Gc.id]:Gc,[Yc.id]:Yc,[qc.id]:qc,[Zc.id]:Zc,[Qc.id]:Qc,[Kc.id]:Kc,[Jc.id]:Jc,[Xc.id]:Xc,[ed.id]:ed,[td.id]:td,[nd.id]:nd,[rd.id]:rd,[od.id]:od,[id.id]:id};var Hx={id:"daj-garri",name:["\u0414\u0430\u0439 \u0413\u0430\u0440\u0440\u0438"],albums:["trotilovyye-skazki"],text:`
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
`},sd=Hx;var Ux={id:"ya-vselennaya",name:["\u042F \u2013 \u0412\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F"],albums:["spazmy-roka","poshmelye"],authors:"\u0428\u043C\u0435\u043B\u044C",duration:196,text:`
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
`},ad=Ux;var zx={id:"na-ladoni-planeta",name:["\u041D\u0430 \u043B\u0430\u0434\u043E\u043D\u0438 \u043F\u043B\u0430\u043D\u0435\u0442\u0430"],albums:["spazmy-roka","poshmelye"],authors:"\u0428\u043C\u0435\u043B\u044C",duration:187,text:`
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
`},ud=zx;var Wx={id:"poshmelye",name:["\u041F\u043E\u0448\u043C\u0435\u043B\u044C\u0435"],albums:["poshmelye"],clipYouTubeId:"ArmZpTJd4_0",authors:"\u0421\u0442\u0430\u043A\u0430\u043D \u0438 \u041C\u0430\u043A\u0441 \u042D\u043A\u0441 - \u041C\u0430\u043A\u0441 \u042D\u043A\u0441",duration:192,text:`
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
`},ld=Wx;var Gx={id:"kak-izydet-svet",name:["\u041A\u0430\u043A \u0438\u0437\u044B\u0434\u0435\u0442 \u0441\u0432\u0435\u0442..."],albums:[],text:`
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
`},cd=Gx;var Yx={id:"laboratoriya-altruizma",name:["\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F \u0430\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C\u0430"],albums:["moshchi","organizm","risunki-na-dushe","agressivnyj-pokoj","polna-suma","ya-vernus-k-tebe"],text:`
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
`},dd=Yx;var qx={id:"antiromantika",name:["\u0410\u043D\u0442\u0438\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430"],albums:["pugovica"],text:`
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
`},fd=qx;var Zx={id:"biomekhanika",name:["\u0411\u0438\u043E\u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0430"],albums:["ya-vernus-k-tebe"],text:`
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
`},hd=Zx;var Qx={id:"blagodat",name:["\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C"],albums:["agressivnyj-pokoj"],text:`
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
`},pd=Qx;var Kx={id:"bol",name:["\u0411\u043E\u043B\u044C"],albums:["agressivnyj-pokoj","ya-vernus-k-tebe"],clipYouTubeId:"UShBtzycUsY",text:`
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
`},md=Kx;var Jx={id:"britogolovye-moskvichki",name:["\u0411\u0440\u0438\u0442\u043E\u0433\u043E\u043B\u043E\u0432\u044B\u0435 \u043C\u043E\u0441\u043A\u0432\u0438\u0447\u043A\u0438"],albums:[],authors:"\u041F\u0430\u0443\u043A",text:`
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
`},gd=Jx;var Xx={id:"divchina-kulya",name:["\u0414i\u0432\u0447\u0438\u043D\u0430-\u043A\u0443\u043B\u044F"],albums:["petlya-soblazna","trahni-nebo"],clipYouTubeId:"d7O9aDr7las",text:`
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
`},yd=Xx;var e_={id:"fokusnik",name:["\u0424\u043E\u043A\u0443\u0441\u043D\u0438\u043A"],albums:["teatr-urodov"],text:`
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
`},vd=e_;var t_={id:"gilotina",name:["\u0413\u0438\u043B\u044C\u043E\u0442\u0438\u043D\u0430 \u0432 \u0446\u0432\u0435\u0442\u0430\u0445"],albums:["pugovica"],clipYouTubeId:"cFLeFuZwbmc",text:`
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
`},wd=t_;var n_={id:"intro",name:["\u0412\u0441\u0451 \u0431\u0443\u0434\u0435\u0442 \u0445\u043E\u0440\u043E\u0448\u043E (intro)"],albums:["pugovica"],text:`
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
`},bd=n_;var r_={id:"maneken",name:["\u041C\u0430\u043D\u0435\u043A\u0435\u043D"],albums:["agressivnyj-pokoj"],clipYouTubeId:"exkzYZohXRg",text:`
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
`},Dd=r_;var o_={id:"zver",name:["\u0417\u0432\u0435\u0440\u044C"],albums:["pugovica"],clipYouTubeId:"GArQ6RYZi9c",text:`
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
`},Id=o_;var i_={id:"novaya-religiya",name:["\u041D\u043E\u0432\u0430\u044F \u0440\u0435\u043B\u0438\u0433\u0438\u044F"],albums:["spazmy-roka","poshmelye"],duration:183,text:`
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
`},Cd=i_;var s_={id:"patologoanatom",name:["\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u043E\u0430\u043D\u0430\u0442\u043E\u043C"],albums:["spazmy-roka","risunki-na-dushe","poshmelye"],duration:184,text:`
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
`},Ed=s_;var a_={id:"pechal-prekrasna",name:["\u041F\u0435\u0447\u0430\u043B\u044C \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0430"],albums:[],authors:"\u0428\u043C\u0435\u043B\u044C",text:`
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
`},xd=a_;var u_={id:"pokidaya-mir",name:["\u041F\u043E\u043A\u0438\u0434\u0430\u044F \u043C\u0438\u0440"],albums:["organizm","ya-vernus-k-tebe"],clipYouTubeId:"LG8BvZiYcDA",text:`
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
`},_d=u_;var l_={id:"polna-suma",name:["\u041F\u043E\u043B\u043D\u0430 \u0441\u0443\u043C\u0430","\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043E\u0441\u0442\u0440\u043E\u0432"],albums:["bomba-v-ubezhishche","organizm","polna-suma"],text:`
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
`},Sd=l_;var c_={id:"raspyatie",name:["\u0417\u0432\u0451\u0437\u0434\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u044F\u0442\u0438\u0435"],albums:["tulovishche","trahni-nebo"],text:`
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
`},Md=c_;var d_={id:"renessans",name:["\u0420\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441"],albums:["pugovica"],text:`
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
`},Td=d_;var f_={id:"saprofag",name:["\u0421\u0430\u043F\u0440\u043E\u0444\u0430\u0433"],albums:["spazmy-roka","vethij-sbornik"],text:`
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
`},Ad=f_;var h_={id:"skelety",name:["\u0421\u043A\u0435\u043B\u0435\u0442\u044B"],albums:["risunki-na-dushe","poshmelye"],clipYouTubeId:"sm_W3X9wYo0",duration:237,text:`
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
`},kd=h_;var p_={id:"skvoz-ogon",name:["\u0421\u043A\u0432\u043E\u0437\u044C \u043E\u0433\u043E\u043D\u044C \u0434\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434\u0430"],albums:[],text:`
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
`},Nd=p_;var m_={id:"slyoznaya",name:["\u0421\u043B\u0451\u0437\u043D\u0430\u044F","\u041B\u0438\u0445\u0430 \u0442\u0430 \u0431\u0435\u0434\u0430"],albums:["bomba-v-ubezhishche","organizm","negativ-prostranstva","agressivnyj-pokoj"],text:`
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
`},Rd=m_;var g_={id:"sudorogi",name:["\u0421\u0443\u0434\u043E\u0440\u043E\u0433\u0438 \u0436\u0438\u0432\u044B\u0445 \u0431\u043E\u043B\u043E\u0442"],albums:["pugovica"],text:`
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
`},Od=g_;var y_={id:"trahni-nebo",name:["\u0422\u0440\u0430\u0445\u043D\u0438 \u043D\u0435\u0431\u043E"],albums:["petlya-soblazna","trahni-nebo"],text:`
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
`},Pd=y_;var v_={id:"tulovishchej",name:["\u0422\u0443\u043B\u043E\u0432\u0438\u0449\u0435\u0439"],albums:["tulovishche","trahni-nebo","risunki-na-dushe"],text:`
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
`},Fd=v_;var w_={id:"volosy",name:["\u0412\u043E\u043B\u043E\u0441\u044B","\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B"],albums:["durackiye-knizhki","vulkanizaciya-dushi","spazmy-roka","poshmelye"],duration:198,text:`
\u0420\u0443\u043A\u0438, \u0447\u0442\u043E \u0442\u044F\u043D\u0443\u043B\u0438\u0441\u044C \u0432\u043E\u043D, \u0442\u0443\u0433\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u044B
\u041D\u0435 \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u0435\u0447\u0442\u044B
\u0412\u0435\u043D\u044B, \u0447\u0442\u043E \u043D\u0435\u0441\u043B\u0438 \u043B\u044E\u0431\u043E\u0432\u044C, \u043D\u0435\u0436\u043D\u043E \u0432\u0441\u043F\u043E\u0440\u043E\u0442\u044B,
\u041A\u0430\u043A \u0440\u0430\u0437\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u043C\u043E\u0441\u0442\u044B

\u041D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0432\u043E\u043B\u043E\u0441\u044B...

\u041F\u043B\u0430\u0442\u044C\u0435, \u0447\u0442\u043E \u043F\u0443\u0441\u0442\u0438\u043B\u043E\u0441\u044C \u0432\u043F\u043B\u044F\u0441, \u0441\u0442\u0451\u0440\u043B\u043E\u0441\u044C \u0432 \u0434\u044B\u0440\u043E\u0447\u043A\u0438,
\u0417\u0430\u0433\u043E\u0440\u0435\u043B\u043E\u0441\u044C \u0438 \u043F\u0440\u043E\u0448\u043B\u043E
\u0421\u0430\u043D\u0438, \u0447\u0442\u043E \u043A\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u0432\u043D\u0438\u0437, \u0437\u0430\u0443\u043F\u0440\u044F\u043C\u0438\u043B\u0438\u0441\u044C,
\u041A\u043E\u0433\u0434\u0430 \u0441\u043E\u043B\u043D\u044B\u0448\u043A\u043E \u0432\u0437\u043E\u0448\u043B\u043E
`},Ld=w_;var b_={id:"ya-ne-angel",name:["\u042F \u043D\u0435 \u0430\u043D\u0433\u0435\u043B"],albums:["durackiye-knizhki","bomba-v-ubezhishche","zhazhda","vosem-zhenshchin-na-raduge"],text:`
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
`},jd=b_;var Ng={[fd.id]:fd,[hd.id]:hd,[pd.id]:pd,[md.id]:md,[gd.id]:gd,[sd.id]:sd,[yd.id]:yd,[vd.id]:vd,[wd.id]:wd,[bd.id]:bd,[cd.id]:cd,[dd.id]:dd,[Dd.id]:Dd,[ud.id]:ud,[Cd.id]:Cd,[Ed.id]:Ed,[xd.id]:xd,[_d.id]:_d,[Sd.id]:Sd,[ld.id]:ld,[Md.id]:Md,[Td.id]:Td,[Ad.id]:Ad,[kd.id]:kd,[Nd.id]:Nd,[Rd.id]:Rd,[Od.id]:Od,[Pd.id]:Pd,[Fd.id]:Fd,[Ld.id]:Ld,[jd.id]:jd,[ad.id]:ad,[Id.id]:Id};var D_={id:"shmely",name:"\u0428\u043C\u0435\u043B\u0438",image:"/artist/shmely/artist.webp",streaming:{spotify:"https://open.spotify.com/artist/4OXVjz9BARB2MwT6sdx8JE",youtube:"https://www.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw",youtubeMusic:"https://music.youtube.com/channel/UCZkpG0pk3z1LondQYU_11Iw",yandexMusic:"https://music.yandex.ru/artist/213256"},albums:["trotilovyye-skazki","tulovishche","purga","durackiye-knizhki","petlya-soblazna","zloradostnaya-opuhol","vulkanizaciya-dushi","princessa-bez-trusov","bomba-v-ubezhishche","moshchi","trahni-nebo","organizm","spazmy-roka","risunki-na-dushe","poshmelye","negativ-prostranstva","agressivnyj-pokoj","polna-suma","ostanovite-chelovechestvo","zhazhda","ten-serdca","lyod","vethij-sbornik","vosem-zhenshchin-na-raduge","pugovica","ya-vernus-k-tebe","koshkiny-obidy","karamelnyye-strahi","moskovskaya-yarmarka-udovolstvij","mekhanicheskaya-balerina","toplivo","cekh-po-reabilitacii-paranoikov","teatr-urodov","para-trupov","belyj-karandash","zloradostnaya-opuhol-new","16-chudes","mizantropiya"]},Vd=class extends Rt{constructor(){super(...arguments),this.artist=D_,this.albums=kg,this.songs=Ng}},Wi=new Vd;var Rg={[Ui.artist.id]:Ui,[zi.artist.id]:zi,[Wi.artist.id]:Wi},Me=Rg;console.log(Rg);var Og=[Ui.artist,zi.artist,Wi.artist];var ue=(()=>{let t=class t{constructor(){this.artist$=new J(""),this.album$=new J(""),this.song$=new J("")}setArtist(r="",o="",i=""){this.artist$.next(r),this.album$.next(o),this.song$.next(i)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var I_=(e,t)=>t.id;function C_(e,t){if(e&1&&(y(0,"div",1)(1,"a",2),Q(2,"img",3),y(3,"h3",4),N(4),v()()()),e&2){let n=t.$implicit;p(),T("routerLink","artist/"+n.id),p(),T("src","."+n.image,tt)("alt",n.name),p(2),be(n.name)}}var Pg=(()=>{let t=class t{constructor(r,o){this.titleService=r,this.artistService=o,this.artists=Og,this.titleService.setTitle("\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439"),this.artistService.setArtist()}};t.\u0275fac=function(o){return new(o||t)(D(De),D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-home-page"]],standalone:!0,features:[Z],decls:3,vars:0,consts:[[1,"home-page","rows"],[1,"home-page__item","col"],[1,"home-page__link",3,"routerLink"],[3,"src","alt"],[1,"home-page__name"]],template:function(o,i){o&1&&(y(0,"div",0),he(1,C_,5,4,"div",1,I_),v()),o&2&&(p(),pe(i.artists))},dependencies:[Ie],styles:[".home-page__item[_ngcontent-%COMP%]{width:48%}@media screen and (max-width: 768px){.home-page__item[_ngcontent-%COMP%]{width:98%}}.home-page__link[_ngcontent-%COMP%]{display:block;text-decoration:none}.home-page__name[_ngcontent-%COMP%]{font-size:18px;transition:color .3s ease;margin-top:10px;margin-bottom:20px}"]});let e=t;return e})();function E_(e,t){if(e&1&&(y(0,"div",4),N(1),v()),e&2){let n=A();p(),be(n.year)}}var Gi=(()=>{let t=class t{constructor(){this.year=0,this.thumbnail=!1}get folder(){return this.image??"/artist/album-card.jpg"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=q({type:t,selectors:[["app-album-card"]],inputs:{link:"link",name:"name",image:"image",year:"year",thumbnail:"thumbnail"},standalone:!0,features:[Z],decls:6,vars:7,consts:[[1,"album-card",3,"routerLink"],[1,"album-card__image"],[1,"album-card__img",3,"src","alt"],[1,"album-card__name"],[1,"album-card__year"]],template:function(o,i){o&1&&(y(0,"a",0)(1,"div",1),Q(2,"img",2),v(),y(3,"div",3),N(4),v(),z(5,E_,2,1,"div",4),v()),o&2&&(Mr("thumbnail",i.thumbnail),T("routerLink",i.link),p(2),T("src","."+i.folder,tt)("alt",i.name),p(2),be(i.name),p(),G(i.year?5:-1))},dependencies:[Ie],styles:[".album-card[_ngcontent-%COMP%]{display:block;position:relative;padding:20px 22px 24px;box-sizing:border-box;text-decoration:none;transition:background-color .3s ease}@media screen and (max-width: 992px){.album-card[_ngcontent-%COMP%]{padding:10px 10px 19px}}.album-card[_ngcontent-%COMP%]:hover{background-color:#222427}.album-card__img[_ngcontent-%COMP%]{margin:auto;object-fit:contain;object-position:center;height:100%;width:0;min-width:100%;min-height:100%;aspect-ratio:1}.album-card__name[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-transform:uppercase;transition:color .3s ease;margin-top:14px}.album-card__year[_ngcontent-%COMP%]{font-weight:500;line-height:1.5;font-size:16px;color:#696c6f}.album-card.thumbnail[_ngcontent-%COMP%]   .album-card__name[_ngcontent-%COMP%], .album-card.thumbnail[_ngcontent-%COMP%]   .album-card__year[_ngcontent-%COMP%]{font-size:14px}"]});let e=t;return e})();var x_=(e,t)=>t.link;function __(e,t){if(e&1&&(y(0,"li",1)(1,"a",2),Q(2,"img",3),v()()),e&2){let n=t.$implicit;T("title",n.name),p(),T("href",n.link,tt),p(),T("src","./streaming/"+n.image,tt)("alt",n.name)}}function S_(e,t){if(e&1&&(y(0,"ul",0),he(1,__,3,4,"li",1,x_),v()),e&2){let n=A();p(),pe(n.list)}}var Yi=(()=>{let t=class t{constructor(){this.streamingList={spotify:{name:"Spotify",image:"spotify.svg"},appleMusic:{name:"Apple Music",image:"appleMusic.svg"},youtubeMusic:{name:"YouTube Music",image:"YouTubeMusic.svg"},youtube:{name:"YouTube",image:"YouTube.svg"},bandcamp:{name:"Bandcamp",image:"bandcamp.svg"},yandexMusic:{name:"\u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0443\u0437\u044B\u043A\u0430",image:"yandexMusic.svg"}}}get list(){return this.streaming?Object.entries(this.streaming).map(([o,i])=>{let{name:s,image:a}=this.streamingList[o];return{link:i,name:s,image:a}}):[]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=q({type:t,selectors:[["app-streaming-list"]],inputs:{streaming:"streaming"},standalone:!0,features:[Z],decls:1,vars:1,consts:[["aria-label","Streaming List",1,"streaming-list"],[1,"streaming-list__item",3,"title"],["target","_blank",1,"streaming-list__link",3,"href"],[1,"streaming-list__logo",3,"src","alt"]],template:function(o,i){o&1&&z(0,S_,3,0,"ul",0),o&2&&G(i.streaming?0:-1)},styles:[".streaming-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;column-gap:10px;align-items:center;list-style-type:none;padding-left:0}.streaming-list__item[_ngcontent-%COMP%]{filter:grayscale(1);background-color:#444;margin-bottom:10px;transition:background-color .4s}.streaming-list__item[_ngcontent-%COMP%]:hover{filter:grayscale(0);background-color:#eee}.streaming-list__link[_ngcontent-%COMP%]{display:block;height:22px;padding:10px}.streaming-list__logo[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=t;return e})();var M_=(e,t)=>t.id;function T_(e,t){if(e&1&&Q(0,"app-album-card",1),e&2){let n=t.$implicit;T("link","album/"+n.id)("name",n.name)("year",n.year)("image",n.folder)}}function A_(e,t){if(e&1&&(y(0,"div",0),he(1,T_,1,4,"app-album-card",1,M_),y(3,"div",2),Q(4,"app-streaming-list",3),v()()),e&2){let n=A();p(),pe(n.albums),p(3),T("streaming",n.streaming)}}var Fg=(()=>{let t=class t{constructor(r,o,i){if(this.route=r,this.titleService=o,this.artistService=i,this.artists=Me,this.artistName="",this.artistId=null,this.albums=[],this.route.params.subscribe(({artist:a})=>{this.artistService.setArtist(a)}),this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let s=this.artists[this.artistId];this.streaming=s.artist.streaming,this.artistName=s.artist.name,this.albums=s.artist.albums.map(a=>s.albums[a])}ngOnInit(){this.titleService.setTitle(`${this.artistName} | \u0414\u0438\u0441\u043A\u043E\u0433\u0440\u0430\u0444\u0438\u044F`)}};t.\u0275fac=function(o){return new(o||t)(D(ie),D(De),D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-artist-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"artist-page","rows"],[1,"artist-page__col","col",3,"link","name","year","image"],[1,"artist-page__streaming-list","col"],[3,"streaming"]],template:function(o,i){o&1&&z(0,A_,5,1,"div",0),o&2&&G(i.artistName?0:-1)},dependencies:[Gi,Yi],styles:[".artist-page__col[_ngcontent-%COMP%]{width:23%}@media screen and (max-width: 992px){.artist-page__col[_ngcontent-%COMP%]{width:31.3333333333%}}@media screen and (max-width: 768px){.artist-page__col[_ngcontent-%COMP%]{width:48%}}@media screen and (max-width: 480px){.artist-page__col[_ngcontent-%COMP%]{width:98%}}.artist-page__streaming-list[_ngcontent-%COMP%]{width:98%}"]});let e=t;return e})();var qi=(()=>{let t=class t{transform(r){return r?r.trim():""}};t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=Aa({name:"trim",type:t,pure:!0,standalone:!0});let e=t;return e})();var k_=(e,t)=>t.id||t.name;function N_(e,t){if(e&1&&(y(0,"div",2),Q(1,"img",6),v()),e&2){let n=A(2);p(),T("src","."+n.album.folder,tt)("alt",n.album.name)}}function R_(e,t){if(e&1&&N(0),e&2){let n=A(2).$implicit,r=A(2);ne(" (",r.getTime(n.duration),") ")}}function O_(e,t){if(e&1&&(N(0),y(1,"a",7),N(2),v(),z(3,R_,1,1)),e&2){let n=A(),r=n.$implicit,o=n.$index,i=A(2);ne(" ",o+1,". "),p(),T("routerLink","/artist/"+i.artistId+"/song/"+r.id),p(),ne(" ",r.name," "),p(),G(r.duration?3:-1)}}function P_(e,t){if(e&1&&(N(0),y(1,"span"),N(2),v()),e&2){let n=A(),r=n.$implicit,o=n.$index;ne(" ",o+1,". "),p(2),be(r.name)}}function F_(e,t){if(e&1&&(y(0,"div",4),z(1,O_,4,4)(2,P_,3,2,"span"),v()),e&2){let n=t.$implicit;p(),G(n.id?1:2)}}function L_(e,t){if(e&1&&(y(0,"pre"),N(1),wi(2,"trim"),v()),e&2){let n=A(2);p(),be(bi(2,1,n.album==null?null:n.album.info))}}function j_(e,t){if(e&1&&(y(0,"div",0)(1,"div",1),z(2,N_,2,2,"div",2),y(3,"h3"),N(4),y(5,"span",3),N(6),v()(),he(7,F_,3,1,"div",4,k_),z(9,L_,3,3,"pre"),Q(10,"app-streaming-list",5),v()()),e&2){let n=A();p(2),G(n.album&&n.album.folder?2:-1),p(2),ne(" ",n.album==null?null:n.album.name," "),p(2),be(n.album==null?null:n.album.year),p(),pe(n.songs),p(2),G(n.album!=null&&n.album.info?9:-1),p(),T("streaming",n.album==null?null:n.album.streaming)}}var Lg=(()=>{let t=class t{constructor(r,o,i){this.route=r,this.titleService=o,this.artistService=i,this.artists=Me,this.artistName="",this.artistId=null,this.album=null,this.songs=[],this.route.params.subscribe(({artist:u,album:l})=>{this.artistService.setArtist(u,l)}),this.artistId=this.route.snapshot.paramMap.get("artist");let s=this.route.snapshot.paramMap.get("album");if(!this.artistId||!s)return;let a=this.artists[this.artistId];this.artistName=a.artist.name,this.album=a.albums[s],this.songs=this.album.songs.map(u=>{if(typeof u=="string"){let l=a.songs[u];return{id:l.id,name:l.name[0],duration:l.duration??0}}if(Array.isArray(u)){let[l,{name:c}]=u,d=a.songs[l];return{id:l,name:c[0],duration:d.duration??0}}return{name:u.name,id:"",duration:0}})}ngOnInit(){this.titleService.setTitle(`${this.album?.name} (${this.album?.year}) | ${this.artistName}`)}getTime(r){let o=r/60,i=r%60;return[Math.trunc(o),("0"+i).slice(-2)].join(":")}};t.\u0275fac=function(o){return new(o||t)(D(ie),D(De),D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-album-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"album-page","rows"],[1,"album-page__item","col"],[1,"album-page__folder"],[1,"album-page__year"],[1,"album-page__song"],[3,"streaming"],[3,"src","alt"],[3,"routerLink"]],template:function(o,i){o&1&&z(0,j_,11,5,"div",0),o&2&&G(i.artistName?0:-1)},dependencies:[Ie,qi,Yi],styles:[".album-page__item[_ngcontent-%COMP%]{width:98%}.album-page__folder[_ngcontent-%COMP%]{max-width:400px;float:right;margin-left:20px;margin-bottom:20px}@media screen and (max-width: 768px){.album-page__folder[_ngcontent-%COMP%]{float:none;margin-left:0;line-height:1}}.album-page__year[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.5;font-size:20px;letter-spacing:.05em;text-transform:uppercase;color:#696c6f}.album-page__song[_ngcontent-%COMP%]{line-height:1.8}.album-page__song[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .album-page__song[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px}.album-page__song[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;text-decoration:none;border-bottom:1px solid var(--hover-text)}"]});let e=t;return e})();var V_=["youtubeContainer"];function B_(e,t){if(e&1){let n=gi();y(0,"youtube-player-placeholder",2),Jt("click",function(){si(n);let o=A();return ai(o._load(!0))}),v()}if(e&2){let n=A();T("videoId",n.videoId)("width",n.width)("height",n.height)("isLoading",n._isLoading)("buttonLabel",n.placeholderButtonLabel)("quality",n.placeholderImageQuality)}}var $_=(()=>{let t=class t{_getBackgroundImage(){let r;return this.quality==="low"?r=`https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`:this.quality==="high"?r=`https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg`:r=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,`url(${r})`}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=q({type:t,selectors:[["youtube-player-placeholder"]],hostAttrs:[1,"youtube-player-placeholder"],hostVars:8,hostBindings:function(o,i){o&2&&(Sr("background-image",i._getBackgroundImage())("width",i.width,"px")("height",i.height,"px"),Mr("youtube-player-placeholder-loading",i.isLoading))},inputs:{videoId:"videoId",width:"width",height:"height",isLoading:"isLoading",buttonLabel:"buttonLabel",quality:"quality"},standalone:!0,features:[Z],decls:4,vars:1,consts:[["type","button",1,"youtube-player-placeholder-button"],["height","100%","version","1.1","viewBox","0 0 68 48","focusable","false","aria-hidden","true"],["d","M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z","fill","#f00"],["d","M 45,24 27,14 27,34","fill","#fff"]],template:function(o,i){o&1&&(y(0,"button",0),Xh(),y(1,"svg",1),Q(2,"path",2)(3,"path",3),v()()),o&2&&_r("aria-label",i.buttonLabel)},styles:[".youtube-player-placeholder{display:flex;align-items:center;justify-content:center;width:100%;overflow:hidden;cursor:pointer;background-color:#000;background-position:center center;background-size:cover;transition:box-shadow 300ms ease;box-shadow:inset 0 120px 90px -90px rgba(0,0,0,.8)}.youtube-player-placeholder-button{transition:opacity 300ms ease;-moz-appearance:none;-webkit-appearance:none;background:none;border:none;padding:0;display:flex}.youtube-player-placeholder-button svg{width:68px;height:48px}.youtube-player-placeholder-loading{box-shadow:none}.youtube-player-placeholder-loading .youtube-player-placeholder-button{opacity:0}"],encapsulation:2,changeDetection:0});let e=t;return e})(),H_=new M("YOUTUBE_PLAYER_CONFIG"),jg=640,Vg=390;function Bg(e){return e==null?e:Ar(e,0)}var ot=function(e){return e[e.UNSTARTED=-1]="UNSTARTED",e[e.ENDED=0]="ENDED",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.BUFFERING=3]="BUFFERING",e[e.CUED=5]="CUED",e}(ot||{}),Zi=(()=>{let t=class t{get height(){return this._height}set height(r){this._height=r==null||isNaN(r)?Vg:r}get width(){return this._width}set width(r){this._width=r==null||isNaN(r)?jg:r}constructor(r,o){this._ngZone=r,this._destroyed=new se,this._playerChanges=new J(void 0),this._nonce=m(Dr,{optional:!0}),this._changeDetectorRef=m(Tt),this._isLoading=!1,this._hasPlaceholder=!0,this._height=Vg,this._width=jg,this.disableCookies=!1,this.disablePlaceholder=!1,this.showBeforeIframeApiLoads=!1,this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange");let i=m(H_,{optional:!0});this.loadApi=i?.loadApi??!0,this.disablePlaceholder=!!i?.disablePlaceholder,this.placeholderButtonLabel=i?.placeholderButtonLabel||"Play video",this.placeholderImageQuality=i?.placeholderImageQuality||"standard",this._isBrowser=Fm(o)}ngAfterViewInit(){this._conditionallyLoad()}ngOnChanges(r){this._shouldRecreatePlayer(r)?this._conditionallyLoad():this._player&&((r.width||r.height)&&this._setSize(),r.suggestedQuality&&this._setQuality(),(r.startSeconds||r.endSeconds||r.suggestedQuality)&&this._cuePlayer())}ngOnDestroy(){this._pendingPlayer?.destroy(),this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():(this._getPendingState().playbackState=ot.PLAYING,this._load(!0))}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=ot.PAUSED}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=ot.CUED}seekTo(r,o){this._player?this._player.seekTo(r,o):this._getPendingState().seek={seconds:r,allowSeekAhead:o}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():this._pendingPlayerState?!!this._pendingPlayerState.muted:!1}setVolume(r){this._player?this._player.setVolume(r):this._getPendingState().volume=r}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&this._pendingPlayerState.volume!=null?this._pendingPlayerState.volume:0}setPlaybackRate(r){if(this._player)return this._player.setPlaybackRate(r);this._getPendingState().playbackRate=r}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&this._pendingPlayerState.playbackRate!=null?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(!(!this._isBrowser||!window.YT))return this._player?this._player.getPlayerState():this._pendingPlayerState&&this._pendingPlayerState.playbackState!=null?this._pendingPlayerState.playbackState:ot.UNSTARTED}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_load(r){this._isBrowser&&(!window.YT||!window.YT.Player?(this.loadApi?(this._isLoading=!0,U_(this._nonce)):this.showBeforeIframeApiLoads,this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback?.(),this._ngZone.run(()=>this._createPlayer(r))}):this._createPlayer(r))}_conditionallyLoad(){this._shouldShowPlaceholder()?this.playerVars?.autoplay===1&&this._load(!0):this._load(!1)}_shouldShowPlaceholder(){return this.disablePlaceholder?!1:this._isBrowser?this._hasPlaceholder&&!!this.videoId&&!this._player:!0}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_shouldRecreatePlayer(r){let o=r.videoId||r.playerVars||r.disableCookies||r.disablePlaceholder;return!!o&&!o.isFirstChange()}_createPlayer(r){if(this._player?.destroy(),this._pendingPlayer?.destroy(),typeof YT>"u"||!this.videoId&&!this.playerVars?.list)return;let o=this._ngZone.runOutsideAngular(()=>new YT.Player(this.youtubeContainer.nativeElement,{videoId:this.videoId,host:this.disableCookies?"https://www.youtube-nocookie.com":void 0,width:this.width,height:this.height,playerVars:r?K(w({},this.playerVars||{}),{autoplay:1}):this.playerVars})),i=()=>{this._ngZone.run(()=>{this._isLoading=!1,this._hasPlaceholder=!1,this._player=o,this._pendingPlayer=void 0,o.removeEventListener("onReady",i),this._playerChanges.next(o),this._setSize(),this._setQuality(),this._pendingPlayerState&&(this._applyPendingPlayerState(o,this._pendingPlayerState),this._pendingPlayerState=void 0);let s=o.getPlayerState();(s===ot.UNSTARTED||s===ot.CUED||s==null)&&this._cuePlayer(),this._changeDetectorRef.markForCheck()})};this._pendingPlayer=o,o.addEventListener("onReady",i)}_applyPendingPlayerState(r,o){let{playbackState:i,playbackRate:s,volume:a,muted:u,seek:l}=o;switch(i){case ot.PLAYING:r.playVideo();break;case ot.PAUSED:r.pauseVideo();break;case ot.CUED:r.stopVideo();break}s!=null&&r.setPlaybackRate(s),a!=null&&r.setVolume(a),u!=null&&(u?r.mute():r.unMute()),l!=null&&r.seekTo(l.seconds,l.allowSeekAhead)}_cuePlayer(){this._player&&this.videoId&&this._player.cueVideoById({videoId:this.videoId,startSeconds:this.startSeconds,endSeconds:this.endSeconds,suggestedQuality:this.suggestedQuality})}_setSize(){this._player?.setSize(this.width,this.height)}_setQuality(){this._player&&this.suggestedQuality&&this._player.setPlaybackQuality(this.suggestedQuality)}_getLazyEmitter(r){return this._playerChanges.pipe(ke(o=>o?Do(i=>{o.addEventListener(r,i)},i=>{try{o?.removeEventListener?.(r,i)}catch{}}):I()),o=>new $(i=>o.subscribe({next:s=>this._ngZone.run(()=>i.next(s)),error:s=>i.error(s),complete:()=>i.complete()})),Jn(this._destroyed))}};t.\u0275fac=function(o){return new(o||t)(D(X),D(Mt))},t.\u0275cmp=q({type:t,selectors:[["youtube-player"]],viewQuery:function(o,i){if(o&1&&gm(V_,7),o&2){let s;yi(s=vi())&&(i.youtubeContainer=s.first)}},inputs:{videoId:"videoId",height:[2,"height","height",Ar],width:[2,"width","width",Ar],startSeconds:[2,"startSeconds","startSeconds",Bg],endSeconds:[2,"endSeconds","endSeconds",Bg],suggestedQuality:"suggestedQuality",playerVars:"playerVars",disableCookies:[2,"disableCookies","disableCookies",nt],loadApi:[2,"loadApi","loadApi",nt],disablePlaceholder:[2,"disablePlaceholder","disablePlaceholder",nt],showBeforeIframeApiLoads:[2,"showBeforeIframeApiLoads","showBeforeIframeApiLoads",nt],placeholderButtonLabel:"placeholderButtonLabel",placeholderImageQuality:"placeholderImageQuality"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},standalone:!0,features:[xr,_t,Z],decls:4,vars:3,consts:[["youtubeContainer",""],[3,"videoId","width","height","isLoading","buttonLabel","quality"],[3,"click","videoId","width","height","isLoading","buttonLabel","quality"]],template:function(o,i){o&1&&(z(0,B_,1,6,"youtube-player-placeholder",1),y(1,"div"),Q(2,"div",null,0),v()),o&2&&(G(i._shouldShowPlaceholder()?0:-1),p(),Sr("display",i._shouldShowPlaceholder()?"none":""))},dependencies:[$_],encapsulation:2,changeDetection:0});let e=t;return e})(),Bd=!1;function U_(e){if(Bd)return;let t="https://www.youtube.com/iframe_api",n=document.createElement("script"),r=o=>{n.removeEventListener("load",r),n.removeEventListener("error",r),o.type==="error"&&(Bd=!1)};n.addEventListener("load",r),n.addEventListener("error",r),n.src=t,n.async=!0,e&&n.setAttribute("nonce",e),Bd=!0,document.body.appendChild(n)}var z_=(e,t)=>t.id;function W_(e,t){if(e&1&&(y(0,"small"),N(1),v()),e&2){let n=A().$implicit;p(),be(n)}}function G_(e,t){if(e&1&&(y(0,"h3"),N(1),v()),e&2){let n=A().$implicit;p(),ne(" ",n," ")}}function Y_(e,t){if(e&1&&z(0,W_,2,1,"small")(1,G_,2,1,"h3"),e&2){let n=t.$index;G(n?0:1)}}function q_(e,t){if(e&1&&he(0,Y_,2,1,null,null,pm),e&2){let n=A(2);pe(n.song==null?null:n.song.name)}}function Z_(e,t){if(e&1&&(y(0,"div",2),Q(1,"youtube-player",6),v()),e&2){let n=A(2);p(),T("videoId",n.song==null?null:n.song.clipYouTubeId)}}function Q_(e,t){if(e&1&&(y(0,"div",5),Q(1,"app-album-card",7),v()),e&2){let n=t.$implicit,r=A(3);p(),T("name",n.name)("link","/artist/"+r.artistId+"/album/"+n.id)("year",n.year)("image","."+n.folder)("thumbnail",!0)}}function K_(e,t){if(e&1&&he(0,Q_,2,5,"div",5,z_),e&2){let n=A(2);pe(n.albums)}}function J_(e,t){if(e&1&&(y(0,"div",5),Q(1,"app-album-card",8),v()),e&2){let n=A(2);p(),T("link","/artist/"+n.artistId+"/songs/other")("name","\u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B")("thumbnail",!0)}}function X_(e,t){if(e&1&&(y(0,"div",0)(1,"div",1),z(2,q_,2,0),y(3,"small"),N(4),v(),y(5,"pre"),N(6),wi(7,"trim"),v()(),y(8,"div",1),z(9,Z_,2,1,"div",2),v(),y(10,"div",3)(11,"div",4),z(12,K_,2,0)(13,J_,2,3,"div",5),v()()()),e&2){let n=A();p(2),G(n.song!=null&&n.song.name?2:-1),p(2),be(n.song==null?null:n.song.authors),p(2),be(bi(7,5,n.song==null?null:n.song.text)),p(3),G(n.song!=null&&n.song.clipYouTubeId?9:-1),p(3),G(n.albums.length?12:13)}}var $g=(()=>{let t=class t{constructor(r,o,i){this.route=r,this.titleService=o,this.artistService=i,this.artists=Me,this.artistName="",this.artistId=null,this.albums=[],this.song=null,this.route.params.subscribe(({artist:u,song:l})=>{this.artistService.setArtist(u,"",l)}),this.artistId=this.route.snapshot.paramMap.get("artist");let s=this.route.snapshot.paramMap.get("song");if(!this.artistId||!s)return;let a=this.artists[this.artistId];this.artistName=a.artist.name,this.song=a.songs[s],this.albums=this.song.albums.map(u=>a.albums[u])}ngOnInit(){this.titleService.setTitle(`${this.song?.name[0]} | ${this.artistName}`)}};t.\u0275fac=function(o){return new(o||t)(D(ie),D(De),D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-song-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"song-page","rows"],[1,"song-page__col","col"],[1,"song-page__video"],[1,"song-page__full","col"],[1,"song-page__albums","rows"],[1,"song-page__album","col"],["placeholderImageQuality","low",3,"videoId"],[3,"name","link","year","image","thumbnail"],[3,"link","name","thumbnail"]],template:function(o,i){o&1&&z(0,X_,14,7,"div",0),o&2&&G(i.artistName?0:-1)},dependencies:[qi,Zi,Gi],styles:[".song-page__col[_ngcontent-%COMP%]{width:48%;position:relative}@media screen and (max-width: 992px){.song-page__col[_ngcontent-%COMP%]{width:98%}}.song-page__full[_ngcontent-%COMP%]{width:98%}.song-page__album[_ngcontent-%COMP%]{width:14.6666666667%}@media screen and (max-width: 992px){.song-page__album[_ngcontent-%COMP%]{width:23%}}@media screen and (max-width: 768px){.song-page__album[_ngcontent-%COMP%]{width:31.3333333333%}}@media screen and (max-width: 480px){.song-page__album[_ngcontent-%COMP%]{width:48%}}@media screen and (max-width: 320px){.song-page__album[_ngcontent-%COMP%]{width:98%}}.song-page__video[_ngcontent-%COMP%]{position:sticky;top:20px;aspect-ratio:16/9}@media screen and (max-width: 992px){.song-page__video[_ngcontent-%COMP%]{margin:20px 0 40px}}"]});let e=t;return e})();var eS=(e,t)=>t.id;function tS(e,t){if(e&1&&(y(0,"div",1)(1,"div",3),N(2),y(3,"a",2),N(4),v()()()),e&2){let n=t.$implicit,r=t.$index,o=A(2);p(2),ne(" ",r+1,". "),p(),T("routerLink","/artist/"+o.artistId+"/song/"+n.id),p(),ne(" ",n.name[0]," ")}}function nS(e,t){if(e&1&&(y(0,"div",0)(1,"div",1)(2,"h3")(3,"span"),N(4,"\u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438"),v(),N(5," | "),y(6,"a",2),N(7,"\u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B"),v()()(),he(8,tS,5,3,"div",1,eS),v()),e&2){let n=A();p(6),T("routerLink","other"),p(2),pe(n.songs)}}var Hg=(()=>{let t=class t{constructor(r,o,i){if(this.route=r,this.titleService=o,this.artistService=i,this.artists=Me,this.artistName="",this.artistId=null,this.songs=[],this.route.params.subscribe(({artist:a})=>{this.artistService.setArtist(a)}),this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let s=this.artists[this.artistId];this.artistName=s.artist.name,this.songs=s.getSongsWithTexts().sort(s.sortAsc)}ngOnInit(){this.titleService.setTitle(`${this.artistName} | \u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438`)}};t.\u0275fac=function(o){return new(o||t)(D(ie),D(De),D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-songs-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"songs-page","rows"],[1,"songs-page__item","col"],[3,"routerLink"],[1,"songs-page__song"]],template:function(o,i){o&1&&z(0,nS,10,1,"div",0),o&2&&G(i.artistName?0:-1)},dependencies:[Ie],styles:[".songs-page__item[_ngcontent-%COMP%]{width:98%;line-height:1.8}@media screen and (max-width: 480px){.songs-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}}.songs-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--hover-text)}.songs-page__song[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;text-decoration:none;border-bottom:1px solid var(--hover-text)}"]});let e=t;return e})();var rS=(e,t)=>t.id;function oS(e,t){if(e&1&&(y(0,"div",1)(1,"div",3),N(2),y(3,"a",2),N(4),v()()()),e&2){let n=t.$implicit,r=t.$index,o=A(2);p(2),ne(" ",r+1,". "),p(),T("routerLink","/artist/"+o.artistId+"/song/"+n.id),p(),ne(" ",n.name[0]," ")}}function iS(e,t){if(e&1&&(y(0,"div",0)(1,"div",1)(2,"h3")(3,"a",2),N(4,"\u0412\u0441\u0435 \u043F\u0435\u0441\u043D\u0438"),v(),N(5," | "),y(6,"span"),N(7,"\u041F\u0435\u0441\u043D\u0438, \u043D\u0435 \u0432\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u044B"),v()()(),he(8,oS,5,3,"div",1,rS),v()),e&2){let n=A();p(3),T("routerLink","../"),p(5),pe(n.songs)}}var Ug=(()=>{let t=class t{constructor(r,o,i){if(this.route=r,this.titleService=o,this.artistService=i,this.artists=Me,this.artistName="",this.artistId=null,this.songs=[],this.route.params.subscribe(({artist:a})=>{this.artistService.setArtist(a)}),this.artistId=this.route.snapshot.paramMap.get("artist"),!this.artistId)return;let s=this.artists[this.artistId];this.artistName=s.artist.name,this.songs=s.getSongsWithoutAlbum().sort(s.sortAsc)}ngOnInit(){this.titleService.setTitle(`${this.artistName} | \u0414\u0440\u0443\u0433\u0438\u0435 \u043F\u0435\u0441\u043D\u0438`)}};t.\u0275fac=function(o){return new(o||t)(D(ie),D(De),D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-other-songs-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"other-songs-page","rows"],[1,"other-songs-page__item","col"],[3,"routerLink"],[1,"other-songs-page__song"]],template:function(o,i){o&1&&z(0,iS,10,1,"div",0),o&2&&G(i.artistName?0:-1)},dependencies:[Ie],styles:[".other-songs-page__item[_ngcontent-%COMP%]{width:98%;line-height:1.8}@media screen and (max-width: 480px){.other-songs-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}}.other-songs-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--hover-text)}.other-songs-page__song[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;text-decoration:none;border-bottom:1px solid var(--hover-text)}"]});let e=t;return e})();var sS=(e,t)=>t.id;function aS(e,t){if(e&1&&(y(0,"span",6),N(1),v()),e&2){let n=A().$implicit,r=A(2);p(),be(r.artist.yearOfSong(n))}}function uS(e,t){if(e&1){let n=gi();y(0,"div",2)(1,"div",3)(2,"youtube-player",4),Jt("stateChange",function(o){si(n);let i=A(2);return ai(i.stateChange(o))}),v()(),y(3,"a",5),N(4),z(5,aS,2,1,"span",6),v()()}if(e&2){let n=t.$implicit,r=A(2);p(2),T("videoId",n.clipYouTubeId),p(),T("routerLink","/artist/"+r.artistId+"/song/"+n.id),p(),ne(" ",n.name," "),p(),G(r.artist.yearOfSong(n)?5:-1)}}function lS(e,t){if(e&1&&(y(0,"div",0)(1,"h3",1),N(2,"\u041A\u043B\u0438\u043F\u044B"),v(),he(3,uS,6,4,"div",2,sS),v()),e&2){let n=A();p(3),pe(n.songs)}}var zg=(()=>{let t=class t{constructor(r,o,i){this.route=r,this.titleService=o,this.artistService=i,this.artists=Me,this.artistName="",this.artistId=null,this.songs=[],this.route.params.subscribe(({artist:s})=>{this.artistService.setArtist(s)}),this.artistId=this.route.snapshot.paramMap.get("artist"),this.artistId&&(this.artist=this.artists[this.artistId],this.artistName=this.artist.artist.name,this.songs=this.artist.getAllVideos().sort(this.artist.sortByYears.bind(this.artist)))}ngOnInit(){this.titleService.setTitle(`${this.artistName} | \u041A\u043B\u0438\u043F\u044B`)}stateChange(r){console.log(r)}};t.\u0275fac=function(o){return new(o||t)(D(ie),D(De),D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-video-page"]],standalone:!0,features:[Z],decls:1,vars:1,consts:[[1,"video-page","rows"],[1,"col"],[1,"video-page__item","col"],[1,"video-page__player"],["placeholderImageQuality","low",3,"stateChange","videoId"],[1,"video-page__title",3,"routerLink"],[1,"video-page__year"]],template:function(o,i){o&1&&z(0,lS,5,0,"div",0),o&2&&G(i.artistName?0:-1)},dependencies:[Ie,Zi],styles:[".video-page[_ngcontent-%COMP%]{margin-bottom:40px}.video-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:98%}.video-page__item[_ngcontent-%COMP%]{width:48%;padding-bottom:28px;text-decoration:none;transition:background-color .3s ease;aspect-ratio:16/9}@media screen and (max-width: 992px){.video-page__item[_ngcontent-%COMP%]{width:98%}}.video-page__title[_ngcontent-%COMP%]{display:block;font-weight:700;line-height:1.1;font-size:16px;letter-spacing:.1em;text-decoration:none;text-transform:uppercase;transition:color .3s ease;margin-top:14px}.video-page__year[_ngcontent-%COMP%]{display:block;font-weight:500;line-height:1.5;font-size:16px;color:#696c6f}"]});let e=t;return e})();var Wg=[{path:"",component:Pg},{path:"artist/:artist",component:Fg},{path:"artist/:artist/video",component:zg},{path:"artist/:artist/songs",component:Hg},{path:"artist/:artist/songs/other",component:Ug},{path:"artist/:artist/song/:song",component:$g},{path:"artist/:artist/album/:album",component:Lg},{path:"**",redirectTo:""}];var Gg={providers:[Cm({eventCoalescing:!0}),_g(Wg)]};var cS=()=>({exact:!0});function dS(e,t){if(e&1&&(y(0,"h2")(1,"a",1),N(2),v()(),y(3,"ul",2)(4,"li",3)(5,"a",1),N(6,"\u0414\u0438\u0441\u043A\u043E\u0433\u0440\u0430\u0444\u0438\u044F"),v()(),y(7,"li",4)(8,"a",1),N(9,"\u0422\u0435\u043A\u0441\u0442\u044B \u043F\u0435\u0441\u0435\u043D"),v()(),y(10,"li",4)(11,"a",1),N(12,"\u041A\u043B\u0438\u043F\u044B"),v()()()),e&2){let n=A();p(),T("routerLink","/artist/"+n.artistId),p(),ne(" ",n.artistName," "),p(2),T("routerLinkActive","active")("routerLinkActiveOptions",ym(9,cS)),p(),T("routerLink","/artist/"+n.artistId),p(2),T("routerLinkActive","active"),p(),T("routerLink","/artist/"+n.artistId+"/songs"),p(2),T("routerLinkActive","active"),p(),T("routerLink","/artist/"+n.artistId+"/video")}}var Yg=(()=>{let t=class t{constructor(r){this.artistService=r,this.artistId="",this.artistName="",this.artistService.artist$.subscribe(o=>{this.artistId=o;let i=Me[o];if(i){let{artist:s}=i;this.artistName=s.name}else this.artistName=""})}};t.\u0275fac=function(o){return new(o||t)(D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-header"]],standalone:!0,features:[Z],decls:2,vars:1,consts:[[1,"header"],[3,"routerLink"],[1,"header__menu"],[3,"routerLinkActive","routerLinkActiveOptions"],[3,"routerLinkActive"]],template:function(o,i){o&1&&(y(0,"header",0),z(1,dS,13,10),v()),o&2&&(p(),G(i.artistId?1:-1))},dependencies:[Ie,xg],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;column-gap:20px;background-color:#32323280;padding:10px 20px;margin-bottom:20px}@media screen and (max-width: 768px){.header[_ngcontent-%COMP%]{flex-direction:column;row-gap:20px}}@media screen and (max-width: 480px){.header[_ngcontent-%COMP%]{text-align:center}}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.header__menu[_ngcontent-%COMP%]{display:flex;column-gap:10px;justify-content:center;list-style-type:none;padding-left:0;margin:0;text-transform:uppercase;font-weight:500}@media screen and (max-width: 480px){.header__menu[_ngcontent-%COMP%]{flex-wrap:wrap}}.header__menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:var(--hover-text)}.header__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]});let e=t;return e})();var qg=(()=>{let t=class t{constructor(r){this.artistService=r,this.artistService.artist$.subscribe(this.faviconChange)}faviconChange(r){let o=document.querySelector('[rel="icon"]'),i=r.length&&r==="master"?"artist/master/favicon.ico":"favicon.ico";o.href!==i&&(o.href=i)}};t.\u0275fac=function(o){return new(o||t)(D(ue))},t.\u0275cmp=q({type:t,selectors:[["app-root"]],standalone:!0,features:[Z],decls:3,vars:0,consts:[[1,"wrapper"]],template:function(o,i){o&1&&(Q(0,"app-header"),y(1,"div",0),Q(2,"router-outlet"),v())},dependencies:[rl,Yg],encapsulation:2});let e=t;return e})();zm(qg,Gg).catch(console.error);
