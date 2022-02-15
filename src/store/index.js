/**
 * 
 * 应用store总入口
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { isDev } from '@/utils/base';

Vue.use(Vuex);

import actions from './actions';
import mutations from './mutations';

const _plugins = [];
if (isDev) {
  _plugins.push(
    createLogger({
      collapsed: false
    })
  );
}

const store = new Vuex.Store({
  state: {
    count: 0,
    userInfo: {},
    pageConfig: {
      configLoading: true
    },
    mineInfo: {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    ...mutations
  },
  actions: {
    ...actions
  },

  // 模块
  modules: {
    
  },
  // 插件
  plugins: _plugins
});
export default store;
