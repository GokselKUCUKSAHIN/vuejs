new Vue({
  el: "#app",
  data: {
    counter: 0,
    secondCounter: 0,
  },
  methods: {
    result() {
      console.log("Method executed");
      return this.counter > 10
        ? "The counter is grater than 10."
        : this.counter == 10
        ? "The counter is equals 10."
        : "The counter is lesser than 10.";
    },
  },
  computed: {
    compResult() {
      console.log("Computed executed");
      return this.counter > 10
        ? "The counter is grater than 10."
        : this.counter == 10
        ? "The counter is equals 10."
        : "The counter is lesser than 10.";
    },
  },
  watch: {
    counter(value) {
      console.log("Watch:", value);
      setTimeout(() => {
        vm = this; // Vue instance
        vm.counter = 0;
      }, 1500);
    },
  },
});