/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from "react";
import { Images } from "./assets/images";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
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

  const [answersLeft, setAnswersLeft] = useState(initialFishes);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [fishGuess, setFishGuess] = useState("");

  const totalCount = initialFishes.length;
  const isGameOver = Boolean(!answersLeft.length);

  const removeCurrentFish = () => {
    answersLeft.length > 1
      ? setAnswersLeft(answersLeft.slice(1))
      : setAnswersLeft([]);
  };

  const gradeGuess = (isGuessCorrect) => {
    isGuessCorrect
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
    removeCurrentFish();
  };

  const testFishGuess = () => {
    return fishGuess === answersLeft[0].name
      ? gradeGuess(true)
      : gradeGuess(false);
  };

  return (
    <AppContext.Provider
      value={{
        incorrectCount,
        correctCount,
        totalCount,
        answersLeft,
        isGameOver,
        fishGuess,
        setFishGuess,
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
    fishGuess: context.fishGuess,
    setFishGuess: context.setFishGuess,
    testFishGuess: context.testFishGuess,
  };
};
