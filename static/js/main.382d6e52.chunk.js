(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var r=c(26),n=(c(36),c(37),c(8)),a=c(3),s=c(10),l=c.n(s),i=c(1),j=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(n.c,{to:"/",className:j,children:"Home"}),Object(i.jsx)(n.c,{to:"/people",className:j,children:"People"})]})})})},d=(c(39),function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})}),u=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},b=c(4),h=c(7),O=c(5),x=c(0),m=(c(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),p=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),f=function(e){return e.All="",e.Male="m",e.Female="f",e}({}),v=function(e){return e.Sex="sex",e.Query="query",e.Centuries="centuries",e.Sort="sort",e.Order="order",e}({}),N=function(e){var t=e.person,c=t.name,r=t.sex,a=t.slug;return Object(i.jsx)(n.b,{to:"../".concat(a),className:l()({"has-text-danger":r===f.Female}),children:c})};function g(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var y="Something went wrong",w="There are no people on the server",S="There are no people matching the current search criteria",k=c(15),C=function(e){return e.map((function(t){return Object(k.a)(Object(k.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))};var L=function(e){var t=e.person,c=e.selectedSlug,r=t.sex,n=t.born,a=t.died,s=t.fatherName,j=t.motherName,o=t.father,d=t.mother,u=t.slug;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":u===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(N,{person:t})}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:d?Object(i.jsx)(N,{person:d}):j||"-"}),Object(i.jsx)("td",{children:o?Object(i.jsx)(N,{person:o}):s||"-"})]})},A=c(27);function F(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(O.a)(e,2),r=t[0],n=t[1];null===n?c.delete(r):Array.isArray(n)?(c.delete(r),n.forEach((function(e){c.append(r,e)}))):c.set(r,n)})),c.toString()}var P=["children","params"],E=function(e){var t=e.children,c=e.params,r=Object(A.a)(e,P),a=Object(n.d)(),s=Object(O.a)(a,1)[0];return Object(i.jsx)(n.b,Object(k.a)(Object(k.a)({to:{search:F(s,c)}},r),{},{children:t}))},B=c(6),_=function(e){var t=e.people,c=e.sort,r=e.order,n=Object(a.r)().slug,s=void 0===n?"":n;function j(e){var t,n,a=e===c&&!r;return e!==c?(n={},Object(B.a)(n,v.Sort,e),Object(B.a)(n,v.Order,null),n):a?Object(B.a)({},v.Order,"desc"):(t={},Object(B.a)(t,v.Sort,null),Object(B.a)(t,v.Order,null),t)}return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object.entries(p).map((function(e){var t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[n,Object(i.jsx)(E,{params:j(a),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":c!==a,"fa-sort-up":c===a&&!r,"fa-sort-down":c===a&&r})})})})]})},n)})),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(L,{selectedSlug:s,person:e},e.slug)}))})]})},M=c(9),Q=function(e){var t,c=e.query,r=e.filterBySex,a=e.centuries,s=Object(n.d)(),j=Object(O.a)(s,2),o=j[0],d=j[1];function u(e){return a.includes(e)?a.filter((function(t){return t!==e})):[].concat(Object(M.a)(a),[e])}return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.entries(f).map((function(e){var t=Object(O.a)(e,2),c=t[0],n=t[1];return Object(i.jsx)(E,{params:Object(B.a)({},v.Sex,n||null),className:l()({"is-active":n===r}),children:c},c)}))}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:c,onChange:function(e){d(F(o,Object(B.a)({},v.Query,e.target.value||null)))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:Array.from({length:5},(function(e,t){var c=String(t+16);return Object(i.jsx)(E,{"data-cy":"century",className:l()("button","mr-1",{"is-info":a.includes(c)}),params:Object(B.a)({},v.Centuries,u(c)),children:c},c)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(E,{"data-cy":"centuryALL",className:l()("button","is-success",{"is-outlined":a.length}),params:Object(B.a)({},v.Centuries,[]),children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(E,{className:"button is-link is-outlined is-fullwidth",params:(t={},Object(B.a)(t,v.Sex,null),Object(B.a)(t,v.Query,null),Object(B.a)(t,v.Centuries,[]),t),children:"Reset all filters"})})]})},T=function(){var e=Object(x.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(x.useState)(!1),s=Object(O.a)(a,2),j=s[0],o=s[1],d=Object(x.useState)(""),u=Object(O.a)(d,2),f=u[0],N=u[1],k=Object(n.d)(),L=Object(O.a)(k,1)[0],A=L.get(v.Query)||"",F=L.get(v.Sex)||"",P=L.getAll(v.Centuries)||[],E=L.get(v.Sort)||"",B=L.get(v.Order)||"";Object(x.useEffect)((function(){o(!0);var e=function(){var e=Object(h.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:(t=e.sent).length||N(w),r(C(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(y);case 11:return e.prev=11,o(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var M=function(e,t,c,r,n,a){var s=a.filter((function(r){var n=!0;if(e&&(n=r.sex===e),t){var a,s,l=t.toLowerCase();n=n&&(r.name.toLowerCase().includes(l)||(null===(a=r.motherName)||void 0===a?void 0:a.toLowerCase().includes(l))||(null===(s=r.fatherName)||void 0===s?void 0:s.toLowerCase().includes(l))||!1)}return c.length&&(n=n&&c.includes("".concat(Math.ceil(r.born/100)))),n}));return r&&s.sort((function(e,t){switch(r){case p.Name:return e.name.localeCompare(t.name);case p.Sex:return e.sex.localeCompare(t.sex);case p.Born:return e.born-t.born;case p.Died:return e.died-t.died;default:return 0}})),n&&s.reverse(),s}(F,A,P,E,B,c);Object(x.useEffect)((function(){M.length?N(""):N(S)}),[M.length]);var T=!f&&!!c.length;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[(T||f===S)&&Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(i.jsx)(Q,{query:A,filterBySex:F,centuries:P})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[j&&Object(i.jsx)(m,{}),f&&Object(i.jsx)("p",{"data-cy":f===y?"peopleLoadingError":f===w&&"noPeopleMessage",className:l()({"has-text-danger":f===y}),children:f}),T&&Object(i.jsx)(_,{people:M,sort:E,order:B})]})})]})})]})},q=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},R=function(){return Object(i.jsx)(n.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(d,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(u,{})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsx)(a.c,{path:"people",children:Object(i.jsx)(a.c,{path:":slug?",element:Object(i.jsx)(T,{})})}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(q,{})})]})})})};Object(r.createRoot)(document.getElementById("root")).render(Object(i.jsx)(R,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.382d6e52.chunk.js.map