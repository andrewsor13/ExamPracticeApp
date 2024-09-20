import React from "react";
import db from "../../db/db.json";
import styles from "./QuestionYears.module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function QuestionYears() {
  const navigate = useNavigate();
  const { exam } = useParams();
  const data = db.find((item) => item.exam === exam);
  const handleClick = (year) => {
    navigate(`/Exam-practice-app/${exam}/${year}`);
  };
  return (
    <ul className={styles.list}>
      {data.data?.map((data, key) => {
        return (
          <li key={key}>
            <button
              className={styles.button}
              onClick={() => {
                handleClick(data.year);
              }}
            >
              {data.year}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
