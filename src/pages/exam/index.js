import Vue from 'vue'

import App from './Index.vue'
import './index.scss'

import '../common.js'
import '../components.js'
import {isLogin} from '../../utils/dataStorage.js'

if(!isLogin()){
    window.location.href = './login.html'
}
new Vue({
  render: h => h(App)
}).$mount('#app')
