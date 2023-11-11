import gitImg from './img/giticon.png'
import dashboardPC from './img/dashboard-pc.png'
import dashboardPhone from './img/dashboard-phone.png'
import todoPC from './img/todo-pc.png'
import weatherPC from './img/weather-pc.png'
import formPC from './img/form-pc.png'
import formPhone from './img/form-phone.png'
import libraryPC from './img/library-pc.png'
import restaurantPC from './img/restaurant-pc.png'

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
    },
    weather: {
      name: 'Weather App',
      pc: weatherPC,
      phone: '',
      description: "This app works with external API's for fresh weather data, easy on-demand search suggestions and pictures based on the weather.",
      stack: 'Vanilla JS, HTML, CSS, Webpack',
      github: 'https://github.com/heresywolves/weather-app',
      live: 'https://heresywolves.github.io/weather-app/'
    },
    form: {
      name: 'Online Form',
      pc: formPC,
      phone: formPhone,
      description: "Responsive fill-out form that utilises JavaScript for client-side validation.",
      stack: 'Vanilla JS, HTML, CSS',
      github: 'https://github.com/heresywolves/online-form',
      live: 'https://heresywolves.github.io/online-form/'
    },
    restaurant: {
      name: 'Restaurant Menu',
      pc: restaurantPC,
      phone: '',
      description: "A simple, clean restaurant homepage design that generates page content dynamically throughout tabs.",
      stack: 'Vanilla JS, HTML, CSS, Webpack',
      github: 'https://github.com/heresywolves/restaurant-menu',
      live: 'https://heresywolves.github.io/restaurant-menu/'
    },
    library: {
      name: 'Library App',
      pc: libraryPC,
      phone: '',
      description: "Personal online library application that can keep track of saved books by different markings and display statistics.",
      stack: 'Vanilla JS, HTML, CSS, Webpack',
      github: 'https://github.com/heresywolves/library-app',
      live: 'https://heresywolves.github.io/library-app/'
    }
  }

  function load() {

    for (const key in projectsObj) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('project-wrapper');

      const viewOverlay = document.createElement('div');
      viewOverlay.classList.add('view-overlay');

      const viewText = document.createElement('p');
      viewText.classList.add('view-text');
      viewText.textContent = "VIEW";

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
      wrapper.appendChild(viewOverlay);
      wrapper.appendChild(viewText);
      if (projectsObj[key].phone !== ''){
        wrapper.appendChild(phoneImg);
      }

      wrapper.appendChild(title);
      wrapper.appendChild(stack);
      wrapper.appendChild(description);
      wrapper.appendChild(gitButton);
      wrapper.appendChild(gitIcon);
      container.appendChild(wrapper);

      pcImg.addEventListener('click', (e) => {
        console.log('clicked');
        window.open(projectsObj[key].live, "_blank");
      })

    }

    // Setting overlay on hover of an image
    let projectImages = document.querySelectorAll('.pc-image');
    projectImages.forEach((item) => { item.addEventListener('mouseover', (e) => {
        let overlay = e.target.nextElementSibling;
        overlay.classList.add('show');
        let textOverlay = overlay.nextElementSibling;
        textOverlay.classList.add('show');
      })
    })
    projectImages.forEach((item) => { item.addEventListener('mouseout', (e) => {
        let overlay = e.target.nextElementSibling;
        overlay.classList.remove('show');
        let textOverlay = overlay.nextElementSibling;
        textOverlay.classList.remove('show');
      })
    })

  }

  return {load}
})();