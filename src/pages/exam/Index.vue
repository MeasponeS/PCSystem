<template>
    <div id="app">
        <Head activeUrl="exam" :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="wrapper main-body">
            <div class="content">
                <div class="examHeader">
                    <div @click="toggleTab('opening')" :class="{active:status=='opening'}">开放中</div>
                    <div class="mid"></div>
                    <div @click="toggleTab('notOpened')" :class="{active:status=='notOpened'}">未开放</div>
                    <div class="mid"></div>
                    <div @click="toggleTab('exceed')" :class="{active:status=='exceed'}">已结束</div>
                    <span class="flag">当前您正在学习健康管理师系列课程，已完成10%，比其他学员的进度快1.1%</span>
                </div>
                <div v-show="status=='opening'">
                    <div class="courseList" v-if="examInfo.opening.list.length != 0">
                        <ul class="examList">
                            <li v-for="(item,i) in examInfo.opening.list" :key='item.id'>
                                <h1>{{item.name}}</h1>
                                <i>进行中</i>
                                <h4>{{item.testStart}}至{{item.testEnd }}</h4>
                                <h4>试题数量：{{item.paperSum}}道</h4>
                                <h5>
                                    <em>考试时长：{{item.testTime}}分钟</em>
                                    <el-button
                                        v-if="item.userTestStartTime"
                                        type="primary"
                                        @click=examDetails(item,true)
                                    >查看详情</el-button>
                                    <el-button
                                            v-else
                                            type="primary"
                                            @click=enterExam(item)
                                    >进入考场</el-button>
                                </h5>
                            </li>
                        </ul>
                        <el-button @click="loadMore()" v-if="!examInfo.opening.isAllList" class="load-more"  style="width: 100%;margin-bottom: 10px">加载更多</el-button>
                    </div>
                    <EmptyTemplate v-else msg="暂无开放中的考试" imgKey="Exam" ></EmptyTemplate>
                </div>
                <div v-show="status=='notOpened'">
                    <div class="courseList" v-if="examInfo.notOpened.list.length != 0">
                        <ul class="examList">
                            <li v-for="(item,i) in examInfo.notOpened.list" :key='item.id'>
                                <h1>{{item.name}}</h1>
                                <i>未开放</i>
                                <h4>{{item.testStart}}至{{item.testEnd }}</h4>
                                <h4>试题数量：{{item.paperSum}}道</h4>
                                <h5>
                                    <em>考试时长：{{item.testTime}}分钟</em>
                                    <el-button
                                            type="primary"
                                            @click="$message('还没有到考试开始时间')"
                                    >未开放</el-button>
                                </h5>
                            </li>
                        </ul>
                        <el-button @click="loadMore()" v-if="!examInfo.notOpened.isAllList" class="load-more"  style="width: 100%;margin-bottom: 10px">加载更多</el-button>
                    </div>
                    <EmptyTemplate v-else msg="暂无未开放的考试" imgKey="Exam" ></EmptyTemplate>
                </div>
                <div v-show="status=='exceed'">
                    <div class="courseList" v-if="examInfo.exceed.list.length != 0">
                        <ul class="examList">
                            <li v-for="(item,i) in examInfo.exceed.list" :key='item.id'>
                                <h1>{{item.name}}</h1>
                                <i class="end">已结束</i>
                                <h4>{{item.testStart}}至{{item.testEnd }}</h4>
                                <h4>试题数量：{{item.paperSum}}道</h4>
                                <h5>
                                    <em>考试时长：{{item.testTime}}分钟</em>
                                    <el-button
                                            v-if="item.userTestStartTime"
                                            type="primary"
                                            @click=examDetails(item)
                                    >查看详情</el-button>
                                    <el-button
                                            v-else
                                            type="primary"
                                            class="not"
                                    >您没有参加这场考试</el-button>
                                </h5>
                            </li>
                        </ul>
                        <el-button @click="loadMore()" v-if="!examInfo.exceed.isAllList" class="load-more"  style="width: 100%;margin-bottom: 10px">加载更多</el-button>
                    </div>
                    <EmptyTemplate v-else msg="暂无已过期的考试" imgKey="Exam" ></EmptyTemplate>
                </div>
            </div>
        </div>
        <Footer></Footer>
        <ExamRules v-model="examRules" @startExam="startExam"></ExamRules>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {getRoomListByType,getExam,getEvaluationList} from '../../api/exam.js'
    import ExamRules from '../../components/ExamRules/ExamRules.vue'
    import GoodStorage from 'good-storage'
    import Config from '../../config/app.js'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                status:'opening',
                examRules:false,
                examInfo:{
                    opening:{
                        isAllList:false,
                        maxExamId:null,
                        list:[]
                    },
                    notOpened:{
                        isAllList:false,
                        maxExamId:null,
                        list:[]
                    },
                    exceed:{
                        isAllList:false,
                        maxExamId:null,
                        list:[]
                    }
                },
                statusTypeVal:{
                    exceed:1,
                    opening:2,
                    notOpened:3,
                },
                selectExam:{
                    testingId:'',
                    paperId:''
                }
            }
        },
        methods: {
            initExam(r){
                getEvaluationList({
                    paperId:this.selectExam.paperId,
                    testingId:this.selectExam.testingId,
                    isGetHistory:-1,
                }).then(topic=>{
                    // localStorage.setItem(Config.storageExamInfoKey,JSON.stringify(
                    //     {
                    //         examInfo:{
                    //             testingId:this.selectExam.paperId,
                    //             paperId:this.selectExam.testingId,
                    //             testingName:r.hospitalPaper.paperName ,
                    //             paperSum:r.hospitalPaper.paperSum,
                    //             utpId:r.id,
                    //             timeLength:parseInt(r.hospitalPaper.timeLength) * 60,
                    //             status:-1, //默认-1未答过   是否显示答案
                    //         },
                    //         topics:topic.questions
                    //     }
                    // ))
                    GoodStorage.set(Config.storageExamInfoKey,{
                        examInfo:{
                            testingId:this.selectExam.paperId,
                            paperId:this.selectExam.testingId,
                            testingName:r.hospitalPaper.paperName ,
                            paperSum:r.hospitalPaper.paperSum,
                            utpId:r.id,
                            timeLength:parseInt(r.hospitalPaper.timeLength) * 60,
                            status:-1, //默认-1未答过   是否显示答案
                        },
                        topics:topic.questions
                    });

                    setTimeout(_=>{
                        window.location.href = './examDetails.html'
                    },200)

                }).catch(_=>{})
            },
            startExam(){

                getExam({testingId:this.selectExam.testingId}).then(r=>{
                    //进入考试，把试题存储
                    this.initExam(r);
                }).catch(_=>{
                    //this.$message('进入考试出错！');
                })
            },
            enterExam(item){
                this.selectExam.testingId = item.id
                this.selectExam.paperId = item.paperId

                this.examRules = true;
            },
            examDetails(item,isOpen = false){
                //开始是否开放
                if(isOpen){//这里需要和白讨论开放答案和开放分数的问题
                    this.$message('为保证公平公正，请于考试结束时间之后查看成绩');
                    return;
                }
                if(item.openScore != 1){
                    this.$message('成绩未开放');
                    return;
                }
                //带参数
                // testingId:this.selectExam.paperId,
                // paperId:this.selectExam.testingId,
                window.location.href = `./examResults.html?testingId=${item.id}&paperId=${item.paperId}`;

            },
            loadMore(){

                this.getList(this.examInfo[this.status].maxExamId);
            },
            toggleTab(key){
                this.status = key;
                if(
                    this.examInfo[key].list.length == 0 &&
                    this.examInfo[key].isAllList == false
                ){//当这个选项卡的列表长度为零并且从来没有请求过就拿一次数据
                    this.getList();
                }
            },


            getList(maxExamId = null){
                let p = {
                    type:this.statusTypeVal[this.status],
                };
                if(maxExamId){
                    p.maxExamId = maxExamId;
                }

                getRoomListByType(p).then(r=>{
                    this.examInfo[this.status].maxExamId = r.maxExamId;
                    this.examInfo[this.status].isAllList = r.isAllList == 1? true : false;
                    this.examInfo[this.status].list.push(...r.testList);
                }).catch(_=>{})
            }
        },
        mounted() {

            this.status = 'opening';
            this.getList();

        },
        beforeDestroy: function () {

        },
        components: {ExamRules,EmptyTemplate}
    }
</script>

