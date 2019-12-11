import Vue from 'vue'
import App from './App.vue'
// 1 安装 vue-router
// 2 引入路由 --
// 3 路由组件 必须通过 router-view来实现
import router from './router';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 将 router 作为Vue实例的参数
  // 路由组件则可使用 this.$route 和 this.$router
  router
}).$mount('#app')
