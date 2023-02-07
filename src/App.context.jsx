/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from "react";
import { Images } from "./assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
const totalCount = initialFishes.length;
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [answersLeft, setAnswersLeft] = useState(initialFishes);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const isGameOver = Boolean(!answersLeft.length);

  const removeCurrentFish = () => {
    setAnswersLeft(answersLeft.slice(1));
  };

  const testFishGuess = (guess) => {
    const isGuessCorrect = answersLeft[0].name === guess;
    if (isGuessCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    removeCurrentFish();
  };

  return (
    <AppContext.Provider
      value={{
        incorrectCount,
        correctCount,
        totalCount,
        answersLeft,
        isGameOver,
        testFishGuess,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return {
    incorrectCount: context.incorrectCount,
    correctCount: context.correctCount,
    totalCount: context.totalCount,
    answersLeft: context.answersLeft,
    isGameOver: context.isGameOver,
    testFishGuess: context.testFishGuess,
  };
};
