<template>
  <div>
    <p>Lamba Durumu : {{ status }}</p>
    <button @click="toggleLamp">Lambayı Aç/Kapat</button>
    <hr>
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


