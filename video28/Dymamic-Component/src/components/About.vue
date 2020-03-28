<template>
  <div id="about">
      <p> {{ aboutMessage }} </p>
  </div>
</template>

<script>
export default {
    name: "about",
    data(){
        return {
            aboutMessage: "Burası hakkında kısımıdır ve genel olarak projenin hakkında kısımı burada tutulacaktır."
        }
    }
}
</script>

<style>
#about {
    background-color: gold;
    height: 200px;
}

</style>