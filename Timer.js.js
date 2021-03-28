import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: props.initial,
      interval: null,
    };
  }
  componentDidMount() {
    const ID = setInterval(() => {
      this.setState({
        timer: Math.max(0, this.state.timer - 1),
      });
    }, 1000);
    this.setState({
      interval: ID,
    });
  }

  stopTimer = () => {
    clearInterval(this.state.interval);
  };

  render() {
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <div className="timer-value" data-testid="timer-value">
          {this.state.timer}
        </div>
        <button
          className="large"
          data-testid="stop-button"
          onClick={this.stopTimer}
        >
          Stop Timer
        </button>
      </div>
    );
  }
}
