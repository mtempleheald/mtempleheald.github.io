import{S as In,i as qn,s as Dn,k as s,q as l,a as r,l as n,m as o,r as i,h as a,c as p,n as ys,b as d,H as e,B as ws}from"../../../../../../../../chunks/index-5a67f8c0.js";function Wn(Tn){let T,St,Oe,Q,gt,Ve,F,Tt,Ye,N,At,ze,A,B,Lt,se,It,qt,Dt,ne,Wt,Ge,O,xt,Ke,V,Jt,Ze,L,Pt,C,Mt,Ht,$e,Y,Rt,et,u,oe,jt,Bt,le,Ct,Xt,ie,Ut,Qt,re,Ft,Nt,tt,at,z,Ot,st,G,Vt,nt,I,pe,v,ce,Yt,zt,de,Gt,Kt,ue,Zt,$t,he,ea,ta,h,b,fe,aa,sa,me,na,oa,ve,la,ia,be,ra,pa,k,ke,ca,da,ye,ua,ha,we,fa,ma,Ee,va,ba,y,_e,ka,ya,Se,wa,Ea,ge,_a,Sa,Te,ga,Ta,w,Ae,Aa,La,Le,Ia,qa,Ie,Da,Wa,qe,xa,Ja,E,De,Pa,Ma,We,Ha,Ra,xe,ja,Ba,Je,Ca,ot,K,Xa,lt,Z,Ua,it,X,An=`<code class="language-json"><span class="token punctuation">&#123;</span>
    <span class="token property">"question-set"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// questionset identifier, there may be many in a single journey</span>
    <span class="token property">"questions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// text | number | datetime | select | radio | ...</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// form control name</span>
            <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// form control label</span>
            <span class="token property">"default"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// maps to (value | checked) property</span>
            <span class="token property">"helptext"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// markdown tooltip or subtext, depending on cosmetic choices</span>
            <span class="token property">"valid-required"</span><span class="token operator">:</span> <span class="token string">"boolean"</span><span class="token punctuation">,</span> <span class="token comment">// maps to required property</span>
            <span class="token property">"valid-max"</span><span class="token operator">:</span> <span class="token string">"integer"</span><span class="token punctuation">,</span> <span class="token comment">// maps to (max | maxLength) property</span>
            <span class="token property">"valid-min"</span><span class="token operator">:</span> <span class="token string">"integer"</span><span class="token punctuation">,</span> <span class="token comment">// maps to (min | minLength) property</span>
            <span class="token property">"valid-regexp"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// maps to pattern property</span>
            <span class="token property">"valid-errmsg"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// error message to go with regexp validation</span>
            <span class="token property">"data-source"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// data-source attribute used for reference data</span>
            <span class="token property">"pre-markdown"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// markdown to render before the question</span>
            <span class="token property">"post-markdown"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// markdown to render after the question</span>
            <span class="token property">"display-if-parent"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span> <span class="token comment">// data-parent attribute - hide until parent condition met</span>
            <span class="token property">"display-if-value"</span><span class="token operator">:</span> <span class="token string">"string"</span> <span class="token comment">// data-parent-val attribute</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,rt,$,Qa,pt,_,Pe,Fa,Na,Me,Oa,Va,U,Ya,za,Ga,ct,f,He,Ka,Za,Re,$a,es,je,ts,as,Be,ss,dt,q,Ce,ns,os,Xe,ls,ut,D,is,rs,ps,ht,ee,cs,ft,te,ds,mt,m,Ue,us,hs,Qe,fs,ms,Fe,vs,bs,Ne,ks;return{c(){T=s("h1"),St=l("Web Journey without JavaScript"),Oe=r(),Q=s("p"),gt=l("An exploration into developing a full web journey without JavaScript."),Ve=r(),F=s("p"),Tt=l("I’m not overly keen on JavaScript (or dynamic languages in general), but the true motivation here is layering, specifically the repetition of business logic in 2 places."),Ye=r(),N=s("h2"),At=l("Vision"),ze=r(),A=s("ul"),B=s("li"),Lt=l("Want all business logic to reside "),se=s("em"),It=l("only"),qt=l(" on the server, since we can’t trust anything handled client side."),Dt=r(),ne=s("li"),Wt=l("Need interactivity in the browser, else it will be a poor user experience, but this needs to be data-driven and not contain business logic."),Ge=r(),O=s("h2"),xt=l("Initial thoughts"),Ke=r(),V=s("p"),Jt=l(`WebAssembly is now available as an alternative to JavaScript in the browser, for many use cases. There are limits, most notably the inability to interact directly with the DOM.
So the solution will require some JavaScript plumbing.`),Ze=r(),L=s("p"),Pt=l("The JavaScript elements should be limited to context-agnostic data-driven validation/display toggling, using a library such as "),C=s("a"),Mt=l("validate.js"),Ht=l("."),$e=r(),Y=s("h2"),Rt=l("Design principles"),et=r(),u=s("ul"),oe=s("li"),jt=l("JavaScript is a pre-requisite, so beyond showing a nice message don’t worry about progressive enhancement."),Bt=r(),le=s("li"),Ct=l("We can share code front and backend (if that makes sense) but we must write it only once"),Xt=r(),ie=s("li"),Ut=l("All code must be testable"),Qt=r(),re=s("li"),Ft=l("The application must be responsive with no significant latency"),Nt=r(),tt=s("li"),at=r(),z=s("h2"),Ot=l("Solution design"),st=r(),G=s("p"),Vt=l("Easiest to think about this in terms of interface boundaries"),nt=r(),I=s("table"),pe=s("thead"),v=s("tr"),ce=s("th"),Yt=l("JavaScript"),zt=r(),de=s("th"),Gt=l("WASM Frontend"),Kt=r(),ue=s("th"),Zt=l("Backend"),$t=r(),he=s("th"),ea=l("Notes"),ta=r(),h=s("tbody"),b=s("tr"),fe=s("td"),aa=l("onLoad setup"),sa=r(),me=s("td"),na=l("setupForm"),oa=r(),ve=s("td"),la=l("getQuestionSet"),ia=r(),be=s("td"),ra=l("grab data from backend to generate form"),pa=r(),k=s("tr"),ke=s("td"),ca=l("onChange validate"),da=r(),ye=s("td"),ua=l("-"),ha=r(),we=s("td"),fa=l("-"),ma=r(),Ee=s("td"),va=l("perform simple validation in front end"),ba=r(),y=s("tr"),_e=s("td"),ka=l("onChange update"),ya=r(),Se=s("td"),wa=l("updateX"),Ea=r(),ge=s("td"),_a=l("-"),Sa=r(),Te=s("td"),ga=l("update central WASM model as they change"),Ta=r(),w=s("tr"),Ae=s("td"),Aa=l("onSubmit validate"),La=r(),Le=s("td"),Ia=l("validateX"),qa=r(),Ie=s("td"),Da=l("-"),Wa=r(),qe=s("td"),xa=l("perform complex multifield validation"),Ja=r(),E=s("tr"),De=s("td"),Pa=l("onSubmit submit"),Ma=r(),We=s("td"),Ha=l("submitX"),Ra=r(),xe=s("td"),ja=l("submitX"),Ba=r(),Je=s("td"),Ca=l("ensure validated, pass to backend"),ot=r(),K=s("h3"),Xa=l("QuestionSet data structure"),lt=r(),Z=s("p"),Ua=l("There should be sufficient information in here for both display and simple validation."),it=r(),X=s("pre"),rt=r(),$=s("h3"),Qa=l("Validate & submit"),pt=r(),_=s("ul"),Pe=s("li"),Fa=l("Should have already performed simple validation in the browser"),Na=r(),Me=s("li"),Oa=l("Should already have all required values from the questionset submitted during navigation"),Va=r(),U=s("li"),Ya=l("Assume neither of these things are true, validate in full."),za=s("br"),Ga=l(`
This can mean running validation twice, but the client side stuff was for the user’s benefit and we didn’t write it by hand for this journey, the underlying data which drives it was generated in the backend.`),ct=r(),f=s("ol"),He=s("li"),Ka=l("All fields in questionset answered, click submit button."),Za=r(),Re=s("li"),$a=l('JavaScript onSubmit() code calls WebAssembly ProcessQuestionSet() which returns error string or "".'),es=r(),je=s("li"),ts=l("JavaScript either displays errors or navigates onwards (can preload next page while waiting for response)"),as=r(),Be=s("li"),ss=l("Wasm applies business logic and passes data on for further processing if required"),dt=r(),q=s("ul"),Ce=s("li"),ns=l("Page URLs and navigation are the domain of the JS."),os=r(),Xe=s("li"),ls=l(`Data, session and persistence are the domain of the backend & wasm frontend
These 2 aspects aren’t entirely independent…`),ut=r(),D=s("p"),is=l("If we choose to go down the SPA route then we can consider the WASM memory as the session data."),rs=s("br"),ps=l(`
We also have the option here to break up the questionSet into as many or as few chunks as we like.
We can even combine questionSets within the same business logic, since all exist in session data together.`),ht=r(),ee=s("p"),cs=l(`If we choose to go down the multipage route then we need to call out to a persistence layer in between pages.
This persistence layer could be in the browser (localStorage/sessionStorage) or backend via an async API call, either way this should be handled by WASM.
Any time we need to look at data spanning questionSets (pages in this scenario) we need to also perform data retrieval steps to pull in data from other pages, this starts to feel messy so SPA seems preferable all things considered.`),ft=r(),te=s("h3"),ds=l("Conclusion"),mt=r(),m=s("ul"),Ue=s("li"),us=l("Layer separation is clear and there is no code duplication."),hs=r(),Qe=s("li"),fs=l("Browser-based data-annotation-driven validation is proven and well known"),ms=r(),Fe=s("li"),vs=l("The practicalities of interop for questionSet submission to be proven, can’t add too much latency."),bs=r(),Ne=s("li"),ks=l("WASM to backend APIs via REST or gRPC to be considered - not clear on security in WASM"),this.h()},l(t){T=n(t,"H1",{});var c=o(T);St=i(c,"Web Journey without JavaScript"),c.forEach(a),Oe=p(t),Q=n(t,"P",{});var Es=o(Q);gt=i(Es,"An exploration into developing a full web journey without JavaScript."),Es.forEach(a),Ve=p(t),F=n(t,"P",{});var _s=o(F);Tt=i(_s,"I’m not overly keen on JavaScript (or dynamic languages in general), but the true motivation here is layering, specifically the repetition of business logic in 2 places."),_s.forEach(a),Ye=p(t),N=n(t,"H2",{});var Ss=o(N);At=i(Ss,"Vision"),Ss.forEach(a),ze=p(t),A=n(t,"UL",{});var vt=o(A);B=n(vt,"LI",{});var bt=o(B);Lt=i(bt,"Want all business logic to reside "),se=n(bt,"EM",{});var gs=o(se);It=i(gs,"only"),gs.forEach(a),qt=i(bt," on the server, since we can’t trust anything handled client side."),bt.forEach(a),Dt=p(vt),ne=n(vt,"LI",{});var Ts=o(ne);Wt=i(Ts,"Need interactivity in the browser, else it will be a poor user experience, but this needs to be data-driven and not contain business logic."),Ts.forEach(a),vt.forEach(a),Ge=p(t),O=n(t,"H2",{});var As=o(O);xt=i(As,"Initial thoughts"),As.forEach(a),Ke=p(t),V=n(t,"P",{});var Ls=o(V);Jt=i(Ls,`WebAssembly is now available as an alternative to JavaScript in the browser, for many use cases. There are limits, most notably the inability to interact directly with the DOM.
So the solution will require some JavaScript plumbing.`),Ls.forEach(a),Ze=p(t),L=n(t,"P",{});var kt=o(L);Pt=i(kt,"The JavaScript elements should be limited to context-agnostic data-driven validation/display toggling, using a library such as "),C=n(kt,"A",{href:!0,rel:!0});var Is=o(C);Mt=i(Is,"validate.js"),Is.forEach(a),Ht=i(kt,"."),kt.forEach(a),$e=p(t),Y=n(t,"H2",{});var qs=o(Y);Rt=i(qs,"Design principles"),qs.forEach(a),et=p(t),u=n(t,"UL",{});var S=o(u);oe=n(S,"LI",{});var Ds=o(oe);jt=i(Ds,"JavaScript is a pre-requisite, so beyond showing a nice message don’t worry about progressive enhancement."),Ds.forEach(a),Bt=p(S),le=n(S,"LI",{});var Ws=o(le);Ct=i(Ws,"We can share code front and backend (if that makes sense) but we must write it only once"),Ws.forEach(a),Xt=p(S),ie=n(S,"LI",{});var xs=o(ie);Ut=i(xs,"All code must be testable"),xs.forEach(a),Qt=p(S),re=n(S,"LI",{});var Js=o(re);Ft=i(Js,"The application must be responsive with no significant latency"),Js.forEach(a),Nt=p(S),tt=n(S,"LI",{}),o(tt).forEach(a),S.forEach(a),at=p(t),z=n(t,"H2",{});var Ps=o(z);Ot=i(Ps,"Solution design"),Ps.forEach(a),st=p(t),G=n(t,"P",{});var Ms=o(G);Vt=i(Ms,"Easiest to think about this in terms of interface boundaries"),Ms.forEach(a),nt=p(t),I=n(t,"TABLE",{});var yt=o(I);pe=n(yt,"THEAD",{});var Hs=o(pe);v=n(Hs,"TR",{});var W=o(v);ce=n(W,"TH",{});var Rs=o(ce);Yt=i(Rs,"JavaScript"),Rs.forEach(a),zt=p(W),de=n(W,"TH",{});var js=o(de);Gt=i(js,"WASM Frontend"),js.forEach(a),Kt=p(W),ue=n(W,"TH",{});var Bs=o(ue);Zt=i(Bs,"Backend"),Bs.forEach(a),$t=p(W),he=n(W,"TH",{});var Cs=o(he);ea=i(Cs,"Notes"),Cs.forEach(a),W.forEach(a),Hs.forEach(a),ta=p(yt),h=n(yt,"TBODY",{});var g=o(h);b=n(g,"TR",{});var x=o(b);fe=n(x,"TD",{});var Xs=o(fe);aa=i(Xs,"onLoad setup"),Xs.forEach(a),sa=p(x),me=n(x,"TD",{});var Us=o(me);na=i(Us,"setupForm"),Us.forEach(a),oa=p(x),ve=n(x,"TD",{});var Qs=o(ve);la=i(Qs,"getQuestionSet"),Qs.forEach(a),ia=p(x),be=n(x,"TD",{});var Fs=o(be);ra=i(Fs,"grab data from backend to generate form"),Fs.forEach(a),x.forEach(a),pa=p(g),k=n(g,"TR",{});var J=o(k);ke=n(J,"TD",{});var Ns=o(ke);ca=i(Ns,"onChange validate"),Ns.forEach(a),da=p(J),ye=n(J,"TD",{});var Os=o(ye);ua=i(Os,"-"),Os.forEach(a),ha=p(J),we=n(J,"TD",{});var Vs=o(we);fa=i(Vs,"-"),Vs.forEach(a),ma=p(J),Ee=n(J,"TD",{});var Ys=o(Ee);va=i(Ys,"perform simple validation in front end"),Ys.forEach(a),J.forEach(a),ba=p(g),y=n(g,"TR",{});var P=o(y);_e=n(P,"TD",{});var zs=o(_e);ka=i(zs,"onChange update"),zs.forEach(a),ya=p(P),Se=n(P,"TD",{});var Gs=o(Se);wa=i(Gs,"updateX"),Gs.forEach(a),Ea=p(P),ge=n(P,"TD",{});var Ks=o(ge);_a=i(Ks,"-"),Ks.forEach(a),Sa=p(P),Te=n(P,"TD",{});var Zs=o(Te);ga=i(Zs,"update central WASM model as they change"),Zs.forEach(a),P.forEach(a),Ta=p(g),w=n(g,"TR",{});var M=o(w);Ae=n(M,"TD",{});var $s=o(Ae);Aa=i($s,"onSubmit validate"),$s.forEach(a),La=p(M),Le=n(M,"TD",{});var en=o(Le);Ia=i(en,"validateX"),en.forEach(a),qa=p(M),Ie=n(M,"TD",{});var tn=o(Ie);Da=i(tn,"-"),tn.forEach(a),Wa=p(M),qe=n(M,"TD",{});var an=o(qe);xa=i(an,"perform complex multifield validation"),an.forEach(a),M.forEach(a),Ja=p(g),E=n(g,"TR",{});var H=o(E);De=n(H,"TD",{});var sn=o(De);Pa=i(sn,"onSubmit submit"),sn.forEach(a),Ma=p(H),We=n(H,"TD",{});var nn=o(We);Ha=i(nn,"submitX"),nn.forEach(a),Ra=p(H),xe=n(H,"TD",{});var on=o(xe);ja=i(on,"submitX"),on.forEach(a),Ba=p(H),Je=n(H,"TD",{});var ln=o(Je);Ca=i(ln,"ensure validated, pass to backend"),ln.forEach(a),H.forEach(a),g.forEach(a),yt.forEach(a),ot=p(t),K=n(t,"H3",{});var rn=o(K);Xa=i(rn,"QuestionSet data structure"),rn.forEach(a),lt=p(t),Z=n(t,"P",{});var pn=o(Z);Ua=i(pn,"There should be sufficient information in here for both display and simple validation."),pn.forEach(a),it=p(t),X=n(t,"PRE",{class:!0});var Ln=o(X);Ln.forEach(a),rt=p(t),$=n(t,"H3",{});var cn=o($);Qa=i(cn,"Validate & submit"),cn.forEach(a),pt=p(t),_=n(t,"UL",{});var ae=o(_);Pe=n(ae,"LI",{});var dn=o(Pe);Fa=i(dn,"Should have already performed simple validation in the browser"),dn.forEach(a),Na=p(ae),Me=n(ae,"LI",{});var un=o(Me);Oa=i(un,"Should already have all required values from the questionset submitted during navigation"),un.forEach(a),Va=p(ae),U=n(ae,"LI",{});var wt=o(U);Ya=i(wt,"Assume neither of these things are true, validate in full."),za=n(wt,"BR",{}),Ga=i(wt,`
This can mean running validation twice, but the client side stuff was for the user’s benefit and we didn’t write it by hand for this journey, the underlying data which drives it was generated in the backend.`),wt.forEach(a),ae.forEach(a),ct=p(t),f=n(t,"OL",{});var R=o(f);He=n(R,"LI",{});var hn=o(He);Ka=i(hn,"All fields in questionset answered, click submit button."),hn.forEach(a),Za=p(R),Re=n(R,"LI",{});var fn=o(Re);$a=i(fn,'JavaScript onSubmit() code calls WebAssembly ProcessQuestionSet() which returns error string or "".'),fn.forEach(a),es=p(R),je=n(R,"LI",{});var mn=o(je);ts=i(mn,"JavaScript either displays errors or navigates onwards (can preload next page while waiting for response)"),mn.forEach(a),as=p(R),Be=n(R,"LI",{});var vn=o(Be);ss=i(vn,"Wasm applies business logic and passes data on for further processing if required"),vn.forEach(a),R.forEach(a),dt=p(t),q=n(t,"UL",{});var Et=o(q);Ce=n(Et,"LI",{});var bn=o(Ce);ns=i(bn,"Page URLs and navigation are the domain of the JS."),bn.forEach(a),os=p(Et),Xe=n(Et,"LI",{});var kn=o(Xe);ls=i(kn,`Data, session and persistence are the domain of the backend & wasm frontend
These 2 aspects aren’t entirely independent…`),kn.forEach(a),Et.forEach(a),ut=p(t),D=n(t,"P",{});var _t=o(D);is=i(_t,"If we choose to go down the SPA route then we can consider the WASM memory as the session data."),rs=n(_t,"BR",{}),ps=i(_t,`
We also have the option here to break up the questionSet into as many or as few chunks as we like.
We can even combine questionSets within the same business logic, since all exist in session data together.`),_t.forEach(a),ht=p(t),ee=n(t,"P",{});var yn=o(ee);cs=i(yn,`If we choose to go down the multipage route then we need to call out to a persistence layer in between pages.
This persistence layer could be in the browser (localStorage/sessionStorage) or backend via an async API call, either way this should be handled by WASM.
Any time we need to look at data spanning questionSets (pages in this scenario) we need to also perform data retrieval steps to pull in data from other pages, this starts to feel messy so SPA seems preferable all things considered.`),yn.forEach(a),ft=p(t),te=n(t,"H3",{});var wn=o(te);ds=i(wn,"Conclusion"),wn.forEach(a),mt=p(t),m=n(t,"UL",{});var j=o(m);Ue=n(j,"LI",{});var En=o(Ue);us=i(En,"Layer separation is clear and there is no code duplication."),En.forEach(a),hs=p(j),Qe=n(j,"LI",{});var _n=o(Qe);fs=i(_n,"Browser-based data-annotation-driven validation is proven and well known"),_n.forEach(a),ms=p(j),Fe=n(j,"LI",{});var Sn=o(Fe);vs=i(Sn,"The practicalities of interop for questionSet submission to be proven, can’t add too much latency."),Sn.forEach(a),bs=p(j),Ne=n(j,"LI",{});var gn=o(Ne);ks=i(gn,"WASM to backend APIs via REST or gRPC to be considered - not clear on security in WASM"),gn.forEach(a),j.forEach(a),this.h()},h(){ys(C,"href","https://validatejs.org/"),ys(C,"rel","nofollow"),ys(X,"class","language-json")},m(t,c){d(t,T,c),e(T,St),d(t,Oe,c),d(t,Q,c),e(Q,gt),d(t,Ve,c),d(t,F,c),e(F,Tt),d(t,Ye,c),d(t,N,c),e(N,At),d(t,ze,c),d(t,A,c),e(A,B),e(B,Lt),e(B,se),e(se,It),e(B,qt),e(A,Dt),e(A,ne),e(ne,Wt),d(t,Ge,c),d(t,O,c),e(O,xt),d(t,Ke,c),d(t,V,c),e(V,Jt),d(t,Ze,c),d(t,L,c),e(L,Pt),e(L,C),e(C,Mt),e(L,Ht),d(t,$e,c),d(t,Y,c),e(Y,Rt),d(t,et,c),d(t,u,c),e(u,oe),e(oe,jt),e(u,Bt),e(u,le),e(le,Ct),e(u,Xt),e(u,ie),e(ie,Ut),e(u,Qt),e(u,re),e(re,Ft),e(u,Nt),e(u,tt),d(t,at,c),d(t,z,c),e(z,Ot),d(t,st,c),d(t,G,c),e(G,Vt),d(t,nt,c),d(t,I,c),e(I,pe),e(pe,v),e(v,ce),e(ce,Yt),e(v,zt),e(v,de),e(de,Gt),e(v,Kt),e(v,ue),e(ue,Zt),e(v,$t),e(v,he),e(he,ea),e(I,ta),e(I,h),e(h,b),e(b,fe),e(fe,aa),e(b,sa),e(b,me),e(me,na),e(b,oa),e(b,ve),e(ve,la),e(b,ia),e(b,be),e(be,ra),e(h,pa),e(h,k),e(k,ke),e(ke,ca),e(k,da),e(k,ye),e(ye,ua),e(k,ha),e(k,we),e(we,fa),e(k,ma),e(k,Ee),e(Ee,va),e(h,ba),e(h,y),e(y,_e),e(_e,ka),e(y,ya),e(y,Se),e(Se,wa),e(y,Ea),e(y,ge),e(ge,_a),e(y,Sa),e(y,Te),e(Te,ga),e(h,Ta),e(h,w),e(w,Ae),e(Ae,Aa),e(w,La),e(w,Le),e(Le,Ia),e(w,qa),e(w,Ie),e(Ie,Da),e(w,Wa),e(w,qe),e(qe,xa),e(h,Ja),e(h,E),e(E,De),e(De,Pa),e(E,Ma),e(E,We),e(We,Ha),e(E,Ra),e(E,xe),e(xe,ja),e(E,Ba),e(E,Je),e(Je,Ca),d(t,ot,c),d(t,K,c),e(K,Xa),d(t,lt,c),d(t,Z,c),e(Z,Ua),d(t,it,c),d(t,X,c),X.innerHTML=An,d(t,rt,c),d(t,$,c),e($,Qa),d(t,pt,c),d(t,_,c),e(_,Pe),e(Pe,Fa),e(_,Na),e(_,Me),e(Me,Oa),e(_,Va),e(_,U),e(U,Ya),e(U,za),e(U,Ga),d(t,ct,c),d(t,f,c),e(f,He),e(He,Ka),e(f,Za),e(f,Re),e(Re,$a),e(f,es),e(f,je),e(je,ts),e(f,as),e(f,Be),e(Be,ss),d(t,dt,c),d(t,q,c),e(q,Ce),e(Ce,ns),e(q,os),e(q,Xe),e(Xe,ls),d(t,ut,c),d(t,D,c),e(D,is),e(D,rs),e(D,ps),d(t,ht,c),d(t,ee,c),e(ee,cs),d(t,ft,c),d(t,te,c),e(te,ds),d(t,mt,c),d(t,m,c),e(m,Ue),e(Ue,us),e(m,hs),e(m,Qe),e(Qe,fs),e(m,ms),e(m,Fe),e(Fe,vs),e(m,bs),e(m,Ne),e(Ne,ks)},p:ws,i:ws,o:ws,d(t){t&&a(T),t&&a(Oe),t&&a(Q),t&&a(Ve),t&&a(F),t&&a(Ye),t&&a(N),t&&a(ze),t&&a(A),t&&a(Ge),t&&a(O),t&&a(Ke),t&&a(V),t&&a(Ze),t&&a(L),t&&a($e),t&&a(Y),t&&a(et),t&&a(u),t&&a(at),t&&a(z),t&&a(st),t&&a(G),t&&a(nt),t&&a(I),t&&a(ot),t&&a(K),t&&a(lt),t&&a(Z),t&&a(it),t&&a(X),t&&a(rt),t&&a($),t&&a(pt),t&&a(_),t&&a(ct),t&&a(f),t&&a(dt),t&&a(q),t&&a(ut),t&&a(D),t&&a(ht),t&&a(ee),t&&a(ft),t&&a(te),t&&a(mt),t&&a(m)}}}class Jn extends In{constructor(T){super(),qn(this,T,null,Wn,Dn,{})}}export{Jn as default};
