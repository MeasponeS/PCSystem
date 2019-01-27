<template>
    <div id="app">
        <Head :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="container main-body clearfix">
            <NoLearningCard v-model="noLearningCard" @openCard="openCard" :hasCloseActive="true" @clickClose="closeCard" :phone="ORGINFO.phone" ></NoLearningCard>
            <!--@success=""  下面组件有修改  开卡成功 报success 事件 -->
            <OpenLearningCard v-model="OpenLearningCard" @success="success" :phone="ORGINFO.phone" ></OpenLearningCard>
            <div class="left">
                <div class="nav" :class="{navB:scrollTop == 1}" :style="'left:'+leftLONG()+'px'">
                    <!--{url:course.name,message:currentCourseName,login:'本章节的学习目标'}-->
                    <Breadcrumb v-if="course.length" class="lessson"
                        :nav="[
                            {url:'./study.html',name:packageName},
                            {url:'./study.html',name:currentCourseName},
                            {url:'javascript:;',name:currentChapterName || currentCourseName}
                        ]"
                    ></Breadcrumb>
                    <p class="nav-act">
                        <a href="javascript:;"  @click="addCol" >{{col}}</a>
                        <span ></span>
                        <a href="javascript:;"  @click="prevPage">上一节</a>
                        <span ></span>
                        <a href="javascript:;"  @click="nextPage">下一节</a>
                    </p>
                </div>
                <div class="letf-content">
                    <div 
                        class="item" 
                        v-if="playerOptions.sources[0].src"
                        id="myVideo"
                        preload
                        width="784"
                    >
                        <div class="player">
                        <video-player  
                            class="vjs-custom-skin"
                            :options="playerOptions"
                        >
                        </video-player>
                        </div>
                    </div>
                    <div class="html-info" v-html="context"></div>
                </div>
            </div>
            <div class="right" >
                <p>选择课程<span>(共{{ course.length }}门课程)</span></p>
                <div class="accordion">
                    <el-select v-model="currentCourseId" class="select-course" placeholder="请选择课程" @change="getChapters(currentCourseId)">
                        <el-option
                                v-for="item in course"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id + ''"
                            >
                        </el-option>
                    </el-select>

                    <div class="now"> <span v-if="this.chapterId"> 当前课程章节</span></div>
                    <Sidebar
                        v-if="sub != 0"
                        ref="sidebar"
                        :chapters="chapters"
                        @selectChapter="selectChapter"
                    ></Sidebar>
                    <SidebarTwo
                        v-else
                        ref="sidebarTwo"
                        :chapters="chapters"
                        @selectChapter="selectChapter"
                    ></SidebarTwo>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import report from './report.js'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'
    import NoLearningCard from '../../components/NoLearningCard/NoLearningCard.vue'
    import OpenLearningCard from '../../components/OpenLearningCard/OpenLearningCard.vue'
    import Sidebar from './Sidebar.vue'
    import SidebarTwo from './SidebarTwo.vue'
    import { Loading } from 'element-ui';
    import { getUrlInfo, getUserInfo } from '../../utils/dataStorage.js'
    import { chapterContent,courseList,chapterList,getCoursePlay,checkDistribute } from '../../api/study.js'
    import { userfavor } from '../../api/common.js'
    import '../../../node_modules/vue-video-player/src/custom-theme.css'
    import { videoPlayer } from 'vue-video-player'
    import 'video.js/dist/video-js.css'
    export default {
        name: "app",
        mixins: [CommonMixin,report],
        data: function () {
            return {
                chapters:[],
                course:[],//课程 包含的全部课程
                chapterId:'',
                courseId:'',
                currentCourseId: '',
                currentChapter:'',
                currentChapterId:'',
                subChapterId:'',
                context:'',
                sub:'',
                packageName:'',
                packageId:'',
                videoUrlCode:'',
                col:'收藏',
                hasStudyCard:'',
                noLearningCard:false,
                OpenLearningCard:false,
                type:'',
                scrollTop:0,
                playerOptions: {
                    width: '784',
                    autoplay: true,
                    muted: false,
                    language: 'zh-cn',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        // mp4
                        src: ''
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                }
            };
        },
        // currentCourseName
        computed: {
            currentCourseName: function () {
                if(this.course.length == 0 || !this.currentCourseId){
                    return '';
                }
                let courseName = '';
                this.course.forEach(r=>{
                    if(r.id == this.currentCourseId){
                        courseName = r.name;
                        return ;
                    }
                });
                return courseName;
            },
            currentChapterName:function () {
                if(this.chapters.length == 0 || !this.currentChapterId){
                    return '';
                }
                let chapterName = this.currentCourseName;
                this.chapters.forEach(r=>{
                    if(r.id == this.currentChapterId){
                        chapterName = r.name;
                        return ;
                    }
                });
                return chapterName;
            },

        },
        methods: {
            openCard(){
                this.OpenLearningCard = true;
                this.noLearningCard = false;
            },
            nextPage(){
                if(this.course[0].courseType == 1){
                    this.$message('已经是最后一章了');
                }else {
                    if(this.chapters[0].courseType == -1){
                        this.$refs.sidebar.nextChapter()
                    } else {
                        this.$refs.sidebarTwo.nextChapter()
                    }
                    
                }
            },
            prevPage(){
                if(this.course[0].courseType == 1){
                    this.$refs.sidebarTwo.previousChapter()
                    
                }else {
                    if(this.chapters[0].courseType == -1){
                        this.$refs.sidebar.previousChapter()
                    } else {
                        this.$refs.sidebarTwo.previousChapter()
                    }
                }
            },
            success(){
                this.OpenLearningCard = false;
                window.location.href = './study.html'
            },
            closeCard(){
                //window.location.href = './study.html'
                this.noLearningCard = false
            },
            selectChapter(data,done){
                if(data.subChapterId){
                    if(data.subChapterId.vipType == 0){
                        this.subChapterId = data.subChapterId.id
                        if(data.subChapterId.courseType == 1){
                            chapterContent({
                                chapterId:data.subChapterId.id,
                                courseId:this.currentCourseId,
                                packId:getUrlInfo('id')
                            }).then(r => {
                                this.context = r.contentData
                                this.playerOptions.sources[0].src = ''
                                this.playerOptions.sources[0].src = r.videoUrl
                                if(this.USERINFO){
                                    if(r.videoUrl){
                                        this.videoReport(this.packageId,this.currentCourseId,data.subChapterId.id)
                                    } else {
                                        this.noVideoReport(this.packageId,this.currentCourseId,data.subChapterId.id)
                                    }
                                }
                                
                                if(r.isfavor == 0){
                                    this.col = '取消收藏'
                                } else {
                                    this.col = '收藏'
                                }
                                done();
                                this.currentChapterId = data.chapterId;
                            }).catch(_ => {})
                        } else {
                            getCoursePlay({chapterId:data.subChapterId.id,packId:getUrlInfo('id')}).then(r=>{
                                this.context = r.context
                                this.playerOptions.sources[0].src = ''
                                this.playerOptions.sources[0].src = r.videoPath
                                if(this.USERINFO){
                                    if(r.videoPath){
                                        this.videoReport(this.packageId,this.currentCourseId,data.subChapterId.id)
                                    } else {
                                        this.noVideoReport(this.packageId,this.currentCourseId,data.subChapterId.id)
                                    }
                                }
                                
                                if(r.isfavor == 0){
                                    this.col = '取消收藏'
                                } else {
                                    this.col = '收藏'
                                }
                                done()
                                this.currentChapterId = data.chapterId;
                            }).catch(_=>{})
                        }
                    } else {
                        if(this.USERINFO){
                            if(this.hasStudyCard){   // 是否有学习卡
                                this.subChapterId = data.subChapterId.id
                                if(data.subChapterId.courseType == 1){  // 是否为视频课程
                                    chapterContent({
                                        chapterId:data.subChapterId.id,
                                        courseId:this.currentCourseId,
                                        packId:getUrlInfo('id')
                                    }).then(r => {
                                        if(this.USERINFO){
                                            if(r.videoUrl){
                                                this.videoReport(this.packageId,this.currentCourseId,data.subChapterId.id)
                                            } else {
                                                this.noVideoReport(this.packageId,this.currentCourseId,data.subChapterId.id)
                                            }
                                        }
                                        
                                        this.context = r.contentData
                                        this.playerOptions.sources[0].src = ''
                                        this.playerOptions.sources[0].src = r.videoUrl
                                        if(r.isfavor == 0){
                                            this.col = '取消收藏'
                                        } else {
                                            this.col = '收藏'
                                        }
                                        done();
                                        this.currentChapterId = data.chapterId;
                                    }).catch(_ => {})
                                } else {
                                    getCoursePlay({chapterId:data.subChapterId.id,packId:getUrlInfo('id')}).then(r=>{
                                        this.context = r.context
                                        this.playerOptions.sources[0].src = ''
                                        this.playerOptions.sources[0].src = r.videoPath
                                        if(this.USERINFO){
                                            if(r.videoPath){
                                                this.videoReport(this.packageId,this.currentCourseId,data.subChapterId.id)
                                            } else {
                                                this.noVideoReport(this.packageId,this.currentCourseId,data.subChapterId.id)
                                            }
                                        }
                                        
                                        if(r.isfavor == 0){
                                            this.col = '取消收藏'
                                        } else {
                                            this.col = '收藏'
                                        }
                                        done()
                                        this.currentChapterId = data.chapterId;
                                    }).catch(_=>{})
                                }
                            } else { // 查询是否被分配卡
                                checkDistribute({packId:this.packageId}).then(r=>{
                                    if(r == 0){
                                        this.noLearningCard = true
                                    } else{
                                        this.OpenLearningCard = true
                                    }
                                }).catch(_=>{})
                            }
                        } else {
                            window.location.href = './login.html'
                        }
                    }
                } else {
                    if(this.hasStudyCard){
                        chapterContent({
                            chapterId:data.chapterId,
                            courseId:this.currentCourseId,
                            packId:getUrlInfo('id')
                        }).then(r => {
                            this.context = r.contentData
                            this.playerOptions.sources[0].src = ''
                            this.playerOptions.sources[0].src = r.videoUrl
                            if(this.USERINFO){
                                if(r.videoUrl){
                                    this.videoReport(this.packageId,this.currentCourseId,data.chapterId)
                                } else {
                                    this.noVideoReport(this.packageId,this.currentCourseId,data.chapterId)
                                }
                            }
                            
                            if(r.isfavor == 0){
                                this.col = '取消收藏'
                            } else {
                                this.col = '收藏'
                            }
                            done();
                            this.currentChapterId = data.chapterId;
                        }).catch(_ => {})
                    } else {
                        checkDistribute({packId:this.packageId}).then(r=>{
                            if(r == 0){
                                this.noLearningCard = true
                            } else{
                                this.OpenLearningCard = true
                            }
                        }).catch(_=>{})
                    }
                }
            },
            getChapters(id){
                chapterList({courseId:id,coursePackId:this.packageId}).then(r=>{
                    this.chapters = r.chapters;
                    this.hasStudyCard = r.studyCard
                    this.sub = r.chapters[0].sub.length
                }).catch(_=>{})
            },

            addCol(){
                if(this.playerOptions.sources[0].src == ''){
                    this.videoUrlCode = '1'
                }else{
                    this.videoUrlCode = '0'
                }
                let submitId = this.subChapterId || this.chapterId
                let type = '0'
                if(!submitId){
                    type = '2'
                } else {
                    type = '0'
                }
                let data = {
                    type:type,
                    leveId:'0',
                    courseId:this.currentCourseId,
                    isVedio:this.videoUrlCode,
                    chapterQuestionId:(this.subChapterId || this.currentChapterId) || '0',
                    packageId:this.packageId
                }
                userfavor(data).then(r=>{
                    if(r == 0){
                        this.col = '取消收藏'
                    } else {
                        this.col = '收藏'
                    }
                }).catch(_=>{})
            },
            handleScroll(){
                let t = document.documentElement.scrollTop || document.body.scrollTop
                if(t>=30){
                    this.scrollTop = 1
                } else {
                    this.scrollTop = 0
                }
            },
            leftLONG(){
                if(document.body.clientWidth>=1200){
                   return ( document.body.clientWidth -1200) / 2 + 21
                }
                return 0
            },
        },
        mounted() {
            let self = this;
            window.addEventListener('scroll', this.handleScroll)
            document.oncontextmenu = function(e) {
                if(e.target.nodeName == 'VIDEO'){
                    return false
                } 
            }
            this.type = getUrlInfo('type');
            this.chapterId = getUrlInfo('chapterId');
            this.courseId = getUrlInfo('courseId') ;
            this.packageId = getUrlInfo('id');
            this.packageName = getUrlInfo('name');
            this.packageName = decodeURI(this.packageName,"UTF-8")
            
            if(this.type == 1){
                this.currentCourseId = this.courseId;
                this.currentChapterId = this.chapterId;
                chapterContent({
                    chapterId:this.currentChapterId,
                    courseId:this.currentCourseId,
                    packId:this.packageId
                }).then(r => {
                    this.context = r.contentData
                    this.playerOptions.sources[0].src = ''
                    this.playerOptions.sources[0].src = r.videoUrl
                    if(this.USERINFO){
                        if(r.videoUrl){
                            self.videoReport(this.packageId,this.currentCourseId,this.currentChapterId)
                        } else {
                            self.noVideoReport(this.packageId,this.currentCourseId,this.currentChapterId)
                        }
                    }
                    
                    if(r.isfavor == 0){
                        this.col = '取消收藏'
                    } else {
                        this.col = '收藏'
                    }
                }).catch(_ => {})
                courseList({coursePackId:this.packageId}).then(r=>{
                    this.course = r.courseList
                    if(this.course[0].courseType != 1){
                        chapterList({courseId:this.currentCourseId,coursePackId:this.packageId}).then(r=>{
                            this.chapters = r.chapters;
                            this.hasStudyCard = r.studyCard;
                            this.sub = r.chapters[0].sub.length
                            if(this.sub == 0){
                                for(let i = 0;i < r.chapters.length;i++){
                                    let have = ''
                                    if(r.chapters[i].id == self.chapterId){
                                        have = r.chapters[i]
                                        setTimeout(_=>{
                                            self.$refs.sidebarTwo.position(have.id)
                                        },100)
                                    }
                                }
                            } else {
                                for(let i = 0;i < r.chapters.length;i++){
                                    for(let j = 0;j<r.chapters[i].sub.length;j++){
                                        let have = ''
                                        if(r.chapters[i].sub[j].id == this.chapterId){
                                            have = r.chapters[i]
                                            setTimeout(_=>{
                                                self.$refs.sidebar.position(have.id ,this.chapterId)
                                            },100)
                                        }
                                    }
                                }
                            }
                            
                        }).catch(_=>{})
                    }
                }).catch(_=>{})
                
            } else if(getUrlInfo('chapterId') && getUrlInfo('courseId') ){
                this.currentCourseId = this.courseId;
                this.currentChapterId = this.chapterId;
                chapterContent({
                    chapterId:this.chapterId,
                    courseId:this.currentCourseId,
                    packId:this.packageId
                }).then(r => {
                    this.context = r.contentData
                    this.playerOptions.sources[0].src = ''
                    this.playerOptions.sources[0].src = r.videoUrl
                    if(this.USERINFO){
                        if(r.videoUrl){
                            self.videoReport(this.packageId,this.currentCourseId,this.chapterId)
                        } else {
                            self.noVideoReport(this.packageId,this.currentCourseId,this.this.chapterId)
                        }
                    }
                    
                    if(r.isfavor == 0){
                        this.col = '取消收藏'
                    } else {
                        this.col = '收藏'
                    }
                }).catch(_ => {})
                courseList({coursePackId:this.packageId}).then(r=>{
                    this.course = r.courseList
                }).catch(_=>{})
                chapterList({courseId:this.courseId,coursePackId:this.packageId}).then(r=>{
                    this.chapters = r.chapters;
                    this.hasStudyCard = r.studyCard;
                    this.sub = r.chapters[0].sub.length
                    if(this.sub == 0){
                        for(let i = 0;i < r.chapters.length;i++){
                            let have = ''
                            if(r.chapters[i].id == self.chapterId){
                                have = r.chapters[i]
                                setTimeout(_=>{
                                    self.$refs.sidebarTwo.position(have.id)
                                },100)
                            }
                        }
                    } else {
                        for(let i = 0;i < r.chapters.length;i++){
                            for(let j = 0;j<r.chapters[i].sub.length;j++){
                                let have = ''
                                if(r.chapters[i].sub[j].id == this.chapterId){
                                    have = r.chapters[i]
                                    setTimeout(_=>{
                                        self.$refs.sidebar.position(have.id ,this.chapterId)
                                    },100)
                                }
                            }
                        }
                    }
                }).catch(_=>{})
            }else{
                courseList({coursePackId:this.packageId}).then(r=>{
                    this.course = r.courseList
                    this.courseId = r.courseList[0].id +'';
                    this.currentCourseId = r.courseList[0].id +'';
                    if(r.courseList[0].courseType == 2){
                        chapterList({courseId:this.currentCourseId,coursePackId:this.packageId}).then(r=>{
                            this.chapters = r.chapters;
                            this.hasStudyCard = r.studyCard;
                            for(let i = 0;i < r.chapters.length;i++){
                                let have = ''
                                if(r.chapters[i]== this.chapterId){
                                    have = r.chapters[i]
                                    console.log(have)
                                    setTimeout(_=>{
                                        self.$refs.sidebarTwo.position(have.id)
                                    },100)
                                }
                            }
                            if(this.hasStudyCard){
                                if(r.chapters[0].courseType == 1){  // 下面没有子章节
                                    chapterContent({
                                        chapterId:null,
                                        courseId:this.currentCourseId,
                                        packId:this.packageId
                                    }).then(r => {
                                        if(this.USERINFO){
                                            if(r.videoUrl){
                                                self.videoReport(this.packageId,this.currentCourseId,false)
                                            } else {
                                                self.noVideoReport(this.packageId,this.currentCourseId,false)
                                            }
                                        }
                                        
                                        this.context = r.contentData
                                        this.playerOptions.sources[0].src = ''
                                        this.playerOptions.sources[0].src = r.videoUrl
                                        if(r.isfavor == 0){
                                            this.col = '取消收藏'
                                        } else {
                                            this.col = '收藏'
                                        }
                                    }).catch(_ => {})
                                } else {  // 下面有子章节 courseType = -1
                                    this.currentChapterId = r.chapters[0].sub[0].id
                                    this.sub = r.chapters[0].sub.length
                                    for(let i = 0;i < r.chapters.length;i++){
                                        for(let j = 0;j<r.chapters[i].sub.length;j++){
                                            let have = ''
                                            if(r.chapters[i].sub[j].id == this.chapterId){
                                                have = r.chapters[i]
                                                setTimeout(_=>{
                                                    console.log(self.$refs.sidebar)
                                                    self.$refs.sidebar.position(have.id ,this.chapterId)
                                                },100)
                                            }
                                        }
                                    }
                                    chapterContent({
                                        chapterId:null,
                                        courseId:this.currentCourseId,
                                        packId:this.packageId
                                    }).then(r => {
                                        this.context = r.contentData
                                        this.playerOptions.sources[0].src = ''
                                        this.playerOptions.sources[0].src = r.videoUrl
                                        if(this.USERINFO){
                                            if(r.videoUrl){
                                                self.videoReport(this.packageId,this.currentCourseId,false)
                                            } else {
                                                self.noVideoReport(this.packageId,this.currentCourseId,false)
                                            }
                                        }
                                       
                                        if(r.isfavor == 0){
                                            this.col = '取消收藏'
                                        } else {
                                            this.col = '收藏'
                                        }
                                    }).catch(_ => {})
                                }
                            } else {
                                if(r.chapters[0].courseType == 1){
                                    // 没有子章节 接下来判断是否免费
                                    checkDistribute({packId:this.packageId}).then(r=>{
                                        if(r == 0){
                                            this.noLearningCard = true
                                        } else{
                                            this.OpenLearningCard = true
                                        }
                                    }).catch(_=>{})
                                } else {
                                    // 有子章节 判断第一章是否免费
                                    this.currentChapterId = r.chapters[0].sub[0].id;
                                    chapterList({courseId:this.courseId,coursePackId:this.packageId}).then(r=>{
                                        this.chapters = r.chapters;
                                        this.sub = r.chapters[0].sub.length
                                        for(let i = 0;i < r.chapters.length;i++){
                                            for(let j = 0;j<r.chapters[i].sub.length;j++){
                                                let have = ''
                                                if(r.chapters[i].sub[j].id == this.chapterId){
                                                    have = r.chapters[i]
                                                    setTimeout(_=>{
                                                        console.log(self.$refs.sidebar)
                                                        self.$refs.sidebar.position(have.id ,this.chapterId)
                                                    },100)
                                                }
                                            }
                                        }
                                    }).catch(_=>{})
                                    if(r.chapters[0].sub[0].vipType == 0){
                                        chapterContent({
                                            chapterId:this.currentChapterId,
                                            courseId:this.currentCourseId,
                                            packId:this.packageId
                                        }).then(r => {
                                            this.context = r.contentData
                                            this.playerOptions.sources[0].src = ''
                                            this.playerOptions.sources[0].src = r.videoUrl
                                            if(this.USERINFO){
                                                if(r.videoUrl){
                                                    self.videoReport(this.packageId,this.currentCourseId,this.currentChapterId)
                                                } else {
                                                    self.noVideoReport(this.packageId,this.currentCourseId,this.currentChapterId)
                                                }
                                            }
                                            
                                            if(r.isfavor == 0){
                                                this.col = '取消收藏'
                                            } else {
                                                this.col = '收藏'
                                            }
                                        }).catch(_ => {})
                                    } else {
                                        checkDistribute({packId:this.packageId}).then(r=>{
                                            if(r == 0){
                                                this.noLearningCard = true
                                            } else{
                                                this.OpenLearningCard = true
                                            }
                                        }).catch(_=>{})
                                    }
                                }
                            }
                        }).catch(_=>{})
                    } else {
                        if(r.courseList[0].vipType == 1){
                            checkDistribute({packId:this.packageId}).then(r=>{
                                if(r == 1){
                                    this.noLearningCard = true
                                } else{
                                    this.OpenLearningCard = true
                                }
                            }).catch(_=>{})
                        } else {
                            chapterContent({
                                courseId:this.currentCourseId,
                                packId:this.packageId
                            }).then(r => {
                                this.context = r.contentData
                                this.playerOptions.sources[0].src = ''
                                this.playerOptions.sources[0].src = r.videoUrl
                                if(this.USERINFO){
                                    if(r.videoUrl){
                                        self.videoReport(this.packageId,this.currentCourseId,false)
                                    } else {
                                        self.noVideoReport(this.packageId,this.currentCourseId,false)
                                    }
                                }
                                
                                if(r.isfavor == 0){
                                    this.col = '取消收藏'
                                } else {
                                    this.col = '收藏'
                                }
                            }).catch(_ => {})
                        }
                    }

                }).catch(_=>{})

            }


        },
        beforeDestroy: function () {
        },
        components: {Breadcrumb,Sidebar,SidebarTwo,NoLearningCard,OpenLearningCard,videoPlayer}
    };
</script>

