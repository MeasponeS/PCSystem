<template>
    <div id="app">
        <Head :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="container main-body clearfix">
            <!-- <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button> -->
            <div class="left">
                <div class="nav">
                    <!--{url:course.name,message:currentCourseName,login:'本章节的学习目标'}-->
                    <Breadcrumb class="lessson"
                        :nav="[
                            {url:'./index.html',name:packageName},
                            {url:'./index.html',name:currentCourseName},
                            {url:'javascript:;',name:currentChapterName}
                        ]"
                    ></Breadcrumb>
                    <p class="nav-act">
                        <a href="javascript:;">收藏</a>
                        <span></span>
                        <a href="javascript:;" @click="$refs.sidebar.previousChapter()">上一节</a>
                        <span></span>
                        <a href="javascript:;" @click="$refs.sidebar.nextChapter()">下一节</a>
                    </p>
                </div>
                <div class="letf-content">
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
                                :value="item.id+''"
                            >
                        </el-option>
                    </el-select>

                    <div class="now">当前课程章节</div>
                    <Sidebar 
                        v-if="this.chapters[0].sub.length"
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
    import Sidebar from './Sidebar.vue'
    import SidebarTwo from './SidebarTwo.vue'
    import { Loading } from 'element-ui';
    import { getUrlInfo } from '../../utils/dataStorage.js'
    import { chapterContent,courseList,chapterList } from '../../api/study.js'
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
                context:'',
                packageName:'',
                packageId:''
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
            // lastChapter(){
            //     this.$refs.sidebar.lastChapter();
            // },
            // nextChapter(){
            //
            // },
            selectChapter(data,done){
                if(data.subChapterId){
                    chapterContent({
                        chapterId:data.subChapterId,
                        courseId:null
                    }).then(r => {
                        this.context = r.contentData
                        done();
                        this.currentChapterId = data.chapterId;
                    }).catch(_ => {})
                } else {
                    chapterContent({
                        chapterId:data.chapterId,
                        courseId:null
                    }).then(r => {
                        this.context = r.contentData
                        done();
                        this.currentChapterId = data.chapterId;
                    }).catch(_ => {})
                }
                
            },
            getChapters(id){
                chapterList({courseId:id,coursePackId:this.packageId}).then(r=>{
                    this.chapters = r.chapters;
                }).catch(_=>{})
            }
        },
        mounted() {
            this.chapterId = getUrlInfo('chapterId');
            this.courseId = getUrlInfo('courseId');
            this.packageId = getUrlInfo('id');
            this.packageName = getUrlInfo('name');
            this.packageName = decodeURI(this.packageName,"UTF-8")
            this.currentCourseId = this.courseId;
            this.currentChapterId = this.chapterId;
            chapterContent({
                chapterId:this.chapterId,
                courseId:this.courseId
            }).then(r => {
                this.context = r.contentData
            }).catch(_ => {})
            courseList({coursePackId:this.packageId}).then(r=>{
                this.course = r.courseList
            }).catch(_=>{})
            chapterList({courseId:this.courseId,coursePackId:this.packageId}).then(r=>{
                this.chapters = r.chapters;
            }).catch(_=>{})
        },
        beforeDestroy: function () {
        },
        components: {Breadcrumb,Sidebar,SidebarTwo}
    };
</script>

