<script setup>

const isMobileNavOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink
            to="/"
            class="navbar-item has-text-weight-bold is-size-5"
        >
          Home
        </NuxtLink>
      </div>
      <NuxtLink
          to="/blog"
          class="navbar-item has-text-weight-bold is-size-5"
      >
        My Nuxt 3 Blog
      </NuxtLink>
      <NuxtLink
          to="/currency"
          class="navbar-item has-text-weight-bold is-size-5"
      >
        Currency
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="sass">
.navbar
  display: flex
  align-items: center
  min-height: 50px
  padding: 0.2em 1em
  background: linear-gradient(to right, #16c0b0, #84cf6a)

  a
    font-weight: bold
    color: #2c3e50
    margin: auto 0.8em auto 0.4em
    text-decoration: none
    border-top: 2px solid transparent
    border-bottom: 2px solid transparent

    &:hover
      background-color: unset
      color: #fff

  .router-link-exact-active
    color: white


</style>
