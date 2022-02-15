import axios from 'axios'
import Cookie from 'js-cookie'
import md5 from 'js-md5'
import { Base64, cookieTokenName } from './base'
import qs from 'qs'
import { router } from '../main'

/**
 * 请求头处理
 */
const getHeader = () => {
   // 通用参数
   const commonParams = {
    a: 11,
    av: '1.2.3',
    c: 4,
    ci: 201,
    di: '1a00bf0e978c458f7620b390714b26cc',
    lat: '',
    lng: '',
    pm: '',
    pn: '',
    st: 1,
    sv: '',
    t: Cookie.get(cookieTokenName, { path: '/' }) || '',
    ts: new Date().getTime()
  }

  let toSign = ''
  Object.keys(commonParams).map((key)=> {
    toSign += '&' + key + '=' + commonParams[key]
  });
  toSign = toSign.substr(1) + commonParams.pn
  var sign = md5(toSign + ".security")
  commonParams.s = sign;
  let pkg = Base64.encode(JSON.stringify(commonParams))
  return { pkg }
};
export default (options = {}) => {
  options.headers = {
    ...getHeader(),
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  if (!options.method) {
    options.method = 'get'
  }
  if (options.method === 'get') {
    options.params = options.data
  } else {
    options.data = qs.stringify(options.data)
  }
  
  return new Promise((resolve, reject) => {
    axios(options)
    .then((res) => {
      const { data, status, statusText } = res
      if (status === 200) {
        if (data && data.code === 'OK') {
          resolve(data)
        } else if (data.code === 'TOKEN_INVALID') {
          // 登录失效
          router.push('/login')
        } else {
          reject(data.msg)
        }
      } else {
        reject(statusText)
      }
    })
    .catch(reject)
  })
}
