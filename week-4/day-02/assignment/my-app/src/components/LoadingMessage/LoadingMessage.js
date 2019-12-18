import React, { Component } from "react";

import "./LoadingMessage.css";

export default class LoadingMessage extends Component {
  render() {
    return (
      <div className="loading-message">
        <strong>Loading ...</strong>
        <br />
        <strong>please standby</strong>
      </div>
    );
  }
}
