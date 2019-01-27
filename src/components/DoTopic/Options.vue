<template>
    <div class="do-topic-options">
        <ul v-if="options.length>0">
            <!--li 标签类说明 user-answer用户选择  is-answer标准答案-->
            <li  :class="[
                        {'user-answer':value.indexOf(option.optionName) != -1},
                        {'is-answer':correctAnswer.indexOf(option.optionName) != -1},
                    ]"
                    v-for="(option,index) in options"
                    :key="option.optionName"
                    @click="selectOption(option.optionName)"

            >
                <div class="options-val">{{ option.optionName }}</div>
                <div class="options-text">{{ option.optionContent }}</div>
                <div class="correct-answer-perch"></div>
            </li>

        </ul>
        <div v-else style="padding: 30px;text-align: center">暂无选项</div>
    </div>
</template>

<script>
    export default {
        name: 'Options',
        props: {
            options: {
                type: Array,
                default: function () {
                    return []
                }
            },
            value: Array,
            correctAnswer:{
                type: Array,
                default:function () {
                    return []
                }
            },
            type:{
                type: Number,
                default:1//1单选,其他为多选择
            },
        },
        data: function () {
            return {

            }
        },
        computed: {

        },
        methods: {
            selectOption(optionName){
                if((this.correctAnswer).length != 0 ){
                    return
                }
                if (1 == this.type){
                    this.$emit('input',[optionName]);
                }else {

                    let index = (this.value).indexOf(optionName);
                    if(index != -1){
                        this.value.splice(index,1);
                        this.$emit('input',[...this.value].sort());
                    }else {
                        this.$emit('input',[optionName,...this.value].sort());

                    }
                }
            }
        },

    }
</script>
<style lang="scss">
    @import "../../assets/css/var.scss";

    .do-topic-options {
        ul {
            margin: 0;
            padding: 0;
            li {
                display: flex;
                cursor: pointer;
                width: 100%;
                padding: 12px 30px 12px 12px;
                align-items: center;
                .options-val {
                    width: 24px;
                    height: 24px;
                    /*text-align: center;*/
                    /*line-height: 24px;*/
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 12px;
                    margin-right: 22px;
                    border-radius: 50%;
                    border: 1px solid #1B1B1B;
                    color: #333333;
                    font-size: 15px;
                }
                .options-text {
                    flex: 1;
                    color: #222;
                    font-size: 16px;
                }
                .correct-answer-perch {
                    width: 18px;
                    margin-left: 20px;
                    height: 18px;
                }
                &.is-answer {
                    background-color: #F2F8F6;
                    .correct-answer-perch {
                        background: url("./img/yes.png");
                        background-size: 100% 100%;
                    }
                }
                &.user-answer {
                    .options-val {
                        background-color: $--color-primary;
                        color: #fff;
                        border-color: $--color-primary;
                    }
                }
                &:hover {
                    background-color: #EFF5FC;
                }
            }
        }
    }
</style>
