declare interface autofit {
  /**
   * 参数列表
   * 对象：
   * 
   * @param {Object} options 
   * - 传入对象，对象中的属性如下：
   * - renderDom（可选）：渲染的dom，默认是 "#app"，必须使用id选择器 
   * - designWidth（可选）：设计稿的宽度，默认是 1920 
   * - designHeight（可选）：设计稿的高度，默认是 929 ，如果项目以全屏展示，则可以设置为1080
   * - resize（可选）：是否监听resize事件，默认是 true
  */
  init(options: { renderDom: String, designWidth: Number, designHeight: Number }): void;
}
declare const autofit: autofit;

export default autofit;