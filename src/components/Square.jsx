export default function Square({ index, children, isSelected, updateBoard }) {
  const classSquare = `square ${isSelected ? 'is-selected' : ''}`

  const handleBoard = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleBoard} className={classSquare}>
      {children}
    </div>
  )
}