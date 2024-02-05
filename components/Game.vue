<template>
    <div class="board">
        <div class="game-container">
            <img src="/gameboard.png" height="500" width="450"/>
            <Coin />
        </div>
        <Dice />
    </div>
</template>
<script setup lang="ts">
const gameStore = game()
onMounted(() => {
  gameStore.start()
})
</script>
<style>
.board {
    position: relative;
}
.game-container {
    width: 450px;
    height: 500px;
    position: relative;
}

@keyframes rotateBorder {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>