<template>
  <div class="source-code-body">
    <HiaCheckboxGroup v-model="Checkbox" :options="options" @input="handleInput1">
    </HiaCheckboxGroup>

    <hr>

    <HiaCheckboxGroup v-model="Checkbox2" @input="handleInput2">
      <HiaCheckbox label="1">默认插槽1</HiaCheckbox>
      <HiaCheckbox label="2">默认插槽2</HiaCheckbox>
      <HiaCheckbox label="3">默认插槽3</HiaCheckbox>
    </HiaCheckboxGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Checkbox: ["1"],
      Checkbox2: ["1", "2"],
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