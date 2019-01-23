<template>
    <div id="app">
        <Head activeUrl="study" :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="container-fluid main-body">
            <Carousel :position="1" />
            <div class="container index-content">
                <div class="top">
                    我的课程 <span v-if="this.userList && this.lastStudy" @click="goLastStudy">上次学到：{{this.lastStudy.courseName}}     {{this.lastStudy.updateTime}}</span>
                </div>
                <ul class="list">
                    <li v-for="(item,index) in userList" :key="item.packageType.id">
                        <img :src="item.packageType.coverPicUrl" alt="">
                        <div class="li-r">
                            <h2>{{item.hasSubmajor == 1? subName:item.packageType.name}}</h2>
                            <div class="subMajor" @click="chooseMajor(item)" v-if="item.hasSubmajor==1">切换亚专业</div>
                            <div class="info">
                            <el-popover
                                    title=""
                                    width="474"
                                    placement="bottom-end"
                                    trigger="hover"
                            >
                                <div class="info-content">
                                    {{item.packageType.description}}
                                </div>
                                <div class="info-block" slot="reference">简介</div>
                            </el-popover>
                            </div>
                            <div class="course">
                                共{{item.chapterSize}}小节(含习题) <span>|</span> {{item.studySize}}人已学
                            </div>
                            <div class="progress">
                                <span>目前已完成{{item.finishChapterSize}}个小节，加油！</span>
                                <el-progress class="val" :percentage="computedProgress(item.finishChapterSize,item.chapterSize)" :show-text="false"></el-progress>
                            </div>
                            
                            <div class="list-btn">
                                <el-button type="primary" @click="startLearning(item)">开始学习</el-button>
                                <el-button class="primary-btn" v-if="item.hasQuestion" @click="enterTopic">进入习题集</el-button>
                            </div>
                        </div>
                    </li>
                    <li v-for="(item,index) in orgList" :key="item.packageType.id">
                        <img :src="item.packageType.coverPicUrl" alt="">
                        <div class="li-r">
                            <h2>{{item.hasSubmajor == 1? subName:item.packageType.name}}</h2>
                            <div class="subMajor" @click="chooseMajor(item)" v-if="item.hasSubmajor==1">切换亚专业</div>
                            <div class="info">
                                <el-popover
                                        title=""
                                        width="474"
                                        placement="bottom-end"
                                        trigger="hover"
                                >
                                    <div class="info-content">
                                        {{item.packageType.description}}
                                    </div>
                                    <div class="info-block" slot="reference">简介</div>
                                </el-popover>
                            </div>
                            <div class="course">
                                共{{item.chapterSize}}小节(含习题) <span>|</span> {{item.studySize}}人已学
                            </div>
                            <div class="progress">
                                <span>目前已完成{{item.finishChapterSize}}个小节，加油！</span>
                                <el-progress class="val" :percentage="computedProgress(item.finishChapterSize,item.chapterSize)" :show-text="false"></el-progress>
                            </div>
                            <div class="list-btn">
                                <el-button type="primary" @click="startLearning(item)">开始学习</el-button>
                                <el-button class="primary-btn" v-if="item.hasQuestion" @click="enterTopic">进入习题集</el-button>
                            </div>
                        </div>
                    </li>
                </ul>
                <EmptyTemplate v-if="this.orgList=='' && this.userList==''" img-key="Course" msg="当前学堂还没有安排任何课程"></EmptyTemplate>
            </div>
        </div>
        <Footer></Footer>
        <SubMajorSelect
            v-model="subMajor.show"
            :subs="subMajor.list"
            @select="selectSubMajor"
            :selectedHistoryPackId="subMajor.isSelect"
        >
        <template slot="choose">
            主管护师共设置护理学，内科护理、外课护理、妇产科护理、儿科护理、社区护理六个亚专业的考试护理学专业（中级）基础知识和相关专业知识考核内容相同，专业知识和专业实践能力根据报考亚专业的不同，所考核的内容不同（详见职称《考试那些事儿（中级）》）。
        </template>
        </SubMajorSelect>
    </div>
</template>

