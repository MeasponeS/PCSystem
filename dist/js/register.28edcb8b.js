(function(t){function e(e){for(var o,s,a=e[0],u=e[1],c=e[2],p=0,d=[];p<a.length;p++)s=a[p],r[s]&&d.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={register:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;i.push([12,"chunk-vendors","chunk-common"]),n()})({12:function(t,e,n){t.exports=n("edcf")},edcf:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Head",{attrs:{companyName:t.ORGINFO.orgName,info:t.USERINFO,msgCount:t.MSGCOUNT}}),n("div",{staticClass:"back container-fluid main-body "},[n("div",{staticClass:"content"},[n("h1",[t._v("注册")]),n("h2"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"input1",attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),n("a",{attrs:{href:"##"},on:{click:t.getCode}},[t._v(t._s(this.countDown!=t.initCountDown?this.countDown:"获取验证码"))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input2",attrs:{type:"password",placeholder:"设置密码不少于8位"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.checkRegister}},[t._v("注册")])],1)]),n("Footer")],1)},i=[],s=(n("cadf"),n("551c"),n("097d"),n("9541")),a=n("3439"),u=n("3786"),c={name:"app",mixins:[s["a"]],data:function(){return{mobile:"",msg:"",password:"",countDown:a["a"].countDown,initCountDown:a["a"].countDown}},methods:{getCode:function(){var t=this;11==this.mobile.length?this.countDown<60||Object(u["f"])({phone:this.mobile,type:1}).then(function(e){console.log(e),window.SMS=setInterval(function(){if(t.countDown<=0)return clearInterval(window.SMS),void(t.countDown=a["a"].countDown);t.countDown--},1e3)}).catch(function(t){}):this.$message("请填写正确的手机号")},checkRegister:function(){var t=this.mobile,e=this.msg,n=this.password;11==t.length?e?n<a["a"].shortLength?this.$message("密码长度必须不少于".concat(a["a"].shortLength,"位")):this.handleRegister(t,e,n):this.$message("请填写验证码"):this.$message("请填写正确的手机号")},handleRegister:function(t,e,n){var o=this;Object(u["e"])({phone:t,code:e,password:n}).then(function(t){o.$message("注册成功"),setTimeout(function(t){window.location.href="./login.html"},1e3)}).catch(function(t){})}},mounted:function(){},beforeDestroy:function(){},components:{}},l=c,p=n("2877"),d=Object(p["a"])(l,r,i,!1,null,null,null);d.options.__file="Index.vue";var f=d.exports;n("f652"),n("b7f1"),n("b419");new o["default"]({render:function(t){return t(f)}}).$mount("#app")},f652:function(t,e,n){}});
//# sourceMappingURL=register.28edcb8b.js.map