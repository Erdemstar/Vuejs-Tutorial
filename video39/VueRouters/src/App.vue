<template>
  <div id="app">
    <h1>Erdemstar</h1>
    <router-link to="/Index">Home</router-link>
    <router-link to="/About">Profile</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import Index from './componenets/Index.vue'
import About from './componenets/About.vue'

export default {
  components:{
    "vue-index": Index,
    "vue-about": About,
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
