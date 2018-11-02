import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { SubmitButton } from "../SubmitButton/SubmitButton";
import { TextInput } from "../TextInput/TextInput";
import styles from "./RobohashForm.module.css";

export class RobohashForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      typedValue: ""
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
    this.setState({ typedValue: "" });
  }

  render() {
    const { typedValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.roboform}>
        <TextInput
          placeholder="Enter any text!"
          onChange={this.handleInputChange}
          value={typedValue}
        />
        <SubmitButton />
      </form>
    );
  }
}

RobohashForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
