<template>
  <div id="vue-index">
    <ul>
      <li v-for="n in names">
        <h1 @click="reverse(n)">Adı {{ n.name }}</h1>
        <span v-show="n.isShow">{{ n.age }} yaşında</span>
      </li>
    </ul>

    <!--
    <ul>
      <li v-for="c in citys">
        <h3>Adı {{ c }}</h3>
      </li>
    </ul>

    -->

    <ul>
      <li v-for="c in numbers">
        <h6 v-on:click="addNumber">Sayı {{ c }}</h6>
      </li>
    </ul>

    <ul>
      <li v-for="c in numbers">
        <h6>Sayı {{ c }}</h6>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vue-index",
  props: {
    citys: {
      type: Array
    },
    numbers: {
      type: Array
    }
  },
  data() {
    return {
      names: [
        { name: "Erdem", age: 12, isShow: false },
        { name: "Ahmet", age: 12, isShow: true },
        { name: "Veli", age: 12, isShow: false },
        { name: "Mahmut", age: 12, isShow: false },
        { name: "Şakir", age: 12, isShow: true }
      ]
    };
  },
  methods: {
    reverse: function(n) {
      n.isShow = !n.isShow;
    },
    addNumber: function() {
      this.numbers.push(78);
    }
  }
};
</script>

<style>
#vue-index {
  background-color: yellow;
}
</style>