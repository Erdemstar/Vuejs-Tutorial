<template>
  <div id="foooter">
    <h5>{{ title }}</h5>
    <h6> {{ subtitle }} </h6>
  </div>
</template>

<script>
import EventBus from "../event-bus";
export default {
  props: {
    title: {
      type: String
    },
    subtitle:{
        type: String
    }
  },
  name: "foooter",
  data() {
    return {};
  },
  methods:{
      changeTitle: function(){
          this.subtitle = "Title"
      },
  },
  created(){
      EventBus.$on("changeSubTitle",(data) =>{
          this.subtitle = data;
      })
  }
};
</script>

<style>
#foooter {
  background-color: darkgrey;
  height: 100px;
}
</style>
