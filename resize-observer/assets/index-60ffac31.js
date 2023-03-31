(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const re=(e,t)=>e===t,R={equals:re};let X=ee;const b=1,E=2,J={owned:null,cleanups:null,context:null,owner:null};var a=null;let B=null,f=null,h=null,g=null,N=0;function oe(e,t){const n=f,s=a,i=e.length===0,l=i?J:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=i?e:()=>e(()=>$(()=>T(l)));a=l,f=null;try{return A(o,!0)}finally{f=n,a=s}}function j(e,t){t=t?Object.assign({},R,t):R;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Y(n,i));return[ae.bind(n),s]}function x(e,t,n){const s=k(e,t,!1,b);O(s)}function ue(e,t,n){X=pe;const s=k(e,t,!1,b);s.user=!0,g?g.push(s):O(s)}function fe(e){return A(e,!1)}function $(e){if(f===null)return e();const t=f;f=null;try{return e()}finally{f=t}}function I(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function ce(){return f}function ae(){if(this.sources&&this.state)if(this.state===b)O(this);else{const e=h;h=null,A(()=>C(this),!1),h=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function Y(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&A(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=B&&B.running;o&&B.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?h.push(l):g.push(l),l.observers&&te(l)),o||(l.state=b)}if(h.length>1e6)throw h=[],new Error},!1)),t}function O(e){if(!e.fn)return;T(e);const t=a,n=f,s=N;f=a=e,he(e,e.value,s),f=n,a=t}function he(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=b,e.owned&&e.owned.forEach(T),e.owned=null),e.updatedAt=n+1,ne(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,s):e.value=s,e.updatedAt=n)}function k(e,t,n,s=b,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==J&&(a.owned?a.owned.push(l):a.owned=[l]),l}function _(e){if(e.state===0)return;if(e.state===E)return C(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<N);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===b)O(e);else if(e.state===E){const s=h;h=null,A(()=>C(e,t[0]),!1),h=s}}function A(e,t){if(h)return e();let n=!1;t||(h=[]),g?n=!0:g=[],N++;try{const s=e();return de(n),s}catch(s){n||(g=null),h=null,ne(s)}}function de(e){if(h&&(ee(h),h=null),e)return;const t=g;g=null,t.length&&A(()=>X(t),!1)}function ee(e){for(let t=0;t<e.length;t++)_(e[t])}function pe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:_(s)}for(t=0;t<n;t++)_(e[t])}function C(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===b?s!==t&&(!s.updatedAt||s.updatedAt<N)&&_(s):i===E&&C(s,t)}}}function te(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=E,n.pure?h.push(n):g.push(n),n.observers&&te(n))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ne(e){throw e}function M(e,t){return $(()=>e(t||{}))}function ge(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,u=t[i-1].nextSibling,c=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const d=l<s?r?n[r-1].nextSibling:n[l-r]:u;for(;r<l;)e.insertBefore(n[r++],d)}else if(l===r)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const d=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],d),t[i]=n[l]}else{if(!c){c=new Map;let p=r;for(;p<l;)c.set(n[p],p++)}const d=c.get(t[o]);if(d!=null)if(r<d&&d<l){let p=o,y=1,v;for(;++p<i&&p<l&&!((v=c.get(t[p]))==null||v!==d+y);)y++;if(y>d-r){const P=t[o];for(;r<d;)e.insertBefore(n[r++],P)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const H="_$DX_DELEGATE";function we(e,t,n,s={}){let i;return oe(l=>{i=l,t===document?e():w(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function se(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},l=t?()=>(s||(s=i())).cloneNode(!0):()=>$(()=>document.importNode(s||(s=i()),!0));return l.cloneNode=l,l}function be(e,t=window.document){const n=t[H]||(t[H]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,me))}}function F(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ye(e,t,n){return $(()=>e(t,n))}function w(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);x(i=>L(e,t(),i,n),s)}function me(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function L(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=S(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=S(e,n,s);else{if(l==="function")return x(()=>{let r=t();for(;typeof r=="function";)r=r();n=L(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(V(r,t,n,i))return x(()=>n=L(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=S(e,n,s),o)return n}else u?n.length===0?K(e,r,s):ge(e,n,r):(n&&S(e),K(e,r));n=r}else if(t instanceof Node){if(Array.isArray(n)){if(o)return n=S(e,n,s,t);S(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function V(e,t,n,s){let i=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],u=n&&n[l];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=V(e,r,u)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=V(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||i}else e.push(r),i=!0;else{const c=String(r);u&&u.nodeType===3?(u.data=c,e.push(u)):e.push(document.createTextNode(c))}}return i}function K(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function S(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(i,r):e.insertBefore(i,n):u&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}function ve(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var G=e=>typeof e=="function"&&!e.length?e():e;function Z(e,...t){return typeof e=="function"?e(...t):e}var Se=I;function xe(e,t,n,s){return e.addEventListener(t,n,s),Se(e.removeEventListener.bind(e,t,n,s))}function ie(e){const t={...e},n={...e},s={},i=o=>{let r=s[o];if(!r){if(!ce())return t[o];s[o]=r=j(t[o],{internal:!0}),delete t[o]}return r[0]()};for(const o in e)Object.defineProperty(n,o,{get:()=>i(o),enumerable:!0});const l=(o,r)=>{const u=s[o];if(u)return u[1](r);o in t&&(t[o]=Z(r,[t[o]]))};return[n,(o,r)=>{if(ve(o)){const u=$(()=>Object.entries(Z(o,n)));fe(()=>{for(const[c,d]of u)l(c,()=>d)})}else l(o,r);return n}]}function $e(e,t){return ie(t())}const Ae={width:0,height:0};function q(){return{width:window.innerWidth,height:window.innerHeight}}function Ee(){const[e,t]=$e(Ae,q);return xe(window,"resize",()=>t(q())),e}const _e={width:null,height:null};function Ce(e){if(!e)return{..._e};const{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function Le(e){const[t,n]=ie(Ce(G(e))),s=new ResizeObserver(([i])=>n(i.contentRect));return I(()=>s.disconnect()),ue(()=>{const i=G(e);i&&(s.observe(i),I(()=>s.unobserve(i)))}),t}const Ne=se('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10">'),Oe=se('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="center-child min-h-82"><div class="shadow-bg-gray-900 center-child h-24 w-24 rounded-md bg-orange-500 shadow-lg">px x <!>px</div></div><div class="wrapper-h"></div><div class="fixed bottom-4 right-4">window: <!>px x <!>px'),Q=e=>(()=>{const t=Ne(),n=t.firstChild,s=n.firstChild,i=n.nextSibling;return w(n,()=>e.name,s),i.$$input=l=>e.setValue(+l.currentTarget.value),x(l=>{const o=e.name,r=e.name;return o!==l._v$&&F(n,"for",l._v$=o),r!==l._v$2&&F(i,"name",l._v$2=r),l},{_v$:void 0,_v$2:void 0}),x(()=>i.value=e.value),t})(),Te=()=>{const[e,t]=j(200),[n,s]=j(200);let i;const l=Ee(),o=Le(()=>i);return(()=>{const r=Oe(),u=r.firstChild,c=u.firstChild,d=c.firstChild,p=d.nextSibling;p.nextSibling;const y=u.nextSibling,v=y.nextSibling,P=v.firstChild,W=P.nextSibling,le=W.nextSibling,z=le.nextSibling;return z.nextSibling,ye(m=>i=m,c),w(c,()=>Math.round(o.width??0),d),w(c,()=>Math.round(o.height??0),p),w(y,M(Q,{name:"width",get value(){return e()},setValue:t}),null),w(y,M(Q,{name:"height",get value(){return n()},setValue:s}),null),w(v,()=>Math.round(l.width),W),w(v,()=>Math.round(l.height),z),x(m=>{const D=`${e()}px`,U=`${n()}px`;return D!==m._v$3&&c.style.setProperty("width",m._v$3=D),U!==m._v$4&&c.style.setProperty("height",m._v$4=U),m},{_v$3:void 0,_v$4:void 0}),r})()};we(()=>M(Te,{}),document.getElementById("root"));be(["input"]);
