<template>
    <div id="app">
        <Head activeUrl="topic" :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="main-body">
            <!--<img style="width: 100%" src="../../assets/img/temp/banner.jpg" alt="">-->
            <div class="container">
                <!--<div class="title">习题集列表</div>-->
                <div class="list" v-if="list.length != 0">
                    <div class="row" v-for="item in list">
                        <div class="title">{{item.name}}</div>
                        <ul class="topic">
                            <li v-for="subItem in item.courseVoList">
                                <h2 class="ellipsis">{{ subItem.name }}</h2>
                                <div class="line"></div>
                                <p>总练习人数：{{ subItem.staticInfo.totalUserCount || 0 }}人</p>
                                <p>总练习次数：{{ subItem.staticInfo.totalTimeCount || 0  }}次</p>
                                <p>人均练习次数：{{ subItem.staticInfo.avgTimeCount || 0  }}次</p>
                                <p>平均通关关卡：{{ subItem.staticInfo.avgPassCount || 0  }}关</p>
                                <p>通过全部关卡人数：{{ subItem.staticInfo.passAllSize || 0  }}人</p>
                                <div class="btn" @click="practice(subItem)">
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
                :noLearningCard="noLearningCardShow"
                :phone="ORGINFO.phone"
        ></NoLearningCard>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
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
                //window.location.href = './topicList.html?packageId=' + item.packageId +'&courseId=' + item.id

                authCourse({courseId:item.id}).then(r=>{
                    if(0 == r){
                        this.noLearningCardShow = true;
                    }else {
                        window.location.href = './topicList.html?packageId=' + item.packageId +'&courseId=' + item.id
                    }
                }).catch(_=>{})

            },

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

