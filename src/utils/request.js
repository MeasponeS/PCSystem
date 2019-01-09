import Axios from 'axios'
import Config from '../config/app.js'
import { Notification,Loading  } from 'element-ui';
import {getToken} from '../utils/dataStorage.js'

const service = Axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix,
    headers: {
        'Accept': '*/*'
    },
    timeout: Config.timeout
})
service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;

service.interceptors.request.use(
    config => {
        window.loadingInstance = Loading.service();

        let noParameters = config.url.indexOf('?')  == -1;
        //config.headers['X-Token'] = getToken() //
        config.url = noParameters ? config.url+'?access_token=' + getToken(): config.url+'&access_token='+ getToken();

        return config
    },
    error => {
        Promise.reject(error)
    }
)



service.interceptors.response.use(
    response => {//Grade
        window.loadingInstance.close();

        const res = response
        if (res.status !== 200) {
            Notification({
                title:'数据返回出错',
                message:"请稍后重试",
                type:'error'
            });
            //return Promise.reject('error')
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
            message:"服务器可能出了点问题",
            type:'error'
        });
        //return Promise.reject(error)
    }
)

export default service
