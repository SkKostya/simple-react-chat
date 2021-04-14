(this["webpackJsonpsimple-react-chat"]=this["webpackJsonpsimple-react-chat"]||[]).push([[0],{28:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t),s.d(t,"Context",(function(){return y}));var a=s(3),n=s.n(a),r=s(21),c=s.n(r),i=(s(28),s(12)),u=s.n(i),o=s(15),l=s(11),d=s(10),m=s(22),j=s(16),b=s(4),h=function(e){var t=e.isLoading,s=e.onLogin;return Object(b.jsx)("div",{className:"log-in",children:Object(b.jsx)("button",{disabled:t,onClick:s,className:"log-in__button",children:t?"\u0412\u0425\u041e\u0414...":"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google"})})},f=s(17),p=s(23),O=s.n(p),g=function(e){var t=e.text,s=e.userName,a=e.date;return Object(b.jsxs)("div",{className:"message",children:[Object(b.jsx)("p",{className:"message__text",children:t}),Object(b.jsxs)("div",{className:"message__user-container",children:[Object(b.jsx)("span",{className:"message__user-name",children:s}),Object(b.jsx)("span",{className:"message__user-name message__user-name--small",children:O()(a).toNow()})]})]})},x=function(e){var t=e.messageValue,s=e.setMessageValue,a=e.onSendMessage;return Object(b.jsxs)("form",{className:"form",children:[Object(b.jsx)("input",{value:t,onChange:function(e){return s(e.target.value)},className:"form__control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(b.jsx)("button",{onClick:a,type:"button",className:"form__button",id:"sent-button",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},v=function(e){var t=e.messages,s=e.userName,r=e.onAddMessage,c=n.a.useState(""),i=Object(l.a)(c,2),u=i[0],o=i[1],d=n.a.useRef(null);return n.a.useEffect((function(){d.current.scrollTo(0,d.current.scrollHeight)}),[t]),Object(b.jsx)("div",{className:"chat-window",children:Object(b.jsxs)("div",{className:"chat-window__messages",children:[Object(b.jsx)("div",{ref:d,className:"chat-window__messages-wrapper",children:t&&t.map((function(e,t){return Object(a.createElement)(g,Object(f.a)(Object(f.a)({},e),{},{key:t}))}))}),Object(b.jsx)(x,{messageValue:u,setMessageValue:o,onSendMessage:function(){r({userName:s,text:u}),o("")}})]})})},N=function(e){var t=e.users;return Object(b.jsxs)("div",{className:"users-sidebar",children:[Object(b.jsxs)("h3",{children:["\u041e\u043d\u043b\u0430\u0439\u043d (",t.length,"):"]}),Object(b.jsx)("ul",{className:"users-sidebar__list",children:t.map((function(e,t){return Object(b.jsx)("li",{className:"users-sidebar__item",children:e},e+String(t))}))})]})};var _=function(){var e=n.a.useContext(y),t=e.auth,s=e.firestore,a=Object(m.a)(t),r=Object(l.a)(a,3),c=r[0],i=r[1],f=r[2],p=Object(j.a)(s.collection("messages").orderBy("date")),O=Object(l.a)(p,3),g=O[0],x=O[1],_=O[2],w=Object(j.a)(s.collection("users").orderBy("uid")),S=Object(l.a)(w,3),k=S[0],C=S[1],I=S[2],L=function(){var e=Object(o.a)(u.a.mark((function e(){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new d.a.auth.GoogleAuthProvider,e.next=3,t.signInWithPopup(a);case 3:return n=e.sent,r=n.user,e.next=7,s.collection("users").add(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.userName,n=t.text,e.next=3,s.collection("messages").add({userName:a,text:n,date:d.a.firestore.FieldValue.serverTimestamp()});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(f)return Object(b.jsx)("div",{children:JSON.stringify(f)});if(_)return Object(b.jsx)("div",{children:JSON.stringify(f)});if(I)return Object(b.jsx)("div",{children:JSON.stringify(f)});var B=g?g.map((function(e){var t=e.userName,s=e.text,a=e.date;return{userName:t,text:s,date:a&&a.toDate()}})):[];return Object(b.jsx)("div",{className:"wrapper",children:c&&g&&k?Object(b.jsxs)("div",{className:"chat",children:[Object(b.jsx)(v,{messages:B,userName:c.displayName,onAddMessage:M}),Object(b.jsx)(N,{users:(null===k||void 0===k?void 0:k.map((function(e){return e.userName})))||[]})]}):Object(b.jsx)(h,{isLoading:i||x||C,onLogin:L})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))};s(34),s(35);d.a.initializeApp({apiKey:"AIzaSyAIyPyky-SUBZFnsOO5xcL7Ym0zOeqRZYg",authDomain:"react-simple-chat-e20d8.firebaseapp.com",databaseURL:"https://react-simple-chat-e20d8-default-rtdb.firebaseio.com",projectId:"react-simple-chat-e20d8",storageBucket:"react-simple-chat-e20d8.appspot.com",messagingSenderId:"427434539112",appId:"1:427434539112:web:957e56e253ac220dd2e3dd",measurementId:"G-M74BJ46886"});var y=Object(a.createContext)(null),S=d.a.auth(),k=d.a.firestore();c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y.Provider,{value:{firebase:d.a,auth:S,firestore:k},children:Object(b.jsx)(_,{})})}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.7c6f776c.chunk.js.map