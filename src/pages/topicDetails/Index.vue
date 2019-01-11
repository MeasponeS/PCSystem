<template>
    <div id="app">
        <Head activeUrl="topic" :logoUrl="ORGINFO.logo" :info="USERINFO"></Head>
        <div class="main-body">
            <div class="container">
                <div class="content clearfix">
                    <div class="left">
                        <div class="l-top">
                            <Breadcrumb
                                        :nav="[
                            {url:'./index.html',name:'课程包的名字'},
                            {url:'./index.html',name:'习题集'},
                            {url:'javascript:;',name:'第11关'}
                        ]"
                            ></Breadcrumb>
                        </div>
                        <div class="do">
                            <div class="do-top">
                                <div class="do-title">第一题/共32题</div>
                                <ul class="do-action">
                                    <li>收藏</li>
                                    <li>查看答案</li>
                                    <li>上一题</li>
                                    <li>下一题</li>
                                </ul>
                            </div>
                            <DoTopic></DoTopic>
                        </div>
                    </div>
                    <div class="right">
                        <div class="r-top">
                            第11关
                        </div>
                        <div class="checkpoint">
                            <ul>
                                <li class="li active">
                                    <span class="do">已答</span>
                                    第一题
                                </li>
                                <li class="li">
                                    <span class="part">已答</span>
                                    第9-10题
                                </li>
                                <li class="li">
                                    <span>已答</span>
                                    第一题
                                </li>
                                <li class="li">
                                    <span>已答</span>
                                    第一题
                                </li>
                                <li class="li">
                                    <span>已答</span>
                                    第一题
                                </li>
                                <li class="li">
                                    <span>已答</span>
                                    第一题
                                </li>
                                <li class="li">
                                    <span>已答</span>
                                    第一题
                                </li>
                                <li class="li">
                                    <span>已答</span>
                                    第一题
                                </li>
                                <li class="li">
                                    <span class="part">已答</span>
                                    第一题
                                </li>
                            </ul>
                            <el-button type="primary" style="width: 100%">提交&nbsp;&nbsp;第11关</el-button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import DoTopic from '../../components/DoTopic/Dotopic.vue'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
            }
        },
        methods: {

        },
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {Breadcrumb,DoTopic}
    }
</script>

