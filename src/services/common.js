
export const getProfile = async () => {
  return {
    name: 'zhangsan'
  }
}
export const getInitConfig = async () => {
  return {
    data: {
      channelConfig: {}, 
      forbiddenWordOptions: {}, 
      priceConfig: {},
    },
    code: 'ok',
  }
}
