<template>
  <div id="app">
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="changeComponents">Change component</button>
  </div>
</template>

<script>
//loads modules
import addBlogs from "./components/addBlogs";
import showBlogs from "./components/showBlogs";

export default {
  name: "app",
  components: {
    "vue-addBlogs": addBlogs,
    "vue-showBlogs": showBlogs
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      component: "vue-showBlogs",
      stat: false
    };
  },
  methods:{
    changeComponents: function(){
      this.stat = !this.stat;
      if (this.stat) { this.component = "vue-addBlogs"}
      else {this.component = "vue-showBlogs" }
    }

  },
  computed:{

  },
};
</script>

<style>
#app {
}
</style>
