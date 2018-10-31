import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./TextInput.module.css";

export class TextInput extends PureComponent {
  render() {
    const { onChange, value, placeholder, disabled } = this.props;
    return (
      <div>
        <input
          className={styles.textInput}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

TextInput.defaultProps = {
  onChange: () => {},
  placeholder: "",
  disabled: false
};
