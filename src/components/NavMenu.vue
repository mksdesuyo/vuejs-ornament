<template>
  <ul
    class="flex flex-col justify-self-end text-right p-2 bg-gray-100 border-2 rounded-md border-gray-50"
  >
    <li v-for="route in routes" :key="route.name">
      <router-link
        :to="route.path"
        class="duration-150 ease-in-out hover:ml-2"
        data-discover="true"
        aria-current="page"
        >{{ route.name }}</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  setup() {
    let routes = [
      { name: 'About', path: '/about' },
      { name: 'Experiences', path: '/experience' },
      { name: 'Projects', path: '/project' },
    ];

    return { routes };
  },
};
</script>
