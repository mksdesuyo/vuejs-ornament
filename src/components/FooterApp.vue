<template>
  <footer class="fixed bottom-0 left-0 right-0 z-40 px-8 pb-6 md:px-16 lg:px-48">
    <div class="flex items-center justify-between text-xs xs:text-sm sm:text-base">
      <p class="flex items-center gap-2">
        Made with
        <font-awesome-icon
          :icon="['fas', 'heart']"
          class="duration-150 ease-in-out opacity-85 hover:opacity-100 hover:text-red-500"
        />
        by MKS - {{ year }}
      </p>
      <ul class="flex gap-3 sm:gap-5">
        <li v-for="social in socials" :key="social.icon">
          <a :href="social.link" target="_blank" rel="noreferrer noopener"
            ><font-awesome-icon
              :icon="['fab', social.name]"
              class="duration-150 ease-in-out opacity-85 hover:opacity-100"
              :class="social.color"
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
      year: new Date().getFullYear(),
      socials: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/rizqi.mks.22/',
          color: 'hover:text-blue-600',
        },
        { name: 'github', link: 'https://github.com/mksdesuyo/', color: 'hover:text-gray-900' },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/houtarou_rizuki/',
          color: 'hover:text-pink-500',
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/rizqimks/',
          color: 'hover:text-blue-700',
        },
      ],
    };
  },
};
</script>
