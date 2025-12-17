import Square from './Square.jsx'

export default function ModalWinner({ winner, resetGame }) {
  if (winner == null) return
  const text = winner == false ? "Empate" : "Ganó"
  const header = winner ? <Square>{winner}</Square> : <Square>:)</Square>

  return (
    <section className='winner'>
      <div className="text">
        <h2>{text}</h2>

        <header className="win">{header}</header>

        <footer>
          <button onClick={resetGame}>Volver a jugar</button>
        </footer>
      </div>
    </section>
  )
}