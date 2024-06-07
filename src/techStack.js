import webpackImg from './img/webpack.png'
import npmImg from './img/npm.png'
import jestImg from './img/jest.png'
import javascriptImg from './img/javascript.png'
import githubImg from './img/github.png'
import nodeImg from './img/node.png'
import threeImg from './img/three.png'
import babelImg from './img/babel.png'
import reactImg from './img/react.png'
import vueImg from './img/vue.png'
import linuxImg from './img/linux.png'
import figmaImg from './img/figma.png'

function Init (doc) {
  const skills = [
    {
      text: "JavaScript (ES5+)",
      image: javascriptImg
    },
    {
      text: "NPM",
      image: npmImg
    },
    {
      text: "Webpack",
      image: webpackImg
    },
    {
      text: "Jest",
      image: jestImg
    },
    {
      text: "React (+Redux)",
      image: reactImg
    },
    {
      text: "Vue",
      image: vueImg
    },
    {
      text: "Babel",
      image: babelImg
    },
    {
      text: "Node",
      image: nodeImg
    },
    {
      text: "ThreeJS",
      image: threeImg
    },
    {
      text: "Git",
      image: githubImg
    },
    {
      text: "Linux",
      image: linuxImg
    },
    {
      text: "Figma",
      image: figmaImg 
    },
  ]

  skills.forEach((item) => {
    const container = document.createElement('div');
    if (item.image) {
      const img = document.createElement('img');
      img.classList.add('skill-img');
      img.src = item.image;
      container.appendChild(img);
    }
    const text = document.createElement('p');
    text.classList.add('skill-text');
    text.textContent = item.text;
    container.appendChild(text);
    container.classList.add('skill-item-container');
    doc.appendChild(container);
  })

}

let techStack = (() => {return {Init}})();
export default techStack;