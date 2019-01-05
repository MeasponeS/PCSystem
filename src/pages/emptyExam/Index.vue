<template>
    <div id="app">
        <Head></Head>
        <div class="container">
            <ul class="header">
                <li @click="status='opening'" :class="{active:status=='opening'}" >开放中</li>
                <li @click="status='notOpened'" :class="{active:status=='notOpened'}">未开放</li>
                <li @click="status='opened'" :class="{active:status=='opened'}">已过期</li>
            </ul>
            <div v-show="status=='opening'" class="content">
                <img src="./img/暂无开放中的考试.png" alt="">
                <p>暂无开放中的考试</p>
            </div>
            <div v-show="status=='notOpened'" class="content">
                <img src="./img/暂无开放中的考试.png" alt="">
                <p>暂无未开放的考试</p>
            </div>
            <div v-show="status=='opened'" class="content">
                <img src="./img/暂无开放中的考试.png" alt="">
                <p>暂无已过期的考试</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                status:'opening'
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

