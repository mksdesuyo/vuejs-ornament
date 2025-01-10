<script setup>
import doistPreviewImage from '@/assets/doist-preview.png';
</script>

<template>
  <div class="flex flex-col gap-4 mb-2">
    <header class="flex flex-col gap-1 font-bold">
      <img :src="doistPreviewImage" alt="DOIST project preview image" class="rounded-md w-52" />
      <a href="https://mks-todolist.netlify.app/" target="_blank" rel="noreferrer noopener">
        <h2 class="text-base">DOIST: Simple To-Do List Web Application</h2>
      </a>
      <p class="text-sm opacity-75">Personal Project</p>
    </header>
    <p class="text-sm">
      A simple yet functional to-do list web application, developed independently using insights and
      guidance from Dicoding Academy's class modules.
    </p>
    <footer class="flex flex-col gap-2">
      <ul class="flex flex-wrap gap-2 text-sm">
        <li class="px-1 text-orange-700 bg-orange-100 rounded-md">HTML</li>
        <li class="px-1 text-blue-700 bg-blue-100 rounded-md">CSS</li>
        <li class="px-1 text-yellow-700 bg-yellow-100 rounded-md">JavaScript</li>
        <li class="px-1 text-pink-700 bg-pink-100 rounded-md">Sass</li>
      </ul>
      <a
        href="https://mks-todolist.netlify.app/"
        target="_blank"
        rel="noreferrer noopener"
        class="px-4 py-2 text-xs font-bold text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md w-fit hover:bg-gray-700 hover:text-gray-50"
        >View Demo <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']"
      /></a>
    </footer>
    <hr class="border-gray-500" />
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    project_type: {
      type: String,
      default: 'Personal Project',
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
