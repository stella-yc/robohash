import React from "react";
import PropTypes from "prop-types";

export const SubmitButton = ({ disabled }) => (
  <input type="submit" value="submit" disabled={disabled} />
);

SubmitButton.propTypes = {
  disabled: PropTypes.bool
};

SubmitButton.defaultProps = {
  disabled: false
};
