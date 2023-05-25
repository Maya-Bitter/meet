import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    query: 32,
    errorMsg: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        errorMsg: "Please set number of events between 1 and 32!",
      });
      return;
    }
    this.setState({ query: value });
    this.props.updateEvents(null, value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        {this.state.errorMsg ? (
          <span id="errormsg">{this.state.errorMsg}</span>
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
      </div>
    );
  }
}

export default NumberOfEvents;
