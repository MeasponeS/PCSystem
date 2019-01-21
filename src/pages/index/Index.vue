<template>
    <div id="app">
        <Head class="header" activeUrl="index" :companyName="ORGINFO.orgName" :type=type :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div >
            <div class="banner">
                <img src="./img/banner_01.png" alt="">
            </div>
            <div class="serviceObj">
                <img src="./img/1_02.png" alt="">
            </div>
            <div class="serviceCon">
                <img src="./img/2_02.png" alt="">
            </div>
            <div class="serviceAdv">
                <img src="./img/3_02.png" alt="">
            </div>
            <div class="willGet">
                <img src="./img/4_02.png" alt="">
            </div>
            <div class="earth">
                <img src="./img/5_02.png" alt="">
            </div>
            <div class="startNow">
                <img class="erweima" :src="ORGINFO.wxCode" alt="" :style="'left:'+leftLONG()+'px'">
                <span class="study" :style="'left:'+rightLONG()+'px'"><a href="./study.html">点击这里</a>，使用网站学习 </span>
            </div>
            <div class="contact">
                <img class="ren" src="./img/ren.png" alt="">
                <span class="renName">机构联系人：{{ORGINFO.contacts}}</span>
                <div class="line"></div>
                <span class="renPhone">联系电话：{{ORGINFO.phone}}</span>
                <img class="dianhua" src="./img/dianhua-2.png" alt="">
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    let imageSize = 0.315
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                type:2
            }
        },
        methods: {
            handleScroll(){
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let oneSize = 801/1980;

                if(scrollTop >= document.body.clientWidth * oneSize - 100){
                    this.type = 1
                } else {
                    this.type = 2
                }
            },
            leftLONG(){
                let clientWidth = document.body.clientWidth;
                if(clientWidth <=1200){
                    return 1200 * imageSize;
                }
                return clientWidth * imageSize;
            },
            rightLONG(){
                return document.body.clientWidth * 0.57;
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

