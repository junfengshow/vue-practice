
import { PAGE_CONFIG_INIT, PAGE_GET_PROFILE } from './actionTypes';

const mutations = {
  getUserInfo: function (state, { data }) {
    state.userInfo = data;
  },
  // 获取页面配置
  [PAGE_CONFIG_INIT]: function (state, payload) {
    // state.pageConfig = payload
    return Object.assign(state, payload);
  },
  // 获取用户信息
  [PAGE_GET_PROFILE]: function (state, payload) {
    return Object.assign(state, payload);
  },
};
export default mutations;
