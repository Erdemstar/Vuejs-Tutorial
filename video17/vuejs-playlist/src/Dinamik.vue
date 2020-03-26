<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="name in names">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Dinamik Vue",
      names: ["erdem", "ali", "ahmet"]
    };
  }
}; //export bracklets
</script>

<style>
</style>