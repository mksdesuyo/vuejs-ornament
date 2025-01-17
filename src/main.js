import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// FontAwesome stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrinWink } from '@fortawesome/free-regular-svg-icons';

library.add(
  faHeart,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faArrowUpRightFromSquare,
  faBars,
  faX,
  faDownload,
  faFaceGrinWink,
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
