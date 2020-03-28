<template>
  <div id="app">
    <!-- <vue-addBlog></vue-addBlog> -->
    
    <vue-showBlogs></vue-showBlogs>
  </div>
</template>

<script>

//load components
import addBlog from "./components/addBlog"
import showBlogs from "./components/showBlogs";

export default {
  name: 'app',
  components:{
    "vue-addBlog":addBlog,
    "vue-showBlogs":showBlogs
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  
}
</style>
