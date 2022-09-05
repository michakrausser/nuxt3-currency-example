<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
