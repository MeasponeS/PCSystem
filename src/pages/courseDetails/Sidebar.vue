
<template>
   <div id="sidebar" class="course-details-sidebar chapter-list">
       <ul>
           <li
                   :class="collapseIndex== index ? 'open' : 'close'"
                   v-for="(item,index) in chapters"
                    :key="index"
           >
               <div
                   :class="{active : activeChapterIndex.chapter == index}"
                    class="chapter" @click="collapseIndex = index"
               >
                   {{ index+1 }}. {{ item.name }}
               </div>
               <div class="sub-chapter-list">
                   <ul>
                       <li
                               v-for="(sub,subIndex) in item.sub"
                               :class="{active : (activeChapterIndex.chapter == index)&&(activeChapterIndex.subChapter == subIndex) }"
                               @click="selectChapter(index,subIndex,item.id,sub)"
                               :key="subIndex"
                       >
                           <div class="sub-chapter">
                               <div class="sub-chapter-content">
                                   <div class="top">
                                       <div class="free" v-if="sub.vipType == 0">免费</div>
                                       <div class="title">{{ index+1 }}.{{ subIndex+1 }}.{{ sub.name }}</div>
                                   </div>
                                   <div class="info">
                                       <span class="fl">{{item.studySize}}人学过</span>
                                   </div>
                               </div>
                           </div>
                       </li>
                   </ul>
               </div>
           </li>
       </ul>
   </div>
