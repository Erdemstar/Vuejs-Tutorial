<template>
  <div id="vue-footer">
    <footer>
      <h1>
        {{ tmp }}
        {{ message }}
        <h2>{{ date() }}</h2>
      </h1>
    </footer>
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type:String
    }
  },
  name: "vue-footer",
  data() {
    return {
      tmp: "footer"
    };
  },
  methods: {
    date: function() {
      var d = new Date();
      return d.getDay() +" " + d.getMinutes();
    }
  }
};
</script>

<style>
#vue-footer {
  background: chartreuse;
}
</style>