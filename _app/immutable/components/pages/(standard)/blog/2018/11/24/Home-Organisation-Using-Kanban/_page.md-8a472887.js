import{S as Zt,i as $t,s as eo,k as s,a as c,q as a,l as r,m as i,h as o,c as u,r as l,n as k,b as d,H as e,B as Dt}from"../../../../../../../../chunks/index-5a67f8c0.js";function to(Vt){let _,Xt=`<code class="language-undefined">As a disorganised, undisciplined administrator of house and home
I require a permanently visible, virtual Kanban board
In order to keep control of things</code>`,$,v,de,he,ce,ue,fe,pe,be,ee,I,me,ve,we,S,ye,Ie,te,O,ge,oe,b,D,_e,W,ke,Ee,G,Se,Ae,L,M,Re,Ce,xe,B,j,Oe,De,Le,K,N,Be,Ke,ae,h,Te,Pe,qe,A,ze,He,Fe,Ue,We,Ge,Me,je,Ne,Ye,le,T,Je,se,p,Qe,Ve,Xe,R,Ze,$e,et,tt,C,ot,at,lt,re,f,P,st,Y,rt,it,q,nt,J,dt,ht,x,ct,Q,ut,ft,pt,z,bt,V,mt,vt,X,wt,yt,H,It,Z,gt,ie,F,_t;return{c(){_=s("pre"),$=c(),v=s("p"),de=a("So that’s the plan, I’ve been trying to use Trello for this purpose and I love the simplicity (compared to Azure DevOps for example), the android app is good too."),he=s("br"),ce=a(`
However it gets lost amongst dozens of browser tabs (plus I hate typing on touch screen), so something is missing.`),ue=s("br"),fe=a(`
I could go physical but if I think of something during a commute, or in a bar or supermarket, I’ll forget by the time I get home and this will drive me nuts.`),pe=s("br"),be=a(`
So I think stick with Trello, but set up a permanent display for it that I can’t ignore, worth a try anyway.`),ee=c(),I=s("p"),me=a("I had a Kindle Fire (2nd Generation) from 2012 lying around so figured I’d use that, though I’d have to work out how to disable the annoying lock screen (not just adverts)."),ve=s("br"),we=a(`
I installed the KingRoot app and rooted the device, installed Android Studio to get access to `),S=s("a"),ye=a("adb"),Ie=a(`.
Now what?`),te=c(),O=s("p"),ge=a("A few useful things I’ve learnt about adb:"),oe=c(),b=s("ul"),D=s("li"),_e=a("Installs by default to C:\\Users\\"),W=s("user"),ke=a("\\AppData\\Local\\Android\\Sdk\\platform-tools - I’ve not added this to my path"),Ee=c(),G=s("li"),Se=a("the Windows drive “This PC\\Kindle\\Internal storage” maps to “/sdcard”"),Ae=c(),L=s("li"),M=s("code"),Re=a("adb push <windows_source> <android_target>"),Ce=a(" sends a file to the android device"),xe=c(),B=s("li"),j=s("code"),Oe=a("adb pull <android_source>"),De=a(" pulls it back"),Le=c(),K=s("li"),N=s("code"),Be=a("adb shell"),Ke=a(" lets me run commands remotely on the device"),ae=c(),h=s("p"),Te=a("So the task at hand is to find out how to turn off the screen lock, even if having the screen on permanently b0rks the device."),Pe=s("br"),qe=a(`
Of all the sites I visited `),A=s("a"),ze=a("this"),He=a(" was the clearest."),Fe=s("br"),Ue=a(`
But /data/system/locksettings.db and /data/system/gesture.key didn’t seem to exist so I was stuck with option 1.`),We=s("br"),Ge=a(`
Slight problem with that in the sqlite3 wasn’t on the kindle either, though it is on my Windows machine under Android SDK tools.`),Me=s("br"),je=a(`
So I rather naively pulled, edited, pushed the database back.`),Ne=s("br"),Ye=a(`
Success! Almost! Yes the lock screen was gone, but I’d also lost the ability to navigate between apps and the keyboard had gone Chinese(?). Couldn’t even get back to the settings to do a factory reset.`),le=c(),T=s("h3"),Je=a("Hard Factory Reset"),se=c(),p=s("p"),Qe=a("I was bored now, this really wasn’t worth the effort, but now I’ve got an unusable device."),Ve=s("br"),Xe=a(`
The issue I’d encountered was described quite clearly on the `),R=s("a"),Ze=a("xda forum"),$e=a(", as was the solution."),et=s("br"),tt=a(`
It turns out that the image suggested was too big for my device (/cache directory full), so I went to Amazon itself to find the `),C=s("a"),ot=a("correct image"),at=s("br"),lt=a(`
This worked fine, my Kindle is back to normal, steps as follows:`),re=c(),f=s("ol"),P=s("li"),st=a("Get the image on to the Kindle "),Y=s("code"),rt=a(".\\adb push C:\\Users\\<user>\\Downloads\\update-kindle-7.5.1_user_5174320.bin /sdcard"),it=c(),q=s("li"),nt=a("Enter the shell "),J=s("code"),dt=a(".\\adb shell"),ht=c(),x=s("li"),ct=a("Switch to super user "),Q=s("code"),ut=a("su"),ft=a(" which required me to authorise with a press on the kindle screen"),pt=c(),z=s("li"),bt=a("Copy the file to the update cache, had to use cat because cp wasn’t available "),V=s("code"),mt=a("cat /sdcard/update-kindle-7.5.1_user_5174320.bin > /cache/update.zip"),vt=c(),X=s("li"),wt=a("exit and exit again to return to Windows prompt"),yt=c(),H=s("li"),It=a("Reboot to trigger factory reset "),Z=s("code"),gt=a(".\\adb reboot recovery"),ie=c(),F=s("p"),_t=a("I also considered installing a custom Android ROM rather than the FireOS one but I could not find a live link anywhere for a 2012 device."),this.h()},l(t){_=r(t,"PRE",{class:!0});var n=i(_);n.forEach(o),$=u(t),v=r(t,"P",{});var E=i(v);de=l(E,"So that’s the plan, I’ve been trying to use Trello for this purpose and I love the simplicity (compared to Azure DevOps for example), the android app is good too."),he=r(E,"BR",{}),ce=l(E,`
However it gets lost amongst dozens of browser tabs (plus I hate typing on touch screen), so something is missing.`),ue=r(E,"BR",{}),fe=l(E,`
I could go physical but if I think of something during a commute, or in a bar or supermarket, I’ll forget by the time I get home and this will drive me nuts.`),pe=r(E,"BR",{}),be=l(E,`
So I think stick with Trello, but set up a permanent display for it that I can’t ignore, worth a try anyway.`),E.forEach(o),ee=u(t),I=r(t,"P",{});var U=i(I);me=l(U,"I had a Kindle Fire (2nd Generation) from 2012 lying around so figured I’d use that, though I’d have to work out how to disable the annoying lock screen (not just adverts)."),ve=r(U,"BR",{}),we=l(U,`
I installed the KingRoot app and rooted the device, installed Android Studio to get access to `),S=r(U,"A",{href:!0,rel:!0});var Lt=i(S);ye=l(Lt,"adb"),Lt.forEach(o),Ie=l(U,`.
Now what?`),U.forEach(o),te=u(t),O=r(t,"P",{});var Bt=i(O);ge=l(Bt,"A few useful things I’ve learnt about adb:"),Bt.forEach(o),oe=u(t),b=r(t,"UL",{});var g=i(b);D=r(g,"LI",{});var kt=i(D);_e=l(kt,"Installs by default to C:\\Users\\"),W=r(kt,"USER",{});var Kt=i(W);ke=l(Kt,"\\AppData\\Local\\Android\\Sdk\\platform-tools - I’ve not added this to my path"),Kt.forEach(o),kt.forEach(o),Ee=u(g),G=r(g,"LI",{});var Tt=i(G);Se=l(Tt,"the Windows drive “This PC\\Kindle\\Internal storage” maps to “/sdcard”"),Tt.forEach(o),Ae=u(g),L=r(g,"LI",{});var Et=i(L);M=r(Et,"CODE",{});var Pt=i(M);Re=l(Pt,"adb push <windows_source> <android_target>"),Pt.forEach(o),Ce=l(Et," sends a file to the android device"),Et.forEach(o),xe=u(g),B=r(g,"LI",{});var St=i(B);j=r(St,"CODE",{});var qt=i(j);Oe=l(qt,"adb pull <android_source>"),qt.forEach(o),De=l(St," pulls it back"),St.forEach(o),Le=u(g),K=r(g,"LI",{});var At=i(K);N=r(At,"CODE",{});var zt=i(N);Be=l(zt,"adb shell"),zt.forEach(o),Ke=l(At," lets me run commands remotely on the device"),At.forEach(o),g.forEach(o),ae=u(t),h=r(t,"P",{});var m=i(h);Te=l(m,"So the task at hand is to find out how to turn off the screen lock, even if having the screen on permanently b0rks the device."),Pe=r(m,"BR",{}),qe=l(m,`
Of all the sites I visited `),A=r(m,"A",{href:!0,rel:!0});var Ht=i(A);ze=l(Ht,"this"),Ht.forEach(o),He=l(m," was the clearest."),Fe=r(m,"BR",{}),Ue=l(m,`
But /data/system/locksettings.db and /data/system/gesture.key didn’t seem to exist so I was stuck with option 1.`),We=r(m,"BR",{}),Ge=l(m,`
Slight problem with that in the sqlite3 wasn’t on the kindle either, though it is on my Windows machine under Android SDK tools.`),Me=r(m,"BR",{}),je=l(m,`
So I rather naively pulled, edited, pushed the database back.`),Ne=r(m,"BR",{}),Ye=l(m,`
Success! Almost! Yes the lock screen was gone, but I’d also lost the ability to navigate between apps and the keyboard had gone Chinese(?). Couldn’t even get back to the settings to do a factory reset.`),m.forEach(o),le=u(t),T=r(t,"H3",{});var Ft=i(T);Je=l(Ft,"Hard Factory Reset"),Ft.forEach(o),se=u(t),p=r(t,"P",{});var y=i(p);Qe=l(y,"I was bored now, this really wasn’t worth the effort, but now I’ve got an unusable device."),Ve=r(y,"BR",{}),Xe=l(y,`
The issue I’d encountered was described quite clearly on the `),R=r(y,"A",{href:!0,rel:!0});var Ut=i(R);Ze=l(Ut,"xda forum"),Ut.forEach(o),$e=l(y,", as was the solution."),et=r(y,"BR",{}),tt=l(y,`
It turns out that the image suggested was too big for my device (/cache directory full), so I went to Amazon itself to find the `),C=r(y,"A",{href:!0,rel:!0});var Wt=i(C);ot=l(Wt,"correct image"),Wt.forEach(o),at=r(y,"BR",{}),lt=l(y,`
This worked fine, my Kindle is back to normal, steps as follows:`),y.forEach(o),re=u(t),f=r(t,"OL",{});var w=i(f);P=r(w,"LI",{});var Rt=i(P);st=l(Rt,"Get the image on to the Kindle "),Y=r(Rt,"CODE",{});var Gt=i(Y);rt=l(Gt,".\\adb push C:\\Users\\<user>\\Downloads\\update-kindle-7.5.1_user_5174320.bin /sdcard"),Gt.forEach(o),Rt.forEach(o),it=u(w),q=r(w,"LI",{});var Ct=i(q);nt=l(Ct,"Enter the shell "),J=r(Ct,"CODE",{});var Mt=i(J);dt=l(Mt,".\\adb shell"),Mt.forEach(o),Ct.forEach(o),ht=u(w),x=r(w,"LI",{});var ne=i(x);ct=l(ne,"Switch to super user "),Q=r(ne,"CODE",{});var jt=i(Q);ut=l(jt,"su"),jt.forEach(o),ft=l(ne," which required me to authorise with a press on the kindle screen"),ne.forEach(o),pt=u(w),z=r(w,"LI",{});var xt=i(z);bt=l(xt,"Copy the file to the update cache, had to use cat because cp wasn’t available "),V=r(xt,"CODE",{});var Nt=i(V);mt=l(Nt,"cat /sdcard/update-kindle-7.5.1_user_5174320.bin > /cache/update.zip"),Nt.forEach(o),xt.forEach(o),vt=u(w),X=r(w,"LI",{});var Yt=i(X);wt=l(Yt,"exit and exit again to return to Windows prompt"),Yt.forEach(o),yt=u(w),H=r(w,"LI",{});var Ot=i(H);It=l(Ot,"Reboot to trigger factory reset "),Z=r(Ot,"CODE",{});var Jt=i(Z);gt=l(Jt,".\\adb reboot recovery"),Jt.forEach(o),Ot.forEach(o),w.forEach(o),ie=u(t),F=r(t,"P",{});var Qt=i(F);_t=l(Qt,"I also considered installing a custom Android ROM rather than the FireOS one but I could not find a live link anywhere for a 2012 device."),Qt.forEach(o),this.h()},h(){k(_,"class","language-undefined"),k(S,"href","https://developer.android.com/studio/command-line/adb"),k(S,"rel","nofollow"),k(A,"href","https://android-fix.com/tips-and-tricks/38-how-to-disable-pattern-unlock-via-adb.html"),k(A,"rel","nofollow"),k(R,"href","https://forum.xda-developers.com/showthread.php?t=2758306"),k(R,"rel","nofollow"),k(C,"href","https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=200529680"),k(C,"rel","nofollow")},m(t,n){d(t,_,n),_.innerHTML=Xt,d(t,$,n),d(t,v,n),e(v,de),e(v,he),e(v,ce),e(v,ue),e(v,fe),e(v,pe),e(v,be),d(t,ee,n),d(t,I,n),e(I,me),e(I,ve),e(I,we),e(I,S),e(S,ye),e(I,Ie),d(t,te,n),d(t,O,n),e(O,ge),d(t,oe,n),d(t,b,n),e(b,D),e(D,_e),e(D,W),e(W,ke),e(b,Ee),e(b,G),e(G,Se),e(b,Ae),e(b,L),e(L,M),e(M,Re),e(L,Ce),e(b,xe),e(b,B),e(B,j),e(j,Oe),e(B,De),e(b,Le),e(b,K),e(K,N),e(N,Be),e(K,Ke),d(t,ae,n),d(t,h,n),e(h,Te),e(h,Pe),e(h,qe),e(h,A),e(A,ze),e(h,He),e(h,Fe),e(h,Ue),e(h,We),e(h,Ge),e(h,Me),e(h,je),e(h,Ne),e(h,Ye),d(t,le,n),d(t,T,n),e(T,Je),d(t,se,n),d(t,p,n),e(p,Qe),e(p,Ve),e(p,Xe),e(p,R),e(R,Ze),e(p,$e),e(p,et),e(p,tt),e(p,C),e(C,ot),e(p,at),e(p,lt),d(t,re,n),d(t,f,n),e(f,P),e(P,st),e(P,Y),e(Y,rt),e(f,it),e(f,q),e(q,nt),e(q,J),e(J,dt),e(f,ht),e(f,x),e(x,ct),e(x,Q),e(Q,ut),e(x,ft),e(f,pt),e(f,z),e(z,bt),e(z,V),e(V,mt),e(f,vt),e(f,X),e(X,wt),e(f,yt),e(f,H),e(H,It),e(H,Z),e(Z,gt),d(t,ie,n),d(t,F,n),e(F,_t)},p:Dt,i:Dt,o:Dt,d(t){t&&o(_),t&&o($),t&&o(v),t&&o(ee),t&&o(I),t&&o(te),t&&o(O),t&&o(oe),t&&o(b),t&&o(ae),t&&o(h),t&&o(le),t&&o(T),t&&o(se),t&&o(p),t&&o(re),t&&o(f),t&&o(ie),t&&o(F)}}}class ao extends Zt{constructor(_){super(),$t(this,_,null,to,eo,{})}}export{ao as default};
