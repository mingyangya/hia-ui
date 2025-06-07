// enhanceApp.js
import VueHighlightJS from 'vue-highlight.js'
import ElementUI from 'element-ui'
import HiaUi from '../../packages'
import 'element-ui/lib/theme-chalk/index.css'

// 解决低版本浏览器不支持es6
// Es6Promise.polyfill()

console.log('HiaUi', HiaUi)

export default ({
  Vue,
}) => {
  Vue.use(VueHighlightJS),
  Vue.use(ElementUI),
    Vue.use(HiaUi),
    Vue.prototype.$message = ElementUI.Message,
    Vue.prototype.$loading = ElementUI.Loading.service,
    Vue.prototype.$msgbox = ElementUI.MessageBox,
    Vue.prototype.$alert = ElementUI.MessageBox.alert,
    Vue.prototype.$confirm = ElementUI.MessageBox.confirm,
    Vue.prototype.$prompt = ElementUI.MessageBox.prompt
  // 过滤器
  // Object.keys(filters).forEach(key => {
  //   Vue.filter(key, filters[key])
  // })
}
