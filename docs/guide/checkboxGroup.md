# HiaCheckboxGroup 多选框组

常用的多选。

## 基础用法

基础的多选用法。

<CodeFormat>
  <docsComponents-CheckboxGroup-index slot="source"></docsComponents-CheckboxGroup-index>

要使用 HiaCheckboxGroup 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Checkbox label属性的值，label可以是String、Number或Boolean。

<<< @/docs/.vuepress/components/docsComponents/CheckboxGroup/index.vue
</CodeFormat>

## Checkbox-group Attributes

| 属性       | 类型                                      | 默认值 | 描述                                                         |
|------------|-------------------------------------------|--------|--------------------------------------------------------------|
| value      | `Array`          | -      | 绑定值                                                       |
| size       | `String`                                  | -      | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效   |
| fill       | `String`                                  | -      | 按钮形式的 Checkbox 激活时的填充色和边框色                     |
| textColor  | `String`                                  | -      | 按钮形式的 Checkbox 激活时的文本颜色                           |
| disabled   | `Boolean`                                 | -      | 是否禁用                                                     |
| options    | `Array`                                   | `[]`   | 多选按钮组                                                   |

## Checkbox-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| input  | 绑定值变化时触发的事件 |  选中的 Checkbox label 值  |