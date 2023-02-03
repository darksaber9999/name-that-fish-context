import "./styles/score-board.css";
import React from "react";
import { useAppContext } from "../App.context";

//  Where the score is presented
// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { incorrectCount, correctCount, answersLeft } = useAppContext();
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer.name} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
