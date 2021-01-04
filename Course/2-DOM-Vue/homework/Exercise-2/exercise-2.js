new Vue({
  el: "#exercise",
  data: {
    value: "",
    value2: "",
  },
  methods: {
    updateValue(e) {
      this.value = e.target.value;
    },
    updateValue2(e) {
      this.value2 = e.target.value;
    },
    showAlert(msg) {
      window.alert(msg);
    },
  },
});