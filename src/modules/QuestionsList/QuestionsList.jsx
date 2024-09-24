import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import db from "../../db/db.json";
import styles from "./QuestionsList.module.css";

export default function QuestionsList() {
  const [checked, setIsChecked] = useState({});
  const { exam, year, type } = useParams();
  const examData = db.find((item) => item.exam === exam);
  const yearData = examData.data.find((item) => item.year === year);
  const questionsData = yearData.data.find((item) => item.type === type);
  const [animate, setAnimate] = useState(false);

  const handleNext = () => {
    const currentIndex = yearData.data.findIndex((item) => item.type === type);
    return currentIndex <= yearData.data.length
      ? yearData.data[currentIndex + 1].type
      : null;
  };

  const handleChange = (questionId, isCorrect, checked) => {
    setIsChecked((prevchecked) => {});
  };

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [exam, year, type]);

  return (
    <div className={styles.container}>
      <ul className={`${styles.list} ${animate ? styles.animate : ""}`}>
        {questionsData.data?.map((item, key) => {
          return (
            <li key={item.id} className={styles.listItem}>
              <h3 className={styles.question}>
                <span>{item.id}.</span> <span>{item.question}</span>
              </h3>
              <ol type="A">
                {item.answers?.map((answer, key) => {
                  return (
                    <li key={key}>
                      <div className={styles.questionData}>
                        <label className={styles.questionData}>
                          <input type="checkbox" className={styles.input} />
                          <p>{answer.answer}</p>
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ul>
      {yearData.data[yearData.data.length - 1].type !==
      yearData.data.find((data) => data.type === type).type ? (
        <div className={styles.buttonContainer}>
          <NavLink
            to={`/ExamPracticeApp/INM/2023-2024/${handleNext()}`}
            className={styles.button}
          >
            Next
          </NavLink>
        </div>
      ) : (
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Check!
          </button>
        </div>
      )}
    </div>
  );
}
