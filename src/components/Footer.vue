<template>
    <div class="footer">
        <div class="container">
            这里是公共的底部.还没写
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer{
        height: 76px;
        width: 100%;
        background-color: #fff;
        box-shadow:0 0 6px 0 rgba(174,174,174,0.14);
    }
</style>
