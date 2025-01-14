<template>
  <div class="flex flex-col gap-4 mb-4">
    <header class="flex flex-col gap-2 font-bold">
      <img
        :src="image"
        :alt="`${title} preview image`"
        class="w-10/12 border-2 border-gray-200 rounded-md xs:w-8/12 sm:w-7/12 lg:w-5/12"
        @click="$emit('image-clicked', image)"
      />
      <div>
        <a :href="link" target="_blank" rel="noreferrer noopener">
          <h2 class="text-base xs:text-lg sm:text-2xl">{{ title }}</h2>
        </a>
        <p class="text-sm opacity-75 xs:text-base sm:text-xl">{{ project_type }}</p>
      </div>
    </header>
    <p class="text-sm xs:text-base sm:text-xl">
      {{ description }}
    </p>
    <footer class="flex flex-col gap-4">
      <ul class="flex flex-wrap items-center gap-2 text-sm xs:text-base sm:text-xl">
        <li
          v-for="tech in techStack"
          :key="tech"
          class="px-1 rounded-md"
          :class="getBadgeClass(tech)"
        >
          {{ tech }}
        </li>
      </ul>
      <a
        :href="link"
        target="_blank"
        rel="noreferrer noopener"
        class="px-4 py-2 text-xs font-bold text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md xs:text-sm w-fit hover:bg-gray-700 hover:text-gray-50 sm:text-lg"
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
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    project_type: {
      type: String,
      default: 'Personal Project',
    },
    link: {
      type: String,
      default: '#',
    },
    description: {
      type: Object,
      required: true,
    },
    techStack: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getBadgeClass(tech) {
      const techClasses = {
        HTML: ['bg-orange-100', 'text-orange-700'],
        CSS: ['bg-blue-100', 'text-blue-700'],
        JavaScript: ['bg-yellow-100', 'text-yellow-700'],
        Sass: ['bg-pink-100', 'text-pink-700'],
        Bootstrap: ['bg-purple-100', 'text-purple-700'],
        Leaflet: ['bg-lime-100', 'text-lime-700'],
      };
      return techClasses[tech] || ['bg-gray-500', 'text-white'];
    },
  },
};
</script>
