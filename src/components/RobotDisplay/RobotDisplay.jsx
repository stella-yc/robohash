import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./RobotDisplay.module.css";

export class RobotDisplay extends PureComponent {
  render() {
    const { userInput } = this.props;
    return (
      <div className={styles.container}>
        <h2 className={styles.userInput}>{userInput}</h2>
        <div className={styles.robotContainer}>
          {userInput && (
            <div>
              <img
                src={`https://robohash.org/${userInput}`}
                alt="custom-robot"
                className={styles.image}
              />
            </div>
          )}
        </div>
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
