<template>
    <div id="app">
        <Head></Head>
        <div class="container main-body">
            <div class="header">
                <div @click="status='lesson'" :class="{active:status=='lesson'}" >课程</div>
                <div class="mid"></div>
                <div @click="status='practice'" :class="{active:status=='practice'}">习题</div>
            </div>
            <div class="lesson-content" v-show="status=='lesson'">
                <div class="content-header">
                    <div @click="lessons='lessonOne'" :class="{active:lessons=='lessonOne'}">健康管理师系列课程</div>
                    <div class="mid"></div>
                    <div @click="lessons='lessonTwo'" :class="{active:lessons=='lessonTwo'}">主管护师系列课程</div>
                </div>
                <div class="content" v-show="lessons=='lessonOne'">
                    <ul>
                        <li>
                            <p>一、李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        <li>
                            <p>一、李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        <li>
                            <p>一、李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        <li>
                            <p>一、李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        <li>
                            <p>一、李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        <li>
                            <p>一、李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        <li>
                            <p>一、李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        <li>
                            <p>一、李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        <li>
                            <p>一、李某，男，56岁。到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                        
                    </ul>
                </div>
                <div class="content" v-show="lessons=='lessonTwo'">
                    <ul>
                        <li>
                            <p>一、李某，男，56岁。到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="lesson-content" v-show="status=='practice'">
                <div class="content-header">
                    <div @click="lessons='lessonOne'" :class="{active:lessons=='lessonOne'}">健康管理师系列课程</div>
                    <div class="mid"></div>
                    <div @click="lessons='lessonTwo'" :class="{active:lessons=='lessonTwo'}">主管护师系列课程</div>
                </div>
                <div class="content" v-show="lessons=='lessonOne'">
                    <ul>
                        <li>
                            <p>一、李某，男，56岁。到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                    </ul>
                </div>
                <div class="content" v-show="lessons=='lessonTwo'">
                    <ul>
                        <li>
                            <p>一、李某，男，56岁。到医院检查后诊断为帕金森病，该病临床表现中一般不会出现的是：</p>
                            <em></em>
                            <span>取消收藏</span>
                            <img src="./img/jiantouyou.png" alt="">
                        </li>
                    </ul>
                </div>
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
                status:'lesson',
                lessons:'lessonOne'
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

