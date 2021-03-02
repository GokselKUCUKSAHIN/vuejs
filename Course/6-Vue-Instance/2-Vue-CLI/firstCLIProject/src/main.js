import Vue from "vue";
import App from "./App";
import Home from "./Home";

Vue.component("lamps", Home);

new Vue({
  el: "#app",
  render: h => h(App)
});
