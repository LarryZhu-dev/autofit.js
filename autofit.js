const autofit = {
  init(options) {
    let designWidth = options?.designWidth || 1920;
    let designHeight = options?.designHeight || 929;
    let renderDom = options?.renderDom || "#app";
    let resize = options?.resize || true;
    keepScale(designWidth, designHeight, renderDom);
    resize && (window.onresize = () => {
      keepScale(designWidth, designHeight, renderDom);
    })
  }
}
function keepScale(designWidth, designHeight, renderDom) {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  document.querySelector(renderDom).style.height = `${designHeight}px`;
  document.querySelector(renderDom).style.width = `${designWidth}px`;
  let scale = 1;
  if (clientWidth / clientHeight < designWidth / designHeight) {
    scale = (clientWidth / designWidth)
    document.querySelector(renderDom).style.height = `${clientHeight / scale}px`;
  } else {
    scale = (clientHeight / designHeight)
    document.querySelector(renderDom).style.width = `${clientWidth / scale}px`;
  }
  document.querySelector(renderDom).style.transform = `scale(${scale})`;
}
export default autofit;