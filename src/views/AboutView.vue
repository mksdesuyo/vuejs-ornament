<script setup>
import RLButton from '../components/RouterLinkBtn.vue';
defineProps(['themeMode']);
</script>

<template>
  <main
    class="grid gap-2 px-8 pt-2 pb-16 leading-5 h-dvh place-content-center xs:pt-4 md:pt-8 md:pb-20 md:px-16 lg:px-48"
  >
    <div>
      <h1 class="pt-12 mb-2 text-3xl sm:text-4xl md:text-5xl">Who I am</h1>
      <hr
        class="mb-2 transition-all duration-500 border-2 rounded-md w-44 md:w-72"
        :class="{
          'border-light-text': themeMode === 'light',
          'border-warm-text': themeMode === 'warm',
          'border-dark-text': themeMode === 'dark',
        }"
      />
    </div>
    <div class="pr-2 overflow-y-auto">
      <p class="text-sm xs:text-base sm:text-lg md:text-xl">
        Hi, <span class="font-bold">I’m Rizqi Muhammad Khatami Sandi</span>—you can call me
        <span class="font-bold">MKS</span>.
        <br />
        I’m a certified <span class="font-bold">Junior Web Developer (BNSP)</span> from Garut,
        Indonesia, with experience in
        <span class="font-bold">front-end (Vue.js, Tailwind CSS)</span> and
        <span class="font-bold">back-end (Laravel, Node.js)</span> development.
        <br />
        <br />
        Beyond coding, I’ve been fortunate to serve as a <span class="font-bold">mentor</span> and
        <span class="font-bold">facilitator</span> at Dicoding x Kampus Merdeka and Google Cloud
        programs, guiding hundreds of learners and helping them complete their journeys
        successfully.
        <br />
        <br />
        I’m also passionate about
        <span class="font-bold">languages, self-growth, and culture</span>. I'm a
        <span class="font-bold">basic professional in Japanese (JLPT N4)</span> and
        <span class="font-bold">fluent in English (C1)</span>. I like to keep myself active by doing
        calisthenics, reading, and blogging.
        <br />
        <br />
        Currently, I’m eager to learn, collaborate, and grow while building impactful solutions in
        the tech industry.
      </p>
      <div class="flex flex-wrap gap-2 mt-4 text-xs font-bold xs:text-sm sm:text-base">
        <a
          href="https://docs.google.com/document/d/1wD7LASIvAAxlM4rEyxPeO7c9KG3zbG3RbqYopPVT8gE/edit?usp=sharing"
          target="_blank"
          class="p-2 px-4 transition-all duration-200 ease-in-out border-2 rounded-lg shadow-md"
          :class="{
            'text-light-beyond-color1 border-light-beyond-color1 hover:bg-light-beyond-color1 hover:text-light-beyond-color2':
              themeMode === 'light',
            'text-warm-beyond-color1 border-warm-beyond-color1 hover:bg-warm-beyond-color1 hover:text-warm-beyond-color2':
              themeMode === 'warm',
            'text-dark-beyond-color1 border-dark-beyond-color1 hover:bg-dark-beyond-color1 hover:text-dark-beyond-color2':
              themeMode === 'dark',
          }"
          >Personal CV (Indonesia) <font-awesome-icon :icon="['fas', 'download']"
        /></a>
        <a
          href="https://docs.google.com/document/d/1BNTa-t_95G9NZHdmi4bAmc6vJJRLmv9JCdfRDcYgmHc/edit?usp=sharing"
          target="_blank"
          class="p-2 px-4 transition-all duration-200 ease-in-out border-2 rounded-lg shadow-md"
          :class="{
            'text-light-beyond-color1 border-light-beyond-color1 hover:bg-light-beyond-color1 hover:text-light-beyond-color2':
              themeMode === 'light',
            'text-warm-beyond-color1 border-warm-beyond-color1 hover:bg-warm-beyond-color1 hover:text-warm-beyond-color2':
              themeMode === 'warm',
            'text-dark-beyond-color1 border-dark-beyond-color1 hover:bg-dark-beyond-color1 hover:text-dark-beyond-color2':
              themeMode === 'dark',
          }"
          >Personal CV (English) <font-awesome-icon :icon="['fas', 'download']"
        /></a>
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
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      links: [{ text: 'See my projects >', path: '/project' }],
    };
  },
};
</script>
