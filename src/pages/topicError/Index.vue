<template>
    <div id="app">
        <Head activeUrl="topic" :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="main-body" >
            <div class="container" v-if="topics.length != 0">
                <div class="content clearfix">
                    <div class="left">
                        <div class="l-top">
                            <Breadcrumb
                                    :nav="[
                                {url:'./topic.html',name:topicInfo.courseN,width:250},
                                {url:`./topicList.html?packageId=${topicInfo.packageId}&courseId=${topicInfo.courseId}`,name:'习题集'},
                                {url:'javascript:;',name:'错题集'}
                            ]"
                            ></Breadcrumb>
                        </div>
                        <div class="do">
                            <div class="do-top">
                                <div class="do-title">第{{ topicIndex(activeQuestionIndex) }}题/共{{ topicTotal }}题</div>
                                <div class="children-topic">
                                   <ul v-if="topics[activeQuestionIndex].newType != 1">
                                       <li @click="positioning(index)" v-for="index in topicIndex(activeQuestionIndex,true)">{{ index }}</li>
                                   </ul>
                                </div>
                                <ul class="do-action">
                                    <li
                                            class="mark"
                                            :class="(topics[activeQuestionIndex].learnStatus) == 1 ? 'yes':'no'"
                                            @click="learn(topics[activeQuestionIndex].wrongId)"
                                    >{{ (topics[activeQuestionIndex].learnStatus) == 1 ? '已学会':'未学会' }}</li>
                                    <li @click="favor()">{{ (topics[activeQuestionIndex].favor) != 0 ? '收藏':'取消收藏' }} </li>
                                    <li @click="lookAnswer">查看答案</li>
                                    <li @click="previousTopic">上一题</li>
                                    <li @click="nextTopic">下一题</li>
                                </ul>
                            </div>
                            <DoTopic
                                    :isHistory="true"
                                    :topic="topics[activeQuestionIndex]"
                                    @selectOption="selectOption"
                            ></DoTopic>
                        </div>
                    </div>
                    <div class="right">
                        <div class="r-top">
                            <div>
                                列表
                            </div>
                            <div class="toggle">
                                <span class="tab"
                                      :class="{active:studyStateToggle=='preStudyList'}"
                                >未学会</span>
                                <span class="line"></span>
                                <span class="tab"
                                      :class="{active:studyStateToggle=='studyList'}"
                                >已学会</span>
                            </div>
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
    import {getUrlInfo} from '../../utils/dataStorage.js'
    import {getMyWrongQuestion,wrongQuestionLearnd} from '../../api/topic.js'
    import {userfavor} from '../../api/common.js'
    //import data from './data.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                wrongQuestion:{
                    wronTotal:'0',
                    studyList:[],
                    preStudyList:[]
                },
                studyStateToggle:'preStudyList',
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
                activeQuestionIndex:0,
                answersPopup:false,
                topicInfo:{//关卡的信息
                    packageId:'',
                    courseId:'',
                    courseN:'',
                },
            }
        },
        methods: {
            // submitAnswer(){
            //     let topics = this.topics;
            //     let answer = {
            //         "levelId": this.topicInfo.levelId,
            //         "takeTime": this.takeTime,
            //         "coursePackId": this.topicInfo.packageId,
            //         "courseId":this.topicInfo.courseId,
            //         "answers": {}
            //     };
            //
            //     topics.forEach(r=>{
            //         if(1 == r.newType){
            //             answer.answers[r.questionId] = r.historyAnswer.join('');
            //             return;
            //         }
            //         if(3 == r.newType){
            //             r.a3a4Questions.forEach(q=>{
            //                 answer.answers[q.questionId] = q.historyAnswer.join('');
            //                 return;
            //             })
            //             return;
            //         }
            //
            //         if(5 == r.newType){
            //             r.questionArr.forEach(q=>{
            //                 answer.answers[q.questionId] = q.historyAnswer.join('');
            //                 return;
            //             })
            //             return;
            //         }
            //     })
            //
            //
            //
            //     // commitQuestionAnswer(answer).then(r=>{
            //     //     console.log(r);
            //     // }).catch(_=>{})
            // },
            lookAnswer(){
                this.answersPopup = true;
            },
            positioning(domId){
                this.$nextTick(_=>{
                    let top = document.getElementById(domId).offsetTop
                    window.scrollTo(0,top - 10);
                })
            },
            selectOption(questionId,answer){
                let thisTopic = this.topics[this.activeQuestionIndex];
                //////////////////////////////////A1A2
                if(thisTopic.hasOwnProperty('questionId') && (thisTopic.questionId == questionId)){
                    thisTopic.historyAnswer = answer;
                    return;
                }
                ///////////////////////////////////A3A4
                if(3 == thisTopic.newType){
                    thisTopic.a3a4Questions.forEach((r,i)=>{
                        if(r.questionId == questionId){
                            thisTopic.a3a4Questions[i].historyAnswer = answer;
                            return
                        }
                    });
                    return;
                }
                ///////////////////////////////////B
                if(5 == thisTopic.newType){
                    thisTopic.questionArr.forEach((r,i)=>{
                        if(r.questionId == questionId){
                            thisTopic.questionArr[i].historyAnswer = answer;
                            return
                        }
                    });
                    return;
                }
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
            favor(){
                let thisTopic = this.topics[this.activeQuestionIndex];
                userfavor({
                    type:1,
                    courseId:this.topicInfo.courseId,
                    leveId:thisTopic.levelId,
                    isVedio:1,
                    packageId:this.topicInfo.packageId,
                    chapterQuestionId:thisTopic.questionId
                }).then(r=>{
                    thisTopic.favor = r;
                }).catch(_=>{})
            },
            learn(id){
                let thisTopic = this.topics[this.activeQuestionIndex];
                wrongQuestionLearnd({
                    wrongId:id
                }).then(r=>{
                    thisTopic.learnStatus = r;
                }).catch(_=>{})
            }
        },
        mounted() {
            this.topicInfo.packageId = getUrlInfo('packageId');
            this.topicInfo.courseId = getUrlInfo('courseId');

            getMyWrongQuestion({
                coursePackId:getUrlInfo('packageId'),
                courseId:getUrlInfo('courseId'),
            }).then(r=>{
                this.wrongQuestion = r;
                this.topicInfo.courseN = r.packName;

                this.studyStateToggle = 'preStudyList';
                this.topics = r.preStudyList;
            }).catch(_=>{})
        },
        computed: {

            topicTotal: function () {
                let topicLength = this.topics.length;
                let lastTopic = this.topics[topicLength-1];
                if(1 == lastTopic.newType)return lastTopic.index;
                if(3 == lastTopic.newType){
                    let a3a4Length = lastTopic.a3a4Questions.length;
                    return lastTopic.a3a4Questions[a3a4Length-1].index;
                }
                if(5 == lastTopic.newType){
                    return lastTopic.indexs[lastTopic.indexs.length -1];
                }

            }
        },
        beforeDestroy: function () {

        },
        components: {Breadcrumb,DoTopic,RectProgress,AnswersPopup}
    }
</script>

