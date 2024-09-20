import React, { useState } from "react";
import { PiBooks } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ExamPracticeApp");
  };

  const toggleMenu = () => {
    setIsOpen(true);
  };
  return (
    <div className={styles.header}>
      <PiBooks size={30} color="orange" onClick={handleClick} />
      <IoMdMenu size={30} color="orange" onClick={toggleMenu} />
      {isOpen ? <Menu setIsOpen={setIsOpen} isOpen={isOpen}></Menu> : null}
    </div>
  );
}
