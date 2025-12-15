import { useState } from 'react'
import './App.css'

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <div className='square' key={index}>
                  {index}
                </div>
              )
            })
          }
        </section>
      </main>
    </>
  )
}