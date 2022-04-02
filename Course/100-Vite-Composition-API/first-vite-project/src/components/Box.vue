<template>
  <button @click="hasBorder = !hasBorder">Toggle Border</button>
  <button @click="isRed = !isRed">Toggle Red Color</button>
  <div class="box" :class="boxClasses"></div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const hasBorder = ref(false);
const isRed = ref(false);

const boxClasses = computed(() => {
  return {
    border: hasBorder.value,
    red: isRed.value
  };
})
</script>

<style scoped>
.box {
  height: 100px;
  width: 100px;
  background-color: #ccc;
}

.border {
  border: 3px dashed #666;
}

.red {
  background-color: crimson;
}
</style>