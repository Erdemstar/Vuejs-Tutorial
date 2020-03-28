<template>
  <div id="maiin">
    <h5>{{ title }}</h5>
    <h6>{{ subtitle }}</h6>
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
  name: "maiin",
  data() {
    return {};
  },
  methods:{

  },
  created(){
      EventBus.$on("changeSubTitle",(data) =>{
          this.subtitle = data;
      })
  }
};
</script>

<style>
#maiin {
  background-color: darkseagreen;
  height: 200px;
}
</style>
