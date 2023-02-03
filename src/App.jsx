import React from "react";
import "./App.css";
import { FinalScore } from "./Components/FinalScore";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { AppProvider, useAppContext } from "./App.context";
import "./Components/styles/final-score.css";

const GameDisplay = () => {
  const { isGameOver } = useAppContext();
  if (!isGameOver) return <GameBoard />;
  if (isGameOver) return <FinalScore />;
};

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header>
          <ScoreBoard />
          <GameDisplay />
        </header>
      </div>
    </AppProvider>
  );
}

export default App;
