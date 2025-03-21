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
        Greetings! I'm Rizqi Muhammad Khatami Sandi, a
        <span class="font-bold">Junior Web Developer</span> certified by BNSP and based in Garut,
        Indonesia.<br />
        With a proper foundation in web development, I specialize in creating
        <span class="font-bold">Front-End</span> solutions using
        <span class="font-bold">VueJs</span> and developing
        <span class="font-bold">Back-End</span> systems with <span class="font-bold">Laravel</span>.
        <br />
        <br />
        Beyond coding, I have deep passion for learning new languages and cultures. I can
        communicate in <span class="font-bold">English</span> and
        <span class="font-bold">Japanese</span> at professional and conversational levels, along
        with some understanding of <span class="font-bold">Arabic</span>. <br />
        My enthusiasm for personal growth extends to physical activities as well—I enjoy
        <span class="font-bold">weightlifting and calisthenics</span>,
        <span class="font-bold">cycling</span>, and <span class="font-bold">swimming</span>, which
        help me stay positive.
        <br />
        <br />
        In addition, I've earned notable certifications including
        <span class="font-bold">Google IT Support (Coursera)</span> and
        <span class="font-bold"
          >AWS Academy Graduate in AWS Cloud Foundations and Cloud Architecting</span
        >, showcasing my versatility to continous learning.
        <br />
        <br />
        I'm eager to collaborate and bring innovative ideas to life in the ever-evolving tech
        industry.
      </p>
      <div class="flex flex-wrap gap-2 mt-4 text-xs font-bold xs:text-sm sm:text-base">
        <a
          href="https://drive.google.com/file/d/1sK72JqqrcNktKKtfVp3Lg2xclFH34GI3/view?usp=drive_link"
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
          >Personal CV <font-awesome-icon :icon="['fas', 'download']"
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
