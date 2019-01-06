<template>
  <div id="app">
    <Head></Head>
    <div class="container main-body">
      <!-- <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button> -->
      <div class="left">
        <nav>
          <Breadcrumb class="lessson">
            <a href="./index.html" slot="header">健康管理师</a>
            <a href="./message.html">健康管理概论</a>
            <a href="./login.html" slot="footer" class="native">本章节的学习目标</a>
          </Breadcrumb>
          <p>
            <a href="javascript:;">收藏</a>
            <span></span>
            <a href="javascript:;">上一节</a>
            <span></span>
            <a href="javascript:;">下一节</a>
          </p>
        </nav>
        <main>
          <h5>本章节的学习目标</h5>
          <p>
            新华社北京12月25日电 题：砺护国之剑，铸为民之盾——灾难面前彰显的中国力量、中国速度和中国精神<br>
            新华社记者齐中熙、叶昊鸣、杨洋<br>
            摊开中国地图，960多万平方公里土地上，山河纵横，风光无限。<br>
            幅员辽阔的土地养育了中华民族，复杂多样的地质、气候条件也造成灾害频发。我国是世界上自然灾害最为严重的国家之一，灾害种类多，分布地域广，发生频率高，造成损失重。<br>
            改革开放40年以来，在中国共产党领导下，中国人民一次次在各种灾害中顽强抗争、守望相助，一次次在废墟中挺直脊梁，彰显出伟大的中国力量、中国速度和中国精神。<br>
            中国力量——大灾大难面前，党的各级组织和广大党员、干部始终同人民群众同呼吸、共命运、心连心<br>
            走进四川省汶川县，一条条宽敞平坦的道路纵横交错，一幢幢整齐的楼房傲然矗立，一排排羌族特色商店鳞次栉比。谁能想到，10年前，一场里氏8.0级的大地震几乎将这里摧毁。<br>
            为了尽快帮助汶川人民恢复家园，党中央提出必须以人民为中心，贯彻“民生优先”原则，“三年重建完成、五任务紧迫，决心坚定。如今的汶川已脱胎换骨，展露新颜。2018年，汶川县退出贫困县序列，实现了脱贫摘帽。<br>
            苦难辉煌，砥砺前行。有党作“主心骨”，有全国人民做后盾，灾区干部群众内生动力喷发。<br>
            “灾后重建的背后，是广大党员干部以身体和家庭为代价的苦干付出，是心里只有群众唯独没有自己的真情奉献！”汶川县委书记张通荣说。<br>
            习近平总书记强调指出，防灾减灾救灾事关人民生命财产安全，事关社会和谐稳定，是衡量执政党领导力、检验政府执行力、评判国家动员力、体现民族凝聚力的一个重要方面。<br>
            　　党的十八大以来，面对各种灾害，在以习近平同志为核心的党中央坚强领导下，各方力量得以迅速集合形成强大合力。在党中央的领导下，中央部委和地方迅速行动，全力抢险救灾；关键时刻，基层党组织身先士卒、挺身而出；社会组织和个人团结协作，并肩战斗，汇聚成一方有难八方支援的时代洪流。
          </p>
        </main>
      </div>
      <div class="right">
        <p>选择课程<span>(共九门课程)</span></p>
        <el-collapse accordion class="accordion">
          <el-collapse-item>
            <template slot="title" class="course">
              <span>一. 健康管理通用课程<i class="header-icon el-icon-caret-right"></i></span>
            </template>
            <div class="now">当前课程章节</div>
            <div>1. 健康保险与健康管理</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
export default {
  name: "app",
  data: function() {
    return {};
  },
  methods: {},
  mounted() {},
  beforeDestroy: function() {},
  components: { Breadcrumb }
};
</script>

