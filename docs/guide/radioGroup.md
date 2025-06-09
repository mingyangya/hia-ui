# HiaRadioGroup 单选框组

常用的单选。

## 基础用法

基础的单选用法。

<CodeFormat>
  <docsComponents-RadioGroup-index slot="source"></docsComponents-RadioGroup-index>

要使用 HiaRadioGroup 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。

<<< @/docs/.vuepress/components/docsComponents/RadioGroup/index.vue
</CodeFormat>

## Radio-group Attributes

| 属性       | 类型                                      | 默认值 | 描述                                                         |
|------------|-------------------------------------------|--------|--------------------------------------------------------------|
| value      | `String` \| `Number` \| `Boolean`         | -      | 绑定值                                                       |
| size       | `String`                                  | -      | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   |
| fill       | `String`                                  | -      | 按钮形式的 Radio 激活时的填充色和边框色                     |
| textColor  | `String`                                  | -      | 按钮形式的 Radio 激活时的文本颜色                           |
| disabled   | `Boolean`                                 | -      | 是否禁用                                                     |
| options    | `Array`                                   | `[]`   | 单选按钮组                                                   |

## Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| input  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |