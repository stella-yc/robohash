import React from "react";
import ReactDOM from "react-dom";
import { Robohasher } from "./Robohasher";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Robohasher />, div);
  ReactDOM.unmountComponentAtNode(div);
});
