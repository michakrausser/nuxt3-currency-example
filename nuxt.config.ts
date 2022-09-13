import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    "@/assets/styles/main.sass",
    "vuetify/lib/styles/main.sass"
  ],
  vite: {
    /*css: {
      preprocessorOptions: {
        sass: {
          additionalData
        }
      }
    }*/
    define: {
      "process.env.DEBUG": false
    }
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'github-light'
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    },
    transpile: [ "vuetify" ]
  }
});
