(function(e){function t(t){for(var r,u,o=t[0],i=t[1],s=t[2],l=0,d=[];l<o.length;l++)u=o[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function u(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a4783":"f21d6081","chunk-2d0be70b":"73e01d3f","chunk-2d216dc7":"f7c45e30"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=u(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0aeb":function(e,t,n){"use strict";var r=n("7a23"),a=Object(r["P"])("data-v-1affcf6e"),c=a((function(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])("span",{class:["badge",a.className]},Object(r["F"])(a.text),3)})),u=(n("caad"),{name:"AppStatus",props:{type:{type:String,required:!0,validator:function(e){return["active","cancelled","done","pending"].includes(e)}}},setup:function(e){var t={active:"primary",cancelled:"danger",done:"primary",pending:"warning"},n={active:"Активен",cancelled:"Отменен",done:"Завершен",pending:"Выполняется"},a=Object(r["z"])(t[e.type]),c=Object(r["z"])(n[e.type]);return Object(r["L"])(e,(function(e){a.value=t[e.type],c.value=n[e.type]})),{className:a,text:c}}});u.render=c,u.__scopeId="data-v-1affcf6e";t["a"]=u},"1da6":function(e,t,n){"use strict";var r=n("7a23"),a=Object(r["P"])("data-v-1c4065a2");Object(r["x"])("data-v-1c4065a2");var c={key:0,class:"breadcrumbs"},u=Object(r["h"])("Вернуться к списку заявок"),o={class:"card"},i={class:"card-title"};Object(r["v"])();var s=a((function(e,t,n,s,l,b){var d=Object(r["C"])("router-link");return Object(r["u"])(),Object(r["e"])(r["a"],null,[n.back?(Object(r["u"])(),Object(r["e"])("div",c,[Object(r["i"])(d,{to:"/",class:"text-white"},{default:a((function(){return[u]})),_:1})])):Object(r["f"])("",!0),Object(r["i"])("div",o,[Object(r["i"])("h1",i,[Object(r["h"])(Object(r["F"])(n.title)+" ",1),Object(r["B"])(e.$slots,"header",{},void 0,!0)]),Object(r["B"])(e.$slots,"default",{},void 0,!0)])],64)})),l={name:"AppPage",props:{title:{type:String,required:!0},back:{type:Boolean,default:!1}},setup:function(e){document.title="".concat(e.title," | Онлайн-банк")}};l.render=s,l.__scopeId="data-v-1c4065a2";t["a"]=l},"3f9b":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=new Intl.NumberFormat("ru-RU",{currency:"RUB",style:"currency"});function a(e){return r.format(e)}},"441a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,u){return a.layout?(Object(r["u"])(),Object(r["e"])(Object(r["D"])(a.layout+"-layout"),{key:0})):Object(r["f"])("",!0)}var c={className:"container with-nav"};function u(e,t,n,a,u,o){var i=Object(r["C"])("the-navbar"),s=Object(r["C"])("the-sidebar"),l=Object(r["C"])("app-message"),b=Object(r["C"])("router-view");return Object(r["u"])(),Object(r["e"])(r["a"],null,[Object(r["i"])(i),Object(r["i"])(s),Object(r["i"])("div",c,[Object(r["i"])(l),Object(r["i"])(b)])],64)}var o={class:"navbar"},i=Object(r["i"])("h3",null,"Online bank",-1),s={class:"navbar-menu"},l=Object(r["h"])("Заявки"),b=Object(r["h"])("Помощь");function d(e,t,n,a,c,u){var d=Object(r["C"])("router-link");return Object(r["u"])(),Object(r["e"])("nav",o,[i,Object(r["i"])("ul",s,[Object(r["i"])("li",null,[Object(r["i"])(d,{to:"/"},{default:Object(r["M"])((function(){return[l]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(d,{to:"/help"},{default:Object(r["M"])((function(){return[b]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])("a",{href:"#",onClick:t[1]||(t[1]=Object(r["O"])((function(){return a.openSidebar&&a.openSidebar.apply(a,arguments)}),["prevent"]))},"Сообщения")]),Object(r["i"])("li",null,[Object(r["i"])("a",{href:"#",onClick:t[2]||(t[2]=Object(r["O"])((function(){return a.logout&&a.logout.apply(a,arguments)}),["prevent"]))},"Выход")])])])}var p=n("6c02"),j=n("5502"),O={setup:function(){var e=Object(p["d"])(),t=Object(j["b"])(),n=function(){t.commit("auth/logout"),e.push("/auth")};return{logout:n,openSidebar:function(){return t.commit("openSidebar")}}}};O.render=d;var f=O,v={key:0,class:"alert-title"};function m(e,t,n,a,c,u){var o,i;return a.message?(Object(r["u"])(),Object(r["e"])("div",{key:0,class:["alert",null===(o=a.message)||void 0===o?void 0:o.type]},[a.title?(Object(r["u"])(),Object(r["e"])("p",v,Object(r["F"])(a.title),1)):Object(r["f"])("",!0),Object(r["i"])("p",null,Object(r["F"])(null===(i=a.message)||void 0===i?void 0:i.value),1),Object(r["i"])("span",{class:"alert-close",onClick:t[1]||(t[1]=function(){return a.close&&a.close.apply(a,arguments)})},"×")],2)):Object(r["f"])("",!0)}var h={name:"AppMessage",setup:function(){var e=Object(j["b"])(),t=Object(r["c"])((function(){return e.state.message})),n={primary:"Успешно",danger:"Ошибка",warning:"Внимание"},a=Object(r["c"])((function(){return t.value?n[t.value.type]:null}));return{message:t,title:a,close:function(){return e.commit("clearMessage")}}}};h.render=m;var g=h,y={key:0,class:"sidebar"},k=Object(r["i"])("div",{class:"sidebar-content"},[Object(r["i"])("p",null,"Добро пожаловать в систему учета заявок")],-1);function w(e,t,n,a,c,u){return a.sidebar?(Object(r["u"])(),Object(r["e"])("div",y,[Object(r["i"])("span",{class:"sidebar-close",onClick:t[1]||(t[1]=function(){return a.close&&a.close.apply(a,arguments)})},"×"),k])):Object(r["f"])("",!0)}var q={name:"TheSidebar",setup:function(){var e=Object(j["b"])(),t=Object(r["c"])((function(){return e.state.sidebar}));return{sidebar:t,close:function(){return e.commit("closeSidebar")}}}};q.render=w;var x=q,M={components:{TheSidebar:x,AppMessage:g,TheNavbar:f}};M.render=u;var S=M,C={class:"container"};function R(e,t,n,a,c,u){var o=Object(r["C"])("app-message"),i=Object(r["C"])("router-view");return Object(r["u"])(),Object(r["e"])("div",C,[Object(r["i"])(o),Object(r["i"])(i)])}var A={components:{AppMessage:g}};A.render=R;var _=A,B={setup:function(){var e=Object(p["c"])();return{layout:Object(r["c"])((function(){return e.meta.layout}))}},components:{MainLayout:S,AuthLayout:_}};B.render=a;var E=B,P=n("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0"),n("4de4");function I(e,t,n,a,c,u){var o=Object(r["C"])("app-loader"),i=Object(r["C"])("request-filter"),s=Object(r["C"])("request-table"),l=Object(r["C"])("request-modal"),b=Object(r["C"])("app-modal"),d=Object(r["C"])("app-page");return a.loading?(Object(r["u"])(),Object(r["e"])(o,{key:0})):(Object(r["u"])(),Object(r["e"])(d,{key:1,title:"Список заявок"},{header:Object(r["M"])((function(){return[Object(r["i"])("button",{class:"btn primary",onClick:t[1]||(t[1]=function(e){return a.modal=!0})},"Создать")]})),default:Object(r["M"])((function(){return[Object(r["i"])(i,{modelValue:a.filter,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.filter=e})},null,8,["modelValue"]),Object(r["i"])(s,{requests:a.requests},null,8,["requests"]),(Object(r["u"])(),Object(r["e"])(r["b"],{to:"body"},[a.modal?(Object(r["u"])(),Object(r["e"])(b,{key:0,title:"Создать заявки",onClose:t[4]||(t[4]=function(e){return a.modal=!1})},{default:Object(r["M"])((function(){return[Object(r["i"])(l,{onCreated:t[3]||(t[3]=function(e){return a.modal=!1})})]})),_:1})):Object(r["f"])("",!0)]))]})),_:1}))}var F=n("1da1"),N=(n("b0c0"),n("caad"),n("2532"),n("96cf"),n("1da6")),T=Object(r["P"])("data-v-58c9a58a");Object(r["x"])("data-v-58c9a58a");var V={key:0,class:"text-center"},U={key:1,class:"table"},L=Object(r["i"])("thead",null,[Object(r["i"])("tr",null,[Object(r["i"])("th",null,"#"),Object(r["i"])("th",null,"ФИО"),Object(r["i"])("th",null,"Телефон"),Object(r["i"])("th",null,"Сумма"),Object(r["i"])("th",null,"Статус"),Object(r["i"])("th",null,"Действие")])],-1);Object(r["v"])();var z=T((function(e,t,n,a,c,u){var o=Object(r["C"])("app-status"),i=Object(r["C"])("router-link");return n.requests.length?(Object(r["u"])(),Object(r["e"])("table",U,[L,Object(r["i"])("tbody",null,[(Object(r["u"])(!0),Object(r["e"])(r["a"],null,Object(r["A"])(n.requests,(function(e,t){return Object(r["u"])(),Object(r["e"])("tr",{key:e.id},[Object(r["i"])("td",null,Object(r["F"])(t+1),1),Object(r["i"])("td",null,Object(r["F"])(e.fio),1),Object(r["i"])("td",null,Object(r["F"])(e.phone),1),Object(r["i"])("td",null,Object(r["F"])(a.currency(e.amount)),1),Object(r["i"])("td",null,[Object(r["i"])(o,{type:e.status},null,8,["type"])]),Object(r["i"])("td",null,[Object(r["i"])(i,{custom:"",to:{name:"Request",params:{id:e.id}}},{default:T((function(e){var t=e.navigate;return[Object(r["i"])("button",{class:"btn",onClick:t},"Открыть",8,["onClick"])]})),_:2},1032,["to"])])])})),128))])])):(Object(r["u"])(),Object(r["e"])("h4",V,"Заявок пока нет"))})),J=n("3f9b"),D=n("0aeb"),$={name:"RequestTable",props:["requests"],setup:function(){return{currency:J["a"]}},components:{AppStatus:D["a"]}};$.render=z,$.__scopeId="data-v-58c9a58a";var H=$,W=Object(r["P"])("data-v-54846a03");Object(r["x"])("data-v-54846a03");var G=Object(r["i"])("label",{for:"fio"},"ФИО",-1),K={key:0},Q=Object(r["i"])("label",{for:"phone"},"Телефон",-1),X={key:0},Y=Object(r["i"])("label",{for:"amount"},"Сумма",-1),Z={key:0},ee={class:"form-control"},te=Object(r["i"])("label",{for:"status"},"Статус",-1),ne=Object(r["i"])("option",{value:"done"},"Завершен",-1),re=Object(r["i"])("option",{value:"cancelled"},"Отменен",-1),ae=Object(r["i"])("option",{value:"active"},"Активен",-1),ce=Object(r["i"])("option",{value:"pending"},"Выполняется",-1);Object(r["v"])();var ue=W((function(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])("form",{onSubmit:t[8]||(t[8]=Object(r["O"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},[Object(r["i"])("div",{class:["form-control",{invalid:e.fError}]},[G,Object(r["N"])(Object(r["i"])("input",{type:"text",id:"fio","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.fio=t}),onBlur:t[2]||(t[2]=function(){return e.fBlur&&e.fBlur.apply(e,arguments)})},null,544),[[r["J"],e.fio]]),e.fError?(Object(r["u"])(),Object(r["e"])("small",K,Object(r["F"])(e.fError),1)):Object(r["f"])("",!0)],2),Object(r["i"])("div",{class:["form-control",{invalid:e.pError}]},[Q,Object(r["N"])(Object(r["i"])("input",{type:"phone",id:"phone","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.phone=t}),onBlur:t[4]||(t[4]=function(){return e.pBlur&&e.pBlur.apply(e,arguments)})},null,544),[[r["J"],e.phone]]),e.pError?(Object(r["u"])(),Object(r["e"])("small",X,Object(r["F"])(e.pError),1)):Object(r["f"])("",!0)],2),Object(r["i"])("div",{class:["form-control",{invalid:e.aError}]},[Y,Object(r["N"])(Object(r["i"])("input",{type:"number",id:"amount","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.amount=t}),onBlur:t[6]||(t[6]=function(){return e.aBlur&&e.aBlur.apply(e,arguments)})},null,544),[[r["J"],e.amount]]),e.aError?(Object(r["u"])(),Object(r["e"])("small",Z,Object(r["F"])(e.aError),1)):Object(r["f"])("",!0)],2),Object(r["i"])("div",ee,[te,Object(r["N"])(Object(r["i"])("select",{id:"status","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.status=t})},[ne,re,ae,ce],512),[[r["I"],e.status]])]),Object(r["i"])("button",{class:"btn primary",disabled:e.isSubmitting},"Создать",8,["disabled"])],32)})),oe=n("5530"),ie=(n("498a"),n("7bb1")),se=n("506a");function le(e){var t=Object(ie["b"])({initialValues:{status:"active"}}),n=t.isSubmitting,r=t.handleSubmit,a=Object(ie["a"])("fio",se["b"]().trim().required("Поле обязательно для заполнения")),c=a.value,u=a.errorMessage,o=a.handleBlur,i=Object(ie["a"])("phone",se["b"]().trim().required("Поле обязательно для заполнения")),s=i.value,l=i.errorMessage,b=i.handleBlur,d=Object(ie["a"])("amount",se["a"]().required("Поле обязательно для заполнения").min(0,"Сумма не может быть меньше нуля")),p=d.value,j=d.errorMessage,O=d.handleBlur,f=Object(ie["a"])("status"),v=f.value,m=r(e);return{fio:c,phone:s,amount:p,status:v,onSubmit:m,fError:u,fBlur:o,aError:j,aBlur:O,pError:l,pBlur:b,isSubmitting:n}}var be={name:"RequestModal",emits:["created"],setup:function(e,t){var n=t.emit,r=Object(j["b"])(),a=function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.dispatch("request/create",t);case 2:n("created");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(oe["a"])({},le(a))}};be.render=ue,be.__scopeId="data-v-54846a03";var de=be,pe=Object(r["P"])("data-v-292382d9");Object(r["x"])("data-v-292382d9");var je={class:"modal"},Oe={key:0,class:"title"};Object(r["v"])();var fe=pe((function(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])(r["a"],null,[Object(r["i"])("div",{class:"modal-backdrop",onClick:t[1]||(t[1]=function(t){return e.$emit("close")})}),Object(r["i"])("div",je,[n.title?(Object(r["u"])(),Object(r["e"])("h3",Oe,Object(r["F"])(n.title),1)):Object(r["f"])("",!0),Object(r["B"])(e.$slots,"default",{},void 0,!0)])],64)})),ve={emits:["close"],name:"AppModal",props:{title:{type:String}}};ve.render=fe,ve.__scopeId="data-v-292382d9";var me=ve,he=n("ddc6"),ge=Object(r["P"])("data-v-3c577733");Object(r["x"])("data-v-3c577733");var ye={class:"filter"},ke={class:"form-control"},we={class:"form-control"},qe=Object(r["g"])('<option disabled selected data-v-3c577733>Выберите статус</option><option value="done" data-v-3c577733>Завершен</option><option value="cancelled" data-v-3c577733>Отменен</option><option value="active" data-v-3c577733>Активен</option><option value="pending" data-v-3c577733>Выполняется</option>',5);Object(r["v"])();var xe=ge((function(e,t,n,a,c,u){return Object(r["u"])(),Object(r["e"])("div",ye,[Object(r["i"])("div",ke,[Object(r["N"])(Object(r["i"])("input",{type:"text",placeholder:"Введите имя","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.name=e})},null,512),[[r["J"],a.name]])]),Object(r["i"])("div",we,[Object(r["N"])(Object(r["i"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.status=e})},[qe],512),[[r["I"],a.status]])]),a.isActive?(Object(r["u"])(),Object(r["e"])("button",{key:0,class:"btn warning",onClick:t[3]||(t[3]=function(){return a.reset&&a.reset.apply(a,arguments)})},"Очистить")):Object(r["f"])("",!0)])})),Me={name:"RequestFilter",emits:["update:modelValue"],props:["modelValue"],setup:function(e,t){var n=t.emit,a=Object(r["z"])(),c=Object(r["z"])();Object(r["L"])([a,c],(function(e){n("update:modelValue",{name:e[0],status:e[1]})}));var u=Object(r["c"])((function(){return a.value||c.value}));return{name:a,status:c,isActive:u,reset:function(){a.value="",c.value=null}}}};Me.render=xe,Me.__scopeId="data-v-3c577733";var Se=Me,Ce={name:"Home",setup:function(){var e=Object(r["z"])(!1),t=Object(r["z"])({}),n=Object(j["b"])(),a=Object(r["z"])(!1);Object(r["s"])(Object(F["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.value=!0,e.next=3,n.dispatch("request/load");case 3:a.value=!1;case 4:case"end":return e.stop()}}),e)}))));var c=Object(r["c"])((function(){return n.getters["request/requests"].filter((function(e){return t.value.name?e.fio.includes(t.value.name):e})).filter((function(e){return t.value.status?t.value.status===e.status:e}))}));return{modal:e,requests:c,loading:a,filter:t}},components:{RequestFilter:Se,AppModal:me,AppPage:N["a"],RequestTable:H,RequestModal:de,AppLoader:he["a"]}};Ce.render=I;var Re=Ce,Ae=(n("4795"),n("e16f")),_e=n("bc3a"),Be=n.n(_e),Ee="jwt-token",Pe={namespaced:!0,state:function(){return{token:localStorage.getItem(Ee)}},mutations:{setToken:function(e,t){e.token=t,localStorage.setItem(Ee,t)},logout:function(e){e.token=null,localStorage.removeItem(Ee)}},actions:{login:function(e,t){return Object(F["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u,o,i,s,l,b,d,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,c="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyAzruTUIlpp3mcxtVjWh83MiTJOk6VtS2s"),n.next=5,Be.a.post(c,Object(oe["a"])(Object(oe["a"])({},t),{},{returnSecureToken:!0}));case 5:u=n.sent,o=u.data,r("setToken",o.idToken),r("clearMessage",null,{root:!0}),n.next=16;break;case 11:throw n.prev=11,n.t0=n["catch"](1),a("setMessage",{value:Object(Ae["a"])(null===n.t0||void 0===n.t0||null===(i=n.t0.response)||void 0===i||null===(s=i.data)||void 0===s||null===(l=s.error)||void 0===l?void 0:l.message),type:"danger"},{root:!0}),console.log(Object(Ae["a"])(null===n.t0||void 0===n.t0||null===(b=n.t0.response)||void 0===b||null===(d=b.data)||void 0===d||null===(p=d.error)||void 0===p?void 0:p.message)),new Error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,11]])})))()}},getters:{token:function(e){return e.token},isAuthenticated:function(e){return!!e.token}}},Ie=(n("d81d"),n("b64b"),n("99af"),Be.a.create({baseURL:"https://online-bank-vue3-composition-default-rtdb.europe-west1.firebasedatabase.app"}));Ie.interceptors.response.use(null,(function(e){return 401===e.response.status&&ze.push("/auth?message=auth"),Promise.reject(e)}));var Fe=Ie,Ne={namespaced:!0,state:function(){return{requests:[]}},getters:{requests:function(e){return e.requests}},mutations:{setRequests:function(e,t){e.requests=t},addRequest:function(e,t){e.requests.push(t)}},actions:{create:function(e,t){return Object(F["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,c=Ve.getters["auth/token"],n.next=5,Fe.post("/requests.json?auth=".concat(c),t);case 5:u=n.sent,o=u.data,r("addRequest",Object(oe["a"])(Object(oe["a"])({},t),{},{id:o.name})),a("setMessage",{value:"Заявка успешно создана",type:"primary"},{root:!0}),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),a("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()},load:function(e){return Object(F["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c,u,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,a=Ve.getters["auth/token"],t.next=5,Fe.get("/requests.json?auth=".concat(a));case 5:c=t.sent,u=c.data,o=Object.keys(u).map((function(e){return Object(oe["a"])(Object(oe["a"])({},u[e]),{},{id:e})})),n("setRequests",o),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),r("setMessage",{value:t.t0.message,type:"danger"},{root:!0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},loadById:function(e,t){return Object(F["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a=Ve.getters["auth/token"],n.next=5,Fe.get("/requests/".concat(t,".json?auth=").concat(a));case 5:return c=n.sent,u=c.data,n.abrupt("return",u);case 10:n.prev=10,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},update:function(e,t){return Object(F["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a=Ve.getters["auth/token"],n.next=5,Fe.put("/requests/".concat(t.id,".json?auth=").concat(a),t);case 5:r("setMessage",{value:"Заявка обновлена",type:"primary"},{root:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},remove:function(e,t){return Object(F["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a=Ve.getters["auth/token"],n.next=5,Fe["delete"]("/requests/".concat(t,".json?auth=").concat(a));case 5:r("setMessage",{value:"Заявка удалена",type:"primary"},{root:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}},Te=[];var Ve=Object(j["a"])({plugins:Te,state:function(){return{message:null,sidebar:!1}},mutations:{setMessage:function(e,t){e.message=t},clearMessage:function(e){e.message=null},openSidebar:function(e){e.sidebar=!0},closeSidebar:function(e){e.sidebar=!1}},actions:{setMessage:function(e,t){var n=e.commit;n("setMessage",t),setTimeout((function(){return n("clearMessage")}),5e3)}},modules:{auth:Pe,request:Ne}}),Ue=[{path:"/",name:"Home",component:Re,meta:{layout:"main",auth:!0}},{path:"/help",name:"Help",component:function(){return n.e("chunk-2d216dc7").then(n.bind(null,"c3ef"))},meta:{layout:"main",auth:!0}},{path:"/auth",name:"Auth",component:function(){return n.e("chunk-2d0be70b").then(n.bind(null,"2fef"))},meta:{layout:"auth"}},{path:"/request/:id",name:"Request",component:function(){return n.e("chunk-2d0a4783").then(n.bind(null,"0728"))},meta:{layout:"main",auth:!0}}],Le=Object(p["a"])({history:Object(p["b"])("/"),routes:Ue,linkActiveClass:"active",linkExactActiveClass:"active"});Le.beforeEach((function(e,t,n){var r=e.meta.auth;r&&!Ve.getters["auth/isAuthenticated"]?n("/auth?message=auth"):n()}));var ze=Le;n("441a");Object(r["d"])(E).use(Ve).use(ze).mount("#app")},ddc6:function(e,t,n){"use strict";var r=n("7a23"),a={class:"loader"};function c(e,t,n,c,u,o){return Object(r["u"])(),Object(r["e"])("div",a)}var u={name:"AppLoader.vue"};u.render=c;t["a"]=u},e16f:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r={EMAIL_NOT_FOUND:"Пользователь с таким email был найден",INVALID_PASSWORD:"Неверный пароль",auth:"Пожалуйста, авторизуйтесь"};function a(e){return r[e]?r[e]:"Неизвестная ошибка"}}});
//# sourceMappingURL=app.680620f6.js.map