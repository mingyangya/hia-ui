<template>
  <div class="btn-group" :align="align" :justify="justify">
    <slot />
  </div>
</template>

<script>
import { oneOf } from 'vue-types'

export default {
  name: 'HiaBtnGroup',
  props: {
    // 水平对齐方式
    // start -> flex-start
    // center -> center
    // end -> flex-end
    justify: oneOf(['start', 'center', 'end', 'between']).def('center'),
    align: oneOf(['start', 'center', 'end']).def('start'),
  },
}
</script>

<style scoped lang="scss">
.btn-group {
  display: flex;

  &[justify='start'] {
    @apply justify-start;
  }

  &[justify='center'] {
    @apply justify-center;
  }

  &[justify='between'] {
    @apply justify-between;
  }

  &[justify='end'] {
    @apply justify-end;
  }
}
</style>
