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
        }" @click="handleUpload">{{
          label }}</el-button>
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
import defaultProp from './prop.js'
import { customValidateItem } from '../../utils/form.util.js'

export default {
  name: 'HiaUpload',
  props: {
    ...defaultProp,
  },
  model: {
    prop: 'value',
    event: ['change', 'update:value'],
  },
  computed: {
    fileSize() {
      let max = Math.min(this.maxSize, Infinity)
      let min = Math.max(0, this.minSize)

      return {
        max: Number((Math.ceil(max * 10000 / 1024) / 10000).toFixed(4)),
        min: Number((Math.ceil(min * 10000 / 1024) / 10000).toFixed(4))
      }
    }
  },
  watch: {
    value: {
      handler(val) {
        this.files = val || []

        if (this.validateEvent) {
          customValidateItem(this, 'change', this.files)
        }
      }
    }
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

    getFileExtension(filename) {
      const parts = filename.split('.');
      return parts.length > 1 ? parts.pop().toLowerCase() : ''
    },

    handleInputClick() {
      this.stopPropagation && event.stopPropagation()
    },

    handleInput(event) {
      this.reset()

      const target = event.target
      const { files } = target
      const extraParams = Object.assign({}, this.$attrs, this.$props)

      this.files = Array.from(files)
      target.value = ''

      const checkSizeResult = this.handleFileSize(files)
      console.log('checkSizeResult', checkSizeResult)

      if (checkSizeResult) {
        this.$emit('select-files', files, extraParams)

        this.$emit('change', files)
        this.$emit('update:value', files)
      }

      if (this.validateEvent) {
        customValidateItem(this, 'change', files)
      }
    },

    handleFileSize(files) {
      const max = Math.min(this.maxSize, Infinity)
      const min = Math.max(0, this.minSize)
      const flag = Array.from(files).every(item => item.size >= min && item.size <= max)

      return flag
    },

    handleUpload() {
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
