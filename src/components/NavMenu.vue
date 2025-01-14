<template>
  <ul
    class="absolute flex flex-col w-2/5 gap-2 px-4 py-2 mt-2 text-sm text-right transition-all duration-500 ease-in-out border-2 rounded-md shadow-md top-12 border-gray-50 xs:text-base sm:text-lg sm:w-1/4 bg-crossword text-gunmetal"
  >
    <li v-for="route in routes" :key="route.name">
      <router-link
        :to="route.path"
        class="duration-150 ease-in-out hover:mr-2"
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
        { name: 'Home .01', path: '/' },
        { name: 'About .02', path: '/about' },
        { name: 'Projects .03', path: '/project' },
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
