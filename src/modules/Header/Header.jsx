import React, { useEffect, useState } from "react";
import { PiBooks } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import styles from "./Header.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import db from "../../db/db.json";

export default function Header() {
  const [windowSize, setWindowSize] = useState(window.screen.width);
  const [isOpen, setIsOpen] = useState(false);
  const [toggleBarList, setToggleBarList] = useState(false);
  const [toggleINMList, setINMList] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ExamPracticeApp");
  };
  const handleResize = () => {
    setWindowSize(window.screen.width);
  };

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const handleBarList = () => {
    setToggleBarList(!toggleBarList);
  };
  const handleToggleINMList = () => {
    setINMList(!toggleINMList);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  return (
    <div className={styles.header}>
      <PiBooks
        className={styles.svg}
        size={windowSize <= 576 ? 30 : 80}
        color="orange"
        onClick={handleClick}
      />
      {windowSize <= 1199 ? (
        !isOpen ? (
          <IoMdMenu
            size={windowSize <= 576 ? 30 : 50}
            color="orange"
            onClick={toggleMenu}
          />
        ) : null
      ) : (
        <div className={styles.navContainer}>
          <div
            className={styles.menuGroup}
            onMouseEnter={handleToggleINMList}
            onMouseLeave={handleToggleINMList}
          >
            <div className={styles.menuGroupLink}>
              <NavLink
                to="/ExamPracticeApp/INM"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : `${styles.navLink}`
                }
              >
                INM
              </NavLink>
            </div>
            {toggleINMList ? (
              <ul className={styles.dropDownList}>
                {db[0].data?.map((item, key) => {
                  return (
                    <li key={key}>
                      <NavLink
                        to={`/ExamPracticeApp/INM/${item.year}`}
                        onClick={handleToggleINMList}
                        className={styles.dropDownListLink}
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
          <div
            className={styles.menuGroup}
            onMouseEnter={handleBarList}
            onMouseLeave={handleBarList}
          >
            <div className={styles.menuGroupLink}>
              <NavLink
                to="/ExamPracticeApp/Barou"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : `${styles.navLink}`
                }
              >
                Barou
              </NavLink>
            </div>
            {toggleBarList ? (
              <ul className={styles.dropDownList}>
                {db[1].data?.map((item, key) => {
                  return (
                    <li key={key}>
                      <NavLink
                        to={`/ExamPracticeApp/Barou/${item.year}`}
                        onClick={handleBarList}
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
            <NavLink
              to="/ExamPracticeApp/About"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.navLink}`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      )}
      {isOpen ? <Menu setIsOpen={setIsOpen} isOpen={isOpen}></Menu> : null}
    </div>
  );
}
