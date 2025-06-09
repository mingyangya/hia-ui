const {NODE_ENV} = process.env

const isPro = process.env.NODE_ENV === 'production'

const baseUrl = '/'

console.log('isPro', isPro, process.env)

module.exports = {
  base: isPro ? '/hia-ui/' : '/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/guide/': [
        ['', '介绍'],     /* /foo/ */
        ['button', '按钮'],
        ['upload', '文件上传'],
        ['radio', '单选框'],
        ['radioGroup', '单选框组'],
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

  configureWebpack: {
    resolve: {
      alias: {
        '@docs': '/docs',
        '@packages': '/packages'
      }
    }
  }
}