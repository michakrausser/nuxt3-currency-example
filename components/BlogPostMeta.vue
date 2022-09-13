<script setup lang="ts">
  const props = defineProps({
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#0F172A'
    }
  })
  const formattedDate = computed(() => {
    return new Date( props.date ).toDateString()
  })
</script>

<template>
  <div class="tags m-4">
    <span class="tag rounded-l-2xl text-white py-2 px-4" :style="{ background: color }">{{ author }}</span>
    <span class="tag rounded-r-2xl bg-slate-200 py-2 px-4">{{ formattedDate }}</span>
  </div>
</template>

<style scoped lang="sass">
</style>
