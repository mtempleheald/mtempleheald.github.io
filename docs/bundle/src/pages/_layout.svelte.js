import{SvelteComponent as e,init as t,safe_not_equal as n,create_slot as s,element as l,create_component as r,space as $,attr as o,insert as a,mount_component as m,append as u,update_slot as c,transition_in as f,transition_out as i,detach as p,destroy_component as d}from"../../node_modules/svelte/internal/index.mjs.js";import g from"../Header.svelte.js";import v from"../Footer.svelte.js";function j(e){let t,n,j,h,w,x,b;n=new g({});const F=e[1].default,H=s(F,e,e[0],null);return x=new v({}),{c(){t=l("div"),r(n.$$.fragment),j=$(),h=l("main"),H&&H.c(),w=$(),r(x.$$.fragment),o(h,"class","svelte-gah9nb"),o(t,"class","wrapper svelte-gah9nb")},m(e,s){a(e,t,s),m(n,t,null),u(t,j),u(t,h),H&&H.m(h,null),a(e,w,s),m(x,e,s),b=!0},p(e,[t]){H&&H.p&&1&t&&c(H,F,e,e[0],t,null,null)},i(e){b||(f(n.$$.fragment,e),f(H,e),f(x.$$.fragment,e),b=!0)},o(e){i(n.$$.fragment,e),i(H,e),i(x.$$.fragment,e),b=!1},d(e){e&&p(t),d(n),H&&H.d(e),e&&p(w),d(x,e)}}}function h(e,t,n){let{$$slots:s={},$$scope:l}=t;return e.$$set=e=>{"$$scope"in e&&n(0,l=e.$$scope)},[l,s]}export default class extends e{constructor(e){super(),t(this,e,h,j,n,{})}}
//# sourceMappingURL=_layout.svelte.js.map
