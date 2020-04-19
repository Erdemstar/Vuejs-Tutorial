<template>
  <div id="app">
    <router-view></router-view>
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
