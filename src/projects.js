import gitImg from './img/giticon.png'
import dashboardPC from './img/dashboard-pc.png'
import dashboardPhone from './img/dashboard-phone.png'

export let Projects = (() => {
  let container = document.querySelector('.projects-container');
  
  let projectsObj = {
    dashboard: {
      name: 'Admin Dashboard',
      pc: dashboardPC,
      phone: dashboardPhone,
      description: 'This dashboard serves as a responsive layout example that utilizes the strengths of grid and flexbox layouts.',
      stack: 'Vanilla HTML, CSS, JavaScript',
      github: 'https://github.com/heresywolves/admin-dashboard',
      live: 'https://heresywolves.github.io/admin-dashboard/'
    }
  }

  function load() {

    for (const key in projectsObj) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('project-wrapper');

      const pcImg = document.createElement('img');
      pcImg.classList.add('pc-image');
      pcImg.src = projectsObj[key].pc;

      const phoneImg = document.createElement('img');
      phoneImg.src = projectsObj[key].phone;
      phoneImg.classList.add('phone-image');

      const stack = document.createElement('p');
      stack.classList.add('project-stack');
      stack.textContent = projectsObj[key].stack;

      const title = document.createElement('a');
      title.classList.add('project-title');
      title.href = projectsObj[key].live;
      title.textContent = projectsObj[key].name;

      const description = document.createElement('p');
      description.classList.add('project-description');
      description.textContent = projectsObj[key].description;

      const gitButton = document.createElement('a');
      gitButton.classList.add('project-github-link');
      gitButton.href = projectsObj[key].github;
      const gitIcon = document.createElement('img');
      gitIcon.classList.add('project-github-icon');
      gitIcon.src = gitImg;
      gitIcon.style.width = '15px';
      gitButton.textContent = 'Github Source';

      wrapper.appendChild(pcImg);
      wrapper.appendChild(phoneImg);
      wrapper.appendChild(title);
      wrapper.appendChild(stack);
      wrapper.appendChild(description);
      wrapper.appendChild(gitButton);
      wrapper.appendChild(gitIcon);
      container.appendChild(wrapper);

    }

  }

  return {load}
})();