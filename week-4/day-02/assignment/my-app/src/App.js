import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import logo from "./logo.svg";
import "./App.css";
import RedditHomePage from "./views/RedditHomePage/RedditHomePage";
import RedditPostPage from "./views/RedditPostPage/RedditPostPage";
import PageNotFound from "./views/PageNotFound/PageNotFound";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Reddit Clone</h1>
          <span style={{ color: "white" }}>A-bhi Reddit Clone Challange</span>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={RedditHomePage} />
            <Route path="/post/:postid" component={RedditPostPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
