<template>
  <div id="app">
    <h1 id="title">{{ msg }}</h1>

    <vueHeader v-bind:title="title" v-bind:subtitle="subtitle" v-on:changeTitle="changed"></vueHeader>
    <vueMain v-bind:title="title" v-bind:subtitle="subtitle"></vueMain>
    <vueSlot>
      <h6 slot="AppSlotHeaderForSlotVUE" >this is a h6 tag</h6>
      <p slot="AppSlotParagrapForSlotVUE">This is a p tag</p>
      <span slot="AppSlotSpanForSlotVUE"> {{ slotData }} </span>
    </vueSlot>
    <vueFooter v-bind:title="title" v-bind:subtitle="subtitle"></vueFooter>
  </div>
</template>

<script>
//load modules
import Header from "./components/Header";
import Main from "./components/Main";
import Slot from "./components/Slot";
import Footer from "./components/Footer";

export default {
  components: {
    vueHeader: Header,
    vueMain: Main,
    vueSlot: Slot,
    vueFooter: Footer
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: "This data will changed in child object and updated all where",
      subtitle: "This will be changed using Event Bus",
      slotData: "This is slotData from App.vue",
    };
  },
  methods:{
    changed: function(data){
      this.title = data
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  background-color: violet;
  height: 1000px;
}
#app #title {
  padding-top: 2%;
}
</style>
