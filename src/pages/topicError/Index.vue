<template>
    <div id="app">
        <Head activeUrl="topic" :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="main-body">
            <div class="container">
                <div class="content clearfix">
                    <div class="left">
                        <div class="l-top">
                            <Breadcrumb
                                    :nav="[
                                {url:'./topicList.html?packageId=' +topicInfo.packageId +'&courseId=' + topicInfo.courseId,name:topicInfo.courseN},
                                {url:'javascript:;',name:'错题集'}
                            ]"
                            ></Breadcrumb>
                        </div>
                        <div class="do" v-if="wrongQuestion[studyStateToggle].list.length != 0">
                            <div class="do-top">
                                <!--<div class="do-title">第{{ activeQuestionIndex +1 }}题/共{{ wrongQuestion[studyStateToggle].total }}题</div>-->
                                <div class="do-title">第{{ activeQuestionIndex +1 }}题</div>

                                <div class="children-topic">
                                    <ul v-if="topics[activeQuestionIndex].newType != 1">
                                        <li :class="{active:isA3A4B1Done(i)}"  @click="positioning(index)" v-for="(index,i) in topicIndex(activeQuestionIndex,true)">{{ index }}</li>
                                    </ul>
                                </div>
                                <ul class="do-action">
                                    <li
                                            class="mark"
                                            :class="(topics[activeQuestionIndex].learnStatus) == 1 ? 'yes':'no'"
                                            @click="learn(topics[activeQuestionIndex].wrongId)"
                                    >已学会</li>
                                    <li @click="favor()">{{ (topics[activeQuestionIndex].favor) != 0 ? '收藏':'取消收藏' }} </li>
                                    <li @click="lookAnswer">查看答案</li>
                                    <li @click="previousTopic">上一题</li>
                                    <li @click="nextTopic">下一题</li>
                                </ul>
                            </div>
                            <DoTopic
                                    :isHistory="true"
                                    :topic="topics[activeQuestionIndex]"
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
                                      :class="{active:studyStateToggle=='preStudyList'}"
                                      @click="clickStudy('preStudyList')"
                                >未学会</span>
                                <span class="line"></span>
                                <span class="tab"
                                      :class="{active:studyStateToggle=='studyList'}"
                                      @click="clickStudy('studyList')"
                                >已学会</span>
                            </div>
                        </div>
                        <div class="checkpoint" >
                            <div>
                                <ul v-if="topics.length != 0">
                                    <li
                                            class="li"
                                            :class="{active:activeQuestionIndex == index}"
                                            v-for="(topic,index) in topics"
                                            @click="activeQuestionIndex = index"
                                    >
                                        <RectProgress
                                                :progress="topic.learnStatus == 1 ? 100 : 0 "
                                                :attr="{
                                                init:{text:'未学会',color:'#31b68f',progress:0},
                                                end:{text:'已学会',color:'#31b68f',progress:100}
                                            }"
                                        ></RectProgress>
                                        <span style="margin-left: 10px">第{{ index + 1 }}题</span>
                                    </li>
                                </ul>
                                <div v-else style="width: 100%;height: 100px;line-height: 100px;text-align: center">暂无数据</div>
                            </div>
                            <el-button v-if="!wrongQuestion[studyStateToggle].isAllList" class="load-more" @click="loadMore" style="width: 100%">加载更多</el-button>

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
    import {getMyWrongQuestion,wrongQuestionLearnd} from '../../api/topic.js'
    import {userfavor} from '../../api/common.js'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                wrongQuestion:{
                    preStudyList:{
                        minId:0,//当前分页最后一条，用于加载更多时的回传
                        total:0,//总数
                        beforeIndex:0,//之前看到哪题的索引
                        isAllList:false,//是否已经加载完毕
                        list:[]
                    },//未学会
                    studyList:{
                        minId:0,
                        total:0,
                        beforeIndex:0,
                        isAllList:false,
                        list:[]
                    },//已学会
                },
                studyStateToggle:'preStudyList',
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


                    if(this.wrongQuestion.isAllList){
                        this.$message('已经是最后一题了');
                    }else {
                        this.$message('请点击加载更多数据');
                    }

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
            },
            clickStudy(key){
                this.studyStateToggle = key;


                if('studyList' == key){
                    //当前点击了已学会，先把当前的索引记录在未学会里
                    this.wrongQuestion.preStudyList.beforeIndex = this.activeQuestionIndex;
                    this.activeQuestionIndex = this.wrongQuestion.studyList.beforeIndex;
                }else {
                    this.wrongQuestion.studyList.beforeIndex = this.activeQuestionIndex;
                    this.activeQuestionIndex = this.wrongQuestion.preStudyList.beforeIndex;
                }

                let state = this.studyStateToggle;
                if(!this.wrongQuestion[state].isAllList && this.wrongQuestion[state].list.length == 0){
                    this.getPage();
                }

            },
            getPage(topicId = null){
                const loading = this.$loading({lock: true,});


                let state = this.studyStateToggle;
                let p = {
                    coursePackId:this.topicInfo.packageId,
                    courseId:this.topicInfo.courseId,
                    type:state == "studyList" ? 1 : 2,
                };
                if(topicId){
                    p.wrongMinId = topicId;
                }
                getMyWrongQuestion(p).then(r=>{
                    this.wrongQuestion[state].minId = r.wrongMinId;
                    this.wrongQuestion[state].total = r.wronTotal;;
                    this.wrongQuestion[state].isAllList = r.isAllList == 1 ? true : false;

                    this.topicInfo.courseN = r.packName;

                    this.wrongQuestion[state].list.push(...r.list);
                    loading.close()
                }).catch(_=>{
                    loading.close()
                })
            },
            loadMore(){
                this.getPage(this.wrongQuestion[this.studyStateToggle].minId)
            }
        },
        mounted() {
            this.topicInfo.packageId = getUrlInfo('packageId');
            this.topicInfo.courseId = getUrlInfo('courseId');

            this.getPage();
        },
        computed: {
            topics:function(){
                let question = this.wrongQuestion[this.studyStateToggle];
                return question.list
            },
            // topicTotal: function () {
            //     let topicLength = this.topics.length;
            //     let lastTopic = this.topics[topicLength-1];
            //     if(1 == lastTopic.newType)return lastTopic.index;
            //     if(3 == lastTopic.newType){
            //         let a3a4Length = lastTopic.a3a4Questions.length;
            //         return lastTopic.a3a4Questions[a3a4Length-1].index;
            //     }
            //     if(5 == lastTopic.newType){
            //         return lastTopic.indexs[lastTopic.indexs.length -1];
            //     }
            // }
        },
        beforeDestroy: function () {

        },
        components: {Breadcrumb,DoTopic,RectProgress,AnswersPopup,EmptyTemplate}
    }
</script>

