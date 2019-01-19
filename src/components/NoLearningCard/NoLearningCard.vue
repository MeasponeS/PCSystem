<template>
    <div class="no-learning-card">
        <el-dialog
                title="提示"
                :visible.sync="value"
                custom-class="no-learning-card-dialog"
                :show-close="false"
                :close-on-click-modal="false"
                >
            <span slot="title"></span>
            <div class="dialog-content">
                <img class="kf" src="./img/kf.png" alt="">
                <p class="info">
                    您还没有获得学习卡，请联系客服进行购买
                    <br>
                    联系电话：{{ phone }}
                </p>
                <el-button @click="clickClose" type="primary" style="width: 100%">完成</el-button>
            </div>

        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: 'noLearningCard',
        props: {
            value:Boolean,
            phone:[String , Number],
            hasCloseActive:{
                type:Boolean,
                default:false,
            }
        },
        methods:{
            clickClose(){
                if(this.hasCloseActive){
                    this.$emit('clickClose',false);
                }else{
                    this.$emit('input',false)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../assets/css/var.scss";
    .no-learning-card{
        .el-dialog__wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            .el-dialog__header{
                padding: 0;
                height: 0;
            }
            .no-learning-card-dialog{
                margin-top: 0!important;
                margin: 0;
                width: 424px;
                height: 404px;
                .el-dialog__body{
                    padding: 48px 20px;
                }
                .dialog-content{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .kf{
                        width: 178px;
                        height: 138px;
                    }
                    .info{
                        line-height: 36px;
                        text-align: center;
                        color: #333;
                        font-size: 20px;
                        margin: 34px 0;
                    }
                    .close{
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        position: absolute;
                        bottom: -56px;
                    }
                }

            }
        }

    }
</style>
