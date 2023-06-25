<template>
  <div v-if="error">{{ errorMsg }}</div>
  <div v-else-if="pending">加载中...</div>
  <div v-else>

    <Head>
      <Title>{{ data?.title }}</Title>
    </Head>
    <h3>优化路径</h3>
    <p>{{ $route.params.id }}</p>
    <nuxt-link to="/">返回首页</nuxt-link>
    <div class="p-5">
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
    </div>
    <!-- 评论区 -->
    <div class="py-2">
      <NInput v-model:value="value" type="textarea" placeholder="输入评论" />
      <NButton @click="onSubmit">发送</NButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NuxtError } from "#app";
import { useUser } from '~/store/user'
const router = useRoute();
const routers = useRouter();
// const fetchPost = $fetch(`/api/detail/${router.params.id}`)
const fetchPost = () => $fetch(`/api/detail/${router.params.id}`);
const { data, pending, error } = await useAsyncData("post", fetchPost);
const value = useState('comment', () => '')
const store = useUser();
const { isLogin } = storeToRefs(store);
const errorMsg = computed(() => (error.value as NuxtError).statusMessage);
// useHead({
//   title: router.params.id as string,
// })
// useHead({
//   title: data.value?.title
// })
watchEffect(() => {
  if (unref(error)) {
    showError(error.value as NuxtError)
  }
})
console.log('errorMsg: ', JSON.stringify(error.value))
const onSubmit = () => {
  // console.log('islogierror=>', islogierror)
  if (isLogin.value) {
    value.value = ''
  } else {
    routers.push('/login?callback=' + router.path)
  }
}
</script>
<style lang="scss" scoped>
p {
  color: var(--link-color)
}
</style>