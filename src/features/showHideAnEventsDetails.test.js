import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from "enzyme";
import React from "react";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("an event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("the app is loaded", () => {
      AppWrapper = mount(<App />);
    });

    when(
      'the user should NOT see the "more details" information of the events',
      () => {
        AppWrapper.update();
        expect(AppWrapper.find(".Event")).toHaveLength(mockData.length);
      }
    );

    then("the event’s details should be collapsed by default", () => {
      expect(AppWrapper.find(".Event.collapsed")).toHaveLength(mockData.length);
    });
  });

  test("User can expand an event to see its details.", ({
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
      AppWrapper.find(".show-details").at(0).simulate("click");
    });

    then("the event is expanded and shows details", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".Event").at(0).find(".description")).toHaveLength(
        1
      );
    });
  });

  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given("specific event is being expanded with its details", () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.find(".show-details").at(0).simulate("click");
      //EventWrapper.state({ collapsed: false });
    });

    when("the user clicks on the “hide details” button of the event", () => {
      EventWrapper.find(".hide-details").at(0).simulate("click");
    });

    then("the details of the event are hidden", () => {
      expect(EventWrapper.find(".description")).toHaveLength(0);
      //expect(EventWrapper.state('collapsed')).toBe(true);
    });
  });
});
