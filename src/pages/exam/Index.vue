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
                    <span class="flag">当前您正在学习健康管理师系列课程，已完成10%，比其他学员的进度快1.1%</span>
                    <ul class="examList">
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" @click=alertFn() >进入考场</el-button></h5>
                            
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" @click=alertFn()>进入考场</el-button></h5>
                            
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" @click=alertFn()>进入考场</el-button></h5>
                            
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" @click=alertFn() >进入考场</el-button></h5>
                            
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" @click=alertFn()>进入考场</el-button></h5>
                            
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>进行中</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button class="not" type="primary" @click=open()>未开放</el-button></h5>
                        </li>
                    </ul>
                </div>
                <div class="courseListTwo">
                    <h1>主管护师课程类</h1>
                    <span class="flag">当前您正在学习主管护师系列课程，已完成10%，比其他学员的进度快1.1%</span>
                    <ul class="examList">
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道(答对18道)</h4>
                            <h5><em>考试时长：10分钟</em><a href="examResults.html"><el-button type="primary" >考试详情</el-button></a></h5>
                            
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" class="not">您没有参与这场考试</el-button></h5>
                            
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道(答对18道)</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" @click=open2()>考试详情</el-button></h5>
                            
                        </li>
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" class="not">您没有参与这场考试</el-button></h5>
                            
                        </li>
                    </ul>
                </div>
                <div class="courseListThree">
                    <h1>主管护师课程类</h1>
                    <span class="flag">当前您正在学习主管护师系列课程，已完成10%，比其他学员的进度快1.1%</span>
                    <ul class="examList">
                        <li>
                            <h1>1220 模拟考试</h1>
                            <i>已结束</i>
                            <h4>开始时间：2018.12.29-2019.01.03</h4>
                            <h4>试题数量：20道</h4>
                            <h5><em>考试时长：10分钟</em><el-button type="primary" class="not">您没有参与这场考试</el-button></h5>
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div v-show="status=='notOpened'"></div>
            <div v-show="status=='opened'"></div>
            <div class="no-exam">
                    <div style="text-align: center">
                        <img src="./img/暂无开放中的考试.png" alt="">
                        <p>暂无开放中的考试</p>
                    </div>
                </div>
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
                ExamRules:false
            }
        },
        methods: {
            alertFn(){
                this.ExamRules = !this.ExamRules
            },
            open(){
                this.$alert('还没有到考试时间', '提示', {
                confirmButtonText: '确定',
                type: 'warning'
                });
            },
            open2(){
                this.$alert('为保证公平公正，请于考试结束时间之后查看成绩', '提示', {
                confirmButtonText: '确定',
                type: 'info'
                });
            }
        },
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {ExamRules}
    }
</script>

