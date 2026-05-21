---
name: "hia-ui-project-analyzer"
description: "分析 HiaUI 项目结构、组件和构建配置。当用户询问项目架构、组件使用或构建问题时调用。"
---

# HiaUI 项目分析器

此技能提供 HiaUI 项目的全面分析，包括项目结构、组件架构、构建配置和使用指南。

## 使用场景

当以下情况时调用此技能：
- 用户询问项目结构或架构
- 用户需要了解组件如何工作
- 用户遇到构建或打包问题
- 用户想知道如何使用特定组件
- 用户需要组件开发指导

## 项目概述

HiaUI 是一个基于 Vue 2.6.11 和 Element UI 2.15.13 的组件库，提供常用的 UI 组件，包括表单、按钮、单选框、多选框、上传等组件。

## 核心组件

### 1. HiaForm（核心组件）

**位置**: `packages/form/src/index.vue`

**功能特点**:
- 基于 Element UI 的 el-form 封装
- 支持通过配置动态生成表单
- 支持多种表单组件类型（文本框、文本域、单选框、多选框、下拉选择等）
- 支持栅格布局
- 支持自定义插槽

**配置示例**:
```javascript
conf: [
  {
    type: 'text',        // 组件类型
    prop: 'name',        // 字段名
    label: '文本输入框',  // 标签
    rules: {},           // 验证规则
    col: 12              // 栅格占比
  }
]
```

### 2. 组件映射

**位置**: `packages/utils/component.mapping.js`

**映射关系**:
- text → Input
- textarea → Input (type="textarea")
- password → Input (type="password")
- number → InputNumber
- select → Select
- radio → HiaRadioGroup
- checkbox → HiaCheckboxGroup
- cascader → Cascader

### 3. 其他组件

- HiaButton: 按钮组件
- HiaRadio/HiaRadioGroup: 单选框组件
- HiaCheckbox/HiaCheckboxGroup: 多选框组件
- HiaUpload: 上传组件

## 构建配置

### 关键文件

- `vue.config.js`: Vue CLI 配置
- `package.json`: 项目配置
- `packages/index.js`: 组件库入口

### 外部依赖

组件库使用 externals 配置将 Vue 和 Element UI 排除在打包之外：

```javascript
externals: {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue'
  },
  'element-ui': {
    root: 'ELEMENT',
    commonjs: 'element-ui',
    commonjs2: 'element-ui'
  }
}
```

这减少了打包体积，需要用户通过 CDN 或 npm 提供这些依赖。

### 构建输出

- `lib/HiaUi.umd.js` - UMD 格式
- `lib/HiaUi.umd.min.js` - 压缩的 UMD 格式
- `lib/HiaUi.common.js` - CommonJS 格式
- `lib/HiaUi.css` - 样式文件
- `lib/demo.html` - 演示页面

## 使用方法

### 1. npm 安装

```bash
npm install hia-ui
```

```javascript
import Vue from 'vue'
import HiaUi from 'hia-ui'
import 'hia-ui/lib/HiaUi.css'

Vue.use(HiaUi)
```

### 2. CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/index.js"></script>
<script src="./HiaUi.umd.js"></script>

<script>
Vue.use(HiaUi)
</script>
```

### 3. 按需引入

```javascript
import { HiaButton, HiaForm } from 'hia-ui'

export default {
  components: {
    HiaButton,
    HiaForm
  }
}
```

## 常见问题及解决方案

### 问题：表单组件未渲染

**原因**: 组件映射或 type 属性未正确传递

**解决方案**:
1. 检查 `component.mapping.js` 中的映射是否正确
2. 确保 type 属性正确传递给 Input 组件
3. 验证 Vue 和 Element UI 是否已正确注册

### 问题：外部依赖导致构建失败

**原因**: externals 配置不正确

**解决方案**:
1. 验证 `vue.config.js` 中的 externals 配置
2. 确保 peer dependencies 与使用方式匹配
3. 检查 HTML 文件中的 CDN 链接

## 开发指南

### 添加新组件

1. 在 `packages/` 目录下创建组件目录
2. 实现组件功能
3. 在 `packages/index.js` 中注册
4. 编写文档

### 构建组件库

```bash
yarn lib
```

### 开发模式

```bash
yarn serve
```

## 文件结构

```
hia-ui/
├── packages/              # 核心组件
│   ├── button/
│   ├── form/
│   ├── radio/
│   ├── checkbox/
│   ├── upload/
│   └── utils/
├── examples/              # 示例应用
├── docs/                  # 文档
├── lib/                   # 构建输出
└── scripts/               # 构建脚本
```

## 最佳实践

1. 始终按需导入 Element UI 组件
2. 将 Vue 和 Element UI 作为 peer dependencies
3. 提供 UMD 构建支持 CDN 使用
4. 包含完整的文档
5. 在 npm 和 CDN 使用场景中都进行测试
