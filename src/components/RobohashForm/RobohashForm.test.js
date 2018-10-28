import React from "react";
import ReactDOM from "react-dom";
import { RobohashForm } from "./RobohashForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RobohashForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("updates state with entered text as user is typing", () => {});

it('when the "Submit" button is pressed, the user text is passed to the handler', () => {});
