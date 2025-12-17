import Square from "./Square.jsx"
export default function Board({ board, updateBoard }) {
  return (
    <>
      {
        board.map((_, index) => {
          return (
            <Square index={index} key={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          )
        })
      }
    </>
  )
}