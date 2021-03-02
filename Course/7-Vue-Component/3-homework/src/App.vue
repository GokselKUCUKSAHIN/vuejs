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
import Header from './Header';
import List from './List';
import Footer from './Footer';
export default {
  components: {
    "v-header": Header,
    "v-list" : List,
    "v-footer": Footer
  }
};
</script>
