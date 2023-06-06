<div  style='background-image: linear-gradient( -45deg, #bd34fe 50%, #47caff 50% ); filter: blur(72px);border-radius: 50%;width: 280px;height: 280px;position: absolute;top:0;left:50%;    transform: translateX(-50%);'>
</div>

<img src='https://raw.githubusercontent.com/995231030/autofit.js/master/autofit.png' style='width: 280px;height: 280px;position: absolute;top:0;left:50%;transform: translateX(-50%);' />

<div style='background:linear-gradient( -45deg, #bd34fe 50%, #47caff 50% );background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );background-clip: text;-webkit-background-clip: text;   -webkit-text-fill-color:linear-gradient( -45deg, #bd34fe 50%, #47caff 50% );font-size:56px;position: absolute;top:280px;left:50%;transform: translateX(-50%);'>autofit.js</div>

<div  style='width: 280px;height: 360px;'></div>

[简体中文](./readme.md) | English

autofit.js is a tool for making your PC projects adapt to different screen sizes. Its principle is quite simple: it applies a scale transformation while increasing the width or height to fill the entire screen. Autofit.js does not squeeze or stretch elements; it simply sets the container's width and height.

| Date       | Version | Description                                  |
| ---------- | ------- | -------------------------------------------- |
| 2023-04-16 | v1.0.0  | First release 🥳                              |
| 2023-04-23 | v1.0.9  | Fixed issues with fullscreen and F11 mode    |
| 2023-05-12 | v1.1.2  | Added ignore element feature (map hotspots)👍 |
| 2023-05-22 | v2.0.0  | Added option to disable autofit effects      |
| 2023-05-30 | v2.0.2  | Improved compatibility and error handling    |

### autofit.js

autofit.js is a tool that allows your project to adapt to different screen sizes with a single click (formerly vue-autofit).

In theory, it supports resolutions lower than or equal to your design specifications.

### Import

```js
import autofit from 'autofit.js'
```

### Quick Start

```js
autofit.init()
```

> By default, it uses parameters for a resolution of 1920x929 (excluding the browser header). Simply call this method to initialize it.

### Usage

```js
export default {  
  mounted() {
	autofit.init({
        designHeight: 1080,
        designWidth: 1920,
        renderDom:"#app",
        resize: true
    },false) // Disable console prompt output
  },
}
```

> The above example uses the default parameters. Adjust the parameters according to your needs:
>
> ```js
>    * - renderDom (optional): The DOM element to render, default is "#app" and must use the ID selector.
>    * - designWidth (optional): The width of the design specification, default is 1920.
>    * - designHeight (optional): The height of the design specification, default is 929. If the project is displayed in fullscreen, it can be set to 1080.
>    *

 - resize (optional): Whether to listen for the resize event, default is true.
> ```

### Ignoring Certain Elements

```js
autofit.init({
  ignore: [
     { 
      dom: ".gaodeMap",
     },
  ]
})
```

Use the `ignore` option to exclude specific elements from being scaled.

More personalized settings:

```js
autofit.init({
  ignore: [
    {
      dom: ".gaodeMap", // Required
      height: 300, // Optional: specify the height in pixels
      width: 300, // Optional: specify the width in pixels
      scale: 1.2, // Optional: playback degree based on the scaled size of the main element
      fontSize: 26 // Optional: if the custom scaled font size is not suitable, you can set it here
    },
    {
        //...
    }
  ]
})
```

If the reverse scaling of an element causes the structure to change, you can manually specify the width, height, and playback degree.

### Disabling the Effects of autofit.js

```js
autofit.off()
```
