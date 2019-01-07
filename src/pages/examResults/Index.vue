<template>
    <div id="app">
        <Head></Head>
        <div class="wrapper">
            <div class="container main-body">
            <div class="top">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="head">
                    <el-breadcrumb-item><a href="exam.html">考试</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="examDetails.html">20181221模拟考试</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="examResults.html" class="active">考试结果</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                <div class="left">
                <div class="up">
                    <div class="chart">
                        <div class="chart-progress"></div>
                        <div class="chart-text">
                            <strong>50%</strong>
                        </div>
                    </div>
                    <div class="result">
                        <h1>恭喜，您完成了本次考试！</h1>
                        <h3>正确：50 错误：50 </h3>
                    </div>
                </div>
                <div class="down">
                    <div class="title">
                        <div :class="{active:status=='all'}" @click="status='all'">全部</div>
                        <div class="mid"></div>
                        <div @click="status='right'" :class="{active:status=='right'}">只看正确</div>
                        <div class="mid"></div>
                        <div @click="status='wrong'" :class="{active:status=='wrong'}">只看错误</div>
                    </div>
                    <ul class="all" v-show="status=='all'">
                        <li><span  class="done">已答</span>第1题</li>
                        <li ><span class="done">已答</span>第2题</li>
                        <li ><span class="done">已答</span>第3题</li>
                        <li ><span class="done">已答</span>第4题</li>
                        <li ><span class="done">已答</span>第5题</li>
                        <li ><span class="done">已答</span>第6题</li>
                        <li><span class="done">已答</span>第7题</li>
                        <li ><span class="done">已答</span>第8题</li>
                        <li ><span class="done">已答</span>第9题</li>
                        <li><span class="done">已答</span>第10题</li>
                        <li ><span class="done">已答</span>第11题</li>
                        <li><span class="undone">未答</span>第12题</li>
                        <li><span class="undone">未答</span>第13题</li>
                        <li><span class="undone">未答</span>第14题</li>
                        <li><span class="undone">未答</span>第15题</li>
                        <li><span class="undone">未答</span>第16题</li>
                        <li><span class="undone">未答</span>第12题</li>
                        <li><span class="undone">未答</span>第13题</li>
                        <li><span class="undone">未答</span>第14题</li>
                        <li><span class="undone">未答</span>第15题</li>
                        <li><span class="undone">未答</span>第16题</li>
                        <li><span class="undone">未答</span>第17题</li>
                        <li><span class="undone">未答</span>第18题</li>
                    </ul>
                    <ul class="all" v-show="status=='right'">
                        <li><span  class="done">已答</span>第1题</li>
                        <li ><span class="done">已答</span>第2题</li>
                        <li ><span class="done">已答</span>第3题</li>
                        <li ><span class="done">已答</span>第4题</li>
                        <li ><span class="done">已答</span>第5题</li>
                        <li ><span class="done">已答</span>第6题</li>
                        <li><span class="done">已答</span>第7题</li>
                        <li ><span class="done">已答</span>第8题</li>
                        <li ><span class="done">已答</span>第9题</li>
                        <li><span class="done">已答</span>第10题</li>
                        <li ><span class="done">已答</span>第11题</li>
                    </ul>
                    <ul class="all" v-show="status=='wrong'">
                        <li><span class="undone">未答</span>第12题</li>
                        <li><span class="undone">未答</span>第13题</li>
                        <li><span class="undone">未答</span>第14题</li>
                        <li><span class="undone">未答</span>第15题</li>
                        <li><span class="undone">未答</span>第16题</li>
                        <li><span class="undone">未答</span>第12题</li>
                        <li><span class="undone">未答</span>第13题</li>
                        <li><span class="undone">未答</span>第14题</li>
                        <li><span class="undone">未答</span>第15题</li>
                        <li><span class="undone">未答</span>第16题</li>
                        <li><span class="undone">未答</span>第17题</li>
                        <li><span class="undone">未答</span>第18题</li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <h1 class="header">数据参考</h1>
                <p>当前参与人数：39999人</p>
                <p>当前正答率67.00%</p>
                <p>当前及格率：81%</p>
                <p>当前及格人数：3726人</p>
                <p>当前最高分：99分<span>共3人</span></p>
                <p>当前最低分：0分<span>共20人</span></p>
                <el-button type="primary" class="btn">完成</el-button>
            </div>
        </div>
        </div>
        
        <Footer></Footer>
    </div>
            </div>
            
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                status:'all'
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

