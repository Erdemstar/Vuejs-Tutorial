<template>
  <div id="app">

    <!-- Header -->
    <vueHeader v-bind:message="message"></vueHeader>

    <!-- Index -->
    <vueIndex v-bind:citys="citys" v-bind:numbers="numbers"></vueIndex>

    <!-- Footer -->
    <vueFooter v-bind:message="message"></vueFooter>


  </div>
</template>

<script>
//local components
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    vueHeader: Header,
    vueIndex : Index,
    vueFooter: Footer,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      citys: ["istanbul","anakara","izmir"],
      numbers: [1,2,3,4],
      object: ["ağac","kaya","taş","odun","sopa"],
      message: "Bu bir priminite datadır."
    };
  }
};
</script>

<style>
</style>
