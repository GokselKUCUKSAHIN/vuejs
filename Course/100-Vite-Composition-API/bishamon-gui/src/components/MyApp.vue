<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2 py-2 text-center">
        <div class="input-group mb-3">
          <input type="text"
                 class="form-control"
                 placeholder="Add new..."
                 aria-label="Add new..."
                 aria-describedby="basic-addon2"
                 v-model="inputText"
                 @keydown.enter="insert(inputText)">
          <div class="input-group-append">
            <button
                @click="insert(inputText)"
                class="btn btn-outline-secondary"
                type="button">
              Add
            </button>
          </div>
        </div>
        <div class="list-group">
          <div v-for="(todo, index) in todoList" :key="index"
               class="list-group-item d-flex justify-content-between align-items-center user-select-none">
            {{ todo }}
            <span role="button" class="badge rounded-pill bg-primary pointer-event" @click="removeTodo(index)">&nbsp;x&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

const inputText = ref<string>("");

const todoList = reactive<string[]>(
    [
      "Todo1",
      "Todo2",
      "Todo3",
      "Todo4",
      "Todo5",
    ]
);

function insert(item: string): void {
  if (inputText.value.length === 0) return;
  inputText.value = "";
  insertTodo(item);
}

function insertTodo(item: string): number {
  return todoList.unshift(item);
}

function removeTodo(index: number): boolean {
  if (index < 0 && index >= todoList.length) return false;
  return todoList.splice(index, 1).length === 1;
}
</script>

<style scoped></style>

<!--<img class="m-4" src="https://images.squarespace-cdn.com/content/v1/58427ce303596e3099e40044/1589629790530-HBLM3SGPJ9ABF0PRW1ID/IMG_7529%281%29.jpg" width="300">-->