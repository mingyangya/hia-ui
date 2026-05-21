# HiaUI 项目分析

## 项目概述

HiaUI 是一个基于 Vue 2.6.11 和 Element UI 2.15.13 的组件库，提供了常用的 UI 组件，包括表单、按钮、单选框、多选框、上传等组件。

## 项目结构

```
hia-ui/
├── packages/              # 核心组件包
│   ├── button/           # 按钮组件
│   ├── buttonGroup/      # 按钮组组件
│   ├── checkbox/         # 复选框组件
│   ├── checkboxGroup/    # 复选框组组件
│   ├── form/             # 表单组件（核心）
│   ├── radio/            # 单选框组件
│   ├── radioGroup/       # 单选框组组件
│   ├── upload/           # 上传组件
│   ├── utils/            # 工具函数
│   └── index.js          # 组件库入口
├── examples/             # 示例应用
│   ├── views/           # 页面视图
│   ├── components/      # 示例组件
│   ├── router/          # 路由配置
│   ├── store/           # 状态管理
│   └── utils/           # 工具函数
├── docs/                 # 文档（VuePress）
│   ├── guide/           # 使用指南
│   └── .vuepress/       # VuePress 配置
├── lib/                  # 构建输出目录
├── scripts/              # 构建脚本
│   └── DemoHtmlPlugin.js # demo.html 生成插件
└── 配置文件
    ├── package.json      # 项目配置
    ├── vue.config.js     # Vue CLI 配置
    ├── babel.config.js   # Babel 配置
    └── ...
```

## 核心组件

### 1. HiaForm（表单组件）

**位置**: `packages/form/src/index.vue`

**功能**: 
- 基于 Element UI 的 el-form 组件封装
- 支持通过配置动态生成表单
- 支持多种表单组件类型（text、textarea、radio、checkbox、select 等）
- 支持栅格布局
- 支持自定义插槽

**核心配置**:
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

**组件映射**: `packages/utils/component.mapping.js`
- text → Input
- textarea → Input (type="textarea")
- password → Input (type="password")
- number → InputNumber
- select → Select
- radio → HiaRadioGroup
- checkbox → HiaCheckboxGroup
- cascader → Cascader
- 等等...

### 2. HiaButton（按钮组件）

**位置**: `packages/button/`

**功能**: 基于 Element UI 的 el-button 封装

### 3. HiaRadio / HiaRadioGroup（单选框）

**位置**: `packages/radio/`, `packages/radioGroup/`

**功能**: 基于 Element UI 的 radio 组件封装

### 4. HiaCheckbox / HiaCheckboxGroup（复选框）

**位置**: `packages/checkbox/`, `packages/checkboxGroup/`

**功能**: 基于 Element UI 的 checkbox 组件封装

### 5. HiaUpload（上传组件）

**位置**: `packages/upload/`

**功能**: 基于 Element UI 的 upload 组件封装

## 构建配置

### vue.config.js

**关键配置**:

1. **入口配置**:
   - 开发/生产环境：`examples/main.js`
   - 库构建：`packages/index.js`

2. **外部依赖 (externals)**:
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
   - 库构建时将 Vue 和 Element UI 作为外部依赖
   - 减小打包体积
   - 使用者通过 CDN 或 npm 引入

3. **输出配置**:
   ```javascript
   config.output
     .library('HiaUi')
     .libraryTarget('umd')
     .umdNamedDefine(true)
   ```
   - UMD 格式，支持多种模块系统
   - 全局变量名：HiaUi

### package.json

**脚本命令**:
- `yarn serve` - 启动开发服务器
- `yarn build` - 构建生产版本
- `yarn lib` - 构建组件库
- `yarn docs:dev` - 启动文档开发服务器

**依赖**:
- **peerDependencies**: Vue ^2.6.11, Element UI ^2.15.13
- **devDependencies**: Vue CLI 相关插件、Babel、ESLint 等

## 使用方式

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
<!-- 引入 Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
<!-- 引入 Element UI -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/theme-chalk/index.css">
<script src="https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/index.js"></script>
<!-- 引入 HiaUi -->
<script src="./HiaUi.umd.js"></script>
<link rel="stylesheet" href="./HiaUi.css">

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

## 核心功能详解

### HiaForm 组件映射机制

**文件**: `packages/utils/component.mapping.js`

```javascript
import { Button, Input, InputNumber, ... } from 'element-ui'

export const getFormItemComponent = (c) => {
  const { type, component, render } = c || {}
  
  // 组件映射关系
  const componentMap = {
    'button': Button,
    text: Input,
    textarea: Input,
    // ...
  }
  
  return componentMap[type] || null
}
```

**特点**:
- 从 Element UI 按需导入组件
- 通过 type 属性映射到对应组件
- 支持自定义 component 和 render 函数

### HiaForm 模板渲染

```vue
<component :is="getFormItemComponent(c)"
  v-model="form[c.prop]"
  v-bind="{ ...c, disabled, readonly, viewonly }"
  @input="val => handleChange(val, c.prop)"
  @change="val => handleChange(val, c.prop)"
/>
```

**关键点**:
- 动态组件渲染
- 双向数据绑定
- 事件处理
- 属性透传

## 开发指南

### 1. 添加新组件

1. 在 `packages/` 下创建组件目录
2. 实现组件功能
3. 在 `packages/index.js` 中注册
4. 编写文档

### 2. 构建库

```bash
yarn lib
```

输出:
- `lib/HiaUi.umd.js` - UMD 格式
- `lib/HiaUi.umd.min.js` - UMD 压缩版
- `lib/HiaUi.common.js` - CommonJS 格式
- `lib/HiaUi.css` - 样式文件
- `lib/demo.html` - 演示页面

### 3. 开发调试

```bash
yarn serve
```

访问 `http://localhost:9999`

## 注意事项

1. **peerDependencies**: Vue 和 Element UI 作为 peer 依赖，需要使用者自行安装
2. **外部依赖**: 库构建时将 Vue 和 Element UI 作为外部依赖，减小打包体积
3. **CDN 使用**: 通过 CDN 使用时，需要确保先引入 Vue 和 Element UI
4. **组件命名**: 组件名称遵循 HiaXxx 命名规范
5. **样式**: 使用 SCSS 编写样式，支持主题定制

## 总结

HiaUI 是一个基于 Vue 2 和 Element UI 的组件库，主要特点：
- 基于 Element UI 封装，提供更高阶的组件
- HiaForm 组件支持配置化生成表单
- 支持 npm 和 CDN 多种使用方式
- UMD 格式输出，兼容多种模块系统
- 完善的文档和示例
