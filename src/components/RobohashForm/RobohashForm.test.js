import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";

import { RobohashForm } from "./RobohashForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RobohashForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("updates state with entered text as user is typing", () => {
  const roboform = mount(<RobohashForm handleSubmit={() => ({})} />);

  roboform
    .find("input.text-input")
    .first()
    .simulate("change", { target: { value: "cats" } });

  expect(roboform.state("typedValue")).toEqual("cats");
});

it('when the "Submit" button is pressed, `handleSubmit` method is invoked', () => {
  const spy = jest.spyOn(RobohashForm.prototype, "handleSubmit");
  const roboform = mount(<RobohashForm handleSubmit={() => ({})} />);

  roboform
    .find("form")
    .first()
    .simulate("submit", { preventDefault: () => ({}) });

  expect(spy.mock.calls.length).toBe(1);

  spy.mockRestore();
});

describe("when `handleSubmit` is invoked,", () => {
  let handleSubmitSpy;
  let preventDefaultSpy;
  let roboform;

  beforeAll(() => {
    handleSubmitSpy = jest.fn();
    preventDefaultSpy = jest.fn();
    roboform = mount(<RobohashForm handleSubmit={handleSubmitSpy} />);

    roboform
      .find("input.text-input")
      .first()
      .simulate("change", { target: { value: "cats" } });

    const instance = roboform.instance();

    instance.handleSubmit({ preventDefault: preventDefaultSpy });
  });

  it("when `handleSubmit` is invoked, `setState` is invoked", () => {
    expect(roboform.state("typedValue")).toEqual("");
  });

  it("when `handleSubmit` is invoked, `this.props.handleSubmit` is invoked", () => {
    expect(handleSubmitSpy.mock.calls.length).toBe(1);
    expect(handleSubmitSpy.mock.calls[0][0]).toEqual("cats");
  });
});
