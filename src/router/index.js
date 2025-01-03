import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home Page',
        description: 'Rizqi MKS portfolio website - Home Page',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About Page',
        description: 'Rizqi MKS portfolio website - About Page',
      },
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
      meta: {
        title: 'About Page',
        description: 'Rizqi MKS portfolio website - Project Page',
      },
    },
  ],
});

router.beforeEach((to) => {
  const { title, description } = to.meta;
  const defaultTitle = 'Rizqi MKS';
  const defaultDescription = 'Rizqi MKS portfolio website';

  document.title = title || defaultTitle;

  const descriptionElement = document.querySelector('head meta[name="description"]');

  descriptionElement.setAttribute('content', description || defaultDescription);
});

export default router;
