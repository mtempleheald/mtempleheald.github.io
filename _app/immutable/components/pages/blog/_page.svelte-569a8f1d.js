import{S as w,i as z,s as D,k as d,q as N,a as g,e as R,l as m,m as A,r as P,h as u,c as b,b as B,B as f,A as x,I as F,n as y,u as C}from"../../../chunks/index-c16a1df2.js";function I(i,t,h){const s=i.slice();return s[1]=t[h],s}function j(i){let t,h,s=i[1].title+"",o,c,l,e,n,a=i[1].date+"",p,E,S,k,v;return{c(){t=d("a"),h=d("span"),o=N(s),c=g(),l=d("br"),e=g(),n=d("span"),p=N(a),E=g(),S=d("hr"),k=g(),this.h()},l(_){t=m(_,"A",{href:!0});var r=A(t);h=m(r,"SPAN",{});var q=A(h);o=P(q,s),q.forEach(u),c=b(r),l=m(r,"BR",{}),e=b(r),n=m(r,"SPAN",{});var H=A(n);p=P(H,a),H.forEach(u),E=b(r),S=m(r,"HR",{}),k=b(r),r.forEach(u),this.h()},h(){y(t,"href",v="/blog/"+i[1].url)},m(_,r){B(_,t,r),f(t,h),f(h,o),f(t,c),f(t,l),f(t,e),f(t,n),f(n,p),f(t,E),f(t,S),f(t,k)},p(_,r){r&1&&s!==(s=_[1].title+"")&&C(o,s),r&1&&a!==(a=_[1].date+"")&&C(p,a),r&1&&v!==(v="/blog/"+_[1].url)&&y(t,"href",v)},d(_){_&&u(t)}}}function G(i){let t,h,s,o,c=i[0].blogs,l=[];for(let e=0;e<c.length;e+=1)l[e]=j(I(i,c,e));return{c(){t=d("h1"),h=N("Blogs"),s=g();for(let e=0;e<l.length;e+=1)l[e].c();o=R()},l(e){t=m(e,"H1",{});var n=A(t);h=P(n,"Blogs"),n.forEach(u),s=b(e);for(let a=0;a<l.length;a+=1)l[a].l(e);o=R()},m(e,n){B(e,t,n),f(t,h),B(e,s,n);for(let a=0;a<l.length;a+=1)l[a].m(e,n);B(e,o,n)},p(e,[n]){if(n&1){c=e[0].blogs;let a;for(a=0;a<c.length;a+=1){const p=I(e,c,a);l[a]?l[a].p(p,n):(l[a]=j(p),l[a].c(),l[a].m(o.parentNode,o))}for(;a<l.length;a+=1)l[a].d(1);l.length=c.length}},i:x,o:x,d(e){e&&u(t),e&&u(s),F(l,e),e&&u(o)}}}function J(i,t,h){let{data:s}=t;return i.$$set=o=>{"data"in o&&h(0,s=o.data)},[s]}class L extends w{constructor(t){super(),z(this,t,J,G,D,{data:0})}}export{L as default};
