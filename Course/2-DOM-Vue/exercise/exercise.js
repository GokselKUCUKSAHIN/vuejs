new Vue({
  el: "#exercise",
  data: {
    value: 0,
    result: 0,
    ms: "",
  },
  methods: {
    submit() {
      console.log("Enter!");
      setTimeout(() => {
        this.result = this.value;
      }, this.ms);
    },
  },
});