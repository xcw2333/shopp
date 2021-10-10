import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElemateUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// use全局配置
Vue.use(ElemateUI)
// 全局样式
import './assets/style/global.css'
// 字体图标
import './assets/ico/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 设置配置请求的根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
