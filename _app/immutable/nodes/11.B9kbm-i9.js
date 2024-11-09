import{s as va,n as Z}from"../chunks/scheduler.Cp24rM3s.js";import{S as Ea,i as fa,e,s as o,H as K,c as p,k as c,a as l,o as z,r as J,d as n,b as Q,g as t}from"../chunks/index.CkxK-9SL.js";function xa(ma){let i,$=`I was getting irritated with breadcrumbs in APEX, specifically having to maintain a separate list for both breadcrumbs and “normal” navigation.<br/>
What I wanted was:`,I,r,aa="<li>every time you moved to a new page, remember the previous one as a parent</li> <li>if you move to a page you’d already been to, reset to that point.</li>",R,u,na="So when a new version of APEX came out, I looked into the new plug-in development feature, this is the result.",C,k,sa="The idea is simple, consisting of the following elements:",P,d,ta=`<li>Add a Region to Page 0 of the application referencing the plug-in, this renders a new breadcrumb element on each render (page load)</li> <li>Add navigation to the application
<ul><li>I used a list (which has no notion of breadcrumbs), implemented on each page for demonstration purposes</li> <li>This could equally well be chart navigation, interactive reports, etc</li></ul></li> <li>An APEX collection to store the current state of the breadcrumbs</li>`,A,_,ea='For the record, I’m not suggesting that this is a particularly good approach, it doesn’t cater for session state management and it is another server process to execute, which will obviously affect performance, but <a href="https://apex.oracle.com/pls/apex/f?p=55790:1::::::" rel="nofollow">it works</a>.',H,g,pa="Creating a Plug-In",U,m,oa="Creating a plug-in is as simple as creating a package which exposes a function with the right signature, in this case, for a Region plug-in:",O,y,D,ya=`<code class="language-sql"><span class="token keyword">FUNCTION</span> render <span class="token punctuation">(</span>p_region              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_region
                <span class="token punctuation">,</span>p_plugin              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_plugin
                <span class="token punctuation">,</span>p_is_printer_friendly <span class="token operator">IN</span> <span class="token keyword">BOOLEAN</span><span class="token punctuation">)</span>
  <span class="token keyword">RETURN</span> apex_plugin<span class="token punctuation">.</span>t_region_render_result</code>`,L,w,la=`Implementing the plug-in is even easier, simply add a plug-in Shared Component to the application, referencing the PL/SQL package, in this case:
Render Procedure/Function Name = true_breadcrumbs.render`,S,h,ca="The Code",B,b,ia="Page 0 Region Position 02 (didn’t have to be here)",F,v,ra="<li>Identification &gt; Title: True Breadcrumbs</li> <li>Identification &gt; Type: True Breadcrumbs [Plug-In]</li> <li>Header and Footer &gt; Header Text (this is only a demo, I wouldn’t normally add CSS directly in the HTML)</li>",M,E,q,wa=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">ul.true_breadcrumbs</span> <span class="token punctuation">&#123;</span>
    <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token selector">ul.true_breadcrumbs li</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token selector">ul.true_breadcrumbs li:before</span> <span class="token punctuation">&#123;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" > "</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token selector">ul.true_breadcrumbs li:first-child:before</span> <span class="token punctuation">&#123;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,Y,f,ua="Package header",G,x,V,ha=`<code class="language-sql"><span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> PACKAGE true_breadcrumbs <span class="token keyword">AS</span>

  <span class="token keyword">FUNCTION</span> render <span class="token punctuation">(</span>p_region              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_region
                  <span class="token punctuation">,</span>p_plugin              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_plugin
                  <span class="token punctuation">,</span>p_is_printer_friendly <span class="token operator">IN</span> <span class="token keyword">BOOLEAN</span><span class="token punctuation">)</span>
    <span class="token keyword">RETURN</span> apex_plugin<span class="token punctuation">.</span>t_region_render_result<span class="token punctuation">;</span>

<span class="token keyword">END</span> true_breadcrumbs<span class="token punctuation">;</span></code>`,j,N,ka="Package body",W,T,X,ba=`<code class="language-sql"><span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> PACKAGE BODY true_breadcrumbs <span class="token keyword">AS</span>
<span class="token comment">/**
%usage   Set of program units which work together to provide an easily-implemented breadcrumb solution without manual development effort
%usage   Designed to be implemented on a global page ("page 0")
%usage   Displayed by default on all pages except 101 (login), other popups can be excluded by altering the conditional display settings
%author  Mark Temple-Heald
%version 1.0  25-JAN-2014 Initial version
*/</span>
  <span class="token keyword">CURSOR</span> c_breadcrumbs <span class="token operator">IS</span>
    <span class="token keyword">SELECT</span> N001 application_id
    <span class="token punctuation">,</span>      N002 page_id
    <span class="token punctuation">,</span>      C001 page_name
    <span class="token punctuation">,</span>      seq_id
    <span class="token keyword">FROM</span>   apex_collections
    <span class="token keyword">WHERE</span>  collection_name <span class="token operator">=</span> <span class="token string">'TRUE_BREADCRUMBS'</span>
    <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> seq_id<span class="token punctuation">;</span>

<span class="token comment">/**
%usage   Use the ApEx data dictionary to obtain the page name from the page id, for use as a breadcrumb label
*/</span>
  <span class="token keyword">FUNCTION</span> get_page_name <span class="token punctuation">(</span>p_application_id <span class="token operator">IN</span> apex_application_pages<span class="token punctuation">.</span>application_id<span class="token operator">%</span><span class="token keyword">TYPE</span>
                         <span class="token punctuation">,</span>p_page_id        <span class="token operator">IN</span> apex_application_pages<span class="token punctuation">.</span>page_id<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">)</span>
    <span class="token keyword">RETURN</span> apex_application_pages<span class="token punctuation">.</span>page_name<span class="token operator">%</span><span class="token keyword">TYPE</span>
  <span class="token operator">IS</span>
    v_page_name apex_application_pages<span class="token punctuation">.</span>page_name<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">;</span>
  <span class="token keyword">BEGIN</span>

    <span class="token keyword">SELECT</span> page_name
    <span class="token keyword">INTO</span>   v_page_name
    <span class="token keyword">FROM</span>   apex_application_pages
    <span class="token keyword">WHERE</span>  application_id <span class="token operator">=</span> p_application_id
    <span class="token operator">AND</span>    page_id        <span class="token operator">=</span> p_page_id<span class="token punctuation">;</span>

    <span class="token keyword">RETURN</span> v_page_name<span class="token punctuation">;</span>

  <span class="token keyword">END</span> get_page_name<span class="token punctuation">;</span>

<span class="token comment">/**
%usage   Update the breadcrumb collection to produce the shortest path from source to the current breadcrumb
*/</span>
  <span class="token keyword">PROCEDURE</span> update_breadcrumbs <span class="token punctuation">(</span>p_application_id <span class="token operator">IN</span> apex_application_pages<span class="token punctuation">.</span>application_id<span class="token operator">%</span><span class="token keyword">TYPE</span>
                               <span class="token punctuation">,</span>p_page_id        <span class="token operator">IN</span> apex_application_pages<span class="token punctuation">.</span>page_id<span class="token operator">%</span><span class="token keyword">TYPE</span>
                               <span class="token punctuation">,</span>p_page_name      <span class="token operator">IN</span> apex_application_pages<span class="token punctuation">.</span>page_name<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">)</span>
  <span class="token operator">IS</span>
    v_found <span class="token keyword">BOOLEAN</span> :<span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">;</span>
    v_seq_id NUMBER<span class="token punctuation">;</span>
  <span class="token keyword">BEGIN</span>
    <span class="token comment">-- create collection if it doesn't already exist</span>
    <span class="token comment">-- list of pages visited in chronological order starting with the first page visited (where this region plug-in is displayed)</span>
    <span class="token comment">-- N001 = APP_ID, N002 = APP_PAGE_ID, C001 = Breadcrumb title/ page name</span>
    <span class="token keyword">IF</span> <span class="token operator">NOT</span> apex_collection<span class="token punctuation">.</span>collection_exists <span class="token punctuation">(</span><span class="token string">'TRUE_BREADCRUMBS'</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span>
      apex_collection<span class="token punctuation">.</span>create_collection <span class="token punctuation">(</span><span class="token string">'TRUE_BREADCRUMBS'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

    <span class="token keyword">IF</span> p_page_id <span class="token operator">=</span> <span class="token number">101</span> <span class="token keyword">THEN</span>

      <span class="token comment">-- the login page should not appear in breadcrumbs, so the next page visited will be home</span>
      apex_collection<span class="token punctuation">.</span>truncate_collection <span class="token punctuation">(</span><span class="token string">'TRUE_BREADCRUMBS'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">ELSE</span>

      <span class="token keyword">FOR</span> i <span class="token operator">IN</span> c_breadcrumbs <span class="token keyword">LOOP</span>

        <span class="token keyword">IF</span> v_found <span class="token keyword">THEN</span>
          <span class="token comment">-- within this loop we've already encountered this page, so delete breadcrumbs further down the trail</span>
          apex_collection<span class="token punctuation">.</span>delete_member <span class="token punctuation">(</span><span class="token string">'TRUE_BREADCRUMBS'</span><span class="token punctuation">,</span> i<span class="token punctuation">.</span>seq_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
        <span class="token keyword">IF</span> i<span class="token punctuation">.</span>application_id <span class="token operator">=</span> p_application_id <span class="token operator">AND</span>
           i<span class="token punctuation">.</span>page_id        <span class="token operator">=</span> p_page_id
        <span class="token keyword">THEN</span>
          <span class="token comment">-- we have already visited this page within this session, so mark for delete of everything further down the breacrumb trail</span>
          v_found :<span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">;</span>
        <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

      <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>

      <span class="token keyword">IF</span> <span class="token operator">NOT</span> v_found <span class="token keyword">THEN</span>

        v_seq_id :<span class="token operator">=</span> apex_collection<span class="token punctuation">.</span>add_member <span class="token punctuation">(</span>p_collection_name <span class="token operator">=</span><span class="token operator">></span> <span class="token string">'TRUE_BREADCRUMBS'</span>
                                               <span class="token punctuation">,</span>p_n001            <span class="token operator">=</span><span class="token operator">></span> p_application_id
                                               <span class="token punctuation">,</span>p_n002            <span class="token operator">=</span><span class="token operator">></span> p_page_id
                                               <span class="token punctuation">,</span>p_c001            <span class="token operator">=</span><span class="token operator">></span> p_page_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

    <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

  <span class="token keyword">END</span> update_breadcrumbs<span class="token punctuation">;</span>
<span class="token comment">/**
%usage   Produce HTML to represent the breadcrumbs, based on what is stored in the global associative array
*/</span>
  <span class="token keyword">FUNCTION</span> make_html
    <span class="token keyword">RETURN</span> VARCHAR2
  <span class="token operator">IS</span>
    v_html VARCHAR2<span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">BEGIN</span>
    v_html :<span class="token operator">=</span> <span class="token string">'&lt;ul class="true_breadcrumbs">'</span><span class="token punctuation">;</span>
    <span class="token keyword">FOR</span> i <span class="token operator">IN</span> c_breadcrumbs <span class="token keyword">LOOP</span>
      v_html :<span class="token operator">=</span> v_html <span class="token operator">||</span> <span class="token string">'&lt;li>&lt;a href="f?p='</span><span class="token operator">||</span>i<span class="token punctuation">.</span>application_id<span class="token operator">||</span><span class="token string">':'</span><span class="token operator">||</span>i<span class="token punctuation">.</span>page_id<span class="token operator">||</span><span class="token string">':'</span><span class="token operator">||</span>V<span class="token punctuation">(</span><span class="token string">'APP_SESSION'</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token string">'">'</span><span class="token operator">||</span>i<span class="token punctuation">.</span>page_name<span class="token operator">||</span><span class="token string">'&lt;/a>&lt;/li>'</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
    v_html :<span class="token operator">=</span> v_html <span class="token operator">||</span> <span class="token string">'&lt;/ul>'</span><span class="token punctuation">;</span>
    <span class="token keyword">RETURN</span> v_html<span class="token punctuation">;</span>
  <span class="token keyword">END</span> make_html<span class="token punctuation">;</span>
<span class="token comment">/**
%usage   Function implementing the region plug-in interface which produces breadcrumbs in unstyled HTML
%usage   The first time this is called (the first page accessed within this application) will act as the home breadcrumb
%usage   Any page accessed which is not currently in the trail will be added.
%usage   Any page revisited will become the new current breadcrumb, truncating crumbs further down the trail
*/</span>
  <span class="token keyword">FUNCTION</span> render <span class="token punctuation">(</span>p_region              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_region
                  <span class="token punctuation">,</span>p_plugin              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_plugin
                  <span class="token punctuation">,</span>p_is_printer_friendly <span class="token operator">IN</span> <span class="token keyword">BOOLEAN</span><span class="token punctuation">)</span>
    <span class="token keyword">RETURN</span> apex_plugin<span class="token punctuation">.</span>t_region_render_result
  <span class="token operator">IS</span>
    v_application_id apex_application_pages<span class="token punctuation">.</span>application_id<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">;</span>
    v_page_id        apex_application_pages<span class="token punctuation">.</span>page_id<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">;</span>
    v_page_name      apex_application_pages<span class="token punctuation">.</span>page_name<span class="token operator">%</span><span class="token keyword">TYPE</span><span class="token punctuation">;</span>
    v_return         apex_plugin<span class="token punctuation">.</span>t_region_render_result<span class="token punctuation">;</span>
  <span class="token keyword">BEGIN</span>

    <span class="token keyword">IF</span> apex_application<span class="token punctuation">.</span>g_debug <span class="token keyword">THEN</span>
      apex_plugin_util<span class="token punctuation">.</span>debug_region <span class="token punctuation">(</span>p_plugin<span class="token punctuation">,</span> p_region<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

    v_application_id :<span class="token operator">=</span> NV<span class="token punctuation">(</span><span class="token string">'APP_ID'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    v_page_id        :<span class="token operator">=</span> NV<span class="token punctuation">(</span><span class="token string">'APP_PAGE_ID'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    v_page_name      :<span class="token operator">=</span> get_page_name <span class="token punctuation">(</span>v_application_id<span class="token punctuation">,</span> v_page_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    update_breadcrumbs <span class="token punctuation">(</span>v_application_id<span class="token punctuation">,</span> v_page_id<span class="token punctuation">,</span> v_page_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    sys<span class="token punctuation">.</span>htp<span class="token punctuation">.</span>p <span class="token punctuation">(</span>make_html<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">RETURN</span> v_return<span class="token punctuation">;</span>

  <span class="token keyword">END</span> render<span class="token punctuation">;</span>

<span class="token keyword">END</span> true_breadcrumbs<span class="token punctuation">;</span>
</code>`;return{c(){i=e("p"),i.innerHTML=$,I=o(),r=e("ul"),r.innerHTML=aa,R=o(),u=e("p"),u.textContent=na,C=o(),k=e("p"),k.textContent=sa,P=o(),d=e("ul"),d.innerHTML=ta,A=o(),_=e("p"),_.innerHTML=ea,H=o(),g=e("h3"),g.textContent=pa,U=o(),m=e("p"),m.textContent=oa,O=o(),y=e("pre"),D=new K(!1),L=o(),w=e("p"),w.textContent=la,S=o(),h=e("h3"),h.textContent=ca,B=o(),b=e("h5"),b.textContent=ia,F=o(),v=e("ul"),v.innerHTML=ra,M=o(),E=e("pre"),q=new K(!1),Y=o(),f=e("h5"),f.textContent=ua,G=o(),x=e("pre"),V=new K(!1),j=o(),N=e("h5"),N.textContent=ka,W=o(),T=e("pre"),X=new K(!1),this.h()},l(a){i=p(a,"P",{"data-svelte-h":!0}),c(i)!=="svelte-1g6o666"&&(i.innerHTML=$),I=l(a),r=p(a,"UL",{"data-svelte-h":!0}),c(r)!=="svelte-8yckyx"&&(r.innerHTML=aa),R=l(a),u=p(a,"P",{"data-svelte-h":!0}),c(u)!=="svelte-4agabx"&&(u.textContent=na),C=l(a),k=p(a,"P",{"data-svelte-h":!0}),c(k)!=="svelte-g9wjun"&&(k.textContent=sa),P=l(a),d=p(a,"UL",{"data-svelte-h":!0}),c(d)!=="svelte-1ln7myf"&&(d.innerHTML=ta),A=l(a),_=p(a,"P",{"data-svelte-h":!0}),c(_)!=="svelte-10ei818"&&(_.innerHTML=ea),H=l(a),g=p(a,"H3",{"data-svelte-h":!0}),c(g)!=="svelte-jvii0s"&&(g.textContent=pa),U=l(a),m=p(a,"P",{"data-svelte-h":!0}),c(m)!=="svelte-1vuhwpj"&&(m.textContent=oa),O=l(a),y=p(a,"PRE",{class:!0});var s=z(y);D=J(s,!1),s.forEach(n),L=l(a),w=p(a,"P",{"data-svelte-h":!0}),c(w)!=="svelte-nskdg5"&&(w.textContent=la),S=l(a),h=p(a,"H3",{"data-svelte-h":!0}),c(h)!=="svelte-10z4gvk"&&(h.textContent=ca),B=l(a),b=p(a,"H5",{"data-svelte-h":!0}),c(b)!=="svelte-cbsdtn"&&(b.textContent=ia),F=l(a),v=p(a,"UL",{"data-svelte-h":!0}),c(v)!=="svelte-15k52xp"&&(v.innerHTML=ra),M=l(a),E=p(a,"PRE",{class:!0});var da=z(E);q=J(da,!1),da.forEach(n),Y=l(a),f=p(a,"H5",{"data-svelte-h":!0}),c(f)!=="svelte-wyraul"&&(f.textContent=ua),G=l(a),x=p(a,"PRE",{class:!0});var _a=z(x);V=J(_a,!1),_a.forEach(n),j=l(a),N=p(a,"H5",{"data-svelte-h":!0}),c(N)!=="svelte-vqb5go"&&(N.textContent=ka),W=l(a),T=p(a,"PRE",{class:!0});var ga=z(T);X=J(ga,!1),ga.forEach(n),this.h()},h(){D.a=null,Q(y,"class","language-sql"),q.a=null,Q(E,"class","language-html"),V.a=null,Q(x,"class","language-sql"),X.a=null,Q(T,"class","language-sql")},m(a,s){t(a,i,s),t(a,I,s),t(a,r,s),t(a,R,s),t(a,u,s),t(a,C,s),t(a,k,s),t(a,P,s),t(a,d,s),t(a,A,s),t(a,_,s),t(a,H,s),t(a,g,s),t(a,U,s),t(a,m,s),t(a,O,s),t(a,y,s),D.m(ya,y),t(a,L,s),t(a,w,s),t(a,S,s),t(a,h,s),t(a,B,s),t(a,b,s),t(a,F,s),t(a,v,s),t(a,M,s),t(a,E,s),q.m(wa,E),t(a,Y,s),t(a,f,s),t(a,G,s),t(a,x,s),V.m(ha,x),t(a,j,s),t(a,N,s),t(a,W,s),t(a,T,s),X.m(ba,T)},p:Z,i:Z,o:Z,d(a){a&&(n(i),n(I),n(r),n(R),n(u),n(C),n(k),n(P),n(d),n(A),n(_),n(H),n(g),n(U),n(m),n(O),n(y),n(L),n(w),n(S),n(h),n(B),n(b),n(F),n(v),n(M),n(E),n(Y),n(f),n(G),n(x),n(j),n(N),n(W),n(T))}}}class Ia extends Ea{constructor(i){super(),fa(this,i,null,xa,va,{})}}export{Ia as component};
