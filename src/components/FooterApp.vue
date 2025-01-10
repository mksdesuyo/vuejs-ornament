<template>
  <footer class="fixed bottom-0 left-0 right-0 z-50 px-8 pb-6 bg-white">
    <div class="flex items-center justify-between">
      <p class="text-xs">
        Made with
        <font-awesome-icon
          :icon="['fas', 'heart']"
          class="duration-150 ease-in-out opacity-75 hover:opacity-100 hover:text-red-500"
        />
        by MKS
      </p>
      <ul class="flex gap-3 text-xs">
        <li v-for="social in socials" :key="social.icon">
          <a :href="social.link" target="_blank" rel="noreferrer noopener"
            ><font-awesome-icon
              :icon="['fab', social.name]"
              class="duration-150 ease-in-out opacity-75 hover:opacity-100 hover:text-[#1778F2]"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { name: 'facebook', link: '/about' },
        { name: 'github', link: '/about' },
        { name: 'instagram', link: '/about' },
        { name: 'linkedin', link: '/about' },
      ],
    };
  },
};
</script>
