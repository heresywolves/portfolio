import webpackImg from './img/webpack.png'
import npmImg from './img/npm.png'
import jestImg from './img/jest.png'
import javascriptImg from './img/javascript.png'
import githubImg from './img/github.png'

function Init (doc) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('slider-wrapper');
  
  const imageArr = [
    webpackImg,
    npmImg,
    jestImg,
    javascriptImg,
    githubImg
  ]
  
  const imageNum = imageArr.length;
  for (let i = 0; i < imageNum; i++) {
    const imageSrc = imageArr[i];
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.width = '50px';
    wrapper.appendChild(img);
  }

  doc.appendChild(wrapper);

}

let imageSlider = (() => {return {Init}})();
export default imageSlider;