# HiaUpload文件上传

通过点击或者拖拽上传文件

---

## 点击上传

基础用法

<CodeFormat>
  <docsComponents-Upload-index slot="source"></docsComponents-Upload-index>

使用showFileList来控制是否展示上传文件列表。

<<< @/docs/.vuepress/components/docsComponents/Upload/index.vue
</CodeFormat>


## 拖拽上传

基础用法（待完善）


## Attribute

| 属性          | 类型     | 默认值          | 描述                      |
|:-------------:|:--------:|:---------------:|:-------------------------:|
| multiple    | bool   | false         | 是否选择多个文件              |
| accept      | string | '*/*'         | 接受的文件类型              |
| label       | string | '选择文件并上传' | 文本名称                  |
| btn         | object | {}            | 按钮属性                  |
| btnSize     | string | 'small'       | 按钮大小                  |
| btnType     | string | 'primary'     | 按钮类型                  |
| icon        | string | 'el-icon-upload' | 图标                    |
| maxSize     | number | Infinity      | 文件大小上限              |
| minSize     | number | 0             | 文件大小下限              |
| stopPropagation | bool   | false         | 是否阻止事件冒泡            |
| disabled    | bool   | false         | 是否禁用                  |
| showFileList | bool   | false         | 是否显示文件列表            |
