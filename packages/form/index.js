import Index from './src/index.js'

Index.install = function (Vue) {
  Vue.component(Index.name, Index)
}

export default Index