const path = require('path')
module.exports = {
  devServer: {
    proxy: {
      '/api-app': {
        target: 'http://api.junfengshow.com',
        changeOrigin: true,
        //pathRewrite: { '^/server': '' },
      },
      '/api-common': {
        target: 'http://api.junfengshow.com',
        changeOrigin: true,
        //pathRewrite: { '^/server': '' },
      },
    }
  },
  css: {
    modules: false,
    loaderOptions: {
      sass: {},
      postcss: {
        
        plugins: [
          require('postcss-pxtorem')({
            // 换算的基数
            rootValue: 37.5, 
            // 忽略转换正则匹配项
            selectorBlackList: [], 
            propList: ['*'],
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    // 设置html-webpack-plugin的一些属性
    config.plugin('html')
    .tap(args => {
      args[0].title = '直播'
      return args
    })
    // 设置别名
    config.resolve.alias
    .set('@', path.resolve(__dirname, 'src'))
  }
}
