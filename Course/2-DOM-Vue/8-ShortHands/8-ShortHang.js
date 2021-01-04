new Vue({
  el: "#app",
  data: {
      link: "https://www.github.com/GokselKUCUKSAHIN/",
  },
  methods: {
    changeLink()
    {
      this.link = "https://www.google.com.tr"
    }
    /*
    Benzer şekilde
    changeLink : function() yerine changeLink() yazılabilir.
    */
  },
});