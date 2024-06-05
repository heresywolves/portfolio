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
  let projectsObj = {
    dashboard: {
      name: 'Панель администратора',
      pc: dashboardPC,
      phone: dashboardPhone,
      description: 'Страница панели администратора в современном стиле, которая демонстрирует всю прелесть адаптивной grid и flex верстки.',
      stack: 'JS, HTML, CSS',
      github: 'https://github.com/howlbones/admin-dashboard',
      live: 'https://howlbones.github.io/admin-dashboard/'
    },
    todo: {
      name: 'ToDo App',
      pc: todoPC,
      phone: '',
      description: 'Fully functioning app that lets you organize, create and check off completed tasks. Website uses browsers local storage.',
      stack: 'Vanilla JS, HTML, CSS, Webpack',
      github: 'https://github.com/howlbones/todo-list',
      live: 'https://howlbones.github.io/todo-list/'
    },
    weather: {
      name: 'Weather App',
      pc: weatherPC,
      phone: '',
      description: "This app works with external API's for fresh weather data, easy on-demand search suggestions and pictures based on the weather.",
      stack: 'Vanilla JS, HTML, CSS, Webpack',
      github: 'https://github.com/howlbones/weather-app',
      live: 'https://howlbones.github.io/weather-app/'
    },
    form: {
      name: 'Online Form',
      pc: formPC,
      phone: formPhone,
      description: "Responsive fill-out form that utilises JavaScript for client-side validation.",
      stack: 'Vanilla JS, HTML, CSS',
      github: 'https://github.com/howlbones/online-form',
      live: 'https://howlbones.github.io/online-form/'
    },
    restaurant: {
      name: 'Restaurant Menu',
      pc: restaurantPC,
      phone: '',
      description: "A simple, clean restaurant homepage design that generates page content dynamically throughout tabs.",
      stack: 'Vanilla JS, HTML, CSS, Webpack',
      github: 'https://github.com/howlbones/restaurant-menu',
      live: 'https://howlbones.github.io/restaurant-menu/'
    },
    library: {
      name: 'Library App',
      pc: libraryPC,
      phone: '',
      description: "Personal online library application that can keep track of saved books by different markings and display statistics.",
      stack: 'Vanilla JS, HTML, CSS, Webpack',
      github: 'https://github.com/howlbones/library-app',
      live: 'https://howlbones.github.io/library-app/'
    }
  }

  function load() {
    const container = document.querySelector('.projects-container');
    for (const key in projectsObj) {

      const itemContainer = document.createElement('div');
      itemContainer.classList.add('project-container');

      const txtContainer = document.createElement('div');
      txtContainer.classList.add('text-container');

      const imgContainer = document.createElement('a');
      imgContainer.classList.add('img-container');
      imgContainer.href = projectsObj[key].live;
      imgContainer.setAttribute("target", "_blank");

      const nameEl = document.createElement('p');
      nameEl.classList.add('project-name');
      nameEl.textContent = projectsObj[key].name;
      txtContainer.appendChild(nameEl);

      const description = document.createElement('p');
      description.classList.add('project-description');
      description.textContent = projectsObj[key].description;
      txtContainer.appendChild(description);
      
      const stack = document.createElement('p');
      stack.classList.add('project-stack');
      stack.textContent = projectsObj[key].stack;
      txtContainer.appendChild(stack);

      const pcImg = document.createElement('img');
      pcImg.classList.add('project-pc-img');
      pcImg.src = projectsObj[key].pc;
      pcImg.href = projectsObj[key].live;
      imgContainer.appendChild(pcImg);

      if (projectsObj[key].phone != '') {
        const phoneImg = document.createElement('img');
        phoneImg.classList.add('project-phone-img');
        phoneImg.src = projectsObj[key].phone;
        imgContainer.appendChild(phoneImg);
      }

      const gitLink = document.createElement('a');
      gitLink.classList.add('project-git-link');
      gitLink.href = projectsObj[key].github;
      gitLink.textContent = "Github";
      gitLink.setAttribute("target", "_blank");
      txtContainer.appendChild(gitLink);

      const liveLink = document.createElement('a');
      liveLink.classList.add('project-live-link');
      liveLink.href = projectsObj[key].live;
      liveLink.textContent = "Публикация";
      liveLink.setAttribute("target", "_blank");
      txtContainer.appendChild(liveLink);

      itemContainer.appendChild(imgContainer);
      itemContainer.appendChild(txtContainer);
      container.appendChild(itemContainer);
    }
  }

  return {load}
})();