<template>
  <div>
    {{ messge }}
  </div>
</template>
<script setup lang="ts">
const { messge } = await $fetch('/api/hello')
</script>