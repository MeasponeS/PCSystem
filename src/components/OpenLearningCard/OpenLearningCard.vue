<template>
    <div class="open-learning-card">
        <el-dialog
                title="提示"
                :visible.sync="value"
                custom-class="open-learning-card-dialog"
                :show-close="false"
                :close-on-click-modal="false"
                >
            <span slot="title"></span>
            <div class="dialog-content">
                <div class="title">激活课程</div>
                <el-input class="user-input" v-model="userVal.cardNo" placeholder="请输入健康产业学堂发送的卡号">
                    <span class="label" slot="prefix">卡号</span>
                </el-input>
                <el-input class="user-input" v-model="userVal.cardPassword" placeholder="请输入健康产业学堂发送的密码">
                    <span class="label" slot="prefix">密码</span>
                </el-input>
                <el-button @click="$emit('open',userVal)" type="primary" style="width: 100%;margin-top: 58px">开通</el-button>
                <p class="info">如需购买课程，请联系：{{ phone }}</p>
                <img @click="$emit('input',false)" class="close" src="../../assets/img/close.png" alt="">
            </div>

        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: 'OpenLearningCard',
        props: {
            value:Boolean,
            phone:[String , Number]
        },
        data: function () {
            return {
                userVal:{
                    cardNo:'',
                    cardPassword:''
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../assets/css/var.scss";
    .open-learning-card{
        .el-dialog__wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            .el-dialog__header{
                padding: 0;
                height: 0;
            }
            .open-learning-card-dialog{
                margin-top: 0!important;
                margin: 0;
                width: 424px;
                height: 404px;
                .el-dialog__body{
                    padding: 53px 45px;
                }
                .dialog-content{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .info{
                        font-size: 16px;
                        color: #222;
                    }
                    .title{
                        font-size: 24px;
                        color: #222;
                    }
                    .user-input{
                        margin-top: 40px;
                        .el-input__inner{
                            padding-left: 55px;
                        }
                        .label{
                            display: inline-block;
                            width: 55px;
                            line-height: 40px;
                            height: 100%;
                            color: #333333;
                        }
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
