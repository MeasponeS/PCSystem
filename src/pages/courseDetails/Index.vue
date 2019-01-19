<template>
    <div id="app">
        <Head :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="container main-body clearfix">
            <NoLearningCard v-model="noLearningCard" :hasCloseActive="hasCloseActive" :phone="ORGINFO.phone" ></NoLearningCard>
            <!--@success=""  下面组件有修改  开卡成功 报success 事件 -->
            <OpenLearningCard v-model="OpenLearningCard" :phone="ORGINFO.phone" ></OpenLearningCard>
            <div class="left">
                <div class="nav">
                    <!--{url:course.name,message:currentCourseName,login:'本章节的学习目标'}-->
                    <Breadcrumb v-if="course.length" class="lessson"
                        :nav="[
                            {url:'./study.html',name:packageName},
                            {url:'./study.html',name:currentCourseName},
                            {url:'javascript:;',name:currentChapterName?currentChapterName:currentCourseName}
                        ]"
                    ></Breadcrumb>
                    <p class="nav-act">
                        <a href="javascript:;" v-if="this.courseId" @click="addCol" >{{col}}</a>
                        <span v-if="this.courseId"></span>
                        <a href="javascript:;" v-if="this.courseId" @click="$refs.sidebar.previousChapter()">上一节</a>
                        <span v-if="this.courseId"></span>
                        <a href="javascript:;" v-if="this.courseId" @click="$refs.sidebar.nextChapter()">下一节</a>
                    </p>
                </div>
                <div class="letf-content">
                    <video
                        v-if="videoUrl != ''"
                        :src="videoUrl"
                        id="myVideo"
                        width="784"
                        height="400"
                        controls
                    ></video>
                    <p class="html-info" v-html="context"></p>
                </div>
            </div>
            <div class="right">
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
                        ref="sidebar"
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
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'
    import NoLearningCard from '../../components/NoLearningCard/NoLearningCard.vue'
    import OpenLearningCard from '../../components/OpenLearningCard/OpenLearningCard.vue'
    import Sidebar from './Sidebar.vue'
    import SidebarTwo from './SidebarTwo.vue'
    import { Loading } from 'element-ui';
    import { getUrlInfo, getUserInfo } from '../../utils/dataStorage.js'
    import { chapterContent,courseList,chapterList,getCoursePlay,checkDistribute } from '../../api/study.js'
    import { userfavor } from '../../api/common.js'
    export default {
        name: "app",
        mixins: [CommonMixin],
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
                videoUrl:'',
                videoUrlCode:'',
                col:'收藏',
                hasStudyCard:'',
                noLearningCard:false,
                OpenLearningCard:false,
                hasCloseActive:true
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
                let chapterName = '';
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

            selectChapter(data,done){
                console.log(data.subChapterId)
                if(data.subChapterId){
                    if(data.subChapterId.vipType == 0){
                        if(data.subChapterId){ // 是否有子章节
                            if(data.subChapterId.vipType == 1){ // 本小姐是否免费
                                if(this.hasStudyCard){   // 是否有学习卡
                                    this.subChapterId = data.subChapterId.id
                                    if(data.subChapterId.courseType == 1){  // 是否有章节
                                        chapterContent({
                                            chapterId:data.subChapterId.id,
                                            courseId:null
                                        }).then(r => {
                                            this.context = r.contentData
                                            this.videoUrl = r.videoUrl
                                            done();
                                            this.currentChapterId = data.chapterId;
                                        }).catch(_ => {})
                                    } else {
                                        getCoursePlay({chapterId:data.subChapterId.id}).then(r=>{
                                            this.context = r.context
                                            this.videoUrl = r.videoPath
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
                                this.subChapterId = data.subChapterId.id
                                if(data.subChapterId.courseType == 1){
                                    chapterContent({
                                        chapterId:data.subChapterId.id,
                                        courseId:null
                                    }).then(r => {
                                        this.context = r.contentData
                                        this.videoUrl = r.videoUrl
                                        done();
                                        this.currentChapterId = data.chapterId;
                                    }).catch(_ => {})
                                } else {
                                    getCoursePlay({chapterId:data.subChapterId.id}).then(r=>{
                                        this.context = r.context
                                        this.videoUrl = r.videoPath
                                        done()
                                        this.currentChapterId = data.chapterId;
                                    }).catch(_=>{})
                                }
                            }
                        } else {
                            if(this.hasStudyCard){
                                chapterContent({
                                    chapterId:data.chapterId,
                                    courseId:null
                                }).then(r => {
                                    this.context = r.contentData
                                    this.videoUrl = r.videoUrl
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
                    } else {
                        window.location.href = './login.html'
                    }
                } else {
                    if(this.hasStudyCard){
                        chapterContent({
                            chapterId:data.chapterId,
                            courseId:null
                        }).then(r => {
                            this.context = r.contentData
                            this.videoUrl = r.videoUrl
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
                if(this.videoUrl == ''){
                    this.videoUrlCode = '1'
                }else{
                    this.videoUrlCode = '0'
                }
                let submitId = this.currentChapterId || '0'
                let data = {
                    type:'0',
                    levelId:'0',
                    courseId:this.courseId,
                    isVedio:this.videoUrlCode,
                    chapterQuestionId:submitId,
                    packageId:this.packageId
                }
                userfavor(data).then(r=>{
                    if(r == 0){
                        this.col = '取消收藏'
                    } else {
                        this.col = '收藏'
                    }
                }).catch(_=>{})

            }
        },
        mounted() {
            this.chapterId = getUrlInfo('chapterId');
            this.courseId = getUrlInfo('courseId');
            this.packageId = getUrlInfo('id');
            this.packageName = getUrlInfo('name');
            this.packageName = decodeURI(this.packageName,"UTF-8")
            if(getUrlInfo('chapterId') && getUrlInfo('courseId') ){
                this.currentCourseId = this.courseId;
                this.currentChapterId = this.chapterId;
                chapterContent({
                    chapterId:this.chapterId,
                    courseId:null
                }).then(r => {
                    this.context = r.contentData
                }).catch(_ => {})
                courseList({coursePackId:this.packageId}).then(r=>{
                    this.course = r.courseList
                }).catch(_=>{})
                chapterList({courseId:this.courseId,coursePackId:this.packageId}).then(r=>{
                    this.chapters = r.chapters;
                    this.hasStudyCard = r.studyCard;
                    this.sub = r.chapters[0].sub.length
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
                            if(this.hasStudyCard){
                                if(r.chapters[0].courseType == 1){  // 下面没有子章节
                                    chapterContent({
                                        chapterId:null,
                                        courseId:this.currentCourseId
                                    }).then(r => {
                                        this.context = r.contentData
                                    }).catch(_ => {})
                                } else {  // 下面有子章节 courseType = -1
                                    this.currentChapterId = r.chapters[0].sub[0].id
                                    this.sub = r.chapters[0].sub.length
                                    chapterContent({
                                        chapterId:null,
                                        courseId:this.currentCourseId
                                    }).then(r => {
                                        this.context = r.contentData
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
                                    }).catch(_=>{})
                                    if(r.chapters[0].sub[0].vipType == 0){
                                        chapterContent({
                                            chapterId:this.currentChapterId,
                                            courseId:null
                                        }).then(r => {
                                            this.context = r.contentData
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
                                courseId:this.currentCourseId
                            }).then(r => {
                                this.context = r.contentData
                            }).catch(_ => {})
                        }
                    }
                    
                }).catch(_=>{})
                
            }


        },
        beforeDestroy: function () {
        },
        components: {Breadcrumb,Sidebar,SidebarTwo,NoLearningCard,OpenLearningCard}
    };
</script>

