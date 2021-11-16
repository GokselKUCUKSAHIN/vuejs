<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <v-listItem v-for="index in 5" :key="index" :idx="index"></v-listItem>
      </ul>
    </div>
    <v-status></v-status>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import Status from "./ServerStatus";

export default {
  components: {
    "v-listItem": ListItem,
    "v-status": Status
  }
};
</script>

<style scoped>
div {
  border: 2px dashed red;
}
</style>
