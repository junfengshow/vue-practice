/**
 * 
 * websocket 链接
 * 心跳检测 链接断开之后进行重连
 */
import pako from 'pako'
// socket 
function WebSocketImpl (url) {
  // socket 链接地址
  this.url = url
  // WebSocket 实例对象
  this.ws = null

  // 心跳检测定时器
  this.timer = null
  // 心跳检测间隔时间 毫秒
  this.MS = 2000
  // 创建链接
  this.createConnect(url)
}

WebSocketImpl.prototype.createConnect = function () {
  this.ws = new WebSocket(this.url)
  this.ws.onopen = this.onOpen.bind(this)
  this.ws.onmessage = this.onMessageChange.bind(this)
}

WebSocketImpl.prototype.onOpen = function () {
  // link success
  this.hartDetection()
}
WebSocketImpl.prototype.onMessageChange = function (evt) {
  const _this = this
  const _binary = evt.data
  // 读取二进制流
  let reader = new FileReader()
  reader.readAsBinaryString(_binary)
  reader.onload = () => {
    const _res = pako.inflate(reader.result, { to: 'string' })
    try {
      _this.onMessage(JSON.parse(_res))
    } catch (e) {
      console.log(e)
    }
  }
}

WebSocketImpl.prototype.onClose = function () {
  
}

// 心跳检测
WebSocketImpl.prototype.hartDetection = function () {
  this.timer = setTimeout(() => {
    clearTimeout(this.timer)
    if (this.ws.readyState !== 1) {
      // 检测出有问题了要重启
      console.log('出问题了')
      this.onDestroy()
      this.createConnect()
      return
    } 
    // 检测结果 ok 进入下一个检测
    this.hartDetection()
  }, this.MS) 
}

// 处理发送的消息
WebSocketImpl.prototype.onMessage = function (messageInfo) {
  console.log(messageInfo)
  // messageInfo.type === 'live:heat:change' 热度更改
  // messageInfo.type === 'live:user:join' 观众进入直播间
  // messageInfo.type === 'live:status:live' 直播状态改变
  // messageInfo.type === 'live:status:stream' 重新推流
  switch (messageInfo.type) {
    case 'live:heat:change':
    case 'live:user:join':
    case 'live:status:live':
    case 'live:status:stream':
    default:
      break
  }
}
WebSocketImpl.prototype.onDestroy = function () {
  if (this.ws) {
    this.ws.close()
    this.ws.onopen = null
    this.ws.onmessage = null
    this.ws = null
    clearTimeout(this.timer)
  }
}

export const getSocketInstance = (url, options) => {
  const wsImplInstance = new WebSocketImpl(url, options)

  return wsImplInstance
}
