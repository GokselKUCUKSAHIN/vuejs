new Vue({
  el: "#exercise",
  data: {
    NAME: "Göksel",
    AGE: 22,
    imgURL: 'https://memegenerator.net/img/instances/58621916.jpg',
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    },
    changeName(e){
      this.NAME = e.target.value;
    },
  },
});