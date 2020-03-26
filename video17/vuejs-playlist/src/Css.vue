<template>
  <div id="css">
    <h1>{{ projectName }}</h1>
  </div>
</template>

<script>
export default {
  name: "#css",
  data() {
    return {
      projectName: "Component CSS"
    };
  }
};
</script>

<style>
#css {
  background: red;
}
#css h1 {
  color: blanchedalmond;
}
</style>