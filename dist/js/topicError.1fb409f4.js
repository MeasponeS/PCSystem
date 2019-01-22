(function(t){function e(e){for(var i,r,c=e[0],a=e[1],u=e[2],l=0,p=[];l<c.length;l++)r=c[l],o[r]&&p.push(o[r][0]),o[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={topicError:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=a;s.push([17,"chunk-vendors","chunk-common"]),n()})({17:function(t,e,n){t.exports=n("9c59")},4666:function(t,e,n){},"9c59":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Head",{attrs:{activeUrl:"topic",companyName:t.ORGINFO.orgName,info:t.USERINFO,msgCount:t.MSGCOUNT}}),n("div",{staticClass:"main-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content clearfix"},[n("div",{staticClass:"left"},[n("div",{staticClass:"l-top"},[n("Breadcrumb",{attrs:{nav:[{url:"./topic.html",name:t.topicInfo.courseN,width:250},{url:"./topicList.html?packageId="+t.topicInfo.packageId+"&courseId="+t.topicInfo.courseId,name:"习题集"},{url:"javascript:;",name:"错题集"}]}})],1),0!=t.topics.length?n("div",{staticClass:"do"},[n("div",{staticClass:"do-top"},[n("div",{staticClass:"do-title"},[t._v("第"+t._s(t.topicIndex(t.activeQuestionIndex))+"题/共"+t._s(this.wrongQuestion.wronTotal)+"题")]),n("div",{staticClass:"children-topic"},[1!=t.topics[t.activeQuestionIndex].newType?n("ul",t._l(t.topicIndex(t.activeQuestionIndex,!0),function(e,i){return n("li",{class:{active:t.isA3A4B1Done(i)},on:{click:function(n){t.positioning(e)}}},[t._v(t._s(e))])})):t._e()]),n("ul",{staticClass:"do-action"},[n("li",{staticClass:"mark",class:1==t.topics[t.activeQuestionIndex].learnStatus?"yes":"no",on:{click:function(e){t.learn(t.topics[t.activeQuestionIndex].wrongId)}}},[t._v("已学会")]),n("li",{on:{click:function(e){t.favor()}}},[t._v(t._s(0!=t.topics[t.activeQuestionIndex].favor?"收藏":"取消收藏")+" ")]),n("li",{on:{click:t.lookAnswer}},[t._v("查看答案")]),n("li",{on:{click:t.previousTopic}},[t._v("上一题")]),n("li",{on:{click:t.nextTopic}},[t._v("下一题")])])]),n("DoTopic",{attrs:{isHistory:!0,topic:t.topics[t.activeQuestionIndex]},on:{selectOption:t.selectOption}}),n("AnswersPopup",{attrs:{topicIndex:t.topicIndex(t.activeQuestionIndex,!0),topic:t.topics[t.activeQuestionIndex]},model:{value:t.answersPopup,callback:function(e){t.answersPopup=e},expression:"answersPopup"}})],1):n("EmptyTemplate",{attrs:{msg:"暂无习题集"}})],1),n("div",{staticClass:"right"},[n("div",{staticClass:"r-top"},[n("div",[t._v("\n                            列表\n                        ")]),n("div",{staticClass:"toggle"},[n("span",{staticClass:"tab",class:{active:"preStudyList"==t.studyStateToggle},on:{click:function(e){t.clickStudy("preStudyList")}}},[t._v("未学会")]),n("span",{staticClass:"line"}),n("span",{staticClass:"tab",class:{active:"studyList"==t.studyStateToggle},on:{click:function(e){t.clickStudy("studyList")}}},[t._v("已学会")])])]),n("div",{staticClass:"checkpoint"},[0!=t.topics.length?n("ul",t._l(t.topics,function(e,i){return n("li",{staticClass:"li",class:{active:t.activeQuestionIndex==i},on:{click:function(e){t.activeQuestionIndex=i}}},[n("RectProgress",{attrs:{progress:1==e.learnStatus?100:0,attr:{init:{text:"未学会",color:"#31b68f",progress:0},end:{text:"已学会",color:"#31b68f",progress:100}}}}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("第"+t._s(t.topicIndex(i))+"题")])],1)})):t._e(),t.wrongQuestion.isAllList?t._e():n("el-button",{staticClass:"load-more",staticStyle:{width:"100%"},on:{click:t.loadMore}},[t._v("加载更多")])],1)])])])]),n("Footer")],1)},s=[],r=n("8afe"),c=(n("ac6a"),n("cadf"),n("551c"),n("097d"),n("9541")),a=n("a599"),u=n("43a7"),d=n("635f"),l=n("dbcb"),p=n("0ad9"),f=n("0fac"),v=n("2934"),h=n("71b3"),I={name:"app",mixins:[c["a"]],data:function(){return{wrongQuestion:{wrongMinId:0,wronTotal:"0",isAllList:!1,studyList:[],preStudyList:[]},studyStateToggle:"preStudyList",activeQuestionIndex:0,answersPopup:!1,topicInfo:{packageId:"",courseId:"",courseN:""}}},methods:{isA3A4B1Done:function(t){var e=this.topics[this.activeQuestionIndex];return 3==e.newType?0!=e.a3a4Questions[t].historyAnswer.length:5==e.newType?0!=e.questionArr[t].historyAnswer.length:void 0},lookAnswer:function(){this.answersPopup=!0},positioning:function(t){this.$nextTick(function(e){var n=document.getElementById(t).offsetTop;window.scrollTo(0,n-1)})},selectOption:function(t,e){var n=this.topics[this.activeQuestionIndex];n.hasOwnProperty("questionId")&&n.questionId==t?n.historyAnswer=e:3!=n.newType?5!=n.newType||n.questionArr.forEach(function(i,o){i.questionId!=t||(n.questionArr[o].historyAnswer=e)}):n.a3a4Questions.forEach(function(i,o){i.questionId!=t||(n.a3a4Questions[o].historyAnswer=e)})},previousTopic:function(){if(this.activeQuestionIndex<=0)return this.$message("已经是第一题了"),void(this.activeQuestionIndex=0);this.activeQuestionIndex--},nextTopic:function(){var t=this.topics.length;if(this.activeQuestionIndex>=t-1)return this.wrongQuestion.isAllList?this.$message("已经是最后一题了"):this.$message("请点击加载更多数据"),void(this.activeQuestionIndex=t-1);this.activeQuestionIndex++},rectProgress:function(t){if(1==t.newType)return 0===t.historyAnswer.length?0:100;var e=0;if(3==t.newType){for(var n=t.a3a4Questions.length,i=0;i<n;i++)0!=t.a3a4Questions[i].historyAnswer.length&&(e+=100/n);return e}if(5==t.newType){for(var o=t.questionArr.length,s=0;s<o;s++)0!=t.questionArr[s].historyAnswer.length&&(e+=100/o);return e}return 0},topicIndex:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.topics[t];if(1==n.newType)return e?[n.index]:n.index;if(3==n.newType){var i=n.a3a4Questions[0].index;if(e){var o=[];return n.a3a4Questions.forEach(function(t){o.push(t.index)}),o}return i+"~"+(i+(n.a3a4Questions.length-1))}return 5==n.newType?e?n.indexs:n.indexs[0]+"~"+n.indexs[n.indexs.length-1]:void 0},favor:function(){var t=this.topics[this.activeQuestionIndex];Object(v["d"])({type:1,courseId:this.topicInfo.courseId,leveId:t.levelId,isVedio:1,packageId:this.topicInfo.packageId,chapterQuestionId:t.questionId}).then(function(e){t.favor=e}).catch(function(t){})},learn:function(t){var e=this.topics[this.activeQuestionIndex];Object(f["g"])({wrongId:t}).then(function(t){e.learnStatus=t}).catch(function(t){})},clickStudy:function(t){"studyList"==t?(window.beforePreStudyListIndex=this.activeQuestionIndex,window.beforeStudyListIndex?this.activeQuestionIndex=window.beforeStudyListIndex:this.activeQuestionIndex=0):(window.beforeStudyListIndex=this.activeQuestionIndex,window.beforePreStudyListIndex?this.activeQuestionIndex=window.beforePreStudyListIndex:this.activeQuestionIndex=0),this.studyStateToggle=t},getPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n={coursePackId:this.topicInfo.packageId,courseId:this.topicInfo.courseId};e&&(n.pageId=e),Object(f["e"])(n).then(function(e){var n,i;t.wrongQuestion.wronTotal=e.wronTotal,t.wrongQuestion.wrongMinId=e.wrongMinId,t.wrongQuestion.isAllList=1==e.isAllList,t.topicInfo.courseN=e.packName,(n=t.wrongQuestion.studyList).push.apply(n,Object(r["a"])(e.studyList)),(i=t.wrongQuestion.preStudyList).push.apply(i,Object(r["a"])(e.preStudyList))}).catch(function(t){})},loadMore:function(){this.getPage(this.wrongQuestion.wrongMinId)}},mounted:function(){this.topicInfo.packageId=Object(p["e"])("packageId"),this.topicInfo.courseId=Object(p["e"])("courseId"),this.getPage()},computed:{topics:function(){var t=this.wrongQuestion;return t[this.studyStateToggle]}},beforeDestroy:function(){},components:{Breadcrumb:d["a"],DoTopic:a["a"],RectProgress:u["a"],AnswersPopup:l["a"],EmptyTemplate:h["a"]}},g=I,w=n("2877"),y=Object(w["a"])(g,o,s,!1,null,null,null);y.options.__file="Index.vue";var x=y.exports;n("4666"),n("b7f1"),n("b419");new i["default"]({render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=topicError.1fb409f4.js.map