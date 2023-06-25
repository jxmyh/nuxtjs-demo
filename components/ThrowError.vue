<template>
  <div>
    <NButton @click="throwError">你点我试试</NButton>
  </div>
</template>
<script setup lang="ts">
const throwError = () => {
  throw new Error("来自 ThrowError 组件的异常");
};
</script>