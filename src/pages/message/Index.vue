<template>
    <div id="app">
        <Head activeUrl="'message'" :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="wrapper" >
            <div class="container main-body" v-if="list.length != 0">
                <div class="leftTop">
                    <Breadcrumb class="message"
                                :nav="[
                            {url:'./message.html',name:'消息列表'},
                            {url:'javascript:;',name:'消息详情'}
                        ]"
                    ></Breadcrumb>
                </div>
                <div class="rightTop">消息列表</div>
                <div class="leftBottom">
                    <div class="all">
                        <img src="./img/message.png" alt="">
                        <div class="content">
                            <strong>{{ list[currentMsgIndex].noticeTitle }}</strong>
                            <span>2018.12.19 13:00:00</span>
                            <p>
                                这是正文正文文这是正文正文正文这是正文正文正文这是正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文</p>
                            <a href="##">这里是可能出现的考场链接、课程链接</a>
                        </div>
                    </div>
                </div>
                <div class="rightBottom">
                    <ul>
                        <li v-for="item in list">
                            <span :class="(item.isReceive == 1 ? '':'un')+'read'">{{ item.isReceive == 1?'已读':'未读' }}</span>
                            <strong>{{ item.noticeTitle }}</strong>
                            <h4>{{ item.sendTime }}</h4>
                        </li>
                    </ul>
                </div>
            </div>
            <EmptyTemplate v-else msg="暂无任何消息" imgKey="Msg"></EmptyTemplate>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import { getNotices } from '../../api/message.js'
    import {saveMsgCount} from '../../utils/dataStorage.js'
    export default {
        name: "app",
        mixins: [CommonMixin],
        data: function () {
            return {
                list: [],
                currentMsgIndex:0
            };
        },
        methods: {},
        mounted() {
            getNotices().then(r=>{
                this.MSGCOUNT = saveMsgCount(r.unReadCount);
                this.list = r.list || [];

            }).catch(_=>{})
        },
        beforeDestroy: function () {
        },
        components: {Breadcrumb, EmptyTemplate}
    };
</script>

