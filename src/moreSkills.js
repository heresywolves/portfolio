import webpackImg from './img/webpack.png'
import npmImg from './img/npm.png'
import jestImg from './img/jest.png'
import javascriptImg from './img/javascript.png'
import githubImg from './img/github.png'

function Init (doc) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('skills-wrapper');
  wrapper.style.display = 'grid';
  
  const stackObj = { 
    Linux: {
      img: webpackImg,
      name: 'Linux'
    },
    npm: {
      img: npmImg,
      name: 'Node Package Manager'
    },
    jest: {
      img: jestImg,
      name: 'Jest'
    },
    javascript: {
      img: javascriptImg,
      name: 'JavaScript'
    },
    git: {
      img: githubImg,
      name: 'Git'
    }
  }  
  
  const stackLength = Object.keys(stackObj).length;
  wrapper.style.gridTemplateColumns = `repeat(${stackLength},1fr)`
  wrapper.style.gridTemplateRows = `auto auto`;
  wrapper.style.rowGap = '12px';

  for (const key in stackObj) {
    const p = document.createElement('p');
    p.textContent = stackObj[key].name;
    p.style.gridRowStart = '2';
    p.style.textAlign = 'center';
    p.style.fontWeight = '600';
    p.style.fontSize = '12px';
    const imageSrc = stackObj[key].img;
    const img = document.createElement('img');
    img.style.alignSelf = 'center';
    img.style.justifySelf = 'center';
    img.src = imageSrc;
    img.style.width = '50px';
    wrapper.appendChild(img);
    wrapper.appendChild(p);
  }

  doc.appendChild(wrapper);
  wrapper.style.transform = 'scale(1, 0)';
  wrapper.style.maxHeight = '0';
}

let moreSkills = (() => {return {Init}})();
export default moreSkills;