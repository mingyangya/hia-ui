import { string, bool, number, array, object } from 'vue-types'

export default {
  size: string().def('small'),
  labelWidth: string().def('100px'),
  labelPosition: string().def('right'),
  rules: object(),
  disabled: bool().def(false),
  viewonly: bool().def(false),
  readonly: bool().def(false),
  gutter: number().def(0),
  hideRequiredAsterisk: bool().def(false),
  conf: array().def([]),
  value: object().def({}),
}
