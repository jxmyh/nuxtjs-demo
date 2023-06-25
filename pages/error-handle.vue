<template>
  <NuxtErrorBoundary>
    <!-- 默认显示 正常内容  -->
    <div>正常内容</div>
    <ThrowError></ThrowError>
    <template #error="{ error }">
      <p class="my-4 text-xl text-gray-500">发生了一些错误 {{ error }}</p>
      <NButton type="success" @click="error.value = null">修正错误</NButton>
    </template>
  </NuxtErrorBoundary>
</template>