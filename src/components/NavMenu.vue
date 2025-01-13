<template>
  <ul
    v-if="isOpen"
    class="absolute flex flex-col gap-2 px-4 py-2 mt-2 text-sm text-right transition-all duration-1000 ease-in-out border-2 rounded-md shadow-md right-8 w-fit border-gray-50 xs:text-base"
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
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      routes: [
        { name: 'About .01', path: '/about' },
        { name: 'Experiences .02', path: '/experience' },
        { name: 'Projects .03', path: '/project' },
      ],
    };
  },
};
</script>
