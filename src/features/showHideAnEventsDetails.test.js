import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("the app is loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the user should see a list of all upcoming events", () => {
      AppWrapper = mount(<App />);
    });

    then(
      "the user should not see the more details information of the events",
      () => {
        AppWrapper.update();
        expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
      }
    );
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user should see a list of all upcoming events", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks on the “show details“ of an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("the event is expanded and shows details", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .details")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;

    given("the user should see a list of all upcoming events", () => {
      AppWrapper = mount(<App />);
    });

    and("the user clicks on the “show details“ of an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    when("the user clicks on the “hide details“ button of the event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("the details of the event are hidden", () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });
});
