<template>
    <div id="app">
        <Head :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="back container-fluid main-body ">
            <div class="content">
                <h1>注册</h1>
                <h2></h2>
                <input type="text" placeholder="手机号" v-model="mobile">
                <input type="text" placeholder="验证码" class="input1" v-model="msg">
                <a href="##" @click="getCode">{{ this.countDown != initCountDown ? this.countDown : '获取验证码' }}</a>
                <input type="password" placeholder="设置密码不少于8位" class="input2" v-model="password" >
                <el-button type="primary" class="button" @click="checkRegister">注册</el-button>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import Config from '../../config/app.js'
    import {sendSMS,register} from '../../api/auth.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                mobile:'',
                msg:'',
                password:'',
                countDown:Config.countDown,
                initCountDown:Config.countDown,
            }
        },
        methods: {
            getCode() {
                if((this.mobile).length != 11) {
                    this.$message('请填写正确的手机号');
                    return;
                }
                if(this.countDown < 60) return;
                sendSMS({phone:this.mobile,type:1}).then((r) => {
                    console.log(r);
                    window.SMS = setInterval(() => {
                        if(this.countDown <= 0) {
                            clearInterval(window.SMS);
                            this.countDown = Config.countDown;
                            return;
                        }
                        this.countDown --
                    }, 1000)
                }).catch((err) => {})
            },

            checkRegister(){
                let mobile = this.mobile;
                let msg = this.msg;
                let password = this.password;
                if(mobile.length != 11){
                    this.$message('请填写正确的手机号');
                    return;
                }
                if(!msg){
                    this.$message('请填写验证码');
                    return;
                }
                if(password < Config.shortLength){
                    this.$message(`密码长度必须不少于${Config.shortLength}位`);
                    return;
                }
                this.handleRegister(mobile,msg,password)
            },

            handleRegister(phone,code,password){
                register({phone:phone,code:code,password:password}).then(r=>{
                    this.$message('注册成功');
                    setTimeout(_=>{
                        window.location.href = './login.html'
                    },1000)
                }).catch(_=>{})
            }
        },
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>

