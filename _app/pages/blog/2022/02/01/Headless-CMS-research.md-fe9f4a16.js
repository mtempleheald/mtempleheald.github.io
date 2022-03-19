import{S as ll,i as sl,s as nl,e as o,t as n,k as h,c as l,a as u,h as a,d as t,m as p,b as E,g as r,F as i,G as ro}from"../../../../../chunks/vendor-7ab0699c.js";function al(tl){let S,bt,Ae,T,wt,vt,It,xe,q,kt,Re,Q,ue,Et,Be,L,_t,gt,St,Ne,O,il=`<code class="language-undefined">- journey
  - page
    - section
      - component
    - repeating group
      - section
        - component</code>`,Me,A,he,Tt,He,W,Lt,je,x,pe,Pt,De,b,Ct,Ot,At,xt,Rt,Je,R,fe,Bt,qe,P,Nt,Mt,Ht,Qe,B,de,jt,We,F,Dt,Fe,G,ce,Jt,Ge,C,qt,Qt,Wt,ze,N,me,Ft,Ue,z,Gt,Ve,U,zt,Ke,w,Ut,Vt,Kt,Xt,Yt,Xe,V,Zt,Ye,K,$t,Ze,f,M,ei,H,ti,ii,oi,ye,li,si,be,ni,ai,we,ri,ui,ve,hi,pi,Ie,fi,$e,X,di,et,c,_,ci,mi,yi,bi,wi,vi,ke,Ii,ki,Ee,Ei,_i,j,gi,Si,Ti,Li,D,Pi,Ci,Oi,tt,Y,Ai,it,Z,xi,ot,$,Ri,lt,ee,Bi,st,d,_e,Ni,Mi,ge,Hi,ji,Se,Di,Ji,Te,qi,Qi,Le,Wi,Fi,Pe,Gi,nt,te,zi,at,v,g,Ui,J,Vi,Ki,Xi,Yi,Zi,Ce,$i,eo,Oe,to,rt,ie,io,ut,I,oo,lo,so,no,ao;return{c(){S=o("h1"),bt=n("Headless CMS"),Ae=h(),T=o("p"),wt=n("I\u2019ve been working on a 100% data-driven, low code solution using SvelteKit."),vt=o("br"),It=n(`
I\u2019ve been debating rolling my own highly specialised CMS admin pages vs using an off the shelf headless CMS.`),xe=h(),q=o("h2"),kt=n("The requirements"),Re=h(),Q=o("ol"),ue=o("li"),Et=n("Data structure"),Be=h(),L=o("p"),_t=n("Must support a data structure similar to the below."),gt=o("br"),St=n(`
All levels in the hierarchy can repeat, components of any type can be swapped in and out and everything can be reordered.`),Ne=h(),O=o("pre"),Me=h(),A=o("ol"),he=o("li"),Tt=n("REST API"),He=h(),W=o("p"),Lt=n(`GraphQL may be better, but it adds complexity and security concerns, I want this to be as simple as possible.
The data structure should look similar to above without requiring significant knowledge of the inner workings of the CMS.`),je=h(),x=o("ol"),pe=o("li"),Pt=n("Ease of use"),De=h(),b=o("p"),Ct=n("The content editor needs to understand context at all times."),Ot=o("br"),At=n(`
e.g. We are editing a section within page X, journey A, not editing a section then going to find a page to link it to.`),xt=o("br"),Rt=n(`
This is important for scalability and to reduce human errors.`),Je=h(),R=o("ol"),fe=o("li"),Bt=n("Safety"),qe=h(),P=o("p"),Nt=n("Developers must be able to edit content types, and content editors must be able to edit content using these types, without ever losing data."),Mt=o("br"),Ht=n(`
This is important for deployment and publishing purposes.`),Qe=h(),B=o("ol"),de=o("li"),jt=n("Versioning"),We=h(),F=o("p"),Dt=n("Relating to safety but more about compliance; we must be able to view the change history for content and rollback if necessary."),Fe=h(),G=o("ol"),ce=o("li"),Jt=n("Lightweight"),Ge=h(),C=o("p"),qt=n("I want a pure headless solution, not a full solution that I\u2019m only using the headless features of."),Qt=o("br"),Wt=n(`
This is for security, upgrade, complexity reasons but should also keep costs down.`),ze=h(),N=o("ol"),me=o("li"),Ft=n("Hosting"),Ue=h(),z=o("p"),Gt=n("I know how to host .NET and Node apps, either will suffice.  As long as it is secure.  No PHP."),Ve=h(),U=o("h1"),zt=n("The contenders"),Ke=h(),w=o("p"),Ut=n("Starting with free options, because why wouldn\u2019t you?"),Vt=o("br"),Kt=n(`
I deliberately timeboxed this work to a few hours per option.`),Xt=o("br"),Yt=n(`
If a competent developer can\u2019t get to grips with managing a basic structure in a few hours then content editors won\u2019t be able to work with it.`),Xe=h(),V=o("h2"),Zt=n("Strapi"),Ye=h(),K=o("p"),$t=n("Pros:"),Ze=h(),f=o("ul"),M=o("li"),ei=n("Top of the most popular list on "),H=o("a"),ti=n("Jamstack"),ii=n("."),oi=h(),ye=o("li"),li=n("Free (until you want granular controls or SSO)"),si=h(),be=o("li"),ni=n("Open Source MIT licence"),ai=h(),we=o("li"),ri=n("Very easy to get started, up and running in under 20 minutes from nothing but a node command line"),ui=h(),ve=o("li"),hi=n("REST API extremely easy to use, up and running locally in under an hour with token authentication allowing me to grab a draft page by url and related journey."),pi=h(),Ie=o("li"),fi=n("Easy to see what\u2019s going on with the content types appearing in the code as JSON schemas with boilerplate API wrappers"),$e=h(),X=o("p"),di=n("Cons:"),et=h(),c=o("ul"),_=o("li"),ci=n("Can only nest components one deep using the dynamic zone feature."),mi=o("br"),yi=n(`
This means that managing components within sections is nice, but linking these back up to pages and those back up to journeys is cumbersome.`),bi=o("br"),wi=n(`
The relationship feature can make this work, but it seems you have to manage the one-to-many side of the relationship and also the many-to-one side, i.e. list pages within journey and link page back to parent journey.`),vi=h(),ke=o("li"),Ii=n(`Search filters are lost during navigation.
I\u2019m not sure if this is a bad thing, but it frustrated me during my brief trial.`),ki=h(),Ee=o("li"),Ei=n("Interface is clunky.  It never let me break anything or lose changes, but I had to try, see the popup and remember to save rather than this being immediately apparent."),_i=h(),j=o("li"),gi=n("The first thing I tried to do was create a component with an id."),Si=o("br"),Ti=n(`
This clashed with the id added by default, something of an oversight if you ask me.`),Li=h(),D=o("li"),Pi=n(`Creating content types writes JSON files to disk, in the solution, so presumably I\u2019d deploy this the way I would any other web app, from git.
Content writes to database.
I fail to see the connection between these which makes me worry about deployment safety.`),Ci=o("br"),Oi=n(`
This correlates with many comments regarding Strapi too; deployments breaking sites.`),tt=h(),Y=o("p"),Ai=n("Conclusion:"),it=h(),Z=o("p"),xi=n(`Nice try but not good enough yet.
I like how it feels, I like the simplicity, but it needs that extra depth in the hierarchy and some refinements.`),ot=h(),$=o("h2"),Ri=n("OrchardCore"),lt=h(),ee=o("p"),Bi=n("Pros:"),st=h(),d=o("ul"),_e=o("li"),Ni=n("Free"),Mi=h(),ge=o("li"),Hi=n("Open source BSD3 licence"),ji=h(),Se=o("li"),Di=n("Written in .NET which is in my tech stack already"),Ji=h(),Te=o("li"),qi=n("Once I figured out the built in Bag and Title content parts it was very easy to get exactly the structure I was looking for"),Qi=h(),Le=o("li"),Wi=n("Security taken seriously, countless authentication options with details of openid"),Fi=h(),Pe=o("li"),Gi=n("I already know how to implement SSO with Azure AD in .NET Core so that\u2019s one problem I don\u2019t have to worry about."),nt=h(),te=o("p"),zi=n("Cons:"),at=h(),v=o("ul"),g=o("li"),Ui=n(`Documentation is thorough yet many broken links, including the video to getting started with headless CMS in OrchardCore.
I didn\u2019t see `),J=o("a"),Vi=n("this"),Ki=n(" at first."),Xi=o("br"),Yi=n(`
Why they\u2019d make download more prominent I have no idea, I ended up just taking full latest source code as my basis for trial.`),Zi=h(),Ce=o("li"),$i=n(`Headless content APIs not as easy to use as Strapi, nor as easy to integrate with.
Just for trial purposes I set up token authentication and this achieved my goal of pulling down some content.`),eo=h(),Oe=o("li"),to=n(`REST APIs rather limited, only allowing reference by ID at first glance.
Possible to use Queries instead of going straight to content, but this requires configuring Lucene indexes etc (TODO)`),rt=h(),ie=o("p"),io=n("Conclusion:"),ut=h(),I=o("p"),oo=n("I like it at a glance, have no concerns about scalability or usability."),lo=o("br"),so=n(`
The API/Query complexity makes me wary - anytime there\u2019s an index/cache involved things start getting complicated.`),no=o("br"),ao=n(`
I will complete the API PoC work, use the NuGet-driven setup process and re-evaluate.`),this.h()},l(e){S=l(e,"H1",{});var s=u(S);bt=a(s,"Headless CMS"),s.forEach(t),Ae=p(e),T=l(e,"P",{});var ht=u(T);wt=a(ht,"I\u2019ve been working on a 100% data-driven, low code solution using SvelteKit."),vt=l(ht,"BR",{}),It=a(ht,`
I\u2019ve been debating rolling my own highly specialised CMS admin pages vs using an off the shelf headless CMS.`),ht.forEach(t),xe=p(e),q=l(e,"H2",{});var uo=u(q);kt=a(uo,"The requirements"),uo.forEach(t),Re=p(e),Q=l(e,"OL",{});var ho=u(Q);ue=l(ho,"LI",{});var po=u(ue);Et=a(po,"Data structure"),po.forEach(t),ho.forEach(t),Be=p(e),L=l(e,"P",{});var pt=u(L);_t=a(pt,"Must support a data structure similar to the below."),gt=l(pt,"BR",{}),St=a(pt,`
All levels in the hierarchy can repeat, components of any type can be swapped in and out and everything can be reordered.`),pt.forEach(t),Ne=p(e),O=l(e,"PRE",{class:!0});var ol=u(O);ol.forEach(t),Me=p(e),A=l(e,"OL",{start:!0});var fo=u(A);he=l(fo,"LI",{});var co=u(he);Tt=a(co,"REST API"),co.forEach(t),fo.forEach(t),He=p(e),W=l(e,"P",{});var mo=u(W);Lt=a(mo,`GraphQL may be better, but it adds complexity and security concerns, I want this to be as simple as possible.
The data structure should look similar to above without requiring significant knowledge of the inner workings of the CMS.`),mo.forEach(t),je=p(e),x=l(e,"OL",{start:!0});var yo=u(x);pe=l(yo,"LI",{});var bo=u(pe);Pt=a(bo,"Ease of use"),bo.forEach(t),yo.forEach(t),De=p(e),b=l(e,"P",{});var oe=u(b);Ct=a(oe,"The content editor needs to understand context at all times."),Ot=l(oe,"BR",{}),At=a(oe,`
e.g. We are editing a section within page X, journey A, not editing a section then going to find a page to link it to.`),xt=l(oe,"BR",{}),Rt=a(oe,`
This is important for scalability and to reduce human errors.`),oe.forEach(t),Je=p(e),R=l(e,"OL",{start:!0});var wo=u(R);fe=l(wo,"LI",{});var vo=u(fe);Bt=a(vo,"Safety"),vo.forEach(t),wo.forEach(t),qe=p(e),P=l(e,"P",{});var ft=u(P);Nt=a(ft,"Developers must be able to edit content types, and content editors must be able to edit content using these types, without ever losing data."),Mt=l(ft,"BR",{}),Ht=a(ft,`
This is important for deployment and publishing purposes.`),ft.forEach(t),Qe=p(e),B=l(e,"OL",{start:!0});var Io=u(B);de=l(Io,"LI",{});var ko=u(de);jt=a(ko,"Versioning"),ko.forEach(t),Io.forEach(t),We=p(e),F=l(e,"P",{});var Eo=u(F);Dt=a(Eo,"Relating to safety but more about compliance; we must be able to view the change history for content and rollback if necessary."),Eo.forEach(t),Fe=p(e),G=l(e,"OL",{});var _o=u(G);ce=l(_o,"LI",{});var go=u(ce);Jt=a(go,"Lightweight"),go.forEach(t),_o.forEach(t),Ge=p(e),C=l(e,"P",{});var dt=u(C);qt=a(dt,"I want a pure headless solution, not a full solution that I\u2019m only using the headless features of."),Qt=l(dt,"BR",{}),Wt=a(dt,`
This is for security, upgrade, complexity reasons but should also keep costs down.`),dt.forEach(t),ze=p(e),N=l(e,"OL",{start:!0});var So=u(N);me=l(So,"LI",{});var To=u(me);Ft=a(To,"Hosting"),To.forEach(t),So.forEach(t),Ue=p(e),z=l(e,"P",{});var Lo=u(z);Gt=a(Lo,"I know how to host .NET and Node apps, either will suffice.  As long as it is secure.  No PHP."),Lo.forEach(t),Ve=p(e),U=l(e,"H1",{});var Po=u(U);zt=a(Po,"The contenders"),Po.forEach(t),Ke=p(e),w=l(e,"P",{});var le=u(w);Ut=a(le,"Starting with free options, because why wouldn\u2019t you?"),Vt=l(le,"BR",{}),Kt=a(le,`
I deliberately timeboxed this work to a few hours per option.`),Xt=l(le,"BR",{}),Yt=a(le,`
If a competent developer can\u2019t get to grips with managing a basic structure in a few hours then content editors won\u2019t be able to work with it.`),le.forEach(t),Xe=p(e),V=l(e,"H2",{});var Co=u(V);Zt=a(Co,"Strapi"),Co.forEach(t),Ye=p(e),K=l(e,"P",{});var Oo=u(K);$t=a(Oo,"Pros:"),Oo.forEach(t),Ze=p(e),f=l(e,"UL",{});var m=u(f);M=l(m,"LI",{});var ct=u(M);ei=a(ct,"Top of the most popular list on "),H=l(ct,"A",{href:!0,rel:!0});var Ao=u(H);ti=a(Ao,"Jamstack"),Ao.forEach(t),ii=a(ct,"."),ct.forEach(t),oi=p(m),ye=l(m,"LI",{});var xo=u(ye);li=a(xo,"Free (until you want granular controls or SSO)"),xo.forEach(t),si=p(m),be=l(m,"LI",{});var Ro=u(be);ni=a(Ro,"Open Source MIT licence"),Ro.forEach(t),ai=p(m),we=l(m,"LI",{});var Bo=u(we);ri=a(Bo,"Very easy to get started, up and running in under 20 minutes from nothing but a node command line"),Bo.forEach(t),ui=p(m),ve=l(m,"LI",{});var No=u(ve);hi=a(No,"REST API extremely easy to use, up and running locally in under an hour with token authentication allowing me to grab a draft page by url and related journey."),No.forEach(t),pi=p(m),Ie=l(m,"LI",{});var Mo=u(Ie);fi=a(Mo,"Easy to see what\u2019s going on with the content types appearing in the code as JSON schemas with boilerplate API wrappers"),Mo.forEach(t),m.forEach(t),$e=p(e),X=l(e,"P",{});var Ho=u(X);di=a(Ho,"Cons:"),Ho.forEach(t),et=p(e),c=l(e,"UL",{});var k=u(c);_=l(k,"LI",{});var se=u(_);ci=a(se,"Can only nest components one deep using the dynamic zone feature."),mi=l(se,"BR",{}),yi=a(se,`
This means that managing components within sections is nice, but linking these back up to pages and those back up to journeys is cumbersome.`),bi=l(se,"BR",{}),wi=a(se,`
The relationship feature can make this work, but it seems you have to manage the one-to-many side of the relationship and also the many-to-one side, i.e. list pages within journey and link page back to parent journey.`),se.forEach(t),vi=p(k),ke=l(k,"LI",{});var jo=u(ke);Ii=a(jo,`Search filters are lost during navigation.
I\u2019m not sure if this is a bad thing, but it frustrated me during my brief trial.`),jo.forEach(t),ki=p(k),Ee=l(k,"LI",{});var Do=u(Ee);Ei=a(Do,"Interface is clunky.  It never let me break anything or lose changes, but I had to try, see the popup and remember to save rather than this being immediately apparent."),Do.forEach(t),_i=p(k),j=l(k,"LI",{});var mt=u(j);gi=a(mt,"The first thing I tried to do was create a component with an id."),Si=l(mt,"BR",{}),Ti=a(mt,`
This clashed with the id added by default, something of an oversight if you ask me.`),mt.forEach(t),Li=p(k),D=l(k,"LI",{});var yt=u(D);Pi=a(yt,`Creating content types writes JSON files to disk, in the solution, so presumably I\u2019d deploy this the way I would any other web app, from git.
Content writes to database.
I fail to see the connection between these which makes me worry about deployment safety.`),Ci=l(yt,"BR",{}),Oi=a(yt,`
This correlates with many comments regarding Strapi too; deployments breaking sites.`),yt.forEach(t),k.forEach(t),tt=p(e),Y=l(e,"P",{});var Jo=u(Y);Ai=a(Jo,"Conclusion:"),Jo.forEach(t),it=p(e),Z=l(e,"P",{});var qo=u(Z);xi=a(qo,`Nice try but not good enough yet.
I like how it feels, I like the simplicity, but it needs that extra depth in the hierarchy and some refinements.`),qo.forEach(t),ot=p(e),$=l(e,"H2",{});var Qo=u($);Ri=a(Qo,"OrchardCore"),Qo.forEach(t),lt=p(e),ee=l(e,"P",{});var Wo=u(ee);Bi=a(Wo,"Pros:"),Wo.forEach(t),st=p(e),d=l(e,"UL",{});var y=u(d);_e=l(y,"LI",{});var Fo=u(_e);Ni=a(Fo,"Free"),Fo.forEach(t),Mi=p(y),ge=l(y,"LI",{});var Go=u(ge);Hi=a(Go,"Open source BSD3 licence"),Go.forEach(t),ji=p(y),Se=l(y,"LI",{});var zo=u(Se);Di=a(zo,"Written in .NET which is in my tech stack already"),zo.forEach(t),Ji=p(y),Te=l(y,"LI",{});var Uo=u(Te);qi=a(Uo,"Once I figured out the built in Bag and Title content parts it was very easy to get exactly the structure I was looking for"),Uo.forEach(t),Qi=p(y),Le=l(y,"LI",{});var Vo=u(Le);Wi=a(Vo,"Security taken seriously, countless authentication options with details of openid"),Vo.forEach(t),Fi=p(y),Pe=l(y,"LI",{});var Ko=u(Pe);Gi=a(Ko,"I already know how to implement SSO with Azure AD in .NET Core so that\u2019s one problem I don\u2019t have to worry about."),Ko.forEach(t),y.forEach(t),nt=p(e),te=l(e,"P",{});var Xo=u(te);zi=a(Xo,"Cons:"),Xo.forEach(t),at=p(e),v=l(e,"UL",{});var ne=u(v);g=l(ne,"LI",{});var ae=u(g);Ui=a(ae,`Documentation is thorough yet many broken links, including the video to getting started with headless CMS in OrchardCore.
I didn\u2019t see `),J=l(ae,"A",{href:!0,rel:!0});var Yo=u(J);Vi=a(Yo,"this"),Yo.forEach(t),Ki=a(ae," at first."),Xi=l(ae,"BR",{}),Yi=a(ae,`
Why they\u2019d make download more prominent I have no idea, I ended up just taking full latest source code as my basis for trial.`),ae.forEach(t),Zi=p(ne),Ce=l(ne,"LI",{});var Zo=u(Ce);$i=a(Zo,`Headless content APIs not as easy to use as Strapi, nor as easy to integrate with.
Just for trial purposes I set up token authentication and this achieved my goal of pulling down some content.`),Zo.forEach(t),eo=p(ne),Oe=l(ne,"LI",{});var $o=u(Oe);to=a($o,`REST APIs rather limited, only allowing reference by ID at first glance.
Possible to use Queries instead of going straight to content, but this requires configuring Lucene indexes etc (TODO)`),$o.forEach(t),ne.forEach(t),rt=p(e),ie=l(e,"P",{});var el=u(ie);io=a(el,"Conclusion:"),el.forEach(t),ut=p(e),I=l(e,"P",{});var re=u(I);oo=a(re,"I like it at a glance, have no concerns about scalability or usability."),lo=l(re,"BR",{}),so=a(re,`
The API/Query complexity makes me wary - anytime there\u2019s an index/cache involved things start getting complicated.`),no=l(re,"BR",{}),ao=a(re,`
I will complete the API PoC work, use the NuGet-driven setup process and re-evaluate.`),re.forEach(t),this.h()},h(){E(O,"class","language-undefined"),E(A,"start","2"),E(x,"start","4"),E(R,"start","5"),E(B,"start","6"),E(N,"start","8"),E(H,"href","https://jamstack.org/headless-cms/"),E(H,"rel","nofollow"),E(J,"href","https://docs.orchardcore.net/en/latest/docs/getting-started/"),E(J,"rel","nofollow")},m(e,s){r(e,S,s),i(S,bt),r(e,Ae,s),r(e,T,s),i(T,wt),i(T,vt),i(T,It),r(e,xe,s),r(e,q,s),i(q,kt),r(e,Re,s),r(e,Q,s),i(Q,ue),i(ue,Et),r(e,Be,s),r(e,L,s),i(L,_t),i(L,gt),i(L,St),r(e,Ne,s),r(e,O,s),O.innerHTML=il,r(e,Me,s),r(e,A,s),i(A,he),i(he,Tt),r(e,He,s),r(e,W,s),i(W,Lt),r(e,je,s),r(e,x,s),i(x,pe),i(pe,Pt),r(e,De,s),r(e,b,s),i(b,Ct),i(b,Ot),i(b,At),i(b,xt),i(b,Rt),r(e,Je,s),r(e,R,s),i(R,fe),i(fe,Bt),r(e,qe,s),r(e,P,s),i(P,Nt),i(P,Mt),i(P,Ht),r(e,Qe,s),r(e,B,s),i(B,de),i(de,jt),r(e,We,s),r(e,F,s),i(F,Dt),r(e,Fe,s),r(e,G,s),i(G,ce),i(ce,Jt),r(e,Ge,s),r(e,C,s),i(C,qt),i(C,Qt),i(C,Wt),r(e,ze,s),r(e,N,s),i(N,me),i(me,Ft),r(e,Ue,s),r(e,z,s),i(z,Gt),r(e,Ve,s),r(e,U,s),i(U,zt),r(e,Ke,s),r(e,w,s),i(w,Ut),i(w,Vt),i(w,Kt),i(w,Xt),i(w,Yt),r(e,Xe,s),r(e,V,s),i(V,Zt),r(e,Ye,s),r(e,K,s),i(K,$t),r(e,Ze,s),r(e,f,s),i(f,M),i(M,ei),i(M,H),i(H,ti),i(M,ii),i(f,oi),i(f,ye),i(ye,li),i(f,si),i(f,be),i(be,ni),i(f,ai),i(f,we),i(we,ri),i(f,ui),i(f,ve),i(ve,hi),i(f,pi),i(f,Ie),i(Ie,fi),r(e,$e,s),r(e,X,s),i(X,di),r(e,et,s),r(e,c,s),i(c,_),i(_,ci),i(_,mi),i(_,yi),i(_,bi),i(_,wi),i(c,vi),i(c,ke),i(ke,Ii),i(c,ki),i(c,Ee),i(Ee,Ei),i(c,_i),i(c,j),i(j,gi),i(j,Si),i(j,Ti),i(c,Li),i(c,D),i(D,Pi),i(D,Ci),i(D,Oi),r(e,tt,s),r(e,Y,s),i(Y,Ai),r(e,it,s),r(e,Z,s),i(Z,xi),r(e,ot,s),r(e,$,s),i($,Ri),r(e,lt,s),r(e,ee,s),i(ee,Bi),r(e,st,s),r(e,d,s),i(d,_e),i(_e,Ni),i(d,Mi),i(d,ge),i(ge,Hi),i(d,ji),i(d,Se),i(Se,Di),i(d,Ji),i(d,Te),i(Te,qi),i(d,Qi),i(d,Le),i(Le,Wi),i(d,Fi),i(d,Pe),i(Pe,Gi),r(e,nt,s),r(e,te,s),i(te,zi),r(e,at,s),r(e,v,s),i(v,g),i(g,Ui),i(g,J),i(J,Vi),i(g,Ki),i(g,Xi),i(g,Yi),i(v,Zi),i(v,Ce),i(Ce,$i),i(v,eo),i(v,Oe),i(Oe,to),r(e,rt,s),r(e,ie,s),i(ie,io),r(e,ut,s),r(e,I,s),i(I,oo),i(I,lo),i(I,so),i(I,no),i(I,ao)},p:ro,i:ro,o:ro,d(e){e&&t(S),e&&t(Ae),e&&t(T),e&&t(xe),e&&t(q),e&&t(Re),e&&t(Q),e&&t(Be),e&&t(L),e&&t(Ne),e&&t(O),e&&t(Me),e&&t(A),e&&t(He),e&&t(W),e&&t(je),e&&t(x),e&&t(De),e&&t(b),e&&t(Je),e&&t(R),e&&t(qe),e&&t(P),e&&t(Qe),e&&t(B),e&&t(We),e&&t(F),e&&t(Fe),e&&t(G),e&&t(Ge),e&&t(C),e&&t(ze),e&&t(N),e&&t(Ue),e&&t(z),e&&t(Ve),e&&t(U),e&&t(Ke),e&&t(w),e&&t(Xe),e&&t(V),e&&t(Ye),e&&t(K),e&&t(Ze),e&&t(f),e&&t($e),e&&t(X),e&&t(et),e&&t(c),e&&t(tt),e&&t(Y),e&&t(it),e&&t(Z),e&&t(ot),e&&t($),e&&t(lt),e&&t(ee),e&&t(st),e&&t(d),e&&t(nt),e&&t(te),e&&t(at),e&&t(v),e&&t(rt),e&&t(ie),e&&t(ut),e&&t(I)}}}class ul extends ll{constructor(S){super();sl(this,S,null,al,nl,{})}}export{ul as default};