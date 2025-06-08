<template>
  <div class="btn-group" :align="align" :justify="justify">
    <slot />
  </div>
</template>

<script>
import { oneOf } from 'vue-types'

export default {
  name: 'HiaButtonGroup',
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
  flex-wrap: wrap;
  align-items: center;

  .el-button {
    margin: 0 10px 10px 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &[align='start'] {
    @apply items-start;
  }

  &[align='center'] {
    @apply items-center;
  }

  &[align='end'] {
    @apply items-end;
  }

  &[justify='start'] {
    @apply justify-start;
  }
}
</style>
