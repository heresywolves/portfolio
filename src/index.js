import './style.css'
import './loadImages'
import techStack from './techStack'
import moreSkills from './moreSkills';
import { Projects } from './projects';
import { threemodel } from './threemodel';


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


threemodel.init();

