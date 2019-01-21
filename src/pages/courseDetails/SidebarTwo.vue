
<template>
   <div id="sidebar" class="course-details-sidebar chapter-list">
       <ul>
           <li
                   :class="collapseIndex== index ? 'open' : 'close'"
                   v-for="(item,index) in chapters"
                    :key="index"
                     @click="selectChapter(index,item)"
           >
               <div
                   :class="{active : activeChapterIndex.chapter == index}"
                    class="chapter" @click="collapseIndex = index"
               >
                   {{ index+1 }}. {{ item.name }}
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
                },

            };
        },
        //
        mounted(){
        },
        methods: {
            position(chapterId = false){
                if(!chapterId ) return;
                chapterId += ''
                for (let i = 0; i < this.chapters.length ; i++) {
                    let chapter = this.chapters[i];
                    if(chapter.id == chapterId){
                        this.collapseIndex = i;
                        this.activeChapterIndex.chapter = i;
                    }
                }
            },
            previousChapter(){//上
                let currentCI = this.activeChapterIndex.chapter;
                let collapseIndex = this.collapseIndex;

                if(currentCI == 0){
                    this.$message('已经是第一章了');
                } else {
                    currentCI --;
                    collapseIndex--;
                }
                if(collapseIndex != currentCI){
                    collapseIndex = currentCI;
                }
                let chapterId = this.chapters[currentCI];
                this.selectChapter(currentCI,chapterId,collapseIndex);
            },
            nextChapter(){//下
                let currentCI = this.activeChapterIndex.chapter;
                let collapseIndex = this.collapseIndex;

                if(
                    currentCI + 1 == this.chapters.length 
                ){
                    this.$message('已经是最后一章了');
                    return;
                }
                currentCI ++;
                collapseIndex++;
                let chapterId = this.chapters[currentCI];
                this.selectChapter(currentCI,chapterId,collapseIndex);
            },
            //用于切换章节
            //collapseIndex决定展开的章节和滚动条的位置。所以除了用户点击上一节和下一节之外，其他不应该传collapseIndex过来
            selectChapter(chapterIndex,chapterId,collapseIndex=null){
                let currentCI = this.activeChapterIndex.chapter;
                if(currentCI == chapterIndex){
                    return;
                }
                this.$emit('selectChapter',{chapterId:chapterId.id},_=>{
                    this.activeChapterIndex.chapter = chapterIndex;
                    if(collapseIndex == null)return;

                    this.collapseIndex = collapseIndex;
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
                 height: 500px;
                overflow: auto;
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
                    &.close .chapter:after{
                        background-image: url("./img/open.png");
                    }
                    &.open .chapter:after{
                        background-image: url("./img/open.png");
                    }
                }
            }
        }
    }
</style>
