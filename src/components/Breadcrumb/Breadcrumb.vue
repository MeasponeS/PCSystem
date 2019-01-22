
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in nav">
        <a :style="'max-width:'+ (item.hasOwnProperty('width') ? ( item.width + 'px'):'168px') " class="breadcrumb-a" disabled :title="item.name">{{ item.name }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
    name: 'Breadcrumb',
    props: {
        nav: Array,
    }
}
</script>
<style lang="scss">
    .el-breadcrumb{
        line-height: 60px;
        span{
            span{
                a{
                    font-weight: normal;
                    color:#9D9D9D;
                }
                
            }
        }
    }
    .el-breadcrumb__separator[class*=icon]{
        font-size: 14px;
    }
    .breadcrumb-a{
        display: inline-block;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-weight: 100;
        color: #9D9D9D!important;
        font-size: 14px;
        cursor: pointer;
        &:hover,&[href='javascript:;']{
            color: #9D9D9D!important;
        }

    }
</style>
