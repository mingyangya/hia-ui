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
          label: 'text输入框',
          rules: { required: true, message: '请输入', trigger: 'blur' },
          col: 8,
        },
        {
          type: 'textarea',
          prop: 'text',
          label: 'textrea输入框',
          rules: { required: true, message: '请输入', trigger: 'blur' },
          col: 8,
        },
        {
          type: 'radio',
          prop: 'type',
          label: 'radio组',
          value: '1',
          options: [
            {
              label: '选项1',
              value: '1',
            },
            {
              label: '选项2',
              value: '2',
            }
          ],
          rules: { required: true, message: '请选择', trigger: 'change' },
          col: 8,
        },
        {
          type: 'checkbox',
          prop: 'checkbox1',
          label: 'checkbox组',
          // value: ['A'],
          options: [
            {
              label: 'A',
              value: 'A',
            },
            {
              label: 'B',
              value: 'B',
            },
            {
              label: 'C',
              value: 'C',
            },
            {
              label: 'D',
              value: 'D',
            }
          ],
          rules: { required: true, message: '请选择', trigger: 'change' },
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