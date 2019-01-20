<template>
    <div class="do-topic">
        <div class="do-topic-top">
            <div class="l">【{{ topic.questionType }}】</div>
            <div class="r">
                <template v-if="topic.newType == 5">
                    <div v-html="topic.name"></div>
                    <br/> <br/>
                    <span class="question-result" v-for="a in topic.questionResult">{{ a.optionName.toLowerCase() }}.{{ a.optionContent }}</span>
                </template>
                <template v-else>
                    <div v-html="topic.name"></div>
                </template>
            </div>
        </div>
        <div v-if="topic.newType == 1">
            <div class="do-topic-content has-title">
                <!--如果没有标题则不显示边框 和上边距 及背景色-->
                <div class="l"></div>
                <div class="r">
                    <Options
                            :correctAnswer="isHistory ? topic.answer :[]"
                            :options="topic.questionResult"
                            :userAnswer="topic.historyAnswer"
                            :questionId="topic.questionId"
                            @selectOption="selectOption"
                    >
                    </Options>
                </div>

            </div>
        </div>
        <div
                v-if="topic.newType == 3"
                v-for="item in topic.a3a4Questions"
                class="do-topic-content"
                :id="item.index"
        >
            <!--如果没有标题则不显示边框 和上边距 及背景色-->
            <div class="l"></div>
            <div class="r">
                <div class="title">
                    {{ item.index }}. {{ item.name }}
                </div>
                <Options
                        :correctAnswer="isHistory ? item.answer :[]"
                        :options="item.questionResult"
                        :userAnswer="item.historyAnswer"
                        :questionId="item.questionId"
                        @selectOption="selectOption"
                >
                </Options>
            </div>
        </div>
        <div
                v-if="topic.newType == 5"
                v-for="item in topic.questionArr"
                class="do-topic-content"
                :id="item.index"
        >
            <!--如果没有标题则不显示边框 和上边距 及背景色-->
            <div class="l"></div>
            <div class="r">
                <div class="title">
                    {{ item.index }}. {{ item.name }}
                </div>
                <Options
                        :correctAnswer="isHistory ? item.answer :[]"
                        :options='topic.questionResult'
                        :userAnswer="item.historyAnswer"
                        :questionId="item.questionId"
                        @selectOption="selectOption"
                >
                </Options>
            </div>
        </div>
    </div>
</template>

<script>
    import Options from './Options.vue'
    export default {
        name: 'DoTopic',
        props: {
            topic: Object,
            isHistory:{
                type:Boolean,
                default:false,
            }
        },
        methods: {
            selectOption(questionId,optionName){
                //////////////////////////////////A1A2
                if(this.topic.hasOwnProperty('questionId') && (this.topic.questionId == questionId)){
                        this.$emit("selectOption",questionId,this.getAnswer(this.topic.historyAnswer,optionName,this.topic.typeB));
                }
                ///////////////////////////////////A3A4
                if(3 == this.topic.newType){
                    this.topic.a3a4Questions.forEach(r=>{
                        if(r.questionId == questionId){
                            this.$emit("selectOption",questionId,this.getAnswer(r.historyAnswer,optionName,this.topic.typeB));
                            return
                        }
                    })
                }
                ///////////////////////////////////B
                if(5 == this.topic.newType){
                    this.topic.questionArr.forEach(r=>{
                        if(r.questionId == questionId){
                            this.$emit("selectOption",questionId,this.getAnswer(r.historyAnswer,optionName,this.topic.typeB));
                            return
                        }
                    })
                }

            },
            getAnswer(answerArr,optionName,typeB){
                if(typeB == 1){
                    //单
                   return [optionName]

                }
                if((typeB == 2) || (typeB == 4)){
                    //多
                    let index = answerArr.indexOf(optionName);
                    if(index != -1){
                        answerArr.splice(index,1);
                        return [...answerArr].sort();
                    }else {
                        return [optionName,...answerArr].sort();
                    }
                }

            }
        },
        components: {Options}
    }
</script>
<style lang="scss">
    .do-topic {
        .do-topic-top{
            width: 100%;
            padding: 25px 16px 25px 0;
            background: #F5F7F9;
            display: flex;
            border:1px solid #eee;
            .l{
                text-align: center;
                width: 77px;
                font-size: 18px;
                color: #2B60FF;
                border-right: 1px solid #eee;
            }
            .r{
                font-size: 18px;
                color: #222;
                margin-left: 12px;
                flex: 1;
                .question-result{
                    min-width: 50%;
                    margin: 8px 0;
                    display: inline-block;
                    font-size: 16px;
                }
            }
        }
        .do-topic-content{
            margin-top: 14px;
            padding: 30px 0;
            display: flex;
            background: #FCFCFC;
            border:1px solid #eee;
            &.has-title{
                background: none;
                margin-top: 0;
                border: none;
            }
            .l{
                width: 77px;
                border-right: 1px solid #eee;
            }
            .r{
                flex: 1;
                .title{
                    font-size: 18px;
                    color: #000;
                    padding: 0 35px 40px 12px;
                }
            }
        }

    }
</style>
