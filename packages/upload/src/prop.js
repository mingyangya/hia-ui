import { string, bool, number, object } from 'vue-types'

export default {
  // @see https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file
  // 选择多个文件
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
}
