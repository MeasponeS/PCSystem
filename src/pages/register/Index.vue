<template>
    <div id="app">
        <Head></Head>
        <div class="back container-fluid main-body ">
            <div class="content">
                <h1>注册</h1>
                <h2></h2>
                <input type="text" placeholder="手机号">
                <input type="text" placeholder="验证码" class="input1">
                <a href="##">获取验证码</a>
                <input type="password" placeholder="设置密码不少于8位" class="input2">
                <el-button type="primary" class="button">注册</el-button>
            </div>
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

