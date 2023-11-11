import Spinner from './img/spinner.svg';

export let spinnerLoader = (() => {
  const doc = document.querySelector('.spinner-loader');

  const img = document.createElement('img');
  img.src = Spinner;
  img.classList.add('spinner-img');
  
  doc.appendChild(img);

  function close () {
    setTimeout(() => {
      img.classList.add('closed');
      setTimeout(() => {
        doc.classList.add('closed');
      }, 1500);
    }, 1000);
  }
  return {close}
})();