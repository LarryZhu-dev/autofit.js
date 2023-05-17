const autofit = {
  init(options = {}, isShowInitTip = true) {
    if (isShowInitTip) {
      console.log(`%c` + `autofit.js` + ` is running`, `color: #fff; background: #f40; padding: 2px 4px; border-radius: 4px;`);
    }
    let designWidth = options.designWidth || 1920;
    let designHeight = options.designHeight || 929;
    let renderDom = options.renderDom || "#app";
    let resize = options.resize || true;
    let ignore = options.ignore || [];
    let dom = document.querySelector(renderDom)
    const style = document.createElement('style');
    style.lang = 'text/css';
    style.id = 'autofit-style';
    dom.appendChild(style);
    dom.style.height = `${designHeight}px`;
    dom.style.width = `${designWidth}px`;
    dom.style.transformOrigin = `0 0`;
    keepFit(designWidth, designHeight, dom, ignore);
    resize && (window.onresize = () => {
      keepFit(designWidth, designHeight, dom, ignore);
    })
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
    document.querySelector('#autofit-style').innerHTML = `${item.dom}{ 
      transform: scale(${realScale})!important;
      transform-origin: 50% 0;
      width: ${realWidth}px!important;
      height: ${realHeight}px!important;
    }`;
    document.querySelector('#autofit-style').innerHTML += `${item.dom} div ,${item.dom} span,${item.dom} a,${item.dom} *{
    font-size: ${realFontSize}px;
    }`;
  }
}
export default autofit;