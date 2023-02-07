import "./styles/game-board.css";
import React, { useState } from "react";
import { useAppContext } from "../App.context";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const { answersLeft, testFishGuess } = useAppContext();
  const nextFishToName = answersLeft[0];

  const [fishGuess, setFishGuess] = useState("");

  const onChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setFishGuess(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    testFishGuess(fishGuess);
    setFishGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishGuess}
          onChange={onChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
