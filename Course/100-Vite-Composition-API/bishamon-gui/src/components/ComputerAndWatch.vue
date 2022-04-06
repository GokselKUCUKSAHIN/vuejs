<template>
  <button @click="count++">Count Up</button>
  <button @click="count--">Count Down</button>
  <p>First Counter = {{ count }}</p>
  <p>From method; {{ getCounterStatus(count) }}</p>
  <p>From computed; {{ countStatusComputed }}</p>
  <hr>
  <button @click="second++">Count Up</button>
  <p>Second Counter = {{ second }}</p>
  <hr>
  <button @click="handle()">Stop Watching</button>
</template>

<script setup lang="ts">
import {ref, watch, computed} from "vue";

const count = ref(0);
const second = ref(0);

function getCounterStatus(counter: number): string {
  console.warn("Method executed");
  if (counter > 10) return "Counter is greater than 10!";
  else if (counter === 10) return "Counter is equal to 10!";
  else return "Counter lesser than 10!";
}

const countStatusComputed = computed(() => {
  console.warn("Computed executed");
  return count.value > 10
      ? "Counter is grater than 10."
      : count.value === 10
          ? "Counter is equal to 10!"
          : "Counter lesser than 10!";
})

const handle = watch(count, () => {
  if (count.value > 5) console.log("count passed 5");
});

</script>

<style scoped>
</style>