<script setup lang="ts">
const props = defineProps({
  isBlog: {
    type: Boolean,
    default: false
  }
})

const isMobileNavOpen = ref(false)
</script>

<template>
  <nav
      class="navbar d-flex min-h-[50px] py-1 px-4"
      :class="isBlog ?
          ['bg-white'] :
          ['bg-gradient-to-r from-[#16c0b0] to-[#84cf6a]']"
  >
    <div class="navbar-brand flex">
      <NuxtLink
          to="/"
          class="navbar-item"
      >
        Home
      </NuxtLink>
    </div>
    <NuxtLink
        to="/blog"
        class="navbar-item"
    >
      My Nuxt 3 Blog
    </NuxtLink>
    <NuxtLink
        to="/currency"
        class="navbar-item"
    >
      Currency
    </NuxtLink>
  </nav>
</template>

<style scoped lang="sass">
.navbar

  a
    font-weight: bold
    font-size: 1.25rem
    color: #2c3e50
    margin: auto 0.8em auto 0.4em
    text-decoration: none
    border-top: 2px solid transparent
    border-bottom: 2px solid transparent
    padding: 0.25rem 1rem
    border-radius: 5px

    &:hover
      color: #001423

  .router-link-exact-active
    color: #FDFDFD

    &:hover
      color: #FDFDFD

  &.bg-white

    a:hover
      background: linear-gradient( to right, rgba( 22, 192, 176, 0.5), rgba( 132, 207, 106, 0.5 ))

    .router-link-exact-active
      color: inherit
      background: linear-gradient( to right, #16c0b0, #84cf6a )

      &:hover
        color: inherit
        background: linear-gradient( to right, #16c0b0, #84cf6a )



</style>
