import React from "react";

import styles from "./FlashingLight.module.css";

export const FlashingLight = ({ color, delay }) => {
  if (delay) {
    return <div className={styles["flashingLight--delay"]} />;
  }
  return <div className={styles.flashingLight} />;
};
