import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


//Components
Vue.use(VueResource)
Vue.use(VueRouter)

//Router
import Router from './route.js'
const router = new VueRouter({
  routes: Router
});


new Vue({
  el: '#app',
  router:router,
  render: h => h(App),
})
