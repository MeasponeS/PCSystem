
const devApiUrl = 'https://testxtapi.hulian120.com';

//正式环境变量,注意修改
const proApiUrl = 'https://testxtapi.hulian120.com';


const nodeDevEnv = process.env.NODE_ENV=='development' ? true : false;

export default {
    nodeDevEnv:nodeDevEnv,
    apiUrl : nodeDevEnv ? devApiUrl : proApiUrl,
    apiPrefix : "",
    timeout:1600,
    cookiesExpires:7,
    tokenKey:'ACCESS_TOKEN',
    storageUserKey:'JKCYXTPC_USER_STORAGE',
    storageOrgInfoKey:'JKCYXTPC_ORGINFO_STORAGE',
    requestRetry:4,
    requestRetryDelay:800,
    nav:{
        index:'学习',
        topic:'习题集',
        exam:'考试',
        message:'消息'
    },

}
