<template>
    <div id="app">
        <Head></Head>
        <div class="container main-body">
            <div class="login-c">
                <div class="top">
                    <div class="tab" @click="active = 'password'">
                        <span :class="{active:active == 'password'}">密码登录</span>
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
                <a href="" class="forget-password">忘记密码</a>
                <div class="protocol">
                    <span class="radio" :class="{active:protocolActive}" @click="protocolActive = !protocolActive"></span>
                    <span>我已阅读并接受《用户协议》</span>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
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
                },
                protocolActive:true,
            }
        },
        methods: {},
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>

