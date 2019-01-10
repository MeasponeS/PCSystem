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
    </div>
</template>

<script>
    export default {
        name: 'DoTopic',
        props: {
            msg: String
        }
    }
</script>
<style lang="scss">
    .do-topic {
        .do-topic-top{
            width: 100%;
            padding: 25px 16px;
            background: #F5F7F9;
            display: flex;

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
    }
</style>
