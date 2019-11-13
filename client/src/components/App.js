//This file is responsible for all the initial view layer

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <BrowserRouter>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route
                exact
                path="/dashboard"
                component={Dashboard}
                props={this.props}
              />
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
