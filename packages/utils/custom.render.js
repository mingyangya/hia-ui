import { func } from 'vue-types'

export default {
  functional: true,
  name: '',
  prop: {
    render: func().def(() => { })
  },
  render(h, context) {
    const { props } = context
    const { render: rendDom } = props

    return rendDom(h, context)
  }
}