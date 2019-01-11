<template>
    <div class="do-topic">
        <div class="do-topic-top">
            <div class="l">【单选】</div>
            <div class="r">
                李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，该
                病临床表现中一般不会出现的是：
                <p>a.多种训练交替进行，有所侧重，在不引起异常反应和过度疲劳的情况下，组建加大
                    活动量</p>
                <p>b.的方式多福多寿发生的股份的</p>
            </div>
        </div>

        <div class="do-topic-content has-title">
            <!--如果没有标题则不显示边框 和上边距 及背景色-->
            <div class="l"></div>
            <div class="r">
                <Options
                        :options='[
                     {"optionContent": "美国",  "optionName": "A"}, {
                "optionContent": "英国",
                     "optionName": "B"
             }, {"optionContent": "法国", "optionName": "C"}, {
                 "optionContent": "德国",
                     "optionName": "D"
             }, {"optionContent": "中国", "questionId": 37509, "optionName": "E"}
                    ]'
                >

                </Options>
            </div>

        </div>
        <div class="do-topic-content">
            <!--如果没有标题则不显示边框-->
            <div class="l"></div>
            <div class="r">
                <div class="title">
                    10. 李某，男，56岁。近来出现动作缓慢和双手抖动，到医院检查后诊断为帕金森病，
                    该病临床表现中一般不会出现的是：
                </div>
                <Options
                        :options='[
                     {"optionContent": "美国",  "optionName": "A"}, {
                "optionContent": "英国",
                     "optionName": "B"
             }, {"optionContent": "法国", "optionName": "C"}, {
                 "optionContent": "德国",
                     "optionName": "D"
             }, {"optionContent": "中国", "questionId": 37509, "optionName": "E"}
                    ]'
                >

                </Options>
            </div>

        </div>
    </div>
</template>

<script>
    import Options from './Options.vue'
    export default {
        name: 'DoTopic',
        props: {
            msg: String
        },
        components: {Options}
    }
</script>
<style lang="scss">
    .do-topic {
        .do-topic-top{
            width: 100%;
            padding: 25px 16px 25px 0;
            background: #F5F7F9;
            display: flex;
            border:1px solid #eee;
            .l{
                text-align: center;
                width: 77px;
                font-size: 18px;
                color: #2B60FF;
                border-right: 1px solid #eee;
            }
            .r{
                font-size: 18px;
                color: #222;
                margin-left: 12px;
                flex: 1;
                p{
                    font-size: 16px;
                }
            }
        }
        .do-topic-content{
            margin-top: 14px;
            padding: 30px 0;
            display: flex;
            background: #FCFCFC;
            border:1px solid #eee;
            &.has-title{
                background: none;
                margin-top: 0;
                border: none;
            }
            .l{
                width: 77px;
                border-right: 1px solid #eee;
            }
            .r{
                flex: 1;
                .title{
                    font-size: 18px;
                    color: #000;
                    padding: 0 35px 40px 12px;
                }
            }
        }

    }
</style>
