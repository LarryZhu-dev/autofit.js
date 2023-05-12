### autofit.js

这是一款可以使你的项目一键自适应的工具

### 引入

```js
import autofit from 'autofit.js'
```

### 快速开始

```js
autofit.init()
```

> 默认参数为1920*929（即去掉浏览器头的1080）, 直接调用即可

### 使用

```js
export default {  
  mounted() {
	autofit.init({
        designHeight: 1080,
        designWidth: 1920,
        renderDom:"#app",
        resize: true
    },false) // 可关闭控制台运行提示输出
  },
}
```

> 以上使用的是默认参数，可根据实际情况调整，参数分别为
>
> ```js
>    * - renderDom（可选）：渲染的dom，默认是 "#app"，必须使用id选择器 
>    * - designWidth（可选）：设计稿的宽度，默认是 1920 
>    * - designHeight（可选）：设计稿的高度，默认是 929 ，如果项目以全屏展示，则可以设置为1080
>    * - resize（可选）：是否监听resize事件，默认是 true
> ```