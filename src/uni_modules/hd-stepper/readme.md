
# [组件库官方文档：fant-mini-plus](https://fant-mini-plus.top/fant-mini-plus/components/hd-stepper.html)
组件库提供更多vue3组件，比单独引入更加强大

# Stepper 步进器
步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

## 代码演示

### 样式风格

#### 直角风格

```html
<hd-stepper shape="square" v-model="value0"></hd-stepper>
```

#### 直角风格

```html
<hd-stepper shape="circle" v-model="value1"></hd-stepper>
```

### 基础功能

#### 步长设置

```html
<hd-stepper step="3" shape="circle" v-model="value2"></hd-stepper>
```

#### 限制范围

```html
<hd-stepper :max="20" :min="0" shape="circle" v-model="value3"></hd-stepper>
```

#### 限制输入整数

```html
<hd-stepper :integer="true" shape="circle" v-model="value4"></hd-stepper>
```

### 扩展功能

#### 折叠减号

```html
<hd-stepper shape="square" v-model="value5" :collapsible="true"></hd-stepper>
```

#### 长按加减

```html
<hd-stepper shape="circle" v-model="value6" :longPress="true"></hd-stepper>
```

#### 异步更新

```html
<hd-loading></hd-loading>
<hd-stepper shape="circle" v-model="value7" :asyncChange="true" @change="change"></hd-stepper>
```

```ts
const loading = useLoading() 

function change(val) {
  loading.showLoading({
    title: '改变中'
  })
  setTimeout(() => {
    this.value7 = val
    loading.hideLoading()
  }, 4000)
}
```

### 禁用状态

#### 禁止输入

```html
<hd-stepper shape="square" v-model="value8" readonly></hd-stepper>
```

#### 禁止操作

```html
<hd-stepper shape="square" v-model="value10" disabled></hd-stepper>
```




## Props

|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|value|输入值|`Number` /  `String`|`false`|0|
|min|最小值|`Number` /  `String`|`false`|0|
|max|最大值|`Number` /  `String`|`false`|Number.MAX_SAFE_INTEGER|
|step|步长|`Number` /  `String`|`false`|1|
|disabled|是否禁用|`Boolean`|`false`|false|
|readonly|是否禁用输入框|`Boolean`|`false`|false|
|asyncChange|是否开启异步变更，开启后需要手动控制输入值|`Boolean`|`false`|false|
|collapsible|是否可以折叠|`Boolean`|`false`|false|
|shape|样式风格|`'square'` / `'circle'`|`false`|默认值是：`circle`|
|decimalLength|显示的小数位数|`Number`|`false`|4|
|longPress|是否开启长按|`Boolean`|`false`|false|
|integer|是否只允许输入整数|`Boolean`|`false`|false|



## Events

|Event Name|Description|Parameters|
|---|---|---|
|focus|输入框聚焦时触发|event: Event|
|blur|输入框失焦时触发|event: Event|
|input|输入框内容发生变化时触发|value：输入框的内容，建议通过v-model双向绑定输入值，而不是监听此事件的形式|
|change|当绑定值变化时触发的事件|value：输入框的内容|



## Slots

|Name|Description|Default Slot Content|
|---|---|---|
|minus|自定义减小按钮|-|
|plus|自定义增加按钮|-|


## 联系我

有不明白或者建议可以扫码交流
#### QQ群
<img  src="https://fant-mini-plus.top/img/qq.jpg
" width="220" height="auto">

#### 微信群
<img src="https://fant-mini-plus.top/img/weixin.png
" width="220" height="auto">
