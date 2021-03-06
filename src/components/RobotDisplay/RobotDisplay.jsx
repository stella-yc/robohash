import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./RobotDisplay.module.css";
import { FlashingLight } from "../FlashingLight/FlashingLight";
import { LightBeam } from "../LightBeam/LightBeam";
import { RobotList } from "../RobotList/RobotList";

export class RobotDisplay extends PureComponent {
  constructor() {
    super();
    this.state = {
      imageClass: "image",
      renderRobot: false,
      robots: []
    };
    this.startAnimation = this.startAnimation.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { userInput } = this.props;
    if (prevProps.userInput !== userInput) {
      const callback = () => {
        this.setState({
          renderRobot: true
        });
      };
      // setting state in componentDidUpdate is okay
      // if you do wrap it in a condition
      // https://reactjs.org/docs/react-component.html#componentdidupdate
      // eslint-disable-next-line
      this.setState(
        state => ({
          imageClass: "robot--before-fade-in",
          renderRobot: false,
          robots: [...state.robots, userInput]
        }),
        callback
      );
    }
  }

  startAnimation() {
    this.setState({ imageClass: "robot--fade-in", renderRobot: true });
  }

  render() {
    const { userInput } = this.props;
    const { imageClass, renderRobot, robots } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.displayControls}>
          <FlashingLight />
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
                <LightBeam />
              </div>
            )}
        </div>
        <RobotList robots={robots} />
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
