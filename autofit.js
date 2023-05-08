const autofit = {
  init(options, isShowInitTip = true) {
    if (isShowInitTip) {
      console.log(`%c` + `vue-autofit` + ` is running`, `color: #fff; background: #f40; padding: 2px 4px; border-radius: 4px;`);
    }
    let designWidth = options?.designWidth || 1920;
    let designHeight = options?.designHeight || 929;
    let renderDom = options?.renderDom || "#app";
    let resize = options?.resize || true;
    let dom = document.querySelector(renderDom)
    dom.style.height = `${designHeight}px`;
    dom.style.width = `${designWidth}px`;
    dom.style.transformOrigin = `0 0`;
    keepFit(designWidth, designHeight, dom);
    resize && (window.onresize = () => {
      keepFit(designWidth, designHeight, dom);
    })
  }
}
function keepFit(designWidth, designHeight, dom) {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  let scale = (clientWidth / clientHeight < designWidth / designHeight) ? (clientWidth / designWidth) : (clientHeight / designHeight)
  dom.style.height = `${clientHeight / scale}px`;
  dom.style.width = `${clientWidth / scale}px`;
  dom.style.transform = `scale(${scale})`;
}
export default autofit;