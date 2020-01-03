//This file is responsible for all the initial view layer

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchUser();
    await this.props.fetchFavors();
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

const mapStateToProps = state => {
  return {
    favors: state.favors,
    user: state.user
  };
};

// ANYWHERE THAT I PUT MAP STATE TO PROS I WILL HAVE ACCESS TO THE SPECIFIED STATE VALUES IN MY PROPS.
// THE APP COMPONENT HAS ACCESS TO THE FAVORS AND USER STATE IN THE PROPS BECAUSE IT HAS MAPSTATETOPROPS
// TO MAKE THIS WORK YOU NEED TO EXPORT YOUR COMPONENT IN THE CONNECT WRAPPER AS SEEN BELOW.

export default connect(mapStateToProps, actions)(App);
