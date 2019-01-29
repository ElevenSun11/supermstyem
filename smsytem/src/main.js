import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';            // 组件文件（js）
import 'element-ui/lib/theme-chalk/index.css'; // 样式文件
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
