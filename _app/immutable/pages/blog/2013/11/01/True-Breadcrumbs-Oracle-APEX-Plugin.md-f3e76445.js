import{S as ys,i as ws,s as fs,l as p,u as c,a as r,m as o,p as l,v as i,h as s,c as u,q as C,b as t,F as n,n as Ga}from"../../../../../chunks/index-4d40d7b1.js";function bs(is){let k,ua,ka,da,V,m,D,_a,ma,B,ga,W,v,ha,K,I,ya,Q,d,F,wa,fa,N,ba,h,H,Ea,va,M,Ia,Na,q,Ta,J,g,Pa,y,Ra,xa,j,T,Aa,z,P,La,Z,w,rs=`<code class="language-sql"><span class="token keyword">FUNCTION</span> render <span class="token punctuation">(</span>p_region              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_region
                <span class="token punctuation">,</span>p_plugin              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_plugin
                <span class="token punctuation">,</span>p_is_printer_friendly <span class="token operator">IN</span> <span class="token keyword">BOOLEAN</span><span class="token punctuation">)</span>
  <span class="token keyword">RETURN</span> apex_plugin<span class="token punctuation">.</span>t_region_render_result</code>`,$,R,Ua,aa,x,Oa,sa,A,Sa,na,_,Y,Ca,Da,G,Ba,Fa,X,Ha,ea,f,us=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,ta,L,Ma,pa,b,ks=`<code class="language-sql"><span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> PACKAGE true_breadcrumbs <span class="token keyword">AS</span>

  <span class="token keyword">FUNCTION</span> render <span class="token punctuation">(</span>p_region              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_region
                  <span class="token punctuation">,</span>p_plugin              <span class="token operator">IN</span> apex_plugin<span class="token punctuation">.</span>t_plugin
                  <span class="token punctuation">,</span>p_is_printer_friendly <span class="token operator">IN</span> <span class="token keyword">BOOLEAN</span><span class="token punctuation">)</span>
    <span class="token keyword">RETURN</span> apex_plugin<span class="token punctuation">.</span>t_region_render_result<span class="token punctuation">;</span>

<span class="token keyword">END</span> true_breadcrumbs<span class="token punctuation">;</span></code>`,oa,U,qa,la,E,ds=`<code class="language-sql"><span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> PACKAGE BODY true_breadcrumbs <span class="token keyword">AS</span>
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
</code>`;return{c(){k=p("p"),ua=c("I was getting irritated with breadcrumbs in APEX, specifically having to maintain a separate list for both breadcrumbs and \u201Cnormal\u201D navigation."),ka=p("br"),da=c(`
What I wanted was:`),V=r(),m=p("ul"),D=p("li"),_a=c("every time you moved to a new page, remember the previous one as a parent"),ma=r(),B=p("li"),ga=c("if you move to a page you\u2019d already been to, reset to that point."),W=r(),v=p("p"),ha=c("So when a new version of APEX came out, I looked into the new plug-in development feature, this is the result."),K=r(),I=p("p"),ya=c("The idea is simple, consisting of the following elements:"),Q=r(),d=p("ul"),F=p("li"),wa=c("Add a Region to Page 0 of the application referencing the plug-in, this renders a new breadcrumb element on each render (page load)"),fa=r(),N=p("li"),ba=c("Add navigation to the application"),h=p("ul"),H=p("li"),Ea=c("I used a list (which has no notion of breadcrumbs), implemented on each page for demonstration purposes"),va=r(),M=p("li"),Ia=c("This could equally well be chart navigation, interactive reports, etc"),Na=r(),q=p("li"),Ta=c("An APEX collection to store the current state of the breadcrumbs"),J=r(),g=p("p"),Pa=c("For the record, I\u2019m not suggesting that this is a particularly good approach, it doesn\u2019t cater for session state management and it is another server process to execute, which will obviously affect performance, but "),y=p("a"),Ra=c("it works"),xa=c("."),j=r(),T=p("h3"),Aa=c("Creating a Plug-In"),z=r(),P=p("p"),La=c("Creating a plug-in is as simple as creating a package which exposes a function with the right signature, in this case, for a Region plug-in:"),Z=r(),w=p("pre"),$=r(),R=p("p"),Ua=c(`Implementing the plug-in is even easier, simply add a plug-in Shared Component to the application, referencing the PL/SQL package, in this case:
Render Procedure/Function Name = true_breadcrumbs.render`),aa=r(),x=p("h3"),Oa=c("The Code"),sa=r(),A=p("h5"),Sa=c("Page 0 Region Position 02 (didn\u2019t have to be here)"),na=r(),_=p("ul"),Y=p("li"),Ca=c("Identification > Title: True Breadcrumbs"),Da=r(),G=p("li"),Ba=c("Identification > Type: True Breadcrumbs [Plug-In]"),Fa=r(),X=p("li"),Ha=c("Header and Footer > Header Text (this is only a demo, I wouldn\u2019t normally add CSS directly in the HTML)"),ea=r(),f=p("pre"),ta=r(),L=p("h5"),Ma=c("Package header"),pa=r(),b=p("pre"),oa=r(),U=p("h5"),qa=c("Package body"),la=r(),E=p("pre"),this.h()},l(a){k=o(a,"P",{});var e=l(k);ua=i(e,"I was getting irritated with breadcrumbs in APEX, specifically having to maintain a separate list for both breadcrumbs and \u201Cnormal\u201D navigation."),ka=o(e,"BR",{}),da=i(e,`
What I wanted was:`),e.forEach(s),V=u(a),m=o(a,"UL",{});var ca=l(m);D=o(ca,"LI",{});var Xa=l(D);_a=i(Xa,"every time you moved to a new page, remember the previous one as a parent"),Xa.forEach(s),ma=u(ca),B=o(ca,"LI",{});var Va=l(B);ga=i(Va,"if you move to a page you\u2019d already been to, reset to that point."),Va.forEach(s),ca.forEach(s),W=u(a),v=o(a,"P",{});var Wa=l(v);ha=i(Wa,"So when a new version of APEX came out, I looked into the new plug-in development feature, this is the result."),Wa.forEach(s),K=u(a),I=o(a,"P",{});var Ka=l(I);ya=i(Ka,"The idea is simple, consisting of the following elements:"),Ka.forEach(s),Q=u(a),d=o(a,"UL",{});var O=l(d);F=o(O,"LI",{});var Qa=l(F);wa=i(Qa,"Add a Region to Page 0 of the application referencing the plug-in, this renders a new breadcrumb element on each render (page load)"),Qa.forEach(s),fa=u(O),N=o(O,"LI",{});var Ya=l(N);ba=i(Ya,"Add navigation to the application"),h=o(Ya,"UL",{});var ia=l(h);H=o(ia,"LI",{});var Ja=l(H);Ea=i(Ja,"I used a list (which has no notion of breadcrumbs), implemented on each page for demonstration purposes"),Ja.forEach(s),va=u(ia),M=o(ia,"LI",{});var ja=l(M);Ia=i(ja,"This could equally well be chart navigation, interactive reports, etc"),ja.forEach(s),ia.forEach(s),Ya.forEach(s),Na=u(O),q=o(O,"LI",{});var za=l(q);Ta=i(za,"An APEX collection to store the current state of the breadcrumbs"),za.forEach(s),O.forEach(s),J=u(a),g=o(a,"P",{});var ra=l(g);Pa=i(ra,"For the record, I\u2019m not suggesting that this is a particularly good approach, it doesn\u2019t cater for session state management and it is another server process to execute, which will obviously affect performance, but "),y=o(ra,"A",{href:!0,rel:!0});var Za=l(y);Ra=i(Za,"it works"),Za.forEach(s),xa=i(ra,"."),ra.forEach(s),j=u(a),T=o(a,"H3",{});var $a=l(T);Aa=i($a,"Creating a Plug-In"),$a.forEach(s),z=u(a),P=o(a,"P",{});var as=l(P);La=i(as,"Creating a plug-in is as simple as creating a package which exposes a function with the right signature, in this case, for a Region plug-in:"),as.forEach(s),Z=u(a),w=o(a,"PRE",{class:!0});var _s=l(w);_s.forEach(s),$=u(a),R=o(a,"P",{});var ss=l(R);Ua=i(ss,`Implementing the plug-in is even easier, simply add a plug-in Shared Component to the application, referencing the PL/SQL package, in this case:
Render Procedure/Function Name = true_breadcrumbs.render`),ss.forEach(s),aa=u(a),x=o(a,"H3",{});var ns=l(x);Oa=i(ns,"The Code"),ns.forEach(s),sa=u(a),A=o(a,"H5",{});var es=l(A);Sa=i(es,"Page 0 Region Position 02 (didn\u2019t have to be here)"),es.forEach(s),na=u(a),_=o(a,"UL",{});var S=l(_);Y=o(S,"LI",{});var ts=l(Y);Ca=i(ts,"Identification > Title: True Breadcrumbs"),ts.forEach(s),Da=u(S),G=o(S,"LI",{});var ps=l(G);Ba=i(ps,"Identification > Type: True Breadcrumbs [Plug-In]"),ps.forEach(s),Fa=u(S),X=o(S,"LI",{});var os=l(X);Ha=i(os,"Header and Footer > Header Text (this is only a demo, I wouldn\u2019t normally add CSS directly in the HTML)"),os.forEach(s),S.forEach(s),ea=u(a),f=o(a,"PRE",{class:!0});var ms=l(f);ms.forEach(s),ta=u(a),L=o(a,"H5",{});var ls=l(L);Ma=i(ls,"Package header"),ls.forEach(s),pa=u(a),b=o(a,"PRE",{class:!0});var gs=l(b);gs.forEach(s),oa=u(a),U=o(a,"H5",{});var cs=l(U);qa=i(cs,"Package body"),cs.forEach(s),la=u(a),E=o(a,"PRE",{class:!0});var hs=l(E);hs.forEach(s),this.h()},h(){C(y,"href","https://apex.oracle.com/pls/apex/f?p=55790:1::::::"),C(y,"rel","nofollow"),C(w,"class","language-sql"),C(f,"class","language-html"),C(b,"class","language-sql"),C(E,"class","language-sql")},m(a,e){t(a,k,e),n(k,ua),n(k,ka),n(k,da),t(a,V,e),t(a,m,e),n(m,D),n(D,_a),n(m,ma),n(m,B),n(B,ga),t(a,W,e),t(a,v,e),n(v,ha),t(a,K,e),t(a,I,e),n(I,ya),t(a,Q,e),t(a,d,e),n(d,F),n(F,wa),n(d,fa),n(d,N),n(N,ba),n(N,h),n(h,H),n(H,Ea),n(h,va),n(h,M),n(M,Ia),n(d,Na),n(d,q),n(q,Ta),t(a,J,e),t(a,g,e),n(g,Pa),n(g,y),n(y,Ra),n(g,xa),t(a,j,e),t(a,T,e),n(T,Aa),t(a,z,e),t(a,P,e),n(P,La),t(a,Z,e),t(a,w,e),w.innerHTML=rs,t(a,$,e),t(a,R,e),n(R,Ua),t(a,aa,e),t(a,x,e),n(x,Oa),t(a,sa,e),t(a,A,e),n(A,Sa),t(a,na,e),t(a,_,e),n(_,Y),n(Y,Ca),n(_,Da),n(_,G),n(G,Ba),n(_,Fa),n(_,X),n(X,Ha),t(a,ea,e),t(a,f,e),f.innerHTML=us,t(a,ta,e),t(a,L,e),n(L,Ma),t(a,pa,e),t(a,b,e),b.innerHTML=ks,t(a,oa,e),t(a,U,e),n(U,qa),t(a,la,e),t(a,E,e),E.innerHTML=ds},p:Ga,i:Ga,o:Ga,d(a){a&&s(k),a&&s(V),a&&s(m),a&&s(W),a&&s(v),a&&s(K),a&&s(I),a&&s(Q),a&&s(d),a&&s(J),a&&s(g),a&&s(j),a&&s(T),a&&s(z),a&&s(P),a&&s(Z),a&&s(w),a&&s($),a&&s(R),a&&s(aa),a&&s(x),a&&s(sa),a&&s(A),a&&s(na),a&&s(_),a&&s(ea),a&&s(f),a&&s(ta),a&&s(L),a&&s(pa),a&&s(b),a&&s(oa),a&&s(U),a&&s(la),a&&s(E)}}}class vs extends ys{constructor(k){super(),ws(this,k,null,bs,fs,{})}}export{vs as default};
