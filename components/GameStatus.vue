<template>
    <div class="game-status">
        <Dice />
        <button @click="gameStore.rollDice"> {{ !gameStore.state.started ? 'Start' : 'Roll Dice' }}</button>
        <span>Player 1</span>
        <Coin :style="{position: 'static', display: 'inline-block' }"/>
    </div>

</template>
<script setup lang="ts">
const gameStore = game()
</script>
<style>
.game-status {
    margin-top: 10px;
    border: dotted;
    border-color: black;
    display: flex;
    background: rgba(0, 128, 0, 0.3);
    width: 450px;
    align-items: center;
    justify-content: center;
}

.game-status > div {
  margin: 5px;
  text-align: center;
}

.game-status > button {
  margin: 5px;
  text-align: center;
}
</style>