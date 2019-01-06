

<template>
    <div class="answer-popup">
        <div class="top">正确答案：{{ answer }}</div>
        <div class="answer-content" v-if="html">
            <div class="title">本章节的学习目标</div>
            <div class="html" v-html="html"></div>
        </div>
        <img @click="$msgbox.close()" class="close" src="../../assets/img/close.png" alt="">
        <!--<el-button type="primary" @click="$msgbox.close()">主要按钮</el-button>-->
    </div>
</template>

<script>
    export default {
        name: 'AnswerPopup',
        props: {
            html: String,
            answer: String,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .answer-popup-box {
        width: 514px!important;
        border-radius: 0 !important;
        padding: 0 !important;
        border: none!important;
        overflow: unset!important;


        .el-message-box__header, .el-message-box__btns {
            display: none;
        }
        .el-message-box__content{
            padding: 0;
        }
        .answer-popup {
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
                color: #2B60FF;
                font-size: 18px;
                line-height: 64px;
                padding-left: 26px;
            }
            .answer-content{
                padding: 32px 22px;
                width: 100%;
                .title{
                    font-size: 24px;
                    color: #333333;
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
