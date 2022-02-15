import 'amfe-flexible';

import './global.scss';
import Vue from 'vue';

// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.css';

// NutUI.install(Vue);

// 自定义组件
import { injection } from './components'
injection(Vue)

// vuex
import store from './store'

// import App from './App.vue'
import Layout from './layouts'
import VueRouter from 'vue-router'
import { routes } from './pages'

Vue.config.productionTip = false
Vue.use(VueRouter)
export const router = new VueRouter({ 
  routes,
  mode: 'history' 
})

new Vue({
  router,
  store,
  render: h => h(Layout),
}).$mount('#app')
