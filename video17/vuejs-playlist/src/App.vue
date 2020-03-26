<template>
  <div>
    <h1>{{ projectName }}</h1>
    <h1>{{ version() }}</h1>
    <dinamik></dinamik>
    <statik></statik>
    <css></css>
  </div>
</template>

<script>
import Statik from "./Statik.vue";

export default {
  components: {
    statik: Statik
  },
  data() {
    return {
      projectName: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    version: function() {
      return "1.0";
    }
  }
};
</script>

<style scoped>
h1 {
 color: aqua; 
}
</style>
