<template>
  <div class="source-code-body">
    <HiaUpload :showFileList="true" @select-files="selectFiles" />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    selectFiles(files) {
      console.log('selectFiles', files)
    }
  }
}
</script>