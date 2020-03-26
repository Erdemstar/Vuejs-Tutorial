<template>
  <div>
    <h1>{{ projectName}}</h1>
    <ul>
      <li v-for="name in names">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Statik Vue",
      names: ["james", "lebron", "kobi"]
    };
  }
}; //export bracklets
</script>

<style>
</style>