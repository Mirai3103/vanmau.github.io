(this["webpackJsonpsample-documents-react-web"]=this["webpackJsonpsample-documents-react-web"]||[]).push([[5],{514:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var n=c(13),a=c(527),r=c(419),o=(c(515),c(0)),s=c(80),i=c(53),j=c(1);function u(e){var t=e.searchParams,c=e.pageCount,u=e.setSearchParam,d=Object(n.a)(Object(o.useContext)(s.a).data,2)[1];return Object(j.jsx)(r.a,{spacing:2,children:Object(j.jsx)(a.a,{color:"primary",page:Number(t.get("page")),size:"medium",count:Number(c),onChange:function(e,t){u({page:"".concat(t)}),d(Object(i.e)([]))}})})}},515:function(e,t,c){},524:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return v}));var n=c(13),a=c(509),r=c(419),o=c(505),s=c(484),i=c(510),j=c(171),u=c(511),d=c(216),b=c.n(d),l=c(0),h=c(42),O=c(215),p=c(67),m=c(214),x=c(514),f=c(74),g=c(1);function v(e){var t=e.id,c=e.title,d=Object(p.a)().themeStretch,v=Object(l.useState)(!1),w=Object(n.a)(v,2),S=w[0],y=w[1],C=Object(l.useState)(1),_=Object(n.a)(C,2),N=_[0],P=_[1],k=Object(h.d)({page:"1"}),J=Object(n.a)(k,2),z=J[0],B=J[1],E=Object(l.useState)([]),I=Object(n.a)(E,2),M=I[0],W=I[1];Object(l.useEffect)((function(){return fetch("".concat(f.a,"/api/").concat(t,"?page=").concat(z.get("page"))).then((function(e){return e.json()})).then((function(e){W(e);var t=Math.ceil(e[0].full_count/10);P(t)})).catch((function(e){console.log(e),P(1)})),function(){W([])}}),[z,t]);return Object(g.jsxs)(m.a,{title:"".concat(c," | v\u0103n m\u1eabu"),children:[Object(g.jsx)("h1",{style:{marginBottom:"1rem"},children:c}),Object(g.jsxs)(a.a,{maxWidth:!d&&"xl",children:[void 0===M[0]?Object(g.jsx)(r.a,{sx:{color:"grey.500"},spacing:2,direction:"row",className:"loading-spinner",children:Object(g.jsx)(o.a,{color:"secondary"})}):M.map((function(e){return Object(g.jsxs)(s.a,{expanded:S===e.document_id,onChange:(t=e.document_id,function(e,c){y(!!c&&t)}),children:[Object(g.jsx)(i.a,{expandIcon:Object(g.jsx)(b.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(g.jsx)(j.a,{children:e.title})}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(j.a,{children:e.content}),Object(g.jsx)("br",{}),Object(g.jsx)(r.a,{className:"copy-button",direction:"row",spacing:2,children:Object(g.jsx)(O.a,{id:e.document_id,content:e.content})})]})]},e.document_id);var t})),Object(g.jsx)(x.a,{searchParams:z,pageCount:N,setSearchParam:B})]})]})}}}]);
//# sourceMappingURL=5.4e858b39.chunk.js.map