<template>
  <div class="upload-file">
    <div class="upload-file-body">
      <slot name="prepend"></slot>

      <div class="upload-file-inner">
        <el-button v-bind="{
          type: btn.type || btnType,
          size: btn.size || btnSize,
          disabled,
          icon
        }" @click="handleUpload">{{ label }}</el-button>
        <input type="file" hidden :disabled="disabled" @input="handleInput($event)" v-bind="{ multiple, accept }"
          ref="refInput" @click="handleInputClick" />
      </div>

      <slot name="append"></slot>
    </div>

    <slot name="file-list">
      <div class="upload-file-list" v-if="showFileList">
        <div class="upload-file-list-item" v-for="(file, index) in files" :key="index">{{ file.name }}</div>
      </div>
    </slot>
  </div>
</template>

<script>
// import defaultProp from './prop.js'
import { string, bool, array, number, object } from 'vue-types'
import { customValidateItem } from '../../utils/form.util.js'

export default {
  name: 'HiaUpload',
  props: {
    multiple: bool().def(false),
    // 接受的文件类型
    accept: string().def('*/*'),
    // 文本名称
    label: string().def('选择文件并上传'),
    btn: object().def({}),
    btnSize: string().def('small'),
    btnType: string().def('primary'),
    icon: string().def('el-icon-upload'),
    // 文件大小
    maxSize: number().def(Infinity),
    minSize: number().def(0),
    // 是否阻止事件冒泡
    stopPropagation: bool().def(false),
    disabled: bool().def(false),
    showFileList: bool().def(false),
    value: array().def([]),

    // 数据变化时是否触发校验
    validateEvent: bool().def(true),

  },
  model: {
    prop: 'value',
    event: ['change', 'update:value'],
  },
  watch: {
    value: {
      handler(val) {
        this.files = val || []
      },
      immediate: true
    }
  },
  computed: {
    getInput() {
      return this.$refs.refInput
    },
  },
  data() {
    return {
      files: []
    }
  },
  methods: {
    reset() {
      this.files = []
    },

    handleInputClick(event) {
      this.stopPropagation && event.stopPropagation()
    },

    handleInput(event) {
      // this.reset()

      const target = event.target
      const { files } = target
      const extraParams = Object.assign({}, this.$attrs, this.$props)
      const newFiles = Array.from(files)

      this.files = newFiles
      target.value = ''


      this.$emit('select-files', newFiles, extraParams)

      this.$emit('change', newFiles)

      this.$emit('update:value', newFiles)

      if (this.validateEvent) {
        this.$nextTick(() => {
          customValidateItem(this, 'change', newFiles)
        })
      }
    },

    handleUpload(event) {
      this.stopPropagation && event.stopPropagation()
      this.$emit('handle-click')
      this.$refs.refInput.click()
    }
  }
}
</script>

<style scoped lang="scss">
.size-tip {
  font-size: 12px;
  padding: 5px 0;
  line-height: 1;
  color: #ff4949;
}

.upload-file-body {
  display: flex;
  align-items: center;

  >:nth-child(odd),
  >:nth-child(even) {
    margin-left: 10px;
  }

  >:first-child {
    margin-left: 0;
  }
}

.el-button--red {
  background: #fff;
  color: red;
  border-color: red;
}


.upload-file-list-item {
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
  font-size: 14px;
  color: #606266;
  line-height: 1.8;
  margin-top: 5px;
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;

  &:first-child {
    margin-top: 10px;
  }
}
</style>
