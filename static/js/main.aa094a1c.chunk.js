(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},139:function(e,t,n){},213:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(47),o=n.n(c),r=(n(99),n(100),n(50)),l=n(9),s=n(8),d=(n(101),n(102),n(103),n(13)),u=n(35),j=n.n(u),p=n(65),b=n(51),h=n(91),x=n(12),m=(n(132),n(216),n(217),{apiKey:"AIzaSyAxmi8Yma535ZPPnB3KTGsQaLwHvrw7QKw",authDomain:"my-app-a0261.firebaseapp.com",projectId:"my-app-a0261",storageBucket:"my-app-a0261.appspot.com",databaseURL:"https://my-app-a0261-default-rtdb.firebaseio.com",messagingSenderId:"395899036357",appId:"1:395899036357:web:81adaaa3fdd7945fbec6ac",measurementId:"G-TWWZH91Z0F"});x.a.initializeApp(m);x.a.performance();var g=x.a.analytics(),f=n(3),O=function(e){var t=e.visible,n=(e.curStatus,e.logined),a=e.logouted,c=Object(i.useState)(!1),o=Object(s.a)(c,2),r=o[0],l=o[1],u=function(){if(null!=x.a.auth().currentUser){if(r)return;n(),l(!0)}};return Object(f.jsx)("div",{className:"loginModel ".concat(t?"visible":"hide"),style:{margin:"20px 8px 8px 40px",fontStyle:"normal",fontVariant:"normal",textRendering:"auto",textDecoration:"inherit",WebkitFontSmoothing:"antialiased"},children:Object(f.jsx)(b.a,Object(d.a)(Object(d.a)({},m),{},{firebase:x.a,children:Object(f.jsx)(h.a,{initial:{isLoading:!1,error:!1},children:function(e){e.state;var t=e.setState;return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(b.b,{children:Object(f.jsxs)("div",{onLoad:u(),children:[Object(f.jsx)("h2",{style:{color:"white"},children:" Edit Mode "}),Object(f.jsx)("button",{className:"logout-btn",onClick:Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({isLoading:!0}),e.next=3,x.a.app().auth().signOut();case 3:g.logEvent("logout"),g.setUserProperties({UserType:"User"}),l(!1),a(),t({isLoading:!1});case 8:case"end":return e.stop()}}),e)}))),children:"Logout"})]})}),Object(f.jsx)(b.c,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{style:{color:"white"},children:"View Mode"}),Object(f.jsx)("button",{className:"login-btn",onClick:Object(p.a)(j.a.mark((function e(){var i,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({isLoading:!0,error:!1}),i=new x.a.auth.GoogleAuthProvider,e.next=5,x.a.auth().signInWithPopup(i);case 5:a=e.sent,c=a.credential.signInMethod,g.logEvent("login",{method:c}),g.setUserProperties({UserType:"Admin"}),l(!0),n(),t({isLoading:!1,error:!1}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t({isLoading:!1,error:!1});case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),children:"Login"})]})})]})}})}))})},v=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var a=n[i];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null},y=n(49),w=n(22),k=n.n(w),S=k.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",k.a.stopTimer),e.addEventListener("mouseleave",k.a.resumeTimer)}}),C=function(){var e=Object(i.useState)("close-nav"),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),o=Object(s.a)(c,2),l=o[0],d=o[1],u=Object(i.useState)(!1),j=Object(s.a)(u,2),p=j[0],b=j[1];function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?S.fire({icon:"success",title:"Admin"}):S.fire({icon:"info",title:"User"})}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{id:"mySidenav",className:"sidenav ".concat(n),children:[Object(f.jsx)("div",{className:"closebtn",onClick:function(){a("close-nav")},children:"\xd7"}),Object(f.jsx)(r.b,{to:"/home",children:"Home"}),Object(f.jsxs)("h3",{className:"verNumber",style:{fontSize:"15px",color:"white",padding:"0px 8px 8px 40px",display:"block",textDecoration:"none"},children:[" Version ","0.14"," "]}),Object(f.jsx)("div",{children:Object(f.jsx)(O,{visible:l,curStatus:p,logined:function(){0==p&&(b(!0),h(!0))},logouted:function(){1==p&&(b(!1),h(!1))}})})]}),Object(f.jsxs)("div",{style:{fontSize:"20px",cursor:"pointer",background:"rgb(39, 155, 190)",color:"white",position:"fixed",zIndex:"1000",width:"100%",padding:"5px"},onClick:function(){a("open-nav"),"exists"===v("MASTER_LOGIN")?d(!0):d(!1)},children:["\xa0 \u2630 \xa0 Lashio Map Live \xa0\xa0\xa0",Object(f.jsx)(y.Detector,{render:function(e){var t=e.online;return Object(f.jsx)("b",{className:"".concat(t?"normal":"warning"),children:t?"Online":"Offline"})}}),Object(f.jsx)("b",{className:"".concat(p?"adminBar":"userBar"),children:"Admin"})]})]})},N=n(221),z=n(222),A=n(218);function L(e){var t=e.center,n=e.zoom;return Object(A.a)().setView(t,n),null}var M=n(72),U=n(71),T=n(6),E=n.n(T),I=n(219),P=n(220),F=n.p+"static/media/person.f487c13b.svg",R=n.p+"static/media/bearer.56672884.svg",_=n.p+"static/media/redcross.1cef6356.svg",K=new E.a.Icon({iconUrl:F,iconRetinaUrl:F,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new E.a.Point(25,30),className:"leaflet-div-personicon"}),B=new E.a.Icon({iconUrl:R,iconRetinaUrl:R,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new E.a.Point(25,40),className:"leaflet-div-bearer"}),D=new E.a.Icon({iconUrl:_,iconRetinaUrl:_,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new E.a.Point(25,40),className:"leaflet-div-rescue"}),H={"1-10":[15,15],"10-20":[20,20],"20-50":[25,25],"50-100":[30,30],"100-200":[35,35],"200-above":[40,40]},G=function(e){return H[e]},V=(n(139),function(e){var t=e.position,n=e.message;return Object(f.jsx)(I.a,{position:t,icon:K,children:Object(f.jsx)(P.a,{on:!0,children:n})})}),W=function(e){var t=e.id,n=e.position,i=e.message,a=e.unitSize,c=e.onMarkerClick,o=e.fbKey,r=new E.a.divIcon({iconUrl:null,iconRetinaUrl:null,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:Object(M.a)(E.a.Point,Object(U.a)(G(a))),className:"leaflet-div-police blue-circle"});return Object(f.jsx)(I.a,{position:n,icon:r,eventHandlers:{contextmenu:function(e){c(e,o,t)}},children:Object(f.jsx)(P.a,{children:"".concat(i,"\n \u1010\u1015\u103a\u1016\u103d\u1032\u1037 \u1021\u1004\u103a\u1021\u102c\u1038 ").concat(a," \u1001\u1014\u103a\u1037")})})},Z=function(e){var t=e.id,n=e.position,i=e.message,a=e.onMarkerClick,c=e.fbKey;return Object(f.jsx)(I.a,{position:n,icon:B,eventHandlers:{contextmenu:function(e){a(e,c,t)}},children:i&&Object(f.jsx)(P.a,{children:i})})},J=function(e){var t=e.id,n=e.position,i=e.message,a=e.onMarkerClick,c=e.fbKey;return Object(f.jsx)(I.a,{position:n,icon:D,eventHandlers:{contextmenu:function(e){a(e,c,t)}},children:i&&Object(f.jsx)(P.a,{children:i})})},Q=function(e){var t=e.id,n=e.position,i=e.message,a=e.unitSize,c=e.onMarkerClick,o=e.fbKey,r=new E.a.divIcon({iconUrl:null,iconRetinaUrl:null,iconAnchor:null,popupAnchor:[-3,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:Object(M.a)(E.a.Point,Object(U.a)(G(a))),className:"leaflet-div-militry red-circle"});return Object(f.jsx)(I.a,{position:n,icon:r,eventHandlers:{contextmenu:function(e){c&&c(e,o,t)}},children:Object(f.jsx)(P.a,{children:"".concat(i,"\n \u1010\u1015\u103a\u1016\u103d\u1032\u1037 \u1021\u1004\u103a\u1021\u102c\u1038 ").concat(a," \u1001\u1014\u103a\u1037")})})},Y=function(e){var t=e.id,n=e.type,i=e.position,a=e.message,c=e.unitSize,o=e.onMarkerClick,r=e.fbKey;return Object(f.jsxs)(f.Fragment,{children:["pol"===n&&Object(f.jsx)(W,{position:[i.lat,i.lng],message:a,unitSize:c,onMarkerClick:o,id:t,fbKey:r}),"bearer"===n&&Object(f.jsx)(Z,{position:[i.lat,i.lng],message:a,onMarkerClick:o,id:t,fbKey:r}),"milt"===n&&Object(f.jsx)(Q,{position:[i.lat,i.lng],message:a,unitSize:c,onMarkerClick:o,id:t,fbKey:r}),"resc"===n&&Object(f.jsx)(J,{position:[i.lat,i.lng],message:a,onMarkerClick:o,id:t,fbKey:r})]})},q=(n(140),n(68)),X=function(){var e=Object(A.a)();return Object(i.useEffect)((function(){var t=E.a.control({position:"bottomleft"});t.onAdd=function(){var e=E.a.DomUtil.create("div","info legend");e.style.background="rgb(56, 56, 56,0.7)",e.style.width="160px",e.style.padding="20px 10px 10px 10px",e.style.display="flex",e.style.flexDirection="column",e.style.borderRadius="20px",e.style.color="white",e.style.fontSize="15px",e.style.marginBottom="20px";var t=[];return t.push("<div style='display:flex;'><div class='red-circle' style='width:20px;height:20px;margin-left: 10px;\n          margin-top: 5px;'></div> <p style=\"margin:0;line-height: 10px;\n          \">\u1005\u1005\u103a\u1010\u1015\u103a </p></div>"),t.push("<div style='display:flex;'><div class='blue-circle' style='width:20px;height:20px;margin-left: 10px;\n          margin-top: 5px;'></div> <p style=\"margin:0;line-height: 10px;\n          \">\u101b\u1032/\u101c\u102f\u1036\u1011\u102d\u1014\u103a\u1038 </p></div>"),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(_,"' style='width:25px;height:25px;' alt='RedCross'/><p style=\"margin:0; line-height: 16px;\n        margin-left: 6px;\n            \">\u1000\u101a\u103a\u1006\u101a\u103a\u101b\u1031\u1038/\u1006\u1031\u1038\u101b\u102f\u1036\u104a \u1006\u1031\u1038\u1001\u1014\u103a\u1038</p></div>")),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(R,"' style='width:25px;height:25px;' alt='Blocked'/><p style=\"margin:0;  line-height: 16px;\n        margin-left: 6px;\n            \">\u1021\u1010\u102c\u1038\u1021\u1006\u102e\u1038\u1019\u103b\u102c\u1038 </p></div>")),t.push("<div style='display:flex;'><img class='legend-marker' src='".concat(F,"' style='width:25px;height:25px;' alt='Person' /><p style=\"margin:0;  line-height: 16px;\n        margin-left: 6px;\n            \">\u101e\u1004\u103a \u101c\u1000\u103a\u101b\u103e\u102d\u1014\u1031\u101b\u102c</p></div>")),e.innerHTML=t.join("<br>"),e},t.addTo(e)}),[e]),null},$=(n(213),function(e){var t=e.visible,n=e.onOkClick,a=e.onCancelClick,c=Object(i.useState)("pol"),o=Object(s.a)(c,2),r=o[0],l=o[1],d=Object(i.useState)("1-10"),u=Object(s.a)(d,2),j=u[0],p=u[1],b=Object(i.useState)(""),h=Object(s.a)(b,2),x=h[0],m=h[1];return Object(f.jsx)("div",{id:"myModal",className:"modal ".concat(t?"visible":"hide"),children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsx)("span",{className:"close",onClick:function(){return a()},children:"\xd7"}),Object(f.jsx)("br",{className:"clear"}),Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("p",{children:"\u1010\u103d\u1031\u1037\u101b\u103e\u102d\u101e\u1031\u102c \xa0\u1021\u101b\u102c"}),Object(f.jsxs)("select",{onChange:function(e){l(e.target.value)},defaultValue:"pol",children:[Object(f.jsx)("option",{value:"pol",children:"\u101b\u1032 / \u101c\u102f\u1036\u1011\u102d\u1014\u103a\u1038"}),Object(f.jsx)("option",{value:"resc",children:"\u1000\u101a\u103a\u1006\u101a\u103a\u101b\u1031\u1038 / \u1006\u1031\u1038\u101b\u102f\u1036\u1006\u1031\u1038\u1001\u1014\u103a\u1038"}),Object(f.jsx)("option",{value:"milt",children:"\u1005\u1005\u103a\u1010\u1015\u103a"}),Object(f.jsx)("option",{value:"bearer",children:"\u1021\u1010\u102c\u1038\u1021\u1006\u102e\u1038"})]})]}),("pol"===r||"milt"===r)&&Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("p",{children:"\u1010\u1015\u103a\u1016\u103d\u1032\u1037\u101d\u1004\u103a \u1021\u1004\u103a\u1021\u102c\u1038"}),Object(f.jsxs)("select",{onChange:function(e){p(e.target.value)},defaultValue:"1-10",children:[Object(f.jsx)("option",{value:"1-10",children:"\u1041 - \u1041\u1040 \u1001\u1014\u103a\u1037 "}),Object(f.jsx)("option",{value:"10-20",children:"\u1041\u1040 - \u1042\u1040\u1001\u1014\u103a\u1037 "}),Object(f.jsx)("option",{value:"20-50",children:" \u1042\u1040 - \u1045\u1040 \u1001\u1014\u103a\u1037"}),Object(f.jsx)("option",{value:"50-100",children:"\u1045\u1040 - \u1041\u1040\u1040\u1001\u1014\u103a\u1037"}),Object(f.jsx)("option",{value:"100-200",children:"\u1041\u1040\u1040 - \u1042\u1040\u1040\u1001\u1014\u103a\u1037"}),Object(f.jsx)("option",{value:"200-above",children:"\u1042\u1040\u1040 \u1014\u103e\u1004\u103a\u1037\u1021\u1011\u1000\u103a"})]})]}),Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsx)("p",{children:"\u1015\u103c\u1031\u102c\u101c\u102d\u102f\u101e\u1031\u102c \u1021\u101b\u102c"}),Object(f.jsx)("textarea",{cols:"20",rows:"10",onChange:function(e){return m(e.target.value)}})]}),Object(f.jsx)("div",{className:"flex",children:Object(f.jsx)("button",{onClick:function(){n({objType:r,message:x,unitSize:j})},children:"Report (\u1010\u1004\u103a\u1019\u100a\u103a)"})}),Object(f.jsx)("div",{className:"flex",children:Object(f.jsx)("button",{onClick:function(){return a()},children:"Cancel (\u1011\u103d\u1000\u103a\u1019\u100a\u103a)"})})]})})});function ee(e){var t=e.onMapClick;return Object(A.b)({click:function(e){},contextmenu:function(e){t(e.latlng)}}),Object(f.jsx)(f.Fragment,{})}var te=n(73),ne=n(70),ie=k.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",k.a.stopTimer),e.addEventListener("mouseleave",k.a.resumeTimer)}});var ae=function(){var e=Object(i.useState)({lat:22.94083,lng:97.74459}),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),o=Object(s.a)(c,2),r=o[0],l=o[1],u=Object(i.useState)(!1),j=Object(s.a)(u,2),p=j[0],b=j[1],h=Object(i.useState)("NULL"),O=Object(s.a)(h,2),w=O[0],k=O[1],S=Object(i.useState)({lat:22.94083,lng:97.74459}),C=Object(s.a)(S,2),A=C[0],M=C[1],U=Object(i.useState)({lat:22.94083,lng:97.74459}),T=Object(s.a)(U,2),E=T[0],I=T[1];return Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){a({lat:e.coords.latitude,lng:e.coords.longitude}),I({lat:e.coords.latitude,lng:e.coords.longitude})}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y.Detector,{render:function(e){var t=e.online;return p!==t&&(b(t),function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?ie.fire({icon:"success",title:"Connected"}):ie.fire({icon:"error",title:"Disconnected "})}(t)),null}}),Object(f.jsx)($,{visible:r,onOkClick:function(e){var t=Object(te.a)();k(t),console.log(w);var n="locations/".concat(w);x.a.database().ref(n).set({created_at:Date.now(),id:Object(te.a)(),unitSize:e.unitSize,message:e.message,position:{lat:A.lat,lng:A.lng},type:e.objType}),g.logEvent("add_marker",{Fid:w.toString()}),l(!1)},onCancelClick:function(){l(!1)}}),Object(f.jsxs)(q.b,Object(d.a)(Object(d.a)({firebase:x.a},m),{},{children:[Object(f.jsx)("div",{className:"location-selector-wrapper",children:Object(f.jsx)("div",{className:"location-selector",children:Object(f.jsxs)("select",{onChange:function(e){a({lat:parseFloat(e.target.value.split("|")[0]),lng:parseFloat(e.target.value.split("|")[1])}),defaultValue="22.94083|97.74459"},children:[Object(f.jsx)("option",{value:"22.94083|97.74459",children:"\u101c\u102c\u1038\u101b\u103e\u102d\u102f\u1038 (Lashio)"}),Object(f.jsx)("option",{value:"16.8409|96.1735",children:" \u101b\u1014\u103a\u1000\u102f\u1014\u103a (Yangon)"}),Object(f.jsx)("option",{value:"21.9588|96.0891",children:" \u1019\u1014\u1039\u1010\u101c\u1031\u1038 (Mandalay)"}),Object(f.jsx)("option",{value:"19.7633|96.0785",children:"\u1014\u1031\u1015\u103c\u100a\u103a\u1010\u1031\u102c\u103a (Naypyi Daw)"})]})})}),Object(f.jsxs)(N.a,{style:{height:"100vh"},center:[n.lat,n.lng],zoom:13,zoomControl:!0,scrollWheelZoom:!0,children:[Object(f.jsx)(ee,{onMapClick:function(e){if("exists"===v("MASTER_LOGIN"))M({lat:e.lat,lng:e.lng}),l(!0);else{var t=prompt("Please enter master password:","");t&&"5cf04b2aa01e7b7215daada699a6917f64a9f431c62b4b930878e4d580c7c508"===Object(ne.sha256)(btoa(t))&&(M({lat:e.lat,lng:e.lng}),g.logEvent("master_login"),l(!0),function(e,t,n){var i="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),i="; expires="+a.toUTCString()}document.cookie=e+"="+(t||"")+i+"; path=/"}("MASTER_LOGIN","exists",1))}}}),Object(f.jsx)(L,{center:[n.lat,n.lng],zoom:14}),Object(f.jsx)(z.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://www.hotosm.org/" target="_blank" rel="noreferrer">Humanitarian OpenStreetMap</a>',url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),Object(f.jsx)(V,{position:[E.lat,E.lng],message:"\u101e\u1004\u103a\u101b\u1032\u1037 \u101c\u1000\u103a\u101b\u103e\u102d\u1010\u100a\u103a\u1014\u1031\u101b\u102c"}),Object(f.jsx)(q.a,{path:"locations",children:function(e){return Object(f.jsx)(f.Fragment,{children:!e.isLoading&&e.value&&Object.keys(e.value).map((function(t){return Object(f.jsx)(Y,Object(d.a)(Object(d.a)({},e.value[t]),{},{fbKey:t,onMarkerClick:function(e,t,n){if("exists"===v("MASTER_LOGIN")){window.confirm("Want to delete?")&&(x.a.database().ref("locations/"+t).remove(),g.logEvent("delete_marker",{Fid:t.toString()}))}else{var i=prompt("Please enter master password:");if(i&&"5cf04b2aa01e7b7215daada699a6917f64a9f431c62b4b930878e4d580c7c508"===Object(ne.sha256)(btoa(i)))g.logEvent("master_login"),window.confirm("Want to delete?")&&(x.a.database().ref("locations/"+t).remove(),g.logEvent("delete_marker",{Fid:t.toString()}))}}}),t)}))})}}),Object(f.jsx)(X,{})]})]}))]})};var ce=function(){return Object(f.jsxs)(r.a,{basename:window.location.pathname||"",children:[Object(f.jsx)(C,{}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",children:Object(f.jsx)(ae,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/home",children:Object(f.jsx)(ae,{})}),Object(f.jsx)(l.a,{path:"*",children:" 404 "})]})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,223)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(ce,{})}),document.getElementById("root")),oe((function(e){var t=e.name,n=e.delta,i=e.value,a=e.id;g.logEvent(t,{value:n,metric_id:a,metric_value:i,metric_delta:n,transport:"beacon"})}))},99:function(e,t,n){}},[[215,1,2]]]);
//# sourceMappingURL=main.aa094a1c.chunk.js.map