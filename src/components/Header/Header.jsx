import React from "react";
import styles from "./Header.module.css";

export const Header = () => (
  <header>
    <h1 className={styles.title}>Build-a-Robot Workshop</h1>
    <h3 className={styles.author}>By Stella Chung</h3>
  </header>
);
