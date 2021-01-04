new Vue({
  el: "#app",
  data: {
    // Soru 1
    classEffect: "",
    isPlaying: false,
    toggle: false,
    // Soru 2
    isActive: false,
    // Soru 3
    inputClassName: "",
    // Soru 4
    textField1: "",
    textField2: "",
    //Soru 5
    styleNames: "",
    // Soru 6
    percent: 0,
  },
  methods: {
    startEffect() {
      this.isPlaying = !this.isPlaying;
      vm = this;
      var intId = setInterval(() => {
        if (vm.isPlaying) {
          vm.classEffect = (vm.toggle = !vm.toggle)
            ? "highlight"
            : "shrink";
        } else {
          clearInterval(intId);
        }
      }, 250);
    },
    startProgress() {
      // console.log("method çalıştı");
      this.percent = 0;
      vm = this;
      var intervalID = setInterval(() => {
        // console.log("tick");
        if (vm.percent++ >= 100) {
          //Eğer 100 veya üstündeyse
          vm.percent = 100; // 100'ün üstüne çıkma ihtimaline karşıkık 100'e eşitle
          clearInterval(intervalID); // intervali durdur.
          setTimeout(() => {
            // 100'e ulaştıktan 1 saniye sonra sıfırla.
            vm.percent = 0;
          }, 1000);
        }
      }, 100);
    },
  },
  computed: {
    computedStyle() {
      return this.styleNames;
    },
  },
});