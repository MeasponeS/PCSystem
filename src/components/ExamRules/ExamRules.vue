<template>
    <div class="exam-rules">
        <el-dialog
                title="提示"
                :visible.sync="value"
                custom-class="exam-rules-dialog"
                :show-close="false"
                :close-on-click-modal="false"
                >
            <span slot="title"></span>
            <div class="rules">
                <h1 class="rules-header">考试须知</h1>
                <div class="rules-content">
                    北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心和综合交通枢纽，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员会所在地，也是中部战区司令部驻地。
                        北京位于华北平原北部，背靠燕山，毗邻天津市和河北省。北京的气候为典型的北温带半湿润大陆性季风气候。
                    北京是首批国家历史文化名城和世界上拥有世界文化遗产数最多的城市，三千多年的历史孕育了故宫、天坛、八达岭长城、颐和园等众多名胜古迹。早在七十万年前，北京周口店地区就出现了原始人群部落“北京人”。公元前1045年，北京成为蓟、燕等诸侯国的都城。公元938年以来，北京先后成为辽陪都、金中都、元大都、明、清国都。明清时期，北京成为“天下四聚”之一，中华民国时期曾是北洋政府首都，1949年10月1日成为中华人民共和国首都。
                    北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心和综合交通枢纽，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员会所在地，也是中部战区司令部驻地。
                        北京位于华北平原北部，背靠燕山，毗邻天津市和河北省。北京的气候为典型的北温带半湿润大陆性季风气候。
                    北京是首批国家历史文化名城和世界上拥有世界文化遗产数最多的城市，三千多年的历史孕育了故宫、天坛、八达岭长城、颐和园等众多名胜古迹。早在七十万年前，北京周口店地区就出现了原始人群部落“北京人”。公元前1045年，北京成为蓟、燕等诸侯国的都城。公元938年以来，北京先后成为辽陪都、金中都、元大都、明、清国都。明清时期，北京成为“天下四聚”之一，中华民国时期曾是北洋政府首都，1949年10月1日成为中华人民共和国首都。
                    北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心和综合交通枢纽，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员会所在地，也是中部战区司令部驻地。
                        北京位于华北平原北部，背靠燕山，毗邻天津市和河北省。北京的气候为典型的北温带半湿润大陆性季风气候。
                    北京是首批国家历史文化名城和世界上拥有世界文化遗产数最多的城市，三千多年的历史孕育了故宫、天坛、八达岭长城、颐和园等众多名胜古迹。早在七十万年前，北京周口店地区就出现了原始人群部落“北京人”。公元前1045年，北京成为蓟、燕等诸侯国的都城。公元938年以来，北京先后成为辽陪都、金中都、元大都、明、清国都。明清时期，北京成为“天下四聚”之一，中华民国时期曾是北洋政府首都，1949年10月1日成为中华人民共和国首都。
                </div>
                <el-button  @click="$emit('input',false)" plain class="primary-btn btn btnLeft">取消</el-button>
               <el-button @click="$emit('startExam')" type="primary" class="btn btnRight">开始考试</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'ExamRules',
        props:{
            value:Boolean,
        }
    }
</script>

<style lang="scss" >
    @import '../../assets/css/var.scss';
    .exam-rules{
        .el-dialog__wrapper{
            background:rgba(251,251,251,0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            .el-dialog__header{
            padding: 0;
                height: 0;
            }
            .exam-rules-dialog{
                border-radius: 5px;
                margin-top: 0!important;
                margin: 0;
                width: 746px;
                height: 684px;
                .el-dialog__body{
                padding: 0;
                .rules{
                    margin:0;
                    text-align: center;
                    .rules-header{
                        width: 100%;
                        text-align: center;
                        font-size: 24px;
                        line-height: 80px;
                        font-weight:bold;
                        margin-top: 0;
                        color:$--color-default;
                        background: url(./img/考试通知.png) ;
                    }
                    .rules-content{
                        font-size: 16px;
                        width: 668px;
                        height: 449px;
                        margin: 0 auto;
                        padding:39px 35px;
                        line-height: 30px;
                        overflow:auto;
                        color: #333;
                    }
                    .btn{
                        width: 200px;
                        height: 50px;
                        margin: 5px;
                        margin-top: 46px;
                    }
                    .btnLeft{
                        &:hover{
                            background: $--color-primary;
                            color: $--color-default;
                        }
                    }
                }
            }
        }
    }
    }

</style>
