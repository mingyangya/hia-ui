import defaultProp from './prop.js'
import { Checkbox } from 'element-ui'

export default {
  functional: true,
  name: 'HiaCheckbox',
  props: {
    ...defaultProp
  },
  render(h, { props, listeners, slots, attrs }) {
    const newProp = { ...props, ...attrs }
    const children = slots().default || []

    return h(
      Checkbox,
      {
        props: newProp,
        on: listeners
      },
      children
    )
  }
}
