<template>
  <div class="source-code-body">
    <HiaRadio v-model="radio" label="1">备选项</HiaRadio>
    <HiaRadio v-model="radio" label="2">备选项2</HiaRadio>
    <HiaRadio v-model="radio" label="3">备选项3</HiaRadio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
    }
  },
}
</script>