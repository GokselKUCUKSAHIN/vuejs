const cmp = {
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
};

new Vue({
  el: "#app",
  components: {
    "my-comp": cmp,
  },
});

new Vue({
  el: "#app2",
});
