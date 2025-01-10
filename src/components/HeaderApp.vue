<!-- <script setup lang="ts">
import NavMenu from './NavMenu.vue';
</script> -->

<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-8 pt-5 bg-white">
    <nav class="flex items-center justify-between">
      <router-link to="/" class="text-base font-medium" data-discover="true" aria-current="page"
        >MKS.proc</router-link
      >
      <div class="flex items-center gap-2">
        <div>
          <select id="theme-selector" class="text-xs border-r-4 border-rose-500">
            <option value="light">Light</option>
            <option value="warm">Warm</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button>
          <svg
            class="w-4 h-4 xs:w-5 xs:h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
    </nav>
    <!-- <NavMenu /> -->
  </header>
</template>
