<template>
    <div id="app">
        <Head activeUrl="message" :logoUrl="ORGINFO.logo" :info="USERINFO"></Head>
        <div class="wrapper">
            <div class="container main-body" v-if="show">
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
                    <div class="all" v-show="message=='message1'">
                        <img src="./img/message.png" alt="">
                        <div class="content">
                            <strong>这里是消息标题</strong>
                            <span>2018.12.19 13:00:00</span>
                            <p>
                                这是正文正文文这是正文正文正文这是正文正文正文这是正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文</p>
                            <a href="##">这里是可能出现的考场链接、课程链接</a>
                        </div>
                    </div>
                    <div class="all" v-show="message=='message2'">
                        <img src="./img/message.png" alt="">
                        <div class="content">
                            <strong>这里是消息标题</strong>
                            <span>2018.12.19 13:00:00</span>
                            <p>
                                这是正文正文文这是2正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文</p>
                            <a href="##">这里是可能出现的考场链接、课程链接</a>
                        </div>
                    </div>
                    <div class="all" v-show="message=='message3'">
                        <img src="./img/message.png" alt="">
                        <div class="content">
                            <strong>这里是消息标题</strong>
                            <span>2018.12.19 13:00:00</span>
                            <p>
                                这是正文正文文这是正文正3文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文</p>
                            <a href="##">这里是可能出现的考场链接、课程链接</a>
                        </div>
                    </div>
                    <div class="all" v-show="message=='message4'">
                        <img src="./img/message.png" alt="">
                        <div class="content">
                            <strong>这里是消息标题</strong>
                            <span>2018.12.19 13:00:00</span>
                            <p>这是正文4</p>
                            <a href="##">这里是可能出现的考场链接、课程链接</a>
                        </div>
                    </div>
                    <div class="all" v-show="message=='message5'">
                        <img src="./img/message.png" alt="">
                        <div class="content">
                            <strong>这里是消息标题</strong>
                            <span>2018.12.19 13:00:00</span>
                            <p>
                                这是正文5正文正文这是正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文这是正文正文正文</p>
                            <a href="##">这里是可能出现的考场链接、课程链接</a>
                        </div>
                    </div>
                </div>
                <div class="rightBottom">
                    <ul>
                        <li>
                            <span class="unread">未读</span>
                            <strong @click="message='message1'">2018年执业护士考试测评第一次</strong>
                            <h4>2018.12.19 13:00:05</h4>
                        </li>
                        <li>
                            <span class="read">已读</span>
                            <strong @click="message='message2'">有可能长有可能短是不是很对</strong>
                            <h4>2018.12.19 13:00:04</h4>
                        </li>
                        <li>
                            <span class="read">已读</span>
                            <strong @click="message='message3'">不知道是不是有可能没有标题</strong>
                            <h4>2018.12.19 13:00:03</h4>
                        </li>
                        <li>
                            <span class="read">已读</span>
                            <strong @click="message='message4'">这里是消息标题哈哈哈哈哈哈哈哈哈哈或或或或或或</strong>
                            <h4>2018.12.19 13:00:02</h4>
                        </li>
                        <li>
                            <span class="read">已读</span>
                            <strong @click="message='message5'">不知道放这里合不合适啊我也不知道啊你问我干什么我真的不知道</strong>
                            <h4>2018.12.19 13:00:01</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <EmptyTemplate v-if="!show" msg="暂无任何消息" imgKey="Msg"></EmptyTemplate>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate.vue'
    import { getNotices } from '../../api/other.js'
    export default {
        name: "app",
        mixins: [CommonMixin],
        data: function () {
            return {
                message: 'message1',
                show: true
            };
        },
        methods: {},
        mounted() {
            getNotices({page:1}).then(r=>{
                console.log(r);
                
            }).catch(_=>{})
        },
        beforeDestroy: function () {
        },
        components: {Breadcrumb, EmptyTemplate}
    };
</script>

