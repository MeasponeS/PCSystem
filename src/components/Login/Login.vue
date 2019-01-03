<template>
    <div class="login">
        <el-dialog

                :visible="true"
                custom-class="login-dialog"
                :show-close="false"

                >
            <div class="login-c">
                <div class="top">
                    <div class="tab" @click="active = 'password'">
                        <span :class="{active:active== 'password'}">密码登录</span>
                    </div>
                    <div class="tab" @click="active = 'msg'">
                        <span :class="{active:active=='msg'}">短信登录</span>
                    </div>
                </div>
                <div v-show="active == 'password'">
                    <div class="login-input">
                        <el-input v-model="passwordInfo.phone" placeholder="手机号"></el-input>
                        <el-input v-model="passwordInfo.password"
                                  type="password"
                                  placeholder="密码"></el-input>
                    </div>
                </div>
                <div v-show="active == 'msg'">
                    <div class="login-input">
                        <el-input
                                v-model="msgInfo.phone"
                                placeholder="手机号"
                        >
                            <span class="get-mag" slot="suffix">获取验证码</span>
                        </el-input>
                        <el-input v-model="msgInfo.msg" placeholder="验证码"></el-input>
                    </div>
                </div>
                <el-button type="primary" style="width:100%;border-radius: 0;margin-top: 30px">登录</el-button>
                忘记密码
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            showLogin: {
                type:Boolean,
                defaults:true,
            }
        },
        data: function () {
            return {
                active:'password',
                passwordInfo:{
                    phone:'',
                    password:'',
                },
                msgInfo:{
                    phone:'',
                    msg:'',
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../assets/css/var.scss";
    .login{
        .el-dialog__wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            .login-dialog{
                padding: 26px;
                margin-top: 0!important;
                width: 450px;
                height: 524px;
                margin: 0;
                border-radius: 0;
                .login-c{
                    .top{
                        height: 70px;
                        width: 100%;
                        border-bottom: 1px solid rgba(43,96,255,1);;
                        display: flex;
                        .tab{
                            text-align: center;
                            line-height: 70px;
                            height: 100%;
                            flex: 1;
                            span{
                                display: inline-block;
                                height: 100%;
                                font-size: 20px;
                                color: #333;
                                cursor: pointer;
                                &.active,&:hover{
                                    color: $--color-primary;
                                    border-bottom: 2px solid $--color-primary;
                                }
                            }
                        }
                    }
                    .login-input{
                        .el-input{
                            margin-top: 30px;
                        }
                        .get-mag{
                            position: relative;
                            top: 13px;
                            cursor: pointer;
                            color: $--color-primary;
                        }
                    }
                }
            }
        }
    }

</style>
