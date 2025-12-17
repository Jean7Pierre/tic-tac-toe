import { useBoard } from './customHooks/useBoard.js'
import Square from './components/Square.jsx'
import { TURNS } from './constants/constants.js'
import './App.css'
import ModalWinner from './components/ModalWinner.jsx'
import Board from './components/Board.jsx'

export default function App() {
  const { board, updateBoard, resetGame, turn, winner } = useBoard()

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reiniciar</button>
        <section className="game">
          <Board board={board} updateBoard={updateBoard} />
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>X</Square>
          <Square isSelected={turn === TURNS.O}>O</Square>
        </section>
        <ModalWinner winner={winner} resetGame={resetGame} />
      </main>
    </>
  )
}