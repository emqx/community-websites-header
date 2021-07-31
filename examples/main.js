import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { EMQHeader } from '../packages'

Vue.config.productionTip = false

Vue.use(EMQHeader)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
