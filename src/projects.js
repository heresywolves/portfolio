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
      description: 'Статичная страница панели администратора в современном стиле, которая демонстрирует всю прелесть адаптивной grid и flex верстки.',
      stack: 'JS, HTML, CSS',
      github: 'https://github.com/howlbones/admin-dashboard',
      live: 'https://howlbones.github.io/admin-dashboard/'
    },
    todo: {
      name: 'Таск-менеджер',
      pc: todoPC,
      phone: '',
      description: 'Полноценный трекер для организации задач. Задачи можно создавать, редактировать, присваивать к категориям и отмечать как выполненные. Приложение использует localStorage браузера в качестве хранилища.',
      stack: 'JS, HTML, CSS, Webpack',
      github: 'https://github.com/howlbones/todo-list',
      live: 'https://howlbones.github.io/todo-list/'
    },
    weather: {
      name: 'Прогноз погоды',
      pc: weatherPC,
      phone: '',
      description: "Это приложение работает с внешними API для отображения актуальной и подробной информации о текущей и будущей погоде любого города мира. Картинки подтягиваются из внешних источников на основе текущей погоды.",
      stack: 'JS, HTML, CSS, Webpack',
      github: 'https://github.com/howlbones/weather-app',
      live: 'https://howlbones.github.io/weather-app/'
    },
    form: {
      name: 'Современная форма',
      pc: formPC,
      phone: formPhone,
      description: "Адаптивная форма с динамической валидацией полей.",
      stack: 'JS, HTML, CSS',
      github: 'https://github.com/howlbones/online-form',
      live: 'https://howlbones.github.io/online-form/'
    },
    restaurant: {
      name: 'Меню ресторана',
      pc: restaurantPC,
      phone: '',
      description: "Сайт демонстрирует динамическую генерацию содержимого страницы при переключении вкладок.",
      stack: 'JS, HTML, CSS, Webpack',
      github: 'https://github.com/howlbones/restaurant-menu',
      live: 'https://howlbones.github.io/restaurant-menu/'
    },
    library: {
      name: 'Личная онлайн библиотека',
      pc: libraryPC,
      phone: '',
      description: "Персональный треккер прочитанных и непрочитанных книг со статистикой, категориями и сортировкой.",
      stack: 'JS, HTML, CSS, Webpack',
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

      const nameEl = document.createElement('a');
      nameEl.classList.add('project-name');
      nameEl.href = projectsObj[key].live;
      nameEl.setAttribute("target", "_blank");
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