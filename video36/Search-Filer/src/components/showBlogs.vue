<template>
  <div id="showBlogs">
    <h1>Show Blogs</h1>
    <h1>Search box</h1>
    <input type="text" name id v-model="searchData" />
    <div v-for="data in postData" id="Blogs">
      <h3 v-rainbow>Blog id {{ data.id }}</h3>
      <h4>Blog title {{ data.title }}</h4>
      <h4>Blog body {{ data.body | upperCase }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "showBlogs",
  data() {
    return {
      postData: [],
      searchData: "",
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        this.postData = response.body.slice(0, 10);
      });
  },
  methods: {
    
  },
  computed: {

  },
  filters: {
    upperCase: function(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(4, 10);
      }
    }
  },
};
</script>

<style>
#showBlogs {
  background-color: khaki;
  text-align: center;
}
#Blogs {
  margin-bottom: 5%;
  padding: 5%;
  background-color: grey;
  text-align: start;
}
</style>
