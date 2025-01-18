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
      <slot name="linkButton"></slot>
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
      default: null,
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
        HTML: ['bg-[#e34c26]', 'text-lotion'],
        CSS: ['bg-[#3C99DC]', 'text-lotion'],
        JavaScript: ['bg-[#F0DB4F]', 'text-gunmetal'],
        SASS: ['bg-[#CD6799]', 'text-lotion'],
        SCSS: ['bg-[#CD6799]', 'text-lotion'],
        Bootstrap: ['bg-[#6f2cf5]', 'text-lotion'],
        Leaflet: ['bg-[#b1de5d]', 'text-gunmetal'],
        VueJs: ['bg-[#41B883]', 'text-lotion'],
        Svelte: ['bg-[#ff3d00]', 'text-lotion'],
        Vite: ['bg-[#9675ce]', 'text-[#fac02e]'],
        'Tailwind CSS': ['bg-[#38bdf8]', 'text-lotion'],
      };
      return techClasses[tech] || ['bg-gray-500', 'text-lotion'];
    },
  },
};
</script>
