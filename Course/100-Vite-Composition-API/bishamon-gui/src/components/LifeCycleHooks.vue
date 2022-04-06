<style scoped></style>

<template>
  <div>{{ title }}

    <ul v-if="itemList.length !== 0">
      <li v-for="item in itemList">{{item}}</li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

const title = ref("Test Başlığı");
const itemList = ref<number[]>([]);
console.log("Setup Çalıştı");
setTimeout(() => {
  itemList.value = [1, 2, 3, 4, 5, 6, 6.5, 7];
}, 2000)

setTimeout(() => {
  title.value = "Yeni Başlık"
}, 3000)

onBeforeMount(() => {
  console.log("onBeforeMount Çalıştı");
});
onMounted(() => {
  console.log("onMounted Çalıştı");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate Çalıştı");
});
onUpdated(() => {
  console.log("onUpdated Çalıştı");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount Çalıştı");
});
onUnmounted(() => {
  console.log("onUnmounted Çalıştı");
})
</script>

