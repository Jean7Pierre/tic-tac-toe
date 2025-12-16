import { useState } from 'react'
import './App.css'

function Square({ index, children, isSelected }) {
  const classSquare = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div className={classSquare}>
      {children}
    </div>
  )
}

const TURNS = {
  X: 'X',
  O: 'O'
}


export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <Square index={index} key={index}>
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
      </main>
    </>
  )
}