import linuxImg from './img/linux.png'
import blenderImg from './img/blender.png'
import pythonImg from './img/python.png'
import cplusImg from './img/cplus.png'
import illustratorImg from './img/illustrator.png'
import photoshopImg from './img/photoshop.png'
import figmaImg from './img/figma.png'
import neoVim from './img/neovim.png'
import wordpressImg from './img/wordpress.png'
import unityImg from './img/unity.png'

function Init (doc) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('skills-wrapper');
  wrapper.style.display = 'grid';
  
  const stackObj = { 
    linux: {
      img: linuxImg,
      name: 'Linux'
    },
    blender: {
      img: blenderImg,
      name: 'Blender 3D'
    },
    cplus: {
      img: cplusImg,
      name: 'C++'
    },
    python: {
      img: pythonImg,
      name: 'Python'
    },
    illustrator: {
      img: illustratorImg,
      name: 'Adobe Illustrator'
    }
  }  

  const stackObj2 = {
    photoshop: {
      img: photoshopImg,
      name: 'Adobe Photoshop'
    },
    figma: {
      img: figmaImg,
      name: 'Figma'
    },
    neovim: {
      img: neoVim,
      name: 'Neovim'
    },
    wordpress: {
      img: wordpressImg,
      name: "Wordpress"
    },
    unity: {
      img: unityImg,
      name: "Unity"
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
    img.style.width = '30px';
    wrapper.appendChild(img);
    wrapper.appendChild(p);
  }

  doc.appendChild(wrapper);
  wrapper.style.transform = 'scale(1, 0)';
  wrapper.style.maxHeight = '0';

  // Second line

  const wrapper2 = document.createElement('div');
  wrapper2.classList.add('skills-wrapper');
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
    img.style.width = '30px';
    wrapper2.appendChild(img);
    wrapper2.appendChild(p);
  }

  doc.appendChild(wrapper2);
  wrapper2.style.transform = 'scale(1, 0)';
  wrapper2.style.maxHeight = '0';
}

let moreSkills = (() => {return {Init}})();
export default moreSkills;