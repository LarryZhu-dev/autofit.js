![autofitLogo](https://raw.githubusercontent.com/larryzhu-dev/autofit.js/master/autofit.png)

<center><font face="黑体" size=26>autofit.js</font></center>

[简体中文](./readme.md) | English

autofit.js is a tool for making your PC projects responsive to the screen. Its principle is very simple: based on scaling with equal proportions, it increases the width or height to the right or bottom to achieve a full-screen effect. Using autofit.js does not compress or stretch elements; it simply sets the width and height of the container. 

### v3.0.0 New Version Introduction

Now, `ignore` can be passed as an Array\<string>:

```js
autofit.init({
	ignore: ['.leaflet', '.gaodemap']
})
```

Now, `ignore` supports width and height with other units:

```js
autofit.init({
	ignore: [{
    	el: '.gaodemap',
        width: "80%",
        height: '200px'
    }]
})
```

Starting from v3.0.0 (inclusive), the parameters `designWidth`, `designHeight`, and `renderDom` will no longer be compatible. For field changes, please see the following text. In `ignore`, both the `el` and `dom` parameters (as well as the string format) are still compatible.

Field changes: `designWidth` > `dw`, `designHeight` > `dh`, `renderDom` > `el`

Version 2.0.5 is the last compatible version; afterwards, only the new fields will be supported.

Install the old version:

```shell
npm i autofit.js@2.0.5
```

### autofit.js

autofit.js is a tool that allows your project to be responsive with just one click.

In theory, it can support resolutions lower than your design draft.

### Import

```js
import autofit from 'autofit.js'
```

### Quick Start

```js
autofit.init()
```

> The default parameters are 1920 * 929 (i.e., 1080 minus the browser header). Just call it directly.

### Usage

```js
export default {  
  mounted() {
	autofit.init({
        dh: 1080,
        dw: 1920,
        el: "body",
        resize: true
    }, false) // You can disable console prompt output
  },
}
```

> The above example uses the default parameters, which can be adjusted according to the actual situation. The optional parameters are:
>
> ```js
>    * - el: The rendering DOM, default is "body", must use an id selector 
>    * - dw: Design draft width, default is 1920 
>    * - dh: Design draft height, default is 1080
>    * - resize: Whether to listen for resize events, default is true
>    * - ignore: Elements to be ignored in scaling (these elements will be inversely scaled), parameters can be found in readme.md
>    * - transition: Transition time, default is 0
>    * - delay: Default is 0
> 
> ```

### Ignoring Certain Elements

```js
autofit.init({
  ignore: [
     { 
      el: ".gaodeMap",
     },
  ]
})
```

Pass in `ignore` to exclude elements from scaling.

More personalized settings:

```js
autofit.init({
  ignore: [
    {
      el: ".gaodeMap", // Required
      height: "300px", // Optional
      width: "80%", // Optional
      scale: 1.2, // Optional: playback degree, based on the size of the main element after scaling
      fontSize: 26 // Optional, if the custom scaled text size is not suitable, you can set the font size here
    },
    {
        //...
    }
  ]
})
```

If the size of the element after inverse scaling changes the structure, you can manually pass the width, height, and playback degree.

`ignore` also supports passing string arrays:

```js
autofit.init({
  ignore: ['.gaodeMap', '.leaflet', '#someElementClassOrId']
})
```

### elRectification

Some charts rendered using canvas may also have event offsets. Unlike maps, large charts may not be fully displayed when using `ignore`. In this case, you can use `elRectification` (not as efficient as `ignore`).

If `ignore` does not meet the requirements, you can use `autofit.elRectification(".classNameOrId")`.

```js
import { elRectification } from 'autofit.js'
```

```html
<div class="G2plot"></div>
<div class="G2plot"></div>
<div class="G2plot"></div>
```

```js
onMounted(() => {
  elRectification(".G2plot")
})
```

When using `elRectification`, the element to be rectified must already be mounted.

### Disabling the Impact of autofit.js

When autofit is not initialized, an error will occur if the element cannot be found. Before using `autofit.off()`, make sure it has been initialized.

```js
autofit.off()
```
