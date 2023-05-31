import React from "react";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("when user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the app is loaded", () => {});

    let AppWrapper;

    when("the user hasn’t specified the number of events", () => {
      AppWrapper = mount(<App />);
    });

    then("list of 32 events will be shown", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event").length).toBeLessThanOrEqual(32);
    });
  });

  test("user can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("a list of 32 events has been served to the user", () => {
      AppWrapper = mount(<App />);
    });

    when("the user specifies the number of events to be loaded", () => {
      const numberOfEvents = { target: { value: 13 } };
      AppWrapper.find(".numberOfEvents").simulate("change", numberOfEvents);
    });

    then(
      "list with the specified number of events is served to the user",
      () => {
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        NumberOfEventsWrapper.setState({ numberOfEvents: 13 });
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(13);
      }
    );
  });
});
