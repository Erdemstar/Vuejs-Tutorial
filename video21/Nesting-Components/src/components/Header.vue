<template>
  <div id="vue-header">
    <h1>{{ title }}</h1>
    <h2 @click="writeString()"> {{ message }} </h2>
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type:String
    }
  },
  name: "vue-header",
  data() {
    return {
      title: "Nesting Components"
    };
  },
  methods: {
    writeString: function(){
      this.message = "Degisti"
      return this.message
    }
  }
};
</script>

<style>
#vue-header{
    text-align: center;
    height: 100px;
    background-color: aquamarine;
}
</style>