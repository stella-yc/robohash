import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class TextInput extends PureComponent {
  render() {
    const { handleInputChange, typedValue, placeholder } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={typedValue}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  handleInputChange: PropTypes.func,
  typedValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

TextInput.defaultProps = {
  handleInputChange: () => {},
  placeholder: ""
};
