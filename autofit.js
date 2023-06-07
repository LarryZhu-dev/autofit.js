let currRenderDom = null;
let currelRectification = ''
let currelRectificationLevel = ''
let resizeListener = null;
let timer = null
let currScale = 1
let isAutofitRunnig = false
let isElRectification = false
const autofit = {
  init(options = {}, isShowInitTip = true) {
    if (isShowInitTip) {
      console.log(`%c` + `autofit.js` + ` is running`, `font-weight: bold; color: #ffb712; background:linear-gradient(-45deg, #bd34fe 50%, #47caff 50% );background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );background-clip: text;-webkit-background-clip: text; -webkit-text-fill-color:linear-gradient( -45deg, #bd34fe 50%, #47caff 50% ); padding: 8px 12px; border-radius: 4px;`);
    }
    let designWidth = options.designWidth || 1920;
    let designHeight = options.designHeight || 929;
    let renderDom = options.renderDom || "#app";
    let resize = options.resize || true;
    let ignore = options.ignore || [];
    let transition = options.transition || 0.6
    let delay = options.delay || 1000
    currRenderDom = renderDom;
    let dom = document.querySelector(renderDom)
    if (!dom) {
      console.error(`autofit: '${renderDom}' is not exist`);
      return
    }
    dom.style.transition = `${transition}s`
    const style = document.createElement('style');
    const ignoreStyle = document.createElement('style');
    style.lang = 'text/css';
    ignoreStyle.lang = 'text/css';
    style.id = 'autofit-style';
    ignoreStyle.id = 'ignoreStyle';
    style.innerHTML = `
      body {
        overflow: hidden;
      }
    `;
    dom.appendChild(style);
    dom.appendChild(ignoreStyle);
    dom.style.height = `${designHeight}px`;
    dom.style.width = `${designWidth}px`;
    dom.style.transformOrigin = `0 0`;
    keepFit(designWidth, designHeight, dom, ignore);
    resizeListener = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        keepFit(designWidth, designHeight, dom, ignore);
        elRectification(currelRectification, currelRectificationLevel)
      }, delay)
    }
    resize && window.addEventListener('resize', resizeListener)
    isAutofitRunnig = true
  },
  off(renderDom = "#app") {
    try {
      window.removeEventListener("resize", resizeListener);
      document.querySelector('#autofit-style').remove();
      document.querySelector(currRenderDom ? currRenderDom : renderDom).style = '';
      for (let item of document.querySelectorAll(currelRectification)) {
        item.style.width = ``
        item.style.height = ``
        item.style.transform = ``
      }
    } catch (error) {
      console.error(`autofit: Failed to remove normally`, error);
      isAutofitRunnig = false
    }
    isAutofitRunnig && console.log(`%c` + `autofit.js` + ` is off`, `font-weight: bold;color: #707070; background: #c9c9c9; padding: 8px 12px; border-radius: 4px;`);
  },

}
function elRectification(el, level = 1) {
  if (!isAutofitRunnig) {
    console.error("autofit.js：autofit has not been initialized yet")
  }
  !el && console.error(`autofit.js：bad selector: ${el}`)
  currelRectification = el
  currelRectificationLevel = level
  const currEl = document.querySelectorAll(el)
  if (currEl.length == 0) {
    console.error("autofit.js：elRectification found no element")
    return
  }
  for (let item of currEl) {
    if (!isElRectification) {
      item.originalWidth = item.clientWidth
      item.originalHeight = item.clientHeight
    }
    let rectification = currScale == 1 ? 1 : currScale * level
    item.style.width = `${item.originalWidth * rectification}px`
    item.style.height = `${item.originalHeight * rectification}px`
    item.style.transform = `scale(${1 / currScale})`
    item.style.transformOrigin = `0 0`
  }
  isElRectification = true
}
function keepFit(designWidth, designHeight, dom, ignore) {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  currScale = (clientWidth / clientHeight < designWidth / designHeight) ? (clientWidth / designWidth) : (clientHeight / designHeight)
  dom.style.height = `${clientHeight / currScale}px`;
  dom.style.width = `${clientWidth / currScale}px`;
  dom.style.transform = `scale(${currScale})`
  for (let item of ignore) {
    let realScale = (item.scale ? item.scale : 1 / currScale)
    let realFontSize = realScale != currScale ? item.fontSize : 'autofit'
    let realWidth = realScale != currScale ? item.width : 'autofit'
    let realHeight = realScale != currScale ? item.height : 'autofit'
    document.querySelector('#ignoreStyle').innerHTML = `${item.dom}{ 
      transform: scale(${realScale})!important;
      transform-origin: 0 0;
      width: ${realWidth}px!important;
      height: ${realHeight}px!important;
    }`;
    document.querySelector('#ignoreStyle').innerHTML += `${item.dom} div ,${item.dom} span,${item.dom} a,${item.dom} *{
    font-size: ${realFontSize}px;
    }`;
  }
}
export {
  elRectification
}
export default autofit;