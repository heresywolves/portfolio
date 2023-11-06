import Me from './img/me.jpg';
import Me2 from './img/me2.png';

export const loadImages = (() => {
  const myImg = document.querySelector('.my-photo');
  myImg.src = Me2;
})();