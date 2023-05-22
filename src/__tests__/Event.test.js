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

  test("renders the componenet", () => {
    expect(EventWrapper).toBeDefined();
  });
});
