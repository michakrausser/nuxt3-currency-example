import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["@/assets/styles/main.sass"],
  /*vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/_variables.sass"',
        },
      },
    },
  },*/
  modules: [ '@nuxt/content' ],
  content: {
    highlight: {
      theme: 'github-light'
    }
  }
});
