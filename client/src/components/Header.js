import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still Deciding...";
      case false:
        return <a href="/auth/google/">Log In</a>;
      default:
        return <a href="/api/logout">Log Out</a>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="col-md-12">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              src={process.env.PUBLIC_URL + "/clippy.jpeg"}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Bootstrap
          </a>
          <span>{this.renderContent()}</span>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
