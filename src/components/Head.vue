<template>
    <div class="head">
        <div class="container">
            这里是公共的头部.还没写
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Head',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .head{
       height: 100px;
       width: 100%;
       background-color: #fff;
       border-bottom: 1px solid #DFDFDF;
   }
</style>
