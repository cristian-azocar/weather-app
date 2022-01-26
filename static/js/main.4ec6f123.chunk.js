(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),c=n.n(i),o=n(40),s=n(21),l=n(168),d=n(169),u=n(181),j=n(167),h=Object(j.a)((function(){return{mapContainer:{width:"100%",height:"100vh"}}})),p=n(4),b={center:[-33.448,-70.669],onClick:void 0};function g(e){var t=e.onClick;return Object(l.a)({click:function(e){var n=e.latlng,r=n.lat,a=n.lng;null===t||void 0===t||t({latitude:r,longitude:a})}}),null}function m(e){var t=e.center,n=e.onClick,r=h();return Object(p.jsxs)(d.a,{id:"map",center:t,zoom:4,className:r.mapContainer,children:[Object(p.jsx)(u.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(g,{onClick:n})]})}m.defaultProps=b;var O=m,x=n(179),f=n(174),v=n(176),w=n(170),y=n(172),C=n(173),k=n(175),I=n(89),N=n(83),S=n.n(N),W=n(82),P=n.n(W),z=Object(j.a)((function(e){return{dialogTitle:{padding:e.spacing(2)},dialogPaper:{minHeight:290},dialogContent:{display:"flex",alignItems:"center",justifyContent:"center"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},grid:{textAlign:"center"},errorIcon:{fontSize:80}}}));function E(e){var t=e.open,n=e.isLoading,r=e.weather,a=e.isError,i=e.onClose,c=e.onRetry,o=z();return Object(p.jsxs)(x.a,{open:t,onClose:i,maxWidth:"xs",fullWidth:!0,classes:{paper:o.dialogPaper},children:[Object(p.jsxs)(f.a,{disableTypography:!0,className:o.dialogTitle,children:[Object(p.jsx)(I.a,{variant:"h6",children:"Current Weather"}),Object(p.jsx)(k.a,{className:o.closeButton,onClick:i,"aria-label":"close",children:Object(p.jsx)(S.a,{})})]}),Object(p.jsx)(v.a,{className:o.dialogContent,children:n?Object(p.jsx)(w.a,{size:80,role:"progressbar","aria-busy":"true"}):a?Object(p.jsxs)(y.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(p.jsx)(y.a,{item:!0,children:Object(p.jsx)(P.a,{color:"error",className:o.errorIcon})}),Object(p.jsx)(y.a,{item:!0,children:Object(p.jsx)(I.a,{variant:"h5",role:"alert",children:"Oops! Something went wrong"})}),Object(p.jsx)(y.a,{item:!0,children:Object(p.jsx)(C.a,{variant:"contained",color:"primary",onClick:c,children:"Retry"})})]}):Object(p.jsxs)(y.a,{container:!0,direction:"column",alignItems:"center",className:o.grid,children:[Object(p.jsx)(y.a,{item:!0,children:Object(p.jsxs)(I.a,{variant:"h4",children:[null===r||void 0===r?void 0:r.current.temp,"\xb0"]})}),Object(p.jsx)(y.a,{item:!0,children:Object(p.jsx)("img",{alt:"icon",src:"https://openweathermap.org/img/wn/".concat(null===r||void 0===r?void 0:r.current.weather[0].icon,"@2x.png"),width:100,height:100})}),Object(p.jsx)(y.a,{item:!0,children:Object(p.jsx)(I.a,{variant:"h5",children:null===r||void 0===r?void 0:r.current.weather[0].description})})]})})]})}E.defaultProps={weather:void 0,isLoading:!1,isError:void 0,onClose:void 0,onRetry:void 0};var R=E,A=n(84),B=n.n(A),J=n(178),T=n(180),L=n(177),M=n(43),D=Object(j.a)((function(e){return{dialogPaper:Object(M.a)({},e.breakpoints.only("xs"),{width:"100%",height:"100%",margin:"0px",maxWidth:"100%",maxHeight:"none",borderRadius:"0px"}),dialogActions:{justifyContent:"center"},gridContainer:Object(M.a)({height:"100%",alignItems:"center",flexDirection:"column"},e.breakpoints.only("xs"),{flexDirection:"row"}),gridItem:{flexGrow:1}}}));function H(e){var t=e.open,n=e.onClose,r=D();return Object(p.jsxs)(x.a,{open:t,classes:{paper:r.dialogPaper},children:[Object(p.jsx)(v.a,{children:Object(p.jsxs)(y.a,{container:!0,className:r.gridContainer,children:[Object(p.jsx)(y.a,{item:!0,className:r.gridItem,children:Object(p.jsx)(T.a,{textAlign:"center",children:Object(p.jsx)("img",{src:"/weather-app/static/images/welcome-image.png",alt:"welcome"})})}),Object(p.jsx)(y.a,{item:!0,className:r.gridItem,children:Object(p.jsx)(I.a,{variant:"h5",align:"center",children:Object(p.jsxs)(T.a,{fontWeight:"bold",marginBottom:"20px",marginTop:"20px",children:["Welcome to Weather App! ",Object(p.jsx)(B.a,{symbol:"\ud83d\udc4b",label:"wave-hand"})]})})}),Object(p.jsx)(y.a,{item:!0,className:r.gridItem,children:Object(p.jsxs)(I.a,{align:"center",children:["Hello there! My name is"," ",Object(p.jsx)(L.a,{href:"https://github.com/cristian-azocar",target:"_blank",rel:"noreferrer",underline:"always",children:"Cristian Az\xf3car"})," ","and I made this simple web application for fun. Just select a place on the map and see the current temperature. If you want to know more, visit the"," ",Object(p.jsx)(L.a,{href:"https://github.com/cristian-azocar/weather-app",target:"_blank",rel:"noreferrer",underline:"always",children:"repository."})]})})]})}),Object(p.jsx)(J.a,{className:r.dialogActions,children:Object(p.jsx)(C.a,{variant:"contained",color:"primary",onClick:n,children:"OK, got it!"})})]})}H.defaultProps={onClose:void 0};var Q=H,_=n(85);function q(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(),c=Object(s.a)(i,2),o=c[0],l=c[1],d=function(e,t){var n=Object(r.useState)((function(){try{var n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return t}})),a=Object(s.a)(n,2),i=a[0],c=a[1],o=Object(r.useRef)(i);return o.current=i,[i,Object(r.useCallback)((function(t){var n="function"===typeof t?t(o.current):t;localStorage.setItem(e,JSON.stringify(n)),c(n)}),[e])]}("showWelcomeDialog",!0),u=Object(s.a)(d,2),j=u[0],h=u[1],b=Object(_.default)(o),g=b.data,m=b.isLoading,x=b.isError,f=b.refetch;return Object(p.jsxs)("div",{id:"app","data-testid":"app",children:[Object(p.jsx)(Q,{open:j,onClose:function(){h(!1)}}),Object(p.jsx)(O,{onClick:function(e){l(e),a(!0)}}),Object(p.jsx)(R,{open:n,weather:g,isLoading:m,isError:x,onClose:function(){a(!1)},onRetry:function(){if(!o)throw new Error("No coordinates have been selected yet");f()}})]})}n(140);var F=new o.QueryClient({defaultOptions:{queries:{refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1,staleTime:864e5}}});c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(o.QueryClientProvider,{client:F,children:Object(p.jsx)(q,{})})}),document.getElementById("root"))},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(58),a=n.n(r),i=n(86),c=n(87),o=n.n(c),s=n(40),l="https://cris-weather-api.herokuapp.com";function d(){return(d=Object(i.a)(a.a.mark((function e(t){var n,r,i,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}throw new Error("Coordinates object is undefined");case 2:return n=t.latitude,r=t.longitude,i="".concat(l,"/api/weather?latitude=").concat(n,"&longitude=").concat(r),e.next=6,o.a.get(i);case 6:return c=e.sent,s=c.data,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){var t=["weather",e];return Object(s.useQuery)(t,(function(){return function(e){return d.apply(this,arguments)}(e)}),{enabled:Boolean(e)})}},79:function(e,t){},85:function(e,t,n){"use strict";var r=n(70);n.d(t,"default",(function(){return r.a}));n(79)}},[[141,1,2]]]);
//# sourceMappingURL=main.4ec6f123.chunk.js.map