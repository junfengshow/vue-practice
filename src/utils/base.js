import { Base64 as Base64Npm } from 'js-base64'
export const Base64 = Base64Npm
export const cookieTokenName = '_test_tk_level_h5'
export { getSocketInstance } from './socket'

// 环境判断
const NODE_ENV = process.env.NODE_ENV
export const isDev = NODE_ENV === 'development'
