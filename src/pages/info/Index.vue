<template>
    <div id="app" class="container main-body">
        <Head></Head>
        <div>
            <div class="header">
                <p>个人资料</p>
            </div>
            <el-form ref="form" :model="form" label-width="398px">
                <el-form-item label="手机号" >
                    <el-input v-model="form.tel" class="input"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="form.name" class="input"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="form.sex" placeholder="请选择性别" class="input">
                        <el-option label="男" value="male"></el-option>
                        <el-option label="女" value="female"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电子邮箱">
                    <el-input v-model="form.mail" class="input"></el-input>
                </el-form-item>
                <el-form-item label="学历">
                    <el-select v-model="form.study" placeholder="请选择学历" class="input">
                        <el-option label="博士" value="Doctor"></el-option>
                        <el-option label="硕士" value="Master"></el-option>
                        <el-option label="本科" value="Major"></el-option>
                        <el-option label="专科" value="Minor"></el-option>
                        <el-option label="高中及以下" value="Other"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="单位">
                    <el-input v-model="form.unit" class="input"></el-input>
                </el-form-item>
                <el-form-item label="部门">
                    <el-input v-model="form.department" class="input"></el-input>
                </el-form-item>
                <el-form-item label="职称">
                    <el-select v-model="form.title" placeholder="请选择职称" class="input">
                        <el-option label="初级护士" value="primaryNurse"></el-option>
                        <el-option label="初级护师" value="nurseInCharge"></el-option>
                        <el-option label="主管护师" value="professorOfNursing"></el-option>
                        <el-option label="副主任护师" value="coChiefNurse"></el-option>
                        <el-option label="主任护师" value="chiefNurse"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="参加工作时间" class="input">
                    <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" ></el-date-picker>
                    </el-col>
                </el-form-item>
            </el-form>
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
                }
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

<style scoped>
    .header{
        width: 100%;
        height: 62px;
    }
    
    .input{
        width: 474px;
        height: 56px;
        margin-left: 70px;
    }
</style>