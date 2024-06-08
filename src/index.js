import { spinnerLoader } from './spinnerLoader';
import './style.css'
import './loadImages'
import techStack from './techStack'
import { Projects } from './projects';
import { threemodel, isModelLoaded } from './threemodel';
import { typewriterEffect } from './typewriterEffect';
// import resume from './resume.pdf';


// Spinner loader

document.addEventListener("DOMContentLoaded", () => {
  let isDomLoaded = false;

  const checkBothLoaded = () => {
    if (isDomLoaded && isModelLoaded) {
      spinnerLoader.close();
    }
  }

  isDomLoaded = true;
  checkBothLoaded();
});


// Render page

techStack.Init(document.querySelector('.stack-container'));
const skillsWrapper = document.querySelectorAll('.skills-wrapper');

// typewriterEffect(document.querySelector('.greeting'), "Привет!");


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
    threemodel.changeColor('#242424');
    darkTheme = true;
  } else {
    document.querySelector('body').classList.remove('dark');
    document.querySelector('div.window-container').classList.remove('dark');
    document.querySelector('header').classList.remove('dark');
    document.querySelector('.rights').classList.remove('dark');
    document.querySelector('h3.stack-heading').classList.remove('dark');
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