# HiaRadio 单选

常用的操作按钮。

## 基础用法

基础的单选用法。

<CodeFormat>
  <docsComponents-Radio-index slot="source"></docsComponents-Radio-index>

要使用 HiaRadio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。

<<< @/docs/.vuepress/components/docsComponents/Radio/index.vue
</CodeFormat>

## Attribute

| 属性      | 类型                          | 默认值      | 描述                      |
| --------- | ----------------------------- | ----------- | ------------------------- |
| value     | `String`/`Number`/`Boolean`   | -           | 绑定值                    |
| label     | `String`/`Number`/`Boolean`   | -           | HiaRadio 的 value         |
| disabled  | `Boolean`                     | false       | 是否禁用                  |
| name      | `String`                      | -           | -                         |
| border    | `Boolean`                     | false       | 是否显示边框              |
| size      | `String`                      | `'small'`   | HiaRadio 的尺寸，仅在 border 为真时有效 |