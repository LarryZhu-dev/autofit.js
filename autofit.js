let currRenderDom = null;
let resizeListener = null;
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
    currRenderDom = renderDom;
    let dom = document.querySelector(renderDom)
    if (!dom) {
      console.error(`autofit: '${renderDom}' is not exist`);
      return
    }
    const style = document.createElement('style');
    style.lang = 'text/css';
    style.id = 'autofit-style';
    style.innerHTML = `
      body {
        overflow: hidden;
      }
    `;
    dom.appendChild(style);
    dom.style.height = `${designHeight}px`;
    dom.style.width = `${designWidth}px`;
    dom.style.transformOrigin = `0 0`;
    keepFit(designWidth, designHeight, dom, ignore);
    resizeListener = () => {
      keepFit(designWidth, designHeight, dom, ignore);
    }
    resize && window.addEventListener('resize', resizeListener)
  },
  off(renderDom = "#app") {
    let state = true
    try {
      window.removeEventListener("resize", resizeListener);
      document.querySelector('#autofit-style').remove();
      document.querySelector(currRenderDom ? currRenderDom : renderDom).style = '';
    } catch (error) {
      console.error(`autofit: Failed to remove normally`, error);
      state = false
    }
    state && console.log(`%c` + `autofit.js` + ` is off`, `font-weight: bold;color: #707070; background: #c9c9c9; padding: 8px 12px; border-radius: 4px;`);
  }
}
function keepFit(designWidth, designHeight, dom, ignore) {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  let scale = (clientWidth / clientHeight < designWidth / designHeight) ? (clientWidth / designWidth) : (clientHeight / designHeight)
  dom.style.height = `${clientHeight / scale}px`;
  dom.style.width = `${clientWidth / scale}px`;
  dom.style.transform = `scale(${scale})`;
  for (let item of ignore) {
    let realScale = (item.scale ? item.scale : 1 / scale)
    let realFontSize = realScale != scale ? item.fontSize : 'autofit'
    let realWidth = realScale != scale ? item.width : 'autofit'
    let realHeight = realScale != scale ? item.height : 'autofit'
    document.querySelector('#autofit-style').innerHTML += `${item.dom}{ 
      transform: scale(${realScale})!important;
      transform-origin: 0 0;
      width: ${realWidth}px!important;
      height: ${realHeight}px!important;
    }`;
    document.querySelector('#autofit-style').innerHTML += `${item.dom} div ,${item.dom} span,${item.dom} a,${item.dom} *{
    font-size: ${realFontSize}px;
    }`;
  }
}
export default autofit;