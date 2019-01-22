import Vue from 'vue'

import App from './Index.vue'
import './index.scss'

import '../common.js'
import '../components.js'
import '../../utils/setHtmlFontSize.js'


new Vue({
    render: h => h(App)
}).$mount('#app')

