<template>
    <div id="app">
        <Head activeUrl="exam" :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="main-body">
            <div class="container">
                <div class="content clearfix">
                    <div class="left">
                        <div class="l-top">
                            <div>
                                <Breadcrumb
                                        :nav="[
                            {url:'./exam.html',name:'考试',width:250},
                            {url:'javascript:;',name:examInfo.testingName,width:250}
                        ]"
                                ></Breadcrumb>
                            </div>
                            <div v-if="examInfo.status <= 0" class="exam-time">
                                <Countdown :second="examInfo.timeLength" @toggle="examInfo.timeLength--" @end="compelSubmitAnswer"></Countdown>
                            </div>
                        </div>
                        <div class="do">
                            <div class="do-top">
                                <div class="do-title">第{{ topicIndex(activeQuestionIndex) }}题/共{{ topicTotal }}题</div>
                                <div class="children-topic">
                                   <ul v-if="topics[activeQuestionIndex].newType != 1">
                                       <li :class="{active:isA3A4B1Done(i)}" @click="positioning(index)" v-for="(index,i) in topicIndex(activeQuestionIndex,true)">{{ index }}</li>
                                   </ul>
                                </div>
                                <ul class="do-action">
                                    <li @click="lookAnswer" v-if="examInfo.status > 0">查看答案</li>
                                    <li @click="previousTopic">上一题</li>
                                    <li @click="nextTopic">下一题</li>
                                </ul>
                            </div>
                            <DoTopic
                                    :isHistory="examInfo.status > 0"
                                    :topic="topics[activeQuestionIndex]"
                            ></DoTopic>
                        </div>
                    </div>
                    <div class="right">
                        <div class="r-top">
                            题目列表
                        </div>
                        <div class="checkpoint">
                            <ul>
                                <li
                                        class="li"
                                        :class="{active:activeQuestionIndex == index}"
                                        v-for="(topic,index) in topics"
                                        @click="activeQuestionIndex = index"
                                >
                                    <RectProgress :progress="rectProgress(topic)"></RectProgress>
                                    <span style="margin-left: 10px">第{{ topicIndex(index) }}题</span>
                                </li>
                            </ul>
                        </div>
                        <div style="padding: 25px">
                            <el-button @click="confirmSubmitAnswer" type="primary" style="width: 100%;"> 提交试卷 </el-button>
                        </div>
                    </div>
                </div>
            </div>
            <AnswersPopup v-model="answersPopup"
                          :topicIndex="topicIndex(activeQuestionIndex,true)"
                          :topic="topics[activeQuestionIndex]"
            ></AnswersPopup>
        </div>
        <Footer></Footer>

    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import DoTopic from '../../components/DoTopic/Dotopic.vue'
    import RectProgress from '../../components/RectProgress/RectProgress.vue'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'
    import AnswersPopup from '../../components/AnswerPopup/AnswersPopup.vue'
    import Countdown from '../../components/Countdown/Countdown.vue'
    import {commitEvaluationAnswer} from '../../api/exam.js'
    import GoodStorage from 'good-storage'
    import Config from '../../config/app.js'
    //import data from './data.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                topics:[{
                    "newType": 1,
                    "questionId": 0,
                    "analyisis": "",
                    "index": 1,
                    "typeB": 1,
                    "answer": [],
                    "questionResult": [],
                    "name": "",
                    "historyAnswer": [],
                }],//关卡的所有问题,字段只是用来初始化
                examInfo:{//关卡的信息
                    testingId:'',
                    paperId:'',
                    utpId:'',
                    timeLength:0,
                    paperSum:'',
                    testingName:0,
                    status:'', //默认-1未答过   是否显示答案
                },
                takeTime:0,//页面停留时间
                activeQuestionIndex:0,// 问题的索引
                answersPopup:false, //查看答案
            }
        },
        methods: {
            isA3A4B1Done(i){
                let topic = this.topics[this.activeQuestionIndex];
                if(3 == topic.newType){

                    if(topic.a3a4Questions[i].historyAnswer.length != 0){
                        return true;
                    }
                    return false
                }
                if(5 == topic.newType){
                    if(topic.questionArr[i].historyAnswer.length != 0){
                        return true;
                    }
                    return false
                }
            },
            compelSubmitAnswer(){

                this.submitAnswer(_=>{
                    this.$confirm('考试时间已到，已自动提交答案', '提示', {
                        confirmButtonText: '确定',
                        showCancelButton:false,
                        cancelButtonText: '',
                        type: 'warning',
                    }).then(() => {
                        window.location.href = './exam.html'
                    }).catch(() => {
                        window.location.href = './exam.html'
                    });
                });
            },
            // clearAllAnswer(){
            //     let topics = this.topics;
            //     topics.forEach((r,i)=>{
            //         if(1 == r.newType){
            //             topics[i].historyAnswer = [];
            //             return;
            //         }
            //         if(3 == r.newType){
            //             topics[i].a3a4Questions.forEach((q,a)=>{
            //                 topics[i].a3a4Questions[a].historyAnswer = [];
            //             })
            //             return;
            //         }
            //
            //         if(5 == r.newType){
            //             topics[i].questionArr.forEach((q,a)=>{
            //                 topics[i].questionArr[a].historyAnswer = [];
            //             })
            //             return;
            //         }
            //     })
            // },
            confirmSubmitAnswer(){
                this.$confirm('确认提交答案？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.submitAnswer(false);
                }).catch(() => {});
            },
            submitAnswer(done = null){

                let topics = this.topics;
                let answer = {
                    testingId:this.examInfo.testingId,
                    paperId:this.examInfo.paperId,
                    utpId:this.examInfo.utpId,
                    takeTime: this.takeTime,
                    answers: {}
                };
                topics.forEach(r=>{
                    if(1 == r.newType){
                        answer.answers[r.questionId] = r.historyAnswer.join('');
                        return;
                    }
                    if(3 == r.newType){
                        r.a3a4Questions.forEach(q=>{
                            answer.answers[q.questionId] = q.historyAnswer.join('');
                            return;
                        })
                        return;
                    }

                    if(5 == r.newType){
                        r.questionArr.forEach(q=>{
                            answer.answers[q.questionId] = q.historyAnswer.join('');
                            return;
                        })
                        return;
                    }
                })
                commitEvaluationAnswer(answer).then(r=>{
                    GoodStorage.remove(Config.storageExamInfoKey);
                    if(!done){
                        this.$message({
                            message: '试卷提交成功',
                            type: 'success'
                        });
                        setTimeout(_=>{
                            window.location.href = './exam.html'
                        },500)
                    }else {
                        done()
                    }

                }).catch(_=>{})
            },
            lookAnswer(){
                this.answersPopup = true;
            },
            positioning(domId){
                this.$nextTick(_=>{
                    let top = document.getElementById(domId).offsetTop
                    window.scrollTo(0,top - 110);
                })
            },
            previousTopic(){
                if(this.activeQuestionIndex <= 0){
                    this.$message('已经是第一题了');
                    this.activeQuestionIndex = 0;
                    return;
                }
                this.activeQuestionIndex -- ;
            },
            nextTopic(){
                let topicLength = this.topics.length;
                if(this.activeQuestionIndex >= topicLength - 1){
                    this.$message('已经是最后一题了');
                    this.activeQuestionIndex = topicLength - 1;
                    return;
                }
                this.activeQuestionIndex ++ ;
            },
            rectProgress(topic){
                if(1 == topic.newType)return (topic.historyAnswer.length) === 0 ? 0 : 100;
                let progress = 0;
                if(3 == topic.newType){
                    let a3a4Length = topic.a3a4Questions.length;
                    for (let i = 0 ; i<a3a4Length; i++ ){
                        if(topic.a3a4Questions[i].historyAnswer.length != 0){
                            progress += 100/a3a4Length;
                        }
                    }
                    return progress;
                }
                if(5 == topic.newType){

                    let b1Length = topic.questionArr.length;
                    for (let i = 0;i<b1Length;i++){

                        if(topic.questionArr[i].historyAnswer.length != 0){
                            progress += 100/b1Length;
                        }
                    }
                    return progress;
                }
                return 0;

            },
            topicIndex(index,isVal = false){
                //默认返回当前题目的索引 如 3、4~6  isVal=true 返回[3]、[4,5,6] 用

                let topic = this.topics[index];

                if(1 == topic.newType) return isVal ? [topic.index] : topic.index;

                if(3 == topic.newType){
                    let initIndex = topic.a3a4Questions[0].index;
                    if(isVal){
                        let topicIndexs = [];
                        topic.a3a4Questions.forEach(r=>{
                            topicIndexs.push(r.index)
                        })
                        return topicIndexs;
                    }
                    return initIndex + '~' + (initIndex + (topic.a3a4Questions.length - 1));
                }
                if(5 == topic.newType){
                    if(isVal){return topic.indexs}
                    return topic.indexs[0] + '~' + topic.indexs[topic.indexs.length - 1]
                }
            },
        },
        created(){
            let examInfo = GoodStorage.get(Config.storageExamInfoKey);

            if(!examInfo) {
                //alert('考试数据丢失');
                window.location.href = './exam.html';
                return;
            }
            // examInfo.topics.forEach((r,i)=>{
            //     if(1 == r.newType) {
            //         if(!examInfo.topics[i].hasOwnProperty('historyAnswer')){
            //             examInfo.topics[i].historyAnswer = []
            //             examInfo.topics[i].answer = []
            //         }
            //         return
            //     };
            //     if(3 == r.newType){
            //             r.a3a4Questions.forEach((p,i2)=>{
            //                 if(!examInfo.topics[i].a3a4Questions[i2].hasOwnProperty('historyAnswer')){
            //                     examInfo.topics[i].a3a4Questions[i2].historyAnswer = []
            //                     examInfo.topics[i].a3a4Questions[i2].answer = []
            //                 }
            //                 return
            //             })
            //             return ;
            //
            //     }
            //     if(5 == r.newType){
            //         r.questionArr.forEach((p,i2)=>{
            //             if(!examInfo.topics[i].a3a4Questions[i2].hasOwnProperty('historyAnswer')){
            //                 examInfo.topics[i].a3a4Questions[i2].historyAnswer = []
            //                 examInfo.topics[i].a3a4Questions[i2].answer = []
            //             }
            //             return
            //         })
            //         return;
            //     }
            // })

            this.topics = examInfo.topics;
            let info = examInfo.examInfo;
            this.examInfo = {
                testingId:info.testingId,
                paperId:info.paperId,
                timeLength:info.timeLength,
                paperSum:info.paperSum,
                utpId:info.utpId,
                testingName:info.testingName,
                status:info.status, //默认-1未答过   是否显示答案
            };

            if(examInfo.hasOwnProperty('takeTime')){
                this.takeTime = examInfo.takeTime
            }
            if(examInfo.hasOwnProperty('activeQuestionIndex')){
                this.activeQuestionIndex = examInfo.activeQuestionIndex
            }
        },
        mounted() {
            let self = this;
            self.takeTime = 0;
            setInterval(_=>{
                self.takeTime += 5;
                GoodStorage.set(Config.storageExamInfoKey,{
                    examInfo:self.examInfo,
                    topics:self.topics,
                    takeTime:self.takeTime,
                });
            },5000);
        },
        computed: {
            topicTotal: function () {
                return this.examInfo.paperSum
            }
        },
        beforeDestroy: function () {

        },
        components: {Breadcrumb,DoTopic,RectProgress,AnswersPopup,Countdown}
    }
</script>

