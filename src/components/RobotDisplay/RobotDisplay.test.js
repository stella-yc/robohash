import React from "react";
import ReactDOM from "react-dom";
import { RobotDisplay } from "./RobotDisplay";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RobotDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
