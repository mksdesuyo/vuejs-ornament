<template>
  <footer class="fixed left-0 right-0 z-50 px-8 pt-5 bottom-6">
    <div class="flex items-center justify-between">
      <p class="text-sm">
        Made with
        <font-awesome-icon
          :icon="['fas', 'heart']"
          class="duration-150 ease-in-out opacity-75 hover:opacity-100 hover:text-red-500"
        />
        by MKS
      </p>
      <ul class="flex gap-3 text-sm">
        <li>
          <a href="https://www.facebook.com/rizqi.mks.22" target="_blank" rel="noreferrer noopener">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="duration-150 ease-in-out opacity-75 hover:opacity-100 hover:text-[#1778F2]"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/mksdesuyo" target="_blank" rel="noreferrer noopener">
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="duration-150 ease-in-out opacity-75 hover:opacity-100 hover:text-[#211f1f]"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/houtarou_rizuki/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="duration-150 ease-in-out opacity-75 hover:opacity-100 hover:text-[#f44747]"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rizqimks" target="_blank" rel="noreferrer noopener">
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="duration-150 ease-in-out opacity-75 hover:opacity-100 hover:text-[#006192]"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
