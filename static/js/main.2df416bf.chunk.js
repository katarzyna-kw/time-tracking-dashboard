(this["webpackJsonptime-tracking-dashboard"]=this["webpackJsonptime-tracking-dashboard"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),i=a(4),c=a.n(i),n=(a(9),a(2)),l=(a(10),a.p+"static/media/image-jeremy.71cd41f1.png"),o=a(0);var d=function(e){var t=e.timeframe,a=e.view;return Object(o.jsxs)("section",{className:"profile__card","data-testid":"profilecard",children:[Object(o.jsxs)("header",{className:"profile__user",children:[Object(o.jsx)("img",{className:"profile__avatar",src:l,alt:"profile avatar"}),Object(o.jsxs)("div",{className:"profile__subhead",children:[Object(o.jsx)("p",{className:"profile__subhead__text",children:"Report for"}),Object(o.jsx)("h1",{className:"profile__subhead__header",children:"Jeremy Robson"})]})]}),Object(o.jsxs)("ul",{className:"profile__parameters",children:[Object(o.jsx)("li",{"data-testid":"daily",className:"daily"===t?"profile__parameters-links active":"profile__parameters-links",onClick:function(){return a("daily")},children:"Daily"}),Object(o.jsx)("li",{className:"weekly"===t?"profile__parameters-links active":"profile__parameters-links",onClick:function(){return a("weekly")},children:"Weekly"}),Object(o.jsx)("li",{className:"monthly"===t?"profile__parameters-links active":"profile__parameters-links",onClick:function(){return a("monthly")},children:"Monthly"})]})]})},j=a.p+"static/media/icon-ellipsis.a57a4ac8.svg";a(12);var f=function(){return Object(o.jsx)("img",{className:"card__ellipsis",src:j,alt:"ellipsis","data-testid":"ellipsis"})};a(13);var m=function(e){var t=e.timeframe,a=e.item;return Object(o.jsxs)("div",{class:"card__data","data-testid":"card-data",children:[Object(o.jsxs)("p",{className:"card__data--current",children:[a.timeframes[t].current,"hrs"]},"current"),Object(o.jsxs)("p",{className:"card__data--previous",children:["Yesterday - ",a.timeframes[t].previous,"hrs"]},"previous")]})};a(14);var u=function(e){var t=e.timeframe,a=e.item;return Object(o.jsxs)("div",{class:"card","data-testid":"card",children:[Object(o.jsx)("div",{class:"card__header"}),Object(o.jsxs)("div",{class:"card__body",children:[Object(o.jsxs)("div",{className:"card__label",children:[Object(o.jsx)("p",{className:"card__title",children:a.title},"title"),Object(o.jsx)(f,{})]}),Object(o.jsx)(m,{timeframe:t,item:a})]})]})};a(15);var b=function(e){var t=e.timeframe,a=Object(r.useState)([]),s=Object(n.a)(a,2),i=s[0],c=s[1];return Object(r.useEffect)((function(){fetch("data.json",{headers:{headers:{"Content-Type:":"application/json",Accept:"application/json"}}}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),c(e)}))}),[]),Object(o.jsx)("section",{className:"cards","data-testid":"cards",children:i&&i.length>0&&i.map((function(e){return Object(o.jsx)(u,{item:e,timeframe:t},"card")}))})};a(16);var h=function(){return Object(o.jsxs)("footer",{className:"attribution","data-testid":"footer",children:["Challenge by"," ",Object(o.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by"," ",Object(o.jsx)("a",{href:"https://katarzyna-kw.github.io/portfolio-website/",target:"_blank",rel:"noreferrer",children:"Katarzyna Wegrzynowicz"}),"."]})};a(17);var p=function(){var e=Object(r.useState)("daily"),t=Object(n.a)(e,2),a=t[0],s=t[1];return Object(o.jsxs)("div",{className:"container","data-testid":"app",children:[Object(o.jsxs)("main",{children:[Object(o.jsx)(d,{timeframe:a,view:s}),Object(o.jsx)(b,{timeframe:a})]}),Object(o.jsx)(h,{})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),i(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),_()}],[[18,1,2]]]);
//# sourceMappingURL=main.2df416bf.chunk.js.map