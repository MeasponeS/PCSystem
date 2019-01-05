<template>
    <div id="app">
        <Head></Head>
        <div class="content">
            <ul class="examHeader">
                <li @click="status='opening'" :class="{active:status=='opening'}">开放中</li>
                <li @click="status='notOpened'" :class="{active:status=='notOpened'}">未开放</li>
                <li @click="status='opened'" :class="{active:status=='opened'}">已过期</li>
            </ul>
            <i class="el-icon-arrow-left"></i>
            <i class="el-icon-arrow-right"></i>
            <div v-show="status=='opening'">
                <div class="courseListOne">
                    <h1>健康管理师课程类</h1>
                    <span>当前您正在学习健康管理师系列课程，已完成10%，比其他学员的进度快1.1%</span>
                    <ul class="examList">
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button>进入考场</button>
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button>进入考场</button>
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button>进入考场</button>
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button>进入考场</button>
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button>进入考场</button>
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button>进入考场</button>
                        </li>
                    </ul>
                </div>
                <div class="courseListTwo">
                    <h1>主管护师课程类</h1>
                    <span>当前您正在学习主管护师系列课程，已完成10%，比其他学员的进度快1.1%</span>
                    <ul class="examList">
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道(答对18道)</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button class="detail">查看详情</button>
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button class="no">您没有参与这场考试</button>
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道(答对18道)</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button class="detail">查看详情</button>
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button class="no">您没有参与这场考试</button>
                        </li>
                    </ul>
                </div>
                <div class="courseListThree">
                    <h1>主管护师课程类</h1>
                    <span>当前您正在学习主管护师系列课程，已完成10%，比其他学员的进度快1.1%</span>
                    <ul class="examList">
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em></h5>
                            <button class="no">您没有参与这场考试</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-show="status=='notOpened'"></div>
            <div v-show="status=='opened'"></div>
        </div>
        <Footer></Footer>
        <ExamRules v-model="ExamRules"></ExamRules>
    </div>
</template>

<script>
    import ExamRules from '../../components/ExamRules/ExamRules.vue'
    export default {
        name: 'app',
        data: function () {
            return {
                status:'opening',
                ExamRules:true
            }
        },
        methods: {},
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {ExamRules}
    }
</script>

