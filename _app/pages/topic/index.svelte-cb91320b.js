import{S as A,i as H,s as N,e as _,t as k,k as d,c as u,a as v,h as b,d as p,m as g,b as x,g as m,F as f,j as q,l as y,G as E,M as w}from"../../chunks/vendor-5ca848cc.js";function S(r,a,c){const l=r.slice();return l[1]=a[c],l}function T(r){let a,c,l=r[1].replace(/\-/g," ")+"",o,h,s,e,n;return{c(){a=_("a"),c=_("span"),o=k(l),h=d(),s=_("hr"),e=d(),this.h()},l(t){a=u(t,"A",{href:!0});var i=v(a);c=u(i,"SPAN",{});var j=v(c);o=b(j,l),j.forEach(p),h=g(i),s=u(i,"HR",{}),e=g(i),i.forEach(p),this.h()},h(){x(a,"href",n="/topic/"+r[1])},m(t,i){m(t,a,i),f(a,c),f(c,o),f(a,h),f(a,s),f(a,e)},p(t,i){i&1&&l!==(l=t[1].replace(/\-/g," ")+"")&&q(o,l),i&1&&n!==(n="/topic/"+t[1])&&x(a,"href",n)},d(t){t&&p(a)}}}function C(r){let a,c,l,o,h=r[0],s=[];for(let e=0;e<h.length;e+=1)s[e]=T(S(r,h,e));return{c(){a=_("h1"),c=k("Topics"),l=d();for(let e=0;e<s.length;e+=1)s[e].c();o=y()},l(e){a=u(e,"H1",{});var n=v(a);c=b(n,"Topics"),n.forEach(p),l=g(e);for(let t=0;t<s.length;t+=1)s[t].l(e);o=y()},m(e,n){m(e,a,n),f(a,c),m(e,l,n);for(let t=0;t<s.length;t+=1)s[t].m(e,n);m(e,o,n)},p(e,[n]){if(n&1){h=e[0];let t;for(t=0;t<h.length;t+=1){const i=S(e,h,t);s[t]?s[t].p(i,n):(s[t]=T(i),s[t].c(),s[t].m(o.parentNode,o))}for(;t<s.length;t+=1)s[t].d(1);s.length=h.length}},i:E,o:E,d(e){e&&p(a),e&&p(l),w(s,e),e&&p(o)}}}async function M({fetch:r}){return{props:{topics:await r("/api/topics.json").then(c=>c.json())}}}function F(r,a,c){let{topics:l}=a;return r.$$set=o=>{"topics"in o&&c(0,l=o.topics)},[l]}class P extends A{constructor(a){super();H(this,a,F,C,N,{topics:0})}}export{P as default,M as load};
