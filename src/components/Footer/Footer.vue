<template>
    <div class="footer">
        <div class="container">
            <div>
                <span>Copyright © 2015 - 2018 hulian120.com. All Rights Reserved.</span>
                <br>
                <span>北京健康护航科技有限公司 版权所有 京ICP备14052782号-1 京公网安备11010802016577</span>
            </div>
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
        .container{
            height: 100%;
            color: #666666;
            text-align: center;
            display: flex;
            font-size: 12px;
            justify-content: center;
            line-height:18px;
            align-items: center;
        }
    }
</style>
