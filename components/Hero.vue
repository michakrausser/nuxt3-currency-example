<script setup lang="ts"></script>

<template>
  <section class="hero bg-gradient-to-r from-[#16c0b0] to-[#84cf6a]">
    <div class="hero-body flex justify-center items-center">
      <div>
        <h1 class="text-white">
          <slot />
        </h1>
        <slot name="subtitle" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.hero-body
  height: 400px
</style>
