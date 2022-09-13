<script setup lang="ts">

  const { path } = useRoute()

  const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })
</script>

<template>
  <section>
    <hero>
      <template v-slot:default>{{ blogPost.title }}</template>

      <template v-slot:subtitle>
        <BlogPostMeta
            :author="blogPost.author"
            :date="blogPost.dates.published"
            class="flex justify-center"
        />
      </template>
    </hero>
    <div class="container flex justify-center -mt-24">
      <section class="article bg-neutral-50 p-8">
        <ContentDoc class="content-doc"/>
      </section>
    </div>
  </section>
</template>

<style scoped lang="sass">
  .article
    border-radius: .5rem

    :deep( .content-doc )
      margin: 30px

      h2
        text-align: center
        margin-bottom: 1rem

      a
        text-align: center

      p
        margin-bottom: 0.5rem

      .counter
        margin: 1rem 0

      ul
        list-style: none

        > li
          background: #ddd
          color: #444
          border-radius: .3em
          transition: all .3s ease-out
          margin: 1rem 0

          &:before
            content: "\2022"
            padding: 0 5px
            margin-right: 1rem
            color: #87ceeb
            border: 3px solid white
            background: #87ceeb
            border-radius: 50%

      ol
        counter-reset: li /* Initiate a counter */
        list-style: none /* Remove default numbering */
        *list-style: decimal /* Keep using default numbering for IE6/7 */
        font: 15px 'trebuchet MS', 'lucida sans'
        padding: 0
        text-shadow: 0 1px 0 rgba(255,255,255,.5)

        > li
          position: relative
          display: block
          padding: .4em .4em .4em 2em
          margin: .5em 0 .5em 1.3em
          background: #ddd
          color: #444
          text-decoration: none
          border-radius: .3em
          transition: all .3s ease-out

          &:before
            content: counter(li)
            counter-increment: li
            position: absolute
            left: -1.3em
            top: 50%
            margin-top: -1em
            background: #87ceeb
            height: 2em
            width: 2em
            line-height: 1.5em
            border: .3em solid #fff
            text-align: center
            font-weight: bold
            border-radius: 2em
            transition: all .3s ease-out

          &:hover
            background: #eee

            &:before
              font-size: 1.3rem

      ol ol
        margin: 0 0 0 2em /* Add some left margin for inner lists */

      pre
        background-color: #e2e2e2
        padding: 1rem
        margin: 1rem 0
        border-radius: 3px
</style>
