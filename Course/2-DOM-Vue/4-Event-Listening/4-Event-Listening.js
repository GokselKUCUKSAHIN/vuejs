new Vue({
  el: "#app",
  data: {
    count: 0,
    mx: 0,
    my: 0,
    overflow: false,
  },
  watch: {
    count(value)
    {
      this.overflow = value >= 1000;
    }
  },
  methods: {
    increaseCount(c) {
      this.count += c;
    },
    showAlert() {
      alert(`Current Count = ${this.count}.`);
    },
    captureMouseMove(step, e) {
      // console.log(e);
      this.mx = e.offsetX;
      this.my = e.offsetY;
      this.count += step;
    },
  },
});