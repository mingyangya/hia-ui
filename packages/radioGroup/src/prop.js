import { string, bool, array, number, oneOfType } from 'vue-types'

export default {
  // 绑定值
  value: oneOfType([string(), number(), bool()]),
  // 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效
  size: string(),
  //按钮形式的 Radio 激活时的填充色和边框色
  fill: string(),
  // 按钮形式的 Radio 激活时的文本颜色
  textColor: string(),
  disabled: bool(),
  // 单选按钮组
  options: array().def([]),
}
