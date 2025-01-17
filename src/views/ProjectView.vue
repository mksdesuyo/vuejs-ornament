<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import doistPreviewImage from '@/assets/doist-preview.png';
import closeWeatherMapPreviewImage from '@/assets/close-weather-map-preview.png';
import aiticampPreviewImage from '@/assets/aiticamp-preview.png';
import mksOrnamentV1PreviewImage from '@/assets/mks-ornament-v1_0_0-preview.png';
import mksSocialsPreviewImage from '@/assets/mks-socials-preview.png';
import mksOrnamentV2previewImage from '@/assets/mks-ornament-v2_0_0-preview.png';

import { ref } from 'vue';

const isModalOpen = ref(false);
const currentImage = ref(null);

const openModal = (image) => {
  currentImage.value = image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  currentImage.value = null;
};

const projects = [
  {
    image: mksOrnamentV2previewImage,
    title: 'MKS Ornament v2.0.0: Portfolio Website',
    project_type: 'Personal Project',
    description:
      'A sleek and modern digital store concept designed to showcase and sell creative assets. Featuring a responsive user interface, intuitive navigation, and a vibrant design, the website highlights digital ornaments with engaging visuals. Built using cutting-edge web technologies, it demonstrates an eye for aesthetics and functionality in e-commerce platforms.',
    techStack: ['VueJs', 'Tailwind CSS', 'JavaScript', 'Vite', 'HTML', 'CSS'],
    demo: 'You are on the page right now',
    icon: ['far', 'face-grin-wink'],
  },
  {
    image: mksSocialsPreviewImage,
    title: 'MKS Socials: Linktree Like Website',
    project_type: 'Personal Project',
    link: 'https://mks-socials.vercel.app/',
    description:
      'A minimalist and user-friendly personal link hub inspired by platforms like Linktree. The website centralizes key social media and professional links in one accessible location. Crafted with Svelte and Tailwind CSS, it emphasizes responsive design and interactive elements to deliver a seamless user experience.',
    techStack: ['Svelte', 'Tailwind CSS', 'JavaScript', 'Vite', 'HTML', 'CSS'],
  },
  {
    image: doistPreviewImage,
    title: 'DOIST: Simple To-Do List Web Application',
    project_type: 'Personal Project',
    link: 'https://mks-todolist.netlify.app/',
    description:
      "A simple yet functional to-do list web application, developed independently using insights and guidance from Dicoding Academy's class modules.",
    techStack: ['CSS', 'JavaScript', 'SCSS', 'HTML'],
  },
  {
    image: mksOrnamentV1PreviewImage,
    title: 'MKS Ornament v1.0.0: Portfolio Website',
    project_type: 'Personal Project',
    link: 'https://mksdesuyo.github.io/',
    description:
      'An interactive portfolio website showcasing personal projects, technical skills, and professional experiences. With a clean and professional layout, it highlights a passion for web development and design. Fully responsive and hosted on GitHub Pages, this site serves as a dynamic resume and an entry point for networking opportunities.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    image: closeWeatherMapPreviewImage,
    title: 'Close Weather Map',
    project_type: 'Team Project',
    link: 'https://close-weather-map.netlify.app/',
    description:
      'A straightforward web page for checking weather conditions and exploring maps, collaboratively built with a teammate during the SIB Hacktiv8 x Kampus Merdeka program.',
    techStack: ['HTML', 'Bootstrap', 'JavaScript', 'CSS', 'Leaflet'],
  },
  {
    image: aiticampPreviewImage,
    title: 'Aiticamp: Simple Landing Web Page',
    project_type: 'Team Project',
    link: 'https://aiticamp.netlify.app/',
    description:
      'A clean and minimalistic landing page created as part of a collaborative project with a teammate during the SIB Hacktiv8 x Kampus Merdeka program.',
    techStack: ['HTML', 'Bootstrap', 'CSS', 'JavaScript'],
  },
];
</script>

<template>
  <main
    class="grid gap-2 px-8 pt-2 pb-16 leading-5 h-dvh place-content-center xs:pt-4 md:pt-8 md:px-16 lg:px-48"
  >
    <div>
      <h1 class="pt-12 mb-2 text-3xl sm:text-4xl md:text-5xl">My Projects</h1>
      <hr class="mb-2 border-2 rounded-md w-52 border-gunmetal md:w-96" />
    </div>
    <div class="pr-2 overflow-y-auto sm:my-4">
      <ProjectCard
        v-for="project in projects"
        :key="project"
        :image="project.image"
        :title="project.title"
        :project_type="project.project_type"
        :link="project.link"
        :description="project.description"
        :techStack="project.techStack"
        :demo="project.demo"
        :icon="project.icon"
        @image-clicked="openModal"
      />
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="closeModal"
    >
      <div class="relative p-4 bg-white rounded-lg shadow-lg">
        <button
          class="absolute grid p-2 text-black bg-gray-300 rounded-sm top-6 right-6 hover:text-red-500"
          @click="closeModal"
        >
          <font-awesome-icon :icon="['fas', 'x']" />
        </button>
        <img :src="currentImage" alt="Full Preview" class="max-w-full max-h-screen" />
      </div>
    </div>
  </main>
</template>
