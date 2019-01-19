<template>
    <div class="exam-rules">
        <el-dialog
                title="提示"
                :visible.sync="value"
                custom-class="exam-rules-dialog"
                :show-close="false"
                :close-on-click-modal="false"
                >
            <span slot="title"></span>
            <div class="rules">
                <h1 class="rules-header">考试须知</h1>
                <div class="rules-content">

                    <h3>考场纪律</h3>
                    <p>1.考试期间请保持安静，将手机调至静音，不得大声喧哗，不得交头接耳；</p>
                    <p>2.不得携带考题，答案以及任何形式的小抄；</p>
                    <p>3.不得使用手机上网查阅资料、答案等；</p>


                    <h3>注意事项</h3>
                    <p>1.点击下方开始考试按钮，系统即开始倒计时（点击后即开始计时，退出再登录不重新计时，请等待监考老师发出开始考试指令后点击开始）；</p>
                    <p> 2.考试期间，请保持手机网络畅通，否则将影响试题加载和交卷；</p>
                    <p>3.请严格按照格式输入姓名、考场号、医院、科室等信息；</p>
                    <p>4.考场号由医院统一提供，如忘记考场号，请联系监考老师咨询；</p>
                    <p>5.请注意考试时间，超过考试时间将会自动交卷；</p>
                    <p>6.考试期间，如因操作不当导致退出（退出到登录页），可重新进入，继续答题；</p>
                    <p>7.答题完成后，请务必点击上方“交卷”完成考试，否则成绩将无法统计；</p>
                    <p>8.如遇网络不稳定，点击“交卷”异常时，再次“交卷”即可；</p>


                </div>
                <el-button  @click="$emit('input',false)" plain class="primary-btn btn btnLeft">取消</el-button>
               <el-button @click="$emit('startExam')" type="primary" class="btn btnRight">开始考试</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'ExamRules',
        props:{
            value:Boolean,
        }
    }
</script>

<style lang="scss" >
    @import '../../assets/css/var.scss';
    .exam-rules{
        .el-dialog__wrapper{
            background:rgba(251,251,251,0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            .el-dialog__header{
            padding: 0;
                height: 0;
            }
            .exam-rules-dialog{
                border-radius: 5px;
                margin-top: 0!important;
                margin: 0;
                width: 746px;
                height: 684px;
                .el-dialog__body{
                padding: 0;
                .rules{
                    margin:0;
                    text-align: center;
                    .rules-header{
                        width: 100%;
                        text-align: center;
                        font-size: 24px;
                        line-height: 80px;
                        font-weight:bold;
                        margin-top: 0;
                        color:$--color-default;
                        background: url(./img/考试通知.png) ;
                    }
                    .rules-content{
                        text-align: left;
                        font-size: 16px;
                        width: 668px;
                        height: 449px;
                        margin: 0 auto;
                        padding:39px 35px;
                        line-height: 30px;
                        overflow:auto;
                        color: #333;
                    }
                    .btn{
                        width: 200px;
                        height: 50px;
                        margin: 5px;
                        margin-top: 46px;
                    }
                    .btnLeft{
                        &:hover{
                            background: $--color-primary;
                            color: $--color-default;
                        }
                    }
                }
            }
        }
    }
    }

</style>
