<template>
    <div id="app">
        <Head activeUrl="study"></Head>
        <div class="container-fluid main-body">
            <img style="width: 100%" src="./img/banner.jpg" alt="">
            <div class="container">
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
        </div>
        <Footer></Footer>
        <NoLearningCard v-model="NoLearningCard" :phone="12345678901"></NoLearningCard>
    </div>
</template>

<script>
    import NoLearningCard from '../../components/NoLearningCard/NoLearningCard.vue'
    export default {
        name: 'app',
        data: function () {
            return {
                value1:'',
                NoLearningCard:true
            }
        },
        methods: {},
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {NoLearningCard}
    }
</script>

