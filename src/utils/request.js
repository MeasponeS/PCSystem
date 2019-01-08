import Axios from 'axios'
import Config from '../config/app.js'
import { Notification  } from 'element-ui';

const service = Axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix,
    headers: {
        'Accept': '*/*'
    },
    timeout: Config.timeout
})
service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;

// service.interceptors.request.use(
//     config => {
//         let noParameters = config.url.indexOf('?')  == -1;
//         if (store.getters.token) {
//             //config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//             config.url = noParameters ? config.url+'?access_token='+ getToken(): config.url+'&token='+ getToken()
//         }
//         return config
//     },
//     error => {
//         Promise.reject(error)
//     }
// )



service.interceptors.response.use(
    response => {//Grade
        const res = response
        if (res.status !== 200) {
            Notification({
                title:'数据返回出错',
                type:'error'
            });
            return Promise.reject('error')
        } else {
            if(res.data.resultCode != 200){
                Notification({
                    title:res.data.message,
                    type:'error'
                });
                return Promise.reject('error');
            }
            return res.data.data
        }
    },
    error => {
        Notification({
            title:"请求未响应",
            type:'error'
        });
        return Promise.reject(error)
    }
)

export default service
