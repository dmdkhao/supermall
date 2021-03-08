import Vue from 'vue'
import App from 'components/content/mainTabbar/MainTabBar'
import router from "@/router";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
