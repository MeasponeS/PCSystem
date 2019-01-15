<template>
    <div class="rect-progress" :style="'background: ' + attr.init.color ">
        <div class="bg-progress" :style="'width:' + progress + '%;' + 'background: ' + attr.end.color"></div>
        <span class="text">
            {{ progress <= attr.init.progress ? attr.init.text : attr.end.text }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'RectProgress',
        props: {
            attr:{
                type:Object,
                default:function () {
                    return {
                        init:{text:'未答',color:'#969FA9',progress:0},
                        end:{text:'已答',color:'#31b68f',progress:100}
                    }
                }
            },
            progress: Number
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/css/var.scss";
    .rect-progress{
        display: inline-block;
        width: 40px;
        height: 16px;
        border-radius: 2px;
        overflow: hidden;
        position: relative;
        .bg-progress{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            height: 100%;
            /*background: #52AD30;*/
            transition: width .45s ease-in-out;
        }
        .text{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            width: 100%;
            height: 100%;
            display: inline-block;
            font-size: 12px;
            color: #fff;
            text-align: center;
            line-height: 16px;
        }
    }
</style>
