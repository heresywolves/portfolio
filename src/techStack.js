import webpackImg from './img/webpack.png'
import npmImg from './img/npm.png'
import jestImg from './img/jest.png'
import javascriptImg from './img/javascript.png'
import githubImg from './img/github.png'

function Init (doc) {
  const heading = document.createElement('h3');
  heading.classList.add('stack-heading');
  heading.textContent = 'Stack';
  heading.style.textAlign = 'center';

  const wrapper = document.createElement('div');
  wrapper.classList.add('stack-wrapper');
  wrapper.style.display = 'grid';
  
  const stackObj = { 
    webpack: {
      img: webpackImg,
      name: 'Webpack'
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

  for (const key in stackObj) {
    const p = document.createElement('p');
    p.textContent = stackObj[key].name;
    p.style.gridRowStart = '2';
    p.style.textAlign = 'center';
    const imageSrc = stackObj[key].img;
    const img = document.createElement('img');
    img.style.alignSelf = 'center';
    img.style.justifySelf = 'center';
    img.src = imageSrc;
    img.style.width = '50px';
    wrapper.appendChild(img);
    wrapper.appendChild(p);
  }

  doc.appendChild(heading);
  doc.appendChild(wrapper);

}

let techStack = (() => {return {Init}})();
export default techStack;