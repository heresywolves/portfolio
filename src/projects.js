import gitImg from './img/giticon.png'
import dashboardPC from './img/dashboard-pc.png'
import dashboardPhone from './img/dashboard-phone.png'
import todoPC from './img/todo-pc.png'

export let Projects = (() => {
  let container = document.querySelector('.projects-container');
  
  let projectsObj = {
    dashboard: {
      name: 'Admin Dashboard',
      pc: dashboardPC,
      phone: dashboardPhone,
      description: 'This dashboard serves as a responsive layout example that utilizes the strengths of grid and flexbox layouts.',
      stack: 'Vanilla JS, HTML, CSS',
      github: 'https://github.com/heresywolves/admin-dashboard',
      live: 'https://heresywolves.github.io/admin-dashboard/'
    },
    todo: {
      name: 'ToDo App',
      pc: todoPC,
      phone: '',
      description: 'Fully functioning app that lets you organize, create and check off completed tasks. Website uses browsers local storage.',
      stack: 'Vanilla JS, HTML, CSS, Webpack',
      github: 'https://github.com/heresywolves/todo-list',
      live: 'https://heresywolves.github.io/todo-list/'
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
      if (projectsObj[key].phone !== ''){
        phoneImg.src = projectsObj[key].phone;
        phoneImg.classList.add('phone-image');
      }

      const stack = document.createElement('p');
      stack.classList.add('project-stack');
      stack.textContent = projectsObj[key].stack;

      const title = document.createElement('a');
      title.classList.add('project-title');
      title.href = projectsObj[key].live;
      title.textContent = projectsObj[key].name;
      title.target = '_blank';

      const description = document.createElement('p');
      description.classList.add('project-description');
      description.textContent = projectsObj[key].description;

      const gitButton = document.createElement('a');
      gitButton.classList.add('project-github-link');
      gitButton.href = projectsObj[key].github;
      gitButton.target = '_blank';
      const gitIcon = document.createElement('img');
      gitIcon.classList.add('project-github-icon');
      gitIcon.src = gitImg;
      gitIcon.style.width = '15px';
      gitButton.textContent = 'Github Source';

      wrapper.appendChild(pcImg);
      if (projectsObj[key].phone !== ''){
        wrapper.appendChild(phoneImg);
      }
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