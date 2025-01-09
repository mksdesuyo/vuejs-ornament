<template>
  <main class="grid gap-1 px-8 leading-5 h-dvh place-content-center">
    <span class="text-xs opacity-75">Greetings, I'm known as</span>
    <h1 class="text-3xl font-bold leading-8 tracking-wider">Rizqi MKS</h1>
    <h2 class="text-base font-bold opacity-75">An enthusiastic fresher in web development</h2>
    <p class="mt-1 text-sm">
      I'm a Junior Web Developer based in Garut, Indonesia. Currently focusing on Front-End using
      <span class="bg-green-100 px-1 text-[#41B883] rounded-md">VueJs</span> and Back-End using
      <span class="px-1 text-[#F05340] bg-red-100 rounded-md">Laravel</span>.
    </p>
    <div class="flex flex-wrap mt-2 pb-2 text-xs font-bold gap-x-2 gap-y-3 items-center">
      <router-link
        :to="link.path"
        class="p-2 px-4 text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md hover:bg-gray-700 hover:text-gray-50"
        data-discover="true"
        aria-current="page"
        v-for="link in links"
        :key="link.text"
        >{{ link.text }}</router-link
      >
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    let links = [
      { text: 'Know more about me >', path: '/about' },
      { text: 'See my experiences >>', path: '/experience' },
      { text: 'Examine my projects >>>', path: '/project' },
    ];

    return { links };
  },
};
</script>
