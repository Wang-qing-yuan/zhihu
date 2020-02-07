import Vue from 'vue'
import App from './App.vue'
import router from './router'
import RGBaster from './util/rgbaster.js'

//引入异步网络请求库axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios,RGBaster)

//引入全局统一存储库,使用Vuex状态管理
import store from './store/index.js';
Vue.prototype.$store = store;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
