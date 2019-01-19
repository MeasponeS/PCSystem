<template>
    <div id="app">
        <Head activeUrl="exam" :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="wrapper">
            <div class="container main-body" >
                <div v-if="topics.length != 0">
                    <div class="top">
                        <Breadcrumb
                                    :nav="[
                            {url:'./exam.html',name:this.statistics.testingsname},
                            {url:'javascript:;',name:'考试结果'}
                        ]"
                        ></Breadcrumb>
                    </div>
                    <div class="content">
                        <div class="left">
                            <div class="up">
                                <div class="circle">
                                    <div class="circle-left"></div>
                                    <div class="circle-right"></div>
                                    <div class="circle-bottom-left"></div>
                                    <div class="circle-bottom-right"></div>
                                </div>
                                <div class="info">
                                    <h1>{{  info.rightPer }}%</h1>
                                    <span>正确率</span>
                                </div>
                                <div class="result">
                                    <h1>恭喜，您完成了本次考试！</h1>
                                    <h3>正确：{{ info.rightCount}} 错误：{{ info.erroCount }} </h3>
                                </div>
                            </div>
                            <div class="down">
                                <div class="title">
                                    <div :class="{active:status=='all'}" @click="status='all'">全部</div>
                                    <div class="mid"></div>
                                    <div @click="status='right'" :class="{active:status=='right'}">只看正确</div>
                                    <div class="mid"></div>
                                    <div @click="status='wrong'" :class="{active:status=='wrong'}">只看错误</div>
                                </div>
                                <ul class="all clearfix">
                                    <li v-for="(item,index) in topics" @click="examHistory(index)" :key="item.questionId">
                                        <RectProgress
                                                :progress="item.erroCount"
                                                :attr="progressAttr"
                                        ></RectProgress>
                                        <span style="margin-left: 10px">第{{ topicIndex(item) }}题</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="right">
                            <h1 class="header">数据参考</h1>
                            <p>当前参与人数：{{ statistics.testSize }}人</p>
                            <p>当前正答率：{{ 55 }}%</p>
                            <p>当前及格率：{{ (statistics.passSize/statistics.testSize) * 100 }}%</p>
                            <p>当前及格人数：{{ statistics.passSize }}人</p>
                            <p>当前最高分：{{ statistics.maxScore}}分<span>共{{ statistics.maxScoreUserSize }}人</span></p>
                            <p>当前最低分：{{ statistics.maxScore }}分<span>共{{ statistics.minScoreUserSize }}人</span></p>
                            <a href="./exam.html">
                                <el-button type="primary" class="btn">完成</el-button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>

</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
    import {getEvaluationList,getEvaluationinfo} from '../../api/exam.js'
    import RectProgress from '../../components/RectProgress/RectProgress.vue'
    import {getUrlInfo} from '../../utils/dataStorage.js'
    import GoodStorage from 'good-storage'
    import Config from '../../config/app.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                status: 'all',
                progressAttr:{
                    init:{text:'正确',color:'#31b68f',progress:0},
                    end:{text:'错误',color:'#FF5555',progress:100}
                },
                list:[],
                info:{
                    topicCount:'',
                    erroCount:'',
                    rightCount:'',
                    rightPer:'',
                },
                statistics:{
                    maxScore: 0,
                    maxScoreUserSize: 0,
                    minScore: 0,
                    minScoreUserSize: 0,
                    passRate: "",
                    passSize: 0,
                    testSize: 0,
                    testingsname: "",
                    unpassSize: 0
                }
            }
        },
        methods: {
            progress(progress){
                let red = progress;
                let total = 100 ;
                let percent = red / total
                let right = document.getElementsByClassName('circle-right')[0]
                let left = document.getElementsByClassName('circle-left')[0]
                if (percent <= 0.5) {  //红色区域不超过一半
                    right.style.transform = `rotate(${percent * 360}deg)`
                } else {    //红色区域超过一半的情况，重点部分
                    right.style.transform = `rotate(180deg)`
                    right.style.transition = `opacity 0s step-end 1s, transform 1s linear` //timing-function需要设为linear来达到视觉上的平缓过渡
                    right.style.opacity = 0

                    left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
                    left.style.transform = `rotate(${percent * 360 - 180}deg)`
                }
            },
            topicIndex(item,isVal = false){
                //默认返回当前题目的索引 如 3、4~6  isVal=true 返回[3]、[4,5,6] 用
                let topic = item;
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
            examHistory(index){
              window.location.href = `./examHistory.html?type=${this.status}&index=${index}`
            },
        },
        mounted() {

            getEvaluationList({
                paperId:getUrlInfo('paperId'),
                testingId:getUrlInfo('testingId'),
                isGetHistory:1,
            }).then(r=>{
                this.list = r.questions;


                    this.info.topicCount = r.erroCount + r.rightCount,
                    this.info.erroCount = r.erroCount,
                    this.info.rightCount = r.rightCount,
                    this.info.rightPer = parseFloat(r.rightPer) * 100,


                getEvaluationinfo({testingId:getUrlInfo('testingId')}).then(s=>{
                    this.statistics = s;
                    GoodStorage.set(Config.storageExamHistoryKey,{
                        paperId:getUrlInfo('paperId'),
                        testingId:getUrlInfo('testingId'),
                        name:this.statistics.testingsname,
                        topicCount:r.erroCount + r.rightCount,
                        topics:r.questions,
                    })

                    this.progress(this.info.rightPer);
                }).catch(_=>{})
            }).catch(_=>{})


            //this.progress(99)

        },
        computed: {
            topics:function(){
                this.activeQuestionIndex = 0;
                if(this.list.length == 0) return [];
                if( 'all' == this.status)return this.list;

                if('right' == this.status ){
                    return this.list.filter(r=>{
                        return r.erroCount == 0;
                    })
                }
                if('wrong' == this.status ){
                    return this.list.filter(r=>{
                        return r.erroCount > 0;
                    })
                }

            },
        },
        beforeDestroy: function () {

        },
        components: {Breadcrumb,RectProgress}
    }
</script>

