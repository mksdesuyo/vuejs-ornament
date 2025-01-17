<template>
  <main
    class="grid gap-2 px-8 pt-2 pb-16 leading-5 h-dvh place-content-center xs:pt-4 md:pt-8 md:pb-20 md:px-16 lg:px-48"
  >
    <div>
      <h1 class="pt-12 mb-2 text-3xl sm:text-4xl md:text-5xl">Who I am</h1>
      <hr class="mb-2 border-2 rounded-md w-44 border-gunmetal md:w-72" />
    </div>
    <div class="pr-2 overflow-y-auto">
      <p class="text-sm xs:text-base sm:text-lg md:text-xl">
        Greetings! I'm Rizqi Muhammad Khatami Sandi, a
        <span class="font-bold">Junior Web Developer</span> certified by BNSP and based in Garut,
        Indonesia.<br />
        With a proper foundation in web development, I specialize in creating
        <span class="font-bold">Front-End</span> solutions using
        <span class="font-bold">VueJs</span> and developing
        <span class="font-bold">Back-End</span> systems with <span class="font-bold">Laravel</span>.
        <br />
        <br />
        Beyond coding, I have deep passion for learning new languages and cultures. I can
        communicate in <span class="font-bold">English</span> and
        <span class="font-bold">Japanese</span> at professional and conversational levels, along
        with some understanding of <span class="font-bold">Arabic</span>. <br />
        My enthusiasm for personal growth extends to physical activities as well—I enjoy
        <span class="font-bold">weightlifting and calisthenics</span>,
        <span class="font-bold">cycling</span>, and <span class="font-bold">swimming</span>, which
        help me stay positive.
        <br />
        <br />
        In addition, I've earned notable certifications including
        <span class="font-bold">Google IT Support (Coursera)</span> and
        <span class="font-bold"
          >AWS Academy Graduate in AWS Cloud Foundations and Cloud Architecting</span
        >, showcasing my versatility to continous learning.
        <br />
        <br />
        I'm eager to collaborate and bring innovative ideas to life in the ever-evolving tech
        industry.
      </p>
      <div class="flex flex-wrap gap-2 mt-4 text-xs font-bold xs:text-sm sm:text-base">
        <a
          href="https://drive.google.com/file/d/1sK72JqqrcNktKKtfVp3Lg2xclFH34GI3/view?usp=drive_link"
          target="_blank"
          class="p-2 px-4 text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md hover:bg-gray-700 hover:text-gray-50"
          >Personal CV <font-awesome-icon :icon="['fas', 'download']"
        /></a>
        <router-link
          to="/project"
          class="p-2 px-4 text-gray-700 transition-all duration-200 ease-in-out border-2 border-gray-700 rounded-lg shadow-md hover:bg-gray-700 hover:text-gray-50"
          data-discover="true"
          aria-current="page"
          >See my projects ></router-link
        >
      </div>
    </div>
  </main>
</template>
