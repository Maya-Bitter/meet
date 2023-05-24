import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
  let NumberofEventsWrapper;
  beforeAll(() => {
    NumberofEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("render textbox with number of events", () => {
    expect(NumberofEventsWrapper.find("#number-of-events")).toHaveLength(1);
  });

  test("render 32 events by default", () => {
    expect(NumberofEventsWrapper.state("query")).toBe(32);
  });

  test("change state when text input changes", () => {
    const eventObject = { target: { value: 12 } };
    NumberofEventsWrapper.find("#number-of-events").simulate(
      "change",
      eventObject
    );
    expect(NumberofEventsWrapper.state("query")).toBe(12);
  });

  test("number of events should be between 1 and 32", () => {
    const eventObject = { target: { value: 34 } };
    NumberofEventsWrapper.find("#number-of-events").simulate(
      "change",
      eventObject
    );
    expect(NumberofEventsWrapper.find("#errormsg").text()).toBe(
      "Please set number of events between 1 and 32!"
    );
  });
});
