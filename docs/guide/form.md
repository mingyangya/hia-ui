# HiaForm 表单

常用的操作按钮。

## 基础用法

基础的表单用法。

<CodeFormat>
  <docsComponents-Form-index slot="source"></docsComponents-Form-index>

<<< @/docs/.vuepress/components/docsComponents/Form/index.vue
</CodeFormat>

## Form Attributes

| 属性名                | 类型                                      | 可选值                           | 默认值       | 描述                                      |
|---------------------|-----------------------------------------|--------------------------------|------------|-----------------------------------------|
| size                | string                                  | 'medium', 'small', 'mini'      | 'small'    | 组件的尺寸                                  |
| labelWidth          | string                                  | -                              | '100px'    | 标签的宽度                                  |
| labelPosition       | string                                  | 'right', 'left', 'top'         | 'right'    | 标签的位置                                  |
| rules               | object                                  | -                              | -          | 验证规则                                    |
| labelSuffix         | string                                  | -                              | ''         | 标签后缀                                    |
| showMessage         | boolean                                 | -                              | true       | 是否显示错误信息                            |
| disabled            | boolean                                 | -                              | false      | 是否禁用组件                                |
| viewonly            | boolean                                 | -                              | false      | 是否只读模式                                |
| readonly            | boolean                                 | -                              | false      | 是否只读模式                                |
| gutter              | number                                  | -                              | 0          | 栅格间隔                                    |
| hideRequiredAsterisk| boolean                                 | -                              | false      | 是否隐藏必填字段的红色星号                    |
| conf                | array                                   | -                              | []         | 配置信息                                    |
| value               | object                                  | -                              | {}         | 表单的值                                    |
