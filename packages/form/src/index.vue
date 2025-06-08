<template>
  <el-form ref="refForm" :model="form" v-bind="{
    validateOnRuleChange: false,
    size: size,
    rules: formRules,
    labelWidth,
    labelPosition,
    hideRequiredAsterisk,
    class: ['el-form', 'el-form-' + size, 'form-custom-detail']
  }" @submit.native.prevent>
    <componet :is="itemRowComponent" v-bind="{
      class: itemRowComponentClass,
      gutter
    }">
      <template v-for="(c, i) in config">
        <slot :name="colBeforeSlotName(c)" />

        <componet v-if="itemShow(c)" :is="itemColComponent" v-bind="{
          class: itemColComponentClass,
          span: c.col ? c.col : defaultCol
        }">
          <el-form-item :class="`el-form-item-${c.prop}`" v-bind="{
            ...c,
            key: c.prop,
            disabled: itemDisabled(c),
            viewonly: itemViewonly(c),
            position: labelPosition
          }">
            <slot :name="slotName(c)" v-bind="{ item: c, form, emitData: emitFormData }" ref="refFormItem">

              <!-- 输入框 -->
              <template v-if="['textarea', 'text', 'password'].includes(c.type)">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatEmpty }}
                </template>
                <template v-else>
                  <el-input v-model="form[c.prop]"
                    v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @input="val => handleChange(val, c.prop)"
                    @keyup.enter.native="val => $emit('keyup-enter', val)"></el-input>
                </template>
              </template>

              <!-- 计数器 -->
              <template v-else-if="c.type === 'number'">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatEmpty }}
                </template>
                <template v-else>
                  <el-input-number v-model="form[c.prop]"
                    v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @input.native="val => handleInputNumberChange(val && val.target && val.target.value, c.prop)"></el-input-number>
                </template>
              </template>

              <!-- 单选 -->
              <template v-else-if="c.type === 'radio'">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatOptions(c.options) }}
                </template>
                <template v-else>
                  <el-radio-group v-model="form[c.prop]"
                    v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @change="val => handleChange(val, c.prop)">
                    <el-radio :label="item.value" v-for="(item, itemK) in c.options" :key="item.value + '-' + itemK">{{
                      item.label }}</el-radio>
                  </el-radio-group>
                </template>
              </template>

              <!-- 多选 -->
              <template v-else-if="c.type === 'checkbox'">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatOptions(c.options, 'label', 'value') }}
                </template>
                <template v-else>
                  <el-checkbox-group v-model="form[c.prop]"
                    v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @change="val => handleChange(val, c.prop)">
                    <el-checkbox :label="item.value" v-for="(item, itemK) in c.options"
                      :key="item.value + '-' + itemK">{{
                        item.label }}</el-checkbox>
                  </el-checkbox-group>
                </template>
              </template>

              <!-- 级联 -->
              <template v-else-if="c.type === 'cascader'">
                <el-cascader v-model="form[c.prop]"
                  v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                  @change="val => handleChange(val, c.prop)"></el-cascader>
              </template>

              <template v-else-if="c.type === 'color-picker'">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatEmpty }}
                </template>
                <template v-else>
                  <el-color-picker v-model="form[c.prop]"
                    v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @change="val => handleChange(val, c.prop)"></el-color-picker>
                </template>
              </template>

              <!-- 下拉框 -->
              <template v-else-if="c.type === 'select'">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatOptions(c.options, c.labelKey, c.valueKey) }}
                </template>
                <template v-else>
                  <el-select v-model="form[c.prop]"
                    v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @clear="c.clear && c.clear(c, form)" @change="val => handleChange(val, c.prop)">
                    <el-option v-for="(item, itemK) in c.options" :size="size" :key="item.value + '-' + itemK"
                      :label="item.label" :value="c.valueIsObject ? item : item.value">
                    </el-option>
                  </el-select>
                </template>
              </template>

              <!-- 日期选择器 -->
              <template v-else-if="c.type === 'date-picker'">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatDate }}
                </template>
                <template v-else>
                  <el-date-picker v-model="form[c.prop]"
                    v-bind="{ ...c, type: c.itemType || 'date', disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @change="val => handleChange(val, c.prop)">
                  </el-date-picker>
                </template>
              </template>

              <!-- 日期选择器 -->
              <template v-else-if="c.type === 'time-picker'">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatDate }}
                </template>
                <template v-else>
                  <el-time-picker v-model="form[c.prop]"
                    v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @change="val => handleChange(val, c.prop)">
                  </el-time-picker>
                </template>
              </template>

              <!-- 时间选择器 -->
              <template v-else-if="c.type === 'time-select'">
                <template v-if="itemViewonly(c)">
                  {{ form[c.prop] | formatDate }}
                </template>
                <template v-else>
                  <el-time-select v-model="form[c.prop]"
                    v-bind="{ ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @change="val => handleChange(val, c.prop)">
                  </el-time-select>
                </template>
              </template>

              <!-- 自定义上传 -->
              <template v-else-if="c.type === 'custom-upload'">
                <slot :name="`${c.type}-${c.prop}`">
                  <CustomUpload ref="refCustomUpload"
                    v-bind="{ ...c, btnType: 'red', btnSize: c.size || c.btnSize || size, icon: 'el-icon-upload2', disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c), }"
                    @change="(value) => handleCustomChange(value, c.prop)">
                    <template #append>
                      <slot :name="`${c.type}-${c.prop}-append`">
                      </slot>
                    </template>

                    <template #default="slotProps">
                      <slot :name="`${c.type}-${c.prop}-default`" v-bind="{ ...slotProps, ...value }">
                      </slot>
                    </template>

                  </CustomUpload>
                </slot>
              </template>

              <template v-else>
                <slot :name="`${c.type}-${c.prop}`"
                  v-bind="{ itemDisabled, itemReadonly, itemViewonly, item: { ...c, disabled: itemDisabled(c), readonly: itemReadonly(c), viewonly: itemViewonly(c) }, form, emitData: emitFormData }">
                </slot>
              </template>
            </slot>

            <slot :name="slotNameSuffix(c)" v-bind="{ item: c, form, emitData: emitFormData }"></slot>
          </el-form-item>
        </componet>

      </template>
    </componet>
  </el-form>
