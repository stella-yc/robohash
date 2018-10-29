import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { SubmitButton } from "../SubmitButton/SubmitButton";
import { TextInput } from "../TextInput/TextInput";

export class RobohashForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      typedValue: "",
      isSubmitting: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const typedValue = event.target.value;
    this.setState({ typedValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { typedValue } = this.state;
    const { handleSubmit } = this.props;
    handleSubmit(typedValue);
    this.setState({ typedValue: "", isSubmitting: true });
  }

  render() {
    const { typedValue, isSubmitting } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput
          placeholder="Enter any text!"
          onChange={this.handleInputChange}
          value={typedValue}
        />
        <SubmitButton disabled={isSubmitting} />
      </form>
    );
  }
}

RobohashForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
