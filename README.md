# Hia-ui

## 介绍

> 基于 [Element-ui]((https://element.faas.ele.me/#/zh-CN)) 二次封装基础组件, 希望能帮助到大家，详细组件请查看[文档](https://mingyangya.github.io/hia-ui/)

<p align="center">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-2.7.16-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/mingyangya/hia-ui/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/mingyangya/hia-ui.svg" alt="t-ui">
  </a>
   <a href="https://www.npmjs.com/package/hia-ui" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/hia-ui.svg" />
    </a>
</p>

## npm 方式安装使用

 `前提条件：使用项目必须全局注册 Element-ui组件库`

```bash
npm install hia-ui --save
```

## 使用

```js
import Vue from 'vue'

import Element from 'element-ui'

import HiaUi from 'hia-ui'
import 'hia-ui/lib/hia-ui.css'

Vue.use(Element)
// 需要在使用HiaUi组件库之前使用element-ui组件库
Vue.use(HiaUi)

// or 按需引入

import { HiaButton } from 'hia-ui'

Vue.component(HiaButton.name, HiaButton)
```

## 提问

* 直接在 [github issues](https://github.com/mingyangya/hia-ui/issues) 提交问题

每次升级版本修复的问题记录在[这里](./ISSUE.md)

## 关于作者

* 关注作者的[博客](https://mingyangya.github.io/)
