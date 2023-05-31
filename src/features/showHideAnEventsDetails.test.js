import React, { useState } from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import Event from "../Event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("an event element is collapsed by default", ({ given, then }) => {
    let AppWrapper;

    given("the user should see a list of all upcoming events", () => {
      AppWrapper = mount(<App />);
    });

    then(
      'the user should NOT see the "more details" information of the events',
      () => {
        expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
      }
    );
  });

  test("user can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("the user should see a list of all upcoming events", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks on the “show details” of an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("the event is expanded and shows details", () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(1);
    });
  });

  test("user can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("specific event is being expanded with its details", () => {
      const mockEvent = mockData[0];
      AppWrapper = mount(<Event event={mockEvent} />);
      AppWrapper.update();
      AppWrapper.find(".details-button").simulate("click");
      expect(AppWrapper.find(".event-details")).toHaveLength(1);
    });

    when("the user clicks on the “hide details” button of the event", () => {
      AppWrapper.update();
      AppWrapper.find(".details-button").simulate("click");
    });

    then("the details of the event are hidden", () => {
      expect(AppWrapper.find(".event-details")).toHaveLength(0);
    });
  });
});
