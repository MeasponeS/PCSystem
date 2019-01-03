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
                <button class="button">保存密码</button>
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

