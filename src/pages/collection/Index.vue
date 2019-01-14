<template>
    <div id="app">
        <Head :companyName="ORGINFO.orgName" :info="USERINFO"></Head>
        <div class="container main-body">
            <div class="header">
                <div @click="type=0" :class="{active:type==0}">课程</div>
                <div class="mid"></div>
                <div @click="type=1" :class="{active:type==1}">习题</div>
            </div>
            <div class="lesson-content" v-show="type==0">
                <div class="content-header">
                    <div 
                        v-for="(item,index) in lesson.packageType" 
                        :key="index"
                        :show="index"
                        @click="lessons=item.name"
                        :class="{active:lessons==item.name}"
                        v-show="lessonShow"
                    >
                        {{item.name}}
                    </div>
                </div>
                <EmptyTemplate v-show="!lessonShow" msg="暂无收藏的课程" style="box-shadow:0 0 0" ></EmptyTemplate>
                <ul 
                    v-for="(item,index) in lesson.packageType"
                    :key="index"
                    v-show="lessons==item.name"
                    class="content" 
                >
                    <li
                        v-for="(item2,index2) in lesson.packageType[index].userFavorList"
                        :key="index2"
                    >
                        <p>{{item2.name}}</p>
                        <em></em>
                        <span>取消收藏</span>
                        <img src="./img/jiantouyou.png" alt="">
                    </li>
                </ul>
            </div>
            <div class="lesson-content" v-show="type==1">
                <div class="content-header">
                    <div 
                        v-for="(item,index) in topics.packageType" 
                        :key="index"
                        @click="lessons=item.name"
                        :class="{active:lessons==item.name}"
                        v-show="topicsShow"
                    >
                        {{item.name}}
                    </div>
                </div>
                <EmptyTemplate v-show="!topicsShow" msg="暂无收藏的习题"  style="box-shadow:0 0 0"></EmptyTemplate>
                <ul 
                    v-for="(item,index) in topics.packageType"
                    :key="index"
                    v-show="lessons==item.name"
                    class="content"
                >
                    <li
                        v-for="(item2,index2) in topics.packageType[index].userFavorList"
                        :key="index2"
                    >
                        <p>{{item2.name}}</p>
                        <em></em>
                        <span>取消收藏</span>
                        <img src="./img/jiantouyou.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import { getUserFavorList } from '../../api/other.js'
    import EmptyTemplate from '../../components/EmptyTemplate/EmptyTemplate'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        props:['hello'],
        data: function () {
            return {
                type:0,
                lessonShow:'',
                topicsShow:'',
                lessons:'',
                lesson:[],
                topics:[]
            }
        },
        methods: {},
        mounted() {
            getUserFavorList({type:0}).then(r=>{
                this.lesson = r;
                this.lessonShow = this.lesson.packageType.length
                this.lessons=this.lesson.packageType[0].name
            }).catch(_=>{})
            getUserFavorList({type:1}).then(r=>{
                this.topics = r;
                this.topicsShow = this.topics.packageType.length
                this.lessons=this.topics.packageType[0].name
            }).catch(_=>{});
        },
        beforeDestroy: function () {

        },
        components: {EmptyTemplate}
    }
</script>

