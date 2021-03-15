(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),i=n.n(c),o=(n(88),n(19)),s=n.n(o),l=n(27),d=n(16),u=n(142),j=n(143),h=n(155),p=n(141),b=Object(p.a)((function(){return{mapContainer:{width:"100%",height:"100vh"}}})),g=n(2),m={center:[-33.448,-70.669],onClick:void 0};function O(e){var t=e.onClick;return Object(u.a)({click:function(e){var n=e.latlng,r=n.lat,a=n.lng;null===t||void 0===t||t({latitude:r,longitude:a})}}),null}function x(e){var t=e.center,n=e.onClick,r=b();return Object(g.jsxs)(j.a,{id:"map",center:t,zoom:4,className:r.mapContainer,children:[Object(g.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(g.jsx)(O,{onClick:n})]})}x.defaultProps=m;var f=x,v=n(153),w=n(148),y=n(150),C=n(144),k=n(146),I=n(149),N=n(72),S=n(66),W=n.n(S),P=n(65),z=n.n(P),A=n(147),R=Object(p.a)((function(e){return{dialogTitle:{padding:e.spacing(2)},dialogPaper:{minHeight:290},dialogContent:{display:"flex",alignItems:"center",justifyContent:"center"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},grid:{textAlign:"center"},errorIcon:{fontSize:80}}}));function J(e){var t=e.open,n=e.loading,r=e.weather,a=e.error,c=e.onClose,i=e.onRetry,o=R();return Object(g.jsxs)(v.a,{open:t,onClose:c,maxWidth:"xs",fullWidth:!0,classes:{paper:o.dialogPaper},children:[Object(g.jsxs)(w.a,{disableTypography:!0,className:o.dialogTitle,children:[Object(g.jsx)(N.a,{variant:"h6",children:"Current Weather"}),Object(g.jsx)(I.a,{className:o.closeButton,onClick:c,"aria-label":"close",children:Object(g.jsx)(W.a,{})})]}),Object(g.jsx)(y.a,{className:o.dialogContent,children:n?Object(g.jsx)(C.a,{size:80,role:"progressbar","aria-busy":"true"}):a?Object(g.jsxs)(k.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(g.jsx)(k.a,{item:!0,children:Object(g.jsx)(z.a,{color:"error",className:o.errorIcon})}),Object(g.jsx)(k.a,{item:!0,children:Object(g.jsx)(N.a,{variant:"h5",role:"alert",children:"Oops! Something went wrong"})}),Object(g.jsx)(k.a,{item:!0,children:Object(g.jsx)(A.a,{variant:"contained",color:"primary",onClick:i,children:"Retry"})})]}):Object(g.jsxs)(k.a,{container:!0,direction:"column",alignItems:"center",className:o.grid,children:[Object(g.jsx)(k.a,{item:!0,children:Object(g.jsxs)(N.a,{variant:"h4",children:[null===r||void 0===r?void 0:r.current.temp,"\xb0"]})}),Object(g.jsx)(k.a,{item:!0,children:Object(g.jsx)("img",{alt:"icon",src:"https://openweathermap.org/img/wn/".concat(null===r||void 0===r?void 0:r.current.weather[0].icon,"@2x.png")})}),Object(g.jsx)(k.a,{item:!0,children:Object(g.jsx)(N.a,{variant:"h5",children:null===r||void 0===r?void 0:r.current.weather[0].description})})]})})]})}J.defaultProps={loading:!1,weather:void 0,error:void 0,onClose:void 0,onRetry:void 0};var B=J,D=n(67),T=n.n(D),H=n(152),M=n(154),E=n(151),U=n.p+"static/media/welcome-image.3f91deb7.png",_=n(35),G=Object(p.a)((function(e){return{dialogPaper:Object(_.a)({},e.breakpoints.only("xs"),{width:"100%",height:"100%",margin:"0px",maxWidth:"100%",maxHeight:"none",borderRadius:"0px"}),dialogActions:{justifyContent:"center"},gridContainer:Object(_.a)({height:"100%",alignItems:"center",flexDirection:"column"},e.breakpoints.only("xs"),{flexDirection:"row"}),gridItem:{flexGrow:1}}}));function K(e){var t=e.open,n=e.onClose,r=G();return Object(g.jsxs)(v.a,{open:t,classes:{paper:r.dialogPaper},children:[Object(g.jsx)(y.a,{children:Object(g.jsxs)(k.a,{container:!0,className:r.gridContainer,children:[Object(g.jsx)(k.a,{item:!0,className:r.gridItem,children:Object(g.jsx)(M.a,{textAlign:"center",children:Object(g.jsx)("img",{src:U,alt:"welcome"})})}),Object(g.jsx)(k.a,{item:!0,className:r.gridItem,children:Object(g.jsx)(N.a,{variant:"h5",align:"center",children:Object(g.jsxs)(M.a,{fontWeight:"bold",marginBottom:"20px",marginTop:"20px",children:["Welcome to Weather App! ",Object(g.jsx)(T.a,{symbol:"\ud83d\udc4b",label:"wave-hand"})]})})}),Object(g.jsx)(k.a,{item:!0,className:r.gridItem,children:Object(g.jsxs)(N.a,{align:"center",children:["Hello there! My name is"," ",Object(g.jsx)(E.a,{href:"https://github.com/cristian-azocar",target:"_blank",rel:"noreferrer",underline:"always",children:"Cristian Az\xf3car"})," ","and I made this simple web application for fun. Just select a place on the map and see the current temperature. If you want to know more, visit the"," ",Object(g.jsx)(E.a,{href:"https://github.com/cristian-azocar/weather-app",target:"_blank",rel:"noreferrer",underline:"always",children:"repository."})]})})]})}),Object(g.jsx)(H.a,{className:r.dialogActions,children:Object(g.jsx)(A.a,{variant:"contained",color:"primary",onClick:n,children:"OK, got it!"})})]})}K.defaultProps={onClose:void 0};var q=K,F=n(68),L=n(69),Q=n(70),V=n.n(Q),X=new(function(){function e(){Object(F.a)(this,e),this.baseUrl="https://cris-weather-api.herokuapp.com"}return Object(L.a)(e,[{key:"fetchWeather",value:function(){var e=Object(l.a)(s.a.mark((function e(t,n){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseUrl,"/api/weather?latitude=").concat(t,"&longitude=").concat(n),e.next=3,V.a.get(r);case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()),Y=Object(r.createContext)({});function Z(e){var t=e.children,n=Object(r.useState)({fetchWeather:function(e,t){return c.apply(this,arguments)}}),a=Object(d.a)(n,1)[0];function c(){return(c=Object(l.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.fetchWeather(t,n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsx)(Y.Provider,{value:a,children:t})}var $=n(29);var ee={open:!1,loading:!1,weather:void 0,error:void 0},te={open:!function(e){var t=localStorage.getItem(e);if("string"===typeof t)return JSON.parse(t)}("welcomeDialogSeen")};function ne(){var e=function(e){var t=Object(r.useState)(e),n=Object(d.a)(t,2),a=n[0],c=n[1];return[a,Object(r.useCallback)((function(e){c((function(t){return Object($.a)(Object($.a)({},t),e)}))}),[])]}(ee),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(te),i=Object(d.a)(c,2),o=i[0],u=i[1],j=Object(r.useRef)(),h=Object(r.useContext)(Y).fetchWeather;function p(e){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({open:!0,loading:!0}),e.prev=1,n=t.latitude,r=t.longitude,e.next=5,h(n,r);case 5:c=e.sent,a({loading:!1,weather:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a({loading:!1,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"app","data-testid":"app",children:[Object(g.jsx)(q,{open:o.open,onClose:function(){var e,t;e="welcomeDialogSeen",t=!0,localStorage.setItem(e,JSON.stringify(t)),u({open:!1})}}),Object(g.jsx)(f,{onClick:function(e){j.current=e,p(e)}}),Object(g.jsx)(B,{open:n.open,loading:n.loading,weather:n.weather,error:n.error,onClose:function(){a({open:!1})},onRetry:function(){if(!j.current)throw new Error("No coordinates have been selected yet");p(j.current)}})]})}i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(Z,{children:Object(g.jsx)(ne,{})})}),document.getElementById("root"))},88:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.c8cf3724.chunk.js.map