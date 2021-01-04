new Vue({
  el: "#app",
  data: {
    value: 0,
    ms: 5000,
  },
  computed: { 
    result() {
      return this.value != 33 ? "Henüz Bitmedi!!!" : "Tamamlandı.";
    },
  },
  watch: {
    result(val) {
      vm = this;
      setTimeout(() => {
        vm.value = 0;
      }, vm.ms);
    },
  },
});