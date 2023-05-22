import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  //The test function //

  //test('test description', () => {
  //  expect(someFunction()).toBe(somevalue);
  //});

  // test('render Event component with correct name', () => {
  //   expect(Event.find('.name').text()).toBe(Events in Berlin');
  // });
});
