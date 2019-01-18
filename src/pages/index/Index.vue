<template>
    <div id="app">
        <Head activeUrl="index" :companyName="ORGINFO.orgName" :type=type :info="USERINFO"></Head>
        <div class="banner">
            <img src="./img/banner.png" alt="">
        </div>      
        <div class="serviceObj">
            <img src="./img/矢量智能对象.png" alt="">
        </div>
        <div class="serviceCon">
            <img src="./img/插画.png" alt="">
        </div>
        <div class="serviceAdv">
            <img src="./img/底纹1.png" alt="">
        </div>
        <div class="willGet">
            <img src="./img/插画1.png" alt="">
            <img src="./img/插画2.png" alt="">
            <img src="./img/插画3.png" alt="">
        </div>
        <div class="earth">
            <img src="./img/底纹1.png" alt="">
        </div>
        <div class="startNow">
            <img class="phone" src="./img/phone.png" alt="">
            <span class="erweima"></span>
            <span class="phoneInfo">微信扫码使用小程序学习</span>
            <img class="computer" src="./img/电脑.png" alt="">
            <img class="link" src="./img/链接图标.png" alt="">
            <span class="study"><a href="./study.html">点击这里</a>，使用网站学习 </span>
        </div>
        <div class="contact">

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
                type:2
            }
        },
        methods: {
            handleScroll () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if(scrollTop >= 750){
                    this.type = 1
                } else {
                    this.type = 2
                }
            },
        },
        mounted() {
            window.addEventListener('scroll',this.handleScroll)
        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>

