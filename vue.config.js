const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

const isProduct = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProduct ? '/hia-ui/' : '/',
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('@components', resolve("examples/components"))
      .set('@packages', resolve("examples/packages"))

    // 去掉 preload prefetch
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },

  configureWebpack: {
    externals: {
      './cptable': 'var cptable'
    },
    plugins: [

    ],
  },


  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './examples/assets/css/common.scss')
      ]
    }
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 9999,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true
  }
}
