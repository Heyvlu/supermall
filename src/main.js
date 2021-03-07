import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/iconfont/iconfont'
import 'assets/css/iconfont/icon.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
