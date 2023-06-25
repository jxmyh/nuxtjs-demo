<template>
  <div class="p-4">
    Count(公用): {{ count }}
    Counter: {{ counter }}
    CounterRef: {{ counterRef }}
    <div class="mt-2">
      <NButton @click="
        count++;
      counter++;
      counterRef++;
      ">
        +
      </NButton>
      <NButton @click="
        count--;
      counter--;
      counterRef--;
      ">
        -
      </NButton>
    </div>
  </div>
  <Counter></Counter>
  <Counter></Counter>
  <!-- <div class="py-4">
    Counter1: {{ counter1 }}
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
  </div> -->
</template>

<script setup lang="ts">
import { useCounter } from '~/store/counter';
const counter = useState('counter', () => Math.round(Math.random() * 1000));
const counterRef = ref(Math.round(Math.random() * 1000))

const store = useCounter()
const { value: count } = storeToRefs(store)
// const counter1 = userCount()
// const counter2 = ref(1)

</script>

<style lang="scss"></style>
