<template>
  <div id="my-slots">
      <h1> {{ tittle }} </h1>
      <slot name="AppSlotSpanForSlotVUE"></slot>
      <slot name="AppSlotParagrapForSlotVUE"></slot>
      <slot name="AppSlotHeaderForSlotVUE"></slot>
  </div>
</template>

<script>
export default {
    name: "my-slots",
    data(){
        return {
            tittle : "Slot",
        }
    }

}
</script>

<style>
#my-slots {
    background-color: dodgerblue;
    height: 250px;
}
</style>