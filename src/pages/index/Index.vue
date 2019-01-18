<template>
    <div id="app">
        <Head activeUrl="index" :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="container main-body">

            <div id="div1">
            <span id="span1">天天币专享项</span><span id="span2"></span>
        </div><span id="span1">天天币专享项目A</span>
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
            var div,span,span2,i,timer;
        function init(){
            setInterval(ttb,5);
        }
        function ttb(){
            div = getId('div1');
            span = getId('span1');
            span2 = getId('span2');
            
            span2.innerHTML = span.innerHTML;
            if(span.offsetWidth <= div.scrollLeft){
                div.scrollLeft -= span.offsetWidth;
                
            }
            else {
                div.scrollLeft++;
            }
            
        }
        function getId(Id){
            return document.getElementById(Id);
        }
        window.onload = init();
        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>

