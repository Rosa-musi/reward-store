(this["webpackJsonpstore-arellano-rosa"]=this["webpackJsonpstore-arellano-rosa"]||[]).push([[0],{34:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var i,c,r,s,o,a,l,d,b,j,x=t(1),p=t.n(x),h=t(26),u=t.n(h),f=(t(34),t(6)),O=t.n(f),g=t(11),m=t(13),v=t(10),w=t(0),y=Object(x.createContext)(),k=function(n){var e=Object(x.useState)([]),t=Object(v.a)(e,2),i=t[0],c=t[1],r=Object(x.useState)(1),s=Object(v.a)(r,2),o=s[0],a=s[1],l=Object(x.useState)(16),d=Object(v.a)(l,2),b=d[0],j=d[1],p=Object(x.useState)(o*b),h=Object(v.a)(p,2),u=h[0],f=h[1],O=u-b,g=Object(x.useState)([]),m=Object(v.a)(g,2),k=m[0],z=m[1],C=Object(x.useState)(),D=Object(v.a)(C,2),I=D[0],M=D[1],E=Object(x.useState)(),P=Object(v.a)(E,2),N=P[0],F=P[1];Object(x.useEffect)((function(){console.log("a"),z(i.slice(O,u))}),[i,O,u]);var A=Object(x.useState)(!1),J=Object(v.a)(A,2),T=J[0],B=J[1],G=Object(x.useState)([]),S=Object(v.a)(G,2),Q=S[0],X=S[1],W=Object(x.useState)(),L=Object(v.a)(W,2),R=L[0],V=L[1];return Object(w.jsx)(y.Provider,{value:{products:i,setProducts:c,currentPage:o,setCurrentPage:a,postsPerPage:b,setPostsPerPage:j,indexOfLastPost:u,indexOfFirstPost:O,currentPosts:k,setIndexOfLastPost:f,user:I,setUser:M,show:T,setShow:B,points:N,setPoints:F,redeems:Q,setRedeems:X,setCurrentPost:z,redeemMessage:R,setRedeemMessage:V},children:n.children})},z=t.p+"static/media/header-x1.b6f067c6.png",C=t.p+"static/media/logo.0a8fb170.svg",D=t.p+"static/media/coin.b8bc711d.svg",I=t(2),M=t(3),E=M.b.div(i||(i=Object(I.a)(["\nwidth: 100%;\nheight: auto;\ndisplay: flex;\nflex-direction: column;\n"]))),P=M.b.div(c||(c=Object(I.a)(["\n height: 80px;\n width: 100%;\n display: flex;\n justify-content: space-between;\n align-items: center;\n"]))),N=M.b.img(r||(r=Object(I.a)(["\n width: 39px;\n margin-left: 40px;\n cursor: pointer;\n\n"]))),F=M.b.ul(s||(s=Object(I.a)(["\n display: flex;\n margin-right: 60px;\n"]))),A=M.b.a(o||(o=Object(I.a)(["\n text-decoration: none;\n list-style: none;\n padding: 5px;\n font-size: 22px;\n margin: 10px;\n color: #616161;\n\n //a:hover, a:visited, a:link, a:active\n\n &:hover {\n     border: solid 2px #616161;\n     border-radius: 20.5px;\n     background: #0AD4FA;\n     color: #fff;\n     text-decoration: none;\n     padding: 10px;\n }\n"]))),J=M.b.div(a||(a=Object(I.a)(["\n display: flex;\n align-items: center;\n width: auto;\n height: 50px;\n"]))),T=M.b.p(l||(l=Object(I.a)(["\n font-size: 24px;\n color: #616161;\n font-weight: 400;\n"]))),B=M.b.div(d||(d=Object(I.a)(["\n display: flex;\n justify-content: center;\n align-items: center;\n width: auto;\n padding-left: 12px;\n height: 48px;\n background: #EDEDED;\n border-radius: 20.5px;\n margin-left: 14px;\n margin-right: 42px;\n"]))),G=M.b.img(b||(b=Object(I.a)(["\n width: 50px;\n padding: 10px;\n"]))),S=M.b.img(j||(j=Object(I.a)(["\n width: 100%;\n"])));var Q,X,W,L,R,V,Y,U,K=function(){var n=Object(x.useContext)(y),e=n.user,t=n.setUser,i=n.points,c=n.setPoints,r=function(){var n=Object(g.a)(O.a.mark((function n(){var e,i;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"}});case 3:return e=n.sent,n.next=6,e.json();case 6:i=n.sent,t(i),c(i.points),console.log(i),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log("Error",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return Object(x.useEffect)((function(){r()}),[]),Object(w.jsxs)(E,{children:[Object(w.jsxs)(P,{children:[Object(w.jsx)(m.b,{to:"/reward-store/",children:Object(w.jsx)(N,{src:C})}),Object(w.jsxs)(J,{children:[Object(w.jsxs)(F,{children:[Object(w.jsx)(m.b,{to:"/reward-store/redeems",children:Object(w.jsx)(A,{children:"Redeems"})}),Object(w.jsx)(m.b,{to:"/reward-store/getcoins",children:Object(w.jsx)(A,{children:"Get Coins"})})]}),Object(w.jsx)(T,{children:e&&e.name}),Object(w.jsxs)(B,{children:[Object(w.jsx)(T,{children:i}),Object(w.jsx)(G,{src:D})]})]})]}),Object(w.jsx)(S,{src:z})]})},Z=t(24),H=M.b.div(Q||(Q=Object(I.a)(["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 0; \n    display: flex;\n    background:rgba(242, 242, 242, 0.5);\n    width: 100%;\n    height: 100%;\n    transition: all 1.3s;\n    z-index: 100;\n"]))),_=M.b.div(X||(X=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    background: #ffffff; \n    position: absolute;\n    border-radius: 20.5px;\n    width: 80%;\n    height: 70%;\n"]))),q=M.b.div(W||(W=Object(I.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n"]))),$=M.b.span(L||(L=Object(I.a)(["\n    padding: 5px;\n    cursor: pointer;\n    font-weight: 800;\n    font-size: 20px;\n    margin-right: 10px;\n    color: #616161;\n"]))),nn=M.b.div(R||(R=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n    height: 100%;\n"]))),en=M.b.h2(V||(V=Object(I.a)(["\n    margin: 2%;\n    color: #0AD4FA;\n\n"]))),tn=M.b.p(Y||(Y=Object(I.a)(["\n    margin: 2%;\n    color: #616161;\n"]))),cn=M.b.button(U||(U=Object(I.a)(["\n    background:#fff;\n    border-radius: 20.5px;\n    width: 120px;\n    height: 40px;\n    color: #616161;\n    cursor: pointer;\n    outline: none;\n    font-size: 18px;\n    margin: 2%;\n"])));function rn(){var n=Object(x.useContext)(y),e=n.show,t=n.setShow,i=n.redeemMessage,c=function(){return t(!1)};return Object(w.jsx)(H,{style:{display:e?"flex":"none"},onClick:c,children:Object(w.jsxs)(_,{children:[Object(w.jsx)(q,{children:Object(w.jsx)($,{onClick:c,children:"x"})}),Object(w.jsxs)(nn,{children:[Object(w.jsx)(en,{children:"You've redeem the product successfully"===i?"Congratulations!!":"Oops, something went wrong"}),Object(w.jsx)(tn,{children:"You've redeem the product successfully"===i?i:"You can try again"}),Object(w.jsx)(cn,{onClick:c,children:"Ok"})]})]})})}var sn,on,an,ln,dn,bn,jn,xn,pn,hn,un,fn,On,gn,mn,vn,wn,yn,kn=t(19),zn=t.p+"static/media/buy-white.9b6e6567.svg",Cn=t.p+"static/media/buy-blue.c5c4f01c.svg",Dn=M.b.div(sn||(sn=Object(I.a)(["\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    width: 276px;\n    height: 290px;\n    background: linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);\n    z-index: 50;\n"]))),In=M.b.img(on||(on=Object(I.a)(["\n    width: 50px;\n    align-self: flex-end;\n    margin-top: 12.5px;\n    margin-bottom: 20px;\n    margin-right: 6px;\n"]))),Mn=M.b.div(an||(an=Object(I.a)(["\n    width: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),En=M.b.p(ln||(ln=Object(I.a)(["\n    font-size: 26px;\n    color: #fff;\n    font-weight: 400;\n"]))),Pn=M.b.img(dn||(dn=Object(I.a)(["\n    width: 26px;\n    margin: 5px;\n"]))),Nn=M.b.div(bn||(bn=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    background: #fff;\n    width: 276px;\n    height: 290px;\n    margin: 12px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n\n    &:hover "," {\n        display: ",";\n    }\n"])),Dn,(function(n){return n.sinHover?"none":"flex"})),Fn=M.b.div(jn||(jn=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    padding: 12px;\n    width: 252px;\n    height: 182px;\n"]))),An=M.b.img(xn||(xn=Object(I.a)(["\n    width: 252px;\n    position: absolute;\n"]))),Jn=M.b.img(pn||(pn=Object(I.a)(["\n    width: 42px;\n    position: absolute;\n    z-index: 30;\n    align-self: flex-end;\n"]))),Tn=M.b.div(hn||(hn=Object(I.a)(["\n    display: flex;\n    align-self: flex-end;\n    align-items: center;\n    justify-content: space-around;\n    position: absolute;\n    z-index: 30;\n    width: 142px;\n    height: 42px;\n    background:#616161;\n    border-radius: 20.5px;\n    color: #fff;\n    opacity: 80%;\n    outline: none;\n    font-size: 14px;\n"]))),Bn=M.b.img(un||(un=Object(I.a)(["\n    width: 20px;\n"]))),Gn=M.b.p(fn||(fn=Object(I.a)(["\n    padding: 5px;\n    font-size: 14px;\n    color: #fff;\n"]))),Sn=M.b.span(On||(On=Object(I.a)(["\n    height: 1px;\n    width: 228px;\n    background: #D9D9D9;\n"]))),Qn=M.b.div(gn||(gn=Object(I.a)(["\n    width: 228px;\n    height: 45px;\n    display: flex;\n    flex-direction: column;\n    padding: 23px;\n    \n"]))),Xn=M.b.p(mn||(mn=Object(I.a)(["\n    font-weight: 400;\n    font-size: 16px;\n    color: #A3A3A3;\n    margin: 0;\n"]))),Wn=M.b.p(vn||(vn=Object(I.a)(["\n    font-size: 18px;\n    color:  #616161;\n    margin-top: 5px;\n\n"]))),Ln=M.b.button(wn||(wn=Object(I.a)(["\n    width: 180px;\n    height: 42px;\n    background:#fff;\n    border-radius: 20.5px;\n    color: #616161;\n    cursor: pointer;\n    outline: none;\n    font-size: 18px;\n"])));function Rn(n){var e=Object(x.useContext)(y),t=e.setShow,i=e.setRedeemMessage,c=e.setPoints,r=e.points,s=function(){var n=Object(g.a)(O.a.mark((function n(e,r){var s,o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e),console.log(r),n.next=5,fetch("https://coding-challenge-api.aerolab.co/redeem",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"},body:JSON.stringify({productId:e})});case 5:return s=n.sent,n.next=8,s.json();case 8:o=n.sent,t(!0),i(o.message),c((function(n){return n-r})),console.log(o),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),console.log("error",n.t0);case 18:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(w.jsxs)(Nn,{sinHover:r<n.cost,children:[Object(w.jsxs)(Fn,{children:[Object(w.jsx)(An,{src:n.img.url}),r>n.cost?Object(w.jsx)(Jn,{src:Cn}):Object(w.jsxs)(Tn,{children:[Object(w.jsxs)(Gn,{children:["You need ",n.cost-r]}),Object(w.jsx)(Bn,{src:D})]})]}),Object(w.jsx)(Sn,{}),Object(w.jsxs)(Qn,{children:[Object(w.jsx)(Xn,{children:n.category}),Object(w.jsx)(Wn,{children:n.name})]}),Object(w.jsxs)(Dn,{children:[Object(w.jsx)(In,{src:zn}),Object(w.jsxs)(Mn,{children:[Object(w.jsx)(En,{children:n.cost}),Object(w.jsx)(Pn,{src:D})]}),Object(w.jsx)(Ln,{onClick:function(){return s(n._id,n.cost)},children:"Redeem now"})]})]})}var Vn=M.b.div(yn||(yn=Object(I.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    background: #F2F2F2;\n"])));function Yn(){var n=Object(x.useContext)(y),e=n.setProducts,t=n.currentPosts,i=function(){var n=Object(g.a)(O.a.mark((function n(){var t,i;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://coding-challenge-api.aerolab.co/products",{headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"}});case 3:return t=n.sent,n.next=6,t.json();case 6:i=n.sent,e(i),console.log(i),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("error",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return Object(x.useEffect)((function(){i()}),[]),console.log("d"),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(Vn,{children:t.map((function(n){return Object(w.jsx)("div",{children:Object(w.jsx)(Rn,Object(kn.a)({},n))},n._id)}))})})}var Un,Kn,Zn,Hn,_n,qn,$n,ne,ee,te,ie,ce,re,se,oe,ae,le,de,be,je=t.p+"static/media/arrow-left.e6eb9be1.svg",xe=t.p+"static/media/arrow-right.3306c112.svg",pe=M.b.div(Un||(Un=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #F2F2F2;\n    width: 100%;\n"]))),he=M.b.div(Kn||(Kn=Object(I.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    height: auto;\n\n"]))),ue=M.b.p(Zn||(Zn=Object(I.a)(["\n    font-size: 24px;\n    color: #616161;\n    padding-left: 60px;\n"]))),fe=M.b.div(Hn||(Hn=Object(I.a)(["\n    border: .5px solid #D9D9D9;\n    height: 49px;\n    width: 1px;\n    padding: 0;\n    background: #D9D9D9;\n    margin: 10px;\n"]))),Oe=M.b.button(_n||(_n=Object(I.a)(["\n    width: 163px;\n    height: 48px;\n    background:#EDEDED;\n    border-radius: 20.5px;\n    color: #A3A3A3;\n    cursor: pointer;\n    margin: 20px;\n    outline: none;\n    font-size: 20px;\n\n    &:hover{\n        background: #0AD4FA;\n        color: #fff;\n    }\n"]))),ge=M.b.div(qn||(qn=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100px;\n    margin-right: 68px;\n"]))),me=M.b.img($n||($n=Object(I.a)(["\n    margin-right: 15px;\n"]))),ve=M.b.div(ne||(ne=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100%;\n"]))),we=M.b.div(ee||(ee=Object(I.a)(["\n    height: 1px;\n    width: 90%;\n    background: #D9D9D9;\n"]))),ye=M.b.div(te||(te=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: #F2F2F2;\n    width: 100%;\n    height: 100px;\n    padding-bottom: 100px;\n    padding-top: 50px;\n"]))),ke=M.b.div(ie||(ie=Object(I.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    height: auto;\n"]))),ze=M.b.p(ce||(ce=Object(I.a)(["\n    font-size: 24px;\n    margin: 10px;\n    color: #616161;\n    padding-left: 90px;\n    width: 100%;\n"]))),Ce=M.b.div(re||(re=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    padding-right: 100px;\n    width: auto;\n"])));function De(){var n=Object(x.useContext)(y),e=n.products,t=n.currentPage,i=n.setCurrentPage,c=n.indexOfLastPost,r=n.setCurrentPosts,s=n.indexOfFirstPost,o=n.postsPerPage,a=n.setIndexOfLastPost,l=n.setProducts,d=function(n){n.preventDefault(),e.length>c?i((function(n){return n+1})):e.length>c&&e.length<t+1&&(i((function(n){return n+1})),r(e.slice(s,e.length)))},b=function(n){n.preventDefault(),t>1&&i((function(n){return n-1}))};Object(x.useEffect)((function(){a(t*o)}),[t]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(rn,{}),Object(w.jsxs)(pe,{children:[Object(w.jsxs)(he,{children:[Object(w.jsxs)(ue,{children:[e.length>c&&e.length<t+1?e.length:c," of ",e.length," products"]}),Object(w.jsx)(fe,{}),Object(w.jsx)(ue,{children:"Sort by:"}),Object(w.jsx)(Oe,{onClick:function(){l(Object(Z.a)(e).sort((function(n,e){var t=n.cost-e.cost;return i(1),t})))},children:"Lowest price"}),Object(w.jsx)(Oe,{onClick:function(){l(Object(Z.a)(e).sort((function(n,e){var t=e.cost-n.cost;return i(1),t})))},children:"Highest Price"}),Object(w.jsxs)(ge,{children:[Object(w.jsx)("a",{href:"!#",onClick:b,style:{visibility:e.length===c?"visible":"hidden"},children:Object(w.jsx)(me,{src:je,alt:"left"})}),Object(w.jsx)("a",{href:"!#",children:Object(w.jsx)("img",{src:xe,onClick:d,alt:"right"})})]})]}),Object(w.jsx)(ve,{children:Object(w.jsx)(we,{})})]}),Object(w.jsx)(Yn,{}),Object(w.jsxs)(ye,{children:[Object(w.jsxs)(ke,{children:[Object(w.jsxs)(ze,{children:[e.length>c&&e.length<t+1?e.length:c," of ",e.length," products"]}),Object(w.jsxs)(Ce,{children:[Object(w.jsx)("a",{href:"!#",onClick:b,style:{visibility:e.length==c?"visible":"hidden"},children:Object(w.jsx)(me,{src:je,alt:"left"})}),Object(w.jsx)("a",{href:"!#",onClick:d,children:Object(w.jsx)("img",{src:xe,alt:"right"})})]})]}),Object(w.jsx)(ve,{style:{marginTop:20},children:Object(w.jsx)(we,{})})]})]})}var Ie,Me,Ee,Pe,Ne=M.b.div(se||(se=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #fff;\n    width: 276px;\n    height: 290px;\n    margin: 12px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n"]))),Fe=M.b.div(oe||(oe=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    padding: 12px;\n    width: 252px;\n    height: 182px;\n"]))),Ae=M.b.img(ae||(ae=Object(I.a)(["\n    width: 252px;\n    position: absolute;\n"]))),Je=M.b.div(le||(le=Object(I.a)(["\n    width: 228px;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    padding: 23px;   \n"]))),Te=M.b.p(de||(de=Object(I.a)(["\n    font-size: 18px;\n    color:  #616161;\n    font-weight: 600;\n    margin-top: 5px;\n"]))),Be=M.b.p(be||(be=Object(I.a)(["\n    font-size: 16px;\n    color: #A3A3A3;\n"])));function Ge(n){return Object(w.jsxs)(Ne,{children:[Object(w.jsx)(Fe,{children:Object(w.jsx)(Ae,{src:n.img.url})}),Object(w.jsxs)(Je,{children:[Object(w.jsx)(Te,{children:n.name}),Object(w.jsx)(Be,{children:n.cost})]})]})}var Se,Qe,Xe,We,Le,Re,Ve=M.b.div(Ie||(Ie=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),Ye=M.b.h2(Me||(Me=Object(I.a)(["\n    font-weight:600;\n    color: #0AD4FA;\n    margin-top: 50px;\n    margin-bottom: 30px;\n"]))),Ue=M.b.p(Ee||(Ee=Object(I.a)(["\n    margin-bottom: 30px;\n"]))),Ke=M.b.div(Pe||(Pe=Object(I.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    background: #F2F2F2;\n"])));function Ze(){var n=Object(x.useContext)(y),e=n.redeems,t=n.setRedeems,i=function(){var n=Object(g.a)(O.a.mark((function n(e){var i,c;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e),n.next=4,fetch("https://coding-challenge-api.aerolab.co/user/history",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"}});case 4:return i=n.sent,n.next=7,i.json();case 7:c=n.sent,t(c),console.log(c),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log("error",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(x.useEffect)((function(){i()}),[]),Object(w.jsxs)(Ve,{children:[Object(w.jsx)(Ye,{children:"Redeemed products"}),Object(w.jsx)(Ue,{children:"History of your redeems"}),Object(w.jsx)(Ke,{children:e.map((function(n){return Object(w.jsx)("div",{children:Object(w.jsx)(Ge,Object(kn.a)({},n))},n._id)}))})]})}var He,_e=M.b.div(Se||(Se=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),qe=M.b.h2(Qe||(Qe=Object(I.a)(["\n    font-weight:600;\n    color: #0AD4FA;\n    margin-top: 50px;\n    margin-bottom: 30px;\n"]))),$e=M.b.div(Xe||(Xe=Object(I.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: 30px;\n    margin-bottom: 50px;\n"]))),nt=M.b.div(We||(We=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    padding-left: 12px;\n    height: 48px;\n    background: #EDEDED;\n    border-radius: 20.5px;\n    margin-left: 14px;\n    margin-right: 42px;\n    cursor: pointer;\n"]))),et=M.b.p(Le||(Le=Object(I.a)(["\n    font-size: 24px;\n    color: #616161;\n    font-weight: 400;\n"]))),tt=M.b.img(Re||(Re=Object(I.a)(["\n    width: 50px;\n    padding: 10px;\n"])));function it(){var n=Object(x.useContext)(y).setPoints,e=function(){var e=Object(g.a)(O.a.mark((function e(t){var i,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,fetch("https://coding-challenge-api.aerolab.co/user/points",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM0NDk1MDdlNzE4NzAwMjBlMzhmMTEiLCJpYXQiOjE2MTQwMzkzNzZ9.Nnt8B1ey0vF4h6iW0rGTjbQBIKdXGth5wX4eVGEWEso"},body:JSON.stringify({amount:t})});case 4:return i=e.sent,e.next=7,i.json();case 7:c=e.sent,n(c["New Points"]),console.log(c),console.log(t),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}();return Object(w.jsxs)(_e,{children:[Object(w.jsx)(qe,{children:"Do you want more coins?"}),Object(w.jsx)("p",{children:"Choose the amount of coins that you want"}),Object(w.jsxs)($e,{children:[Object(w.jsxs)(nt,{children:[Object(w.jsx)(et,{onClick:function(){return e(1e3)},children:"1000"}),Object(w.jsx)(tt,{src:D})]}),Object(w.jsxs)(nt,{children:[Object(w.jsx)(et,{onClick:function(){return e(5e3)},children:"5000"}),Object(w.jsx)(tt,{src:D})]}),Object(w.jsxs)(nt,{children:[Object(w.jsx)(et,{onClick:function(){return e(7500)},children:"7500"}),Object(w.jsx)(tt,{src:D})]})]})]})}var ct=Object(M.a)(He||(He=Object(I.a)(["\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Source Sans Pro', sans-serif;\n\t\n\ta{\n\t\ttext-decoration: none;\n\t}\n}\n"]))),rt=t(4);var st=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(ct,{}),Object(w.jsxs)(k,{children:[Object(w.jsx)(K,{}),Object(w.jsxs)(rt.c,{children:[Object(w.jsx)(rt.a,{path:"/reward-store/",exact:!0,children:Object(w.jsx)(De,{})}),Object(w.jsx)(rt.a,{path:"/reward-store/redeems",exact:!0,children:Object(w.jsx)(Ze,{})}),Object(w.jsx)(rt.a,{path:"/reward-store/getcoins",exact:!0,children:Object(w.jsx)(it,{})})]})]})]})})},ot=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(n),i(n),c(n),r(n),s(n)}))};u.a.render(Object(w.jsx)(p.a.StrictMode,{children:Object(w.jsx)(st,{})}),document.getElementById("root")),ot()}},[[43,1,2]]]);
//# sourceMappingURL=main.99e274bb.chunk.js.map