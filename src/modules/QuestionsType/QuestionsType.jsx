import React from "react";
import db from "../../db/db.json";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styles from "./QuestionsType.module.css";

export default function QuestionsType() {
  const { exam, year } = useParams();
  const examData = db.find((item) => item.exam === exam);
  const yearData = examData.data.find((item) => item.year === year);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <ul className={styles.list}>
        {yearData.data?.map((data, key) => {
          return (
            <li key={key} className={styles.listItem}>
              <NavLink
                to={data.type}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.isActive} ${styles.button}`
                    : `${styles.button}`
                }
              >
                {data.type}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <Outlet />
      </form>
    </div>
  );
}
