
import customRender from "./custom.render"

// 导出一个函数，用于获取表单项组件
export const getFormItemComponent = (c) => {
  // 解构出传入的参数c中的type、component、render
  const { type, component, render } = c

  // 如果c中有component属性，则直接返回component
  if (component) {
    return component
  }

  // 组件映射关系
  const componentMap = {
    // 文本框
    text: 'ElInput',
    textarea: 'ElInput',
    password: 'ElInput',

    // 数字输入框
    number: 'ElInputNumber',

    // 下拉选择框
    select: 'ElSelect',

    // 单选框 todo 待完善
    radio: 'ElRadio',
    // 多选框
    checkbox: 'ElCheckbox',

    // 级联选择框
    cascader: 'ElCascader',

    'color-picker': 'ElColorPicker',
    'ColorPicker': 'ElColorPicker',

    // 开关
    switch: 'ElSwitch',

    // 日期选择框
    'date-picker': 'ElDatePicker',
    'DatePicker': 'ElDatePicker',

    // 时间选择框
    'time-picker': 'ElTimePicker',
    'TimePicker': 'ElTimePicker',

    // 时间选择框
    'time-select': 'ElTimeSelect',
    'TimeSelect': 'ElTimeSelect',

    // 上传
    'custom-upload': 'HiaUpload',
    'CustomUpload': 'HiaUpload',
    'upload': 'HiaUpload'
  }

  let newComponent = componentMap[type]

  if (!newComponent) {
    newComponent = render ? customRender : null
  }

  return newComponent
}