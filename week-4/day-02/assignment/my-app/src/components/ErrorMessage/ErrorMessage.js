import React from "react";

import "./ErrorMessage.css";

export default class ErrorMessage extends React.Component {
  render() {
    return (
      <div className="error-message">
        <p>
          <strong>Woops something has gone wrong</strong>
          <br />
          <strong>
            Try refreshing, or check the REACT_APP_REDDIT_ACCESS_TOKEN in .env
          </strong>
          <br />
          If the API token has expired you may need to restart the development
          server after updating the .env file
        </p>
      </div>
    );
  }
}
