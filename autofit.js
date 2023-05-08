const autofit = {
  init(options, isShowInitTip = true) {
    if (isShowInitTip) {
      console.log(`%c` + `vue-autofit` + ` is running`, `color: #fff; background: #f40; padding: 2px 4px; border-radius: 4px;`);
    }
    let designWidth = options?.designWidth || 1920;
    let designHeight = options?.designHeight || 929;
    let renderDom = options?.renderDom || "#app";
    let resize = options?.resize || true;
    document.querySelector(renderDom).style.height = `${designHeight}px`;
    document.querySelector(renderDom).style.width = `${designWidth}px`;
    document.querySelector(renderDom).style.transformOrigin = `0 0`;
    keepFit(designWidth, designHeight, renderDom);
    resize && (window.onresize = () => {
      keepFit(designWidth, designHeight, renderDom);
    })
  }
}
function keepFit(designWidth, designHeight, renderDom) {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  let scale = 1;
  if (clientWidth / clientHeight < designWidth / designHeight) {
    scale = (clientWidth / designWidth)
  } else {
    scale = (clientHeight / designHeight)
  }
  document.querySelector(renderDom).style.height = `${clientHeight / scale}px`;
  document.querySelector(renderDom).style.width = `${clientWidth / scale}px`;
  document.querySelector(renderDom).style.transform = `scale(${scale})`;
}
export default autofit;