</template>

<script>
import defaultProp from './prop.js'
import * as dictionaryApi from './dictionary.service'
import { customValidateItem, noop, isEmpty, isUndefined, isSupportGrid } from '@utils/form.utils.js'

import CustomUpload from '@/components/upload/custom-upload.vue'

export default {
  name: 'CustomForm',
  components: { CustomUpload },
  model: {
    prop: 'value',
    event: 'update:value',
  },
  props: {
    ...defaultProp,
    ...$attrs
  },
  computed: {
    slotName() {
      return (c) => isEmpty(c.type) ? `form-item-${c.prop}-custom` : `form-item-${c.prop}`
    },

    slotNameSuffix() {
      // 后缀
      return (c) => isEmpty(c.type) ? `suffix-form-item-${c.prop}-custom` : `suffix-form-item-${c.prop}`
    },

    colBeforeSlotName() {
      return (c) => {
        const extraSlotName = isEmpty(c.extraSlotName) ? '' : `${c.extraSlotName}-`

        return isEmpty(c.type) ? `form-col-${c.prop}-custom-before` : `${extraSlotName}form-col-${c.prop}-before`
      }
    },
    itemShow() {
      return (item) => {
        let flag = true

        if (!isUndefined(item.show)) {
          flag = typeof item.show === 'function' ? item.show(this) : item.show
        }

        return flag
      }
    },

    itemDisabled() {
      return (item) => this.getBooleanValue(item, 'disabled')
    },

    itemReadonly() {
      return (item) => this.getBooleanValue(item, 'readonly')
    },

    itemViewonly() {
      return (item) => this.getBooleanValue(item, 'viewonly')
    },

    valueOrConfChange() {
      const { value, conf } = this

      return { value, conf }
    },

    itemRowComponent() {
      return isSupportGrid ? 'div' : 'el-row'
    },

    itemRowComponentClass() {
      return isSupportGrid ? 'form-item-grid' : 'form-item-row'
    },

    itemColComponent() {
      return isSupportGrid ? 'div' : 'el-col'
    },

    itemColComponentClass() {
      return isSupportGrid ? 'form-item-grid-col' : 'form-item-row-col'
    },

    noop() {
      return noop
    }
  },
  data() {
    return {
      form: {},
      formRules: {},
      defaultCol: 24,
      config: [],
    }
  },
  watch: {
    valueOrConfChange: {
      handler: function (newV) {
        this.init(newV)
      },
      immediate: true,
      deep: true,
    }
  },
  methods: {
    keyupEnter() {
      this.$emit('query', this.form)
    },

    init({ value = this.form, conf = this.conf }) {
      this.initConfig(conf, value)
    },

    getBooleanValue(item, prop = 'disabled') {
      // 判断item[prop]是否为undefined，是则取this[prop], 否取则对应item[prop]
      return isUndefined(item[prop]) ? (this[prop] ? !!this[prop] : false) : typeof item[prop] === 'function' ? item[prop](item) : !!item[prop]
    },

    async initConfig(conf = [], value) {
      let form = { ...value }
      let formRules = { ...this.rules }

      form = conf.reduce((a, b) => {
        a[b.prop] = isUndefined(a[b.prop]) ? b.value : a[b.prop]

        const rules = b.rules

        if (rules) {
          formRules[b.prop] = Array.isArray(rules) ? rules : (typeof rules === 'function' ? rules(this) : [rules])
        }

        // delete b.rules

        return a
      }, form)

      const newConf = this.handleConf(conf)

      this.$set(this, 'config', [...newConf])
      this.$set(this, 'form', { ...form })

      this.$nextTick(() => {
        this.$emit('form-nextTick')
      })

      // 为了修复避免动态设置form以及rules 导致的 form 触发change事件 从而触发validate事件，导致表单一开始，就检验必填项触发change eror提示问题。
      // 需要结合validateOnRuleChange: false, 来修复以上问题。
      // 详情：validateOnRuleChange @see https://element.eleme.io/#/zh-CN/component/form#form-attributes
      //      https://github.com/ElemeFE/element/blob/dev/packages/form/src/form-item.vue
      this.$nextTick(() => {
        this.$set(this, 'formRules', formRules)
      })

      // // 对于异步数据的处理
      newConf.forEach(async (c, i,) => {
        let { optionsFunc } = c
        const type = typeof optionsFunc

        if (['string', 'function'].includes(type)) {
          const func = type === 'string' ? dictionaryApi[optionsFunc] : optionsFunc

          if (func && c.isRequestEnd) {
            c.isRequestEnd = false

            this.config.splice(i, 1, c)

            Promise.resolve(func(c)).then(res => {
              const labelKey = c['label-key'] || c['labelKey'] || 'label'
              const valueKey = c['value-key'] || c['valueKey'] || 'value'

              const data = {
                ...c,
                options: (res || []).map(item => {
                  return {
                    ...item,
                    label: item[labelKey],
                    value: item[valueKey]
                  }
                })
              }

              c.isRequestEnd = true

              this.$emit(`update:${c.prop}:options`, data.options)
              this.$emit(`update:options`, data.options, c.prop)
              this.config.splice(i, 1, data)
            })
          }
        }
      })

    },

    handleConf(conf) {
      const config = [...this.config]
      const newConf = [...conf].map((item, i) => {
        const isRequestEnd = config.length ? (config[i] && !!config[i].isRequestEnd) : true

        if (item.optionsFunc) {
          const itemOptions = item.options || []
          const options = itemOptions.length ? itemOptions : (config[i] && config[i].options)

          return {
            ...item,
            options,
            isRequestEnd
          }
        }

        return item
      })

      return newConf
    },

    handleChange(value, prop) {
      this.emitFormData({ [prop]: value })
    },

    handleInputNumberChange(value, prop) {
      value = isEmpty.includes(value) ? undefined : Number(value)

      this.emitFormData({ [prop]: value })
    },

    handleCustomChange(value, prop) {
      this.emitFormData({ [prop]: value })
    },

    emitFormData(data = {}) {
      let newData = {
        ...this.form,
        ...data
      }

      this.$set(this, 'form', newData)
      this.$emit('update:value', newData)
      this.$emit('change', newData)
    },

    validateItem(refEle) {
      return new Promise((resolve) => {
        const validateFunc = refEle.validate

        if (validateFunc && (typeof validateFunc === 'function')) {
          validateFunc().then(validate => {
            if (validate) {
              resolve(validate)
            } else {
              resolve(false)
              return false
            }
          }).catch(() => {
            resolve(false)
          })
        } else {
          // 没有检验方法，则不校验
          resolve(true)
        }
      })
    },

    validate() {
      return new Promise((resolve) => {
        const allRefs = [this.$refs.refForm]

        Promise.all(allRefs.map(async refItem => await this.validateItem(refItem))).then(results => {
          const validateResult = results.every(item => !!item)
          resolve(validateResult)
        })
        // this.$refs.refForm.validate().then(validate => {
        //   if (validate) {
        //     resolve(validate)
        //   } else {
        //     resolve(false)
        //     return false
        //   }
        // })
      })
    },

    validateField(props) {
      return new Promise((resolve) => {
        this.$refs.refForm.validateField(props, err => {
          resolve(!err)
          // console.log(props, err)
          // if (err) {
          //   console.error(`校验失败: ${err}`);
          //   reject(`校验失败: ${err}`)
          // } else {
          //   resolve()
          //   console.log('校验通过');
          // }
        })
      })

    },

    resetFields() {
      this.$refs.refForm.resetFields()

      // 处理自定义上传组件重置
      const refCustomUpload = this.$refs.refCustomUpload

      if (refCustomUpload && refCustomUpload.length) {
        Array.from(refCustomUpload).forEach(ele => {
          ele && ele.reset && ele.reset()
        })
      }

      this.$emit('update:value', this.form)
      this.$emit('change', this.form)
    },

    customValidateItem(thatRef, type, val) {
      customValidateItem(thatRef, type, val)
    }
  },
}
</script>

<style scoped lang="scss">
@import url('./form.detail.scss');

.el-date-editor.el-input,
.el-date-editor.el-input__inner,
.el-select,
.el-cascader {
  width: 100% !important;
}

.el-row {
  display: flex;
  flex-wrap: wrap;
  // position: static;
}

.full-number {
  width: 100%;
  text-align: left;

  @include deep('.el-input-number__decrease') {
    display: none;
  }

  @include deep('.el-input-number__increase') {
    display: none;
  }

  @include deep('.el-input') {
    .el-input__inner {
      text-align: left;
    }
  }
}

::v-deep .el-form-item {
  .el-form-item__label {
    position: relative;
    display: flex;
    align-items: start;
    padding: 0;

    &:after {
      display: block;
      content: '\FF1A';
    }
  }

  &[position='right'] {
    .el-form-item__label {
      justify-content: flex-end;
    }
  }

  &[position='left'] {
    .el-form-item__label {
      justify-content: flex-start;
    }
  }
}
</style>
