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
      name: 'Admin Dashboard',
      pc: dashboardPC,
      phone: dashboardPhone,
      description: 'This dashboard serves as a responsive layout example that utilizes the strengths of grid and flexbox layouts.',
      stack: 'Vanilla JS, HTML, CSS',
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

    for (const key in projectsObj) {

    }
  }

  return {load}
})();