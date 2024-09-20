import React from "react";
import styles from "./Main.module.css";
import MainButton from "./MainButton/MainButton";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.group}>
        <MainButton text={"Barou"} link={"Barou"} />
        <MainButton text={"INM"} link={"INM"} />
      </div>
    </div>
  );
}
