import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

// Mock the data for the events //

describe("<Event /> component", () => {
  let EventWrapper;
  const event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  // tests to verify whether all the necessary elements have been rendered

  test("renders the componenet", () => {
    expect(EventWrapper).toBeDefined();
  });

  test("summary is rendered correctly", () => {
    const summary = EventWrapper.find("h2.summary");
    expect(summary).toHaveLength(1);
    expect(summary.text()).toBe(event.summary);
  });

  test("event start time is rendered correctly", () => {
    const eventStart = EventWrapper.find("p.event-start");
    expect(eventStart).toHaveLength(1);
    expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
  });

  test("renders location details", () => {
    const eventLocation = EventWrapper.find("p.event-location");
    expect(eventLocation).toHaveLength(1);
    expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
  });

  test("renders collapsed by default", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("the collapsed view is rendered correctly", () => {
    expect(EventWrapper.find("h3.about")).toHaveLength(0);
    expect(EventWrapper.find("a.link")).toHaveLength(0);
    expect(EventWrapper.find("p.description")).toHaveLength(0);
  });

  test("when details collapsed - renders button show details", () => {
    const detailsButton = EventWrapper.find("button.details-button");
    expect(detailsButton).toHaveLength(1);
    expect(detailsButton.text()).toBe("show details");
  });

  // test cases to check if extra info is shown when a user clicks on a “Details” button & "hide details" button.

  test("when clicking the show details button - expand details", () => {
    const detailsButton = EventWrapper.find("button.details-button");
    expect(detailsButton.text()).toBe("show details");
    expect(EventWrapper.find("h2.about")).toHaveLength(0);
    expect(EventWrapper.find("a.link")).toHaveLength(0);
    expect(EventWrapper.find("p.description")).toHaveLength(0);
    detailsButton.simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("when clicking the hide details button - collapse details", () => {
    const detailsButton = EventWrapper.find("button.details-button");
    expect(detailsButton.text()).toBe("hide details");
    detailsButton.simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
