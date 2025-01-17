<template>
  <div class="flex flex-col gap-4 mb-4">
    <header class="flex flex-col gap-2 font-bold">
      <img
        :src="image"
        :alt="`${title} preview image`"
        class="border-2 border-gray-200 rounded-md w-44 xs:w-48 sm:w-96"
        @click="$emit('image-clicked', image)"
      />
      <div>
        <a :href="link" target="_blank" rel="noreferrer noopener">
          <h2 class="text-base xs:text-lg sm:text-xl md:text-2xl">{{ title }}</h2>
        </a>
        <p class="text-sm opacity-65 xs:text-base sm:text-lg md:text-xl">{{ project_type }}</p>
      </div>
    </header>
    <p class="text-sm xs:text-base sm:text-lg md:text-xl">
      {{ description }}
    </p>
    <footer class="flex flex-col gap-4">
      <ul class="flex flex-wrap items-center gap-2 text-xs xs:text-sm sm:text-base md:text-lg">
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
        class="px-4 py-2 text-xs font-bold text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md w-fit hover:bg-gray-700 hover:text-gray-50 xs:text-sm sm:text-base"
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
        VueJs: ['bg-green-100', 'text-green-700'],
        Svelte: ['bg-orange-100', 'text-orange-700'],
        Vite: ['bg-purple-700', 'text-yellow-300'],
        'Tailwind CSS': ['bg-sky-100', 'text-sky-700'],
      };
      return techClasses[tech] || ['bg-gray-500', 'text-white'];
    },
  },
};
</script>
