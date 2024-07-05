import autofit from '../src/index';

const h1 = document.createElement('h1');
h1.innerHTML = 'Hello Autofit!';
document.body.appendChild(h1);

autofit.init({
  el: 'body'
});
