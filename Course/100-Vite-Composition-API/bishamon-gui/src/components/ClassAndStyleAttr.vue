<template>
  <!--  <label for="toggle">{{ showBorder }}</label> -->
  <input type="text" v-model="bgColor">
  <button @click="showBorder = !showBorder">Border Ekle/Ekleme</button>
  <button @click="redBG = !redBG">Kırmızı BG Yap/Yapma</button>
  <button @click="blueBG = !blueBG">Mavi BG Yap/Yapma</button>
  <div class="box" :style="{backgroundColor: bgColor}" :class="boxClasses"></div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {StyleProperty} from "../custom-types";

const showBorder = ref(false);
const redBG = ref(false);
const blueBG = ref(false);
const bgColor = ref("");

const boxClasses = computed((): StyleProperty => {
  return {
    border: showBorder.value,
    red: redBG.value,
    blue: blueBG.value
  }
});
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #dedede;
}

.border {
  border: 3px dashed #666;
}

.red {
  background-color: crimson;
}

.green {
  background-color: chartreuse;
}

.blue {
  background-color: aqua;
}
</style>