import autofit from '../src/index';

autofit.init({
  el: 'body',
  cssMode: 'zoom',
  ignore: [
    {
      el: ".left",
      // width: "130%", //可选，需注明单位
    },
    {
     
    },
  ],//'.left'
});
