<template>
  <ul
    class="absolute flex flex-col w-1/2 gap-2 py-2 text-sm text-right text-current transition-all duration-500 ease-in-out max-lg:mt-2 max-lg:border-2 max-lg:rounded-md max-lg:shadow-md max-lg:px-4 lg:flex-row lg:static top-10 border-gray-50 xs:text-base sm:text-lg md:text-xl lg:w-full lg:border-none lg:shadow-none xs:top-12 sm:top-14 lg:gap-6"
    :class="{
      'max-lg:bg-light-beyond-color2': themeMode === 'light',
      'max-lg:bg-warm-beyond-color2': themeMode === 'warm',
      'max-lg:bg-dark-beyond-color2': themeMode === 'dark',
    }"
  >
    <li v-for="route in routes" :key="route.name">
      <router-link
        :to="route.path"
        class="duration-150 ease-in-out hover:underline"
        data-discover="true"
        aria-current="page"
        >{{ route.name }}</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    themeMode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      routes: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/project' },
      ],
    };
  },
};
</script>

<style scoped>
.router-link-active {
  color: rgb(233, 175, 28);
}
</style>
