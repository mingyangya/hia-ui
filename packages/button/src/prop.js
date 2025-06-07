import { string, bool } from 'vue-types'

export default {
  type: string().def('default'),
  size: string(),
  icon: string().def(''),
  nativeType: string().def('button'),
  loading: bool(),
  disabled:  bool(),
  plain:  bool(),
  autofocus:  bool(),
  round:  bool(),
  circle:  bool()
}
