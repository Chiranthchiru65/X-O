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
  return (
    <>
      <div className="container">
        <Square />
        <Square />
        <Square />

        <Square />
        <Square />
        <Square />

        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <div className="cell" onClick={handleClick}>
      {value}
    </div>
  );
}
