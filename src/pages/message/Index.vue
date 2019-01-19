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
                            <span>{{ list[currentMsgIndex].sendTime }}</span>
                            <p>{{ list[currentMsgIndex].noticeContent }}</p>
                            <a
                                    v-if="list[currentMsgIndex].noticeUrlType != 0"
                                    @click="clickToPage(list[currentMsgIndex].noticeUrlType)"
                            >点击前往</a>
                        </div>
                    </div>
                </div>
                <div class="rightBottom">
                    <ul>
                        <li v-for="(item,i) in list" @click="readMsg(i,item.isReceive,item.id)">
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
    import { getNotices ,readMag as readMsgApi } from '../../api/message.js'
    import {saveMsgCount,incrMsg,decrMsg} from '../../utils/dataStorage.js'
    export default {
        name: "app",
        mixins: [CommonMixin],
        data: function () {
            return {
                list: [],
                currentMsgIndex:0
            };
        },
        methods: {
            readMsg(index,isReceive,id){
                if(isReceive == 1){//已阅读。

                    this.currentMsgIndex = index
                    return;
                }
                readMsgApi({id:id}).then(r=>{

                    this.MSGCOUNT = decrMsg();
                    this.list[index].isReceive = 1;
                    this.currentMsgIndex = index

                }).catch(_=>{})
            },
            clickToPage(type){
                if(type == 1){
                    window.location.href = './study.html'
                }
                if(type == 2){
                    window.location.href = './exam.html'
                }
            },
        },
        mounted() {

            getNotices().then(r=>{
                this.MSGCOUNT = saveMsgCount(r.unReadCount);
                this.list = r.list || [];
                if(this.list.length != 0){
                    this.readMsg(0,this.list[0].isReceive,this.list[0].id);
                }
            }).catch(_=>{})
        },
        beforeDestroy: function () {
        },
        components: {Breadcrumb, EmptyTemplate}
    };
</script>

