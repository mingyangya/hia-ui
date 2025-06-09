<template>
  <div class="source-code-body">
    <HiaRadioGroup v-model="radio" :options="options" @input="handleInput1">
    </HiaRadioGroup>

    <hr>

    <HiaRadioGroup v-model="radio2" @input="handleInput2">
      <HiaRadio label="1">默认插槽1</HiaRadio>
      <HiaRadio label="2">默认插槽2</HiaRadio>
      <HiaRadio label="3">默认插槽3</HiaRadio>
    </HiaRadioGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      radio2: "2",
      options: [
        {
          value: "1",
          label: "options备选项",
        },
        {
          value: "2",
          label: "options备选项2",
        },
        {
          value: "3",
          label: "options备选项3",
        },
      ]
    }
  },
  methods: {
    handleInput1(value) {
      console.log('handleInput1', value)
    },
    handleInput2(value) {
      console.log('handleInput1', value)
    }
  }
}
</script>