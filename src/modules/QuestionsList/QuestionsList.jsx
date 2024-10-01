import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import db from "../../db/db.json";
import styles from "./QuestionsList.module.css";
import { useAnsweredQuestionsData } from "../../store/AnsweredQuestionsData";

export default function QuestionsList() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { handleChange, checkedAnswers, verifyAnswers, setCheckedAnswers } =
    useAnsweredQuestionsData();
  const { exam, year, type } = useParams();
  const ref = useRef(null);
  const alphabetArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const examData = db.find((item) => item.exam === exam);
  const yearData = examData.data.find((item) => item.year === year);
  const questionsData = yearData.data.find((item) => item.type === type);

  const handleNext = () => {
    const currentIndex = yearData.data.findIndex((item) => item.type === type);
    return currentIndex <= yearData.data.length
      ? yearData.data[currentIndex + 1].type
      : null;
  };

  const handleClick = () => {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleReset = () => {
    setCheckedAnswers({});
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    Object.keys(checkedAnswers).forEach((questionId) => {
      verifyAnswers(questionId, exam, year);
    });
    // console.log(
    //   Object.values(checkedAnswers).filter((item) => item.correct === true)
    //     .length
    // );
    // console.log(
    //   Object.values(checkedAnswers).filter((item) => item.correct === true)
    // );
    console.log(checkedAnswers);
  };

  const changeClassIfCorrect = (questionId, answerIndex) => {
    if (isSubmitted) {
      const question = questionsData.data.find(
        (item) => item.id === questionId
      );

      // Checking if the question was answered correctly and adding the correctAnswer class.
      if (checkedAnswers[questionId].correct === true) {
        if (checkedAnswers[questionId].answers[answerIndex]) {
          return `${styles.correctAnswer}`;
        }
      } else {
        // Checking which answers are correct and wrong and marking them accordingly when the question was answered incorrectly
        if (
          checkedAnswers[questionId].answers[answerIndex] &&
          checkedAnswers[questionId].answers[answerIndex].isCorrect === true
        ) {
          return `${styles.correctAnswer}`;
        } else if (
          question &&
          question.answers[answerIndex].isCorrect === true
        ) {
          return `${styles.correctAnswer}`;
        } else {
          return `${styles.wrongAnswer}`;
        }
      }
    }
  };

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [exam, year, type]);

  return (
    <div className={styles.container} ref={ref}>
      <form onSubmit={handleSubmit}>
        <ul className={`${styles.list} ${animate ? styles.animate : ""}`}>
          {questionsData.data?.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                <h3 className={styles.question}>
                  <span>{item.id}.</span> <span>{item.question}</span>
                </h3>
                <ul className={styles.dataList}>
                  {item.answers?.map((answer, key) => {
                    return (
                      <li key={key}>
                        <div className={styles.questionData}>
                          <label className={styles.questionData}>
                            <span>{alphabetArr[key]}.</span>
                            <input
                              type="checkbox"
                              className={styles.input}
                              onChange={(e) =>
                                handleChange(
                                  item.id,
                                  key,
                                  answer.isCorrect,
                                  e.target.checked
                                )
                              }
                              checked={
                                !!(
                                  checkedAnswers[item.id] &&
                                  checkedAnswers[item.id].answers[key]
                                )
                              }
                            />
                            <p
                              className={
                                isSubmitted
                                  ? changeClassIfCorrect(item.id, key)
                                  : null
                              }
                            >
                              {answer.answer}
                            </p>
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        {yearData.data[yearData.data.length - 1].type !==
        yearData.data.find((data) => data.type === type).type ? (
          <div className={styles.buttonContainer}>
            {isSubmitted ? (
              <div className={styles.groupContainer}>
                <p>
                  Raspunsuri corecte:{" "}
                  <span className={styles.groupContainerCount}>
                    {
                      Object.values(checkedAnswers).filter(
                        (item) => item.correct === true
                      ).length
                    }
                  </span>
                </p>
                <button
                  className={styles.button}
                  onClick={() => {
                    handleReset();
                  }}
                >
                  Reset
                </button>
              </div>
            ) : null}
            <NavLink
              onClick={handleClick}
              to={`/ExamPracticeApp/INM/2023-2024/${handleNext()}`}
              className={styles.button}
            >
              Next
            </NavLink>
          </div>
        ) : (
          <div className={styles.buttonContainer}>
            {Object.values(checkedAnswers).length < 100 ? (
              <p className={styles.warningMessage}>
                Trebuie sa raspunzi la toate intrebarile!
              </p>
            ) : null}
            {isSubmitted ? (
              <div className={styles.groupContainer}>
                <p>
                  Raspunsuri corecte:{" "}
                  <span className={styles.groupContainerCount}>
                    {
                      Object.values(checkedAnswers).filter(
                        (item) => item.correct === true
                      ).length
                    }
                  </span>
                </p>
                <button
                  className={styles.button}
                  onClick={() => {
                    handleReset();
                  }}
                >
                  Reset
                </button>
              </div>
            ) : null}
            <button
              type="submit"
              disabled={
                Object.values(checkedAnswers).length < 100 || isSubmitted
              }
              className={`${styles.button} ${
                Object.values(checkedAnswers).length < 100 || isSubmitted
                  ? styles.disabledButton
                  : ""
              }`}
            >
              Check!
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
