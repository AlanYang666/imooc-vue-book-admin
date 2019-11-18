import Vue from 'vue'
import App from './App.vue'
// 完全加载方式 build打包后体积大
// 1 导入 element-ui 插件
// import ElementUI from 'element-ui';
// 2 导入 element-ui 样式
// import 'element-ui/lib/theme-chalk/index.css';
// 3 使用 element-ui 插件
// Vue.use(ElementUI);

// 手动 按需加载方式
// a 导入 需要的 element-ui 组件
import {Button, Message} from 'element-ui';
// b 将 需要的组件 放入到Vue中 无需处理 相关css
Vue.component(Button.name, Button)
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
