> A vessel for holding table operation items.

It is suitable for projects that use the **Vue-2** framework and the **Element-UI** component library

## Example

![operation-vessel示例](README.assets/operation-vessel示例.gif)

## Install

```bash
npm install operation-vessel
```

## Pre-Demand

You should install [Element-UI](https://www.npmjs.com/package/element-ui) First

```bash
npm i element-ui
```

And select the following command

```javascript
/* main.js */
// Fully import
import Vue from 'vue'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element)

// or On demand
import {
  Divider,
  Link,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
} from 'element-ui'

Vue.use(Divider)
   .use(Link)
   .use(Dropdown)
   .use(DropdownMenu)
   .use(DropdownItem)
   .use(Icon)
```

If you chose the [**On demand**]，Please go to the [link🔗](https://element.eleme.cn/#/en-US/component/quickstart#on-demand) for additional actions

## Quick Start

```javascript
/* main.js */
import OperationVessel from "operation-vessel";
Vue.use(OperationVessel);
```

```html
<!-- xxx.vue -->
<operation-vessel>
  <el-button type="text">详情</el-button>
  <el-button type="text">编辑</el-button>
  <el-button type="text">删除</el-button>
  <el-button type="text">变更状态</el-button>
</operation-vessel>
```

## Attributes

| 参数              | 说明                                      | 类型    | 可选值      |       默认值       |
| :---------------- | :---------------------------------------- | :------ | :---------- | :----------------: |
| boundary          | 出现more按钮的边界值                      | number  | —           |         3          |
| trigger           | 更多操作项触发方式                        | string  | hover/click |       hover        |
| moreTitle         | more按钮名称                              | string  | —           |        更多        |
| moreIcon          | more按钮右侧图标名称（仅支持Element图标） | string  | —           | el-icon-arrow-down |
| moreIconVisible   | more按钮右侧图标可见性                    | boolean | —           |       false        |
| dropdownMenuClass | 下来菜单类名                              | string  | —           |         —          |

## Slot
| name    | 说明                           |
| ------- | ------------------------------ |
| —       | 默认插槽，包含需要展示的操作项 |
| moreBtn | 用于替代默认的more按钮         |
