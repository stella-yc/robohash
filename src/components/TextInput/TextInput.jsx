import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./TextInput.module.css";

export class TextInput extends PureComponent {
  render() {
    const { onChange, value, placeholder } = this.props;
    return (
      <div>
        <input
          className={styles.textInput}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

TextInput.defaultProps = {
  onChange: () => {},
  placeholder: ""
};
