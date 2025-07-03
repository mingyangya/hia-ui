<template>
  <div class="Form">
    <HiaForm class="form-area" v-model="form" v-bind="{ gridLayout: true, conf, gutter: 20 }" ref="refForm">
      <template #form-item-name="{ item: c }">
        <div>neirong </div>
      </template>

      <template #label-form-item-name="{ item: c }">
        <div>label</div>
      </template>

      <template #prefix-form-item-name="{ item: c }">
        <div>前缀asasasasasasasasasasasasasasas</div>
      </template>

      <template #suffix-form-item-name="{ item: c }">
        <div>后缀</div>
      </template>
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
        // {
        //   type: 'text',
        //   prop: 'name',
        //   label: 'text输入框',
        //   rules: { required: true, message: '请输入', trigger: 'blur' },
        //   col: 12,
        // },
        // {
        //   type: 'textarea',
        //   prop: 'text',
        //   label: 'textrea输入框',
        //   rules: { required: true, message: '请输入', trigger: 'blur' },
        //   col: 12,
        // },
        // {
        //   type: 'radio',
        //   prop: 'type',
        //   label: 'radio组',
        //   value: '1',
        //   options: [
        //     {
        //       label: '选项1',
        //       value: '1',
        //     },
        //     {
        //       label: '选项2',
        //       value: '2',
        //     }
        //   ],
        //   rules: { required: true, message: '请选择', trigger: 'change' },
        //   col: 8,
        // },
        // {
        //   type: 'checkbox',
        //   prop: 'checkbox1',
        //   label: 'checkbox组',
        //   // value: ['A'],
        //   options: [
        //     {
        //       label: 'A',
        //       value: 'A',
        //     },
        //     {
        //       label: 'B',
        //       value: 'B',
        //     },
        //     {
        //       label: 'C',
        //       value: 'C',
        //     },
        //     {
        //       label: 'D',
        //       value: 'D',
        //     }
        //   ],
        //   rules: { required: true, message: '请选择', trigger: 'change' },
        //   col: 20,
        // },
        {
          type: 'CustomUpload',
          prop: 'file',
          label: '文件',
          rules: { required: true, message: '请输入', trigger: 'change' },
          col: 12,
        },
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