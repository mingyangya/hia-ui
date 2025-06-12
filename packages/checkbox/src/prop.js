import { string, bool, oneOf, number, oneOfType } from 'vue-types'

export default {
  // 绑定值
  value: oneOfType([string(), number(), bool()]),
  // HiaRadio 的 value
  label: oneOfType([string(), number(), bool()]),
  // 是否禁用
  disabled: bool(),
  indeterminate: bool(),
  checked: bool(),
  name: string(),
  // 是否显示边框
  border: bool(),
  // HiaRadio 的尺寸，仅在 border 为真时有效
  size: oneOf(['medium', 'small', 'mini']).def('small'),
  trueLabel: oneOfType([string(), number()]),
  falseLabel: oneOfType([string(), number()]),
  id: string(),
  /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
  controls: string(),
}
