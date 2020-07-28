const webpack = require('webpack')

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined 
    proxy: {
      '/apidev': {
        target: '暂无',
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
