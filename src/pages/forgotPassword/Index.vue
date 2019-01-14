<template>
    <div id="app">
        <Head :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="main-body">
            <div class="content">
                <h1>找回密码</h1>
                <h2></h2>
                <div class="login-input">
                        <el-input placeholder="手机号" v-model="mobile">
                            <span class="get-mag" slot="suffix" @click="getCode">{{ this.countDown != initCountDown ? this.countDown : '获取验证码' }}</span>
                        </el-input>
                        <el-input placeholder="验证码" v-model="msg"></el-input>
                    </div>
                
                <input type="password" placeholder="设置密码" v-model="password" >
                <el-button class="button"  type="primary" @click="checkPassword">保存密码</el-button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import Config from '../../config/app.js'
    import {sendSMS,forgotPassword} from '../../api/auth.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                mobile:'',
                msg:'',
                password:'',
                countDown:Config.countDown,
                initCountDown:Config.countDown
            }
        },
        methods: {
            checkPassword(){
                let mobile = this.mobile;
                let msg = this.msg;
                let password = this.password;
                if(mobile.length != 11){
                    this.$message('请填写正确的手机号');
                    return;
                }
                if(password.length < Config.shortLength){
                    this.$message(`密码长度必须不少于${Config.shortLength}位`);
                    return;
                }
                if(!msg){
                    this.$message('请填写验证码');
                    return;
                }
                this.savePassword(mobile,password,msg)
            },

            savePassword(phone,password,code){
                forgotPassword({phone:phone,password:password,code:code}).then(r=>{
                    this.$message('密码设置成功');
                    window.setTimeout(()=>{
                        window.location.href = './login.html'
                    },1000)
                }).catch(_=>{})
            },

            getCode(){
                if(this.mobile.length != 11){
                    this.$message('请填写正确的手机号');
                    return;
                }
                if(this.countDown < 60) return;

                sendSMS({phone:this.mobile,type:1}).then(r=>{
                    console.log(r);
                    window.SMS = setInterval(()=>{
                        if(this.countDown <= 0){
                            clearInterval(window.SMS);
                            this.countDown = Config.countDown;
                            return;
                        }
                        this.countDown--;
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
