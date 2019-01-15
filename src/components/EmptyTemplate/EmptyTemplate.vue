<template>
    <div class="empty-template">
        <div class="content_box">
            <img :src="imgs[imgKey]" alt="">
            <p>{{ msg }}</p>
        </div>
    </div>
</template>

<script>
    import Box from './img/hezi.png'
    import Exam from './img/exam.png'
    import Course from './img/course.png'
    import Load from './img/load.png'
    import Msg from './img/msg.png'
    export default {
        name: 'EmptyTemplate',
        props: {
            msg: {
                type:String,
                default:'数据为空'
            },
            imgKey:{
                type:String,
                default:'Box'
            }
        },
        data: function () {
            return {
                imgs:{
                    Box:Box,
                    Exam:Exam,
                    Course:Course,
                    Load:Load,
                    Msg:Msg,
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .empty-template {
        width: 100%;
        height: 562px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        box-shadow:0 0 6px 0 rgba(174,174,174,0.14);
        .content_box{
            text-align: center;
            p{
                margin-top: 30px;
                color: #222;
                font-size: 18px;
            }
        }
    }
</style>
