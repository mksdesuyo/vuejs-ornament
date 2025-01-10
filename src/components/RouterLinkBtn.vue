<template>
  <router-link
    :to="to"
    class="p-2 px-4 text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md hover:bg-gray-700 hover:text-gray-50"
    data-discover="true"
    aria-current="page"
    >{{ text }}</router-link
  >
</template>

<script>
export default {
  name: 'RLButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
