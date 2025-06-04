module.exports = {
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
        ['btn', '按钮'],
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

  configureWebpack: {
    resolve: {
      alias: {
        '@docs': '/docs',
        '@packages': '/packages'
      }
    }
  }
}