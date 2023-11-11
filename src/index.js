import { spinnerLoader } from './spinnerLoader';
import './style.css'
import './loadImages'
import techStack from './techStack'
import moreSkills from './moreSkills';
import { Projects } from './projects';
import { threemodel } from './threemodel';
// import resume from './resume.pdf';


// Spinner loader

document.addEventListener("DOMContentLoaded", spinnerLoader.close);


// Render page

techStack.Init(document.querySelector('.stack-container'));
moreSkills.Init(document.querySelector('.stack-container'));
const skills = document.querySelectorAll('.skills-wrapper');

const skillsButton = document.querySelector('button.more-skills');
skillsButton.addEventListener('click', showSkills);

function showSkills() {
  skills.forEach((wrapper) => {
    wrapper.style.transform = 'scale(1, 1)';
    wrapper.style.maxHeight = '250px';
    wrapper.style.marginBottom = '24px';
  })
  skillsButton.removeEventListener('click', showSkills);
  skillsButton.textContent = 'See less';
  skillsButton.addEventListener('click', showLess);
}

function showLess() {
  skills.forEach((wrapper) => {
    wrapper.style.transform = 'scale(1, 0)';
    wrapper.style.maxHeight = '0px';
    wrapper.style.marginBottom = '0px';
  })
  skillsButton.textContent = 'See more tech skills';
  skillsButton.removeEventListener('click', showLess);
  skillsButton.addEventListener('click', showSkills);
}

Projects.load();


  try {
    if (window.innerWidth > 900) {
      threemodel.init('#f0e7db');
    }
  } catch {
    document.querySelector('.main-container').style.marginTop = "40px";

  }

// Theme change
let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
let darkTheme = mediaQueryObj.matches; // 
console.log('User prefers dark-theme: ' + darkTheme);

if (darkTheme) {
  const input = document.querySelector('header input');
  if (!input.checked) {
    document.querySelector('header input').checked = true;
  }
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

// Mobile menu

const phoneContainer = document.querySelector('.phone-nav-container');
const menuButton = document.querySelector('.mobile-menu');
const phoneNav = document.querySelector('.phone-nav');
menuButton.addEventListener('click', () => {
  phoneNav.classList.add('active');
  phoneContainer.classList.add('active');
})

phoneNav.addEventListener('click', (e) => {
  e.stopPropagation();
})

phoneContainer.addEventListener('click', () => {
  phoneNav.classList.remove('active');
  phoneContainer.classList.remove('active');
})

// Resume pdf links

// const resumeButtons = document.querySelectorAll('resume-link');

// resumeButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     window.open(resume, '_blank').focus();
//   })
// })