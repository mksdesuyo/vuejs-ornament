<script setup>
// import NavMenu from './NavMenu.vue';
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-8 pt-5 bg-white">
    <nav class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-base font-medium xs:text-lg"
        data-discover="true"
        aria-current="page"
        >MKS.proc</router-link
      >
      <div class="flex items-center gap-2">
        <div>
          <select id="theme-selector" class="text-xs border-r-4 border-rose-500 xs:text-base">
            <option value="light">Light</option>
            <option value="warm">Warm</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button @click="open = !open" class="grid w-4 h-4 place-self-center">
          <font-awesome-icon :icon="open ? ['fas', 'x'] : ['fas', 'bars']" />
        </button>
      </div>
    </nav>
    <!-- <NavMenu :isOpen="menuOpen" /> -->
    <ul
      class="absolute flex flex-col w-1/4 gap-2 px-4 py-2 mt-2 text-sm text-right text-gray-700 transition-all duration-500 ease-in-out border-2 rounded-md shadow-md top-12 border-gray-50 xs:text-base"
      :class="[open ? 'right-8 opacity-100' : '-right-full opacity-0']"
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
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      routes: [
        { name: 'About .01', path: '/about' },
        { name: 'Experiences .02', path: '/experience' },
        { name: 'Projects .03', path: '/project' },
      ],
    };
  },
};
</script>
