import defaultProp from './prop.js'
import { Radio } from 'element-ui'

export default {
  functional: true,
  name: 'HiaRadio',
  props: {
    ...defaultProp
  },
  render(h, { props, listeners, slots, attrs }) {
    const newProp = { ...props, ...attrs }
    const children = slots().default || []

    return h(
      Radio,
      {
        props: newProp,
        on: listeners
      },
      children
    )
  }
}
