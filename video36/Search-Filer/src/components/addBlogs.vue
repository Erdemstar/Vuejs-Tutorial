<template>
  <div id="addBlogs">
    <h1>Add Blogs</h1>

    <!-- blog-add -->
    <div id="blog-add">
      <label for>Blog Title</label>
      <input type="text" v-model.lazy="blogModel.title" />

      <label for>Blog Content</label>
      <textarea name id cols="30" rows="10" v-model.lazy="blogModel.content"></textarea>

      <div id="blog-type">
        <div v-for="t in blogData.type">
          <label>{{ t }}</label>
          <input type="checkbox" v-bind:value="t" v-model.lazy="blogModel.type" />
        </div>
      </div>

      <div id="blog-author">
        <label for>Author</label>
        <select name id v-model.lazy="blogModel.author">
          <option v-for="a in blogData.author" v-bind:value="a">{{ a }}</option>
        </select>
      </div>
      <button v-on:click="SendPost">Submit</button>
    </div>
    <!-- blog-add -->

    <!-- preview-blog -->
    <div id="preview-blog">
      <label for>
        Blog Title
        <b>{{ blogModel.title }}</b>
      </label>
      <label for>
        Blog Cotent
        <b>{{ blogModel.content }}</b>
      </label>
      <label for>
        Blog Type
        <b v-for="b in blogModel.type">
          <span>{{ b }}</span>
        </b>
      </label>
      <label for>
        Blog Author
        <b>{{ blogModel.author }}</b>
      </label>
    </div>
    <!-- preview-blog -->
  </div>
  <!-- addBlogs -->
</template>

<script>
export default {
  name: "addBlogs",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      blogData: {
        type: ["Siyaset", "Şiddet", "Şikayet", "Günlük"],
        author: ["Ali", "Mehmet", "Kemal", "Veli"]
      },
      blogModel: {
        title: "",
        content: "",
        type: [],
        author: ""
      }
    };
  },
  methods: {
    SendPost: function() {
      alert(
        this.blogModel.title +
          " " +
          this.blogModel.content +
          " " +
          this.blogModel.type +
          " " +
          this.blogModel.author
      );
    }
  },
  computed: {}
};
</script>

<style>
#addBlogs {
}
#addBlogs #blog-add {
  padding-left: 20%;
  background-color: wheat;
}
#addBlogs #blog-add * {
  margin-top: 1%;
  display: block;
}
#addBlogs #blog-add #blog-type * {
  margin-top: 1%;
  display: inline-block;
}
#addBlogs #blog-add #blog-author * {
  margin-top: 1%;
  display: inline-block;
}

#addBlogs #preview-blog {
  margin-top: 4%;
  padding-left: 20%;
  background-color: turquoise;
}

#addBlogs #preview-blog * {
  display: block;
  margin: 1%;
}
</style>
