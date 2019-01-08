<template>
    <div id="app">
        <Head></Head>
        <div class="container main-body">
            <el-button @click="fn()">默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger" >危险按钮</el-button>



        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import { getDictionaryList } from '../../api/personal.js';
    export default {
        name: 'app',
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

