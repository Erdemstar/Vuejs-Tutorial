<template>
  <div id="Heaader">
    <h5 >{{ title }}</h5>
    <h6 @click="changeTitle">{{ subtitle }}</h6>
  </div>
</template>

<script>
import EventBus from "../event-bus";

export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  },
  name: "Heaader",
  data() {
    return {};
  },
  methods: {
    changeTitle: function() {
      this.subtitle = "SubTitle is changed by Header.vue";
      EventBus.$emit("changeSubTitle", this.subtitle);
    }
  }
};
</script>

<style>
#Heaader {
  background-color: deepskyblue;
  height: 300px;
}
</style>
