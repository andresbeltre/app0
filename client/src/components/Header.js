import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still Deciding...";
      case false:
        return "LOGGED IN";
      default:
        return "GET THE FUCK OUT OF MY FACE YOU ARE NOT PART OF THE VIP CLUB. stay logged out.";
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img
                src="/docs/4.0/assets/brand/bootstrap-solid.svg"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              />
              Bootstrap
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
