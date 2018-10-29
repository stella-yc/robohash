import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class RobotDisplay extends PureComponent {
  render() {
    const { userInput } = this.props;
    if (!userInput) {
      return null;
    }
    return (
      <div>
        <h2>{userInput}</h2>
        <img src={`https://robohash.org/${userInput}`} alt="custom-robot" />
      </div>
    );
  }
}

RobotDisplay.propTypes = {
  userInput: PropTypes.string
};

RobotDisplay.defaultProps = {
  userInput: ""
};
