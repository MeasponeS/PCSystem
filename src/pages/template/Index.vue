<template>
    <div id="app">
        <Head activeUrl="index" :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        
        <div class="serviceObj"></div>
        <div class="serviceCon"></div>
        <div class="serviceAdv"></div>
        <div class="willGet"></div>
        <div class="earth"></div>
        <div class=""></div>
        <div></div>
        
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

