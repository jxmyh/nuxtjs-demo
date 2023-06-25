<template>
  <div>
    <p class="bg-blue-300 dark:bg-slate-600 dark:text-slate-200" @click="appConfig.title = 'hello'">
      appConfig: {{ appConfig.title }}
    </p>
    <p>appConfig: {{ JSON.stringify(appConfig) }}</p>
    <p>runtimeconfig: {{ JSON.stringify(runtimeconfig) }}</p>
    <!--2323 <label>
      dark mode:
      <NSwitch id="toggle" v-model:value="appConfig.theme.dark" />
    </label> -->
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
// console.log('appConfig=>', appConfig)
const runtimeconfig = useRuntimeConfig()

if (process.server) {
  console.log('API secret:', runtimeconfig.apiSecret)
} else {
  console.log('runtimeconfig=>', runtimeconfig)
}
</script>

<style  lang="scss"></style>
