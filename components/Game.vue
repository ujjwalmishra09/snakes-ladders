<template>
  <div class="board">
    <div class="game-container">
      <img id="img" src="/gameboard.png" height="480" width="450" @click="onImgClick" />
      <Coin v-show="gameStore.state.started" id="board-coin" />
    </div>
    <Tooltip v-if="tooltip.show" :left="tooltip.left" :top="tooltip.top" :text="tooltip.text"/>
    <GameStatus />
    <PlayerMove />
  </div>
</template>
<script setup lang="ts">
import identifyBox from '../utils/getBoxNo'
import numberTextMap from '../utils/numberTextMap'
let timer: any;
const tooltip = ref({
  show: false,
  left: 0,
  top: 0,
  text: ''
})
const gameStore = game()
const onImgClick = (e) => {
  const { row, column } = identifyBox(e)
  let boardIndex = 0
  if ( row % 2 === 0) {
    tooltip.value.left = 450 - ((9 - column) * 50) - 25
    boardIndex = ((row - 1) * 9) + (10 - column)
  } else {
    tooltip.value.left = ((column) * 50) - 25
    boardIndex = ((row -1) * 9) + column
  }

  tooltip.value.top = 480 - ((row) * 40)
  tooltip.value.show = true
  tooltip.value.text = numberTextMap[boardIndex - 1]
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    tooltip.value.show = false
  }, 2000)
}
</script>
<style>
.board {
  width: 800px;
  position: relative;
}

.game-container {
  max-width: 450px;
  max-height: 480px;
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