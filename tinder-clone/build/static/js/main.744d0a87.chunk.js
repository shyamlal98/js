(this["webpackJsonptinder-clone"]=this["webpackJsonptinder-clone"]||[]).push([[0],{55:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){},67:function(e,n,t){},86:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(15),r=t.n(s),i=(t(55),t(56),t(57),t(37)),o=t.n(i),l=t(38),j=t.n(l),d=t(102),u=t(2);var b=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(d.a,{children:Object(u.jsx)(o.a,{fontSize:"large",className:"header_icon"})}),Object(u.jsx)("img",{className:"header_logo",src:"/tinder.png",alt:"tinder logo"}),Object(u.jsx)(d.a,{children:Object(u.jsx)(j.a,{fontSize:"large",className:"hedaer_icon"})})]})},f=t(25),h=t.n(f),O=t(39),x=t(47),m=t(40),p=t.n(m),g=(t(67),t(41)),v=t.n(g).a.create({baseURL:"http://127.0.0.1:8001",timeout:1e3,headers:{"X-Custom-Header":"Tinder Clone"}});var N=function(){var e=Object(c.useState)([]),n=Object(x.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/tinder/cards");case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(t),Object(u.jsx)("div",{className:"tinderCards",children:Object(u.jsx)("div",{className:"tinderCards_cardContainer",children:t.map((function(e){return Object(u.jsx)(p.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing "+t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n+" left the screen !");var n},children:Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(u.jsx)("h3",{children:e.name})})},e.name)}))})})},w=(t(86),t(42)),S=t.n(w),C=t(43),_=t.n(C),B=t(44),z=t.n(B),k=t(45),y=t.n(k),F=t(46),L=t.n(F);var I=function(){return Object(u.jsxs)("div",{className:"swipeButtons",children:[Object(u.jsx)(d.a,{className:"swipeButtons_repeat",children:Object(u.jsx)(S.a,{fontSize:"large"})}),Object(u.jsx)(d.a,{className:"swipeButtons_left",children:Object(u.jsx)(_.a,{fontSize:"large"})}),Object(u.jsx)(d.a,{className:"swipeButtons_star",children:Object(u.jsx)(z.a,{fontSize:"large"})}),Object(u.jsx)(d.a,{className:"swipeButtons_right",children:Object(u.jsx)(y.a,{fontSize:"large"})}),Object(u.jsx)(d.a,{className:"swipeButtons_lightning",children:Object(u.jsx)(L.a,{fontSize:"large"})})]})};var T=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{}),Object(u.jsx)(N,{}),Object(u.jsx)(I,{})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,103)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),E()}},[[88,1,2]]]);
//# sourceMappingURL=main.744d0a87.chunk.js.map