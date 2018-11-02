import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./RobotDisplay.module.css";

export class RobotDisplay extends PureComponent {
  constructor() {
    super();
    this.state = {
      imageClass: "image",
      renderRobot: false
    };
    this.startAnimation = this.startAnimation.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { userInput } = this.props;
    if (prevProps.userInput !== userInput) {
      // setting state in componentDidUpdate is okay
      // if you do wrap it in a condition
      // https://reactjs.org/docs/react-component.html#componentdidupdate
      // eslint-disable-next-line
      this.setState(
        { imageClass: "robot--before-fade-in", renderRobot: false },
        () => {
          this.setState({
            renderRobot: true
          });
        }
      );
    }
  }

  startAnimation() {
    this.setState({ imageClass: "robot--fade-in", renderRobot: true });
  }

  render() {
    const { userInput } = this.props;
    const { imageClass, renderRobot } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.displayControls}>
          <h2 className={styles.userInput}>{renderRobot && userInput}</h2>
        </div>
        <div className={styles.robotContainer}>
          {userInput &&
            renderRobot && (
              <div className={styles[imageClass]}>
                <div className={styles.lightbeam} />
                <img
                  src={`https://robohash.org/${userInput}`}
                  alt="custom-robot"
                  onLoad={this.startAnimation}
                />
                <div className={styles.lightbeam} />
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
