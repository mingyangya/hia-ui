import HiaButtonGroup from './buttonGroup/index.js'
import HiaButton from './button/index.js'
import HiaUpload from './upload/index.js'

import HiaRadio from './radio/index.js'
import HiaRadioGroup from './radioGroup/index.js'

import HiaCheckbox from './checkbox/index.js'
import HiaCheckboxGroup from './checkboxGroup/index.js'

import HiaForm from './form/index.js'

export {
  customDispatch,
  customValidateItem
} from './utils/index.js'

const components = [
  HiaButton,
  HiaButtonGroup,
  HiaUpload,
  HiaRadio,
  HiaRadioGroup,
  HiaCheckbox,
  HiaCheckboxGroup,
  HiaForm,
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
  HiaUpload,
  HiaRadio,
  HiaRadioGroup,
  HiaCheckbox,
  HiaCheckboxGroup,
  HiaForm,
}

export default {
  version: '0.0.1',
  ...components,
  install,
}
