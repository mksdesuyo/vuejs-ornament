<template>
  <ul
    class="absolute flex flex-col w-2/6 gap-2 py-2 mt-2 text-sm text-right transition-all duration-500 ease-in-out max-lg:border-2 max-lg:rounded-md max-lg:shadow-md max-lg:px-4 max-lg:bg-crossword lg:flex-row lg:static top-10 border-gray-50 xs:text-base sm:text-lg md:text-xl lg:w-full text-gunmetal lg:border-none lg:shadow-none xs:top-11 md:top-14 lg:gap-6"
  >
    <li v-for="route in routes" :key="route.name">
      <router-link
        :to="route.path"
        class="duration-150 ease-in-out max-lg:hover:mr-2 lg:hover:underline"
        data-discover="true"
        aria-current="page"
        >{{ route.name }}</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
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
  color: darkgoldenrod;
}
</style>
