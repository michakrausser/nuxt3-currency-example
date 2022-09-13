<script setup lang="ts">
  const { data: blogPostList } = useAsyncData('blogPostList', () => {
    return queryContent('/blog').find()
  })
</script>

<template>
  <div class="container d-flex justify-center">
    <section class="articles -mt-24">
      <v-card
          v-for="blogPost in blogPostList"
          :key="blogPost._path"
          class="pa-8 mb-8"
      >
        <NuxtLink :to="blogPost._path">
          <v-card-title class="title justify-center">
            {{ blogPost.title }}
          </v-card-title>

          <BlogPostMeta
              :author="blogPost.author"
              :date="blogPost.dates.published"
              color="linear-gradient(to right, #16c0b0, #84cf6a)"
              class="flex justify-center"
          />
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <div>{{ blogPost.description }}</div>
          </v-card-text>
        </NuxtLink>
      </v-card>
    </section>
  </div>
</template>

<style scoped lang="sass">
  a
    color: black

</style>
