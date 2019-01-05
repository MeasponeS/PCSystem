<template>
  <div id="app">
    <Head></Head>
    <div class="container main-body">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
     


    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {};
  },
  methods: {},
  mounted() {},
  beforeDestroy: function() {},
  components: {}
};
</script>

