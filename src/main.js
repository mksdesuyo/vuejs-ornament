import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme);

app.config.globalProperties.$setTheme = (theme) => {
  document.body.classList.remove('light', 'warm', 'dark');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
};

app.use(router);

app.mount('#app');
