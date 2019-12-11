/* eslint-disable */
// 1 安装 vue-router --
// 2 引入路由 
// 3 路由组件 必须通过 router-view来实现
// npm i -S vue-router
import Vue from 'vue';
import Route from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

// Vue 使用 vue-router插件
Vue.use(Route);
// 路由数组 包含路由配置对象
const routes = [
  {
    // path 千万别掉了 /
    path: '/hello-world',
    component: HelloWorld,
    // meta元信息 放自定义属性
    meta: {title: 'Hello-World'}
  },
  { path: '/a', component: () => import('./components/A'), meta: {title: 'A'}},
  { path: '/b', component: () => import('./components/B')}
]
// 创建路由 并导出
const router = new Route({
  routes
})


// 全局路由守卫 放在router.js全局配置中 因为不在组件中 所以无法使用this
// 每个路由都会触发
router.beforeEach((to, from, next) => {
  console.log('全局守卫-beforeEach-路由进入之前', to, from);
  // 处理页面 title 本质上属于路由全局配置 不应该放在组件的生命周期中处理
  document.title = to.meta.title || 'study router';
  next();
})
router.beforeResolve((to, from, next) => {
  console.log('全局守卫-beforeResolve-路由被解析之前', to, from);
  next();
})
// afterEach 没有第三个函数参数 next
router.afterEach((to, from) => {
  console.log('全局守卫-afterEach-路由进入之后', to, from);
})

export default router;
