import React, { Component } from 'react';
import { connect } from "react-redux";

class Dashboard extends Component {
    render() {
        return(
          <div id="dashboard" className="container" width="80%">
            <div className="col-md-12">
              <div className="dashboardBox rounded border border-primary">
                Hello, world!
              </div>
            </div>
          </div>
        );
    }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);