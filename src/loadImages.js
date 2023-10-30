import Me from './img/me.jpg';

export default loadImages = (() => {
  const myImg = document.querySelector('.my-photo');
  myImg.src = Me;
})();