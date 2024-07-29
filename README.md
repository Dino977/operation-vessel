> A vessel for holding table operation items.

It is suitable for projects that use  **Vue.js 2.0**  and **Element-UI**

## Example

![operation-vessel示例](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/aafc45d3be924f4a9922191a2394c8d1~tplv-73owjymdk6-watermark.image?rk3s=f64ab15b&x-expires=1722571418&x-signature=RHPyur5LjwH5xLUAy4DK%2B5KHekg%3D)

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

If you chose the **On demand**，Please go to the [link🔗](https://element.eleme.cn/#/en-US/component/quickstart#on-demand) for additional actions

## Quick Start

```javascript
/* main.js */
import OperationVessel from "operation-vessel";
Vue.use(OperationVessel);
```

```html
<!-- xxx.vue -->
<operation-vessel>
  <el-button type="text">Detail</el-button>
  <el-button type="text">Edit</el-button>
  <el-button type="text">Delete</el-button>
  <el-button type="text">State Change</el-button>
</operation-vessel>
```

## Attributes

| Attribute          | Description                                                  | Type    | Accepted values                                              | Default            |
| :----------------- | :----------------------------------------------------------- | :------ | :----------------------------------------------------------- | :----------------- |
| boundary           | Boundary value of the more button appears                    | number  | ≥2                                                           | 3                  |
| moreTitle          | Name of the more button                                      | string  | —                                                            | more               |
| moreIcon           | Name of the icon to the right of the more button             | string  | [Element-UI icons](https://element.eleme.cn/#/en-US/component/icon) | el-icon-arrow-down |
| moreIconVisible    | Visibility of the  icon                                      | boolean | —                                                            | false              |
| dropdownAttributes | Attributes of the [drop-down](https://element.eleme.cn/#/en-US/component/dropdown#dropdown-attributes) | object  | —                                                            | —                  |
| dropdownMenuClass  | Name of the drop-down menu                                   | string  | —                                                            | —                  |

## Slot

| name    | Description                |
| ------- | -------------------------- |
| —       | Content of operation items |
| divider | Content of the divider     |
| moreBtn | Content of the more button |

## Extra Operation

If you use [Custom Directives](https://v2.vuejs.org/v2/guide/custom-directive.html) to control the display of operation items, you can try setting `$FILTER`

- It is a **function** which has two parameters. They are `node` and `directives`
- If **true** is returned, the operation item is **displayed**. Reverse hiding

If you want to adjust the default of props, you can try setting `$ATTRIBUTES`

- If the value of the **default** is **Object**, using function return values, such as `() => ({ xxx: xxx })`

```javascript
/* main.js */
import OperationVessel from "operation-vessel";
Vue.use(OperationVessel, {
  $FILTER: (node, directives) => {
    if (xxx) return false
	
    return true
  },
  $ATTRIBUTES: {
    moreTitle: "更多"
    dropdownAttributes: () => ({ trigger: 'click' })
  }
});
```
