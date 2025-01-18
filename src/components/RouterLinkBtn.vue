<template>
  <router-link
    :to="to"
    class="p-2 px-4 transition-all duration-200 ease-in-out border-2 rounded-lg shadow-md"
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
