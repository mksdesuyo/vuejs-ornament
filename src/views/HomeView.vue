<script setup>
import RLButton from '../components/RouterLinkBtn.vue';
</script>

<template>
  <main class="grid gap-1 px-8 leading-5 h-dvh place-content-center">
    <span class="text-xs opacity-75 xs:text-sm">Greetings, I'm known as</span>
    <h1 class="text-3xl font-bold leading-8 tracking-wider xs:text-4xl">Rizqi MKS</h1>
    <h2 class="text-base font-bold opacity-75 xs:text-lg">
      An enthusiastic fresher in web development
    </h2>
    <p class="mt-1 text-sm xs:text-base">
      I'm a Junior Web Developer based in Garut, Indonesia. Currently focusing on Front-End using
      <span class="px-1 text-green-700 bg-green-100 rounded-md">VueJs</span> and Back-End using
      <span class="px-1 text-red-700 bg-red-100 rounded-md">Laravel</span>.
    </p>
    <div class="flex flex-wrap items-center pb-2 mt-2 text-xs font-bold gap-x-2 gap-y-2 xs:text-sm">
      <RLButton v-for="link in links" :key="link.text" :text="link.text" :to="link.path" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Know more about me >', path: '/about' },
        { text: 'See my experiences >>', path: '/experience' },
        { text: 'Examine my projects >>>', path: '/project' },
      ],
    };
  },
};
</script>
