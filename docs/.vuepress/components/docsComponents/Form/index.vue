<template>
  <div class="source-code-body">
    <HiaForm class="form-area" v-model="form" v-bind="{ conf }" ref="refForm">
    </HiaForm>

    <HiaButtonGroup>
      <HiaButton @click="validateForm" type="primary">校验</HiaButton>
      <HiaButton @click="resetForm">重置</HiaButton>
    </HiaButtonGroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      conf: [
        {
          type: 'text',
          prop: 'name',
          label: '流程名称',
          rules: { required: true, message: '请输入', trigger: 'blur' },
          col: 8,
        },
        {
          type: 'text',
          prop: 'type',
          label: '业务类型',
          rules: { required: true, message: '请输入', trigger: 'blur' },
          col: 8,
        }
      ],
    }
  },
  methods: {
    validateForm() {
      this.$refs.refForm.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')

          return false
        }
      });
    },

    resetForm() {
      this.$refs.refForm.resetFields()
    }
  }
}
</script>