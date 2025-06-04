<template>
  <div class="layout">
    <Header :content="content" />
    <slot></slot>
  </div>
</template>

<script>
import Header from '@/layout/header'
export default {
  data() {
    return {
    }
  },
  props: {
    showHeader: true,
    content: String
  },
  components: {
    Header
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.layout {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: $headerH;
}
</style>