import React from "react";
import "./App.css";
import { FinalScore } from "./Components/FinalScore";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { useAppContext } from "./App.context";
import "./Components/styles/final-score.css";

function App() {
  const { isGameOver } = useAppContext();
  return (
    <div className="App">
      <ScoreBoard />
      {!isGameOver && <GameBoard />}
      {isGameOver && <FinalScore />}
    </div>
  );
}

export default App;
