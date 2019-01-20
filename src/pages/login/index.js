import Vue from 'vue'
import App from './Index.vue'
import './index.scss'
import '../common.js'
import '../components.js'
import {getToken,getUserInfo} from '../../utils/dataStorage.js'

if(getToken() && getUserInfo()){
    window.location.href = './index.html'
}

new Vue({
    render: h => h(App)
}).$mount('#app')



