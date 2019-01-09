<template>
    <div id="app">
        <Head activeUrl="topic" :logoUrl="ORGINFO.logo" :info="USERINFO"></Head>
        <div class="main-body">
            <img style="width: 100%" src="../../assets/img/temp/banner.jpg" alt="">
            <div class="container">
                <div class="title">习题集列表</div>
                <ul class="topic">
                    <li>
                        <div class="topic-l">
                            <h2 class="topic-title">健康管理师</h2>
                            <span class="topic-sub-title">系列课程习题集</span>
                            <div class="line"></div>
                            <p>总练习人数：39394人</p>
                            <p>总练习次数：102002233次</p>
                            <p>人均练习次数：3233次</p>
                            <p>平均通关关卡：29关</p>
                            <p>通过全部关卡人数：32人</p>

                            <el-button style="width: 100%;margin-top: 45px" type="primary">练习</el-button>
                        </div>
                        <div class="topic-r">
                            <div class="top">
                                <div id="echarts" class="echarts">

                                </div>
                            </div>
                            <div class="bottom">
                                <span>总练习人数：39394人</span>
                                <span>总练习次数：102002233次</span>
                                <span>人均练习次数：3233次</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="topic-l">
                            <h2 class="topic-title">健康管理师</h2>
                            <span class="topic-sub-title">系列课程习题集</span>
                            <div class="line"></div>


                            <p>总练习人数：39394人</p>
                            <p>总练习次数：102002233次</p>
                            <p>人均练习次数：3233次</p>
                            <p>平均通关关卡：29关</p>
                            <p>通过全部关卡人数：32人</p>

                            <el-button style="width: 100%;margin-top: 45px" type="primary">练习</el-button>
                        </div>
                        <div class="topic-r">
                            <div class="top">
                                <div id="echarts2" class="echarts">

                                </div>
                            </div>
                            <div class="bottom">
                                <span>总练习人数：39394人</span>
                                <span>总练习次数：102002233次</span>
                                <span>人均练习次数：3233次</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <EmptyTemplate msg="暂无习题集"></EmptyTemplate>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import Echarts from './echarts.js'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
            }
        },
        methods: {
            setChartOption(chart){
                chart.setOption({
                    color:['#31B68F','#F77352','#2B60FF'],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        x : 'center',
                        y : 'bottom',
                        data:['rose1','rose2','rose3']
                    },
                    calculable : true,
                    series: [
                        {
                            name:'练习次数',
                            type:'pie',
                            radius : [70, 110],
                            roseType : 'radius',
                            data:[
                                {value:30, name:'主管'},
                                {value:10, name:'职业'},
                                {value:60, name:'初级'},
                            ]
                        }
                    ]
                });
            }
        },
        mounted() {
            let myChart = Echarts.init(document.getElementById('echarts'));
            this.setChartOption(myChart);
            let myChart2 = Echarts.init(document.getElementById('echarts2'));
            this.setChartOption(myChart2);

        },
        beforeDestroy: function () {

        },
        components: {EmptyTemplate}
    }
</script>

