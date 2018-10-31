import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./RobotDisplay.module.css";

export class RobotDisplay extends PureComponent {
  constructor() {
    super();
    this.state = {
      imageClass: "image",
      showRobot: false
    };
    this.image = React.createRef();
    this.startAnimation = this.startAnimation.bind(this);
    this.clearRobot = this.clearRobot.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { userInput } = this.props;
    if (prevProps.userInput !== userInput) {
      // setting state in componentDidUpdate is okay
      // if you do wrap it in a condition
      // https://reactjs.org/docs/react-component.html#componentdidupdate
      // eslint-disable-next-line
      this.setState({ imageClass: "image", showRobot: true });
    }
  }

  startAnimation() {
    this.setState({ imageClass: "image--after", showRobot: true });
    const { updateRobotIsLoaded } = this.props;
    updateRobotIsLoaded(true);
  }

  clearRobot() {
    this.setState({ showRobot: false });
    const { updateRobotIsLoaded } = this.props;
    updateRobotIsLoaded(false);
  }

  render() {
    const { userInput } = this.props;
    const { imageClass, showRobot } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.displayControls}>
          <h2 className={styles.userInput}>{showRobot && userInput}</h2>
          <button
            className={styles.clearRobot}
            type="button"
            onClick={this.clearRobot}
          >
            Clear Robot
          </button>
        </div>
        <div className={styles.robotContainer}>
          {userInput &&
            showRobot && (
              <div className={styles.lightbeam}>
                <img
                  ref={this.image}
                  className={styles[imageClass]}
                  src={`https://robohash.org/${userInput}`}
                  alt="custom-robot"
                  onLoad={this.startAnimation}
                />
              </div>
            )}
        </div>
      </div>
    );
  }
}

RobotDisplay.propTypes = {
  userInput: PropTypes.string,
  updateRobotIsLoaded: PropTypes.func.isRequired
};

RobotDisplay.defaultProps = {
  userInput: ""
};
