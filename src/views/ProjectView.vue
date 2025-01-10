<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
  <main class="grid gap-2 px-8 py-16 pt-2 leading-5 h-dvh">
    <h1 class="pt-12 text-3xl">My projects</h1>
    <hr class="w-4/5 mb-2 border-2 border-black rounded-md" />
    <div class="pr-2 overflow-y-auto">
      <ProjectCard />
      <div class="flex flex-col gap-4 mb-2">
        <header class="flex flex-col gap-1 font-bold">
          <a
            href="https://close-weather-map.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h2 class="text-xl">Close Weather Map</h2>
          </a>
          <p class="opacity-75">Team Project</p>
        </header>
        <p>
          A straightforward web page for checking weather conditions and exploring maps,
          collaboratively built with a teammate during the SIB Hacktiv8 x Kampus Merdeka program.
        </p>
        <footer class="flex flex-col gap-2">
          <ul class="flex flex-wrap gap-2">
            <li class="px-1 text-orange-700 bg-orange-100 rounded-md">HTML</li>
            <li class="px-1 text-blue-700 bg-blue-100 rounded-md">CSS</li>
            <li class="px-1 text-yellow-700 bg-yellow-100 rounded-md">JavaScript</li>
            <li class="px-1 text-purple-700 bg-purple-100 rounded-md">Bootstrap</li>
            <li class="px-1 rounded-md bg-lime-100 text-lime-700">Leaflet</li>
          </ul>
          <a
            href="https://close-weather-map.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            class="px-4 py-2 text-sm font-bold text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md w-fit hover:bg-gray-700 hover:text-gray-50"
            >View Demo <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']"
          /></a>
        </footer>
        <hr class="border-gray-500" />
      </div>
      <div class="flex flex-col gap-4 mb-2">
        <header class="flex flex-col gap-1 font-bold">
          <a href="https://aiticamp.netlify.app/" target="_blank" rel="noreferrer noopener">
            <h2 class="text-xl">Aiticamp: Simple Landing Web Page</h2>
          </a>
          <p class="opacity-75">Team Project</p>
        </header>
        <p>
          A clean and minimalistic landing page created as part of a collaborative project with a
          teammate during the SIB Hacktiv8 x Kampus Merdeka program.
        </p>
        <footer class="flex flex-col gap-2">
          <ul class="flex flex-wrap gap-2">
            <li class="px-1 text-orange-700 bg-orange-100 rounded-md">HTML</li>
            <li class="px-1 text-blue-700 bg-blue-100 rounded-md">CSS</li>
            <li class="px-1 text-yellow-700 bg-yellow-100 rounded-md">JavaScript</li>
            <li class="px-1 text-purple-700 bg-purple-100 rounded-md">Bootstrap</li>
          </ul>
          <a
            href="https://aiticamp.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            class="px-4 py-2 text-sm font-bold text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md w-fit hover:bg-gray-700 hover:text-gray-50"
            >View Demo <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']"
          /></a>
        </footer>
        <hr class="border-gray-500" />
      </div>
    </div>
  </main>
</template>
