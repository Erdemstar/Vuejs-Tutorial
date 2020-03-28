<template>
  <div id="showBlogs">
    <h1 v-boyut:high="'big'">All Blog Articles</h1>
    <div class="single-blog" v-for="blog in blogs">
      <h1 v-canliRenk>Blog id : {{ blog.id }}</h1>
      <h2>Blog title : {{ blog.title | Uppercase }}</h2>
      <h2>Blog content : {{ blog.body | Capitalize}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "showBlogs",
  data() {
    return {
      blogs: {}
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body
      });
  }
};
</script>

<style>

</style>