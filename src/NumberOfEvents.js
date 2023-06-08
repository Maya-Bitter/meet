import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    query: this.props.numberOfEvents,
    errorMsg: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        errorMsg: "Please set number of events between 1 and 32!",
      });
    } else {
      this.setState({
        errorMsg: "",
      });
      this.setState({ query: value });
      this.props.updateEvents(null, value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        {this.state.ErrorAlert ? (
          <span id="errorMsg">{this.state.errorMsg}</span>
        ) : (
          ""
        )}
        <input
          id="number-of-events"
          type="number"
          className="NumberOfEvents"
          min={1}
          max={32}
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert className="errorMsg" text={this.state.errorMsg} />
      </div>
    );
  }
}

export default NumberOfEvents;
