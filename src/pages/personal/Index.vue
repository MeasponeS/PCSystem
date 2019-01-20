<template>
    <div id="app">
      <Head :companyName="ORGINFO.orgName" :info="USERINFO" :msgCount="MSGCOUNT"></Head>
        <div class="container main-body">
           <div class="content ">
            <div class="header">
                <p>个人资料</p>
            </div>
                <div class="main">
                    <el-form ref="form" :model="form" label-width="100px" label-position="left" class="forms">
                    <el-form-item label="手机号" class="contentBox" >
                        <el-input v-model="form.phone" class="inputBox" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="真实姓名">
                        <el-input v-model="form.realname" class="inputBox"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" class="f2">
                        <el-select v-model="form.gender" placeholder="请选择性别" class="inputBox">
                            <el-option label="男" value="M"></el-option>
                            <el-option label="女" value="F"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="电子邮箱">
                        <el-input type="email" v-model="form.email" class="inputBox"></el-input>
                    </el-form-item>
                    <el-form-item label="所在地">
                        <el-cascader
                            :options="options"
                            v-model="form.location"
                            class="inputBox"
                        ></el-cascader>
                        </el-form-item>
                    <el-form-item label="学历" class="f2">
                        <el-select v-model="form.education" placeholder="请选择学历" class="inputBox">
                            <el-option v-for="item in eduType" :key="item.id" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="单位" class="f2">
                        <el-input v-model="form.orgname" class="inputBox"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" class="f2">
                        <el-input v-model="form.depname" class="inputBox"></el-input>
                    </el-form-item>
                    <el-form-item label="职称" class="f2">
                        <el-select v-model="form.title" placeholder="请选择职称" class="inputBox">
                            <el-option v-for="item in jobNames" :key="item.id" :label="item.name" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="参加工作时间" >
                        <el-date-picker type="month" placeholder="选择日期" v-model="form.workstart" class="inputBox"  value-format="yyyy/MM"></el-date-picker>
                    </el-form-item>
                    <el-button type="primary" class="button" @click="Preservation">保存</el-button>
                </el-form>

            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {getUserInfo,getDictionaryList,updateUserInfo} from '../../api/personal.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                form:{
                    phone:'',
                    realname:'',
                    gender:'',
                    email:'',
                    education:'',
                    orgname:'',
                    depname:'',
                    title:'',
                    workstart:'',
                    location: []
                },
                eduType:[],
                jobNames:[],
                options:[],
                contain:''
            }
        },
        methods: {
          Preservation(){
            let That = this;
            let formData = JSON.parse(JSON.stringify(That.form));
            formData.location = String(That.form.location[1]);
            updateUserInfo(formData).then(function(res){
                That.$message({
                    message: '信息修改成功',
                    type: 'success'
                });
            }).catch(_=>{})
          }
        },
        mounted() {
          let This = this;
          getUserInfo().then(function(res){
            This.form = res;
            This.form.location = [res.code.split('-')[0],res.code];
          }).catch(_=>{}),
          getDictionaryList().then(function(res){
            This.eduType = res.eduType;
            This.jobNames = res.jobNames;
            res.provinceCityList.map(function(item,index){
              This.options.push({'value': item.parent.code,'label': item.parent.name,'children': [] });
              item.childList.map(function(list,i){
                This.options[index].children.push({'value' : list.code,'label' : list.name});
              })
            })
          }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>
