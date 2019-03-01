const devApiUrl = 'http://192.168.49.196:10003';

//正式环境变量,注意修改
const proApiUrl = 'https://raxtapi.hulian120.com';
//const proApiUrl = 'http://192.168.49.196:10003';

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
    storageExamHistoryKey:'JKCYXTPC_EXAMHISTORY_STORAGE',//
    storageMsgUnReadCountKey:'JKCYXTPC_MSG_UNREAD_COUNT',
    requestRetry:4,
    requestRetryDelay:800,
    shortLength:6, // 密码最小长度
    nav:{
        index:'首页',
        study:'学习',
        topic:'习题集',
        exam:'考试',
        message:'消息'
    },
}
