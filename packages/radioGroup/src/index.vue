<template>
  <el-radio-group v-model="selectedValue" @change="handleChange">
    <slot name="default">
      <el-radio v-for="option in options" :key="option.value" :label="option.value">
        {{ option.label }}
      </el-radio>
    </slot>
  </el-radio-group>
</template>

<script>
import defaultProp from './prop.js'

export default {
  name: 'HiaRadioGroup',
  props: {
    ...defaultProp,
  },
  data() {
    return {
      selectedValue: this.value
    };
  },
  watch: {
    value(newValue) {
      this.selectedValue = newValue;
    },
    selectedValue(newValue) {
      this.$emit('input', newValue);
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>
