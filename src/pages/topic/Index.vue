<template>
    <div id="app">
        <Head activeUrl="topic" :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="main-body">
            <Carousel :position="2" />
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
                                <div class="btn" @click="practice(subItem,item.parenPacktId,item.subId)">
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
                @openCard="openLearningCardShow = true "
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
        <OpenLearningCard v-model="openLearningCardShow" :phone="ORGINFO.phone" @success="openLearningCardSuccess"></OpenLearningCard>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import { getTopicList } from '../../api/topic.js'
    import { subMajor,submajor as selectSubMajor,checkDistribute } from '../../api/study.js'
    import NoLearningCard from '../../components/NoLearningCard/NoLearningCard.vue'
    import OpenLearningCard from '../../components/OpenLearningCard/OpenLearningCard.vue'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import SubMajorSelect from '../../components/SubMajorPopup/SubMajorSelect.vue'
    import {authCourse} from '../../api/auth.js'
    import Carousel from '../../components/Carousel/Carousel.vue'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[],
                noLearningCardShow:false,
                openLearningCardShow:false,
                subMajor:{
                    parenPacktId:null,//有亚专业的情况，id值
                    show:false,
                    isSelect:false,
                    list:[]
                }
            }
        },
        methods: {
            openLearningCardSuccess(){
                window.location.reload();
            },
            practice(item,parenPacktId,subId = null){

                let self = this;
                //逻辑梳理
                //1.没有登录直接去登录
                //window.location.href = './topicList.html?packageId=' + item.packageId +'&courseId=' + item.id
                if(!self.USERINFO){
                    window.location.href = './login.html?from=topic';
                    return;
                }

                //2.用户是否有课程有权限，
                authCourse({courseId:item.id}).then(r=>{
                    if(0 == r){//没有权限
                        //判断用户是否已经分配卡
                        checkDistribute({packId:parenPacktId ? parenPacktId : item.packageId}).then(ka=>{
                            if(0 == ka || '0' == ka){//未分配
                                self.noLearningCardShow = true;
                                return;
                            }
                            if(1==ka || '1' ==ka){//已经分配

                                self.openLearningCardShow = true;
                                //这里弹出开卡界面;
                                return;
                            }

                        }).catch(_=>{});
                    }else {//有权限的情况在看是否有亚专业
                        if(parenPacktId && !self.subMajor.isSelect){//有亚专业 ，并且没有选择
                            self.subMajor.parenPacktId = parenPacktId;
                            //////////////
                            subMajor({coursePackId:parenPacktId}).then(item=>{
                                self.subMajor.list = item.subMajorList;
                                self.subMajor.show = true;
                            }).catch(_=>{})

                        }else {//没有亚专业 或者已经选择了压专业


                            window.location.href = './topicList.html?packageId=' + (subId ? subId : item.packageId) +'&courseId=' + item.id
                        }

                    }
                }).catch(_=>{})

            },
            selectSubMajor(id){
                selectSubMajor({
                    parentPackId:this.subMajor.parenPacktId,
                    coursePackId:id
                }).then(r=>{
                    //选择亚专业刷新页面，。
                    window.location.reload();
                    //window.location.href = './topicList.html?packageId=' + window.GpackageId +'&courseId=' + window.GcourseId
                }).catch(_=>{})
            }
        },
        mounted() {

            getTopicList().then(r=>{
                this.list = r.list;
                this.subMajor.isSelect = r.iSelect;

            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {EmptyTemplate,NoLearningCard,SubMajorSelect,OpenLearningCard,Carousel}
    }
</script>

