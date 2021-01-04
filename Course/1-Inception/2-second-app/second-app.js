new Vue({
  el: "#app",
  data: {
    title: "Merhaba Dünya! Vue JS",
    description: "Bu bir açıklamadır",
  },
  methods: {
    changeTitle(e) {
      this.title = e.target.value;
    },
    double(e) {
      console.log("Double");
    },
    single(e) 
    {
      console.log("Single!");
    },
  },
});