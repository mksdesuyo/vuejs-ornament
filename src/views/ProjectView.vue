<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import doistPreviewImage from '@/assets/doist-preview.png';
import closeWeatherMapPreviewImage from '@/assets/close-weather-map-preview.png';
import aiticampPreviewImage from '@/assets/aiticamp-preview.png';

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
    image: doistPreviewImage,
    title: 'DOIST: Simple To-Do List Web Application',
    project_type: 'Personal Project',
    link: 'https://mks-todolist.netlify.app/',
    description:
      "A simple yet functional to-do list web application, developed independently using insights and guidance from Dicoding Academy's class modules.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'Sass'],
  },
  {
    image: closeWeatherMapPreviewImage,
    title: 'Close Weather Map',
    project_type: 'Team Project',
    link: 'https://close-weather-map.netlify.app/',
    description:
      'A straightforward web page for checking weather conditions and exploring maps, collaboratively built with a teammate during the SIB Hacktiv8 x Kampus Merdeka program.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Leaflet'],
  },
  {
    image: aiticampPreviewImage,
    title: 'Aiticamp: Simple Landing Web Page',
    project_type: 'Team Project',
    link: 'https://aiticamp.netlify.app/',
    description:
      'A clean and minimalistic landing page created as part of a collaborative project with a teammate during the SIB Hacktiv8 x Kampus Merdeka program.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
];
</script>

<template>
  <main
    class="grid gap-2 px-8 pt-2 pb-16 leading-5 h-dvh place-content-center xs:pt-4 md:pt-8 md:px-16 lg:px-48"
  >
    <div>
      <h1 class="pt-12 mb-2 text-3xl xs:text-4xl sm:text-5xl md:text-6xl">My Projects</h1>
      <hr class="w-4/5 mb-2 border-2 rounded-md border-gunmetal sm:w-4/6 lg:w-3/6" />
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
          class="absolute grid p-1 text-gray-900 bg-gray-400 top-6 right-6 hover:text-red-500"
          @click="closeModal"
        >
          <font-awesome-icon :icon="['fas', 'x']" />
        </button>
        <img :src="currentImage" alt="Full Preview" class="max-w-full max-h-screen" />
      </div>
    </div>
  </main>
</template>

<!-- <script>
export default {
  data() {
    return {
      projects: [
        {
          image: doistPreviewImage,
          title: 'DOIST: Simple To-Do List Web Application',
          project_type: 'Personal Project',
          link: 'https://mks-todolist.netlify.app/',
          description:
            "A simple yet functional to-do list web application, developed independently using insights and guidance from Dicoding Academy's class modules.",
          techStack: ['HTML', 'CSS', 'JavaScript', 'Sass'],
        },
        {
          image: closeWeatherMapPreviewImage,
          title: 'Close Weather Map',
          project_type: 'Team Project',
          link: 'https://close-weather-map.netlify.app/',
          description:
            'A straightforward web page for checking weather conditions and exploring maps, collaboratively built with a teammate during the SIB Hacktiv8 x Kampus Merdeka program.',
          techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Leaflet'],
        },
        {
          image: aiticampPreviewImage,
          title: 'Aiticamp: Simple Landing Web Page',
          project_type: 'Team Project',
          link: 'https://aiticamp.netlify.app/',
          description:
            'A clean and minimalistic landing page created as part of a collaborative project with a teammate during the SIB Hacktiv8 x Kampus Merdeka program.',
          techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        },
      ],
    };
  },
};
</script> -->
