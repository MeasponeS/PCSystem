<template>
    <div id="app">
        <Head activeUrl="exam" :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="main-body">
            <div class="container">
                <div class="content clearfix">
                    <div class="left">
                        <div class="l-top">
                            <Breadcrumb
                                    :nav="[
                                {url:'./exam.html',name:'考试',width:250},
                                {url:`./examResults.html?testingId=${examInfo.testingId}&paperId=${examInfo.paperId}`,name:examInfo.name},
                                {url:'javascript:;',name:'详情'}
                            ]"
                            ></Breadcrumb>
                        </div>
                        <div class="do" v-if="topics.length != 0">
                            <div class="do-top">
                                <div class="do-title">第{{ topicIndex(activeQuestionIndex) }}题/共 000 题</div>
                                <div class="children-topic">
                                    <ul v-if="topics[activeQuestionIndex].newType != 1">
                                        <li @click="positioning(index)" v-for="index in topicIndex(activeQuestionIndex,true)">{{ index }}</li>
                                    </ul>
                                </div>
                                <ul class="do-action">
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
                            <AnswersPopup v-model="answersPopup"
                                          :topicIndex="topicIndex(activeQuestionIndex,true)"
                                          :topic="topics[activeQuestionIndex]"
                            ></AnswersPopup>
                        </div>
                        <EmptyTemplate msg="暂无习题集" v-else></EmptyTemplate>
                    </div>
                    <div class="right">
                        <div class="r-top">
                            <div>
                                列表
                            </div>
                            <div class="toggle">
                                <span class="tab"
                                      :class="{active:type=='all'}"
                                      @click="clickStudy('all')"
                                >全部</span>
                                <span class="line"></span>
                                <span class="tab"
                                      :class="{active:type=='right'}"
                                      @click="clickStudy('right')"
                                >只看正确</span>
                                <span class="line"></span>
                                <span class="tab"
                                      :class="{active:type=='wrong'}"
                                      @click="clickStudy('wrong')"
                                >只看错误</span>

                            </div>
                        </div>
                        <div class="checkpoint" >
                            <ul v-if="topics.length != 0">
                                <li
                                        class="li"
                                        :class="{active:activeQuestionIndex == index}"
                                        v-for="(topic,index) in topics"
                                        :key="topic.questionId"
                                        @click="activeQuestionIndex = index"
                                >
                                    <RectProgress
                                            :progress="topic.erroCount"
                                            :attr="{
                                                init:{text:'正确',color:'#31b68f',progress:0},
                                                end:{text:'错误',color:'#FF5555',progress:100}
                                            }"
                                    ></RectProgress>
                                    <span style="margin-left: 10px">第{{ topicIndex(index) }}题</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import GoodStorage from 'good-storage'
    import Config from '../../config/app.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                type:'all',
                list:[],
                beforeIndex:{
                    all:0,
                    right:0,
                    wrong:0,
                },
                activeQuestionIndex:0,
                answersPopup:false,
                examInfo:{
                    paperId:'',
                    testingId:'',
                    name:'xxx考试',
                },
            }
        },
        methods: {
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
            clickStudy(key){
                this.beforeIndex[this.type] = this.activeQuestionIndex;
                this.type = key;
            },
        },
        mounted() {


        },

        computed: {
            topics:function(){

                this.activeQuestionIndex = this.beforeIndex[this.type];

                if(this.list.length == 0) return [];
                if( 'all' == this.type)return this.list;

                if('right' == this.type ){
                    return this.list.filter(r=>{
                        return r.erroCount == 0;
                    })
                }
                if('wrong' == this.type ){
                    return this.list.filter(r=>{
                        return r.erroCount > 0;
                    })
                }
            },
        },
        created(){
            let Info = GoodStorage.get(Config.storageExamHistoryKey);
            if(!Info) {
                window.back();
                return;
            }
            this.examInfo.paperId = Info.paperId;
            this.examInfo.testingId = Info.testingId;
            this.examInfo.name = Info.name;

            this.list = Info.topics;

            this.type = getUrlInfo('type');

            this.beforeIndex[this.type] = getUrlInfo('index');

        },
        components: {Breadcrumb,DoTopic,RectProgress,AnswersPopup,EmptyTemplate}
    }
</script>

