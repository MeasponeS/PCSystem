<template>
    <div id="app">
        <Head activeUrl="topic" :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="main-body">
            <!--<img style="width: 100%" src="../../assets/img/temp/banner.jpg" alt="">-->
            <div class="container">
                <!--<div class="title">习题集列表</div>-->
                <div class="list" v-if="list.length != 0">
                    <div class="row" v-for="item in list">
                        <div class="title">{{item.packageName}}</div>
                        <ul class="topic">
                            <li>
                                <h2>健康管理师习题集</h2>
                                <div class="line"></div>
                                <p>总练习人数：39394人</p>
                                <p>总练习次数：102002233次</p>
                                <p>人均练习次数：3233次</p>
                                <p>平均通关关卡：29关</p>
                                <p>通过全部关卡人数：32人</p>
                                <div class="btn" @click="practice(item)">
                                    练习
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <EmptyTemplate style="margin-top: 48px" msg="暂无习题集" v-else></EmptyTemplate>
            </div>
        </div>
        <Footer></Footer>
        <NoLearningCard
                v-model="noLearningCardShow"
                :phone="ORGINFO.phone"
        ></NoLearningCard>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    // import Echarts from './echarts.js'
    import { getTopicList } from '../../api/topic.js'
    import NoLearningCard from '../../components/NoLearningCard/NoLearningCard.vue'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import {authCourse} from '../../api/auth.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[],
                noLearningCardShow:false,
            }
        },
        methods: {
            practice(item){
                window.location.href = './topicList.html?packageId=' + item.packageId +'&courseId=' + item.id

                // authCourse({courseId:item.id}).then(r=>{
                //     if(0 == r){
                //         this.noLearningCardShow = true;
                //     }else {
                //         window.location.href = './topicList.html?packageId=' + item.packageId +'&courseId=' + item.id
                //     }
                // }).catch(_=>{})

            },
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

            getTopicList().then(r=>{
                this.list = r
            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {EmptyTemplate,NoLearningCard}
    }
</script>

