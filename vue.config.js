const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8091,
    hot: true,
    open: 'Google Chrome',
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  productionSourceMap: false,
  css: {
    extract: false,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        assets: resolve('examples/assets'),
        views: resolve('examples/views'),
      },
    },
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')

    config.module
      .rule('images')
      .use('url-loader')
      .tap((options) => {
        options.limit = 163840 // 20kb
        return options
      })
  },
}
