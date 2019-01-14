<template>
  <el-dialog
    width="405px"
    :visible.sync="value"
    custom-class="answer-popup-box"
    :show-close="false"
    :close-on-click-modal="false"
    center
  >
    <p>亚专业选择</p>
    <div><slot name="choose"></slot></div>
    <p>选择您报考的亚专业<span>（点击选择）</span></p>
    <ul><li v-for="item in subs" :key="item.id">{{item.name}}</li></ul>
    <span slot="footer" class="dialog-footer">
      <el-button @click="value = false">取 消</el-button>
      <el-button type="primary" @click="value = false">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: "SubMajorPopup",
  props: {
    value: Boolean,
    subs: Array
  },
  data: function() {
    return {
      
    };
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../assets/css/var.scss";

</style>
