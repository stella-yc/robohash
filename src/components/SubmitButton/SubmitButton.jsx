import React from "react";
import PropTypes from "prop-types";

import styles from "./SubmitButton.module.css";

export const SubmitButton = ({ disabled }) => (
  <input
    className={styles.submitButton}
    type="submit"
    value="Make a Robot"
    disabled={disabled}
  />
);

SubmitButton.propTypes = {
  disabled: PropTypes.bool
};

SubmitButton.defaultProps = {
  disabled: false
};
