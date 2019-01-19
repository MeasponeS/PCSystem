<template>
    <div id="app">
        <Head activeUrl="study" :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="container-fluid main-body">
            <Carousel :position="1" />
            <div class="container index-content">
                <div class="top">
                    我的课程 <span v-if="this.userList && this.lastStudy">上次学到：{{this.lastStudy.courseName}}     {{this.lastStudy.updateTime}}</span>
                </div>
                <ul class="list">
                    <li v-for="(item,index) in userList" :key="item.packageType.id">
                        <img :src="item.packageType.coverPicUrl" alt="">
                        <div class="li-r">
                            <h2>{{item.packageType.name}}</h2>
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
                                共{{item.packageType.classHour}}课时 <span>|</span> {{item.studySize}}人已学
                            </div>
                            <div class="progress">
                                <span>目前已完成{{item.finishChapterSize}}个课时，加油！</span>
                                <el-progress class="val" :percentage="item.finishChapterSize/item.packageType.classHour" :show-text="false"></el-progress>
                            </div>
                            <div class="list-btn">
                                <div class="subMajor" @click="chooseMajor(item)" v-if="item.hasSubmajor">切换亚专业</div>
                                <el-button type="primary" @click="startLearning(item)">开始学习</el-button>
                                <el-button class="primary-btn" v-if="item.hasQuestion" @click="enterTopic">进入习题集</el-button>
                            </div>
                        </div>
                    </li>
                    <li v-for="(item,index) in orgList" :key="item.packageType.id">
                        <img :src="item.packageType.coverPicUrl" alt="">
                        <div class="li-r">
                            <h2>{{item.packageType.name}}</h2>
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
                                共{{item.packageType.classHour}}课时 <span>|</span> {{item.studySize}}人已学
                            </div>
                            <div class="progress">
                                <span>目前已完成{{item.finishChapterSize}}个课时，加油！</span>
                                <el-progress class="val" :percentage="item.finishChapterSize/item.packageType.classHour" :show-text="false"></el-progress>
                            </div>
                            <div class="list-btn">
                                <div class="subMajor" @click="chooseMajor(item)" v-if="item.hasSubmajor">切换亚专业</div>
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
        <SubMajorPopup
            :value="value"
            :subs="list"
            @closeDialog="closeDialog"
            @getId="getId"
            :isSelectedMajor="isSelectedMajor"
        >
            <template slot="choose">
                主管护师共设置护理学，内科护理、外课护理、妇产科护理、儿科护理、社区护理六个亚专业的考试护理学专业（中级）基础知识和相关专业知识考核内容相同，专业知识和专业实践能力根据报考亚专业的不同，所考核的内容不同（详见职称《考试那些事儿（中级）》）。
            </template>
        </SubMajorPopup>
    </div>
</template>

<script>
    import { courses,subMajor } from '../../api/study.js'
    import CommonMixin from '../commonMixin.js'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import SubMajorPopup from '../../components/SubMajorPopup/SubMajorPopup.vue'
    import Carousel from '../../components/Carousel/Carousel.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[],
                id:'',
                value: false,
                NoLearningCard: true,
                OpenLearningCard: true,
                lastStudy:'',
                orgList:[],
                userList:[],
                isSelectedMajor:''
            }
        },
        methods: {
            closeDialog(){
                this.value = false;
            },
            chooseMajor(item){
                this.value = true
                subMajor({coursePackId:item.packageType.id}).then(r=>{
                    this.list = r.subMajorList
                    let subMajor = r.subMajorList.filter((item)=>{
                        return item.selected == 1
                    })
                    this.isSelectedMajor = subMajor[0].packId
                }).catch(_=>{})
            },
            getId(id){
                this.id = id
            },
            enterTopic(){
                window.location.href = './topic.html'
            },
            startLearning(item){
                let packageName = encodeURI(item.packageType.name)
                if(item.hasSubmajor == 1){
                    subMajor({coursePackId:item.packageType.id}).then(r=>{
                        this.list = r.subMajorList
                        let subMajor = r.subMajorList.filter((item1)=>{
                            return item1.selected == 1
                        })  
                        window.location.href = './courseDetails.html?id=' + subMajor[0].packId+'&name=' + packageName+'&hasMajor='+'true'
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
                this.orgList = r.orgCourseInformationList;
                this.userList = r.userCourseInformationList;
            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {EmptyTemplate,SubMajorPopup,Carousel}
    }
</script>
