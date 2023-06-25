<template>
  <div :class="{ dark: appConfig.theme.dark }">
    <div class="wrap bg-blue-300 dark:bg-slate-600 dark:text-slate-200">
      <NavBar></NavBar>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const appConfig = useAppConfig()
console.log('appConfig=>', appConfig)
</script>
<style scoped>
.wrap {
  min-height: 100vh;
}
</style>