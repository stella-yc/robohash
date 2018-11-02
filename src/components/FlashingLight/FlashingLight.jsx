import React from "react";
import PropTypes from "prop-types";

import styles from "./FlashingLight.module.css";

export const FlashingLight = ({ delay }) => {
  if (delay) {
    return <div className={styles["flashingLight--delay"]} />;
  }
  return <div className={styles.flashingLight} />;
};

FlashingLight.propTypes = {
  delay: PropTypes.bool
};

FlashingLight.defaultProps = {
  delay: false
};
