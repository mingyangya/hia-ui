import { string, bool, number, array, object, oneOf } from 'vue-types'

export default {
  size: oneOf(['medium', 'small', 'mini']).def('small'),
  labelWidth: string().def('100px'),
  labelPosition: oneOf(['right', 'left', 'top']).def('right'),
  rules: object(),
  labelSuffix: string().def(''),
  showMessage: bool().def(true),
  disabled: bool().def(false),
  // 查看
  viewonly: bool().def(false),
  readonly: bool().def(false),
  // 栅格间隔
  gutter: number().def(0),
  // 是否隐藏必填字段的标签旁边的红色星号
  hideRequiredAsterisk: bool().def(false),
  conf: array().def([]),
  value: object().def({}),
}
