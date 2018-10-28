import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

export class TextInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      typedValue: ""
      //   isSubmitting: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const typedValue = event.target.value;
    this.setState({ typedValue });
  }

  render() {
    const { typedValue } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Enter any text!"
          onChange={this.handleInputChange}
          value={typedValue}
        />
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    );
  }
}
