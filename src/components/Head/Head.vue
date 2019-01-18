<template>
    <div class="head">
        <div class="container">
            <img class="logo" v-if="type == 2" src="./img/hi.png" alt="">
            <img class="logo" v-else src="./img/logo.png" alt="">
            <div class="company">
                <p>欢迎来到</p>
                <span>{{companyName}}</span>
            </div>
            <ul class="nav">
                <li v-for="(title,url) in nav"><a :class="{active:activeUrl == url}" :href="'./'+ url +'.html'">{{ title }}</a></li>
            </ul>
            <div v-if="info" class="login">
              <div class="user-phone">
                {{ info.username.slice(0,3) + '****' + info.username.slice(6,10) }}<i class="el-icon-caret-bottom el-icon--right" style="color:#BAC1D8"></i>
                  <ul class="dropdown">
                    <li>{{ info.username.slice(0,3) + '****' + info.username.slice(6,10) }}</li>
                      <li>
                          <a href="./personal.html">个人资料</a>
                      </li>
                      <li>
                          <a href="./changePassword.html">修改密码</a>
                      </li>
                      <li>
                          <a href="./collection.html">我的收藏</a>
                      </li>
                      <li @click="outLogin">退出账号</li>
                  </ul>
              </div>
            </div>
            <div v-else class="no-login">
                <a href="./login.html">
                    <el-button type="primary">登录</el-button>
                </a>
                <a href="./register.html">
                    <el-button class="primary-btn">注册</el-button>
                </a>

            </div>

        </div>
    </div>
</template>

<script>
    import Config from '../../config/app.js'
    import {logOut} from '../../api/auth.js'
    import {removeToken} from '../../utils/dataStorage.js'
    export default {
        name: 'Head',
        props: {
            activeUrl: {
                type: String,
                default: '',
            },
            companyName: {
                type: String,
                default: '',
            },
            info: {
                type: [Boolean, Object],
                default: false
            },
            type:{
                type:[Number,String],
                default:''
            }
        },
        data: function () {
            return {
                nav: Config.nav,
            }
        },
        methods: {
            outLogin() {
                logOut().then(r=>{
                    removeToken();
                    window.location.href = './index.html';
                }).catch(_=>{
                    removeToken();
                    window.location.href = './index.html'; //token失效也要退出登录
                });
            },
            handleScroll () {
                
            },
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll)
            if(this.type == 2){
                require('./type2.scss')
            } else {
                require('./type1.scss')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/css/var.scss";
    .head {
        height: 100px;
        width: 100%;
        background-color: #fff;
        box-shadow:-2px 3px 5px 0px rgba(174,174,174,0.14);
        .container {
            display: flex;
            height: 100%;
            align-items: center;

            .logo {
                /*width: 41px;*/
                height: 40px;
            }
        .company{
            display: inline-block;
            min-width: 188px;
            margin-left: 10px;
            p{
                font-size: 23px;
                color: #2B60FF;
                margin: 0 0 6px 0;
                font-weight: bold;
            }
            span{
                font-size: 16px;
            }
        }
            .nav {
                flex: 1;
                // padding-left: 90px;
                list-style-type: none;
                li {
                    float: left;
                    margin-right: 46px;
                    font-weight: bold;
                    a {
                        font-size: 18px;
                        &:hover, &.active {
                            color: $--color-primary;
                            border-bottom: 2px solid $--color-primary;
                        }
                    }
                }
            }
            .no-login {
                .el-button {
                    padding: 8px 30px;
                }
                .primary-btn {
                    margin-left: 24px;
                }
            }
            .login{
                .user-phone{
                    cursor: pointer;
                    padding: 6px 0;
                    font-size: 18px;
                    position: relative;
                    .dropdown{
                        display: none;
                        margin: 0;
                        padding: 0 14px;
                        position: absolute;
                        top: -4px;
                        z-index: 5;
                        right: 0;
                        box-shadow: 0 0 6px 0 rgba(174, 174, 174, 0.14);
                        background: #fff;
                        width: 164px;
                        /*height: 258px;*/
                        border-radius:5px;
                        border:1px solid #eee;
                        li{
                            width: 100%;
                            height: 50px;
                            text-align: center;
                            line-height: 50px;
                            list-style-type: none;
                            border-bottom: 1px solid #eee;
                            color: #666;
                            font-size: 16px;
                            &:last-child{
                                border-bottom:none;
                            }
                            &:hover{
                                color: $--color-primary;
                            }
                            a{
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    &:hover>.dropdown{
                        display: block;
                    }
                }
            }
        }
    }
</style>
