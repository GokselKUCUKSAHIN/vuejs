<template>
  <div class="container">
    <v-header></v-header>
    <hr />
    <v-list></v-list>
    <hr />
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import List from "./components/List";
import Footer from "./components/common/Footer";

export default {
  components: {
    "v-header": Header,
    "v-list": List,
    "v-footer": Footer
  }
};
</script>
