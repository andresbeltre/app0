import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

import Favor from "./Modals/Favor";
import { fetchFavors } from "../actions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { favorModalShow: false };
    this.favorModalStateChange = this.favorModalStateChange.bind(this);
    // unecessary: already called in the app component. this.props.fetchFavors();
  }

  componentDidMount() {}

  favorModalStateChange = () => {
    console.log("inside favorModalStateChange");
    return this.setState({
      favorModalShow: !this.state.favorModalShow
    });
  };

  render() {
    const { favor } = this.props;

    return (
      <div className="row">
        <div className="col-md-12 col-lg-12 text-center">
          {
            //TODO FIX in order to access the user we need to traverse the props and then the state
            //this might be related to the updated mapStateToProps function
          }
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
            {
              //console.log("Favor Modal State:", this.state.favorModalShow)
            }
            <Favor toggleModal={this.favorModalStateChange} />
          </div>
          <div>{JSON.stringify(this.props.favors)}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favors: state.favors,
    user: state.user
  };
}

export default connect(mapStateToProps)(Dashboard);
