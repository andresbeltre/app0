import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    return (
      <div className="col-md-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link
            className="navbar-brand"
            to={this.props.auth ? "/Dashboard" : "/"}
            data-toggle="tooltip"
            title="Dashboard"
          >
            <img
              src={process.env.PUBLIC_URL + "/clippy.jpeg"}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="app0"
            />
            app0
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            {this.props.auth ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Friends
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    HomeBase
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Feedback
                  </a>
                </li>
              </ul>
            )}
            <ul className="navbar-nav mr-only">
              <li className="nav-item">{this.renderContent()}</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
