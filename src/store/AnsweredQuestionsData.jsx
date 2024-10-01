import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../db/db.json";

const AnsweredQuestionsContext = createContext();

export const AnsweredQuestionsProvider = ({ children }) => {
  const [checkedAnswers, setCheckedAnswers] = useState({});
  const handleChange = (questionId, answerIndex, isCorrect, checked) => {
    setCheckedAnswers((prevCheckedAnswers) => {
      let newCheckedAnswers = { ...prevCheckedAnswers };

      if (!newCheckedAnswers[questionId]) {
        newCheckedAnswers[questionId] = {
          answers: {},
          correct: false,
        };
      }

      if (checked) {
        newCheckedAnswers[questionId].answers[answerIndex] = {
          questionId,
          answerIndex,
          isCorrect,
        };
      } else {
        if (newCheckedAnswers[questionId].answers) {
          delete newCheckedAnswers[questionId].answers[answerIndex];
        }
        if (Object.keys(newCheckedAnswers[questionId].answers).length === 0) {
          delete newCheckedAnswers[questionId];
        }
      }

      return newCheckedAnswers;
    });
  };

  const verifyAnswers = (questionId, exam, year) => {
    const examData = db.find((item) => item.exam === exam);
    const yearData = examData.data.find((item) => item.year === year);
    const questionsData = yearData.data.find((item) => {
      const questionsList = item.data;
      return questionsList.find((question) => question.id === questionId);
    });
    const question = questionsData.data.find((item) => item.id === questionId);
    if (question) {
      const answers = question.answers;
      const totalCorrectAnswers = answers.filter(
        (item) => item.isCorrect === true
      ).length;

      if (checkedAnswers[questionId]) {
        const correctAnswersCount = Object.values(
          checkedAnswers[questionId].answers
        ).filter((item) => item.isCorrect === true).length;
        if (
          totalCorrectAnswers ===
            Object.values(checkedAnswers[questionId].answers).length &&
          correctAnswersCount === totalCorrectAnswers
        ) {
          checkedAnswers[questionId].correct = true;
        } else {
          checkedAnswers[questionId].correct = false;
        }
      }
    }
  };

  const contextValue = {
    checkedAnswers,
    verifyAnswers,
    handleChange,
    setCheckedAnswers,
  };

  useEffect(() => {
    console.log(checkedAnswers);
  }, [checkedAnswers]);

  return (
    <AnsweredQuestionsContext.Provider value={contextValue}>
      {children}
    </AnsweredQuestionsContext.Provider>
  );
};

export const useAnsweredQuestionsData = () => {
  const context = useContext(AnsweredQuestionsContext);
  if (!context) {
    throw new Error(
      "useAnsweredQuestionsData must be used inside of an AnsweredQuestionsProvider"
    );
  }
  return context;
};
