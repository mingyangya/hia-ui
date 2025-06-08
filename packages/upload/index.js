import Index from './src/index'

Index.install = function (Vue) {
  Vue.component(Index.name, Index)
}

export default Index