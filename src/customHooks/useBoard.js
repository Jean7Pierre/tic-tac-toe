import { useState } from "react"
import { checkEndGame, checkWinner } from "../utils/utils.js"
import { TURNS } from "../constants/constants.js"

export function useBoard() {
  const [board, setBoard] = useState(() => {
    const storedBoard = JSON.parse(localStorage.getItem('board')) || Array(9).fill(null)
    return storedBoard
  })
  const [turn, setTurn] = useState(() => {
    const storedTurn = localStorage.getItem('turn') || TURNS.X
    return storedTurn
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (winner || board[index]) return
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar el turno en el local storage
    localStorage.setItem('turn', newTurn)
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //agregando persistencia en caso de reinicio inesperado del juego
    localStorage.setItem('board', JSON.stringify(newBoard))
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return { board, updateBoard, resetGame, turn, winner }
}