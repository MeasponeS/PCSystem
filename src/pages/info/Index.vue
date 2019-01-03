<template>
    <div id="app" class="container main-body">
        <Head></Head>
        <div class="content">
            <div class="header">
                <p>个人资料</p>
            </div>
                <div class="main">
                    <el-form ref="form" :model="form" label-width="100px" label-position="left" class="forms">
                    <el-form-item label="手机号" class="contentBox" >
                        <el-input v-model="form.tel" class="inputBox"></el-input>
                    </el-form-item>
                    <el-form-item label="真实姓名">
                        <el-input v-model="form.name" class="inputBox" ></el-input>
                    </el-form-item>
                    <el-form-item label="性别" class="f2">
                        <el-select v-model="form.sex" placeholder="请选择性别" class="inputBox">
                            <el-option label="男" value="male"></el-option>
                            <el-option label="女" value="female"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="电子邮箱">
                        <el-input v-model="form.mail" class="inputBox"></el-input>
                    </el-form-item>
                    <el-form-item label="所在地">
                        <el-cascader
                            :options="options"
                            v-model="selectedOptions3"
                            class="inputBox"
                        ></el-cascader>
                        </el-form-item>
                    <el-form-item label="学历" class="f2">
                        <el-select v-model="form.study" placeholder="请选择学历" class="inputBox">
                            <el-option label="博士" value="Doctor"></el-option>
                            <el-option label="硕士" value="Master"></el-option>
                            <el-option label="本科" value="Major"></el-option>
                            <el-option label="专科" value="Minor"></el-option>
                            <el-option label="高中及以下" value="Other"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="单位" class="f2">
                        <el-input v-model="form.unit" class="inputBox"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" class="f2">
                        <el-input v-model="form.department" class="inputBox"></el-input>
                    </el-form-item>
                    <el-form-item label="职称" class="f2">
                        <el-select v-model="form.title" placeholder="请选择职称" class="inputBox">
                            <el-option label="初级护士" value="primaryNurse"></el-option>
                            <el-option label="初级护师" value="nurseInCharge"></el-option>
                            <el-option label="主管护师" value="professorOfNursing"></el-option>
                            <el-option label="副主任护师" value="coChiefNurse"></el-option>
                            <el-option label="主任护师" value="chiefNurse"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="参加工作时间" > 
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" class="inputBox"></el-date-picker>
                    </el-form-item>
                    <el-row>
                        <el-button type="primary" class="button">保存</el-button>
                    </el-row>
                </el-form>
                
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                form:{
                    tel:'',
                    name:'',
                    sex:'',
                    mail:'',
                    study:'',
                    unit:'',
                    department:'',
                    title:''
                },
                options: [{
          value: 'zhinan',
          label: '北京',
          children: [{
            value: 'shejiyuanze',
            label: '朝阳区',
            children: [{
              value: 'yizhi',
              label: '东一路'
            }, {
              value: 'fankui',
              label: '东二路'
            }, {
              value: 'xiaolv',
              label: '东三路'
            }, {
              value: 'kekong',
              label: '东四路'
            }]
          }, {
            value: 'daohang',
            label: '海淀区',
            children: [{
              value: 'cexiangdaohang',
              label: '东一路'
            }, {
              value: 'dingbudaohang',
              label: '东二路'
            }]
          }]
        }, {
          value: 'zujian',
          label: '河北',
          children: [{
            value: 'basic',
            label: '石家庄市',
            children: [{
              value: 'layout',
              label: '东一区'
            }, {
              value: 'color',
              label: '东二区'
            }, {
              value: 'typography',
              label: '东三区'
            }, {
              value: 'icon',
              label: '东四区'
            }, {
              value: 'button',
              label: '东五区'
            }]
          }, {
            value: 'form',
            label: '唐山市',
            children: [{
              value: 'radio',
              label: '西一区'
            }, {
              value: 'checkbox',
              label: '西二区'
            }, {
              value: 'input',
              label: '西三区'
            }, {
              value: 'input-number',
              label: '西四区'
            }, {
              value: 'select',
              label: '西五区'
            }, {
              value: 'cascader',
              label: '西六区'
            }, {
              value: 'switch',
              label: '西六区'
            }, {
              value: 'slider',
              label: '西六区'
            }, {
              value: 'time-picker',
              label: '西六区'
            }, {
              value: 'date-picker',
              label: '西六区'
            }, {
              value: 'datetime-picker',
              label: '西六区'
            }, {
              value: 'upload',
              label: '西六区'
            }, {
              value: 'rate',
              label: '西六区'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          },  {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '天津',
          children: [{
            value: 'axure',
            label: '武清区'
          }, {
            value: 'sketch',
            label: '滨海新区'
          }, {
            value: 'jiaohu',
            label: '东丽区'
          }]
        }],
        selectedOptions3: ['zujian', 'data', 'tag']
            }
        },
        methods: {},
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>
