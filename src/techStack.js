import webpackImg from './img/webpack.png'
import npmImg from './img/npm.png'
import jestImg from './img/jest.png'
import javascriptImg from './img/javascript.png'
import githubImg from './img/github.png'
import nodeImg from './img/node.png'
import threeImg from './img/three.png'
import babelImg from './img/babel.png'
import reactImg from './img/react.png'
import sassImg from './img/sass.png'

function Init (doc) {
  
  const stackObj = { 
    webpack: {
      img: webpackImg,
      name: 'Webpack'
    },
    npm: {
      img: npmImg,
      name: 'Node Package Manager'
    },
    javascript: {
      img: javascriptImg,
      name: 'JavaScript'
    },
    jest: {
      img: jestImg,
      name: 'Jest'
    },
    git: {
      img: githubImg,
      name: 'Git'
    }
  }  

  const stackObj2 = {
    node: {
      img: nodeImg,
      name: 'Node JS'
    },
    three: {
      img: threeImg,
      name: 'Three JS'
    },
    babel: {
      img: babelImg,
      name: 'Babel'
    },
    react: {
      img: reactImg,
      name: 'React'
    },
    sass: {
      img: sassImg,
      name: 'Sass'
    }

  } 

  const wrapper = document.createElement('div');
  wrapper.classList.add('stack-wrapper');
  wrapper.style.display = 'grid';
  
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

  // 2nd row

  const wrapper2 = document.createElement('div');
  wrapper2.classList.add('stack-wrapper');
  wrapper2.classList.add('second');
  wrapper2.style.display = 'grid';
  
  const stackLength2 = Object.keys(stackObj2).length;
  wrapper2.style.gridTemplateColumns = `repeat(${stackLength2},1fr)`
  wrapper2.style.gridTemplateRows = `auto auto`;
  wrapper2.style.rowGap = '12px';

  for (const key in stackObj2) {
    const p = document.createElement('p');
    p.textContent = stackObj2[key].name;
    p.style.gridRowStart = '2';
    p.style.textAlign = 'center';
    p.style.fontWeight = '600';
    p.style.fontSize = '12px';
    const imageSrc = stackObj2[key].img;
    const img = document.createElement('img');
    img.style.alignSelf = 'center';
    img.style.justifySelf = 'center';
    img.src = imageSrc;
    img.style.width = '50px';
    wrapper2.appendChild(img);
    wrapper2.appendChild(p);
  }

  doc.appendChild(wrapper2);
}

let techStack = (() => {return {Init}})();
export default techStack;