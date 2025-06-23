import { string, bool, oneOf, number, oneOfType } from 'vue-types'

export default {
  // 绑定值
  value: oneOfType([string(), number(), bool()]),
  // HiaRadio 的 value
  label: oneOfType([string(), number(), bool()]),
  // 是否禁用
  disabled: bool(),
  name: string(),
  // 是否显示边框
  border: bool(),
  // HiaRadio 的尺寸，仅在 border 为真时有效
  size: oneOf(['medium', 'small', 'mini']).def('small'),
}
