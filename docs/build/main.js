var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function i(t){let e;return a(t,(t=>e=t))(),e}function u(t,e,n){t.$$.on_destroy.push(a(e,n))}function l(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function p(t,e,n,o,r,s,c){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(a){const r=f(e,n,o,c);t.p(r,a)}}function $(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function m(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function x(){return b("")}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:w(t,o,e[o])}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}class R{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=y(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)h(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(g)}}let A;function P(t){A=t}function O(){if(!A)throw new Error("Function called outside component initialization");return A}function T(){const t=O();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function C(t,e){O().$$.context.set(t,e)}function L(t){return O().$$.context.get(t)}const S=[],M=[],N=[],I=[],j=Promise.resolve();let H=!1;function U(){H||(H=!0,j.then(D))}function F(t){N.push(t)}let q=!1;const B=new Set;function D(){if(!q){q=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];P(e),K(e.$$)}for(P(null),S.length=0;M.length;)M.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];B.has(e)||(B.add(e),e())}N.length=0}while(S.length);for(;I.length;)I.pop()();H=!1,q=!1,B.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const Y=new Set;let z;function G(){z={r:0,c:[],p:z}}function W(){z.r||r(z.c),z=z.p}function J(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),z.c.push((()=>{Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function V(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e,o){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(e,o),F((()=>{const e=a.map(n).filter(s);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(F)}function et(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(e,n,s,c,a,i,u=[-1]){const l=A;P(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let $=!1;if(p.ctx=s?s(e,f,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&function(t,e){-1===t.$$.dirty[0]&&(S.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),$=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&J(e.$$.fragment),tt(e,n.target,n.anchor),D()}P(l)}class ot{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=t=>void 0===t,st=t=>"function"==typeof t,ct=t=>"number"==typeof t;function at(){let t=0;return()=>t++}const it="undefined"==typeof window;function ut(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const lt=[];function ft(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!lt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),lt.push(n,e)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return r.push(i),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function pt(e,n,o){const c=!Array.isArray(e),i=c?[e]:e,u=n.length<2;return{subscribe:ft(o,(e=>{let o=!1;const l=[];let f=0,p=t;const $=()=>{if(f)return;p();const o=n(c?l[0]:l,e);u?e(o):p=s(o)?o:t},d=i.map(((t,e)=>a(t,(t=>{l[e]=t,f&=~(1<<e),o&&$()}),(()=>{f|=1<<e}))));return o=!0,$(),function(){r(d),p()}})).subscribe}}const $t=t=>"@@svnav-ctx__"+t,dt=$t("LOCATION"),mt=$t("ROUTER"),ht=$t("ROUTE"),gt=$t("ROUTE_PARAMS"),yt=$t("FOCUS_ELEM"),bt=/^:(.+)/,vt=(t,e)=>t.substr(0,e.length)===e,xt=t=>"*"===t[0],wt=t=>t.replace(/(^\/+|\/+$)/g,"");function kt(t,e=!1){const n=wt(t).split("/");return e?n.filter(Boolean):n}const _t=(t,e)=>t+(e?"?"+e:""),Et=t=>"/"+wt(t);function Rt(...t){const e=t.map((t=>kt(t,!0).join("/"))).join("/");return Et(e)}const At={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},Pt=t=>At[t];function Ot(t,e,n,o){const r=n&&function(t,e){let n;return 2===t?n=e.path?`path="${e.path}"`:"default":1===t?n=`to="${e.to}"`:3===t&&(n=`basepath="${e.basepath||""}"`),`<${Pt(t)} ${n||""} />`}(o||t,n),s=r?"\n\nOccurred in: "+r:"",c=Pt(t);return`<${c}> ${st(e)?e(c):e}${s}`}const Tt=t=>(...e)=>t(Ot(...e)),Ct=Tt((t=>{throw new Error(t)})),Lt=Tt(console.warn);function St(t,e){return{route:t,score:t.default?0:kt(t.fullPath).reduce(((t,e)=>{let n=t;return n+=4,(t=>""===t)(e)?n+=1:(t=>bt.test(t))(e)?n+=2:xt(e)?n-=5:n+=3,n}),0),index:e}}function Mt(t,e){let n,o;const[r]=e.split("?"),s=kt(r),c=""===s[0],a=function(t){return t.map(St).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=a.length;t<r;t++){const{route:r}=a[t];let i=!1;const u={},l=t=>({...r,params:u,uri:t});if(r.default){o=l(e);continue}const f=kt(r.fullPath),p=Math.max(s.length,f.length);let $=0;for(;$<p;$++){const t=f[$],e=s[$];if(!rt(t)&&xt(t)){const e="*"===t?"*":t.slice(1);u[e]=s.slice($).map(decodeURIComponent).join("/");break}if(rt(e)){i=!0;break}const n=bt.exec(t);if(n&&!c){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n=l(Rt(...s.slice(0,$)));break}}return n||o||null}function Nt(t,e){return Mt([t],e)}function It(t,e){const{pathname:n,hash:o="",search:r="",state:s}=t,c=kt(e,!0),a=kt(n,!0);for(;c.length;)c[0]!==a[0]&&Ct(3,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),c.shift(),a.shift();return{pathname:Rt(...a),hash:o,search:r,state:s}}const jt=t=>1===t.length?"":t;function Ht(t){const e=t.indexOf("?"),n=t.indexOf("#"),o=-1!==e,r=-1!==n,s=r?jt(t.substr(n)):"",c=r?t.substr(0,n):t,a=o?jt(c.substr(e)):"";return{pathname:o?c.substr(0,e):c,search:a,hash:s}}function Ut(t,e,n){return Rt(n,function(t,e){if(vt(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=kt(n),c=kt(r);if(""===s[0])return _t(r,o);if(!vt(s[0],".")){const t=c.concat(s).join("/");return _t(("/"===r?"":"/")+t,o)}const a=c.concat(s),i=[];return a.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),_t("/"+i.join("/"),o)}(t,e))}function Ft(t,e){const n=Et(t.replace(/\*.*$/,""));const o=kt(n,!0),r=Nt({fullPath:n},Rt(...kt(e,!0).slice(0,o.length)));return r&&r.uri}const qt="POP";function Bt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Dt(t,e){return{...Ht(e),state:t}}const Kt=!(it||!window.document||!window.document.createElement),Yt=!it&&"null"===window.location.origin,zt=function(t){let e=[],n=Bt(t),o=qt;const r=(t=e)=>t.forEach((t=>t({location:n,action:o})));return{get location(){return n},listen(s){e.push(s);r([s]);const c=ut(t,"popstate",(()=>{n=Bt(t),o=qt,r([s])}));return()=>{c(),e=e.filter((t=>t!==s))}},navigate(e,s){const{state:c={},replace:a=!1}=s||{};if(o=a?"REPLACE":"PUSH",ct(e))s&&Lt(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=qt,t.history.go(e);else{const n={...c,_key:Math.random().toString(36).substring(2)};try{t.history[a?"replaceState":"pushState"](n,"",e)}catch(n){t.location[a?"replace":"assign"](e)}}n=Bt(t),r()}}}(Kt&&!Yt?window:function(t="/"){let e=0,n=[Dt(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(t,o,r){e++,n=n.slice(0,e),n.push(Dt(t,r))},replaceState(t,o,r){n[e]=Dt(t,r)},go(t){const o=e+t;o<0||o>n.length-1||(e=o)}}}}());let Gt=null,Wt=!0;function Jt(t){(!Gt||t.level>Gt.level||t.level===Gt.level&&function(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<n.length;o++){const r=n[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}(t.routerId,Gt.routerId))&&(Gt=t)}function Qt(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){let n;t.setAttribute(e,"-1");const o=()=>{t.removeAttribute(e),n()};n=ut(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function Vt(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Xt(t,e=document){return e.querySelector(t)}function Zt(t){Promise.resolve(i(t.focusElement)).then((e=>{const n=e||function(t){let e=Xt(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Vt(e,t);){if(/^H[1-6]$/i.test(e.tagName))return e;const t=Xt("h1,h2,h3,h4,h5,h6",e);if(t)return t;e=e.nextElementSibling}return null}(t.id);n||Lt(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);Qt(n)||Qt(document.documentElement)}))}const te=(t,e,n)=>(o,r)=>(U(),j).then((()=>{if(Gt&&!Wt){if(o&&Zt(Gt.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:c,uri:a}=Gt.route,u=t.createAnnouncement({path:o,fullPath:r,meta:s,params:c,uri:a},i(n));Promise.resolve(u).then((t=>{e.set(t)}))}Gt=null}else Wt=!1}));function ee(t){let e,n,o,r,s;const c=t[16].default,a=l(c,t,t[15],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let e,n;return{c(){e=y("div"),n=b(t[0]),w(e,"role","status"),w(e,"aria-atomic","true"),w(e,"aria-live","polite"),w(e,"style","position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){h(t,e,o),m(e,n)},p(t,e){1&e[0]&&_(n,t[0])},d(t){t&&g(e)}}}(t);return{c(){e=y("div"),n=v(),a&&a.c(),o=v(),i&&i.c(),r=x(),E(e,"display","none"),w(e,"aria-hidden","true"),w(e,"data-svnav-router",t[3])},m(t,c){h(t,e,c),h(t,n,c),a&&a.m(t,c),h(t,o,c),i&&i.m(t,c),h(t,r,c),s=!0},p(t,e){a&&a.p&&32768&e[0]&&p(a,c,t,t[15],e,null,null),t[2]&&t[4]&&t[1].announcements&&i.p(t,e)},i(t){s||(J(a,t),s=!0)},o(t){Q(a,t),s=!1},d(t){t&&g(e),t&&g(n),a&&a.d(t),t&&g(o),i&&i.d(t),t&&g(r)}}}const ne=at(),oe="/";function re(t,e,n){let o,r,s,c,a,{$$slots:i={},$$scope:l}=e,{basepath:f=oe}=e,{url:p=null}=e,{history:$=zt}=e,{primary:d=!0}=e,{a11y:m={}}=e;const h={createAnnouncement:t=>"Navigated to "+t.uri,announcements:!0,...m},g=f,y=Et(f),b=L(dt),v=L(mt),x=!b,w=ne(),k=d&&!(v&&!v.manageFocus),_=ft("");u(t,_,(t=>n(0,a=t)));const E=ft([]);u(t,E,(t=>n(19,r=t)));const R=ft(null);u(t,R,(t=>n(21,c=t)));let A=!1;const P=x?0:v.level+1,T=x?ft(It(it?Ht(p):$.location,y)):b;u(t,T,(t=>n(18,o=t)));const S=ft(o);u(t,S,(t=>n(20,s=t)));const M=te(h,_,T),N=t=>e=>e.filter((e=>e.id!==t));var I;return x||f===oe||Lt(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),x&&(I=()=>$.listen((t=>{const e=It(t.location,y);S.set(o),T.set(e)})),O().$$.on_mount.push(I),C(dt,T)),C(mt,{activeRoute:R,registerRoute:function(t){if(it){if(A)return;const e=Nt(t,o.pathname);if(e)return A=!0,e}else E.update((e=>{const n=N(t.id)(e);return n.push(t),n}))},unregisterRoute:function(t){E.update(N(t))},manageFocus:k,level:P,id:w,history:x?$:v.history,basepath:x?y:v.basepath}),t.$$set=t=>{"basepath"in t&&n(10,f=t.basepath),"url"in t&&n(11,p=t.url),"history"in t&&n(12,$=t.history),"primary"in t&&n(13,d=t.primary),"a11y"in t&&n(14,m=t.a11y),"$$scope"in t&&n(15,l=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==g&&Lt(3,'You cannot change the "basepath" prop. It is ignored.'),786432&t.$$.dirty[0]){const t=Mt(r,o.pathname);R.set(t)}if(1310720&t.$$.dirty[0]&&x){const t=!!o.hash,e=!t&&k,n=!t||o.pathname!==s.pathname;M(e,n)}2097152&t.$$.dirty[0]&&k&&c&&c.primary&&Jt({level:P,routerId:w,route:c})},[a,h,x,w,k,_,E,R,T,S,f,p,$,d,m,l,i]}class se extends ot{constructor(t){super(),nt(this,t,re,ee,c,{basepath:10,url:11,history:12,primary:13,a11y:14},[-1,-1])}}function ce(t,e,n=mt,o=3){L(n)||Ct(t,(t=>`You cannot use ${t} outside of a ${Pt(o)}.`),e)}function ae(){return ce(5),(t=>{const{subscribe:e}=L(t);return{subscribe:e}})(dt)}function ie(){const{history:t}=L(mt);return t}function ue(){const t=L(ht);return t?pt(t,(t=>t.base)):ft("/")}function le(){ce(10);const t=ue(),{basepath:e}=L(mt);return n=>Ut(n,i(t),e)}const fe=t=>({params:16&t,location:4&t}),pe=t=>({params:it?i(t[9]):t[4],location:t[2],navigate:t[10]});function $e(t){let e,n;return e=new se({props:{primary:t[1],$$slots:{default:[he]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,o){tt(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.primary=t[1]),34837&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function de(t){let e;const n=t[14].default,o=l(n,t,t[15],pe);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&32788&e&&p(o,n,t,t[15],e,fe,pe)},i(t){e||(J(o,t),e=!0)},o(t){Q(o,t),e=!1},d(t){o&&o.d(t)}}}function me(t){let n,o,r;const s=[{location:t[2]},{navigate:t[10]},it?i(t[9]):t[4],t[11]];var c=t[0];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Z(n.$$.fragment),o=x()},m(t,e){n&&tt(n,t,e),h(t,o,e),r=!0},p(t,e){const r=3604&e?V(s,[4&e&&{location:t[2]},1024&e&&{navigate:t[10]},528&e&&X(it?i(t[9]):t[4]),2048&e&&X(t[11])]):{};if(c!==(c=t[0])){if(n){G();const t=n;Q(t.$$.fragment,1,0,(()=>{et(t,1)})),W()}c?(n=new c(a()),Z(n.$$.fragment),J(n.$$.fragment,1),tt(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&Q(n.$$.fragment,t),r=!1},d(t){t&&g(o),n&&et(n,t)}}}function he(t){let e,n,o,r;const s=[me,de],c=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),o=x()},m(t,n){c[e].m(t,n),h(t,o,n),r=!0},p(t,r){let i=e;e=a(t),e===i?c[e].p(t,r):(G(),Q(c[i],1,1,(()=>{c[i]=null})),W(),n=c[e],n||(n=c[e]=s[e](t),n.c()),J(n,1),n.m(o.parentNode,o))},i(t){r||(J(n),r=!0)},o(t){Q(n),r=!1},d(t){c[e].d(t),t&&g(o)}}}function ge(t){let e,n,o,r,s,c=t[3]&&$e(t);return{c(){e=y("div"),n=v(),c&&c.c(),o=v(),r=y("div"),E(e,"display","none"),w(e,"aria-hidden","true"),w(e,"data-svnav-route-start",t[5]),E(r,"display","none"),w(r,"aria-hidden","true"),w(r,"data-svnav-route-end",t[5])},m(t,a){h(t,e,a),h(t,n,a),c&&c.m(t,a),h(t,o,a),h(t,r,a),s=!0},p(t,[e]){t[3]?c?(c.p(t,e),8&e&&J(c,1)):(c=$e(t),c.c(),J(c,1),c.m(o.parentNode,o)):c&&(G(),Q(c,1,1,(()=>{c=null})),W())},i(t){s||(J(c),s=!0)},o(t){Q(c),s=!1},d(t){t&&g(e),t&&g(n),c&&c.d(t),t&&g(o),t&&g(r)}}}const ye=at();function be(t,n,o){const r=["path","component","meta","primary"];let s,c,a,i,l=d(n,r),{$$slots:f={},$$scope:p}=n,{path:m=""}=n,{component:h=null}=n,{meta:g={}}=n,{primary:y=!0}=n;ce(2,n);const b=ye(),{registerRoute:v,unregisterRoute:x,activeRoute:w}=L(mt);u(t,w,(t=>o(18,a=t)));const k=ue();u(t,k,(t=>o(17,s=t)));const _=ae();u(t,_,(t=>o(2,c=t)));const E=ft(null);let R;const A=ft(),P=ft({});u(t,P,(t=>o(4,i=t))),C(ht,A),C(gt,P),C(yt,E);const T=function(){ce(7);const t=le(),{navigate:e}=ie();return(n,o)=>{const r=ct(n)?n:t(n);return e(r,o)}}();var S;let M;return it||(S=()=>x(b),O().$$.on_destroy.push(S)),t.$$set=t=>{o(23,n=e(e({},n),$(t))),o(11,l=d(n,r)),"path"in t&&o(12,m=t.path),"component"in t&&o(0,h=t.component),"meta"in t&&o(13,g=t.meta),"primary"in t&&o(1,y=t.primary),"$$scope"in t&&o(15,p=t.$$scope)},t.$$.update=()=>{if(143366&t.$$.dirty){const t=""===m,e=Rt(s,m),n={id:b,path:m,meta:g,default:t,fullPath:t?"":e,base:t?s:Ft(e,c.pathname),primary:y,focusElement:E};A.set(n),o(16,R=v(n))}if(327680&t.$$.dirty&&o(3,M=!!(R||a&&a.id===b)),327688&t.$$.dirty&&M){const{params:t}=R||a;P.set(t)}},n=$(n),[h,y,c,M,i,b,w,k,_,P,T,l,m,g,f,p]}class ve extends ot{constructor(t){super(),nt(this,t,be,ge,c,{path:12,component:0,meta:13,primary:1})}}function xe(t){let n,o,r,s;const c=t[10].default,a=l(c,t,t[9],null);let i=[{href:t[0]},t[1],t[2]],u={};for(let t=0;t<i.length;t+=1)u=e(u,i[t]);return{c(){n=y("a"),a&&a.c(),k(n,u)},m(e,c){var i,u,l,f;h(e,n,c),a&&a.m(n,null),o=!0,r||(i=n,u="click",l=t[4],i.addEventListener(u,l,f),s=()=>i.removeEventListener(u,l,f),r=!0)},p(t,[e]){a&&a.p&&512&e&&p(a,c,t,t[9],e,null,null),k(n,u=V(i,[(!o||1&e)&&{href:t[0]},2&e&&t[1],4&e&&t[2]]))},i(t){o||(J(a,t),o=!0)},o(t){Q(a,t),o=!1},d(t){t&&g(n),a&&a.d(t),r=!1,s()}}}function we(t,n,o){const r=["to","replace","state","getProps"];let s,c=d(n,r),{$$slots:a={},$$scope:i}=n,{to:l}=n,{replace:f=!1}=n,{state:p={}}=n,{getProps:m=null}=n;ce(1,n);const h=ae();u(t,h,(t=>o(11,s=t)));const g=T(),y=le(),{navigate:b}=ie();let v,x,w,k,_;return t.$$set=t=>{o(17,n=e(e({},n),$(t))),o(18,c=d(n,r)),"to"in t&&o(5,l=t.to),"replace"in t&&o(6,f=t.replace),"state"in t&&o(7,p=t.state),"getProps"in t&&o(8,m=t.getProps),"$$scope"in t&&o(9,i=t.$$scope)},t.$$.update=()=>{2080&t.$$.dirty&&o(0,v=y(l,s)),2049&t.$$.dirty&&o(12,x=vt(s.pathname,v)),2049&t.$$.dirty&&o(13,w=v===s.pathname),8192&t.$$.dirty&&o(1,k=w?{"aria-current":"page"}:{}),o(2,_=(()=>{if(st(m)){const t=m({location:s,href:v,isPartiallyCurrent:x,isCurrent:w});return{...c,...t}}return c})())},n=$(n),[v,k,_,h,function(t){if(g("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();b(v,{state:p,replace:w||f})}},l,f,p,m,i,a]}class ke extends ot{constructor(t){super(),nt(this,t,we,xe,c,{to:5,replace:6,state:7,getProps:8})}}var _e={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ee(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Re(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ae(t,e){var n,o,r,s,c,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,i=[],u="",l=e||{},f=0;function p(t){var e=_e[t[1]||""],n=i[i.length-1]==t;return e?e[1]?(n?i.pop():i.push(t),e[0|n]):e[0]:t}function $(){for(var t="";i.length;)t+=p(i[i.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return l[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)o=t.substring(f,r.index),f=a.lastIndex,n=r[0],o.match(/[^\\](\\\\)*\\$/)||((c=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ee(Re(c).replace(/^\n+|\n+$/g,""))+"</code></pre>":(c=r[6])?(c.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),s=Ae(Ee(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==c?c="blockquote":(c=c.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+c+">"+s+"</"+c+">"):r[8]?n='<img src="'+Re(r[8])+'" alt="'+Re(r[7])+'">':r[10]?(u=u.replace("<a>",'<a href="'+Re(r[11]||l[o.toLowerCase()])+'">'),n=$()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(c="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ae(r[12]||r[15],l)+"</"+c+">":r[16]?n="<code>"+Re(r[16])+"</code>":(r[17]||r[1])&&(n=p(r[17]||"--"))),u+=o,u+=n;return(u+t.substring(f)+$()).replace(/^\n+|\n+$/g,"")}function Pe(t){let e;return{c(){e=b("Home")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function Oe(t){let e;return{c(){e=b("Blog")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function Te(t){let e;return{c(){e=b("Topic")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function Ce(t){let e;return{c(){e=b("About")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function Le(t){let e,n,o,r,s,c,a,i,u,l,f,p,$,d;return r=new ke({props:{to:"/",class:"navAnchor",$$slots:{default:[Pe]},$$scope:{ctx:t}}}),a=new ke({props:{to:"/blog",class:"navAnchor",$$slots:{default:[Oe]},$$scope:{ctx:t}}}),l=new ke({props:{to:"/topic",class:"navAnchor",$$slots:{default:[Te]},$$scope:{ctx:t}}}),$=new ke({props:{to:"/about",class:"navAnchor",$$slots:{default:[Ce]},$$scope:{ctx:t}}}),{c(){e=y("nav"),n=y("ul"),o=y("li"),Z(r.$$.fragment),s=v(),c=y("li"),Z(a.$$.fragment),i=v(),u=y("li"),Z(l.$$.fragment),f=v(),p=y("li"),Z($.$$.fragment),w(o,"class","svelte-r02kv1"),w(c,"class","svelte-r02kv1"),w(u,"class","svelte-r02kv1"),w(p,"class","svelte-r02kv1"),w(n,"class","svelte-r02kv1"),w(e,"class","svelte-r02kv1")},m(t,g){h(t,e,g),m(e,n),m(n,o),tt(r,o,null),m(n,s),m(n,c),tt(a,c,null),m(n,i),m(n,u),tt(l,u,null),m(n,f),m(n,p),tt($,p,null),d=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),a.$set(o);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),$.$set(c)},i(t){d||(J(r.$$.fragment,t),J(a.$$.fragment,t),J(l.$$.fragment,t),J($.$$.fragment,t),d=!0)},o(t){Q(r.$$.fragment,t),Q(a.$$.fragment,t),Q(l.$$.fragment,t),Q($.$$.fragment,t),d=!1},d(t){t&&g(e),et(r),et(a),et(l),et($)}}}class Se extends ot{constructor(t){super(),nt(this,t,null,Le,c,{})}}function Me(e){let n,o,r,s,c;return s=new Se({}),{c(){n=y("div"),o=y("header"),o.innerHTML='<h1 class="svelte-1lrvsco">Mark Temple-Heald</h1> \n  <h2 class="svelte-1lrvsco">the right tool for the job</h2>',r=v(),Z(s.$$.fragment),w(n,"class","svelte-1lrvsco")},m(t,e){h(t,n,e),m(n,o),m(n,r),tt(s,n,null),c=!0},p:t,i(t){c||(J(s.$$.fragment,t),c=!0)},o(t){Q(s.$$.fragment,t),c=!1},d(t){t&&g(n),et(s)}}}class Ne extends ot{constructor(t){super(),nt(this,t,null,Me,c,{})}}function Ie(e){let n;return{c(){n=y("footer"),n.innerHTML='<p>This is my site, there are many like it but this one is mine.</p> \n  <p>If you don&#39;t like it, you know where the close button is.</p> \n  <a href="https://www.linkedin.com/in/mtempleheald" target="_blank">Mark Temple-Heald</a> \n  <a href="https://mtempleheald.github.io" target="_blank">Home</a> \n  <a href="https://github.com/mtempleheald" target="_blank">GitHub</a>',w(n,"class","svelte-1kbxfvc")},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class je extends ot{constructor(t){super(),nt(this,t,null,Ie,c,{})}}function He(t){let e,n,o,r,s,c,a,i=t[1].id+"";return{c(){e=y("h1"),n=b("Blog post /blog/"),o=b(t[0]),r=v(),s=y("p"),c=b("TODO use snarkdown to render markdown file based on passed id = "),a=b(i)},m(t,i){h(t,e,i),m(e,n),m(e,o),h(t,r,i),h(t,s,i),m(s,c),m(s,a)},p(t,e){1&e&&_(o,t[0]),2&e&&i!==(i=t[1].id+"")&&_(a,i)},d(t){t&&g(e),t&&g(r),t&&g(s)}}}function Ue(t){let e;return{c(){e=y("h1"),e.textContent="Blogs to be listed here"},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function Fe(t){let e,n,o,r,s;return n=new ve({props:{path:":id",$$slots:{default:[He,({params:t})=>({1:t}),({params:t})=>t?2:0]},$$scope:{ctx:t}}}),r=new ve({props:{$$slots:{default:[Ue]},$$scope:{ctx:t}}}),{c(){e=y("article"),Z(n.$$.fragment),o=v(),Z(r.$$.fragment)},m(t,c){h(t,e,c),tt(n,e,null),m(e,o),tt(r,e,null),s=!0},p(t,[e]){const o={};7&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s)},i(t){s||(J(n.$$.fragment,t),J(r.$$.fragment,t),s=!0)},o(t){Q(n.$$.fragment,t),Q(r.$$.fragment,t),s=!1},d(t){t&&g(e),et(n),et(r)}}}function qe(t,e,n){let{blogRoute:o}=e;return t.$$set=t=>{"blogRoute"in t&&n(0,o=t.blogRoute)},[o]}class Be extends ot{constructor(t){super(),nt(this,t,qe,Fe,c,{blogRoute:0})}}function De(t){let e,n,o,r,s,c,a,i=t[1].id+"";return{c(){e=y("h1"),n=b("Topic "),o=b(t[0]),r=v(),s=y("p"),c=b("TODO use snarkdown to render markdown file based on passed id = "),a=b(i)},m(t,i){h(t,e,i),m(e,n),m(e,o),h(t,r,i),h(t,s,i),m(s,c),m(s,a)},p(t,e){1&e&&_(o,t[0]),2&e&&i!==(i=t[1].id+"")&&_(a,i)},d(t){t&&g(e),t&&g(r),t&&g(s)}}}function Ke(t){let e;return{c(){e=y("h1"),e.textContent="Topics to be listed here"},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function Ye(t){let e,n,o,r,s;return n=new ve({props:{path:":id",$$slots:{default:[De,({params:t})=>({1:t}),({params:t})=>t?2:0]},$$scope:{ctx:t}}}),r=new ve({props:{path:"",$$slots:{default:[Ke]},$$scope:{ctx:t}}}),{c(){e=y("article"),Z(n.$$.fragment),o=v(),Z(r.$$.fragment)},m(t,c){h(t,e,c),tt(n,e,null),m(e,o),tt(r,e,null),s=!0},p(t,[e]){const o={};7&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s)},i(t){s||(J(n.$$.fragment,t),J(r.$$.fragment,t),s=!0)},o(t){Q(n.$$.fragment,t),Q(r.$$.fragment,t),s=!1},d(t){t&&g(e),et(n),et(r)}}}function ze(t,e,n){let{topicRoute:o}=e;return t.$$set=t=>{"topicRoute"in t&&n(0,o=t.topicRoute)},[o]}class Ge extends ot{constructor(t){super(),nt(this,t,ze,Ye,c,{topicRoute:0})}}function We(e){let n,o,r=Ae(e[0])+"";return{c(){o=x(),n=new R(o)},m(t,e){n.m(r,t,e),h(t,o,e)},p:t,d(t){t&&g(o),t&&n.d()}}}function Je(e){let n,o,r=Ae(e[1])+"";return{c(){o=x(),n=new R(o)},m(t,e){n.m(r,t,e),h(t,o,e)},p:t,d(t){t&&g(o),t&&n.d()}}}function Qe(e){let n,o,r=Ae(e[2])+"";return{c(){o=x(),n=new R(o)},m(t,e){n.m(r,t,e),h(t,o,e)},p:t,d(t){t&&g(o),t&&n.d()}}}function Ve(t){let e,n,o,r,s,c,a,i,u,l,f,p,$,d,b;return e=new Ne({}),r=new ve({props:{path:"/",$$slots:{default:[We]},$$scope:{ctx:t}}}),c=new ve({props:{path:"blog/*blogRoute",component:Be}}),i=new ve({props:{path:"topic/*topicRoute",component:Ge}}),l=new ve({props:{path:"about",$$slots:{default:[Je]},$$scope:{ctx:t}}}),p=new ve({props:{$$slots:{default:[Qe]},$$scope:{ctx:t}}}),d=new je({}),{c(){Z(e.$$.fragment),n=v(),o=y("main"),Z(r.$$.fragment),s=v(),Z(c.$$.fragment),a=v(),Z(i.$$.fragment),u=v(),Z(l.$$.fragment),f=v(),Z(p.$$.fragment),$=v(),Z(d.$$.fragment),w(o,"class","svelte-i4asm1")},m(t,g){tt(e,t,g),h(t,n,g),h(t,o,g),tt(r,o,null),m(o,s),tt(c,o,null),m(o,a),tt(i,o,null),m(o,u),tt(l,o,null),m(o,f),tt(p,o,null),h(t,$,g),tt(d,t,g),b=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),l.$set(o);const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s)},i(t){b||(J(e.$$.fragment,t),J(r.$$.fragment,t),J(c.$$.fragment,t),J(i.$$.fragment,t),J(l.$$.fragment,t),J(p.$$.fragment,t),J(d.$$.fragment,t),b=!0)},o(t){Q(e.$$.fragment,t),Q(r.$$.fragment,t),Q(c.$$.fragment,t),Q(i.$$.fragment,t),Q(l.$$.fragment,t),Q(p.$$.fragment,t),Q(d.$$.fragment,t),b=!1},d(t){et(e,t),t&&g(n),t&&g(o),et(r),et(c),et(i),et(l),et(p),t&&g($),et(d,t)}}}function Xe(t){let e,n;return e=new se({props:{$$slots:{default:[Ve]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,o){tt(e,t,o),n=!0},p(t,[n]){const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function Ze(t){return["\n# Home\n\nMindful meanderings manifest more manageable machinations.\n\nManoeuvring murky multifaceted modernism means meticulously managing many mistakes, misconceptions, misunderstandings.\n\nMeasured multipronged musings, mechanical movements, may maximise meritorious magnificence.\n","\n# About me\n\nTODO\n","\n# Page not found\n\nWhat on Earth were you trying to achieve?\n"]}return new class extends ot{constructor(t){super(),nt(this,t,Ze,Xe,c,{})}}({target:document.body})}();
//# sourceMappingURL=main.js.map
