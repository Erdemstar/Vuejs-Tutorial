import Vue from 'vue'
import App from './App.vue'
import Dinamik from './Dinamik.vue'
import Css from './Css.vue'


Vue.component("dinamik",Dinamik);
Vue.component("css",Css)
new Vue({
  el: '#app',
  render: h => h(App)
})
