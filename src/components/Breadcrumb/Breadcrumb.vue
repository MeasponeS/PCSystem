
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in nav">
        <a :style="'max-width:'+ (item.hasOwnProperty('width') ? ( item.width + 'px'):'168px') " class="breadcrumb-a" :href="item.url" :title="item.name">{{ item.name }}</a>
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
        line-height: unset!important;
    }
    .el-breadcrumb__separator[class*=icon]{
        font-size: 14px;
    }
    .breadcrumb-a{
        display: inline-block;
        height: 24px;
        position: relative;
        top: 5px;
        line-height: 24px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        color: #26292F;
        font-size: 14px;
        cursor: pointer;
        &:hover,&[href='javascript:;']{
            color: #4F7FFB!important;
        }

    }
</style>
