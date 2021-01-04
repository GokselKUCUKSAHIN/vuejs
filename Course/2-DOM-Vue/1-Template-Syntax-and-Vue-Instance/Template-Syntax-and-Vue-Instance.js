new Vue({
  el: "#app",
  data: {
    title: "Jelly",
  },
  methods: {
    hi() {
      return this.title;
    },
  },
});