<template>
  <div class="layout-header py-5 flex items-center">
    <el-page-header @back="goBack" :content="content" class="pl-5">
    </el-page-header>
  </div>
</template>

<script>
export default {
  name: 'layout-header',
  data () {
    return {
    }
  },
  props: {
    content: {
      type: String,
      default: '详情页面'
    }
  },
  methods: {
    goBack() {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped lang="scss">
.layout-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: $headerH;

  a {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    display: block;
    color: #1abc9c;
    text-decoration: underline;
  }
}</style>