import { getProfile, getInitConfig } from '@/services/common'
import { PAGE_CONFIG_INIT, PAGE_GET_PROFILE } from './actionTypes'

const actions = {
  getUserInfo: async function ({ commit }) {
    const { data } = await getProfile();
    commit({
      type: 'getUserInfo',
      data,
    });
  },
  // 获取页面配置
  [PAGE_CONFIG_INIT]: async function ({ commit }) {
    try {
      const { code, data } = await getInitConfig();
      if (code === 'ok') {
        const { channelConfig, forbiddenWordOptions, priceConfig } = data;
        // const liveCategories = [
        //   { categoryId: 'focus', categoryName: '关注' }, 
        //   { categoryId: 'suggest', categoryName: '推荐' }, 
        //   { categoryId: 'near', categoryName: '附近' }, 
        // ].concat(channelConfig.liveCategories)

        const pageConfig = {
          configLoading: false,
          ...channelConfig,
          // liveCategories,
          forbiddenWordOptions,
          priceConfig
        };
        commit(PAGE_CONFIG_INIT, { pageConfig });
      }
    } catch (e) {
      console.log(e)
    } 
  },
  // 获取用户信息
  [PAGE_GET_PROFILE]: async function ({ commit }) {
    const { code, data } = await getProfile()
    if (code === 'OK' && data) {
      const mineInfo = data
      commit(PAGE_GET_PROFILE, { mineInfo })
    }
  }
}
export default actions
