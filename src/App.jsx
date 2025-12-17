import { useBoard } from './customHooks/useBoard.js'
import Square from './components/Square.jsx'
import { TURNS } from './constants/constants.js'
import './App.css'

export default function App() {
  const { board, updateBoard, resetGame, turn, winner } = useBoard()

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