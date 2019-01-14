<template>
    <div id="app">
        <Head activeUrl="topic" :companyName="ORGINFO.orgName"></Head>
        <div class="main-body">
            <div class="container content">
                <div class="nav">
                    <Breadcrumb
                        :nav="[
                            {url:'./index.html',name:'课程包的名字'},
                            {url:'javascript:;',name:'习题集'}
                        ]"
                    ></Breadcrumb>
                </div>
                <div class="topic-list">
                    <div class="topic-list-l">
                        <div class="top">
                            <ul>
                                <li :class="{active:0==tabActiveIndex}" @click="tabActiveIndex=0">全部</li>
                                <li :class="{active:1==tabActiveIndex}" @click="tabActiveIndex=1">未开始</li>
                                <li :class="{active:2==tabActiveIndex}" @click="tabActiveIndex=2">未通过</li>
                                <li :class="{active:3==tabActiveIndex}" @click="tabActiveIndex=3">已通过</li>
                            </ul>
                            <a  href="./register.html">
                                <el-button class="primary-btn" style="padding: 8px 10px;">进入错题集</el-button>
                            </a>
                        </div>
                        <div v-show="0==tabActiveIndex" class="checkpoint">
                            <a class="li pass">
                                <span>已通过</span>
                                第1关
                            </a>
                            <a class="li unpass">
                                <span>已通过</span>
                                第2关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第3关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第14关
                            </a>
                        </div>
                        <div v-show="1==tabActiveIndex" class="checkpoint">
                            <a class="li pass">
                                <span>已通过</span>
                                第1关
                            </a>
                        </div>
                        <div v-show="2==tabActiveIndex" class="checkpoint">
                            <a class="li pass">
                                <span>已通过</span>
                                第1关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第14关
                            </a>
                        </div>
                        <div v-show="3==tabActiveIndex" class="checkpoint">
                            <a class="li pass">
                                <span>已通过</span>
                                第1关
                            </a>
                            <a class="li unpass">
                                <span>已通过</span>
                                第2关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第3关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第4关
                            </a>
                            <a class="li">
                                <span>未开始</span>
                                第14关
                            </a>
                        </div>
                    </div>
                    <div class="topic-list-r">
                        <div class="top">数据参考</div>
                        <div class="li">总练习人数： 39394人</div>
                        <div class="li">总练习次数： 39394次</div>
                        <div class="li">人均练习次数： 39394次</div>
                        <div class="li">平均通关关卡： 39394关</div>
                        <div class="li">通过全部关卡人数： 39394人</div>

                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                tabActiveIndex:1,
            }
        },
        methods: {},
        mounted() {},
        beforeDestroy: function () {},
        components: {Breadcrumb}
    }
</script>

