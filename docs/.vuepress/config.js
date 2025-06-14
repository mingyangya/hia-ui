const { NODE_ENV } = process.env
const isPro = NODE_ENV === 'production'

module.exports = {
  base: isPro ? '/hia-ui/' : '/',
  title: 'Hia-ui',
  description: '基于Vue2.7.16 + Element-ui 2.15.6 二次封装的组件库',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/mingyangya/hia-ui' },
    ],
    sidebar: {
      '/guide/': [
        ['installation', '安装'],
        ['button', '按钮'],
        ['upload', '文件上传'],
        ['radio', '单选框'],
        ['radioGroup', '单选框组'],
        ['checkboxGroup', '多选框组'],
        ['form', '表单'],
        ['alink', '链接'],
      ],
    }
  },
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  },

  // scss: {
  //   additionalData: `@import ".vuepress/styles/mixin.scss";`
  // },

  // @see https://blog.csdn.net/cwin8951/article/details/121628049
  chainWebpack(config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@docs': '/docs',
        '@packages': '/packages'
      }
    }
  }
}