import Me from './img/me.jpg';

export const loadImages = (() => {
  const myImg = document.querySelector('.my-photo');
  myImg.src = Me;
})();