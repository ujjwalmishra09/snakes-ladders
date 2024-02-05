<template>
    <div class="dice" @click="gameStore.rollDice" :class="{ 'rotating-border': gameStore.state.loading }">
    </div>
</template>
<script setup lang="ts">
const gameStore = game()
</script>
<style>
.dice {
    height: 30px;
    width: 30px;
    bottom: 16px;
    background-color: red;
    left: 20px;
    opacity: 0.8;
}
.rotating-border {
  animation: rotateBorder 3s linear infinite; /* Adjust the animation duration as needed */
}
</style>