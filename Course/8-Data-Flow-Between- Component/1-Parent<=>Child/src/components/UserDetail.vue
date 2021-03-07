<template>
  <div class="wcol-md-6">
    <h3>Child Component 1 (User Detail)</h3>
    <p>
      Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim
    </p>
    <p>Kullanıcı Adı: {{ name }}</p>
    <p>Kullanıcı Adı Tersten: {{ reverseName() }}</p>
    <button @click="sendToParent">Veriyi Root'a gönder</button>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "BLANK STRING",
    },
  },
  methods: {
    reverseName() {
      return this.name.split("").reverse().join("");
    },
    sendToParent() {
      this.$emit("data", "Data from Child Element");
    },
  },
};
</script>
<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
