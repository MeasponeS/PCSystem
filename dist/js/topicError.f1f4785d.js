(function(t){function e(e){for(var n,r,c=e[0],a=e[1],u=e[2],d=0,p=[];d<c.length;d++)r=c[d],s[r]&&p.push(s[r][0]),s[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,c=1;c<i.length;c++){var a=i[c];0!==s[a]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={topicError:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=a;o.push([18,"chunk-vendors","chunk-common"]),i()})({18:function(t,e,i){t.exports=i("9c59")},4666:function(t,e,i){},"9c59":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Head",{attrs:{activeUrl:"topic",companyName:t.ORGINFO.orgName,info:t.USERINFO,msgCount:t.MSGCOUNT}}),i("div",{staticClass:"main-body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"content clearfix"},[i("div",{staticClass:"left"},[i("div",{staticClass:"l-top"},[i("Breadcrumb",{attrs:{nav:[{url:"./topic.html",name:t.topicInfo.courseN,width:250},{url:"./topicList.html?packageId="+t.topicInfo.packageId+"&courseId="+t.topicInfo.courseId,name:"习题集"},{url:"javascript:;",name:"错题集"}]}})],1),0!=t.wrongQuestion[t.studyStateToggle].list.length?i("div",{staticClass:"do"},[i("div",{staticClass:"do-top"},[i("div",{staticClass:"do-title"},[t._v("第"+t._s(t.activeQuestionIndex+1)+"题")]),i("div",{staticClass:"children-topic"},[1!=t.topics[t.activeQuestionIndex].newType?i("ul",t._l(t.topicIndex(t.activeQuestionIndex,!0),function(e,n){return i("li",{class:{active:t.isA3A4B1Done(n)},on:{click:function(i){t.positioning(e)}}},[t._v(t._s(e))])})):t._e()]),i("ul",{staticClass:"do-action"},[i("li",{staticClass:"mark",class:1==t.topics[t.activeQuestionIndex].learnStatus?"yes":"no",on:{click:function(e){t.learn(t.topics[t.activeQuestionIndex].wrongId)}}},[t._v("已学会")]),i("li",{on:{click:function(e){t.favor()}}},[t._v(t._s(0!=t.topics[t.activeQuestionIndex].favor?"收藏":"取消收藏")+" ")]),i("li",{on:{click:t.lookAnswer}},[t._v("查看答案")]),i("li",{on:{click:t.previousTopic}},[t._v("上一题")]),i("li",{on:{click:t.nextTopic}},[t._v("下一题")])])]),i("DoTopic",{attrs:{isHistory:!0,topic:t.topics[t.activeQuestionIndex]},on:{selectOption:t.selectOption}}),i("AnswersPopup",{attrs:{topicIndex:t.topicIndex(t.activeQuestionIndex,!0),topic:t.topics[t.activeQuestionIndex]},model:{value:t.answersPopup,callback:function(e){t.answersPopup=e},expression:"answersPopup"}})],1):i("EmptyTemplate",{attrs:{msg:"暂无习题集"}})],1),i("div",{staticClass:"right"},[i("div",{staticClass:"r-top"},[i("div",[t._v("\n                            列表\n                        ")]),i("div",{staticClass:"toggle"},[i("span",{staticClass:"tab",class:{active:"preStudyList"==t.studyStateToggle},on:{click:function(e){t.clickStudy("preStudyList")}}},[t._v("未学会")]),i("span",{staticClass:"line"}),i("span",{staticClass:"tab",class:{active:"studyList"==t.studyStateToggle},on:{click:function(e){t.clickStudy("studyList")}}},[t._v("已学会")])])]),i("div",{staticClass:"checkpoint"},[i("div",[0!=t.topics.length?i("ul",t._l(t.topics,function(e,n){return i("li",{staticClass:"li",class:{active:t.activeQuestionIndex==n},on:{click:function(e){t.activeQuestionIndex=n}}},[i("RectProgress",{attrs:{progress:1==e.learnStatus?100:0,attr:{init:{text:"未学会",color:"#31b68f",progress:0},end:{text:"已学会",color:"#31b68f",progress:100}}}}),i("span",{staticStyle:{"margin-left":"10px"}},[t._v("第"+t._s(n+1)+"题")])],1)})):i("div",{staticStyle:{width:"100%",height:"100px","line-height":"100px","text-align":"center"}},[t._v("暂无数据")])]),t.wrongQuestion[t.studyStateToggle].isAllList?t._e():i("el-button",{staticClass:"load-more",staticStyle:{width:"100%"},on:{click:t.loadMore}},[t._v("加载更多")])],1)])])])]),i("Footer")],1)},o=[],r=i("8afe"),c=(i("ac6a"),i("9541")),a=i("a599"),u=i("43a7"),l=i("635f"),d=i("dbcb"),p=i("0ad9"),f=i("0fac"),h=i("2934"),v=i("71b3"),g={name:"app",mixins:[c["a"]],data:function(){return{wrongQuestion:{preStudyList:{minId:0,total:0,beforeIndex:0,isAllList:!1,list:[]},studyList:{minId:0,total:0,beforeIndex:0,isAllList:!1,list:[]}},studyStateToggle:"preStudyList",activeQuestionIndex:0,answersPopup:!1,topicInfo:{packageId:"",courseId:"",courseN:""}}},methods:{isA3A4B1Done:function(t){var e=this.topics[this.activeQuestionIndex];return 3==e.newType?0!=e.a3a4Questions[t].historyAnswer.length:5==e.newType?0!=e.questionArr[t].historyAnswer.length:void 0},lookAnswer:function(){this.answersPopup=!0},positioning:function(t){this.$nextTick(function(e){var i=document.getElementById(t).offsetTop;window.scrollTo(0,i-1)})},selectOption:function(t,e){var i=this.topics[this.activeQuestionIndex];i.hasOwnProperty("questionId")&&i.questionId==t?i.historyAnswer=e:3!=i.newType?5!=i.newType||i.questionArr.forEach(function(n,s){n.questionId!=t||(i.questionArr[s].historyAnswer=e)}):i.a3a4Questions.forEach(function(n,s){n.questionId!=t||(i.a3a4Questions[s].historyAnswer=e)})},previousTopic:function(){if(this.activeQuestionIndex<=0)return this.$message("已经是第一题了"),void(this.activeQuestionIndex=0);this.activeQuestionIndex--},nextTopic:function(){var t=this.topics.length;if(this.activeQuestionIndex>=t-1)return this.wrongQuestion.isAllList?this.$message("已经是最后一题了"):this.$message("请点击加载更多数据"),void(this.activeQuestionIndex=t-1);this.activeQuestionIndex++},rectProgress:function(t){if(1==t.newType)return 0===t.historyAnswer.length?0:100;var e=0;if(3==t.newType){for(var i=t.a3a4Questions.length,n=0;n<i;n++)0!=t.a3a4Questions[n].historyAnswer.length&&(e+=100/i);return e}if(5==t.newType){for(var s=t.questionArr.length,o=0;o<s;o++)0!=t.questionArr[o].historyAnswer.length&&(e+=100/s);return e}return 0},topicIndex:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.topics[t];if(1==i.newType)return e?[i.index]:i.index;if(3==i.newType){var n=i.a3a4Questions[0].index;if(e){var s=[];return i.a3a4Questions.forEach(function(t){s.push(t.index)}),s}return n+"~"+(n+(i.a3a4Questions.length-1))}return 5==i.newType?e?i.indexs:i.indexs[0]+"~"+i.indexs[i.indexs.length-1]:void 0},favor:function(){var t=this.topics[this.activeQuestionIndex];Object(h["d"])({type:1,courseId:this.topicInfo.courseId,leveId:t.levelId,isVedio:1,packageId:this.topicInfo.packageId,chapterQuestionId:t.questionId}).then(function(e){t.favor=e}).catch(function(t){})},learn:function(t){var e=this.topics[this.activeQuestionIndex];Object(f["g"])({wrongId:t}).then(function(t){e.learnStatus=t}).catch(function(t){})},clickStudy:function(t){this.studyStateToggle=t,"studyList"==t?(this.wrongQuestion.preStudyList.beforeIndex=this.activeQuestionIndex,this.activeQuestionIndex=this.wrongQuestion.studyList.beforeIndex):(this.wrongQuestion.studyList.beforeIndex=this.activeQuestionIndex,this.activeQuestionIndex=this.wrongQuestion.preStudyList.beforeIndex);var e=this.studyStateToggle;this.wrongQuestion[e].isAllList||0!=this.wrongQuestion[e].list.length||this.getPage()},getPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this.$loading({lock:!0}),n=this.studyStateToggle,s={coursePackId:this.topicInfo.packageId,courseId:this.topicInfo.courseId,type:"studyList"==n?1:2};e&&(s.wrongMinId=e),Object(f["e"])(s).then(function(e){var s;t.wrongQuestion[n].minId=e.wrongMinId,t.wrongQuestion[n].total=e.wronTotal,t.wrongQuestion[n].isAllList=1==e.isAllList,t.topicInfo.courseN=e.packName,(s=t.wrongQuestion[n].list).push.apply(s,Object(r["a"])(e.list)),i.close()}).catch(function(t){i.close()})},loadMore:function(){this.getPage(this.wrongQuestion[this.studyStateToggle].minId)}},mounted:function(){this.topicInfo.packageId=Object(p["e"])("packageId"),this.topicInfo.courseId=Object(p["e"])("courseId"),this.getPage()},computed:{topics:function(){var t=this.wrongQuestion[this.studyStateToggle];return t.list}},beforeDestroy:function(){},components:{Breadcrumb:l["a"],DoTopic:a["a"],RectProgress:u["a"],AnswersPopup:d["a"],EmptyTemplate:v["a"]}},I=g,y=i("2877"),w=Object(y["a"])(I,s,o,!1,null,null,null);w.options.__file="Index.vue";var x=w.exports;i("4666"),i("b7f1"),i("b419");new n["default"]({render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=topicError.f1f4785d.js.map