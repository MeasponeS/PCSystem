import Vue from 'vue'
import ElementUI from 'element-ui';
import Head from '../../components/Head.vue'
import Footer from '../../components/Footer.vue'

import App from './Index.vue'
import '../common'
import './index.scss'
Vue.use(ElementUI);

Vue.component('Head', Head);
Vue.component('Footer', Footer);

new Vue({
  render: h => h(App)
}).$mount('#app')
