<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
  <main class="grid gap-2 px-8 py-16 pt-2 leading-5 h-dvh xs:pt-4">
    <h1 class="pt-12 text-3xl xs:text-4xl">My projects</h1>
    <hr class="w-4/5 mb-2 border-2 border-black rounded-md" />
    <div class="pr-2 overflow-y-auto">
      <ProjectCard
        v-for="project in projects"
        :key="project"
        :title="project.title"
        :project_type="project.project_type"
        :link="project.link"
        :description="project.description"
        :techStack="project.techStack"
      />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'DOIST: Simple To-Do List Web Application',
          project_type: 'Personal Project',
          link: 'https://mks-todolist.netlify.app/',
          description:
            "A simple yet functional to-do list web application, developed independently using insights and guidance from Dicoding Academy's class modules.",
          techStack: ['HTML', 'CSS', 'JavaScript', 'Sass'],
        },
        {
          title: 'Close Weather Map',
          project_type: 'Team Project',
          link: 'https://close-weather-map.netlify.app/',
          description:
            'A straightforward web page for checking weather conditions and exploring maps, collaboratively built with a teammate during the SIB Hacktiv8 x Kampus Merdeka program.',
          techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Leaflet'],
        },
        {
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
</script>
