import React, { PureComponent } from "react";

import { RobohashForm } from "../RobohashForm/RobohashForm";
import { RobotDisplay } from "../RobotDisplay/RobotDisplay";
import styles from "./Robohasher.module.css";

export class Robohasher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      isRobotLoaded: false
    };
    this.updateUserInput = this.updateUserInput.bind(this);
    this.updateRobotIsLoaded = this.updateRobotIsLoaded.bind(this);
  }

  updateUserInput(userInput) {
    this.setState({ userInput });
  }

  updateRobotIsLoaded(isRobotLoaded) {
    this.setState({ isRobotLoaded });
  }

  render() {
    const { userInput, isRobotLoaded } = this.state;
    return (
      <div className={styles.container}>
        <RobohashForm
          handleSubmit={this.updateUserInput}
          isRobotLoaded={isRobotLoaded}
        />
        <RobotDisplay
          userInput={userInput}
          updateRobotIsLoaded={this.updateRobotIsLoaded}
        />
      </div>
    );
  }
}
