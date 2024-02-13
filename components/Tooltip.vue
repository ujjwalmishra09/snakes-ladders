<template>
    <div class="tooltiptext" :style="{ left: left + 'px', top: top + 'px' }">{{ text }}</div>
</template>
<script setup>
const props = defineProps({
    left: {
        type: Number,
        default: 20
    },
    top: {
        type: Number,
        default: 50
    },
    text: {
        type: String,
        default: ''
    }
})

</script>
<style>
.board .tooltiptext {
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 100;
}

.board .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}
</style>