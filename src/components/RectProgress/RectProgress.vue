<template>
    <div class="rect-progress">
        <div class="bg-progress" :style="'width:' + progress + '%'"></div>
        <span class="text">
            {{ progress == 0 ? '未答':'已答' }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'RectProgress',
        props: {
            progress: Number
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .rect-progress{
        display: inline-block;
        width: 40px;
        height: 16px;
        background: #969FA9;
        border-radius: 2px;
        overflow: hidden;
        position: relative;
        .bg-progress{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            height: 100%;
            background: #52AD30;
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
