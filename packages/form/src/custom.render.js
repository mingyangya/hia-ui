import { func } from 'vue-types'

export default {
  functional: true,
  prop: {
    render: func().def(() => { })
  },
  render(h, context) {
    const { props } = context
    const { render: rendDom } = props

    return rendDom(h, context)
  }
}