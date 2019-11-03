import React, { Component } from "react";
import { connect } from "react-redux";
//import { set } from "mongoose";

import Favor from "./../Modals/Favor";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { favorModal: false };
    this.favorModalStateChange = this.favorModalStateChange.bind(this);
    this.renderFavorModal = this.renderFavorModal.bind(this);
  }

  favorModalStateChange() {
    return this.setState({
      favorModal: !this.state.favorModal
    });
  }

  renderFavorModal() {
    return (
      <div
        className="modal fade"
        id="myModal"
        aria-labelledby="myModal"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Favor</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Favor />
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.favorModalStateChange}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-secondary">
                Add Favor to Tab
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
            {console.log("Favor Modal State:", this.state.favorModal)}
            {this.renderFavorModal()}
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
