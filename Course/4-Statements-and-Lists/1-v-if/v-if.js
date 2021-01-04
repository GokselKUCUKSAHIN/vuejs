new Vue({
  el: "#app",
  data: {
    show: false,
    vis: false,
    number: 11,
  },
  methods: {
    getRandom() {
      this.number = Math.floor(Math.random() * 21);
    },
  },
});