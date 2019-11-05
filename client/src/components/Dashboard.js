import React, { Component } from "react";
import { connect } from "react-redux";

import Favor from "./../Modals/Favor";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { favorModalShow: false };
    this.favorModalStateChange = this.favorModalStateChange.bind(this);
  }

  favorModalStateChange() {
    return this.setState({
      favorModalShow: !this.state.favorModalShow
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-lg-12 text-center">
          <h1>Welcome, {this.props.user.firstName}!</h1>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
              onClick={this.favorModalStateChange}
            >
              Add Favor
            </button>
            <Favor toggleModal={this.favorModalStateChange} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ state, user }) {
  return { state, user };
}

export default connect(mapStateToProps)(Dashboard);
