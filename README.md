<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/Dino977/image-hosting@main/operation-vessel%E7%A4%BA%E4%BE%8B.gif">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/operation-vessel">
  	<img src="https://img.shields.io/npm/v/operation-vessel.svg">
  </a>
  <a href="https://npmcharts.com/compare/operation-vessel?minimal=true">
  	<img src="https://img.shields.io/npm/dm/operation-vessel.svg">
  </a>
  <img src="https://img.shields.io/badge/License-ISC-yellow">
  <br>
  <a href="https://www.npmjs.com/package/vue/v/2.6.14">
    <img src="https://img.shields.io/badge/peer-Vue%202.x-41b883">
  </a>
  <a href="https://www.npmjs.com/package/element-ui/v/2.15.9">
    <img src="https://img.shields.io/badge/peer-Element--UI-20A0FF">
  </a>
</p>



> A vessel for holding table operation items.

It will stay with Vue 2.x and Element-UI

## Pre-Demand

If you use [On Demand](https://element.eleme.cn/2.14/#/en-US/component/quickstart#on-demand) for Element-UI, make sure to import the following components:

- Divider
- Link
- Dropdown
- DropdownMenu
- DropdownItem
- Icon

## Install

```bash
npm install operation-vessel
```

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

| Attribute           | Description                                                                                            | Type    | Accepted values                                                     | Default            |
| :------------------ | :----------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------ | :----------------- |
| boundary            | Boundary value of the more button appears                                                              | number  | ≥2                                                                  | 3                  |
| more-title          | Name of the more button                                                                                | string  | —                                                                   | more               |
| more-icon           | Name of the icon to the right of the more button                                                       | string  | [Element-UI icons](https://element.eleme.cn/#/en-US/component/icon) | el-icon-arrow-down |
| more-icon-visible   | Visibility of the icon                                                                                 | boolean | —                                                                   | false              |
| dropdown-attributes | Attributes of the [drop-down](https://element.eleme.cn/#/en-US/component/dropdown#dropdown-attributes) | object  | —                                                                   | —                  |
| dropdown-menu-class | Name of the drop-down menu                                                                             | string  | —                                                                   | —                  |

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
