import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/element'
import '@/plugins/data_v'
import '@/assets/css/global.css'
import './assets/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
