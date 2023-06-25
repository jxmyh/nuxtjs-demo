<template>
  <!-- <div class="p-4">
    Counter: {{ counter }}
    CounterRef: {{ counterRef }}
    <div class="mt-2">
      <NButton @click="
        counter++;
      counterRef++;
      ">
        +
      </NButton>
      <NButton @click="
        counter--;
      counterRef--;
      ">
        -
      </NButton>
    </div>
  </div> -->
  <div class="py-4">
    Conut: {{ count }}
    Counter1(公用): {{ counter1 }}
    Counter2: {{ counter2 }}
    <div class="mt-2">
      <NButton @click="
        counter1++;
      counter2++;
      ">
        +
      </NButton>
      <NButton @click="
        counter1--;
      counter2--;
      ">
        -
      </NButton>
    </div>
  </div>
</template>

<script setup lang="ts">

// const counter = useState('counter', () => Math.round(Math.random() * 1000));
// const counterRef = ref(Math.round(Math.random() * 1000))
import { useCounter } from '~/store/counter';
const counter1 = userCount()
const counter2 = ref(1)
const store = useCounter()
const { value: count } = storeToRefs(store)

</script>

<style lang="scss"></style>
