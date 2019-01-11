<template>
    <div id="app">
        <Head activeUrl="topic" :logoUrl="ORGINFO.logo" :info="USERINFO"></Head>
        <div class="main-body">
            <div class="container">
                <div class="content clearfix">
                    <div class="left">
                        <div class="l-top">
                            <Breadcrumb
                                        :nav="[
                            {url:'./index.html',name:'课程包的名字'},
                            {url:'./index.html',name:'习题集'},
                            {url:'javascript:;',name:'第11关'}
                        ]"
                            ></Breadcrumb>
                        </div>
                        <div class="do">
                            <div class="do-top">
                                <div class="do-title">第{{ topicIndex(activeQuestionIndex) }}题/共{{ topicTotal }}题</div>
                                <div class="children-topic">
                                   <ul v-if="topics[activeQuestionIndex].newType != 1">
                                       <li v-for="index in topicIndex(activeQuestionIndex,true)">{{ index }}</li>
                                   </ul>
                                </div>
                                <ul class="do-action">
                                    <li>收藏</li>
                                    <li @click="lookAnswer">查看答案</li>
                                    <li @click="previousTopic">上一题</li>
                                    <li @click="nextTopic">下一题</li>
                                </ul>
                            </div>
                            <DoTopic :topic="topics[activeQuestionIndex]"></DoTopic>
                        </div>
                    </div>
                    <div class="right">
                        <div class="r-top">
                            第11关
                        </div>
                        <div class="checkpoint">
                            <ul>
                                <!--li标签类说明 active当前的题目  >span 类说明 do已答 part答了部分 默认未答 -->
                                <li
                                        class="li"
                                        :class="{active:activeQuestionIndex == index}"
                                        v-for="(topic,index) in topics"
                                        @click="activeQuestionIndex = index"
                                >
                                    <span :class="hasAnswerClass(topic)">已答</span>
                                    第{{ topicIndex(index) }}题
                                </li>
                            </ul>
                            <el-button type="primary" style="width: 100%">提交&nbsp;&nbsp;第11关</el-button>
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
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'
    import popupAnswer from '../../components/AnswerPopup/index.js'
    import data from './data.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                topics:data,
                activeQuestionIndex:0,
            }
        },
        methods: {
            lookAnswer(){
                let topic = this.topics[this.activeQuestionIndex];
                popupAnswer(this,'ABC','afdsfsdfs');
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
            hasAnswerClass(topic){
                //说明 do已答 part答了部分 默认未答
                if(1 == topic.newType)return (topic.historyAnswer.length) === 0 ? '' : 'do';
                if(3 == topic.newType){
                    for (let i = 0;i<topic.a3a4Questions.length;i++){
                        if(topic.a3a4Questions[i].historyAnswer.length != 0){
                            return 'part'
                        }
                    }
                }
                if(5 == topic.newType){
                    for (let i = 0;i<topic.questionArr.length;i++){
                        if(topic.questionArr[i].historyAnswer.length != 0){
                            return 'part'
                        }
                    }
                }
                return '';

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
        mounted() {
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
        components: {Breadcrumb,DoTopic}
    }
</script>

