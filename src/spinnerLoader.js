import Spinner from './img/spinner.svg';

export let spinnerLoader = (() => {
  const doc = document.querySelector('.spinner-loader');

  const texts = [
    "Загружаю красивые картинки...",
    "Подтягиваю 3D модельку...",
    "Крашу кнопки...",
    "Завершаю загрузку...",
  ]

  const img = document.createElement('img');
  img.src = Spinner;
  img.classList.add('spinner-img');

  const p = document.createElement('p');
  p.classList.add('loader-text');
  p.textContent = "Подключаю важные стили...";
  
  doc.appendChild(img);
  doc.appendChild(p);

  const timer = setInterval(() => {
    if (texts.length > 1) {
      p.textContent = texts.shift();
    }
  }, 2000);


  function close () {
    p.textContent = "Завершаю загрузку...";
    clearInterval(timer);
    setTimeout(() => {
      img.classList.add('closed');
      p.classList.add('closed');
      setTimeout(() => {
        doc.classList.add('closed');
      }, 1500);
    }, 1000);
  }
  return {close}
})();