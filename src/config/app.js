
const devApiUrl = 'http://192.168.49.00:10005';

//正式环境变量,注意修改
const proApiUrl = 'https://pro.web.com';


const nodeDevEnv = process.env.NODE_ENV=='development' ? true : false;

export default {
    nodeDevEnv:nodeDevEnv,
    apiUrl : nodeDevEnv ? devApiUrl : proApiUrl,
    apiPrefix : "",
    timeout:1000,
    storageKey:'JKCYXTPC',
    requestRetry:4,
    requestRetryDelay:800,
    nav:{
        study:'学习',
        learningTopic:'习题集',
        exam:'考试',
        message:'消息'
    }
}
