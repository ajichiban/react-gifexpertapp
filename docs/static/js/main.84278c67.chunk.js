(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(8),r=n.n(c),i=n(2),s=n(10),u=n(0),j=function(t){var e=t.setAnimes,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],j=c[1];return Object(u.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),r.trim().length<3)return!1;e((function(t){return[r].concat(Object(s.a)(t))})),j("")},children:Object(u.jsx)("input",{onChange:function(t){return j(t.target.value)},value:r,type:"text"})})},o=n(7),d=n(6),l=n.n(d),b=n(9),m=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,c,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=10&api_key=VmOSDo6A825Gt7StxJbB6xtPnaqndIOn "),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(u.jsx)("div",{className:"card__image-container",children:Object(u.jsx)("img",{className:"card__image",src:n,alt:e})}),Object(u.jsxs)("p",{className:"card__title",children:[e," "]})]})},f=function(t){var e=t.category,n=function(t){Object(a.useEffect)((function(){m(t).then((function(t){r({data:t,loading:!1})}))}),[t]);var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return c}(e),c=n.data,r=n.loading;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:[e," "]}),r?"Loading...":Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(a.createElement)(p,Object(o.a)(Object(o.a)({},t),{},{key:t.id}))}))})]})},O=function(t){var e=Object(a.useState)(["naruto"]),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setAnimes:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(f,{category:t},t)}))})]})};n(17);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.84278c67.chunk.js.map