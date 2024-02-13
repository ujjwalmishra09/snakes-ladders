import GameEngine from "~/utils/GameEngine";


export default defineStore("game", () => {
  let game = ref<any>(null);
  const initialState = () => {
    return {
      snakes: [
        [90, 1],
        [17, 2],
        [34, 3],
        [35, 3],
        [19, 18],
        [20, 17],
        [37, 36]
      ],
      ladders: [
        [10, 27],
        [11, 26],
        [13, 24],
        [23, 33],
        [22, 33],
        [21, 33],
        [28, 45],
        [29, 44],
        [31, 43],
        [32, 40],
        [41, 50],
        [46, 63],
        [49, 60],
        [53, 56],
        [57, 70],
        [58, 69],
        [59, 68],
        [64, 81],
        [77, 94],
        [79, 96],
        [82, 99],
        [88, 94],
        [89, 92],
        [93, 105],
        [95, 102]
      ],
      playersCount: 1,
      playerMoves: {
        1: [1],
      },
      rolling: false,
      playing: false,
      diceValue: 1,
      started: false,
      lastMove: null
    };
  };

  const state = ref(initialState());

  const start = () => {
    game.value = new GameEngine({
      size: 108,
      ladders: state.value.ladders,
      snakes: state.value.snakes,
      playersCount: state.value.playersCount,
    });
  };

  const play = (playerMoves?: any) => {
    if (game.value) game.value.play(playerMoves || state.value.playerMoves)
  }

  const reset = () => {
    if (game.value) game.value.reset()
  }

  const getCurrentCell = (playerNo: number) => {
    if (game.value) return game.value.players[playerNo].currentCell
  }


  const positionCoin = (currentCell: number) => {
    const columns = 9;
    const cellWidth = 450 / columns; // Width of each cell
    const cellHeight = 480 / 12; // Height of each cell

    const column = (currentCell - 1) % columns;
    const row = Math.floor((currentCell - 1) / columns);

    const coin = document.querySelector('#board-coin');
    if (coin?.style) {
        if ((row+1) % 2 === 0) {
            coin.style.left = (450 - ((column * cellWidth) + 40) )+ 'px';
        } else {
            coin.style.left = ((column * cellWidth) + 10)+ 'px';
        }
        coin.style.bottom = ((row * cellHeight) + 5) +  'px';
    }
}

const rollDice = async () => {
    const lastMove = {};
    if (state.value.rolling) return 
    if (!state.value.started) {
      start()
    }
    const randomNo = Math.floor(Math.random() * 6) + 1
    state.value.diceValue = randomNo;
    state.value.rolling = true;
    state.value.playing = true;
    setTimeout(() => {
      state.value.rolling = false
      setTimeout(() => {
        lastMove.lastPos = getCurrentCell(1);
        positionCoin(getCurrentCell(1) + randomNo)
        state.value.started = true;
        setTimeout(() => {
          play({ 1: [randomNo]})
          positionCoin(getCurrentCell(1))
          lastMove.currentPos = getCurrentCell(1)
          lastMove.isSnake = lastMove.currentPos < (lastMove.lastPos + randomNo)
          lastMove.isLadder = lastMove.currentPos > (lastMove.lastPos + randomNo)
          state.value.lastMove = lastMove
          state.value.playing = false;
        }, 1000)
      }, 500)
    }, 3000)
}


  return { state, start, reset, play, game, getCurrentCell, rollDice };
});

