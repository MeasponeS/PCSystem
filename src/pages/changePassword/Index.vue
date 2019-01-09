<template>
    <div id="app">
        <Head></Head>
        <div class="back">
            <div class="content">
                <h1>修改密码</h1>
                <h2></h2>
                <input type="text" placeholder="手机号">
                <input type="text" placeholder="验证码">
                <a href="##">获取验证码</a>
                <input type="password" placeholder="设置密码">
                <button class="button">保存密码</button>
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
            return {}
        },
        methods: {},
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>
