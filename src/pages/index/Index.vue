<template>
    <div id="app">
        <Head activeUrl="index" :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="container-fluid main-body">
            <img style="width: 100%" src="../../assets/img/temp/banner.jpg" alt="">
            <div class="container index-content">
                <div class="top">
                    我的课程 <span>上次学到：健康管理师系列课程(6.3萨达姆做好了战斗准备) 23:59:30</span>
                </div>
                <ul class="list">
                    <li>
                        <img src="../../assets/img/temp/index.jpg" alt="">
                        <div class="li-r">
                            <h2>2019初级护师畅通无忧班</h2>
                            <div class="info">
                                <el-popover
                                        title=""
                                        width="474"
                                        placement="bottom-end"
                                        trigger="hover"
                                >
                                    <div class="info-content">
                                        健康管理师国家职业资格考试课程是依据最新健康管理师考试大纲而设计开发的课程，涵盖基础知识及实操技能两大主题，7个课程模块。为了健康管理师从业人员奠定理论基础。
                                    </div>
                                    <div class="info-block" slot="reference">简介</div>
                                </el-popover>
                            </div>
                            <div class="course">
                                共180课时 <span>|</span> 13000人已学
                            </div>
                            <div class="progress">
                                <span>目前已完成1个课时，加油！</span>
                                <el-progress class="val" :percentage="70" :show-text="false"></el-progress>
                            </div>
                            <div class="list-btn">
                                <el-button type="primary">开始学习</el-button>
                                <el-button class="primary-btn">进入习题集</el-button>
                            </div>

                        </div>
                    </li>
                </ul>
                <EmptyTemplate img-key="Course" msg="当前学堂还没有安排任何课程"></EmptyTemplate>
            </div>
        </div>
        <Footer></Footer>
        <SubMajorPopup  
            :value="value" 
            :subs="list"
            @closeDialog="closeDialog"
            @getId="getId"
        >
            <template slot="choose">
                主管护师共设置护理学，内科护理、外课护理、妇产科护理、儿科护理、社区护理六个亚专业的考试护理学专业（中级）基础知识和相关专业知识考核内容相同，专业知识和专业实践能力根据报考亚专业的不同，所考核的内容不同（详见职称《考试那些事儿（中级）》）。
            </template>
        </SubMajorPopup>
    </div>
</template>

<script>
    import { courses } from '../../api/study.js'
    import CommonMixin from '../commonMixin.js'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import SubMajorPopup from '../../components/SubMajorPopup/SubMajorPopup.vue'

    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[
                    {id:1,name:"护理学（388）"},
                    {id:2,name:"护理学（388）"},
                    {id:3,name:"护理学（388）"},
                    {id:4,name:"护理学（388）"},
                    {id:5,name:"护理学（388）"},
                    {id:6,name:"护理学（388）"}
                ],
                id:'',
                value: true,
                NoLearningCard: true,
                OpenLearningCard: true,
            }
        },
        methods: {
            closeDialog(){
                this.value = false;
            },
            getId(id){
                this.id = id
            }
        },
        mounted() {
            courses().then(r=>{

            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {EmptyTemplate,SubMajorPopup}
    }
</script>

