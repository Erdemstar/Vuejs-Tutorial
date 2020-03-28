import Vue from 'vue'
import App from './App.vue'

//load library
import VueResource from 'vue-resource';
Vue.use(VueResource)

//create Customer Directive
Vue.directive("canliRenk",function(el,binding,vnode){
  el.style.color = "#" + Math.random().toString().slice(4,10)
});

Vue.directive("boyut",function(el,binding,vnode){
  if (binding.arg == "high"){
    el.style.height = "100px";
  }
  if (binding.value == "big"){
    el.style.fontSize = "50px";
  }
})

//create Custom Filters

Vue.filter("Uppercase",function(value){
  return value.toUpperCase()
})

Vue.filter("Capitalize",function(value){
  return value.charAt(0).toUpperCase() + value.toLowerCase(1)
})

new Vue({
  el: '#app',
  render: h => h(App)
})
