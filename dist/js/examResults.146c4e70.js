(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],f=0,p=[];f<o.length;f++)a=o[f],n[a]&&p.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},n={examResults:0},r=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([7,"chunk-vendors","chunk-common"]),s()})({7:function(t,e,s){t.exports=s("eb73")},a5f1:function(t,e,s){},eb73:function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Head",{attrs:{activeUrl:"exam",companyName:t.ORGINFO.orgName,info:t.USERINFO,msgCount:t.MSGCOUNT}}),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"container main-body"},[s("div",[s("div",{staticClass:"top"},[s("Breadcrumb",{attrs:{nav:[{url:"./exam.html",name:this.statistics.testingsname},{url:"javascript:;",name:"考试结果"}]}})],1),s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("div",{staticClass:"up"},[t._m(0),s("div",{staticClass:"info"},[s("h1",[t._v(t._s(t.info.rightPer)+"%")]),s("span",[t._v("正确率")])]),s("div",{staticClass:"result"},[s("h1",[t._v("恭喜，您完成了本次考试！")]),s("h3",[t._v("正确："+t._s(t.info.rightCount)+" 错误："+t._s(t.info.erroCount)+" ")])])]),s("div",{staticClass:"down"},[s("div",{staticClass:"title"},[s("div",{class:{active:"all"==t.status},on:{click:function(e){t.status="all"}}},[t._v("全部")]),s("div",{staticClass:"mid"}),s("div",{class:{active:"right"==t.status},on:{click:function(e){t.status="right"}}},[t._v("只看正确")]),s("div",{staticClass:"mid"}),s("div",{class:{active:"wrong"==t.status},on:{click:function(e){t.status="wrong"}}},[t._v("只看错误")])]),0!=t.topics.length?s("ul",{staticClass:"all clearfix"},t._l(t.topics,function(e,i){return s("li",{key:e.questionId,on:{click:function(e){t.examHistory(i)}}},[s("RectProgress",{attrs:{progress:e.erroCount,attr:t.progressAttr}}),s("span",{staticStyle:{"margin-left":"10px"}},[t._v("第"+t._s(t.topicIndex(e))+"题")])],1)})):s("div",{staticClass:"null-data"},[t._v(" 暂无数据 ")])])]),s("div",{staticClass:"right"},[s("h1",{staticClass:"header"},[t._v("数据参考")]),s("p",[t._v("当前参与人数："+t._s(t.statistics.testSize)+"人")]),s("p",[t._v("当前正答率："+t._s(t.statistics.rightRate)+"%")]),s("p",[t._v("当前及格率："+t._s(t.statistics.passRate)+"%")]),s("p",[t._v("当前及格人数："+t._s(t.statistics.passSize)+"人")]),s("p",[t._v("当前最高分："+t._s(t.statistics.maxScore)+"分"),s("span",[t._v("共"+t._s(t.statistics.maxScoreUserSize)+"人")])]),s("p",[t._v("当前最低分："+t._s(t.statistics.minScore)+"分"),s("span",[t._v("共"+t._s(t.statistics.minScoreUserSize)+"人")])]),s("a",{attrs:{href:"./exam.html"}},[s("el-button",{staticClass:"btn",attrs:{type:"primary"}},[t._v("完成")])],1)])])])]),s("Footer")],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle"},[s("div",{staticClass:"circle-left"}),s("div",{staticClass:"circle-right"}),s("div",{staticClass:"circle-bottom-left"}),s("div",{staticClass:"circle-bottom-right"})])}],a=(s("ac6a"),s("cadf"),s("551c"),s("097d"),s("9541")),o=s("635f"),c=s("39f0"),l=s("43a7"),u=s("0ad9"),f=s("335a"),p=s("3439"),d={name:"app",mixins:[a["a"]],data:function(){return{status:"all",progressAttr:{init:{text:"正确",color:"#31b68f",progress:0},end:{text:"错误",color:"#FF5555",progress:100}},list:[],info:{topicCount:"",erroCount:"",rightCount:"",rightPer:""},statistics:{maxScore:0,maxScoreUserSize:0,minScore:0,minScoreUserSize:0,passRate:"",passSize:0,testSize:0,testingsname:"",unpassSize:0,openAnswer:""}}},methods:{progress:function(t){var e=t,s=100,i=e/s,n=document.getElementsByClassName("circle-right")[0],r=document.getElementsByClassName("circle-left")[0];i<=.5?n.style.transform="rotate(".concat(360*i,"deg)"):(n.style.transform="rotate(180deg)",n.style.transition="opacity 0s step-end 1s, transform 1s linear",n.style.opacity=0,r.style.transition="transform ".concat((i-.5)/.5,"s linear 1s"),r.style.transform="rotate(".concat(360*i-180,"deg)"))},topicIndex:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=t;if(1==s.newType)return e?[s.index]:s.index;if(3==s.newType){var i=s.a3a4Questions[0].index;if(e){var n=[];return s.a3a4Questions.forEach(function(t){n.push(t.index)}),n}return i+"~"+(i+(s.a3a4Questions.length-1))}return 5==s.newType?e?s.indexs:s.indexs[0]+"~"+s.indexs[s.indexs.length-1]:void 0},examHistory:function(t){1==this.statistics.openAnswer?window.location.href="./examHistory.html?type=".concat(this.status,"&index=").concat(t):this.$message("考试答案不开放")}},mounted:function(){var t=this;Object(c["b"])({paperId:Object(u["e"])("paperId"),testingId:Object(u["e"])("testingId"),isGetHistory:1}).then(function(e){t.list=e.questions,t.info.topicCount=e.erroCount+e.rightCount,t.info.erroCount=e.erroCount,t.info.rightCount=e.rightCount,t.info.rightPer=e.rightPer,Object(c["c"])({testingId:Object(u["e"])("testingId")}).then(function(s){t.statistics=s,f["a"].set(p["a"].storageExamHistoryKey,{paperId:Object(u["e"])("paperId"),testingId:Object(u["e"])("testingId"),name:t.statistics.testingsname,topicCount:e.erroCount+e.rightCount,topics:e.questions}),t.progress(t.info.rightPer)}).catch(function(t){})}).catch(function(t){})},computed:{topics:function(){return this.activeQuestionIndex=0,0==this.list.length?[]:"all"==this.status?this.list:"right"==this.status?this.list.filter(function(t){return 0==t.erroCount}):"wrong"==this.status?this.list.filter(function(t){return t.erroCount>0}):void 0}},beforeDestroy:function(){},components:{Breadcrumb:o["a"],RectProgress:l["a"]}},v=d,h=s("2877"),m=Object(h["a"])(v,n,r,!1,null,null,null);m.options.__file="Index.vue";var g=m.exports;s("a5f1"),s("b7f1"),s("b419");new i["default"]({render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=examResults.146c4e70.js.map