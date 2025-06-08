# HiaButton 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<CodeFormat>
  <docsComponents-Button-index slot="source"></docsComponents-Button-index>

使用 `type` 、 `plain` 、 `round` 和 `circle` 属性来定义 Button 的样式。

<<< @/docs/.vuepress/components/docsComponents/Button/index.vue
</CodeFormat>

## Attribute

| 属性        | 类型     | 默认值       | 描述          |
|------------|----------|--------------|---------------|
| type       | string   | 'default'    | 按钮类型      |
| size       | string   | -            | 按钮大小      |
| icon       | string   | ''           | 图标          |
| nativeType | string   | 'button'     | 原生按钮类型  |
| loading    | bool     | -            | 是否加载中    |
| disabled   | bool     | -            | 是否禁用      |
| plain      | bool     | -            | 是否朴素按钮  |
| autofocus  | bool     | -            | 是否自动聚焦  |
| round      | bool     | -            | 是否圆角按钮  |
| circle     | bool     | -            | 是否圆形按钮  |
