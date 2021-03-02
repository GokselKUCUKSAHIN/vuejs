<template>
  <div>
    <p>Lamba Durumu : {{ status }}</p>
    <hr />
    <button @click="toggleLamp">Lambayı Aç/Kapat</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: false
    };
  },
  methods: {
    toggleLamp() {
      this.status = !this.status;
    }
  }
};
</script>
