(function(e){function t(t){for(var a,s,o=t[0],i=t[1],d=t[2],p=0,h=[];p<o.length;p++)s=o[p],c[s]&&h.push(c[s][0]),c[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var i=r[o];0!==c[i]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},c={courseDetails:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=i;n.push([2,"chunk-vendors","chunk-common"]),r()})({"0014":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Head",{attrs:{companyName:e.ORGINFO.orgName,info:e.USERINFO,msgCount:e.MSGCOUNT}}),r("div",{staticClass:"container main-body clearfix"},[r("NoLearningCard",{attrs:{hasCloseActive:!0,phone:e.ORGINFO.phone},on:{openCard:e.openCard,clickClose:e.closeCard},model:{value:e.noLearningCard,callback:function(t){e.noLearningCard=t},expression:"noLearningCard"}}),r("OpenLearningCard",{attrs:{phone:e.ORGINFO.phone},on:{success:e.success},model:{value:e.OpenLearningCard,callback:function(t){e.OpenLearningCard=t},expression:"OpenLearningCard"}}),r("div",{staticClass:"left"},[r("div",{staticClass:"nav",class:{navB:1==e.scrollTop},style:"left:"+e.leftLONG()+"px"},[e.course.length?r("Breadcrumb",{staticClass:"lessson",attrs:{nav:[{url:"./study.html",name:e.packageName},{url:"./study.html",name:e.currentCourseName},{url:"javascript:;",name:e.currentChapterName||e.currentCourseName}]}}):e._e(),r("p",{staticClass:"nav-act"},[r("a",{attrs:{href:"javascript:;"},on:{click:e.addCol}},[e._v(e._s(e.col))]),r("span"),r("a",{attrs:{href:"javascript:;"},on:{click:e.prevPage}},[e._v("上一节")]),r("span"),r("a",{attrs:{href:"javascript:;"},on:{click:e.nextPage}},[e._v("下一节")])])],1),r("div",{staticClass:"letf-content"},[e.playerOptions.sources[0].src?r("div",{staticClass:"item",attrs:{id:"myVideo",preload:"",width:"784"}},[r("div",{staticClass:"player"},[r("video-player",{staticClass:"vjs-custom-skin",attrs:{options:e.playerOptions}})],1)]):e._e(),r("div",{staticClass:"html-info",domProps:{innerHTML:e._s(e.context)}})])]),r("div",{staticClass:"right"},[r("p",[e._v("选择课程"),r("span",[e._v("(共"+e._s(e.course.length)+"门课程)")])]),r("div",{staticClass:"accordion"},[r("el-select",{staticClass:"select-course",attrs:{placeholder:"请选择课程"},on:{change:function(t){e.getChapters(e.currentCourseId)}},model:{value:e.currentCourseId,callback:function(t){e.currentCourseId=t},expression:"currentCourseId"}},e._l(e.course,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id+""}})})),r("div",{staticClass:"now"},[0!=e.chapters.length?r("span",[e._v(" 当前课程章节")]):e._e()]),0!=e.sub?r("Sidebar",{ref:"sidebar",attrs:{chapters:e.chapters},on:{selectChapter:e.selectChapter}}):r("SidebarTwo",{ref:"sidebarTwo",attrs:{chapters:e.chapters},on:{selectChapter:e.selectChapter}})],1)])],1),r("Footer")],1)},n=[],s=(r("673e"),r("20d6"),r("7f7f"),r("ac6a"),r("9541")),o=r("4bfb"),i={data:function(){return{ResidenceTime:0}},create:function(){},methods:{initResidenceTime:function(){var e=this;this.ResidenceTime=0,window.residenceTimeInterval&&clearInterval(window.residenceTimeInterval),window.residenceTimeInterval=setInterval(function(){e.ResidenceTime++},1e3)},computeFinish:function(){var e=document.querySelector("video");if(!e||!e.duration)return 1;var t=parseInt(e.duration/60),r=this.ResidenceTime;return t<10?r>.5*e.duration?1:0:10<t<15?r>.6*e.duration?1:0:15<t<20?r>.7*e.duration?1:0:t>20?r>.8*e.duration?1:0:void(this.videoTime=e.duration)},videoReport:function(e,t,r){var a=this;window.reportInterval&&clearInterval(window.reportInterval),this.initResidenceTime(),Object(o["h"])({orgId:this.ORGINFO.id,reportType:2,coursePackId:e,courseId:t,chapterId:r||-1,takeTime:0,videoTime:0,status:0}).then(function(e){}).catch(function(e){}),window.reportInterval=setInterval(function(){Object(o["h"])({orgId:a.ORGINFO.id,reportType:0,coursePackId:e,courseId:t,chapterId:r||-1,takeTime:60,videoTime:60,status:a.computeFinish()}).then(function(e){}).catch(function(e){})},2e4)},noVideoReport:function(e,t,r){var a=this;window.reportInterval&&clearInterval(window.reportInterval),this.initResidenceTime(),Object(o["h"])({orgId:this.ORGINFO.id,reportType:1,coursePackId:e,courseId:t,chapterId:r||-1,takeTime:0,videoTime:0,status:1}).then(function(e){}).catch(function(e){}),window.reportInterval=setInterval(function(){Object(o["h"])({orgId:a.ORGINFO.id,reportType:0,coursePackId:e,courseId:t,chapterId:r||-1,takeTime:60,videoTime:0,status:1}).then(function(e){}).catch(function(e){})},2e4)}},mounted:function(){},beforeDestroy:function(){},components:{}},d=r("635f"),u=r("6b14"),p=r("2ab5"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"course-details-sidebar chapter-list",attrs:{id:"sidebar"}},[r("ul",e._l(e.chapters,function(t,a){return r("li",{key:a,class:e.collapseIndex==a?"open":"close"},[r("div",{staticClass:"chapter",class:{active:e.activeChapterIndex.chapter==a},on:{click:function(t){e.collapseIndex==a?e.collapseIndex=-1:e.collapseIndex=a}}},[e._v("\n                "+e._s(a+1)+". "+e._s(t.name)+"\n            ")]),r("div",{staticClass:"sub-chapter-list"},[r("ul",e._l(t.sub,function(c,n){return r("li",{key:n,class:{active:e.activeChapterIndex.chapter==a&&e.activeChapterIndex.subChapter==n},on:{click:function(r){e.selectChapter(a,n,t.id,c)}}},[r("div",{staticClass:"sub-chapter"},[r("div",{staticClass:"sub-chapter-content"},[r("div",{staticClass:"top"},[0==c.vipType?r("div",{staticClass:"free"},[e._v("免费")]):e._e(),r("div",{staticClass:"title"},[e._v(e._s(a+1)+"."+e._s(n+1)+"."+e._s(c.name))])]),r("div",{staticClass:"info"},[r("span",{staticClass:"fl"},[e._v(e._s(c.studySize)+"人学过")])])])])])}))])])}))])},l=[],I=r("0ad9"),f={name:"Sidebar",props:{chapters:Array},data:function(){return{collapseIndex:0,activeChapterIndex:{chapter:0,subChapter:0}}},mounted:function(){},methods:{position:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e&&t){e+="",t+="";for(var r=0;r<this.chapters.length;r++){var a=this.chapters[r];if(a.id==e){this.collapseIndex=r,this.activeChapterIndex.chapter=r;for(var c=0;c<a.sub.length;c++){var n=a.sub[c];if(n.id==t)return void(this.activeChapterIndex.subChapter=c)}}}}},previousChapter:function(){var e=this.activeChapterIndex.chapter,t=this.activeChapterIndex.subChapter,r=this.collapseIndex;if(0!=e||0!=t){0==t?(e--,r--,t=this.chapters[e].sub.length-1):(r!=e&&(r=e),t--);var a=this.chapters[e].id,c=this.chapters[e].sub[t];this.selectChapter(e,t,a,c,r)}else this.$message("已经是第一章了")},nextChapter:function(){var e=this.activeChapterIndex.chapter,t=this.activeChapterIndex.subChapter,r=this.collapseIndex;if(e+1!=this.chapters.length||t+1!=this.chapters[e].sub.length){t==this.chapters[e].sub.length-1?(e++,r++,t=0):(r!=e&&(r=e),t++);var a=this.chapters[e].id,c=this.chapters[e].sub[t];this.selectChapter(e,t,a,c,r)}else this.$message("已经是最后一章了")},selectChapter:function(e,t,r,a){var c=this,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=this.activeChapterIndex.chapter,o=this.activeChapterIndex.subChapter;s==e&&o==t||this.$emit("selectChapter",{chapterId:r,subChapterId:a},function(r){c.activeChapterIndex.chapter=e,c.activeChapterIndex.subChapter=t,null!=n&&(c.collapseIndex=n,setTimeout(function(r){var a=document.querySelectorAll("#sidebar>ul>li"),c=a[e].querySelectorAll("ul");c[0].scroll(0,75*t)},200))})}}},v=f,C=(r("3689"),r("2877")),b=Object(C["a"])(v,h,l,!1,null,"180bef76",null);b.options.__file="Sidebar.vue";var g=b.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"course-details-sidebar chapter-list",attrs:{id:"sidebar"}},[r("ul",e._l(e.chapters,function(t,a){return r("li",{key:a,class:e.collapseIndex==a?"open":"close",on:{click:function(r){e.selectChapter(a,t)}}},[r("div",{staticClass:"chapter",class:{active:e.activeChapterIndex.chapter==a},on:{click:function(t){e.collapseIndex=a}}},[e._v("\n                "+e._s(a+1)+". "+e._s(t.name)+"\n            ")])])}))])},m=[],k={name:"Sidebar",props:{chapters:Array},data:function(){return{collapseIndex:0,activeChapterIndex:{chapter:0}}},mounted:function(){},methods:{position:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){e+="";for(var t=0;t<this.chapters.length;t++){var r=this.chapters[t];r.id==e&&(this.collapseIndex=t,this.activeChapterIndex.chapter=t)}}},previousChapter:function(){var e=this.activeChapterIndex.chapter,t=this.collapseIndex;0==e?this.$message("已经是第一章了"):(e--,t--),t!=e&&(t=e);var r=this.chapters[e];this.selectChapter(e,r,t)},nextChapter:function(){var e=this.activeChapterIndex.chapter,t=this.collapseIndex;if(e+1!=this.chapters.length){e++,t++;var r=this.chapters[e];this.selectChapter(e,r,t)}else this.$message("已经是最后一章了")},selectChapter:function(e,t){var r=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=this.activeChapterIndex.chapter;c!=e&&this.$emit("selectChapter",{chapterId:t.id},function(t){r.activeChapterIndex.chapter=e,null!=a&&(r.collapseIndex=a)})}}},y=k,x=(r("e8d6"),Object(C["a"])(y,O,m,!1,null,"04e7469b",null));x.options.__file="SidebarTwo.vue";var T=x.exports,R=r("2934"),j=(r("451f"),r("d6d3")),_=(r("fda2"),{name:"app",mixins:[s["a"],i],data:function(){return{chapters:[],course:[],chapterId:"",courseId:"",currentCourseId:"",currentChapter:"",currentChapterId:"",subChapterId:"",context:"",sub:"",packageName:"",packageId:"",videoUrlCode:"",col:"收藏",hasStudyCard:"",noLearningCard:!1,OpenLearningCard:!1,type:"",scrollTop:0,playerOptions:{width:"784",autoplay:!0,muted:!1,language:"zh-cn",playbackRates:[1,1.25,1.5,2],sources:[{type:"video/mp4",src:""}]}}},computed:{currentCourseName:function(){var e=this;if(0==this.course.length||!this.currentCourseId)return"";var t="";return this.course.forEach(function(r){r.id!=e.currentCourseId||(t=r.name)}),t},currentChapterName:function(){var e=this;if(0==this.chapters.length||!this.currentChapterId)return"";var t=this.currentCourseName;return this.chapters.forEach(function(r){r.id!=e.currentChapterId||(t=r.name)}),t}},methods:{openCard:function(){this.OpenLearningCard=!0,this.noLearningCard=!1},nextPage:function(){for(var e=this.course.filter(function(e){return 1==e.courseType}),t=[],r=0;r<e.length;r++)t.push(e[r].id+"");var a=t.indexOf(this.currentCourseId);-1!=a?this.$message("已经是最后一章了"):-1==this.chapters[0].courseType?this.$refs.sidebar.nextChapter():this.$refs.sidebarTwo.nextChapter()},prevPage:function(){for(var e=this.course.filter(function(e){return 1==e.courseType}),t=[],r=0;r<e.length;r++)t.push(e[r].id+"");var a=t.indexOf(this.currentCourseId);-1!=a?this.$message("已经是第一章了"):-1==this.chapters[0].courseType?this.$refs.sidebar.previousChapter():this.$refs.sidebarTwo.previousChapter()},success:function(){this.OpenLearningCard=!1,window.location.href="./study.html"},closeCard:function(){this.noLearningCard=!1},selectChapter:function(e,t){var r=this;e.subChapterId?0==e.subChapterId.vipType?(this.subChapterId=e.subChapterId.id,1==e.subChapterId.courseType?Object(o["a"])({chapterId:e.subChapterId.id,courseId:this.currentCourseId,packId:Object(I["e"])("id")}).then(function(a){r.context=a.contentData,r.playerOptions.sources[0].src=a.videoUrl,r.USERINFO&&(a.videoUrl?r.videoReport(r.packageId,r.currentCourseId,e.subChapterId.id):r.noVideoReport(r.packageId,r.currentCourseId,e.subChapterId.id)),0==a.isfavor?r.col="取消收藏":r.col="收藏",t(),r.currentChapterId=e.chapterId}).catch(function(e){}):Object(o["f"])({chapterId:e.subChapterId.id,packId:Object(I["e"])("id")}).then(function(a){r.context=a.context,r.playerOptions.sources[0].src=a.videoPath,r.USERINFO&&(a.videoPath?r.videoReport(r.packageId,r.currentCourseId,e.subChapterId.id):r.noVideoReport(r.packageId,r.currentCourseId,e.subChapterId.id)),0==a.isfavor?r.col="取消收藏":r.col="收藏",t(),r.currentChapterId=e.chapterId}).catch(function(e){})):this.USERINFO?this.hasStudyCard?(this.subChapterId=e.subChapterId.id,1==e.subChapterId.courseType?Object(o["a"])({chapterId:e.subChapterId.id,courseId:this.currentCourseId,packId:Object(I["e"])("id")}).then(function(a){r.USERINFO&&(a.videoUrl?r.videoReport(r.packageId,r.currentCourseId,e.subChapterId.id):r.noVideoReport(r.packageId,r.currentCourseId,e.subChapterId.id)),r.context=a.contentData,r.playerOptions.sources[0].src=a.videoUrl,0==a.isfavor?r.col="取消收藏":r.col="收藏",t(),r.currentChapterId=e.chapterId}).catch(function(e){}):Object(o["f"])({chapterId:e.subChapterId.id,packId:Object(I["e"])("id")}).then(function(a){r.context=a.context,r.playerOptions.sources[0].src=a.videoPath,r.USERINFO&&(a.videoPath?r.videoReport(r.packageId,r.currentCourseId,e.subChapterId.id):r.noVideoReport(r.packageId,r.currentCourseId,e.subChapterId.id)),0==a.isfavor?r.col="取消收藏":r.col="收藏",t(),r.currentChapterId=e.chapterId}).catch(function(e){})):Object(o["c"])({packId:this.packageId}).then(function(e){0==e?r.noLearningCard=!0:r.OpenLearningCard=!0}).catch(function(e){}):window.location.href="./login.html":this.hasStudyCard?Object(o["a"])({chapterId:e.chapterId,courseId:this.currentCourseId,packId:Object(I["e"])("id")}).then(function(a){r.context=a.contentData,r.playerOptions.sources[0].src=a.videoUrl,r.USERINFO&&(a.videoUrl?r.videoReport(r.packageId,r.currentCourseId,e.chapterId):r.noVideoReport(r.packageId,r.currentCourseId,e.chapterId)),0==a.isfavor?r.col="取消收藏":r.col="收藏",t(),r.currentChapterId=e.chapterId}).catch(function(e){}):Object(o["c"])({packId:this.packageId}).then(function(e){0==e?r.noLearningCard=!0:r.OpenLearningCard=!0}).catch(function(e){})},getChapters:function(e){var t=this;this.chapters=[];for(var r=this.course.filter(function(e){return 1==e.courseType}),a=[],c=0;c<r.length;c++)a.push(r[c].id+"");var n=a.indexOf(e);-1!=n?Object(o["a"])({chapterId:null,courseId:a[n],packId:this.packageId}).then(function(e){t.USERINFO&&(t.chapters=[],t.currentChapterId="",t.currentChapter="",e.videoUrl?t.videoReport(t.packageId,a[n],!1):t.noVideoReport(t.packageId,a[n],!1)),t.context=e.contentData,t.playerOptions.sources[0].src=e.videoUrl,0==e.isfavor?t.col="取消收藏":t.col="收藏"}).catch(function(e){}):Object(o["b"])({courseId:e,coursePackId:this.packageId}).then(function(e){t.chapters=e.chapters,t.hasStudyCard=e.studyCard,t.sub=e.chapters[0].sub.length}).catch(function(e){})},addCol:function(){var e=this;""==this.playerOptions.sources[0].src?this.videoUrlCode="1":this.videoUrlCode="0";var t=this.currentChapter||this.currentChapterId,r="0";r=t?"0":"2";var a={type:r,leveId:"0",courseId:this.currentCourseId,isVedio:this.videoUrlCode,chapterQuestionId:this.subChapterId||this.currentChapterId||"0",packageId:this.packageId};Object(R["d"])(a).then(function(t){e.col=0==t?"取消收藏":"收藏"}).catch(function(e){})},handleScroll:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=e>=30?1:0},leftLONG:function(){return document.body.clientWidth>=1200?(document.body.clientWidth-1200)/2+21:0}},mounted:function(){var e=this,t=this;window.addEventListener("scroll",this.handleScroll),document.oncontextmenu=function(e){if("VIDEO"==e.target.nodeName)return!1},this.type=Object(I["e"])("type"),this.chapterId=Object(I["e"])("chapterId"),this.courseId=Object(I["e"])("courseId"),this.packageId=Object(I["e"])("id"),this.packageName=Object(I["e"])("name"),this.packageName=decodeURI(this.packageName,"UTF-8"),1==this.type?(this.currentCourseId=this.courseId,this.currentChapterId=this.chapterId,Object(o["a"])({chapterId:this.currentChapterId,courseId:this.currentCourseId,packId:this.packageId}).then(function(r){e.context=r.contentData,e.playerOptions.sources[0].src=r.videoUrl,e.USERINFO&&(r.videoUrl?t.videoReport(e.packageId,e.currentCourseId,e.currentChapterId):t.noVideoReport(e.packageId,e.currentCourseId,e.currentChapterId)),0==r.isfavor?e.col="取消收藏":e.col="收藏"}).catch(function(e){}),Object(o["d"])({coursePackId:this.packageId}).then(function(r){e.course=r.courseList;for(var a=e.course.filter(function(e){return 1==e.courseType}),c=[],n=0;n<a.length;n++)c.push(a[n].id+"");var s=c.indexOf(e.currentCourseId);-1==s?Object(o["b"])({courseId:e.currentCourseId,coursePackId:e.packageId}).then(function(r){if(e.chapters=r.chapters,e.hasStudyCard=r.studyCard,e.sub=r.chapters[0].sub.length,0==e.sub)for(var a=function(e){var a="";r.chapters[e].id==t.chapterId&&(a=r.chapters[e],setTimeout(function(e){t.$refs.sidebarTwo.position(a.id)},100))},c=0;c<r.chapters.length;c++)a(c);else for(var n=0;n<r.chapters.length;n++)for(var s=function(a){var c="";r.chapters[n].sub[a].id==e.chapterId&&(c=r.chapters[n],setTimeout(function(r){t.$refs.sidebar.position(c.id,e.chapterId)},100))},o=0;o<r.chapters[n].sub.length;o++)s(o)}).catch(function(e){}):Object(o["a"])({chapterId:null,courseId:c[s],packId:e.packageId}).then(function(r){e.USERINFO&&(r.videoUrl?t.videoReport(e.packageId,c[s],!1):t.noVideoReport(e.packageId,c[s],!1)),e.chapters=[],e.currentChapterId="",e.currentChapter="",e.context=r.contentData,e.playerOptions.sources[0].src=r.videoUrl,0==r.isfavor?e.col="取消收藏":e.col="收藏"}).catch(function(e){})}).catch(function(e){})):Object(I["e"])("chapterId")&&Object(I["e"])("courseId")?(this.currentCourseId=this.courseId,this.currentChapterId=this.chapterId,Object(o["d"])({coursePackId:this.packageId}).then(function(r){e.course=r.courseList;for(var a=e.course.filter(function(e){return 1==e.courseType}),c=[],n=0;n<a.length;n++)c.push(a[n].id+"");var s=c.indexOf(e.currentCourseId);-1==s?(Object(o["b"])({courseId:e.courseId,coursePackId:e.packageId}).then(function(r){if(e.chapters=r.chapters,e.hasStudyCard=r.studyCard,e.sub=r.chapters[0].sub.length,0==e.sub)for(var a=function(e){var a="";r.chapters[e].id==t.chapterId&&(a=r.chapters[e],setTimeout(function(e){t.$refs.sidebarTwo.position(a.id)},100))},c=0;c<r.chapters.length;c++)a(c);else for(var n=0;n<r.chapters.length;n++)for(var s=function(a){var c="";r.chapters[n].sub[a].id==e.chapterId&&(c=r.chapters[n],setTimeout(function(r){t.$refs.sidebar.position(c.id,e.chapterId)},100))},o=0;o<r.chapters[n].sub.length;o++)s(o)}).catch(function(e){}),Object(o["a"])({chapterId:e.chapterId,courseId:e.currentCourseId,packId:e.packageId}).then(function(r){e.context=r.contentData,e.playerOptions.sources[0].src=r.videoUrl,e.USERINFO&&(r.videoUrl?t.videoReport(e.packageId,e.currentCourseId,e.chapterId):t.noVideoReport(e.packageId,e.currentCourseId,e.this.chapterId)),0==r.isfavor?e.col="取消收藏":e.col="收藏"}).catch(function(e){})):Object(o["a"])({chapterId:null,courseId:c[s],packId:e.packageId}).then(function(r){e.USERINFO&&(r.videoUrl?t.videoReport(e.packageId,c[s],!1):t.noVideoReport(e.packageId,c[s],!1)),e.chapters=[],e.currentChapterId="",e.currentChapter="",e.context=r.contentData,e.playerOptions.sources[0].src=r.videoUrl,0==r.isfavor?e.col="取消收藏":e.col="收藏"}).catch(function(e){})}).catch(function(e){})):Object(o["d"])({coursePackId:this.packageId}).then(function(r){e.course=r.courseList,e.courseId=r.courseList[0].id+"",e.currentCourseId=r.courseList[0].id+"";for(var a=e.course.filter(function(e){return 1==e.courseType}),c=[],n=0;n<a.length;n++)c.push(a[n].id+"");var s=c.indexOf(e.currentCourseId);-1==s?Object(o["b"])({courseId:e.currentCourseId,coursePackId:e.packageId}).then(function(r){e.chapters=r.chapters,e.hasStudyCard=r.studyCard;for(var a=function(a){var c="";r.chapters[a]==e.chapterId&&(c=r.chapters[a],setTimeout(function(e){t.$refs.sidebarTwo.position(c.id)},100))},c=0;c<r.chapters.length;c++)a(c);if(e.hasStudyCard)if(1==r.chapters[0].courseType)Object(o["a"])({chapterId:null,courseId:e.currentCourseId,packId:e.packageId}).then(function(r){e.USERINFO&&(r.videoUrl?t.videoReport(e.packageId,e.currentCourseId,!1):t.noVideoReport(e.packageId,e.currentCourseId,!1)),e.context=r.contentData,e.playerOptions.sources[0].src=r.videoUrl,0==r.isfavor?e.col="取消收藏":e.col="收藏"}).catch(function(e){});else{e.currentChapterId=r.chapters[0].sub[0].id,e.sub=r.chapters[0].sub.length;for(var n=0;n<r.chapters.length;n++)for(var s=function(a){var c="";r.chapters[n].sub[a].id==e.chapterId&&(c=r.chapters[n],setTimeout(function(r){t.$refs.sidebar.position(c.id,e.chapterId)},100))},i=0;i<r.chapters[n].sub.length;i++)s(i);Object(o["a"])({chapterId:null,courseId:e.currentCourseId,packId:e.packageId}).then(function(r){e.context=r.contentData,e.playerOptions.sources[0].src=r.videoUrl,e.USERINFO&&(r.videoUrl?t.videoReport(e.packageId,e.currentCourseId,!1):t.noVideoReport(e.packageId,e.currentCourseId,!1)),0==r.isfavor?e.col="取消收藏":e.col="收藏"}).catch(function(e){})}else 1==r.chapters[0].courseType?Object(o["c"])({packId:e.packageId}).then(function(t){0==t?e.noLearningCard=!0:e.OpenLearningCard=!0}).catch(function(e){}):(e.currentChapterId=r.chapters[0].sub[0].id,Object(o["b"])({courseId:e.courseId,coursePackId:e.packageId}).then(function(r){e.chapters=r.chapters,e.sub=r.chapters[0].sub.length;for(var a=0;a<r.chapters.length;a++)for(var c=function(c){var n="";r.chapters[a].sub[c].id==e.chapterId&&(n=r.chapters[a],setTimeout(function(r){t.$refs.sidebar.position(n.id,e.chapterId)},100))},n=0;n<r.chapters[a].sub.length;n++)c(n)}).catch(function(e){}),0==r.chapters[0].sub[0].vipType?Object(o["a"])({chapterId:e.currentChapterId,courseId:e.currentCourseId,packId:e.packageId}).then(function(r){e.context=r.contentData,e.playerOptions.sources[0].src=r.videoUrl,e.USERINFO&&(r.videoUrl?t.videoReport(e.packageId,e.currentCourseId,e.currentChapterId):t.noVideoReport(e.packageId,e.currentCourseId,e.currentChapterId)),0==r.isfavor?e.col="取消收藏":e.col="收藏"}).catch(function(e){}):Object(o["c"])({packId:e.packageId}).then(function(t){0==t?e.noLearningCard=!0:e.OpenLearningCard=!0}).catch(function(e){}))}).catch(function(e){}):1==r.courseList[0].vipType?Object(o["c"])({packId:e.packageId}).then(function(t){1==t?e.noLearningCard=!0:e.OpenLearningCard=!0}).catch(function(e){}):Object(o["a"])({chapterId:null,courseId:c[s],packId:e.packageId}).then(function(r){e.USERINFO&&(r.videoUrl?t.videoReport(e.packageId,c[s],!1):t.noVideoReport(e.packageId,c[s],!1)),e.chapters=[],e.context=r.contentData,e.playerOptions.sources[0].src=r.videoUrl,0==r.isfavor?e.col="取消收藏":e.col="收藏"}).catch(function(e){})}).catch(function(e){})},beforeDestroy:function(){},components:{Breadcrumb:d["a"],Sidebar:g,SidebarTwo:T,NoLearningCard:u["a"],OpenLearningCard:p["a"],videoPlayer:j["videoPlayer"]}}),U=_,w=Object(C["a"])(U,c,n,!1,null,null,null);w.options.__file="Index.vue";var S=w.exports;r("86fa"),r("b7f1"),r("b419");new a["default"]({render:function(e){return e(S)}}).$mount("#app")},"0c16":function(e,t,r){},2:function(e,t,r){e.exports=r("0014")},3689:function(e,t,r){"use strict";var a=r("0c16"),c=r.n(a);c.a},"86fa":function(e,t,r){},dd0a:function(e,t,r){},e8d6:function(e,t,r){"use strict";var a=r("dd0a"),c=r.n(a);c.a}});
//# sourceMappingURL=courseDetails.990f5e5e.js.map