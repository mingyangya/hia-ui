import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Storage } from '@/utils/storage'
import ElementUI from 'element-ui'

import '@/directive/zoom-img'

// const VConsole = require('vconsole')
// const vConsole = new VConsole()
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$storage = new Storage()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
