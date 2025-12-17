import { useState } from 'react'
import Square from './components/Square.jsx'
import { TURNS } from './constants/constants.js'
import { checkWinner, checkEndGame } from './utils/utils.js'
import './App.css'


export default function App() {
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

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reiniciar</button>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <Square index={index} key={index} updateBoard={updateBoard}>
                  {board[index]}
                </Square>
              )
            })
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>X</Square>
          <Square isSelected={turn === TURNS.O}>O</Square>
        </section>
        {
          winner !== null && (
            <section className='winner'>
              <div className="text">
                <h2>
                  {winner == false ? "Empate" : "Ganó"}
                </h2>

                <header className="win">
                  {winner ? <Square>{winner}</Square> : <Square>:)</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Volver a jugar</button>
                </footer>
              </div>
            </section>
          )
        }
      </main>
    </>
  )
}