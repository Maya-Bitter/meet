import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    NumberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.NumberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents =
        location === null || location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(
          0,
          eventCount || this.state.NumberOfEvents
        ),
        NumberOfEvents: eventCount || this.state.NumberOfEvents,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <h3>Number of events</h3>
        <NumberOfEvents
          numberOfEvents={this.state.NumberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
