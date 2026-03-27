export default {
  functional: true,

  render(h, context) {
    const { props, data, children } = context

    const { component, ...rest } = props;
    return h(component, { ...data, props: rest }, children);
  }
}