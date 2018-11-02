import React, { PureComponent } from "react";

import { RobohashForm } from "../RobohashForm/RobohashForm";
import { RobotDisplay } from "../RobotDisplay/RobotDisplay";
import styles from "./Robohasher.module.css";

export class Robohasher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
    this.updateUserInput = this.updateUserInput.bind(this);
  }

  updateUserInput(userInput) {
    this.setState({ userInput });
  }

  render() {
    const { userInput } = this.state;
    return (
      <div className={styles.container}>
        <RobohashForm handleSubmit={this.updateUserInput} />
        <RobotDisplay
          userInput={userInput}
          updateRobotIsLoaded={this.updateRobotIsLoaded}
        />
      </div>
    );
  }
}
