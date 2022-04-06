<template>
  <h2>Counter: {{ count }}</h2>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0);

function countUp() {
  setInterval(()=>{
    count.value++;
  }, 100);
}

onMounted(() => {
  countUp();
});
</script>

<style scoped>
h2 {
  color: crimson;
}
</style>