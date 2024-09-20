import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../db/db.json";
import styles from "./QuestionsList.module.css";

export default function QuestionsList() {
  const { exam, year, type } = useParams();
  const examData = db.find((item) => item.exam === exam);
  const yearData = examData.data.find((item) => item.year === year);
  const questionsData = yearData.data.find((item) => item.type === type);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false); // Resetează animația
    const timer = setTimeout(() => setAnimate(true), 50); // Activează animația după un mic delay
    return () => clearTimeout(timer); // Curăță timeout-ul la demontare
  }, [exam, year, type]);

  return (
    <div className={styles.container}>
      <ul className={`${styles.list} ${animate ? styles.animate : ""}`}>
        {questionsData.data?.map((item, key) => {
          return (
            <li key={key} className={styles.listItem}>
              <h3 className={styles.question}>
                <span>{item.id}.</span> <span>{item.question}</span>
              </h3>
              <ol type="A">
                {item.answers?.map((answer, key) => {
                  return (
                    <li key={key}>
                      <div className={styles.questionData}>
                        <label>
                          <input type="checkbox" />
                        </label>
                        <p>{answer.answer}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
