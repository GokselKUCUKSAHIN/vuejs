Vue.component("my-comp", {
  data() {
    return {
      status: "Passive",
    };
  },
  template:
    "<h2>Status is {{status}} <button @click='changeStatus'>Change</button></h2>",
  methods: {
    changeStatus() {
      this.status = "Active";
    },
  },
});
new Vue({
  el: "#app",
});
