import React from "react";
import styles from "./MainButton.module.css";
import { useNavigate } from "react-router-dom";

export default function MainButton({ text, link }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Exam-practice-app/${link}`);
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}
