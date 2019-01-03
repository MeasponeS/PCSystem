<template>
    <div id="app">
        <Head activeUrl="study"></Head>
        <img style="width: 100%" src="./img/banner.jpg" alt="">
        <div class="container main-body">

            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
            <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择日期时间">
            </el-date-picker>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                value1:''
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

