import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <GameBoard />
    </>
  );
}

export default App;

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="container">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} />

        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />

        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <div className="cell" onClick={onSquareClick}>
      {value}
    </div>
  );
}
