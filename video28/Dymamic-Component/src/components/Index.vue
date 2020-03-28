<template>
  <div id="index">
    <h1>{{ indexMessage }}</h1>
    <div>
      <span>Username</span>
      <input type="text" v-model="username" />
      <span>Password</span>
      <input type="text" v-model="password" />
    </div>
    <button v-on:click="readText">Button1</button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      username:"",
      password:"",
      indexMessage: "Index PAGE"
    };
  },
  methods: {
    readText: function() {
        alert(this.username + " " + this.password)
    }
  }
};
</script>

<style>
#index {
  background-color: teal;
  height: 200px;
}
#index h1 {
  text-align: center;
}
</style>