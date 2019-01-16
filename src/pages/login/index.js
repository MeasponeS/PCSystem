import Vue from 'vue'
import App from './Index.vue'
import './index.scss'
import '../common.js'
import '../components.js'
import {getToken} from '../../utils/dataStorage.js'

if(getToken()){
    window.location.href = './index.html'
}

new Vue({
    render: h => h(App)
}).$mount('#app')



