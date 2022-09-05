<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
  <div class="container">
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <div
            v-for="blogPost in blogPostList"
            :key="blogPost._path"
            class="card article"
        >
          <NuxtLink :to="blogPost._path">
            <section class="blog-post-card card article">
              <div class="media">
                <div class="media-content has-text-centered">
                  <h3 class="title article-title has-text-weight-bold">
                    {{ blogPost.title }}
                  </h3>
                  <BlogPostMeta
                      :author="blogPost.author"
                      :date="blogPost.dates.published"
                  />
                </div>
              </div>
              <div class="card-content">
                <div class="content article-body is-size-5">
                  {{ blogPost.description }}
                </div>
              </div>
            </section>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="sass">
</style>
