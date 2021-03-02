import Vue from 'vue'
import App from './App'
import Home from './Home'

Vue.component('lamp-comp', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
