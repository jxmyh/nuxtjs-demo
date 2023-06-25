<template>
  <nav class="border-b border-slate-200 px-5 py-2 flex items-center justify-between">
    <h1 class="text-2xl font-bold">Nuxt3 in Action2</h1>
    <label>
      dark mode:
      <NSwitch id="toggle" v-model:value="appConfig.theme.dark" />
    </label>
    <Avatar></Avatar>

  </nav>
</template>
<script setup lang="ts">
const appConfig = useAppConfig()
console.log('appConfig=>', appConfig)
</script>