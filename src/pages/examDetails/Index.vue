<template>
    <div id="app">
        <Head></Head>
        <div class="container main-body">
            <div class="left">
                <div class="header">
                    <h1>考试 > </h1>
                    <span>20181221 模拟考试</span>
                    <i>23:59:59</i>
                </div>
                <div class="content">
                    <h1>第 1 题 / 共 32 题</h1>
                    <ul>
                        <li><a href="##">答案解析</a></li>
                        <li><a href="##">相关知识点</a></li>
                        <li><a href="##">上一题</a></li>
                        <li><a href="##">下一题</a></li>
                    </ul>
                    <div class="question">
                        <div class="q_left">
                            【单选】
                        </div>
                        <div class="q_right">
                            李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该病临床表现不会出现的是：
                        </div>
                    </div>
                    <div class="answer">
                        <div class="option"><span class="option-val active">A</span>面具脸</div>
                        <div class="option"><span class="option-val">B</span>流涎</div>
                        <div class="option"><span class="option-val">C</span>上视困难</div>
                        <div class="option"><span class="option-val">D</span>运动迟缓</div>
                        <div class="option"><span class="option-val">E</span>面部皮脂腺分泌亢进</div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="header">题目列表</div>
                <ul>
                    <li class="done"><span>已答</span>第1题</li>
                    <li class="done"><span>已答</span>第2题</li>
                    <li class="done"><span>已答</span>第3题</li>
                    <li class="done"><span>已答</span>第4题</li>
                    <li class="done"><span>已答</span>第5题</li>
                    <li class="done"><span>已答</span>第6题</li>
                    <li class="done"><span>已答</span>第7题</li>
                    <li class="done"><span>已答</span>第8题</li>
                    <li class="done"><span>已答</span>第9题</li>
                    <li class="done"><span>已答</span>第10题</li>
                    <li class="done"><span>已答</span>第11题</li>
                    <li class="undone"><span>未答</span>第12题</li>
                    <li class="undone"><span>未答</span>第13题</li>
                    <li class="undone"><span>未答</span>第14题</li>
                    <li class="undone"><span>未答</span>第15题</li>
                    <li class="undone"><span>未答</span>第16题</li>
                    <li class="undone"><span>未答</span>第17题</li>
                    <li class="undone"><span>未答</span>第18题</li>
                </ul>
                <el-button type="primary" class="btn">提交试卷</el-button>
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

