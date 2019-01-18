<template>
    <div id="app">
        <Head activeUrl="index" :companyName="ORGINFO.orgName" :type=type :info="USERINFO"></Head>
        <div class="banner">
            <img src="./img/banner.png" alt="">
            <div class="content">
                <h1> 
                    赋能教育
                    <span>·</span>
                    聚焦健康
                </h1>
                <h1>健康产业学堂</h1>
            </div>
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
            <img src="./img/phone.png" alt="">
            <img src="./img/电脑.png" alt="">
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import { getDictionaryList } from '../../api/personal.js';
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                type:2
            }
        },
        methods: {
            fn(){
                getDictionaryList({}).then((data)=>{
                    console.log(data);

                }).catch(_=>{alert(111)})

            }
        },
        mounted() {
        
        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>

