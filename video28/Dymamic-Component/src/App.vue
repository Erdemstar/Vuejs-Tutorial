<template>
  <div id="app">
    <component v-bind:is="bind"></component>
    <button v-on:click="ChangeBind">Change Component Dynamic</button>
  </div>
</template>

<script>
//load module

import index from "./components/Index";
import about from "./components/About";

export default {
  name: "app",
  components: {
    vueIndex: index,
    vueAbout: about
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      bind: "vueIndex",
      stat: true
    };
  },
  methods: {
    ChangeBind: function() {
      this.stat = !this.stat;
      if (this.stat) {
        this.bind = "vueIndex";
        return this.bind;
      } else {
        this.bind = "vueAbout";
      }
    }
  }
};
</script>

<style>
#app {
}
</style>