<script>
    import { courses,subMajor,submajor } from '../../api/study.js'
    import CommonMixin from '../commonMixin.js'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import SubMajorSelect from '../../components/SubMajorPopup/SubMajorSelect.vue'
    import Carousel from '../../components/Carousel/Carousel.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[],
                NoLearningCard: true,
                OpenLearningCard: true,
                lastStudy:'',
                orgList:[],
                userList:[],
                subName:'',
                subMajor:{
                    parenPacktId:null,//有亚专业的情况，id值
                    show:false,
                    isSelect:'',
                    list:[]
                }
            }
        },
        methods: {
            computedProgress(finishChapterSize,chapterSize){
                if(finishChapterSize && chapterSize){
                    let p = parseInt((finishChapterSize/chapterSize) * 100)
                    return  p ? p: 0;
                }
                return 0;
            },
            goLastStudy(){
                window.location.href= './courseDetails.html?chapterId='+this.lastStudy.chapterId +'&courseId=' + this.lastStudy.courseId +'&id='+this.lastStudy.coursePackId  + '&name=' + this.lastStudy.packageName
            },
            closeDialog(){
                this.value = false;
            },
            chooseMajor(item){
                subMajor({coursePackId:item.packageType.id}).then(r=>{
                    this.subMajor.list = r.subMajorList
                    let subMajor = r.subMajorList.filter((item)=>{
                        return item.selected == 1
                    })
                    if(subMajor != ''){
                        this.subName = subMajor[0].name
                        this.subMajor.isSelect = subMajor[0].packId
                    }
                }).catch(_=>{})
                this.subMajor.parenPacktId = item.packageType.id;
                this.subMajor.show = true
            },
            enterTopic(){
                window.location.href = './topic.html'
            },
            selectSubMajor(id){
                submajor({
                    parentPackId:this.subMajor.parenPacktId,
                    coursePackId:id
                }).then(r=>{
                    this.subMajor.show = false
                    window.location.href = './study.html'
                }).catch(_=>{})
            },
            startLearning(item){
                let packageName = encodeURI(item.packageType.name)
                if(item.hasSubmajor == 1){
                    subMajor({coursePackId:item.packageType.id}).then(r=>{
                        this.subMajor.list = r.subMajorList
                        let subMajor = r.subMajorList.filter((item1)=>{
                            return item1.selected == 1
                        })
                        if(subMajor.length != 0){
                            this.subMajor.isSelect = subMajor[0].packId
                            window.location.href = './courseDetails.html?id='+subMajor[0].packId+'&name=' + subMajor[0].name
                        }else {
                            this.subMajor.show = true
                            this.subMajor.parenPacktId = item.packageType.id;
                        }
                    }).catch(_=>{})
                } else {
                    if(item.lastCourseRecords){
                        window.location.href = './courseDetails.html?chapterId=' + item.lastCourseRecords.chapterId +'&courseId=' + item.lastCourseRecords.courseId + '&id='+item.packageType.id+'&name=' + packageName
                    } else {
                        window.location.href = './courseDetails.html?id=' + item.packageType.id+'&name=' + packageName
                    }
                }
            }

        },
        mounted() {
  
            courses().then(r=>{
                this.lastStudy = r.lastStudyRecord;
                this.orgList = r.orgCourseInformationList || [];
                this.userList = r.userCourseInformationList || [];
                let courseList = [...this.userList,...this.orgList]
                let courseList1 = courseList.filter((item)=>{
                    return item.hasSubmajor == 1
                })
                if(this.USERINFO){
                    subMajor({coursePackId:courseList1[0].packageType.id}).then(r=>{
                        let subMajor = r.subMajorList.filter((item)=>{
                            return item.selected == 1
                        })
                        if(subMajor != ''){
                            this.subName = subMajor[0].name
                            this.subMajor.isSelect = subMajor[0].packId
                        } else {
                            this.subName = courseList[0].packageType.name
                        }
                    }).catch(_=>{})
                } else {
                    this.subName = courseList1[0].packageType.name
                }
                
            }).catch(_=>{})
            
        },
        beforeDestroy: function () {

        },
        components: {EmptyTemplate,SubMajorSelect,Carousel}
    }
</script>
