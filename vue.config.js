const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

const isProduct = process.env.NODE_ENV === 'production'
const isLib = process.argv.includes('--target') && process.argv.includes('lib')

module.exports = {
  publicPath: isProduct && !isLib ? '/hia-ui/' : '/',
  
  // 修改 src 目录 为 examples 目录
  pages: !isLib ? {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  } : undefined,

  // lib 构建输出目录
  outputDir: isLib ? 'lib' : 'dist',

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('@components', resolve("examples/components"))
      .set('@packages', resolve("packages"))

    // 去掉 preload prefetch
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // lib 构建配置
    if (isLib) {
      config.entry('HiaUi').clear().add('./packages/index.js')
      config.output
        .library('HiaUi')
        .libraryTarget('umd')
        .umdNamedDefine(true)
    }
  },

  configureWebpack: {
    externals: {
      './cptable': 'var cptable',
      // 对于 lib 构建，将 Vue 和 Element UI 作为外部依赖
      ...(isLib && {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        },
        'element-ui': {
          root: 'ELEMENT',
          commonjs: 'element-ui',
          commonjs2: 'element-ui',
          amd: 'element-ui'
        }
      })
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