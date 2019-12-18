import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>

        <Link to="/">
          <Button color="primary">Go Home!</Button>
        </Link>
      </div>
    );
  }
}
