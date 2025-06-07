import defaultProp from './prop.js'
import { Button } from "element-ui"

export default {
  functional: true,
  name: 'HiaButton',
  props: {
    ...defaultProp
  },
  render(h, { props, listeners, slots, attrs }) {
    const newProp = { ...props, ...attrs }

    return h(
      Button,
      {
        props: newProp,
        on: listeners
      },
      slots().default
    )
  }
}
