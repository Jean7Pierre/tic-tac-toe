import { useState } from 'react'
import './App.css'

function Square({ index, children }) {
  return (
    <div className='square'>
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
          <Square>X</Square>
          <Square>O</Square>
        </section>
      </main>
    </>
  )
}