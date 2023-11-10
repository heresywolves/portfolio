import Me from './img/me.jpg';
import Me2 from './img/me2.png';
import phoneMenu from './img/phone-menu.png';

export const loadImages = (() => {
  const myImg = document.querySelector('.my-photo');
  myImg.src = Me2;
  const menuPng = document.querySelector('.mobile-menu');
  menuPng.src = phoneMenu;
})();