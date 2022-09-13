<template>
  <div>
    <Navbar :isBlog="true"/>
    <Hero> A Nuxt Content v2 Blog with Vuetify</Hero>
    <main>
      <slot />
    </main>
  </div>
</template>
