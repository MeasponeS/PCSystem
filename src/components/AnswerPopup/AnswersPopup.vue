<template>
    <el-dialog
            title=""
            :visible.sync="value"
            custom-class="answer-popup-box"
            :show-close="false"
            :close-on-click-modal="false"
    >
        <span slot="title"></span>
        <div class="dialog-content">

            <div class="answers-popup">
                <div class="top">
                    <span style="margin-right: 30px">
                        第{{ topicIndex[0] }}{{ topicIndex.length>1 ? ('~'+topicIndex[topicIndex.length-1]) :'' }}题
                    </span>
                    <div v-if="3 == topic.newType">
                        <span
                                @click="activeQuestionIndex = index"
                                class="tab "
                                :class="{active:activeQuestionIndex == index}"
                                v-for="(topic,index) in topic.a3a4Questions"
                        >{{ topic.index }}</span>
                    </div>
                    <div v-if="5 == topic.newType">
                        <span
                                @click="activeQuestionIndex = index"
                                class="tab"
                                :class="{active:activeQuestionIndex == index}"
                                v-for="(topic,index) in topic.questionArr"
                        >{{ topic.index }}</span>
                    </div>
                </div>
                <div class="answer-content"
                    v-for="(question,index) in questionArr"
                     v-show="activeQuestionIndex == index"
                >
                    <div class="title">正确答案：{{ (question.answer).join(' ') }}</div>
                    <div class="html" v-html="question.analyisis"></div>
                </div>
                <img @click="$emit('input',false)" class="close" src="../../assets/img/close.png" alt="">
                <!--<el-button type="primary" @click="$msgbox.close()">主要按钮</el-button>-->
            </div>

        </div>
    </el-dialog>

</template>

<script>
    export default {
        name: 'AnswersPopup',
        props: {
            value:Boolean,
            topicIndex:Array,
            topic: Object
        },
        data: function () {
            return {
                activeQuestionIndex:0,
            }
        },
        computed: {
            questionArr: function () {
                if(1 == this.topic.newType){return [this.topic]}
                if(3 == this.topic.newType){return this.topic.a3a4Questions}
                if(5 == this.topic.newType){return this.topic.questionArr}
            }
        },
        watch: {
            'topic': {
                handler: function () {
                    this.activeQuestionIndex = 0;
                },
                // 深度观察
                deep: true
            }
        },
        methods: {

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../assets/css/var.scss";
    .answer-popup-box{
        border-radius: 0 !important;
        padding: 0 !important;
        border: none!important;
        overflow: unset!important;
        .el-dialog__header, .el-message-box__btns {
            display: none;
        }
        .el-dialog__body{
            padding: 0;
        }
        .answers-popup {
            display: flex;
            flex-direction: column;
            align-items: center;
            //color: red;
            .close{
                cursor: pointer;
                width: 40px;
                height: 40px;
                position: absolute;
                bottom: -56px;
            }
            .top{
                width:100%;
                height:64px;
                background:rgba(245,247,249,1);
                border:1px solid rgba(213,224,255,1);
                color: #333;
                font-size: 18px;
                line-height: 64px;
                padding-left: 26px;
                display: flex;
                align-items: center;
                .tab{
                    display: inline-block;
                    width:38px;
                    cursor: pointer;
                    margin-right: 10px;
                    height:38px;
                    font-size: 16px;
                    color: #333;
                    line-height: 38px;
                    text-align: center;
                    background:#fff;
                    border:1px solid rgba(213,224,255,1);
                    border-radius:3px;
                    &.active{
                        background:$--color-primary;
                        color: #fff;
                        border:1px solid $--color-primary;
                    }
                }
            }
            .answer-content{
                padding: 32px 22px;
                width: 100%;
                .title{
                    font-size: 24px;
                    color: $--color-primary;
                }
                .html{
                    width: 100%;
                    margin-top: 23px;
                    line-height: 30px;
                    color: #333;
                    overflow: auto;
                    max-height: 448px;
                    font-size: 16px;
                    img{
                        width: 100%;
                        overflow-x: auto;
                    }
                }
            }
        }
    }
</style>
