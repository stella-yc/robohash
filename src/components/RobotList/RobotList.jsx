import React from "react";
import PropTypes from "prop-types";

import styles from "./RobotList.module.css";

export const RobotList = ({ robots }) => {
  const showList = robots && robots.length;
  return (
    <div className={styles.robotList}>
      {showList
        ? robots.map(robot => (
            <div>
              <img
                className={styles.robotImg}
                src={`https://robohash.org/${robot}`}
                alt="a robot"
              />
            </div>
          ))
        : null}
    </div>
  );
};

RobotList.propTypes = {
  robots: PropTypes.arrayOf(PropTypes.string)
};

RobotList.defaultProps = {
  robots: []
};
