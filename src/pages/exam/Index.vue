<template>
    <div id="app">
        <Head activeUrl="exam" :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="wrapper">
            <div class="content">
                <div class="examHeader">
                    <div @click="status='opening'" :class="{active:status=='opening'}">开放中</div>
                    <div class="mid"></div>
                    <div @click="status='notOpened'" :class="{active:status=='notOpened'}">未开放</div>
                    <div class="mid"></div>
                    <div @click="status='opened'" :class="{active:status=='opened'}">已过期</div>
                    <span class="flag">当前您正在学习健康管理师系列课程，已完成10%，比其他学员的进度快1.1%</span>
                </div>
                <div v-show="status=='opening'">
                    <div class="courseList">
                        <ul class="examList">
                            <li v-for="(item,i) in examList" :key='i' :class="{examEnd:item.examStatus == '已结束'}">
                                <h1>{{item.examName}}</h1>
                                <i :class="{end:item.examStatus == '已结束'}">{{item.examStatus}}</i>
                                <h4>开始时间：{{item.beginTime}}</h4>
                                <h4>试题数量：{{item.examCount}}道</h4>
                                <h5>
                                    <em>考试时长：{{item.examDuration}}分钟</em>
                                    <el-button 
                                        type="primary" 
                                        @click=alertFn(item)
                                        :class="{not:item.btnStatus == '您没有参与这场考试'}"
                                        :disabled="item.btnStatus == '您没有参与这场考试'" 
                                    >{{item.btnStatus}}</el-button>
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-show="status=='notOpened'"></div>
                <div v-show="status=='opened'"></div>
                <EmptyTemplate v-if="status != 'opening'" msg="暂无开放中的考试" imgKey="Exam" ></EmptyTemplate>
            </div>
        </div>
        <Footer></Footer>
        <ExamRules v-model="ExamRules"></ExamRules>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import ExamRules from '../../components/ExamRules/ExamRules.vue'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                status:'opening',
                ExamRules:false,
                examList:[
                    {
                        examName:'1220 模拟考试',
                        examStatus:'进行中',
                        beginTime:'2018.12.29-2019.01.03',
                        examCount:'20',
                        examDuration:'10',
                        btnStatus:'进入考场'
                    },
                    {
                        examName:'1220 模拟考试',
                        examStatus:'进行中',
                        beginTime:'2018.12.29-2019.01.03',
                        examCount:'20',
                        examDuration:'10',
                        btnStatus:'进入考场'
                    },
                    {
                        examName:'1220 模拟考试',
                        examStatus:'进行中',
                        beginTime:'2018.12.29-2019.01.03',
                        examCount:'20',
                        examDuration:'10',
                        btnStatus:'考试详情'
                    },
                    {
                        examName:'1220 模拟考试',
                        examStatus:'已结束',
                        beginTime:'2018.12.29-2019.01.03',
                        examCount:'20',
                        examDuration:'10',
                        btnStatus:'考试详情'
                    },
                    {
                        examName:'1220 模拟考试',
                        examStatus:'已结束',
                        beginTime:'2018.12.29-2019.01.03',
                        examCount:'20',
                        examDuration:'10',
                        btnStatus:'考试详情'
                    },
                    {
                        examName:'1220 模拟考试',
                        examStatus:'已结束',
                        beginTime:'2018.12.29-2019.01.03',
                        examCount:'20',
                        examDuration:'10',
                        btnStatus:'您没有参与这场考试'
                    },
                    {
                        examName:'1220 模拟考试',
                        examStatus:'已结束',
                        beginTime:'2018.12.29-2019.01.03',
                        examCount:'20',
                        examDuration:'10',
                        btnStatus:'考试详情'
                    },
                    {
                        examName:'1220 模拟考试',
                        examStatus:'已结束',
                        beginTime:'2018.12.29-2019.01.03',
                        examCount:'20',
                        examDuration:'10',
                        btnStatus:'您没有参与这场考试'
                    }
                ],
            }
        },
        methods: {
            
            alertFn(item){
                if(item.btnStatus == '进入考场'){
                    this.ExamRules = !this.ExamRules
                    return
                }
                if(item.examStatus == '已结束') {
                    window.location.href = './examResults.html'
                } else {
                    this.open()
                }
            },
            open(){
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
        components: {ExamRules,EmptyTemplate}
    }
</script>

