import React, { useState } from "react";
import db from "../../db/db.json";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";

export default function Menu({ setIsOpen, isOpen }) {
  const [toggleBarList, setToggleBarList] = useState(false);
  const [toggleINMList, setINMList] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const toggleMenu = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setAnimateOut(false);
      setIsOpen(false);
    }, 400);
  };
  const handleBarList = () => {
    setToggleBarList(!toggleBarList);
  };
  const handleToggleINMList = () => {
    setINMList(!toggleINMList);
  };

  return (
    <div
      className={`${styles.menuContainer} ${
        isOpen && !animateOut ? styles.animateIn : styles.animateOut
      }`}
    >
      <IoMdMenu
        size={30}
        color="orange"
        className={styles.menuButton}
        onClick={toggleMenu}
      />
      <div className={styles.menuGroup}>
        <GoTriangleDown
          color="orange"
          size={20}
          className={styles.dropDown}
          onClick={handleBarList}
        />
        <div className={styles.menuGroupLink}>
          <NavLink to="/ExamPracticeApp/INM" onClick={toggleMenu}>
            INM
          </NavLink>
        </div>
        <hr color="orange" width="100%"></hr>
        {toggleBarList ? (
          <ul className={styles.dropDownList}>
            {db[0].data?.map((item, key) => {
              return (
                <li key={key}>
                  <NavLink
                    to={`/ExamPracticeApp/INM/${item.year}`}
                    onClick={toggleMenu}
                  >
                    {item.year}
                  </NavLink>
                  <hr color="orange" width="100%"></hr>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      <div className={styles.menuGroup}>
        <GoTriangleDown
          color="orange"
          size={20}
          className={styles.dropDown}
          onClick={handleToggleINMList}
        />{" "}
        <div className={styles.menuGroupLink}>
          <NavLink to="/ExamPracticeApp/Barou" onClick={toggleMenu}>
            Barou
          </NavLink>
        </div>
        <hr color="orange" width="100%"></hr>
        {toggleINMList ? (
          <ul className={styles.dropDownList}>
            {db[1].data?.map((item, key) => {
              return (
                <li key={key}>
                  <NavLink
                    to={`/ExamPracticeApp/Barou/${item.year}`}
                    onClick={toggleMenu}
                  >
                    {item.year}
                  </NavLink>
                  <hr color="orange" width="60%"></hr>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      <div className={styles.menuGroup}>
        <NavLink to="/ExamPracticeApp/About" onClick={toggleMenu}>
          About
        </NavLink>
        <hr color="orange" width="100%"></hr>
      </div>
    </div>
  );
}
