<template>
    <div id="app">
        <Head activeUrl="topic" :companyName="ORGINFO.orgName"></Head>
        <div class="main-body">
            <div class="container content">
                <div class="nav">
                    <Breadcrumb
                            :nav="[
                            {url:'./topic.html',name:data.course.name,width:500},
                            {url:'javascript:;',name:'习题集'}
                        ]"
                    ></Breadcrumb>
                </div>
                <div class="topic-list">
                    <div class="topic-list-l">
                        <div class="top">
                            <ul>
                                <li :class="{active:0==tabActiveIndex}" @click="tabActiveIndex=0">全部</li>
                                <li :class="{active:1==tabActiveIndex}" @click="tabActiveIndex=1">未开始</li>
                                <li :class="{active:2==tabActiveIndex}" @click="tabActiveIndex=2">未通过</li>
                                <li :class="{active:3==tabActiveIndex}" @click="tabActiveIndex=3">已通过</li>
                            </ul>

                            <el-button @click="goError" class="primary-btn" style="padding: 8px 10px;">进入错题集</el-button>

                        </div>
                        <div v-show="0==tabActiveIndex" class="checkpoint">
                            <div class="li"
                                  :class=" item.isFinish | displayClass"
                                  v-for="(item,index) in [...data.levels.finished,...data.levels.prefinish,...data.levels.prestudy]"
                                  @click="topicDetails(item.id,index)"
                            >
                                <span>{{ item.isFinish | displayStatus }}</span>
                                第{{ item.sort }}关
                            </div>
                        </div>
                        <div v-show="1==tabActiveIndex" class="checkpoint">
                            <div class="li"
                                 :class=" item.isFinish | displayClass"
                                 v-for="(item,index) in data.levels.prestudy"
                                 @click="topicDetails(item.id,index)"
                            >
                                <span>{{ item.isFinish | displayStatus }}</span>
                                第{{ item.sort }}关
                            </div>
                        </div>
                        <div v-show="2==tabActiveIndex" class="checkpoint">
                            <div class="li"
                                 :class=" item.isFinish | displayClass"
                                 v-for="(item,index) in data.levels.prefinish"
                                 @click="topicDetails(item.id,index)"
                            >
                                <span>{{ item.isFinish | displayStatus }}</span>
                                第{{ item.sort }}关
                            </div>
                        </div>
                        <div v-show="3==tabActiveIndex" class="checkpoint">
                            <div class="li"
                                 :class=" item.isFinish | displayClass"
                                 v-for="(item,index) in data.levels.finished"
                                 @click="topicDetails(item.id,index)"
                            >
                                <span>{{ item.isFinish | displayStatus }}</span>
                                第{{ item.sort }}关
                            </div>
                        </div>
                    </div>
                    <div class="topic-list-r">
                        <div class="top">数据参考</div>
                        <div class="li">总练习人数： 0人</div>
                        <div class="li">总练习次数： 0次</div>
                        <div class="li">人均练习次数： 0次</div>
                        <div class="li">平均通关关卡： 0关</div>
                        <div class="li">通过全部关卡人数： 0人</div>

                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {getLevelList} from '../../api/topic.js'
    import {getUrlInfo} from '../../utils/dataStorage.js'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.vue'

    export default {
        name: 'app',
        mixins: [CommonMixin],
        filters: {
            displayStatus(status) {
                if (0 == status) {
                    return '未通过'
                }
                if (1 == status) {
                    return '已通过'
                }
                return '未开始'
            },
            displayClass(status) {
                if (0 == status) {
                    return 'unpass'
                }
                if (1 == status) {
                    return 'pass'
                }
                return ''
            },
        },
        data: function () {
            return {
                tabActiveIndex: 0,
                data: {
                    course: {},
                    levels: {
                        finished: [],
                        prefinish: [],
                        prestudy: []
                    }
                }
            }
        },
        methods: {
            topicDetails(levelId, index) {
                window.location.href = `./topicDetails.html?packageId=${getUrlInfo('packageId')}&courseId=${getUrlInfo('courseId')}&levelId=${levelId}`
            },
            goError(){
                window.location.href = `./topicError.html?packageId=${getUrlInfo('packageId')}&courseId=${getUrlInfo('courseId')}`
            }
        },
        mounted() {
            getLevelList({
                packageId: getUrlInfo('packageId'),
                courseId: getUrlInfo('courseId'),
            }).then(r => {
                this.data = r;
            }).catch(_ => {})
        },
        beforeDestroy: function () {
        },
        components: {Breadcrumb}
    }
</script>