</template>
<script>
    import { getUrlInfo } from '../../utils/dataStorage.js'
    export default {
        name: 'Sidebar',
        props: {
            chapters: Array,
        },
        data: function () {
            return {
                collapseIndex:0,//当前展开的章节索引
                activeChapterIndex:{
                    chapter:0,//当前激活的章节索引
                    subChapter:0,//当前激活的子章节索引
                },
                chapterId:'',
                courseId:''

            };
        },
        //
        mounted(){
            this.chapterId = getUrlInfo('chapterId');
            this.courseId = getUrlInfo('courseId');
        },
        methods: {
            previousChapter(){//上
                let currentCI = this.activeChapterIndex.chapter;
                let currentSCI = this.activeChapterIndex.subChapter;
                let collapseIndex = this.collapseIndex;

                if(currentCI == 0 &&  currentSCI == 0){
                    this.$message('已经是第一章了');
                    return;
                }

                if(currentSCI == 0){
                    currentCI --;
                    collapseIndex--;
                    currentSCI = ((this.chapters[currentCI].sub).length)-1;
                }else {
                    if(collapseIndex != currentCI){
                        collapseIndex = currentCI;
                    }
                    currentSCI --;
                }

                let chapterId = this.chapters[currentCI].id;
                let subChapterId =this.chapters[currentCI].sub[currentSCI];
                this.selectChapter(currentCI,currentSCI,chapterId,subChapterId,collapseIndex);
            },
            nextChapter(){//下
                let currentCI = this.activeChapterIndex.chapter;
                let currentSCI = this.activeChapterIndex.subChapter;
                let collapseIndex = this.collapseIndex;

                if(
                    currentCI + 1 == this.chapters.length &&
                    currentSCI + 1 == (this.chapters[currentCI].sub).length
                ){
                    this.$message('已经是最后一章了');
                    return;
                }

                if(currentSCI == ((this.chapters[currentCI].sub).length)-1){
                    currentCI ++;
                    collapseIndex++;
                    currentSCI = 0;
                }else {
                    if(collapseIndex != currentCI){
                        collapseIndex = currentCI;
                    }
                    currentSCI ++;
                }

                let chapterId = this.chapters[currentCI].id;
                let subChapterId =this.chapters[currentCI].sub[currentSCI];
                this.selectChapter(currentCI,currentSCI,chapterId,subChapterId,collapseIndex);
            },
            //用于切换章节
            //collapseIndex决定展开的章节和滚动条的位置。所以除了用户点击上一节和下一节之外，其他不应该传collapseIndex过来
            selectChapter(chapterIndex,subChapterIndex,chapterId,subChapterId,collapseIndex=null){
                let currentCI = this.activeChapterIndex.chapter;
                let currentSCI = this.activeChapterIndex.subChapter;
                if(currentCI == chapterIndex && currentSCI == subChapterIndex){
                    return;
                }


                this.$emit('selectChapter',{chapterId:chapterId,subChapterId:subChapterId},_=>{
                    this.activeChapterIndex.chapter = chapterIndex;
                    this.activeChapterIndex.subChapter = subChapterIndex;
                    if(collapseIndex == null)return;

                    this.collapseIndex = collapseIndex;
                    //滚动条
                    setTimeout(_=>{

                        let sidebarLi = document.querySelectorAll('#sidebar>ul>li');
                        let activeSidebar = sidebarLi[chapterIndex].querySelectorAll('ul');
                        activeSidebar[0].scroll(0,(subChapterIndex)*75);
                    },200)

                });
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/css/var.scss';
    .course-details-sidebar{
        &.chapter-list {
            width: 100%;
            >ul{
                margin: 0;
                padding: 0;
                >li{
                    list-style-type: none;
                    //overflow: hidden;
                    border-bottom: 1px solid #E5E5E5;

                    .chapter{
                        cursor: pointer;
                        width: 100%;
                        height: 55px;
                        line-height: 55px;
                        color: #333;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        padding: 0 23px 0 53px;
                        font-size: 16px;
                        position: relative;
                        &.active{
                            color: $--color-primary;
                        }
                        &:hover{
                            //color: $--color-primary;
                        }
                        &:after{
                            content: ' ';
                            position: absolute;
                            left: 20px;
                            top: 20px;
                            width: 18px;
                            height: 18px;
                            background-size: 100% 100%;
                        }
                    }
                    &.open .chapter:before{
                        content: ' ';
                        position: absolute;
                        left: 28px;
                        top: 38px;
                        width: 2px;
                        height: 20px;
                        background: #9BB4FF;
                    }
                    &.close .chapter:after{
                        background-image: url("./img/close.png");
                    }
                    &.open .chapter:after{
                        background-image: url("./img/open.png");
                    }
                    .sub-chapter-list{
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                        >ul{
                            height: 300px;
                            overflow: auto;
                            padding: 0;
                            margin: 0;
                            transition: height ease-in-out .45s;
                            >li{

                                //width: 100%;
                                list-style-type: none;
                                position: relative;
                                cursor: pointer;
                                &:hover,&.active{
                                    background: #F2F8FF;
                                }
                                .sub-chapter{
                                    border-left: 2px solid #9BB4FF;
                                    height: 75px;
                                    margin-left: 28px;
                                    position: relative;
                                    &:before{
                                        content: ' ';
                                        position: absolute;
                                        left: -8px;
                                        top: 22px;
                                        width: 14px;
                                        height: 14px;
                                        border-radius: 50%;
                                        background: #9BB4FF;
                                    }
                                    .sub-chapter-content{
                                        height: 100%;
                                        padding: 18px 24px;
                                        margin-left: 30px;
                                        border-top: 1px solid #E5E5E5;
                                        .top{
                                            display: flex;
                                            .free{
                                                width: 40px;
                                                height: 16px;
                                                color: #fff;
                                                text-align: center;
                                                line-height: 16px;
                                                border-radius: 2px;
                                                font-size: 12px;
                                                background: #FF5555;
                                            }
                                            .title{
                                                flex: 1;
                                                overflow: hidden;
                                                text-overflow:ellipsis;
                                                white-space: nowrap;
                                                font-size:14px;
                                                color: #333;
                                            }
                                        }
                                        .info{
                                            margin-top: 12px;
                                            width: 100%;
                                            span{
                                                color: #666;
                                                font-size: 12px;
                                            }
                                        }
                                    }
                                }
                                &.active .sub-chapter .sub-chapter-content .top .title{
                                    color: #2961FF;
                                }

                            }
                        }
                    }
                    &.close .sub-chapter-list>ul{
                        height: 0;
                    }
                }


            }
        }
    }
</style>
