<script setup>
import RLButton from '../components/RouterLinkBtn.vue';
defineProps(['theme-mode']);
</script>

<template>
  <main class="grid gap-1 px-8 leading-5 h-dvh place-content-center md:px-16 lg:px-48">
    <span class="text-xs opacity-75 xs:text-sm sm:text-lg md:text-xl">Greetings, I'm known as</span>
    <h1 class="text-3xl font-bold leading-8 tracking-wider xs:text-4xl sm:text-6xl md:text-7xl">
      Rizqi MKS
    </h1>
    <h2 class="relative font-bold uppercase tracking-wide text-base xs:text-lg sm:text-2xl md:text-3xl glitch-light" data-text="Junior Web Developer | Mentor | Cloud Enthusiast">
      Junior Web Developer | Mentor | Cloud Enthusiast
    </h2>
    <p class="mt-1 text-sm xs:text-base sm:text-lg md:text-xl">
      A tech-savvy and adaptable web developer based in Garut, Indonesia. Skilled in Front-End (Vue.js, Tailwind) and Back-End (Laravel, Node.js), with experience mentoring 100+ national participants through Kampus Merdeka and Google Cloud programs.
    </p>
    <div
      class="flex flex-wrap items-center pb-2 mt-2 text-xs font-bold gap-x-2 gap-y-2 xs:text-sm sm:text-base"
    >
      <RLButton
        v-for="link in links"
        :key="link.text"
        :text="link.text"
        :to="link.path"
        :class="{
          'text-light-beyond-color1 border-light-beyond-color1 hover:bg-light-beyond-color1 hover:text-light-beyond-color2  ':
            themeMode === 'light',
          'text-warm-beyond-color1 border-warm-beyond-color1 hover:bg-warm-beyond-color1 hover:text-warm-beyond-color2':
            themeMode === 'warm',
          'text-dark-beyond-color1 border-dark-beyond-color1 hover:bg-dark-beyond-color1 hover:text-dark-beyond-color2':
            themeMode === 'dark',
        }"
      />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Know more about me >', path: '/about' },
        { text: 'See my projects >>', path: '/project' },
      ],
    };
  },
};
</script>
