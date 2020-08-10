
/*
 * @Description: 项目打包配置项
 * 1. webpack  打包工具
 * @Autor: fankai16
 * @Date: 2020-07-29 11:28:05
 * @LastEditors: fankai16
 * @LastEditTime: 2020-07-29 11:28:05
 */
const webpack = require('webpack')

module.exports = {
  outputDir: 'dist',
  parallel:false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port: 8086, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined https://test.8boluo.com
    proxy: {
      '/apidev': {
        target: '接口地址',
        changeOrigin: true,
        pathRewrite: {
          '^/apidev': ''
        }
      }
    }

    // cssSourceMap: false
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#03a9f4',
          blue: '#3eaf7c',
          orange: '#f08d49',
          'text-color': '#111'
        }
      }
    }
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]

  },
}
