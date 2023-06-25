<template>
  <div>

    <!-- <div>
      <p>只能存在一个</p>
      <NuxtLink to="/detail-1">Detail Page</NuxtLink>
    </div> -->
    <!-- <div>
      <NuxtLink to="/detail/1">优化路径</NuxtLink>
      <BaseFooButton></BaseFooButton>
      <NButton>hello</NButton>
    </div> -->
    <!-- <div>

      <p class="p-5" v-if="pending"> 加载中 </p>
      <p class="p-5" v-else> 加载完毕 </p>
    </div> -->
    <!-- <div>
      {{ error }}
    </div> -->
    <div class="flex items-center flex-col gap-2 py-4">
      <div v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/detail/${post.id}`" class="text-lg">{{ post.title }}</nuxt-link>
        <p class="text-slate-500">发布于: {{ post.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '文章列表'
})
// const posts = await $fetch('/api/posts')
const { data: posts, pending, error, refresh } = await useFetch('/api/posts', {})
try {

} catch (error) {

}

</script>