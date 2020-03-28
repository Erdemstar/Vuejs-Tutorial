<template>
  <div id="addBlog">
    <div id="addBlogFormArea">
      <h1>Add New Blog Post</h1>
      <form action>
        <label for>Blog Name</label>
        <input type="text" v-model.lazy="blog.name" />

        <br />

        <label for>Blog Content</label>
        <textarea name id cols="30" rows="10" v-model.lazy="blog.content"></textarea>

        <br />

        <label for>Siyaset</label>
        <input type="checkbox" name id value="Siyaset" v-model="blog.categories" />
        <label for>Günlük</label>
        <input type="checkbox" name id value="Günlük" v-model="blog.categories" />
        <label for>Ekonomi</label>
        <input type="checkbox" name id value="Ekonomi" v-model="blog.categories" />
        <label for>Şikayet</label>
        <input type="checkbox" name id value="Şikayet" v-model="blog.categories" />

        <br />

        <select name id v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>

        <button v-on:click.prevent="submitPost" type>Submit</button>
      </form>
    </div>

    <br />
    <br />

    <div id="DisplayBlogFormArea">
      <label for>
        Blog name:
        <b>{{ blog.name }}</b>
      </label>

      <br />

      <label for>
        Blog Content
        <b>{{ blog.content }}</b>
      </label>

      <br />

      <label for>
        Blog Type
        <ul>
          <li v-for="cat in blog.categories">{{ cat }}</li>
        </ul>
      </label>

      <br />

      <label for>
        Blog Author
        <b>{{ blog.author }}</b>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      blog: {
        name: "",
        content: "",
        author: "",
        categories: []
      },
      authors: ["Erdem", "Ali", "Mahmut", "Feyyaz"]
    };
  },
  methods: {
    submitPost: function() {
      this.$http.post("http://jsonplaceholder.typicode.com/posts", {
          userId: 1,
          title: this.blog.name,
          body: this.blog.author
        }).then(function(data) {
          console.log(data);
        });
    },
  }
};
</script>

<style>
#addBlog {
  text-align: center;
}
label {
  display: inline-block;
}
input {
  display: inline-block;
}
</style>
