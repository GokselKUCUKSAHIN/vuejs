import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods : {
    sendServerData(server)
    {
      this.$emit("server-info", server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
