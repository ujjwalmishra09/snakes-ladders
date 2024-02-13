<template>
    <div v-if="gameStore.state?.lastMove" class="game-status">
        <div>
            <span class="status-key">Last Position</span>
            <br />
            <span class="status-value">
                {{ lastPosText }}
                ({{ gameStore.state.lastMove?.lastPos }})
            </span>
        </div>
        <div>-></div>
        <template v-if="gameStore.state.lastMove?.isSnake">
            <div>Snake</div>
            <div>-></div>
        </template>
        <template v-if="gameStore.state.lastMove?.isLadder">
            <div>Ladder</div>
            <div>-></div>
        </template>
        <div>
            <span class="status-key">Current Position</span> 
            <br /> 
            <span class="status-value">
                {{ currentPosText }}
                ({{gameStore.state.lastMove?.currentPos }})
            </span>
        </div>
    </div>
</template>
<script setup>
import numberTextMap from '../utils/numberTextMap'
const gameStore = game()
const lastPosText = computed(() => {
    if (gameStore.state.lastMove?.lastPos === 0) return 'Start'
    else return numberTextMap[gameStore.state.lastMove?.lastPos - 1]
})
const currentPosText = computed(() => {
    return numberTextMap[gameStore.state.lastMove?.currentPos - 1]
})

</script>
<style>
.status-key {
    color: green;
}
</style>