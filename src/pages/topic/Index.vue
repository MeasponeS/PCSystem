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
                                <div class="btn" @click="practice(subItem,item.parenPacktId)">
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

        <SubMajorSelect
                v-model="subMajor.show"
                :subs="subMajor.list"
               @select="selectSubMajor"
        >
            <template slot="choose">
                主管护师共设置护理学，内科护理、外课护理、妇产科护理、儿科护理、社区护理六个亚专业的考试护理学专业（中级）基础知识和相关专业知识考核内容相同，专业知识和专业实践能力根据报考亚专业的不同，所考核的内容不同（详见职称《考试那些事儿（中级）》）。
            </template>
        </SubMajorSelect>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import { getTopicList } from '../../api/topic.js'
    import { subMajor,submajor as selectSubMajor,checkDistribute } from '../../api/study.js'
    import NoLearningCard from '../../components/NoLearningCard/NoLearningCard.vue'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import SubMajorSelect from '../../components/SubMajorPopup/SubMajorSelect.vue'
    import {authCourse} from '../../api/auth.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[],
                noLearningCardShow:false,
                subMajor:{
                    show:false,
                    list:[]
                }
            }
        },
        methods: {
            practice(item,parenPacktId){
                //逻辑梳理
                //1.没有登录直接去登录
                //window.location.href = './topicList.html?packageId=' + item.packageId +'&courseId=' + item.id
                if(!this.USERINFO){
                    window.location.href = './login.html?from=topic';
                    return;
                }

                //2.用户是否有课程有权限，
                authCourse({courseId:item.id}).then(r=>{
                    if(0 == r){//没有权限
                        //判断用户是否已经分配卡
                        checkDistribute({packId:item.id});
                        this.noLearningCardShow = true;

                    }else {//有权限的情况在看是否有亚专业

                        if(parenPacktId){//有亚专业
                            subMajor({coursePackId:parenPacktId}).then(item=>{
                                this.subMajor.list = item.subMajorList;
                                this.subMajor.show = true;

                            }).catch(_=>{})

                        }else {//没有亚专业
                            window.location.href = './topicList.html?packageId=' + item.packageId +'&courseId=' + item.id
                        }


                    }
                }).catch(_=>{})
//2.登录之后查看用户是否选择亚专业，没有选择就让用户先选择亚专业之后刷新页面。
                //是否选择亚专业了、没有弹框选择

                //3.用户选择了压专业，再看用户有没有权限，有权限直接跳转进去  ，没有权限分两种情况


                //4   没有权限调接口是否已经分配卡  根据情况弹开卡还是 买卡  如果绑卡好了就刷新页面


            },
            selectSubMajor(id){
                selectSubMajor({
                    parentPackId:139,
                    coursePackId:id
                }).then(r=>{
                    //选择亚专业刷新页面，用户就不用再次选择专业了。
                    window.location.reload();
                }).catch(_=>{})
            }
        },
        mounted() {

            getTopicList().then(r=>{
                this.list = r.list;

            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {EmptyTemplate,NoLearningCard,SubMajorSelect}
    }
</script>

