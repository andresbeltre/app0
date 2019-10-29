import React, { Component } from 'react';
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return(
      <div id="dashboard" className="col-md-12">
        <div className="row">
        <div className="col-md-2">
          Hello, world!
        </div>
        <div className="col-md-10 mainDashboardContent">
          <h1>{this.props.user.firstName}</h1>
        </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Dashboard);