import React from "react";
import PropTypes from "prop-types";

export const SubmitButton = ({ disabled }) => (
  <input
    className="submit-button"
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
