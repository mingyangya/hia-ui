import HiaButtonGroup from './buttonGroup/index.js'
import HiaButton from './button/index.js'

const components = [
  HiaButton,
  HiaButtonGroup,
]

const install = function (Vue, opts = {}) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true

  components.forEach(component => {
    console.log('component.name', component.name)
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 按需导出

export {
  HiaButton,
  HiaButtonGroup,
}

export default {
  version: '0.0.1',
  ...components,
  install,
}
