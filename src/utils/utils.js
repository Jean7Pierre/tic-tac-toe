import { WINNER_COMBOS } from '../constants/constants.js'

export const checkWinner = (board) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] //nos devolvera la letra X u O, el ganador.
    }
  }
  return false
}

export const checkEndGame = (board) => {
  return board.every((cell) => cell !== null)
}