import React from "react";
import PropTypes from "prop-types";

import styles from "./RobotList.module.css";

export const RobotList = ({ robots }) => {
  const showList = robots && robots.length;
  const robotsToShow = robots.slice(0, -1);
  return (
    <div className={styles.robotList}>
      {showList
        ? robotsToShow.map(robot => (
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
