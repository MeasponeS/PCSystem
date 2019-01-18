<template>
  <el-dialog
    width="405px"
    :visible.sync="value"
    custom-class="subMajorPopup"
    :show-close="false"
    :close-on-click-modal="false"
    center
  >
    <div class="sub-major-popup-content">
      <p class="header">亚专业选择</p>
      <div class="content"><slot name="choose"></slot></div>
      <p class="choose">选择您报考的亚专业<span>（点击选择）</span></p>
      <ul><li v-for="item in subs" :class="{active:id==item.packId}" :key="item.id" @click="selectMajor(item)"> <p class="major">{{item.name}}</p>  </li></ul>
      <div class="btn">
        <el-button @click="$emit('input',false)">取消</el-button>
        <el-button type="primary" @click="clickOk">确认</el-button>
      </div>
      <div class="line"></div>
    </div>
  </el-dialog>
</template>

<script>

export default {
  name: "SubMajorSelect",
  props: {
    value: Boolean,
    subs: Array,
    selectedHistoryPackId:{
        type:Number,
        default:0,
    }
  },
  data: function() {
    return {
      id:[],
    };
  },
  computed: {
    selectId:function () {
        return this.id;
    }
  },
  mounted(){
      this.id = this.selectedHistoryPackId
  },
  watch: {

  },
  methods: {
    selectMajor(item){
      this.id = item.packId;
    },
    clickOk(){
        if(this.id == 0 || this.id == '0'){
            this.$message('请先选择亚专业');
            return;
        }
        this.$emit('select',this.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../../assets/css/var.scss";
    .subMajorPopup{
      .el-dialog__header{
        padding: 0px;
      }
      .sub-major-popup-content{
        position: relative;
        .content{
          padding: 0 9px;
          font-size: 16px;
          color: #333;
          line-height: 24px;
        }
        p{
          margin: 0 ;
        }
        .header{
          font-size: 18px;
          color: #222;
          font-weight: bold;
          margin-bottom:23px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          &:before{
            content:'';
            display: inline-block;
            width:4px;
            height:18px;
            background:rgba(43,96,255,1);
            border-radius:2px;
            margin-right: 9px;
          }
        }
        .choose{
          margin: 25px 0;
          font-size: 18px;
          color: #222;
          font-weight: bold;
          margin-bottom:23px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          span{
            font-size: 14px;
          }
          &:before{
            content:'';
            display: inline-block;
            width:4px;
            height:18px;
            background:rgba(43,96,255,1);
            border-radius:2px;
            margin-right: 9px;
          }
        }
        ul{
          width: 352px;
          list-style: none;
          padding: 0;
          overflow: hidden;
          li{
            float: left;
            margin: 0 13px;
            display: flex;
            justify-content: center;
            align-items: center;
            width:148px;
            font-size: 14px;
            color:#333;
            height:29px;
            background:rgba(252,252,252,1);
            border:1px solid rgba(238,238,238,1);
            border-radius:15px;
            margin-bottom: 21px;
            text-align: center;
            .major{
              width: 128px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            cursor: pointer;
            &:hover{
              background:rgba(213,224,255,1);
              border:1px solid rgba(160,189,248,1);
              color:#2B60FF;
            }
          }
          .active{
            background:rgba(213,224,255,1);
            border:1px solid rgba(160,189,248,1);
            color:#2B60FF;
          }
        }
        .btn{
          text-align: center;
          margin-top: 23px;
          .el-button{
            width:166px;
            height:50px;
            font-size: 18px;
            border-radius:3px;
            &:first-child{
              border:1px solid rgba(43,96,255,1);
              color: #2656E6;
            }
          }
        }
        .line{
          position: absolute;
          left: -25px;
          bottom: 73px;
          display: block;
          width:405px;
          height:1px;
          background:rgba(243,245,247,1);
        }
      }
  }

</style>
