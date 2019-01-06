<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item><slot name="header"></slot></el-breadcrumb-item>
    <el-breadcrumb-item><slot></slot></el-breadcrumb-item>
    <el-breadcrumb-item><slot name="footer"></slot></el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  
}
</script>