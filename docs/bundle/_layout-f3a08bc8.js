import{S as e,i as t,s,e as l,t as n,c as a,f as r,b as c,g as o,d as i,a as u,n as f,h as m,j as h,u as p,k as $,l as d,m as g,o as b,p as v,q as k,r as w,v as H}from"./main-805550fd.js";function T(e,t,s){const l=e.slice();return l[3]=t[s][0],l[4]=t[s][1],l}function x(e){let t,s,u,f,m=e[4]+"";return{c(){t=l("li"),s=l("a"),u=n(m),a(s,"href",f=e[0](e[3])),a(s,"class","svelte-1ucfabm"),r(s,"selected",e[1](e[3])),a(t,"class","svelte-1ucfabm")},m(e,l){c(e,t,l),o(t,s),o(s,u)},p(e,t){1&t&&f!==(f=e[0](e[3]))&&a(s,"href",f),6&t&&r(s,"selected",e[1](e[3]))},d(e){e&&i(t)}}}function M(e){let t,s,n,r,h=e[2],p=[];for(let t=0;t<h.length;t+=1)p[t]=x(T(e,h,t));return{c(){t=l("nav"),s=l("ul"),n=l("li"),n.innerHTML='<a href="/" class="svelte-1ucfabm">home</a>',r=u();for(let e=0;e<p.length;e+=1)p[e].c();a(n,"class","svelte-1ucfabm"),a(s,"class","svelte-1ucfabm"),a(t,"class","svelte-1ucfabm")},m(e,l){c(e,t,l),o(t,s),o(s,n),o(s,r);for(let e=0;e<p.length;e+=1)p[e].m(s,null)},p(e,[t]){if(7&t){let l;for(h=e[2],l=0;l<h.length;l+=1){const n=T(e,h,l);p[l]?p[l].p(n,t):(p[l]=x(n),p[l].c(),p[l].m(s,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=h.length}},i:f,o:f,d(e){e&&i(t),m(p,e)}}}function y(e,t,s){let l,n;h(e,p,(e=>s(0,l=e))),h(e,$,(e=>s(1,n=e)));return[l,n,[["./topic","topic"],["./blog","blog"]]]}class j extends e{constructor(e){super(),t(this,e,y,M,s,{})}}function L(e){let t,s,n,r,m;return r=new j({}),{c(){t=l("div"),s=l("header"),s.innerHTML='<h1 class="svelte-1lrvsco">Mark Temple-Heald</h1> \n  <h2 class="svelte-1lrvsco">the right tool for the job</h2>',n=u(),d(r.$$.fragment),a(t,"class","svelte-1lrvsco")},m(e,l){c(e,t,l),o(t,s),o(t,n),g(r,t,null),m=!0},p:f,i(e){m||(b(r.$$.fragment,e),m=!0)},o(e){v(r.$$.fragment,e),m=!1},d(e){e&&i(t),k(r)}}}class _ extends e{constructor(e){super(),t(this,e,null,L,s,{})}}function q(e){let t;return{c(){t=l("footer"),t.innerHTML='<p>This is my site, there are many like it but this one is mine.</p> \n  <p>If you don&#39;t like it, you know where the close button is.</p> \n  <a href="https://www.linkedin.com/in/mtempleheald" target="_blank">Mark Temple-Heald</a> \n  <a href="https://mtempleheald.github.io" target="_blank">Home</a> \n  <a href="https://github.com/mtempleheald" target="_blank">GitHub</a>',a(t,"class","svelte-f6r59l")},m(e,s){c(e,t,s)},p:f,i:f,o:f,d(e){e&&i(t)}}}class G extends e{constructor(e){super(),t(this,e,null,q,s,{})}}function I(e){let t,s,n,r,f,m,h;s=new _({});const p=e[1].default,$=w(p,e,e[0],null);return m=new G({}),{c(){t=l("div"),d(s.$$.fragment),n=u(),r=l("main"),$&&$.c(),f=u(),d(m.$$.fragment),a(r,"class","svelte-gah9nb"),a(t,"class","wrapper svelte-gah9nb")},m(e,l){c(e,t,l),g(s,t,null),o(t,n),o(t,r),$&&$.m(r,null),c(e,f,l),g(m,e,l),h=!0},p(e,[t]){$&&$.p&&1&t&&H($,p,e,e[0],t,null,null)},i(e){h||(b(s.$$.fragment,e),b($,e),b(m.$$.fragment,e),h=!0)},o(e){v(s.$$.fragment,e),v($,e),v(m.$$.fragment,e),h=!1},d(e){e&&i(t),k(s),$&&$.d(e),e&&i(f),k(m,e)}}}function S(e,t,s){let{$$slots:l={},$$scope:n}=t;return e.$$set=e=>{"$$scope"in e&&s(0,n=e.$$scope)},[n,l]}export default class extends e{constructor(e){super(),t(this,e,S,I,s,{})}}
//# sourceMappingURL=_layout-f3a08bc8.js.map
