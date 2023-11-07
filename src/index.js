import './style.css'
import './loadImages'
import techStack from './techStack'
import moreSkills from './moreSkills';
import { Projects } from './projects';
import { threemodel } from './threemodel';



// Render page

techStack.Init(document.querySelector('.stack-container'));
moreSkills.Init(document.querySelector('.stack-container'));
const skills = document.querySelector('.skills-wrapper');

const skillsButton = document.querySelector('button.more-skills');
skillsButton.addEventListener('click', showSkills);

function showSkills() {
  skills.style.transform = 'scale(1, 1)';
  skills.style.maxHeight = '250px';
  skillsButton.removeEventListener('click', showSkills);
  skillsButton.textContent = 'See less';
  skillsButton.addEventListener('click', showLess);
}

function showLess() {
  skills.style.maxHeight = '0';
  skills.style.transform = 'scale(1, 0)';
  skillsButton.textContent = 'See more skills';
  skillsButton.removeEventListener('click', showLess);
  skillsButton.addEventListener('click', showSkills);
}

Projects.load();

threemodel.init('#f0e7db');

// Theme change
let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
let darkTheme = mediaQueryObj.matches; // 
console.log('User prefers dark-theme: ' + darkTheme);

if (darkTheme) {
  document.querySelector('header label').click();
  darkTheme = false;
  changeTheme();
}

document.querySelector('header label').addEventListener('click', changeTheme);
function changeTheme(e) {
  if (!darkTheme) {
    document.querySelector('body').classList.add('dark');
    document.querySelector('div.window-container').classList.add('dark');
    document.querySelector('header').classList.add('dark');
    document.querySelector('.rights').classList.add('dark');
    document.querySelector('h3.stack-heading').classList.add('dark');
    document.querySelector('.greeting').classList.add('dark');
    document.querySelector('button.more-skills').classList.add('dark');
    threemodel.changeColor('#242424');
    darkTheme = true;
  } else {
    document.querySelector('body').classList.remove('dark');
    document.querySelector('div.window-container').classList.remove('dark');
    document.querySelector('header').classList.remove('dark');
    document.querySelector('.rights').classList.remove('dark');
    document.querySelector('h3.stack-heading').classList.remove('dark');
    document.querySelector('.greeting').classList.remove('dark');
    document.querySelector('button.more-skills').classList.remove('dark');
    threemodel.changeColor('#f0e7db');
    darkTheme = false;
  }
}