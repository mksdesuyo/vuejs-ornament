<template>
  <ul
    class="absolute flex flex-col p-2 text-right border-2 rounded-md right-6 justify-self-end w-fit border-gray-50 top-12"
  >
    <li v-for="route in routes" :key="route.name">
      <router-link
        :to="route.path"
        class="text-sm duration-150 ease-in-out hover:mr-2 xs:text-base"
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
        { name: 'About', path: '/about' },
        { name: 'Experiences', path: '/experience' },
        { name: 'Projects', path: '/project' },
      ],
    };
  },
};
</script>
