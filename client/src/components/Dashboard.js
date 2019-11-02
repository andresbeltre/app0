import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard" className="row">
        <div className="col-md-4">
          <h1>Hello, World!</h1>
        </div>
        <div className="col-md-8">
          <h1>{this.props.user.firstName}</h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Dashboard);
