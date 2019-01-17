
const devApiUrl = 'http://192.168.48.98:10003';

//正式环境变量,注意修改
const proApiUrl = 'https://testxtapi.hulian120.com';

const nodeDevEnv = process.env.NODE_ENV=='development' ? true : false;

export default {
    nodeDevEnv:nodeDevEnv,
    apiUrl : nodeDevEnv ? devApiUrl : proApiUrl,
    apiPrefix : "",
    timeout:5000,
    cookiesExpires:7,
    countDown:60,//短信验证码倒计时
    tokenKey:'ACCESS_TOKEN',
    storageUserKey:'JKCYXTPC_USER_STORAGE',
    storageOrgInfoKey:'JKCYXTPC_ORGINFO_STORAGE',
    storageExamInfoKey:'JKCYXTPC_EXAMINFO_STORAGE',//
    //{  testingId:'',  用于临时存储用户的考试答案。防止考试中途退出。提交答案就删除
    //   paperId:'',  下次进入考试，如果有数据并且id对应上，就询问用户是否恢复，不恢复也会删除答案。
    //   time:'',考试剩余时间
    //  topics:[]
    // }
    requestRetry:4,
    requestRetryDelay:800,
    shortLength:6, // 密码最小长度
    nav:{
        index:'学习',
        topic:'习题集',
        exam:'考试',
        message:'消息'
    },

}
