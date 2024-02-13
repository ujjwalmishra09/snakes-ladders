<template>
  <div class="scene" @click="gameStore.rollDice" >
    <div class="dice" v-if="gameStore.state.rolling" :class="{'rolling-dice-2': gameStore.state.rolling}">
      <div class="face front">1</div>
      <div class="face back">6</div>
      <div class="face right">4</div>
      <div class="face left">3</div>
      <div class="face top">5</div>
      <div class="face bottom">2</div>
    </div>
    <div class="dice" v-else>
      <div class="face front">{{ gameStore.state.diceValue }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const gameStore = game()
</script>
<style>

.scene {
    width: 30px;
    height: 30px;
    display: inline-block;
}

.dice {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
}

.face {
    position: absolute;
    width: 30px;
    height: 30px;
    background: white;
    border: 1px solid #333;
    line-height: 30px;
    text-align: center;
    font-size: 1em;
}

.front  { transform: rotateY(0deg) translateZ(15px); }
.back   { transform: rotateY(180deg) translateZ(15px); }
.right  { transform: rotateY(90deg) translateZ(15px); }
.left   { transform: rotateY(-90deg) translateZ(15px); }
.top    { transform: rotateX(90deg) translateZ(15px); }
.bottom { transform: rotateX(-90deg) translateZ(15px); }

@keyframes roll {
    from { transform: rotateX(0deg) rotateY(0deg); }
    to { transform: rotateX(360deg) rotateY(360deg); }
}

.rolling-dice-2 {
  animation: roll 3s linear infinite;
}
</style>